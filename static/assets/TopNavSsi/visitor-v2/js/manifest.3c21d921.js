(function(e) {
    function n(n) {
        for (var t, u, i = n[0], c = n[1], s = n[2], l = 0, f = []; l < i.length; l++) u = i[l], Object.prototype.hasOwnProperty.call(o, u) && o[u] && f.push(o[u][0]), o[u] = 0;
        for (t in c) Object.prototype.hasOwnProperty.call(c, t) && (e[t] = c[t]);
        p && p(n);
        while (f.length) f.shift()();
        return a.push.apply(a, s || []), r()
    }

    function r() {
        for (var e, n = 0; n < a.length; n++) {
            for (var r = a[n], t = !0, u = 1; u < r.length; u++) {
                var c = r[u];
                0 !== o[c] && (t = !1)
            }
            t && (a.splice(n--, 1), e = i(i.s = r[0]))
        }
        return e
    }
    var t = {},
        o = {
            manifest: 0
        },
        a = [];

    function u(e) {
        return i.p + "js/" + ({
            "locale-banner": "locale-banner",
            "subnav-item-dropdown": "subnav-item-dropdown",
            "subnav-vs-items": "subnav-vs-items"
        }[e] || e) + "." + {
            "chunk-2d0e4a7d": "afb2cd1c",
            "chunk-2d209b31": "b4b3ab67",
            "chunk-2d225c26": "15f08de3",
            "chunk-2d230113": "4a32d2b3",
            "chunk-40174c48": "1ff0ac2e",
            "chunk-fbdd3f7c": "18489b85",
            "locale-banner": "94ee581b",
            "subnav-item-dropdown": "377ce978",
            "subnav-vs-items": "b653e9c1"
        }[e] + ".js"
    }

    function i(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }
    i.e = function(e) {
        var n = [],
            r = o[e];
        if (0 !== r)
            if (r) n.push(r[2]);
            else {
                var t = new Promise((function(n, t) {
                    r = o[e] = [n, t]
                }));
                n.push(r[2] = t);
                var a, c = document.createElement("script");
                c.charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.src = u(e);
                var s = new Error;
                a = function(n) {
                    c.onerror = c.onload = null, clearTimeout(l);
                    var r = o[e];
                    if (0 !== r) {
                        if (r) {
                            var t = n && ("load" === n.type ? "missing" : n.type),
                                a = n && n.target && n.target.src;
                            s.message = "Loading chunk " + e + " failed.\n(" + t + ": " + a + ")", s.name = "ChunkLoadError", s.type = t, s.request = a, r[1](s)
                        }
                        o[e] = void 0
                    }
                };
                var l = setTimeout((function() {
                    a({
                        type: "timeout",
                        target: c
                    })
                }), 12e4);
                c.onerror = c.onload = a, document.head.appendChild(c)
            }
        return Promise.all(n)
    }, i.m = e, i.c = t, i.d = function(e, n, r) {
        i.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: r
        })
    }, i.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(e, n) {
        if (1 & n && (e = i(e)), 8 & n) return e;
        if (4 & n && "object" === typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (i.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var t in e) i.d(r, t, function(n) {
                return e[n]
            }.bind(null, t));
        return r
    }, i.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return i.d(n, "a", n), n
    }, i.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, i.p = "https://www.upwork.com/static/assets/TopNavSsi/visitor-v2/", i.oe = function(e) {
        throw console.error(e), e
    };
    var c = window["wpJsonpMicroapp_visitor-v2"] = window["wpJsonpMicroapp_visitor-v2"] || [],
        s = c.push.bind(c);
    c.push = n, c = c.slice();
    for (var l = 0; l < c.length; l++) n(c[l]);
    var p = s;
    r()
})([]);
//# sourceMappingURL=https://upwork-usw2-staging-assets-jsmaps.s3.us-west-2.amazonaws.com/TopNavSsi/visitor-v2/js/manifest.3c21d921.js.map