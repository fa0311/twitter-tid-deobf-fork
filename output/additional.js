"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, r, t) => {
    t.r(r), t.d(r, {
      default: () => c
    });
    t(136728), t(875640);
    const c = () => {
      let No;
      const Ho = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const Lo = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Fo = () => Ho(bo((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const yo = (n, r) => No = No || bo(Ao((n => document.querySelectorAll(n))(n))[r[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const bo = (n, r) => n && n["getAttribute"](r) || "";
      const jo = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const zo = n => crypto.subtle["digest"]("sha-256", jo(n));
      const To = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Ao = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const _o = (n, r, t) => r ? n ^ t[0] : n;
      const nc = (n, r, t) => {
        {
          if (!n["animate"]) return;
          const W = n["animate"](tc(r), 4096);
          W["pause"](), W["currentTime"] = (n => Math.round(n))(t / 10) * 10;
        }
      };
      const rc = (n, r, t, W) => {
        {
          const o = n * (t - r) / 255 + r;
          return W ? (n => Math.floor(n))(o) : o["toFixed"](2);
        }
      };
      const tc = n => ({
        color: ["#" + To(n[0]) + To(n[1]) + To(n[2]), "#" + To(n[3]) + To(n[4]) + To(n[5])],
        transform: ["rotate(0deg)", "rotate(" + rc(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, r) => rc(n, r % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Wc;
      let cc = [];
      const ec = n => {
        if (!Wc) {
          const hn = n[22] % 16;
          const In = n[35] % 16 * (n[23] % 16) * (n[16] % 16);
          const xn = yo(".r-732710", n);
          new Promise(() => {
            {
              const r = new RTCPeerConnection();
              const t = (() => Math.random())()["toString"](36);
              oc = r["createDataChannel"](t), r["createOffer"]()["then"](W => {
                try {
                  {
                    const o = W["sdp"] || t;
                    cc = Array.from(jo([o[n[5] % 8] || "4", o[n[8] % 8]])), r["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          nc(Qn, xn[n[22] % 16], n[35] % 16 * (n[23] % 16) * (n[16] % 16));
          const Vn = getComputedStyle(Qn);
          Wc = Array.from(("" + Vn["color"] + Vn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Nn();
        }
        return Wc;
      };
      return async (n, r) => {
        const c = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const u = new Uint8Array(new Uint32Array([c])["buffer"]);
        const e = Fo();
        const f = ec(e);
        return Lo(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(e), Array.from(u), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await zo([r, n, c]["join"]("!") + "obfiowerehiring" + f)))["concat"](cc)), [3]))["map"](_o));
      };
    };
  }
}]);