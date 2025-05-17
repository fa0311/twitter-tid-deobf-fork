"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => u
    });
    r(136728), r(875640);
    const u = () => {
      const [ic, kc] = [document, window],
        [ac, Cc, Sc, sc, hc, mc, Pc, Rc, wc, Oc, pc, gc, lc] = [kc["Number"], kc["TextEncoder"], kc["Uint8Array"], n => ic["querySelectorAll"](n), kc["Date"], kc["Uint32Array"], kc["crypto"]["subtle"], kc["Array"]["from"], kc["Math"], kc["RTCPeerConnection"], kc["Promise"], kc["Function"], kc["getComputedStyle"]];
      let Gc;
      const Qc = n => new Sc(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        Kc = n => btoa(Rc(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Nc = () => Qc(vc(sc("[name^=tw]")[0], "content")),
        bc = (n, t) => Gc = Gc || vc(Ic(sc(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](ac)),
        vc = (n, t) => n && n["getAttribute"](t) || "",
        yc = n => typeof n == "string" ? new Cc()["encode"](n) : n,
        Fc = n => Pc["digest"]("sha-256", yc(n)),
        Yc = n => (n < 16 ? "0" : "") + n["toString"](16),
        Ic = n => Rc(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Vc = () => {
          {
            const n = ic["createElement"]("div");
            return ic["body"]["append"](n), [n, () => Ic([n])];
          }
          {
            const n = kc * (Kc - ac) / 255 + mc;
            return Dc ? kc(n) : n["toFixed"](2);
          }
          var P, R, w, O;
        },
        [Zc, Bc, zc, Tc, Ec] = [n => wc["round"](n), n => wc["floor"](n), () => wc["random"](), n => n["slice"](0, 16), () => 0],
        [Jc, Mc, Lc] = [3, 1682924400, 2 ** (4 * 3)],
        Ac = (n, t, r) => t ? n ^ r[0] : n,
        Hc = (n, t, r) => {
          {
            if (!n["animate"]) return;
            const W = n["animate"](jc(t), Lc);
            W["pause"](), W["currentTime"] = Zc(r / 10) * 10;
          }
        },
        Dc = (n, t, r, W) => {
          {
            const c = n * (r - t) / 255 + t;
            return W ? Bc(c) : c["toFixed"](2);
          }
          {
            if (!Kc["animate"]) return;
            const t = n["animate"](mc(Dc), kc);
            t["pause"](), t["currentTime"] = Vc(Lc / 10) * 10;
          }
        },
        jc = n => ({
          color: ["#" + Yc(n[0]) + Yc(n[1]) + Yc(n[2]), "#" + Yc(n[3]) + Yc(n[4]) + Yc(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Dc(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Rc(n["slice"](7))["map"]((n, t) => Dc(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let _c,
        nu,
        tu = [];
      const ru = n => {
        if (!_c) {
          const [N, b] = [n[40] % 16, n[6] % 16 * (n[0] % 16) * (n[21] % 16)],
            v = bc(".r-mt57c", n);
          new pc(() => {
            const F = {};
            F["FTzXO"] = "div";
            const Z = F;
            {
              const F = new Oc(),
                Z = zc()["toString"](36);
              nu = F["createDataChannel"](Z), F["createOffer"]()["then"](Y => {
                try {
                  {
                    const t = Y["sdp"] || Z;
                    tu = Rc(yc([t[n[5] % 8] || "4", t[n[8] % 8]])), F["close"]();
                  }
                } catch {}
              })["catch"](Ec);
            }
          })["catch"](Ec);
          const [y, F] = Vc();
          Hc(y, v[N], b);
          const Y = lc(y);
          _c = Rc(("" + Y["color"] + Y["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => ac(ac(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), F();
        }
        return _c;
      };
      return async (n, t) => {
        const r = Bc((hc["now"]() - Mc * 1e3) / 1e3),
          W = new Sc(new mc([r])["buffer"]),
          c = Nc(),
          u = ru(c);
        return Kc(new Sc([zc() * 256]["concat"](Rc(c), Rc(W), Tc(Rc(new Sc(await Fc([t, n, r]["join"]("!") + "obfiowerehiring" + u)))["concat"](tu)), [Jc]))["map"](Ac));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.002fbcba.js.map