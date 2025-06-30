"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, c) => {
    c.r(t), c.d(t, {
      default: () => o
    });
    c(136728), c(875640);
    const o = () => {
      let vW;
      const HW = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const JW = () => {
        return n = LW((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const zW = (n, t) => vW = vW || LW(gW((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const LW = (n, t) => n && n["getAttribute"](t) || "";
      const pW = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const jW = n => crypto.subtle["digest"]("sha-256", pW(n));
      const IW = n => (n < 16 ? "0" : "") + n["toString"](16);
      const gW = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const $W = (n, t, c) => t ? n ^ c[0] : n;
      const _W = (n, t, c) => {
        {
          if (!n["animate"]) return;
          const W = n["animate"](tr(t), 4096);
          W["pause"](), W["currentTime"] = (n => Math.round(n))(c / 10) * 10;
        }
      };
      const nr = (n, t, c, W) => {
        {
          const r = n * (c - t) / 255 + t;
          return W ? (n => Math.floor(n))(r) : r["toFixed"](2);
        }
      };
      const tr = n => ({
        color: ["#" + IW(n[0]) + IW(n[1]) + IW(n[2]), "#" + IW(n[3]) + IW(n[4]) + IW(n[5])],
        transform: ["rotate(0deg)", "rotate(" + nr(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => nr(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let cr;
      let rr = [];
      const ur = n => {
        if (!cr) {
          const q = n[0] % 16;
          const P = n[17] % 16 * (n[42] % 16) * (n[17] % 16);
          const V = zW(".r-jw9bls", n);
          new Promise(() => {
            {
              const l = new RTCPeerConnection();
              const q = (() => Math.random())()["toString"](36);
              Wr = l["createDataChannel"](q), l["createOffer"]()["then"](T => {
                try {
                  {
                    const t = T["sdp"] || q;
                    rr = Array.from(pW([t[n[5] % 8] || "4", t[n[8] % 8]])), l["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          _W(R, V[n[0] % 16], n[17] % 16 * (n[42] % 16) * (n[17] % 16));
          const D = getComputedStyle(R);
          cr = Array.from(("" + D["color"] + D["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), w();
        }
        return cr;
      };
      return async (n, t) => {
        const e = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const d = new Uint8Array(new Uint32Array([e])["buffer"]);
        const i = JW();
        const f = ur(i);
        return HW(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(i), Array.from(d), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await jW([t, n, e]["join"]("!") + "obfiowerehiring" + f)))["concat"](rr)), [3]))["map"]($W));
      };
    };
  }
}]);