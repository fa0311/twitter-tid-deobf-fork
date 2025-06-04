"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => c
    });
    t(136728), t(875640);
    const c = () => {
      let Hc;
      const Vc = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const Fc = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Xc = () => Vc(Mc((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const Zc = (n, W) => Hc = Hc || Mc(Bc((n => document.querySelectorAll(n))(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const Mc = (n, W) => n && n["getAttribute"](W) || "";
      const Yc = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const Tc = n => crypto.subtle["digest"]("sha-256", Yc(n));
      const Ec = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Bc = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const ru = (n, W, t) => W ? n ^ t[0] : n;
      const cu = (n, W, t) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](ou(W), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(t / 10) * 10;
        }
      };
      const uu = (n, W, t, c) => {
        {
          const r = n * (t - W) / 255 + W;
          return c ? (n => Math.floor(n))(r) : r["toFixed"](2);
        }
      };
      const ou = n => ({
        color: ["#" + Ec(n[0]) + Ec(n[1]) + Ec(n[2]), "#" + Ec(n[3]) + Ec(n[4]) + Ec(n[5])],
        transform: ["rotate(0deg)", "rotate(" + uu(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, W) => uu(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let eu;
      let iu = [];
      const ku = n => {
        if (!eu) {
          const R = Zc(".r-6bmwu0", n);
          new Promise(() => {
            {
              const t = new RTCPeerConnection();
              const c = (() => Math.random())()["toString"](36);
              fu = t["createDataChannel"](c), t["createOffer"]()["then"](u => {
                try {
                  {
                    const W = u["sdp"] || c;
                    iu = Array.from(Yc([W[n[5] % 8] || "4", W[n[8] % 8]])), t["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          cu(m, R[n[2] % 16], n[44] % 16 * (n[34] % 16) * (n[25] % 16));
          const Q = getComputedStyle(m);
          eu = Array.from(("" + Q[F(1059, 1e3, "XIJv", 1130, 1112)] + Q["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), v();
        }
        return eu;
      };
      return async (n, W) => {
        const r = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const c = new Uint8Array(new Uint32Array([r])["buffer"]);
        const u = Xc();
        const o = ku(u);
        return Fc(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(u), Array.from(c), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await Tc([W, n, r]["join"]("!") + "obfiowerehiring" + o)))["concat"](iu)), [3]))["map"](ru));
      };
    };
  }
}]);