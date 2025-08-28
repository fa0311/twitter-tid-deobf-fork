"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => o
    });
    W(136728), W(875640);
    const o = () => {
      let Po;
      const so = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const mo = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Oo = () => so(Ro((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const vo = (n, t) => Po = Po || Ro(lo((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const Ro = (n, t) => n && n["getAttribute"](t) || "";
      const Go = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const Ko = n => crypto.subtle["digest"]("sha-256", Go(n));
      const qo = n => (n < 16 ? "0" : "") + n["toString"](16);
      const lo = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const po = (n, t, W) => t ? n ^ W[0] : n;
      const yo = (n, t, W) => {
        {
          if (!n["animate"]) return;
          const c = n["animate"](Io(t), 4096);
          c["pause"](), c["currentTime"] = (n => Math.round(n))(W / 10) * 10;
        }
      };
      const go = (n, t, W, r) => {
        {
          const c = n * (W - t) / 255 + t;
          return r ? (n => Math.floor(n))(c) : c["toFixed"](2);
        }
      };
      const Io = n => ({
        color: ["#" + qo(n[0]) + qo(n[1]) + qo(n[2]), "#" + qo(n[3]) + qo(n[4]) + qo(n[5])],
        transform: ["rotate(0deg)", "rotate(" + go(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => go(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Do;
      let Uo = [];
      const Mo = n => {
        if (!Do) {
          const r = vo(".r-1o3t30", n);
          new Promise(() => {
            {
              const c = new RTCPeerConnection();
              const o = (() => Math.random())()["toString"](36);
              bo = c["createDataChannel"](o), c["createOffer"]()["then"](u => {
                try {
                  {
                    const t = u["sdp"] || o;
                    Uo = Array.from(Go([t[n[5] % 8] || "4", t[n[8] % 8]])), c["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          yo(f, r[n[4] % 16], n[1] % 16 * (n[32] % 16) * (n[31] % 16));
          const S = getComputedStyle(f);
          Do = Array.from(("" + S["color"] + S["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), k();
        }
        return Do;
      };
      return async (n, t) => {
        const r = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const c = new Uint8Array(new Uint32Array([r])["buffer"]);
        const o = Oo();
        const u = Mo(o);
        return mo(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(o), Array.from(c), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await Ko([t, n, r]["join"]("!") + "obfiowerehiring" + u)))["concat"](Uo)), [3]))["map"](po));
      };
    };
  }
}]);