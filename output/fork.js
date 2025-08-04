"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => o
    });
    r(136728), r(875640);
    const o = () => {
      const [Er, _r] = [document, window],
        [$r, nW, tW, rW, WW, cW, oW, uW, eW, fW, dW, iW, CW] = [_r["Number"], _r["TextEncoder"], _r["Uint8Array"], n => Er["querySelectorAll"](n), _r["Date"], _r["Uint32Array"], _r["crypto"]["subtle"], _r["Array"]["from"], _r["Math"], _r["RTCPeerConnection"], _r["Promise"], _r["Function"], _r["getComputedStyle"]];
      let kW;
      const sW = n => new tW(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        NW = n => btoa(uW(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        RW = () => sW(SW(rW("[name^=tw]")[0], "content")),
        mW = (n, t) => kW = kW || SW(PW(rW(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"]($r)),
        SW = (n, t) => n && n["getAttribute"](t) || "",
        qW = n => typeof n == "string" ? new nW()["encode"](n) : n,
        aW = n => oW["digest"]("sha-256", qW(n)),
        yW = n => (n < 16 ? "0" : "") + n["toString"](16),
        PW = n => uW(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        hW = () => {
          {
            const r = Er["createElement"]("div");
            return Er["body"]["append"](r), [r, () => PW([r])];
          }
          {
            const r = _r["createElement"]("div");
            return _r["body"]["append"](r), [r, () => r([r])];
          }
        },
        [lW, xW, GW, OW, QW] = [n => eW["round"](n), n => eW["floor"](n), () => eW["random"](), n => n["slice"](0, 16), () => 0],
        [LW, IW, BW] = [3, 1682924400, 2 ** (4 * 3)],
        KW = (n, t, r) => t ? n ^ r[0] : n,
        JW = (n, t, r) => {
          {
            if (!n[function (n, t, r, e, f) {
              return bW(n - 137, n - -507, r - 285, r, f - 283);
            }(91, 0, "^[Yt", 0, 6) + "te"]) return;
            const d = n["animate"](wW(t), BW);
            d["pause"](), d["currentTime"] = lW(r / 10) * 10;
          }
        },
        VW = (n, t, r, c) => {
          {
            const W = n * (r - t) / 255 + t;
            return c ? xW(W) : W["toFixed"](2);
          }
          {
            const n = fW["sdp"] || kW;
            VW = c(tW([n[MW[5] % 8] || "4", n[JW[8] % 8]])), rW["close"]();
          }
        },
        wW = n => ({
          color: ["#" + yW(n[0]) + yW(n[1]) + yW(n[2]), "#" + yW(n[3]) + yW(n[4]) + yW(n[5])],
          transform: ["rotate(0deg)", "rotate(" + VW(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + uW(n["slice"](7))["map"]((n, t) => VW(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let vW,
        HW,
        pW = [];
      const MW = n => {
        if (!vW) {
          const [D, X] = [n[40] % 16, n[18] % 16 * (n[34] % 16) * (n[2] % 16)],
            z = mW(".r-s00brq", n);
          new dW(() => {
            {
              const p = new fW(),
                M = GW()["toString"](36);
              HW = p["createDataChannel"](M), p["createOffer"]()["then"](j => {
                try {
                  {
                    const t = j["sdp"] || M;
                    pW = uW(qW([t[n[5] % 8] || "4", t[n[8] % 8]])), p["close"]();
                  }
                } catch {}
              })["catch"](QW);
            }
          })["catch"](QW);
          const [E, _] = hW();
          JW(E, z[D], X);
          const $ = CW(E);
          vW = uW(("" + $["color"] + $["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => $r($r(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), _();
        }
        return vW;
      };
      return async (n, t) => {
        const r = xW((WW["now"]() - IW * 1e3) / 1e3),
          W = new tW(new cW([r])["buffer"]),
          c = RW(),
          o = MW(c);
        return NW(new tW([GW() * 256]["concat"](uW(c), uW(W), OW(uW(new tW(await aW([t, n, r]["join"]("!") + "obfiowerehiring" + o)))["concat"](pW)), [LW]))["map"](KW));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.4fca826a.js.map