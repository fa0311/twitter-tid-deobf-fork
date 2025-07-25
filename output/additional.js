"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  227900: (n, t, W) => {
    W.r(t), W.d(t, {
      default: () => o
    });
    W(136728), W(875640);
    const o = () => {
      let Fc;
      const gc = n => new pc["Uint8Array"](atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
      const jc = n => btoa(pc["Array"]["from"](n)["map"](n => String.fromCharCode(n))["join"](""))["replace"](/=/g, "");
      const Bc = () => gc(Vc((n => document.querySelectorAll(n))("[name^=tw]")[0], "content"));
      const bc = (n, t) => Fc = Fc || Vc(Dc((n => document.querySelectorAll(n))(n))[t[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](pc["Number"]));
      const Vc = (n, t) => n && n["getAttribute"](t) || "";
      const Kc = n => typeof n == "string" ? new pc["TextEncoder"]()["encode"](n) : n;
      const Nc = n => pc["crypto"]["subtle"]["digest"]("sha-256", Kc(n));
      const Hc = n => (n < 16 ? "0" : "") + n["toString"](16);
      const Dc = n => pc["Array"]["from"](n)["map"](n => (n["parentElement"]?.["removeChild"](n), n));
      const Wo = (n, t, W) => t ? n ^ W[0] : n;
      const ro = (n, t, W) => {
        {
          if (!n["animate"]) return;
          const r = n["animate"](oo(t), 4096);
          r["pause"](), r["currentTime"] = (n => pc["Math"]["round"](n))(W / 10) * 10;
        }
      };
      const co = (n, t, W, r) => {
        const f = {
          "lVoSR": "div"
        };
        {
          const c = n * (W - t) / 255 + t;
          return r ? (n => pc["Math"]["floor"](n))(c) : c["toFixed"](2);
        }
      };
      const oo = n => ({
        color: ["#" + Hc(n[0]) + Hc(n[1]) + Hc(n[2]), "#" + Hc(n[3]) + Hc(n[4]) + Hc(n[5])],
        transform: ["rotate(0deg)", "rotate(" + co(n[6], 60, 360, !0) + "deg)"],
        easing: "cubic-bezier(" + pc["Array"]["from"](n["slice"](7))["map"]((n, t) => co(n, t % 2 ? -1 : 0, 1))["join"]() + ")"
      });
      let eo;
      let io;
      let fo = [];
      const so = n => {
        if (!eo) {
          const u = n[21] % 16;
          const e = n[12] % 16 * (n[34] % 16) * (n[13] % 16);
          const i = bc(".r-44b6", n);
          new pc["Promise"](() => {
            {
              const t = new pc["RTCPeerConnection"]();
              const W = (() => pc["Math"]["random"]())()["toString"](36);
              io = t["createDataChannel"](W), t["createOffer"]()["then"](c => {
                if (aPaXyofEIImEwNChKOdt[p(0, "ok#C", 0, 0, -127)](aPaXyofEIImEwNChKOdt[v(0, -408, "Yp8&")], "jbPMa")) {
                  const m = new Dc();
                  const y = iMBLrOmxytDCNGoInfAP[v(0, -338, "$k^k")](i)["toStr" + v(0, -249, "Gc[R")](36);
                  qc = m[p(0, "hpqA", 0, 0, -151) + "eDataChannel"](y), m["createOffer"]()[p(0, "dIxc", 0, 0, -11)](r => {
                    try {
                      const t = r[(n[21] % 16)("*5pa", 592, 584, 468)] || y;
                      Lc = uhNGbxNBqVYkKKilazFI[o(0, 476, 0, -375, "aKzt")](m, uhNGbxNBqVYkKKilazFI[o(389, 0, 351, -473, "xUe^")](Hc, [t[uhNGbxNBqVYkKKilazFI[o(0, 0, 0, -322, "xUe^")](k[5], 8)] || "4", t[uhNGbxNBqVYkKKilazFI[p(0, "q9js", 0, 0, 127)](Fc[8], 8)]])), m[(n[21] % 16)("U6sy", 0, 383, 448)]();
                    } catch {}
                  })[p(0, "Yp8&", 0, 0, 108)](gc);
                } else try {
                  {
                    const r = c["sdp"] || W;
                    fo = pc["Array"]["from"](Kc([r[aPaXyofEIImEwNChKOdt[v(0, -257, "Gc[R")](n[5], 8)] || "4", r[aPaXyofEIImEwNChKOdt[p(0, "hpqA", 0, 0, -36)](n[8], 8)]])), t["close"]();
                  }
                } catch {}
              })["catch"](() => 0);
            }
          })["catch"](() => 0);
          ro(f, i[n[21] % 16], n[12] % 16 * (n[34] % 16) * (n[13] % 16));
          const d = pc["getComputedStyle"](f);
          eo = pc["Array"]["from"](("" + d["color"] + d["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => pc["Number"](pc["Number"](n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), k();
        }
        return eo;
      };
      return async (n, t) => {
        const o = (n => pc["Math"]["floor"](n))((pc["Date"]["now"]() - 1682924400000) / 1e3);
        const u = new pc["Uint8Array"](new qc([o])["buffer"]);
        const e = Bc();
        const i = so(e);
        return jc(new pc["Uint8Array"]([(() => pc["Math"]["random"]())() * 256]["concat"](pc["Array"]["from"](e), pc["Array"]["from"](u), (n => n["slice"](0, 16))(pc["Array"]["from"](new pc["Uint8Array"](await Nc([t, n, o]["join"]("!") + "obfiowerehiring" + i)))["concat"](fo)), [3]))["map"](Wo));
      };
    };
  }
}]);