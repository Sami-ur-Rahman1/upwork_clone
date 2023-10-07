(window.webpackJsonp = window.webpackJsonp || []).push([
    [499], {
        1477: function(t, e, r) {
            "undefined" != typeof navigator && (t.exports = function() {
                "use strict";
                var n = "http://www.w3.org/2000/svg",
                    h = "",
                    o = !1,
                    l = -999999,
                    f = function(t) {
                        o = !!t
                    },
                    d = function() {
                        return o
                    },
                    m = function(t) {
                        h = t
                    },
                    c = function() {
                        return h
                    };

                function y(t) {
                    return document.createElement(t)
                }

                function v(t, e) {
                    var i, r, n = t.length;
                    for (i = 0; i < n; i += 1)
                        for (var h in r = t[i].prototype) Object.prototype.hasOwnProperty.call(r, h) && (e.prototype[h] = r[h])
                }

                function _(t) {
                    function e() {}
                    return e.prototype = t, e
                }
                var k = function() {
                        function t(t) {
                            this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
                        }
                        return t.prototype = {
                                addAudio: function(audio) {
                                    this.audios.push(audio)
                                },
                                pause: function() {
                                    var i, t = this.audios.length;
                                    for (i = 0; i < t; i += 1) this.audios[i].pause()
                                },
                                resume: function() {
                                    var i, t = this.audios.length;
                                    for (i = 0; i < t; i += 1) this.audios[i].resume()
                                },
                                setRate: function(t) {
                                    var i, e = this.audios.length;
                                    for (i = 0; i < e; i += 1) this.audios[i].setRate(t)
                                },
                                createAudio: function(t) {
                                    return this.audioFactory ? this.audioFactory(t) : window.Howl ? new window.Howl({
                                        src: [t]
                                    }) : {
                                        isPlaying: !1,
                                        play: function() {
                                            this.isPlaying = !0
                                        },
                                        seek: function() {
                                            this.isPlaying = !1
                                        },
                                        playing: function() {},
                                        rate: function() {},
                                        setVolume: function() {}
                                    }
                                },
                                setAudioFactory: function(t) {
                                    this.audioFactory = t
                                },
                                setVolume: function(t) {
                                    this._volume = t, this._updateVolume()
                                },
                                mute: function() {
                                    this._isMuted = !0, this._updateVolume()
                                },
                                unmute: function() {
                                    this._isMuted = !1, this._updateVolume()
                                },
                                getVolume: function() {
                                    return this._volume
                                },
                                _updateVolume: function() {
                                    var i, t = this.audios.length;
                                    for (i = 0; i < t; i += 1) this.audios[i].volume(this._volume * (this._isMuted ? 0 : 1))
                                }
                            },
                            function() {
                                return new t
                            }
                    }(),
                    A = function() {
                        function t(t, e) {
                            var r, i = 0,
                                n = [];
                            switch (t) {
                                case "int16":
                                case "uint8c":
                                    r = 1;
                                    break;
                                default:
                                    r = 1.1
                            }
                            for (i = 0; i < e; i += 1) n.push(r);
                            return n
                        }

                        function e(e, r) {
                            return "float32" === e ? new Float32Array(r) : "int16" === e ? new Int16Array(r) : "uint8c" === e ? new Uint8ClampedArray(r) : t(e, r)
                        }
                        return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? e : t
                    }();

                function P(t) {
                    return Array.apply(null, {
                        length: t
                    })
                }

                function S(t) {
                    return S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, S(t)
                }
                var w = !0,
                    x = null,
                    D = null,
                    C = "",
                    M = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                    F = Math.pow,
                    T = Math.sqrt,
                    E = Math.floor,
                    I = (Math.max, Math.min),
                    L = {};
                (function() {
                    var i, t = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                        e = t.length;
                    for (i = 0; i < e; i += 1) L[t[i]] = Math[t[i]]
                })(), L.random = Math.random, L.abs = function(t) {
                    if ("object" === S(t) && t.length) {
                        var i, e = P(t.length),
                            r = t.length;
                        for (i = 0; i < r; i += 1) e[i] = Math.abs(t[i]);
                        return e
                    }
                    return Math.abs(t)
                };
                var V = 150,
                    z = Math.PI / 180,
                    R = .5519;

                function N(t) {}

                function O(t, e, r, n) {
                    this.type = t, this.currentTime = e, this.totalTime = r, this.direction = n < 0 ? -1 : 1
                }

                function B(t, e) {
                    this.type = t, this.direction = e < 0 ? -1 : 1
                }

                function j(t, e, r, n) {
                    this.type = t, this.currentLoop = r, this.totalLoops = e, this.direction = n < 0 ? -1 : 1
                }

                function W(t, e, r) {
                    this.type = t, this.firstFrame = e, this.totalFrames = r
                }

                function X(t, e) {
                    this.type = t, this.target = e
                }

                function H(t, e) {
                    this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
                }

                function Y(t) {
                    this.type = "configError", this.nativeError = t
                }
                var G, J = (G = 0, function() {
                    return C + "__lottie_element_" + (G += 1)
                });

                function K(t, s, e) {
                    var r, g, b, i, n, p, q, h;
                    switch (p = e * (1 - s), q = e * (1 - (n = 6 * t - (i = Math.floor(6 * t))) * s), h = e * (1 - (1 - n) * s), i % 6) {
                        case 0:
                            r = e, g = h, b = p;
                            break;
                        case 1:
                            r = q, g = e, b = p;
                            break;
                        case 2:
                            r = p, g = e, b = h;
                            break;
                        case 3:
                            r = p, g = q, b = e;
                            break;
                        case 4:
                            r = h, g = p, b = e;
                            break;
                        case 5:
                            r = e, g = p, b = q
                    }
                    return [r, g, b]
                }

                function U(t, g, b) {
                    var e, r = Math.max(t, g, b),
                        n = Math.min(t, g, b),
                        h = r - n,
                        s = 0 === r ? 0 : h / r,
                        o = r / 255;
                    switch (r) {
                        case n:
                            e = 0;
                            break;
                        case t:
                            e = g - b + h * (g < b ? 6 : 0), e /= 6 * h;
                            break;
                        case g:
                            e = b - t + 2 * h, e /= 6 * h;
                            break;
                        case b:
                            e = t - g + 4 * h, e /= 6 * h
                    }
                    return [e, s, o]
                }

                function Z(t, e) {
                    var r = U(255 * t[0], 255 * t[1], 255 * t[2]);
                    return r[1] += e, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), K(r[0], r[1], r[2])
                }

                function Q(t, e) {
                    var r = U(255 * t[0], 255 * t[1], 255 * t[2]);
                    return r[2] += e, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), K(r[0], r[1], r[2])
                }

                function $(t, e) {
                    var r = U(255 * t[0], 255 * t[1], 255 * t[2]);
                    return r[0] += e / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), K(r[0], r[1], r[2])
                }! function() {
                    var i, t, e = [];
                    for (i = 0; i < 256; i += 1) t = i.toString(16), e[i] = 1 === t.length ? "0" + t : t
                }();
                var tt = function(t) {
                        w = !!t
                    },
                    et = function() {
                        return w
                    },
                    it = function(t) {
                        x = t
                    },
                    st = function() {
                        return x
                    },
                    at = function() {
                        return D
                    },
                    nt = function(t) {
                        V = t
                    },
                    ht = function() {
                        return V
                    },
                    ot = function(t) {
                        C = t
                    };

                function lt(t) {
                    return document.createElementNS(n, t)
                }

                function pt(t) {
                    return pt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, pt(t)
                }
                var ft = function() {
                        var t, e, r = 1,
                            n = [],
                            h = {
                                onmessage: function() {},
                                postMessage: function(path) {
                                    t({
                                        data: path
                                    })
                                }
                            },
                            o = {
                                postMessage: function(data) {
                                    h.onmessage({
                                        data: data
                                    })
                                }
                            };

                        function l(e) {
                            if (window.Worker && window.Blob && d()) {
                                var r = new Blob(["var _workerSelf = self; self.onmessage = ", e.toString()], {
                                        type: "text/javascript"
                                    }),
                                    n = URL.createObjectURL(r);
                                return new Worker(n)
                            }
                            return t = e, h
                        }

                        function f() {
                            e || (e = l((function(t) {
                                function e() {
                                    function t(e, r) {
                                        var l, i, f, d, m, c, y = e.length;
                                        for (i = 0; i < y; i += 1)
                                            if ("ks" in (l = e[i]) && !l.completed) {
                                                if (l.completed = !0, l.hasMask) {
                                                    var v = l.masksProperties;
                                                    for (d = v.length, f = 0; f < d; f += 1)
                                                        if (v[f].pt.k.i) o(v[f].pt.k);
                                                        else
                                                            for (c = v[f].pt.k.length, m = 0; m < c; m += 1) v[f].pt.k[m].s && o(v[f].pt.k[m].s[0]), v[f].pt.k[m].e && o(v[f].pt.k[m].e[0])
                                                }
                                                0 === l.ty ? (l.layers = n(l.refId, r), t(l.layers, r)) : 4 === l.ty ? h(l.shapes) : 5 === l.ty && k(l)
                                            }
                                    }

                                    function e(e, r) {
                                        if (e) {
                                            var i = 0,
                                                h = e.length;
                                            for (i = 0; i < h; i += 1) 1 === e[i].t && (e[i].data.layers = n(e[i].data.refId, r), t(e[i].data.layers, r))
                                        }
                                    }

                                    function r(t, e) {
                                        for (var i = 0, r = e.length; i < r;) {
                                            if (e[i].id === t) return e[i];
                                            i += 1
                                        }
                                        return null
                                    }

                                    function n(t, e) {
                                        var n = r(t, e);
                                        return n ? n.layers.__used ? JSON.parse(JSON.stringify(n.layers)) : (n.layers.__used = !0, n.layers) : null
                                    }

                                    function h(t) {
                                        var i, e, r;
                                        for (i = t.length - 1; i >= 0; i -= 1)
                                            if ("sh" === t[i].ty)
                                                if (t[i].ks.k.i) o(t[i].ks.k);
                                                else
                                                    for (r = t[i].ks.k.length, e = 0; e < r; e += 1) t[i].ks.k[e].s && o(t[i].ks.k[e].s[0]), t[i].ks.k[e].e && o(t[i].ks.k[e].e[0]);
                                        else "gr" === t[i].ty && h(t[i].it)
                                    }

                                    function o(path) {
                                        var i, t = path.i.length;
                                        for (i = 0; i < t; i += 1) path.i[i][0] += path.v[i][0], path.i[i][1] += path.v[i][1], path.o[i][0] += path.v[i][0], path.o[i][1] += path.v[i][1]
                                    }

                                    function l(t, e) {
                                        var r = e ? e.split(".") : [100, 100, 100];
                                        return t[0] > r[0] || !(r[0] > t[0]) && (t[1] > r[1] || !(r[1] > t[1]) && (t[2] > r[2] || !(r[2] > t[2]) && null))
                                    }
                                    var f, d = function() {
                                            var t = [4, 4, 14];

                                            function e(t) {
                                                var e = t.t.d;
                                                t.t.d = {
                                                    k: [{
                                                        s: e,
                                                        t: 0
                                                    }]
                                                }
                                            }

                                            function r(t) {
                                                var i, r = t.length;
                                                for (i = 0; i < r; i += 1) 5 === t[i].ty && e(t[i])
                                            }
                                            return function(e) {
                                                if (l(t, e.v) && (r(e.layers), e.assets)) {
                                                    var i, n = e.assets.length;
                                                    for (i = 0; i < n; i += 1) e.assets[i].layers && r(e.assets[i].layers)
                                                }
                                            }
                                        }(),
                                        m = (f = [4, 7, 99], function(t) {
                                            if (t.chars && !l(f, t.v)) {
                                                var i, e = t.chars.length;
                                                for (i = 0; i < e; i += 1) {
                                                    var r = t.chars[i];
                                                    r.data && r.data.shapes && (h(r.data.shapes), r.data.ip = 0, r.data.op = 99999, r.data.st = 0, r.data.sr = 1, r.data.ks = {
                                                        p: {
                                                            k: [0, 0],
                                                            a: 0
                                                        },
                                                        s: {
                                                            k: [100, 100],
                                                            a: 0
                                                        },
                                                        a: {
                                                            k: [0, 0],
                                                            a: 0
                                                        },
                                                        r: {
                                                            k: 0,
                                                            a: 0
                                                        },
                                                        o: {
                                                            k: 100,
                                                            a: 0
                                                        }
                                                    }, t.chars[i].t || (r.data.shapes.push({
                                                        ty: "no"
                                                    }), r.data.shapes[0].it.push({
                                                        p: {
                                                            k: [0, 0],
                                                            a: 0
                                                        },
                                                        s: {
                                                            k: [100, 100],
                                                            a: 0
                                                        },
                                                        a: {
                                                            k: [0, 0],
                                                            a: 0
                                                        },
                                                        r: {
                                                            k: 0,
                                                            a: 0
                                                        },
                                                        o: {
                                                            k: 100,
                                                            a: 0
                                                        },
                                                        sk: {
                                                            k: 0,
                                                            a: 0
                                                        },
                                                        sa: {
                                                            k: 0,
                                                            a: 0
                                                        },
                                                        ty: "tr"
                                                    })))
                                                }
                                            }
                                        }),
                                        c = function() {
                                            var t = [5, 7, 15];

                                            function e(t) {
                                                var e = t.t.p;
                                                "number" == typeof e.a && (e.a = {
                                                    a: 0,
                                                    k: e.a
                                                }), "number" == typeof e.p && (e.p = {
                                                    a: 0,
                                                    k: e.p
                                                }), "number" == typeof e.r && (e.r = {
                                                    a: 0,
                                                    k: e.r
                                                })
                                            }

                                            function r(t) {
                                                var i, r = t.length;
                                                for (i = 0; i < r; i += 1) 5 === t[i].ty && e(t[i])
                                            }
                                            return function(e) {
                                                if (l(t, e.v) && (r(e.layers), e.assets)) {
                                                    var i, n = e.assets.length;
                                                    for (i = 0; i < n; i += 1) e.assets[i].layers && r(e.assets[i].layers)
                                                }
                                            }
                                        }(),
                                        y = function() {
                                            var t = [4, 1, 9];

                                            function e(t) {
                                                var i, r, n, h = t.length;
                                                for (i = 0; i < h; i += 1)
                                                    if ("gr" === t[i].ty) e(t[i].it);
                                                    else if ("fl" === t[i].ty || "st" === t[i].ty)
                                                    if (t[i].c.k && t[i].c.k[0].i)
                                                        for (n = t[i].c.k.length, r = 0; r < n; r += 1) t[i].c.k[r].s && (t[i].c.k[r].s[0] /= 255, t[i].c.k[r].s[1] /= 255, t[i].c.k[r].s[2] /= 255, t[i].c.k[r].s[3] /= 255), t[i].c.k[r].e && (t[i].c.k[r].e[0] /= 255, t[i].c.k[r].e[1] /= 255, t[i].c.k[r].e[2] /= 255, t[i].c.k[r].e[3] /= 255);
                                                    else t[i].c.k[0] /= 255, t[i].c.k[1] /= 255, t[i].c.k[2] /= 255, t[i].c.k[3] /= 255
                                            }

                                            function r(t) {
                                                var i, r = t.length;
                                                for (i = 0; i < r; i += 1) 4 === t[i].ty && e(t[i].shapes)
                                            }
                                            return function(e) {
                                                if (l(t, e.v) && (r(e.layers), e.assets)) {
                                                    var i, n = e.assets.length;
                                                    for (i = 0; i < n; i += 1) e.assets[i].layers && r(e.assets[i].layers)
                                                }
                                            }
                                        }(),
                                        v = function() {
                                            var t = [4, 4, 18];

                                            function e(t) {
                                                var i, r, n;
                                                for (i = t.length - 1; i >= 0; i -= 1)
                                                    if ("sh" === t[i].ty)
                                                        if (t[i].ks.k.i) t[i].ks.k.c = t[i].closed;
                                                        else
                                                            for (n = t[i].ks.k.length, r = 0; r < n; r += 1) t[i].ks.k[r].s && (t[i].ks.k[r].s[0].c = t[i].closed), t[i].ks.k[r].e && (t[i].ks.k[r].e[0].c = t[i].closed);
                                                else "gr" === t[i].ty && e(t[i].it)
                                            }

                                            function r(t) {
                                                var r, i, n, h, o, l, f = t.length;
                                                for (i = 0; i < f; i += 1) {
                                                    if ((r = t[i]).hasMask) {
                                                        var d = r.masksProperties;
                                                        for (h = d.length, n = 0; n < h; n += 1)
                                                            if (d[n].pt.k.i) d[n].pt.k.c = d[n].cl;
                                                            else
                                                                for (l = d[n].pt.k.length, o = 0; o < l; o += 1) d[n].pt.k[o].s && (d[n].pt.k[o].s[0].c = d[n].cl), d[n].pt.k[o].e && (d[n].pt.k[o].e[0].c = d[n].cl)
                                                    }
                                                    4 === r.ty && e(r.shapes)
                                                }
                                            }
                                            return function(e) {
                                                if (l(t, e.v) && (r(e.layers), e.assets)) {
                                                    var i, n = e.assets.length;
                                                    for (i = 0; i < n; i += 1) e.assets[i].layers && r(e.assets[i].layers)
                                                }
                                            }
                                        }();

                                    function _(r) {
                                        r.__complete || (y(r), d(r), m(r), c(r), v(r), t(r.layers, r.assets), e(r.chars, r.assets), r.__complete = !0)
                                    }

                                    function k(data) {
                                        0 === data.t.a.length && data.t.p
                                    }
                                    var A = {};
                                    return A.completeData = _, A.checkColors = y, A.checkChars = m, A.checkPathProperties = c, A.checkShapes = v, A.completeLayers = t, A
                                }
                                if (o.dataManager || (o.dataManager = e()), o.assetLoader || (o.assetLoader = function() {
                                        function t(t) {
                                            var e = t.getResponseHeader("content-type");
                                            return e && "json" === t.responseType && -1 !== e.indexOf("json") || t.response && "object" === pt(t.response) ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
                                        }

                                        function e(path, e, r, n) {
                                            var h, o = new XMLHttpRequest;
                                            try {
                                                o.responseType = "json"
                                            } catch (t) {}
                                            o.onreadystatechange = function() {
                                                if (4 === o.readyState)
                                                    if (200 === o.status) h = t(o), r(h);
                                                    else try {
                                                        h = t(o), r(h)
                                                    } catch (t) {
                                                        n && n(t)
                                                    }
                                            };
                                            try {
                                                o.open(["G", "E", "T"].join(""), path, !0)
                                            } catch (t) {
                                                o.open(["G", "E", "T"].join(""), e + "/" + path, !0)
                                            }
                                            o.send()
                                        }
                                        return {
                                            load: e
                                        }
                                    }()), "loadAnimation" === t.data.type) o.assetLoader.load(t.data.path, t.data.fullPath, (function(data) {
                                    o.dataManager.completeData(data), o.postMessage({
                                        id: t.data.id,
                                        payload: data,
                                        status: "success"
                                    })
                                }), (function() {
                                    o.postMessage({
                                        id: t.data.id,
                                        status: "error"
                                    })
                                }));
                                else if ("complete" === t.data.type) {
                                    var r = t.data.animation;
                                    o.dataManager.completeData(r), o.postMessage({
                                        id: t.data.id,
                                        payload: r,
                                        status: "success"
                                    })
                                } else "loadData" === t.data.type && o.assetLoader.load(t.data.path, t.data.fullPath, (function(data) {
                                    o.postMessage({
                                        id: t.data.id,
                                        payload: data,
                                        status: "success"
                                    })
                                }), (function() {
                                    o.postMessage({
                                        id: t.data.id,
                                        status: "error"
                                    })
                                }))
                            })), e.onmessage = function(t) {
                                var data = t.data,
                                    e = data.id,
                                    r = n[e];
                                n[e] = null, "success" === data.status ? r.onComplete(data.payload) : r.onError && r.onError()
                            })
                        }

                        function m(t, e) {
                            var h = "processId_" + (r += 1);
                            return n[h] = {
                                onComplete: t,
                                onError: e
                            }, h
                        }

                        function c(path, t, r) {
                            f();
                            var n = m(t, r);
                            e.postMessage({
                                type: "loadAnimation",
                                path: path,
                                fullPath: window.location.origin + window.location.pathname,
                                id: n
                            })
                        }

                        function y(path, t, r) {
                            f();
                            var n = m(t, r);
                            e.postMessage({
                                type: "loadData",
                                path: path,
                                fullPath: window.location.origin + window.location.pathname,
                                id: n
                            })
                        }

                        function v(t, r, n) {
                            f();
                            var h = m(r, n);
                            e.postMessage({
                                type: "complete",
                                animation: t,
                                id: h
                            })
                        }
                        return {
                            loadAnimation: c,
                            loadData: y,
                            completeAnimation: v
                        }
                    }(),
                    mt = function() {
                        var t = function() {
                            var canvas = y("canvas");
                            canvas.width = 1, canvas.height = 1;
                            var t = canvas.getContext("2d");
                            return t.fillStyle = "rgba(0,0,0,0)", t.fillRect(0, 0, 1, 1), canvas
                        }();

                        function e() {
                            this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                        }

                        function r() {
                            this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                        }

                        function n(t, e, r) {
                            var path = "";
                            if (t.e) path = t.p;
                            else if (e) {
                                var n = t.p; - 1 !== n.indexOf("images/") && (n = n.split("/")[1]), path = e + n
                            } else path = r, path += t.u ? t.u : "", path += t.p;
                            return path
                        }

                        function h(img) {
                            var t = 0,
                                e = setInterval(function() {
                                    (img.getBBox().width || t > 500) && (this._imageLoaded(), clearInterval(e)), t += 1
                                }.bind(this), 50)
                        }

                        function o(e) {
                            var path = n(e, this.assetsPath, this.path),
                                img = lt("image");
                            M ? this.testImageLoaded(img) : img.addEventListener("load", this._imageLoaded, !1), img.addEventListener("error", function() {
                                r.img = t, this._imageLoaded()
                            }.bind(this), !1), img.setAttributeNS("http://www.w3.org/1999/xlink", "href", path), this._elementHelper.append ? this._elementHelper.append(img) : this._elementHelper.appendChild(img);
                            var r = {
                                img: img,
                                assetData: e
                            };
                            return r
                        }

                        function l(e) {
                            var path = n(e, this.assetsPath, this.path),
                                img = y("img");
                            img.crossOrigin = "anonymous", img.addEventListener("load", this._imageLoaded, !1), img.addEventListener("error", function() {
                                r.img = t, this._imageLoaded()
                            }.bind(this), !1), img.src = path;
                            var r = {
                                img: img,
                                assetData: e
                            };
                            return r
                        }

                        function f(data) {
                            var t = {
                                    assetData: data
                                },
                                path = n(data, this.assetsPath, this.path);
                            return ft.loadData(path, function(e) {
                                t.img = e, this._footageLoaded()
                            }.bind(this), function() {
                                t.img = {}, this._footageLoaded()
                            }.bind(this)), t
                        }

                        function d(t, e) {
                            var i;
                            this.imagesLoadedCb = e;
                            var r = t.length;
                            for (i = 0; i < r; i += 1) t[i].layers || (t[i].t && "seq" !== t[i].t ? 3 === t[i].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[i]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[i]))))
                        }

                        function m(path) {
                            this.path = path || ""
                        }

                        function c(path) {
                            this.assetsPath = path || ""
                        }

                        function v(t) {
                            for (var i = 0, e = this.images.length; i < e;) {
                                if (this.images[i].assetData === t) return this.images[i].img;
                                i += 1
                            }
                            return null
                        }

                        function _() {
                            this.imagesLoadedCb = null, this.images.length = 0
                        }

                        function k() {
                            return this.totalImages === this.loadedAssets
                        }

                        function A() {
                            return this.totalFootages === this.loadedFootagesCount
                        }

                        function P(t, e) {
                            "svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                        }

                        function S() {
                            this._imageLoaded = e.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = h.bind(this), this.createFootageData = f.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
                        }
                        return S.prototype = {
                            loadAssets: d,
                            setAssetsPath: c,
                            setPath: m,
                            loadedImages: k,
                            loadedFootages: A,
                            destroy: _,
                            getAsset: v,
                            createImgData: l,
                            createImageData: o,
                            imageLoaded: e,
                            footageLoaded: r,
                            setCacheType: P
                        }, S
                    }();

                function ct() {}
                ct.prototype = {
                    triggerEvent: function(t, e) {
                        if (this._cbs[t])
                            for (var r = this._cbs[t], i = 0; i < r.length; i += 1) r[i](e)
                    },
                    addEventListener: function(t, e) {
                        return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
                            function() {
                                this.removeEventListener(t, e)
                            }.bind(this)
                    },
                    removeEventListener: function(t, e) {
                        if (e) {
                            if (this._cbs[t]) {
                                for (var i = 0, r = this._cbs[t].length; i < r;) this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), i -= 1, r -= 1), i += 1;
                                this._cbs[t].length || (this._cbs[t] = null)
                            }
                        } else this._cbs[t] = null
                    }
                };
                var ut = function() {
                        function t(t) {
                            for (var line, e = t.split("\r\n"), r = {}, n = 0, i = 0; i < e.length; i += 1) 2 === (line = e[i].split(":")).length && (r[line[0]] = line[1].trim(), n += 1);
                            if (0 === n) throw new Error;
                            return r
                        }
                        return function(e) {
                            for (var r = [], i = 0; i < e.length; i += 1) {
                                var n = e[i],
                                    h = {
                                        time: n.tm,
                                        duration: n.dr
                                    };
                                try {
                                    h.payload = JSON.parse(e[i].cm)
                                } catch (r) {
                                    try {
                                        h.payload = t(e[i].cm)
                                    } catch (t) {
                                        h.payload = {
                                            name: e[i].cm
                                        }
                                    }
                                }
                                r.push(h)
                            }
                            return r
                        }
                    }(),
                    gt = function() {
                        function t(t) {
                            this.compositions.push(t)
                        }
                        return function() {
                            function e(t) {
                                for (var i = 0, e = this.compositions.length; i < e;) {
                                    if (this.compositions[i].data && this.compositions[i].data.nm === t) return this.compositions[i].prepareFrame && this.compositions[i].data.xt && this.compositions[i].prepareFrame(this.currentFrame), this.compositions[i].compInterface;
                                    i += 1
                                }
                                return null
                            }
                            return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
                        }
                    }(),
                    yt = {},
                    vt = function(t, e) {
                        yt[t] = e
                    };

                function bt(t) {
                    return yt[t]
                }

                function _t(t) {
                    return _t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, _t(t)
                }
                var kt = function() {
                    this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = J(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = et(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = gt(), this.imagePreloader = new mt, this.audioController = k(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new O("drawnFrame", 0, 0, 0)
                };
                v([ct], kt), kt.prototype.setParams = function(t) {
                    (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
                    var e = "svg";
                    t.animType ? e = t.animType : t.renderer && (e = t.renderer);
                    var r = bt(e);
                    this.renderer = new r(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), ft.loadAnimation(t.path, this.configAnimation, this.onSetupError))
                }, kt.prototype.onSetupError = function() {
                    this.trigger("data_failed")
                }, kt.prototype.setupAnimation = function(data) {
                    ft.completeAnimation(data, this.configAnimation)
                }, kt.prototype.setData = function(t, e) {
                    e && "object" !== _t(e) && (e = JSON.parse(e));
                    var r = {
                            wrapper: t,
                            animationData: e
                        },
                        n = t.attributes;
                    r.path = n.getNamedItem("data-animation-path") ? n.getNamedItem("data-animation-path").value : n.getNamedItem("data-bm-path") ? n.getNamedItem("data-bm-path").value : n.getNamedItem("bm-path") ? n.getNamedItem("bm-path").value : "", r.animType = n.getNamedItem("data-anim-type") ? n.getNamedItem("data-anim-type").value : n.getNamedItem("data-bm-type") ? n.getNamedItem("data-bm-type").value : n.getNamedItem("bm-type") ? n.getNamedItem("bm-type").value : n.getNamedItem("data-bm-renderer") ? n.getNamedItem("data-bm-renderer").value : n.getNamedItem("bm-renderer") ? n.getNamedItem("bm-renderer").value : "canvas";
                    var h = n.getNamedItem("data-anim-loop") ? n.getNamedItem("data-anim-loop").value : n.getNamedItem("data-bm-loop") ? n.getNamedItem("data-bm-loop").value : n.getNamedItem("bm-loop") ? n.getNamedItem("bm-loop").value : "";
                    "false" === h ? r.loop = !1 : "true" === h ? r.loop = !0 : "" !== h && (r.loop = parseInt(h, 10));
                    var o = n.getNamedItem("data-anim-autoplay") ? n.getNamedItem("data-anim-autoplay").value : n.getNamedItem("data-bm-autoplay") ? n.getNamedItem("data-bm-autoplay").value : !n.getNamedItem("bm-autoplay") || n.getNamedItem("bm-autoplay").value;
                    r.autoplay = "false" !== o, r.name = n.getNamedItem("data-name") ? n.getNamedItem("data-name").value : n.getNamedItem("data-bm-name") ? n.getNamedItem("data-bm-name").value : n.getNamedItem("bm-name") ? n.getNamedItem("bm-name").value : "", "false" === (n.getNamedItem("data-anim-prerender") ? n.getNamedItem("data-anim-prerender").value : n.getNamedItem("data-bm-prerender") ? n.getNamedItem("data-bm-prerender").value : n.getNamedItem("bm-prerender") ? n.getNamedItem("bm-prerender").value : "") && (r.prerender = !1), this.setParams(r)
                }, kt.prototype.includeLayers = function(data) {
                    data.op > this.animationData.op && (this.animationData.op = data.op, this.totalFrames = Math.floor(data.op - this.animationData.ip));
                    var i, t, e = this.animationData.layers,
                        r = e.length,
                        n = data.layers,
                        h = n.length;
                    for (t = 0; t < h; t += 1)
                        for (i = 0; i < r;) {
                            if (e[i].id === n[t].id) {
                                e[i] = n[t];
                                break
                            }
                            i += 1
                        }
                    if ((data.chars || data.fonts) && (this.renderer.globalData.fontManager.addChars(data.chars), this.renderer.globalData.fontManager.addFonts(data.fonts, this.renderer.globalData.defs)), data.assets)
                        for (r = data.assets.length, i = 0; i < r; i += 1) this.animationData.assets.push(data.assets[i]);
                    this.animationData.__complete = !1, ft.completeAnimation(this.animationData, this.onSegmentComplete)
                }, kt.prototype.onSegmentComplete = function(data) {
                    this.animationData = data;
                    var t = st();
                    t && t.initExpressions(this), this.loadNextSegment()
                }, kt.prototype.loadNextSegment = function() {
                    var t = this.animationData.segments;
                    if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
                    var e = t.shift();
                    this.timeCompleted = e.time * this.frameRate;
                    var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
                    this.segmentPos += 1, ft.loadData(r, this.includeLayers.bind(this), function() {
                        this.trigger("data_failed")
                    }.bind(this))
                }, kt.prototype.loadSegments = function() {
                    this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
                }, kt.prototype.imagesLoaded = function() {
                    this.trigger("loaded_images"), this.checkLoaded()
                }, kt.prototype.preloadImages = function() {
                    this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
                }, kt.prototype.configAnimation = function(t) {
                    if (this.renderer) try {
                        this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = ut(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
                    } catch (t) {
                        this.triggerConfigError(t)
                    }
                }, kt.prototype.waitForFontsLoaded = function() {
                    this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
                }, kt.prototype.checkLoaded = function() {
                    if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
                        this.isLoaded = !0;
                        var t = st();
                        t && t.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
                            this.trigger("DOMLoaded")
                        }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
                    }
                }, kt.prototype.resize = function(t, e) {
                    var r = "number" == typeof t ? t : void 0,
                        n = "number" == typeof e ? e : void 0;
                    this.renderer.updateContainerSize(r, n)
                }, kt.prototype.setSubframe = function(t) {
                    this.isSubframeEnabled = !!t
                }, kt.prototype.gotoFrame = function() {
                    this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
                }, kt.prototype.renderFrame = function() {
                    if (!1 !== this.isLoaded && this.renderer) try {
                        this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                    } catch (t) {
                        this.triggerRenderFrameError(t)
                    }
                }, kt.prototype.play = function(t) {
                    t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.trigger("_pause"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
                }, kt.prototype.pause = function(t) {
                    t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this.trigger("_play"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
                }, kt.prototype.togglePause = function(t) {
                    t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
                }, kt.prototype.stop = function(t) {
                    t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
                }, kt.prototype.getMarkerData = function(t) {
                    for (var marker, i = 0; i < this.markers.length; i += 1)
                        if ((marker = this.markers[i]).payload && marker.payload.name === t) return marker;
                    return null
                }, kt.prototype.goToAndStop = function(t, e, r) {
                    if (!r || this.name === r) {
                        var n = Number(t);
                        if (isNaN(n)) {
                            var marker = this.getMarkerData(t);
                            marker && this.goToAndStop(marker.time, !0)
                        } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                        this.pause()
                    }
                }, kt.prototype.goToAndPlay = function(t, e, r) {
                    if (!r || this.name === r) {
                        var n = Number(t);
                        if (isNaN(n)) {
                            var marker = this.getMarkerData(t);
                            marker && (marker.duration ? this.playSegments([marker.time, marker.time + marker.duration], !0) : this.goToAndStop(marker.time, !0))
                        } else this.goToAndStop(n, e, r);
                        this.play()
                    }
                }, kt.prototype.advanceTime = function(t) {
                    if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                        var e = this.currentRawFrame + t * this.frameModifier,
                            r = !1;
                        e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (r = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), r && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
                    }
                }, kt.prototype.adjustSegment = function(t, e) {
                    this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
                }, kt.prototype.setSegment = function(t, e) {
                    var r = -1;
                    this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== r && this.goToAndStop(r, !0)
                }, kt.prototype.playSegments = function(t, e) {
                    if (e && (this.segments.length = 0), "object" === _t(t[0])) {
                        var i, r = t.length;
                        for (i = 0; i < r; i += 1) this.segments.push(t[i])
                    } else this.segments.push(t);
                    this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
                }, kt.prototype.resetSegments = function(t) {
                    this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
                }, kt.prototype.checkSegments = function(t) {
                    return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
                }, kt.prototype.destroy = function(t) {
                    t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.renderer = null, this.imagePreloader = null, this.projectInterface = null)
                }, kt.prototype.setCurrentRawFrameValue = function(t) {
                    this.currentRawFrame = t, this.gotoFrame()
                }, kt.prototype.setSpeed = function(t) {
                    this.playSpeed = t, this.updaFrameModifier()
                }, kt.prototype.setDirection = function(t) {
                    this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
                }, kt.prototype.setLoop = function(t) {
                    this.loop = t
                }, kt.prototype.setVolume = function(t, e) {
                    e && this.name !== e || this.audioController.setVolume(t)
                }, kt.prototype.getVolume = function() {
                    return this.audioController.getVolume()
                }, kt.prototype.mute = function(t) {
                    t && this.name !== t || this.audioController.mute()
                }, kt.prototype.unmute = function(t) {
                    t && this.name !== t || this.audioController.unmute()
                }, kt.prototype.updaFrameModifier = function() {
                    this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
                }, kt.prototype.getPath = function() {
                    return this.path
                }, kt.prototype.getAssetsPath = function(t) {
                    var path = "";
                    if (t.e) path = t.p;
                    else if (this.assetsPath) {
                        var e = t.p; - 1 !== e.indexOf("images/") && (e = e.split("/")[1]), path = this.assetsPath + e
                    } else path = this.path, path += t.u ? t.u : "", path += t.p;
                    return path
                }, kt.prototype.getAssetData = function(t) {
                    for (var i = 0, e = this.assets.length; i < e;) {
                        if (t === this.assets[i].id) return this.assets[i];
                        i += 1
                    }
                    return null
                }, kt.prototype.hide = function() {
                    this.renderer.hide()
                }, kt.prototype.show = function() {
                    this.renderer.show()
                }, kt.prototype.getDuration = function(t) {
                    return t ? this.totalFrames : this.totalFrames / this.frameRate
                }, kt.prototype.updateDocumentData = function(path, t, e) {
                    try {
                        this.renderer.getElementByPath(path).updateDocumentData(t, e)
                    } catch (t) {}
                }, kt.prototype.trigger = function(t) {
                    if (this._cbs && this._cbs[t]) switch (t) {
                        case "enterFrame":
                            this.triggerEvent(t, new O(t, this.currentFrame, this.totalFrames, this.frameModifier));
                            break;
                        case "drawnFrame":
                            this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
                            break;
                        case "loopComplete":
                            this.triggerEvent(t, new j(t, this.loop, this.playCount, this.frameMult));
                            break;
                        case "complete":
                            this.triggerEvent(t, new B(t, this.frameMult));
                            break;
                        case "segmentStart":
                            this.triggerEvent(t, new W(t, this.firstFrame, this.totalFrames));
                            break;
                        case "destroy":
                            this.triggerEvent(t, new X(t, this));
                            break;
                        default:
                            this.triggerEvent(t)
                    }
                    "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new O(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new j(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new B(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new W(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new X(t, this))
                }, kt.prototype.triggerRenderFrameError = function(t) {
                    var e = new H(t, this.currentFrame);
                    this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
                }, kt.prototype.triggerConfigError = function(t) {
                    var e = new Y(t, this.currentFrame);
                    this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
                };
                var At = function() {
                        var t = {},
                            e = [],
                            r = 0,
                            n = 0,
                            h = 0,
                            o = !0,
                            l = !1;

                        function f(t) {
                            for (var i = 0, r = t.target; i < n;) e[i].animation === r && (e.splice(i, 1), i -= 1, n -= 1, r.isPaused || v()), i += 1
                        }

                        function d(element, t) {
                            if (!element) return null;
                            for (var i = 0; i < n;) {
                                if (e[i].elem === element && null !== e[i].elem) return e[i].animation;
                                i += 1
                            }
                            var r = new kt;
                            return _(r, element), r.setData(element, t), r
                        }

                        function m() {
                            var i, t = e.length,
                                r = [];
                            for (i = 0; i < t; i += 1) r.push(e[i].animation);
                            return r
                        }

                        function c() {
                            h += 1, L()
                        }

                        function v() {
                            h -= 1
                        }

                        function _(t, element) {
                            t.addEventListener("destroy", f), t.addEventListener("_active", c), t.addEventListener("_idle", v), e.push({
                                elem: element,
                                animation: t
                            }), n += 1
                        }

                        function k(t) {
                            var e = new kt;
                            return _(e, null), e.setParams(t), e
                        }

                        function A(t, r) {
                            var i;
                            for (i = 0; i < n; i += 1) e[i].animation.setSpeed(t, r)
                        }

                        function P(t, r) {
                            var i;
                            for (i = 0; i < n; i += 1) e[i].animation.setDirection(t, r)
                        }

                        function S(t) {
                            var i;
                            for (i = 0; i < n; i += 1) e[i].animation.play(t)
                        }

                        function w(t) {
                            var i, f = t - r;
                            for (i = 0; i < n; i += 1) e[i].animation.advanceTime(f);
                            r = t, h && !l ? window.requestAnimationFrame(w) : o = !0
                        }

                        function x(t) {
                            r = t, window.requestAnimationFrame(w)
                        }

                        function D(t) {
                            var i;
                            for (i = 0; i < n; i += 1) e[i].animation.pause(t)
                        }

                        function C(t, r, h) {
                            var i;
                            for (i = 0; i < n; i += 1) e[i].animation.goToAndStop(t, r, h)
                        }

                        function M(t) {
                            var i;
                            for (i = 0; i < n; i += 1) e[i].animation.stop(t)
                        }

                        function F(t) {
                            var i;
                            for (i = 0; i < n; i += 1) e[i].animation.togglePause(t)
                        }

                        function T(t) {
                            var i;
                            for (i = n - 1; i >= 0; i -= 1) e[i].animation.destroy(t)
                        }

                        function E(t, e, r) {
                            var i, n = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                                h = n.length;
                            for (i = 0; i < h; i += 1) r && n[i].setAttribute("data-bm-type", r), d(n[i], t);
                            if (e && 0 === h) {
                                r || (r = "svg");
                                var body = document.getElementsByTagName("body")[0];
                                body.innerText = "";
                                var div = y("div");
                                div.style.width = "100%", div.style.height = "100%", div.setAttribute("data-bm-type", r), body.appendChild(div), d(div, t)
                            }
                        }

                        function I() {
                            var i;
                            for (i = 0; i < n; i += 1) e[i].animation.resize()
                        }

                        function L() {
                            !l && h && o && (window.requestAnimationFrame(x), o = !1)
                        }

                        function V() {
                            l = !0
                        }

                        function z() {
                            l = !1, L()
                        }

                        function R(t, r) {
                            var i;
                            for (i = 0; i < n; i += 1) e[i].animation.setVolume(t, r)
                        }

                        function N(t) {
                            var i;
                            for (i = 0; i < n; i += 1) e[i].animation.mute(t)
                        }

                        function O(t) {
                            var i;
                            for (i = 0; i < n; i += 1) e[i].animation.unmute(t)
                        }
                        return t.registerAnimation = d, t.loadAnimation = k, t.setSpeed = A, t.setDirection = P, t.play = S, t.pause = D, t.stop = M, t.togglePause = F, t.searchAnimations = E, t.resize = I, t.goToAndStop = C, t.destroy = T, t.freeze = V, t.unfreeze = z, t.setVolume = R, t.mute = N, t.unmute = O, t.getRegisteredAnimations = m, t
                    }(),
                    Pt = function() {
                        var t = {};
                        t.getBezierEasing = r;
                        var e = {};

                        function r(a, b, t, r, n) {
                            var h = n || ("bez_" + a + "_" + b + "_" + t + "_" + r).replace(/\./g, "p");
                            if (e[h]) return e[h];
                            var o = new S([a, b, t, r]);
                            return e[h] = o, o
                        }
                        var n = 4,
                            h = .001,
                            o = 1e-7,
                            l = 10,
                            f = 11,
                            d = 1 / (f - 1),
                            m = "function" == typeof Float32Array;

                        function c(t, e) {
                            return 1 - 3 * e + 3 * t
                        }

                        function y(t, e) {
                            return 3 * e - 6 * t
                        }

                        function v(t) {
                            return 3 * t
                        }

                        function _(t, e, r) {
                            return ((c(e, r) * t + y(e, r)) * t + v(e)) * t
                        }

                        function k(t, e, r) {
                            return 3 * c(e, r) * t * t + 2 * y(e, r) * t + v(e)
                        }

                        function A(t, e, r, n, h) {
                            var f, d, i = 0;
                            do {
                                (f = _(d = e + (r - e) / 2, n, h) - t) > 0 ? r = d : e = d
                            } while (Math.abs(f) > o && ++i < l);
                            return d
                        }

                        function P(t, e, r, h) {
                            for (var i = 0; i < n; ++i) {
                                var o = k(e, r, h);
                                if (0 === o) return e;
                                e -= (_(e, r, h) - t) / o
                            }
                            return e
                        }

                        function S(t) {
                            this._p = t, this._mSampleValues = m ? new Float32Array(f) : new Array(f), this._precomputed = !1, this.get = this.get.bind(this)
                        }
                        return S.prototype = {
                            get: function(t) {
                                var e = this._p[0],
                                    r = this._p[1],
                                    n = this._p[2],
                                    h = this._p[3];
                                return this._precomputed || this._precompute(), e === r && n === h ? t : 0 === t ? 0 : 1 === t ? 1 : _(this._getTForX(t), r, h)
                            },
                            _precompute: function() {
                                var t = this._p[0],
                                    e = this._p[1],
                                    r = this._p[2],
                                    n = this._p[3];
                                this._precomputed = !0, t === e && r === n || this._calcSampleValues()
                            },
                            _calcSampleValues: function() {
                                for (var t = this._p[0], e = this._p[2], i = 0; i < f; ++i) this._mSampleValues[i] = _(i * d, t, e)
                            },
                            _getTForX: function(t) {
                                for (var e = this._p[0], r = this._p[2], n = this._mSampleValues, o = 0, l = 1, m = f - 1; l !== m && n[l] <= t; ++l) o += d;
                                var c = o + (t - n[--l]) / (n[l + 1] - n[l]) * d,
                                    y = k(c, e, r);
                                return y >= h ? P(t, c, e, r) : 0 === y ? c : A(t, o, o + d, e, r)
                            }
                        }, t
                    }(),
                    St = function() {
                        function t(t) {
                            return t.concat(P(t.length))
                        }
                        return {
                            double: t
                        }
                    }(),
                    wt = function(t, e, r) {
                        var n = 0,
                            h = t,
                            o = P(h);

                        function l() {
                            return n ? o[n -= 1] : e()
                        }

                        function f(element) {
                            n === h && (o = St.double(o), h *= 2), r && r(element), o[n] = element, n += 1
                        }
                        return {
                            newElement: l,
                            release: f
                        }
                    },
                    xt = function() {
                        function t() {
                            return {
                                addedLength: 0,
                                percents: A("float32", ht()),
                                lengths: A("float32", ht())
                            }
                        }
                        return wt(8, t)
                    }(),
                    Dt = function() {
                        function t() {
                            return {
                                lengths: [],
                                totalLength: 0
                            }
                        }

                        function e(element) {
                            var i, t = element.lengths.length;
                            for (i = 0; i < t; i += 1) xt.release(element.lengths[i]);
                            element.lengths.length = 0
                        }
                        return wt(8, t, e)
                    }();

                function Ct() {
                    var t = Math;

                    function e(t, e, r, n, h, o) {
                        var l = t * n + e * h + r * o - h * n - o * t - r * e;
                        return l > -.001 && l < .001
                    }

                    function r(r, n, h, o, l, f, d, m, c) {
                        if (0 === h && 0 === f && 0 === c) return e(r, n, o, l, d, m);
                        var y, v = t.sqrt(t.pow(o - r, 2) + t.pow(l - n, 2) + t.pow(f - h, 2)),
                            _ = t.sqrt(t.pow(d - r, 2) + t.pow(m - n, 2) + t.pow(c - h, 2)),
                            k = t.sqrt(t.pow(d - o, 2) + t.pow(m - l, 2) + t.pow(c - f, 2));
                        return (y = v > _ ? v > k ? v - _ - k : k - _ - v : k > _ ? k - _ - v : _ - v - k) > -1e-4 && y < 1e-4
                    }
                    var n = function(t, e, r, n) {
                        var h, i, o, l, f, d, m = ht(),
                            c = 0,
                            y = [],
                            v = [],
                            _ = xt.newElement();
                        for (o = r.length, h = 0; h < m; h += 1) {
                            for (f = h / (m - 1), d = 0, i = 0; i < o; i += 1) l = F(1 - f, 3) * t[i] + 3 * F(1 - f, 2) * f * r[i] + 3 * (1 - f) * F(f, 2) * n[i] + F(f, 3) * e[i], y[i] = l, null !== v[i] && (d += F(y[i] - v[i], 2)), v[i] = y[i];
                            d && (c += d = T(d)), _.percents[h] = f, _.lengths[h] = c
                        }
                        return _.addedLength = c, _
                    };

                    function h(t) {
                        var i, e = Dt.newElement(),
                            r = t.c,
                            h = t.v,
                            o = t.o,
                            l = t.i,
                            f = t._length,
                            d = e.lengths,
                            m = 0;
                        for (i = 0; i < f - 1; i += 1) d[i] = n(h[i], h[i + 1], o[i], l[i + 1]), m += d[i].addedLength;
                        return r && f && (d[i] = n(h[i], h[0], o[i], l[0]), m += d[i].addedLength), e.totalLength = m, e
                    }

                    function o(t) {
                        this.segmentLength = 0, this.points = new Array(t)
                    }

                    function l(t, e) {
                        this.partialLength = t, this.point = e
                    }
                    var f, d = (f = {}, function(t, r, n, h) {
                        var d = (t[0] + "_" + t[1] + "_" + r[0] + "_" + r[1] + "_" + n[0] + "_" + n[1] + "_" + h[0] + "_" + h[1]).replace(/\./g, "p");
                        if (!f[d]) {
                            var m, i, c, y, v, _, k, A = ht(),
                                S = 0,
                                w = null;
                            2 === t.length && (t[0] !== r[0] || t[1] !== r[1]) && e(t[0], t[1], r[0], r[1], t[0] + n[0], t[1] + n[1]) && e(t[0], t[1], r[0], r[1], r[0] + h[0], r[1] + h[1]) && (A = 2);
                            var x = new o(A);
                            for (c = n.length, m = 0; m < A; m += 1) {
                                for (k = P(c), v = m / (A - 1), _ = 0, i = 0; i < c; i += 1) y = F(1 - v, 3) * t[i] + 3 * F(1 - v, 2) * v * (t[i] + n[i]) + 3 * (1 - v) * F(v, 2) * (r[i] + h[i]) + F(v, 3) * r[i], k[i] = y, null !== w && (_ += F(k[i] - w[i], 2));
                                S += _ = T(_), x.points[m] = new l(_, k), w = k
                            }
                            x.segmentLength = S, f[d] = x
                        }
                        return f[d]
                    });

                    function m(t, e) {
                        var r = e.percents,
                            n = e.lengths,
                            h = r.length,
                            o = E((h - 1) * t),
                            l = t * e.addedLength,
                            f = 0;
                        if (o === h - 1 || 0 === o || l === n[o]) return r[o];
                        for (var d = n[o] > l ? -1 : 1, m = !0; m;)
                            if (n[o] <= l && n[o + 1] > l ? (f = (l - n[o]) / (n[o + 1] - n[o]), m = !1) : o += d, o < 0 || o >= h - 1) {
                                if (o === h - 1) return r[o];
                                m = !1
                            }
                        return r[o] + (r[o + 1] - r[o]) * f
                    }

                    function c(e, r, n, h, o, l) {
                        var f = m(o, l),
                            d = 1 - f;
                        return [t.round(1e3 * (d * d * d * e[0] + (f * d * d + d * f * d + d * d * f) * n[0] + (f * f * d + d * f * f + f * d * f) * h[0] + f * f * f * r[0])) / 1e3, t.round(1e3 * (d * d * d * e[1] + (f * d * d + d * f * d + d * d * f) * n[1] + (f * f * d + d * f * f + f * d * f) * h[1] + f * f * f * r[1])) / 1e3]
                    }
                    var y = A("float32", 8);

                    function v(e, r, n, h, o, l, f) {
                        o < 0 ? o = 0 : o > 1 && (o = 1);
                        var i, d = m(o, f),
                            c = m(l = l > 1 ? 1 : l, f),
                            v = e.length,
                            _ = 1 - d,
                            k = 1 - c,
                            A = _ * _ * _,
                            P = d * _ * _ * 3,
                            S = d * d * _ * 3,
                            w = d * d * d,
                            x = _ * _ * k,
                            D = d * _ * k + _ * d * k + _ * _ * c,
                            C = d * d * k + _ * d * c + d * _ * c,
                            M = d * d * c,
                            F = _ * k * k,
                            T = d * k * k + _ * c * k + _ * k * c,
                            E = d * c * k + _ * c * c + d * k * c,
                            I = d * c * c,
                            L = k * k * k,
                            V = c * k * k + k * c * k + k * k * c,
                            z = c * c * k + k * c * c + c * k * c,
                            R = c * c * c;
                        for (i = 0; i < v; i += 1) y[4 * i] = t.round(1e3 * (A * e[i] + P * n[i] + S * h[i] + w * r[i])) / 1e3, y[4 * i + 1] = t.round(1e3 * (x * e[i] + D * n[i] + C * h[i] + M * r[i])) / 1e3, y[4 * i + 2] = t.round(1e3 * (F * e[i] + T * n[i] + E * h[i] + I * r[i])) / 1e3, y[4 * i + 3] = t.round(1e3 * (L * e[i] + V * n[i] + z * h[i] + R * r[i])) / 1e3;
                        return y
                    }
                    return {
                        getSegmentsLength: h,
                        getNewSegment: v,
                        getPointInSegment: c,
                        buildBezierData: d,
                        pointOnLine2D: e,
                        pointOnLine3D: r
                    }
                }
                var Mt = Ct(),
                    Ft = function() {
                        var t = l,
                            e = Math.abs;

                        function r(t, e) {
                            var r, l = this.offsetTime;
                            "multidimensional" === this.propType && (r = A("float32", this.pv.length));
                            for (var f, d, m, c, y, v, _, k, P, S = e.lastIndex, i = S, w = this.keyframes.length - 1, x = !0; x;) {
                                if (f = this.keyframes[i], d = this.keyframes[i + 1], i === w - 1 && t >= d.t - l) {
                                    f.h && (f = d), S = 0;
                                    break
                                }
                                if (d.t - l > t) {
                                    S = i;
                                    break
                                }
                                i < w - 1 ? i += 1 : (S = 0, x = !1)
                            }
                            m = this.keyframesMetadata[i] || {};
                            var D, C = d.t - l,
                                M = f.t - l;
                            if (f.to) {
                                m.bezierData || (m.bezierData = Mt.buildBezierData(f.s, d.s || f.e, f.to, f.ti));
                                var F = m.bezierData;
                                if (t >= C || t < M) {
                                    var T = t >= C ? F.points.length - 1 : 0;
                                    for (y = F.points[T].point.length, c = 0; c < y; c += 1) r[c] = F.points[T].point[c]
                                } else {
                                    m.__fnct ? P = m.__fnct : (P = Pt.getBezierEasing(f.o.x, f.o.y, f.i.x, f.i.y, f.n).get, m.__fnct = P), v = P((t - M) / (C - M));
                                    var E, I = F.segmentLength * v,
                                        L = e.lastFrame < t && e._lastKeyframeIndex === i ? e._lastAddedLength : 0;
                                    for (k = e.lastFrame < t && e._lastKeyframeIndex === i ? e._lastPoint : 0, x = !0, _ = F.points.length; x;) {
                                        if (L += F.points[k].partialLength, 0 === I || 0 === v || k === F.points.length - 1) {
                                            for (y = F.points[k].point.length, c = 0; c < y; c += 1) r[c] = F.points[k].point[c];
                                            break
                                        }
                                        if (I >= L && I < L + F.points[k + 1].partialLength) {
                                            for (E = (I - L) / F.points[k + 1].partialLength, y = F.points[k].point.length, c = 0; c < y; c += 1) r[c] = F.points[k].point[c] + (F.points[k + 1].point[c] - F.points[k].point[c]) * E;
                                            break
                                        }
                                        k < _ - 1 ? k += 1 : x = !1
                                    }
                                    e._lastPoint = k, e._lastAddedLength = L - F.points[k].partialLength, e._lastKeyframeIndex = i
                                }
                            } else {
                                var V, z, R, N, O;
                                if (w = f.s.length, D = d.s || f.e, this.sh && 1 !== f.h) t >= C ? (r[0] = D[0], r[1] = D[1], r[2] = D[2]) : t <= M ? (r[0] = f.s[0], r[1] = f.s[1], r[2] = f.s[2]) : h(r, n(o(f.s), o(D), (t - M) / (C - M)));
                                else
                                    for (i = 0; i < w; i += 1) 1 !== f.h && (t >= C ? v = 1 : t < M ? v = 0 : (f.o.x.constructor === Array ? (m.__fnct || (m.__fnct = []), m.__fnct[i] ? P = m.__fnct[i] : (V = void 0 === f.o.x[i] ? f.o.x[0] : f.o.x[i], z = void 0 === f.o.y[i] ? f.o.y[0] : f.o.y[i], R = void 0 === f.i.x[i] ? f.i.x[0] : f.i.x[i], N = void 0 === f.i.y[i] ? f.i.y[0] : f.i.y[i], P = Pt.getBezierEasing(V, z, R, N).get, m.__fnct[i] = P)) : m.__fnct ? P = m.__fnct : (V = f.o.x, z = f.o.y, R = f.i.x, N = f.i.y, P = Pt.getBezierEasing(V, z, R, N).get, f.keyframeMetadata = P), v = P((t - M) / (C - M)))), D = d.s || f.e, O = 1 === f.h ? f.s[i] : f.s[i] + (D[i] - f.s[i]) * v, "multidimensional" === this.propType ? r[i] = O : r = O
                            }
                            return e.lastIndex = S, r
                        }

                        function n(a, b, t) {
                            var e, r, n, h, o, l = [],
                                f = a[0],
                                d = a[1],
                                m = a[2],
                                c = a[3],
                                y = b[0],
                                v = b[1],
                                _ = b[2],
                                k = b[3];
                            return (r = f * y + d * v + m * _ + c * k) < 0 && (r = -r, y = -y, v = -v, _ = -_, k = -k), 1 - r > 1e-6 ? (e = Math.acos(r), n = Math.sin(e), h = Math.sin((1 - t) * e) / n, o = Math.sin(t * e) / n) : (h = 1 - t, o = t), l[0] = h * f + o * y, l[1] = h * d + o * v, l[2] = h * m + o * _, l[3] = h * c + o * k, l
                        }

                        function h(t, e) {
                            var r = e[0],
                                n = e[1],
                                h = e[2],
                                o = e[3],
                                l = Math.atan2(2 * n * o - 2 * r * h, 1 - 2 * n * n - 2 * h * h),
                                f = Math.asin(2 * r * n + 2 * h * o),
                                d = Math.atan2(2 * r * o - 2 * n * h, 1 - 2 * r * r - 2 * h * h);
                            t[0] = l / z, t[1] = f / z, t[2] = d / z
                        }

                        function o(t) {
                            var e = t[0] * z,
                                r = t[1] * z,
                                n = t[2] * z,
                                h = Math.cos(e / 2),
                                o = Math.cos(r / 2),
                                l = Math.cos(n / 2),
                                f = Math.sin(e / 2),
                                d = Math.sin(r / 2),
                                m = Math.sin(n / 2);
                            return [f * d * l + h * o * m, f * o * l + h * d * m, h * d * l - f * o * m, h * o * l - f * d * m]
                        }

                        function f() {
                            var e = this.comp.renderedFrame - this.offsetTime,
                                r = this.keyframes[0].t - this.offsetTime,
                                n = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                            if (!(e === this._caching.lastFrame || this._caching.lastFrame !== t && (this._caching.lastFrame >= n && e >= n || this._caching.lastFrame < r && e < r))) {
                                this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                                var h = this.interpolateValue(e, this._caching);
                                this.pv = h
                            }
                            return this._caching.lastFrame = e, this.pv
                        }

                        function d(t) {
                            var r;
                            if ("unidimensional" === this.propType) r = t * this.mult, e(this.v - r) > 1e-5 && (this.v = r, this._mdf = !0);
                            else
                                for (var i = 0, n = this.v.length; i < n;) r = t[i] * this.mult, e(this.v[i] - r) > 1e-5 && (this.v[i] = r, this._mdf = !0), i += 1
                        }

                        function m() {
                            if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                                if (this.lock) this.setVValue(this.pv);
                                else {
                                    var i;
                                    this.lock = !0, this._mdf = this._isFirstFrame;
                                    var t = this.effectsSequence.length,
                                        e = this.kf ? this.pv : this.data.k;
                                    for (i = 0; i < t; i += 1) e = this.effectsSequence[i](e);
                                    this.setVValue(e), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                                }
                        }

                        function c(t) {
                            this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                        }

                        function y(t, data, e, r) {
                            this.propType = "unidimensional", this.mult = e || 1, this.data = data, this.v = e ? data.k * e : data.k, this.pv = data.k, this._mdf = !1, this.elem = t, this.container = r, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = m, this.setVValue = d, this.addEffect = c
                        }

                        function v(t, data, e, r) {
                            var i;
                            this.propType = "multidimensional", this.mult = e || 1, this.data = data, this._mdf = !1, this.elem = t, this.container = r, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                            var n = data.k.length;
                            for (this.v = A("float32", n), this.pv = A("float32", n), this.vel = A("float32", n), i = 0; i < n; i += 1) this.v[i] = data.k[i] * this.mult, this.pv[i] = data.k[i];
                            this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = m, this.setVValue = d, this.addEffect = c
                        }

                        function _(e, data, n, h) {
                            this.propType = "unidimensional", this.keyframes = data.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
                                lastFrame: t,
                                lastIndex: 0,
                                value: 0,
                                _lastKeyframeIndex: -1
                            }, this.k = !0, this.kf = !0, this.data = data, this.mult = n || 1, this.elem = e, this.container = h, this.comp = e.comp, this.v = t, this.pv = t, this._isFirstFrame = !0, this.getValue = m, this.setVValue = d, this.interpolateValue = r, this.effectsSequence = [f.bind(this)], this.addEffect = c
                        }

                        function k(e, data, n, h) {
                            var i;
                            this.propType = "multidimensional";
                            var s, o, l, y, v = data.k.length;
                            for (i = 0; i < v - 1; i += 1) data.k[i].to && data.k[i].s && data.k[i + 1] && data.k[i + 1].s && (s = data.k[i].s, o = data.k[i + 1].s, l = data.k[i].to, y = data.k[i].ti, (2 === s.length && (s[0] !== o[0] || s[1] !== o[1]) && Mt.pointOnLine2D(s[0], s[1], o[0], o[1], s[0] + l[0], s[1] + l[1]) && Mt.pointOnLine2D(s[0], s[1], o[0], o[1], o[0] + y[0], o[1] + y[1]) || 3 === s.length && (s[0] !== o[0] || s[1] !== o[1] || s[2] !== o[2]) && Mt.pointOnLine3D(s[0], s[1], s[2], o[0], o[1], o[2], s[0] + l[0], s[1] + l[1], s[2] + l[2]) && Mt.pointOnLine3D(s[0], s[1], s[2], o[0], o[1], o[2], o[0] + y[0], o[1] + y[1], o[2] + y[2])) && (data.k[i].to = null, data.k[i].ti = null), s[0] === o[0] && s[1] === o[1] && 0 === l[0] && 0 === l[1] && 0 === y[0] && 0 === y[1] && (2 === s.length || s[2] === o[2] && 0 === l[2] && 0 === y[2]) && (data.k[i].to = null, data.k[i].ti = null));
                            this.effectsSequence = [f.bind(this)], this.data = data, this.keyframes = data.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = n || 1, this.elem = e, this.container = h, this.comp = e.comp, this.getValue = m, this.setVValue = d, this.interpolateValue = r, this.frameId = -1;
                            var _ = data.k[0].s.length;
                            for (this.v = A("float32", _), this.pv = A("float32", _), i = 0; i < _; i += 1) this.v[i] = t, this.pv[i] = t;
                            this._caching = {
                                lastFrame: t,
                                lastIndex: 0,
                                value: A("float32", _)
                            }, this.addEffect = c
                        }

                        function P(t, data, e, r, n) {
                            var p;
                            if (data.k.length)
                                if ("number" == typeof data.k[0]) p = new v(t, data, r, n);
                                else switch (e) {
                                    case 0:
                                        p = new _(t, data, r, n);
                                        break;
                                    case 1:
                                        p = new k(t, data, r, n)
                                } else p = new y(t, data, r, n);
                            return p.effectsSequence.length && n.addDynamicProperty(p), p
                        }
                        return {
                            getProp: P
                        }
                    }();

                function Tt() {}
                Tt.prototype = {
                    addDynamicProperty: function(t) {
                        -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
                    },
                    iterateDynamicProperties: function() {
                        var i;
                        this._mdf = !1;
                        var t = this.dynamicProperties.length;
                        for (i = 0; i < t; i += 1) this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this._mdf = !0)
                    },
                    initDynamicPropertyContainer: function(t) {
                        this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
                    }
                };
                var Et = function() {
                    function t() {
                        return A("float32", 2)
                    }
                    return wt(8, t)
                }();

                function It() {
                    this.c = !1, this._length = 0, this._maxLength = 8, this.v = P(this._maxLength), this.o = P(this._maxLength), this.i = P(this._maxLength)
                }
                It.prototype.setPathData = function(t, e) {
                    this.c = t, this.setLength(e);
                    for (var i = 0; i < e;) this.v[i] = Et.newElement(), this.o[i] = Et.newElement(), this.i[i] = Et.newElement(), i += 1
                }, It.prototype.setLength = function(t) {
                    for (; this._maxLength < t;) this.doubleArrayLength();
                    this._length = t
                }, It.prototype.doubleArrayLength = function() {
                    this.v = this.v.concat(P(this._maxLength)), this.i = this.i.concat(P(this._maxLength)), this.o = this.o.concat(P(this._maxLength)), this._maxLength *= 2
                }, It.prototype.setXYAt = function(t, e, r, n, h) {
                    var o;
                    switch (this._length = Math.max(this._length, n + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
                        case "v":
                            o = this.v;
                            break;
                        case "i":
                            o = this.i;
                            break;
                        case "o":
                            o = this.o;
                            break;
                        default:
                            o = []
                    }(!o[n] || o[n] && !h) && (o[n] = Et.newElement()), o[n][0] = t, o[n][1] = e
                }, It.prototype.setTripleAt = function(t, e, r, n, h, o, l, f) {
                    this.setXYAt(t, e, "v", l, f), this.setXYAt(r, n, "o", l, f), this.setXYAt(h, o, "i", l, f)
                }, It.prototype.reverse = function() {
                    var t = new It;
                    t.setPathData(this.c, this._length);
                    var e = this.v,
                        r = this.o,
                        n = this.i,
                        h = 0;
                    this.c && (t.setTripleAt(e[0][0], e[0][1], n[0][0], n[0][1], r[0][0], r[0][1], 0, !1), h = 1);
                    var i, o = this._length - 1,
                        l = this._length;
                    for (i = h; i < l; i += 1) t.setTripleAt(e[o][0], e[o][1], n[o][0], n[o][1], r[o][0], r[o][1], i, !1), o -= 1;
                    return t
                }, It.prototype.length = function() {
                    return this._length
                };
                var Lt = function() {
                    function t() {
                        return new It
                    }

                    function e(t) {
                        var i, e = t._length;
                        for (i = 0; i < e; i += 1) Et.release(t.v[i]), Et.release(t.i[i]), Et.release(t.o[i]), t.v[i] = null, t.i[i] = null, t.o[i] = null;
                        t._length = 0, t.c = !1
                    }

                    function r(t) {
                        var i, e = n.newElement(),
                            r = void 0 === t._length ? t.v.length : t._length;
                        for (e.setLength(r), e.c = t.c, i = 0; i < r; i += 1) e.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], i);
                        return e
                    }
                    var n = wt(4, t, e);
                    return n.clone = r, n
                }();

                function Vt() {
                    this._length = 0, this._maxLength = 4, this.shapes = P(this._maxLength)
                }
                Vt.prototype.addShape = function(t) {
                    this._length === this._maxLength && (this.shapes = this.shapes.concat(P(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
                }, Vt.prototype.releaseShapes = function() {
                    var i;
                    for (i = 0; i < this._length; i += 1) Lt.release(this.shapes[i]);
                    this._length = 0
                };
                var zt = function() {
                        var t = {
                                newShapeCollection: h,
                                release: o
                            },
                            e = 0,
                            r = 4,
                            n = P(r);

                        function h() {
                            return e ? n[e -= 1] : new Vt
                        }

                        function o(t) {
                            var i, h = t._length;
                            for (i = 0; i < h; i += 1) Lt.release(t.shapes[i]);
                            t._length = 0, e === r && (n = St.double(n), r *= 2), n[e] = t, e += 1
                        }
                        return t
                    }(),
                    Rt = function() {
                        var t = -999999;

                        function e(t, e, r) {
                            var n, h, o, l, f, d, m, c, y, v = r.lastIndex,
                                _ = this.keyframes;
                            if (t < _[0].t - this.offsetTime) n = _[0].s[0], o = !0, v = 0;
                            else if (t >= _[_.length - 1].t - this.offsetTime) n = _[_.length - 1].s ? _[_.length - 1].s[0] : _[_.length - 2].e[0], o = !0;
                            else {
                                for (var k, A, P, i = v, S = _.length - 1, w = !0; w && (k = _[i], !((A = _[i + 1]).t - this.offsetTime > t));) i < S - 1 ? i += 1 : w = !1;
                                if (P = this.keyframesMetadata[i] || {}, v = i, !(o = 1 === k.h)) {
                                    if (t >= A.t - this.offsetTime) c = 1;
                                    else if (t < k.t - this.offsetTime) c = 0;
                                    else {
                                        var x;
                                        P.__fnct ? x = P.__fnct : (x = Pt.getBezierEasing(k.o.x, k.o.y, k.i.x, k.i.y).get, P.__fnct = x), c = x((t - (k.t - this.offsetTime)) / (A.t - this.offsetTime - (k.t - this.offsetTime)))
                                    }
                                    h = A.s ? A.s[0] : k.e[0]
                                }
                                n = k.s[0]
                            }
                            for (d = e._length, m = n.i[0].length, r.lastIndex = v, l = 0; l < d; l += 1)
                                for (f = 0; f < m; f += 1) y = o ? n.i[l][f] : n.i[l][f] + (h.i[l][f] - n.i[l][f]) * c, e.i[l][f] = y, y = o ? n.o[l][f] : n.o[l][f] + (h.o[l][f] - n.o[l][f]) * c, e.o[l][f] = y, y = o ? n.v[l][f] : n.v[l][f] + (h.v[l][f] - n.v[l][f]) * c, e.v[l][f] = y
                        }

                        function r() {
                            var e = this.comp.renderedFrame - this.offsetTime,
                                r = this.keyframes[0].t - this.offsetTime,
                                n = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                                h = this._caching.lastFrame;
                            return h !== t && (h < r && e < r || h > n && e > n) || (this._caching.lastIndex = h < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv
                        }

                        function n() {
                            this.paths = this.localShapeCollection
                        }

                        function h(t, e) {
                            if (t._length !== e._length || t.c !== e.c) return !1;
                            var i, r = t._length;
                            for (i = 0; i < r; i += 1)
                                if (t.v[i][0] !== e.v[i][0] || t.v[i][1] !== e.v[i][1] || t.o[i][0] !== e.o[i][0] || t.o[i][1] !== e.o[i][1] || t.i[i][0] !== e.i[i][0] || t.i[i][1] !== e.i[i][1]) return !1;
                            return !0
                        }

                        function o(t) {
                            h(this.v, t) || (this.v = Lt.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                        }

                        function l() {
                            if (this.elem.globalData.frameId !== this.frameId)
                                if (this.effectsSequence.length)
                                    if (this.lock) this.setVValue(this.pv);
                                    else {
                                        var t, i;
                                        this.lock = !0, this._mdf = !1, t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                                        var e = this.effectsSequence.length;
                                        for (i = 0; i < e; i += 1) t = this.effectsSequence[i](t);
                                        this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId
                                    }
                            else this._mdf = !1
                        }

                        function f(t, data, e) {
                            this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = data, this.k = !1, this.kf = !1, this._mdf = !1;
                            var r = 3 === e ? data.pt.k : data.ks.k;
                            this.v = Lt.clone(r), this.pv = Lt.clone(this.v), this.localShapeCollection = zt.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = n, this.effectsSequence = []
                        }

                        function d(t) {
                            this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                        }

                        function m(e, data, h) {
                            this.propType = "shape", this.comp = e.comp, this.elem = e, this.container = e, this.offsetTime = e.data.st, this.keyframes = 3 === h ? data.pt.k : data.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                            var o = this.keyframes[0].s[0].i.length;
                            this.v = Lt.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, o), this.pv = Lt.clone(this.v), this.localShapeCollection = zt.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = n, this._caching = {
                                lastFrame: t,
                                lastIndex: 0
                            }, this.effectsSequence = [r.bind(this)]
                        }
                        f.prototype.interpolateShape = e, f.prototype.getValue = l, f.prototype.setVValue = o, f.prototype.addEffect = d, m.prototype.getValue = l, m.prototype.interpolateShape = e, m.prototype.setVValue = o, m.prototype.addEffect = d;
                        var c = function() {
                                var t = R;

                                function e(t, data) {
                                    this.v = Lt.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = zt.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = data.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = Ft.getProp(t, data.p, 1, 0, this), this.s = Ft.getProp(t, data.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                                }
                                return e.prototype = {
                                    reset: n,
                                    getValue: function() {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                                    },
                                    convertEllToPath: function() {
                                        var e = this.p.v[0],
                                            r = this.p.v[1],
                                            n = this.s.v[0] / 2,
                                            h = this.s.v[1] / 2,
                                            o = 3 !== this.d,
                                            l = this.v;
                                        l.v[0][0] = e, l.v[0][1] = r - h, l.v[1][0] = o ? e + n : e - n, l.v[1][1] = r, l.v[2][0] = e, l.v[2][1] = r + h, l.v[3][0] = o ? e - n : e + n, l.v[3][1] = r, l.i[0][0] = o ? e - n * t : e + n * t, l.i[0][1] = r - h, l.i[1][0] = o ? e + n : e - n, l.i[1][1] = r - h * t, l.i[2][0] = o ? e + n * t : e - n * t, l.i[2][1] = r + h, l.i[3][0] = o ? e - n : e + n, l.i[3][1] = r + h * t, l.o[0][0] = o ? e + n * t : e - n * t, l.o[0][1] = r - h, l.o[1][0] = o ? e + n : e - n, l.o[1][1] = r + h * t, l.o[2][0] = o ? e - n * t : e + n * t, l.o[2][1] = r + h, l.o[3][0] = o ? e - n : e + n, l.o[3][1] = r - h * t
                                    }
                                }, v([Tt], e), e
                            }(),
                            y = function() {
                                function t(t, data) {
                                    this.v = Lt.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = data, this.frameId = -1, this.d = data.d, this.initDynamicPropertyContainer(t), 1 === data.sy ? (this.ir = Ft.getProp(t, data.ir, 0, 0, this), this.is = Ft.getProp(t, data.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = Ft.getProp(t, data.pt, 0, 0, this), this.p = Ft.getProp(t, data.p, 1, 0, this), this.r = Ft.getProp(t, data.r, 0, z, this), this.or = Ft.getProp(t, data.or, 0, 0, this), this.os = Ft.getProp(t, data.os, 0, .01, this), this.localShapeCollection = zt.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                                }
                                return t.prototype = {
                                    reset: n,
                                    getValue: function() {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                                    },
                                    convertStarToPath: function() {
                                        var i, t, e, r, n = 2 * Math.floor(this.pt.v),
                                            h = 2 * Math.PI / n,
                                            o = !0,
                                            l = this.or.v,
                                            f = this.ir.v,
                                            d = this.os.v,
                                            m = this.is.v,
                                            c = 2 * Math.PI * l / (2 * n),
                                            y = 2 * Math.PI * f / (2 * n),
                                            v = -Math.PI / 2;
                                        v += this.r.v;
                                        var _ = 3 === this.data.d ? -1 : 1;
                                        for (this.v._length = 0, i = 0; i < n; i += 1) {
                                            e = o ? d : m, r = o ? c : y;
                                            var k = (t = o ? l : f) * Math.cos(v),
                                                A = t * Math.sin(v),
                                                P = 0 === k && 0 === A ? 0 : A / Math.sqrt(k * k + A * A),
                                                S = 0 === k && 0 === A ? 0 : -k / Math.sqrt(k * k + A * A);
                                            k += +this.p.v[0], A += +this.p.v[1], this.v.setTripleAt(k, A, k - P * r * e * _, A - S * r * e * _, k + P * r * e * _, A + S * r * e * _, i, !0), o = !o, v += h * _
                                        }
                                    },
                                    convertPolygonToPath: function() {
                                        var i, t = Math.floor(this.pt.v),
                                            e = 2 * Math.PI / t,
                                            r = this.or.v,
                                            n = this.os.v,
                                            h = 2 * Math.PI * r / (4 * t),
                                            o = .5 * -Math.PI,
                                            l = 3 === this.data.d ? -1 : 1;
                                        for (o += this.r.v, this.v._length = 0, i = 0; i < t; i += 1) {
                                            var f = r * Math.cos(o),
                                                d = r * Math.sin(o),
                                                m = 0 === f && 0 === d ? 0 : d / Math.sqrt(f * f + d * d),
                                                c = 0 === f && 0 === d ? 0 : -f / Math.sqrt(f * f + d * d);
                                            f += +this.p.v[0], d += +this.p.v[1], this.v.setTripleAt(f, d, f - m * h * n * l, d - c * h * n * l, f + m * h * n * l, d + c * h * n * l, i, !0), o += e * l
                                        }
                                        this.paths.length = 0, this.paths[0] = this.v
                                    }
                                }, v([Tt], t), t
                            }(),
                            _ = function() {
                                function t(t, data) {
                                    this.v = Lt.newElement(), this.v.c = !0, this.localShapeCollection = zt.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = data.d, this.initDynamicPropertyContainer(t), this.p = Ft.getProp(t, data.p, 1, 0, this), this.s = Ft.getProp(t, data.s, 1, 0, this), this.r = Ft.getProp(t, data.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                                }
                                return t.prototype = {
                                    convertRectToPath: function() {
                                        var t = this.p.v[0],
                                            e = this.p.v[1],
                                            r = this.s.v[0] / 2,
                                            n = this.s.v[1] / 2,
                                            h = I(r, n, this.r.v),
                                            o = h * (1 - R);
                                        this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + r, e - n + h, t + r, e - n + h, t + r, e - n + o, 0, !0), this.v.setTripleAt(t + r, e + n - h, t + r, e + n - o, t + r, e + n - h, 1, !0), 0 !== h ? (this.v.setTripleAt(t + r - h, e + n, t + r - h, e + n, t + r - o, e + n, 2, !0), this.v.setTripleAt(t - r + h, e + n, t - r + o, e + n, t - r + h, e + n, 3, !0), this.v.setTripleAt(t - r, e + n - h, t - r, e + n - h, t - r, e + n - o, 4, !0), this.v.setTripleAt(t - r, e - n + h, t - r, e - n + o, t - r, e - n + h, 5, !0), this.v.setTripleAt(t - r + h, e - n, t - r + h, e - n, t - r + o, e - n, 6, !0), this.v.setTripleAt(t + r - h, e - n, t + r - o, e - n, t + r - h, e - n, 7, !0)) : (this.v.setTripleAt(t - r, e + n, t - r + o, e + n, t - r, e + n, 2), this.v.setTripleAt(t - r, e - n, t - r, e - n + o, t - r, e - n, 3))) : (this.v.setTripleAt(t + r, e - n + h, t + r, e - n + o, t + r, e - n + h, 0, !0), 0 !== h ? (this.v.setTripleAt(t + r - h, e - n, t + r - h, e - n, t + r - o, e - n, 1, !0), this.v.setTripleAt(t - r + h, e - n, t - r + o, e - n, t - r + h, e - n, 2, !0), this.v.setTripleAt(t - r, e - n + h, t - r, e - n + h, t - r, e - n + o, 3, !0), this.v.setTripleAt(t - r, e + n - h, t - r, e + n - o, t - r, e + n - h, 4, !0), this.v.setTripleAt(t - r + h, e + n, t - r + h, e + n, t - r + o, e + n, 5, !0), this.v.setTripleAt(t + r - h, e + n, t + r - o, e + n, t + r - h, e + n, 6, !0), this.v.setTripleAt(t + r, e + n - h, t + r, e + n - h, t + r, e + n - o, 7, !0)) : (this.v.setTripleAt(t - r, e - n, t - r + o, e - n, t - r, e - n, 1, !0), this.v.setTripleAt(t - r, e + n, t - r, e + n - o, t - r, e + n, 2, !0), this.v.setTripleAt(t + r, e + n, t + r - o, e + n, t + r, e + n, 3, !0)))
                                    },
                                    getValue: function() {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                                    },
                                    reset: n
                                }, v([Tt], t), t
                            }();

                        function k(t, data, e) {
                            var r;
                            return 3 === e || 4 === e ? r = (3 === e ? data.pt : data.ks).k.length ? new m(t, data, e) : new f(t, data, e) : 5 === e ? r = new _(t, data) : 6 === e ? r = new c(t, data) : 7 === e && (r = new y(t, data)), r.k && t.addDynamicProperty(r), r
                        }

                        function A() {
                            return f
                        }

                        function P() {
                            return m
                        }
                        var S = {};
                        return S.getShapeProp = k, S.getConstructorFunction = A, S.getKeyframedConstructorFunction = P, S
                    }(),
                    Nt = function() {
                        var t = Math.cos,
                            e = Math.sin,
                            r = Math.tan,
                            n = Math.round;

                        function h() {
                            return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                        }

                        function o(r) {
                            if (0 === r) return this;
                            var n = t(r),
                                h = e(r);
                            return this._t(n, -h, 0, 0, h, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        }

                        function l(r) {
                            if (0 === r) return this;
                            var n = t(r),
                                h = e(r);
                            return this._t(1, 0, 0, 0, 0, n, -h, 0, 0, h, n, 0, 0, 0, 0, 1)
                        }

                        function f(r) {
                            if (0 === r) return this;
                            var n = t(r),
                                h = e(r);
                            return this._t(n, 0, h, 0, 0, 1, 0, 0, -h, 0, n, 0, 0, 0, 0, 1)
                        }

                        function d(r) {
                            if (0 === r) return this;
                            var n = t(r),
                                h = e(r);
                            return this._t(n, -h, 0, 0, h, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        }

                        function m(t, e) {
                            return this._t(1, e, t, 1, 0, 0)
                        }

                        function c(t, e) {
                            return this.shear(r(t), r(e))
                        }

                        function y(n, h) {
                            var o = t(h),
                                l = e(h);
                            return this._t(o, l, 0, 0, -l, o, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(n), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(o, -l, 0, 0, l, o, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        }

                        function v(t, e, r) {
                            return r || 0 === r || (r = 1), 1 === t && 1 === e && 1 === r ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1)
                        }

                        function _(a, b, t, e, r, n, g, h, i, o, l, f, d, m, c, p) {
                            return this.props[0] = a, this.props[1] = b, this.props[2] = t, this.props[3] = e, this.props[4] = r, this.props[5] = n, this.props[6] = g, this.props[7] = h, this.props[8] = i, this.props[9] = o, this.props[10] = l, this.props[11] = f, this.props[12] = d, this.props[13] = m, this.props[14] = c, this.props[15] = p, this
                        }

                        function k(t, e, r) {
                            return r = r || 0, 0 !== t || 0 !== e || 0 !== r ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r, 1) : this
                        }

                        function P(t, e, r, n, h, o, l, h2, f, d, m, c, y, v, _, k) {
                            var A = this.props;
                            if (1 === t && 0 === e && 0 === r && 0 === n && 0 === h && 1 === o && 0 === l && 0 === h2 && 0 === f && 0 === d && 1 === m && 0 === c) return A[12] = A[12] * t + A[15] * y, A[13] = A[13] * o + A[15] * v, A[14] = A[14] * m + A[15] * _, A[15] *= k, this._identityCalculated = !1, this;
                            var P = A[0],
                                S = A[1],
                                w = A[2],
                                x = A[3],
                                D = A[4],
                                C = A[5],
                                M = A[6],
                                h1 = A[7],
                                F = A[8],
                                T = A[9],
                                E = A[10],
                                I = A[11],
                                L = A[12],
                                V = A[13],
                                z = A[14],
                                R = A[15];
                            return A[0] = P * t + S * h + w * f + x * y, A[1] = P * e + S * o + w * d + x * v, A[2] = P * r + S * l + w * m + x * _, A[3] = P * n + S * h2 + w * c + x * k, A[4] = D * t + C * h + M * f + h1 * y, A[5] = D * e + C * o + M * d + h1 * v, A[6] = D * r + C * l + M * m + h1 * _, A[7] = D * n + C * h2 + M * c + h1 * k, A[8] = F * t + T * h + E * f + I * y, A[9] = F * e + T * o + E * d + I * v, A[10] = F * r + T * l + E * m + I * _, A[11] = F * n + T * h2 + E * c + I * k, A[12] = L * t + V * h + z * f + R * y, A[13] = L * e + V * o + z * d + R * v, A[14] = L * r + V * l + z * m + R * _, A[15] = L * n + V * h2 + z * c + R * k, this._identityCalculated = !1, this
                        }

                        function S() {
                            return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
                        }

                        function w(t) {
                            for (var i = 0; i < 16;) {
                                if (t.props[i] !== this.props[i]) return !1;
                                i += 1
                            }
                            return !0
                        }

                        function x(t) {
                            var i;
                            for (i = 0; i < 16; i += 1) t.props[i] = this.props[i];
                            return t
                        }

                        function D(t) {
                            var i;
                            for (i = 0; i < 16; i += 1) this.props[i] = t[i]
                        }

                        function C(t, e, r) {
                            return {
                                x: t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12],
                                y: t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13],
                                z: t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
                            }
                        }

                        function M(t, e, r) {
                            return t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12]
                        }

                        function F(t, e, r) {
                            return t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13]
                        }

                        function T(t, e, r) {
                            return t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
                        }

                        function E() {
                            var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                                a = this.props[5] / t,
                                b = -this.props[1] / t,
                                e = -this.props[4] / t,
                                r = this.props[0] / t,
                                n = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                                h = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                                o = new Nt;
                            return o.props[0] = a, o.props[1] = b, o.props[4] = e, o.props[5] = r, o.props[12] = n, o.props[13] = h, o
                        }

                        function I(t) {
                            return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
                        }

                        function L(t) {
                            var i, e = t.length,
                                r = [];
                            for (i = 0; i < e; i += 1) r[i] = I(t[i]);
                            return r
                        }

                        function V(t, e, r) {
                            var n = A("float32", 6);
                            if (this.isIdentity()) n[0] = t[0], n[1] = t[1], n[2] = e[0], n[3] = e[1], n[4] = r[0], n[5] = r[1];
                            else {
                                var h = this.props[0],
                                    o = this.props[1],
                                    l = this.props[4],
                                    f = this.props[5],
                                    d = this.props[12],
                                    m = this.props[13];
                                n[0] = t[0] * h + t[1] * l + d, n[1] = t[0] * o + t[1] * f + m, n[2] = e[0] * h + e[1] * l + d, n[3] = e[0] * o + e[1] * f + m, n[4] = r[0] * h + r[1] * l + d, n[5] = r[0] * o + r[1] * f + m
                            }
                            return n
                        }

                        function z(t, e, r) {
                            return this.isIdentity() ? [t, e, r] : [t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]]
                        }

                        function R(t, e) {
                            if (this.isIdentity()) return t + "," + e;
                            var r = this.props;
                            return Math.round(100 * (t * r[0] + e * r[4] + r[12])) / 100 + "," + Math.round(100 * (t * r[1] + e * r[5] + r[13])) / 100
                        }

                        function N() {
                            for (var i = 0, t = this.props, e = "matrix3d(", r = 1e4; i < 16;) e += n(t[i] * r) / r, e += 15 === i ? ")" : ",", i += 1;
                            return e
                        }

                        function O(t) {
                            var e = 1e4;
                            return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? n(t * e) / e : t
                        }

                        function B() {
                            var t = this.props;
                            return "matrix(" + O(t[0]) + "," + O(t[1]) + "," + O(t[4]) + "," + O(t[5]) + "," + O(t[12]) + "," + O(t[13]) + ")"
                        }
                        return function() {
                            this.reset = h, this.rotate = o, this.rotateX = l, this.rotateY = f, this.rotateZ = d, this.skew = c, this.skewFromAxis = y, this.shear = m, this.scale = v, this.setTransform = _, this.translate = k, this.transform = P, this.applyToPoint = C, this.applyToX = M, this.applyToY = F, this.applyToZ = T, this.applyToPointArray = z, this.applyToTriplePoints = V, this.applyToPointStringified = R, this.toCSS = N, this.to2dCSS = B, this.clone = x, this.cloneFromProps = D, this.equals = w, this.inversePoints = L, this.inversePoint = I, this.getInverseMatrix = E, this._t = this.transform, this.isIdentity = S, this._identity = !0, this._identityCalculated = !1, this.props = A("float32", 16), this.reset()
                        }
                    }();

                function Ot(t) {
                    return Ot = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, Ot(t)
                }
                var Bt = {},
                    qt = "__[STANDALONE]__",
                    jt = "__[ANIMATIONDATA]__",
                    Wt = "";

                function Xt(t) {
                    m(t)
                }

                function Ht() {
                    !0 === qt ? At.searchAnimations(jt, qt, Wt) : At.searchAnimations()
                }

                function Yt(t) {
                    tt(t)
                }

                function Gt(t) {
                    ot(t)
                }

                function Jt(t) {
                    return !0 === qt && (t.animationData = JSON.parse(jt)), At.loadAnimation(t)
                }

                function Kt(t) {
                    if ("string" == typeof t) switch (t) {
                        case "high":
                            nt(200);
                            break;
                        default:
                        case "medium":
                            nt(50);
                            break;
                        case "low":
                            nt(10)
                    } else !isNaN(t) && t > 1 && nt(t);
                    ht() >= 50 ? N(!1) : N(!0)
                }

                function Ut() {
                    return "undefined" != typeof navigator
                }

                function Zt(t, e) {
                    "expressions" === t && it(e)
                }

                function Qt(t) {
                    switch (t) {
                        case "propertyFactory":
                            return Ft;
                        case "shapePropertyFactory":
                            return Rt;
                        case "matrix":
                            return Nt;
                        default:
                            return null
                    }
                }

                function $t() {
                    "complete" === document.readyState && (clearInterval(ae), Ht())
                }

                function te(t) {
                    for (var e = ee.split("&"), i = 0; i < e.length; i += 1) {
                        var r = e[i].split("=");
                        if (decodeURIComponent(r[0]) == t) return decodeURIComponent(r[1])
                    }
                    return null
                }
                Bt.play = At.play, Bt.pause = At.pause, Bt.setLocationHref = Xt, Bt.togglePause = At.togglePause, Bt.setSpeed = At.setSpeed, Bt.setDirection = At.setDirection, Bt.stop = At.stop, Bt.searchAnimations = Ht, Bt.registerAnimation = At.registerAnimation, Bt.loadAnimation = Jt, Bt.setSubframeRendering = Yt, Bt.resize = At.resize, Bt.goToAndStop = At.goToAndStop, Bt.destroy = At.destroy, Bt.setQuality = Kt, Bt.inBrowser = Ut, Bt.installPlugin = Zt, Bt.freeze = At.freeze, Bt.unfreeze = At.unfreeze, Bt.setVolume = At.setVolume, Bt.mute = At.mute, Bt.unmute = At.unmute, Bt.getRegisteredAnimations = At.getRegisteredAnimations, Bt.useWebWorker = f, Bt.setIDPrefix = Gt, Bt.__getFactory = Qt, Bt.version = "5.10.2";
                var ee = "";
                if (qt) {
                    var ie = document.getElementsByTagName("script"),
                        se = ie[ie.length - 1] || {
                            src: ""
                        };
                    ee = se.src ? se.src.replace(/^[^\?]+\??/, "") : "", Wt = te("renderer")
                }
                var ae = setInterval($t, 100);
                try {
                    "object" === Ot(e) && void 0 !== t || r(353) || (window.bodymovin = Bt)
                } catch (t) {}
                var re = function() {
                    var t = {},
                        e = {};

                    function r(t, r) {
                        e[t] || (e[t] = r)
                    }

                    function n(t, r, data) {
                        return new e[t](r, data)
                    }
                    return t.registerModifier = r, t.getModifier = n, t
                }();

                function ne() {}

                function he() {}

                function oe() {}
                ne.prototype.initModifierProperties = function() {}, ne.prototype.addShapeToModifier = function() {}, ne.prototype.addShape = function(data) {
                    if (!this.closed) {
                        data.sh.container.addDynamicProperty(data.sh);
                        var t = {
                            shape: data.sh,
                            data: data,
                            localShapeCollection: zt.newShapeCollection()
                        };
                        this.shapes.push(t), this.addShapeToModifier(t), this._isAnimated && data.setAsAnimated()
                    }
                }, ne.prototype.init = function(t, data) {
                    this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, data), this.frameId = l, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                }, ne.prototype.processKeys = function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
                }, v([Tt], ne), v([ne], he), he.prototype.initModifierProperties = function(t, data) {
                    this.s = Ft.getProp(t, data.s, 0, .01, this), this.e = Ft.getProp(t, data.e, 0, .01, this), this.o = Ft.getProp(t, data.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = data.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
                }, he.prototype.addShapeToModifier = function(t) {
                    t.pathsData = []
                }, he.prototype.calculateShapeEdges = function(s, t, e, r, n) {
                    var h = [];
                    t <= 1 ? h.push({
                        s: s,
                        e: t
                    }) : s >= 1 ? h.push({
                        s: s - 1,
                        e: t - 1
                    }) : (h.push({
                        s: s,
                        e: 1
                    }), h.push({
                        s: 0,
                        e: t - 1
                    }));
                    var i, o, l = [],
                        f = h.length;
                    for (i = 0; i < f; i += 1) {
                        var d, m;
                        (o = h[i]).e * n < r || o.s * n > r + e || (d = o.s * n <= r ? 0 : (o.s * n - r) / e, m = o.e * n >= r + e ? 1 : (o.e * n - r) / e, l.push([d, m]))
                    }
                    return l.length || l.push([0, 0]), l
                }, he.prototype.releasePathsData = function(t) {
                    var i, e = t.length;
                    for (i = 0; i < e; i += 1) Dt.release(t[i]);
                    return t.length = 0, t
                }, he.prototype.processShapes = function(t) {
                    var s, e, r, i;
                    if (this._mdf || t) {
                        var n = this.o.v % 360 / 360;
                        if (n < 0 && (n += 1), (s = this.s.v > 1 ? 1 + n : this.s.v < 0 ? 0 + n : this.s.v + n) > (e = this.e.v > 1 ? 1 + n : this.e.v < 0 ? 0 + n : this.e.v + n)) {
                            var h = s;
                            s = e, e = h
                        }
                        s = 1e-4 * Math.round(1e4 * s), e = 1e-4 * Math.round(1e4 * e), this.sValue = s, this.eValue = e
                    } else s = this.sValue, e = this.eValue;
                    var o, l, f, d, m, c = this.shapes.length,
                        y = 0;
                    if (e === s)
                        for (i = 0; i < c; i += 1) this.shapes[i].localShapeCollection.releaseShapes(), this.shapes[i].shape._mdf = !0, this.shapes[i].shape.paths = this.shapes[i].localShapeCollection, this._mdf && (this.shapes[i].pathsData.length = 0);
                    else if (1 === e && 0 === s || 0 === e && 1 === s) {
                        if (this._mdf)
                            for (i = 0; i < c; i += 1) this.shapes[i].pathsData.length = 0, this.shapes[i].shape._mdf = !0
                    } else {
                        var v, _, k = [];
                        for (i = 0; i < c; i += 1)
                            if ((v = this.shapes[i]).shape._mdf || this._mdf || t || 2 === this.m) {
                                if (l = (r = v.shape.paths)._length, m = 0, !v.shape._mdf && v.pathsData.length) m = v.totalShapeLength;
                                else {
                                    for (f = this.releasePathsData(v.pathsData), o = 0; o < l; o += 1) d = Mt.getSegmentsLength(r.shapes[o]), f.push(d), m += d.totalLength;
                                    v.totalShapeLength = m, v.pathsData = f
                                }
                                y += m, v.shape._mdf = !0
                            } else v.shape.paths = v.localShapeCollection;
                        var A, P = s,
                            S = e,
                            w = 0;
                        for (i = c - 1; i >= 0; i -= 1)
                            if ((v = this.shapes[i]).shape._mdf) {
                                for ((_ = v.localShapeCollection).releaseShapes(), 2 === this.m && c > 1 ? (A = this.calculateShapeEdges(s, e, v.totalShapeLength, w, y), w += v.totalShapeLength) : A = [
                                        [P, S]
                                    ], l = A.length, o = 0; o < l; o += 1) {
                                    P = A[o][0], S = A[o][1], k.length = 0, S <= 1 ? k.push({
                                        s: v.totalShapeLength * P,
                                        e: v.totalShapeLength * S
                                    }) : P >= 1 ? k.push({
                                        s: v.totalShapeLength * (P - 1),
                                        e: v.totalShapeLength * (S - 1)
                                    }) : (k.push({
                                        s: v.totalShapeLength * P,
                                        e: v.totalShapeLength
                                    }), k.push({
                                        s: 0,
                                        e: v.totalShapeLength * (S - 1)
                                    }));
                                    var x = this.addShapes(v, k[0]);
                                    if (k[0].s !== k[0].e) {
                                        if (k.length > 1)
                                            if (v.shape.paths.shapes[v.shape.paths._length - 1].c) {
                                                var D = x.pop();
                                                this.addPaths(x, _), x = this.addShapes(v, k[1], D)
                                            } else this.addPaths(x, _), x = this.addShapes(v, k[1]);
                                        this.addPaths(x, _)
                                    }
                                }
                                v.shape.paths = _
                            }
                    }
                }, he.prototype.addPaths = function(t, e) {
                    var i, r = t.length;
                    for (i = 0; i < r; i += 1) e.addShape(t[i])
                }, he.prototype.addSegment = function(t, e, r, n, h, o, l) {
                    h.setXYAt(e[0], e[1], "o", o), h.setXYAt(r[0], r[1], "i", o + 1), l && h.setXYAt(t[0], t[1], "v", o), h.setXYAt(n[0], n[1], "v", o + 1)
                }, he.prototype.addSegmentFromArray = function(t, e, r, n) {
                    e.setXYAt(t[1], t[5], "o", r), e.setXYAt(t[2], t[6], "i", r + 1), n && e.setXYAt(t[0], t[4], "v", r), e.setXYAt(t[3], t[7], "v", r + 1)
                }, he.prototype.addShapes = function(t, e, r) {
                    var i, n, h, o, l, f, d, m, c = t.pathsData,
                        y = t.shape.paths.shapes,
                        v = t.shape.paths._length,
                        _ = 0,
                        k = [],
                        A = !0;
                    for (r ? (l = r._length, m = r._length) : (r = Lt.newElement(), l = 0, m = 0), k.push(r), i = 0; i < v; i += 1) {
                        for (f = c[i].lengths, r.c = y[i].c, h = y[i].c ? f.length : f.length + 1, n = 1; n < h; n += 1)
                            if (_ + (o = f[n - 1]).addedLength < e.s) _ += o.addedLength, r.c = !1;
                            else {
                                if (_ > e.e) {
                                    r.c = !1;
                                    break
                                }
                                e.s <= _ && e.e >= _ + o.addedLength ? (this.addSegment(y[i].v[n - 1], y[i].o[n - 1], y[i].i[n], y[i].v[n], r, l, A), A = !1) : (d = Mt.getNewSegment(y[i].v[n - 1], y[i].v[n], y[i].o[n - 1], y[i].i[n], (e.s - _) / o.addedLength, (e.e - _) / o.addedLength, f[n - 1]), this.addSegmentFromArray(d, r, l, A), A = !1, r.c = !1), _ += o.addedLength, l += 1
                            }
                        if (y[i].c && f.length) {
                            if (o = f[n - 1], _ <= e.e) {
                                var P = f[n - 1].addedLength;
                                e.s <= _ && e.e >= _ + P ? (this.addSegment(y[i].v[n - 1], y[i].o[n - 1], y[i].i[0], y[i].v[0], r, l, A), A = !1) : (d = Mt.getNewSegment(y[i].v[n - 1], y[i].v[0], y[i].o[n - 1], y[i].i[0], (e.s - _) / P, (e.e - _) / P, f[n - 1]), this.addSegmentFromArray(d, r, l, A), A = !1, r.c = !1)
                            } else r.c = !1;
                            _ += o.addedLength, l += 1
                        }
                        if (r._length && (r.setXYAt(r.v[m][0], r.v[m][1], "i", m), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), _ > e.e) break;
                        i < v - 1 && (r = Lt.newElement(), A = !0, k.push(r), l = 0)
                    }
                    return k
                }, v([ne], oe), oe.prototype.initModifierProperties = function(t, data) {
                    this.getValue = this.processKeys, this.amount = Ft.getProp(t, data.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
                }, oe.prototype.processPath = function(path, t) {
                    var e = t / 100,
                        r = [0, 0],
                        n = path._length,
                        i = 0;
                    for (i = 0; i < n; i += 1) r[0] += path.v[i][0], r[1] += path.v[i][1];
                    r[0] /= n, r[1] /= n;
                    var h, o, l, f, d, m, c = Lt.newElement();
                    for (c.c = path.c, i = 0; i < n; i += 1) h = path.v[i][0] + (r[0] - path.v[i][0]) * e, o = path.v[i][1] + (r[1] - path.v[i][1]) * e, l = path.o[i][0] + (r[0] - path.o[i][0]) * -e, f = path.o[i][1] + (r[1] - path.o[i][1]) * -e, d = path.i[i][0] + (r[0] - path.i[i][0]) * -e, m = path.i[i][1] + (r[1] - path.i[i][1]) * -e, c.setTripleAt(h, o, l, f, d, m, i);
                    return c
                }, oe.prototype.processShapes = function(t) {
                    var e, i, r, n, h, o, l = this.shapes.length,
                        f = this.amount.v;
                    if (0 !== f)
                        for (i = 0; i < l; i += 1) {
                            if (o = (h = this.shapes[i]).localShapeCollection, h.shape._mdf || this._mdf || t)
                                for (o.releaseShapes(), h.shape._mdf = !0, e = h.shape.paths.shapes, n = h.shape.paths._length, r = 0; r < n; r += 1) o.addShape(this.processPath(e[r], f));
                            h.shape.paths = h.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                };
                var le = function() {
                    var t = [0, 0];

                    function e(t) {
                        var e = this._mdf;
                        this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                    }

                    function r(e) {
                        if (this.elem.globalData.frameId !== this.frameId) {
                            if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
                                var r;
                                if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                    var n, h;
                                    if (r = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (n = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / r, 0), h = this.p.getValueAtTime(this.p.keyframes[0].t / r, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (n = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / r, 0), h = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / r, 0)) : (n = this.p.pv, h = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / r, this.p.offsetTime));
                                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                        n = [], h = [];
                                        var o = this.px,
                                            l = this.py;
                                        o._caching.lastFrame + o.offsetTime <= o.keyframes[0].t ? (n[0] = o.getValueAtTime((o.keyframes[0].t + .01) / r, 0), n[1] = l.getValueAtTime((l.keyframes[0].t + .01) / r, 0), h[0] = o.getValueAtTime(o.keyframes[0].t / r, 0), h[1] = l.getValueAtTime(l.keyframes[0].t / r, 0)) : o._caching.lastFrame + o.offsetTime >= o.keyframes[o.keyframes.length - 1].t ? (n[0] = o.getValueAtTime(o.keyframes[o.keyframes.length - 1].t / r, 0), n[1] = l.getValueAtTime(l.keyframes[l.keyframes.length - 1].t / r, 0), h[0] = o.getValueAtTime((o.keyframes[o.keyframes.length - 1].t - .01) / r, 0), h[1] = l.getValueAtTime((l.keyframes[l.keyframes.length - 1].t - .01) / r, 0)) : (n = [o.pv, l.pv], h[0] = o.getValueAtTime((o._caching.lastFrame + o.offsetTime - .01) / r, o.offsetTime), h[1] = l.getValueAtTime((l._caching.lastFrame + l.offsetTime - .01) / r, l.offsetTime))
                                    } else n = h = t;
                                    this.v.rotate(-Math.atan2(n[1] - h[1], n[0] - h[0]))
                                }
                                this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                            }
                            this.frameId = this.elem.globalData.frameId
                        }
                    }

                    function n() {
                        if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                            if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                                if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                            }
                            this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                        }
                    }

                    function h() {}

                    function o(t) {
                        this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
                    }

                    function l(t, data, e) {
                        if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = data, this.v = new Nt, this.pre = new Nt, this.appliedTransformations = 0, this.initDynamicPropertyContainer(e || t), data.p && data.p.s ? (this.px = Ft.getProp(t, data.p.x, 0, 0, this), this.py = Ft.getProp(t, data.p.y, 0, 0, this), data.p.z && (this.pz = Ft.getProp(t, data.p.z, 0, 0, this))) : this.p = Ft.getProp(t, data.p || {
                                k: [0, 0, 0]
                            }, 1, 0, this), data.rx) {
                            if (this.rx = Ft.getProp(t, data.rx, 0, z, this), this.ry = Ft.getProp(t, data.ry, 0, z, this), this.rz = Ft.getProp(t, data.rz, 0, z, this), data.or.k[0].ti) {
                                var i, r = data.or.k.length;
                                for (i = 0; i < r; i += 1) data.or.k[i].to = null, data.or.k[i].ti = null
                            }
                            this.or = Ft.getProp(t, data.or, 1, z, this), this.or.sh = !0
                        } else this.r = Ft.getProp(t, data.r || {
                            k: 0
                        }, 0, z, this);
                        data.sk && (this.sk = Ft.getProp(t, data.sk, 0, z, this), this.sa = Ft.getProp(t, data.sa, 0, z, this)), this.a = Ft.getProp(t, data.a || {
                            k: [0, 0, 0]
                        }, 1, 0, this), this.s = Ft.getProp(t, data.s || {
                            k: [100, 100, 100]
                        }, 1, .01, this), data.o ? this.o = Ft.getProp(t, data.o, 0, .01, t) : this.o = {
                            _mdf: !1,
                            v: 1
                        }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
                    }

                    function f(t, data, e) {
                        return new l(t, data, e)
                    }
                    return l.prototype = {
                        applyToMatrix: e,
                        getValue: r,
                        precalculateMatrix: n,
                        autoOrient: h
                    }, v([Tt], l), l.prototype.addDynamicProperty = o, l.prototype._addDynamicProperty = Tt.prototype.addDynamicProperty, {
                        getTransformProperty: f
                    }
                }();

                function pe() {}

                function fe() {}

                function de(a, b) {
                    return 1e5 * Math.abs(a - b) <= Math.min(Math.abs(a), Math.abs(b))
                }

                function me(t) {
                    return Math.abs(t) <= 1e-5
                }

                function ce(t, e, r) {
                    return t * (1 - r) + e * r
                }

                function ue(t, e, r) {
                    return [ce(t[0], e[0], r), ce(t[1], e[1], r)]
                }

                function ge(a, b, t) {
                    if (0 === a) return [];
                    var s = b * b - 4 * a * t;
                    if (s < 0) return [];
                    var e = -b / (2 * a);
                    if (0 === s) return [e];
                    var r = Math.sqrt(s) / (2 * a);
                    return [e - r, e + r]
                }

                function ye(t, e, r, n) {
                    return [3 * e - t - 3 * r + n, 3 * t - 6 * e + 3 * r, -3 * t + 3 * e, t]
                }

                function ve(p) {
                    return new be(p, p, p, p, !1)
                }

                function be(t, e, r, n, h) {
                    h && Me(t, e) && (e = ue(t, n, 1 / 3)), h && Me(r, n) && (r = ue(t, n, 2 / 3));
                    var o = ye(t[0], e[0], r[0], n[0]),
                        l = ye(t[1], e[1], r[1], n[1]);
                    this.a = [o[0], l[0]], this.b = [o[1], l[1]], this.c = [o[2], l[2]], this.d = [o[3], l[3]], this.points = [t, e, r, n]
                }

                function _e(t, e) {
                    var r = t.points[0][e],
                        n = t.points[t.points.length - 1][e];
                    if (r > n) {
                        var h = n;
                        n = r, r = h
                    }
                    for (var o = ge(3 * t.a[e], 2 * t.b[e], t.c[e]), i = 0; i < o.length; i += 1)
                        if (o[i] > 0 && o[i] < 1) {
                            var l = t.point(o[i])[e];
                            l < r ? r = l : l > n && (n = l)
                        }
                    return {
                        min: r,
                        max: n
                    }
                }

                function ke(t, e, r) {
                    var n = t.boundingBox();
                    return {
                        cx: n.cx,
                        cy: n.cy,
                        width: n.width,
                        height: n.height,
                        bez: t,
                        t: (e + r) / 2,
                        t1: e,
                        t2: r
                    }
                }

                function Ae(data) {
                    var t = data.bez.split(.5);
                    return [ke(t[0], data.t1, data.t), ke(t[1], data.t, data.t2)]
                }

                function Pe(t, e) {
                    return 2 * Math.abs(t.cx - e.cx) < t.width + e.width && 2 * Math.abs(t.cy - e.cy) < t.height + e.height
                }

                function Se(t, e, r, n, h, o) {
                    if (Pe(t, e))
                        if (r >= o || t.width <= n && t.height <= n && e.width <= n && e.height <= n) h.push([t.t, e.t]);
                        else {
                            var l = Ae(t),
                                f = Ae(e);
                            Se(l[0], f[0], r + 1, n, h, o), Se(l[0], f[1], r + 1, n, h, o), Se(l[1], f[0], r + 1, n, h, o), Se(l[1], f[1], r + 1, n, h, o)
                        }
                }

                function we(a, b) {
                    return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]
                }

                function xe(t, e, r, n) {
                    var h = [t[0], t[1], 1],
                        o = [e[0], e[1], 1],
                        l = [r[0], r[1], 1],
                        f = [n[0], n[1], 1],
                        d = we(we(h, o), we(l, f));
                    return me(d[2]) ? null : [d[0] / d[2], d[1] / d[2]]
                }

                function De(p, t, e) {
                    return [p[0] + Math.cos(t) * e, p[1] - Math.sin(t) * e]
                }

                function Ce(t, e) {
                    return Math.hypot(t[0] - e[0], t[1] - e[1])
                }

                function Me(t, e) {
                    return de(t[0], e[0]) && de(t[1], e[1])
                }

                function Fe() {}

                function Te(t, e, r, n, h, o, l) {
                    var f = r - Math.PI / 2,
                        d = r + Math.PI / 2,
                        m = e[0] + Math.cos(r) * n * h,
                        c = e[1] - Math.sin(r) * n * h;
                    t.setTripleAt(m, c, m + Math.cos(f) * o, c - Math.sin(f) * o, m + Math.cos(d) * l, c - Math.sin(d) * l, t.length())
                }

                function Ee(t, e) {
                    var r = [e[0] - t[0], e[1] - t[1]],
                        n = .5 * -Math.PI;
                    return [Math.cos(n) * r[0] - Math.sin(n) * r[1], Math.sin(n) * r[0] + Math.cos(n) * r[1]]
                }

                function Ie(path, t) {
                    var e = 0 === t ? path.length() - 1 : t - 1,
                        r = (t + 1) % path.length(),
                        n = Ee(path.v[e], path.v[r]);
                    return Math.atan2(0, 1) - Math.atan2(n[1], n[0])
                }

                function Le(t, path, e, r, n, h, o) {
                    var l = Ie(path, e),
                        f = path.v[e % path._length],
                        d = path.v[0 === e ? path._length - 1 : e - 1],
                        m = path.v[(e + 1) % path._length],
                        c = 2 === h ? Math.sqrt(Math.pow(f[0] - d[0], 2) + Math.pow(f[1] - d[1], 2)) : 0,
                        y = 2 === h ? Math.sqrt(Math.pow(f[0] - m[0], 2) + Math.pow(f[1] - m[1], 2)) : 0;
                    Te(t, path.v[e % path._length], l, o, r, y / (2 * (n + 1)), c / (2 * (n + 1)), h)
                }

                function Ve(t, e, r, n, h, o) {
                    for (var i = 0; i < n; i += 1) {
                        var l = (i + 1) / (n + 1),
                            f = 2 === h ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0,
                            d = e.normalAngle(l);
                        Te(t, e.point(l), d, o, r, f / (2 * (n + 1)), f / (2 * (n + 1)), h), o = -o
                    }
                    return o
                }

                function ze(t, e, r) {
                    var n = Math.atan2(e[0] - t[0], e[1] - t[1]);
                    return [De(t, n, r), De(e, n, r)]
                }

                function Re(t, e) {
                    var r, n, h, o, l, f, d;
                    r = (d = ze(t.points[0], t.points[1], e))[0], n = d[1], h = (d = ze(t.points[1], t.points[2], e))[0], o = d[1], l = (d = ze(t.points[2], t.points[3], e))[0], f = d[1];
                    var m = xe(r, n, h, o);
                    null === m && (m = n);
                    var c = xe(l, f, h, o);
                    return null === c && (c = l), new be(r, m, c, f)
                }

                function Ne(t, e, r, n, h) {
                    var o = e.points[3],
                        l = r.points[0];
                    if (3 === n) return o;
                    if (Me(o, l)) return o;
                    if (2 === n) {
                        var f = -e.tangentAngle(1),
                            d = -r.tangentAngle(0) + Math.PI,
                            m = xe(o, De(o, f + Math.PI / 2, 100), l, De(l, f + Math.PI / 2, 100)),
                            c = m ? Ce(m, o) : Ce(o, l) / 2,
                            y = De(o, f, 2 * c * R);
                        return t.setXYAt(y[0], y[1], "o", t.length() - 1), y = De(l, d, 2 * c * R), t.setTripleAt(l[0], l[1], l[0], l[1], y[0], y[1], t.length()), l
                    }
                    var v = xe(Me(o, e.points[2]) ? e.points[0] : e.points[2], o, l, Me(l, r.points[1]) ? r.points[3] : r.points[1]);
                    return v && Ce(v, o) < h ? (t.setTripleAt(v[0], v[1], v[0], v[1], v[0], v[1], t.length()), v) : o
                }

                function Oe(a, b) {
                    var t = a.intersections(b);
                    return t.length && de(t[0][0], 1) && t.shift(), t.length ? t[0] : null
                }

                function Be(a, b) {
                    var t = a.slice(),
                        e = b.slice(),
                        r = Oe(a[a.length - 1], b[0]);
                    return r && (t[a.length - 1] = a[a.length - 1].split(r[0])[0], e[0] = b[0].split(r[1])[1]), a.length > 1 && b.length > 1 && (r = Oe(a[0], b[b.length - 1])) ? [
                        [a[0].split(r[0])[0]],
                        [b[b.length - 1].split(r[1])[1]]
                    ] : [t, e]
                }

                function qe(t) {
                    for (var e, i = 1; i < t.length; i += 1) e = Be(t[i - 1], t[i]), t[i - 1] = e[0], t[i] = e[1];
                    return t.length > 1 && (e = Be(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t
                }

                function je(t, e) {
                    var r, n, h, o, l = t.inflectionPoints();
                    if (0 === l.length) return [Re(t, e)];
                    if (1 === l.length || de(l[1], 1)) return r = (h = t.split(l[0]))[0], n = h[1], [Re(r, e), Re(n, e)];
                    r = (h = t.split(l[0]))[0];
                    var f = (l[1] - l[0]) / (1 - l[0]);
                    return o = (h = h[1].split(f))[0], n = h[1], [Re(r, e), Re(o, e), Re(n, e)]
                }

                function We() {}

                function Xe(t) {
                    for (var e = t.fStyle ? t.fStyle.split(" ") : [], r = "normal", n = "normal", h = e.length, i = 0; i < h; i += 1) switch (e[i].toLowerCase()) {
                        case "italic":
                            n = "italic";
                            break;
                        case "bold":
                            r = "700";
                            break;
                        case "black":
                            r = "900";
                            break;
                        case "medium":
                            r = "500";
                            break;
                        case "regular":
                        case "normal":
                            r = "400";
                            break;
                        case "light":
                        case "thin":
                            r = "200"
                    }
                    return {
                        style: n,
                        weight: t.fWeight || r
                    }
                }
                v([ne], pe), pe.prototype.initModifierProperties = function(t, data) {
                    this.getValue = this.processKeys, this.c = Ft.getProp(t, data.c, 0, null, this), this.o = Ft.getProp(t, data.o, 0, null, this), this.tr = le.getTransformProperty(t, data.tr, this), this.so = Ft.getProp(t, data.tr.so, 0, .01, this), this.eo = Ft.getProp(t, data.tr.eo, 0, .01, this), this.data = data, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Nt, this.rMatrix = new Nt, this.sMatrix = new Nt, this.tMatrix = new Nt, this.matrix = new Nt
                }, pe.prototype.applyTransforms = function(t, e, r, n, h, o) {
                    var l = o ? -1 : 1,
                        f = n.s.v[0] + (1 - n.s.v[0]) * (1 - h),
                        d = n.s.v[1] + (1 - n.s.v[1]) * (1 - h);
                    t.translate(n.p.v[0] * l * h, n.p.v[1] * l * h, n.p.v[2]), e.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]), e.rotate(-n.r.v * l * h), e.translate(n.a.v[0], n.a.v[1], n.a.v[2]), r.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]), r.scale(o ? 1 / f : f, o ? 1 / d : d), r.translate(n.a.v[0], n.a.v[1], n.a.v[2])
                }, pe.prototype.init = function(t, e, r, n) {
                    for (this.elem = t, this.arr = e, this.pos = r, this.elemsData = n, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[r]); r > 0;) r -= 1, this._elements.unshift(e[r]);
                    this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                }, pe.prototype.resetElements = function(t) {
                    var i, e = t.length;
                    for (i = 0; i < e; i += 1) t[i]._processed = !1, "gr" === t[i].ty && this.resetElements(t[i].it)
                }, pe.prototype.cloneElements = function(t) {
                    var e = JSON.parse(JSON.stringify(t));
                    return this.resetElements(e), e
                }, pe.prototype.changeGroupRender = function(t, e) {
                    var i, r = t.length;
                    for (i = 0; i < r; i += 1) t[i]._render = e, "gr" === t[i].ty && this.changeGroupRender(t[i].it, e)
                }, pe.prototype.processShapes = function(t) {
                    var e, r, i, n, h, o = !1;
                    if (this._mdf || t) {
                        var l, f = Math.ceil(this.c.v);
                        if (this._groups.length < f) {
                            for (; this._groups.length < f;) {
                                var d = {
                                    it: this.cloneElements(this._elements),
                                    ty: "gr"
                                };
                                d.it.push({
                                    a: {
                                        a: 0,
                                        ix: 1,
                                        k: [0, 0]
                                    },
                                    nm: "Transform",
                                    o: {
                                        a: 0,
                                        ix: 7,
                                        k: 100
                                    },
                                    p: {
                                        a: 0,
                                        ix: 2,
                                        k: [0, 0]
                                    },
                                    r: {
                                        a: 1,
                                        ix: 6,
                                        k: [{
                                            s: 0,
                                            e: 0,
                                            t: 0
                                        }, {
                                            s: 0,
                                            e: 0,
                                            t: 1
                                        }]
                                    },
                                    s: {
                                        a: 0,
                                        ix: 3,
                                        k: [100, 100]
                                    },
                                    sa: {
                                        a: 0,
                                        ix: 5,
                                        k: 0
                                    },
                                    sk: {
                                        a: 0,
                                        ix: 4,
                                        k: 0
                                    },
                                    ty: "tr"
                                }), this.arr.splice(0, 0, d), this._groups.splice(0, 0, d), this._currentCopies += 1
                            }
                            this.elem.reloadShapes(), o = !0
                        }
                        for (h = 0, i = 0; i <= this._groups.length - 1; i += 1) {
                            if (l = h < f, this._groups[i]._render = l, this.changeGroupRender(this._groups[i].it, l), !l) {
                                var m = this.elemsData[i].it,
                                    c = m[m.length - 1];
                                0 !== c.transform.op.v ? (c.transform.op._mdf = !0, c.transform.op.v = 0) : c.transform.op._mdf = !1
                            }
                            h += 1
                        }
                        this._currentCopies = f;
                        var y = this.o.v,
                            v = y % 1,
                            _ = y > 0 ? Math.floor(y) : Math.ceil(y),
                            k = this.pMatrix.props,
                            A = this.rMatrix.props,
                            P = this.sMatrix.props;
                        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                        var S, w, x = 0;
                        if (y > 0) {
                            for (; x < _;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), x += 1;
                            v && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, v, !1), x += v)
                        } else if (y < 0) {
                            for (; x > _;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), x -= 1;
                            v && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -v, !0), x -= v)
                        }
                        for (i = 1 === this.data.m ? 0 : this._currentCopies - 1, n = 1 === this.data.m ? 1 : -1, h = this._currentCopies; h;) {
                            if (w = (r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), 0 !== x) {
                                for ((0 !== i && 1 === n || i !== this._currentCopies - 1 && -1 === n) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(A[0], A[1], A[2], A[3], A[4], A[5], A[6], A[7], A[8], A[9], A[10], A[11], A[12], A[13], A[14], A[15]), this.matrix.transform(P[0], P[1], P[2], P[3], P[4], P[5], P[6], P[7], P[8], P[9], P[10], P[11], P[12], P[13], P[14], P[15]), this.matrix.transform(k[0], k[1], k[2], k[3], k[4], k[5], k[6], k[7], k[8], k[9], k[10], k[11], k[12], k[13], k[14], k[15]), S = 0; S < w; S += 1) r[S] = this.matrix.props[S];
                                this.matrix.reset()
                            } else
                                for (this.matrix.reset(), S = 0; S < w; S += 1) r[S] = this.matrix.props[S];
                            x += 1, h -= 1, i += n
                        }
                    } else
                        for (h = this._currentCopies, i = 0, n = 1; h;) r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, h -= 1, i += n;
                    return o
                }, pe.prototype.addShape = function() {}, v([ne], fe), fe.prototype.initModifierProperties = function(t, data) {
                    this.getValue = this.processKeys, this.rd = Ft.getProp(t, data.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
                }, fe.prototype.processPath = function(path, t) {
                    var i, e = Lt.newElement();
                    e.c = path.c;
                    var r, n, h, o, l, f, d, m, c, y, v, _, k = path._length,
                        A = 0;
                    for (i = 0; i < k; i += 1) r = path.v[i], h = path.o[i], n = path.i[i], r[0] === h[0] && r[1] === h[1] && r[0] === n[0] && r[1] === n[1] ? 0 !== i && i !== k - 1 || path.c ? (o = 0 === i ? path.v[k - 1] : path.v[i - 1], f = (l = Math.sqrt(Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2))) ? Math.min(l / 2, t) / l : 0, d = v = r[0] + (o[0] - r[0]) * f, m = _ = r[1] - (r[1] - o[1]) * f, c = d - (d - r[0]) * R, y = m - (m - r[1]) * R, e.setTripleAt(d, m, c, y, v, _, A), A += 1, o = i === k - 1 ? path.v[0] : path.v[i + 1], f = (l = Math.sqrt(Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2))) ? Math.min(l / 2, t) / l : 0, d = c = r[0] + (o[0] - r[0]) * f, m = y = r[1] + (o[1] - r[1]) * f, v = d - (d - r[0]) * R, _ = m - (m - r[1]) * R, e.setTripleAt(d, m, c, y, v, _, A), A += 1) : (e.setTripleAt(r[0], r[1], h[0], h[1], n[0], n[1], A), A += 1) : (e.setTripleAt(path.v[i][0], path.v[i][1], path.o[i][0], path.o[i][1], path.i[i][0], path.i[i][1], A), A += 1);
                    return e
                }, fe.prototype.processShapes = function(t) {
                    var e, i, r, n, h, o, l = this.shapes.length,
                        f = this.rd.v;
                    if (0 !== f)
                        for (i = 0; i < l; i += 1) {
                            if (o = (h = this.shapes[i]).localShapeCollection, h.shape._mdf || this._mdf || t)
                                for (o.releaseShapes(), h.shape._mdf = !0, e = h.shape.paths.shapes, n = h.shape.paths._length, r = 0; r < n; r += 1) o.addShape(this.processPath(e[r], f));
                            h.shape.paths = h.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                }, be.prototype.point = function(t) {
                    return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]]
                }, be.prototype.derivative = function(t) {
                    return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]]
                }, be.prototype.tangentAngle = function(t) {
                    var p = this.derivative(t);
                    return Math.atan2(p[1], p[0])
                }, be.prototype.normalAngle = function(t) {
                    var p = this.derivative(t);
                    return Math.atan2(p[0], p[1])
                }, be.prototype.inflectionPoints = function() {
                    var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
                    if (me(t)) return [];
                    var e = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t,
                        r = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
                    if (r < 0) return [];
                    var n = Math.sqrt(r);
                    return me(n) ? n > 0 && n < 1 ? [e] : [] : [e - n, e + n].filter((function(t) {
                        return t > 0 && t < 1
                    }))
                }, be.prototype.split = function(t) {
                    if (t <= 0) return [ve(this.points[0]), this];
                    if (t >= 1) return [this, ve(this.points[this.points.length - 1])];
                    var e = ue(this.points[0], this.points[1], t),
                        r = ue(this.points[1], this.points[2], t),
                        n = ue(this.points[2], this.points[3], t),
                        h = ue(e, r, t),
                        o = ue(r, n, t),
                        l = ue(h, o, t);
                    return [new be(this.points[0], e, h, l, !0), new be(l, o, n, this.points[3], !0)]
                }, be.prototype.bounds = function() {
                    return {
                        x: _e(this, 0),
                        y: _e(this, 1)
                    }
                }, be.prototype.boundingBox = function() {
                    var t = this.bounds();
                    return {
                        left: t.x.min,
                        right: t.x.max,
                        top: t.y.min,
                        bottom: t.y.max,
                        width: t.x.max - t.x.min,
                        height: t.y.max - t.y.min,
                        cx: (t.x.max + t.x.min) / 2,
                        cy: (t.y.max + t.y.min) / 2
                    }
                }, be.prototype.intersections = function(t, e, r) {
                    void 0 === e && (e = 2), void 0 === r && (r = 7);
                    var n = [];
                    return Se(ke(this, 0, 1), ke(t, 0, 1), 0, e, n, r), n
                }, be.shapeSegment = function(t, e) {
                    var r = (e + 1) % t.length();
                    return new be(t.v[e], t.o[e], t.i[r], t.v[r], !0)
                }, be.shapeSegmentInverted = function(t, e) {
                    var r = (e + 1) % t.length();
                    return new be(t.v[r], t.i[r], t.o[e], t.v[e], !0)
                }, v([ne], Fe), Fe.prototype.initModifierProperties = function(t, data) {
                    this.getValue = this.processKeys, this.amplitude = Ft.getProp(t, data.s, 0, null, this), this.frequency = Ft.getProp(t, data.r, 0, null, this), this.pointsType = Ft.getProp(t, data.pt, 0, null, this), this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length
                }, Fe.prototype.processPath = function(path, t, e, r) {
                    var n = path._length,
                        h = Lt.newElement();
                    if (h.c = path.c, path.c || (n -= 1), 0 === n) return h;
                    var o = -1,
                        l = be.shapeSegment(path, 0);
                    Le(h, path, 0, t, e, r, o);
                    for (var i = 0; i < n; i += 1) o = Ve(h, l, t, e, r, -o), l = i !== n - 1 || path.c ? be.shapeSegment(path, (i + 1) % n) : null, Le(h, path, i + 1, t, e, r, o);
                    return h
                }, Fe.prototype.processShapes = function(t) {
                    var e, i, r, n, h, o, l = this.shapes.length,
                        f = this.amplitude.v,
                        d = Math.max(0, Math.round(this.frequency.v)),
                        m = this.pointsType.v;
                    if (0 !== f)
                        for (i = 0; i < l; i += 1) {
                            if (o = (h = this.shapes[i]).localShapeCollection, h.shape._mdf || this._mdf || t)
                                for (o.releaseShapes(), h.shape._mdf = !0, e = h.shape.paths.shapes, n = h.shape.paths._length, r = 0; r < n; r += 1) o.addShape(this.processPath(e[r], f, d, m));
                            h.shape.paths = h.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                }, v([ne], We), We.prototype.initModifierProperties = function(t, data) {
                    this.getValue = this.processKeys, this.amount = Ft.getProp(t, data.a, 0, null, this), this.miterLimit = Ft.getProp(t, data.ml, 0, null, this), this.lineJoin = data.lj, this._isAnimated = 0 !== this.amount.effectsSequence.length
                }, We.prototype.processPath = function(t, e, r, n) {
                    var h = Lt.newElement();
                    h.c = t.c;
                    var i, o, l, f = t.length();
                    t.c || (f -= 1);
                    var d = [];
                    for (i = 0; i < f; i += 1) l = be.shapeSegment(t, i), d.push(je(l, e));
                    if (!t.c)
                        for (i = f - 1; i >= 0; i -= 1) l = be.shapeSegmentInverted(t, i), d.push(je(l, e));
                    d = qe(d);
                    var m = null,
                        c = null;
                    for (i = 0; i < d.length; i += 1) {
                        var y = d[i];
                        for (c && (m = Ne(h, c, y[0], r, n)), c = y[y.length - 1], o = 0; o < y.length; o += 1) l = y[o], m && Me(l.points[0], m) ? h.setXYAt(l.points[1][0], l.points[1][1], "o", h.length() - 1) : h.setTripleAt(l.points[0][0], l.points[0][1], l.points[1][0], l.points[1][1], l.points[0][0], l.points[0][1], h.length()), h.setTripleAt(l.points[3][0], l.points[3][1], l.points[3][0], l.points[3][1], l.points[2][0], l.points[2][1], h.length()), m = l.points[3]
                    }
                    return d.length && Ne(h, c, d[0][0], r, n), h
                }, We.prototype.processShapes = function(t) {
                    var e, i, r, n, h, o, l = this.shapes.length,
                        f = this.amount.v,
                        d = this.miterLimit.v,
                        m = this.lineJoin;
                    if (0 !== f)
                        for (i = 0; i < l; i += 1) {
                            if (o = (h = this.shapes[i]).localShapeCollection, h.shape._mdf || this._mdf || t)
                                for (o.releaseShapes(), h.shape._mdf = !0, e = h.shape.paths.shapes, n = h.shape.paths._length, r = 0; r < n; r += 1) o.addShape(this.processPath(e[r], f, m, d));
                            h.shape.paths = h.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                };
                var He = function() {
                    var t = 5e3,
                        e = {
                            w: 0,
                            size: 0,
                            shapes: [],
                            data: {
                                shapes: []
                            }
                        },
                        r = [];
                    r = r.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                    var n = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"],
                        h = [65039, 8205];

                    function o(t) {
                        var i, e = t.split(","),
                            r = e.length,
                            n = [];
                        for (i = 0; i < r; i += 1) "sans-serif" !== e[i] && "monospace" !== e[i] && n.push(e[i]);
                        return n.join(",")
                    }

                    function l(t, e) {
                        var r = y("span");
                        r.setAttribute("aria-hidden", !0), r.style.fontFamily = e;
                        var n = y("span");
                        n.innerText = "giItT1WQy@!-/#", r.style.position = "absolute", r.style.left = "-10000px", r.style.top = "-10000px", r.style.fontSize = "300px", r.style.fontVariant = "normal", r.style.fontStyle = "normal", r.style.fontWeight = "normal", r.style.letterSpacing = "0", r.appendChild(n), document.body.appendChild(r);
                        var h = n.offsetWidth;
                        return n.style.fontFamily = o(t) + ", " + e, {
                            node: n,
                            w: h,
                            parent: r
                        }
                    }

                    function f() {
                        var i, e, r, n = this.fonts.length,
                            h = n;
                        for (i = 0; i < n; i += 1) this.fonts[i].loaded ? h -= 1 : "n" === this.fonts[i].fOrigin || 0 === this.fonts[i].origin ? this.fonts[i].loaded = !0 : (e = this.fonts[i].monoCase.node, r = this.fonts[i].monoCase.w, e.offsetWidth !== r ? (h -= 1, this.fonts[i].loaded = !0) : (e = this.fonts[i].sansCase.node, r = this.fonts[i].sansCase.w, e.offsetWidth !== r && (h -= 1, this.fonts[i].loaded = !0)), this.fonts[i].loaded && (this.fonts[i].sansCase.parent.parentNode.removeChild(this.fonts[i].sansCase.parent), this.fonts[i].monoCase.parent.parentNode.removeChild(this.fonts[i].monoCase.parent)));
                        0 !== h && Date.now() - this.initTime < t ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                    }

                    function d(t, e) {
                        var r, n = document.body && e ? "svg" : "canvas",
                            h = Xe(t);
                        if ("svg" === n) {
                            var o = lt("text");
                            o.style.fontSize = "100px", o.setAttribute("font-family", t.fFamily), o.setAttribute("font-style", h.style), o.setAttribute("font-weight", h.weight), o.textContent = "1", t.fClass ? (o.style.fontFamily = "inherit", o.setAttribute("class", t.fClass)) : o.style.fontFamily = t.fFamily, e.appendChild(o), r = o
                        } else {
                            var l = new OffscreenCanvas(500, 500).getContext("2d");
                            l.font = h.style + " " + h.weight + " 100px " + t.fFamily, r = l
                        }

                        function f(text) {
                            return "svg" === n ? (r.textContent = text, r.getComputedTextLength()) : r.measureText(text).width
                        }
                        return {
                            measureText: f
                        }
                    }

                    function m(t, defs) {
                        if (t) {
                            if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
                            if (!document.body) return this.isLoaded = !0, t.list.forEach((function(data) {
                                data.helper = d(data), data.cache = {}
                            })), void(this.fonts = t.list);
                            var i, e = t.list,
                                r = e.length,
                                n = r;
                            for (i = 0; i < r; i += 1) {
                                var h, o, f = !0;
                                if (e[i].loaded = !1, e[i].monoCase = l(e[i].fFamily, "monospace"), e[i].sansCase = l(e[i].fFamily, "sans-serif"), e[i].fPath) {
                                    if ("p" === e[i].fOrigin || 3 === e[i].origin) {
                                        if ((h = document.querySelectorAll('style[f-forigin="p"][f-family="' + e[i].fFamily + '"], style[f-origin="3"][f-family="' + e[i].fFamily + '"]')).length > 0 && (f = !1), f) {
                                            var s = y("style");
                                            s.setAttribute("f-forigin", e[i].fOrigin), s.setAttribute("f-origin", e[i].origin), s.setAttribute("f-family", e[i].fFamily), s.type = "text/css", s.innerText = "@font-face {font-family: " + e[i].fFamily + "; font-style: normal; src: url('" + e[i].fPath + "');}", defs.appendChild(s)
                                        }
                                    } else if ("g" === e[i].fOrigin || 1 === e[i].origin) {
                                        for (h = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), o = 0; o < h.length; o += 1) - 1 !== h[o].href.indexOf(e[i].fPath) && (f = !1);
                                        if (f) {
                                            var m = y("link");
                                            m.setAttribute("f-forigin", e[i].fOrigin), m.setAttribute("f-origin", e[i].origin), m.type = "text/css", m.rel = "stylesheet", m.href = e[i].fPath, document.body.appendChild(m)
                                        }
                                    } else if ("t" === e[i].fOrigin || 2 === e[i].origin) {
                                        for (h = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), o = 0; o < h.length; o += 1) e[i].fPath === h[o].src && (f = !1);
                                        if (f) {
                                            var c = y("link");
                                            c.setAttribute("f-forigin", e[i].fOrigin), c.setAttribute("f-origin", e[i].origin), c.setAttribute("rel", "stylesheet"), c.setAttribute("href", e[i].fPath), defs.appendChild(c)
                                        }
                                    }
                                } else e[i].loaded = !0, n -= 1;
                                e[i].helper = d(e[i], defs), e[i].cache = {}, this.fonts.push(e[i])
                            }
                            0 === n ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                        } else this.isLoaded = !0
                    }

                    function c(t) {
                        if (t) {
                            var i;
                            this.chars || (this.chars = []);
                            var e, r, n = t.length,
                                h = this.chars.length;
                            for (i = 0; i < n; i += 1) {
                                for (e = 0, r = !1; e < h;) this.chars[e].style === t[i].style && this.chars[e].fFamily === t[i].fFamily && this.chars[e].ch === t[i].ch && (r = !0), e += 1;
                                r || (this.chars.push(t[i]), h += 1)
                            }
                        }
                    }

                    function v(t, style, r) {
                        for (var i = 0, n = this.chars.length; i < n;) {
                            if (this.chars[i].ch === t && this.chars[i].style === style && this.chars[i].fFamily === r) return this.chars[i];
                            i += 1
                        }
                        return ("string" == typeof t && 13 !== t.charCodeAt(0) || !t) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", t, style, r)), e
                    }

                    function _(t, e, r) {
                        var n = this.getFontByName(e),
                            h = t.charCodeAt(0);
                        if (!n.cache[h + 1]) {
                            var o = n.helper;
                            if (" " === t) {
                                var l = o.measureText("|" + t + "|"),
                                    f = o.measureText("||");
                                n.cache[h + 1] = (l - f) / 100
                            } else n.cache[h + 1] = o.measureText(t) / 100
                        }
                        return n.cache[h + 1] * r
                    }

                    function k(t) {
                        for (var i = 0, e = this.fonts.length; i < e;) {
                            if (this.fonts[i].fName === t) return this.fonts[i];
                            i += 1
                        }
                        return this.fonts[0]
                    }

                    function A(t, e) {
                        var r = t.toString(16) + e.toString(16);
                        return -1 !== n.indexOf(r)
                    }

                    function P(t, e) {
                        return e ? t === h[0] && e === h[1] : t === h[1]
                    }

                    function S(t) {
                        return -1 !== r.indexOf(t)
                    }

                    function w() {
                        this.isLoaded = !0
                    }
                    var x = function() {
                        this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
                    };
                    x.isModifier = A, x.isZeroWidthJoiner = P, x.isCombinedCharacter = S;
                    var D = {
                        addChars: c,
                        addFonts: m,
                        getCharData: v,
                        getFontByName: k,
                        measureText: _,
                        checkLoadedFonts: f,
                        setIsLoaded: w
                    };
                    return x.prototype = D, x
                }();

                function Ye() {}
                Ye.prototype = {
                    initRenderable: function() {
                        this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
                    },
                    addRenderableComponent: function(component) {
                        -1 === this.renderableComponents.indexOf(component) && this.renderableComponents.push(component)
                    },
                    removeRenderableComponent: function(component) {
                        -1 !== this.renderableComponents.indexOf(component) && this.renderableComponents.splice(this.renderableComponents.indexOf(component), 1)
                    },
                    prepareRenderableFrame: function(t) {
                        this.checkLayerLimits(t)
                    },
                    checkTransparency: function() {
                        this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
                    },
                    checkLayerLimits: function(t) {
                        this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
                    },
                    renderRenderable: function() {
                        var i, t = this.renderableComponents.length;
                        for (i = 0; i < t; i += 1) this.renderableComponents[i].renderFrame(this._isFirstFrame)
                    },
                    sourceRectAtTime: function() {
                        return {
                            top: 0,
                            left: 0,
                            width: 100,
                            height: 100
                        }
                    },
                    getLayerSize: function() {
                        return 5 === this.data.ty ? {
                            w: this.data.textData.width,
                            h: this.data.textData.height
                        } : {
                            w: this.data.width,
                            h: this.data.height
                        }
                    }
                };
                var Ge, Je = (Ge = {
                    0: "source-over",
                    1: "multiply",
                    2: "screen",
                    3: "overlay",
                    4: "darken",
                    5: "lighten",
                    6: "color-dodge",
                    7: "color-burn",
                    8: "hard-light",
                    9: "soft-light",
                    10: "difference",
                    11: "exclusion",
                    12: "hue",
                    13: "saturation",
                    14: "color",
                    15: "luminosity"
                }, function(t) {
                    return Ge[t] || ""
                });

                function Ke(data, t, e) {
                    this.p = Ft.getProp(t, data.v, 0, 0, e)
                }

                function Ue(data, t, e) {
                    this.p = Ft.getProp(t, data.v, 0, 0, e)
                }

                function Ze(data, t, e) {
                    this.p = Ft.getProp(t, data.v, 1, 0, e)
                }

                function Qe(data, t, e) {
                    this.p = Ft.getProp(t, data.v, 1, 0, e)
                }

                function $e(data, t, e) {
                    this.p = Ft.getProp(t, data.v, 0, 0, e)
                }

                function ti(data, t, e) {
                    this.p = Ft.getProp(t, data.v, 0, 0, e)
                }

                function ei(data, t, e) {
                    this.p = Ft.getProp(t, data.v, 0, 0, e)
                }

                function ii() {
                    this.p = {}
                }

                function si(data, element) {
                    var i, t = data.ef || [];
                    this.effectElements = [];
                    var e, r = t.length;
                    for (i = 0; i < r; i += 1) e = new ai(t[i], element), this.effectElements.push(e)
                }

                function ai(data, element) {
                    this.init(data, element)
                }

                function ri() {}

                function ni() {}

                function hi(data, t, e) {
                    this.initFrame(), this.initRenderable(), this.assetData = t.getAssetData(data.refId), this.footageData = t.imageLoader.getAsset(this.assetData), this.initBaseData(data, t, e)
                }

                function oi(data, t, e) {
                    this.initFrame(), this.initRenderable(), this.assetData = t.getAssetData(data.refId), this.initBaseData(data, t, e), this._isPlaying = !1, this._canPlay = !1;
                    var r = this.globalData.getAssetsPath(this.assetData);
                    this.audio = this.globalData.audioController.createAudio(r), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = data.tm ? Ft.getProp(this, data.tm, 0, t.frameRate, this) : {
                        _placeholder: !0
                    }, this.lv = Ft.getProp(this, data.au && data.au.lv ? data.au.lv : {
                        k: [100]
                    }, 1, .01, this)
                }

                function pi() {}

                function fi() {}

                function di(data, element, t) {
                    this.data = data, this.element = element, this.globalData = t, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
                    var i, path, defs = this.globalData.defs,
                        e = this.masksProperties ? this.masksProperties.length : 0;
                    this.viewData = P(e), this.solidPath = "";
                    var r, n, rect, h, o, l, f = this.masksProperties,
                        d = 0,
                        m = [],
                        y = J(),
                        v = "clipPath",
                        _ = "clip-path";
                    for (i = 0; i < e; i += 1)
                        if (("a" !== f[i].mode && "n" !== f[i].mode || f[i].inv || 100 !== f[i].o.k || f[i].o.x) && (v = "mask", _ = "mask"), "s" !== f[i].mode && "i" !== f[i].mode || 0 !== d ? rect = null : ((rect = lt("rect")).setAttribute("fill", "#ffffff"), rect.setAttribute("width", this.element.comp.data.w || 0), rect.setAttribute("height", this.element.comp.data.h || 0), m.push(rect)), path = lt("path"), "n" === f[i].mode) this.viewData[i] = {
                            op: Ft.getProp(this.element, f[i].o, 0, .01, this.element),
                            prop: Rt.getShapeProp(this.element, f[i], 3),
                            elem: path,
                            lastPath: ""
                        }, defs.appendChild(path);
                        else {
                            var k;
                            if (d += 1, path.setAttribute("fill", "s" === f[i].mode ? "#000000" : "#ffffff"), path.setAttribute("clip-rule", "nonzero"), 0 !== f[i].x.k ? (v = "mask", _ = "mask", l = Ft.getProp(this.element, f[i].x, 0, null, this.element), k = J(), (h = lt("filter")).setAttribute("id", k), (o = lt("feMorphology")).setAttribute("operator", "erode"), o.setAttribute("in", "SourceGraphic"), o.setAttribute("radius", "0"), h.appendChild(o), defs.appendChild(h), path.setAttribute("stroke", "s" === f[i].mode ? "#000000" : "#ffffff")) : (o = null, l = null), this.storedData[i] = {
                                    elem: path,
                                    x: l,
                                    expan: o,
                                    lastPath: "",
                                    lastOperator: "",
                                    filterId: k,
                                    lastRadius: 0
                                }, "i" === f[i].mode) {
                                n = m.length;
                                var g = lt("g");
                                for (r = 0; r < n; r += 1) g.appendChild(m[r]);
                                var mask = lt("mask");
                                mask.setAttribute("mask-type", "alpha"), mask.setAttribute("id", y + "_" + d), mask.appendChild(path), defs.appendChild(mask), g.setAttribute("mask", "url(" + c() + "#" + y + "_" + d + ")"), m.length = 0, m.push(g)
                            } else m.push(path);
                            f[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[i] = {
                                elem: path,
                                lastPath: "",
                                op: Ft.getProp(this.element, f[i].o, 0, .01, this.element),
                                prop: Rt.getShapeProp(this.element, f[i], 3),
                                invRect: rect
                            }, this.viewData[i].prop.k || this.drawPath(f[i], this.viewData[i].prop.v, this.viewData[i])
                        }
                    for (this.maskElement = lt(v), e = m.length, i = 0; i < e; i += 1) this.maskElement.appendChild(m[i]);
                    d > 0 && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(_, "url(" + c() + "#" + y + ")"), defs.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
                }
                v([Tt], ai), ai.prototype.getValue = ai.prototype.iterateDynamicProperties, ai.prototype.init = function(data, element) {
                    var i;
                    this.data = data, this.effectElements = [], this.initDynamicPropertyContainer(element);
                    var t, e = this.data.ef.length,
                        r = this.data.ef;
                    for (i = 0; i < e; i += 1) {
                        switch (t = null, r[i].ty) {
                            case 0:
                                t = new Ke(r[i], element, this);
                                break;
                            case 1:
                                t = new Ue(r[i], element, this);
                                break;
                            case 2:
                                t = new Ze(r[i], element, this);
                                break;
                            case 3:
                                t = new Qe(r[i], element, this);
                                break;
                            case 4:
                            case 7:
                                t = new ei(r[i], element, this);
                                break;
                            case 10:
                                t = new $e(r[i], element, this);
                                break;
                            case 11:
                                t = new ti(r[i], element, this);
                                break;
                            case 5:
                                t = new si(r[i], element, this);
                                break;
                            default:
                                t = new ii(r[i], element, this)
                        }
                        t && this.effectElements.push(t)
                    }
                }, ri.prototype = {
                    checkMasks: function() {
                        if (!this.data.hasMask) return !1;
                        for (var i = 0, t = this.data.masksProperties.length; i < t;) {
                            if ("n" !== this.data.masksProperties[i].mode && !1 !== this.data.masksProperties[i].cl) return !0;
                            i += 1
                        }
                        return !1
                    },
                    initExpressions: function() {
                        var t = at();
                        if (t) {
                            var e = t("layer"),
                                r = t("effects"),
                                n = t("shape"),
                                h = t("text"),
                                o = t("comp");
                            this.layerInterface = e(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                            var l = r.createEffectsInterface(this, this.layerInterface);
                            this.layerInterface.registerEffectsInterface(l), 0 === this.data.ty || this.data.xt ? this.compInterface = o(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = n(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = h(this), this.layerInterface.text = this.layerInterface.textInterface)
                        }
                    },
                    setBlendMode: function() {
                        var t = Je(this.data.bm);
                        (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
                    },
                    initBaseData: function(data, t, e) {
                        this.globalData = t, this.comp = e, this.data = data, this.layerId = J(), this.data.sr || (this.data.sr = 1), this.effectsManager = new si(this.data, this, this.dynamicProperties)
                    },
                    getType: function() {
                        return this.type
                    },
                    sourceRectAtTime: function() {}
                }, ni.prototype = {
                    initFrame: function() {
                        this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
                    },
                    prepareProperties: function(t, e) {
                        var i, r = this.dynamicProperties.length;
                        for (i = 0; i < r; i += 1)(e || this._isParent && "transform" === this.dynamicProperties[i].propType) && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
                    },
                    addDynamicProperty: function(t) {
                        -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
                    }
                }, hi.prototype.prepareFrame = function() {}, v([Ye, ri, ni], hi), hi.prototype.getBaseElement = function() {
                    return null
                }, hi.prototype.renderFrame = function() {}, hi.prototype.destroy = function() {}, hi.prototype.initExpressions = function() {
                    var t = at();
                    if (t) {
                        var e = t("footage");
                        this.layerInterface = e(this)
                    }
                }, hi.prototype.getFootageData = function() {
                    return this.footageData
                }, oi.prototype.prepareFrame = function(t) {
                    if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
                    else {
                        var e = this.tm.v;
                        this._currentTime = e
                    }
                    this._volume = this.lv.v[0];
                    var r = this._volume * this._volumeMultiplier;
                    this._previousVolume !== r && (this._previousVolume = r, this.audio.volume(r))
                }, v([Ye, ri, ni], oi), oi.prototype.renderFrame = function() {
                    this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
                }, oi.prototype.show = function() {}, oi.prototype.hide = function() {
                    this.audio.pause(), this._isPlaying = !1
                }, oi.prototype.pause = function() {
                    this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
                }, oi.prototype.resume = function() {
                    this._canPlay = !0
                }, oi.prototype.setRate = function(t) {
                    this.audio.rate(t)
                }, oi.prototype.volume = function(t) {
                    this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume)
                }, oi.prototype.getBaseElement = function() {
                    return null
                }, oi.prototype.destroy = function() {}, oi.prototype.sourceRectAtTime = function() {}, oi.prototype.initExpressions = function() {}, pi.prototype.checkLayers = function(t) {
                    var i, data, e = this.layers.length;
                    for (this.completeLayers = !0, i = e - 1; i >= 0; i -= 1) this.elements[i] || (data = this.layers[i]).ip - data.st <= t - this.layers[i].st && data.op - data.st > t - this.layers[i].st && this.buildItem(i), this.completeLayers = !!this.elements[i] && this.completeLayers;
                    this.checkPendingElements()
                }, pi.prototype.createItem = function(t) {
                    switch (t.ty) {
                        case 2:
                            return this.createImage(t);
                        case 0:
                            return this.createComp(t);
                        case 1:
                            return this.createSolid(t);
                        case 3:
                        default:
                            return this.createNull(t);
                        case 4:
                            return this.createShape(t);
                        case 5:
                            return this.createText(t);
                        case 6:
                            return this.createAudio(t);
                        case 13:
                            return this.createCamera(t);
                        case 15:
                            return this.createFootage(t)
                    }
                }, pi.prototype.createCamera = function() {
                    throw new Error("You're using a 3d camera. Try the html renderer.")
                }, pi.prototype.createAudio = function(data) {
                    return new oi(data, this.globalData, this)
                }, pi.prototype.createFootage = function(data) {
                    return new hi(data, this.globalData, this)
                }, pi.prototype.buildAllItems = function() {
                    var i, t = this.layers.length;
                    for (i = 0; i < t; i += 1) this.buildItem(i);
                    this.checkPendingElements()
                }, pi.prototype.includeLayers = function(t) {
                    var i;
                    this.completeLayers = !1;
                    var e, r = t.length,
                        n = this.layers.length;
                    for (i = 0; i < r; i += 1)
                        for (e = 0; e < n;) {
                            if (this.layers[e].id === t[i].id) {
                                this.layers[e] = t[i];
                                break
                            }
                            e += 1
                        }
                }, pi.prototype.setProjectInterface = function(t) {
                    this.globalData.projectInterface = t
                }, pi.prototype.initItems = function() {
                    this.globalData.progressiveLoad || this.buildAllItems()
                }, pi.prototype.buildElementParenting = function(element, t, e) {
                    for (var r = this.elements, n = this.layers, i = 0, h = n.length; i < h;) n[i].ind == t && (r[i] && !0 !== r[i] ? (e.push(r[i]), r[i].setAsParent(), void 0 !== n[i].parent ? this.buildElementParenting(element, n[i].parent, e) : element.setHierarchy(e)) : (this.buildItem(i), this.addPendingElement(element))), i += 1
                }, pi.prototype.addPendingElement = function(element) {
                    this.pendingElements.push(element)
                }, pi.prototype.searchExtraCompositions = function(t) {
                    var i, e = t.length;
                    for (i = 0; i < e; i += 1)
                        if (t[i].xt) {
                            var r = this.createComp(t[i]);
                            r.initExpressions(), this.globalData.projectInterface.registerComposition(r)
                        }
                }, pi.prototype.getElementById = function(t) {
                    var i, e = this.elements.length;
                    for (i = 0; i < e; i += 1)
                        if (this.elements[i].data.ind === t) return this.elements[i];
                    return null
                }, pi.prototype.getElementByPath = function(path) {
                    var element, t = path.shift();
                    if ("number" == typeof t) element = this.elements[t];
                    else {
                        var i, e = this.elements.length;
                        for (i = 0; i < e; i += 1)
                            if (this.elements[i].data.nm === t) {
                                element = this.elements[i];
                                break
                            }
                    }
                    return 0 === path.length ? element : element.getElementByPath(path)
                }, pi.prototype.setupGlobalData = function(t, e) {
                    this.globalData.fontManager = new He, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                        w: t.w,
                        h: t.h
                    }
                }, fi.prototype = {
                    initTransform: function() {
                        this.finalTransform = {
                            mProp: this.data.ks ? le.getTransformProperty(this, this.data.ks, this) : {
                                o: 0
                            },
                            _matMdf: !1,
                            _opMdf: !1,
                            mat: new Nt
                        }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
                    },
                    renderTransform: function() {
                        if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                            var t, e = this.finalTransform.mat,
                                i = 0,
                                r = this.hierarchy.length;
                            if (!this.finalTransform._matMdf)
                                for (; i < r;) {
                                    if (this.hierarchy[i].finalTransform.mProp._mdf) {
                                        this.finalTransform._matMdf = !0;
                                        break
                                    }
                                    i += 1
                                }
                            if (this.finalTransform._matMdf)
                                for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), i = 0; i < r; i += 1) t = this.hierarchy[i].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
                        }
                    },
                    globalToLocal: function(t) {
                        var e = [];
                        e.push(this.finalTransform);
                        for (var i, r = !0, n = this.comp; r;) n.finalTransform ? (n.data.hasMask && e.splice(0, 0, n.finalTransform), n = n.comp) : r = !1;
                        var h, o = e.length;
                        for (i = 0; i < o; i += 1) h = e[i].mat.applyToPointArray(0, 0, 0), t = [t[0] - h[0], t[1] - h[1], 0];
                        return t
                    },
                    mHelper: new Nt
                }, di.prototype.getMaskProperty = function(t) {
                    return this.viewData[t].prop
                }, di.prototype.renderFrame = function(t) {
                    var i, e = this.element.finalTransform.mat,
                        r = this.masksProperties.length;
                    for (i = 0; i < r; i += 1)
                        if ((this.viewData[i].prop._mdf || t) && this.drawPath(this.masksProperties[i], this.viewData[i].prop.v, this.viewData[i]), (this.viewData[i].op._mdf || t) && this.viewData[i].elem.setAttribute("fill-opacity", this.viewData[i].op.v), "n" !== this.masksProperties[i].mode && (this.viewData[i].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[i].invRect.setAttribute("transform", e.getInverseMatrix().to2dCSS()), this.storedData[i].x && (this.storedData[i].x._mdf || t))) {
                            var n = this.storedData[i].expan;
                            this.storedData[i].x.v < 0 ? ("erode" !== this.storedData[i].lastOperator && (this.storedData[i].lastOperator = "erode", this.storedData[i].elem.setAttribute("filter", "url(" + c() + "#" + this.storedData[i].filterId + ")")), n.setAttribute("radius", -this.storedData[i].x.v)) : ("dilate" !== this.storedData[i].lastOperator && (this.storedData[i].lastOperator = "dilate", this.storedData[i].elem.setAttribute("filter", null)), this.storedData[i].elem.setAttribute("stroke-width", 2 * this.storedData[i].x.v))
                        }
                }, di.prototype.getMaskelement = function() {
                    return this.maskElement
                }, di.prototype.createLayerSolidPath = function() {
                    var path = "M0,0 ";
                    return path += " h" + this.globalData.compSize.w, path += " v" + this.globalData.compSize.h, path += " h-" + this.globalData.compSize.w, path += " v-" + this.globalData.compSize.h + " "
                }, di.prototype.drawPath = function(t, e, r) {
                    var i, n, h = " M" + e.v[0][0] + "," + e.v[0][1];
                    for (n = e._length, i = 1; i < n; i += 1) h += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[i][0] + "," + e.i[i][1] + " " + e.v[i][0] + "," + e.v[i][1];
                    if (e.c && n > 1 && (h += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), r.lastPath !== h) {
                        var o = "";
                        r.elem && (e.c && (o = t.inv ? this.solidPath + h : h), r.elem.setAttribute("d", o)), r.lastPath = h
                    }
                }, di.prototype.destroy = function() {
                    this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
                };
                var mi, ci = function() {
                        var t = {};

                        function e(t, e) {
                            var r = lt("filter");
                            return r.setAttribute("id", t), !0 !== e && (r.setAttribute("filterUnits", "objectBoundingBox"), r.setAttribute("x", "0%"), r.setAttribute("y", "0%"), r.setAttribute("width", "100%"), r.setAttribute("height", "100%")), r
                        }

                        function r() {
                            var t = lt("feColorMatrix");
                            return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
                        }
                        return t.createFilter = e, t.createAlphaToLuminanceFilter = r, t
                    }(),
                    ui = (mi = {
                        maskType: !0,
                        svgLumaHidden: !0,
                        offscreenCanvas: "undefined" != typeof OffscreenCanvas
                    }, (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (mi.maskType = !1), /firefox/i.test(navigator.userAgent) && (mi.svgLumaHidden = !1), mi),
                    gi = {},
                    yi = "filter_result_";

                function vi(t) {
                    var i, e, source = "SourceGraphic",
                        r = t.data.ef ? t.data.ef.length : 0,
                        n = J(),
                        h = ci.createFilter(n, !0),
                        o = 0;
                    for (this.filters = [], i = 0; i < r; i += 1) {
                        e = null;
                        var l = t.data.ef[i].ty;
                        gi[l] && (e = new(0, gi[l].effect)(h, t.effectsManager.effectElements[i], t, yi + o, source), source = yi + o, gi[l].countsAsEffect && (o += 1)), e && this.filters.push(e)
                    }
                    o && (t.globalData.defs.appendChild(h), t.layerElement.setAttribute("filter", "url(" + c() + "#" + n + ")")), this.filters.length && t.addRenderableComponent(this)
                }

                function bi() {}

                function _i() {}

                function ki() {}

                function Ai(data, t, e) {
                    this.assetData = t.getAssetData(data.refId), this.initElement(data, t, e), this.sourceRect = {
                        top: 0,
                        left: 0,
                        width: this.assetData.w,
                        height: this.assetData.h
                    }
                }

                function Pi(element, t) {
                    this.elem = element, this.pos = t
                }

                function Si() {}
                vi.prototype.renderFrame = function(t) {
                    var i, e = this.filters.length;
                    for (i = 0; i < e; i += 1) this.filters[i].renderFrame(t)
                }, bi.prototype = {
                    initRendererElement: function() {
                        this.layerElement = lt("g")
                    },
                    createContainerElements: function() {
                        this.matteElement = lt("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                        var t = null;
                        if (this.data.td) {
                            this.matteMasks = {};
                            var e = lt("g");
                            e.setAttribute("id", this.layerId), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e)
                        } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                        if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                            var r = lt("clipPath"),
                                n = lt("path");
                            n.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                            var h = J();
                            if (r.setAttribute("id", h), r.appendChild(n), this.globalData.defs.appendChild(r), this.checkMasks()) {
                                var o = lt("g");
                                o.setAttribute("clip-path", "url(" + c() + "#" + h + ")"), o.appendChild(this.layerElement), this.transformedElement = o, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                            } else this.layerElement.setAttribute("clip-path", "url(" + c() + "#" + h + ")")
                        }
                        0 !== this.data.bm && this.setBlendMode()
                    },
                    renderElement: function() {
                        this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
                    },
                    destroyBaseElement: function() {
                        this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
                    },
                    getBaseElement: function() {
                        return this.data.hd ? null : this.baseElement
                    },
                    createRenderableComponents: function() {
                        this.maskManager = new di(this.data, this, this.globalData), this.renderableEffectsManager = new vi(this)
                    },
                    getMatte: function(t) {
                        if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
                            var e, r, n, h, o = this.layerId + "_" + t;
                            if (1 === t || 3 === t) {
                                var l = lt("mask");
                                l.setAttribute("id", o), l.setAttribute("mask-type", 3 === t ? "luminance" : "alpha"), (n = lt("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), l.appendChild(n), this.globalData.defs.appendChild(l), ui.maskType || 1 !== t || (l.setAttribute("mask-type", "luminance"), e = J(), r = ci.createFilter(e), this.globalData.defs.appendChild(r), r.appendChild(ci.createAlphaToLuminanceFilter()), (h = lt("g")).appendChild(n), l.appendChild(h), h.setAttribute("filter", "url(" + c() + "#" + e + ")"))
                            } else if (2 === t) {
                                var f = lt("mask");
                                f.setAttribute("id", o), f.setAttribute("mask-type", "alpha");
                                var d = lt("g");
                                f.appendChild(d), e = J(), r = ci.createFilter(e);
                                var m = lt("feComponentTransfer");
                                m.setAttribute("in", "SourceGraphic"), r.appendChild(m);
                                var y = lt("feFuncA");
                                y.setAttribute("type", "table"), y.setAttribute("tableValues", "1.0 0.0"), m.appendChild(y), this.globalData.defs.appendChild(r);
                                var v = lt("rect");
                                v.setAttribute("width", this.comp.data.w), v.setAttribute("height", this.comp.data.h), v.setAttribute("x", "0"), v.setAttribute("y", "0"), v.setAttribute("fill", "#ffffff"), v.setAttribute("opacity", "0"), d.setAttribute("filter", "url(" + c() + "#" + e + ")"), d.appendChild(v), (n = lt("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), d.appendChild(n), ui.maskType || (f.setAttribute("mask-type", "luminance"), r.appendChild(ci.createAlphaToLuminanceFilter()), h = lt("g"), d.appendChild(v), h.appendChild(this.layerElement), d.appendChild(h)), this.globalData.defs.appendChild(f)
                            }
                            this.matteMasks[t] = o
                        }
                        return this.matteMasks[t]
                    },
                    setMatte: function(t) {
                        this.matteElement && this.matteElement.setAttribute("mask", "url(" + c() + "#" + t + ")")
                    }
                }, _i.prototype = {
                    initHierarchy: function() {
                        this.hierarchy = [], this._isParent = !1, this.checkParenting()
                    },
                    setHierarchy: function(t) {
                        this.hierarchy = t
                    },
                    setAsParent: function() {
                        this._isParent = !0
                    },
                    checkParenting: function() {
                        void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
                    }
                }, v([Ye, _({
                    initElement: function(data, t, e) {
                        this.initFrame(), this.initBaseData(data, t, e), this.initTransform(data, t, e), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
                    },
                    hide: function() {
                        this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
                    },
                    show: function() {
                        this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
                    },
                    renderFrame: function() {
                        this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                    },
                    renderInnerContent: function() {},
                    prepareFrame: function(t) {
                        this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
                    },
                    destroy: function() {
                        this.innerElem = null, this.destroyBaseElement()
                    }
                })], ki), v([ri, fi, bi, _i, ni, ki], Ai), Ai.prototype.createContent = function() {
                    var t = this.globalData.getAssetsPath(this.assetData);
                    this.innerElem = lt("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
                }, Ai.prototype.sourceRectAtTime = function() {
                    return this.sourceRect
                }, Si.prototype = {
                    addShapeToModifiers: function(data) {
                        var i, t = this.shapeModifiers.length;
                        for (i = 0; i < t; i += 1) this.shapeModifiers[i].addShape(data)
                    },
                    isShapeInAnimatedModifiers: function(data) {
                        for (var i = 0, t = this.shapeModifiers.length; i < t;)
                            if (this.shapeModifiers[i].isAnimatedWithShape(data)) return !0;
                        return !1
                    },
                    renderModifiers: function() {
                        if (this.shapeModifiers.length) {
                            var i, t = this.shapes.length;
                            for (i = 0; i < t; i += 1) this.shapes[i].sh.reset();
                            for (i = (t = this.shapeModifiers.length) - 1; i >= 0 && !this.shapeModifiers[i].processShapes(this._isFirstFrame); i -= 1);
                        }
                    },
                    searchProcessedElement: function(t) {
                        for (var e = this.processedElements, i = 0, r = e.length; i < r;) {
                            if (e[i].elem === t) return e[i].pos;
                            i += 1
                        }
                        return 0
                    },
                    addProcessedElement: function(t, e) {
                        for (var r = this.processedElements, i = r.length; i;)
                            if (r[i -= 1].elem === t) return void(r[i].pos = e);
                        r.push(new Pi(t, e))
                    },
                    prepareFrame: function(t) {
                        this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
                    }
                };
                var wi = {
                        1: "butt",
                        2: "round",
                        3: "square"
                    },
                    xi = {
                        1: "miter",
                        2: "round",
                        3: "bevel"
                    };

                function Di(t, e, r) {
                    this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = r, this.lvl = e, this._isAnimated = !!r.k;
                    for (var i = 0, n = t.length; i < n;) {
                        if (t[i].mProps.dynamicProperties.length) {
                            this._isAnimated = !0;
                            break
                        }
                        i += 1
                    }
                }

                function Ci(data, t) {
                    this.data = data, this.type = data.ty, this.d = "", this.lvl = t, this._mdf = !1, this.closed = !0 === data.hd, this.pElem = lt("path"), this.msElem = null
                }

                function Mi(t, data, e, r) {
                    var i;
                    this.elem = t, this.frameId = -1, this.dataProps = P(data.length), this.renderer = e, this.k = !1, this.dashStr = "", this.dashArray = A("float32", data.length ? data.length - 1 : 0), this.dashoffset = A("float32", 1), this.initDynamicPropertyContainer(r);
                    var n, h = data.length || 0;
                    for (i = 0; i < h; i += 1) n = Ft.getProp(t, data[i].v, 0, 0, this), this.k = n.k || this.k, this.dataProps[i] = {
                        n: data[i].n,
                        p: n
                    };
                    this.k || this.getValue(!0), this._isAnimated = this.k
                }

                function Fi(t, data, e) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = Ft.getProp(t, data.o, 0, .01, this), this.w = Ft.getProp(t, data.w, 0, null, this), this.d = new Mi(t, data.d || {}, "svg", this), this.c = Ft.getProp(t, data.c, 1, 255, this), this.style = e, this._isAnimated = !!this._isAnimated
                }

                function Ti(t, data, e) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = Ft.getProp(t, data.o, 0, .01, this), this.c = Ft.getProp(t, data.c, 1, 255, this), this.style = e
                }

                function Ei(t, data, e) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = e
                }

                function Ii(t, data, e) {
                    this.data = data, this.c = A("uint8c", 4 * data.p);
                    var r = data.k.k[0].s ? data.k.k[0].s.length - 4 * data.p : data.k.k.length - 4 * data.p;
                    this.o = A("float32", r), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = r, this.initDynamicPropertyContainer(e), this.prop = Ft.getProp(t, data.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
                }

                function Li(t, data, e) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, data, e)
                }

                function Vi(t, data, e) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = Ft.getProp(t, data.w, 0, null, this), this.d = new Mi(t, data.d || {}, "svg", this), this.initGradientData(t, data, e), this._isAnimated = !!this._isAnimated
                }

                function zi() {
                    this.it = [], this.prevViewData = [], this.gr = lt("g")
                }

                function Ri(t, e, r) {
                    this.transform = {
                        mProps: t,
                        op: e,
                        container: r
                    }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
                }
                Di.prototype.setAsAnimated = function() {
                    this._isAnimated = !0
                }, Ci.prototype.reset = function() {
                    this.d = "", this._mdf = !1
                }, Mi.prototype.getValue = function(t) {
                    if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                        var i = 0,
                            e = this.dataProps.length;
                        for ("svg" === this.renderer && (this.dashStr = ""), i = 0; i < e; i += 1) "o" !== this.dataProps[i].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[i].p.v : this.dashArray[i] = this.dataProps[i].p.v : this.dashoffset[0] = this.dataProps[i].p.v
                    }
                }, v([Tt], Mi), v([Tt], Fi), v([Tt], Ti), v([Tt], Ei), Ii.prototype.comparePoints = function(t, e) {
                    for (var i = 0, r = this.o.length / 2; i < r;) {
                        if (Math.abs(t[4 * i] - t[4 * e + 2 * i]) > .01) return !1;
                        i += 1
                    }
                    return !0
                }, Ii.prototype.checkCollapsable = function() {
                    if (this.o.length / 2 != this.c.length / 4) return !1;
                    if (this.data.k.k[0].s)
                        for (var i = 0, t = this.data.k.k.length; i < t;) {
                            if (!this.comparePoints(this.data.k.k[i].s, this.data.p)) return !1;
                            i += 1
                        } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                    return !0
                }, Ii.prototype.getValue = function(t) {
                    if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                        var i, e, r, n = 4 * this.data.p;
                        for (i = 0; i < n; i += 1) e = i % 4 == 0 ? 100 : 255, r = Math.round(this.prop.v[i] * e), this.c[i] !== r && (this.c[i] = r, this._cmdf = !t);
                        if (this.o.length)
                            for (n = this.prop.v.length, i = 4 * this.data.p; i < n; i += 1) e = i % 2 == 0 ? 100 : 1, r = i % 2 == 0 ? Math.round(100 * this.prop.v[i]) : this.prop.v[i], this.o[i - 4 * this.data.p] !== r && (this.o[i - 4 * this.data.p] = r, this._omdf = !t);
                        this._mdf = !t
                    }
                }, v([Tt], Ii), Li.prototype.initGradientData = function(t, data, e) {
                    this.o = Ft.getProp(t, data.o, 0, .01, this), this.s = Ft.getProp(t, data.s, 1, null, this), this.e = Ft.getProp(t, data.e, 1, null, this), this.h = Ft.getProp(t, data.h || {
                        k: 0
                    }, 0, .01, this), this.a = Ft.getProp(t, data.a || {
                        k: 0
                    }, 0, z, this), this.g = new Ii(t, data.g, this), this.style = e, this.stops = [], this.setGradientData(e.pElem, data), this.setGradientOpacity(data, e), this._isAnimated = !!this._isAnimated
                }, Li.prototype.setGradientData = function(t, data) {
                    var e = J(),
                        r = lt(1 === data.t ? "linearGradient" : "radialGradient");
                    r.setAttribute("id", e), r.setAttribute("spreadMethod", "pad"), r.setAttribute("gradientUnits", "userSpaceOnUse");
                    var n, h, o, l = [];
                    for (o = 4 * data.g.p, h = 0; h < o; h += 4) n = lt("stop"), r.appendChild(n), l.push(n);
                    t.setAttribute("gf" === data.ty ? "fill" : "stroke", "url(" + c() + "#" + e + ")"), this.gf = r, this.cst = l
                }, Li.prototype.setGradientOpacity = function(data, t) {
                    if (this.g._hasOpacity && !this.g._collapsable) {
                        var e, r, n, mask = lt("mask"),
                            h = lt("path");
                        mask.appendChild(h);
                        var o = J(),
                            l = J();
                        mask.setAttribute("id", l);
                        var f = lt(1 === data.t ? "linearGradient" : "radialGradient");
                        f.setAttribute("id", o), f.setAttribute("spreadMethod", "pad"), f.setAttribute("gradientUnits", "userSpaceOnUse"), n = data.g.k.k[0].s ? data.g.k.k[0].s.length : data.g.k.k.length;
                        var d = this.stops;
                        for (r = 4 * data.g.p; r < n; r += 2)(e = lt("stop")).setAttribute("stop-color", "rgb(255,255,255)"), f.appendChild(e), d.push(e);
                        h.setAttribute("gf" === data.ty ? "fill" : "stroke", "url(" + c() + "#" + o + ")"), "gs" === data.ty && (h.setAttribute("stroke-linecap", wi[data.lc || 2]), h.setAttribute("stroke-linejoin", xi[data.lj || 2]), 1 === data.lj && h.setAttribute("stroke-miterlimit", data.ml)), this.of = f, this.ms = mask, this.ost = d, this.maskId = l, t.msElem = h
                    }
                }, v([Tt], Li), v([Li, Tt], Vi);
                var Ni = function(t, e, r, n) {
                        if (0 === e) return "";
                        var i, h = t.o,
                            o = t.i,
                            l = t.v,
                            f = " M" + n.applyToPointStringified(l[0][0], l[0][1]);
                        for (i = 1; i < e; i += 1) f += " C" + n.applyToPointStringified(h[i - 1][0], h[i - 1][1]) + " " + n.applyToPointStringified(o[i][0], o[i][1]) + " " + n.applyToPointStringified(l[i][0], l[i][1]);
                        return r && e && (f += " C" + n.applyToPointStringified(h[i - 1][0], h[i - 1][1]) + " " + n.applyToPointStringified(o[0][0], o[0][1]) + " " + n.applyToPointStringified(l[0][0], l[0][1]), f += "z"), f
                    },
                    Oi = function() {
                        var t = new Nt,
                            e = new Nt;

                        function r(data) {
                            switch (data.ty) {
                                case "fl":
                                    return l;
                                case "gf":
                                    return d;
                                case "gs":
                                    return f;
                                case "st":
                                    return m;
                                case "sh":
                                case "el":
                                case "rc":
                                case "sr":
                                    return o;
                                case "tr":
                                    return n;
                                case "no":
                                    return h;
                                default:
                                    return null
                            }
                        }

                        function n(t, e, r) {
                            (r || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (r || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
                        }

                        function h() {}

                        function o(r, n, h) {
                            var o, l, f, d, m, c, y, v, _, k, A, P = n.styles.length,
                                S = n.lvl;
                            for (c = 0; c < P; c += 1) {
                                if (d = n.sh._mdf || h, n.styles[c].lvl < S) {
                                    for (v = e.reset(), k = S - n.styles[c].lvl, A = n.transformers.length - 1; !d && k > 0;) d = n.transformers[A].mProps._mdf || d, k -= 1, A -= 1;
                                    if (d)
                                        for (k = S - n.styles[c].lvl, A = n.transformers.length - 1; k > 0;) _ = n.transformers[A].mProps.v.props, v.transform(_[0], _[1], _[2], _[3], _[4], _[5], _[6], _[7], _[8], _[9], _[10], _[11], _[12], _[13], _[14], _[15]), k -= 1, A -= 1
                                } else v = t;
                                if (l = (y = n.sh.paths)._length, d) {
                                    for (f = "", o = 0; o < l; o += 1)(m = y.shapes[o]) && m._length && (f += Ni(m, m._length, m.c, v));
                                    n.caches[c] = f
                                } else f = n.caches[c];
                                n.styles[c].d += !0 === r.hd ? "" : f, n.styles[c]._mdf = d || n.styles[c]._mdf
                            }
                        }

                        function l(t, e, r) {
                            var n = e.style;
                            (e.c._mdf || r) && n.pElem.setAttribute("fill", "rgb(" + E(e.c.v[0]) + "," + E(e.c.v[1]) + "," + E(e.c.v[2]) + ")"), (e.o._mdf || r) && n.pElem.setAttribute("fill-opacity", e.o.v)
                        }

                        function f(t, e, r) {
                            d(t, e, r), m(t, e, r)
                        }

                        function d(t, e, r) {
                            var n, i, h, o, l, f = e.gf,
                                d = e.g._hasOpacity,
                                m = e.s.v,
                                c = e.e.v;
                            if (e.o._mdf || r) {
                                var y = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                                e.style.pElem.setAttribute(y, e.o.v)
                            }
                            if (e.s._mdf || r) {
                                var v = 1 === t.t ? "x1" : "cx",
                                    _ = "x1" === v ? "y1" : "cy";
                                f.setAttribute(v, m[0]), f.setAttribute(_, m[1]), d && !e.g._collapsable && (e.of.setAttribute(v, m[0]), e.of.setAttribute(_, m[1]))
                            }
                            if (e.g._cmdf || r) {
                                n = e.cst;
                                var k = e.g.c;
                                for (h = n.length, i = 0; i < h; i += 1)(o = n[i]).setAttribute("offset", k[4 * i] + "%"), o.setAttribute("stop-color", "rgb(" + k[4 * i + 1] + "," + k[4 * i + 2] + "," + k[4 * i + 3] + ")")
                            }
                            if (d && (e.g._omdf || r)) {
                                var A = e.g.o;
                                for (h = (n = e.g._collapsable ? e.cst : e.ost).length, i = 0; i < h; i += 1) o = n[i], e.g._collapsable || o.setAttribute("offset", A[2 * i] + "%"), o.setAttribute("stop-opacity", A[2 * i + 1])
                            }
                            if (1 === t.t)(e.e._mdf || r) && (f.setAttribute("x2", c[0]), f.setAttribute("y2", c[1]), d && !e.g._collapsable && (e.of.setAttribute("x2", c[0]), e.of.setAttribute("y2", c[1])));
                            else if ((e.s._mdf || e.e._mdf || r) && (l = Math.sqrt(Math.pow(m[0] - c[0], 2) + Math.pow(m[1] - c[1], 2)), f.setAttribute("r", l), d && !e.g._collapsable && e.of.setAttribute("r", l)), e.e._mdf || e.h._mdf || e.a._mdf || r) {
                                l || (l = Math.sqrt(Math.pow(m[0] - c[0], 2) + Math.pow(m[1] - c[1], 2)));
                                var P = Math.atan2(c[1] - m[1], c[0] - m[0]),
                                    S = e.h.v;
                                S >= 1 ? S = .99 : S <= -1 && (S = -.99);
                                var w = l * S,
                                    x = Math.cos(P + e.a.v) * w + m[0],
                                    D = Math.sin(P + e.a.v) * w + m[1];
                                f.setAttribute("fx", x), f.setAttribute("fy", D), d && !e.g._collapsable && (e.of.setAttribute("fx", x), e.of.setAttribute("fy", D))
                            }
                        }

                        function m(t, e, r) {
                            var n = e.style,
                                h = e.d;
                            h && (h._mdf || r) && h.dashStr && (n.pElem.setAttribute("stroke-dasharray", h.dashStr), n.pElem.setAttribute("stroke-dashoffset", h.dashoffset[0])), e.c && (e.c._mdf || r) && n.pElem.setAttribute("stroke", "rgb(" + E(e.c.v[0]) + "," + E(e.c.v[1]) + "," + E(e.c.v[2]) + ")"), (e.o._mdf || r) && n.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || r) && (n.pElem.setAttribute("stroke-width", e.w.v), n.msElem && n.msElem.setAttribute("stroke-width", e.w.v))
                        }
                        return {
                            createRenderFunction: r
                        }
                    }();

                function Bi(data, t, e) {
                    this.shapes = [], this.shapesData = data.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(data, t, e), this.prevViewData = []
                }

                function qi(t, e, r, n, h, p) {
                    this.o = t, this.sw = e, this.sc = r, this.fc = n, this.m = h, this.p = p, this._mdf = {
                        o: !0,
                        sw: !!e,
                        sc: !!r,
                        fc: !!n,
                        m: !0,
                        p: !0
                    }
                }

                function ji(t, data) {
                    this._frameId = l, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = data, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                        ascent: 0,
                        boxWidth: this.defaultBoxWidth,
                        f: "",
                        fStyle: "",
                        fWeight: "",
                        fc: "",
                        j: "",
                        justifyOffset: "",
                        l: [],
                        lh: 0,
                        lineWidths: [],
                        ls: "",
                        of: "",
                        s: "",
                        sc: "",
                        sw: 0,
                        t: 0,
                        tr: 0,
                        sz: 0,
                        ps: null,
                        fillColorAnim: !1,
                        strokeColorAnim: !1,
                        strokeWidthAnim: !1,
                        yOffset: 0,
                        finalSize: 0,
                        finalText: [],
                        finalLineHeight: 0,
                        __complete: !1
                    }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
                }
                v([ri, fi, bi, Si, _i, ni, ki], Bi), Bi.prototype.initSecondaryElement = function() {}, Bi.prototype.identityMatrix = new Nt, Bi.prototype.buildExpressionInterface = function() {}, Bi.prototype.createContent = function() {
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
                }, Bi.prototype.filterUniqueShapes = function() {
                    var i, t, e, style, r = this.shapes.length,
                        n = this.stylesList.length,
                        h = [],
                        o = !1;
                    for (e = 0; e < n; e += 1) {
                        for (style = this.stylesList[e], o = !1, h.length = 0, i = 0; i < r; i += 1) - 1 !== (t = this.shapes[i]).styles.indexOf(style) && (h.push(t), o = t._isAnimated || o);
                        h.length > 1 && o && this.setShapesAsAnimated(h)
                    }
                }, Bi.prototype.setShapesAsAnimated = function(t) {
                    var i, e = t.length;
                    for (i = 0; i < e; i += 1) t[i].setAsAnimated()
                }, Bi.prototype.createStyleElement = function(data, t) {
                    var e, r = new Ci(data, t),
                        n = r.pElem;
                    return "st" === data.ty ? e = new Fi(this, data, r) : "fl" === data.ty ? e = new Ti(this, data, r) : "gf" === data.ty || "gs" === data.ty ? (e = new("gf" === data.ty ? Li : Vi)(this, data, r), this.globalData.defs.appendChild(e.gf), e.maskId && (this.globalData.defs.appendChild(e.ms), this.globalData.defs.appendChild(e.of), n.setAttribute("mask", "url(" + c() + "#" + e.maskId + ")"))) : "no" === data.ty && (e = new Ei(this, data, r)), "st" !== data.ty && "gs" !== data.ty || (n.setAttribute("stroke-linecap", wi[data.lc || 2]), n.setAttribute("stroke-linejoin", xi[data.lj || 2]), n.setAttribute("fill-opacity", "0"), 1 === data.lj && n.setAttribute("stroke-miterlimit", data.ml)), 2 === data.r && n.setAttribute("fill-rule", "evenodd"), data.ln && n.setAttribute("id", data.ln), data.cl && n.setAttribute("class", data.cl), data.bm && (n.style["mix-blend-mode"] = Je(data.bm)), this.stylesList.push(r), this.addToAnimatedContents(data, e), e
                }, Bi.prototype.createGroupElement = function(data) {
                    var t = new zi;
                    return data.ln && t.gr.setAttribute("id", data.ln), data.cl && t.gr.setAttribute("class", data.cl), data.bm && (t.gr.style["mix-blend-mode"] = Je(data.bm)), t
                }, Bi.prototype.createTransformElement = function(data, t) {
                    var e = le.getTransformProperty(this, data, this),
                        r = new Ri(e, e.o, t);
                    return this.addToAnimatedContents(data, r), r
                }, Bi.prototype.createShapeElement = function(data, t, e) {
                    var r = 4;
                    "rc" === data.ty ? r = 5 : "el" === data.ty ? r = 6 : "sr" === data.ty && (r = 7);
                    var n = new Di(t, e, Rt.getShapeProp(this, data, r, this));
                    return this.shapes.push(n), this.addShapeToModifiers(n), this.addToAnimatedContents(data, n), n
                }, Bi.prototype.addToAnimatedContents = function(data, element) {
                    for (var i = 0, t = this.animatedContents.length; i < t;) {
                        if (this.animatedContents[i].element === element) return;
                        i += 1
                    }
                    this.animatedContents.push({
                        fn: Oi.createRenderFunction(data),
                        element: element,
                        data: data
                    })
                }, Bi.prototype.setElementStyles = function(t) {
                    var e, r = t.styles,
                        n = this.stylesList.length;
                    for (e = 0; e < n; e += 1) this.stylesList[e].closed || r.push(this.stylesList[e])
                }, Bi.prototype.reloadShapes = function() {
                    var i;
                    this._isFirstFrame = !0;
                    var t = this.itemsData.length;
                    for (i = 0; i < t; i += 1) this.prevViewData[i] = this.itemsData[i];
                    for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), t = this.dynamicProperties.length, i = 0; i < t; i += 1) this.dynamicProperties[i].getValue();
                    this.renderModifiers()
                }, Bi.prototype.searchShapes = function(t, e, r, n, h, o, l) {
                    var i, f, d, m, c, y, v = [].concat(o),
                        _ = t.length - 1,
                        k = [],
                        A = [];
                    for (i = _; i >= 0; i -= 1) {
                        if ((y = this.searchProcessedElement(t[i])) ? e[i] = r[y - 1] : t[i]._render = l, "fl" === t[i].ty || "st" === t[i].ty || "gf" === t[i].ty || "gs" === t[i].ty || "no" === t[i].ty) y ? e[i].style.closed = !1 : e[i] = this.createStyleElement(t[i], h), t[i]._render && e[i].style.pElem.parentNode !== n && n.appendChild(e[i].style.pElem), k.push(e[i].style);
                        else if ("gr" === t[i].ty) {
                            if (y)
                                for (d = e[i].it.length, f = 0; f < d; f += 1) e[i].prevViewData[f] = e[i].it[f];
                            else e[i] = this.createGroupElement(t[i]);
                            this.searchShapes(t[i].it, e[i].it, e[i].prevViewData, e[i].gr, h + 1, v, l), t[i]._render && e[i].gr.parentNode !== n && n.appendChild(e[i].gr)
                        } else "tr" === t[i].ty ? (y || (e[i] = this.createTransformElement(t[i], n)), m = e[i].transform, v.push(m)) : "sh" === t[i].ty || "rc" === t[i].ty || "el" === t[i].ty || "sr" === t[i].ty ? (y || (e[i] = this.createShapeElement(t[i], v, h)), this.setElementStyles(e[i])) : "tm" === t[i].ty || "rd" === t[i].ty || "ms" === t[i].ty || "pb" === t[i].ty || "zz" === t[i].ty || "op" === t[i].ty ? (y ? (c = e[i]).closed = !1 : ((c = re.getModifier(t[i].ty)).init(this, t[i]), e[i] = c, this.shapeModifiers.push(c)), A.push(c)) : "rp" === t[i].ty && (y ? (c = e[i]).closed = !0 : (c = re.getModifier(t[i].ty), e[i] = c, c.init(this, t, i, e), this.shapeModifiers.push(c), l = !1), A.push(c));
                        this.addProcessedElement(t[i], i + 1)
                    }
                    for (_ = k.length, i = 0; i < _; i += 1) k[i].closed = !0;
                    for (_ = A.length, i = 0; i < _; i += 1) A[i].closed = !0
                }, Bi.prototype.renderInnerContent = function() {
                    var i;
                    this.renderModifiers();
                    var t = this.stylesList.length;
                    for (i = 0; i < t; i += 1) this.stylesList[i].reset();
                    for (this.renderShape(), i = 0; i < t; i += 1)(this.stylesList[i]._mdf || this._isFirstFrame) && (this.stylesList[i].msElem && (this.stylesList[i].msElem.setAttribute("d", this.stylesList[i].d), this.stylesList[i].d = "M0 0" + this.stylesList[i].d), this.stylesList[i].pElem.setAttribute("d", this.stylesList[i].d || "M0 0"))
                }, Bi.prototype.renderShape = function() {
                    var i, t, e = this.animatedContents.length;
                    for (i = 0; i < e; i += 1) t = this.animatedContents[i], (this._isFirstFrame || t.element._isAnimated) && !0 !== t.data && t.fn(t.data, t.element, this._isFirstFrame)
                }, Bi.prototype.destroy = function() {
                    this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
                }, qi.prototype.update = function(t, e, r, n, h, p) {
                    this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
                    var o = !1;
                    return this.o !== t && (this.o = t, this._mdf.o = !0, o = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, o = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, o = !0), this.fc !== n && (this.fc = n, this._mdf.fc = !0, o = !0), this.m !== h && (this.m = h, this._mdf.m = !0, o = !0), !p.length || this.p[0] === p[0] && this.p[1] === p[1] && this.p[4] === p[4] && this.p[5] === p[5] && this.p[12] === p[12] && this.p[13] === p[13] || (this.p = p, this._mdf.p = !0, o = !0), o
                }, ji.prototype.defaultBoxWidth = [0, 0], ji.prototype.copyData = function(t, data) {
                    for (var s in data) Object.prototype.hasOwnProperty.call(data, s) && (t[s] = data[s]);
                    return t
                }, ji.prototype.setCurrentData = function(data) {
                    data.__complete || this.completeTextData(data), this.currentData = data, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
                }, ji.prototype.searchProperty = function() {
                    return this.searchKeyframes()
                }, ji.prototype.searchKeyframes = function() {
                    return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
                }, ji.prototype.addEffect = function(t) {
                    this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
                }, ji.prototype.getValue = function(t) {
                    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                        var e = this.currentData,
                            r = this.keysIndex;
                        if (this.lock) this.setCurrentData(this.currentData);
                        else {
                            var i;
                            this.lock = !0, this._mdf = !1;
                            var n = this.effectsSequence.length,
                                h = t || this.data.d.k[this.keysIndex].s;
                            for (i = 0; i < n; i += 1) h = r !== this.keysIndex ? this.effectsSequence[i](h, h.t) : this.effectsSequence[i](this.currentData, h.t);
                            e !== h && this.setCurrentData(h), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
                        }
                    }
                }, ji.prototype.getKeyframeValue = function() {
                    for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, r = t.length; i <= r - 1 && !(i === r - 1 || t[i + 1].t > e);) i += 1;
                    return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s
                }, ji.prototype.buildFinalText = function(text) {
                    for (var t, e, r = [], i = 0, n = text.length, h = !1; i < n;) t = text.charCodeAt(i), He.isCombinedCharacter(t) ? r[r.length - 1] += text.charAt(i) : t >= 55296 && t <= 56319 ? (e = text.charCodeAt(i + 1)) >= 56320 && e <= 57343 ? (h || He.isModifier(t, e) ? (r[r.length - 1] += text.substr(i, 2), h = !1) : r.push(text.substr(i, 2)), i += 1) : r.push(text.charAt(i)) : t > 56319 ? (e = text.charCodeAt(i + 1), He.isZeroWidthJoiner(t, e) ? (h = !0, r[r.length - 1] += text.substr(i, 2), i += 1) : r.push(text.charAt(i))) : He.isZeroWidthJoiner(t) ? (r[r.length - 1] += text.charAt(i), h = !0) : r.push(text.charAt(i)), i += 1;
                    return r
                }, ji.prototype.completeTextData = function(t) {
                    t.__complete = !0;
                    var i, e, r, n, h, o, l, f = this.elem.globalData.fontManager,
                        data = this.data,
                        d = [],
                        m = 0,
                        c = data.m.g,
                        y = 0,
                        v = 0,
                        _ = 0,
                        k = [],
                        A = 0,
                        P = 0,
                        S = f.getFontByName(t.f),
                        w = 0,
                        x = Xe(S);
                    t.fWeight = x.weight, t.fStyle = x.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), e = t.finalText.length, t.finalLineHeight = t.lh;
                    var D, C = t.tr / 1e3 * t.finalSize;
                    if (t.sz)
                        for (var M, F, T = !0, E = t.sz[0], I = t.sz[1]; T;) {
                            M = 0, A = 0, e = (F = this.buildFinalText(t.t)).length, C = t.tr / 1e3 * t.finalSize;
                            var L = -1;
                            for (i = 0; i < e; i += 1) D = F[i].charCodeAt(0), r = !1, " " === F[i] ? L = i : 13 !== D && 3 !== D || (A = 0, r = !0, M += t.finalLineHeight || 1.2 * t.finalSize), f.chars ? (l = f.getCharData(F[i], S.fStyle, S.fFamily), w = r ? 0 : l.w * t.finalSize / 100) : w = f.measureText(F[i], t.f, t.finalSize), A + w > E && " " !== F[i] ? (-1 === L ? e += 1 : i = L, M += t.finalLineHeight || 1.2 * t.finalSize, F.splice(i, L === i ? 1 : 0, "\r"), L = -1, A = 0) : (A += w, A += C);
                            M += S.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && I < M ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = F, e = t.finalText.length, T = !1)
                        }
                    A = -C, w = 0;
                    var V, z = 0;
                    for (i = 0; i < e; i += 1)
                        if (r = !1, 13 === (D = (V = t.finalText[i]).charCodeAt(0)) || 3 === D ? (z = 0, k.push(A), P = A > P ? A : P, A = -2 * C, n = "", r = !0, _ += 1) : n = V, f.chars ? (l = f.getCharData(V, S.fStyle, f.getFontByName(t.f).fFamily), w = r ? 0 : l.w * t.finalSize / 100) : w = f.measureText(n, t.f, t.finalSize), " " === V ? z += w + C : (A += w + C + z, z = 0), d.push({
                                l: w,
                                an: w,
                                add: y,
                                n: r,
                                anIndexes: [],
                                val: n,
                                line: _,
                                animatorJustifyOffset: 0
                            }), 2 == c) {
                            if (y += w, "" === n || " " === n || i === e - 1) {
                                for ("" !== n && " " !== n || (y -= w); v <= i;) d[v].an = y, d[v].ind = m, d[v].extra = w, v += 1;
                                m += 1, y = 0
                            }
                        } else if (3 == c) {
                        if (y += w, "" === n || i === e - 1) {
                            for ("" === n && (y -= w); v <= i;) d[v].an = y, d[v].ind = m, d[v].extra = w, v += 1;
                            y = 0, m += 1
                        }
                    } else d[m].ind = m, d[m].extra = 0, m += 1;
                    if (t.l = d, P = A > P ? A : P, k.push(A), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
                    else switch (t.boxWidth = P, t.j) {
                        case 1:
                            t.justifyOffset = -t.boxWidth;
                            break;
                        case 2:
                            t.justifyOffset = -t.boxWidth / 2;
                            break;
                        default:
                            t.justifyOffset = 0
                    }
                    t.lineWidths = k;
                    var R, N, O, B, j = data.a;
                    o = j.length;
                    var W = [];
                    for (h = 0; h < o; h += 1) {
                        for ((R = j[h]).a.sc && (t.strokeColorAnim = !0), R.a.sw && (t.strokeWidthAnim = !0), (R.a.fc || R.a.fh || R.a.fs || R.a.fb) && (t.fillColorAnim = !0), B = 0, O = R.s.b, i = 0; i < e; i += 1)(N = d[i]).anIndexes[h] = B, (1 == O && "" !== N.val || 2 == O && "" !== N.val && " " !== N.val || 3 == O && (N.n || " " == N.val || i == e - 1) || 4 == O && (N.n || i == e - 1)) && (1 === R.s.rn && W.push(B), B += 1);
                        data.a[h].s.totalChars = B;
                        var X, H = -1;
                        if (1 === R.s.rn)
                            for (i = 0; i < e; i += 1) H != (N = d[i]).anIndexes[h] && (H = N.anIndexes[h], X = W.splice(Math.floor(Math.random() * W.length), 1)[0]), N.anIndexes[h] = X
                    }
                    t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = S.ascent * t.finalSize / 100
                }, ji.prototype.updateDocumentData = function(t, e) {
                    e = void 0 === e ? this.keysIndex : e;
                    var r = this.copyData({}, this.data.d.k[e].s);
                    r = this.copyData(r, t), this.data.d.k[e].s = r, this.recalculate(e), this.elem.addDynamicProperty(this)
                }, ji.prototype.recalculate = function(t) {
                    var e = this.data.d.k[t].s;
                    e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
                }, ji.prototype.canResizeFont = function(t) {
                    this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                }, ji.prototype.setMinimumFontSize = function(t) {
                    this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                };
                var Wi = function() {
                    var t = Math.max,
                        e = Math.min,
                        r = Math.floor;

                    function n(t, data) {
                        this._currentTextLength = -1, this.k = !1, this.data = data, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = Ft.getProp(t, data.s || {
                            k: 0
                        }, 0, 0, this), this.e = "e" in data ? Ft.getProp(t, data.e, 0, 0, this) : {
                            v: 100
                        }, this.o = Ft.getProp(t, data.o || {
                            k: 0
                        }, 0, 0, this), this.xe = Ft.getProp(t, data.xe || {
                            k: 0
                        }, 0, 0, this), this.ne = Ft.getProp(t, data.ne || {
                            k: 0
                        }, 0, 0, this), this.sm = Ft.getProp(t, data.sm || {
                            k: 100
                        }, 0, 0, this), this.a = Ft.getProp(t, data.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
                    }

                    function h(t, data, e) {
                        return new n(t, data, e)
                    }
                    return n.prototype = {
                        getMult: function(n) {
                            this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                            var h = 0,
                                o = 0,
                                l = 1,
                                f = 1;
                            this.ne.v > 0 ? h = this.ne.v / 100 : o = -this.ne.v / 100, this.xe.v > 0 ? l = 1 - this.xe.v / 100 : f = 1 + this.xe.v / 100;
                            var d = Pt.getBezierEasing(h, o, l, f).get,
                                m = 0,
                                s = this.finalS,
                                c = this.finalE,
                                y = this.data.sh;
                            if (2 === y) m = d(m = c === s ? n >= c ? 1 : 0 : t(0, e(.5 / (c - s) + (n - s) / (c - s), 1)));
                            else if (3 === y) m = d(m = c === s ? n >= c ? 0 : 1 : 1 - t(0, e(.5 / (c - s) + (n - s) / (c - s), 1)));
                            else if (4 === y) c === s ? m = 0 : (m = t(0, e(.5 / (c - s) + (n - s) / (c - s), 1))) < .5 ? m *= 2 : m = 1 - 2 * (m - .5), m = d(m);
                            else if (5 === y) {
                                if (c === s) m = 0;
                                else {
                                    var v = c - s,
                                        _ = -v / 2 + (n = e(t(0, n + .5 - s), c - s)),
                                        a = v / 2;
                                    m = Math.sqrt(1 - _ * _ / (a * a))
                                }
                                m = d(m)
                            } else 6 === y ? (c === s ? m = 0 : (n = e(t(0, n + .5 - s), c - s), m = (1 + Math.cos(Math.PI + 2 * Math.PI * n / (c - s))) / 2), m = d(m)) : (n >= r(s) && (m = t(0, e(n - s < 0 ? e(c, 1) - (s - n) : c - n, 1))), m = d(m));
                            if (100 !== this.sm.v) {
                                var k = .01 * this.sm.v;
                                0 === k && (k = 1e-8);
                                var A = .5 - .5 * k;
                                m < A ? m = 0 : (m = (m - A) / k) > 1 && (m = 1)
                            }
                            return m * this.a.v
                        },
                        getValue: function(t) {
                            this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                            var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                                r = this.o.v / e,
                                s = this.s.v / e + r,
                                n = this.e.v / e + r;
                            if (s > n) {
                                var h = s;
                                s = n, n = h
                            }
                            this.finalS = s, this.finalE = n
                        }
                    }, v([Tt], n), {
                        getTextSelectorProp: h
                    }
                }();

                function Xi(t, e, r) {
                    var n = {
                            propType: !1
                        },
                        h = Ft.getProp,
                        o = e.a;
                    this.a = {
                        r: o.r ? h(t, o.r, 0, z, r) : n,
                        rx: o.rx ? h(t, o.rx, 0, z, r) : n,
                        ry: o.ry ? h(t, o.ry, 0, z, r) : n,
                        sk: o.sk ? h(t, o.sk, 0, z, r) : n,
                        sa: o.sa ? h(t, o.sa, 0, z, r) : n,
                        s: o.s ? h(t, o.s, 1, .01, r) : n,
                        a: o.a ? h(t, o.a, 1, 0, r) : n,
                        o: o.o ? h(t, o.o, 0, .01, r) : n,
                        p: o.p ? h(t, o.p, 1, 0, r) : n,
                        sw: o.sw ? h(t, o.sw, 0, 0, r) : n,
                        sc: o.sc ? h(t, o.sc, 1, 0, r) : n,
                        fc: o.fc ? h(t, o.fc, 1, 0, r) : n,
                        fh: o.fh ? h(t, o.fh, 0, 0, r) : n,
                        fs: o.fs ? h(t, o.fs, 0, .01, r) : n,
                        fb: o.fb ? h(t, o.fb, 0, .01, r) : n,
                        t: o.t ? h(t, o.t, 0, 0, r) : n
                    }, this.s = Wi.getTextSelectorProp(t, e.s, r), this.s.t = e.s.t
                }

                function Hi(t, e, r) {
                    this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = r, this._animatorsData = P(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                        alignment: {}
                    }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r)
                }

                function Yi() {}
                Hi.prototype.searchProperties = function() {
                    var i, t, e = this._textData.a.length,
                        r = Ft.getProp;
                    for (i = 0; i < e; i += 1) t = this._textData.a[i], this._animatorsData[i] = new Xi(this._elem, t, this);
                    this._textData.p && "m" in this._textData.p ? (this._pathData = {
                        a: r(this._elem, this._textData.p.a, 0, 0, this),
                        f: r(this._elem, this._textData.p.f, 0, 0, this),
                        l: r(this._elem, this._textData.p.l, 0, 0, this),
                        r: r(this._elem, this._textData.p.r, 0, 0, this),
                        p: r(this._elem, this._textData.p.p, 0, 0, this),
                        m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                    }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = r(this._elem, this._textData.m.a, 1, 0, this)
                }, Hi.prototype.getMeasures = function(t, e) {
                    if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                        this._isFirstFrame = !1;
                        var r, n, i, h, o, l, f, d, m, c, y, v, _, k, A, P, S, w, mask, x = this._moreOptions.alignment.v,
                            D = this._animatorsData,
                            C = this._textData,
                            M = this.mHelper,
                            F = this._renderType,
                            T = this.renderedLetters.length,
                            E = t.l;
                        if (this._hasMaskedPath) {
                            if (mask = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                                var I, L = mask.v;
                                for (this._pathData.r.v && (L = L.reverse()), o = {
                                        tLength: 0,
                                        segments: []
                                    }, h = L._length - 1, P = 0, i = 0; i < h; i += 1) I = Mt.buildBezierData(L.v[i], L.v[i + 1], [L.o[i][0] - L.v[i][0], L.o[i][1] - L.v[i][1]], [L.i[i + 1][0] - L.v[i + 1][0], L.i[i + 1][1] - L.v[i + 1][1]]), o.tLength += I.segmentLength, o.segments.push(I), P += I.segmentLength;
                                i = h, mask.v.c && (I = Mt.buildBezierData(L.v[i], L.v[0], [L.o[i][0] - L.v[i][0], L.o[i][1] - L.v[i][1]], [L.i[0][0] - L.v[0][0], L.i[0][1] - L.v[0][1]]), o.tLength += I.segmentLength, o.segments.push(I), P += I.segmentLength), this._pathData.pi = o
                            }
                            if (o = this._pathData.pi, l = this._pathData.f.v, y = 0, c = 1, d = 0, m = !0, k = o.segments, l < 0 && mask.v.c)
                                for (o.tLength < Math.abs(l) && (l = -Math.abs(l) % o.tLength), c = (_ = k[y = k.length - 1].points).length - 1; l < 0;) l += _[c].partialLength, (c -= 1) < 0 && (c = (_ = k[y -= 1].points).length - 1);
                            v = (_ = k[y].points)[c - 1], A = (f = _[c]).partialLength
                        }
                        h = E.length, r = 0, n = 0;
                        var V, z, R, N, O, B = 1.2 * t.finalSize * .714,
                            j = !0;
                        R = D.length;
                        var W, X, H, Y, G, J, K, U, tt, et, it, st, at = -1,
                            nt = l,
                            ht = y,
                            ot = c,
                            lt = -1,
                            pt = "",
                            ft = this.defaultPropsArray;
                        if (2 === t.j || 1 === t.j) {
                            var mt = 0,
                                ct = 0,
                                ut = 2 === t.j ? -.5 : -1,
                                gt = 0,
                                yt = !0;
                            for (i = 0; i < h; i += 1)
                                if (E[i].n) {
                                    for (mt && (mt += ct); gt < i;) E[gt].animatorJustifyOffset = mt, gt += 1;
                                    mt = 0, yt = !0
                                } else {
                                    for (z = 0; z < R; z += 1)(V = D[z].a).t.propType && (yt && 2 === t.j && (ct += V.t.v * ut), (O = D[z].s.getMult(E[i].anIndexes[z], C.a[z].s.totalChars)).length ? mt += V.t.v * O[0] * ut : mt += V.t.v * O * ut);
                                    yt = !1
                                }
                            for (mt && (mt += ct); gt < i;) E[gt].animatorJustifyOffset = mt, gt += 1
                        }
                        for (i = 0; i < h; i += 1) {
                            if (M.reset(), Y = 1, E[i].n) r = 0, n += t.yOffset, n += j ? 1 : 0, l = nt, j = !1, this._hasMaskedPath && (c = ot, v = (_ = k[y = ht].points)[c - 1], A = (f = _[c]).partialLength, d = 0), pt = "", it = "", tt = "", st = "", ft = this.defaultPropsArray;
                            else {
                                if (this._hasMaskedPath) {
                                    if (lt !== E[i].line) {
                                        switch (t.j) {
                                            case 1:
                                                l += P - t.lineWidths[E[i].line];
                                                break;
                                            case 2:
                                                l += (P - t.lineWidths[E[i].line]) / 2
                                        }
                                        lt = E[i].line
                                    }
                                    at !== E[i].ind && (E[at] && (l += E[at].extra), l += E[i].an / 2, at = E[i].ind), l += x[0] * E[i].an * .005;
                                    var vt = 0;
                                    for (z = 0; z < R; z += 1)(V = D[z].a).p.propType && ((O = D[z].s.getMult(E[i].anIndexes[z], C.a[z].s.totalChars)).length ? vt += V.p.v[0] * O[0] : vt += V.p.v[0] * O), V.a.propType && ((O = D[z].s.getMult(E[i].anIndexes[z], C.a[z].s.totalChars)).length ? vt += V.a.v[0] * O[0] : vt += V.a.v[0] * O);
                                    for (m = !0, this._pathData.a.v && (l = .5 * E[0].an + (P - this._pathData.f.v - .5 * E[0].an - .5 * E[E.length - 1].an) * at / (h - 1), l += this._pathData.f.v); m;) d + A >= l + vt || !_ ? (S = (l + vt - d) / f.partialLength, X = v.point[0] + (f.point[0] - v.point[0]) * S, H = v.point[1] + (f.point[1] - v.point[1]) * S, M.translate(-x[0] * E[i].an * .005, -x[1] * B * .01), m = !1) : _ && (d += f.partialLength, (c += 1) >= _.length && (c = 0, k[y += 1] ? _ = k[y].points : mask.v.c ? (c = 0, _ = k[y = 0].points) : (d -= f.partialLength, _ = null)), _ && (v = f, A = (f = _[c]).partialLength));
                                    W = E[i].an / 2 - E[i].add, M.translate(-W, 0, 0)
                                } else W = E[i].an / 2 - E[i].add, M.translate(-W, 0, 0), M.translate(-x[0] * E[i].an * .005, -x[1] * B * .01, 0);
                                for (z = 0; z < R; z += 1)(V = D[z].a).t.propType && (O = D[z].s.getMult(E[i].anIndexes[z], C.a[z].s.totalChars), 0 === r && 0 === t.j || (this._hasMaskedPath ? O.length ? l += V.t.v * O[0] : l += V.t.v * O : O.length ? r += V.t.v * O[0] : r += V.t.v * O));
                                for (t.strokeWidthAnim && (J = t.sw || 0), t.strokeColorAnim && (G = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (K = [t.fc[0], t.fc[1], t.fc[2]]), z = 0; z < R; z += 1)(V = D[z].a).a.propType && ((O = D[z].s.getMult(E[i].anIndexes[z], C.a[z].s.totalChars)).length ? M.translate(-V.a.v[0] * O[0], -V.a.v[1] * O[1], V.a.v[2] * O[2]) : M.translate(-V.a.v[0] * O, -V.a.v[1] * O, V.a.v[2] * O));
                                for (z = 0; z < R; z += 1)(V = D[z].a).s.propType && ((O = D[z].s.getMult(E[i].anIndexes[z], C.a[z].s.totalChars)).length ? M.scale(1 + (V.s.v[0] - 1) * O[0], 1 + (V.s.v[1] - 1) * O[1], 1) : M.scale(1 + (V.s.v[0] - 1) * O, 1 + (V.s.v[1] - 1) * O, 1));
                                for (z = 0; z < R; z += 1) {
                                    if (V = D[z].a, O = D[z].s.getMult(E[i].anIndexes[z], C.a[z].s.totalChars), V.sk.propType && (O.length ? M.skewFromAxis(-V.sk.v * O[0], V.sa.v * O[1]) : M.skewFromAxis(-V.sk.v * O, V.sa.v * O)), V.r.propType && (O.length ? M.rotateZ(-V.r.v * O[2]) : M.rotateZ(-V.r.v * O)), V.ry.propType && (O.length ? M.rotateY(V.ry.v * O[1]) : M.rotateY(V.ry.v * O)), V.rx.propType && (O.length ? M.rotateX(V.rx.v * O[0]) : M.rotateX(V.rx.v * O)), V.o.propType && (O.length ? Y += (V.o.v * O[0] - Y) * O[0] : Y += (V.o.v * O - Y) * O), t.strokeWidthAnim && V.sw.propType && (O.length ? J += V.sw.v * O[0] : J += V.sw.v * O), t.strokeColorAnim && V.sc.propType)
                                        for (U = 0; U < 3; U += 1) O.length ? G[U] += (V.sc.v[U] - G[U]) * O[0] : G[U] += (V.sc.v[U] - G[U]) * O;
                                    if (t.fillColorAnim && t.fc) {
                                        if (V.fc.propType)
                                            for (U = 0; U < 3; U += 1) O.length ? K[U] += (V.fc.v[U] - K[U]) * O[0] : K[U] += (V.fc.v[U] - K[U]) * O;
                                        V.fh.propType && (K = O.length ? $(K, V.fh.v * O[0]) : $(K, V.fh.v * O)), V.fs.propType && (K = O.length ? Z(K, V.fs.v * O[0]) : Z(K, V.fs.v * O)), V.fb.propType && (K = O.length ? Q(K, V.fb.v * O[0]) : Q(K, V.fb.v * O))
                                    }
                                }
                                for (z = 0; z < R; z += 1)(V = D[z].a).p.propType && (O = D[z].s.getMult(E[i].anIndexes[z], C.a[z].s.totalChars), this._hasMaskedPath ? O.length ? M.translate(0, V.p.v[1] * O[0], -V.p.v[2] * O[1]) : M.translate(0, V.p.v[1] * O, -V.p.v[2] * O) : O.length ? M.translate(V.p.v[0] * O[0], V.p.v[1] * O[1], -V.p.v[2] * O[2]) : M.translate(V.p.v[0] * O, V.p.v[1] * O, -V.p.v[2] * O));
                                if (t.strokeWidthAnim && (tt = J < 0 ? 0 : J), t.strokeColorAnim && (et = "rgb(" + Math.round(255 * G[0]) + "," + Math.round(255 * G[1]) + "," + Math.round(255 * G[2]) + ")"), t.fillColorAnim && t.fc && (it = "rgb(" + Math.round(255 * K[0]) + "," + Math.round(255 * K[1]) + "," + Math.round(255 * K[2]) + ")"), this._hasMaskedPath) {
                                    if (M.translate(0, -t.ls), M.translate(0, x[1] * B * .01 + n, 0), this._pathData.p.v) {
                                        w = (f.point[1] - v.point[1]) / (f.point[0] - v.point[0]);
                                        var bt = 180 * Math.atan(w) / Math.PI;
                                        f.point[0] < v.point[0] && (bt += 180), M.rotate(-bt * Math.PI / 180)
                                    }
                                    M.translate(X, H, 0), l -= x[0] * E[i].an * .005, E[i + 1] && at !== E[i + 1].ind && (l += E[i].an / 2, l += .001 * t.tr * t.finalSize)
                                } else {
                                    switch (M.translate(r, n, 0), t.ps && M.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                                        case 1:
                                            M.translate(E[i].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[E[i].line]), 0, 0);
                                            break;
                                        case 2:
                                            M.translate(E[i].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[E[i].line]) / 2, 0, 0)
                                    }
                                    M.translate(0, -t.ls), M.translate(W, 0, 0), M.translate(x[0] * E[i].an * .005, x[1] * B * .01, 0), r += E[i].l + .001 * t.tr * t.finalSize
                                }
                                "html" === F ? pt = M.toCSS() : "svg" === F ? pt = M.to2dCSS() : ft = [M.props[0], M.props[1], M.props[2], M.props[3], M.props[4], M.props[5], M.props[6], M.props[7], M.props[8], M.props[9], M.props[10], M.props[11], M.props[12], M.props[13], M.props[14], M.props[15]], st = Y
                            }
                            T <= i ? (N = new qi(st, tt, et, it, pt, ft), this.renderedLetters.push(N), T += 1, this.lettersChangedFlag = !0) : (N = this.renderedLetters[i], this.lettersChangedFlag = N.update(st, tt, et, it, pt, ft) || this.lettersChangedFlag)
                        }
                    }
                }, Hi.prototype.getValue = function() {
                    this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
                }, Hi.prototype.mHelper = new Nt, Hi.prototype.defaultPropsArray = [], v([Tt], Hi), Yi.prototype.initElement = function(data, t, e) {
                    this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(data, t, e), this.textProperty = new ji(this, data.t, this.dynamicProperties), this.textAnimator = new Hi(data.t, this.renderType, this), this.initTransform(data, t, e), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
                }, Yi.prototype.prepareFrame = function(t) {
                    this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
                }, Yi.prototype.createPathShape = function(t, e) {
                    var r, n, h = e.length,
                        o = "";
                    for (r = 0; r < h; r += 1) "sh" === e[r].ty && (n = e[r].ks.k, o += Ni(n, n.i.length, !0, t));
                    return o
                }, Yi.prototype.updateDocumentData = function(t, e) {
                    this.textProperty.updateDocumentData(t, e)
                }, Yi.prototype.canResizeFont = function(t) {
                    this.textProperty.canResizeFont(t)
                }, Yi.prototype.setMinimumFontSize = function(t) {
                    this.textProperty.setMinimumFontSize(t)
                }, Yi.prototype.applyTextPropertiesToMatrix = function(t, e, r, n, h) {
                    switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                        case 1:
                            e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
                            break;
                        case 2:
                            e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0)
                    }
                    e.translate(n, h, 0)
                }, Yi.prototype.buildColor = function(t) {
                    return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
                }, Yi.prototype.emptyProp = new qi, Yi.prototype.destroy = function() {};
                var Gi = {
                    shapes: []
                };

                function Ji(data, t, e) {
                    this.textSpans = [], this.renderType = "svg", this.initElement(data, t, e)
                }

                function Ki(data, t, e) {
                    this.initElement(data, t, e)
                }

                function Ui(data, t, e) {
                    this.initFrame(), this.initBaseData(data, t, e), this.initFrame(), this.initTransform(data, t, e), this.initHierarchy()
                }

                function Zi() {}

                function Qi() {}

                function $i(data, t, e) {
                    this.layers = data.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? P(this.layers.length) : [], this.initElement(data, t, e), this.tm = data.tm ? Ft.getProp(this, data.tm, 0, t.frameRate, this) : {
                        _placeholder: !0
                    }
                }

                function ts(t, e) {
                    this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = lt("svg");
                    var r = "";
                    if (e && e.title) {
                        var n = lt("title"),
                            h = J();
                        n.setAttribute("id", h), n.textContent = e.title, this.svgElement.appendChild(n), r += h
                    }
                    if (e && e.description) {
                        var o = lt("desc"),
                            l = J();
                        o.setAttribute("id", l), o.textContent = e.description, this.svgElement.appendChild(o), r += " " + l
                    }
                    r && this.svgElement.setAttribute("aria-labelledby", r);
                    var defs = lt("defs");
                    this.svgElement.appendChild(defs);
                    var f = lt("g");
                    this.svgElement.appendChild(f), this.layerElement = f, this.renderConfig = {
                        preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                        contentVisibility: e && e.contentVisibility || "visible",
                        progressiveLoad: e && e.progressiveLoad || !1,
                        hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                        viewBoxOnly: e && e.viewBoxOnly || !1,
                        viewBoxSize: e && e.viewBoxSize || !1,
                        className: e && e.className || "",
                        id: e && e.id || "",
                        focusable: e && e.focusable,
                        filterSize: {
                            width: e && e.filterSize && e.filterSize.width || "100%",
                            height: e && e.filterSize && e.filterSize.height || "100%",
                            x: e && e.filterSize && e.filterSize.x || "0%",
                            y: e && e.filterSize && e.filterSize.y || "0%"
                        },
                        width: e && e.width,
                        height: e && e.height,
                        runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
                    }, this.globalData = {
                        _mdf: !1,
                        frameNum: -1,
                        defs: defs,
                        renderConfig: this.renderConfig
                    }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
                }
                return v([ri, fi, bi, _i, ni, ki, Yi], Ji), Ji.prototype.createContent = function() {
                    this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = lt("text"))
                }, Ji.prototype.buildTextContents = function(t) {
                    for (var i = 0, e = t.length, r = [], n = ""; i < e;) t[i] === String.fromCharCode(13) || t[i] === String.fromCharCode(3) ? (r.push(n), n = "") : n += t[i], i += 1;
                    return r.push(n), r
                }, Ji.prototype.buildShapeData = function(data, t) {
                    if (data.shapes && data.shapes.length) {
                        var e = data.shapes[0];
                        if (e.it) {
                            var r = e.it[e.it.length - 1];
                            r.s && (r.s.k[0] = t, r.s.k[1] = t)
                        }
                    }
                    return data
                }, Ji.prototype.buildNewText = function() {
                    var i, t;
                    this.addDynamicProperty(this);
                    var e = this.textProperty.currentData;
                    this.renderedLetters = P(e ? e.l.length : 0), e.fc ? this.layerElement.setAttribute("fill", this.buildColor(e.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), e.sc && (this.layerElement.setAttribute("stroke", this.buildColor(e.sc)), this.layerElement.setAttribute("stroke-width", e.sw)), this.layerElement.setAttribute("font-size", e.finalSize);
                    var r = this.globalData.fontManager.getFontByName(e.f);
                    if (r.fClass) this.layerElement.setAttribute("class", r.fClass);
                    else {
                        this.layerElement.setAttribute("font-family", r.fFamily);
                        var n = e.fWeight,
                            h = e.fStyle;
                        this.layerElement.setAttribute("font-style", h), this.layerElement.setAttribute("font-weight", n)
                    }
                    this.layerElement.setAttribute("aria-label", e.t);
                    var o, l = e.l || [],
                        f = !!this.globalData.fontManager.chars;
                    t = l.length;
                    var d = this.mHelper,
                        m = "",
                        c = this.data.singleShape,
                        y = 0,
                        v = 0,
                        _ = !0,
                        k = .001 * e.tr * e.finalSize;
                    if (!c || f || e.sz) {
                        var A, S = this.textSpans.length;
                        for (i = 0; i < t; i += 1) {
                            if (this.textSpans[i] || (this.textSpans[i] = {
                                    span: null,
                                    childSpan: null,
                                    glyph: null
                                }), !f || !c || 0 === i) {
                                if (o = S > i ? this.textSpans[i].span : lt(f ? "g" : "text"), S <= i) {
                                    if (o.setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4"), this.textSpans[i].span = o, f) {
                                        var w = lt("g");
                                        o.appendChild(w), this.textSpans[i].childSpan = w
                                    }
                                    this.textSpans[i].span = o, this.layerElement.appendChild(o)
                                }
                                o.style.display = "inherit"
                            }
                            if (d.reset(), c && (l[i].n && (y = -k, v += e.yOffset, v += _ ? 1 : 0, _ = !1), this.applyTextPropertiesToMatrix(e, d, l[i].line, y, v), y += l[i].l || 0, y += k), f) {
                                var x;
                                if (1 === (A = this.globalData.fontManager.getCharData(e.finalText[i], r.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily)).t) x = new $i(A.data, this.globalData, this);
                                else {
                                    var data = Gi;
                                    A.data && A.data.shapes && (data = this.buildShapeData(A.data, e.finalSize)), x = new Bi(data, this.globalData, this)
                                }
                                if (this.textSpans[i].glyph) {
                                    var glyph = this.textSpans[i].glyph;
                                    this.textSpans[i].childSpan.removeChild(glyph.layerElement), glyph.destroy()
                                }
                                this.textSpans[i].glyph = x, x._debug = !0, x.prepareFrame(0), x.renderFrame(), this.textSpans[i].childSpan.appendChild(x.layerElement), 1 === A.t && this.textSpans[i].childSpan.setAttribute("transform", "scale(" + e.finalSize / 100 + "," + e.finalSize / 100 + ")")
                            } else c && o.setAttribute("transform", "translate(" + d.props[12] + "," + d.props[13] + ")"), o.textContent = l[i].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
                        }
                        c && o && o.setAttribute("d", m)
                    } else {
                        var D = this.textContainer,
                            C = "start";
                        switch (e.j) {
                            case 1:
                                C = "end";
                                break;
                            case 2:
                                C = "middle";
                                break;
                            default:
                                C = "start"
                        }
                        D.setAttribute("text-anchor", C), D.setAttribute("letter-spacing", k);
                        var M = this.buildTextContents(e.finalText);
                        for (t = M.length, v = e.ps ? e.ps[1] + e.ascent : 0, i = 0; i < t; i += 1)(o = this.textSpans[i].span || lt("tspan")).textContent = M[i], o.setAttribute("x", 0), o.setAttribute("y", v), o.style.display = "inherit", D.appendChild(o), this.textSpans[i] || (this.textSpans[i] = {
                            span: null,
                            glyph: null
                        }), this.textSpans[i].span = o, v += e.finalLineHeight;
                        this.layerElement.appendChild(D)
                    }
                    for (; i < this.textSpans.length;) this.textSpans[i].span.style.display = "none", i += 1;
                    this._sizeChanged = !0
                }, Ji.prototype.sourceRectAtTime = function() {
                    if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                        this._sizeChanged = !1;
                        var t = this.layerElement.getBBox();
                        this.bbox = {
                            top: t.y,
                            left: t.x,
                            width: t.width,
                            height: t.height
                        }
                    }
                    return this.bbox
                }, Ji.prototype.getValue = function() {
                    var i, t, e = this.textSpans.length;
                    for (this.renderedFrame = this.comp.renderedFrame, i = 0; i < e; i += 1)(t = this.textSpans[i].glyph) && (t.prepareFrame(this.comp.renderedFrame - this.data.st), t._mdf && (this._mdf = !0))
                }, Ji.prototype.renderInnerContent = function() {
                    if ((!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                        var i, t;
                        this._sizeChanged = !0;
                        var e, r, n, h = this.textAnimator.renderedLetters,
                            o = this.textProperty.currentData.l;
                        for (t = o.length, i = 0; i < t; i += 1) o[i].n || (e = h[i], r = this.textSpans[i].span, (n = this.textSpans[i].glyph) && n.renderFrame(), e._mdf.m && r.setAttribute("transform", e.m), e._mdf.o && r.setAttribute("opacity", e.o), e._mdf.sw && r.setAttribute("stroke-width", e.sw), e._mdf.sc && r.setAttribute("stroke", e.sc), e._mdf.fc && r.setAttribute("fill", e.fc))
                    }
                }, v([Ai], Ki), Ki.prototype.createContent = function() {
                    var rect = lt("rect");
                    rect.setAttribute("width", this.data.sw), rect.setAttribute("height", this.data.sh), rect.setAttribute("fill", this.data.sc), this.layerElement.appendChild(rect)
                }, Ui.prototype.prepareFrame = function(t) {
                    this.prepareProperties(t, !0)
                }, Ui.prototype.renderFrame = function() {}, Ui.prototype.getBaseElement = function() {
                    return null
                }, Ui.prototype.destroy = function() {}, Ui.prototype.sourceRectAtTime = function() {}, Ui.prototype.hide = function() {}, v([ri, fi, _i, ni], Ui), v([pi], Zi), Zi.prototype.createNull = function(data) {
                    return new Ui(data, this.globalData, this)
                }, Zi.prototype.createShape = function(data) {
                    return new Bi(data, this.globalData, this)
                }, Zi.prototype.createText = function(data) {
                    return new Ji(data, this.globalData, this)
                }, Zi.prototype.createImage = function(data) {
                    return new Ai(data, this.globalData, this)
                }, Zi.prototype.createSolid = function(data) {
                    return new Ki(data, this.globalData, this)
                }, Zi.prototype.configAnimation = function(t) {
                    this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                    var defs = this.globalData.defs;
                    this.setupGlobalData(t, defs), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
                    var e = lt("clipPath"),
                        rect = lt("rect");
                    rect.setAttribute("width", t.w), rect.setAttribute("height", t.h), rect.setAttribute("x", 0), rect.setAttribute("y", 0);
                    var r = J();
                    e.setAttribute("id", r), e.appendChild(rect), this.layerElement.setAttribute("clip-path", "url(" + c() + "#" + r + ")"), defs.appendChild(e), this.layers = t.layers, this.elements = P(t.layers.length)
                }, Zi.prototype.destroy = function() {
                    var i;
                    this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
                    var t = this.layers ? this.layers.length : 0;
                    for (i = 0; i < t; i += 1) this.elements[i] && this.elements[i].destroy();
                    this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                }, Zi.prototype.updateContainerSize = function() {}, Zi.prototype.findIndexByInd = function(t) {
                    var i = 0,
                        e = this.layers.length;
                    for (i = 0; i < e; i += 1)
                        if (this.layers[i].ind === t) return i;
                    return -1
                }, Zi.prototype.buildItem = function(t) {
                    var e = this.elements;
                    if (!e[t] && 99 !== this.layers[t].ty) {
                        e[t] = !0;
                        var element = this.createItem(this.layers[t]);
                        if (e[t] = element, st() && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(element), element.initExpressions()), this.appendElementInPos(element, t), this.layers[t].tt) {
                            var r = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
                            if (-1 === r) return;
                            if (this.elements[r] && !0 !== this.elements[r]) {
                                var n = e[r].getMatte(this.layers[t].tt);
                                element.setMatte(n)
                            } else this.buildItem(r), this.addPendingElement(element)
                        }
                    }
                }, Zi.prototype.checkPendingElements = function() {
                    for (; this.pendingElements.length;) {
                        var element = this.pendingElements.pop();
                        if (element.checkParenting(), element.data.tt)
                            for (var i = 0, t = this.elements.length; i < t;) {
                                if (this.elements[i] === element) {
                                    var e = "tp" in element.data ? this.findIndexByInd(element.data.tp) : i - 1,
                                        r = this.elements[e].getMatte(this.layers[i].tt);
                                    element.setMatte(r);
                                    break
                                }
                                i += 1
                            }
                    }
                }, Zi.prototype.renderFrame = function(t) {
                    if (this.renderedFrame !== t && !this.destroyed) {
                        var i;
                        null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                        var e = this.layers.length;
                        for (this.completeLayers || this.checkLayers(t), i = e - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && this.elements[i].prepareFrame(t - this.layers[i].st);
                        if (this.globalData._mdf)
                            for (i = 0; i < e; i += 1)(this.completeLayers || this.elements[i]) && this.elements[i].renderFrame()
                    }
                }, Zi.prototype.appendElementInPos = function(element, t) {
                    var e = element.getBaseElement();
                    if (e) {
                        for (var r, i = 0; i < t;) this.elements[i] && !0 !== this.elements[i] && this.elements[i].getBaseElement() && (r = this.elements[i].getBaseElement()), i += 1;
                        r ? this.layerElement.insertBefore(e, r) : this.layerElement.appendChild(e)
                    }
                }, Zi.prototype.hide = function() {
                    this.layerElement.style.display = "none"
                }, Zi.prototype.show = function() {
                    this.layerElement.style.display = "block"
                }, v([ri, fi, _i, ni, ki], Qi), Qi.prototype.initElement = function(data, t, e) {
                    this.initFrame(), this.initBaseData(data, t, e), this.initTransform(data, t, e), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && t.progressiveLoad || this.buildAllItems(), this.hide()
                }, Qi.prototype.prepareFrame = function(t) {
                    if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
                        if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                        else {
                            var e = this.tm.v;
                            e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
                        }
                        var i, r = this.elements.length;
                        for (this.completeLayers || this.checkLayers(this.renderedFrame), i = r - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = !0))
                    }
                }, Qi.prototype.renderInnerContent = function() {
                    var i, t = this.layers.length;
                    for (i = 0; i < t; i += 1)(this.completeLayers || this.elements[i]) && this.elements[i].renderFrame()
                }, Qi.prototype.setElements = function(t) {
                    this.elements = t
                }, Qi.prototype.getElements = function() {
                    return this.elements
                }, Qi.prototype.destroyElements = function() {
                    var i, t = this.layers.length;
                    for (i = 0; i < t; i += 1) this.elements[i] && this.elements[i].destroy()
                }, Qi.prototype.destroy = function() {
                    this.destroyElements(), this.destroyBaseElement()
                }, v([Zi, Qi, bi], $i), $i.prototype.createComp = function(data) {
                    return new $i(data, this.globalData, this)
                }, v([Zi], ts), ts.prototype.createComp = function(data) {
                    return new $i(data, this.globalData, this)
                }, vt("svg", ts), re.registerModifier("tm", he), re.registerModifier("pb", oe), re.registerModifier("rp", pe), re.registerModifier("rd", fe), re.registerModifier("zz", Fe), re.registerModifier("op", We), Bt
            }())
        },
        353: function(t, e) {
            (function(e) {
                t.exports = e
            }).call(this, {})
        }
    }
]);
//# sourceMappingURL=https://upwork-usw2-staging-assets-jsmaps.s3.us-west-2.amazonaws.com/Brontes/vendors~lottie-light.c5494fad.js.map