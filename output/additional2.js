"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, r) => {
    r.r(W), r.d(W, {
      default: () => c
    });
    r(136728), r(875640);
    const c = () => {
      let uu;
      const ou = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const eu = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const iu = () => ou(du((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const fu = (n, W) => uu = uu || du(Ru((n => document.querySelectorAll(n))(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const du = (n, W) => n && n["getAttribute"](W) || "";
      const ku = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const au = n => crypto.subtle["digest"]("sha-256", ku(n));
      const su = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Ru = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Pu = (n, W, r) => W ? n ^ r[0] : n;
      const Ku = (n, W, r) => {
        {
          if (!n["animate"]) return;
          const t = n["animate"](hu(W), 4096);
          t["pause"](), t["currentTime"] = (n => Math.round(n))(r / 10) * 10;
        }
      };
      const pu = (n, W, r, c) => {
        {
          const t = n * (r - W) / 255 + W;
          return c ? (n => Math.floor(n))(t) : t["toFixed"](2);
        }
      };
      const hu = n => ({
        color: ["#" + su(n[0]) + su(n[1]) + su(n[2]), "#" + su(n[3]) + su(n[4]) + su(n[5])],
        transform: ["rotate(0deg)", "rotate(" + pu(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, W) => pu(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Xu;
      let Fu = [];
      const xu = n => {
        if (!Xu) {
          const c = fu(".r-5u340", n);
          new Promise(() => {
            {
              const u = new RTCPeerConnection();
              const o = (() => Math.random())()["toString"](36);
              wu = u["createDataChannel"](o), u["createOffer"]()["then"](e => {
                try {
                  {
                    const W = e["sdp"] || o;
                    Fu = Array.from(ku([W[n[5] % 8] || "4", W[n[8] % 8]])), u["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          Ku(tn, c[n[28] % 16], n[43] % 16 * (n[47] % 16) * (n[24] % 16));
          const un = getComputedStyle(tn);
          Xu = Array.from(("" + un["color"] + un["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), cn();
        }
        return Xu;
      };
      return async (n, W) => {
        const e = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const i = new Uint8Array(new Uint32Array([e])["buffer"]);
        const f = iu();
        const d = xu(f);
        return eu(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(f), Array.from(i), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await au([W, n, e]["join"]("!") + "obfiowerehiring" + d)))["concat"](Fu)), [3]))["map"](Pu));
      };
    };
  }
}]);