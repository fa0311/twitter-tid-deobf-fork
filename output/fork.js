"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => u
    });
    t(136728), t(875640);
    const u = () => {
      const [Gu, Du] = [document, window],
        [yu, pu, gu, ju, lu, Zu, bu, Vu, Ju, Hu, Nu, wu, Lu] = [Du["Number"], Du["TextEncoder"], Du["Uint8Array"], n => Gu["querySelectorAll"](n), Du["Date"], Du["Uint32Array"], Du["crypto"]["subtle"], Du["Array"]["from"], Du["Math"], Du["RTCPeerConnection"], Du["Promise"], Du["Function"], Du["getComputedStyle"]];
      let Bu;
      const Tu = n => new gu(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        Uu = n => btoa(Vu(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        vu = () => Tu(Iu(ju("[name^=tw]")[0], "content")),
        Fu = (n, W) => Bu = Bu || Iu(Xu(ju(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](yu)),
        Iu = (n, W) => n && n["getAttribute"](W) || "",
        Au = n => typeof n == "string" ? new pu()["encode"](n) : n,
        xu = n => bu["digest"]("sha-256", Au(n)),
        Mu = n => (n < 16 ? "0" : "") + n["toString"](16),
        Xu = n => Vu(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Eu = () => {
          {
            const n = Gu["createElement"]("div");
            return Gu["body"]["append"](n), [n, () => Xu([n])];
          }
          try {
            const n = Wc["sdp"] || Yu;
            pu = ec(Iu([n[ju[5] % 8] || "4", n[Uu[8] % 8]])), pu["close"]();
          } catch {}
        },
        [Yu, $u, _u, nc, Wc] = [n => Ju["round"](n), n => Ju["floor"](n), () => Ju["random"](), n => n["slice"](0, 16), () => 0],
        [tc, rc, oc] = [3, 1682924400, 2 ** (4 * 3)],
        uc = (n, W, t) => W ? n ^ t[0] : n,
        cc = (n, W, t) => {
          {
            if (!n[function (n, W, t, r, o) {
              return qu(W - -977, 0, o);
            }(0, -63, 0, 0, "c9wG") + "te"]) return;
            const e = n["animate"](fc(W), oc);
            e["pause"](), e["currentTime"] = Yu(t / 10) * 10;
          }
        },
        ec = (n, W, t, o) => {
          {
            const r = n * (t - W) / 255 + W;
            return o ? $u(r) : r["toFixed"](2);
          }
          {
            const n = vu["sdp"] || Tu;
            fc = Eu(ac([n[Fu[5] % 8] || "4", n[uc[8] % 8]])), yu["close"]();
          }
        },
        fc = n => ({
          color: ["#" + Mu(n[0]) + Mu(n[1]) + Mu(n[2]), "#" + Mu(n[3]) + Mu(n[4]) + Mu(n[5])],
          transform: ["rotate(0deg)", "rotate(" + ec(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Vu(n["slice"](7))["map"]((n, W) => ec(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let kc,
        ac,
        Oc = [];
      const mc = n => {
        if (!kc) {
          const [O, s] = [n[14] % 16, n[28] % 16 * (n[46] % 16) * (n[13] % 16)],
            m = Fu(".r-1nqvuo", n);
          new Nu(() => {
            {
              const W = new Hu(),
                t = _u()["toString"](36);
              ac = W["createDataChannel"](t), W["createOffer"]()["then"](o => {
                try {
                  {
                    const r = o["sdp"] || t;
                    Oc = Vu(Au([r[n[5] % 8] || "4", r[n[8] % 8]])), W["close"]();
                  }
                } catch {}
              })["catch"](Wc);
            }
          })["catch"](Wc);
          const [S, C] = Eu();
          cc(S, m[O], s);
          const R = Lu(S);
          kc = Vu(("" + R["color"] + R["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => yu(yu(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), C();
        }
        return kc;
      };
      return async (n, W) => {
        const c = $u((lu["now"]() - rc * 1e3) / 1e3),
          e = new gu(new Zu([c])["buffer"]),
          f = vu(),
          i = mc(f);
        return Uu(new gu([_u() * 256]["concat"](Vu(f), Vu(e), nc(Vu(new gu(await xu([W, n, c]["join"]("!") + "obfiowerehiring" + i)))["concat"](Oc)), [tc]))["map"](uc));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.c698bcea.js.map