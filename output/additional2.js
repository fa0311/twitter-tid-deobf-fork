"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => o
    });
    W(136728), W(875640);
    const o = () => {
      document;
      window;
      const xr = Number;
      TextEncoder;
      Uint8Array;
      Date;
      Uint32Array;
      crypto.subtle;
      Array.from;
      Math;
      RTCPeerConnection;
      Promise;
      getComputedStyle;
      let Ar;
      const Zr = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))[Gc(1214, 1136, 1096, "]bD^", 1e3) + "ce"](/=/g, "");
      const Xr = () => {
        return n = $r((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const Fr = (n, t) => Ar = Ar || $r(rc((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](xr));
      const $r = (n, t) => n && n["getAttribute"](t) || "";
      const _r = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const nc = n => crypto.subtle["digest"]("sha-256", _r(n));
      const tc = n => (n < 16 ? "0" : "") + n["toString"](16);
      const rc = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const ec = () => Math.random();
      const Cc = (n, t, W) => t ? n ^ W[0] : n;
      const Rc = (n, t, W) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](hc(t), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(W / 10) * 10;
        }
      };
      const ac = (n, t, W, r) => {
        {
          const c = n * (W - t) / 255 + t;
          return r ? (n => Math.floor(n))(c) : c["toFixed"](2);
        }
      };
      const hc = n => ({
        color: ["#" + tc(n[0]) + tc(n[1]) + tc(n[2]), "#" + tc(n[3]) + tc(n[4]) + tc(n[5])],
        transform: ["rotate(0deg)", "rotate(" + ac(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => ac(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let mc;
      let Pc = [];
      const Oc = n => {
        if (!mc) {
          const mn = Fr(".r-tflc", n);
          new Promise(() => {
            {
              const t = new RTCPeerConnection();
              const r = ec()["toString"](36);
              wc = t["createDataChannel"](r), t["createOffer"]()["then"](W => {
                try {
                  {
                    const c = W["sdp"] || r;
                    Pc = Array.from(_r([c[n[5] % 8] || "4", c[n[8] % 8]])), t["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          Rc(wn, mn[n[22] % 16], n[3] % 16 * (n[24] % 16) * (n[7] % 16));
          const On = getComputedStyle(wn);
          mc = Array.from(("" + On["color"] + On["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => xr(xr(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Pn();
        }
        return mc;
      };
      return async (n, t) => {
        const i = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const s = new Uint8Array(new Uint32Array([i])["buffer"]);
        const k = Xr();
        const d = Oc(k);
        return Zr(new Uint8Array([ec() * 256]["concat"](Array.from(k), bQGqQoSxshaCbOiAhUQx[e(0, 0, 0, 0, "xV4w")](Array.from, s), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await nc([t, n, i]["join"]("!") + "obfiowerehiring" + d)))["concat"](Pc)), [3]))["map"](Cc));
      };
    };
  }
}]);