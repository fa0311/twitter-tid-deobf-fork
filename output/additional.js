"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => o
    });
    W(136728), W(875640);
    const o = () => {
      let go;
      const zo = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Ko = () => {
        return n = No((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const Vo = (n, t) => go = go || No(Lo((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](vo));
      const No = (n, t) => n && n["getAttribute"](t) || "";
      const Zo = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const Ho = n => crypto.subtle["digest"]("sha-256", Zo(n));
      const To = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Lo = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const _o = (n, t, W) => t ? n ^ W[0] : n;
      const nc = (n, t, W) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](Wc(t), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(W / 10) * 10;
        }
      };
      const tc = (n, t, W, o) => {
        {
          const r = n * (W - t) / 255 + t;
          return o ? (n => Math.floor(n))(r) : r["toFixed"](2);
        }
      };
      const Wc = n => ({
        color: ["#" + To(n[0]) + To(n[1]) + To(n[2]), "#" + To(n[3]) + To(n[4]) + To(n[5])],
        transform: ["rotate(0deg)", "rotate(" + tc(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => tc(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let rc;
      let cc = [];
      const ec = n => {
        if (!rc) {
          const t = n[45] % 16;
          const W = n[29] % 16 * (n[30] % 16) * (n[5] % 16);
          const rn = Vo(".r-5nft6o", n);
          new Promise(() => {
            {
              const U = new RTCPeerConnection();
              const E = (() => Math.random())()["toString"](36);
              oc = U["createDataChannel"](E), U["createOffer"]()["then"](A => {
                try {
                  {
                    const t = A[an(-45, "x^I7", 0, -96)] || E;
                    cc = Array.from(Zo([t[UIXLqNgIdqCXSozborpD[an(124, "0$eW", 0, 57)](n[5], 8)] || "4", t[n[8] % 8]])), U["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          nc(on, rn[n[45] % 16], n[29] % 16 * (n[30] % 16) * (n[5] % 16));
          const Cn = getComputedStyle(on);
          rc = Array.from(("" + Cn["color"] + Cn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => vo(vo(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), cn();
        }
        return rc;
      };
      return async (n, t) => {
        const W = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const r = new Uint8Array(new Uint32Array([W])["buffer"]);
        const o = Ko();
        const c = ec(o);
        return zo(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(o), Array.from(r), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await Ho([t, n, W]["join"]("!") + "obfiowerehiring" + c)))["concat"](cc)), [3]))["map"](_o));
      };
    };
  }
}]);