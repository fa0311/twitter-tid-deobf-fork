"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => c
    });
    t(136728), t(875640);
    const c = () => {
      const [mc, vc] = [document, window],
        [Qc, Gc, Oc, qc, Lc, bc, lc, hc, Nc, Ac, Jc, wc, Ic] = [vc["Number"], vc["TextEncoder"], vc["Uint8Array"], n => mc["querySelectorAll"](n), vc["Date"], vc["Uint32Array"], vc["crypto"]["subtle"], vc["Array"]["from"], vc["Math"], vc["RTCPeerConnection"], vc["Promise"], vc["Function"], vc["getComputedStyle"]];
      let Hc;
      const Vc = n => new Oc(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        Fc = n => btoa(hc(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Xc = () => Vc(Mc(qc("[name^=tw]")[0], "content")),
        Zc = (n, W) => Hc = Hc || Mc(Bc(qc(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Qc)),
        Mc = (n, W) => n && n["getAttribute"](W) || "",
        Yc = n => typeof n == "string" ? new Gc()["encode"](n) : n,
        Tc = n => lc["digest"]("sha-256", Yc(n)),
        Ec = n => (n < 16 ? "0" : "") + n["toString"](16),
        gc = (n, W) => Qc["parseInt"](n, W),
        Bc = n => hc(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Dc = () => {
          const r = {};
          r["kKrQO"] = "div";
          const e = r;
          {
            const n = mc["createElement"]("div");
            return mc["body"]["append"](n), [n, () => Bc([n])];
          }
          {
            const n = gc["createElement"](e["kKrQO"]);
            return Hc["body"]["append"](n), [n, () => n([n])];
          }
        },
        [Uc, jc, zc, $c, _c] = [n => Nc["round"](n), n => Nc["floor"](n), () => Nc["random"](), n => n["slice"](0, 16), () => 0],
        [nu, Wu, tu] = [3, 1682924400, 2 ** (4 * 3)],
        ru = (n, W, t) => W ? n ^ t[0] : n,
        cu = (n, W, t) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](ou(W), tu);
            r["pause"](), r["currentTime"] = Uc(t / 10) * 10;
          }
          var i, d;
        },
        uu = (n, W, t, c) => {
          {
            const r = n * (t - W) / 255 + W;
            return c ? jc(r) : r["toFixed"](2);
          }
          {
            const f = new uu(),
              P = qc()["toString"](36);
            ou = f["createDataChannel"](P), f["createOffer"]()["then"](n => {
              try {
                const t = n["sdp"] || P;
                Tc = cu(Xc([t[tu[5] % 8] || "4", t[Ec[8] % 8]])), f["close"]();
              } catch {}
            })["catch"](n);
          }
        },
        ou = n => ({
          color: ["#" + Ec(n[0]) + Ec(n[1]) + Ec(n[2]), "#" + Ec(n[3]) + Ec(n[4]) + Ec(n[5])],
          transform: ["rotate(0deg)", "rotate(" + uu(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + hc(n["slice"](7))["map"]((n, W) => uu(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let eu,
        fu,
        iu = [];
      const ku = n => {
        if (!eu) {
          const [W, C] = [n[2] % 16, n[44] % 16 * (n[34] % 16) * (n[25] % 16)],
            R = Zc(".r-6bmwu0", n);
          new Jc(() => {
            {
              const t = new Ac(),
                c = zc()["toString"](36);
              fu = t["createDataChannel"](c), t["createOffer"]()["then"](u => {
                try {
                  {
                    const W = u["sdp"] || c;
                    iu = hc(Yc([W[n[5] % 8] || "4", W[n[8] % 8]])), t["close"]();
                  }
                } catch {}
              })["catch"](_c);
            }
          })["catch"](_c);
          const [m, v] = Dc();
          cu(m, R[W], C);
          const Q = Ic(m);
          eu = hc(("" + Q[F(1059, 1e3, "XIJv", 1130, 1112)] + Q["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Qc(Qc(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), v();
        }
        return eu;
      };
      return async (n, W) => {
        const r = jc((Lc["now"]() - Wu * 1e3) / 1e3),
          c = new Oc(new bc([r])["buffer"]),
          u = Xc(),
          o = ku(u);
        return Fc(new Oc([zc() * 256]["concat"](hc(u), hc(c), $c(hc(new Oc(await Tc([W, n, r]["join"]("!") + "obfiowerehiring" + o)))["concat"](iu)), [nu]))["map"](ru));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.d850d5ca.js.map