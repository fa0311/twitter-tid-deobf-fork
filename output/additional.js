"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => u
    });
    W(136728), W(875640);
    const u = () => {
      let tu;
      const Wu = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const ru = () => {
        return n = uu((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const cu = (n, t) => tu = tu || uu(du((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const uu = (n, t) => n && n["getAttribute"](t) || "";
      const ou = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const eu = n => crypto.subtle["digest"]("sha-256", ou(n));
      const fu = n => (n < 16 ? "0" : "") + n["toString"](16);
      const du = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Ou = (n, t, W) => t ? n ^ W[0] : n;
      const Pu = (n, t, W) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](Gu(t), 4096);
          r["pause"](), r[s = "7tHw", C = 764, xc(0, 0, s, 0, C - -169) + "ntTime"] = (n => Math.round(n))(W / 10) * 10;
        }
        var s;
        var C;
      };
      const Qu = (n, t, W, r) => {
        {
          const c = n * (W - t) / 255 + t;
          return r ? (n => Math.floor(n))(c) : c["toFixed"](2);
        }
      };
      const Gu = n => ({
        color: ["#" + fu(n[0]) + fu(n[1]) + fu(n[2]), "#" + fu(n[3]) + fu(n[4]) + fu(n[5])],
        transform: ["rotate(0deg)", "rotate(" + Qu(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => Qu(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let wu;
      let Nu = [];
      const Iu = n => {
        if (!wu) {
          const b = n[6] % 16;
          const T = n[37] % 16 * (n[9] % 16) * (n[17] % 16);
          const j = cu(".r-5hui0", n);
          new Promise(() => {
            {
              const H = new RTCPeerConnection();
              const V = (() => Math.random())()["toString"](36);
              Du = H["createDataChannel"](V), H["createOffer"]()["then"](K => {
                try {
                  {
                    const t = K["sdp"] || V;
                    Nu = Array.from(ou([t[n[5] % 8] || "4", t[n[8] % 8]])), H["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          Pu(M, j[n[6] % 16], n[37] % 16 * (n[9] % 16) * (n[17] % 16));
          const E = getComputedStyle(M);
          wu = Array.from(("" + E["color"] + E["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), U();
        }
        return wu;
      };
      return async (n, t) => {
        const o = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const e = new Uint8Array(new Uint32Array([o])["buffer"]);
        const f = ru();
        const i = Iu(f);
        return Wu(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(f), Array.from(e), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await eu([t, n, o]["join"]("!") + "obfiowerehiring" + i)))["concat"](Nu)), [3]))["map"](Ou));
      };
    };
  }
}]);