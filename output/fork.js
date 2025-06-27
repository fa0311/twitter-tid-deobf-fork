"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => c
    });
    W(136728), W(875640);
    const c = () => {
      const [yr, qr] = [document, window],
        [Pr, Vr, Fr, Kr, Jr, Qr, pr, Ir, Hr, Nr, Er, Zr, vr] = [qr["Number"], qr["TextEncoder"], qr["Uint8Array"], n => yr["querySelectorAll"](n), qr["Date"], qr["Uint32Array"], qr["crypto"]["subtle"], qr["Array"]["from"], qr["Math"], qr["RTCPeerConnection"], qr["Promise"], qr["Function"], qr["getComputedStyle"]];
      let gr;
      const wr = n => btoa(Ir(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Yr = () => {
          return n = br(Kr("[name^=tw]")[0], "content"), new Fr(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        xr = (n, t) => gr = gr || br(Ur(Kr(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Pr)),
        br = (n, t) => n && n["getAttribute"](t) || "",
        Xr = n => typeof n == "string" ? new Vr()["encode"](n) : n,
        Lr = n => pr["digest"]("sha-256", Xr(n)),
        Tr = n => (n < 16 ? "0" : "") + n["toString"](16),
        Ur = n => Ir(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Dr = () => {
          {
            const n = yr["createElement"]("div");
            return yr["body"]["append"](n), [n, () => Ur([n])];
          }
          {
            const n = qr["sdp"] || Pr;
            Lr = yr(jr([n[to[5] % 8] || "4", n[Vr[8] % 8]])), Wo["close"]();
          }
        },
        [zr, Mr, jr, Ar, $r] = [n => Hr["round"](n), n => Hr["floor"](n), () => Hr["random"](), n => n["slice"](0, 16), () => 0],
        [_r, no, to] = [3, 1682924400, 2 ** (4 * 3)],
        Wo = (n, t, W) => t ? n ^ W[0] : n,
        ro = (n, t, W) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](co(t), to);
            r["pause"](), r["currentTime"] = zr(W / 10) * 10;
          }
        },
        oo = (n, t, W, r) => {
          {
            const f = n * (W - t) / 255 + t;
            return r ? Mr(f) : f["toFixed"](2);
          }
        },
        co = n => ({
          color: ["#" + Tr(n[0]) + Tr(n[1]) + Tr(n[2]), "#" + Tr(n[3]) + Tr(n[4]) + Tr(n[5])],
          transform: ["rotate(0deg)", "rotate(" + oo(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Ir(n["slice"](7))["map"]((n, t) => oo(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let eo,
        fo,
        io = [];
      const ko = n => {
        if (!eo) {
          const [E, Z] = [n[35] % 16, n[10] % 16 * (n[35] % 16) * (n[46] % 16)],
            v = xr(".r-941u60", n);
          new Er(() => {
            {
              const N = new Nr(),
                Z = jr()["toString"](36);
              fo = N["createDataChannel"](Z), N["createOffer"]()["then"](Y => {
                try {
                  if (vacHCAbxtZhvAzMyioZG[$(581, 0, 0, "ysHH")] === "XhKum") {
                    const t = Y["sdp"] || Z;
                    io = Ir(vacHCAbxtZhvAzMyioZG[$(388, 0, 0, "$Nud")](Xr, [t[vacHCAbxtZhvAzMyioZG[$(465, 0, 0, "%^Z#")](n[5], 8)] || "4", t[n[8] % 8]])), N[$(630, 0, 0, "ysHH")]();
                  } else {
                    const r = new n(),
                      o = LPGgSxFhNohaqEiamfYF[$(591, 0, 0, "jPJu")](Lr)["toString"](36);
                    yr = r["createDataChannel"](o), r[$(588, 0, 0, "Vcr5") + "eOffe" + "r"]()[$(615, 0, 0, "k5Fi")](n => {
                      try {
                        const c = n["sdp"] || o;
                        B = Tr(zr([c[wr[5] % 8] || "4", c[Pr[8] % 8]])), r["close"]();
                      } catch {}
                    })["catch"](r);
                  }
                } catch {}
              })["catch"]($r);
            }
          })["catch"]($r);
          const [g, B] = Dr();
          ro(g, v[E], Z);
          const w = vr(g);
          eo = Ir(("" + w["color"] + w["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Pr(Pr(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), B();
        }
        return eo;
      };
      return async (n, t) => {
        const c = Mr((Jr["now"]() - no * 1e3) / 1e3),
          u = new Fr(new Qr([c])["buffer"]),
          e = Yr(),
          f = ko(e);
        return wr(new Fr([jr() * 256]["concat"](Ir(e), Ir(u), Ar(Ir(new Fr(await Lr([t, n, c]["join"]("!") + "obfiowerehiring" + f)))[function (n, t, W, r) {
          return mo(0, r - -402, 0, n);
        }("9xft", 0, 0, 841) + "t"](io)), [_r]))["map"](Wo));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.c1b11f1a.js.map