"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => u
    });
    r(136728), r(875640);
    const u = () => {
      let Gc;
      const Sc = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const hc = () => {
        return n = Qc((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const wc = (n, t) => Gc = Gc || Qc(Hc((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const Qc = (n, t) => n && n["getAttribute"](t) || "";
      const lc = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const Rc = n => crypto.subtle["digest"]("sha-256", lc(n));
      const gc = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Hc = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const jc = (n, t, r) => t ? n ^ r[0] : n;
      const xc = (n, t, r) => {
        {
          if (!n["animate"]) return;
          const c = n["animate"](Uc(t), 4096);
          c["pause"](), c["currentTime"] = (n => Math.round(n))(r / 10) * 10;
        }
      };
      const Fc = (n, t, r, c) => {
        {
          const u = n * (r - t) / 255 + t;
          return c ? (n => Math.floor(n))(u) : u["toFixed"](2);
        }
      };
      const Uc = n => ({
        color: ["#" + gc(n[0]) + gc(n[1]) + gc(n[2]), "#" + gc(n[3]) + gc(n[4]) + gc(n[5])],
        transform: ["rotate(0deg)", "rotate(" + Fc(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => Fc(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Zc;
      let Jc = [];
      const Lc = n => {
        if (!Zc) {
          const q = n[27] % 16;
          const N = n[9] % 16 * (n[11] % 16) * (n[30] % 16);
          const B = wc(".r-8qwd6w", n);
          new Promise(() => {
            {
              const t = new RTCPeerConnection();
              const r = (() => Math.random())()["toString"](36);
              zc = t["createDataChannel"](r), t["createOffer"]()["then"](u => {
                try {
                  {
                    const c = u["sdp"] || r;
                    Jc = Array.from(lc([c[n[5] % 8] || "4", c[n[8] % 8]])), t["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          xc(X, B[n[27] % 16], n[9] % 16 * (n[11] % 16) * (n[30] % 16));
          const V = getComputedStyle(X);
          Zc = Array.from(("" + V["color"] + V["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), O();
        }
        return Zc;
      };
      return async (n, t) => {
        const e = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const i = new Uint8Array(new Uint32Array([e])["buffer"]);
        const f = hc();
        const d = Lc(f);
        return Sc(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(f), Array.from(i), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await Rc([t, n, e]["join"]("!") + "obfiowerehiring" + d)))["concat"](Jc)), [3]))["map"](jc));
      };
    };
  }
}]);