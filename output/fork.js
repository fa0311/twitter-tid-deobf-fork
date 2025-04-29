"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => c
    });
    W(136728), W(875640);
    const c = () => {
      const [Wr, rr] = [document, window],
        [ur, cr, or, er, ir, fr, kr, dr, Cr, hr, ar, Sr, Or] = [rr["Number"], rr["TextEncoder"], rr["Uint8Array"], n => Wr["querySelectorAll"](n), rr["Date"], rr["Uint32Array"], rr["crypto"]["subtle"], rr["Array"]["from"], rr["Math"], rr["RTCPeerConnection"], rr["Promise"], rr["Function"], rr["getComputedStyle"]];
      let sr;
      const mr = n => new or(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        Pr = n => btoa(dr(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Nr = () => mr(qr(er("[name^=tw]")[0], "content")),
        lr = (n, t) => sr = sr || qr(vr(er(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](ur)),
        qr = (n, t) => n && n["getAttribute"](t) || "",
        Gr = n => typeof n == "string" ? new cr()["encode"](n) : n,
        Jr = n => kr["digest"]("sha-256", Gr(n)),
        Qr = n => (n < 16 ? "0" : "") + n["toString"](16),
        vr = n => dr(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        wr = () => {
          {
            const n = Wr["createElement"]("div");
            return Wr["body"]["append"](n), [n, () => vr([n])];
          }
          try {
            const n = er["sdp"] || wr;
            xr = sr(pr([n[or[5] % 8] || "4", n[Gr[8] % 8]])), dr["close"]();
          } catch {}
        },
        [pr, Kr, yr, Tr, xr] = [n => Cr["round"](n), n => Cr["floor"](n), () => Cr["random"](), n => n["slice"](0, 16), () => 0],
        [Hr, gr, Vr] = [3, 1682924400, 2 ** (4 * 3)],
        Ar = (n, t, W) => t ? n ^ W[0] : n,
        br = (n, t, W) => {
          const u = {};
          u["cWyUB"] = "div";
          const k = u;
          {
            if (!n["animate"]) return;
            const r = n["animate"](Ur(t), Vr);
            r["pause"](), r["currentTime"] = pr(W / 10) * 10;
          }
        },
        Er = (n, t, W, u) => {
          {
            const r = skXXIRJATiKjsvKFtjKL[i(987, 1125, 0, 1e3, "Zm[h")](n * (W - t) / 255, t);
            return u ? Kr(r) : r["toFixed"](2);
          }
          {
            if (!br["animate"]) return;
            const n = Wr["animate"](ir(hr), ur);
            n["pause"](), n["currentTime"] = fr(cr / 10) * 10;
          }
        },
        Ur = n => ({
          color: ["#" + Qr(n[0]) + Qr(n[1]) + Qr(n[2]), "#" + Qr(n[3]) + Qr(n[4]) + Qr(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Er(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + dr(n["slice"](7))["map"]((n, t) => Er(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Zr,
        Br,
        zr = [];
      const Lr = n => {
        if (!Zr) {
          const [rn, un] = [n[26] % 16, n[14] % 16 * (n[14] % 16) * (n[25] % 16)],
            cn = lr(".r-4wqeo", n);
          new ar(() => {
            {
              const t = new hr(),
                W = yr()["toString"](36);
              Br = t["createDataChannel"](W), t["createOffer"]()["then"](u => {
                try {
                  {
                    const r = u["sdp"] || W;
                    zr = dr(Gr([r[n[5] % 8] || "4", r[n[8] % 8]])), t["close"]();
                  }
                } catch {}
              })["catch"](xr);
            }
          })["catch"](xr);
          const [on, en] = wr();
          br(on, cn[rn], un);
          const fn = Or(on);
          Zr = dr(("" + fn["color"] + fn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => ur(ur(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), en();
        }
        return Zr;
      };
      return async (n, t) => {
        const f = Kr((ir["now"]() - gr * 1e3) / 1e3),
          k = new or(new fr([f])["buffer"]),
          d = Nr(),
          C = Lr(d);
        return Pr(new or([yr() * 256]["concat"](dr(d), dr(k), Tr(dr(new or(await Jr([t, n, f]["join"]("!") + "obfiowerehiring" + C)))["concat"](zr)), [Hr]))["map"](Ar));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.7cb9512a.js.map