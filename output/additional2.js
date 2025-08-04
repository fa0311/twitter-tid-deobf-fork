"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => o
    });
    r(136728), r(875640);
    const o = () => {
      let kW;
      const sW = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const NW = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const RW = () => sW(SW((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const mW = (n, t) => kW = kW || SW(PW((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const SW = (n, t) => n && n["getAttribute"](t) || "";
      const qW = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const aW = n => crypto.subtle["digest"]("sha-256", qW(n));
      const yW = n => (n < 16 ? "0" : "") + n["toString"](16);
      const PW = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const KW = (n, t, r) => t ? n ^ r[0] : n;
      const JW = (n, t, r) => {
        {
          if (!n[function (n, t, r, e, f) {
            return bW(n - 137, n - -507, r - 285, r, f - 283);
          }(91, 0, "^[Yt", 0, 6) + "te"]) return;
          const d = n["animate"](wW(t), 4096);
          d["pause"](), d["currentTime"] = (n => Math.round(n))(r / 10) * 10;
        }
      };
      const VW = (n, t, r, c) => {
        {
          const W = n * (r - t) / 255 + t;
          return c ? (n => Math.floor(n))(W) : W["toFixed"](2);
        }
      };
      const wW = n => ({
        color: ["#" + yW(n[0]) + yW(n[1]) + yW(n[2]), "#" + yW(n[3]) + yW(n[4]) + yW(n[5])],
        transform: ["rotate(0deg)", "rotate(" + VW(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => VW(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let vW;
      let pW = [];
      const MW = n => {
        if (!vW) {
          const z = mW(".r-s00brq", n);
          new Promise(() => {
            {
              const p = new RTCPeerConnection();
              const M = (() => Math.random())()["toString"](36);
              HW = p["createDataChannel"](M), p["createOffer"]()["then"](j => {
                try {
                  {
                    const t = j["sdp"] || M;
                    pW = Array.from(qW([t[n[5] % 8] || "4", t[n[8] % 8]])), p["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          JW(E, z[n[40] % 16], n[18] % 16 * (n[34] % 16) * (n[2] % 16));
          const $ = getComputedStyle(E);
          vW = Array.from(("" + $["color"] + $["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), _();
        }
        return vW;
      };
      return async (n, t) => {
        const r = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const W = new Uint8Array(new Uint32Array([r])["buffer"]);
        const c = RW();
        const o = MW(c);
        return NW(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(c), Array.from(W), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await aW([t, n, r]["join"]("!") + "obfiowerehiring" + o)))["concat"](pW)), [3]))["map"](KW));
      };
    };
  }
}]);