"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => c
    });
    t(136728), t(875640);
    const c = () => {
      const [Rr, Or] = [document, window],
        [Cr, Pr, sr, Qr, vr, Kr, hr, pr, qr, wr, yr, Dr, Ir] = [Or["Number"], Or["TextEncoder"], Or["Uint8Array"], n => Rr["querySelectorAll"](n), Or["Date"], Or["Uint32Array"], Or["crypto"]["subtle"], Or["Array"]["from"], Or["Math"], Or["RTCPeerConnection"], Or["Promise"], Or["Function"], Or["getComputedStyle"]];
      let lr;
      const Zr = n => btoa(pr(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Hr = () => {
          return n = Mr(Qr("[name^=tw]")[0], "content"), new sr(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        xr = (n, W) => lr = lr || Mr(Ar(Qr(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Cr)),
        Mr = (n, W) => n && n["getAttribute"](W) || "",
        zr = n => typeof n == "string" ? new Pr()["encode"](n) : n,
        Vr = n => hr["digest"]("sha-256", zr(n)),
        Nr = n => (n < 16 ? "0" : "") + n["toString"](16),
        Ar = n => pr(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        br = () => {
          {
            const W = Rr["createElement"]("div");
            return Rr["body"]["append"](W), [W, () => Ar([W])];
          }
          {
            const n = Qr["sdp"] || wr;
            n = Rr(Rr([n[Or[5] % 8] || "4", n[Cr[8] % 8]])), xr["close"]();
          }
        },
        [Jr, jr, Tr, Er, Lr] = [n => qr["round"](n), n => qr["floor"](n), () => qr["random"](), n => n["slice"](0, 16), () => 0],
        [Fr, Ur, $r] = [3, 1682924400, 2 ** (4 * 3)],
        Xr = (n, W, t) => W ? n ^ t[0] : n,
        Yr = (n, W, t) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](no(W), $r);
            r["pause"](), r["currentTime"] = Jr(t / 10) * 10;
          }
        },
        _r = (n, W, t, o) => {
          {
            const r = n * (t - W) / 255 + W;
            return o ? jr(r) : r["toFixed"](2);
          }
          try {
            const n = o["sdp"] || yr;
            pr = Jr(Cr([n[vr[5] % 8] || "4", n[Pr[8] % 8]])), br["close"]();
          } catch {}
        },
        no = n => ({
          color: ["#" + Nr(n[0]) + Nr(n[1]) + Nr(n[2]), "#" + Nr(n[3]) + Nr(n[4]) + Nr(n[5])],
          transform: ["rotate(0deg)", "rotate(" + _r(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + pr(n["slice"](7))["map"]((n, W) => _r(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Wo,
        to,
        ro = [];
      const co = n => {
        const M = {};
        M["fdhnF"] = "div";
        const N = M;
        if (!Wo) {
          const [Z, b] = [n[32] % 16, n[6] % 16 * (n[3] % 16) * (n[10] % 16)],
            J = xr(".r-y2tc0", n);
          new yr(() => {
            {
              const q = new wr(),
                w = Tr()["toString"](36);
              to = q["createDataChannel"](w), q["createOffer"]()["then"](y => {
                try {
                  {
                    const W = y["sdp"] || w;
                    ro = pr(zr([W[n[5] % 8] || "4", W[n[8] % 8]])), q["close"]();
                  }
                } catch {}
              })["catch"](Lr);
            }
          })["catch"](Lr);
          const [j, T] = br();
          Yr(j, J[Z], b);
          const E = Ir(j);
          Wo = pr(("" + E["color"] + E["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Cr(Cr(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), T();
        }
        return Wo;
      };
      return async (n, W) => {
        const r = jr((vr["now"]() - Ur * 1e3) / 1e3),
          o = new sr(new Kr([r])["buffer"]),
          c = Hr(),
          u = co(c);
        return Zr(new sr([Tr() * 256]["concat"](pr(c), pr(o), Er(pr(new sr(await Vr([W, n, r]["join"]("!") + "obfiowerehiring" + u)))["concat"](ro)), [Fr]))["map"](Xr));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.6a193bca.js.map