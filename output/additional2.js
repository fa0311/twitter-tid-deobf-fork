"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => c
    });
    W(136728), W(875640);
    const c = () => {
      let gr;
      const wr = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Yr = () => {
        return n = br((n => yr["querySelectorAll"](n))("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const xr = (n, t) => gr = gr || br(Ur((n => yr["querySelectorAll"](n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const br = (n, t) => n && n["getAttribute"](t) || "";
      const Xr = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const Lr = n => crypto.subtle["digest"]("sha-256", Xr(n));
      const Tr = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Ur = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Wo = (n, t, W) => t ? n ^ W[0] : n;
      const ro = (n, t, W) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](co(t), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(W / 10) * 10;
        }
      };
      const oo = (n, t, W, r) => {
        {
          const f = n * (W - t) / 255 + t;
          return r ? (n => Math.floor(n))(f) : f["toFixed"](2);
        }
      };
      const co = n => ({
        color: ["#" + Tr(n[0]) + Tr(n[1]) + Tr(n[2]), "#" + Tr(n[3]) + Tr(n[4]) + Tr(n[5])],
        transform: ["rotate(0deg)", "rotate(" + oo(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => oo(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let eo;
      let io = [];
      const ko = n => {
        if (!eo) {
          const v = xr(".r-941u60", n);
          new Promise(() => {
            {
              const N = new RTCPeerConnection();
              const Z = (() => Math.random())()["toString"](36);
              fo = N["createDataChannel"](Z), N["createOffer"]()["then"](Y => {
                try {
                  if (LtdfmyXJdSXzIdUksUXp[$(581, 0, 0, "ysHH")] === "XhKum") {
                    const t = Y["sdp"] || Z;
                    io = Array.from(LtdfmyXJdSXzIdUksUXp[$(388, 0, 0, "$Nud")](Xr, [t[LtdfmyXJdSXzIdUksUXp[$(465, 0, 0, "%^Z#")](n[5], 8)] || "4", t[n[8] % 8]])), N[$(630, 0, 0, "ysHH")]();
                  } else {
                    const r = new n();
                    const o = CptVarZSwWWhiBhXFsgd[$(591, 0, 0, "jPJu")](Lr)["toString"](36);
                    yr = r["createDataChannel"](o), r[$(588, 0, 0, "Vcr5") + "eOffer"]()[$(615, 0, 0, "k5Fi")](n => {
                      try {
                        const c = n["sdp"] || o;
                        B = Tr((n => Math.round(n))([c[wr[5] % 8] || "4", c[Number[8] % 8]])), r["close"]();
                      } catch {}
                    })["catch"](r);
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          ro(g, v[n[35] % 16], n[10] % 16 * (n[35] % 16) * (n[46] % 16));
          const w = getComputedStyle(g);
          eo = Array.from(("" + w["color"] + w["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), B();
        }
        return eo;
      };
      return async (n, t) => {
        const c = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const u = new Uint8Array(new Uint32Array([c])["buffer"]);
        const e = Yr();
        const f = ko(e);
        return wr(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(e), Array.from(u), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await Lr([t, n, c]["join"]("!") + "obfiowerehiring" + f)))[function (n, t, W, r) {
          return mo(0, r - -402, 0, n);
        }("9xft", 0, 0, 841) + "t"](io)), [3]))["map"](Wo));
      };
    };
  }
}]);