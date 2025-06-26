"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => c
    });
    r(136728), r(875640);
    const c = () => {
      let Hc;
      const Zc = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const pc = () => {
        return n = xc((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const Mc = (n, t) => Hc = Hc || xc(Vc((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const xc = (n, t) => n && n["getAttribute"](t) || "";
      const Lc = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const bc = n => crypto.subtle["digest"]("sha-256", Lc(n));
      const Uc = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Vc = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Yc = (n, t, r) => t ? n ^ r[0] : n;
      const $c = (n, t, r) => {
        {
          if (!n["animate"]) return;
          const W = n["animate"](nu(t), 4096);
          W["pause"](), W["currentTime"] = (n => Math.round(n))(r / 10) * 10;
        }
      };
      const _c = (n, t, r, W) => {
        {
          const c = n * (r - t) / 255 + t;
          return W ? (n => Math.floor(n))(c) : c["toFixed"](2);
        }
      };
      const nu = n => ({
        color: ["#" + Uc(n[0]) + Uc(n[1]) + Uc(n[2]), "#" + Uc(n[3]) + Uc(n[4]) + Uc(n[5])],
        transform: ["rotate(0deg)", "rotate(" + _c(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => _c(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Wu;
      let uu = [];
      const du = n => {
        if (!Wu) {
          const t = n[34] % 16;
          const fn = n[36] % 16 * (n[1] % 16) * (n[18] % 16);
          const kn = Mc(".r-27btdi", n);
          new Promise(() => {
            {
              const r = new RTCPeerConnection();
              const c = (() => Math.random())()["toString"](36);
              cu = r["createData" + Rt(0, 948, "n6Z2", 840, 1e3) + "el"](c), r["createOffer"]()["then"](u => {
                if (hDJVKGxNvJVqnDZQMAFl[O(0, 0, "*qWG", 965, 1e3)]("KUOnt", "KUOnt")) {
                  const n = $c["sdp"] || RTCPeerConnection;
                  _c = (n => Math.round(n))(Mc([n[Array.from[5] % 8] || "4", n[Uc[8] % 8]])), Date["close"]();
                } else try {
                  {
                    const t = u["sdp"] || c;
                    uu = Array.from(Lc([t[n[5] % 8] || "4", t[n[8] % 8]])), r["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          $c(an, kn[n[34] % 16], n[36] % 16 * (n[1] % 16) * (n[18] % 16));
          const sn = getComputedStyle(an);
          Wu = Array.from(("" + sn["color"] + sn["transform"])[Sn(1e3, 0, 0, "1!)Y") + "All"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Cn();
        }
        return Wu;
      };
      return async (n, t) => {
        const e = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const d = new Uint8Array(new Uint32Array([e])["buffer"]);
        const f = pc();
        const i = du(f);
        return Zc(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(f), Array.from(d), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await bc([t, n, e]["join"]("!") + "obfiowerehiring" + i)))["concat"](uu)), [3]))["map"](Yc));
      };
    };
  }
}]);