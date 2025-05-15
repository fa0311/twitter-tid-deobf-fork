"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => u
    });
    t(136728), t(875640);
    const u = () => {
      let Bu;
      const Tu = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const Uu = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const vu = () => Tu(Iu((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const Fu = (n, W) => Bu = Bu || Iu(Xu((n => document.querySelectorAll(n))(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const Iu = (n, W) => n && n["getAttribute"](W) || "";
      const Au = n => typeof n == "string" ? new pu()["encode"](n) : n;
      const xu = n => crypto.subtle["digest"]("sha-256", Au(n));
      const Mu = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Xu = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const uc = (n, W, t) => W ? n ^ t[0] : n;
      const cc = (n, W, t) => {
        {
          if (!n[function (n, W, t, r, o) {
            return qu(W - -977, 0, o);
          }(0, -63, 0, 0, "c9wG") + "te"]) return;
          const e = n["animate"](fc(W), 4096);
          e["pause"](), e["currentTime"] = (n => Math.round(n))(t / 10) * 10;
        }
      };
      const ec = (n, W, t, o) => {
        {
          const r = n * (t - W) / 255 + W;
          return o ? (n => Math.floor(n))(r) : r["toFixed"](2);
        }
      };
      const fc = n => ({
        color: ["#" + Mu(n[0]) + Mu(n[1]) + Mu(n[2]), "#" + Mu(n[3]) + Mu(n[4]) + Mu(n[5])],
        transform: ["rotate(0deg)", "rotate(" + ec(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, W) => ec(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let kc;
      let ac;
      let Oc = [];
      const mc = n => {
        if (!kc) {
          const O = n[14] % 16;
          const s = n[28] % 16 * (n[46] % 16) * (n[13] % 16);
          const m = Fu(".r-1nqvuo", n);
          new Promise(() => {
            {
              const W = new RTCPeerConnection();
              const t = (() => Math.random())()["toString"](36);
              ac = W["createDataChannel"](t), W["createOffer"]()["then"](o => {
                try {
                  {
                    const r = o["sdp"] || t;
                    Oc = Array.from(Au([r[n[5] % 8] || "4", r[n[8] % 8]])), W["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          cc(S, m[n[14] % 16], n[28] % 16 * (n[46] % 16) * (n[13] % 16));
          const R = getComputedStyle(S);
          kc = Array.from(("" + R["color"] + R["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), C();
        }
        return kc;
      };
      return async (n, W) => {
        const c = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const e = new Uint8Array(new Uint32Array([c])["buffer"]);
        const f = vu();
        const i = mc(f);
        return Uu(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(f), Array.from(e), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await xu([W, n, c]["join"]("!") + "obfiowerehiring" + i)))["concat"](Oc)), [3]))["map"](uc));
      };
    };
  }
}]);