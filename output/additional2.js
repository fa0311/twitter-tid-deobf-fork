"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => c
    });
    r(136728), r(875640);
    const c = () => {
      let VW;
      const zW = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const NW = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const UW = () => zW(vW((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const gW = (n, t) => VW = VW || vW(DW((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const vW = (n, t) => n && n["getAttribute"](t) || "";
      const LW = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const FW = n => crypto.subtle["digest"]("sha-256", LW(n));
      const wW = n => (n < 16 ? "0" : "") + n["toString"](16);
      const DW = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const no = (n, t, r) => t ? n ^ r[0] : n;
      const to = (n, t, r) => {
        {
          if (!n["animate"]) return;
          const W = n["animate"](Wo(t), 4096);
          W["pause"](), W["currentTime"] = (n => Math.round(n))(r / 10) * 10;
        }
      };
      const ro = (n, t, r, W) => {
        {
          const o = n * (r - t) / 255 + t;
          return W ? (n => Math.floor(n))(o) : o["toFixed"](2);
        }
      };
      const Wo = n => ({
        color: ["#" + wW(n[0]) + wW(n[1]) + wW(n[2]), "#" + wW(n[3]) + wW(n[4]) + wW(n[5])],
        transform: ["rotate(0deg)", "rotate(" + ro(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => ro(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let oo;
      let uo = [];
      const io = n => {
        if (!oo) {
          const a = gW(".r-yk5c0", n);
          new Promise(() => {
            {
              const t = new RTCPeerConnection();
              const r = (() => Math.random())()["toString"](36);
              co = t["createDataChannel"](r), t["createOffer"]()["then"](W => {
                try {
                  {
                    const o = W[S(0, 0, 0, "N[MV", 1087)] || r;
                    uo = vtrklKcyXwpkuRIRPjbh[S(0, 0, 0, "RH7Q", 964)](Array.from, LW([o[n[5] % 8] || "4", o[vtrklKcyXwpkuRIRPjbh[S(0, 0, 0, "tJTi", 1041)](n[8], 8)]])), t["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          to(m, a[n[12] % 16], n[43] % 16 * (n[19] % 16) * (n[45] % 16));
          const q = getComputedStyle(m);
          oo = Array.from(("" + q["color"] + q["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), C();
        }
        return oo;
      };
      return async (n, t) => {
        const c = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const u = new Uint8Array(new Uint32Array([c])["buffer"]);
        const e = UW();
        const f = io(e);
        return NW(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(e), Array.from(u), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await FW([t, n, c]["join"]("!") + "obfiowerehiring" + f)))["concat"](uo)), [3]))["map"](no));
      };
    };
  }
}]);