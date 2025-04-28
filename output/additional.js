"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => c
    });
    r(136728), r(875640);
    const c = () => {
      let JW;
      const qW = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const IW = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const wW = () => qW(vW((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const bW = (n, t) => JW = JW || vW(AW((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const vW = (n, t) => n && n["getAttribute"](t) || "";
      const LW = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const hW = n => crypto.subtle["digest"]("sha-256", LW(n));
      const yW = n => (n < 16 ? "0" : "") + n["toString"](16);
      const AW = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const KW = () => {
        const r = {
          "CuIEY": "div"
        };
        {
          const n = document.createElement("div");
          return document.body["append"](n), [n, () => AW([n])];
        }
      };
      const TW = (n, t, r) => t ? n ^ r[0] : n;
      const XW = (n, t, r) => {
        {
          if (!n["animate"]) return;
          const o = n["animate"](UW(t), 4096);
          o["pause"](), o["currentTime"] = (n => Math.round(n))(r / 10) * 10;
        }
      };
      const FW = (n, t, r, o) => {
        {
          const W = n * (r - t) / 255 + t;
          return o ? (n => Math.floor(n))(W) : W["toFixed"](2);
        }
      };
      const UW = n => ({
        color: ["#" + yW(n[0]) + yW(n[1]) + yW(n[2]), "#" + yW(n[3]) + yW(n[4]) + yW(n[5])],
        transform: ["rotate(0deg)", "rotate(" + FW(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => FW(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let YW;
      let ZW = [];
      const $W = n => {
        if (!YW) {
          const t = n[38] % 16;
          const r = n[22] % 16 * (n[8] % 16) * (n[14] % 16);
          const P = bW(".r-cgieo", n);
          new Promise(() => {
            if (xHcLfPzYqHkEygMfXaKd["7\xB0\xD7>\x96"]("bpqrk", "bUMvH")) {
              const r = new TextEncoder();
              const o = KW()["toString"](36);
              qW = r["createDataChannel"](o), r["createOffer"]()["then"](W => {
                try {
                  const t = W["sdp"] || o;
                  $W = (n => Math.floor(n))(Array.from([t[IW[5] % 8] || "4", t[vW[8] % 8]])), r["close"]();
                } catch {}
              })["catch"](TextEncoder);
            } else {
              const W = new RTCPeerConnection();
              const c = (() => Math.random())()["toString"](36);
              MW = W["createDataChannel"](c), W["createOffer"]()["then"](u => {
                if (xHcLfPzYqHkEygMfXaKd["7\xB0\xD7>\x96"]("OfawG", "ZCxpG")) try {
                  const n = (n[38] % 16)["sdp"] || n;
                  P = wW(Uint32Array([n[hW[5] % 8] || "4", n[W[8] % 8]])), $W["close"]();
                } catch {} else try {
                  if (!xHcLfPzYqHkEygMfXaKd["7\xB0\xD7>\x96"]("uzjpZ", "uzjpZ")) {
                    const n = QnZcsfZGENfQkJncXVWZ["\x15\x88\xDC\x13\xA6"](FW * (AW - Date) / 255, TextEncoder);
                    return KW ? qW(n) : n["toFixed"](2);
                  }
                  {
                    const t = u["sdp"] || c;
                    ZW = Array.from(LW([t[n[5] % 8] || "4", t[n[8] % 8]])), W["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          XW(p, P[n[38] % 16], n[22] % 16 * (n[8] % 16) * (n[14] % 16));
          const V = getComputedStyle(p);
          YW = Array.from(("" + V["color"] + V["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Q();
        }
        return YW;
      };
      return async (n, t) => {
        const u = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const e = new Uint8Array(new Uint32Array([u])["buffer"]);
        const i = wW();
        const d = $W(i);
        return IW(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(i), Array.from(e), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await hW([t, n, u][W(1e3, 0, 0, 0, "L7Z*")]("!") + "obfiowerehiring" + d)))["concat"](ZW)), [3]))["map"](TW));
      };
    };
  }
}]);