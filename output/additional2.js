"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => c
    });
    t(136728), t(875640);
    const c = () => {
      let lr;
      const Zr = n => btoa(pr(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Hr = () => {
        return n = Mr((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const xr = (n, W) => lr = lr || Mr(Ar((n => document.querySelectorAll(n))(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const Mr = (n, W) => n && n["getAttribute"](W) || "";
      const zr = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const Vr = n => crypto.subtle["digest"]("sha-256", zr(n));
      const Nr = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Ar = n => pr(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Xr = (n, W, t) => W ? n ^ t[0] : n;
      const Yr = (n, W, t) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](no(W), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(t / 10) * 10;
        }
      };
      const _r = (n, W, t, o) => {
        {
          const r = n * (t - W) / 255 + W;
          return o ? (n => Math.floor(n))(r) : r["toFixed"](2);
        }
      };
      const no = n => ({
        color: ["#" + Nr(n[0]) + Nr(n[1]) + Nr(n[2]), "#" + Nr(n[3]) + Nr(n[4]) + Nr(n[5])],
        transform: ["rotate(0deg)", "rotate(" + _r(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + pr(n["slice"](7))["map"]((n, W) => _r(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Wo;
      let ro = [];
      const co = n => {
        if (!Wo) {
          const J = xr(".r-y2tc0", n);
          new Promise(() => {
            {
              const q = new RTCPeerConnection();
              const w = (() => Math.random())()["toString"](36);
              to = q["createDataChannel"](w), q["createOffer"]()["then"](y => {
                try {
                  {
                    const W = y["sdp"] || w;
                    ro = pr(zr([W[n[5] % 8] || "4", W[n[8] % 8]])), q["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          Yr(j, J[n[32] % 16], n[6] % 16 * (n[3] % 16) * (n[10] % 16));
          const E = getComputedStyle(j);
          Wo = pr(("" + E["color"] + E["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), T();
        }
        return Wo;
      };
      return async (n, W) => {
        const r = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const o = new Uint8Array(new Uint32Array([r])["buffer"]);
        const c = Hr();
        const u = co(c);
        return Zr(new Uint8Array([(() => Math.random())() * 256]["concat"](pr(c), pr(o), (n => n["slice"](0, 16))(pr(new Uint8Array(await Vr([W, n, r]["join"]("!") + "obfiowerehiring" + u)))["concat"](ro)), [3]))["map"](Xr));
      };
    };
  }
}]);