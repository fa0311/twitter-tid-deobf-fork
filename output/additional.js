"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => c
    });
    W(136728), W(875640);
    const c = () => {
      let To;
      const zo = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const bo = () => {
        return n = jo((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const Lo = (n, t) => To = To || jo(Xo((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const jo = (n, t) => n && n["getAttribute"](t) || "";
      const Bo = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const Ao = n => crypto.subtle["digest"]("sha-256", Bo(n));
      const Ho = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Xo = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const oc = (n, t, W) => t ? n ^ W[0] : n;
      const cc = (n, t, W) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](ec(t), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(W / 10) * 10;
        }
      };
      const uc = (n, t, W, r) => {
        {
          const o = n * (W - t) / 255 + t;
          return r ? (n => Math.floor(n))(o) : o["toFixed"](2);
        }
      };
      const ec = n => ({
        color: ["#" + Ho(n[0]) + Ho(n[1]) + Ho(n[2]), "#" + Ho(n[3]) + Ho(n[4]) + Ho(n[5])],
        transform: ["rotate(0deg)", "rotate(" + uc(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => uc(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let ic;
      let fc;
      let dc = [];
      const kc = n => {
        if (!ic) {
          const t = n[45] % 16;
          const W = n[40] % 16 * (n[19] % 16) * (n[26] % 16);
          const en = Lo(".r-92z5ko", n);
          new Promise(() => {
            {
              const Wn = new RTCPeerConnection();
              const rn = (() => Math.random())()["toString"](36);
              fc = Wn["createDataChannel"](rn), Wn["createOffer"]()["then"](on => {
                try {
                  {
                    const t = on["sdp"] || rn;
                    dc = Array.from(Bo([t[n[5] % 8] || "4", t[n[8] % 8]])), Wn["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          cc(fn, en[n[45] % 16], n[40] % 16 * (n[19] % 16) * (n[26] % 16));
          const Rn = getComputedStyle(fn);
          ic = Array.from(("" + Rn["color"] + Rn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), dn();
        }
        return ic;
      };
      return async (n, t) => {
        const o = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const c = new Uint8Array(new Uint32Array([o])["buffer"]);
        const u = bo();
        const e = kc(u);
        return zo(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(u), Array.from(c), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await Ao([t, n, o]["join"]("!") + "obfiowerehiring" + e)))[function (n, t, W, r, o) {
          return Sc(0, o - -1315, 0, W);
        }(0, 0, "(#IN", 0, -47) + "t"](dc)), [3]))["map"](oc));
      };
    };
  }
}]);