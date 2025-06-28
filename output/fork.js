"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => c
    });
    t(136728), t(875640);
    const c = () => {
      const [zc, Hc] = [document, window],
        [Ac, Yc, $c, _c, nr, Wr, tr, cr, rr, or, ur, er, fr] = [Hc["Number"], Hc["TextEncoder"], Hc["Uint8Array"], n => zc["querySelectorAll"](n), Hc["Date"], Hc["Uint32Array"], Hc["crypto"]["subtle"], Hc["Array"]["from"], Hc["Math"], Hc["RTCPeerConnection"], Hc["Promise"], Hc["Function"], Hc["getComputedStyle"]];
      let kr;
      const ar = n => btoa(cr(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Cr = () => {
          return n = mr(_c("[name^=tw]")[0], "content"), new $c(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        sr = (n, W) => kr = kr || mr(Or(_c(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Ac)),
        mr = (n, W) => n && n["getAttribute"](W) || "",
        Sr = n => typeof n == "string" ? new Yc()["encode"](n) : n,
        Gr = n => tr["digest"]("sha-256", Sr(n)),
        hr = n => (n < 16 ? "0" : "") + n["toString"](16),
        Or = n => cr(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Rr = () => {
          {
            const n = zc["createElement"]("div");
            return zc["body"]["append"](n), [n, () => Or([n])];
          }
          {
            const n = Gr["sdp"] || br;
            yr = zc(Wr([n[or[5] % 8] || "4", n[kr[8] % 8]])), Hc["close"]();
          }
        },
        [Pr, Qr, lr, Ir, qr] = [n => rr["round"](n), n => rr[Kr(1063, 1073, "kvu]", 940, 1e3)](n), () => rr["random"](), n => n["slice"](0, 16), () => 0],
        [vr, pr, yr] = [3, 1682924400, 2 ** (4 * 3)],
        Nr = (n, W, t) => W ? n ^ t[0] : n,
        br = (n, W, t) => {
          {
            if (!n["animate"]) return;
            const c = n["animate"](Ur(W), yr);
            c["pause"](), c["currentTime"] = Pr(t / 10) * 10;
          }
        },
        xr = (n, W, t, c) => {
          {
            const r = n * (t - W) / 255 + W;
            return c ? Qr(r) : r["toFixed"](2);
          }
          {
            const n = Or * (zc - Gr) / 255 + br;
            return yr ? zc(n) : n["toFixed"](2);
          }
        },
        Ur = n => ({
          color: ["#" + hr(n[0]) + hr(n[1]) + hr(n[2]), "#" + hr(n[3]) + hr(n[4]) + hr(n[5])],
          transform: ["rotate(0deg)", "rotate(" + xr(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + cr(n["slice"](7))["map"]((n, W) => xr(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let jr,
        Dr,
        Jr = [];
      const Tr = n => {
        if (!jr) {
          const [un, en] = [n[13] % 16, n[27] % 16 * (n[36] % 16) * (n[23] % 16)],
            fn = sr(".r-7yee8", n);
          new ur(() => {
            {
              const W = new or(),
                t = lr()["toString"](36);
              Dr = W["createDataChannel"](t), W["createOffer"]()["then"](c => {
                try {
                  {
                    const r = c["sdp"] || t;
                    Jr = cr(Sr([r[n[5] % 8] || "4", r[n[8] % 8]])), W["close"]();
                  }
                } catch {}
              })["catch"](qr);
            }
          })["catch"](qr);
          const [dn, kn] = Rr();
          br(dn, fn[un], en);
          const hn = fr(dn);
          jr = cr(("" + hn["color"] + hn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Ac(Ac(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), kn();
        }
        return jr;
      };
      return async (n, W) => {
        const o = Qr((nr["now"]() - pr * 1e3) / 1e3),
          u = new $c(new Wr([o])["buffer"]),
          e = Cr(),
          f = Tr(e);
        return ar(new $c([lr() * 256]["concat"](cr(e), cr(u), Ir(cr(new $c(await Gr([W, n, o]["join"]("!") + "obfiowerehiring" + f)))["concat"](Jr)), [vr]))["map"](Nr));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.0ee0b4da.js.map