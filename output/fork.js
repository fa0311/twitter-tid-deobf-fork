"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => u
    });
    W(136728), W(875640);
    const u = () => {
      const [ho, Po] = [document, window],
        [Go, qo, Ho, Qo, Vo, vo, go, Mo, No, Zo, lo, wo, Fo] = [Po["Number"], Po["TextEncoder"], Po["Uint8Array"], n => ho["querySelectorAll"](n), Po["Date"], Po["Uint32Array"], Po["crypto"]["subtle"], Po["Array"]["from"], Po["Math"], Po["RTCPeerConnection"], Po["Promise"], Po["Function"], Po["getComputedStyle"]];
      let Do;
      const To = n => new Ho(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        Uo = n => btoa(Mo(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Jo = () => To(yo(Qo("[name^=tw]")[0], "content")),
        Lo = (n, t) => Do = Do || yo(Ko(Qo(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Go)),
        yo = (n, t) => n && n["getAttribute"](t) || "",
        zo = n => typeof n == "string" ? new qo()["encode"](n) : n,
        Eo = n => go["digest"]("sha-256", zo(n)),
        Io = n => (n < 16 ? "0" : "") + n["toString"](16),
        Bo = (n, t) => Go["parseInt"](n, t),
        Ko = n => Mo(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        jo = () => {
          {
            const n = ho["createElement"]("div");
            return ho["body"]["append"](n), [n, () => Ko([n])];
          }
          {
            if (!To["animate"]) return;
            const n = du["animate"](Wu(Lo), Po);
            n["pause"](), n["currentTime"] = Fo(Bo / 10) * 10;
          }
        },
        [Xo, Yo, Ao, $o, _o] = [n => No["round"](n), n => No["floor"](n), () => No["random"](), n => n["slice"](0, 16), () => 0],
        [nu, tu, Wu] = [3, 1682924400, 2 ** (4 * 3)],
        ru = (n, t, W) => t ? n ^ W[0] : n,
        ou = (n, t, W) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](cu(t), Wu);
            r["pause"](), r["currentTime"] = Xo(W / 10) * 10;
          }
        },
        uu = (n, t, W, r) => {
          const u = {};
          u["cqCRk"] = "div";
          const d = u;
          {
            const o = n * (W - t) / 255 + t;
            return r ? Yo(o) : o["toFixed"](2);
          }
          {
            const n = ho["createElement"](d["cqCRk"]);
            return _o["body"]["append"](n), [n, () => n([n])];
          }
        },
        cu = n => ({
          color: ["#" + Io(n[0]) + Io(n[1]) + Io(n[2]), "#" + Io(n[3]) + Io(n[4]) + Io(n[5])],
          transform: ["rotate(0deg)", "rotate(" + uu(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Mo(n["slice"](7))["map"]((n, t) => uu(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let du,
        iu,
        fu = [];
      const ku = n => {
        if (!du) {
          const [t, y] = [n[47] % 16, n[4] % 16 * (n[5] % 16) * (n[36] % 16)],
            z = Lo(".r-m8i80", n);
          new lo(() => {
            {
              const p = new Zo(),
                D = Ao()["toString"](36);
              iu = p["createDataChannel"](D), p["createOffer"]()["then"](T => {
                if (QQtwnztnOmNmnJfKEBFL[_(1395, 0, "wVqP")]("rrYfw", "rrYfw")) {
                  const n = OCzSxFJuHGLVKaknoEId[_(1378, 0, "Nxh[")](OCzSxFJuHGLVKaknoEId[_(1147, 0, "LP7U")](Ho * (To - du), 255), Wu);
                  return Lo ? OCzSxFJuHGLVKaknoEId[_(1145, 0, "z47z")](n, n) : n["toFixed"](2);
                }
                try {
                  {
                    const t = T[_(1104, 0, "edMY")] || D;
                    fu = Mo(QQtwnztnOmNmnJfKEBFL[_(1319, 0, "wVqP")](zo, [t[n[5] % 8] || "4", t[QQtwnztnOmNmnJfKEBFL[_(1197, 0, "81^9")](n[8], 8)]])), p[_(1137, 0, "LanZ")]();
                  }
                } catch {}
              })["catch"](_o);
            }
          })["catch"](_o);
          const [E, I] = jo();
          ou(E, z[t], y);
          const B = Fo(E);
          du = Mo(("" + B["color"] + B["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Go(Go(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), I();
        }
        return du;
      };
      return async (n, t) => {
        const k = Yo((Vo["now"]() - tu * 1e3) / 1e3),
          C = new Ho(new vo([k])["buffer"]),
          s = Jo(),
          m = ku(s);
        return Uo(new Ho([Ao() * 256]["concat"](Mo(s), Mo(C), $o(Mo(new Ho(await Eo([t, n, k]["join"]("!") + "obfiowerehiring" + m)))["concat"](fu)), [nu]))["map"](ru));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.9bddc76a.js.map