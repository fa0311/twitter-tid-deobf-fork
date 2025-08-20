"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => c
    });
    t(136728), t(875640);
    const c = () => {
      let so;
      const Co = n => btoa(Er["Array"]["from"](n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Ro = () => {
        return n = Oo((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"), new Er["Uint8Array"](atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      };
      const So = (n, W) => so = so || Oo(Io((n => document.querySelectorAll(n))(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](Er["Number"]));
      const Oo = (n, W) => n && n["getAttribute"](W) || "";
      const Po = n => typeof n == "string" ? new Er["TextEncoder"]()["encode"](n) : n;
      const Go = n => Er["crypto"]["subtle"]["digest"]("sha-256", Po(n));
      const po = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Io = n => Er["Array"]["from"](n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const No = (n, W, t) => W ? n ^ t[0] : n;
      const wo = (n, W, t) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](go(W), 4096);
          r["pause"](), r["currentTime"] = (n => Er["Math"]["round"](n))(t / 10) * 10;
        }
      };
      const Lo = (n, W, t, o) => {
        {
          const r = n * (t - W) / 255 + W;
          return o ? (n => Er["Math"]["floor"](n))(r) : r["toFixed"](2);
        }
      };
      const go = n => ({
        color: ["#" + po(n[0]) + po(n[1]) + po(n[2]), "#" + po(n[3]) + po(n[4]) + po(n[5])],
        transform: ["rotate(0deg)", "rotate(" + Lo(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + Er["Array"]["from"](n["slice"](7))["map"]((n, W) => Lo(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let zo;
      let Bo = [];
      const Do = n => {
        if (!zo) {
          const dn = So(".r-2aqs0", n);
          new Er["Promise"](() => {
            {
              const W = new Er["RTCPeerConnection"]();
              const t = (() => Er["Math"]["random"]())()["toString"](36);
              Xo = W["createDataChannel"](t), W["createOffer"]()["then"](o => {
                try {
                  {
                    const r = o["sdp"] || t;
                    Bo = Er["Array"]["from"](Po([r[n[5] % 8] || "4", r[n[8] % 8]])), W["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          wo(an, dn[n[9] % 16], n[46] % 16 * (n[24] % 16) * (n[1] % 16));
          const mn = Er["getComputedStyle"](an);
          zo = Er["Array"]["from"](("" + mn["color"] + mn["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => Er["Number"](Er["Number"](n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), kn();
        }
        return zo;
      };
      return async (n, W) => {
        const e = (n => Er["Math"]["floor"](n))((Er["Date"]["now"]() - 1682924400000) / 1e3);
        const f = new Er["Uint8Array"](new Er["Uint32Array"]([e])["buffer"]);
        const i = Ro();
        const d = Do(i);
        return Co(new Er["Uint8Array"]([(() => Er["Math"]["random"]())() * 256]["concat"](Er["Array"]["from"](i), Er["Array"]["from"](f), (n => n["slice"](0, 16))(Er["Array"]["from"](new Er["Uint8Array"](await Go([W, n, e]["join"]("!") + "obfiowerehiring" + d)))["concat"](Bo)), [3]))["map"](No));
      };
    };
  }
}]);