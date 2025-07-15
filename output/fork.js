"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => c
    });
    t(136728), t(875640);
    const c = () => {
      const [hr, pr] = [document, window],
        [yr, Kr, Vr, br, wr, Br, Tr, Ir, zr, Lr, Nr, jr, Ur] = [pr["Number"], pr["TextEncoder"], pr["Uint8Array"], n => hr["querySelectorAll"](n), pr["Date"], pr["Uint32Array"], pr["crypto"]["subtle"], pr["Array"]["from"], pr["Math"], pr["RTCPeerConnection"], pr["Promise"], pr["Function"], pr["getComputedStyle"]];
      let vr;
      const Fr = n => new Vr(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        Jr = n => btoa(Ir(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Zr = () => Fr(Er(br("[name^=tw]")[0], "content")),
        Dr = (n, W) => vr = vr || Er(Yr(br(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](yr)),
        Er = (n, W) => n && n["getAttribute"](W) || "",
        Hr = n => typeof n == "string" ? new Kr()["encode"](n) : n,
        Xr = n => Tr["digest"]("sha-256", Hr(n)),
        Mr = n => (n < 16 ? "0" : "") + n["toString"](16),
        Ar = (n, W) => yr["parseInt"](n, W),
        Yr = n => Ir(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        $r = () => {
          {
            const n = hr["createElement"]("div");
            return hr["body"]["append"](n), [n, () => Yr([n])];
          }
          {
            const d = new wr(),
              k = br()["toString"](36);
            fc = d["createDataChannel"](k), d["createOffer"]()["then"](W => {
              try {
                const r = W["sdp"] || k;
                Yr = oc(Fr([r[qc[5] % 8] || "4", r[W[8] % 8]])), d["close"]();
              } catch {}
              var a, S;
            })["catch"](yr);
          }
        },
        [_r, nc, Wc, tc, rc] = [n => zr["round"](n), n => zr["floor"](n), () => zr["random"](), n => n["slice"](0, 16), () => 0],
        [cc, oc, uc] = [3, 1682924400, 2 ** (4 * 3)],
        ec = (n, W, t) => W ? n ^ t[0] : n,
        fc = (n, W, t) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](dc(W), uc);
            r["pause"](), r["currentTime"] = _r(t / 10) * 10;
          }
        },
        ic = (n, W, t, c) => {
          {
            const r = n * (t - W) / 255 + W;
            return c ? nc(r) : r["toFixed"](2);
          }
          {
            const n = jr["sdp"] || wr;
            br = fc(Ur([n[n[5] % 8] || "4", n[pr[8] % 8]])), Lr["close"]();
          }
        },
        dc = n => ({
          color: ["#" + Mr(n[0]) + Mr(n[1]) + Mr(n[2]), "#" + Mr(n[3]) + Mr(n[4]) + Mr(n[5])],
          transform: ["rotate(0deg)", "rotate(" + ic(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Ir(n["slice"](7))["map"]((n, W) => ic(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let ac,
        Sc,
        sc = [];
      const qc = n => {
        if (!ac) {
          const [z, F] = [n[24] % 16, n[0] % 16 * (n[24] % 16) * (n[35] % 16)],
            J = Dr(".r-9vhjo", n);
          new Nr(() => {
            {
              const b = new Lr(),
                w = Wc()["toString"](36);
              Sc = b["createDataChannel"](w), b["createOffer"]()["then"](B => {
                if (FjEQoxoDlMrzetJzIgXF[x("[QTo", 0, 1143, 0, 1179)](FjEQoxoDlMrzetJzIgXF[x("wD@f", 0, 1236, 0, 1348)], "nyMjG")) {
                  const n = Sc["creat" + x("IRae", 0, 1122, 0, 1236) + "ent"](FjEQoxoDlMrzetJzIgXF[x("fX9r", 0, 1231, 0, 1312)]);
                  return F["body"]["append"](n), [n, () => n([n])];
                }
                try {
                  if (FjEQoxoDlMrzetJzIgXF[x("c0gT", 0, 1240, 0, 1281)] !== "wXgIf") try {
                    const n = sc["sdp"] || Z;
                    cc = Tr(ec([n[klxwUaiObNcgPuEtXNJn[x("fzSg", 0, 1292, 0, 1169)](Xr[5], 8)] || "4", n[Er[8] % 8]])), Yr["close"]();
                  } catch {} else {
                    const W = B["sdp"] || w;
                    sc = Ir(FjEQoxoDlMrzetJzIgXF[x("V0z&", 0, 1223, 0, 1181)](Hr, [W[n[5] % 8] || "4", W[n[8] % 8]])), b["close"]();
                  }
                } catch {}
              })["catch"](rc);
            }
          })["catch"](rc);
          const [Z, D] = $r();
          fc(Z, J[z], F);
          const E = Ur(Z);
          ac = Ir(("" + E["color"] + E["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => yr(yr(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), D();
        }
        return ac;
      };
      return async (n, W) => {
        const f = nc((wr["now"]() - oc * 1e3) / 1e3),
          i = new Vr(new Br([f])["buffer"]),
          d = Zr(),
          k = qc(d);
        return Jr(new Vr([Wc() * 256]["concat"](Ir(d), Ir(i), tc(Ir(new Vr(await Xr([W, n, f]["join"]("!") + "obfiowerehiring" + k)))["concat"](sc)), [cc]))["map"](ec));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.07fa3eca.js.map