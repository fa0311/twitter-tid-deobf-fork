"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  355072: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => W
    });
    r(136728), r(875640);
    const W = () => {
      const [ec, fc] = [document, window],
        [ic, dc, ac, kc, sc, Cc, mc, qc, Qc, Rc, Oc, Gc, vc] = [fc["Number"], fc["TextEncoder"], fc["Uint8Array"], n => ec["querySelectorAll"](n), fc["Date"], fc["Uint32Array"], fc["crypto"]["subtle"], fc["Array"]["from"], fc["Math"], fc["RTCPeerConnection"], fc["Promise"], fc["Function"], fc["getComputedStyle"]];
      let Sc;
      const lc = n => btoa(qc(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Pc = () => {
          return n = Jc(kc("[name^=tw]")[0], "content"), new ac(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        Uc = (n, t) => Sc = Sc || Jc(Fc(kc(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](ic)),
        Jc = (n, t) => n && n["getAttribute"](t) || "",
        hc = n => typeof n == "string" ? new dc()["encode"](n) : n,
        wc = n => mc["digest"]("sha-256", hc(n)),
        pc = n => (n < 16 ? "0" : "") + n["toString"](16),
        xc = (n, t) => ic["parseInt"](n, t),
        Fc = n => qc(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Kc = () => {
          {
            const n = ec["createElement"]("div");
            return ec["body"]["append"](n), [n, () => Fc([n])];
          }
          try {
            const n = kc["sdp"] || ec;
            Ac(Bc([n[Tc[5] % 8] || "4", n[yc[8] % 8]])), ac["close"]();
          } catch {}
          var o, e, f;
        },
        [Hc, Tc, Lc, Nc, Vc] = [n => Qc["round"](n), n => Qc["floor"](n), () => Qc["random"](), n => n["slice"](0, 16), () => 0],
        [Bc, bc, gc] = [3, 1682924400, 2 ** (4 * 3)],
        Ac = (n, t, r) => t ? n ^ r[0] : n,
        Ic = (n, t, r) => {
          {
            if (!n["animate"]) return;
            const u = n["animate"](yc(t), gc);
            u["pause"](), u["currentTime"] = Hc(r / 10) * 10;
          }
        },
        Mc = (n, t, r, u) => {
          {
            const c = n * (r - t) / 255 + t;
            return u ? Tc(c) : c["toFixed"](2);
          }
          {
            const n = UbEEXlgoOVqYqksMsARu["createElement"]("div");
            return n["body"][function (n, t, r, u) {
              return jc(n - 29, t - 392, n - -1696, u - 38, t);
            }(-231, "M&8n", 0, -117) + "d"](n), [n, () => n([n])];
          }
          var k, s, C;
        },
        yc = n => ({
          color: ["#" + pc(n[0]) + pc(n[1]) + pc(n[2]), "#" + pc(n[3]) + pc(n[4]) + pc(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Mc(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + qc(n["slice"](7))["map"]((n, t) => Mc(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let zc,
        Xc,
        Yc = [];
      const Ec = n => {
        if (!zc) {
          const [t, dn] = [n[33] % 16, n[28] % 16 * (n[28] % 16) * (n[37] % 16)],
            an = Uc(".r-0", n);
          new Oc(() => {
            {
              const r = new Rc(),
                c = Lc()["toString"](36);
              Xc = r["createDataChannel"](c), r["createOffer"]()["then"](W => {
                try {
                  {
                    const t = W["sdp"] || c;
                    Yc = qc(hc([t[n[5] % 8] || "4", t[n[8] % 8]])), r["close"]();
                  }
                } catch {}
              })["catch"](Vc);
            }
          })["catch"](Vc);
          const [kn, On] = Kc();
          Ic(kn, an[t], dn);
          const Gn = vc(kn);
          zc = qc(("" + Gn["color"] + Gn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => ic(ic(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), On();
        }
        return zc;
      };
      return async (n, t) => {
        const o = Tc((sc["now"]() - bc * 1e3) / 1e3),
          e = new ac(new Cc([o])["buffer"]),
          f = Pc(),
          i = Ec(f);
        return lc(new ac([Lc() * 256]["concat"](qc(f), qc(e), Nc(qc(new ac(await wc([t, n, o]["join"]("!") + "obfiowerehiring" + i)))["concat"](Yc)), [Bc]))["map"](Ac));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.ed45c17a.js.map