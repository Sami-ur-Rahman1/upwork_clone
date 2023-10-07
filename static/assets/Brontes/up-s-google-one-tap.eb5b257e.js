(window.webpackJsonp = window.webpackJsonp || []).push([
    [491], {
        1490: function(e, t, o) {
            "use strict";
            o.r(t);
            var n = o(119),
                r = o(54),
                c = (e, t) => {
                    window.io_global_object_name = "IGLOO";
                    const o = new Promise((e => {
                            const t = setTimeout((() => e("")), 3e3);
                            window.IGLOO = window.IGLOO || {
                                enable_flash: !1,
                                bb_callback: (o, n) => {
                                    t && clearTimeout(t), n && e(o)
                                },
                                loader: {
                                    uri_hook: "/iojs",
                                    version: "general5"
                                }
                            }
                        })),
                        n = () => {
                            const script = document.createElement("script");
                            script.type = "text/javascript", script.src = "https://www.upwork.com/static/iovation/5.2.2/loader_only.js", document.body.appendChild(script)
                        };
                    "loading" !== document.readyState ? n() : document.addEventListener("DOMContentLoaded", n, {
                        once: !0
                    });
                    const r = {
                        bbPromise: o,
                        getBlackbox: () => window.IGLOO.getBlackbox()
                    };
                    return e ? t("iovation", r) : r
                },
                l = o(40);
            var d = {
                openWebsocketWithToken(e) {
                    e || (e = l.a.getValueFromNameSelector(l.a.getPrefix() + "oauth2_global_js_token"));
                    const t = window.NUXT_APP_CONFIG ? NUXT_APP_CONFIG.transportLayerEndpoint : Applet.getVar("transport_layer_url");
                    if (!t) throw new Error("Transport layer endpoint is not defined");
                    return new WebSocket("".concat(t, "?app=AccountSecurity&libVersion=4.8.0&oauth2_token=").concat(e, "&X-Atmosphere-tracking-id=0&X-Atmosphere-Framework=2.3.8-javascript&X-Atmosphere-Transport=websocket&X-Atmosphere-TrackMessageSize=true&X-atmo-protocol=true"))
                }
            };
            var h = e => async (t, o, n) => {
                const data = t.data || {};
                if (o.locked = 1 !== o.retryCounter && !!data.securityCheckCertificate, e && e(o.locked), !o.locked) return t;
                await new Promise((async e => {
                    await
                    function(e, t, o, n) {
                        if (e.resolve = n, e.webSocket) return Promise.resolve();
                        return e.webSocket = d.openWebsocketWithToken(t), e.webSocket.onmessage = t => {
                            var n, r, c;
                            let data = {};
                            try {
                                data = JSON.parse(t.data)
                            } catch (e) {}
                            const l = null === (n = data) || void 0 === n || null === (r = n.data) || void 0 === r ? void 0 : r.securityCheckId;
                            "LOGIN_DECISION_AVAILABLE" !== (null === (c = data) || void 0 === c ? void 0 : c.eventName) || l !== o && l || (e.resolve(), e.webSocket.close()), e.webSocket.onclose = () => e.webSocket = null
                        }, new Promise((t => {
                            e.webSocket.onopen = t, setTimeout(t, 2e3)
                        }))
                    }(o, data.authToken, data.requestId, e), setTimeout((() => e()), void 0 === o.retryCounter ? 0 : 6e3)
                }));
                const r = JSON.parse(o.body);
                return Object.assign(r.login, {
                    securityCheckCertificate: data.securityCheckCertificate,
                    authToken: data.authToken
                }), o.body = JSON.stringify(r), o.retryCounter = void 0 === o.retryCounter ? 30 : o.retryCounter - 1, n()
            };
            const w = {
                    MODE_PASSWORD: "password",
                    MODE_SSO: "sso",
                    MODE_CHALLENGE: "challenge"
                },
                v = 0;
            let m = null,
                k = {};

            function _(e) {
                return 1 === e.success ? Promise.resolve(!0) : Promise.reject(null == e ? void 0 : e.mode)
            }
            async function O(data) {
                return data.iovation || (data.iovation = await new Promise((async e => {
                    setTimeout((() => e("")), 1e3), e(await c().bbPromise)
                }))), Object(n.a)(r.a, [h()]).headers(k).post({
                    login: data
                }).json((e => {
                    if ((null == e ? void 0 : e.challengeType) === v && m) {
                        const t = {
                            login: {
                                deviceAuthorization: {
                                    answer: m,
                                    remember: !0
                                },
                                mode: w.MODE_CHALLENGE,
                                iovation: data.iovation,
                                authToken: null == e ? void 0 : e.authToken,
                                challengeData: null == e ? void 0 : e.challengeData
                            }
                        };
                        return data.username ? t.login.username = data.username : t.login.ssoUserData = data.ssoUserData,
                            function(data) {
                                return Object(n.a)(r.a).headers(k).post(data).json((e => _(e)))
                            }(t)
                    }
                    return _(e)
                }))
            }
            var y = {
                headers(e) {
                    return k = e, this
                },
                provideSecurityAnswer(e) {
                    return m = e, this
                },
                withSso: function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    return O({
                        mode: w.MODE_SSO,
                        ssoUserData: e,
                        iovation: t
                    })
                },
                withPassword: function(e, t) {
                    let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return O({
                        mode: w.MODE_PASSWORD,
                        username: e,
                        password: t,
                        iovation: o
                    })
                }
            };
            var f = function(e, t, o) {
                o("impression", "show_widget"), window.google.accounts.id.initialize({
                    client_id: e,
                    callback: e => {
                        t(e.credential)
                    },
                    cancel_on_tap_outside: !1
                }), window.google.accounts.id.prompt()
            };
            let S;
            var T = {
                    methods: {
                        trackEvent(e) {
                            const t = "page" === e.event ? ["olog"] : ["olog", "snowplow"];
                            return this.$tracker.track({ ...e,
                                trackers: t
                            })
                        },
                        async logEvent(e) {
                            const t = { ...e
                            };
                            var o;
                            o = "id", {}.hasOwnProperty.call(e.data || {}, o) && (t.data.id = this.$store.state.context.user.uid), await this.trackEvent(t)
                        },
                        async logImpressionEvent(e, t) {
                            !S && t && (await this.logEvent(t), S = !0), await this.logEvent(e)
                        },
                        extendLogData: (e, data) => ({ ...e,
                            data: { ...e.data || {},
                                ...data
                            }
                        })
                    }
                },
                E = o(0),
                P = {
                    mixins: [Object(E.a)(T, undefined, undefined, !1, null, null, null).exports],
                    props: {
                        clientId: {
                            type: String,
                            required: !0
                        }
                    },
                    head() {
                        return {
                            script: [{
                                hid: "google-qsi-client",
                                src: "https://accounts.google.com/gsi/client",
                                defer: !0,
                                callback: () => {
                                    f(this.clientId, this.authorize, this.logWidget)
                                }
                            }]
                        }
                    },
                    methods: {
                        authorize(e) {
                            this.processGoogleOneTapUser(e)
                        },
                        logWidget(e, label) {
                            this.logEvent({
                                event: e,
                                sublocation: "one_tap_sign_up",
                                label: label
                            })
                        },
                        async processGoogleOneTapUser(e) {
                            const t = await this.$iovation.bbPromise;
                            await this.signUpWithOneTap(e, t)
                        },
                        async signUpWithOneTap(e, t) {
                            const {
                                login: o,
                                redirectTo: n
                            } = await this.authorizeWithOneTap(e);
                            if (o) {
                                try {
                                    if (!await this.logIn(t, o, e)) return
                                } catch (e) {
                                    return window.localStorage.setItem("existingAccountLoginAlert", !0), void(window.location.href = this.$localePrefix("/ab/account-security/login"))
                                }
                                this.logWidget("click", "existing_user_with_one_tap"), window.location.href = this.$localePrefix("/signup/home/")
                            } else n && (this.logWidget("click", "new_user_with_one_tap"), window.location.href = this.$localePrefix(n))
                        },
                        authorizeWithOneTap(e) {
                            return this.$http({
                                handleApiErrors: !1
                            }).url("/signup/one-tap-redirect-url?credential=".concat(encodeURI(e))).get().json()
                        },
                        logIn(e, t, o) {
                            return y.withSso({
                                email: t,
                                clientId: this.clientId,
                                provider: "google",
                                authResponse: {
                                    id_token: o
                                },
                                iovation: e
                            })
                        }
                    }
                },
                I = P,
                A = Object(E.a)(I, (function() {
                    return (0, this._self._c)("div")
                }), [], !1, null, null, null);
            t.default = A.exports
        }
    }
]);
//# sourceMappingURL=https://upwork-usw2-staging-assets-jsmaps.s3.us-west-2.amazonaws.com/Brontes/up-s-google-one-tap.eb5b257e.js.map