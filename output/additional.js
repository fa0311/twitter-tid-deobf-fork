"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => c
    });
    t(136728), t(875640);
    const c = () => {
      let Qt;
      const Pt = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const qt = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Rt = () => Pt(Kt((n => rt["querySelectorAll"](n))("[name^=tw]")[0], "content"));
      const vt = (n, W) => Qt = Qt || Kt(ht((n => rt["querySelectorAll"](n))(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const Kt = (n, W) => n && n["getAttribute"](W) || "";
      const wt = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const pt = n => kt["digest"]("sha-256", wt(n));
      const bt = n => (n < 16 ? "0" : "") + n["toString"](16);
      const ht = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Ht = (n, W, t) => W ? n ^ t[0] : n;
      const At = (n, W, t) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](zt(W), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(t / 10) * 10;
        }
      };
      const jt = (n, W, t, r) => {
        {
          const d = n * (t - W) / 255 + W;
          return r ? (n => Math.floor(n))(d) : d["toFixed"](2);
        }
      };
      const zt = n => ({
        color: ["#" + bt(n[0]) + bt(n[1]) + bt(n[2]), "#" + bt(n[3]) + bt(n[4]) + bt(n[5])],
        transform: ["rotate(0deg)", "rotate(" + jt(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, W) => jt(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Vt;
      let Lt = [];
      const Et = n => {
        if (!Vt) {
          const I = n[39] % 16;
          const B = n[14] % 16 * (n[0] % 16) * (n[10] % 16);
          const x = vt(".r-1f8dx0", n);
          new Promise(() => {
            {
              const W = new RTCPeerConnection();
              const t = (() => Math.random())()["toString"](36);
              xt = W["createDataChannel"](t), W["createOffer"]()["then"](o => {
                try {
                  {
                    const r = o["sdp"] || t;
                    Lt = Array.from(wt([r[n[5] % 8] || "4", r[n[8] % 8]])), W["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          At(L, x[n[39] % 16], n[14] % 16 * (n[0] % 16) * (n[10] % 16));
          const E = getComputedStyle(L);
          Vt = Array.from(("" + E["color"] + E["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), U();
        }
        return Vt;
      };
      return async (n, W) => {
        const o = (n => Math.floor(n))((Date["now"]() - cQChHxdVYwfybauvADew[d(1190, 1132, 1076, "TEJQ", 1e3)](1682924400, 1e3)) / 1e3);
        const c = new Uint8Array(new Uint32Array([o])["buffer"]);
        const u = Rt();
        const e = Et(u);
        return qt(new Uint8Array([(() => Math.random())() * 256]["concat"](cQChHxdVYwfybauvADew[d(0, 0, 1e3, "TEJQ")](Array.from, u), Array.from(c), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await pt([W, n, o]["join"]("!") + "obfiowerehiring" + e)))["concat"](Lt)), [3]))["map"](Ht));
      };
    };
  }
}]);