"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => c
    });
    r(136728), r(875640);
    const c = () => {
      const [GW, QW] = [document, window],
        [OW, RW, lW, xW, PW, yW, pW, JW, KW, bW, HW, IW, ZW] = [QW["Number"], QW["TextEncoder"], QW["Uint8Array"], n => GW["querySelectorAll"](n), QW["Date"], QW["Uint32Array"], QW["crypto"]["subtle"], QW["Array"]["from"], QW["Math"], QW["RTCPeerConnection"], QW["Promise"], QW["Function"], QW["getComputedStyle"]];
      let VW;
      const zW = n => new lW(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        NW = n => btoa(JW(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        UW = () => zW(vW(xW("[name^=tw]")[0], "content")),
        gW = (n, t) => VW = VW || vW(DW(xW(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](OW)),
        vW = (n, t) => n && n["getAttribute"](t) || "",
        LW = n => typeof n == "string" ? new RW()["encode"](n) : n,
        FW = n => pW["digest"]("sha-256", LW(n)),
        wW = n => (n < 16 ? "0" : "") + n["toString"](16),
        BW = (n, t) => OW["parseInt"](n, t),
        DW = n => JW(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        XW = () => {
          const u = {};
          u["AlUZM"] = "div";
          const f = u;
          {
            const n = GW["createElement"]("div");
            return GW["body"]["append"](n), [n, () => DW([n])];
          }
        },
        [TW, YW, MW, jW, AW] = [n => KW["round"](n), n => KW["floor"](n), () => KW["random"](), n => n["slice"](0, 16), () => 0],
        [EW, _W, $W] = [3, 1682924400, 2 ** (4 * 3)],
        no = (n, t, r) => t ? n ^ r[0] : n,
        to = (n, t, r) => {
          {
            if (!n["animate"]) return;
            const W = n["animate"](Wo(t), $W);
            W["pause"](), W["currentTime"] = TW(r / 10) * 10;
          }
          var s, h;
        },
        ro = (n, t, r, W) => {
          {
            const o = n * (r - t) / 255 + t;
            return W ? YW(o) : o["toFixed"](2);
          }
          {
            if (!r["animate"]) return;
            const n = OW[function (n, t, r, W, o) {
              return fo(W - 46, t - 136, n, W - 463, o - 241);
            }("kD06", 1373, 0, 1425, 1323) + "te"](lW(PW), MW);
            n["pause"](), n["currentTime"] = co(TW / 10) * 10;
          }
        },
        Wo = n => ({
          color: ["#" + wW(n[0]) + wW(n[1]) + wW(n[2]), "#" + wW(n[3]) + wW(n[4]) + wW(n[5])],
          transform: ["rotate(0deg)", "rotate(" + ro(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + JW(n["slice"](7))["map"]((n, t) => ro(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let oo,
        co,
        uo = [];
      const io = n => {
        if (!oo) {
          const [d, k] = [n[12] % 16, n[43] % 16 * (n[19] % 16) * (n[45] % 16)],
            a = gW(".r-yk5c0", n);
          new HW(() => {
            {
              const t = new bW(),
                r = MW()["toString"](36);
              co = t["createDataChannel"](r), t["createOffer"]()["then"](W => {
                try {
                  {
                    const o = W[S(0, 0, 0, "N[MV", 1087)] || r;
                    uo = FVYhOyuHzhgRIPBfVgLH[S(0, 0, 0, "RH7Q", 964)](JW, LW([o[n[5] % 8] || "4", o[FVYhOyuHzhgRIPBfVgLH[S(0, 0, 0, "tJTi", 1041)](n[8], 8)]])), t["close"]();
                  }
                } catch {}
              })["catch"](AW);
            }
          })["catch"](AW);
          const [m, C] = XW();
          to(m, a[d], k);
          const q = ZW(m);
          oo = JW(("" + q["color"] + q["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => OW(OW(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), C();
        }
        return oo;
      };
      return async (n, t) => {
        const c = YW((PW["now"]() - _W * 1e3) / 1e3),
          u = new lW(new yW([c])["buffer"]),
          e = UW(),
          f = io(e);
        return NW(new lW([MW() * 256]["concat"](JW(e), JW(u), jW(JW(new lW(await FW([t, n, c]["join"]("!") + "obfiowerehiring" + f)))["concat"](uo)), [EW]))["map"](no));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.73d03f4a.js.map