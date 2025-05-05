"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => c
    });
    W(136728), W(875640);
    const c = () => {
      let vo;
      const po = n => btoa(ao["Array"]["from"](n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Mo = () => {
        return n = Fo((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new ao["Uint8Array"](atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const Jo = (n, t) => vo = vo || Fo(yo((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](ao["Number"]));
      const Fo = (n, t) => n && n["getAttribute"](t) || "";
      const Lo = n => typeof n == "string" ? new ao["TextEncoder"]()["encode"](n) : n;
      const No = n => ao["crypto"]["subtle"]["digest"]("sha-256", Lo(n));
      const Io = n => (n < 16 ? "0" : "") + n["toString"](16);
      const yo = n => ao["Array"]["from"](n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Ko = n => ao["Math"]["floor"](n);
      const Xo = (n, t, W) => t ? n ^ W[0] : n;
      const Zo = (n, t, W) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](bo(t), 4096);
          r["pause"](), r["currentTime"] = (n => ao["Math"]["round"](n))(W / 10) * 10;
        }
      };
      const Yo = (n, t, W, r) => {
        {
          const o = n * (W - t) / 255 + t;
          return r ? Ko(o) : o["toFixed"](2);
        }
      };
      const bo = n => ({
        color: ["#" + Io(n[0]) + Io(n[1]) + Io(n[2]), "#" + Io(n[3]) + Io(n[4]) + Io(n[5])],
        transform: ["rotate(0deg)", "rotate(" + Yo(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + ao["Array"]["from"](n["slice"](7))["map"]((n, t) => Yo(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let Eo;
      let $o;
      let _o = [];
      const oc = n => {
        const y = {
          "YIRXI": "div"
        };
        if (!Eo) {
          const y = n[18] % 16;
          const U = n[44] % 16 * (n[31] % 16) * (n[17] % 16);
          const D = Jo(".r-ae5kg", n);
          new ao["Promise"](() => {
            const Nn = {
              gLdsJ: function (n, t) {
                return n + t;
              },
              Pflki: function (n, t) {
                return n / t;
              },
              qHVxK: function (n, t) {
                return n * t;
              },
              UcxMo: function (n, t) {
                return n - t;
              },
              pOnCt: function (n, t) {
                return n(t);
              },
              Lvukh: function (n, t) {
                return n(t);
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
                return ocPFSVbstmpABayUxzxJ[yn("^N&C", "584 - ", "^N&C\" - 37", -989, -878)](n, t);
              },
              eHHZJ: function (n, t) {
                return n(t);
              }
            };
            {
              const t = new ao["RTCPeerConnection"]();
              const W = (() => ao["Math"]["random"]())()["toString"](36);
              $o = t["createDataChannel"](W), t["createOffer"]()["then"](r => {
                if (Nn["ruGiV"](Nn["Bxzsu"], Nn["rOyMG"])) {
                  const n = Nn["gLdsJ"](Nn["Pflki"](Nn["qHVxK"](ao["Promise"], Nn["UcxMo"](Lo, No)), 255), bo);
                  return Ko ? Nn["pOnCt"]($o, n) : n["toFixed"](2);
                }
                try {
                  if (Nn["ddyTc"](Nn["jtZyX"], Nn["wMKbG"])) {
                    const o = r["sdp"] || W;
                    _o = Nn["Gkhjs"](ao["Array"]["from"], Nn["eHHZJ"](Lo, [o[Nn["svxQi"](n[5], 8)] || "4", o[Nn["svxQi"](n[8], 8)]])), t["close"]();
                  } else {
                    const n = No["sdp"] || bo;
                    Ko = Nn["Lvukh"]($o, Nn["Lvukh"](ao["Array"]["from"], [n[Nn["fQmKy"](ao["Date"][5], 8)] || "4", n[Nn["svxQi"](ao["crypto"]["subtle"][8], 8)]])), Yo["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          Zo(T, D[n[18] % 16], n[44] % 16 * (n[31] % 16) * (n[17] % 16));
          const Z = ao["getComputedStyle"](T);
          Eo = ao["Array"]["from"](("" + Z["color"] + Z["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => ao["Number"](ao["Number"](n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), X();
        }
        return Eo;
      };
      return async (n, t) => {
        const r = Ko((ao["Date"]["now"]() - 1682924400000) / 1e3);
        const o = new ao["Uint8Array"](new ao["Uint32Array"]([r])["buffer"]);
        const c = Mo();
        const u = oc(c);
        return po(new ao["Uint8Array"]([(() => ao["Math"]["random"]())() * 256]["concat"](ao["Array"]["from"](c), ao["Array"]["from"](o), (n => n["slice"](0, 16))(ao["Array"]["from"](new ao["Uint8Array"](await No([t, n, r]["join"]("!") + "obfiowerehiring" + u)))["concat"](_o)), [3]))["map"](Xo));
      };
    };
  }
}]);