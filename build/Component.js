module.exports = function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        l = n(1),
        c = r(l);
    n(2);
    var p = function(e) {
        function t(e) {
            o(this, t);
            var n = a(this, Object.getPrototypeOf(t).call(this, e));
            return n.onChange = n.onChange.bind(n), n
        }
        return i(t, e), s(t, [{
            key: "onChange",
            value: function() {
                this.props.onChange(this.input)
            }
        }, {
            key: "render",
            value: function() {
                var e = this;
                return c["default"].createElement("div", {
                    className: "upload-button"
                }, c["default"].createElement("label", {
                    style: u({}, this.props.style),
                    className: this.props.className
                }, c["default"].createElement("input", {
                    className: "upload-button-file",
                    ref: function(t) {
                        e.input = t
                    },
                    onChange: this.onChange,
                    type: "file"
                }), this.props.children))
            }
        }]), t
    }(c["default"].Component);
    //p.propTypes = {
     //   onChange: l.PropTypes.func.isRequired,
     //   className: l.PropTypes.string,
     //   children: l.PropTypes.element.isRequired,
     //   style: l.PropTypes.object
    //},
    t["default"] = p
}, function(e, t) {
    e.exports = require("react")
}, function(e, t) {}]);
