"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => o
    });
    t(136728), t(875640);
    const o = () => {
      let sc;
      const Qc = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Cc = () => {
        return n = Rc((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const Pc = (n, W) => sc = sc || Rc(Vc((n => document.querySelectorAll(n))(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const Rc = (n, W) => n && n["getAttribute"](W) || "";
      const Gc = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const vc = n => crypto.subtle["digest"]("sha-256", Gc(n));
      const xc = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Vc = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const hc = () => {
        {
          const W = document.createElement("div");
          return document.body["append"](W), [W, () => Vc([W])];
        }
      };
      const qc = (n, W, t) => W ? n ^ t[0] : n;
      const jc = (n, W, t) => {
        {
          if (!n["animate"]) return;
          const u = n["animate"](gc(W), 4096);
          u["pause"](), u["currentTime"] = (n => Math.round(n))(t / 10) * 10;
        }
      };
      const bc = (n, W, t, r) => {
        {
          const c = n * (t - W) / 255 + W;
          return r ? (n => Math.floor(n))(c) : c["toFixed"](2);
        }
      };
      const gc = n => ({
        color: ["#" + xc(n[0]) + xc(n[1]) + xc(n[2]), "#" + xc(n[3]) + xc(n[4]) + xc(n[5])],
        transform: ["rotate(0deg)", "rotate(" + bc(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, W) => bc(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Hc;
      let Mc = [];
      const zc = n => {
        if (!Hc) {
          const d = Pc(".r-zvcwg", n);
          new Promise(() => {
            {
              const W = new RTCPeerConnection();
              const t = (() => Math.random())()["toString"](36);
              Ic = W["createDataChannel"](t), W["createOffer"]()["then"](r => {
                try {
                  if (KtbirqbIvPbeBNgNkHkL[S(0, "6e5E", -87)] !== "WgRsc") try {
                    const n = Gc[S(0, "t%v[", -93)] || qc;
                    jc = i(KtbirqbIvPbeBNgNkHkL[a("zieI", 1026)](Date, [n[(n => Math.floor(n))[5] % 8] || "4", n[n[8] % 8]])), hc[a("8T&U", 1016)]();
                  } catch {} else {
                    const c = r["sdp"] || t;
                    Mc = Array.from(Gc([c[n[5] % 8] || "4", c[n[8] % 8]])), W["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          jc(i, d[n[39] % 16], n[40] % 16 * (n[47] % 16) * (n[21] % 16));
          const C = getComputedStyle(i);
          Hc = Array.from(("" + C["color"] + C["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Q();
        }
        return Hc;
      };
      return async (n, W) => {
        const c = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const o = new Uint8Array(new Uint32Array([c])["buffer"]);
        const u = Cc();
        const e = zc(u);
        return Qc(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(u), Array.from(o), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await vc([W, n, c]["join"]("!") + "obfiowerehiring" + e)))["concat"](Mc)), [3]))["map"](qc));
      };
    };
  }
}]);