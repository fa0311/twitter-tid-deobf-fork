"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => o
    });
    W(136728), W(875640);
    const o = () => {
      const $n = 0,
        [Ir, pr] = [document, window],
        [xr, br, Er, Jr, Kr, zr, Dr, Hr, Nr, Br, Tr, Vr, Ur] = [pr["Number"], pr["TextEncoder"], pr["Uint8Array"], n => Ir["querySelectorAll"](n), pr["Date"], pr["Uint32Array"], pr["crypto"]["subtle"], pr["Array"]["from"], pr["Math"], pr["RTCPeerConnection"], pr["Promise"], pr["Function"], pr["getComputedStyle"]];
      let Ar;
      const Zr = n => btoa(Hr(n)["map"](n => String["fromCharCode"](n))["join"](""))[Gc(1214, 1136, 1096, "]bD^", 1e3) + "ce"](/=/g, ""),
        Xr = () => {
          return n = $r(Jr("[name^=tw]")[0], "content"), new Er(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        Fr = (n, t) => Ar = Ar || $r(rc(Jr(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](xr)),
        $r = (n, t) => n && n["getAttribute"](t) || "",
        _r = n => typeof n == "string" ? new br()["encode"](n) : n,
        nc = n => Dr["digest"]("sha-256", _r(n)),
        tc = n => (n < 16 ? "0" : "") + n["toString"](16),
        Wc = (n, t) => xr["parseInt"](n, t),
        rc = n => Hr(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        cc = () => {
          {
            const n = Ir["createElement"]("div");
            return Ir["body"]["append"](n), [n, () => rc([n])];
          }
          {
            const t = kc["sdp"] || mc;
            xr = ec(Dr([t[xr[5] % 8] || "4", t[Xr[8] % 8]])), br["close"]();
          }
        },
        [oc, uc, ec, fc, ic] = [n => Nr["round"](n), n => Nr["floor"](n), () => Nr["random"](), n => n["slice"](0, 16), () => 0],
        [sc, kc, dc] = [3, 1682924400, 2 ** (4 * 3)],
        Cc = (n, t, W) => t ? n ^ W[0] : n,
        Rc = (n, t, W) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](hc(t), dc);
            r["pause"](), r["currentTime"] = oc(W / 10) * 10;
          }
        },
        ac = (n, t, W, r) => {
          {
            const c = n * (W - t) / 255 + t;
            return r ? uc(c) : c["toFixed"](2);
          }
          {
            const C = new mc(),
              R = xr()["toString"](36);
            ec = C["createDataChannel"](R), C["createOffer"]()["then"](c => {
              try {
                const o = c["sdp"] || R;
                cc = Wc(Er([o[Tr[5] % 8] || "4", o[n[8] % 8]])), C["close"]();
              } catch {}
            })["catch"](wc);
          }
        },
        hc = n => ({
          color: ["#" + tc(n[0]) + tc(n[1]) + tc(n[2]), "#" + tc(n[3]) + tc(n[4]) + tc(n[5])],
          transform: ["rotate(0deg)", "rotate(" + ac(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Hr(n["slice"](7))["map"]((n, t) => ac(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let mc,
        wc,
        Pc = [];
      const Oc = n => {
        const kn = {};
        kn["Zjbdv"] = "div";
        const Cn = kn;
        if (!mc) {
          const [kn, Sn] = [n[22] % 16, n[3] % 16 * (n[24] % 16) * (n[7] % 16)],
            mn = Fr(".r-tflc", n);
          new Tr(() => {
            {
              const t = new Br(),
                r = ec()["toString"](36);
              wc = t["createDataChannel"](r), t["createOffer"]()["then"](W => {
                try {
                  {
                    const c = W["sdp"] || r;
                    Pc = Hr(_r([c[n[5] % 8] || "4", c[n[8] % 8]])), t["close"]();
                  }
                } catch {}
              })["catch"](ic);
            }
          })["catch"](ic);
          const [wn, Pn] = cc();
          Rc(wn, mn[kn], Sn);
          const On = Ur(wn);
          mc = Hr(("" + On["color"] + On["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => xr(xr(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Pn();
        }
        return mc;
      };
      return async (n, t) => {
        const i = uc((Kr["now"]() - kc * 1e3) / 1e3),
          s = new Er(new zr([i])["buffer"]),
          k = Xr(),
          d = Oc(k);
        return Zr(new Er([ec() * 256]["concat"](Hr(k), UzbBIotasNsmoDVsKQLA[e(0, 0, $n, 0, "xV4w")](Hr, s), fc(Hr(new Er(await nc([t, n, i]["join"]("!") + "obfiowerehiring" + d)))["concat"](Pc)), [sc]))["map"](Cc));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.d55d800a.js.map