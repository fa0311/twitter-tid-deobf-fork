"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => u
    });
    t(136728), t(875640);
    const u = () => {
      let Ho;
      const Bo = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Xo = () => {
        return n = No((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const Zo = (n, W) => Ho = Ho || No(To((n => document.querySelectorAll(n))(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const No = (n, W) => n && n["getAttribute"](W) || "";
      const Do = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const Lo = n => crypto.subtle["digest"]("sha-256", Do(n));
      const Yo = n => (n < 16 ? "0" : "") + n["toString"](16);
      const To = n => Array.from(n)["map"](n => (n["paren" + fu("uav9", 927, 1e3, 920, 1010) + "ent"]?.["removeChild"](n), n));
      const go = n => Math.round(n);
      dCyzVhTKshnbkpSvYEpb[ou(128, 18, "1cjy", 267, 0)](2, 12);
      const nu = (n, W, t) => W ? n ^ t[0] : n;
      const Wu = (n, W, t) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](ru(W), dCyzVhTKshnbkpSvYEpb[ou(128, 18, "1cjy", 267, 0)](2, 12));
          r["pause"](), r["currentTime"] = go(t / 10) * 10;
        }
      };
      const tu = (n, W, t, r) => {
        {
          const o = n * (t - W) / 255 + W;
          return r ? (n => Math.floor(n))(o) : o["toFixed"](2);
        }
      };
      const ru = n => ({
        color: ["#" + Yo(n[0]) + Yo(n[1]) + Yo(n[2]), "#" + Yo(n[3]) + Yo(n[4]) + Yo(n[5])],
        transform: ["rotate(0deg)", "rotate(" + tu(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, W) => tu(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let uu;
      let eu = [];
      const du = n => {
        if (!uu) {
          const E = n[11] % 16;
          const U = n[21] % 16 * (n[12] % 16) * (n[40] % 16);
          const $ = Zo(".r-8kvco0", n);
          new Promise(() => {
            {
              const r = new RTCPeerConnection();
              const Z = (() => Math.random())()["toString"](36);
              cu = r["createDataChannel"](Z), r["createOffer"]()["then"](N => {
                const z = {
                  "uaQkI": "div"
                };
                const g = z;
                if (SabwTNquLrHWMLXHuVNy[dn("ndefinedn - 55", 1255, "ndefinedn - 11", 0, "ndefined")]("ViKlh", "ViKlh")) {
                  const n = crypto.subtle["createElement"](g["uaQkI"]);
                  return Date["body"]["append"](n), [n, () => n([n])];
                }
                try {
                  {
                    const W = N["sdp"] || Z;
                    eu = Array.from(Do([W[n[5] % 8] || "4", W[n[8] % 8]])), r["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          Wu(_, $[n[11] % 16], n[21] % 16 * (n[12] % 16) * (n[40] % 16));
          const Wn = getComputedStyle(_);
          uu = Array.from(("" + Wn["color"] + Wn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), nn();
        }
        return uu;
      };
      return async (n, W) => {
        const e = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const i = new Uint8Array(new Uint32Array([e])["buffer"]);
        const f = Xo();
        const d = du(f);
        return Bo(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(f), Array.from(i), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await Lo([W, n, e]["join"]("!") + "obfiowerehiring" + d)))["concat"](eu)), [3]))["map"](nu));
      };
    };
  }
}]);