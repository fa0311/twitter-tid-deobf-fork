"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => o
    });
    W(136728), W(875640);
    const o = () => {
      const [Lr, Dr] = [document, window],
        [Ar, _r, nc, tc, Wc, rc, cc, oc, uc, ec, dc, ic, fc] = [Dr["Number"], Dr["TextEncoder"], Dr["Uint8Array"], n => Lr["querySelectorAll"](n), Dr["Date"], Dr["Uint32Array"], Dr["crypto"]["subtle"], Dr["Array"]["from"], Dr["Math"], Dr["RTCPeerConnection"], Dr["Promise"], Dr["Function"], Dr["getComputedStyle"]];
      let sc;
      const Sc = n => btoa(oc(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Oc = () => {
          return n = Rc(tc("[name^=tw]")[0], "content"), new nc(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        Cc = (n, t) => sc = sc || Rc(vc(tc(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Ar)),
        Rc = (n, t) => n && n["getAttribute"](t) || "",
        ac = n => typeof n == "string" ? new _r()["encode"](n) : n,
        mc = n => cc["digest"]("sha-256", ac(n)),
        Qc = n => (n < 16 ? "0" : "") + n["toString"](16),
        vc = n => oc(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Pc = () => {
          {
            const n = Lr["createElement"]("div");
            return Lr["body"]["append"](n), [n, () => vc([n])];
          }
        },
        [hc, lc, Jc, pc, Gc] = [n => uc["round"](n), n => uc["floor"](n), () => uc["random"](), n => n["slice"](0, 16), () => 0],
        [qc, xc, yc] = [3, 1682924400, 2 ** (4 * 3)],
        Hc = (n, t, W) => t ? n ^ W[0] : n,
        Mc = (n, t, W) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](Tc(t), yc);
            r["pause"](), r["currentTime"] = hc(W / 10) * 10;
          }
        },
        Nc = (n, t, W, r) => {
          {
            const c = n * (W - t) / 255 + t;
            return r ? lc(c) : c["toFixed"](2);
          }
          {
            if (!hc["animate"]) return;
            const n = yc["animate"](qc(pc), Nc);
            n["pause"](), n["currentTime"] = vc(Wc / 10) * 10;
          }
          var k, S, O, C;
        },
        Tc = n => ({
          color: ["#" + Qc(n[0]) + Qc(n[1]) + Qc(n[2]), "#" + Qc(n[3]) + Qc(n[4]) + Qc(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Nc(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + oc(n["slice"](7))["map"]((n, t) => Nc(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Kc,
        zc,
        Ic = [];
      const bc = n => {
        if (!Kc) {
          const [W, c] = [n[11] % 16, n[18] % 16 * (n[15] % 16) * (n[14] % 16)],
            o = Cc(".r-1xncgr", n);
          new dc(() => {
            {
              const t = new ec(),
                C = Jc()["toString"](36);
              zc = t["createDataChannel"](C), t["createOffer"]()["then"](R => {
                try {
                  {
                    const W = R["sdp"] || C;
                    Ic = oc(ac([W[n[5] % 8] || "4", W[n[8] % 8]])), t["close"]();
                  }
                } catch {}
              })["catch"](Gc);
            }
          })["catch"](Gc);
          const [u, e] = Pc();
          Mc(u, o[W], c);
          const d = fc(u);
          Kc = oc(("" + d["color"] + d["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Ar(Ar(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), e();
        }
        return Kc;
      };
      return async (n, t) => {
        const r = lc((Wc["now"]() - xc * 1e3) / 1e3),
          c = new nc(new rc([r])["buffer"]),
          o = Oc(),
          u = bc(o);
        return Sc(new nc([Jc() * 256]["concat"](oc(o), oc(c), pc(oc(new nc(await mc([t, n, r]["join"]("!") + "obfiowerehiring" + u)))["concat"](Ic)), [qc]))["map"](Hc));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.ce626a2a.js.map