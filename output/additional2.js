"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => c
    });
    W(136728), W(875640);
    const c = () => {
      let Ru;
      const qu = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Pu = () => {
        return n = Lu((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const Ou = (n, t) => Ru = Ru || Lu(pu((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const Lu = (n, t) => n && n["getAttribute"](t) || "";
      const Nu = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const Qu = n => crypto.subtle["digest"]("sha-256", Nu(n));
      const hu = n => (n < 16 ? "0" : "") + n["toString"](16);
      const pu = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Tu = (n, t, W) => t ? n ^ W[0] : n;
      const xu = (n, t, W) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](Du(t), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(W / 10) * 10;
        }
      };
      const Au = (n, t, W, r) => {
        {
          const c = n * (W - t) / 255 + t;
          return r ? (n => Math.floor(n))(c) : c["toFixed"](2);
        }
      };
      const Du = n => ({
        color: ["#" + hu(n[0]) + hu(n[1]) + hu(n[2]), "#" + hu(n[3]) + hu(n[4]) + hu(n[5])],
        transform: ["rotate(0deg)", "rotate(" + Au(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => Au(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let bu;
      let wu = [];
      const Zu = n => {
        if (!bu) {
          const x = Ou(".r-awq2hi", n);
          new Su(() => {
            {
              const I = new RTCPeerConnection();
              const F = (() => Math.random())()["toString"](36);
              Yu = I["createDataChannel"](F), I["createOffer"]()["then"](Y => {
                try {
                  {
                    const t = Y["sdp"] || F;
                    wu = Array.from(Nu([t[n[5] % 8] || "4", t[n[8] % 8]])), I["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          xu(A, x[n[6] % 16], n[20] % 16 * (n[44] % 16) * (n[37] % 16));
          const b = getComputedStyle(A);
          bu = Array.from(("" + b["color"] + b["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), D();
        }
        return bu;
      };
      return async (n, t) => {
        const o = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const e = new Uint8Array(new Uint32Array([o])["buffer"]);
        const d = Pu();
        const f = Zu(d);
        return qu(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(d), Array.from(e), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await Qu([t, n, o]["join"]("!") + "obfiowerehiring" + f)))["concat"](wu)), [3]))["map"](Tu));
      };
    };
  }
}]);