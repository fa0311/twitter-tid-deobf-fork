"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => c
    });
    W(136728), W(875640);
    const c = () => {
      let sr;
      const mr = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const Pr = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Nr = () => mr(qr((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const lr = (n, t) => sr = sr || qr(vr((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const qr = (n, t) => n && n["getAttribute"](t) || "";
      const Gr = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const Jr = n => crypto.subtle["digest"]("sha-256", Gr(n));
      const Qr = n => (n < 16 ? "0" : "") + n["toString"](16);
      const vr = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const xr = () => 0;
      const Ar = (n, t, W) => t ? n ^ W[0] : n;
      const br = (n, t, W) => {
        const u = {
          "cWyUB": "div"
        };
        {
          if (!n["animate"]) return;
          const r = n["animate"](Ur(t), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(W / 10) * 10;
        }
      };
      const Er = (n, t, W, u) => {
        {
          const r = LywWCrmGqqonntHilPSH[i(987, 1125, 0, 1e3, "Zm[h")](n * (W - t) / 255, t);
          return u ? (n => Math.floor(n))(r) : r["toFixed"](2);
        }
      };
      const Ur = n => ({
        color: ["#" + Qr(n[0]) + Qr(n[1]) + Qr(n[2]), "#" + Qr(n[3]) + Qr(n[4]) + Qr(n[5])],
        transform: ["rotate(0deg)", "rotate(" + Er(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => Er(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Zr;
      let zr = [];
      const Lr = n => {
        if (!Zr) {
          const rn = n[26] % 16;
          const un = n[14] % 16 * (n[14] % 16) * (n[25] % 16);
          const cn = lr(".r-4wqeo", n);
          new Promise(() => {
            {
              const t = new RTCPeerConnection();
              const W = (() => Math.random())()["toString"](36);
              Br = t["createDataChannel"](W), t["createOffer"]()["then"](u => {
                try {
                  {
                    const r = u["sdp"] || W;
                    zr = Array.from(Gr([r[n[5] % 8] || "4", r[n[8] % 8]])), t["close"]();
                  }
                } catch {}
              })["catch"](xr);
            }
          })["catch"](xr);
          br(on, cn[n[26] % 16], n[14] % 16 * (n[14] % 16) * (n[25] % 16));
          const fn = getComputedStyle(on);
          Zr = Array.from(("" + fn["color"] + fn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), en();
        }
        return Zr;
      };
      return async (n, t) => {
        const f = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const k = new Uint8Array(new Uint32Array([f])["buffer"]);
        const d = Nr();
        const C = Lr(d);
        return Pr(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(d), Array.from(k), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await Jr([t, n, f]["join"]("!") + "obfiowerehiring" + C)))["concat"](zr)), [3]))["map"](Ar));
      };
    };
  }
}]);