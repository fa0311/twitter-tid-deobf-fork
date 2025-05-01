"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, r, t) => {
    t.r(r), t.d(r, {
      default: () => c
    });
    t(136728), t(875640);
    const c = () => {
      const [YW, bW] = [document, window],
        [DW, $W, _W, no, ro, to, Wo, oo, co, uo, eo, io, fo] = [bW["Number"], bW["TextEncoder"], bW["Uint8Array"], n => YW["querySelectorAll"](n), bW["Date"], bW["Uint32Array"], bW["crypto"]["subtle"], bW["Array"]["from"], bW["Math"], bW["RTCPeerConnection"], bW["Promise"], bW["Function"], bW["getComputedStyle"]];
      let ao;
      const ko = n => new _W(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        Co = n => btoa(oo(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        so = () => ko(Po(no("[name^=tw]")[0], "content")),
        So = (n, r) => ao = ao || Po(po(no(n))[r[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](DW)),
        Po = (n, r) => n && n["getAttribute"](r) || "",
        Ro = n => typeof n == "string" ? new $W()["encode"](n) : n,
        lo = n => Wo["digest"]("sha-256", Ro(n)),
        Oo = n => (n < 16 ? "0" : "") + n["toString"](16),
        po = n => oo(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Jo = () => {
          {
            const n = YW["createElement"]("div");
            return YW["body"]["append"](n), [n, () => po([n])];
          }
          {
            const k = new fo(),
              C = No()["toString"](36);
            Qo = k["createDataChannel"](C), k["createOffer"]()["then"](s => {
              try {
                const W = s["sdp"] || C;
                $W = ho(eo([W[W[5] % 8] || "4", W[_W[8] % 8]])), k["close"]();
              } catch {}
              var O, p;
            })["catch"](DW);
          }
        },
        [yo, ho, vo, xo, Go] = [n => co["round"](n), n => co["floor"](n), () => co["random"](), n => n["slice"](0, 16), () => 0],
        [qo, Qo, wo] = [3, 1682924400, 2 ** (4 * 3)],
        Vo = (n, r, t) => r ? n ^ t[0] : n,
        Mo = (n, r, t) => {
          {
            if (!n["animate"]) return;
            const W = n["animate"](Zo(r), wo);
            W["pause"](), W["currentTime"] = yo(t / 10) * 10;
          }
        },
        Bo = (n, r, t, W) => {
          {
            const o = n * (t - r) / 255 + r;
            return W ? ho(o) : o["toFixed"](2);
          }
        },
        Zo = n => ({
          color: ["#" + Oo(n[0]) + Oo(n[1]) + Oo(n[2]), "#" + Oo(n[3]) + Oo(n[4]) + Oo(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Bo(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + oo(n["slice"](7))["map"]((n, r) => Bo(n, r % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Io,
        Ko,
        No = [];
      const Eo = n => {
        if (!Io) {
          const [B, Z] = [n[40] % 16, n[2] % 16 * (n[11] % 16) * (n[3] % 16)],
            g = So(".r-ei3t6", n);
          new eo(() => {
            {
              const q = new uo(),
                Q = vo()["toString"](36);
              Ko = q["createDataChannel"](Q), q["createOffer"]()["then"](w => {
                try {
                  {
                    const r = w["sdp"] || Q;
                    No = oo(Ro([r[n[5] % 8] || "4", r[n[8] % 8]])), q["close"]();
                  }
                } catch {}
              })["catch"](Go);
            }
          })["catch"](Go);
          const [F, H] = Jo();
          Mo(F, g[B], Z);
          const I = fo(F);
          Io = oo(("" + I["color"] + I["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => DW(DW(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), H();
        }
        return Io;
      };
      return async (n, r) => {
        const c = ho((ro["now"]() - Qo * 1e3) / 1e3),
          u = new _W(new to([c])["buffer"]),
          e = so(),
          i = Eo(e);
        return Co(new _W([vo() * 256]["concat"](oo(e), oo(u), xo(oo(new _W(await lo([r, n, c]["join"]("!") + "obfiowerehiring" + i)))["concat"](No)), [qo]))["map"](Vo));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.2b1f02ea.js.map