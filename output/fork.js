"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => u
    });
    r(136728), r(875640);
    const u = () => {
      const [_r, $r] = [document, window],
        [nc, tc, rc, cc, uc, Wc, oc, ec, ic, fc, dc, kc, mc] = [$r["Number"], $r["TextEncoder"], $r["Uint8Array"], n => _r["querySelectorAll"](n), $r["Date"], $r["Uint32Array"], $r["crypto"]["subtle"], $r["Array"]["from"], $r["Math"], $r["RTCPeerConnection"], $r["Promise"], $r["Function"], $r["getComputedStyle"]];
      let Gc;
      const Sc = n => btoa(ec(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        hc = () => {
          return n = Qc(cc("[name^=tw]")[0], "content"), new rc(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        wc = (n, t) => Gc = Gc || Qc(Hc(cc(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](nc)),
        Qc = (n, t) => n && n["getAttribute"](t) || "",
        lc = n => typeof n == "string" ? new tc()["encode"](n) : n,
        Rc = n => oc["digest"]("sha-256", lc(n)),
        gc = n => (n < 16 ? "0" : "") + n["toString"](16),
        pc = (n, t) => nc["parseInt"](n, t),
        Hc = n => ec(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        qc = () => {
          {
            const n = _r["createElement"]("div");
            return _r["body"]["append"](n), [n, () => Hc([n])];
          }
          {
            if (!$r["animate"]) return;
            const n = gc["animate"](Qc(ec), dc);
            n["pause"](), n["currentTime"] = nc($r / 10) * 10;
          }
        },
        [Nc, Bc, Xc, Oc, Vc] = [n => ic["round"](n), n => ic["floor"](n), () => ic["random"](), n => n["slice"](0, 16), () => 0],
        [Kc, Mc, vc] = [3, 1682924400, 2 ** (4 * 3)],
        jc = (n, t, r) => t ? n ^ r[0] : n,
        xc = (n, t, r) => {
          {
            if (!n["animate"]) return;
            const c = n["animate"](Uc(t), vc);
            c["pause"](), c["currentTime"] = Nc(r / 10) * 10;
          }
        },
        Fc = (n, t, r, c) => {
          {
            const u = n * (r - t) / 255 + t;
            return c ? Bc(u) : u["toFixed"](2);
          }
        },
        Uc = n => ({
          color: ["#" + gc(n[0]) + gc(n[1]) + gc(n[2]), "#" + gc(n[3]) + gc(n[4]) + gc(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Fc(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + ec(n["slice"](7))["map"]((n, t) => Fc(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Zc,
        zc,
        Jc = [];
      const Lc = n => {
        if (!Zc) {
          const [q, N] = [n[27] % 16, n[9] % 16 * (n[11] % 16) * (n[30] % 16)],
            B = wc(".r-8qwd6w", n);
          new dc(() => {
            {
              const t = new fc(),
                r = Xc()["toString"](36);
              zc = t["createDataChannel"](r), t["createOffer"]()["then"](u => {
                try {
                  {
                    const c = u["sdp"] || r;
                    Jc = ec(lc([c[n[5] % 8] || "4", c[n[8] % 8]])), t["close"]();
                  }
                } catch {}
              })["catch"](Vc);
            }
          })["catch"](Vc);
          const [X, O] = qc();
          xc(X, B[q], N);
          const V = mc(X);
          Zc = ec(("" + V["color"] + V["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => nc(nc(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), O();
        }
        return Zc;
      };
      return async (n, t) => {
        const e = Bc((uc["now"]() - Mc * 1e3) / 1e3),
          i = new rc(new Wc([e])["buffer"]),
          f = hc(),
          d = Lc(f);
        return Sc(new rc([Xc() * 256]["concat"](ec(f), ec(i), Oc(ec(new rc(await Rc([t, n, e]["join"]("!") + "obfiowerehiring" + d)))["concat"](Jc)), [Kc]))["map"](jc));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.9ef989ca.js.map