(window["wpJsonpMicroapp_visitor-v2"] = window["wpJsonpMicroapp_visitor-v2"] || []).push([
    ["main"], {
        "13b9": function(e, o, n) {
            "use strict";
            var t = n("08a3"),
                a = n.n(t);
            let r = a.a;
            window.VueI18n && (console.log("using external VueI18n"), r = window.VueI18n), o["a"] = r
        },
        "48ff": function(e, o, n) {
            "use strict";
            n("4b72")
        },
        "4b72": function(e, o, n) {
            var t = n("b8c8");
            t.__esModule && (t = t.default), "string" === typeof t && (t = [
                [e.i, t, ""]
            ]), t.locals && (e.exports = t.locals);
            var a = n("499e").default;
            a("66aea01a", t, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        5880: function(e, o) {
            e.exports = Vuex
        },
        "6f1b": function(e, o, n) {
            "use strict";
            n.r(o);
            var t = n("8bbf"),
                a = n.n(t),
                r = n("13b9"),
                i = n("651e"),
                s = n.n(i),
                c = n("05b8"),
                l = n("e517"),
                u = n("16d7"),
                d = n("9b9e"),
                p = n("df42"),
                v = n("77ef"),
                b = n("8e26"),
                h = n.n(b),
                g = n("cc45"),
                f = function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("div", {
                        class: {
                            "has-subnav": !!e.secondaryNavType, "has-locale-banner": !!e.showLocaleBanner
                        },
                        attrs: {
                            id: "visitor-v2-top-navigation-container",
                            "data-ver": e.version,
                            "data-qa": this.$root.isFallback ? "top-navigation-fallback" : ""
                        }
                    }, [e.showLocaleBanner ? n("NavLocaleBanner", {
                        attrs: {
                            "locale-banner-data": e.localeBannerData,
                            tracker: e.$tracker
                        },
                        on: {
                            "nav-locale-banner-confirm": e.onNavConfirmLocaleBanner,
                            "open-i18n-modal": e.onToggleCurrencyModal,
                            "nav-locale-banner-close": e.closeLocaleBanner
                        }
                    }) : e._e(), e.isLoading ? e._e() : n("TopNavVisitorIa", {
                        class: {
                            "nav-external-subnav": this.$root.isExternalSubnav
                        },
                        attrs: {
                            "secondary-nav-type": e.secondaryNavType,
                            "show-earn-as-pro": e.showEarnAsPro,
                            "is-secondary-nav-hidden": !e.secondaryNavType,
                            "mobile-subnav-button": this.$root.subnavButton,
                            "signup-cta": e.signupCta,
                            "enable-login-return": this.$root.enableLoginReturn,
                            "default-search-item": this.$root.defaultSearchItem,
                            "is-user": this.$root.isUser,
                            "is-locale-selector-enabled": e.isLocaleSelectorEnabled,
                            "is-ai-category-enabled": e.isAiCategoryEnabled,
                            "is-currency-selector": this.$root.hasCurrencyPopover,
                            "language-data": e.locationData,
                            "currency-data": e.currencyData,
                            "http-gql": e.$root.context.$httpGql,
                            "load-flags": e.loadFlags,
                            http: function() {},
                            "partnership-logo": e.partnershipLogo
                        },
                        on: {
                            "mobile-subnav-trigger": function(o) {
                                return e.onMobileSubnavClick()
                            },
                            "up-s-nav-signup-click": function(o) {
                                return e.onSignupClick()
                            },
                            "up-s-nav-earnaspro-click": e.onEarnAsProClick,
                            "open-currency-selector": e.onToggleCurrencyModal
                        }
                    })], 1)
                },
                y = [],
                m = n("ff07"),
                $ = n("be7a"),
                w = n("23b8"),
                S = n("10c4"),
                C = n("c0f3"),
                L = n("b4e1"),
                O = n("de15"),
                P = n("8fd4"),
                k = {
                    "en-gb": L,
                    en: O,
                    is: P
                },
                x = n("6012"),
                _ = n("8614");

            function A(e) {
                Object(x["a"])(e, !1), Object(_["a"])(e)
            }

            function T(e, o) {
                return Promise.all([e.dispatch("visitor/load"), Promise.resolve()])
            }
            const j = [{
                name: "MP15107LocaleSelector"
            }, {
                name: "TACQ50DataDashboard"
            }, {
                name: "MP17367AICategory"
            }];
            async function N(e, o, n, t) {
                try {
                    var a, r;
                    await T(e, t);
                    const o = [...j, n ? {
                        name: "SSINav",
                        fallback: !1
                    } : void 0].filter(e => !!e);
                    E(null === (a = e.state) || void 0 === a || null === (r = a.flags) || void 0 === r ? void 0 : r.ff, o) || await Object(S["a"])(e, {
                        ff: o
                    })
                } catch (i) {
                    o.error(B("visitor-v2 data load failed", i))
                }
            }

            function E(e, o) {
                return e && o.every(o => void 0 !== e[o.name])
            }

            function B(e, o) {
                return "object" === typeof o ? { ...o,
                    message: `${e} | ${o.message}`
                } : `${e} | ${o}`
            }
            const I = "nav-locale-banner";
            var F = {
                    components: {
                        TopNavVisitorIa: m["a"],
                        NavLocaleBanner: () => n.e("locale-banner").then(n.bind(null, "b522"))
                    },
                    data() {
                        var e, o;
                        return {
                            loadFlags: S["a"],
                            showLocaleBanner: !1,
                            isLoading: !1,
                            version: null === (e = this.$root.context.config.application) || void 0 === e || null === (o = e.rel) || void 0 === o ? void 0 : o.version,
                            currencyISOCode: this.$root.selectedCurrencyData
                        }
                    },
                    i18n: {
                        messages: k
                    },
                    async serverPrefetch() {
                        await N(this.$store, this.$logger, this.$root.testFF, this.$root.context.req)
                    },
                    computed: {
                        currencyData() {
                            return this.$root.selectedCurrencyData && Object($["a"])(this.currencyISOCode, this.$i18n.locale)
                        },
                        localeBannerData() {
                            const {
                                localeBannerLocale: e
                            } = this.$root;
                            if (!e) return null;
                            const o = C["a"][e.toLowerCase()];
                            if (!o) return this.$logger.error("Unable to find a currency mapping for the provided locale within the locale banner."), null;
                            const {
                                language: n,
                                regionAbbr: t
                            } = Object(w["a"])(e);
                            return {
                                locale: e,
                                language: n,
                                regionAbbr: t,
                                currencyCode: o
                            }
                        },
                        locationData() {
                            return Object(w["a"])(this.$root.$i18n.localeProperties.iso)
                        },
                        secondaryNavType() {
                            return this.$root.enableAgencySubmenu ? "agency" : this.$root.isExternalSubnav ? void 0 : this.$root.secondaryNavType || "client"
                        },
                        signupCta() {
                            if (this.$root.customSignupHandler) return {
                                label: this.$t("signup"),
                                href: "javascript:"
                            }
                        },
                        showEarnAsPro() {
                            return this.$root.showEarnAsPro
                        },
                        isAiCategoryEnabled() {
                            var e, o, n;
                            return null === (e = this.$store.state) || void 0 === e || null === (o = e.flags) || void 0 === o || null === (n = o.ff) || void 0 === n ? void 0 : n.MP17367AICategory
                        },
                        isLocaleSelectorEnabled() {
                            var e, o, n;
                            return null === (e = this.$store.state) || void 0 === e || null === (o = e.flags) || void 0 === o || null === (n = o.ff) || void 0 === n ? void 0 : n.MP15107LocaleSelector
                        },
                        partnershipLogo() {
                            return this.$root.partnershipLogo
                        }
                    },
                    async created() {
                        this.$root.context.spa ? (this.isLoading = !0, await N(this.$store, this.$logger, this.$root.testFF), this.isLoading = !1) : await N(this.$store, this.$logger, this.$root.testFF)
                    },
                    mounted() {
                        this.setShowLocaleBannerData(), this.unsubscribeCurrencyCode = Object(g["a"])().subscribeToState("core.currencyCode", e => {
                            this.currencyISOCode = e
                        }), this.unsubscribeCurrency = Object(g["a"])().subscribe("core.currencyChanged", e => {
                            this.currencyISOCode = e
                        })
                    },
                    destroyed() {
                        this.unsubscribeCurrencyCode && this.unsubscribeCurrencyCode(), this.unsubscribeCurrency && this.unsubscribeCurrency()
                    },
                    methods: {
                        catchLocalStorage(e) {
                            try {
                                e()
                            } catch (o) {
                                console.error("Local storage error for " + I, o.code)
                            }
                        },
                        closeLocaleBanner() {
                            this.catchLocalStorage(() => {
                                localStorage.setItem(I, !0)
                            }), this.showLocaleBanner = !1
                        },
                        async setShowLocaleBannerData() {
                            this.catchLocalStorage(() => {
                                this.showLocaleBanner = !localStorage.getItem(I) && !!this.localeBannerData
                            })
                        },
                        onMobileSubnavClick() {
                            Object(g["a"])().dispatch("visitorNavV2.mobileSubnavClick", void 0, {
                                fallbackFn: () => this.$logger.error("mobile subnav click was not handled!")
                            })
                        },
                        onSignupClick() {
                            this.$root.customSignupHandler && Object(g["a"])().dispatch("visitorNavV2.signUpClick", void 0, {
                                fallbackFn: () => this.$logger.error("signup click was not handled!")
                            })
                        },
                        onEarnAsProClick(...e) {
                            this.$root.showEarnAsPro && Object(g["a"])().dispatch("visitorNavV2.earnAsProClick", e, {
                                fallbackFn: () => this.$logger.error("earnAsProClick was not handled!")
                            })
                        },
                        onToggleCurrencyModal() {
                            Object(g["a"])().call("layout.toggleCurrencyModal")
                        },
                        onNavConfirmLocaleBanner() {
                            Object(g["a"])().dispatch("layout.confirmLocaleBanner", void 0, {
                                fallbackFn: () => this.$logger.error("confirmLocaleBanner was not handled!")
                            })
                        }
                    }
                },
                q = F,
                M = (n("48ff"), n("2877")),
                D = Object(M["a"])(q, f, y, !1, null, null, null),
                V = D.exports,
                U = n("5880"),
                H = n.n(U);
            a.a.use(H.a);
            const R = () => {
                const e = new H.a.Store({
                        state: {},
                        getters: {},
                        mutations: {},
                        actions: {},
                        modules: {}
                    }),
                    o = e.registerModule;
                return e.registerModule = function(n, t, a = {}) {
                    const r = Array.isArray(n) ? !!n.reduce((e, o) => e && e[o], e.state) : n in e.state;
                    return o.call(e, n, t, {
                        preserveState: r,
                        ...a
                    })
                }, e
            };

            function G() {
                const e = {};
                return new URL(window.location).searchParams.forEach((o, n) => {
                    e[n] = o
                }), e
            }

            function J() {
                return {
                    track: () => {},
                    setLocation: () => {},
                    pageView: () => {},
                    addSubscriber: () => {},
                    addPublisher: () => {},
                    addEventModifier: () => {},
                    modifyEvent: () => {}
                }
            }

            function z(e) {
                if ("boolean" === typeof e) return e;
                if ("string" !== typeof e) return !1;
                const o = e.toLowerCase().trim();
                return !["false", "0", "", "undefined", "null"].includes(o)
            }

            function Q(e) {
                return ["undefined", "null"].includes(e) ? void 0 : e
            }
            a.a.config.productionTip = !1, a.a.component("ClientOnly", h.a);
            const W = (e, o) => {
                    const n = R(),
                        t = new a.a({ ...o,
                            store: n,
                            data() {
                                return {
                                    context: e,
                                    partnershipLogo: Q(e.query.partnershipLogo),
                                    enableAgencySubmenu: z(e.query.enableAgencySubmenu),
                                    secondaryNavType: Q(e.query.secondaryNavType),
                                    subnavButton: Q(e.query.subnavButton),
                                    customSignupHandler: z(e.query.customSignupHandler),
                                    isExternalSubnav: z(e.query.isExternalSubnav),
                                    testFF: z(e.query.testFF),
                                    showEarnAsPro: z(e.query.showEarnAsPro),
                                    enableLoginReturn: z(e.query.enableLoginReturn),
                                    defaultSearchItem: Q(e.query.defaultSearchItem),
                                    hasCurrencyPopover: z(e.query.hasCurrencyPopover),
                                    localeBannerLocale: Q(e.query.localeBannerLocale),
                                    selectedCurrencyData: Q(e.query.selectedCurrencyData),
                                    isUser: z(e.query.isUser),
                                    isFallback: z(e.query.isFallback)
                                }
                            },
                            beforeMount() {
                                this.unsubscribeOptions = Object(g["a"])().subscribeToState("visitor-v2.options", e => {
                                    e && (this.secondaryNavType = e.secondaryNavType, this.subnavButton = e.subnavButton, this.customSignupHandler = !!e.customSignupHandler, this.isExternalSubnav = !!e.isExternalSubnav, this.showEarnAsPro = !!e.showEarnAsPro, this.enableLoginReturn = !!e.enableLoginReturn, this.defaultSearchItem = e.defaultSearchItem)
                                })
                            },
                            destroyed() {
                                this.unsubscribeOptions && this.unsubscribeOptions()
                            },
                            render: e => e(V)
                        });
                    return {
                        app: t,
                        store: n
                    }
                },
                Y = ({
                    app: e,
                    store: o,
                    Vue: n
                }) => (t, a) => {
                    t = "$" + t, o[t] = a, e.context[t] || (e.context[t] = a), e.$root.$options[t] = a;
                    const r = `__top-nav-ssi_${t}_installed__`;
                    n[r] || (Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(e) || e, t) ? e[t] !== a && console.warn(`topnav: another instance of ${t} is already injected, this might result in unexpected behavior`) : (e[t] = a, n[r] = !0, n.use(() => {
                        Object.prototype.hasOwnProperty.call(n.prototype, t) || Object.defineProperty(n.prototype, t, {
                            get() {
                                return this.$root.$options[t]
                            }
                        })
                    })))
                };
            var K = Y;

            function X(e, o) {
                const n = { ...e
                };
                return n.cookiePrefix = null != n.cookiePrefix ? n.cookiePrefix : o.get("cookie_prefix") || "", void 0 === n.cookieDomain && (n.cookieDomain = o.get("cookie_domain") || ".upwork.com"), n
            }
            var Z = n("15d0"),
                ee = n("46a7"),
                oe = n("df0f");

            function ne(e = ee["a"].defaultLocale) {
                e = "en" === e ? "en-us" : e;
                const o = ee["a"].locales.find(o => o.code === e) || {};
                a.a.use(r["a"]);
                const n = new r["a"]({ ...Z["a"],
                    locale: e,
                    silentFallbackWarn: !0,
                    silentTranslationWarn: !0,
                    componentInstanceCreatedListener: e => {
                        e.localeProperties = e.localeProperties || o
                    }
                });
                return n.localeProperties = o, n
            }

            function te(e, o, n) {
                const t = ["en", "en-us"].includes(o.toLowerCase()) ? null : o;
                n("localeFromUrl", t), n("localePrefix", Object(oe["a"])(e))
            }

            function ae() {
                var e;
                const o = window.TOP_NAV_QUERY,
                    n = ne(Q(o.locale)),
                    t = {
                        query: o
                    },
                    {
                        app: r,
                        store: i
                    } = W(t, {
                        i18n: n
                    });
                i.app = r, r.i18n = n, t.store = i, t.app = r, t.base = "", window.__TOP_NAVIGATION_STATE__ && i.replaceState(window.__TOP_NAVIGATION_STATE__);
                const b = K({
                        app: r,
                        store: i,
                        Vue: a.a
                    }),
                    h = s()(void 0, void 0, !1);
                b("cookies", h), t.$cookies = h;
                const g = X(window.TOP_NAV_CONFIG, h);
                t.config = g, i.$config = g, Object(v["a"])(t, b), t.$httpConfig.redirToLogin = !1, t.$httpConfig.auth = !1, t.route = {
                    query: G(),
                    fullPath: window.location.href.replace(window.location.origin, ""),
                    meta: [],
                    name: "visitor-v2"
                }, "$route" in r && r.$route && (r.$route = t.route), t.appType = "micro-fe", t.disableGlobalErrorHandler = !0, Object(c["a"])(t, b), Object(d["a"])(t), Object(p["a"])(t), A(i), Object(l["a"])(t, b), te(t, n.locale, b);
                const f = (null === (e = Object(u["a"])()) || void 0 === e ? void 0 : e.get("tracker", 25e3)) || Promise.resolve(),
                    y = "visitor-v2-top-navigation-container",
                    m = Promise.allSettled([f]).then(([{
                        value: e
                    }]) => (e || t.$logger.error("tracker injection failed, defaulting to no-op implementation"), b("tracker", e || J()), r.$mount("#" + y), g.spa && t.$logger.log("rendering visitor-v2 spa " + (o.isFallback ? "fallback" : "")), y));
                return {
                    app: r,
                    $ctx: t,
                    mountedPromise: m
                }
            }
            let {
                app: re,
                $ctx: ie,
                mountedPromise: se
            } = ae();
            window["spa_visitor-v2"] = {
                stop() {
                    var e;
                    null === (e = re) || void 0 === e || e.$destroy(), re = void 0
                }
            };
            o["default"] = {
                app: re,
                $ctx: ie,
                mountedPromise: se
            }
        },
        "8bbf": function(e, o) {
            e.exports = Vue
        },
        "8fd4": function(e) {
            e.exports = JSON.parse('{"signup":"[猫Sign Up猫]"}')
        },
        b4e1: function(e) {
            e.exports = JSON.parse('{"signup":"Sign up"}')
        },
        b8c8: function(e, o, n) {
            var t = n("24fb"),
                a = n("e14e"),
                r = n("0c4c");
            o = t(!1), o.i(a), o.i(r), o.push([e.i, "body:not(.visitor-nav-is-open) #visitor-v2-top-navigation-container{height:var(--nav-height)}body:not(.visitor-nav-is-open) #visitor-v2-top-navigation-container .nav-visitor{position:fixed;z-index:var(--zindex-navbar-fixed);width:100%}@media (min-width:992px){body:not(.visitor-nav-is-open) #visitor-v2-top-navigation-container.has-subnav{height:calc(var(--nav-height)*2)}}#visitor-v2-top-navigation-container .air3-btn{background-color:var(--btn-bg-primary)!important}#visitor-v2-top-navigation-container .air3-btn:hover{background-color:var(--btn-bg-primary-hover)!important}@media (max-width:991px){#visitor-v2-top-navigation-container .navbar-cta{position:fixed!important}}", ""]), e.exports = o
        },
        de15: function(e) {
            e.exports = JSON.parse('{"signup":"Sign up"}')
        }
    },
    [
        ["6f1b", "manifest", "chunk-vendors"]
    ]
]);
//# sourceMappingURL=https://upwork-usw2-staging-assets-jsmaps.s3.us-west-2.amazonaws.com/TopNavSsi/visitor-v2/js/main.df65031c.js.map