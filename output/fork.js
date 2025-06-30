"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, c) => {
    c.r(t), c.d(t, {
      default: () => o
    });
    c(136728), c(875640);
    const o = () => {
      const [mW, hW] = [document, window],
        [GW, OW, QW, lW, qW, PW, VW, RW, wW, DW, TW, BW, NW] = [hW["Number"], hW["TextEncoder"], hW["Uint8Array"], n => mW["querySelectorAll"](n), hW["Date"], hW["Uint32Array"], hW["crypto"]["subtle"], hW["Array"]["from"], hW["Math"], hW["RTCPeerConnection"], hW["Promise"], hW["Function"], hW["getComputedStyle"]];
      let vW;
      const HW = n => btoa(RW(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        JW = () => {
          return n = LW(lW("[name^=tw]")[0], "content"), new QW(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        zW = (n, t) => vW = vW || LW(gW(lW(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](GW)),
        LW = (n, t) => n && n["getAttribute"](t) || "",
        pW = n => typeof n == "string" ? new OW()["encode"](n) : n,
        jW = n => VW["digest"]("sha-256", pW(n)),
        IW = n => (n < 16 ? "0" : "") + n["toString"](16),
        gW = n => RW(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        XW = () => {
          {
            const W = mW["createElement"]("div");
            return mW["body"][(o = "5bwh", u = 1162, xW(o, u - 831) + "d")](W), [W, () => gW([W])];
          }
          {
            const n = EW["createElement"]("div");
            return FW["body"]["append"](n), [n, () => n([n])];
          }
          var o, u;
        },
        [MW, FW, AW, ZW, KW] = [n => wW["round"](n), n => wW["floor"](n), () => wW["random"](), n => n["slice"](0, 16), () => 0],
        [YW, UW, EW] = [3, 1682924400, 2 ** (4 * 3)],
        $W = (n, t, c) => t ? n ^ c[0] : n,
        _W = (n, t, c) => {
          {
            if (!n["animate"]) return;
            const W = n["animate"](tr(t), EW);
            W["pause"](), W["currentTime"] = MW(c / 10) * 10;
          }
          var s, C;
        },
        nr = (n, t, c, W) => {
          {
            const r = n * (c - t) / 255 + t;
            return W ? FW(r) : r["toFixed"](2);
          }
          {
            if (!gW["animate"]) return;
            const t = pW["animate"](n(TW), RW);
            t["pause"](), t["currentTime"] = ur(KW / 10) * 10;
          }
          var f, a;
        },
        tr = n => ({
          color: ["#" + IW(n[0]) + IW(n[1]) + IW(n[2]), "#" + IW(n[3]) + IW(n[4]) + IW(n[5])],
          transform: ["rotate(0deg)", "rotate(" + nr(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + RW(n["slice"](7))["map"]((n, t) => nr(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let cr,
        Wr,
        rr = [];
      const ur = n => {
        if (!cr) {
          const [q, P] = [n[0] % 16, n[17] % 16 * (n[42] % 16) * (n[17] % 16)],
            V = zW(".r-jw9bls", n);
          new TW(() => {
            {
              const l = new DW(),
                q = AW()["toString"](36);
              Wr = l["createDataChannel"](q), l["createOffer"]()["then"](T => {
                try {
                  {
                    const t = T["sdp"] || q;
                    rr = RW(pW([t[n[5] % 8] || "4", t[n[8] % 8]])), l["close"]();
                  }
                } catch {}
              })["catch"](KW);
            }
            var I, g;
          })["catch"](KW);
          const [R, w] = XW();
          _W(R, V[q], P);
          const D = NW(R);
          cr = RW(("" + D["color"] + D["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => GW(GW(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), w();
        }
        return cr;
      };
      return async (n, t) => {
        const e = FW((qW["now"]() - UW * 1e3) / 1e3),
          d = new QW(new PW([e])["buffer"]),
          i = JW(),
          f = ur(i);
        return HW(new QW([AW() * 256]["concat"](RW(i), RW(d), ZW(RW(new QW(await jW([t, n, e]["join"]("!") + "obfiowerehiring" + f)))["concat"](rr)), [YW]))["map"]($W));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.22dc1bda.js.map