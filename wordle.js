// Wordle took the world by storm, and when I found out that it was just a game a man made for his wife, it inspired me.

// I still don't understand any of this whatsoever, but it's interesting \\

!(function (d) {
  function x() {
    var f, a;
    if ((a = d.crypto || d.msCrypto)) a = a.getRandomValues(new Uint8Array(18));
    else
      for (a = []; 18 > a.length; )
        a.push((256 * Math.random()) ^ (255 & (f = f || +new Date()))),
          (f = Math.floor(f / 256));
    return btoa(String.fromCharCode.apply(String, a))
      .replace(/\+/g, "-")
      .replace(/\//g, "_");
  }
  var r,
    t,
    p,
    B,
    l,
    q,
    u = [],
    m = {
      pv_id: "",
      ctx_id: "",
      intra: !1,
      force_xhr: !1,
      store_last_response: !1,
    },
    C =
      "object" == typeof d.navigator &&
      "string" == typeof d.navigator.userAgent &&
      /iP(ad|hone|od)/.test(d.navigator.userAgent),
    y = "object" == typeof d.navigator && d.navigator.sendBeacon,
    D = y ? (C ? "xhr_ios" : "beacon") : "xhr";
  if (d.nyt_et)
    try {
      console.warn("et2 snippet should only load once per page");
    } catch (f) {}
  else
    (d.nyt_et = function () {
      function f(v) {
        var b, g, k, n, e;
        u.length &&
          ((b = r + "track"),
          (g = JSON.stringify(u)),
          (k = m.force_xhr),
          (n = m.store_last_response),
          !k && ("beacon" === D || (y && v))
            ? ((k = d.navigator.sendBeacon(b, g)), n && (q = k))
            : ((e =
                "undefined" != typeof XMLHttpRequest
                  ? new XMLHttpRequest()
                  : new ActiveXObject("Microsoft.XMLHTTP")).open("POST", b),
              (e.withCredentials = !0),
              e.setRequestHeader("Accept", "*/*"),
              "string" == typeof g
                ? e.setRequestHeader(
                    "Content-Type",
                    "text/plain;charset\x3dUTF-8"
                  )
                : "[object Blob]" === {}.toString.call(g) &&
                  g.type &&
                  e.setRequestHeader("Content-Type", g.type),
              n &&
                !e.onload &&
                ((e.onload = function () {
                  q = e.response;
                }),
                (e.onerror = function (z) {
                  q = !1;
                })),
              e.send(g)),
          (u.length = 0),
          clearTimeout(l),
          (l = null));
      }
      var a,
        A,
        w,
        c = arguments;
      if (
        "string" == typeof c[0] &&
        /init/.test(c[0]) &&
        ((m = (function (v, b) {
          var g = "",
            k = "",
            n = !1,
            e = !1,
            z = !1;
          if (
            "string" == typeof v &&
            "init" == v &&
            "object" == typeof b &&
            ("boolean" == typeof b.intranet && b.intranet && (n = !0),
            "boolean" == typeof b.force_xhr && b.force_xhr && (e = !0),
            "boolean" == typeof b.store_last_response &&
              b.store_last_response &&
              (z = !0),
            "string" == typeof b.pv_id_override &&
              "string" == typeof b.ctx_id_override)
          )
            if (24 <= b.pv_id_override.length && 24 <= b.ctx_id_override.length)
              (g = b.pv_id_override), (k = b.ctx_id_override);
            else
              try {
                console.warn("override id(s) must be \x3e\x3d 24 chars long");
              } catch (E) {}
          return {
            pv_id: g,
            ctx_id: k,
            intra: n,
            store_last_response: z,
            force_xhr: e,
          };
        })(c[0], c[3])),
        (p = m.pv_id || x()),
        "init" == c[0] && !t)
      ) {
        if (
          ((t = m.ctx_id || x()),
          "string" != typeof c[1] || !/^http/.test(c[1]))
        )
          throw Error("init must include an et host url");
        if (
          ((r = String(c[1]).replace(/([^\/])$/, "$1/")),
          "string" != typeof c[2])
        )
          throw Error("init must include a source app name");
        B = c[2];
      }
      var h = c.length - 1;
      (a = c[h] && "object" == typeof c[h] ? c[h] : a) || /init/.test(c[0])
        ? a &&
          !a.subject &&
          console.warn("event data {} must include a subject")
        : console.warn(
            "when invoked without 'init' or 'pageinit', nyt_et() must include a event data"
          );
      r &&
        a &&
        a.subject &&
        ((h = a.subject),
        delete a.subject,
        (w = "page_exit" == h || "ob_click" == (a.eventData || {}).type),
        (A = "page" == h || "page_soft" == h ? p : x()),
        u.push({
          context_id: t,
          pageview_id: p,
          event_id: A,
          client_lib: "v1.3.0",
          sourceApp: B,
          intranet: m.intra ? 1 : void 0,
          subject: h,
          how: w && C && y ? "beacon_ios" : D,
          client_ts: +new Date(),
          data: JSON.parse(JSON.stringify(a)),
        }),
        "send" == c[0] || A == p || w
          ? f(w)
          : ("soon" == c[0] && (clearTimeout(l), (l = setTimeout(f, 200))),
            (l = l || setTimeout(f, 5500))));
    }),
      (d.nyt_et.get_pageview_id = function () {
        return p;
      }),
      (d.nyt_et.get_context_id = function () {
        return t;
      }),
      (d.nyt_et.get_host = function () {
        return r;
      }),
      (d.nyt_et.get_last_send_response = function () {
        var f = q;
        return f && (q = null), f;
      });
})(window);

var event = google_tag_manager["rm"]["2703797"](199);
event.subject = "ab_expose";
event.gtm = google_tag_manager["rm"]["2703797"](200);
(function () {
  nyt_et("soon", event);
})();
dataLayer.push({ abtest: null });
