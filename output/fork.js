"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => o
    });
    W(136728), W(875640);
    const o = () => {
      const [mc, pc] = [document, window],
        [vc, hc, yc, Xc, lc, qc, xc, zc, wc, Qc, Jc, Lc, Ac] = [pc["Number"], pc["TextEncoder"], pc["Uint8Array"], n => mc["querySelectorAll"](n), pc["Date"], pc["Uint32Array"], pc["crypto"]["subtle"], pc["Array"]["from"], pc["Math"], pc["RTCPeerConnection"], pc["Promise"], pc["Function"], pc["getComputedStyle"]];
      let Fc;
      const gc = n => new yc(atob(n)["split"]("")["map"](n => n["charCodeAt"](0))),
        jc = n => btoa(zc(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Bc = () => gc(Vc(Xc("[name^=tw]")[0], "content")),
        bc = (n, t) => Fc = Fc || Vc(Dc(Xc(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](vc)),
        Vc = (n, t) => n && n["getAttribute"](t) || "",
        Kc = n => typeof n == "string" ? new hc()["encode"](n) : n,
        Nc = n => xc["digest"]("sha-256", Kc(n)),
        Hc = n => (n < 16 ? "0" : "") + n["toString"](16),
        Uc = (n, t) => vc["parseInt"](n, t),
        Dc = n => zc(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        Zc = () => {
          {
            const n = mc["createElement"]("div");
            return mc["body"]["append"](n), [n, () => Dc([n])];
          }
          {
            const n = oo["sdp"] || Dc;
            pc = qc(io([n[vc[5] % 8] || "4", n[Wo[8] % 8]])), Uc["close"]();
          }
        },
        [Ec, Mc, Yc, Tc, $c] = [n => wc["round"](n), n => wc["floor"](n), () => wc["random"](), n => n["slice"](0, 16), () => 0],
        [_c, no, to] = [3, 1682924400, 2 ** (4 * 3)],
        Wo = (n, t, W) => t ? n ^ W[0] : n,
        ro = (n, t, W) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](oo(t), to);
            r["pause"](), r["currentTime"] = Ec(W / 10) * 10;
          }
        },
        co = (n, t, W, r) => {
          const f = {};
          f["lVoSR"] = "div";
          const a = f;
          {
            const c = n * (W - t) / 255 + t;
            return r ? Mc(c) : c["toFixed"](2);
          }
        },
        oo = n => ({
          color: ["#" + Hc(n[0]) + Hc(n[1]) + Hc(n[2]), "#" + Hc(n[3]) + Hc(n[4]) + Hc(n[5])],
          transform: ["rotate(0deg)", "rotate(" + co(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + zc(n["slice"](7))["map"]((n, t) => co(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let eo,
        io,
        fo = [];
      const so = n => {
        if (!eo) {
          const [u, e] = [n[21] % 16, n[12] % 16 * (n[34] % 16) * (n[13] % 16)],
            i = bc(".r-44b6", n);
          new Jc(() => {
            {
              const t = new Qc(),
                W = Yc()["toString"](36);
              io = t["createDataChannel"](W), t["createOffer"]()["then"](c => {
                if (DreKmakkkFiAYtJWJyXJ[p(0, "ok#C", 0, 0, -127)](DreKmakkkFiAYtJWJyXJ[v(0, -408, "Yp8&")], "jbPMa")) {
                  const m = new Dc(),
                    y = ucaFQJXdNzPnOrPuuoxQ[v(0, -338, "$k^k")](i)["toStr" + v(0, -249, "Gc[R")](36);
                  qc = m[p(0, "hpqA", 0, 0, -151) + "eData" + "Chann" + "el"](y), m["createOffer"]()[p(0, "dIxc", 0, 0, -11)](r => {
                    try {
                      const t = r[u("*5pa", 592, 584, 468)] || y;
                      Lc = msEYRwMGVGFcvUcfyCnU[o(0, 476, 0, -375, "aKzt")](m, msEYRwMGVGFcvUcfyCnU[o(389, 0, 351, -473, "xUe^")](Hc, [t[msEYRwMGVGFcvUcfyCnU[o(0, 0, 0, -322, "xUe^")](k[5], 8)] || "4", t[msEYRwMGVGFcvUcfyCnU[p(0, "q9js", 0, 0, 127)](Fc[8], 8)]])), m[u("U6sy", 0, 383, 448)]();
                    } catch {}
                  })[p(0, "Yp8&", 0, 0, 108)](gc);
                } else try {
                  {
                    const r = c["sdp"] || W;
                    fo = zc(Kc([r[DreKmakkkFiAYtJWJyXJ[v(0, -257, "Gc[R")](n[5], 8)] || "4", r[DreKmakkkFiAYtJWJyXJ[p(0, "hpqA", 0, 0, -36)](n[8], 8)]])), t["close"]();
                  }
                } catch {}
              })["catch"]($c);
            }
          })["catch"]($c);
          const [f, k] = Zc();
          ro(f, i[u], e);
          const d = Ac(f);
          eo = zc(("" + d["color"] + d["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => vc(vc(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), k();
        }
        return eo;
      };
      return async (n, t) => {
        const o = Mc((lc["now"]() - no * 1e3) / 1e3),
          u = new yc(new qc([o])["buffer"]),
          e = Bc(),
          i = so(e);
        return jc(new yc([Yc() * 256]["concat"](zc(e), zc(u), Tc(zc(new yc(await Nc([t, n, o]["join"]("!") + "obfiowerehiring" + i)))["concat"](fo)), [_c]))["map"](Wo));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.9189088a.js.map