"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => o
    });
    W(136728), W(875640);
    const o = () => {
      let Nr;
      const Dr = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Hr = () => {
        return n = Qr((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const Tr = (n, t) => Nr = Nr || Qr(yr((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const Qr = (n, t) => n && n["getAttribute"](t) || "";
      const xr = n => typeof n == "string" ? new Or()["encode"](n) : n;
      const Lr = n => br["digest"]("sha-256", xr(n));
      const gr = n => (n < 16 ? "0" : "") + n["toString"](16);
      const yr = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const $r = (n, t, W) => t ? n ^ W[0] : n;
      const _r = (n, t, W) => {
        {
          if (!n["animate"]) return;
          const r = n[d = 967, i = ")B#B", Vr(0, 0, 0, i, d - -331) + "te"](to(t), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(W / 10) * 10;
        }
        var d;
        var i;
      };
      const no = (n, t, W, o) => {
        {
          const r = n * (W - t) / 255 + t;
          return o ? (n => Math.floor(n))(r) : r["toFixed"](2);
        }
      };
      const to = n => ({
        color: ["#" + gr(n[0]) + gr(n[1]) + gr(n[2]), "#" + gr(n[3]) + gr(n[4]) + gr(n[5])],
        transform: ["rotate(0deg)", "rotate(" + no(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => no(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Wo;
      let oo = [];
      const co = n => {
        if (!Wo) {
          const k = Tr(".r-3u929c", n);
          new Promise(() => {
            {
              const W = new RTCPeerConnection();
              const r = (() => Math.random())()["toString"](36);
              ro = W["createDataChannel"](r), W["createOffer"]()["then"](o => {
                try {
                  {
                    const t = o["sdp"] || r;
                    oo = Array.from(RdIvvPipYJEdeHtWNfPT[B(0, "N8pv", 783)](xr, [t[n[5] % 8] || "4", t[n[8] % 8]])), W["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          _r(a, k[n[23] % 16], n[27] % 16 * (n[47] % 16) * (n[38] % 16));
          const s = getComputedStyle(a);
          Wo = Array.from(("" + s["color"] + s["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), m();
        }
        return Wo;
      };
      return async (n, t) => {
        const u = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const e = new Uint8Array(new Uint32Array([u])["buffer"]);
        const f = Hr();
        const d = co(f);
        return Dr(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(f), Array.from(e), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await Lr([t, n, u]["join"]("!") + "obfiowerehiring" + d)))["concat"](oo)), [3]))["map"]($r));
      };
    };
  }
}]);