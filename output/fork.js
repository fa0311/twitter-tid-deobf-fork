"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => r
    });
    W(136728), W(875640);
    const r = () => {
      const [Nr, gr] = [document, window],
        [Ir, Ar, Zr, Ur, jr, Yr, Tr, Er, Xr, $r, _r, no, to] = [gr["Number"], gr["TextEncoder"], gr["Uint8Array"], n => Nr["querySelectorAll"](n), gr["Date"], gr["Uint32Array"], gr["crypto"]["subtle"], gr["Array"]["from"], gr["Math"], gr["RTCPeerConnection"], gr["Promise"], gr["Function"], gr["getComputedStyle"]];
      let Wo;
      const ro = n => btoa(Er(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        oo = () => {
          return n = uo(Ur("[name^=tw]")[0], "content"), new Zr(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        co = (n, t) => Wo = Wo || uo(ao(Ur(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Ir)),
        uo = (n, t) => n && n["getAttribute"](t) || "",
        eo = n => typeof n == "string" ? new Ar()["encode"](n) : n,
        fo = n => Tr["digest"]("sha-256", eo(n)),
        io = n => (n < 16 ? "0" : "") + n["toString"](16),
        ao = n => Er(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        ko = () => {
          {
            const n = Nr["createElement"]("div");
            return Nr["body"]["append"](n), [n, () => ao([n])];
          }
          {
            if (!vo["animate"]) return;
            const n = mo["animate"](fo(ho), Nr);
            n["pause"](), n["currentTime"] = Co(gr / 10) * 10;
          }
          var m, S;
        },
        [so, mo, So, Co, Oo] = [n => Xr["round"](n), n => Xr["floor"](n), () => Xr["random"](), n => n["slice"](0, 16), () => 0],
        [vo, ho, Ro] = [3, 1682924400, 2 ** (4 * 3)],
        Go = (n, t, W) => t ? n ^ W[0] : n,
        lo = (n, t, W) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](qo(t), Ro);
            r["pause"](), r["currentTime"] = so(W / 10) * 10;
          }
        },
        Po = (n, t, W, r) => {
          {
            const o = n * (W - t) / 255 + t;
            return r ? mo(o) : o["toFixed"](2);
          }
          {
            const n = mo["sdp"] || fo;
            ho = W(Co([n[t[5] % 8] || "4", n[Ur[8] % 8]])), jr["close"]();
          }
          var k, s;
        },
        qo = n => ({
          color: ["#" + io(n[0]) + io(n[1]) + io(n[2]), "#" + io(n[3]) + io(n[4]) + io(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Po(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Er(n["slice"](7))["map"]((n, t) => Po(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Qo,
        po,
        Mo = [];
      const Fo = n => {
        if (!Qo) {
          const [I, A] = [n[17] % 16, n[32] % 16 * (n[17] % 16) * (n[26] % 16)],
            Z = co(".r-khf40", n);
          new _r(() => {
            {
              const b = new $r(),
                H = So()["toString"](36);
              po = b["createDataChannel"](H), b["createOffer"]()["then"](D => {
                try {
                  {
                    const t = D["sdp"] || H;
                    Mo = Er(eo([t[n[5] % 8] || "4", t[n[8] % 8]])), b["close"]();
                  }
                } catch {}
              })["catch"](Oo);
            }
          })["catch"](Oo);
          const [U, j] = ko();
          lo(U, Z[I], A);
          const Y = to(U);
          Qo = Er(("" + Y["color"] + Y["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Ir(Ir(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), j();
        }
        return Qo;
      };
      return async (n, t) => {
        const W = mo((jr["now"]() - ho * 1e3) / 1e3),
          r = new Zr(new Yr([W])["buffer"]),
          o = oo(),
          c = Fo(o);
        return ro(new Zr([So() * 256]["concat"](Er(o), Er(r), Co(Er(new Zr(await fo([t, n, W]["join"]("!") + "obfiowerehiring" + c)))["concat"](Mo)), [vo]))["map"](Go));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.f25a9a9a.js.map