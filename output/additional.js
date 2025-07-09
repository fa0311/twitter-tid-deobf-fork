"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => r
    });
    W(136728), W(875640);
    const r = () => {
      let fc;
      const dc = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Cc = () => {
        return n = ac((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const kc = (n, t) => fc = fc || ac(Pc((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const ac = (n, t) => n && n["getAttribute"](t) || "";
      const sc = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const mc = n => crypto.subtle["digest"]("sha-256", sc(n));
      const Sc = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Pc = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const qc = (n, t, W) => t ? n ^ W[0] : n;
      const wc = (n, t, W) => {
        {
          if (!n["animate"]) return;
          const o = n["animate"](Qc(t), 4096);
          o["pause"](), o["currentTime"] = (n => Math.round(n))(W / 10) * 10;
        }
      };
      const hc = (n, t, W, o) => {
        const u = {
          "rYDjc": "div"
        };
        const f = u;
        {
          const r = n * (W - t) / 255 + t;
          return o ? (n => Math.floor(n))(r) : r["toFixed"](2);
        }
      };
      const Qc = n => ({
        color: ["#" + Sc(n[0]) + Sc(n[1]) + Sc(n[2]), "#" + Sc(n[3]) + Sc(n[4]) + Sc(n[5])],
        transform: ["rotate(0deg)", "rotate(" + hc(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => hc(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let yc;
      let Zc;
      let Kc = [];
      const Ec = n => {
        if (!yc) {
          const R = n[25] % 16;
          const N = n[5] % 16 * (n[0] % 16) * (n[42] % 16);
          const J = kc(".r-h6nf00", n);
          new Promise(() => {
            {
              const t = new RTCPeerConnection();
              const W = (() => Math.random())()["toString"](36);
              Zc = t["createDataChannel"](W), t["createOffer"]()["then"](r => {
                try {
                  {
                    const o = r["sdp"] || W;
                    Kc = Array.from(sc([o[n[5] % 8] || "4", o[n[8] % 8]])), t["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          wc(B, J[n[25] % 16], n[5] % 16 * (n[0] % 16) * (n[42] % 16));
          const O = getComputedStyle(B);
          yc = Array.from(("" + O["color"] + O["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), p();
        }
        return yc;
      };
      return async (n, t) => {
        const e = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const f = new Uint8Array(new Uint32Array([e])["buffer"]);
        const i = Cc();
        const d = Ec(i);
        return dc(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(i), Array.from(f), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await mc([t, n, e]["join"]("!") + "obfiowerehiring" + d)))["concat"](Kc)), [3]))["map"](qc));
      };
    };
  }
}]);