(window["wpJsonpMicroapp_visitor-v2"] = window["wpJsonpMicroapp_visitor-v2"] || []).push([
    ["subnav-item-dropdown"], {
        eaba: function(e, n, t) {
            "use strict";
            t.r(n);
            var o = function() {
                    var e = this,
                        n = e.$createElement,
                        t = e._self._c || n;
                    return t("li", {
                        ref: "container",
                        staticClass: "subnav-more-links",
                        attrs: {
                            "data-cy": "subnav-more-element"
                        }
                    }, [t("button", {
                        ref: "subnav-more-links",
                        staticClass: "more-links-button",
                        attrs: {
                            "data-cy": "subnav-more",
                            type: "button",
                            "aria-expanded": e.isOpen ? "true" : "false",
                            "aria-label": e.$t("upsv_MoreSecondaryNav")
                        },
                        on: {
                            click: e.moreLinksDropdownToggle,
                            keydown: function(n) {
                                return !n.type.indexOf("key") && e._k(n.keyCode, "esc", 27, n.key, ["Esc", "Escape"]) ? null : e.moreLinksDropdownEsc.apply(null, arguments)
                            }
                        }
                    }, [e._v(" " + e._s(e.item.label) + " "), t("UpCIcon", {
                        staticClass: "more-links-icon",
                        attrs: {
                            icon: e.iconChevronDown,
                            size: "sm"
                        }
                    })], 1), e.item.children && e.item.children.length > 0 ? t("ul", {
                        staticClass: "nav-dropdown-menu",
                        class: {
                            "is-open": e.isOpen
                        },
                        on: {
                            keydown: function(n) {
                                return !n.type.indexOf("key") && e._k(n.keyCode, "esc", 27, n.key, ["Esc", "Escape"]) ? null : e.moreLinksDropdownEsc.apply(null, arguments)
                            }
                        }
                    }, e._l(e.item.children, (function(n) {
                        return t("li", {
                            key: n.label
                        }, [t("UpLink", {
                            staticClass: "nav-menu-item",
                            attrs: {
                                href: n.link
                            },
                            on: {
                                click: function(n) {
                                    return e.track(e.link)
                                }
                            }
                        }, [e._v(e._s(n.label))])], 1)
                    })), 0) : e._e()])
                },
                s = [],
                i = t("3610");

            function r(e, n, t) {
                function o(n) {
                    const o = n.composedPath && n.composedPath() || n.path,
                        s = Array.isArray(o) && o.indexOf(e) < 0;
                    return s ? t(n) : null
                }
                return n.forEach(e => {
                    document.body.addEventListener(e, o)
                }), () => {
                    n.forEach(e => {
                        document.body.removeEventListener(e, o)
                    })
                }
            }

            function a(e, n) {
                return r(e, ["click"], n)
            }
            var c = t("ccb4"),
                l = t("9003"),
                u = t.n(l),
                p = t("b923"),
                d = {
                    name: "IaSubnavItemDropdown",
                    components: {
                        UpCIcon: i["a"],
                        UpLink: c["a"]
                    },
                    i18n: {
                        messages: p["a"]
                    },
                    injectStyles: [u.a],
                    props: {
                        item: {
                            type: Object,
                            default: () => ({})
                        }
                    },
                    data() {
                        return {
                            isOpen: !1,
                            iconChevronDown: () => Promise.resolve().then(t.bind(null, "7f20")),
                            offClickOutside: null
                        }
                    },
                    mounted() {
                        this.offClickOutside = a(this.$refs.container, () => this.moreLinksDropdownEsc(!0))
                    },
                    beforeDestroy() {
                        this.offClickOutside && this.offClickOutside()
                    },
                    methods: {
                        moreLinksDropdownToggle() {
                            this.$refs["subnav-more-links"].focus(), this.isOpen = !this.isOpen
                        },
                        moreLinksDropdownEsc(e) {
                            this.isOpen = !1, e || this.$refs["subnav-more-links"].focus()
                        },
                        track(e) {
                            this.$tracker.track({
                                trackers: ["gtm", "snowplow", "olog"],
                                event: "click",
                                locationDefault: "vs",
                                sublocation: "subnavigation_bar",
                                label: e.trackLabel,
                                data: {
                                    nav_category: e.label
                                }
                            })
                        }
                    }
                },
                k = d,
                m = t("2877"),
                f = Object(m["a"])(k, o, s, !1, null, null, null);
            n["default"] = f.exports
        }
    }
]);
//# sourceMappingURL=https://upwork-usw2-staging-assets-jsmaps.s3.us-west-2.amazonaws.com/TopNavSsi/visitor-v2/js/subnav-item-dropdown.377ce978.js.map