"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => o
    });
    r(136728), r(875640);
    const o = () => {
      let Fo;
      const Ko = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Bo = () => {
        return n = Uo((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const yo = (n, t) => Fo = Fo || Uo(Lo((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const Uo = (n, t) => n && n["getAttribute"](t) || "";
      const zo = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const Vo = n => crypto.subtle["digest"]("sha-256", zo(n));
      const jo = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Lo = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const tW = (n, t, r) => t ? n ^ r[0] : n;
      const rW = (n, t, r) => {
        {
          if (!n["animate"]) return;
          const o = n["animate"](WW(t), 4096);
          o["pause"](), o["currentTime"] = (n => Math.round(n))(r / 10) * 10;
        }
      };
      const oW = (n, t, r, o) => {
        {
          const W = n * (r - t) / 255 + t;
          return o ? (n => Math.floor(n))(W) : W["toFixed"](2);
        }
      };
      const WW = n => ({
        color: ["#" + jo(n[0]) + jo(n[1]) + jo(n[2]), "#" + jo(n[3]) + jo(n[4]) + jo(n[5])],
        transform: ["rotate(0deg)", "rotate(" + oW(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => oW(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let eW;
      let dW;
      let iW = [];
      const fW = n => {
        if (!eW) {
          const t = n[10] % 16;
          const e = n[12] % 16 * (n[23] % 16) * (n[44] % 16);
          const d = yo(".r-52ai0", n);
          new Promise(() => {
            {
              const r = new RTCPeerConnection();
              const o = (() => Math.random())()["toStr" + function (n, t, r, o) {
                return f(0, t, 0, 0, o - -1064);
              }(0, "6D@4", 0, -354)](36);
              dW = r["createDataChannel"](o), r["createOffer"]()["then"](W => {
                try {
                  {
                    const t = W["sdp"] || o;
                    iW = Array.from(zo([t[n[5] % 8] || "4", t[n[8] % 8]])), r["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          rW(s, d[n[10] % 16], n[12] % 16 * (n[23] % 16) * (n[44] % 16));
          const R = getComputedStyle(s);
          eW = Array.from(("" + R["color"] + R["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), p();
        }
        return eW;
      };
      return async (n, t) => {
        const u = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const e = new Uint8Array(new vo([u])["buffer"]);
        const d = Bo();
        const i = fW(d);
        return Ko(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(d), Array.from(e), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await Vo([t, n, u]["join"]("!") + "obfiowerehiring" + i)))["concat"](iW)), [3]))["map"](tW));
      };
    };
  }
}]);