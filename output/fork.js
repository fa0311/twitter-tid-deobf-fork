"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => c
    });
    W(136728), W(875640);
    const c = () => {
      const [fr, ar] = [document, window],
        [Cr, sr, kr, Sr, Or, hr, mr, Gr, Qr, Nr, yr, vr, Ar] = [ar["Number"], ar["TextEncoder"], ar["Uint8Array"], n => fr["querySelectorAll"](n), ar["Date"], ar["Uint32Array"], ar["crypto"]["subtle"], ar["Array"]["from"], ar["Math"], ar["RTCPeerConnection"], ar["Promise"], ar["Function"], ar["getComputedStyle"]];
      let Rr;
      const pr = n => btoa(Gr(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Kr = () => {
          return n = Fr(Sr("[name^=tw]")[0], "content"), new kr(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        Mr = (n, t) => Rr = Rr || Fr(gr(Sr(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Cr)),
        Fr = (n, t) => n && n["getAttribute"](t) || "",
        lr = n => typeof n == "string" ? new sr()["encode"](n) : n,
        wr = n => mr["digest"]("sha-256", lr(n)),
        Jr = n => (n < 16 ? "0" : "") + n["toString"](16),
        gr = n => Gr(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Lr = () => {
          {
            const n = fr["createElement"]("div");
            return fr["body"]["append"](n), [n, () => gr([n])];
          }
          {
            const n = Lr["createElement"]("div");
            return zr["body"]["append"](n), [n, () => n([n])];
          }
          var u, o;
        },
        [xr, Ir, Er, jr, Hr] = [n => Qr["round"](n), n => Qr["floor"](n), () => Qr["random"](), n => n["slice"](0, 16), () => 0],
        [Tr, Vr, Ur] = [3, 1682924400, 2 ** (4 * 3)],
        Dr = (n, t, W) => t ? n ^ W[0] : n,
        br = (n, t, W) => {
          {
            if (!n["animate"]) return;
            const c = n["animate"](Xr(t), Ur);
            c["pause"](), c["currentTime"] = xr(W / 10) * 10;
          }
          var C, s;
        },
        Br = (n, t, W, c) => {
          {
            const r = n * (W - t) / 255 + t;
            return c ? Ir(r) : r["toFixed"](2);
          }
        },
        Xr = n => ({
          color: ["#" + Jr(n[0]) + Jr(n[1]) + Jr(n[2]), "#" + Jr(n[3]) + Jr(n[4]) + Jr(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Br(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Gr(n["slice"](7))["map"]((n, t) => Br(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Yr,
        Zr,
        zr = [];
      const $r = n => {
        if (!Yr) {
          const [u, o] = [n[17] % 16, n[47] % 16 * (n[4] % 16) * (n[27] % 16)],
            e = Mr(".r-si0ow", n);
          new yr(() => {
            {
              const t = new Nr(),
                W = Er()["toString"](36);
              Zr = t["createDataChannel"](W), t["createOffer"]()["then"](c => {
                try {
                  {
                    const r = c["sdp"] || W;
                    zr = Gr(lr([r[n[5] % 8] || "4", r[n[8] % 8]])), t["close"]();
                  }
                } catch {}
              })["catch"](Hr);
            }
          })["catch"](Hr);
          const [d, i] = Lr();
          br(d, e[u], o);
          const f = Ar(d);
          Yr = Gr(("" + f["color"] + f["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Cr(Cr(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), i();
        }
        return Yr;
      };
      return async (n, t) => {
        const u = Ir((Or["now"]() - Vr * 1e3) / 1e3),
          o = new kr(new hr([u])["buffer"]),
          e = Kr(),
          d = $r(e);
        return pr(new kr([Er() * 256]["concat"](Gr(e), Gr(o), jr(Gr(new kr(await wr([t, n, u]["join"]("!") + "obfiowerehiring" + d)))["concat"](zr)), [Tr]))["map"](Dr));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.34e3f42a.js.map