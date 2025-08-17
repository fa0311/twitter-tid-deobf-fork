"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, c, W) => {
    W.r(c), W.d(c, {
      default: () => t
    });
    W(136728), W(875640);
    const t = () => {
      let At;
      const jt = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const Tt = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Vt = () => jt(Et((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const Ut = (n, c) => At = At || Et(Yt((n => document.querySelectorAll(n))(n))[c[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const Et = (n, c) => n && n["getAttribute"](c) || "";
      const Bt = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const Xt = n => crypto.subtle["digest"]("sha-256", Bt(n));
      const Dt = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Yt = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const er = (n, c, W) => c ? n ^ W[0] : n;
      const kr = (n, c, W) => {
        {
          if (!n["animate"]) return;
          const r = n[f = "tFxh", i = -196, gt(0, 0, 0, f, i - 169) + "te"](ir(c), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(W / 10) * 10;
        }
        var f;
        var i;
      };
      const fr = (n, c, W, t) => {
        {
          const r = n * (W - c) / 255 + c;
          return t ? (n => Math.floor(n))(r) : r["toFixed"](2);
        }
      };
      const ir = n => ({
        color: ["#" + Dt(n[0]) + Dt(n[1]) + Dt(n[2]), "#" + Dt(n[3]) + Dt(n[4]) + Dt(n[5])],
        transform: ["rotate(0deg)", "rotate(" + fr(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, c) => fr(n, c % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let dr;
      let sr = [];
      const mr = n => {
        if (!dr) {
          const b = Ut(".r-1mjf00", n);
          new Promise(() => {
            {
              const P = new RTCPeerConnection();
              const p = (() => Math.random())()["toString"](36);
              ar = P["createDataChannel"](p), P["createOffer"]()["then"](H => {
                try {
                  {
                    const c = H["sdp"] || p;
                    sr = Array.from(Bt([c[n[5] % 8] || "4", c[n[8] % 8]])), P["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          kr(g, b[n[18] % 16], n[40] % 16 * (n[10] % 16) * (n[36] % 16));
          const w = getComputedStyle(g);
          dr = Array.from(("" + w["color"] + w["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), A();
        }
        return dr;
      };
      return async (n, c) => {
        const f = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const i = new Uint8Array(new Uint32Array([f])["buffer"]);
        const d = Vt();
        const a = mr(d);
        return Tt(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(d), Array.from(i), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await Xt([c, n, f]["join"]("!") + "obfiowerehiring" + a)))["concat"](sr)), [3]))["map"](er));
      };
    };
  }
}]);