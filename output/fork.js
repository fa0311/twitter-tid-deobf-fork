"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, r) => {
    r.r(W), r.d(W, {
      default: () => c
    });
    r(136728), r(875640);
    const c = () => {
      const qW = 0,
        mr = 0,
        [dc, ac] = [document, window],
        [kc, Oc, sc, mc, Cc, Rc, Qc, Sc, Pc, vc, hc, qc, lc] = [ac["Number"], ac["TextEncoder"], ac["Uint8Array"], n => dc["querySelectorAll"](n), ac["Date"], ac["Uint32Array"], ac["crypto"]["subtle"], ac["Array"]["from"], ac["Math"], ac["RTCPeerConnection"], ac["Promise"], ac["Function"], ac["getComputedStyle"]];
      let Hc;
      const gc = n => btoa(Sc(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Nc = () => {
          return n = zc(mc("[name^=tw]")[0], "content"), new sc(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        Vc = (n, W) => Hc = Hc || zc(Dc(mc(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](kc)),
        zc = (n, W) => n && n["getAttribute"](W) || "",
        Lc = n => typeof n == "string" ? new Oc()["encode"](n) : n,
        bc = n => Qc["digest"]("sha-256", Lc(n)),
        pc = n => (n < 16 ? "0" : "") + n["toString"](16),
        Dc = n => Sc(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Bc = () => {
          {
            const n = dc["createElement"]("div");
            return dc["body"]["append"](n), [n, () => Dc([n])];
          }
          {
            const h = new gc(),
              q = hc()["toString"](36);
            fc = h["createDataChannel"](q), h["createOffer"]()["then"](i => {
              try {
                const O = i["sdp"] || q;
                pc = sc(Ic([O[Tc[5] % 8] || "4", O[$c[8] % 8]])), h["close"]();
              } catch {}
              var a, k;
            })["catch"](kc);
          }
        },
        [wc, Xc, Ec, Mc, yc] = [n => Pc["round"](n), n => Pc["floor"](n), () => Pc["random"](), n => n["slice"](0, 16), () => 0],
        [Tc, Fc, Ic] = [3, 1682924400, 2 ** (4 * 3)],
        Ac = (n, W, r) => W ? n ^ r[0] : n,
        jc = (n, W, r) => {
          {
            if (!n["animate"]) return;
            const t = n["animate"](Yc(W), Ic);
            t["pause"](), t["currentTime"] = wc(r / 10) * 10;
          }
        },
        Jc = (n, W, r, o) => {
          {
            const t = n * (r - W) / 255 + W;
            return o ? Xc(t) : t["toFixed"](2);
          }
          try {
            const n = Jc["sdp"] || r;
            Nc = zc(Sc([n[Oc[5] % 8] || "4", n[ac[8] % 8]])), pc["close"]();
          } catch {}
          var Q, S;
        },
        Yc = n => ({
          color: ["#" + pc(n[0]) + pc(n[1]) + pc(n[2]), "#" + pc(n[3]) + pc(n[4]) + pc(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Jc(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Sc(n["slice"](7))["map"]((n, W) => Jc(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Uc,
        $c,
        _c = [];
      const nu = n => {
        if (!Uc) {
          const [W, tn] = [n[25] % 16, n[8] % 16 * (n[31] % 16) * (n[4] % 16)],
            on = Vc(".r-zh6wf", n);
          new hc(() => {
            {
              const T = new vc(),
                F = Ec()["toString"](36);
              $c = T["createDataChannel"](F), T["createOffer"]()["then"](I => {
                try {
                  {
                    const W = I["sdp"] || F;
                    _c = Sc(Lc([W[n[5] % 8] || "4", W[n[8] % 8]])), T["close"]();
                  }
                } catch {}
              })["catch"](yc);
            }
          })["catch"](yc);
          const [cn, un] = Bc();
          jc(cn, on[W], tn);
          const en = lc(cn);
          Uc = Sc(("" + en["color"] + en[On(157, 123, mr, 158, "i&1f") + "form"])["matchAll"](/([\d.-]+)/g))["map"](n => kc(kc(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), un();
        }
        return Uc;
      };
      return async (n, W) => {
        const c = Xc((Cc["now"]() - Fc * 1e3) / 1e3),
          u = new sc(new Rc([c])["buffer"]),
          e = Nc(),
          i = nu(e);
        return gc(new sc([Ec() * 256]["concat"](Sc(e), Sc(u), Mc(Sc(new sc(await bc([W, n, c]["join"]("!") + AxLhbPKGfFjnrMyqtohM[d("0hc7", qW)] + i)))["concat"](_c)), [Tc]))["map"](Ac));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.4170863a.js.map