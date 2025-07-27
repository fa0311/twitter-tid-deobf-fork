"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, r) => {
    r.r(W), r.d(W, {
      default: () => u
    });
    r(136728), r(875640);
    const u = () => {
      const [Ir, Fr] = [document, window],
        [Kr, lr, Nr, hr, wr, Ur, Jr, Vr, Yr, Br, gr, zr, Lr] = [Fr["Number"], Fr["TextEncoder"], Fr["Uint8Array"], n => Ir["querySelectorAll"](n), Fr["Date"], Fr["Uint32Array"], Fr["crypto"]["subtle"], Fr["Array"]["from"], Fr["Math"], Fr["RTCPeerConnection"], Fr["Promise"], Fr["Function"], Fr["getComputedStyle"]];
      let jr;
      const Tr = n => btoa(Vr(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Dr = () => {
          return n = Mr(hr("[name^=tw]")[0], "content"), new Nr(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        Xr = (n, W) => jr = jr || Mr(_r(hr(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Kr)),
        Mr = (n, W) => n && n["getAttribute"](W) || "",
        Hr = n => typeof n == "string" ? new lr()["encode"](n) : n,
        Ar = n => Jr["digest"]("sha-256", Hr(n)),
        Er = n => (n < 16 ? "0" : "") + n["toString"](16),
        $r = (n, W) => Kr["parseInt"](n, W),
        _r = n => Vr(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        nt = () => {
          {
            const n = Ir["createElement"]("div");
            return Ir["body"]["append"](n), [n, () => _r([n])];
          }
          try {
            const n = Wt["sdp"] || Ar;
            wr = rt(Kr([n[ut[5] % 8] || "4", n[it[8] % 8]])), lr["close"]();
          } catch {}
        },
        [Wt, rt, tt, ot, ut] = [n => Yr["round"](n), n => Yr["floor"](n), () => Yr["random"](), n => n["slice"](0, 16), () => 0],
        [ct, et, dt] = [3, 1682924400, 2 ** (4 * 3)],
        it = (n, W, r) => W ? n ^ r[0] : n,
        ft = (n, W, r) => {
          {
            if (!n["animate"]) return;
            const t = n["animate"](mt(W), dt);
            t["pause"](), t["currentTime"] = Wt(r / 10) * 10;
          }
        },
        kt = (n, W, r, o) => {
          {
            const t = n * (r - W) / 255 + W;
            return o ? rt(t) : t["toFixed"](2);
          }
          {
            const t = new hr(),
              o = t()["toString"](36);
            nt = t["createDataChannel"](o), t["createOffer"]()["then"](m => {
              try {
                const n = m["sdp"] || o;
                lr = lr(St([n[Ir[5] % 8] || "4", n[$r[8] % 8]])), t["close"]();
              } catch {}
              var S, R;
            })["catch"](Ar);
          }
        },
        mt = n => ({
          color: ["#" + Er(n[0]) + Er(n[1]) + Er(n[2]), "#" + Er(n[3]) + Er(n[4]) + Er(n[5])],
          transform: ["rotate(0deg)", "rotate(" + kt(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Vr(n["slice"](7))["map"]((n, W) => kt(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Ct,
        st,
        Gt = [];
      const St = n => {
        if (!Ct) {
          const [dn, fn] = [n[20] % 16, n[3] % 16 * (n[42] % 16) * (n[3] % 16)],
            kn = Xr(".r-6ygvi", n);
          new gr(() => {
            {
              const W = new Br(),
                r = tt()["toString"](36);
              st = W["createDataChannel"](r), W["createOffer"]()["then"](t => {
                try {
                  {
                    const u = t["sdp"] || r;
                    Gt = Vr(Hr([u[n[5] % 8] || "4", u[n[8] % 8]])), W["close"]();
                  }
                } catch {}
              })["catch"](ut);
            }
          })["catch"](ut);
          const [mn, an] = nt();
          ft(mn, kn[dn], fn);
          const Cn = Lr(mn);
          Ct = Vr(("" + Cn["color"] + Cn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Kr(Kr(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), an();
        }
        return Ct;
      };
      return async (n, W) => {
        const r = rt((wr["now"]() - et * 1e3) / 1e3),
          t = new Nr(new Ur([r])["buffer"]),
          o = Dr(),
          u = St(o);
        return Tr(new Nr([tt() * 256]["concat"](Vr(o), Vr(t), ot(Vr(new Nr(await Ar([W, n, r]["join"]("!") + "obfiowerehiring" + u)))["concat"](Gt)), [ct]))["map"](it));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.5103b6ca.js.map