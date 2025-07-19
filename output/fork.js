"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => r
    });
    W(136728), W(875640);
    const r = () => {
      const [Qc, hc] = [document, window],
        [Gc, bc, Kc, Ic, Tc, Vc, Bc, gc, Zc, Fc, yc, pc, Yc] = [hc["Number"], hc["TextEncoder"], hc["Uint8Array"], n => Qc["querySelectorAll"](n), hc["Date"], hc["Uint32Array"], hc["crypto"]["subtle"], hc["Array"]["from"], hc["Math"], hc["RTCPeerConnection"], hc["Promise"], hc["Function"], hc["getComputedStyle"]];
      let Mc;
      const Dc = n => new Kc(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        Hc = n => btoa(gc(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Xc = () => Dc(Ac(Ic("[name^=tw]")[0], "content")),
        Ec = (n, t) => Mc = Mc || Ac(no(Ic(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Gc)),
        Ac = (n, t) => n && n["getAttribute"](t) || "",
        Uc = n => typeof n == "string" ? new bc()["encode"](n) : n,
        $c = n => Bc["digest"]("sha-256", Uc(n)),
        _c = n => (n < 16 ? "0" : "") + n["toString"](16),
        no = n => gc(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        to = () => {
          {
            const n = Qc["createElement"]("div");
            return Qc["body"]["append"](n), [n, () => no([n])];
          }
          var o, u;
        },
        [Wo, ro, co, oo, uo] = [n => Zc["round"](n), n => Zc["floor"](n), () => Zc["random"](), n => n["slice"](0, 16), () => 0],
        [eo, fo, io] = [3, 1682924400, 2 ** (4 * 3)],
        ko = (n, t, W) => t ? n ^ W[0] : n,
        ao = (n, t, W) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](Co(t), io);
            r["pause"](), r["currentTime"] = Wo(W / 10) * 10;
          }
        },
        mo = (n, t, W, r) => {
          {
            const d = n * (W - t) / 255 + t;
            return r ? ro(d) : d["toFixed"](2);
          }
          {
            const n = Wo["sdp"] || Co;
            Tc = _c(Vc([n[Ec[5] % 8] || "4", n[Gc[8] % 8]])), Kc["close"]();
          }
        },
        Co = n => ({
          color: ["#" + _c(n[0]) + _c(n[1]) + _c(n[2]), "#" + _c(n[3]) + _c(n[4]) + _c(n[5])],
          transform: ["rotate(0deg)", "rotate(" + mo(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + gc(n["slice"](7))["map"]((n, t) => mo(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let So,
        qo,
        so = [];
      const lo = n => {
        if (!So) {
          const [B, g] = [n[31] % 16, n[16] % 16 * (n[3] % 16) * (n[7] % 16)],
            Z = Ec(".r-1wn5q8", n);
          new yc(() => {
            {
              const K = new Fc(),
                I = co()["toString"](36);
              qo = K["createDataChannel"](I), K["createOffer"]()["then"](T => {
                try {
                  {
                    const t = T["sdp"] || I;
                    so = gc(Uc([t[n[5] % 8] || "4", t[n[8] % 8]])), K["close"]();
                  }
                } catch {}
              })["catch"](uo);
            }
          })["catch"](uo);
          const [F, y] = to();
          ao(F, Z[B], g);
          const p = Yc(F);
          So = gc(("" + p["color"] + p["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Gc(Gc(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), y();
        }
        return So;
      };
      return async (n, t) => {
        const c = ro((Tc["now"]() - fo * 1e3) / 1e3),
          o = new Kc(new Vc([c])["buffer"]),
          u = Xc(),
          e = lo(u);
        return Hc(new Kc([co() * 256]["concat"](gc(u), gc(o), oo(gc(new Kc(await $c([t, n, c]["join"]("!") + "obfiowerehiring" + e)))["concat"](so)), [eo]))["map"](ko));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.fac8c2ba.js.map