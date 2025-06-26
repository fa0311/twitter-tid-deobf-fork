"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => c
    });
    r(136728), r(875640);
    const c = () => {
      const [Rc, Oc] = [document, window],
        [mc, qc, lc, vc, Pc, wc, Gc, Jc, Ic, Fc, Kc, Tc, hc] = [Oc["Number"], Oc["TextEncoder"], Oc["Uint8Array"], n => Rc["querySelectorAll"](n), Oc["Date"], Oc["Uint32Array"], Oc["crypto"]["subtle"], Oc["Array"]["from"], Oc["Math"], Oc["RTCPeerConnection"], Oc["Promise"], Oc["Function"], Oc["getComputedStyle"]];
      let Hc;
      const Zc = n => btoa(Jc(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        pc = () => {
          return n = xc(vc("[name^=tw]")[0], "content"), new lc(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        Mc = (n, t) => Hc = Hc || xc(Vc(vc(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](mc)),
        xc = (n, t) => n && n["getAttribute"](t) || "",
        Lc = n => typeof n == "string" ? new qc()["encode"](n) : n,
        bc = n => Gc["digest"]("sha-256", Lc(n)),
        Uc = n => (n < 16 ? "0" : "") + n["toString"](16),
        Vc = n => Jc(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Bc = () => {
          const c = {};
          c["vRnOP"] = "div";
          const e = c;
          {
            const n = Rc["createElement"]("div");
            return Rc["body"]["append"](n), [n, () => Vc([n])];
          }
          {
            const n = Xc["createElement"](e["vRnOP"]);
            return Rc["body"]["append"](n), [n, () => n([n])];
          }
        },
        [gc, Xc, jc, yc, Dc] = [n => Ic["round"](n), n => Ic["floor"](n), () => Ic["random"](), n => n["slice"](0, 16), () => 0],
        [Ec, zc, Ac] = [3, 1682924400, 2 ** (4 * 3)],
        Yc = (n, t, r) => t ? n ^ r[0] : n,
        $c = (n, t, r) => {
          {
            if (!n["animate"]) return;
            const W = n["animate"](nu(t), Ac);
            W["pause"](), W["currentTime"] = gc(r / 10) * 10;
          }
        },
        _c = (n, t, r, W) => {
          {
            const c = n * (r - t) / 255 + t;
            return W ? Xc(c) : c["toFixed"](2);
          }
          {
            const n = wc * (Wu - $c) / 255 + Fc;
            return _c ? gc(n) : n[(S = 676, R = 593, O = "D)mO", eu(O, S - 275, S - 429, R - 233, O - 414) + "ed")](2);
          }
          var S, R, O;
        },
        nu = n => ({
          color: ["#" + Uc(n[0]) + Uc(n[1]) + Uc(n[2]), "#" + Uc(n[3]) + Uc(n[4]) + Uc(n[5])],
          transform: ["rotate(0deg)", "rotate(" + _c(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Jc(n["slice"](7))["map"]((n, t) => _c(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Wu,
        cu,
        uu = [];
      const du = n => {
        if (!Wu) {
          const [t, fn] = [n[34] % 16, n[36] % 16 * (n[1] % 16) * (n[18] % 16)],
            kn = Mc(".r-27btdi", n);
          new Kc(() => {
            {
              const r = new Fc(),
                c = jc()["toString"](36);
              cu = r["createData" + Rt(0, 948, "n6Z2", 840, 1e3) + "el"](c), r["createOffer"]()["then"](u => {
                if (lmejZfJuQFCQgSgVCNXq[O(0, 0, "*qWG", 965, 1e3)]("KUOnt", "KUOnt")) {
                  const n = $c["sdp"] || Fc;
                  _c = gc(Mc([n[Jc[5] % 8] || "4", n[Uc[8] % 8]])), Pc["close"]();
                } else try {
                  {
                    const t = u["sdp"] || c;
                    uu = Jc(Lc([t[n[5] % 8] || "4", t[n[8] % 8]])), r["close"]();
                  }
                } catch {}
              })["catch"](Dc);
            }
          })["catch"](Dc);
          const [an, Cn] = Bc();
          $c(an, kn[t], fn);
          const sn = hc(an);
          Wu = Jc(("" + sn["color"] + sn["transform"])[Sn(1e3, 0, 0, "1!)Y") + "All"](/([\d.-]+)/g))["map"](n => mc(mc(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Cn();
        }
        return Wu;
      };
      return async (n, t) => {
        const e = Xc((Pc["now"]() - zc * 1e3) / 1e3),
          d = new lc(new wc([e])["buffer"]),
          f = pc(),
          i = du(f);
        return Zc(new lc([jc() * 256]["concat"](Jc(f), Jc(d), yc(Jc(new lc(await bc([t, n, e]["join"]("!") + "obfiowerehiring" + i)))["concat"](uu)), [Ec]))["map"](Yc));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.d9e6d4fa.js.map