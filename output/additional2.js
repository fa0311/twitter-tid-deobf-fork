"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => c
    });
    W(136728), W(875640);
    const c = () => {
      let uo;
      const eo = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const io = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const fo = () => eo(ao((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const ko = (n, t) => uo = uo || ao(qo((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const ao = (n, t) => n && n["getAttribute"](t) || "";
      const Co = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const mo = n => crypto.subtle["digest"]("sha-256", Co(n));
      const so = n => (n < 16 ? "0" : "") + n["toString"](16);
      const qo = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const yo = (n, t, W) => t ? n ^ W[0] : n;
      const Fo = (n, t, W) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](po(t), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(W / 10) * 10;
        }
      };
      const No = (n, t, W, r) => {
        {
          const d = n * (W - t) / 255 + t;
          return r ? (n => Math.floor(n))(d) : d["toFixed"](2);
        }
      };
      const po = n => ({
        color: ["#" + so(n[0]) + so(n[1]) + so(n[2]), "#" + so(n[3]) + so(n[4]) + so(n[5])],
        transform: ["rotate(0deg)", "rotate(" + No(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => No(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Ko;
      let Vo = [];
      const bo = n => {
        if (!Ko) {
          const V = ko(".r-3n7zr0", n);
          new Promise(() => {
            {
              const t = new RTCPeerConnection();
              const W = (() => Math.random())()["toString"](36);
              To = t["createDataChannel"](W), t["createOffer"]()["then"](o => {
                try {
                  {
                    const r = o["sdp"] || W;
                    Vo = Array.from(Co([r[n[5] % 8] || "4", r[n[8] % 8]])), t["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          Fo(b, V[n[41] % 16], n[8] % 16 * (n[24] % 16) * (n[24] % 16));
          const J = getComputedStyle(b);
          Ko = Array.from(("" + J["color"] + J["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), l();
        }
        return Ko;
      };
      return async (n, t) => {
        const c = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const u = new Uint8Array(new Uint32Array([c])["buffer"]);
        const e = fo();
        const d = bo(e);
        return io(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(e), Array.from(u), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await mo([t, n, c]["join"]("!") + "obfiowerehiring" + d)))["concat"](Vo)), [3]))["map"](yo));
      };
    };
  }
}]);