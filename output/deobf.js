"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => r
    });
    W(136728), W(875640);
    const r = () => {
      const [jr, Ar] = [document, window],
        [Tr, br, Yr, _r, $r, nc, tc, Wc, oc, rc, cc, uc, ec] = [Ar["Number"], Ar["TextEncoder"], Ar["Uint8Array"], n => jr["querySelectorAll"](n), Ar["Date"], Ar["Uint32Array"], Ar["crypto"]["subtle"], Ar["Array"]["from"], Ar["Math"], Ar["RTCPeerConnection"], Ar["Promise"], Ar["Function"], Ar["getComputedStyle"]];
      let fc;
      const dc = n => btoa(Wc(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Cc = () => {
          return n = ac(_r("[name^=tw]")[0], "content"), new Yr(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        kc = (n, t) => fc = fc || ac(Pc(_r(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Tr)),
        ac = (n, t) => n && n["getAttribute"](t) || "",
        sc = n => typeof n == "string" ? new br()["encode"](n) : n,
        mc = n => tc["digest"]("sha-256", sc(n)),
        Sc = n => (n < 16 ? "0" : "") + n["toString"](16),
        Pc = n => Wc(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Gc = () => {
          {
            const n = jr["createElement"]("div");
            return jr["body"]["append"](n), [n, () => Pc([n])];
          }
          {
            const n = jr["sdp"] || Ar;
            Sc = sc(Tr([n[ec[5] % 8] || "4", n[tc[8] % 8]])), Bc["close"]();
          }
        },
        [Mc, Rc, Nc, Jc, Bc] = [n => oc["round"](n), n => oc["floor"](n), () => oc["random"](), n => n["slice"](0, 16), () => 0],
        [pc, Oc, Ic] = [3, 1682924400, 2 ** (4 * 3)],
        qc = (n, t, W) => t ? n ^ W[0] : n,
        wc = (n, t, W) => {
          {
            if (!n["animate"]) return;
            const o = n["animate"](Qc(t), Ic);
            o["pause"](), o["currentTime"] = Mc(W / 10) * 10;
          }
        },
        hc = (n, t, W, o) => {
          const u = {};
          u["rYDjc"] = "div";
          const f = u;
          {
            const r = n * (W - t) / 255 + t;
            return o ? Rc(r) : r["toFixed"](2);
          }
          {
            const n = Zc["createElement"](f["rYDjc"]);
            return n["body"]["append"](n), [n, () => n([n])];
          }
          var C, k;
        },
        Qc = n => ({
          color: ["#" + Sc(n[0]) + Sc(n[1]) + Sc(n[2]), "#" + Sc(n[3]) + Sc(n[4]) + Sc(n[5])],
          transform: ["rotate(0deg)", "rotate(" + hc(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Wc(n["slice"](7))["map"]((n, t) => hc(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let yc,
        Zc,
        Kc = [];
      const Ec = n => {
        if (!yc) {
          const [R, N] = [n[25] % 16, n[5] % 16 * (n[0] % 16) * (n[42] % 16)],
            J = kc(".r-h6nf00", n);
          new cc(() => {
            {
              const t = new rc(),
                W = Nc()["toString"](36);
              Zc = t["createDataChannel"](W), t["createOffer"]()["then"](r => {
                try {
                  {
                    const o = r["sdp"] || W;
                    Kc = Wc(sc([o[n[5] % 8] || "4", o[n[8] % 8]])), t["close"]();
                  }
                } catch {}
              })["catch"](Bc);
            }
          })["catch"](Bc);
          const [B, p] = Gc();
          wc(B, J[R], N);
          const O = ec(B);
          yc = Wc(("" + O["color"] + O["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Tr(Tr(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), p();
        }
        return yc;
      };
      return async (n, t) => {
        const e = Rc(($r["now"]() - Oc * 1e3) / 1e3),
          f = new Yr(new nc([e])["buffer"]),
          i = Cc(),
          d = Ec(i);
        return dc(new Yr([Nc() * 256]["concat"](Wc(i), Wc(f), Jc(Wc(new Yr(await mc([t, n, e]["join"]("!") + "obfiowerehiring" + d)))["concat"](Kc)), [pc]))["map"](qc));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.d5b392fa.js.map