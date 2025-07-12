"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => u
    });
    r(136728), r(875640);
    const u = () => {
      const [Hu, Tu] = [document, window],
        [yu, Au, Xu, Zu, Eu, Yu, $u, _u, nc, tc, rc, Wc, uc] = [Tu["Number"], Tu["TextEncoder"], Tu["Uint8Array"], n => Hu["querySelectorAll"](n), Tu["Date"], Tu["Uint32Array"], Tu["crypto"]["subtle"], Tu["Array"]["from"], Tu["Math"], Tu["RTCPeerConnection"], Tu["Promise"], Tu["Function"], Tu["getComputedStyle"]];
      let cc;
      const oc = n => new Xu(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        ec = n => btoa(_u(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        ic = () => oc(dc(Zu("[name^=tw]")[0], "content")),
        kc = (n, t) => cc = cc || dc(Lc(Zu(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](yu)),
        dc = (n, t) => n && n["getAttribute"](t) || "",
        fc = n => typeof n == "string" ? new Au()["encode"](n) : n,
        Cc = n => $u["digest"]("sha-256", fc(n)),
        Sc = n => (n < 16 ? "0" : "") + n["toString"](16),
        ac = (n, t) => yu["parseInt"](n, t),
        Lc = n => _u(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        mc = () => {
          {
            const n = Hu["createElement"]("div");
            return Hu["body"]["append"](n), [n, () => Lc([n])];
          }
        },
        [vc, sc, Pc, qc, Oc] = [n => nc["round"](n), n => nc["floor"](n), () => nc["random"](), n => n["slice"](0, 16), () => 0],
        [Gc, Rc, xc] = [3, 1682924400, 2 ** (4 * 3)],
        Qc = (n, t, r) => t ? n ^ r[0] : n,
        hc = (n, t, r) => {
          {
            if (!n["animate"]) return;
            const W = n["animate"](Mc(t), xc);
            W["pause"](), W["currentTime"] = vc(r / 10) * 10;
          }
        },
        Jc = (n, t, r, W) => {
          const u = {};
          u["sIZKg"] = "div";
          const k = u;
          {
            const u = n * (r - t) / 255 + t;
            return W ? sc(u) : u["toFixed"](2);
          }
          {
            const n = Tu["createElement"](k["sIZKg"]);
            return n["body"]["append"](n), [n, () => n([n])];
          }
        },
        Mc = n => ({
          color: ["#" + Sc(n[0]) + Sc(n[1]) + Sc(n[2]), "#" + Sc(n[3]) + Sc(n[4]) + Sc(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Jc(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + _u(n["slice"](7))["map"]((n, t) => Jc(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Fc,
        Uc,
        Bc = [];
      const Dc = n => {
        if (!Fc) {
          const [t, tn] = [n[10] % 16, n[22] % 16 * (n[42] % 16) * (n[39] % 16)],
            rn = kc(".r-1cl8q0", n);
          new rc(() => {
            {
              const H = new tc(),
                T = Pc()["toString"](36);
              Uc = H["createDataChannel"](T), H["createOffer"]()["then"](y => {
                try {
                  {
                    const t = y["sdp"] || T;
                    Bc = _u(fc([t[n[5] % 8] || "4", t[n[8] % 8]])), H["close"]();
                  }
                } catch {}
              })["catch"](Oc);
            }
          })["catch"](Oc);
          const [Wn, un] = mc();
          hc(Wn, rn[t], tn);
          const Cn = uc(Wn);
          Fc = _u(("" + Cn["color"] + Cn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => yu(yu(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), un();
        }
        return Fc;
      };
      return async (n, t) => {
        const u = sc((Eu["now"]() - Rc * 1e3) / 1e3),
          c = new Xu(new Yu([u])["buffer"]),
          o = ic(),
          e = Dc(o);
        return ec(new Xu([Pc() * 256][(C = "97!4", S = 1140, ju(0, 0, S - 1618, 0, C) + "t")](_u(o), _u(c), qc(_u(new Xu(await Cc([t, n, u]["join"]("!") + "obfiowerehiring" + e)))["concat"](Bc)), [Gc]))["map"](Qc));
        var C, S;
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.0733e25a.js.map