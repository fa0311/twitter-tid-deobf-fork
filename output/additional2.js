"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, r, t) => {
    t.r(r), t.d(r, {
      default: () => c
    });
    t(136728), t(875640);
    const c = () => {
      let ao;
      const ko = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const Co = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const so = () => ko(Po((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const So = (n, r) => ao = ao || Po(po((n => document.querySelectorAll(n))(n))[r[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const Po = (n, r) => n && n["getAttribute"](r) || "";
      const Ro = n => typeof n == "string" ? new $W()["encode"](n) : n;
      const lo = n => crypto.subtle["digest"]("sha-256", Ro(n));
      const Oo = n => (n < 16 ? "0" : "") + n["toString"](16);
      const po = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Vo = (n, r, t) => r ? n ^ t[0] : n;
      const Mo = (n, r, t) => {
        {
          if (!n["animate"]) return;
          const W = n["animate"](Zo(r), 4096);
          W["pause"](), W["currentTime"] = (n => Math.round(n))(t / 10) * 10;
        }
      };
      const Bo = (n, r, t, W) => {
        {
          const o = n * (t - r) / 255 + r;
          return W ? (n => Math.floor(n))(o) : o["toFixed"](2);
        }
      };
      const Zo = n => ({
        color: ["#" + Oo(n[0]) + Oo(n[1]) + Oo(n[2]), "#" + Oo(n[3]) + Oo(n[4]) + Oo(n[5])],
        transform: ["rotate(0deg)", "rotate(" + Bo(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, r) => Bo(n, r % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Io;
      let No = [];
      const Eo = n => {
        if (!Io) {
          const g = So(".r-ei3t6", n);
          new Promise(() => {
            {
              const q = new RTCPeerConnection();
              const Q = (() => Math.random())()["toString"](36);
              Ko = q["createDataChannel"](Q), q["createOffer"]()["then"](w => {
                try {
                  {
                    const r = w["sdp"] || Q;
                    No = Array.from(Ro([r[n[5] % 8] || "4", r[n[8] % 8]])), q["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          Mo(F, g[n[40] % 16], n[2] % 16 * (n[11] % 16) * (n[3] % 16));
          const I = getComputedStyle(F);
          Io = Array.from(("" + I["color"] + I["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), H();
        }
        return Io;
      };
      return async (n, r) => {
        const c = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const u = new Uint8Array(new Uint32Array([c])["buffer"]);
        const e = so();
        const i = Eo(e);
        return Co(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(e), Array.from(u), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await lo([r, n, c]["join"]("!") + "obfiowerehiring" + i)))["concat"](No)), [3]))["map"](Vo));
      };
    };
  }
}]);