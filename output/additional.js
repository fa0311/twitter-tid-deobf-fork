"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => c
    });
    t(136728), t(875640);
    const c = () => {
      let vr;
      const Fr = n => new Uint8Array(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const Jr = n => btoa(Array.from(n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Zr = () => Fr(Er(br("[name^=tw]")[0], "content"));
      const Dr = (n, W) => vr = vr || Er(Yr(br(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Number));
      const Er = (n, W) => n && n["getAttribute"](W) || "";
      const Hr = n => typeof n == "string" ? new TextEncoder()["encode"](n) : n;
      const Xr = n => crypto.subtle["digest"]("sha-256", Hr(n));
      const Mr = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Yr = n => Array.from(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const cc = 3;
      const ec = (n, W, t) => W ? n ^ t[0] : n;
      const fc = (n, W, t) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](dc(W), 4096);
          r["pause"](), r["currentTime"] = (n => Math.round(n))(t / 10) * 10;
        }
      };
      const ic = (n, W, t, c) => {
        {
          const r = n * (t - W) / 255 + W;
          return c ? (n => Math.floor(n))(r) : r["toFixed"](2);
        }
      };
      const dc = n => ({
        color: ["#" + Mr(n[0]) + Mr(n[1]) + Mr(n[2]), "#" + Mr(n[3]) + Mr(n[4]) + Mr(n[5])],
        transform: ["rotate(0deg)", "rotate(" + ic(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Array.from(n["slice"](7))["map"]((n, W) => ic(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let ac;
      let Sc;
      let sc = [];
      const qc = n => {
        if (!ac) {
          const z = n[24] % 16;
          const F = n[0] % 16 * (n[24] % 16) * (n[35] % 16);
          const J = Dr(".r-9vhjo", n);
          new Promise(() => {
            {
              const b = new RTCPeerConnection();
              const w = (() => Math.random())()["toString"](36);
              Sc = b["createDataChannel"](w), b["createOffer"]()["then"](B => {
                if (HCHWjACATIKtNRNdhjpz[x("[QTo", 0, 1143, 0, 1179)](HCHWjACATIKtNRNdhjpz[x("wD@f", 0, 1236, 0, 1348)], "nyMjG")) {
                  const n = Sc["creat" + x("IRae", 0, 1122, 0, 1236) + "ent"](HCHWjACATIKtNRNdhjpz[x("fX9r", 0, 1231, 0, 1312)]);
                  return (n[0] % 16 * (n[24] % 16) * (n[35] % 16))["body"]["append"](n), [n, () => n([n])];
                }
                try {
                  if (HCHWjACATIKtNRNdhjpz[x("c0gT", 0, 1240, 0, 1281)] !== "wXgIf") try {
                    const n = sc["sdp"] || Z;
                    cc = crypto.subtle(ec([n[LExCpZJfzbZjyVqitMTY[x("fzSg", 0, 1292, 0, 1169)](Xr[5], 8)] || "4", n[Er[8] % 8]])), Yr["close"]();
                  } catch {} else {
                    const W = B["sdp"] || w;
                    sc = Array.from(HCHWjACATIKtNRNdhjpz[x("V0z&", 0, 1223, 0, 1181)](Hr, [W[n[5] % 8] || "4", W[n[8] % 8]])), b["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          fc(Z, J[n[24] % 16], n[0] % 16 * (n[24] % 16) * (n[35] % 16));
          const E = getComputedStyle(Z);
          ac = Array.from(("" + E["color"] + E["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Number(Number(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), D();
        }
        return ac;
      };
      return async (n, W) => {
        const f = (n => Math.floor(n))((Date["now"]() - 1682924400000) / 1e3);
        const i = new Uint8Array(new Uint32Array([f])["buffer"]);
        const d = Zr();
        const k = qc(d);
        return Jr(new Uint8Array([(() => Math.random())() * 256]["concat"](Array.from(d), Array.from(i), (n => n["slice"](0, 16))(Array.from(new Uint8Array(await Xr([W, n, f]["join"]("!") + "obfiowerehiring" + k)))["concat"](sc)), [cc]))["map"](ec));
      };
    };
  }
}]);