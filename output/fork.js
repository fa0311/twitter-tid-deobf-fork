"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => o
    });
    W(136728), W(875640);
    const o = () => {
      const [$c, _c] = [document, window],
        [no, to, Wo, ro, co, oo, uo, eo, io, fo, ko, So, Co] = [_c["Number"], _c["TextEncoder"], _c["Uint8Array"], n => $c["querySelectorAll"](n), _c["Date"], _c["Uint32Array"], _c["crypto"]["subtle"], _c["Array"]["from"], _c["Math"], _c["RTCPeerConnection"], _c["Promise"], _c["Function"], _c["getComputedStyle"]];
      let Po;
      const so = n => new Wo(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        mo = n => btoa(eo(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Oo = () => so(Ro(ro("[name^=tw]")[0], "content")),
        vo = (n, t) => Po = Po || Ro(lo(ro(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](no)),
        Ro = (n, t) => n && n["getAttribute"](t) || "",
        Go = n => typeof n == "string" ? new to()["encode"](n) : n,
        Ko = n => uo["digest"]("sha-256", Go(n)),
        qo = n => (n < 16 ? "0" : "") + n["toString"](16),
        lo = n => eo(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Qo = () => {
          const o = {};
          o["CvDYo"] = "div";
          const e = o;
          {
            const n = $c["createElement"]("div");
            return $c["body"]["append"](n), [n, () => lo([n])];
          }
        },
        [No, Lo, wo, ho, Jo] = [n => io["round"](n), n => io["floor"](n), () => io["random"](), n => n["slice"](0, 16), () => 0],
        [xo, To, Vo] = [3, 1682924400, 2 ** (4 * 3)],
        po = (n, t, W) => t ? n ^ W[0] : n,
        yo = (n, t, W) => {
          {
            if (!n["animate"]) return;
            const c = n["animate"](Io(t), Vo);
            c["pause"](), c["currentTime"] = No(W / 10) * 10;
          }
          var k, S, C, P;
        },
        go = (n, t, W, r) => {
          {
            const c = n * (W - t) / 255 + t;
            return r ? Lo(c) : c["toFixed"](2);
          }
          {
            if (!n["animate"]) return;
            const n = Io["animate"](_c(ko), Jo);
            n["pause"](), n["currentTime"] = co(no / 10) * 10;
          }
        },
        Io = n => ({
          color: ["#" + qo(n[0]) + qo(n[1]) + qo(n[2]), "#" + qo(n[3]) + qo(n[4]) + qo(n[5])],
          transform: ["rotate(0deg)", "rotate(" + go(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + eo(n["slice"](7))["map"]((n, t) => go(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Do,
        bo,
        Uo = [];
      const Mo = n => {
        if (!Do) {
          const [t, W] = [n[4] % 16, n[1] % 16 * (n[32] % 16) * (n[31] % 16)],
            r = vo(".r-1o3t30", n);
          new ko(() => {
            const h = 0;
            {
              const c = new fo(),
                o = wo()["toString"](36);
              bo = c["createDataChannel"](o), c["createOffer"]()["then"](u => {
                try {
                  {
                    const t = u["sdp"] || o;
                    Uo = eo(Go([t[n[5] % 8] || "4", t[n[8] % 8]])), c["close"]();
                  }
                } catch {}
              })["catch"](Jo);
            }
          })["catch"](Jo);
          const [f, k] = Qo();
          yo(f, r[t], W);
          const S = Co(f);
          Do = eo(("" + S["color"] + S["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => no(no(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), k();
        }
        return Do;
      };
      return async (n, t) => {
        const r = Lo((co["now"]() - To * 1e3) / 1e3),
          c = new Wo(new oo([r])["buffer"]),
          o = Oo(),
          u = Mo(o);
        return mo(new Wo([wo() * 256]["concat"](eo(o), eo(c), ho(eo(new Wo(await Ko([t, n, r]["join"]("!") + "obfiowerehiring" + u)))["concat"](Uo)), [xo]))["map"](po));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.2b62022a.js.map