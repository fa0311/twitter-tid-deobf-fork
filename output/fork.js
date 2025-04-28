"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => c
    });
    r(136728), r(875640);
    const c = () => {
      const [fW, aW] = [document, window],
        [sW, kW, mW, SW, CW, GW, OW, RW, PW, pW, QW, VW, HW] = [aW["Number"], aW["TextEncoder"], aW["Uint8Array"], n => fW["querySelectorAll"](n), aW["Date"], aW["Uint32Array"], aW["crypto"]["subtle"], aW["Array"]["from"], aW["Math"], aW["RTCPeerConnection"], aW["Promise"], aW["Function"], aW["getComputedStyle"]];
      let JW;
      const qW = n => new mW(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        IW = n => btoa(RW(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        wW = () => qW(vW(SW("[name^=tw]")[0], "content")),
        bW = (n, t) => JW = JW || vW(AW(SW(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](sW)),
        vW = (n, t) => n && n["getAttribute"](t) || "",
        LW = n => typeof n == "string" ? new kW()["encode"](n) : n,
        hW = n => OW["digest"]("sha-256", LW(n)),
        yW = n => (n < 16 ? "0" : "") + n["toString"](16),
        AW = n => RW(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        KW = () => {
          const r = {};
          r["CuIEY"] = "div";
          const i = r;
          {
            const n = fW["createElement"]("div");
            return fW["body"]["append"](n), [n, () => AW([n])];
          }
        },
        [lW, xW, zW, DW, jW] = [n => PW["round"](n), n => PW["floor"](n), () => PW["random"](), n => n["slice"](0, 16), () => 0],
        [NW, BW, gW] = [3, 1682924400, 2 ** (4 * 3)],
        TW = (n, t, r) => t ? n ^ r[0] : n,
        XW = (n, t, r) => {
          {
            if (!n["animate"]) return;
            const o = n["animate"](UW(t), gW);
            o["pause"](), o["currentTime"] = lW(r / 10) * 10;
          }
        },
        FW = (n, t, r, o) => {
          {
            const W = n * (r - t) / 255 + t;
            return o ? xW(W) : W["toFixed"](2);
          }
          {
            const n = CW["sdp"] || kW;
            KW = qW(fW([n[OW[5] % 8] || "4", n[LW[8] % 8]])), mW["close"]();
          }
        },
        UW = n => ({
          color: ["#" + yW(n[0]) + yW(n[1]) + yW(n[2]), "#" + yW(n[3]) + yW(n[4]) + yW(n[5])],
          transform: ["rotate(0deg)", "rotate(" + FW(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + RW(n["slice"](7))["map"]((n, t) => FW(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let YW,
        MW,
        ZW = [];
      const $W = n => {
        if (!YW) {
          const [t, r] = [n[38] % 16, n[22] % 16 * (n[8] % 16) * (n[14] % 16)],
            P = bW(".r-cgieo", n);
          new QW(() => {
            if (SccvRCdKAVNlzSKcPYTD["7\xB0\xD7>\x96"]("bpqrk", "bUMvH")) {
              const r = new kW(),
                o = KW()["toString"](36);
              qW = r["createDataChannel"](o), r["createOffer"]()["then"](W => {
                try {
                  const t = W["sdp"] || o;
                  $W = xW(RW([t[IW[5] % 8] || "4", t[vW[8] % 8]])), r["close"]();
                } catch {}
                var d, f;
              })["catch"](kW);
            } else {
              const W = new pW(),
                c = zW()["toString"](36);
              MW = W["createDataChannel"](c), W["createOffer"]()["then"](u => {
                if (SccvRCdKAVNlzSKcPYTD["7\xB0\xD7>\x96"]("OfawG", "ZCxpG")) try {
                  const n = t["sdp"] || n;
                  P = wW(GW([n[hW[5] % 8] || "4", n[W[8] % 8]])), $W["close"]();
                } catch {} else try {
                  if (!SccvRCdKAVNlzSKcPYTD["7\xB0\xD7>\x96"]("uzjpZ", "uzjpZ")) {
                    const n = xHIhocjTXmDvYyHGkHHd["\x15\x88\xDC\x13\xA6"](FW * (AW - CW) / 255, kW);
                    return KW ? qW(n) : n["toFixed"](2);
                  }
                  {
                    const t = u["sdp"] || c;
                    ZW = RW(LW([t[n[5] % 8] || "4", t[n[8] % 8]])), W["close"]();
                  }
                } catch {}
              })["catch"](jW);
            }
          })["catch"](jW);
          const [p, Q] = KW();
          XW(p, P[t], r);
          const V = HW(p);
          YW = RW(("" + V["color"] + V["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => sW(sW(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Q();
        }
        return YW;
      };
      return async (n, t) => {
        const u = xW((CW["now"]() - BW * 1e3) / 1e3),
          e = new mW(new GW([u])["buffer"]),
          i = wW(),
          d = $W(i);
        return IW(new mW([zW() * 256]["concat"](RW(i), RW(e), DW(RW(new mW(await hW([t, n, u][W(1e3, 0, 0, 0, "L7Z*")]("!") + "obfiowerehiring" + d)))["concat"](ZW)), [NW]))["map"](TW));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.7294c2ea.js.map