(window.webpackJsonp = window.webpackJsonp || []).push([
    [487], {
        1099: function(t, e, o) {
            "use strict";
            o.r(e);
            var n = o(16),
                l = o(513);
            o(987);
            var r = o(272),
                c = o(347);
            const m = [{
                    companyName: "Airbnb",
                    image: "general/logobar/colored/nasdaq-light.svg",
                    width: 92
                }, {
                    companyName: "Automattic",
                    image: "general/logobar/colored/automattic-light.svg",
                    width: 167
                }, {
                    companyName: "Bissel",
                    image: "general/logobar/colored/bissell-light.svg",
                    width: 61
                }, {
                    companyName: "Coty",
                    image: "general/logobar/colored/coty-light.svg",
                    width: 87
                }, {
                    companyName: "Rancher",
                    image: "general/logobar/colored/rancher-v2-light.svg",
                    width: 89
                }],
                d = [{
                    companyName: "Unilever",
                    image: "general/logobar/unilever-bw.png",
                    width: 50,
                    height: 55
                }, {
                    companyName: "Pladis Global",
                    image: "general/logobar/pladis-global.png",
                    width: 75,
                    height: 32
                }, {
                    companyName: "Inchcape",
                    image: "general/logobar/inchcape.png",
                    width: 140,
                    height: 26
                }, {
                    companyName: "Touchnote",
                    image: "general/logobar/touchnote.svg",
                    width: 115
                }],
                v = [{
                    src: "general/logobar/colored/nasdaq-light.svg",
                    className: "nasdaq-testimonial",
                    alt: "vsuc_testimonials_NASDAQLogo_874",
                    description: "vsuc_testimonials_UpworkEnablesUsToDifferentiate",
                    author: "vsuc_testimonials_JoshMachizCDO",
                    result: "vsuc_testimonials_Results",
                    footer: [{
                        title: "vsuc_testimonials_EmmyWinning",
                        author: "vsuc_testimonials_FacebookWatchProgram"
                    }, {
                        title: "vsuc_testimonials_Millions",
                        author: "vsuc_testimonials_ofImpressionsGeneratedPerClient"
                    }]
                }, {
                    src: "general/logobar/colored/microsoft-lg-light.svg",
                    className: "double-testimonial",
                    alt: "vsuc_testimonials_MicrosoftLogo",
                    description: "vsuc_testimonials_OneOfTheAdvantages",
                    author: "vsuc_testimonials_CarolTaylorDCE",
                    result: "vsuc_testimonials_Results",
                    footer: [{
                        title: "vsuc_testimonials_PercentFaster",
                        author: "vsuc_testimonials_LaunchOfProjects"
                    }, {
                        title: "10,000",
                        author: "vsuc_testimonials_ProjectsCompleted"
                    }]
                }];
            var h = {
                    name: "TestimonialsCarousel",
                    i18n: {
                        messages: {
                            "en-gb": o(989),
                            en: o(990),
                            is: o(991)
                        }
                    },
                    components: {
                        UpCCarouselList: l.a
                    },
                    props: {
                        title: {
                            type: String,
                            default: ""
                        },
                        wrapperClasses: {
                            type: Array,
                            default: () => []
                        },
                        subLocation: {
                            type: String,
                            default: "testimonials"
                        },
                        dataQa: {
                            type: String,
                            default: "testimonials-carousel"
                        },
                        dataQaSection: {
                            type: String,
                            default: "testimonials-carousel"
                        },
                        carouselDataQa: {
                            type: String,
                            default: ""
                        }
                    },
                    data() {
                        return {
                            mq: n.a.data(),
                            flTilesNext: !0,
                            flTilesPrev: !0,
                            companyLogos: Object(c.a)(this.$i18n) ? Object.freeze(m) : Object.freeze(d),
                            boxClasses: "testimonials-vue-slick-carousel-padding",
                            lastTileIndex: 0,
                            carouselLastIndex: 0,
                            cloudinaryImageUrl: r.a,
                            testimonialsList: v,
                            state: {
                                slideAll: !1,
                                variableWidth: !0,
                                currentSlide: 0
                            }
                        }
                    },
                    computed: {
                        isDesktop() {
                            return function(t) {
                                let e = null == t ? void 0 : t.headers["user-agent"];
                                var o, n;
                                return e || (e = "undefined" != typeof window && (null === (o = window) || void 0 === o || null === (n = o.navigator) || void 0 === n ? void 0 : n.userAgent) || ""), "desktop" === function() {
                                    let t = "desktop";
                                    var a;
                                    return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "") || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(a.substr(0, 4))) && (t = "mobile"), t
                                }(e)
                            }(this.$root.context.req)
                        }
                    },
                    beforeMount() {
                        n.a.install(this)
                    },
                    methods: {
                        handleOnAfter(t) {
                            const e = this.mq.mobile ? "swipe" : "click",
                                label = "right" === t ? "next" : "prev";
                            this.$tracker.track({
                                event: e,
                                sublocation: this.subLocation,
                                label: label
                            })
                        }
                    }
                },
                f = h,
                x = (o(992), o(994), o(0)),
                component = Object(x.a)(f, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("section", {
                        directives: [{
                            name: "track-impression",
                            rawName: "v-track-impression",
                            value: {
                                sublocation: t.subLocation,
                                label: "saw_component"
                            },
                            expression: "{ sublocation: subLocation, label: 'saw_component' }"
                        }],
                        staticClass: "container testimonials-carousel-section testimonials-carousel-section-v2",
                        class: t.wrapperClasses,
                        attrs: {
                            "data-qa-section": t.dataQaSection
                        }
                    }, [e("div", {
                        staticClass: "testimonials-scrollable-cards",
                        attrs: {
                            "data-qa": t.dataQa
                        }
                    }, [e("h2", {
                        staticClass: "display-rebrand title pl-md-0",
                        attrs: {
                            "data-qa": "title"
                        },
                        domProps: {
                            innerHTML: t._s(t.title || t.$t("vsuc_testimonials_TrustedByLeadingBrands"))
                        }
                    }), t._v(" "), e("UpCCarouselList", {
                        attrs: {
                            "slide-all": t.state.slideAll,
                            "data-qa": t.carouselDataQa
                        },
                        model: {
                            value: t.state.currentSlide,
                            callback: function(e) {
                                t.$set(t.state, "currentSlide", e)
                            },
                            expression: "state.currentSlide"
                        }
                    }, [t._l(t.testimonialsList, (function(o, n) {
                        return e("li", {
                            directives: [{
                                name: "track-impression",
                                rawName: "v-track-impression",
                                value: {
                                    label: "testimonial_tile",
                                    sublocation: t.subLocation,
                                    data: {
                                        value: 2
                                    }
                                },
                                expression: "{\n          label: 'testimonial_tile',\n          sublocation: subLocation,\n          data: {\n            value: 2,\n          },\n        }"
                            }],
                            key: n,
                            staticClass: "fl-tile-carousel p-0",
                            attrs: {
                                "data-qa": "testimonials-title"
                            }
                        }, [e("div", {
                            staticClass: "testimonial-item item-single-testimonial d-flex flex-column",
                            class: [t.boxClasses, o.className]
                        }, [e("div", {
                            staticClass: "testimonial-top-half"
                        }, [e("img", {
                            staticClass: "company-logo",
                            attrs: {
                                alt: t.$t(o.alt),
                                src: "".concat(t.cloudinaryImageUrl, "/").concat(o.src),
                                width: "199",
                                height: "56"
                            }
                        }), t._v(" "), e("h4", {
                            staticClass: "testimonials-desc",
                            attrs: {
                                "data-qa": "testimonial-description"
                            }
                        }, [t._v("\n              " + t._s(t.$t(o.description)) + "\n            ")]), t._v(" "), e("div", {
                            staticClass: "testimonial-author"
                        }, [t._v("\n              " + t._s(t.$t(o.author)) + "\n            ")])]), t._v(" "), e("div", {
                            staticClass: "testimonial-bottom-half"
                        }, [e("div", [t._v(t._s(t.$t(o.result)))]), t._v(" "), e("hr"), t._v(" "), e("div", {
                            staticClass: "air3-grid-container gap-0"
                        }, [e("div", {
                            staticClass: "span-lg-5 testimonial-bottom-half__column pb-4 pb-lg-0"
                        }, [e("h4", [t._v(t._s(t.$t(o.footer[0].title)))]), t._v(" "), e("div", {
                            staticClass: "testimonial-author font-weight-400"
                        }, [t._v("\n                  " + t._s(t.$t(o.footer[0].author)) + "\n                ")])]), t._v(" "), e("div", {
                            staticClass: "span-lg-6 testimonial-bottom-half__column"
                        }, [e("h4", [t._v(t._s(t.$t(o.footer[1].title)))]), t._v(" "), e("div", {
                            staticClass: "testimonial-author font-weight-400"
                        }, [t._v("\n                  " + t._s(t.$t(o.footer[1].author)) + "\n                ")])])])])])])
                    })), t._v(" "), e("li", {
                        directives: [{
                            name: "track-impression",
                            rawName: "v-track-impression",
                            value: {
                                label: "testimonial_tile",
                                sublocation: t.subLocation,
                                data: {
                                    value: 1
                                }
                            },
                            expression: "{\n          label: 'testimonial_tile',\n          sublocation: subLocation,\n          data: {\n            value: 1,\n          },\n        }"
                        }],
                        staticClass: "fl-tile-carousel p-0"
                    }, [e("div", {
                        staticClass: "testimonial-item item-company-logos d-flex testimonial-top-half"
                    }, [e("div", {
                        staticClass: "company-logos__cover-image d-none d-lg-flex"
                    }), t._v(" "), e("div", {
                        staticClass: "company-logos testimonial-many-more company-logo mb-0",
                        class: t.boxClasses
                    }, [e("div", {
                        staticClass: "testimonial-many-more-title"
                    }, [t._v("\n              " + t._s(t.$t("vsuc_testimonials_AndManyMore")) + "\n            ")]), t._v(" "), t._l(t.companyLogos, (function(o, n) {
                        return e("div", {
                            key: n
                        }, [e("img", {
                            attrs: {
                                src: "".concat(t.cloudinaryImageUrl, "/").concat(o.image),
                                alt: o.companyName,
                                width: o.width,
                                height: o.height || 45
                            }
                        })])
                    }))], 2)])])], 2)], 1)])
                }), [], !1, null, "3ab6458c", null);
            e.default = component.exports
        },
        495: function(t, e, o) {
            var content = o(993);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(4).default)("fe24b5be", content, !0, {
                sourceMap: !1
            })
        },
        496: function(t, e, o) {
            var content = o(995);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(4).default)("e59be496", content, !0, {
                sourceMap: !1
            })
        },
        989: function(t) {
            t.exports = JSON.parse("{}")
        },
        990: function(t) {
            t.exports = JSON.parse('{"vsuc_testimonials_TrustedByLeadingBrands":"Trusted by leading<br class=\\"d-none d-md-block\\" /> brands and startups","vsuc_testimonials_NASDAQLogo_874":"NASDAQ Logo","vsuc_testimonials_UpworkEnablesUsToDifferentiate":"“Upwork enables us to differentiate ourselves from our competitors and produce content at a higher caliber.”","vsuc_testimonials_JoshMachizCDO":"Josh Machiz, Chief Digital Officer","vsuc_testimonials_Results":"Results","vsuc_testimonials_EmmyWinning":"Emmy Winning","vsuc_testimonials_FacebookWatchProgram":"Facebook Watch program","vsuc_testimonials_Millions":"Millions","vsuc_testimonials_ofImpressionsGeneratedPerClient":"of impressions generated per client per IPO","vsuc_testimonials_MicrosoftLogo":"Microsoft Logo","vsuc_testimonials_OneOfTheAdvantages":"“One of the advantages of utilizing freelancers is finding talent with different skills quickly as our needs change.”","vsuc_testimonials_CarolTaylorDCE":"Carol Taylor, Director of Content Experience","vsuc_testimonials_PercentFaster":"50% Faster","vsuc_testimonials_LaunchOfProjects":"launch of projects","vsuc_testimonials_ProjectsCompleted":"projects completed","vsuc_testimonials_AndManyMore":"And many more"}')
        },
        991: function(t) {
            t.exports = JSON.parse("{}")
        },
        992: function(t, e, o) {
            "use strict";
            o(495)
        },
        993: function(t, e, o) {
            var n = o(3)(!1);
            n.push([t.i, ".testimonials-carousel-section[data-v-3ab6458c]{--body-font-size:16px;--body-line-height:22px;--body-letter-spacing:0.6px;--letter-spacing-h2:-0.035em;--line-height-h2:100%;--font-size-h4:26px;--line-height-h4:23px;--letter-spacing-h4:-0.2%;--font-family-h6:Neue Montreal;--font-size-h6:18px;--line-height-h6:21px;--box-border-radius:10px;--primary-with-up-black:#108c00;--transition-common:all 0.3s ease-in-out}.testimonials-carousel-section .item-company-logos[data-v-3ab6458c]{width:100%}.testimonials-carousel-section .testimonials-vue-slick-carousel-padding[data-v-3ab6458c]{padding:15px}@media (min-width:1200px){.testimonials-carousel-section .testimonials-vue-slick-carousel-padding[data-v-3ab6458c]{padding:25px}}@media (max-width:30em){.testimonials-carousel-section[data-v-3ab6458c]{margin-right:0}}@media (max-width:992px){.testimonials-carousel-section[data-v-3ab6458c]{margin-top:60px!important}}@media (min-width:700px){.testimonials-carousel-section[data-v-3ab6458c]{margin-top:85px!important;--font-size-h4:26px;--line-height-h4:25px;--font-size-h1:64px;--font-size-h6:18px;--line-height-h6:21px}}.testimonials-carousel-section .testimonial-carousel-title[data-v-3ab6458c]{--font-size-h2:34px;--letter-spacing-h2:-0.035em;--line-height-h2:100%}@media (min-width:1200px){.testimonials-carousel-section .testimonial-carousel-title[data-v-3ab6458c]{--font-size-h2:48px;margin-bottom:0}}.testimonials-carousel-section .testimonial-carousel-title[data-v-3ab6458c]{font-size:var(--font-size-h2);letter-spacing:var(--letter-spacing-h2)}.testimonials-carousel-section .fl-tile-carousel[data-v-3ab6458c]{--tile-padding:8px}@media (min-width:1200px){.testimonials-carousel-section .fl-tile-carousel[data-v-3ab6458c]{--tile-padding:15px}}.testimonials-carousel-section .fl-tile-carousel[data-v-3ab6458c]{padding-left:var(--tile-padding);padding-right:var(--tile-padding);flex-shrink:0;box-sizing:content-box;flex-basis:78%}@media (min-width:700px){.testimonials-carousel-section .fl-tile-carousel[data-v-3ab6458c]{flex-basis:46%}}.testimonials-carousel-section .fl-tile-carousel[data-v-3ab6458c]:first-child{padding-left:0!important}@media (min-width:1200px){.testimonials-carousel-section .tile-swiper-container[data-v-3ab6458c]{padding-bottom:40px}}.testimonials-carousel-section .testimonial-item-outer[data-v-3ab6458c]{display:flex;flex-direction:column;flex:1;height:100%}.testimonials-carousel-section .testimonial-item-outer .testimonial-item[data-v-3ab6458c]{flex:1}@media screen and((min-width:700px) and (max-width:800px)){.testimonials-carousel-section .testimonial-item-outer[data-v-3ab6458c]{height:500px}}.testimonials-carousel-section .more-reviews-link[data-v-3ab6458c]{display:inline-block;border-bottom:1px solid var(--gray-04);width:125px;margin-top:10px;text-decoration:none;transition:var(--transition-common)}@media (min-width:1200px){.testimonials-carousel-section .more-reviews-link[data-v-3ab6458c]{position:absolute;bottom:-40px}}.testimonials-carousel-section .more-reviews-link[data-v-3ab6458c]:hover{border-bottom-color:var(--primary-with-up-black)}.testimonials-carousel-section .testimonial-item hr[data-v-3ab6458c]{margin-bottom:10px;margin-top:5px}@media (min-width:1200px){.testimonials-carousel-section .testimonial-item hr[data-v-3ab6458c]{margin-bottom:17px;margin-top:12px}}.testimonials-carousel-section .testimonial-item[data-v-3ab6458c]{color:var(--gray-04)}.testimonials-carousel-section .testimonial-item h2[data-v-3ab6458c],.testimonials-carousel-section .testimonial-item h3[data-v-3ab6458c],.testimonials-carousel-section .testimonial-item h4[data-v-3ab6458c]{color:var(--white)}.testimonials-carousel-section .testimonial-item h4[data-v-3ab6458c]{font-family:var(--font-family-rebrand);letter-spacing:var(--heading-letter-spacing-h3-rebrand)}.testimonials-carousel-section .testimonial-item[data-v-3ab6458c]{height:100%;border-radius:var(--box-border-radius)}.testimonials-carousel-section .testimonial-item .company-logos[data-v-3ab6458c]{display:flex;flex-direction:column;justify-content:space-evenly}.testimonials-carousel-section .testimonial-item .company-logo[data-v-3ab6458c]{margin-bottom:20px}@media screen and ((max-width:992px)){.testimonials-carousel-section .testimonial-item .company-logo[data-v-3ab6458c]{margin-bottom:15px}}@media screen and ((max-width:30em)){.testimonials-carousel-section .testimonial-item .company-logo[data-v-3ab6458c]{margin-bottom:15px}}.testimonials-carousel-section .testimonial-item.nasdaq-testimonial[data-v-3ab6458c]{background-color:#13544e}.testimonials-carousel-section .testimonial-item.double-testimonial[data-v-3ab6458c]{background-color:#bc511b;@media (min-width:1200px){.company-logo[data-v-3ab6458c]{margin-bottom:25px}}}.testimonials-carousel-section .testimonial-item.double-testimonial[data-v-3ab6458c],.testimonials-carousel-section .testimonial-item.item-single-testimonial[data-v-3ab6458c]{justify-content:space-between}@media (min-width:1200px){.testimonials-carousel-section .equal-col[data-v-3ab6458c]{display:flex!important;flex-wrap:wrap}}.testimonials-carousel-section .company-logos__cover-image[data-v-3ab6458c]{flex:1;max-width:290px;background-image:url(https://res.cloudinary.com/upwork-cloud-stage/image/upload/v1650909071/general/logobar/colored/company-logos-cover.jpg);background-repeat:no-repeat;background-size:cover;background-position-y:center;border-top-left-radius:var(--box-border-radius);border-bottom-left-radius:var(--box-border-radius)}.testimonials-carousel-section .company-logos[data-v-3ab6458c]{flex:1;background:var(--up-black);border-top-right-radius:var(--box-border-radius);border-bottom-right-radius:var(--box-border-radius)}@media (max-width:992px){.testimonials-carousel-section .company-logos[data-v-3ab6458c]{border-top-left-radius:var(--box-border-radius);border-bottom-left-radius:var(--box-border-radius);padding-left:30px!important}}.testimonials-carousel-section-v2[data-v-3ab6458c]{--body-line-height:22px;--letter-spacing-h2:-0.032em;--font-size-description:20px;line-height:var(--body-line-height)}.testimonials-carousel-section-v2 h2[data-v-3ab6458c]{font-family:var(--font-family-rebrand)}.testimonials-carousel-section-v2 .carousel-container[data-v-3ab6458c]{width:100%}.testimonials-carousel-section-v2 .title[data-v-3ab6458c]{letter-spacing:-.032em;padding-right:20px;margin-bottom:20px}@media (min-width:700px){.testimonials-carousel-section-v2 .title[data-v-3ab6458c]{margin-bottom:30px}}@media screen and (max-width:30em){.testimonials-carousel-section-v2 .testimonial-item[data-v-3ab6458c]{min-height:485px}}@media screen and ((min-width:700px) and (max-width:800px)){.testimonials-carousel-section-v2 .testimonial-item[data-v-3ab6458c]{height:500px;max-height:500px}}@media (min-width:1200px){.testimonials-carousel-section-v2 .testimonial-item[data-v-3ab6458c]{min-height:450px;flex:1}}.testimonials-carousel-section-v2 .testimonial-item .testimonial-many-more[data-v-3ab6458c]{height:100%}@media (min-width:700px){.testimonials-carousel-section-v2 .testimonial-item .testimonial-many-more[data-v-3ab6458c]{padding:41px}}@media (max-width:992px){.testimonials-carousel-section-v2 .testimonial-item .testimonial-many-more[data-v-3ab6458c]{padding-left:15px!important}.testimonials-carousel-section-v2 .testimonial-item .testimonial-many-more div[data-v-3ab6458c]{margin:0 auto}}.testimonials-carousel-section-v2 .testimonial-item .testimonial-many-more-title[data-v-3ab6458c]{font-size:var(--font-size-description);color:#fff;letter-spacing:-.002em}.testimonials-carousel-section-v2 .testimonial-bottom-half[data-v-3ab6458c]{min-height:126px}.testimonials-carousel-section-v2 .testimonial-bottom-half h4[data-v-3ab6458c]{font-family:var(--font-family-base);letter-spacing:-.03em}.testimonials-carousel-section-v2 .testimonial-bottom-half__column[data-v-3ab6458c]{padding-right:40px}.testimonials-carousel-section-v2 .company-logo[data-v-3ab6458c]{margin-bottom:15px}@media (max-width:992px){.testimonials-carousel-section-v2 .company-logo[data-v-3ab6458c]{height:30px}}.testimonials-carousel-section-v2 h4[data-v-3ab6458c]{font-size:var(--font-size-h4);line-height:25px}.testimonials-carousel-section-v2 .testimonials-desc[data-v-3ab6458c]{font-family:var(--font-family-rebrand);margin-bottom:10px;letter-spacing:-.021em}@media (max-width:992px){.testimonials-carousel-section-v2 .testimonials-desc[data-v-3ab6458c]{font-size:var(--font-size-description)}}.testimonials-carousel-section-v2 .testimonial-author[data-v-3ab6458c]{font-size:var(--body-font-size);letter-spacing:.6px}.testimonials-carousel-section-v2 .testimonial-many-more-title[data-v-3ab6458c]{margin-bottom:35px}", ""]), t.exports = n
        },
        994: function(t, e, o) {
            "use strict";
            o(496)
        },
        995: function(t, e, o) {
            var n = o(3)(!1);
            n.push([t.i, ".testimonials-carousel-section .air3-carousel-list{grid-column-gap:var(--ws-8x);-moz-column-gap:var(--ws-8x);column-gap:var(--ws-8x);--carousel-list-gap:0}", ""]), t.exports = n
        }
    }
]);
//# sourceMappingURL=https://upwork-usw2-staging-assets-jsmaps.s3.us-west-2.amazonaws.com/Brontes/testimonials-carousel.02ab9a53.js.map