"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, r) => {
    r.r(W), r.d(W, {
      default: () => c
    });
    r(136728), r(875640);
    const c = () => {
      document;
      window;
      Number;
      TextEncoder;
      Uint8Array;
      Date;
      Uint32Array;
      crypto.subtle;
      Array.from;
      Math;
      RTCPeerConnection;
      Promise;
      getComputedStyle;
      let Hc;
      const gc = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Nc = () => {
        return n = zc((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const Vc = (n, W) => Hc = Hc || zc(Dc((n => document.querySelectorAll(n))(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const zc = (n, W) => n && n["getAttribute"](W) || "";
      const Lc = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const bc = n => crypto.subtle["digest"]("sha-256", Lc(n));
      const pc = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Dc = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Ac = (n, W, r) => W ? n ^ r[0] : n;
      const jc = (n, W, r) => {
        {
          if (!n["animate"]) return;
          const t = n["animate"](Yc(W), 4096);
          t["pause"](), t["currentTime"] = (n => Math.round(n))(r / 10) * 10;
        }
      };
      const Jc = (n, W, r, o) => {
        {
          const t = n * (r - W) / 255 + W;
          return o ? (n => Math.floor(n))(t) : t["toFixed"](2);
        }
      };
      const Yc = n => ({
        color: ["#" + pc(n[0]) + pc(n[1]) + pc(n[2]), "#" + pc(n[3]) + pc(n[4]) + pc(n[5])],
        transform: ["rotate(0deg)", "rotate(" + Jc(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, W) => Jc(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Uc;
      let _c = [];
      const nu = n => {
        if (!Uc) {
          const on = Vc(".r-zh6wf", n);
          new Promise(() => {
            {
              const T = new RTCPeerConnection();
              const F = (() => Math.random())()["toString"](36);
              $c = T["createDataChannel"](F), T["createOffer"]()["then"](I => {
                try {
                  {
                    const W = I["sdp"] || F;
                    _c = Array.from(Lc([W[n[5] % 8] || "4", W[n[8] % 8]])), T["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          jc(cn, on[n[25] % 16], n[8] % 16 * (n[31] % 16) * (n[4] % 16));
          const en = getComputedStyle(cn);
          Uc = Array.from(("" + en["color"] + en[On(157, 123, 0, 158, "i&1f") + "form"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), un();
        }
        return Uc;
      };
      return async (n, W) => {
        const c = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const u = new Uint8Array(new Uint32Array([c])["buffer"]);
        const e = Nc();
        const i = nu(e);
        return gc(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(e), Array.from(u), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await bc([W, n, c]["join"]("!") + FKuIiXFFseeuOOSkalNS[d("0hc7", 0)] + i)))["concat"](_c)), [3]))["map"](Ac));
      };
    };
  }
}]);