(window.webpackJsonp = window.webpackJsonp || []).push([
    [429], {
        1016: function(e, t, o) {
            "use strict";
            o(502)
        },
        1017: function(e, t, o) {
            var r = o(3)(!1);
            r.push([e.i, ".logo{height:40px;width:auto;max-width:110px}@media (max-width:699.98px){.logo{height:35px}}@media (max-width:699.98px){.logo.nasdaq{height:28px}}.logo.pladis{height:36px}", ""]), e.exports = r
        },
        1018: function(e) {
            e.exports = JSON.parse("{}")
        },
        1019: function(e) {
            e.exports = JSON.parse('{"vsuc_logobar_TrustedBy5mBusinesses":"Trusted by {LineBreak} 5M+ businesses","vsuc_logobar_WorldsWorkMarketplace":"Join the world’s work marketplace","vsuc_logobar_PostJobInterview":"Post a job to interview and hire great talent.","vsuc_logobar_HireTalent":"Hire Talent","vsuc_logobar_FindWorkYouLove":"Find work you love with like-minded clients.","vsuc_logobar_FindWork":"Find Work","vsuc_logobar_FindTalent":"Find Talent","vsuc_logobar_microsoftWorkedWithUpworkToCollaborateOn":"Microsoft worked with Upwork to collaborate on an integrated solution that helps enterprises work with freelancers at scale powered by Microsoft 365 and Upwork Enterprise.","vsuc_logobar_airbnbWorksWithUpworkToPostMoreThan10000":"Airbnb works with Upwork to post more than 10,000 projects on Upwork.","vsuc_logobar_geSavesTimeAndMoneyToPostMoreJobsOnUpwor":"GE saves time and money to post more jobs on Upwork than any other platform.","vsuc_logobar_automaticWorkedWithUpworkToBuildTheirRem":"Automatic worked with Upwork to build their remote-first company with top talent found on Upwork.","vsuc_logobar_bissellWorksWithUpworkAsAStaffingAlterna":"Bissell works with Upwork as a staffing alternative to their hiring process.","vsuc_logobar_cotyWorkedWithUpworkToEvolveTheirConting":"COTY worked with Upwork to evolve their contingent workforce management.","vsuc_logobar_unileverWorksWithUpwork":"Unilever works with Upwork"}')
        },
        1020: function(e) {
            e.exports = JSON.parse("{}")
        },
        1021: function(e) {
            e.exports = JSON.parse('{"data":[{"id":"microsoft","alt":"vsuc_logobar_microsoftWorkedWithUpworkToCollaborateOn","src":"/microsoft.svg","class":"microsoft"},{"id":"airbnb","alt":"vsuc_logobar_airbnbWorksWithUpworkToPostMoreThan10000","number":10000,"src":"/airbnb.svg","class":"airbnb","classMobile":"airbnb"},{"id":"ge","alt":"vsuc_logobar_geSavesTimeAndMoneyToPostMoreJobsOnUpwor","src":"/ge.svg","class":"ge","classMobile":"ge"},{"id":"automatic","alt":"vsuc_logobar_automaticWorkedWithUpworkToBuildTheirRem","src":"/automatic.svg","class":"automatic","classMobile":"automatic"},{"id":"bissell","alt":"vsuc_logobar_bissellWorksWithUpworkAsAStaffingAlterna","src":"/bissell.svg","class":"bissell"},{"id":"coty","alt":"vsuc_logobar_cotyWorkedWithUpworkToEvolveTheirConting","src":"/coty.svg","class":"coty","classMobile":"coty"},{"id":"nasdaq","src":"/nasdaq.svg","alt":"vsuc_logobar_bissellWorksWithUpworkAsAStaffingAlterna","class":"nasdaq"},{"id":"pladis","src":"/pladis-global.png","alt":"vsuc_logobar_pladisWorksWithUpwork","class":"pladis"},{"id":"unilever","src":"/unilever.png","alt":"vsuc_logobar_unileverWorksWithUpwork","class":"unilever"}]}')
        },
        1022: function(e, t, o) {
            "use strict";
            o(503)
        },
        1023: function(e, t, o) {
            var r = o(3)(!1);
            r.push([e.i, ".unilever-first[data-v-7e54d756]{--template-col:50px repeat(12,1fr)}.d-one-row[data-v-7e54d756]{display:grid;grid-template-columns:1fr 2fr}@media (max-width:1199.98px){.d-one-row[data-v-7e54d756]{grid-template-columns:1fr}}.with-border[data-v-7e54d756]{border:1px solid var(--gray-70);border-radius:var(--radius-4x);padding:15px;align-items:center}@media (max-width:1199.98px){.with-border[data-v-7e54d756]{grid-gap:20px;gap:20px}}@media (min-width:700px){.sm-screen-container[data-v-7e54d756]{display:none!important}}.flex-full-width[data-v-7e54d756]{display:flex;align-items:center;justify-content:space-between;width:100%;flex-wrap:wrap}@media (max-width:699.98px){.lg-screen-container[data-v-7e54d756],.md-screen-container[data-v-7e54d756],.xl-screen-container[data-v-7e54d756]{display:none!important}}", ""]), e.exports = r
        },
        1492: function(e, t, o) {
            "use strict";
            o.r(t);
            var r = o(280),
                l = o.n(r),
                n = o(276),
                d = o.n(n),
                c = o(272),
                m = {
                    name: "LogobarImages",
                    components: {
                        LazyImg: () => o.e(492).then(o.bind(null, 1542))
                    },
                    props: {
                        className: {
                            type: String,
                            default: null
                        },
                        dataQa: {
                            type: String,
                            default: null
                        },
                        data: {
                            type: Array,
                            default: null
                        },
                        isLazyImages: {
                            type: Boolean,
                            default: !0
                        },
                        isGrey: {
                            type: Boolean,
                            default: !1
                        },
                        isDark: {
                            type: Boolean,
                            default: !1
                        },
                        isWhite: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data() {
                        let e = "".concat(c.a, "c_fit/general/logobar");
                        return this.isGrey || this.isDark || (e += "/colored"), this.isDark && (e += "/dark"), {
                            logobarImgUrl: e
                        }
                    }
                },
                h = (o(1016), o(0)),
                f = Object(h.a)(m, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        class: e.className,
                        attrs: {
                            "data-qa": e.dataQa
                        }
                    }, [e._l(e.data, (function(image, o) {
                        return [e.isLazyImages ? t("LazyImg", {
                            key: o,
                            class: {
                                "white-logos": e.isWhite
                            },
                            attrs: {
                                "data-qa": image.dataQa || image.id,
                                "data-src": "".concat(e.logobarImgUrl).concat(image.src),
                                alt: image.alt,
                                "img-class": ["logo", image.class, {
                                    "first-image": 0 === o
                                }]
                            }
                        }) : t("figure", {
                            key: o,
                            class: ["item-logo", image.class, {
                                "first-image": 0 === o
                            }],
                            attrs: {
                                width: "110",
                                height: "40"
                            }
                        }, [t("img", {
                            class: {
                                "white-logos": e.isWhite
                            },
                            attrs: {
                                "data-qa": image.id,
                                src: "".concat(e.logobarImgUrl).concat(image.src),
                                alt: image.alt,
                                width: "110",
                                height: "40"
                            }
                        })])]
                    }))], 2)
                }), [], !1, null, null, null).exports,
                w = {
                    "en-gb": o(1018),
                    en: o(1019),
                    is: o(1020)
                };
            const v = e => {
                let {
                    orderedList: t,
                    originalList: o
                } = e;
                return t.reduce(((e, t) => (o.forEach((image => {
                    image.id === t && e.push(image)
                })), e)), [])
            };
            var data = o(1021),
                y = {
                    name: "Logobars",
                    i18n: {
                        messages: w
                    },
                    injectStyles: [l.a, d.a],
                    components: {
                        LogoImages: f
                    },
                    props: {
                        oneRow: {
                            type: Boolean,
                            default: !1
                        },
                        titleSeparator: {
                            type: Boolean,
                            default: !1
                        },
                        bottomSeparator: {
                            type: Boolean,
                            default: !1
                        },
                        isBordered: {
                            type: Boolean || String,
                            default: !1
                        },
                        qaSection: {
                            type: String,
                            default: "logobar"
                        },
                        trackingData: {
                            type: Object,
                            default: () => ({})
                        },
                        isLazyImages: {
                            type: Boolean,
                            default: !0
                        },
                        images: {
                            type: Array,
                            default: null
                        },
                        wrapperClasses: {
                            type: String,
                            default: "vs-bg-white"
                        },
                        containerClasses: {
                            type: String,
                            default: "d-md-flex d-grid align-items-center"
                        },
                        titleClasses: {
                            type: String,
                            default: ""
                        },
                        logosClasses: {
                            type: String,
                            default: "xl-screen-container logos air3-grid-container gap-10"
                        },
                        text: {
                            type: String,
                            default: null
                        },
                        noTextLabel: {
                            type: Boolean,
                            default: !1
                        },
                        isGrey: {
                            type: Boolean,
                            default: !1
                        },
                        isDark: {
                            type: Boolean,
                            default: !1
                        },
                        isWhite: {
                            type: Boolean,
                            default: !1
                        },
                        xlOrder: {
                            type: Array,
                            default: null
                        },
                        lgOrder: {
                            type: Array,
                            default: null
                        },
                        mdOrder: {
                            type: Array,
                            default: null
                        },
                        smOrder: {
                            type: Array,
                            default: null
                        },
                        titleDataQa: {
                            type: String,
                            default: "text"
                        },
                        desktopOnMd: {
                            type: Boolean,
                            default: !1
                        },
                        isFlexFullWidth: {
                            type: Boolean,
                            default: !0
                        },
                        showUnileverFirst: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data() {
                        return {
                            eventData: {
                                label: "logobar_section",
                                sublocation: "skinny_logobar",
                                ...this.trackingData
                            }
                        }
                    },
                    computed: {
                        translatedAltImages() {
                            return null == data ? void 0 : data.data.map((e => ({ ...e,
                                alt: e.number ? this.$t(e.alt, {
                                    number: e.number
                                }) : this.$t(e.alt)
                            })))
                        },
                        defaultImages() {
                            return this.images || this.translatedAltImages
                        },
                        imagesComputed() {
                            return this.xlOrder ? v({
                                orderedList: this.xlOrder,
                                originalList: this.translatedAltImages
                            }) : this.defaultImages
                        },
                        lgImagesComputed() {
                            return this.lgOrder ? v({
                                orderedList: this.lgOrder,
                                originalList: this.translatedAltImages
                            }) : this.imagesComputed
                        },
                        mdScreensImagesComputed() {
                            return this.mdOrder ? v({
                                orderedList: this.mdOrder,
                                originalList: this.translatedAltImages
                            }) : this.imagesComputed
                        },
                        mobileImagesComputed() {
                            return v({
                                orderedList: this.smOrder,
                                originalList: this.translatedAltImages
                            })
                        }
                    }
                },
                k = (o(1022), Object(h.a)(y, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("section", {}, [t("div", {
                        directives: [{
                            name: "track-impression",
                            rawName: "v-track-impression",
                            value: e.eventData,
                            expression: "eventData"
                        }],
                        staticClass: "logobar-skinny-section",
                        class: [e.titleSeparator ? "with-title-seperator" : "", e.oneRow ? "d-one-row" : "", e.bottomSeparator ? "with-bottom-seperator" : e.isBordered ? "with-border" : e.isGrey ? "greyed-container" : e.isDark ? "dark-container" : e.isWhite ? "white-container" : "", e.wrapperClasses],
                        attrs: {
                            "data-qa-section": e.qaSection
                        }
                    }, [t("div", {
                        staticClass: "title",
                        class: e.titleSeparator ? "right-border" : "",
                        attrs: {
                            "data-qa": e.titleDataQa
                        }
                    }, [e._t("text", (function() {
                        return [e.noTextLabel ? e._e() : t("p", {
                            staticClass: "logobar-title",
                            class: e.titleClasses
                        }, [e.text ? t("span", {
                            domProps: {
                                innerHTML: e._s(e.text)
                            }
                        }) : t("i18n", {
                            attrs: {
                                tag: "span",
                                path: "vsuc_logobar_TrustedBy5mBusinesses"
                            },
                            scopedSlots: e._u([{
                                key: "LineBreak",
                                fn: function() {
                                    return [t("br", {
                                        staticClass: "d-none d-md-inline"
                                    })]
                                },
                                proxy: !0
                            }], null, !1, 1529916552)
                        })], 1)]
                    }))], 2), e._v(" "), t("LogoImages", {
                        attrs: {
                            data: e.imagesComputed,
                            "is-lazy-images": e.isLazyImages,
                            "class-name": "".concat(e.logosClasses, " ").concat(e.showUnileverFirst ? "unilever-first" : "", " ").concat(e.isFlexFullWidth ? "flex-full-width" : ""),
                            "data-qa": "logo-items",
                            "is-grey": e.isGrey,
                            "is-dark": e.isDark,
                            "is-white": e.isWhite
                        }
                    }), e._v(" "), e.mobileImagesComputed ? t("LogoImages", {
                        attrs: {
                            data: e.mobileImagesComputed,
                            "is-lazy-images": e.isLazyImages,
                            "class-name": "sm-screen-container logos-mobile logos air3-grid-container ".concat(e.isFlexFullWidth ? "flex-full-width" : ""),
                            "data-qa": "logo-items-mobile-only",
                            "is-grey": e.isGrey,
                            "is-dark": e.isDark,
                            "is-white": e.isWhite
                        }
                    }) : e._e()], 1)])
                }), [], !1, null, "7e54d756", null));
            t.default = k.exports
        },
        502: function(e, t, o) {
            var content = o(1017);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, o(4).default)("7a2b5d85", content, !0, {
                sourceMap: !1
            })
        },
        503: function(e, t, o) {
            var content = o(1023);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, o(4).default)("81a4c368", content, !0, {
                sourceMap: !1
            })
        }
    }
]);
//# sourceMappingURL=https://upwork-usw2-staging-assets-jsmaps.s3.us-west-2.amazonaws.com/Brontes/logobar.e9d746c7.js.map