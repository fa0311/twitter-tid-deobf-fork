"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => o
    });
    W(136728), W(875640);
    const o = () => {
      let sc;
      const Sc = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Oc = () => {
        return n = Rc((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const Cc = (n, t) => sc = sc || Rc(vc((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const Rc = (n, t) => n && n["getAttribute"](t) || "";
      const ac = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const mc = n => crypto.subtle["digest"]("sha-256", ac(n));
      const Qc = n => (n < 16 ? "0" : "") + n["toString"](16);
      const vc = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Hc = (n, t, W) => t ? n ^ W[0] : n;
      const Mc = (n, t, W) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](Tc(t), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(W / 10) * 10;
        }
      };
      const Nc = (n, t, W, r) => {
        {
          const c = n * (W - t) / 255 + t;
          return r ? (n => Math.floor(n))(c) : c["toFixed"](2);
        }
      };
      const Tc = n => ({
        color: ["#" + Qc(n[0]) + Qc(n[1]) + Qc(n[2]), "#" + Qc(n[3]) + Qc(n[4]) + Qc(n[5])],
        transform: ["rotate(0deg)", "rotate(" + Nc(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => Nc(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Kc;
      let Ic = [];
      const bc = n => {
        if (!Kc) {
          const o = Cc(".r-1xncgr", n);
          new Promise(() => {
            {
              const t = new RTCPeerConnection();
              const C = (() => Math.random())()["toString"](36);
              zc = t["createDataChannel"](C), t["createOffer"]()["then"](R => {
                try {
                  {
                    const W = R["sdp"] || C;
                    Ic = Array.from(ac([W[n[5] % 8] || "4", W[n[8] % 8]])), t["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          Mc(u, o[n[11] % 16], n[18] % 16 * (n[15] % 16) * (n[14] % 16));
          const d = getComputedStyle(u);
          Kc = Array.from(("" + d["color"] + d["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), e();
        }
        return Kc;
      };
      return async (n, t) => {
        const r = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const c = new Uint8Array(new Uint32Array([r])["buffer"]);
        const o = Oc();
        const u = bc(o);
        return Sc(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(o), Array.from(c), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await mc([t, n, r]["join"]("!") + "obfiowerehiring" + u)))["concat"](Ic)), [3]))["map"](Hc));
      };
    };
  }
}]);