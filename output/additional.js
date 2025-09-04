"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  355072: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => W
    });
    r(136728), r(875640);
    const W = () => {
      let Sc;
      const lc = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Pc = () => {
        return n = Jc((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const Uc = (n, t) => Sc = Sc || Jc(Fc((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const Jc = (n, t) => n && n["getAttribute"](t) || "";
      const hc = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const wc = n => crypto.subtle["digest"]("sha-256", hc(n));
      const pc = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Fc = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Ac = (n, t, r) => t ? n ^ r[0] : n;
      const Ic = (n, t, r) => {
        {
          if (!n["animate"]) return;
          const u = n["animate"](yc(t), 4096);
          u["pause"](), u["currentTime"] = (n => Math.round(n))(r / 10) * 10;
        }
      };
      const Mc = (n, t, r, u) => {
        {
          const c = n * (r - t) / 255 + t;
          return u ? (n => Math.floor(n))(c) : c["toFixed"](2);
        }
      };
      const yc = n => ({
        color: ["#" + pc(n[0]) + pc(n[1]) + pc(n[2]), "#" + pc(n[3]) + pc(n[4]) + pc(n[5])],
        transform: ["rotate(0deg)", "rotate(" + Mc(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => Mc(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let zc;
      let Yc = [];
      const Ec = n => {
        if (!zc) {
          const t = n[33] % 16;
          const dn = n[28] % 16 * (n[28] % 16) * (n[37] % 16);
          const an = Uc(".r-0", n);
          new Promise(() => {
            {
              const r = new RTCPeerConnection();
              const c = (() => Math.random())()["toString"](36);
              Xc = r["createDataChannel"](c), r["createOffer"]()["then"](W => {
                try {
                  {
                    const t = W["sdp"] || c;
                    Yc = Array.from(hc([t[n[5] % 8] || "4", t[n[8] % 8]])), r["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          Ic(kn, an[n[33] % 16], n[28] % 16 * (n[28] % 16) * (n[37] % 16));
          const Gn = getComputedStyle(kn);
          zc = Array.from(("" + Gn["color"] + Gn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), On();
        }
        return zc;
      };
      return async (n, t) => {
        const o = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const e = new Uint8Array(new Uint32Array([o])["buffer"]);
        const f = Pc();
        const i = Ec(f);
        return lc(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(f), Array.from(e), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await wc([t, n, o]["join"]("!") + "obfiowerehiring" + i)))["concat"](Yc)), [3]))["map"](Ac));
      };
    };
  }
}]);