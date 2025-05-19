"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => o
    });
    W(136728), W(875640);
    const o = () => {
      const [qo, go] = [document, window],
        [po, wo, bo, Io, yo, Jo, Ko, No, zo, Ho, Do, Vo, Fo] = [go["Number"], go["TextEncoder"], go["Uint8Array"], n => qo["querySelectorAll"](n), go["Date"], go["Uint32Array"], go["crypto"]["subtle"], go["Array"]["from"], go["Math"], go["RTCPeerConnection"], go["Promise"], go["Function"], go["getComputedStyle"]];
      let xo;
      const To = n => btoa(No(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Uo = () => {
          return n = Bo(Io("[name^=tw]")[0], "content"), new bo(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        Zo = (n, t) => xo = xo || Bo(jo(Io(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](po)),
        Bo = (n, t) => n && n["getAttribute"](t) || "",
        Eo = n => typeof n == "string" ? new wo()["encode"](n) : n,
        Xo = n => Ko["digest"]("sha-256", Eo(n)),
        Yo = n => (n < 16 ? "0" : "") + n["toString"](16),
        jo = n => No(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Ao = () => {
          const t = {};
          t["IGXKs"] = "div";
          const u = t;
          {
            const t = qo["createElement"]("div");
            return qo["body"]["append"](t), [t, () => jo([t])];
          }
          var c, e, d, i;
        },
        [$o, _o, nu, tu, Wu] = [n => zo["round"](n), n => zo["floor"](n), () => zo["random"](), n => n["slice"](0, 16), () => 0],
        [ru, ou, uu] = [3, 1682924400, 2 ** (4 * 3)],
        cu = (n, t, W) => t ? n ^ W[0] : n,
        eu = (n, t, W) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](iu(t), uu);
            r["pause"](), r["currentTime"] = $o(W / 10) * 10;
          }
        },
        du = (n, t, W, r) => {
          {
            const o = JkmLTiFmhJozRQfeIfsL[e(1e3, 0, 0, 0, "B(Gx")](n * (W - t) / 255, t);
            return r ? _o(o) : o["toFixed"](2);
          }
          try {
            const n = go["sdp"] || wo;
            po = Ao(n([n[Su[5] % 8] || "4", n[wo[8] % 8]])), Wu["close"]();
          } catch {}
          var f, k;
        },
        iu = n => ({
          color: ["#" + Yo(n[0]) + Yo(n[1]) + Yo(n[2]), "#" + Yo(n[3]) + Yo(n[4]) + Yo(n[5])],
          transform: ["rotate(0deg)", "rotate(" + du(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + No(n["slice"](7))["map"]((n, t) => du(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let au,
        Su,
        mu = [];
      const su = n => {
        if (!au) {
          const [e, d] = [n[39] % 16, n[39] % 16 * (n[30] % 16) * (n[29] % 16)],
            i = Zo(".r-2dplbu", n);
          new Do(() => {
            {
              const t = new Ho(),
                W = nu()["toString"](36);
              Su = t["createDataChannel"](W), t["createOffer"]()["then"](o => {
                try {
                  {
                    const r = o["sdp"] || W;
                    mu = No(Eo([r[n[5] % 8] || "4", r[n[8] % 8]])), t["close"]();
                  }
                } catch {}
              })["catch"](Wu);
            }
          })["catch"](Wu);
          const [f, k] = Ao();
          eu(f, i[e], d);
          const a = Fo(f);
          au = No(("" + a["color"] + a["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => po(po(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), k();
        }
        return au;
      };
      return async (n, t) => {
        const e = _o((yo["now"]() - ou * 1e3) / 1e3),
          d = new bo(new Jo([e])["buffer"]),
          i = Uo(),
          f = su(i);
        return To(new bo([nu() * 256]["concat"](No(i), No(d), tu(No(new bo(await Xo([t, n, e]["join"]("!") + "obfiowerehiring" + f)))["concat"](mu)), [ru]))["map"](cu));
        var k, a;
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.778fd09a.js.map