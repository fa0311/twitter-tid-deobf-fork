"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => o
    });
    W(136728), W(875640);
    const o = () => {
      const [qo, Oo] = [document, window],
        [vo, Ro, Go, Qo, Jo, lo, bo, wo, ho, po, Io, yo, xo] = [Oo["Number"], Oo["TextEncoder"], Oo["Uint8Array"], n => qo["querySelectorAll"](n), Oo["Date"], Oo["Uint32Array"], Oo["crypto"]["subtle"], Oo["Array"]["from"], Oo["Math"], Oo["RTCPeerConnection"], Oo["Promise"], Oo["Function"], Oo["getComputedStyle"]];
      let go;
      const zo = n => btoa(wo(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Ko = () => {
          return n = No(Qo("[name^=tw]")[0], "content"), new Go(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        Vo = (n, t) => go = go || No(Lo(Qo(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](vo)),
        No = (n, t) => n && n["getAttribute"](t) || "",
        Zo = n => typeof n == "string" ? new Ro()["encode"](n) : n,
        Ho = n => bo["digest"]("sha-256", Zo(n)),
        To = n => (n < 16 ? "0" : "") + n["toString"](16),
        Lo = n => wo(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Bo = () => {
          {
            const n = qo["createElement"]("div");
            return qo["body"]["append"](n), [n, () => Lo([n])];
          }
          try {
            const n = cc["sdp"] || vo;
            vo = rc(Ro([n[Uo[5] % 8] || "4", n[Xo[8] % 8]])), Wc["close"]();
          } catch {}
        },
        [Do, Fo, Uo, Eo, Ao] = [n => ho["round"](n), n => ho["floor"](n), () => ho["random"](), n => n["slice"](0, 16), () => 0],
        [Xo, Yo, $o] = [3, 1682924400, 2 ** (4 * 3)],
        _o = (n, t, W) => t ? n ^ W[0] : n,
        nc = (n, t, W) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](Wc(t), $o);
            r["pause"](), r["currentTime"] = Do(W / 10) * 10;
          }
        },
        tc = (n, t, W, o) => {
          {
            const r = n * (W - t) / 255 + t;
            return o ? Fo(r) : r["toFixed"](2);
          }
          {
            const W = new wo(),
              r = Do()["toString"](36);
            To = W["createDataChannel"](r), W["createOffer"]()["then"](o => {
              try {
                const n = o["sdp"] || r;
                Wc = tc(No([n[$o[5] % 8] || "4", n[Io[8] % 8]])), W["close"]();
              } catch {}
            })["catch"](vo);
          }
        },
        Wc = n => ({
          color: ["#" + To(n[0]) + To(n[1]) + To(n[2]), "#" + To(n[3]) + To(n[4]) + To(n[5])],
          transform: ["rotate(0deg)", "rotate(" + tc(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + wo(n["slice"](7))["map"]((n, t) => tc(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let rc,
        oc,
        cc = [];
      const ec = n => {
        if (!rc) {
          const [t, W] = [n[45] % 16, n[29] % 16 * (n[30] % 16) * (n[5] % 16)],
            rn = Vo(".r-5nft6o", n);
          new Io(() => {
            {
              const U = new po(),
                E = Uo()["toString"](36);
              oc = U["createDataChannel"](E), U["createOffer"]()["then"](A => {
                try {
                  {
                    const t = A[an(-45, "x^I7", 0, -96)] || E;
                    cc = wo(Zo([t[wJYRiKnlTgSwwwYclncs[an(124, "0$eW", 0, 57)](n[5], 8)] || "4", t[n[8] % 8]])), U["close"]();
                  }
                } catch {}
              })["catch"](Ao);
            }
          })["catch"](Ao);
          const [on, cn] = Bo();
          nc(on, rn[t], W);
          const Cn = xo(on);
          rc = wo(("" + Cn["color"] + Cn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => vo(vo(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), cn();
        }
        return rc;
      };
      return async (n, t) => {
        const W = Fo((Jo["now"]() - Yo * 1e3) / 1e3),
          r = new Go(new lo([W])["buffer"]),
          o = Ko(),
          c = ec(o);
        return zo(new Go([Uo() * 256]["concat"](wo(o), wo(r), Eo(wo(new Go(await Ho([t, n, W]["join"]("!") + "obfiowerehiring" + c)))["concat"](cc)), [Xo]))["map"](_o));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.dbd7039a.js.map