"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, r, t) => {
    t.r(r), t.d(r, {
      default: () => c
    });
    t(136728), t(875640);
    const c = () => {
      const [lo, qo] = [document, window],
        [Ro, go, Oo, po, Go, Ko, Do, wo, Po, ho, Io, xo, Qo] = [qo["Number"], qo["TextEncoder"], qo["Uint8Array"], n => lo["querySelectorAll"](n), qo["Date"], qo["Uint32Array"], qo["crypto"]["subtle"], qo["Array"]["from"], qo["Math"], qo["RTCPeerConnection"], qo["Promise"], qo["Function"], qo["getComputedStyle"]];
      let No;
      const Ho = n => new Oo(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        Lo = n => btoa(wo(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Fo = () => Ho(bo(po("[name^=tw]")[0], "content")),
        yo = (n, r) => No = No || bo(Ao(po(n))[r[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Ro)),
        bo = (n, r) => n && n["getAttribute"](r) || "",
        jo = n => typeof n == "string" ? new go()["encode"](n) : n,
        zo = n => Do["digest"]("sha-256", jo(n)),
        To = n => (n < 16 ? "0" : "") + n["toString"](16),
        Ao = n => wo(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Bo = () => {
          {
            const n = lo["createElement"]("div");
            return lo["body"]["append"](n), [n, () => Ao([n])];
          }
          var u, e;
        },
        [Mo, Jo, Yo, Zo, Xo] = [n => Po["round"](n), n => Po["floor"](n), () => Po["random"](), n => n["slice"](0, 16), () => 0],
        [Eo, Uo, $o] = [3, 1682924400, 2 ** (4 * 3)],
        _o = (n, r, t) => r ? n ^ t[0] : n,
        nc = (n, r, t) => {
          {
            if (!n["animate"]) return;
            const W = n["animate"](tc(r), $o);
            W["pause"](), W["currentTime"] = Mo(t / 10) * 10;
          }
          var s, m;
        },
        rc = (n, r, t, W) => {
          {
            const o = n * (t - r) / 255 + r;
            return W ? Jo(o) : o["toFixed"](2);
          }
        },
        tc = n => ({
          color: ["#" + To(n[0]) + To(n[1]) + To(n[2]), "#" + To(n[3]) + To(n[4]) + To(n[5])],
          transform: ["rotate(0deg)", "rotate(" + rc(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + wo(n["slice"](7))["map"]((n, r) => rc(n, r % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Wc,
        oc,
        cc = [];
      const ec = n => {
        if (!Wc) {
          const [hn, In] = [n[22] % 16, n[35] % 16 * (n[23] % 16) * (n[16] % 16)],
            xn = yo(".r-732710", n);
          new Io(() => {
            {
              const r = new ho(),
                t = Yo()["toString"](36);
              oc = r["createDataChannel"](t), r["createOffer"]()["then"](W => {
                try {
                  {
                    const o = W["sdp"] || t;
                    cc = wo(jo([o[n[5] % 8] || "4", o[n[8] % 8]])), r["close"]();
                  }
                } catch {}
              })["catch"](Xo);
            }
          })["catch"](Xo);
          const [Qn, Nn] = Bo();
          nc(Qn, xn[hn], In);
          const Vn = Qo(Qn);
          Wc = wo(("" + Vn["color"] + Vn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Ro(Ro(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Nn();
        }
        return Wc;
      };
      return async (n, r) => {
        const c = Jo((Go["now"]() - Uo * 1e3) / 1e3),
          u = new Oo(new Ko([c])["buffer"]),
          e = Fo(),
          f = ec(e);
        return Lo(new Oo([Yo() * 256]["concat"](wo(e), wo(u), Zo(wo(new Oo(await zo([r, n, c]["join"]("!") + "obfiowerehiring" + f)))["concat"](cc)), [Eo]))["map"](_o));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.3fdf738a.js.map