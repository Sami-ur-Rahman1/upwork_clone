(window.webpackJsonp = window.webpackJsonp || []).push([
    [71], {
        1003: function(e) {
            e.exports = JSON.parse("{}")
        },
        1004: function(e) {
            e.exports = JSON.parse('{"vsuc_forent_Title_1":"This is how","vsuc_forent_Title_2":"good companies<br/>find good company.","vsuc_forent_Subtitle_2":"Access the top 1% of talent on Upwork, and a full suite of hybrid workforce management tools. This is how innovation works now.","vsuc_forent_ExpertTalent_3":"Access expert talent to fill your skill gaps","vsuc_forent_ControlWorkflow_4":"Control your workflow: hire, classify and pay your talent","vsuc_forent_ControlSupport_5":"Partner with Upwork for end-to-end support","vsuc_forent_LearnMore_6":"Learn more","vsuc_forent_ShowDetails_7":"Show","vsuc_forent_HideDetails_8":"Hide","vsuc_forent_Headline_9":"Enterprise Suite","vsuc_forent_EnterpriseImage_10":"enterprise-image","vsuc_forent_Skills_11":"skills","vsuc_forent_Control_12":"control","vsuc_forent_Support_13":"support"}')
        },
        1005: function(e) {
            e.exports = JSON.parse("{}")
        },
        1006: function(e, t, r) {
            "use strict";
            r(499)
        },
        1007: function(e, t, r) {
            var n = r(3)(!1);
            n.push([e.i, ".container[data-v-0d1e394a]{--font-weight-body:400;letter-spacing:.6px}.for-enterprise-banner-container[data-v-0d1e394a]{display:flex;overflow:hidden}@media (min-width:700px){.for-enterprise-banner-container[data-v-0d1e394a]{border-radius:var(--radius-lg);--col-gap:var(--ws-2x)}}@media (min-width:1200px){.for-enterprise-banner-container[data-v-0d1e394a]{--col-gap:var(--ws-24x)}}.enterprise-learn-more-btn[data-v-0d1e394a]{border:transparent;color:var(--carbonite);margin:25px 0 0}.enterprise-container[data-v-0d1e394a]{padding:35px 45px 35px 35px}@media (max-width:699.98px){.enterprise-container[data-v-0d1e394a]{padding:20px 15px}}@media (min-width:700px) and (max-width:1199.98px){.enterprise-container[data-v-0d1e394a]{padding:40px 25px 29px 30px}}.enterprise-title[data-v-0d1e394a]{margin-bottom:10px;line-height:100%;letter-spacing:-1.96px}@media (min-width:700px){.enterprise-title[data-v-0d1e394a]{margin-bottom:20px}}@media (max-width:1199.98px){.enterprise-title[data-v-0d1e394a]{font-size:38px;line-height:100%}}@media (min-width:700px) and (max-width:1199.98px){.enterprise-title[data-v-0d1e394a]{font-size:42px;margin-bottom:25px}}@media (min-width:1200px){.enterprise-title[data-v-0d1e394a]{font-size:56px}}.enterprise-image[data-v-0d1e394a]{z-index:1;max-width:100%;max-height:100%}.enterprise-divider[data-v-0d1e394a]{border-color:#fff;margin-bottom:26px;margin-top:50px}@media (min-width:700px){.enterprise-divider[data-v-0d1e394a]{margin-top:78px}}@media (min-width:1200px){.enterprise-divider[data-v-0d1e394a]{margin-top:104px}}.enterprise-headline[data-v-0d1e394a]{margin-bottom:16px;font-size:22px;line-height:130%}@media (--down-sm){.enterprise-headline[data-v-0d1e394a]{font-size:18px}}@media (min-width:1200px){.enterprise-headline[data-v-0d1e394a]{margin-bottom:35px}}.enterprise-subtitle[data-v-0d1e394a]{font-size:18px;line-height:130%;letter-spacing:.6px;font-weight:400}.bg-forest[data-v-0d1e394a]{background-color:var(--forest)}.c-mint[data-v-0d1e394a]{color:var(--mint);stroke:var(--mint)!important}.c-forest[data-v-0d1e394a]{color:var(--forest)}.text-inverse[data-v-0d1e394a]{color:var(--white)}@media (max-width:699.98px){.for-enterprise[data-v-0d1e394a]{padding:0!important}}.for-enterprise .enterprise-image-container picture[data-v-0d1e394a]{height:535px;display:block}.for-enterprise .enterprise-image-container img[data-v-0d1e394a]{height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.ent-more-details[data-v-0d1e394a]{line-height:110%;font-size:18px}.arrow[data-v-0d1e394a]{border:solid var(--white);border-width:0 3px 3px 0;display:inline-block;padding:3px;margin-left:8px}.arrow .up[data-v-0d1e394a]{transform:rotate(-135deg);-webkit-transform:rotate(-135deg)}.arrow .down[data-v-0d1e394a]{margin-bottom:2px;transform:rotate(45deg);-webkit-transform:rotate(45deg)}.enterprise-description-list[data-v-0d1e394a]{font-weight:400}img.more-details-item-icon[data-v-0d1e394a]{height:20px}", ""]), e.exports = n
        },
        1105: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(80),
                o = r.n(n),
                d = r(45),
                l = r.n(d),
                c = r(12),
                m = r(272),
                v = r(369),
                _ = {
                    "en-gb": r(1003),
                    en: r(1004),
                    is: r(1005)
                },
                f = {
                    name: "ForEnterprise",
                    injectStyles: [o.a, l.a],
                    components: {
                        PictureMq: v.a,
                        UpLink: c.a
                    },
                    props: {
                        wrapperClasses: {
                            type: String,
                            default: "mb-12x mt-12x"
                        }
                    },
                    data: () => ({
                        showDetails: !1,
                        cloudinaryImageUrl: m.a
                    }),
                    computed: {
                        showDetailsText() {
                            return this.showDetails ? this.$t("vsuc_forent_HideDetails_8") : this.$t("vsuc_forent_ShowDetails_7")
                        },
                        getBaseImageUrl: () => "".concat(m.a, "f_auto,q_auto/brontes/for-enterprise/"),
                        enterpriseMobileImageSrc() {
                            return "".concat(this.getBaseImageUrl, "enterprise-2023-md.jpg")
                        }
                    },
                    methods: {
                        toggleMoreDetails() {
                            this.showDetails = !this.showDetails
                        }
                    },
                    i18n: {
                        messages: _
                    }
                },
                x = (r(1006), r(0)),
                component = Object(x.a)(f, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("section", {
                        staticClass: "container for-enterprise",
                        class: e.wrapperClasses,
                        attrs: {
                            "design-system": "air-3-0",
                            "data-qa-section": "for-enterprise"
                        }
                    }, [t("div", {
                        staticClass: "for-enterprise-banner-container bg-forest air3-grid-container"
                    }, [t("div", {
                        staticClass: "span-md-6 span-lg-8"
                    }, [t("picture-mq", {
                        attrs: {
                            "display-above-breakpoint": !1
                        }
                    }, [t("img", {
                        staticClass: "enterprise-image d-block d-md-none",
                        attrs: {
                            loading: "lazy",
                            src: e.enterpriseMobileImageSrc,
                            alt: e.$t("vsuc_forent_EnterpriseImage_10"),
                            "data-qa": "image"
                        }
                    })]), e._v(" "), t("div", {
                        staticClass: "enterprise-container text-inverse"
                    }, [t("div", [t("p", {
                        staticClass: "enterprise-headline",
                        attrs: {
                            "data-qa": "headline"
                        }
                    }, [e._v("\n            " + e._s(e.$t("vsuc_forent_Headline_9")) + "\n          ")]), e._v(" "), t("h1", {
                        staticClass: "text-inverse display-rebrand enterprise-title",
                        attrs: {
                            "data-qa": "title"
                        }
                    }, [t("span", {
                        staticClass: "vs-font-family-base"
                    }, [e._v(e._s(e.$t("vsuc_forent_Title_1")))]), e._v(" "), t("br"), e._v(" "), t("span", {
                        staticClass: "c-mint",
                        domProps: {
                            innerHTML: e._s(e.$t("vsuc_forent_Title_2"))
                        }
                    })]), e._v(" "), t("span", {
                        staticClass: "enterprise-subtitle vs-font-bold",
                        attrs: {
                            "data-qa": "subtitle"
                        }
                    }, [e._v("\n            " + e._s(e.$t("vsuc_forent_Subtitle_2")) + "\n          ")])]), e._v(" "), t("div", {
                        staticClass: "enterprise-description-list"
                    }, [t("div", {
                        staticClass: "ent-more-details"
                    }, [t("div", {
                        staticClass: "d-flex mt-4 align-items-top"
                    }, [t("img", {
                        staticClass: "mr-3 more-details-item-icon c-mint",
                        attrs: {
                            alt: e.$t("vsuc_Skills_11"),
                            src: "".concat(e.getBaseImageUrl, "Skills.svg")
                        }
                    }), e._v("\n              " + e._s(e.$t("vsuc_forent_ExpertTalent_3")) + "\n            ")]), e._v(" "), t("div", {
                        staticClass: "d-flex mt-3 align-items-top"
                    }, [t("img", {
                        staticClass: "mr-3 more-details-item-icon c-mint",
                        attrs: {
                            alt: e.$t("vsuc_Control_12"),
                            src: "".concat(e.getBaseImageUrl, "Briefcase.svg")
                        }
                    }), e._v("\n              " + e._s(e.$t("vsuc_forent_ControlWorkflow_4")) + "\n            ")]), e._v(" "), t("div", {
                        staticClass: "d-flex mt-3 align-items-top"
                    }, [t("img", {
                        staticClass: "mr-3 more-details-item-icon c-mint",
                        attrs: {
                            alt: e.$t("vsuc_Support_13"),
                            src: "".concat(e.getBaseImageUrl, "Support.svg")
                        }
                    }), e._v("\n              " + e._s(e.$t("vsuc_forent_ControlSupport_5")) + "\n            ")])]), e._v(" "), t("div", {
                        staticClass: "d-flex align-items-center justify-space-between"
                    }, [t("UpLink", {
                        staticClass: "air3-btn air3-btn-secondary c-forest vs-bg-white enterprise-learn-more-btn",
                        attrs: {
                            href: "/enterprise/"
                        }
                    }, [e._v("\n              " + e._s(e.$t("vsuc_forent_LearnMore_6")) + "\n            ")])], 1)])])], 1), e._v(" "), t("div", {
                        staticClass: "span-md-6 span-lg-4 enterprise-image-container d-none d-md-block"
                    }, [t("picture-mq", [t("img", {
                        staticClass: "enterprise-image d-none d-md-block",
                        attrs: {
                            loading: "lazy",
                            src: "".concat(e.getBaseImageUrl, "enterprise-2023.jpg"),
                            alt: e.$t("vsuc_forent_EnterpriseImage_10"),
                            "data-qa": "image"
                        }
                    })])], 1)])])
                }), [], !1, null, "0d1e394a", null);
            t.default = component.exports
        },
        499: function(e, t, r) {
            var content = r(1007);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(4).default)("7a14a7f6", content, !0, {
                sourceMap: !1
            })
        }
    }
]);
//# sourceMappingURL=https://upwork-usw2-staging-assets-jsmaps.s3.us-west-2.amazonaws.com/Brontes/for-enterprise.fd98fea1.js.map