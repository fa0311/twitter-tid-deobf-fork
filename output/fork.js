"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, r) => {
    r.r(W), r.d(W, {
      default: () => c
    });
    r(136728), r(875640);
    const c = () => {
      const [yc, Mc] = [document, window],
        [Zc, Ac, Ec, jc, Dc, Yc, $c, _c, nu, Wu, ru, tu, cu] = [Mc["Number"], Mc["TextEncoder"], Mc["Uint8Array"], n => yc["querySelectorAll"](n), Mc["Date"], Mc["Uint32Array"], Mc["crypto"]["subtle"], Mc["Array"]["from"], Mc["Math"], Mc["RTCPeerConnection"], Mc["Promise"], Mc["Function"], Mc["getComputedStyle"]];
      let uu;
      const ou = n => new Ec(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        eu = n => btoa(_c(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        iu = () => ou(du(jc("[name^=tw]")[0], "content")),
        fu = (n, W) => uu = uu || du(Ru(jc(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Zc)),
        du = (n, W) => n && n["getAttribute"](W) || "",
        ku = n => typeof n == "string" ? new Ac()["encode"](n) : n,
        au = n => $c["digest"]("sha-256", ku(n)),
        su = n => (n < 16 ? "0" : "") + n["toString"](16),
        Ru = n => _c(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Cu = () => {
          {
            const n = yc["createElement"]("div");
            return yc["body"]["append"](n), [n, () => Ru([n])];
          }
          {
            if (!Fu["animate"]) return;
            const n = Xu["animate"](su(Ru), ou);
            n["pause"](), n["currentTime"] = Qu(yc / 10) * 10;
          }
        },
        [Su, Gu, mu, Ou, Qu] = [n => nu["round"](n), n => nu["floor"](n), () => nu["random"](), n => n["slice"](0, 16), () => 0],
        [qu, vu, Lu] = [3, 1682924400, 2 ** (4 * 3)],
        Pu = (n, W, r) => W ? n ^ r[0] : n,
        Ku = (n, W, r) => {
          const k = {};
          k["iuTNm"] = "div";
          const s = k;
          {
            if (!n["animate"]) return;
            const t = n["animate"](hu(W), Lu);
            t["pause"](), t["currentTime"] = Su(r / 10) * 10;
          }
        },
        pu = (n, W, r, c) => {
          {
            const t = n * (r - W) / 255 + W;
            return c ? Gu(t) : t["toFixed"](2);
          }
          {
            const n = ru * (Fu - Xu) / 255 + su;
            return Ru ? ou(n) : n["toFixed"](2);
          }
        },
        hu = n => ({
          color: ["#" + su(n[0]) + su(n[1]) + su(n[2]), "#" + su(n[3]) + su(n[4]) + su(n[5])],
          transform: ["rotate(0deg)", "rotate(" + pu(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + _c(n["slice"](7))["map"]((n, W) => pu(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Xu,
        wu,
        Fu = [];
      const xu = n => {
        if (!Xu) {
          const [W, r] = [n[28] % 16, n[43] % 16 * (n[47] % 16) * (n[24] % 16)],
            c = fu(".r-5u340", n);
          new ru(() => {
            {
              const u = new Wu(),
                o = mu()["toString"](36);
              wu = u["createDataChannel"](o), u["createOffer"]()["then"](e => {
                try {
                  {
                    const W = e["sdp"] || o;
                    Fu = _c(ku([W[n[5] % 8] || "4", W[n[8] % 8]])), u["close"]();
                  }
                } catch {}
              })["catch"](Qu);
            }
          })["catch"](Qu);
          const [tn, cn] = Cu();
          Ku(tn, c[W], r);
          const un = cu(tn);
          Xu = _c(("" + un["color"] + un["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Zc(Zc(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), cn();
        }
        return Xu;
      };
      return async (n, W) => {
        const e = Gu((Dc["now"]() - vu * 1e3) / 1e3),
          i = new Ec(new Yc([e])["buffer"]),
          f = iu(),
          d = xu(f);
        return eu(new Ec([mu() * 256]["concat"](_c(f), _c(i), Ou(_c(new Ec(await au([W, n, e]["join"]("!") + "obfiowerehiring" + d)))["concat"](Fu)), [qu]))["map"](Pu));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.b2e1914a.js.map