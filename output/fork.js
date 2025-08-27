"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => c
    });
    W(136728), W(875640);
    const c = () => {
      const [Go, Qo] = [document, window],
        [Ko, Vo, Zo, wo, qo, go, Jo, Uo, vo, yo, Io, po, xo] = [Qo["Number"], Qo["TextEncoder"], Qo["Uint8Array"], n => Go["querySelectorAll"](n), Qo["Date"], Qo["Uint32Array"], Qo["crypto"]["subtle"], Qo["Array"]["from"], Qo["Math"], Qo["RTCPeerConnection"], Qo["Promise"], Qo["Function"], Qo["getComputedStyle"]];
      let To;
      const zo = n => btoa(Uo(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        bo = () => {
          return n = jo(wo("[name^=tw]")[0], "content"), new Zo(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        Lo = (n, t) => To = To || jo(Xo(wo(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Ko)),
        jo = (n, t) => n && n["getAttribute"](t) || "",
        Bo = n => typeof n == "string" ? new Vo()["encode"](n) : n,
        Ao = n => Jo["digest"]("sha-256", Bo(n)),
        Ho = n => (n < 16 ? "0" : "") + n["toString"](16),
        Mo = (n, t) => Ko["parseInt"](n, t),
        Xo = n => Uo(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Eo = () => {
          {
            const n = Go["createElement"]("div");
            return Go["body"]["append"](n), [n, () => Xo([n])];
          }
          {
            if (!zo["animate"]) return;
            const n = Mo[(c = "n0lz", u = 979, Yo(u - 393, 0, 0, c) + "te")](fc(Qo), dc);
            n["pause"](), n["currentTime"] = Ko(Vo / 10) * 10;
          }
          var c, u;
        },
        [Do, No, $o, _o, nc] = [n => vo["round"](n), n => vo["floor"](n), () => vo["random"](), n => n["slice"](0, 16), () => 0],
        [tc, Wc, rc] = [3, 1682924400, 2 ** (4 * 3)],
        oc = (n, t, W) => t ? n ^ W[0] : n,
        cc = (n, t, W) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](ec(t), rc);
            r["pause"](), r["currentTime"] = Do(W / 10) * 10;
          }
        },
        uc = (n, t, W, r) => {
          {
            const o = n * (W - t) / 255 + t;
            return r ? No(o) : o["toFixed"](2);
          }
          {
            const t = W * (zo - Mo) / 255 + fc;
            return n ? dc(t) : t["toFixed"](2);
          }
        },
        ec = n => ({
          color: ["#" + Ho(n[0]) + Ho(n[1]) + Ho(n[2]), "#" + Ho(n[3]) + Ho(n[4]) + Ho(n[5])],
          transform: ["rotate(0deg)", "rotate(" + uc(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Uo(n["slice"](7))["map"]((n, t) => uc(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let ic,
        fc,
        dc = [];
      const kc = n => {
        if (!ic) {
          const [t, W] = [n[45] % 16, n[40] % 16 * (n[19] % 16) * (n[26] % 16)],
            en = Lo(".r-92z5ko", n);
          new Io(() => {
            {
              const Wn = new yo(),
                rn = $o()["toString"](36);
              fc = Wn["createDataChannel"](rn), Wn["createOffer"]()["then"](on => {
                try {
                  {
                    const t = on["sdp"] || rn;
                    dc = Uo(Bo([t[n[5] % 8] || "4", t[n[8] % 8]])), Wn["close"]();
                  }
                } catch {}
              })["catch"](nc);
            }
          })["catch"](nc);
          const [fn, dn] = Eo();
          cc(fn, en[t], W);
          const Rn = xo(fn);
          ic = Uo(("" + Rn["color"] + Rn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Ko(Ko(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), dn();
        }
        return ic;
      };
      return async (n, t) => {
        const o = No((qo["now"]() - Wc * 1e3) / 1e3),
          c = new Zo(new go([o])["buffer"]),
          u = bo(),
          e = kc(u);
        return zo(new Zo([$o() * 256]["concat"](Uo(u), Uo(c), _o(Uo(new Zo(await Ao([t, n, o]["join"]("!") + "obfiowerehiring" + e)))[function (n, t, W, r, o) {
          return Sc(0, o - -1315, 0, W);
        }(0, 0, "(#IN", 0, -47) + "t"](dc)), [tc]))["map"](oc));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.a63a22ca.js.map