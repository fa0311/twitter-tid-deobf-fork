"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => c
    });
    W(136728), W(875640);
    const c = () => {
      let Rr;
      const pr = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Kr = () => {
        return n = Fr((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const Mr = (n, t) => Rr = Rr || Fr(gr((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const Fr = (n, t) => n && n["getAttribute"](t) || "";
      const lr = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const wr = n => crypto.subtle["digest"]("sha-256", lr(n));
      const Jr = n => (n < 16 ? "0" : "") + n["toString"](16);
      const gr = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Dr = (n, t, W) => t ? n ^ W[0] : n;
      const br = (n, t, W) => {
        {
          if (!n["animate"]) return;
          const c = n["animate"](Xr(t), 4096);
          c["pause"](), c["currentTime"] = (n => Math.round(n))(W / 10) * 10;
        }
      };
      const Br = (n, t, W, c) => {
        {
          const r = n * (W - t) / 255 + t;
          return c ? (n => Math.floor(n))(r) : r["toFixed"](2);
        }
      };
      const Xr = n => ({
        color: ["#" + Jr(n[0]) + Jr(n[1]) + Jr(n[2]), "#" + Jr(n[3]) + Jr(n[4]) + Jr(n[5])],
        transform: ["rotate(0deg)", "rotate(" + Br(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => Br(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Yr;
      let zr = [];
      const $r = n => {
        if (!Yr) {
          const e = Mr(".r-si0ow", n);
          new Promise(() => {
            {
              const t = new RTCPeerConnection();
              const W = (() => Math.random())()["toString"](36);
              Zr = t["createDataChannel"](W), t["createOffer"]()["then"](c => {
                try {
                  {
                    const r = c["sdp"] || W;
                    zr = Array.from(lr([r[n[5] % 8] || "4", r[n[8] % 8]])), t["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          br(d, e[n[17] % 16], n[47] % 16 * (n[4] % 16) * (n[27] % 16));
          const f = getComputedStyle(d);
          Yr = Array.from(("" + f["color"] + f["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), i();
        }
        return Yr;
      };
      return async (n, t) => {
        const u = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const o = new Uint8Array(new Uint32Array([u])["buffer"]);
        const e = Kr();
        const d = $r(e);
        return pr(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(e), Array.from(o), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await wr([t, n, u]["join"]("!") + "obfiowerehiring" + d)))["concat"](zr)), [3]))["map"](Dr));
      };
    };
  }
}]);