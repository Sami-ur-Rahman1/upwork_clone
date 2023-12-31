(window.webpackJsonp = window.webpackJsonp || []).push([
    [72], {
        1104: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(45),
                o = n.n(r),
                d = n(297),
                l = n.n(d),
                f = n(12),
                c = n(369),
                v = n(445),
                m = n(446),
                x = n(272),
                _ = {
                    name: "ForTalent",
                    i18n: {
                        messages: {
                            "en-gb": n(982),
                            en: n(983),
                            is: n(984)
                        }
                    },
                    injectStyles: [o.a, l.a],
                    components: {
                        PictureMq: c.a,
                        UpLink: f.a
                    },
                    filters: {
                        removeParametersFromLink: m.b
                    },
                    data: () => ({
                        signUpFreelancer: Object(v.b)(),
                        cloudinaryImageUrl: x.a
                    }),
                    methods: {
                        navigateTo(t, e) {
                            return Object(m.a)(t, this.$localePrefix ? this.$localePrefix(e) : e)
                        }
                    }
                },
                h = (n(985), n(0)),
                component = Object(h.a)(_, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("section", {
                        directives: [{
                            name: "track-impression",
                            rawName: "v-track-impression",
                            value: {
                                sublocation: "delivery_models",
                                label: "saw_talent_delivery_models"
                            },
                            expression: "{\n    sublocation: 'delivery_models',\n    label: 'saw_talent_delivery_models',\n  }"
                        }],
                        staticClass: "container rebrand-for-talent",
                        attrs: {
                            "data-qa-section": "for-talent",
                            "design-system": "air-3-0"
                        }
                    }, [e("div", {
                        staticClass: "air3-grid-container gap-0"
                    }, [e("div", {
                        staticClass: "bg-for-talent bg-for-talent-md span-md-6"
                    }, [e("picture-mq", {
                        attrs: {
                            breakpoint: "700"
                        }
                    }, [e("img", {
                        staticClass: "bg-for-talent",
                        attrs: {
                            loading: "lazy",
                            src: "".concat(t.cloudinaryImageUrl, "/q_auto,dpr_2.0,f_auto/brontes/for-talents/find-great-work@2x.jpg"),
                            width: "100%",
                            height: "100%",
                            alt: "",
                            "data-qa": "image"
                        }
                    })])], 1), t._v(" "), e("picture-mq", {
                        staticClass: "bg-for-talent bg-for-talent-sm span-12 span-md-6",
                        attrs: {
                            breakpoint: "700",
                            "display-above-breakpoint": !1
                        }
                    }, [e("img", {
                        staticClass: "bg-for-talent bg-for-talent-sm span-12 span-md-6",
                        attrs: {
                            src: "".concat(t.cloudinaryImageUrl, "c_scale,w_384,h_375,q_auto,dpr_2.0,f_auto/brontes/for-talents/find-great-work@2x.jpg"),
                            "data-qa": "image",
                            alt: ""
                        }
                    })]), t._v(" "), e("div", {
                        staticClass: "span-12 span-md-6 text-inverse for-talent-content"
                    }, [e("div", {
                        staticClass: "for-talent-content-first-section"
                    }, [e("p", {
                        staticClass: "mb-20 mb-lg-30 headline",
                        attrs: {
                            "data-qa": "headline"
                        }
                    }, [t._v("\n          " + t._s(t.$t("vsuc_forTalent_ForTalent")) + "\n        ")]), t._v(" "), e("h2", {
                        staticClass: "text-inverse display-rebrand mb-15 mb-lg-30",
                        attrs: {
                            "data-qa": "title"
                        },
                        domProps: {
                            innerHTML: t._s(t.$t("vsuc_forTalent_FindGreatWork"))
                        }
                    }), t._v(" "), e("span", {
                        staticClass: "mb-40 mb-xl-100",
                        attrs: {
                            "data-qa": "subtitle"
                        },
                        domProps: {
                            innerHTML: t._s(t.$t("vsuc_forTalent_MeetClientsYouReExcitedToWorkWithAndTake"))
                        }
                    })]), t._v(" "), e("hr", {
                        staticClass: "hr-sperator"
                    }), t._v(" "), e("div", {
                        staticClass: "air3-grid-container gap-0 find-talent-footer"
                    }, [e("div", {
                        staticClass: "span-6 span-lg-4 pl-0",
                        attrs: {
                            "data-qa": "overview-0"
                        }
                    }, [e("span", [t._v(t._s(t.$t("vsuc_forTalent_FindOpportunitiesForEveryStageOfYourFree")))])]), t._v(" "), e("div", {
                        staticClass: "span-6 span-lg-4",
                        attrs: {
                            "data-qa": "overview-1"
                        }
                    }, [e("span", [t._v(t._s(t.$t("vsuc_forTalent_ControlWhenWhereAndHowYouWork")))])]), t._v(" "), e("div", {
                        staticClass: "span-6 span-lg-4",
                        attrs: {
                            "data-qa": "overview-2"
                        }
                    }, [e("span", [t._v(t._s(t.$t("vsuc_forTalent_ExploreDifferentWaysToEarn")))])]), t._v(" "), e("div", {
                        staticClass: "span-12 pb-0 pl-0"
                    }, [e("UpLink", {
                        directives: [{
                            name: "track-click",
                            rawName: "v-track-click",
                            value: {
                                sublocation: "delivery_models",
                                label: "talent_talent_marketplace"
                            },
                            expression: "{\n              sublocation: 'delivery_models',\n              label: 'talent_talent_marketplace',\n            }"
                        }, {
                            name: "signup-track-cta",
                            rawName: "v-signup-track-cta",
                            value: "for-talent-find-opportunities",
                            expression: "'for-talent-find-opportunities'"
                        }],
                        staticClass: "air3-btn air3-btn-primary-inverted signup-cta",
                        attrs: {
                            href: "/nx/signup/",
                            "data-qa": "find-opportunities-btn"
                        },
                        on: {
                            click: function(e) {
                                return t.navigateTo(e, "/nx/signup/?accountType=freelancer")
                            }
                        }
                    }, [t._v(t._s(t.$t("vsuc_forTalent_FindOpportunities")))])], 1)])])], 1)])
                }), [], !1, null, "09384ffd", null);
            e.default = component.exports
        },
        494: function(t, e, n) {
            var content = n(986);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(4).default)("4e78e9e6", content, !0, {
                sourceMap: !1
            })
        },
        982: function(t) {
            t.exports = JSON.parse("{}")
        },
        983: function(t) {
            t.exports = JSON.parse('{"vsuc_forTalent_ForTalent":"For talent","vsuc_forTalent_FindGreatWork":"<span class=\\"ignore-span-style\\" role=\\"text\\">Find great<br> work</span>","vsuc_forTalent_MeetClientsYouReExcitedToWorkWithAndTake":"Meet clients you’re excited to work with and take<br class=\\"d-none d-lg-block\\"> your career or business to new heights.","vsuc_forTalent_FindOpportunitiesForEveryStageOfYourFree":"Find opportunities for every stage of your freelance career","vsuc_forTalent_ControlWhenWhereAndHowYouWork":"Control when, where, and how you work","vsuc_forTalent_ExploreDifferentWaysToEarn":"Explore different ways to earn","vsuc_forTalent_FindOpportunities":"Find opportunities"}')
        },
        984: function(t) {
            t.exports = JSON.parse("{}")
        },
        985: function(t, e, n) {
            "use strict";
            n(494)
        },
        986: function(t, e, n) {
            var r = n(3)(!1);
            r.push([t.i, ".text-inverse[data-v-09384ffd]{color:var(--white)}.rebrand-for-talent[data-v-09384ffd]{padding-top:50px}@media (max-width:699.98px){.rebrand-for-talent[data-v-09384ffd]{padding-right:0!important;padding-left:0!important}}@media screen and (width:1200px){.rebrand-for-talent[data-v-09384ffd]{padding-top:85px}}.rebrand-for-talent .air3-btn[data-v-09384ffd]:hover{background-color:var(--gray-6)}.rebrand-for-talent .air3-btn[data-v-09384ffd]{color:var(--blue)}.rebrand-for-talent .bg-for-talent[data-v-09384ffd]{min-height:375px;background-size:cover;background-position:100% 100%;border-top-left-radius:8px;border-top-right-radius:8px;-o-object-fit:cover;object-fit:cover}@media (max-width:699.98px){.rebrand-for-talent .bg-for-talent[data-v-09384ffd]{z-index:99;height:375px;width:100%;border-top-left-radius:0;border-top-right-radius:0}}@media (min-width:700px){.rebrand-for-talent .bg-for-talent[data-v-09384ffd]{border-radius:0;-o-object-position:100%;object-position:100%}}.rebrand-for-talent .headline[data-v-09384ffd]{font-size:20px;line-height:26px;letter-spacing:-.002em}@media (min-width:1200px){.rebrand-for-talent .headline[data-v-09384ffd]{font-size:24px;line-height:32px}}.rebrand-for-talent span[data-v-09384ffd]:not(.ignore-span-style){font-size:16px;line-height:18px;letter-spacing:.005em}@media (min-width:1200px){.rebrand-for-talent span[data-v-09384ffd]:not(.ignore-span-style){font-size:18px;line-height:21px}}.rebrand-for-talent .air3-grid-container[data-v-09384ffd]{border-radius:8px;overflow:hidden}@media (max-width:699.98px){.rebrand-for-talent .air3-grid-container[data-v-09384ffd]{border-radius:0}}.rebrand-for-talent .find-talent-footer div[data-v-09384ffd]{padding:0 15px 20px}@media (max-width:699.98px){.rebrand-for-talent .find-talent-footer div[data-v-09384ffd]{padding-left:0}}.rebrand-for-talent .find-talent-footer span[data-v-09384ffd]{font-weight:400}.for-talent-content[data-v-09384ffd]{background:var(--blue);padding:15px}@media (min-width:700px){.for-talent-content[data-v-09384ffd]{padding:20px}}@media (min-width:1200px){.for-talent-content[data-v-09384ffd]{padding:30px}}.for-talent-content-first-section[data-v-09384ffd]{padding-bottom:40px;font-weight:400}@media (min-width:700px){.for-talent-content-first-section[data-v-09384ffd]{padding-bottom:100px}}@media (min-width:1200px){.for-talent-content-first-section[data-v-09384ffd]{margin-bottom:60px}}@media only screen and (max-width:1225px){.for-talent-content-first-section[data-v-09384ffd]{margin-bottom:30px}}@media only screen and (min-width:700px) and (max-width:767px){.for-talent-content-first-section[data-v-09384ffd]{margin-bottom:0;padding-bottom:40px}}.bg-for-talent-img-container[data-v-09384ffd]{width:100%}.hr-seperator[data-v-09384ffd]{margin-bottom:10px}.signup-cta[data-v-09384ffd]{margin-top:5px;margin-bottom:20px}@media (min-width:700px){.signup-cta[data-v-09384ffd]{margin-top:20px;margin-bottom:20px}}@media (min-width:1200px){.signup-cta[data-v-09384ffd]{margin-bottom:10px}}@media only screen and (min-width:700px) and (max-width:767px){.signup-cta[data-v-09384ffd]{padding-bottom:0}}.bg-for-talent-md[data-v-09384ffd]{display:none}@media (min-width:700px){.bg-for-talent-md[data-v-09384ffd]{display:block}}.bg-for-talent-sm[data-v-09384ffd]{display:block}@media (min-width:700px){.bg-for-talent-sm[data-v-09384ffd]{display:none}}", ""]), t.exports = r
        }
    }
]);
//# sourceMappingURL=https://upwork-usw2-staging-assets-jsmaps.s3.us-west-2.amazonaws.com/Brontes/for-talent.3dbd87b0.js.map