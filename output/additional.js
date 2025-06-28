"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => c
    });
    t(136728), t(875640);
    const c = () => {
      let kr;
      const ar = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Cr = () => {
        return n = mr((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const sr = (n, W) => kr = kr || mr(Or((n => document.querySelectorAll(n))(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const mr = (n, W) => n && n["getAttribute"](W) || "";
      const Sr = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const Gr = n => crypto.subtle["digest"]("sha-256", Sr(n));
      const hr = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Or = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Nr = (n, W, t) => W ? n ^ t[0] : n;
      const br = (n, W, t) => {
        {
          if (!n["animate"]) return;
          const c = n["animate"](Ur(W), 4096);
          c["pause"](), c["currentTime"] = (n => Math.round(n))(t / 10) * 10;
        }
      };
      const xr = (n, W, t, c) => {
        {
          const r = n * (t - W) / 255 + W;
          return c ? (n => Math[Kr(1063, 1073, "kvu]", 940, 1e3)](n))(r) : r["toFixed"](2);
        }
      };
      const Ur = n => ({
        color: ["#" + hr(n[0]) + hr(n[1]) + hr(n[2]), "#" + hr(n[3]) + hr(n[4]) + hr(n[5])],
        transform: ["rotate(0deg)", "rotate(" + xr(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, W) => xr(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let jr;
      let Jr = [];
      const Tr = n => {
        if (!jr) {
          const un = n[13] % 16;
          const en = n[27] % 16 * (n[36] % 16) * (n[23] % 16);
          const fn = sr(".r-7yee8", n);
          new Promise(() => {
            {
              const W = new RTCPeerConnection();
              const t = (() => Math.random())()["toString"](36);
              Dr = W["createDataChannel"](t), W["createOffer"]()["then"](c => {
                try {
                  {
                    const r = c["sdp"] || t;
                    Jr = Array.from(Sr([r[n[5] % 8] || "4", r[n[8] % 8]])), W["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          br(dn, fn[n[13] % 16], n[27] % 16 * (n[36] % 16) * (n[23] % 16));
          const hn = getComputedStyle(dn);
          jr = Array.from(("" + hn["color"] + hn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), kn();
        }
        return jr;
      };
      return async (n, W) => {
        const o = (n => Math[Kr(1063, 1073, "kvu]", 940, 1e3)](n))((Date["now"]() - 1682924400000) / 1e3);
        const u = new Uint8Array(new Uint32Array([o])["buffer"]);
        const e = Cr();
        const f = Tr(e);
        return ar(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(e), Array.from(u), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await Gr([W, n, o]["join"]("!") + "obfiowerehiring" + f)))["concat"](Jr)), [3]))["map"](Nr));
      };
    };
  }
}]);