"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => c
    });
    W(136728), W(875640);
    const c = () => {
      const [Br, Mr] = [document, window],
        [Ur, Er, Dr, Ir, jr, Yr, Xr, Zr, $r, _r, no, to, Wo] = [Mr["Number"], Mr["TextEncoder"], Mr["Uint8Array"], n => Br["querySelectorAll"](n), Mr["Date"], Mr["Uint32Array"], Mr["crypto"]["subtle"], Mr["Array"]["from"], Mr["Math"], Mr["RTCPeerConnection"], Mr["Promise"], Mr["Function"], Mr["getComputedStyle"]];
      let uo;
      const eo = n => new Dr(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        io = n => btoa(Zr(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        fo = () => eo(ao(Ir("[name^=tw]")[0], "content")),
        ko = (n, t) => uo = uo || ao(qo(Ir(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Ur)),
        ao = (n, t) => n && n["getAttribute"](t) || "",
        Co = n => typeof n == "string" ? new Er()["encode"](n) : n,
        mo = n => Xr["digest"]("sha-256", Co(n)),
        so = n => (n < 16 ? "0" : "") + n["toString"](16),
        vo = (n, t) => Ur["parseInt"](n, t),
        qo = n => Zr(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        So = () => {
          {
            const n = Br["createElement"]("div");
            return Br["body"]["append"](n), [n, () => qo([n])];
          }
          try {
            const t = Qo["sdp"] || eo;
            ko = vo(Ur([t[Ir[5] % 8] || "4", t[Co[8] % 8]])), mo["close"]();
          } catch {}
          var e, d, i, f;
        },
        [Po, ho, Ro, Qo, xo] = [n => $r["round"](n), n => $r["floor"](n), () => $r["random"](), n => n["slice"](0, 16), () => 0],
        [Go, Oo, Ho] = [3, 1682924400, 2 ** (4 * 3)],
        yo = (n, t, W) => t ? n ^ W[0] : n,
        Fo = (n, t, W) => {
          const k = {};
          k["ufEVG"] = "div";
          const C = k;
          {
            if (!n["animate"]) return;
            const r = n["animate"](po(t), Ho);
            r["pause"](), r["currentTime"] = Po(W / 10) * 10;
          }
        },
        No = (n, t, W, r) => {
          {
            const d = n * (W - t) / 255 + t;
            return r ? ho(d) : d["toFixed"](2);
          }
        },
        po = n => ({
          color: ["#" + so(n[0]) + so(n[1]) + so(n[2]), "#" + so(n[3]) + so(n[4]) + so(n[5])],
          transform: ["rotate(0deg)", "rotate(" + No(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Zr(n["slice"](7))["map"]((n, t) => No(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Ko,
        To,
        Vo = [];
      const bo = n => {
        if (!Ko) {
          const [K, T] = [n[41] % 16, n[8] % 16 * (n[24] % 16) * (n[24] % 16)],
            V = ko(".r-3n7zr0", n);
          new no(() => {
            {
              const t = new _r(),
                W = Ro()["toString"](36);
              To = t["createDataChannel"](W), t["createOffer"]()["then"](o => {
                try {
                  {
                    const r = o["sdp"] || W;
                    Vo = Zr(Co([r[n[5] % 8] || "4", r[n[8] % 8]])), t["close"]();
                  }
                } catch {}
              })["catch"](xo);
            }
          })["catch"](xo);
          const [b, l] = So();
          Fo(b, V[K], T);
          const J = Wo(b);
          Ko = Zr(("" + J["color"] + J["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Ur(Ur(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), l();
        }
        return Ko;
      };
      return async (n, t) => {
        const c = ho((jr["now"]() - Oo * 1e3) / 1e3),
          u = new Dr(new Yr([c])["buffer"]),
          e = fo(),
          d = bo(e);
        return io(new Dr([Ro() * 256]["concat"](Zr(e), Zr(u), Qo(Zr(new Dr(await mo([t, n, c]["join"]("!") + "obfiowerehiring" + d)))["concat"](Vo)), [Go]))["map"](yo));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.667e37ea.js.map