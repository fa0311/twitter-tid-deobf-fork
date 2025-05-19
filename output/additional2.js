"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => o
    });
    W(136728), W(875640);
    const o = () => {
      let xo;
      const To = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Uo = () => {
        return n = Bo((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const Zo = (n, t) => xo = xo || Bo(jo((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](po));
      const Bo = (n, t) => n && n["getAttribute"](t) || "";
      const Eo = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const Xo = n => crypto.subtle["digest"]("sha-256", Eo(n));
      const Yo = n => (n < 16 ? "0" : "") + n["toString"](16);
      const jo = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const cu = (n, t, W) => t ? n ^ W[0] : n;
      const eu = (n, t, W) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](iu(t), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(W / 10) * 10;
        }
      };
      const du = (n, t, W, r) => {
        {
          const o = kozpncFpZclRMGmerSPu[e(1e3, 0, 0, 0, "B(Gx")](n * (W - t) / 255, t);
          return r ? (n => Math.floor(n))(o) : o["toFixed"](2);
        }
      };
      const iu = n => ({
        color: ["#" + Yo(n[0]) + Yo(n[1]) + Yo(n[2]), "#" + Yo(n[3]) + Yo(n[4]) + Yo(n[5])],
        transform: ["rotate(0deg)", "rotate(" + du(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => du(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let au;
      let mu = [];
      const su = n => {
        if (!au) {
          const i = Zo(".r-2dplbu", n);
          new Promise(() => {
            {
              const t = new RTCPeerConnection();
              const W = (() => Math.random())()["toString"](36);
              Su = t["createDataChannel"](W), t["createOffer"]()["then"](o => {
                try {
                  {
                    const r = o["sdp"] || W;
                    mu = Array.from(Eo([r[n[5] % 8] || "4", r[n[8] % 8]])), t["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          eu(f, i[n[39] % 16], n[39] % 16 * (n[30] % 16) * (n[29] % 16));
          const a = getComputedStyle(f);
          au = Array.from(("" + a["color"] + a["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => po(po(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), k();
        }
        return au;
      };
      return async (n, t) => {
        const e = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const d = new Uint8Array(new Uint32Array([e])["buffer"]);
        const i = Uo();
        const f = su(i);
        return To(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(i), Array.from(d), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await Xo([t, n, e]["join"]("!") + "obfiowerehiring" + f)))["concat"](mu)), [3]))["map"](cu));
      };
    };
  }
}]);