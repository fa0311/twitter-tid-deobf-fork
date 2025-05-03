"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => o
    });
    W(136728), W(875640);
    const o = () => {
      let ko;
      const fo = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const ao = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const mo = () => fo(so((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const Co = (n, t) => ko = ko || so(lo((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const so = (n, t) => n && n["getAttribute"](t) || "";
      const vo = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const Po = n => crypto.subtle["digest"]("sha-256", vo(n));
      const So = n => (n < 16 ? "0" : "") + n["toString"](16);
      const lo = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Lo = (n, t, W) => t ? n ^ W[0] : n;
      const Fo = (n, t, W) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](xo(t), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(W / 10) * 10;
        }
      };
      const Ko = (n, t, W, r) => {
        {
          const o = n * (W - t) / 255 + t;
          return r ? (n => Math.floor(n))(o) : o["toFixed"](2);
        }
      };
      const xo = n => ({
        color: ["#" + So(n[0]) + So(n[1]) + So(n[2]), "#" + So(n[3]) + So(n[4]) + So(n[5])],
        transform: ["rotate(0deg)", "rotate(" + Ko(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => Ko(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Io;
      let yo = [];
      const Ao = n => {
        if (!Io) {
          const t = n[30] % 16;
          const An = n[43] % 16 * (n[31] % 16) * (n[8] % 16);
          const Dn = Co(".r-167j40", n);
          new Promise(() => {
            {
              const W = new RTCPeerConnection();
              const o = (() => Math.random())()["toString"](36);
              bo = W["createDataChannel"](o), W["createOffer"]()["then"](u => {
                try {
                  {
                    const t = u["sdp"] || o;
                    yo = Array.from(vo([t[n[5] % 8] || "4", t[n[8] % 8]])), W["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          Fo(Mn, Dn[n[30] % 16], n[43] % 16 * (n[31] % 16) * (n[8] % 16));
          const Bn = getComputedStyle(Mn);
          Io = Array.from(("" + Bn["color"] + Bn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Vn();
        }
        return Io;
      };
      return async (n, t) => {
        const c = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const e = new Uint8Array(new Uint32Array([c])["buffer"]);
        const i = mo();
        const k = Ao(i);
        return ao(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(i), Array.from(e), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await Po([t, n, c]["join"]("!") + "obfiowerehiring" + k)))["concat"](yo)), [3]))["map"](Lo));
      };
    };
  }
}]);