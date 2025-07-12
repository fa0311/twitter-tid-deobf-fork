"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => u
    });
    r(136728), r(875640);
    const u = () => {
      let cc;
      const oc = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const ec = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const ic = () => oc(dc((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const kc = (n, t) => cc = cc || dc(Lc((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const dc = (n, t) => n && n["getAttribute"](t) || "";
      const fc = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const Cc = n => crypto.subtle["digest"]("sha-256", fc(n));
      const Sc = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Lc = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Qc = (n, t, r) => t ? n ^ r[0] : n;
      const hc = (n, t, r) => {
        {
          if (!n["animate"]) return;
          const W = n["animate"](Mc(t), 4096);
          W["pause"](), W["currentTime"] = (n => Math.round(n))(r / 10) * 10;
        }
      };
      const Jc = (n, t, r, W) => {
        const u = {
          "sIZKg": "div"
        };
        const k = u;
        {
          const u = n * (r - t) / 255 + t;
          return W ? (n => Math.floor(n))(u) : u["toFixed"](2);
        }
      };
      const Mc = n => ({
        color: ["#" + Sc(n[0]) + Sc(n[1]) + Sc(n[2]), "#" + Sc(n[3]) + Sc(n[4]) + Sc(n[5])],
        transform: ["rotate(0deg)", "rotate(" + Jc(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => Jc(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Fc;
      let Bc = [];
      const Dc = n => {
        if (!Fc) {
          const t = n[10] % 16;
          const tn = n[22] % 16 * (n[42] % 16) * (n[39] % 16);
          const rn = kc(".r-1cl8q0", n);
          new Promise(() => {
            {
              const H = new RTCPeerConnection();
              const T = (() => Math.random())()["toString"](36);
              Uc = H["createDataChannel"](T), H["createOffer"]()["then"](y => {
                try {
                  {
                    const t = y["sdp"] || T;
                    Bc = Array.from(fc([t[n[5] % 8] || "4", t[n[8] % 8]])), H["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          hc(Wn, rn[n[10] % 16], n[22] % 16 * (n[42] % 16) * (n[39] % 16));
          const Cn = getComputedStyle(Wn);
          Fc = Array.from(("" + Cn["color"] + Cn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), un();
        }
        return Fc;
      };
      return async (n, t) => {
        const u = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const c = new Uint8Array(new Uint32Array([u])["buffer"]);
        const o = ic();
        const e = Dc(o);
        return ec(new Uint8Array([(() => Math.random())() * 256][C = "97!4", S = 1140, ju(0, 0, S - 1618, 0, C) + "t"](Array.from(o), Array.from(c), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await Cc([t, n, u]["join"]("!") + "obfiowerehiring" + e)))["concat"](Bc)), [3]))["map"](Qc));
      };
    };
  }
}]);