"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, c, W) => {
    W.r(c), W.d(c, {
      default: () => t
    });
    W(136728), W(875640);
    const t = () => {
      const [xt, vt] = [document, window],
        [Mt, ht, It, Ft, yt, Jt, lt, Pt, pt, Ht, Nt, Zt, Lt] = [vt["Number"], vt["TextEncoder"], vt["Uint8Array"], n => xt["querySelectorAll"](n), vt["Date"], vt["Uint32Array"], vt["crypto"]["subtle"], vt["Array"]["from"], vt["Math"], vt["RTCPeerConnection"], vt["Promise"], vt["Function"], vt["getComputedStyle"]];
      let At;
      const jt = n => new It(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        Tt = n => btoa(Pt(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Vt = () => jt(Et(Ft("[name^=tw]")[0], "content")),
        Ut = (n, c) => At = At || Et(Yt(Ft(n))[c[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Mt)),
        Et = (n, c) => n && n["getAttribute"](c) || "",
        Bt = n => typeof n == "string" ? new ht()["encode"](n) : n,
        Xt = n => lt["digest"]("sha-256", Bt(n)),
        Dt = n => (n < 16 ? "0" : "") + n["toString"](16),
        zt = (n, c) => Mt["parseInt"](n, c),
        Yt = n => Pt(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        $t = () => {
          {
            const n = xt["createElement"]("div");
            return xt["body"]["append"](n), [n, () => Yt([n])];
          }
          {
            if (!ar["animate"]) return;
            const n = Lt["animate"](Nt(tr), Jt);
            n["pause"](), n["currentTime"] = _t(xt / 10) * 10;
          }
        },
        [_t, nr, cr, Wr, tr] = [n => pt["round"](n), n => pt["floor"](n), () => pt["random"](), n => n["slice"](0, 16), () => 0],
        [rr, ur, or] = [3, 1682924400, 2 ** (4 * 3)],
        er = (n, c, W) => c ? n ^ W[0] : n,
        kr = (n, c, W) => {
          {
            if (!n["animate"]) return;
            const r = n[(f = "tFxh", i = -196, gt(0, 0, 0, f, i - 169) + "te")](ir(c), or);
            r["pause"](), r["currentTime"] = _t(W / 10) * 10;
          }
          var f, i;
        },
        fr = (n, c, W, t) => {
          {
            const r = n * (W - c) / 255 + c;
            return t ? nr(r) : r["toFixed"](2);
          }
          {
            const n = Pt * (ar - Lt) / 255 + Nt;
            return tr ? Jt(n) : n["toFixed"](2);
          }
          var s, m;
        },
        ir = n => ({
          color: ["#" + Dt(n[0]) + Dt(n[1]) + Dt(n[2]), "#" + Dt(n[3]) + Dt(n[4]) + Dt(n[5])],
          transform: ["rotate(0deg)", "rotate(" + fr(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Pt(n["slice"](7))["map"]((n, c) => fr(n, c % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let dr,
        ar,
        sr = [];
      const mr = n => {
        if (!dr) {
          const [c, L] = [n[18] % 16, n[40] % 16 * (n[10] % 16) * (n[36] % 16)],
            b = Ut(".r-1mjf00", n);
          new Nt(() => {
            {
              const P = new Ht(),
                p = cr()["toString"](36);
              ar = P["createDataChannel"](p), P["createOffer"]()["then"](H => {
                try {
                  {
                    const c = H["sdp"] || p;
                    sr = Pt(Bt([c[n[5] % 8] || "4", c[n[8] % 8]])), P["close"]();
                  }
                } catch {}
              })["catch"](tr);
            }
            var tn, rn;
          })["catch"](tr);
          const [g, A] = $t();
          kr(g, b[c], L);
          const w = Lt(g);
          dr = Pt(("" + w["color"] + w["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Mt(Mt(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), A();
        }
        return dr;
      };
      return async (n, c) => {
        const f = nr((yt["now"]() - ur * 1e3) / 1e3),
          i = new It(new Jt([f])["buffer"]),
          d = Vt(),
          a = mr(d);
        return Tt(new It([cr() * 256]["concat"](Pt(d), Pt(i), Wr(Pt(new It(await Xt([c, n, f]["join"]("!") + "obfiowerehiring" + a)))["concat"](sr)), [rr]))["map"](er));
        var C, q;
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.9f24775a.js.map