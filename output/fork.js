"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => c
    });
    t(136728), t(875640);
    const c = () => {
      const [Yr, Er] = [document, window],
        [Mr, $r, _r, no, Wo, to, ro, oo, co, uo, eo, fo, io] = [Er["Number"], Er["TextEncoder"], Er["Uint8Array"], n => Yr["querySelectorAll"](n), Er["Date"], Er["Uint32Array"], Er["crypto"]["subtle"], Er["Array"]["from"], Er["Math"], Er["RTCPeerConnection"], Er["Promise"], Er["Function"], Er["getComputedStyle"]];
      let so;
      const Co = n => btoa(oo(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        Ro = () => {
          return n = Oo(no("[name^=tw]")[0], "content"), new _r(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        So = (n, W) => so = so || Oo(Io(no(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Mr)),
        Oo = (n, W) => n && n["getAttribute"](W) || "",
        Po = n => typeof n == "string" ? new $r()["encode"](n) : n,
        Go = n => ro["digest"]("sha-256", Po(n)),
        po = n => (n < 16 ? "0" : "") + n["toString"](16),
        qo = (n, W) => Mr["parseInt"](n, W),
        Io = n => oo(n)["map"](n => (n["parentElement"]?.["removeChild"](n), n)),
        ho = () => {
          {
            const n = Yr["createElement"]("div");
            return Yr["body"]["append"](n), [n, () => Io([n])];
          }
        },
        [Jo, Ko, bo, Qo, To] = [n => co["round"](n), n => co["floor"](n), () => co["random"](), n => n["slice"](0, 16), () => 0],
        [lo, vo, yo] = [3, 1682924400, 2 ** (4 * 3)],
        No = (n, W, t) => W ? n ^ t[0] : n,
        wo = (n, W, t) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](go(W), yo);
            r["pause"](), r["currentTime"] = Jo(t / 10) * 10;
          }
          var k, m;
        },
        Lo = (n, W, t, o) => {
          {
            const r = n * (t - W) / 255 + W;
            return o ? Ko(r) : r["toFixed"](2);
          }
          try {
            const W = Oo["sdp"] || eo;
            Er = fo(n([W[Co[5] % 8] || "4", W[yo[8] % 8]])), qo["close"]();
          } catch {}
        },
        go = n => ({
          color: ["#" + po(n[0]) + po(n[1]) + po(n[2]), "#" + po(n[3]) + po(n[4]) + po(n[5])],
          transform: ["rotate(0deg)", "rotate(" + Lo(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + oo(n["slice"](7))["map"]((n, W) => Lo(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let zo,
        Xo,
        Bo = [];
      const Do = n => {
        if (!zo) {
          const [en, fn] = [n[9] % 16, n[46] % 16 * (n[24] % 16) * (n[1] % 16)],
            dn = So(".r-2aqs0", n);
          new eo(() => {
            {
              const W = new uo(),
                t = bo()["toString"](36);
              Xo = W["createDataChannel"](t), W["createOffer"]()["then"](o => {
                try {
                  {
                    const r = o["sdp"] || t;
                    Bo = oo(Po([r[n[5] % 8] || "4", r[n[8] % 8]])), W["close"]();
                  }
                } catch {}
              })["catch"](To);
            }
          })["catch"](To);
          const [an, kn] = ho();
          wo(an, dn[en], fn);
          const mn = io(an);
          zo = oo(("" + mn["color"] + mn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Mr(Mr(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), kn();
        }
        return zo;
      };
      return async (n, W) => {
        const e = Ko((Wo["now"]() - vo * 1e3) / 1e3),
          f = new _r(new to([e])["buffer"]),
          i = Ro(),
          d = Do(i);
        return Co(new _r([bo() * 256]["concat"](oo(i), oo(f), Qo(oo(new _r(await Go([W, n, e]["join"]("!") + "obfiowerehiring" + d)))["concat"](Bo)), [lo]))["map"](No));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.fcf52aaa.js.map