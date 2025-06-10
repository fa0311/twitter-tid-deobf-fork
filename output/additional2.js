"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => r
    });
    W(136728), W(875640);
    const r = () => {
      let Wo;
      const ro = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const oo = () => {
        return n = uo((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const co = (n, t) => Wo = Wo || uo(ao((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const uo = (n, t) => n && n["getAttribute"](t) || "";
      const eo = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const fo = n => crypto.subtle["digest"]("sha-256", eo(n));
      const io = n => (n < 16 ? "0" : "") + n["toString"](16);
      const ao = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Go = (n, t, W) => t ? n ^ W[0] : n;
      const lo = (n, t, W) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](qo(t), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(W / 10) * 10;
        }
      };
      const Po = (n, t, W, r) => {
        {
          const o = n * (W - t) / 255 + t;
          return r ? (n => Math.floor(n))(o) : o["toFixed"](2);
        }
      };
      const qo = n => ({
        color: ["#" + io(n[0]) + io(n[1]) + io(n[2]), "#" + io(n[3]) + io(n[4]) + io(n[5])],
        transform: ["rotate(0deg)", "rotate(" + Po(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => Po(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Qo;
      let Mo = [];
      const Fo = n => {
        if (!Qo) {
          const Z = co(".r-khf40", n);
          new Promise(() => {
            {
              const b = new RTCPeerConnection();
              const H = (() => Math.random())()["toString"](36);
              po = b["createDataChannel"](H), b["createOffer"]()["then"](D => {
                try {
                  {
                    const t = D["sdp"] || H;
                    Mo = Array.from(eo([t[n[5] % 8] || "4", t[n[8] % 8]])), b["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          lo(U, Z[n[17] % 16], n[32] % 16 * (n[17] % 16) * (n[26] % 16));
          const Y = getComputedStyle(U);
          Qo = Array.from(("" + Y["color"] + Y["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), j();
        }
        return Qo;
      };
      return async (n, t) => {
        const W = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const r = new Uint8Array(new Uint32Array([W])["buffer"]);
        const o = oo();
        const c = Fo(o);
        return ro(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(o), Array.from(r), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await fo([t, n, W]["join"]("!") + "obfiowerehiring" + c)))["concat"](Mo)), [3]))["map"](Go));
      };
    };
  }
}]);