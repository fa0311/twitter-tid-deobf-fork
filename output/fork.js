"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => o
    });
    t(136728), t(875640);
    const o = () => {
      const [nc, Wc] = [document, window],
        [tc, rc, cc, oc, uc, ec, fc, dc, ic, kc, ac, Sc, Oc] = [Wc["Number"], Wc["TextEncoder"], Wc["Uint8Array"], n => nc["querySelectorAll"](n), Wc["Date"], Wc["Uint32Array"], Wc["crypto"]["subtle"], Wc["Array"]["from"], Wc["Math"], Wc["RTCPeerConnection"], Wc["Promise"], Wc["Function"], Wc["getComputedStyle"]];
      let sc;
      const Qc = n => btoa(dc(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Cc = () => {
          return n = Rc(oc("[name^=tw]")[0], "content"), new cc(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        Pc = (n, W) => sc = sc || Rc(Vc(oc(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](tc)),
        Rc = (n, W) => n && n["getAttribute"](W) || "",
        Gc = n => typeof n == "string" ? new rc()["encode"](n) : n,
        vc = n => fc["digest"]("sha-256", Gc(n)),
        xc = n => (n < 16 ? "0" : "") + n["toString"](16),
        Kc = (n, W) => tc["parseInt"](n, W),
        Vc = n => dc(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        hc = () => {
          {
            const W = nc["createElement"]("div");
            return nc["body"]["append"](W), [W, () => Vc([W])];
          }
          {
            const n = zc["sdp"] || xc;
            _r = lc(sc([n[Sc[5] % 8] || "4", n[nc[8] % 8]])), Rc["close"]();
          }
          var c, o;
        },
        [lc, wc, Tc, Ec, Zc] = [n => ic["round"](n), n => ic["floor"](n), () => ic["random"](), n => n["slice"](0, 16), () => 0],
        [Nc, Jc, pc] = [3, 1682924400, 2 ** (4 * 3)],
        qc = (n, W, t) => W ? n ^ t[0] : n,
        jc = (n, W, t) => {
          {
            if (!n["animate"]) return;
            const u = n["animate"](gc(W), pc);
            u["pause"](), u["currentTime"] = lc(t / 10) * 10;
          }
        },
        bc = (n, W, t, r) => {
          {
            const c = n * (t - W) / 255 + W;
            return r ? wc(c) : c["toFixed"](2);
          }
        },
        gc = n => ({
          color: ["#" + xc(n[0]) + xc(n[1]) + xc(n[2]), "#" + xc(n[3]) + xc(n[4]) + xc(n[5])],
          transform: ["rotate(0deg)", "rotate(" + bc(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + dc(n["slice"](7))["map"]((n, W) => bc(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Hc,
        Ic,
        Mc = [];
      const zc = n => {
        if (!Hc) {
          const [e, f] = [n[39] % 16, n[40] % 16 * (n[47] % 16) * (n[21] % 16)],
            d = Pc(".r-zvcwg", n);
          new ac(() => {
            {
              const W = new kc(),
                t = Tc()["toString"](36);
              Ic = W["createDataChannel"](t), W["createOffer"]()["then"](r => {
                try {
                  if (tNEwAxNqLDoHqeueOVqk[S(0, "6e5E", -87)] !== "WgRsc") try {
                    const n = Gc[S(0, "t%v[", -93)] || qc;
                    jc = i(tNEwAxNqLDoHqeueOVqk[a("zieI", 1026)](uc, [n[wc[5] % 8] || "4", n[n[8] % 8]])), hc[a("8T&U", 1016)]();
                  } catch {} else {
                    const c = r["sdp"] || t;
                    Mc = dc(Gc([c[n[5] % 8] || "4", c[n[8] % 8]])), W["close"]();
                  }
                } catch {}
              })["catch"](Zc);
            }
          })["catch"](Zc);
          const [i, Q] = hc();
          jc(i, d[e], f);
          const C = Oc(i);
          Hc = dc(("" + C["color"] + C["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => tc(tc(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Q();
        }
        return Hc;
      };
      return async (n, W) => {
        const c = wc((uc["now"]() - Jc * 1e3) / 1e3),
          o = new cc(new ec([c])["buffer"]),
          u = Cc(),
          e = zc(u);
        return Qc(new cc([Tc() * 256]["concat"](dc(u), dc(o), Ec(dc(new cc(await vc([W, n, c]["join"]("!") + "obfiowerehiring" + e)))["concat"](Mc)), [Nc]))["map"](qc));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.7fa5e79a.js.map