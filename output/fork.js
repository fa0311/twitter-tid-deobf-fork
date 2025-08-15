"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => u
    });
    t(136728), t(875640);
    const u = () => {
      const Gn = 0;
      const [So, ho] = [document, window],
        [xo, bo, po, Oo, jo, Go, lo, wo, Fo, Ao, Ko, Io, yo] = [ho["Number"], ho["TextEncoder"], ho["Uint8Array"], n => So["querySelectorAll"](n), ho["Date"], ho["Uint32Array"], ho["crypto"]["subtle"], ho["Array"]["from"], ho["Math"], ho["RTCPeerConnection"], ho["Promise"], ho["Function"], ho["getComputedStyle"]];
      let Ho;
      const Bo = n => btoa(wo(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Xo = () => {
          return n = No(Oo("[name^=tw]")[0], "content"), new po(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        Zo = (n, W) => Ho = Ho || No(To(Oo(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](xo)),
        No = (n, W) => n && n["getAttribute"](W) || "",
        Do = n => typeof n == "string" ? new bo()["encode"](n) : n,
        Lo = n => lo["digest"]("sha-256", Do(n)),
        Yo = n => (n < 16 ? "0" : "") + n["toString"](16),
        To = n => wo(n)["map"](n => (n["paren" + fu("uav9", 927, 1e3, 920, 1010) + "ent"]?.["removeChild"](n), n)),
        zo = () => {
          {
            const n = So["createElement"]("div");
            return So["body"]["append"](n), [n, () => To([n])];
          }
          {
            const n = ho * (Uo - gssslTAqPYgxmAmsDYyM) / 255 + To;
            return So ? $o(n) : n["toFixed"](2);
          }
          var R, P, v, m;
        },
        [go, Jo, Mo, Vo, Eo] = [n => Fo["round"](n), n => Fo["floor"](n), () => Fo["random"](), n => n["slice"](0, 16), () => 0],
        [Uo, $o, _o] = [3, 1682924400, gssslTAqPYgxmAmsDYyM[ou(128, 18, "1cjy", 267, Gn)](2, 4 * 3)],
        nu = (n, W, t) => W ? n ^ t[0] : n,
        Wu = (n, W, t) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](ru(W), _o);
            r["pause"](), r["currentTime"] = go(t / 10) * 10;
          }
        },
        tu = (n, W, t, r) => {
          {
            const o = n * (t - W) / 255 + W;
            return r ? Jo(o) : o["toFixed"](2);
          }
          try {
            const n = Ho["sdp"] || Io;
            go = Do(du([n[Zo[5] % 8] || "4", n[wo[8] % 8]])), No["close"]();
          } catch {}
          var d, a, s, C;
        },
        ru = n => ({
          color: ["#" + Yo(n[0]) + Yo(n[1]) + Yo(n[2]), "#" + Yo(n[3]) + Yo(n[4]) + Yo(n[5])],
          transform: ["rotate(0deg)", "rotate(" + tu(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + wo(n["slice"](7))["map"]((n, W) => tu(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let uu,
        cu,
        eu = [];
      const du = n => {
        if (!uu) {
          const [E, U] = [n[11] % 16, n[21] % 16 * (n[12] % 16) * (n[40] % 16)],
            $ = Zo(".r-8kvco0", n);
          new Ko(() => {
            {
              const r = new Ao(),
                Z = Mo()["toString"](36);
              cu = r["createDataChannel"](Z), r["createOffer"]()["then"](N => {
                const z = {};
                z["uaQkI"] = "div";
                const g = z;
                if (OuvgvCcEqiNIYsXxihiT[dn("ndefinedn - 55", 1255, "ndefinedn - 11", 0, "ndefined")]("ViKlh", "ViKlh")) {
                  const n = lo["createElement"](g["uaQkI"]);
                  return jo["body"]["append"](n), [n, () => n([n])];
                }
                try {
                  {
                    const W = N["sdp"] || Z;
                    eu = wo(Do([W[n[5] % 8] || "4", W[n[8] % 8]])), r["close"]();
                  }
                } catch {}
                var _, Wn, tn;
              })["catch"](Eo);
            }
          })["catch"](Eo);
          const [_, nn] = zo();
          Wu(_, $[E], U);
          const Wn = yo(_);
          uu = wo(("" + Wn["color"] + Wn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => xo(xo(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), nn();
        }
        return uu;
      };
      return async (n, W) => {
        const e = Jo((jo["now"]() - $o * 1e3) / 1e3),
          i = new po(new Go([e])["buffer"]),
          f = Xo(),
          d = du(f);
        return Bo(new po([Mo() * 256]["concat"](wo(f), wo(i), Vo(wo(new po(await Lo([W, n, e]["join"]("!") + "obfiowerehiring" + d)))["concat"](eu)), [Uo]))["map"](nu));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.bd9d7d3a.js.map