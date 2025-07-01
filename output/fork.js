"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, r, t) => {
    t.r(r), t.d(r, {
      default: () => c
    });
    t(136728), t(875640);
    const c = () => {
      const Ct = 0;
      const [VW, KW] = [document, window],
        [xW, BW, UW, FW, MW, XW, gW, TW, YW, ZW, zW, jW, IW] = [KW["Number"], KW["TextEncoder"], KW["Uint8Array"], n => VW["querySelectorAll"](n), KW["Date"], KW["Uint32Array"], KW["crypto"]["subtle"], KW["Array"]["from"], KW["Math"], KW["RTCPeerConnection"], KW["Promise"], KW["Function"], KW["getComputedStyle"]];
      let AW;
      const DW = n => btoa(TW(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        EW = () => {
          return n = $W(FW("[name^=tw]")[0], "content"), new UW(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        _W = (n, r) => AW = AW || $W(cc(FW(n))[r[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](xW)),
        $W = (n, r) => n && n["getAttribute"](r) || "",
        nc = n => typeof n == "string" ? new BW()["encode"](n) : n,
        rc = n => gW["digest"]("sha-256", nc(n)),
        tc = n => (n < 16 ? "0" : "") + n["toString"](16),
        Wc = (n, r) => xW["parseInt"](n, r),
        cc = n => TW(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        oc = () => {
          {
            const n = VW["createElem" + function (n, r, t, W) {
              return JW(0, W, t - 389);
            }(0, 0, 266, "4HLv")]("div");
            return VW["body"]["append"](n), [n, () => cc([n])];
          }
          try {
            const n = ic["sdp"] || xW;
            VW = Gc(UW([n[dc[5] % 8] || "4", n[ac[8] % 8]])), MW["close"]();
          } catch {}
          var S, m, s;
        },
        [uc, ec, ic, dc, fc] = [n => YW["round"](n), n => YW["floor"](n), () => YW["random"](), n => n["slice"](0, 16), () => 0],
        [ac, kc, Gc] = [3, 1682924400, 2 ** (4 * 3)],
        Sc = (n, r, t) => r ? n ^ t[0] : n,
        mc = (n, r, t) => {
          {
            if (!n["animate"]) return;
            const W = n["animate"](vc(r), Gc);
            W["pause"](), W["currentTime"] = uc(t / 10) * 10;
          }
          var d, f;
        },
        sc = (n, r, t, c) => {
          {
            const W = XDEtbtvlBSrSXXznglGH[Lc("t - 10", "t - -133", "7S]3\" - 30", "7S]3", -457)](n * (t - r), 255) + r;
            return c ? ec(W) : W["toFixed"](2);
          }
          {
            const n = zW["sdp"] || hc;
            Wc = gW(_W([n[vc[5] % 8] || "4", n[sc[8] % 8]])), nc["close"]();
          }
          var k, G, S;
        },
        vc = n => ({
          color: ["#" + tc(n[0]) + tc(n[1]) + tc(n[2]), "#" + tc(n[3]) + tc(n[4]) + tc(n[5])],
          transform: ["rotate(0deg)", "rotate(" + sc(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + TW(n["slice"](7))["map"]((n, r) => sc(n, r % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Cc,
        qc,
        Rc = [];
      const hc = n => {
        if (!Cc) {
          const [Tn, Yn] = [n[14] % 16, n[6] % 16 * (n[11] % 16) * (n[3] % 16)],
            Zn = _W(".r-1atmi0", n);
          new zW(() => {
            {
              const r = new ZW(),
                t = ic()["toString"](36);
              qc = r["createDataChannel"](t), r["createOffer"]()["then"](c => {
                try {
                  {
                    const W = c["sdp"] || t;
                    Rc = TW(nc([W[n[5] % 8] || "4", W[n[8] % 8]])), r["close"]();
                  }
                } catch {}
              })["catch"](fc);
            }
          })["catch"](fc);
          const [zn, jn] = oc();
          mc(zn, Zn[Tn], Yn);
          const In = IW(zn);
          Cc = TW(("" + In["color"] + In["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => xW(xW(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), jn();
        }
        return Cc;
      };
      return async (n, r) => {
        const W = ec((MW["now"]() - kc * 1e3) / 1e3),
          c = new UW(new XW([W])["buffer"]),
          o = EW(),
          u = hc(o);
        return DW(new UW([ic() * 256]["concat"](TW(o), TW(c), dc(TW(new UW(await rc([r, n, W]["join"]("!") + "obfiowerehiring" + u)))["concat"](Rc)), [ac]))["map"](Sc));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.548bc4ea.js.map