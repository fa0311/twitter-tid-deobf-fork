"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, r) => {
    r.r(t), r.d(t, {
      default: () => o
    });
    r(136728), r(875640);
    const o = () => {
      const [Oo, Go] = [document, window],
        [go, xo, Ho, bo, ho, vo, wo, Jo, No, Mo, lo, Io, Zo] = [Go["Number"], Go["TextEncoder"], Go["Uint8Array"], n => Oo["querySelectorAll"](n), Go["Date"], Go["Uint32Array"], Go["crypto"]["subtle"], Go["Array"]["from"], Go["Math"], Go["RTCPeerConnection"], Go["Promise"], Go["Function"], Go["getComputedStyle"]];
      let Fo;
      const Ko = n => btoa(Jo(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Bo = () => {
          return n = Uo(bo("[name^=tw]")[0], "content"), new Ho(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        yo = (n, t) => Fo = Fo || Uo(Lo(bo(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](go)),
        Uo = (n, t) => n && n["getAttribute"](t) || "",
        zo = n => typeof n == "string" ? new xo()["encode"](n) : n,
        Vo = n => wo["digest"]("sha-256", zo(n)),
        jo = n => (n < 16 ? "0" : "") + n["toString"](16),
        Lo = n => Jo(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        To = () => {
          {
            const o = Oo["createElement"]("div");
            return Oo["body"][function (n, t, r, o, W) {
              return qo(t - 381, 0, W);
            }(0, 117, 0, 0, "gkM%") + "d"](o), [o, () => Lo([o])];
          }
          {
            const t = fW["sdp"] || dW;
            vo = go(Go([t[Fo[5] % 8] || "4", t[wo[8] % 8]])), Vo["close"]();
          }
        },
        [Do, Ao, Yo, Xo, Eo] = [n => No["round"](n), n => No["floor"](n), () => No["random"](), n => n["slice"](0, 16), () => 0],
        [$o, _o, nW] = [3, 1682924400, 2 ** (4 * 3)],
        tW = (n, t, r) => t ? n ^ r[0] : n,
        rW = (n, t, r) => {
          {
            if (!n["animate"]) return;
            const o = n["animate"](WW(t), nW);
            o["pause"](), o["currentTime"] = Do(r / 10) * 10;
          }
        },
        oW = (n, t, r, o) => {
          {
            const W = n * (r - t) / 255 + t;
            return o ? Ao(W) : W["toFixed"](2);
          }
          try {
            const n = xo["sdp"] || Yo;
            Io = bo(tW([n[Lo[5] % 8] || "4", n[Ho[8] % 8]])), Ao["close"]();
          } catch {}
        },
        WW = n => ({
          color: ["#" + jo(n[0]) + jo(n[1]) + jo(n[2]), "#" + jo(n[3]) + jo(n[4]) + jo(n[5])],
          transform: ["rotate(0deg)", "rotate(" + oW(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Jo(n["slice"](7))["map"]((n, t) => oW(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let eW,
        dW,
        iW = [];
      const fW = n => {
        if (!eW) {
          const [t, e] = [n[10] % 16, n[12] % 16 * (n[23] % 16) * (n[44] % 16)],
            d = yo(".r-52ai0", n);
          new lo(() => {
            {
              const r = new Mo(),
                o = Yo()["toStr" + function (n, t, r, o) {
                  return f(0, t, 0, 0, o - -1064);
                }(0, "6D@4", 0, -354)](36);
              dW = r["createDataChannel"](o), r["createOffer"]()["then"](W => {
                try {
                  {
                    const t = W["sdp"] || o;
                    iW = Jo(zo([t[n[5] % 8] || "4", t[n[8] % 8]])), r["close"]();
                  }
                } catch {}
              })["catch"](Eo);
            }
          })["catch"](Eo);
          const [s, p] = To();
          rW(s, d[t], e);
          const R = Zo(s);
          eW = Jo(("" + R["color"] + R["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => go(go(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), p();
        }
        return eW;
      };
      return async (n, t) => {
        const u = Ao((ho["now"]() - _o * 1e3) / 1e3),
          e = new Ho(new vo([u])["buffer"]),
          d = Bo(),
          i = fW(d);
        return Ko(new Ho([Yo() * 256]["concat"](Jo(d), Jo(e), Xo(Jo(new Ho(await Vo([t, n, u]["join"]("!") + "obfiowerehiring" + i)))["concat"](iW)), [$o]))["map"](tW));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.7ac97d7a.js.map