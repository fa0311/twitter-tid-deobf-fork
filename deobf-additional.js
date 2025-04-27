const fs = require("fs");
const babel = require("@babel/core");
const t = require("@babel/types");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const { readFileSync } = require("fs");

let beautify_opts = {
  comments: true,
  minified: false,
  concise: false,
};
const [_, __, input, output] = process.argv;
const script = readFileSync(input, "utf-8");
const AST = parser.parse(script, {});

const inlineDestructuredVariables = {
  VariableDeclaration(path) {
    const { node, scope } = path;

    node.declarations.forEach((declarator) => {
      const { id, init } = declarator;

      // Handle array destructuring
      if (t.isArrayPattern(id) && t.isArrayExpression(init)) {
        const elementsLeft = id.elements;
        const elementsRight = init.elements;

        // Ensure both sides have the same number of elements
        if (elementsLeft.length !== elementsRight.length) return;

        elementsLeft.forEach((leftElem, index) => {
          const rightElem = elementsRight[index];
          if (!leftElem || !rightElem) return;

          if (t.isIdentifier(leftElem)) {
            const varName = leftElem.name;
            const binding = scope.getBinding(varName);

            // Ensure the variable is not reassigned
            if (binding && binding.constant) {
              // Replace all references
              binding.referencePaths.forEach((refPath) => {
                // Resolve nested identifiers recursively
                replaceWithResolvedValue(refPath, rightElem, scope);
              });
              // Optionally remove the declarator
              // binding.path.remove();
            }
          }
        });
      }

      // Handle object destructuring if needed
      // (Similar logic can be applied here if your code contains object destructuring)
    });

    // Optionally remove the entire declaration if all variables have been inlined
    if (node.declarations.every((decl) => !scope.getBinding(decl.id.name))) {
      path.remove();
    }
  },
};

// Helper function to resolve nested identifiers and member expressions
function replaceWithResolvedValue(refPath, valueNode, scope) {
  if (t.isIdentifier(valueNode)) {
    const binding = scope.getBinding(valueNode.name);

    if (binding && binding.constant && binding.path.node.init) {
      // Recursively replace with the actual value
      replaceWithResolvedValue(refPath, binding.path.node.init, scope);
    } else {
      refPath.replaceWith(valueNode);
    }
  } else if (t.isMemberExpression(valueNode)) {
    // Resolve the object and property if possible
    const objectNode = valueNode.object;
    const propertyNode = valueNode.property;

    let resolvedObjectNode = objectNode;
    if (t.isIdentifier(objectNode)) {
      const objectBinding = scope.getBinding(objectNode.name);
      if (
        objectBinding &&
        objectBinding.constant &&
        objectBinding.path.node.init
      ) {
        resolvedObjectNode = objectBinding.path.node.init;
      }
    }

    refPath.replaceWith(
      t.memberExpression(resolvedObjectNode, propertyNode, valueNode.computed)
    );
  } else {
    refPath.replaceWith(valueNode);
  }
}

const evaluateMemberExpressions = {
  MemberExpression(path) {
    const { node } = path;

    if (t.isIdentifier(node.object) && t.isStringLiteral(node.property)) {
      const objectName = node.object.name;
      const propertyName = node.property.value;
      if (objectName === "window") {
        path.replaceWithSourceString(propertyName);
      }
    }
  },
};

const evaluateCallExpressions = {
  MemberExpression(path) {
    const { node } = path;
    if (t.isIdentifier(node.object) && t.isStringLiteral(node.property)) {
      const objectName = node.object.name;
      const propertyName = node.property.value;
      const validObjects = [
        "document",
        "crypto",
        "Array",
        "Uint8Array",
        "TextEncoder",
        "RTCPeerConnection",
        "Promise",
        "Math",
        "String",
      ];
      if (validObjects.includes(objectName)) {
        path.replaceWithSourceString(`${objectName}.${propertyName}`);
      }
    }
  },
};

const deadCodeElimination = {
  ReturnStatement(path) {
    let currentPath = path;
    do {
      const siblings = currentPath.getAllNextSiblings();
      siblings.forEach((sibling) => sibling.remove());
      currentPath = currentPath.parentPath;
    } while (currentPath && t.isBlockStatement(currentPath.node));
  },
};

const inlineArrayDestructuring = {
  VariableDeclarator(path) {
    const node = path.node;
    if (t.isArrayExpression(node.init) && t.isArrayPattern(node.id)) {
      const elements = node.init.elements;
      const names = node.id.elements;
      const newDeclarations = [];

      elements.forEach((element, index) => {
        const name = names[index];
        if (name && element) {
          newDeclarations.push(
            t.variableDeclarator(t.identifier(name.name), element)
          );
        }
      });
      if (newDeclarations.length > 0) {
        path.replaceWithMultiple(newDeclarations);
      }
    }
  },
};

const inlineObjectDestructuring = {
  VariableDeclaration(path) {
    const node = path.node;
    if (node.declarations.length > 1) {
      const newDeclarations = node.declarations.map((declarator) =>
        t.variableDeclaration(node.kind, [declarator])
      );
      path.replaceWithMultiple(newDeclarations);
    }
  },
};

const removeUnusedVariables = {
  Program(path) {
    path.traverse({
      VariableDeclarator(variablePath) {
        const binding = variablePath.scope.getBinding(
          variablePath.node.id.name
        );
        if (binding && !binding.referenced) {
          variablePath.remove();
        }
      },
    });
  },
};

traverse(AST, inlineDestructuredVariables);
traverse(AST, evaluateMemberExpressions);
traverse(AST, evaluateCallExpressions);
traverse(AST, deadCodeElimination);
traverse(AST, inlineArrayDestructuring);
traverse(AST, inlineObjectDestructuring);
traverse(AST, removeUnusedVariables);

const final_code = generate(AST, beautify_opts).code;

babel.transform(
  final_code,
  {
    plugins: [
      "babel-plugin-minify-constant-folding",
      "babel-plugin-minify-dead-code-elimination",
      "babel-plugin-transform-inline-consecutive-adds",
    ],
  },
  function (err, result) {
    if (err) {
      console.error(err);
    } else {
      const transformedCode = result.code;
      fs.writeFileSync(output, transformedCode);
    }
  }
);
