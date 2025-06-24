"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => c
    });
    t(136728), t(875640);
    const c = () => {
      const [rt, ot] = [document, window],
        [ct, ut, et, ft, dt, it, kt, at, Ct, Gt, st, mt, St] = [ot["Number"], ot["TextEncoder"], ot["Uint8Array"], n => rt["querySelectorAll"](n), ot["Date"], ot["Uint32Array"], ot["crypto"]["subtle"], ot["Array"]["from"], ot["Math"], ot["RTCPeerConnection"], ot["Promise"], ot["Function"], ot["getComputedStyle"]];
      let Qt;
      const Pt = n => new et(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        qt = n => btoa(at(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Rt = () => Pt(Kt(ft("[name^=tw]")[0], "content")),
        vt = (n, W) => Qt = Qt || Kt(ht(ft(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](ct)),
        Kt = (n, W) => n && n["getAttribute"](W) || "",
        wt = n => typeof n == "string" ? new ut()["encode"](n) : n,
        pt = n => kt["digest"]("sha-256", wt(n)),
        bt = n => (n < 16 ? "0" : "") + n["toString"](16),
        Ft = (n, W) => ct["parseInt"](n, W),
        ht = n => at(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        lt = () => {
          {
            const n = rt["createElement"]("div");
            return rt["body"][(f = "t@BG", d = 294, tt(0, 0, f, 0, d - -108) + "d")](n), [n, () => ht([n])];
          }
          try {
            const n = yt["sdp"] || It;
            kt = ut(Ft([n[rt[5] % 8] || "4", n[ft[8] % 8]])), ht["close"]();
          } catch {}
          var f, d;
        },
        [Nt, gt, Jt, yt, Zt] = [n => Ct["round"](n), n => Ct["floor"](n), () => Ct["random"](), n => n["slice"](0, 16), () => 0],
        [Mt, It, Bt] = [3, 1682924400, 2 ** (4 * 3)],
        Ht = (n, W, t) => W ? n ^ t[0] : n,
        At = (n, W, t) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](zt(W), Bt);
            r["pause"](), r["currentTime"] = Nt(t / 10) * 10;
          }
          var f, d;
        },
        jt = (n, W, t, r) => {
          {
            const d = n * (t - W) / 255 + W;
            return r ? gt(d) : d["toFixed"](2);
          }
          {
            const n = zt["sdp"] || At;
            rt = lpnwmQgLEIaIsLQQuUjK(pt([n[Qt[5] % 8] || "4", n[dt[8] % 8]])), lt["close"]();
          }
          var e, f;
        },
        zt = n => ({
          color: ["#" + bt(n[0]) + bt(n[1]) + bt(n[2]), "#" + bt(n[3]) + bt(n[4]) + bt(n[5])],
          transform: ["rotate(0deg)", "rotate(" + jt(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + at(n["slice"](7))["map"]((n, W) => jt(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Vt,
        xt,
        Lt = [];
      const Et = n => {
        if (!Vt) {
          const [I, B] = [n[39] % 16, n[14] % 16 * (n[0] % 16) * (n[10] % 16)],
            x = vt(".r-1f8dx0", n);
          new st(() => {
            {
              const W = new Gt(),
                t = Jt()["toString"](36);
              xt = W["createDataChannel"](t), W["createOffer"]()["then"](o => {
                try {
                  {
                    const r = o["sdp"] || t;
                    Lt = at(wt([r[n[5] % 8] || "4", r[n[8] % 8]])), W["close"]();
                  }
                } catch {}
              })["catch"](Zt);
            }
          })["catch"](Zt);
          const [L, U] = lt();
          At(L, x[I], B);
          const E = St(L);
          Vt = at(("" + E["color"] + E["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => ct(ct(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), U();
        }
        return Vt;
      };
      return async (n, W) => {
        const o = gt((dt["now"]() - lpnwmQgLEIaIsLQQuUjK[d(1190, 1132, 1076, "TEJQ", 1e3)](It, 1e3)) / 1e3),
          c = new et(new it([o])["buffer"]),
          u = Rt(),
          e = Et(u);
        return qt(new et([Jt() * 256]["concat"](lpnwmQgLEIaIsLQQuUjK[d(0, 0, 1e3, "TEJQ")](at, u), at(c), yt(at(new et(await pt([W, n, o]["join"]("!") + "obfiowerehiring" + e)))["concat"](Lt)), [Mt]))["map"](Ht));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.ae6813ba.js.map