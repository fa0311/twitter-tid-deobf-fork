"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => u
    });
    W(136728), W(875640);
    const u = () => {
      let kr;
      const Cr = n => new Yc(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const Rr = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Sr = () => Cr(sr((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const mr = (n, t) => kr = kr || sr(Qr((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const sr = (n, t) => n && n["getAttribute"](t) || "";
      const Gr = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const qr = n => crypto.subtle["digest"]("sha-256", Gr(n));
      const yr = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Qr = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Zr = (n, t, W) => t ? n ^ W[0] : n;
      const zr = (n, t, W) => {
        {
          if (!n["animate"]) return;
          const c = n["animate"](Tr(t), 4096);
          c["pause"](), c["currentTime"] = (n => Math.round(n))(W / 10) * 10;
        }
      };
      const Nr = (n, t, W, c) => {
        {
          const r = n * (W - t) / 255 + t;
          return c ? (n => Math.floor(n))(r) : r["toFixed"](2);
        }
      };
      const Tr = n => ({
        color: ["#" + yr(n[0]) + yr(n[1]) + yr(n[2]), "#" + yr(n[3]) + yr(n[4]) + yr(n[5])],
        transform: ["rotate(0deg)", "rotate(" + Nr(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => Nr(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Jr;
      let Br;
      let jr = [];
      const Mr = n => {
        if (!Jr) {
          const t = n[44] % 16;
          const W = n[34] % 16 * (n[30] % 16) * (n[38] % 16);
          const c = mr(".r-35y700", n);
          new Promise(() => {
            {
              const r = new RTCPeerConnection();
              const u = (() => Math.random())()["toString"](36);
              Br = r["createDataChannel"](u), r["createOffer"]()["then"](o => {
                try {
                  {
                    const t = o["sdp"] || u;
                    jr = Array.from(Gr([t[n[5] % 8] || "4", t[n[8] % 8]])), r["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          zr(bn, c[n[44] % 16], n[34] % 16 * (n[30] % 16) * (n[38] % 16));
          const An = getComputedStyle(bn);
          Jr = Array.from(("" + An["color"] + An["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Xn();
        }
        return Jr;
      };
      return async (n, t) => {
        const e = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const f = new Yc(new Uint32Array([e])["buffer"]);
        const i = Sr();
        const k = Mr(i);
        return Rr(new Yc([(() => Math.random())() * 256]["concat"](Array.from(i), Array.from(f), (n => n["slice"](0, 16))(Array.from(new Yc(await qr([t, n, e]["join"]("!") + "obfiowerehiring" + k)))["concat"](jr)), [3]))["map"](Zr));
      };
    };
  }
}]);