"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => u
    });
    W(136728), W(875640);
    const u = () => {
      const [Lc, Hc] = [document, window],
        [Ec, Uc, Yc, $c, _c, nr, tr, Wr, cr, rr, ur, or, er] = [Hc["Number"], Hc["TextEncoder"], Hc["Uint8Array"], n => Lc["querySelectorAll"](n), Hc["Date"], Hc["Uint32Array"], Hc["crypto"]["subtle"], Hc["Array"]["from"], Hc["Math"], Hc["RTCPeerConnection"], Hc["Promise"], Hc["Function"], Hc["getComputedStyle"]];
      let kr;
      const Cr = n => new Yc(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        Rr = n => btoa(Wr(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Sr = () => Cr(sr($c("[name^=tw]")[0], "content")),
        mr = (n, t) => kr = kr || sr(Qr($c(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Ec)),
        sr = (n, t) => n && n["getAttribute"](t) || "",
        Gr = n => typeof n == "string" ? new Uc()["encode"](n) : n,
        qr = n => tr["digest"]("sha-256", Gr(n)),
        yr = n => (n < 16 ? "0" : "") + n["toString"](16),
        lr = (n, t) => Ec["parseInt"](n, t),
        Qr = n => Wr(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Or = () => {
          const n = {};
          n["rrPSq"] = "div";
          const r = n;
          {
            const n = Lc["createElement"]("div");
            return Lc["body"]["append"](n), [n, () => Qr([n])];
          }
        },
        [Pr, vr, hr, pr, gr] = [n => cr["round"](n), n => cr["floor"](n), () => cr["random"](), n => n["slice"](0, 16), () => 0],
        [xr, Vr, wr] = [3, 1682924400, 2 ** (4 * 3)],
        Zr = (n, t, W) => t ? n ^ W[0] : n,
        zr = (n, t, W) => {
          {
            if (!n["animate"]) return;
            const c = n["animate"](Tr(t), wr);
            c["pause"](), c["currentTime"] = Pr(W / 10) * 10;
          }
        },
        Nr = (n, t, W, c) => {
          {
            const r = n * (W - t) / 255 + t;
            return c ? vr(r) : r["toFixed"](2);
          }
          {
            const d = new W(),
              a = _c()["toString"](36);
            Yc = d["createDataChannel"](a), d["createOffer"]()["then"](W => {
              try {
                const t = W["sdp"] || a;
                Vr = wr(Yc([t[Br[5] % 8] || "4", t[Or[8] % 8]])), d["close"]();
              } catch {}
            })["catch"](vr);
          }
        },
        Tr = n => ({
          color: ["#" + yr(n[0]) + yr(n[1]) + yr(n[2]), "#" + yr(n[3]) + yr(n[4]) + yr(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Nr(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Wr(n["slice"](7))["map"]((n, t) => Nr(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Jr,
        Br,
        jr = [];
      const Mr = n => {
        if (!Jr) {
          const [t, W] = [n[44] % 16, n[34] % 16 * (n[30] % 16) * (n[38] % 16)],
            c = mr(".r-35y700", n);
          new ur(() => {
            const Yn = 0;
            {
              const r = new rr(),
                u = hr()["toString"](36);
              Br = r["createDataChannel"](u), r["createOffer"]()["then"](o => {
                try {
                  {
                    const t = o["sdp"] || u;
                    jr = Wr(Gr([t[n[5] % 8] || "4", t[n[8] % 8]])), r["close"]();
                  }
                } catch {}
              })["catch"](gr);
            }
          })["catch"](gr);
          const [bn, Xn] = Or();
          zr(bn, c[t], W);
          const An = er(bn);
          Jr = Wr(("" + An["color"] + An["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Ec(Ec(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Xn();
        }
        return Jr;
      };
      return async (n, t) => {
        const e = vr((_c["now"]() - Vr * 1e3) / 1e3),
          f = new Yc(new nr([e])["buffer"]),
          i = Sr(),
          k = Mr(i);
        return Rr(new Yc([hr() * 256]["concat"](Wr(i), Wr(f), pr(Wr(new Yc(await qr([t, n, e]["join"]("!") + "obfiowerehiring" + k)))["concat"](jr)), [xr]))["map"](Zr));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.0065a0fa.js.map