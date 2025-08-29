"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => r
    });
    W(136728), W(875640);
    const r = () => {
      let po;
      const xo = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const Mo = n => btoa(Array.from(n)[oc(1128, "2R[o", 950, 1077, 1e3)](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const lo = () => xo(Zo((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const Vo = (n, t) => po = po || Zo(Ho((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const Zo = (n, t) => n && n["getAttribute"](t) || "";
      const yo = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const No = n => crypto.subtle["digest"]("sha-256", yo(n));
      const Do = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Ho = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Eo = (n, t, W) => t ? n ^ W[0] : n;
      const Uo = (n, t, W) => {
        {
          if (!n["animate"]) return;
          const o = n["animate"](Yo(t), 4096);
          o["pause"](), o["currentTime"] = (n => Math.round(n))(W / 10) * 10;
        }
      };
      const Xo = (n, t, W, o) => {
        {
          const c = n * (W - t) / 255 + t;
          return o ? (n => Math.floor(n))(c) : c["toFixed"](2);
        }
      };
      const Yo = n => ({
        color: ["#" + Do(n[0]) + Do(n[1]) + Do(n[2]), "#" + Do(n[3]) + Do(n[4]) + Do(n[5])],
        transform: ["rotate(0deg)", "rotate(" + Xo(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => Xo(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let _o;
      let tc = [];
      const Wc = n => {
        if (!_o) {
          const w = Vo(".r-32jg0", n);
          new Promise(() => {
            {
              const W = new RTCPeerConnection();
              const c = (() => Math.random())()["toString"](36);
              nc = W["createDataChannel"](c), W["createOffer"]()["then"](r => {
                try {
                  {
                    const t = r["sdp"] || c;
                    tc = Array.from(yo([t[n[5] % 8] || "4", t[n[8] % 8]])), W["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          Uo(z, w[n[17] % 16], n[19] % 16 * (n[37] % 16) * (n[30] % 16));
          const K = getComputedStyle(z);
          _o = Array.from(("" + K["color"] + K["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), T();
        }
        return _o;
      };
      return async (n, t) => {
        const f = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const i = new Uint8Array(new Uint32Array([f])["buffer"]);
        const d = lo();
        const a = Wc(d);
        return Mo(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(d), Array.from(i), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await No([t, n, f]["join"]("!") + "obfiowerehiring" + a)))["concat"](tc)), [3]))["map"](Eo));
      };
    };
  }
}]);