(window.webpackJsonp = window.webpackJsonp || []).push([
    [492], {
        1044: function(e, t, n) {
            ! function(t, n) {
                var r = function(e, t, n) {
                    "use strict";
                    var r, o;
                    if (function() {
                            var t, n = {
                                lazyClass: "lazyload",
                                loadedClass: "lazyloaded",
                                loadingClass: "lazyloading",
                                preloadClass: "lazypreload",
                                errorClass: "lazyerror",
                                autosizesClass: "lazyautosizes",
                                fastLoadedClass: "ls-is-cached",
                                iframeLoadMode: 0,
                                srcAttr: "data-src",
                                srcsetAttr: "data-srcset",
                                sizesAttr: "data-sizes",
                                minSize: 40,
                                customMedia: {},
                                init: !0,
                                expFactor: 1.5,
                                hFac: .8,
                                loadMode: 2,
                                loadHidden: !0,
                                ricTimeout: 0,
                                throttleDelay: 125
                            };
                            for (t in o = e.lazySizesConfig || e.lazysizesConfig || {}, n) t in o || (o[t] = n[t])
                        }(), !t || !t.getElementsByClassName) return {
                        init: function() {},
                        cfg: o,
                        noSupport: !0
                    };
                    var l = t.documentElement,
                        c = e.HTMLPictureElement,
                        d = "addEventListener",
                        f = "getAttribute",
                        m = e[d].bind(e),
                        h = e.setTimeout,
                        y = e.requestAnimationFrame || h,
                        v = e.requestIdleCallback,
                        z = /^picture$/i,
                        C = ["load", "error", "lazyincluded", "_lazyloaded"],
                        A = {},
                        E = Array.prototype.forEach,
                        w = function(e, t) {
                            return A[t] || (A[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), A[t].test(e[f]("class") || "") && A[t]
                        },
                        _ = function(e, t) {
                            w(e, t) || e.setAttribute("class", (e[f]("class") || "").trim() + " " + t)
                        },
                        M = function(e, t) {
                            var n;
                            (n = w(e, t)) && e.setAttribute("class", (e[f]("class") || "").replace(n, " "))
                        },
                        N = function(e, t, n) {
                            var r = n ? d : "removeEventListener";
                            n && N(e, t), C.forEach((function(n) {
                                e[r](n, t)
                            }))
                        },
                        x = function(e, n, o, l, c) {
                            var d = t.createEvent("Event");
                            return o || (o = {}), o.instance = r, d.initEvent(n, !l, !c), d.detail = o, e.dispatchEvent(d), d
                        },
                        L = function(t, n) {
                            var r;
                            !c && (r = e.picturefill || o.pf) ? (n && n.src && !t[f]("srcset") && t.setAttribute("srcset", n.src), r({
                                reevaluate: !0,
                                elements: [t]
                            })) : n && n.src && (t.src = n.src)
                        },
                        S = function(e, style) {
                            return (getComputedStyle(e, null) || {})[style]
                        },
                        W = function(e, t, n) {
                            for (n = n || e.offsetWidth; n < o.minSize && t && !e._lazysizesWidth;) n = t.offsetWidth, t = t.parentNode;
                            return n
                        },
                        B = (Me = [], Ne = [], xe = Me, Le = function() {
                            var e = xe;
                            for (xe = Me.length ? Ne : Me, we = !0, _e = !1; e.length;) e.shift()();
                            we = !1
                        }, Se = function(e, n) {
                            we && !n ? e.apply(this, arguments) : (xe.push(e), _e || (_e = !0, (t.hidden ? h : y)(Le)))
                        }, Se._lsFlush = Le, Se),
                        T = function(e, t) {
                            return t ? function() {
                                B(e)
                            } : function() {
                                var t = this,
                                    n = arguments;
                                B((function() {
                                    e.apply(t, n)
                                }))
                            }
                        },
                        F = function(e) {
                            var t, r = 0,
                                l = o.throttleDelay,
                                c = o.ricTimeout,
                                d = function() {
                                    t = !1, r = n.now(), e()
                                },
                                f = v && c > 49 ? function() {
                                    v(d, {
                                        timeout: c
                                    }), c !== o.ricTimeout && (c = o.ricTimeout)
                                } : T((function() {
                                    h(d)
                                }), !0);
                            return function(e) {
                                var o;
                                (e = !0 === e) && (c = 33), t || (t = !0, (o = l - (n.now() - r)) < 0 && (o = 0), e || o < 9 ? f() : h(f, o))
                            }
                        },
                        R = function(e) {
                            var t, r, o = 99,
                                l = function() {
                                    t = null, e()
                                },
                                c = function() {
                                    var e = n.now() - r;
                                    e < o ? h(c, o - e) : (v || l)(l)
                                };
                            return function() {
                                r = n.now(), t || (t = h(c, o))
                            }
                        },
                        $ = (ae = /^img$/i, ne = /^iframe$/i, ie = "onscroll" in e && !/(gle|ing)bot/.test(navigator.userAgent), se = 0, re = 0, oe = 0, le = -1, ce = function(e) {
                            oe--, (!e || oe < 0 || !e.target) && (oe = 0)
                        }, de = function(e) {
                            return null == te && (te = "hidden" == S(t.body, "visibility")), te || !("hidden" == S(e.parentNode, "visibility") && "hidden" == S(e, "visibility"))
                        }, ue = function(e, n) {
                            var r, o = e,
                                c = de(e);
                            for (X -= n, ee += n, Y -= n, Z += n; c && (o = o.offsetParent) && o != t.body && o != l;)(c = (S(o, "opacity") || 1) > 0) && "visible" != S(o, "overflow") && (r = o.getBoundingClientRect(), c = Z > r.left && Y < r.right && ee > r.top - 1 && X < r.bottom + 1);
                            return c
                        }, fe = function() {
                            var e, i, rect, n, c, d, m, h, y, v, z, C, A = r.elements;
                            if ((G = o.loadMode) && oe < 8 && (e = A.length)) {
                                for (i = 0, le++; i < e; i++)
                                    if (A[i] && !A[i]._lazyRace)
                                        if (!ie || r.prematureUnveil && r.prematureUnveil(A[i])) Ce(A[i]);
                                        else if ((h = A[i][f]("data-expand")) && (d = 1 * h) || (d = re), v || (v = !o.expand || o.expand < 1 ? l.clientHeight > 500 && l.clientWidth > 500 ? 500 : 370 : o.expand, r._defEx = v, z = v * o.expFactor, C = o.hFac, te = null, re < z && oe < 1 && le > 2 && G > 2 && !t.hidden ? (re = z, le = 0) : re = G > 1 && le > 1 && oe < 6 ? v : se), y !== d && (Q = innerWidth + d * C, V = innerHeight + d, m = -1 * d, y = d), rect = A[i].getBoundingClientRect(), (ee = rect.bottom) >= m && (X = rect.top) <= V && (Z = rect.right) >= m * C && (Y = rect.left) <= Q && (ee || Z || Y || X) && (o.loadHidden || de(A[i])) && (j && oe < 3 && !h && (G < 3 || le < 4) || ue(A[i], d))) {
                                    if (Ce(A[i]), c = !0, oe > 9) break
                                } else !c && j && !n && oe < 4 && le < 4 && G > 2 && (U[0] || o.preloadAfterLoad) && (U[0] || !h && (ee || Z || Y || X || "auto" != A[i][f](o.sizesAttr))) && (n = U[0] || A[i]);
                                n && !c && Ce(n)
                            }
                        }, me = F(fe), ge = function(e) {
                            var t = e.target;
                            t._lazyCache ? delete t._lazyCache : (ce(e), _(t, o.loadedClass), M(t, o.loadingClass), N(t, ye), x(t, "lazyloaded"))
                        }, he = T(ge), ye = function(e) {
                            he({
                                target: e.target
                            })
                        }, ve = function(e, t) {
                            var n = e.getAttribute("data-load-mode") || o.iframeLoadMode;
                            0 == n ? e.contentWindow.location.replace(t) : 1 == n && (e.src = t)
                        }, pe = function(source) {
                            var e, t = source[f](o.srcsetAttr);
                            (e = o.customMedia[source[f]("data-media") || source[f]("media")]) && source.setAttribute("media", e), t && source.setAttribute("srcset", t)
                        }, ze = T((function(e, t, n, r, l) {
                            var c, d, m, y, v, C;
                            (v = x(e, "lazybeforeunveil", t)).defaultPrevented || (r && (n ? _(e, o.autosizesClass) : e.setAttribute("sizes", r)), d = e[f](o.srcsetAttr), c = e[f](o.srcAttr), l && (y = (m = e.parentNode) && z.test(m.nodeName || "")), C = t.firesLoad || "src" in e && (d || c || y), v = {
                                target: e
                            }, _(e, o.loadingClass), C && (clearTimeout(J), J = h(ce, 2500), N(e, ye, !0)), y && E.call(m.getElementsByTagName("source"), pe), d ? e.setAttribute("srcset", d) : c && !y && (ne.test(e.nodeName) ? ve(e, c) : e.src = c), l && (d || y) && L(e, {
                                src: c
                            })), e._lazyRace && delete e._lazyRace, M(e, o.lazyClass), B((function() {
                                var t = e.complete && e.naturalWidth > 1;
                                C && !t || (t && _(e, o.fastLoadedClass), ge(v), e._lazyCache = !0, h((function() {
                                    "_lazyCache" in e && delete e._lazyCache
                                }), 9)), "lazy" == e.loading && oe--
                            }), !0)
                        })), Ce = function(e) {
                            if (!e._lazyRace) {
                                var t, n = ae.test(e.nodeName),
                                    r = n && (e[f](o.sizesAttr) || e[f]("sizes")),
                                    l = "auto" == r;
                                (!l && j || !n || !e[f]("src") && !e.srcset || e.complete || w(e, o.errorClass) || !w(e, o.lazyClass)) && (t = x(e, "lazyunveilread").detail, l && k.updateElem(e, !0, e.offsetWidth), e._lazyRace = !0, oe++, ze(e, t, l, r, n))
                            }
                        }, be = R((function() {
                            o.loadMode = 3, me()
                        })), Ae = function() {
                            3 == o.loadMode && (o.loadMode = 2), be()
                        }, Ee = function() {
                            j || (n.now() - K < 999 ? h(Ee, 999) : (j = !0, o.loadMode = 3, me(), m("scroll", Ae, !0)))
                        }, {
                            _: function() {
                                K = n.now(), r.elements = t.getElementsByClassName(o.lazyClass), U = t.getElementsByClassName(o.lazyClass + " " + o.preloadClass), m("scroll", me, !0), m("resize", me, !0), m("pageshow", (function(e) {
                                    if (e.persisted) {
                                        var n = t.querySelectorAll("." + o.loadingClass);
                                        n.length && n.forEach && y((function() {
                                            n.forEach((function(img) {
                                                img.complete && Ce(img)
                                            }))
                                        }))
                                    }
                                })), e.MutationObserver ? new MutationObserver(me).observe(l, {
                                    childList: !0,
                                    subtree: !0,
                                    attributes: !0
                                }) : (l[d]("DOMNodeInserted", me, !0), l[d]("DOMAttrModified", me, !0), setInterval(me, 999)), m("hashchange", me, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach((function(e) {
                                    t[d](e, me, !0)
                                })), /d$|^c/.test(t.readyState) ? Ee() : (m("load", Ee), t[d]("DOMContentLoaded", me), h(Ee, 2e4)), r.elements.length ? (fe(), B._lsFlush()) : me()
                            },
                            checkElems: me,
                            unveil: Ce,
                            _aLSL: Ae
                        }),
                        k = (H = T((function(e, t, n, r) {
                            var o, i, l;
                            if (e._lazysizesWidth = r, r += "px", e.setAttribute("sizes", r), z.test(t.nodeName || ""))
                                for (i = 0, l = (o = t.getElementsByTagName("source")).length; i < l; i++) o[i].setAttribute("sizes", r);
                            n.detail.dataAttr || L(e, n.detail)
                        })), P = function(e, t, n) {
                            var r, o = e.parentNode;
                            o && (n = W(e, o, n), (r = x(e, "lazybeforesizes", {
                                width: n,
                                dataAttr: !!t
                            })).defaultPrevented || (n = r.detail.width) && n !== e._lazysizesWidth && H(e, o, r, n))
                        }, I = R((function() {
                            var i, e = D.length;
                            if (e)
                                for (i = 0; i < e; i++) P(D[i])
                        })), {
                            _: function() {
                                D = t.getElementsByClassName(o.autosizesClass), m("resize", I)
                            },
                            checkElems: I,
                            updateElem: P
                        }),
                        O = function() {
                            !O.i && t.getElementsByClassName && (O.i = !0, k._(), $._())
                        };
                    var D, H, P, I;
                    var U, j, J, G, K, Q, V, X, Y, Z, ee, te, ae, ne, ie, se, re, oe, le, ce, de, ue, fe, me, ge, he, ye, ve, pe, ze, Ce, be, Ae, Ee;
                    var we, _e, Me, Ne, xe, Le, Se;
                    return h((function() {
                        o.init && O()
                    })), r = {
                        cfg: o,
                        autoSizer: k,
                        loader: $,
                        init: O,
                        uP: L,
                        aC: _,
                        rC: M,
                        hC: w,
                        fire: x,
                        gW: W,
                        rAF: B
                    }
                }(t, t.document, Date);
                t.lazySizes = r, e.exports && (e.exports = r)
            }("undefined" != typeof window ? window : {})
        },
        1542: function(e, t, n) {
            "use strict";
            n.r(t);
            n(1044);
            var r = {
                    name: "UpSLazyImg",
                    inheritAttrs: !1,
                    props: {
                        imgClass: {
                            type: [String, Object, Array],
                            default: ""
                        }
                    },
                    computed: {
                        getEmptySrc() {
                            return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ".concat(this.$attrs.width || 1, " ").concat(this.$attrs.height || 1, "'%3E%3C/svg%3E")
                        }
                    }
                },
                o = n(0),
                component = Object(o.a)(r, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("figure", [t("img", e._b({
                        class: ["lazyload", e.imgClass],
                        attrs: {
                            src: e.getEmptySrc
                        }
                    }, "img", e.$attrs, !1))])
                }), [], !1, null, null, null);
            t.default = component.exports
        }
    }
]);
//# sourceMappingURL=https://upwork-usw2-staging-assets-jsmaps.s3.us-west-2.amazonaws.com/Brontes/up-s-lazy-img.4af35554.js.map