"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, r) => {
    r.r(W), r.d(W, {
      default: () => u
    });
    r(136728), r(875640);
    const u = () => {
      let jr;
      const Tr = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Dr = () => {
        return n = Mr((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const Xr = (n, W) => jr = jr || Mr(_r((n => document.querySelectorAll(n))(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const Mr = (n, W) => n && n["getAttribute"](W) || "";
      const Hr = n => typeof n == "string" ? new lr()["encode"](n) : n;
      const Ar = n => crypto.subtle["digest"]("sha-256", Hr(n));
      const Er = n => (n < 16 ? "0" : "") + n["toString"](16);
      const _r = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const it = (n, W, r) => W ? n ^ r[0] : n;
      const ft = (n, W, r) => {
        {
          if (!n["animate"]) return;
          const t = n["animate"](mt(W), 4096);
          t["pause"](), t["currentTime"] = (n => Math.round(n))(r / 10) * 10;
        }
      };
      const kt = (n, W, r, o) => {
        {
          const t = n * (r - W) / 255 + W;
          return o ? (n => Math.floor(n))(t) : t["toFixed"](2);
        }
      };
      const mt = n => ({
        color: ["#" + Er(n[0]) + Er(n[1]) + Er(n[2]), "#" + Er(n[3]) + Er(n[4]) + Er(n[5])],
        transform: ["rotate(0deg)", "rotate(" + kt(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, W) => kt(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Ct;
      let Gt = [];
      const St = n => {
        if (!Ct) {
          const kn = Xr(".r-6ygvi", n);
          new Promise(() => {
            {
              const W = new RTCPeerConnection();
              const r = (() => Math.random())()["toString"](36);
              st = W["createDataChannel"](r), W["createOffer"]()["then"](t => {
                try {
                  {
                    const u = t["sdp"] || r;
                    Gt = Array.from(Hr([u[n[5] % 8] || "4", u[n[8] % 8]])), W["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          ft(mn, kn[n[20] % 16], n[3] % 16 * (n[42] % 16) * (n[3] % 16));
          const Cn = getComputedStyle(mn);
          Ct = Array.from(("" + Cn["color"] + Cn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), an();
        }
        return Ct;
      };
      return async (n, W) => {
        const r = (n => Math.floor(n))((wr["now"]() - 1682924400000) / 1e3);
        const t = new Uint8Array(new Uint32Array([r])["buffer"]);
        const o = Dr();
        const u = St(o);
        return Tr(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(o), Array.from(t), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await Ar([W, n, r]["join"]("!") + "obfiowerehiring" + u)))["concat"](Gt)), [3]))["map"](it));
      };
    };
  }
}]);