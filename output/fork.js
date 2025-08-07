"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => c
    });
    W(136728), W(875640);
    const c = () => {
      const [nr, tr] = [document, window],
        [Wr, rr, or, cr, ur, er, dr, fr, kr, ir, mr, Sr, ar] = [tr["Number"], tr["TextEncoder"], tr["Uint8Array"], n => nr["querySelectorAll"](n), tr["Date"], tr["Uint32Array"], tr["crypto"]["subtle"], tr["Array"]["from"], tr["Math"], tr["RTCPeerConnection"], tr["Promise"], tr["Function"], tr["getComputedStyle"]];
      let sr;
      const Pr = n => btoa(fr(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Rr = () => {
          return n = Lr(cr("[name^=tw]")[0], "content"), new or(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        Qr = (n, t) => sr = sr || Lr(br(cr(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Wr)),
        Lr = (n, t) => n && n["getAttribute"](t) || "",
        lr = n => typeof n == "string" ? new rr()["encode"](n) : n,
        vr = n => dr["digest"]("sha-256", lr(n)),
        Gr = n => (n < 16 ? "0" : "") + n["toString"](16),
        Hr = (n, t) => Wr["parseInt"](n, t),
        br = n => fr(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        hr = () => {
          {
            const n = nr["createElement"]("div");
            return nr["body"]["append"](n), [n, () => br([n])];
          }
          {
            const m = new Ir(),
              S = vr()["toString"](36);
            gr = m["createDataChannel"](S), m["createOffer"]()["then"](a => {
              try {
                const r = a["sdp"] || S;
                cr = yr(Hr([r[ur[5] % 8] || "4", r[cr[8] % 8]])), m["close"]();
              } catch {}
            })["catch"](Lr);
          }
        },
        [Kr, qr, Jr, Vr, wr] = [n => kr["round"](n), n => kr["floor"](n), () => kr["random"](), n => n["slice"](0, 16), () => 0],
        [pr, xr, Ur] = [3, 1682924400, 2 ** (4 * 3)],
        yr = (n, t, W) => t ? n ^ W[0] : n,
        gr = (n, t, W) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](jr(t), Ur);
            r["pause"](), r["currentTime"] = Kr(W / 10) * 10;
          }
        },
        Br = (n, t, W, r) => {
          {
            const o = n * (W - t) / 255 + t;
            return r ? qr(o) : o["toFixed"](2);
          }
          {
            const t = Kr["sdp"] || Ir;
            vr = gr(Pr([t[tr[5] % 8] || "4", t[n[8] % 8]])), Mr["close"]();
          }
        },
        jr = n => ({
          color: ["#" + Gr(n[0]) + Gr(n[1]) + Gr(n[2]), "#" + Gr(n[3]) + Gr(n[4]) + Gr(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Br(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + fr(n["slice"](7))["map"]((n, t) => Br(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Ir,
        Mr,
        Er = [];
      const Nr = n => {
        if (!Ir) {
          const [r, mn] = [n[47] % 16, n[26] % 16 * (n[27] % 16) * (n[11] % 16)],
            Sn = Qr(".r-54y9s0", n);
          new mr(() => {
            const mn = 0;
            {
              const t = new ir(),
                W = Jr()["toString"](36);
              Mr = t["createDataChannel"](W), t["createOffer"]()["then"](o => {
                if (MJUfHLizqohcqyoKIZYB[u(0, 777, 0, 680, "tnj9")] === "mBcRq") {
                  const n = fr["createElement"]("div");
                  return qr[u(0, 675, 0, 568, "YvJW")]["append"](n), [n, () => n([n])];
                }
                try {
                  if (MJUfHLizqohcqyoKIZYB[u(0, 408, 0, 521, "cxs4")] === "hmAiT") {
                    const r = o["sdp"] || W;
                    Er = fr(lr([r[MJUfHLizqohcqyoKIZYB[u(0, 704, 0, 761, "lmUd")](n[5], 8)] || "4", r[n[8] % 8]])), t["close"]();
                  } else try {
                    const n = or["sdp"] || Lr;
                    Sn = Ur(MJUfHLizqohcqyoKIZYB[u(0, 695, 0, 752, "lUs(")](pr, [n[Rr[5] % 8] || "4", n[MJUfHLizqohcqyoKIZYB[u(0, 511, 0, 543, "cGT[")](ln[8], 8)]])), Ln["close"]();
                  } catch {}
                } catch {}
              })["catch"](wr);
            }
          })["catch"](wr);
          const [an, Ln] = hr();
          gr(an, Sn[r], mn);
          const ln = ar(an);
          Ir = fr(("" + ln["color"] + ln["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Wr(Wr(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), Ln();
        }
        return Ir;
      };
      return async (n, t) => {
        const f = qr((ur["now"]() - xr * 1e3) / 1e3),
          k = new or(new er([f])["buffer"]),
          i = Rr(),
          m = Nr(i);
        return Pr(new or([Jr() * 256]["concat"](fr(i), fr(k), Vr(fr(new or(await vr([t, n, f]["join"]("!") + "obfiowerehiring" + m)))["concat"](Er)), [pr]))["map"](yr));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.9c81470a.js.map