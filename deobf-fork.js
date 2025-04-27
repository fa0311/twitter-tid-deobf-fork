const fs = require("fs");
const t = require("@babel/types");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const vm = require("vm");
const { readFileSync, writeFile, writeFileSync } = require("fs");
const { exit } = require("process");
var output = "";

let beautify_opts = {
  comments: true,
  minified: false,
  concise: false,
};
const [_, __, inputPath, outputPath] = process.argv;
const script = readFileSync(inputPath, "utf-8");

const AST = parser.parse(script, {});

var decryptFuncCtx = vm.createContext();
var decryptCode = "";
var decryptFuncName = "";

const constantReplacer = {
  VariableDeclarator(path) {
    const { node } = path;
    if (
      !node.id ||
      !node.init ||
      (node.init.type != "StringLiteral" &&
        node.init.type != "NumericLiteral") ||
      node.id.type != "Identifier"
    ) {
      return;
    }
    if (
      (node.init.type == "NumericLiteral" && node.init.value == 0) ||
      (node.init.type == "StringLiteral" && node.init.value == "")
    ) {
      return;
    }
    let binding = path.scope.getBinding(node.id.name);
    if (!binding) {
      return;
    }
    for (var i = 0; i < binding.referencePaths.length; i++) {
      binding.referencePaths[i].replaceWith(node.init);
    }
    path.remove();
  },
};

const replaceObjSimple = {
  VariableDeclarator(path) {
    const { node } = path;
    if (
      !node.id ||
      !node.init ||
      node.init.type != "ObjectExpression" ||
      node.id.type != "Identifier" ||
      node.init.properties.length < 1
    ) {
      return;
    }
    var valid = true;
    var map = {};
    for (var i = 0; i < node.init.properties.length; i++) {
      var prop = node.init.properties[i];
      if (
        !prop.key ||
        !prop.value ||
        prop.key.type != "Identifier" ||
        (prop.value.type != "NumericLiteral" &&
          prop.value.type != "StringLiteral")
      ) {
        valid = false;
        break;
      }
      map[prop.key.name] = prop.value;
    }
    if (!valid) {
      return;
    }
    path.scope.crawl();
    let binding = path.scope.getBinding(node.id.name);
    if (!binding) {
      return;
    }
    for (var i = 0; i < binding.referencePaths.length; i++) {
      let refPath = binding.referencePaths[i].parentPath;
      if (refPath.node.type != "MemberExpression" || !refPath.node.property) {
        continue;
      }
      let key;
      if (refPath.node.property.type == "Identifier") {
        key = refPath.node.property.name;
      } else {
        key = refPath.node.property.value;
      }
      refPath.replaceWith(map[key]);
    }
    path.remove();
  },
};

const replaceExprStmts = {
  MemberExpression(path) {
    const { node } = path;
    if (
      !node.property ||
      node.property.type != "SequenceExpression" ||
      !node.property.expressions ||
      node.property.expressions.length < 3
    ) {
      return;
    }
    var callExprIndex = node.property.expressions.length - 1;
    if (node.property.expressions[callExprIndex].type != "CallExpression") {
      return;
    }
    var values = [];
    var order = [];
    for (var i = 0; i < node.property.expressions.length; i++) {
      var expr = node.property.expressions[i];
      if (expr.type != "AssignmentExpression" || !expr.right || !expr.left) {
        continue;
      }
      values.push(generate(expr.right).code);
      order.push(expr.left.name);
    }
    let newArgs = [];
    for (
      var i = 0;
      i < node.property.expressions[callExprIndex].arguments.length;
      i++
    ) {
      let arg = node.property.expressions[callExprIndex].arguments[i];
      let str = generate(arg).code;
      if (str.match(/[A-z]/g) == null) {
        newArgs.push(arg);
        continue;
      }
      let key = str.match(/[A-z]/g)[0];
      let index = order.indexOf(key);
      str = str.replace(key, values[index]);
      if (
        str.match(/[0-9]/g) != null &&
        str.match(/[0-9]/g).length > 1 &&
        !str.match(/[A-z"]/g)
      ) {
        newArgs.push(t.numericLiteral(eval(str)));
        continue;
      }
      str = str.slice(1);
      str = str.slice(0, -1);
      newArgs.push(t.stringLiteral(str));
    }
    path.replaceWith(
      t.memberExpression(
        node.object,
        t.callExpression(
          node.property.expressions[callExprIndex].callee,
          newArgs
        ),
        true
      )
    );
  },
  // ! same thing except ExpressionStatement, SequenceExpression
  // ! example: (a = "7d]D", k = -497, m = -404, C = -368, uo(k - -1644, a - 298, a, m - 199, C - 208))
  SequenceExpression(path) {
    const { node } = path;
    if (!node.expressions || node.expressions.length < 3) {
      return;
    }
    var callExprIndex = node.expressions.length - 1;
    if (node.expressions[callExprIndex].type != "CallExpression") {
      return;
    }
    var values = [];
    var order = [];
    for (var i = 0; i < node.expressions.length; i++) {
      var expr = node.expressions[i];
      if (expr.type != "AssignmentExpression" || !expr.right || !expr.left) {
        continue;
      }
      values.push(generate(expr.right).code);
      order.push(expr.left.name);
    }
    let newArgs = [];
    for (var i = 0; i < node.expressions[callExprIndex].arguments.length; i++) {
      let arg = node.expressions[callExprIndex].arguments[i];
      let str = generate(arg).code;
      if (str.match(/[A-z]/g) == null) {
        newArgs.push(arg);
        continue;
      }
      let key = str.match(/[A-z]/g)[0];
      let index = order.indexOf(key);
      str = str.replace(key, values[index]);
      if (
        str.match(/[0-9]/g) != null &&
        str.match(/[0-9]/g).length > 1 &&
        !str.match(/[A-z"]/g)
      ) {
        newArgs.push(t.numericLiteral(eval(str)));
        continue;
      }
      str = str.slice(1);
      str = str.slice(0, -1);
      newArgs.push(t.stringLiteral(str));
    }
    path.replaceWith(
      t.callExpression(node.expressions[callExprIndex].callee, newArgs)
    );
  },
};

const replaceWeirdProxyCall = {
  MemberExpression(path) {
    const { node } = path;
    if (
      !node.object ||
      node.object.type != "Identifier" ||
      !node.property ||
      node.property.type != "CallExpression"
    ) {
      return;
    }
    if (
      !node.property.callee ||
      node.property.callee.type != "FunctionExpression"
    ) {
      return;
    }
    let values = [
      generate(node.property.arguments[0]).code,
      generate(node.property.arguments[1]).code,
      generate(node.property.arguments[2]).code,
      generate(node.property.arguments[3]).code,
      generate(node.property.arguments[4]).code,
    ];
    let order = [
      node.property.callee.params[0].name,
      node.property.callee.params[1].name,
      node.property.callee.params[2].name,
      node.property.callee.params[3].name,
      node.property.callee.params[4].name,
    ];
    let newArgs = [];
    for (
      var i = 0;
      i < node.property.callee.body.body[0].argument.arguments.length;
      i++
    ) {
      let arg = node.property.callee.body.body[0].argument.arguments[i];
      let str = generate(arg).code;
      if (str.match(/[A-z]/g) == null) {
        newArgs.push(arg);
        continue;
      }
      let key = str.match(/[A-z]/g)[0];
      let index = order.indexOf(key);
      str = str.replace(key, values[index]);
      if (
        str.match(/[0-9]/g) != null &&
        str.match(/[0-9]/g).length > 1 &&
        !str.match(/[A-z"]/g)
      ) {
        newArgs.push(t.numericLiteral(eval(str)));
        continue;
      }
      str = str.slice(1);
      str = str.slice(0, -1);
      newArgs.push(t.stringLiteral(str));
    }
    path.replaceWith(
      t.memberExpression(
        node.object,
        t.callExpression(
          node.property.callee.body.body[0].argument.callee,
          newArgs
        ),
        true
      )
    );
  },
};

const getStringDeobfFuncs = {
  ExpressionStatement(path) {
    const { node } = path;
    if (
      !node.expression ||
      node.expression.operator != "!" ||
      !node.expression.prefix ||
      !node.expression.argument ||
      node.expression.argument.type != "CallExpression"
    ) {
      return;
    }
    // ! get array func
    let binding = path.scope.getBinding(
      node.expression.argument.arguments[0].name
    );
    if (!binding) {
      return;
    }
    decryptCode += generate(binding.path.node).code + "\n";
    // ! get decrypt func
    var bodyIndex = 0;
    for (var i = 0; i < node.expression.argument.callee.body.body.length; i++) {
      if (
        node.expression.argument.callee.body.body[i].type ==
        "FunctionDeclaration"
      ) {
        bodyIndex = i;
        break;
      }
    }
    decryptFuncName =
      node.expression.argument.callee.body.body[bodyIndex].body.body[0].argument
        .callee.name;
    path.scope.crawl();
    let binding1 = path.scope.getBinding(decryptFuncName);
    if (!binding1) {
      return;
    }
    decryptCode += generate(binding1.path.node).code + "\n";
    decryptCode += generate(node).code + "\n";
    binding1.path.remove();
    binding.path.remove();
    path.remove();
    path.stop();
  },
};

function makeid(length) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const replaceInterceptingFuncNames = {
  FunctionDeclaration(path) {
    const { node } = path;
    if (
      !node.id ||
      node.id.type != "Identifier" ||
      node.id.name != decryptFuncName ||
      !node.body ||
      !node.body.body ||
      node.body.body.length != 1
    ) {
      return;
    }
    path.scope.crawl();
    let binding = path.parentPath.scope.getBinding(node.id.name);
    if (!binding) {
      return;
    }
    var ID = t.identifier(makeid(10));
    for (var i = 0; i < binding.referencePaths.length; i++) {
      binding.referencePaths[i].replaceWith(ID);
    }
    node.id = ID;
  },
};

const deobfStrings = {
  CallExpression(path) {
    const { node } = path;

    if (
      !node.callee ||
      node.callee.type != "Identifier" ||
      !node.arguments ||
      node.arguments.length < 2
    ) {
      return;
    }
    var valid = true;
    for (var i = 0; i < node.arguments.length; i++) {
      var arg = node.arguments[i];
      let str = generate(arg).code;
      if (arg.type == "StringLiteral" || str == "NaN") {
        continue;
      }
      if (
        arg.type != "UnaryExpression" &&
        arg.type != "BinaryExpression" &&
        arg.type != "NumericLiteral"
      ) {
        valid = false;
        break;
      }

      if (str.match(/[A-z]/g) != null) {
        valid = false;
        break;
      }
    }
    if (!valid) {
      return;
    }
    // ! the logic here is we want to get the function this is calling
    // ! then we want to keep getting the nested function calls until we get to the final function, aka the decryptFuncName
    let code = "";
    path.scope.crawl();
    let binding = path.scope.getBinding(node.callee.name);
    if (!binding) {
      // ! hopefully no binding will always mean that the function in question is `r`???
      path.replaceWith(
        t.valueToNode(vm.runInContext(generate(node).code, decryptFuncCtx))
      );
      return;
    }
    // ! loop until we get to a place where we can't get a binding (aka hopefully the root function)
    while (true) {
      if (!binding) {
        let a = generate(node).code;
        if (a[0] == decryptFuncName) {
          a[0] = "asd";
        }
        code += a;
        break;
      }
      code += generate(binding.path.node).code + "\n";
      path.scope.crawl();
      binding = binding.path.scope.getBinding(
        binding.path.node.body.body[0].argument.callee.name
      );
    }
    // ! now we should have all the code we need
    path.replaceWith(t.valueToNode(vm.runInContext(code, decryptFuncCtx)));
  },
};

const deobfuscateStringConcatVisitor = {
  BinaryExpression(path) {
    let { confident, value } = path.evaluate();
    if (!confident) return;
    if (typeof value == "string") {
      path.replaceWith(t.stringLiteral(value));
    }
  },
};

const getObfioObjs = {
  VariableDeclarator(path) {
    const { node } = path;
    if (
      !node.id ||
      node.id.type != "Identifier" ||
      !node.init ||
      node.init.type != "ObjectExpression" ||
      !node.init.properties ||
      node.init.properties.length < 1
    ) {
      return;
    }
    // ! further validation, just incase
    let map = {};
    let valid = true;
    for (var i = 0; i < node.init.properties.length; i++) {
      var prop = node.init.properties[i];
      if (!prop.key || !prop.value || prop.key.type != "Identifier") {
        valid = false;
        break;
      }
      if (
        prop.value.type != "FunctionExpression" &&
        prop.value.type != "StringLiteral" &&
        prop.value.type != "MemberExpression"
      ) {
        valid = false;
        break;
      }
      if (prop.key.name.length != 5) {
        valid = false;
        break;
      }
      if (
        prop.value.type == "FunctionExpression" &&
        prop.value.body.body[0].type != "ReturnStatement"
      ) {
        valid = false;
        break;
      }
      map[prop.key.name] = prop.value;
    }
    if (!valid) {
      return;
    }
    path.scope.crawl();
    let binding = path.scope.getBinding(node.id.name);
    if (!binding) {
      return;
    }
    var ID = t.identifier(makeid(20));
    for (var i = 0; i < binding.referencePaths.length; i++) {
      binding.referencePaths[i].replaceWith(ID);
    }
    obfioObjMap[ID.name] = map;
    path.remove();
  },
};

function getArgs(arguments, cutFirst) {
  var out = [];
  for (var i = cutFirst ? 1 : 0; i < arguments.length; i++) {
    out.push(arguments[i]);
  }
  return out;
}

const objDeobfMemberExpr = {
  MemberExpression(path) {
    const { node } = path;
    if (
      !node.object ||
      !node.property ||
      node.object.type != "Identifier" ||
      !obfioObjMap[node.object.name]
    ) {
      return;
    }
    let map = obfioObjMap[node.object.name];
    let key;
    if (node.property.type == "Identifier") {
      key = node.property.name;
    } else {
      key = node.property.value;
    }
    let value = map[key];
    if (value.type == "StringLiteral") {
      path.replaceWith(value);
      return;
    }
    if (value.type == "MemberExpression") {
      map = obfioObjMap[value.object.name];
      if (value.property.type == "Identifier") {
        key = value.property.name;
      } else {
        key = value.property.value;
      }
      value = map[key];
      path.replaceWith(value);
      return;
    }
    output += `FAILED (1): ${generate(node).code}\n\n`;
  },
  CallExpression(path) {
    const { node } = path;
    if (
      !node.callee ||
      node.callee.type != "MemberExpression" ||
      !node.callee.object ||
      !node.callee.property ||
      node.callee.object.type != "Identifier" ||
      !obfioObjMap[node.callee.object.name]
    ) {
      return;
    }
    let map = obfioObjMap[node.callee.object.name];
    let key;
    if (node.callee.property.type == "Identifier") {
      key = node.callee.property.name;
    } else {
      key = node.callee.property.value;
    }
    let value = map[key];
    // ! replace functions
    let retNode = value.body.body[0].argument;
    // ! call expression
    if (retNode.type == "CallExpression") {
      var callExprID;
      // ! check if it's a reference to another object
      if (retNode.callee.type == "MemberExpression") {
        callExprID = retNode.callee;
      } else {
        callExprID = node.arguments[0];
      }
      var args = [];
      if (
        node.arguments.length > 1 ||
        retNode.callee.type == "MemberExpression"
      ) {
        args = getArgs(
          node.arguments,
          retNode.callee.type != "MemberExpression"
        );
      }
      path.replaceWith(t.callExpression(callExprID, args));
      return;
    }
    // ! BinaryExpression
    if (retNode.type == "BinaryExpression") {
      path.replaceWith(
        t.binaryExpression(
          retNode.operator,
          node.arguments[0],
          node.arguments[1]
        )
      );
      return;
    }
    output += `FAILED (2): ${generate(node).code}\n\n`;
  },
};

function evalValue(left, right, op) {
  switch (op) {
    case "===":
      return left == right;
    case "!==":
      return left != right;
  }
}

const cleanupDeadCode = {
  FunctionDeclaration(path) {
    const { node } = path;
    if (
      !node.id ||
      node.id.type != "Identifier" ||
      !node.body ||
      !node.body.body ||
      !node.params ||
      node.params.length < 2 ||
      node.body.body.length != 1 ||
      node.body.body[0].type != "ReturnStatement"
    ) {
      return;
    }
    path.remove();
  },
  "IfStatement|ConditionalExpression"(path) {
    const { node } = path;
    if (
      !node.test ||
      !node.consequent ||
      node.test.type != "BinaryExpression" ||
      !node.test.left ||
      !node.test.right ||
      node.test.left.type != "StringLiteral" ||
      node.test.right.type != "StringLiteral"
    ) {
      // ! handle if(!("x" !== "x")) { } else { } here
      if (
        !node.test ||
        !node.consequent ||
        node.test.type != "UnaryExpression" ||
        !node.test.argument ||
        node.test.argument.type != "BinaryExpression" ||
        !node.test.argument.left ||
        !node.test.argument.right ||
        node.test.argument.left.type != "StringLiteral" ||
        node.test.argument.right.type != "StringLiteral"
      ) {
        return;
      }
      if (
        !evalValue(
          node.test.argument.left.value,
          node.test.argument.right.value,
          node.test.argument.operator
        )
      ) {
        path.replaceWithMultiple(node.consequent);
        return;
      }
      if (!node.alternate) {
        path.remove();
        return;
      }
      path.replaceWithMultiple(node.alternate);
      return;
    }
    if (
      evalValue(node.test.left.value, node.test.right.value, node.test.operator)
    ) {
      path.replaceWithMultiple(node.consequent);
      return;
    }
    path.replaceWithMultiple(node.alternate);
  },
};

// ! replace the `x = 123` and `y = "asd"` things
traverse(AST, constantReplacer);
// ! replace `const n = {T: 702}`
traverse(AST, replaceObjSimple);
// ! replace mr[(t = "7d]D", o = 896, r(o - 493, t)), mr[(t = "hyP7", r = 661, o = 735, $(t - 252, o - 1061, t, r - 204, o - 6))]
traverse(AST, replaceExprStmts);
/*
replace the stuff that looks like this:
iu[function (n, t, W, r, u) {
    return On(n - 247, W, r - 606, r - 38, u - 235);
}(1095, 0, "e9so", 1006, 1053)]
*/
// ! if this code breaks, I'd assume it's likely because of the static way I'm doing the variable replacement
traverse(AST, replaceWeirdProxyCall);
// ! get the string deobf code and func name, the entry point is the array shifter exprstmt
traverse(AST, getStringDeobfFuncs);
// ! this is a really hacky way to fix this "problem" since I'm doing the string deobf in a bad way
// ! some func names are the same as the main decrypt func name so it'll error when you try to deobf the strings
traverse(AST, replaceInterceptingFuncNames);

vm.runInContext(decryptCode, decryptFuncCtx);
// ! finally we can decrypt/deobf our strings
traverse(AST, deobfStrings);
// ! now we need to concat strings so we can properly deobf the object obfuscation
// (stolen from pianoman)
traverse(AST, deobfuscateStringConcatVisitor);
let obfioObjMap = {};
// ! first we need to rename all objects and all uses of those objects
// ! some objects have conflicting names which can mess up this solution, easiest fix is just renaming them
// ! then we will populate the obfioObjMap
traverse(AST, getObfioObjs);
// ! now we can deobf the object obfuscation
traverse(AST, objDeobfMemberExpr);
// ! clean dead code, like the proxy functions we never removed
traverse(AST, cleanupDeadCode);

writeFileSync("output.log", output, "utf-8");

const final_code = generate(AST, beautify_opts).code;

fs.writeFileSync(outputPath, final_code);
