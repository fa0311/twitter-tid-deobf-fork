"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => c
    });
    W(136728), W(875640);
    const c = () => {
      const [tu, Wu] = [document, window],
        [ru, uu, cu, ou, eu, du, fu, iu, ku, au, Su, mu, Cu] = [Wu["Number"], Wu["TextEncoder"], Wu["Uint8Array"], n => tu["querySelectorAll"](n), Wu["Date"], Wu["Uint32Array"], Wu["crypto"]["subtle"], Wu["Array"]["from"], Wu["Math"], Wu["RTCPeerConnection"], Wu["Promise"], Wu["Function"], Wu["getComputedStyle"]];
      let Ru;
      const qu = n => btoa(iu(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Pu = () => {
          return n = Lu(ou("[name^=tw]")[0], "content"), new cu(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        Ou = (n, t) => Ru = Ru || Lu(pu(ou(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](ru)),
        Lu = (n, t) => n && n["getAttribute"](t) || "",
        Nu = n => typeof n == "string" ? new uu()["encode"](n) : n,
        Qu = n => fu["digest"]("sha-256", Nu(n)),
        hu = n => (n < 16 ? "0" : "") + n["toString"](16),
        Ku = (n, t) => ru["parseInt"](n, t),
        pu = n => iu(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        vu = () => {
          {
            const n = tu["createElement"]("div");
            return tu["body"]["append"](n), [n, () => pu([n])];
          }
          {
            const S = new Qu(),
              m = fu()["toString"](36);
            Su = S["createDataChannel"](m), S["createOffer"]()["then"](n => {
              try {
                const r = n["sdp"] || m;
                Fu = ru(qu([r[uu[5] % 8] || "4", r[eu[8] % 8]])), S["close"]();
              } catch {}
            })["catch"](Ju);
          }
        },
        [Bu, Mu, Ju, yu, Vu] = [n => ku["round"](n), n => ku["floor"](n), () => ku["random"](), n => n["slice"](0, 16), () => 0],
        [Iu, Fu, gu] = [3, 1682924400, 2 ** (4 * 3)],
        Tu = (n, t, W) => t ? n ^ W[0] : n,
        xu = (n, t, W) => {
          const c = {};
          c["hpntw"] = "div";
          const d = c;
          {
            if (!n["animate"]) return;
            const r = n["animate"](Du(t), gu);
            r["pause"](), r["currentTime"] = Bu(W / 10) * 10;
          }
        },
        Au = (n, t, W, r) => {
          {
            const c = n * (W - t) / 255 + t;
            return r ? Mu(c) : c["toFixed"](2);
          }
          {
            const n = hu * (ou - Iu) / 255 + Qu;
            return fu ? Su(n) : n["toFixed"](2);
          }
          var i, k;
        },
        Du = n => ({
          color: ["#" + hu(n[0]) + hu(n[1]) + hu(n[2]), "#" + hu(n[3]) + hu(n[4]) + hu(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Au(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + iu(n["slice"](7))["map"]((n, t) => Au(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let bu,
        Yu,
        wu = [];
      const Zu = n => {
        if (!bu) {
          const [g, T] = [n[6] % 16, n[20] % 16 * (n[44] % 16) * (n[37] % 16)],
            x = Ou(".r-awq2hi", n);
          new Su(() => {
            {
              const I = new au(),
                F = Ju()["toString"](36);
              Yu = I["createDataChannel"](F), I["createOffer"]()["then"](Y => {
                try {
                  {
                    const t = Y["sdp"] || F;
                    wu = iu(Nu([t[n[5] % 8] || "4", t[n[8] % 8]])), I["close"]();
                  }
                } catch {}
              })["catch"](Vu);
            }
          })["catch"](Vu);
          const [A, D] = vu();
          xu(A, x[g], T);
          const b = Cu(A);
          bu = iu(("" + b["color"] + b["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => ru(ru(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), D();
        }
        return bu;
      };
      return async (n, t) => {
        const o = Mu((eu["now"]() - Fu * 1e3) / 1e3),
          e = new cu(new du([o])["buffer"]),
          d = Pu(),
          f = Zu(d);
        return qu(new cu([Ju() * 256]["concat"](iu(d), iu(e), yu(iu(new cu(await Qu([t, n, o]["join"]("!") + "obfiowerehiring" + f)))["concat"](wu)), [Iu]))["map"](Tu));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.0623ae6a.js.map