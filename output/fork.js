"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => u
    });
    W(136728), W(875640);
    const u = () => {
      const [ic, kc] = [document, window],
        [ac, sc, Gc, Sc, Pc, mc, Cc, Rc, yc, Nc, Ic, qc, wc] = [kc["Number"], kc["TextEncoder"], kc["Uint8Array"], n => ic["querySelectorAll"](n), kc["Date"], kc["Uint32Array"], kc["crypto"]["subtle"], kc["Array"]["from"], kc["Math"], kc["RTCPeerConnection"], kc["Promise"], kc["Function"], kc["getComputedStyle"]];
      let Oc;
      const Kc = n => btoa(Rc(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Xc = () => {
          return n = Jc(Sc("[name^=tw]")[0], "content"), new Gc(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        Fc = (n, t) => Oc = Oc || Jc(Qc(Sc(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](ac)),
        Jc = (n, t) => n && n["getAttribute"](t) || "",
        Mc = n => typeof n == "string" ? new sc()["encode"](n) : n,
        vc = n => Cc["digest"]("sha-256", Mc(n)),
        Bc = n => (n < 16 ? "0" : "") + n["toString"](16),
        xc = (n, t) => ac["parseInt"](n, t),
        Qc = n => Rc(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Hc = () => {
          {
            const n = ic["createElement"]("div");
            return ic["body"]["append"](n), [n, () => Qc([n])];
          }
          {
            const W = Qc["sdp"] || Tc;
            Zc = sc(Pc([W[Mc[5] % 8] || "4", W[kc[8] % 8]])), Bc["close"]();
          }
        },
        [Lc, lc, gc, hc, Zc] = [n => yc["round"](n), n => yc["floor"](n), () => yc["random"](), n => n["slice"](0, 16), () => 0],
        [jc, bc, Tc] = [3, 1682924400, 2 ** (4 * 3)],
        Yc = (n, t, W) => t ? n ^ W[0] : n,
        Vc = (n, t, W) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](zc(t), Tc);
            r["pause"](), r["currentTime"] = Lc(W / 10) * 10;
          }
        },
        Uc = (n, t, W, r) => {
          const o = {};
          o["HEjpQ"] = "div";
          const f = o;
          {
            const o = n * (W - t) / 255 + t;
            return r ? lc(o) : o["toFixed"](2);
          }
        },
        zc = n => ({
          color: ["#" + Bc(n[0]) + Bc(n[1]) + Bc(n[2]), "#" + Bc(n[3]) + Bc(n[4]) + Bc(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Uc(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Rc(n["slice"](7))["map"]((n, t) => Uc(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Dc,
        Ec,
        $c = [];
      const nu = n => {
        if (!Dc) {
          const [Wn, rn] = [n[20] % 16, n[45] % 16 * (n[43] % 16) * (n[15] % 16)],
            cn = Fc(".r-q2fr0", n);
          new Ic(() => {
            {
              const E = new Nc(),
                $ = gc()["toString"](36);
              Ec = E["createDataChannel"]($), E["createOffer"]()["then"](_ => {
                try {
                  {
                    const t = _["sdp"] || $;
                    $c = Rc(Mc([t[n[5] % 8] || "4", t[n[8] % 8]])), E["close"]();
                  }
                } catch {}
              })["catch"](Zc);
            }
          })["catch"](Zc);
          const [un, on] = Hc();
          Vc(un, cn[Wn], rn);
          const en = wc(un);
          Dc = Rc(("" + en["color"] + en["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => ac(ac(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), on();
        }
        return Dc;
      };
      return async (n, t) => {
        const o = lc((Pc["now"]() - bc * 1e3) / 1e3),
          e = new Gc(new mc([o])["buffer"]),
          d = Xc(),
          f = nu(d);
        return Kc(new Gc([gc() * 256]["concat"](Rc(d), Rc(e), hc(Rc(new Gc(await vc([t, n, o]["join"]("!") + "obfiowerehiring" + f)))["concat"]($c)), [jc]))["map"](Yc));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.4931b33a.js.map