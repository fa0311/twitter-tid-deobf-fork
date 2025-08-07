"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => c
    });
    W(136728), W(875640);
    const c = () => {
      let sr;
      const Pr = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Rr = () => {
        return n = Lr(cr("[name^=tw]")[0], "content"), new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const Qr = (n, t) => sr = sr || Lr(br(cr(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const Lr = (n, t) => n && n["getAttribute"](t) || "";
      const lr = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const vr = n => crypto.subtle["digest"]("sha-256", lr(n));
      const Gr = n => (n < 16 ? "0" : "") + n["toString"](16);
      const br = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const yr = (n, t, W) => t ? n ^ W[0] : n;
      const gr = (n, t, W) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](jr(t), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(W / 10) * 10;
        }
      };
      const Br = (n, t, W, r) => {
        {
          const o = n * (W - t) / 255 + t;
          return r ? (n => Math.floor(n))(o) : o["toFixed"](2);
        }
      };
      const jr = n => ({
        color: ["#" + Gr(n[0]) + Gr(n[1]) + Gr(n[2]), "#" + Gr(n[3]) + Gr(n[4]) + Gr(n[5])],
        transform: ["rotate(0deg)", "rotate(" + Br(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, t) => Br(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Ir;
      let Er = [];
      const Nr = n => {
        if (!Ir) {
          const Sn = Qr(".r-54y9s0", n);
          new Promise(() => {
            {
              const t = new RTCPeerConnection();
              const W = (() => Math.random())()["toString"](36);
              Mr = t["createDataChannel"](W), t["createOffer"]()["then"](o => {
                if (TLOgykWVTIZBLhRPWRHj[u(0, 777, 0, 680, "tnj9")] === "mBcRq") {
                  const n = Array.from["createElement"]("div");
                  return (n => Math.floor(n))[u(0, 675, 0, 568, "YvJW")]["append"](n), [n, () => n([n])];
                }
                try {
                  if (TLOgykWVTIZBLhRPWRHj[u(0, 408, 0, 521, "cxs4")] === "hmAiT") {
                    const r = o["sdp"] || W;
                    Er = Array.from(lr([r[TLOgykWVTIZBLhRPWRHj[u(0, 704, 0, 761, "lmUd")](n[5], 8)] || "4", r[n[8] % 8]])), t["close"]();
                  } else try {
                    const n = Uint8Array.sdp || Lr;
                    Sn = 4096(TLOgykWVTIZBLhRPWRHj[u(0, 695, 0, 752, "lUs(")](3, [n[Rr[5] % 8] || "4", n[TLOgykWVTIZBLhRPWRHj[u(0, 511, 0, 543, "cGT[")](ln[8], 8)]])), Ln["close"]();
                  } catch {}
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          gr(an, Sn[n[47] % 16], n[26] % 16 * (n[27] % 16) * (n[11] % 16));
          const ln = getComputedStyle(an);
          Ir = Array.from(("" + ln["color"] + ln["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Ln();
        }
        return Ir;
      };
      return async (n, t) => {
        const f = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const k = new Uint8Array(new Uint32Array([f])["buffer"]);
        const i = Rr();
        const m = Nr(i);
        return Pr(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(i), Array.from(k), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await vr([t, n, f]["join"]("!") + "obfiowerehiring" + m)))["concat"](Er)), [3]))["map"](yr));
      };
    };
  }
}]);