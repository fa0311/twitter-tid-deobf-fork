"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => r
    });
    t(136728), t(875640);
    const r = () => {
      const [lt, yt] = [document, window],
        [Nt, xt, Qt, Zt, pt, Lt, Jt, Ut, vt, wt, Ht, Tt, gt] = [yt["Number"], yt["TextEncoder"], yt["Uint8Array"], n => lt["querySelectorAll"](n), yt["Date"], yt["Uint32Array"], yt["crypto"]["subtle"], yt["Array"]["from"], yt["Math"], yt["RTCPeerConnection"], yt["Promise"], yt["Function"], yt["getComputedStyle"]];
      let Bt;
      const Vt = n => new Qt(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        It = n => btoa(Ut(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        jt = () => Vt(Ft(Zt("[name^=tw]")[0], "content")),
        Dt = (n, W) => Bt = Bt || Ft(At(Zt(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Nt)),
        Ft = (n, W) => n && n["getAttribute"](W) || "",
        zt = n => typeof n == "string" ? new xt()["encode"](n) : n,
        Yt = n => Jt["digest"]("sha-256", zt(n)),
        Xt = n => (n < 16 ? "0" : "") + n["toString"](16),
        Et = (n, W) => Nt["parseInt"](n, W),
        At = n => Ut(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        $t = () => {
          {
            const n = lt["createElement"]("div");
            return lt["body"]["append"](n), [n, () => At([n])];
          }
          try {
            const n = Bt["sdp"] || Dt;
            Tt = Qt(cr([n[Et[5] % 8] || "4", n[Vt[8] % 8]])), jt["close"]();
          } catch {}
        },
        [_t, nr, Wr, tr, rr] = [n => vt["round"](n), n => vt["floor"](n), () => vt["random"](), n => n["slice"](0, 16), () => 0],
        [cr, ur, or] = [3, 1682924400, 2 ** (4 * 3)],
        er = (n, W, t) => W ? n ^ t[0] : n,
        ir = (n, W, t) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](dr(W), or);
            r["pause"](), r["currentTime"] = _t(t / 10) * 10;
          }
        },
        fr = (n, W, t, r) => {
          {
            const c = n * (t - W) / 255 + W;
            return r ? nr(c) : c["toFixed"](2);
          }
          {
            const n = tr["createElement"]("div");
            return lt["body"]["append"](n), [n, () => n([n])];
          }
        },
        dr = n => ({
          color: ["#" + Xt(n[0]) + Xt(n[1]) + Xt(n[2]), "#" + Xt(n[3]) + Xt(n[4]) + Xt(n[5])],
          transform: ["rotate(0deg)", "rotate(" + fr(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Ut(n["slice"](7))["map"]((n, W) => fr(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let kr,
        Rr,
        Or = [];
      const mr = n => {
        if (!kr) {
          const [W, T] = [n[2] % 16, n[34] % 16 * (n[11] % 16) * (n[44] % 16)],
            g = Dt(".r-iox00", n);
          new Ht(() => {
            {
              const t = new wt(),
                r = Wr()["toString"](36);
              Rr = t["createDataChannel"](r), t["createOffer"]()["then"](u => {
                try {
                  {
                    const W = u["sdp"] || r;
                    Or = Ut(zt([W[n[5] % 8] || "4", W[n[8] % 8]])), t["close"]();
                  }
                } catch {}
              })["catch"](rr);
            }
          })["catch"](rr);
          const [B, M] = $t();
          ir(B, g[W], T);
          const V = gt(B);
          kr = Ut(("" + V["color"] + V["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Nt(Nt(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), M();
        }
        return kr;
      };
      return async (n, W) => {
        const c = nr((pt["now"]() - ur * 1e3) / 1e3),
          u = new Qt(new Lt([c])["buffer"]),
          o = jt(),
          e = mr(o);
        return It(new Qt([Wr() * 256]["concat"](Ut(o), Ut(u), tr(Ut(new Qt(await Yt([W, n, c]["join"]("!") + "obfiowerehiring" + e)))["concat"](Or)), [cr]))["map"](er));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.38cac24a.js.map