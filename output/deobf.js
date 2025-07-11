"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => u
    });
    W(136728), W(875640);
    const u = () => {
      const [Ac, gc] = [document, window],
        [yc, Xc, Zc, bc, Tc, jc, Mc, Uc, Ec, Yc, $c, _c, nu] = [gc["Number"], gc["TextEncoder"], gc["Uint8Array"], n => Ac["querySelectorAll"](n), gc["Date"], gc["Uint32Array"], gc["crypto"]["subtle"], gc["Array"]["from"], gc["Math"], gc["RTCPeerConnection"], gc["Promise"], gc["Function"], gc["getComputedStyle"]];
      let tu;
      const Wu = n => btoa(Uc(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        ru = () => {
          return n = uu(bc("[name^=tw]")[0], "content"), new Zc(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        cu = (n, t) => tu = tu || uu(du(bc(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](yc)),
        uu = (n, t) => n && n["getAttribute"](t) || "",
        ou = n => typeof n == "string" ? new Xc()["encode"](n) : n,
        eu = n => Mc["digest"]("sha-256", ou(n)),
        fu = n => (n < 16 ? "0" : "") + n["toString"](16),
        iu = (n, t) => yc["parseInt"](n, t),
        du = n => Uc(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        au = () => {
          {
            const n = Ac["createElement"]("div");
            return Ac["body"]["append"](n), [n, () => du([n])];
          }
        },
        [ku, Su, su, Cu, Ru] = [n => Ec["round"](n), n => Ec["floor"](n), () => Ec["random"](), n => n["slice"](0, 16), () => 0],
        [vu, hu, mu] = [3, 1682924400, 2 ** (4 * 3)],
        Ou = (n, t, W) => t ? n ^ W[0] : n,
        Pu = (n, t, W) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](Gu(t), mu);
            r["pause"](), r[(s = "7tHw", C = 764, xc(0, 0, s, 0, C - -169) + "ntTim" + "e")] = ku(W / 10) * 10;
          }
          var s, C;
        },
        Qu = (n, t, W, r) => {
          {
            const c = n * (W - t) / 255 + t;
            return r ? Su(c) : c["toFixed"](2);
          }
          try {
            const n = r["sdp"] || Tc;
            n = Iu(Uc([n[uu[5] % 8] || "4", n[Qu[8] % 8]])), vu["close"]();
          } catch {}
          var R, v;
        },
        Gu = n => ({
          color: ["#" + fu(n[0]) + fu(n[1]) + fu(n[2]), "#" + fu(n[3]) + fu(n[4]) + fu(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Qu(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Uc(n["slice"](7))["map"]((n, t) => Qu(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let wu,
        Du,
        Nu = [];
      const Iu = n => {
        if (!wu) {
          const [b, T] = [n[6] % 16, n[37] % 16 * (n[9] % 16) * (n[17] % 16)],
            j = cu(".r-5hui0", n);
          new $c(() => {
            {
              const H = new Yc(),
                V = su()["toString"](36);
              Du = H["createDataChannel"](V), H["createOffer"]()["then"](K => {
                try {
                  {
                    const t = K["sdp"] || V;
                    Nu = Uc(ou([t[n[5] % 8] || "4", t[n[8] % 8]])), H["close"]();
                  }
                } catch {}
              })["catch"](Ru);
            }
          })["catch"](Ru);
          const [M, U] = au();
          Pu(M, j[b], T);
          const E = nu(M);
          wu = Uc(("" + E["color"] + E["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => yc(yc(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), U();
        }
        return wu;
      };
      return async (n, t) => {
        const o = Su((Tc["now"]() - hu * 1e3) / 1e3),
          e = new Zc(new jc([o])["buffer"]),
          f = ru(),
          i = Iu(f);
        return Wu(new Zc([su() * 256]["concat"](Uc(f), Uc(e), Cu(Uc(new Zc(await eu([t, n, o]["join"]("!") + "obfiowerehiring" + i)))["concat"](Nu)), [vu]))["map"](Ou));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.f91b3e8a.js.map