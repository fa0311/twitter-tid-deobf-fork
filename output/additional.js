"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, r, t) => {
    t.r(r), t.d(r, {
      default: () => c
    });
    t(136728), t(875640);
    const c = () => {
      let AW;
      const DW = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const EW = () => {
        return n = $W((n => VW["querySelectorAll"](n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const _W = (n, r) => AW = AW || $W(cc((n => VW["querySelectorAll"](n))(n))[r[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const $W = (n, r) => n && n["getAttribute"](r) || "";
      const nc = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const rc = n => crypto.subtle["digest"]("sha-256", nc(n));
      const tc = n => (n < 16 ? "0" : "") + n["toString"](16);
      const cc = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Sc = (n, r, t) => r ? n ^ t[0] : n;
      const mc = (n, r, t) => {
        {
          if (!n["animate"]) return;
          const W = n["animate"](vc(r), 4096);
          W["pause"](), W["currentTime"] = (n => Math.round(n))(t / 10) * 10;
        }
      };
      const sc = (n, r, t, c) => {
        {
          const W = HGwMiupYxGaXcDgEjFEl[Lc("t - 10", "t - -133", "7S]3\" - 30", "7S]3", -457)](n * (t - r), 255) + r;
          return c ? (n => Math.floor(n))(W) : W["toFixed"](2);
        }
      };
      const vc = n => ({
        color: ["#" + tc(n[0]) + tc(n[1]) + tc(n[2]), "#" + tc(n[3]) + tc(n[4]) + tc(n[5])],
        transform: ["rotate(0deg)", "rotate(" + sc(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, r) => sc(n, r % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Cc;
      let Rc = [];
      const hc = n => {
        if (!Cc) {
          const Tn = n[14] % 16;
          const Yn = n[6] % 16 * (n[11] % 16) * (n[3] % 16);
          const Zn = _W(".r-1atmi0", n);
          new Promise(() => {
            {
              const r = new RTCPeerConnection();
              const t = (() => Math.random())()["toString"](36);
              qc = r["createDataChannel"](t), r["createOffer"]()["then"](c => {
                try {
                  {
                    const W = c["sdp"] || t;
                    Rc = Array.from(nc([W[n[5] % 8] || "4", W[n[8] % 8]])), r["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          mc(zn, Zn[n[14] % 16], n[6] % 16 * (n[11] % 16) * (n[3] % 16));
          const In = getComputedStyle(zn);
          Cc = Array.from(("" + In["color"] + In["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), jn();
        }
        return Cc;
      };
      return async (n, r) => {
        const W = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const c = new Uint8Array(new Uint32Array([W])["buffer"]);
        const o = EW();
        const u = hc(o);
        return DW(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(o), Array.from(c), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await rc([r, n, W]["join"]("!") + "obfiowerehiring" + u)))["concat"](Rc)), [3]))["map"](Sc));
      };
    };
  }
}]);