"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => o
    });
    W(136728), W(875640);
    const o = () => {
      const [Sr, qr] = [document, window],
        [Cr, Or, Rr, pr, Gr, hr, br, Fr, lr, vr, Br, Jr, Pr] = [qr["Number"], qr["TextEncoder"], qr["Uint8Array"], n => Sr["querySelectorAll"](n), qr["Date"], qr["Uint32Array"], qr["crypto"]["subtle"], qr["Array"]["from"], qr["Math"], qr["RTCPeerConnection"], qr["Promise"], qr["Function"], qr["getComputedStyle"]];
      let Nr;
      const Dr = n => btoa(Fr(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Hr = () => {
          return n = Qr(pr("[name^=tw]")[0], "content"), new Rr(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        Tr = (n, t) => Nr = Nr || Qr(yr(pr(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Cr)),
        Qr = (n, t) => n && n["getAttribute"](t) || "",
        xr = n => typeof n == "string" ? new Or()["encode"](n) : n,
        Lr = n => br["digest"]("sha-256", xr(n)),
        gr = n => (n < 16 ? "0" : "") + n["toString"](16),
        yr = n => Fr(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Mr = () => {
          {
            const n = Sr["createElement"]("div");
            return Sr["body"]["append"](n), [n, () => yr([n])];
          }
          {
            const n = qr["sdp"] || Rr;
            Ar = br(Xr([n[Cr[5] % 8] || "4", n[Or[8] % 8]])), qr["close"]();
          }
        },
        [Ir, Zr, Xr, Ur, zr] = [n => lr["round"](n), n => lr["floor"](n), () => lr["random"](), n => n["slice"](0, 16), () => 0],
        [Er, Ar, Yr] = [3, 1682924400, 2 ** (4 * 3)],
        $r = (n, t, W) => t ? n ^ W[0] : n,
        _r = (n, t, W) => {
          {
            if (!n["animate"]) return;
            const r = n[(d = 967, i = ")B#B", Vr(0, 0, 0, i, d - -331) + "te")](to(t), Yr);
            r["pause"](), r["currentTime"] = Ir(W / 10) * 10;
          }
          var d, i;
        },
        no = (n, t, W, o) => {
          {
            const r = n * (W - t) / 255 + t;
            return o ? Zr(r) : r["toFixed"](2);
          }
          {
            const o = new Rr(),
              c = Ar()["toString"](36);
            br = o["createDataChannel"](c), o["createOffer"]()["then"](u => {
              try {
                const e = u["sdp"] || c;
                Or = to(W([e[Gr[5] % 8] || "4", e[Dr[8] % 8]])), o["close"]();
              } catch {}
              var k, s;
            })["catch"](Cr);
          }
        },
        to = n => ({
          color: ["#" + gr(n[0]) + gr(n[1]) + gr(n[2]), "#" + gr(n[3]) + gr(n[4]) + gr(n[5])],
          transform: ["rotate(0deg)", "rotate(" + no(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Fr(n["slice"](7))["map"]((n, t) => no(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Wo,
        ro,
        oo = [];
      const co = n => {
        if (!Wo) {
          const [t, i] = [n[23] % 16, n[27] % 16 * (n[47] % 16) * (n[38] % 16)],
            k = Tr(".r-3u929c", n);
          new Br(() => {
            {
              const W = new vr(),
                r = Xr()["toString"](36);
              ro = W["createDataChannel"](r), W["createOffer"]()["then"](o => {
                try {
                  {
                    const t = o["sdp"] || r;
                    oo = Fr(hWFQeiuKLDDzcQTODTfO[B(0, "N8pv", 783)](xr, [t[n[5] % 8] || "4", t[n[8] % 8]])), W["close"]();
                  }
                } catch {}
              })["catch"](zr);
            }
          })["catch"](zr);
          const [a, m] = Mr();
          _r(a, k[t], i);
          const s = Pr(a);
          Wo = Fr(("" + s["color"] + s["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Cr(Cr(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), m();
        }
        return Wo;
      };
      return async (n, t) => {
        const u = Zr((Gr["now"]() - Ar * 1e3) / 1e3),
          e = new Rr(new hr([u])["buffer"]),
          f = Hr(),
          d = co(f);
        return Dr(new Rr([Xr() * 256]["concat"](Fr(f), Fr(e), Ur(Fr(new Rr(await Lr([t, n, u]["join"]("!") + "obfiowerehiring" + d)))["concat"](oo)), [Er]))["map"]($r));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.3a7c6f2a.js.map