"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => u
    });
    W(136728), W(875640);
    const u = () => {
      let Do;
      const To = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const Uo = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Jo = () => To(yo((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const Lo = (n, t) => Do = Do || yo(Ko((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const yo = (n, t) => n && n["getAttribute"](t) || "";
      const zo = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const Eo = n => crypto.subtle["digest"]("sha-256", zo(n));
      const Io = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Ko = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const ru = (n, t, W) => t ? n ^ W[0] : n;
      const ou = (n, t, W) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](cu(t), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(W / 10) * 10;
        }
      };
      const uu = (n, t, W, r) => {
        const u = {
          "cqCRk": "div"
        };
        const d = u;
        {
          const o = n * (W - t) / 255 + t;
          return r ? (n => Math.floor(n))(o) : o["toFixed"](2);
        }
      };
      const cu = n => ({
        color: ["#" + Io(n[0]) + Io(n[1]) + Io(n[2]), "#" + Io(n[3]) + Io(n[4]) + Io(n[5])],
        transform: ["rotate(0deg)", "rotate(" + uu(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => uu(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let du;
      let fu = [];
      const ku = n => {
        if (!du) {
          const t = n[47] % 16;
          const y = n[4] % 16 * (n[5] % 16) * (n[36] % 16);
          const z = Lo(".r-m8i80", n);
          new Promise(() => {
            {
              const p = new RTCPeerConnection();
              const D = (() => Math.random())()["toString"](36);
              iu = p["createDataChannel"](D), p["createOffer"]()["then"](T => {
                if (dtZzDsAQfoWKStPzHBPN[_(1395, 0, "wVqP")]("rrYfw", "rrYfw")) {
                  const n = uVLnIvaBRDZjjDrGxWoz[_(1378, 0, "Nxh[")](uVLnIvaBRDZjjDrGxWoz[_(1147, 0, "LP7U")](Uint8Array * (To - du), 255), 4096);
                  return Lo ? uVLnIvaBRDZjjDrGxWoz[_(1145, 0, "z47z")](n, n) : n["toFixed"](2);
                }
                try {
                  {
                    const t = T[_(1104, 0, "edMY")] || D;
                    fu = Array.from(dtZzDsAQfoWKStPzHBPN[_(1319, 0, "wVqP")](zo, [t[n[5] % 8] || "4", t[dtZzDsAQfoWKStPzHBPN[_(1197, 0, "81^9")](n[8], 8)]])), p[_(1137, 0, "LanZ")]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          ou(E, z[n[47] % 16], n[4] % 16 * (n[5] % 16) * (n[36] % 16));
          const B = getComputedStyle(E);
          du = Array.from(("" + B["color"] + B["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), I();
        }
        return du;
      };
      return async (n, t) => {
        const k = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const C = new Uint8Array(new Uint32Array([k])["buffer"]);
        const s = Jo();
        const m = ku(s);
        return Uo(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(s), Array.from(C), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await Eo([t, n, k]["join"]("!") + "obfiowerehiring" + m)))["concat"](fu)), [3]))["map"](ru));
      };
    };
  }
}]);