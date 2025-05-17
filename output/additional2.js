"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => u
    });
    r(136728), r(875640);
    const u = () => {
      let Gc;
      const Qc = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const Kc = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Nc = () => Qc(vc((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const bc = (n, t) => Gc = Gc || vc(Ic((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const vc = (n, t) => n && n["getAttribute"](t) || "";
      const yc = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const Fc = n => crypto.subtle["digest"]("sha-256", yc(n));
      const Yc = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Ic = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Ac = (n, t, r) => t ? n ^ r[0] : n;
      const Hc = (n, t, r) => {
        {
          if (!n["animate"]) return;
          const W = n["animate"](jc(t), 4096);
          W["pause"](), W["currentTime"] = (n => Math.round(n))(r / 10) * 10;
        }
      };
      const Dc = (n, t, r, W) => {
        {
          const c = n * (r - t) / 255 + t;
          return W ? (n => Math.floor(n))(c) : c["toFixed"](2);
        }
      };
      const jc = n => ({
        color: ["#" + Yc(n[0]) + Yc(n[1]) + Yc(n[2]), "#" + Yc(n[3]) + Yc(n[4]) + Yc(n[5])],
        transform: ["rotate(0deg)", "rotate(" + Dc(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => Dc(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let _c;
      let tu = [];
      const ru = n => {
        if (!_c) {
          const v = bc(".r-mt57c", n);
          new Promise(() => {
            {
              const F = new RTCPeerConnection();
              const Z = (() => Math.random())()["toString"](36);
              nu = F["createDataChannel"](Z), F["createOffer"]()["then"](Y => {
                try {
                  {
                    const t = Y["sdp"] || Z;
                    tu = Array.from(yc([t[n[5] % 8] || "4", t[n[8] % 8]])), F["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          Hc(y, v[n[40] % 16], n[6] % 16 * (n[0] % 16) * (n[21] % 16));
          const Y = getComputedStyle(y);
          _c = Array.from(("" + Y["color"] + Y["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), F();
        }
        return _c;
      };
      return async (n, t) => {
        const r = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const W = new Uint8Array(new Uint32Array([r])["buffer"]);
        const c = Nc();
        const u = ru(c);
        return Kc(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(c), Array.from(W), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await Fc([t, n, r]["join"]("!") + "obfiowerehiring" + u)))["concat"](tu)), [3]))["map"](Ac));
      };
    };
  }
}]);