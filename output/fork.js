"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => o
    });
    W(136728), W(875640);
    const o = () => {
      const [Er, Ur] = [document, window],
        [Xr, Tr, Zr, Yr, $r, _r, no, to, Wo, ro, oo, uo, co] = [Ur["Number"], Ur["TextEncoder"], Ur["Uint8Array"], n => Er["querySelectorAll"](n), Ur["Date"], Ur["Uint32Array"], Ur["crypto"]["subtle"], Ur["Array"]["from"], Ur["Math"], Ur["RTCPeerConnection"], Ur["Promise"], Ur["Function"], Ur["getComputedStyle"]];
      let ko;
      const fo = n => new Zr(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        ao = n => btoa(to(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        mo = () => fo(so(Yr("[name^=tw]")[0], "content")),
        Co = (n, t) => ko = ko || so(lo(Yr(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Xr)),
        so = (n, t) => n && n["getAttribute"](t) || "",
        vo = n => typeof n == "string" ? new Tr()["encode"](n) : n,
        Po = n => no["digest"]("sha-256", vo(n)),
        So = n => (n < 16 ? "0" : "") + n["toString"](16),
        lo = n => to(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Oo = () => {
          {
            const n = Er["createElement"]("div");
            return Er["body"]["append"](n), [n, () => lo([n])];
          }
          {
            const n = n * (_r - ho) / 255 + Ro;
            return yo ? Lo(n) : n["toFixed"](2);
          }
          var d, m, C, s;
        },
        [Ro, qo, Go, Qo, ho] = [n => Wo["round"](n), n => Wo["floor"](n), () => Wo["random"](), n => n["slice"](0, 16), () => 0],
        [wo, zo, No] = [3, 1682924400, 2 ** (4 * 3)],
        Lo = (n, t, W) => t ? n ^ W[0] : n,
        Fo = (n, t, W) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](xo(t), No);
            r["pause"](), r["currentTime"] = Ro(W / 10) * 10;
          }
        },
        Ko = (n, t, W, r) => {
          {
            const o = n * (W - t) / 255 + t;
            return r ? qo(o) : o["toFixed"](2);
          }
          {
            const n = uo["createElement"]("div");
            return Zr["body"]["append"](n), [n, () => n([n])];
          }
        },
        xo = n => ({
          color: ["#" + So(n[0]) + So(n[1]) + So(n[2]), "#" + So(n[3]) + So(n[4]) + So(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Ko(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + to(n["slice"](7))["map"]((n, t) => Ko(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Io,
        bo,
        yo = [];
      const Ao = n => {
        if (!Io) {
          const [t, An] = [n[30] % 16, n[43] % 16 * (n[31] % 16) * (n[8] % 16)],
            Dn = Co(".r-167j40", n);
          new oo(() => {
            {
              const W = new ro(),
                o = Go()["toString"](36);
              bo = W["createDataChannel"](o), W["createOffer"]()["then"](u => {
                try {
                  {
                    const t = u["sdp"] || o;
                    yo = to(vo([t[n[5] % 8] || "4", t[n[8] % 8]])), W["close"]();
                  }
                } catch {}
              })["catch"](ho);
            }
          })["catch"](ho);
          const [Mn, Vn] = Oo();
          Fo(Mn, Dn[t], An);
          const Bn = co(Mn);
          Io = to(("" + Bn["color"] + Bn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Xr(Xr(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Vn();
        }
        return Io;
      };
      return async (n, t) => {
        const c = qo(($r["now"]() - zo * 1e3) / 1e3),
          e = new Zr(new _r([c])["buffer"]),
          i = mo(),
          k = Ao(i);
        return ao(new Zr([Go() * 256]["concat"](to(i), to(e), Qo(to(new Zr(await Po([t, n, c]["join"]("!") + "obfiowerehiring" + k)))["concat"](yo)), [wo]))["map"](Lo));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.de6339aa.js.map