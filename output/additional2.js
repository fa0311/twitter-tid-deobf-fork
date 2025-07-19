"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => r
    });
    W(136728), W(875640);
    const r = () => {
      let Mc;
      const Dc = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const Hc = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Xc = () => Dc(Ac((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const Ec = (n, t) => Mc = Mc || Ac(no((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const Ac = (n, t) => n && n["getAttribute"](t) || "";
      const Uc = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const $c = n => crypto.subtle["digest"]("sha-256", Uc(n));
      const _c = n => (n < 16 ? "0" : "") + n["toString"](16);
      const no = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const ko = (n, t, W) => t ? n ^ W[0] : n;
      const ao = (n, t, W) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](Co(t), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(W / 10) * 10;
        }
      };
      const mo = (n, t, W, r) => {
        {
          const d = n * (W - t) / 255 + t;
          return r ? (n => Math.floor(n))(d) : d["toFixed"](2);
        }
      };
      const Co = n => ({
        color: ["#" + _c(n[0]) + _c(n[1]) + _c(n[2]), "#" + _c(n[3]) + _c(n[4]) + _c(n[5])],
        transform: ["rotate(0deg)", "rotate(" + mo(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => mo(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let So;
      let so = [];
      const lo = n => {
        if (!So) {
          const Z = Ec(".r-1wn5q8", n);
          new Promise(() => {
            {
              const K = new RTCPeerConnection();
              const I = (() => Math.random())()["toString"](36);
              qo = K["createDataChannel"](I), K["createOffer"]()["then"](T => {
                try {
                  {
                    const t = T["sdp"] || I;
                    so = Array.from(Uc([t[n[5] % 8] || "4", t[n[8] % 8]])), K["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          ao(F, Z[n[31] % 16], n[16] % 16 * (n[3] % 16) * (n[7] % 16));
          const p = getComputedStyle(F);
          So = Array.from(("" + p["color"] + p["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), y();
        }
        return So;
      };
      return async (n, t) => {
        const c = (n => Math.floor(n))((Tc["now"]() - 1682924400000) / 1e3);
        const o = new Uint8Array(new Uint32Array([c])["buffer"]);
        const u = Xc();
        const e = lo(u);
        return Hc(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(u), Array.from(o), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await $c([t, n, c]["join"]("!") + "obfiowerehiring" + e)))["concat"](so)), [3]))["map"](ko));
      };
    };
  }
}]);