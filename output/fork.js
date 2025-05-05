"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => c
    });
    W(136728), W(875640);
    const c = () => {
      const [mo, ao] = [document, window],
        [So, Ro, Po, Oo, wo, Qo, Go, ho, xo, lo, qo, zo, go] = [ao["Number"], ao["TextEncoder"], ao["Uint8Array"], n => mo["querySelectorAll"](n), ao["Date"], ao["Uint32Array"], ao["crypto"]["subtle"], ao["Array"]["from"], ao["Math"], ao["RTCPeerConnection"], ao["Promise"], ao["Function"], ao["getComputedStyle"]];
      let vo;
      const po = n => btoa(ho(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Mo = () => {
          return n = Fo(Oo("[name^=tw]")[0], "content"), new Po(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        Jo = (n, t) => vo = vo || Fo(yo(Oo(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](So)),
        Fo = (n, t) => n && n["getAttribute"](t) || "",
        Lo = n => typeof n == "string" ? new Ro()["encode"](n) : n,
        No = n => Go["digest"]("sha-256", Lo(n)),
        Io = n => (n < 16 ? "0" : "") + n["toString"](16),
        yo = n => ho(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Vo = () => {
          {
            const n = mo["createElement"]("div");
            return mo["body"]["append"](n), [n, () => yo([n])];
          }
          {
            const q = new bo(),
              z = Ko()["toString"](36);
            $o = q["createDataChannel"](z), q["createOffer"]()["then"](k => {
              try {
                const s = k["sdp"] || z;
                ao = Oo(go([s[zo[5] % 8] || "4", s[_o[8] % 8]])), q["close"]();
              } catch {}
            })["catch"](To);
          }
        },
        [Ao, Ko, Bo, Ho, jo] = [n => xo["round"](n), n => xo["floor"](n), () => xo["random"](), n => n["slice"](0, 16), () => 0],
        [Uo, Do, To] = [3, 1682924400, 2 ** (4 * 3)],
        Xo = (n, t, W) => t ? n ^ W[0] : n,
        Zo = (n, t, W) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](bo(t), To);
            r["pause"](), r["currentTime"] = Ao(W / 10) * 10;
          }
        },
        Yo = (n, t, W, r) => {
          {
            const o = n * (W - t) / 255 + t;
            return r ? Ko(o) : o["toFixed"](2);
          }
          try {
            const n = oc["sdp"] || To;
            Mo = Bo(Po([n[Eo[5] % 8] || "4", n[So[8] % 8]])), t["close"]();
          } catch {}
        },
        bo = n => ({
          color: ["#" + Io(n[0]) + Io(n[1]) + Io(n[2]), "#" + Io(n[3]) + Io(n[4]) + Io(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Yo(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + ho(n["slice"](7))["map"]((n, t) => Yo(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Eo,
        $o,
        _o = [];
      const oc = n => {
        const y = {};
        y["YIRXI"] = "div";
        const A = y;
        if (!Eo) {
          const [y, U] = [n[18] % 16, n[44] % 16 * (n[31] % 16) * (n[17] % 16)],
            D = Jo(".r-ae5kg", n);
          new qo(() => {
            const Nn = {
              gLdsJ: function (n, t) {
                return n + t;
                var W, r;
              },
              Pflki: function (n, t) {
                return n / t;
              },
              qHVxK: function (n, t) {
                return n * t;
                var W, r;
              },
              UcxMo: function (n, t) {
                return n - t;
              },
              pOnCt: function (n, t) {
                return n(t);
                var W, r;
              },
              Lvukh: function (n, t) {
                return n(t);
                var W, r;
              },
              fQmKy: function (n, t) {
                return n % t;
              },
              svxQi: function (n, t) {
                return n % t;
              },
              ruGiV: function (n, t) {
                return n === t;
              },
              Bxzsu: "NraAv",
              rOyMG: "UNkXy",
              ddyTc: function (n, t) {
                return n !== t;
              },
              jtZyX: "ArySY",
              wMKbG: "gZjNV",
              Gkhjs: function (n, t) {
                const W = 0;
                return IAoDNPccOMAMtpTMJUQE[yn("^N&C", "584 - ", "^N&C\" - 37", -989, -878)](n, t);
              },
              eHHZJ: function (n, t) {
                return n(t);
              }
            };
            {
              const t = new lo(),
                W = Bo()["toString"](36);
              $o = t["createDataChannel"](W), t["createOffer"]()["then"](r => {
                if (Nn["ruGiV"](Nn["Bxzsu"], Nn["rOyMG"])) {
                  const n = Nn["gLdsJ"](Nn["Pflki"](Nn["qHVxK"](qo, Nn["UcxMo"](Lo, No)), 255), bo);
                  return Ko ? Nn["pOnCt"]($o, n) : n["toFixed"](2);
                }
                try {
                  if (Nn["ddyTc"](Nn["jtZyX"], Nn["wMKbG"])) {
                    const o = r["sdp"] || W;
                    _o = Nn["Gkhjs"](ho, Nn["eHHZJ"](Lo, [o[Nn["svxQi"](n[5], 8)] || "4", o[Nn["svxQi"](n[8], 8)]])), t["close"]();
                  } else {
                    const n = No["sdp"] || bo;
                    Ko = Nn["Lvukh"]($o, Nn["Lvukh"](ho, [n[Nn["fQmKy"](wo[5], 8)] || "4", n[Nn["svxQi"](Go[8], 8)]])), Yo["close"]();
                  }
                } catch {}
              })["catch"](jo);
            }
          })["catch"](jo);
          const [T, X] = Vo();
          Zo(T, D[y], U);
          const Z = go(T);
          Eo = ho(("" + Z["color"] + Z["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => So(So(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), X();
        }
        return Eo;
      };
      return async (n, t) => {
        const r = Ko((wo["now"]() - Do * 1e3) / 1e3),
          o = new Po(new Qo([r])["buffer"]),
          c = Mo(),
          u = oc(c);
        return po(new Po([Bo() * 256]["concat"](ho(c), ho(o), Ho(ho(new Po(await No([t, n, r]["join"]("!") + "obfiowerehiring" + u)))["concat"](_o)), [Uo]))["map"](Xo));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.2819fdea.js.map