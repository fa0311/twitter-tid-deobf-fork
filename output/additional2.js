"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => u
    });
    W(136728), W(875640);
    const u = () => {
      let Oc;
      const Kc = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Xc = () => {
        return n = Jc((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const Fc = (n, t) => Oc = Oc || Jc(Qc((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const Jc = (n, t) => n && n["getAttribute"](t) || "";
      const Mc = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const vc = n => crypto.subtle["digest"]("sha-256", Mc(n));
      const Bc = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Qc = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Zc = () => 0;
      const Yc = (n, t, W) => t ? n ^ W[0] : n;
      const Vc = (n, t, W) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](zc(t), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(W / 10) * 10;
        }
      };
      const Uc = (n, t, W, r) => {
        {
          const o = n * (W - t) / 255 + t;
          return r ? (n => Math.floor(n))(o) : o["toFixed"](2);
        }
      };
      const zc = n => ({
        color: ["#" + Bc(n[0]) + Bc(n[1]) + Bc(n[2]), "#" + Bc(n[3]) + Bc(n[4]) + Bc(n[5])],
        transform: ["rotate(0deg)", "rotate(" + Uc(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => Uc(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Dc;
      let $c = [];
      const nu = n => {
        if (!Dc) {
          const cn = Fc(".r-q2fr0", n);
          new Promise(() => {
            {
              const E = new RTCPeerConnection();
              const $ = (() => Math.random())()["toString"](36);
              Ec = E["createDataChannel"]($), E["createOffer"]()["then"](_ => {
                try {
                  {
                    const t = _["sdp"] || $;
                    $c = Array.from(Mc([t[n[5] % 8] || "4", t[n[8] % 8]])), E["close"]();
                  }
                } catch {}
              })["catch"](Zc);
            }
          })["catch"](Zc);
          Vc(un, cn[n[20] % 16], n[45] % 16 * (n[43] % 16) * (n[15] % 16));
          const en = getComputedStyle(un);
          Dc = Array.from(("" + en["color"] + en["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), on();
        }
        return Dc;
      };
      return async (n, t) => {
        const o = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const e = new Uint8Array(new Uint32Array([o])["buffer"]);
        const d = Xc();
        const f = nu(d);
        return Kc(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(d), Array.from(e), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await vc([t, n, o]["join"]("!") + "obfiowerehiring" + f)))["concat"]($c)), [3]))["map"](Yc));
      };
    };
  }
}]);