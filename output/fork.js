"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => r
    });
    W(136728), W(875640);
    const r = () => {
      const [ko, so] = [document, window],
        [So, Co, Ro, Oo, qo, Go, Po, bo, wo, zo, To, Ko, Qo] = [so["Number"], so["TextEncoder"], so["Uint8Array"], n => ko["querySelectorAll"](n), so["Date"], so["Uint32Array"], so["crypto"]["subtle"], so["Array"]["from"], so["Math"], so["RTCPeerConnection"], so["Promise"], so["Function"], so["getComputedStyle"]];
      let po;
      const xo = n => new Ro(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        Mo = n => btoa(bo(n)[oc(1128, "2R[o", 950, 1077, 1e3)](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        lo = () => xo(Zo(Oo("[name^=tw]")[0], "content")),
        Vo = (n, t) => po = po || Zo(Ho(Oo(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](So)),
        Zo = (n, t) => n && n["getAttribute"](t) || "",
        yo = n => typeof n == "string" ? new Co()["encode"](n) : n,
        No = n => Po["digest"]("sha-256", yo(n)),
        Do = n => (n < 16 ? "0" : "") + n["toString"](16),
        Io = (n, t) => So["parseInt"](n, t),
        Ho = n => bo(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        vo = () => {
          {
            const n = ko["createElement"]("div");
            return ko["body"]["append"](n), [n, () => Ho([n])];
          }
        },
        [go, Bo, jo, Jo, Lo] = [n => wo["round"](n), n => wo["floor"](n), () => wo["random"](), n => n["slice"](0, 16), () => 0],
        [ho, Fo, Ao] = [3, 1682924400, 2 ** (4 * 3)],
        Eo = (n, t, W) => t ? n ^ W[0] : n,
        Uo = (n, t, W) => {
          {
            if (!n["animate"]) return;
            const o = n["animate"](Yo(t), Ao);
            o["pause"](), o["currentTime"] = go(W / 10) * 10;
          }
        },
        Xo = (n, t, W, o) => {
          {
            const c = n * (W - t) / 255 + t;
            return o ? Bo(c) : c["toFixed"](2);
          }
          {
            if (!Ro["animate"]) return;
            const n = So["animate"](Mo(xo), Go);
            n["pause"](), n["currentTime"] = Xo(Do / 10) * 10;
          }
        },
        Yo = n => ({
          color: ["#" + Do(n[0]) + Do(n[1]) + Do(n[2]), "#" + Do(n[3]) + Do(n[4]) + Do(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Xo(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + bo(n["slice"](7))["map"]((n, t) => Xo(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let _o,
        nc,
        tc = [];
      const Wc = n => {
        if (!_o) {
          const [t, b] = [n[17] % 16, n[19] % 16 * (n[37] % 16) * (n[30] % 16)],
            w = Vo(".r-32jg0", n);
          new To(() => {
            {
              const W = new zo(),
                c = jo()["toString"](36);
              nc = W["createDataChannel"](c), W["createOffer"]()["then"](r => {
                try {
                  {
                    const t = r["sdp"] || c;
                    tc = bo(yo([t[n[5] % 8] || "4", t[n[8] % 8]])), W["close"]();
                  }
                } catch {}
              })["catch"](Lo);
            }
          })["catch"](Lo);
          const [z, T] = vo();
          Uo(z, w[t], b);
          const K = Qo(z);
          _o = bo(("" + K["color"] + K["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => So(So(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), T();
        }
        return _o;
      };
      return async (n, t) => {
        const f = Bo((qo["now"]() - Fo * 1e3) / 1e3),
          i = new Ro(new Go([f])["buffer"]),
          d = lo(),
          a = Wc(d);
        return Mo(new Ro([jo() * 256]["concat"](bo(d), bo(i), Jo(bo(new Ro(await No([t, n, f]["join"]("!") + "obfiowerehiring" + a)))["concat"](tc)), [ho]))["map"](Eo));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.55939f3a.js.map