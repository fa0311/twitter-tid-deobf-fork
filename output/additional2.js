"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => r
    });
    t(136728), t(875640);
    const r = () => {
      let Bt;
      const Vt = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const It = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const jt = () => Vt(Ft((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const Dt = (n, W) => Bt = Bt || Ft(At((n => document.querySelectorAll(n))(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const Ft = (n, W) => n && n["getAttribute"](W) || "";
      const zt = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const Yt = n => crypto.subtle["digest"]("sha-256", zt(n));
      const Xt = n => (n < 16 ? "0" : "") + n["toString"](16);
      const At = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const er = (n, W, t) => W ? n ^ t[0] : n;
      const ir = (n, W, t) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](dr(W), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(t / 10) * 10;
        }
      };
      const fr = (n, W, t, r) => {
        {
          const c = n * (t - W) / 255 + W;
          return r ? (n => Math.floor(n))(c) : c["toFixed"](2);
        }
      };
      const dr = n => ({
        color: ["#" + Xt(n[0]) + Xt(n[1]) + Xt(n[2]), "#" + Xt(n[3]) + Xt(n[4]) + Xt(n[5])],
        transform: ["rotate(0deg)", "rotate(" + fr(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, W) => fr(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let kr;
      let Or = [];
      const mr = n => {
        if (!kr) {
          const g = Dt(".r-iox00", n);
          new Promise(() => {
            {
              const t = new RTCPeerConnection();
              const r = (() => Math.random())()["toString"](36);
              Rr = t["createDataChannel"](r), t["createOffer"]()["then"](u => {
                try {
                  {
                    const W = u["sdp"] || r;
                    Or = Array.from(zt([W[n[5] % 8] || "4", W[n[8] % 8]])), t["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          ir(B, g[n[2] % 16], n[34] % 16 * (n[11] % 16) * (n[44] % 16));
          const V = getComputedStyle(B);
          kr = Array.from(("" + V["color"] + V["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), M();
        }
        return kr;
      };
      return async (n, W) => {
        const c = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const u = new Uint8Array(new Uint32Array([c])["buffer"]);
        const o = jt();
        const e = mr(o);
        return It(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(o), Array.from(u), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await Yt([W, n, c]["join"]("!") + "obfiowerehiring" + e)))["concat"](Or)), [3]))["map"](er));
      };
    };
  }
}]);