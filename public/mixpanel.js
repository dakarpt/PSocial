(function () {
    var n = !0, p = null, s = !1;

    function C() {
        return function () {
        }
    }

    (function () {
        function N() {
            function a() {
                if (!a.Ac)K = a.Ac = n, L = s, c.a(x, function (a) {
                    a.cc()
                })
            }

            function b() {
                try {
                    m.documentElement.doScroll("left")
                } catch (d) {
                    setTimeout(b, 1);
                    return
                }
                a()
            }

            if (m.addEventListener)"complete" == m.readyState ? a() : m.addEventListener("DOMContentLoaded", a, s); else if (m.attachEvent) {
                m.attachEvent("onreadystatechange", a);
                var d = s;
                try {
                    d = window.frameElement == p
                } catch (e) {
                }
                m.documentElement.doScroll && d && b()
            }
            c.R(window, "load", a, n)
        }

        function O() {
            t.init = function (a, b, d) {
                if (d)return t[d] || (t[d] = x[d] = E(a,
                    b, d), t[d].oa()), t[d];
                d = t;
                if (x.mixpanel)d = x.mixpanel; else if (a)d = E(a, b, "mixpanel"), d.oa(), x.mixpanel = d;
                t = d;
                1 === I && (window.mixpanel = t);
                P()
            }
        }

        function P() {
            c.a(x, function (a, b) {
                "mixpanel" !== b && (t[b] = a)
            });
            t._ = c
        }

        function o() {
        }

        function h() {
        }

        function E(a, b, d) {
            var e, f = "mixpanel" === d ? t : t[d];
            if (f && 0 === I)e = f; else {
                if (f && !c.isArray(f)) {
                    q.error("You have already initialized " + d);
                    return
                }
                e = new h
            }
            e.Ha(a, b, d);
            e.people = new o;
            e.people.Ha(e);
            y = y || e.e("debug");
            !c.d(f) && c.isArray(f) && (e.Fa.call(e.people, f.people), e.Fa(f));
            return e
        }

        function l(a) {
            this.props = {};
            this.qb = s;
            this.name = a.persistence_name ? "mp_" + a.persistence_name : "mp_" + a.token + "_mixpanel";
            var b = a.persistence;
            if ("cookie" !== b && "localStorage" !== b)q.aa('Unknown persistence type "' + b + '"; falling back to "cookie"'), b = a.persistence = "cookie";
            if (b = "localStorage" === b) {
                b = n;
                try {
                    c.localStorage.set("__mplssupport__", "xyz"), "xyz" !== c.localStorage.get("__mplssupport__") && (b = s), c.localStorage.remove("__mplssupport__")
                } catch (d) {
                    b = s
                }
                b || q.error("localStorage unsupported; falling back to cookie store")
            }
            this.v =
                b ? c.localStorage : c.cookie;
            this.load();
            this.Rb(a);
            this.ad(a);
            this.save()
        }

        function F() {
            this.Hb = "submit"
        }

        function A() {
            this.Hb = "click"
        }

        function w() {
        }

        var I, t, J = Array.prototype, Q = Function.prototype, M = Object.prototype, B = J.slice, D = M.toString, G = M.hasOwnProperty, v = window.console, z = window.navigator, m = window.document, u = z.userAgent, R = "__mps,__mpso,__mpa,__mpap,__mpu,$people_distinct_id,__alias,__cmpns,__timers".split(","), H = window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest, L = !H && -1 == u.indexOf("MSIE") &&
            -1 == u.indexOf("Mozilla"), c = {}, y = s, S = {
            api_host: ("https:" == m.location.protocol ? "https://" : "http://") + "api.mixpanel.com",
            cross_subdomain_cookie: n,
            persistence: "cookie",
            persistence_name: "",
            cookie_name: "",
            loaded: C(),
            store_google: n,
            save_referrer: n,
            test: s,
            verbose: s,
            img: s,
            track_pageview: n,
            debug: s,
            track_links_timeout: 300,
            cookie_expiration: 365,
            upgrade: s,
            disable_persistence: s,
            disable_cookie: s,
            secure_cookie: s,
            ip: n,
            property_blacklist: []
        }, K = s;
        (function () {
            var a = Q.bind, b = J.forEach, d = J.indexOf, e = Array.isArray, f = {};
            c.bind = function (b, d) {
                var f, e;
                if (a && b.bind === a)return a.apply(b, B.call(arguments, 1));
                if (!c.Cb(b))throw new TypeError;
                f = B.call(arguments, 2);
                return e = function () {
                    if (!(this instanceof e))return b.apply(d, f.concat(B.call(arguments)));
                    ctor.prototype = b.prototype;
                    var a = new ctor;
                    ctor.prototype = p;
                    var c = b.apply(a, f.concat(B.call(arguments)));
                    return Object(c) === c ? c : a
                }
            };
            c.pc = function (a) {
                for (var b in a)"function" === typeof a[b] && (a[b] = c.bind(a[b], a))
            };
            var k = c.a = function (a, d, c) {
                if (a != p)if (b && a.forEach === b)a.forEach(d,
                    c); else if (a.length === +a.length)for (var e = 0, k = a.length; e < k && !(e in a && d.call(c, a[e], e, a) === f); e++); else for (e in a)if (G.call(a, e) && d.call(c, a[e], e, a) === f)break
            };
            c.s = function (a) {
                a && c.Wa(a) && (a = a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;"));
                return a
            };
            c.extend = function (a) {
                k(B.call(arguments, 1), function (b) {
                    for (var d in b)void 0 !== b[d] && (a[d] = b[d])
                });
                return a
            };
            c.isArray = e || function (a) {
                    return "[object Array]" === D.call(a)
                };
            c.Cb = function (a) {
                try {
                    return /^\s*\bfunction\b/.test(a)
                } catch (b) {
                    return s
                }
            };
            c.Ec = function (a) {
                return !(!a || !G.call(a, "callee"))
            };
            c.ga = function (a) {
                return !a ? [] : a.ga ? a.ga() : c.isArray(a) || c.Ec(a) ? B.call(a) : c.cd(a)
            };
            c.cd = function (a) {
                var b = [];
                if (a == p)return b;
                k(a, function (a) {
                    b[b.length] = a
                });
                return b
            };
            c.gd = function (a) {
                return a
            };
            c.yb = function (a, b) {
                var c = s;
                if (a == p)return c;
                if (d && a.indexOf === d)return -1 != a.indexOf(b);
                k(a, function (a) {
                    if (c || (c = a === b))return f
                });
                return c
            };
            c.j = function (a, b) {
                return -1 !== a.indexOf(b)
            }
        })();
        c.Ab = function (a, b) {
            a.prototype = new b;
            a.Vc = b.prototype
        };
        c.k = function (a) {
            return a ===
                Object(a) && !c.isArray(a)
        };
        c.Q = function (a) {
            if (c.k(a)) {
                for (var b in a)if (G.call(a, b))return s;
                return n
            }
            return s
        };
        c.d = function (a) {
            return void 0 === a
        };
        c.Wa = function (a) {
            return "[object String]" == D.call(a)
        };
        c.Fc = function (a) {
            return "[object Date]" == D.call(a)
        };
        c.Gc = function (a) {
            return "[object Number]" == D.call(a)
        };
        c.ub = function (a) {
            c.a(a, function (b, d) {
                c.Fc(b) ? a[d] = c.Bc(b) : c.k(b) && (a[d] = c.ub(b))
            });
            return a
        };
        c.Bc = function (a) {
            function b(a) {
                return 10 > a ? "0" + a : a
            }

            return a.getUTCFullYear() + "-" + b(a.getUTCMonth() + 1) + "-" +
                b(a.getUTCDate()) + "T" + b(a.getUTCHours()) + ":" + b(a.getUTCMinutes()) + ":" + b(a.getUTCSeconds())
        };
        c.m = function (a) {
            return function () {
                try {
                    a.apply(this, arguments)
                } catch (b) {
                    q.aa("Implementation error. Please contact support@mixpanel.com.")
                }
            }
        };
        c.Mc = function (a) {
            for (var b = ["identify", "_check_and_handle_notifications", "_show_notification"], d = 0; d < b.length; d++)a.prototype[b[d]] = c.m(a.prototype[b[d]])
        };
        c.ua = function (a) {
            var b = {};
            c.a(a, function (a, e) {
                c.Wa(a) && 0 < a.length && (b[e] = a)
            });
            return b
        };
        c.truncate = function (a, b) {
            var d;
            "string" === typeof a ? d = a.slice(0, b) : c.isArray(a) ? (d = [], c.a(a, function (a) {
                d.push(c.truncate(a, b))
            })) : c.k(a) ? (d = {}, c.a(a, function (a, f) {
                d[f] = c.truncate(a, b)
            })) : d = a;
            return d
        };
        c.ka = function () {
            return function (a) {
                function b(a, f) {
                    var k = "", j = 0, i = j = "", i = 0, g = k, h = [], r = f[a];
                    r && "object" === typeof r && "function" === typeof r.toJSON && (r = r.toJSON(a));
                    switch (typeof r) {
                        case "string":
                            return c(r);
                        case "number":
                            return isFinite(r) ? "" + r : "null";
                        case "boolean":
                        case "null":
                            return "" + r;
                        case "object":
                            if (!r)return "null";
                            k += "    ";
                            h =
                                [];
                            if ("[object Array]" === D.apply(r)) {
                                i = r.length;
                                for (j = 0; j < i; j += 1)h[j] = b(j, r) || "null";
                                return i = 0 === h.length ? "[]" : k ? "[\n" + k + h.join(",\n" + k) + "\n" + g + "]" : "[" + h.join(",") + "]"
                            }
                            for (j in r)G.call(r, j) && (i = b(j, r)) && h.push(c(j) + (k ? ": " : ":") + i);
                            return i = 0 === h.length ? "{}" : k ? "{" + h.join(",") + "" + g + "}" : "{" + h.join(",") + "}"
                    }
                }

                function c(a) {
                    var b = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, d = {
                        "\u0008": "\\b", "\t": "\\t", "\n": "\\n", "\u000c": "\\f",
                        "\r": "\\r", '"': '\\"', "\\": "\\\\"
                    };
                    b.lastIndex = 0;
                    return b.test(a) ? '"' + a.replace(b, function (a) {
                        var b = d[a];
                        return "string" === typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                    }) + '"' : '"' + a + '"'
                }

                return b("", {"": a})
            }
        }();
        c.ja = function () {
            function a() {
                switch (i) {
                    case "t":
                        return f("t"), f("r"), f("u"), f("e"), n;
                    case "f":
                        return f("f"), f("a"), f("l"), f("s"), f("e"), s;
                    case "n":
                        return f("n"), f("u"), f("l"), f("l"), p
                }
                k("Unexpected '" + i + "'")
            }

            function b() {
                for (; i && " " >= i;)f()
            }

            function c() {
                var a, b, d = "", e;
                if ('"' ===
                    i)for (; f();) {
                    if ('"' === i)return f(), d;
                    if ("\\" === i)if (f(), "u" === i) {
                        for (b = e = 0; 4 > b; b += 1) {
                            a = parseInt(f(), 16);
                            if (!isFinite(a))break;
                            e = 16 * e + a
                        }
                        d += String.fromCharCode(e)
                    } else if ("string" === typeof g[i])d += g[i]; else break; else d += i
                }
                k("Bad string")
            }

            function e() {
                var a;
                a = "";
                "-" === i && (a = "-", f("-"));
                for (; "0" <= i && "9" >= i;)a += i, f();
                if ("." === i)for (a += "."; f() && "0" <= i && "9" >= i;)a += i;
                if ("e" === i || "E" === i) {
                    a += i;
                    f();
                    if ("-" === i || "+" === i)a += i, f();
                    for (; "0" <= i && "9" >= i;)a += i, f()
                }
                a = +a;
                if (isFinite(a))return a;
                k("Bad number")
            }

            function f(a) {
                a &&
                a !== i && k("Expected '" + a + "' instead of '" + i + "'");
                i = h.charAt(j);
                j += 1;
                return i
            }

            function k(a) {
                throw{name: "SyntaxError", message: a, fd: j, text: h};
            }

            var j, i, g = {'"': '"', "\\": "\\", "/": "/", b: "\u0008", f: "\u000c", n: "\n", r: "\r", t: "\t"}, h, r;
            r = function () {
                b();
                switch (i) {
                    case "{":
                        var j;
                        a:{
                            var g, h = {};
                            if ("{" === i) {
                                f("{");
                                b();
                                if ("}" === i) {
                                    f("}");
                                    j = h;
                                    break a
                                }
                                for (; i;) {
                                    g = c();
                                    b();
                                    f(":");
                                    Object.hasOwnProperty.call(h, g) && k('Duplicate key "' + g + '"');
                                    h[g] = r();
                                    b();
                                    if ("}" === i) {
                                        f("}");
                                        j = h;
                                        break a
                                    }
                                    f(",");
                                    b()
                                }
                            }
                            k("Bad object")
                        }
                        return j;
                    case "[":
                        a:{
                            j = [];
                            if ("[" === i) {
                                f("[");
                                b();
                                if ("]" === i) {
                                    f("]");
                                    g = j;
                                    break a
                                }
                                for (; i;) {
                                    j.push(r());
                                    b();
                                    if ("]" === i) {
                                        f("]");
                                        g = j;
                                        break a
                                    }
                                    f(",");
                                    b()
                                }
                            }
                            k("Bad array")
                        }
                        return g;
                    case '"':
                        return c();
                    case "-":
                        return e();
                    default:
                        return "0" <= i && "9" >= i ? e() : a()
                }
            };
            return function (a) {
                h = a;
                j = 0;
                i = " ";
                a = r();
                b();
                i && k("Syntax error");
                return a
            }
        }();
        c.nb = function (a) {
            var b, d, e, f, k = 0, j = 0, i = "", i = [];
            if (!a)return a;
            a = c.bd(a);
            do b = a.charCodeAt(k++), d = a.charCodeAt(k++), e = a.charCodeAt(k++), f = b << 16 | d << 8 | e, b = f >> 18 & 63, d = f >> 12 & 63, e = f >> 6 & 63,
                f &= 63, i[j++] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(d) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(e) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f); while (k < a.length);
            i = i.join("");
            switch (a.length % 3) {
                case 1:
                    i = i.slice(0, -2) + "==";
                    break;
                case 2:
                    i = i.slice(0, -1) + "="
            }
            return i
        };
        c.bd = function (a) {
            var a = (a + "").replace(/\r\n/g, "\n").replace(/\r/g,
                "\n"), b = "", c, e, f = 0, k;
            c = e = 0;
            f = a.length;
            for (k = 0; k < f; k++) {
                var j = a.charCodeAt(k), i = p;
                128 > j ? e++ : i = 127 < j && 2048 > j ? String.fromCharCode(j >> 6 | 192, j & 63 | 128) : String.fromCharCode(j >> 12 | 224, j >> 6 & 63 | 128, j & 63 | 128);
                i !== p && (e > c && (b += a.substring(c, e)), b += i, c = e = k + 1)
            }
            e > c && (b += a.substring(c, a.length));
            return b
        };
        c.Yb = function () {
            function a() {
                function a(b, c) {
                    var d, f = 0;
                    for (d = 0; d < c.length; d++)f |= k[d] << 8 * d;
                    return b ^ f
                }

                var b, c, k = [], j = 0;
                for (b = 0; b < u.length; b++)c = u.charCodeAt(b), k.unshift(c & 255), 4 <= k.length && (j = a(j, k), k = []);
                0 < k.length &&
                (j = a(j, k));
                return j.toString(16)
            }

            function b() {
                for (var a = 1 * new Date, b = 0; a == 1 * new Date;)b++;
                return a.toString(16) + b.toString(16)
            }

            return function () {
                var c = (screen.height * screen.width).toString(16);
                return b() + "-" + Math.random().toString(16).replace(".", "") + "-" + a() + "-" + c + "-" + b()
            }
        }();
        c.Bb = function (a) {
            return /(google web preview|baiduspider|yandexbot|bingbot|googlebot|yahoo! slurp)/i.test(a) ? n : s
        };
        c.Xb = function (a) {
            var b, d, e, f = [];
            c.d(b) && (b = "&");
            c.a(a, function (a, b) {
                d = encodeURIComponent(a.toString());
                e = encodeURIComponent(b);
                f[f.length] = e + "=" + d
            });
            return f.join(b)
        };
        c.vb = function (a, b) {
            var b = b.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"), c = RegExp("[\\?&]" + b + "=([^&#]*)").exec(a);
            return c === p || c && "string" !== typeof c[1] && c[1].length ? "" : decodeURIComponent(c[1]).replace(/\+/g, " ")
        };
        c.cookie = {
            get: function (a) {
                for (var a = a + "=", b = m.cookie.split(";"), c = 0; c < b.length; c++) {
                    for (var e = b[c]; " " == e.charAt(0);)e = e.substring(1, e.length);
                    if (0 == e.indexOf(a))return decodeURIComponent(e.substring(a.length, e.length))
                }
                return p
            }, parse: function (a) {
                var b;
                try {
                    b = c.ja(c.cookie.get(a)) || {}
                } catch (d) {
                }
                return b
            }, set: function (a, b, c, e, f) {
                var d;
                var k = "", j = "", i = "";
                e && (d = (k = (k = m.location.hostname.match(/[a-z0-9][a-z0-9\-]+\.[a-z\.]{2,6}$/i)) ? k[0] : "") ? "; domain=." + k : "", k = d);
                c && (j = new Date, j.setTime(j.getTime() + 864E5 * c), j = "; expires=" + j.toGMTString());
                f && (i = "; secure");
                m.cookie = a + "=" + encodeURIComponent(b) + j + "; path=/" + k + i
            }, remove: function (a, b) {
                c.cookie.set(a, "", -1, b)
            }
        };
        c.localStorage = {
            error: function (a) {
                q.error("localStorage error: " + a)
            }, get: function (a) {
                try {
                    return window.localStorage.getItem(a)
                } catch (b) {
                    c.localStorage.error(b)
                }
                return p
            },
            parse: function (a) {
                try {
                    return c.ja(c.localStorage.get(a)) || {}
                } catch (b) {
                }
                return p
            }, set: function (a, b) {
                try {
                    window.localStorage.setItem(a, b)
                } catch (d) {
                    c.localStorage.error(d)
                }
            }, remove: function (a) {
                try {
                    window.localStorage.removeItem(a)
                } catch (b) {
                    c.localStorage.error(b)
                }
            }
        };
        c.R = function () {
            function a(a, e, f) {
                return function (k) {
                    if (k = k || b(window.event)) {
                        var j = n, i;
                        c.Cb(f) && (i = f(k));
                        k = e.call(a, k);
                        if (s === i || s === k)j = s;
                        return j
                    }
                }
            }

            function b(a) {
                if (a)a.preventDefault = b.preventDefault, a.stopPropagation = b.stopPropagation;
                return a
            }

            b.preventDefault = function () {
                this.returnValue = s
            };
            b.stopPropagation = function () {
                this.cancelBubble = n
            };
            return function (b, c, f, k) {
                b ? b.addEventListener && !k ? b.addEventListener(c, f, s) : (c = "on" + c, b[c] = a(b, f, b[c])) : q.error("No valid element provided to register_event")
            }
        }();
        c.zc = function () {
            function a(a, c) {
                return 0 <= (" " + a.className + " ").replace(b, " ").indexOf(" " + c + " ")
            }

            var b = /[\t\r\n]/g;
            return function (b) {
                if (!m.getElementsByTagName)return [];
                for (var b = b.split(" "), e, f = Array(m), k = 0; k < b.length; k++)if (e =
                        b[k].replace(/^\s+/, "").replace(/\s+$/, ""), -1 < e.indexOf("#")) {
                    var j = e.split("#");
                    e = j[0];
                    f = m.getElementById(j[1]);
                    if (!f || e && f.nodeName.toLowerCase() != e)return [];
                    f = Array(f)
                } else if (-1 < e.indexOf(".")) {
                    j = e.split(".");
                    e = j[0];
                    var i = j[1];
                    e || (e = "*");
                    for (var j = [], g = 0, h = 0; h < f.length; h++) {
                        var r;
                        r = "*" == e ? f[h].all ? f[h].all : f[h].getElementsByTagName("*") : f[h].getElementsByTagName(e);
                        for (var l = 0; l < r.length; l++)j[g++] = r[l]
                    }
                    f = [];
                    for (g = e = 0; g < j.length; g++)j[g].className && c.Wa(j[g].className) && a(j[g], i) && (f[e++] = j[g])
                } else if (j =
                        e.match(/^(\w*)\[(\w+)([=~\|\^\$\*]?)=?"?([^\]"]*)"?\]$/)) {
                    e = j[1];
                    var o = j[2], i = j[3], q = j[4];
                    e || (e = "*");
                    j = [];
                    for (h = g = 0; h < f.length; h++) {
                        r = "*" == e ? f[h].all ? f[h].all : f[h].getElementsByTagName("*") : f[h].getElementsByTagName(e);
                        for (l = 0; l < r.length; l++)j[g++] = r[l]
                    }
                    f = [];
                    e = 0;
                    switch (i) {
                        case "=":
                            i = function (a) {
                                return a.getAttribute(o) == q
                            };
                            break;
                        case "~":
                            i = function (a) {
                                return a.getAttribute(o).match(RegExp("\\b" + q + "\\b"))
                            };
                            break;
                        case "|":
                            i = function (a) {
                                return a.getAttribute(o).match(RegExp("^" + q + "-?"))
                            };
                            break;
                        case "^":
                            i =
                                function (a) {
                                    return 0 == a.getAttribute(o).indexOf(q)
                                };
                            break;
                        case "$":
                            i = function (a) {
                                return a.getAttribute(o).lastIndexOf(q) == a.getAttribute(o).length - q.length
                            };
                            break;
                        case "*":
                            i = function (a) {
                                return -1 < a.getAttribute(o).indexOf(q)
                            };
                            break;
                        default:
                            i = function (a) {
                                return a.getAttribute(o)
                            }
                    }
                    f = [];
                    for (g = e = 0; g < j.length; g++)i(j[g]) && (f[e++] = j[g])
                } else {
                    j = [];
                    for (h = g = 0; h < f.length; h++) {
                        r = f[h].getElementsByTagName(e);
                        for (l = 0; l < r.length; l++)j[g++] = r[l]
                    }
                    f = j
                }
                return f
            }
        }();
        c.info = {
            sc: function () {
                var a = "", b = {};
                c.a("utm_source utm_medium utm_campaign utm_content utm_term".split(" "),
                    function (d) {
                        a = c.vb(m.URL, d);
                        a.length && (b[d] = a)
                    });
                return b
            }, Nc: function (a) {
                return 0 === a.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === a.search("https?://(.*)bing.com") ? "bing" : 0 === a.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === a.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : p
            }, Oc: function (a) {
                var b = c.info.Nc(a), d = {};
                if (b !== p)d.$search_engine = b, a = c.vb(a, "yahoo" != b ? "q" : "p"), a.length && (d.mp_keyword = a);
                return d
            }, $: function (a, b, d) {
                return d || c.j(a, " OPR/") ? c.j(a, "Mini") ? "Opera Mini" : "Opera" : /(BlackBerry|PlayBook|BB10)/i.test(a) ?
                    "BlackBerry" : c.j(a, "IEMobile") || c.j(a, "WPDesktop") ? "Internet Explorer Mobile" : c.j(a, "Edge") ? "Microsoft Edge" : c.j(a, "FBIOS") ? "Facebook Mobile" : c.j(a, "Chrome") ? "Chrome" : c.j(a, "CriOS") ? "Chrome iOS" : c.j(b || "", "Apple") ? c.j(a, "Mobile") ? "Mobile Safari" : "Safari" : c.j(a, "Android") ? "Android Mobile" : c.j(a, "Konqueror") ? "Konqueror" : c.j(a, "Firefox") ? "Firefox" : c.j(a, "MSIE") || c.j(a, "Trident/") ? "Internet Explorer" : c.j(a, "Gecko") ? "Mozilla" : ""
            }, pb: function (a, b, d) {
                b = {
                    "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
                    "Microsoft Edge": /Edge\/(\d+(\.\d+)?)/,
                    Chrome: /Chrome\/(\d+(\.\d+)?)/,
                    "Chrome iOS": /Chrome\/(\d+(\.\d+)?)/,
                    Safari: /Version\/(\d+(\.\d+)?)/,
                    "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
                    Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
                    Firefox: /Firefox\/(\d+(\.\d+)?)/,
                    Konqueror: /Konqueror:(\d+(\.\d+)?)/,
                    BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
                    "Android Mobile": /android\s(\d+(\.\d+)?)/,
                    "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
                    Mozilla: /rv:(\d+(\.\d+)?)/
                }[c.info.$(a, b, d)];
                if (void 0 == b)return p;
                a = a.match(b);
                return !a ? p : parseFloat(a[a.length - 2])
            }, Za: function () {
                return /Windows/i.test(u) ?
                    /Phone/.test(u) || /WPDesktop/.test(u) ? "Windows Phone" : "Windows" : /(iPhone|iPad|iPod)/.test(u) ? "iOS" : /Android/.test(u) ? "Android" : /(BlackBerry|PlayBook|BB10)/i.test(u) ? "BlackBerry" : /Mac/i.test(u) ? "Mac OS X" : /Linux/.test(u) ? "Linux" : ""
            }, tb: function (a) {
                return /Windows Phone/i.test(a) || /WPDesktop/.test(a) ? "Windows Phone" : /iPad/.test(a) ? "iPad" : /iPod/.test(a) ? "iPod Touch" : /iPhone/.test(a) ? "iPhone" : /(BlackBerry|PlayBook|BB10)/i.test(a) ? "BlackBerry" : /Android/.test(a) ? "Android" : ""
            }, Ib: function (a) {
                a = a.split("/");
                return 3 <= a.length ? a[2] : ""
            }, ea: function () {
                return c.extend(c.ua({
                    $os: c.info.Za(),
                    $browser: c.info.$(u, z.vendor, window.opera),
                    $referrer: m.referrer,
                    $referring_domain: c.info.Ib(m.referrer),
                    $device: c.info.tb(u)
                }), {
                    $current_url: window.location.href,
                    $browser_version: c.info.pb(u, z.vendor, window.opera),
                    $screen_height: screen.height,
                    $screen_width: screen.width,
                    mp_lib: "web",
                    $lib_version: "2.7.1"
                })
            }, Kc: function () {
                return c.extend(c.ua({$os: c.info.Za(), $browser: c.info.$(u, z.vendor, window.opera)}), {
                    $browser_version: c.info.pb(u,
                        z.vendor, window.opera)
                })
            }, Jc: function (a) {
                return c.ua({
                    mp_page: a,
                    mp_referrer: m.referrer,
                    mp_browser: c.info.$(u, z.vendor, window.opera),
                    mp_platform: c.info.Za()
                })
            }
        };
        var q = {
            log: function () {
                if (y && !c.d(v) && v)try {
                    v.log.apply(v, arguments)
                } catch (a) {
                    c.a(arguments, function (a) {
                        v.log(a)
                    })
                }
            }, error: function () {
                if (y && !c.d(v) && v) {
                    var a = ["Mixpanel error:"].concat(c.ga(arguments));
                    try {
                        v.error.apply(v, a)
                    } catch (b) {
                        c.a(a, function (a) {
                            v.error(a)
                        })
                    }
                }
            }, aa: function () {
                if (!c.d(v) && v) {
                    var a = ["Mixpanel error:"].concat(c.ga(arguments));
                    try {
                        v.error.apply(v, a)
                    } catch (b) {
                        c.a(a, function (a) {
                            v.error(a)
                        })
                    }
                }
            }
        };
        w.prototype.ra = C();
        w.prototype.Qa = C();
        w.prototype.Ma = C();
        w.prototype.Va = function (a) {
            this.Fb = a;
            return this
        };
        w.prototype.T = function (a, b, d, e) {
            var f = this, k = c.zc(a);
            if (0 == k.length)q.error("The DOM query (" + a + ") returned 0 elements"); else return c.a(k, function (a) {
                c.R(a, this.Hb, function (a) {
                    var c = {}, j = f.ra(d, this), k = f.Fb.e("track_links_timeout");
                    f.Qa(a, this, c);
                    window.setTimeout(f.Ob(e, j, c, n), k);
                    f.Fb.T(b, j, f.Ob(e, j, c))
                })
            }, this), n
        };
        w.prototype.Ob =
            function (a, b, c, e) {
                var e = e || s, f = this;
                return function () {
                    if (!c.rc)c.rc = n, a && a(e, b) === s || f.Ma(b, c, e)
                }
            };
        w.prototype.ra = function (a, b) {
            return "function" === typeof a ? a(b) : c.extend({}, a)
        };
        c.Ab(A, w);
        A.prototype.ra = function (a, b) {
            var c = A.Vc.ra.apply(this, arguments);
            if (b.href)c.url = b.href;
            return c
        };
        A.prototype.Qa = function (a, b, c) {
            c.Gb = 2 === a.which || a.metaKey || a.ctrlKey || "_blank" === b.target;
            c.href = b.href;
            c.Gb || a.preventDefault()
        };
        A.prototype.Ma = function (a, b) {
            b.Gb || setTimeout(function () {
                window.location = b.href
            }, 0)
        };
        c.Ab(F, w);
        F.prototype.Qa = function (a, b, c) {
            c.element = b;
            a.preventDefault()
        };
        F.prototype.Ma = function (a, b) {
            setTimeout(function () {
                b.element.submit()
            }, 0)
        };
        l.prototype.ea = function () {
            var a = {};
            c.a(this.props, function (b, d) {
                c.yb(R, d) || (a[d] = b)
            });
            return a
        };
        l.prototype.load = function () {
            if (!this.disabled) {
                var a = this.v.parse(this.name);
                a && (this.props = c.extend({}, a))
            }
        };
        l.prototype.ad = function (a) {
            var b = a.upgrade, d;
            if (b)d = "mp_super_properties", "string" === typeof b && (d = b), b = this.v.parse(d), this.v.remove(d), this.v.remove(d,
                n), b && (this.props = c.extend(this.props, b.all, b.events));
            if (!a.cookie_name && "mixpanel" !== a.name && (d = "mp_" + a.token + "_" + a.name, b = this.v.parse(d)))this.v.remove(d), this.v.remove(d, n), this.G(b);
            this.v === c.localStorage && (b = c.cookie.parse(this.name), c.cookie.remove(this.name), c.cookie.remove(this.name, n), b && this.G(b))
        };
        l.prototype.save = function () {
            this.disabled || (this.ec(), this.v.set(this.name, c.ka(this.props), this.Ra, this.Oa, this.Jb))
        };
        l.prototype.remove = function () {
            this.v.remove(this.name, s);
            this.v.remove(this.name,
                n)
        };
        l.prototype.clear = function () {
            this.remove();
            this.props = {}
        };
        l.prototype.G = function (a, b, d) {
            return c.k(a) ? ("undefined" === typeof b && (b = "None"), this.Ra = "undefined" === typeof d ? this.sb : d, c.a(a, function (a, c) {
                if (!this.props[c] || this.props[c] === b)this.props[c] = a
            }, this), this.save(), n) : s
        };
        l.prototype.fa = function (a, b) {
            return c.k(a) ? (this.Ra = "undefined" === typeof b ? this.sb : b, c.extend(this.props, a), this.save(), n) : s
        };
        l.prototype.xa = function (a) {
            a in this.props && (delete this.props[a], this.save())
        };
        l.prototype.ec =
            c.m(function () {
                var a = this.props.__cmpns, b = y ? 6E4 : 36E5;
                if (a) {
                    for (var d in a)1 * new Date - a[d] > b && delete a[d];
                    c.Q(a) && delete this.props.__cmpns
                }
            });
        l.prototype.$c = function () {
            if (!this.qb)this.G(c.info.sc()), this.qb = n
        };
        l.prototype.Sb = function (a) {
            this.fa(c.info.Oc(a))
        };
        l.prototype.bb = function (a) {
            this.G({$initial_referrer: a || "$direct", $initial_referring_domain: c.info.Ib(a) || "$direct"}, "")
        };
        l.prototype.Dc = function () {
            return c.ua({
                $initial_referrer: this.props.$initial_referrer,
                $initial_referring_domain: this.props.$initial_referring_domain
            })
        };
        l.prototype.Rb = function (a) {
            this.sb = this.Ra = a.cookie_expiration;
            this.Qc(a.disable_persistence);
            this.Pc(a.cross_subdomain_cookie);
            this.Sc(a.secure_cookie)
        };
        l.prototype.Qc = function (a) {
            (this.disabled = a) && this.remove()
        };
        l.prototype.Pc = function (a) {
            if (a !== this.Oa)this.Oa = a, this.remove(), this.save()
        };
        l.prototype.Cc = function () {
            return this.Oa
        };
        l.prototype.Sc = function (a) {
            if (a !== this.Jb)this.Jb = a ? n : s, this.remove(), this.save()
        };
        l.prototype.A = function (a, b) {
            var d = this.Ga(a), e = b[a], f = this.X("$set"), k = this.X("$set_once"),
                j = this.X("$add"), i = this.X("$union"), g = this.X("$append", []);
            "__mps" === d ? (c.extend(f, e), this.O("$add", e), this.O("$union", e)) : "__mpso" === d ? c.a(e, function (a, b) {
                b in k || (k[b] = a)
            }) : "__mpa" === d ? c.a(e, function (a, b) {
                b in f ? f[b] += a : (b in j || (j[b] = 0), j[b] += a)
            }, this) : "__mpu" === d ? c.a(e, function (a, b) {
                c.isArray(a) && (b in i || (i[b] = []), i[b] = i[b].concat(a))
            }) : "__mpap" === d && g.push(e);
            q.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):");
            q.log(b);
            this.save()
        };
        l.prototype.O = function (a, b) {
            var d = this.N(a);
            c.d(d) ||
            (c.a(b, function (a, b) {
                delete d[b]
            }, this), this.save())
        };
        l.prototype.Ga = function (a) {
            if ("$set" === a)return "__mps";
            if ("$set_once" === a)return "__mpso";
            if ("$add" === a)return "__mpa";
            if ("$append" === a)return "__mpap";
            if ("$union" === a)return "__mpu";
            q.error("Invalid queue:", a)
        };
        l.prototype.N = function (a) {
            return this.props[this.Ga(a)]
        };
        l.prototype.X = function (a, b) {
            var d = this.Ga(a), b = c.d(b) ? {} : b;
            return this.props[d] || (this.props[d] = b)
        };
        l.prototype.Rc = function (a) {
            var b = this.props.__timers || {};
            b[a] = (new Date).getTime();
            this.props.__timers = b;
            this.save()
        };
        l.prototype.Lc = function (a) {
            var b = (this.props.__timers || {})[a];
            c.d(b) || (delete this.props.__timers[a], this.save());
            return b
        };
        h.prototype.Va = function (a, b, d) {
            if (c.d(d))q.error("You must name your new library: init(token, config, name)"); else if ("mixpanel" === d)q.error("You must initialize the main mixpanel object right after you include the Mixpanel js snippet"); else return a = E(a, b, d), t[d] = a, a.oa(), a
        };
        h.prototype.Ha = function (a, b, d) {
            this.__loaded = n;
            this.config = {};
            this.Kb(c.extend({},
                S, b, {name: d, token: a, callback_fn: ("mixpanel" === d ? d : "mixpanel." + d) + "._jsc"}));
            this._jsc = C();
            this.Da = [];
            this.Ea = [];
            this.Ca = [];
            this.W = {disable_all_events: s, identify_called: s};
            this.persistence = this.cookie = new l(this.config);
            this.G({distinct_id: c.Yb()}, "")
        };
        h.prototype.oa = function () {
            this.e("loaded")(this);
            this.e("track_pageview") && this.Pb()
        };
        h.prototype.cc = function () {
            c.a(this.Da, function (a) {
                this.Ka.apply(this, a)
            }, this);
            c.a(this.Ea, function (a) {
                this.q.apply(this, a)
            }, this);
            delete this.Da;
            delete this.Ea
        };
        h.prototype.Ka =
            function (a, b) {
                if (this.e("img"))return q.error("You can't use DOM tracking functions with img = true."), s;
                if (!K)return this.Da.push([a, b]), s;
                var c = (new a).Va(this);
                return c.T.apply(c, b)
            };
        h.prototype.Ia = function (a, b) {
            if (c.d(a))return p;
            if (H)return function (c) {
                a(c, b)
            };
            var d = this._jsc, e = "" + Math.floor(1E8 * Math.random()), f = this.e("callback_fn") + '["' + e + '"]';
            d[e] = function (c) {
                delete d[e];
                a(c, b)
            };
            return f
        };
        h.prototype.q = function (a, b, d) {
            if (L)this.Ea.push(arguments); else {
                var e = this.e("verbose");
                b.verbose && (e =
                    n);
                this.e("test") && (b.test = 1);
                e && (b.verbose = 1);
                this.e("img") && (b.img = 1);
                if (!H)if (d)b.callback = d; else if (e || this.e("test"))b.callback = "(function(){})";
                b.ip = this.e("ip") ? 1 : 0;
                b._ = (new Date).getTime().toString();
                a += "?" + c.Xb(b);
                if ("img" in b) {
                    var f = m.createElement("img");
                    f.src = a;
                    m.body.appendChild(f)
                } else if (H) {
                    var g = new XMLHttpRequest;
                    g.open("GET", a, n);
                    g.withCredentials = n;
                    g.onreadystatechange = function () {
                        if (4 === g.readyState)if (200 === g.status)d && (e ? d(c.ja(g.responseText)) : d(Number(g.responseText))); else {
                            var a =
                                "Bad HTTP status: " + g.status + " " + g.statusText;
                            q.error(a);
                            d && (e ? d({status: 0, error: a}) : d(0))
                        }
                    };
                    g.send(p)
                } else {
                    f = m.createElement("script");
                    f.type = "text/javascript";
                    f.async = n;
                    f.defer = n;
                    f.src = a;
                    var j = m.getElementsByTagName("script")[0];
                    j.parentNode.insertBefore(f, j)
                }
            }
        };
        h.prototype.Fa = function (a) {
            function b(a, b) {
                c.a(a, function (a) {
                    this[a[0]].apply(this, a.slice(1))
                }, b)
            }

            var d, e = [], f = [], g = [];
            c.a(a, function (a) {
                a && (d = a[0], "function" === typeof a ? a.call(this) : c.isArray(a) && "alias" === d ? e.push(a) : c.isArray(a) && -1 !=
                d.indexOf("track") && "function" === typeof this[d] ? g.push(a) : f.push(a))
            }, this);
            b(e, this);
            b(f, this);
            b(g, this)
        };
        h.prototype.push = function (a) {
            this.Fa([a])
        };
        h.prototype.disable = function (a) {
            "undefined" === typeof a ? this.W.wc = n : this.Ca = this.Ca.concat(a)
        };
        h.prototype.T = function (a, b, d) {
            if (c.d(a))q.error("No event name provided to mixpanel.track"); else if (this.eb(a))"undefined" !== typeof d && d(0); else {
                b = b || {};
                b.token = this.e("token");
                var e = this.persistence.Lc(a);
                c.d(e) || (b.$duration = parseFloat((((new Date).getTime() -
                e) / 1E3).toFixed(3)));
                this.persistence.Sb(m.referrer);
                this.e("store_google") && this.persistence.$c();
                this.e("save_referrer") && this.persistence.bb(m.referrer);
                b = c.extend({}, c.info.ea(), this.persistence.ea(), b);
                e = this.e("property_blacklist");
                c.isArray(e) ? c.a(e, function (a) {
                    delete b[a]
                }) : q.error("Invalid value for property_blacklist config: " + e);
                a = c.truncate({event: a, properties: b}, 255);
                e = c.ka(a);
                e = c.nb(e);
                q.log("MIXPANEL REQUEST:");
                q.log(a);
                this.q(this.e("api_host") + "/track/", {data: e}, this.Ia(d, a));
                return a
            }
        };
        h.prototype.Pb = function (a) {
            if (c.d(a))a = m.location.href;
            this.T("mp_page_view", c.info.Jc(a))
        };
        h.prototype.Zc = function () {
            return this.Ka.call(this, A, arguments)
        };
        h.prototype.Yc = function () {
            return this.Ka.call(this, F, arguments)
        };
        h.prototype.Wc = function (a) {
            c.d(a) ? q.error("No event name provided to mixpanel.time_event") : this.eb(a) || this.persistence.Rc(a)
        };
        h.prototype.fa = function (a, b) {
            this.persistence.fa(a, b)
        };
        h.prototype.G = function (a, b, c) {
            this.persistence.G(a, b, c)
        };
        h.prototype.xa = function (a) {
            this.persistence.xa(a)
        };
        h.prototype.Ja = function (a, b) {
            var c = {};
            c[a] = b;
            this.fa(c)
        };
        h.prototype.Ta = function (a, b, c, e, f, g) {
            a != this.P() && a != this.sa("__alias") && (this.xa("__alias"), this.Ja("distinct_id", a));
            this.cb(this.P());
            this.W.wb = n;
            this.people.fc(b, c, e, f, g)
        };
        h.prototype.P = function () {
            return this.sa("distinct_id")
        };
        h.prototype.oc = function (a, b) {
            if (a === this.sa("$people_distinct_id"))return q.aa("Attempting to create alias for existing People user - aborting."), -2;
            var d = this;
            c.d(b) && (b = this.P());
            if (a !== b)return this.Ja("__alias",
                a), this.T("$create_alias", {alias: a, distinct_id: b}, function () {
                d.Ta(a)
            });
            q.error("alias matches current distinct_id - skipping api call.");
            this.Ta(a);
            return -1
        };
        h.prototype.Hc = function (a) {
            this.Ja("mp_name_tag", a)
        };
        h.prototype.Kb = function (a) {
            if (c.k(a))c.extend(this.config, a), this.e("persistence_name") || (this.config.persistence_name = this.config.cookie_name), this.e("disable_persistence") || (this.config.disable_persistence = this.config.disable_cookie), this.persistence && this.persistence.Rb(this.config), y = y ||
                this.e("debug")
        };
        h.prototype.e = function (a) {
            return this.config[a]
        };
        h.prototype.sa = function (a) {
            return this.persistence.props[a]
        };
        h.prototype.toString = function () {
            var a = this.e("name");
            "mixpanel" !== a && (a = "mixpanel." + a);
            return a
        };
        h.prototype.eb = function (a) {
            return c.Bb(u) || this.W.wc || c.yb(this.Ca, a)
        };
        h.prototype.cb = function (a) {
            if (a && !this.W.wb && !this.e("disable_notifications")) {
                q.log("MIXPANEL NOTIFICATION CHECK");
                var b = this;
                this.q(this.e("api_host") + "/decide/", {
                    verbose: n, version: "1", lib: "web", token: this.e("token"),
                    distinct_id: a
                }, this.Ia(function (a) {
                    a.notifications && 0 < a.notifications.length && b.lb.call(b, a.notifications[0])
                }))
            }
        };
        h.prototype.lb = function (a) {
            (new g(a, this)).show()
        };
        o.prototype.Ha = function (a) {
            this.c = a
        };
        o.prototype.set = function (a, b, d) {
            var e = {}, f = {};
            c.k(a) ? (c.a(a, function (a, b) {
                this.Y(b) || (f[b] = a)
            }, this), d = b) : f[a] = b;
            this.na("save_referrer") && this.c.persistence.bb(m.referrer);
            f = c.extend({}, c.info.Kc(), this.c.persistence.Dc(), f);
            e.$set = f;
            return this.q(e, d)
        };
        o.prototype.Lb = function (a, b, d) {
            var e = {}, f = {};
            c.k(a) ? (c.a(a, function (a, b) {
                this.Y(b) || (f[b] = a)
            }, this), d = b) : f[a] = b;
            e.$set_once = f;
            return this.q(e, d)
        };
        o.prototype.zb = function (a, b, d) {
            var e = {}, f = {};
            c.k(a) ? (c.a(a, function (a, b) {
                this.Y(b) || (isNaN(parseFloat(a)) ? q.error("Invalid increment value passed to mixpanel.people.increment - must be a number") : f[b] = a)
            }, this), d = b) : (c.d(b) && (b = 1), f[a] = b);
            e.$add = f;
            return this.q(e, d)
        };
        o.prototype.append = function (a, b, d) {
            var e = {}, f = {};
            c.k(a) ? (c.a(a, function (a, b) {
                this.Y(b) || (f[b] = a)
            }, this), d = b) : f[a] = b;
            e.$append = f;
            return this.q(e,
                d)
        };
        o.prototype.Qb = function (a, b, d) {
            var e = {}, f = {};
            c.k(a) ? (c.a(a, function (a, b) {
                this.Y(b) || (f[b] = c.isArray(a) ? a : [a])
            }, this), d = b) : f[a] = c.isArray(b) ? b : [b];
            e.$union = f;
            return this.q(e, d)
        };
        o.prototype.Xc = function (a, b, d) {
            if (!c.Gc(a) && (a = parseFloat(a), isNaN(a))) {
                q.error("Invalid value passed to mixpanel.people.track_charge - must be a number");
                return
            }
            return this.append("$transactions", c.extend({$amount: a}, b), d)
        };
        o.prototype.tc = function (a) {
            return this.set("$transactions", [], a)
        };
        o.prototype.vc = function () {
            if (this.gb())return this.q({$delete: this.c.P()});
            q.error("mixpanel.people.delete_user() requires you to call identify() first")
        };
        o.prototype.toString = function () {
            return this.c.toString() + ".people"
        };
        o.prototype.q = function (a, b) {
            a.$token = this.na("token");
            a.$distinct_id = this.c.P();
            var d = c.ub(a), e = c.truncate(d, 255), d = c.ka(d), d = c.nb(d);
            if (!this.gb())return this.dc(a), c.d(b) || (this.na("verbose") ? b({status: -1, error: p}) : b(-1)), e;
            q.log("MIXPANEL PEOPLE REQUEST:");
            q.log(e);
            this.c.q(this.na("api_host") + "/engage/", {data: d}, this.c.Ia(b, e));
            return e
        };
        o.prototype.na =
            function (a) {
                return this.c.e(a)
            };
        o.prototype.gb = function () {
            return this.c.W.wb === n
        };
        o.prototype.dc = function (a) {
            "$set" in a ? this.c.persistence.A("$set", a) : "$set_once" in a ? this.c.persistence.A("$set_once", a) : "$add" in a ? this.c.persistence.A("$add", a) : "$append" in a ? this.c.persistence.A("$append", a) : "$union" in a ? this.c.persistence.A("$union", a) : q.error("Invalid call to _enqueue():", a)
        };
        o.prototype.fc = function (a, b, d, e, f) {
            var g = this, j = c.extend({}, this.c.persistence.N("$set")), i = c.extend({}, this.c.persistence.N("$set_once")),
                h = c.extend({}, this.c.persistence.N("$add")), l = this.c.persistence.N("$append"), m = c.extend({}, this.c.persistence.N("$union"));
            !c.d(j) && c.k(j) && !c.Q(j) && (g.c.persistence.O("$set", j), this.set(j, function (b, d) {
                0 == b && g.c.persistence.A("$set", j);
                c.d(a) || a(b, d)
            }));
            !c.d(i) && c.k(i) && !c.Q(i) && (g.c.persistence.O("$set_once", i), this.Lb(i, function (a, b) {
                0 == a && g.c.persistence.A("$set_once", i);
                c.d(e) || e(a, b)
            }));
            !c.d(h) && c.k(h) && !c.Q(h) && (g.c.persistence.O("$add", h), this.zb(h, function (a, d) {
                0 == a && g.c.persistence.A("$add",
                    h);
                c.d(b) || b(a, d)
            }));
            !c.d(m) && c.k(m) && !c.Q(m) && (g.c.persistence.O("$union", m), this.Qb(m, function (a, b) {
                0 == a && g.c.persistence.A("$union", m);
                c.d(f) || f(a, b)
            }));
            if (!c.d(l) && c.isArray(l) && l.length) {
                for (var o = l.length - 1; 0 <= o; o--) {
                    var q = l.pop();
                    g.append(q, function (a, b) {
                        0 == a && g.c.persistence.A("$append", q);
                        c.d(d) || d(a, b)
                    })
                }
                g.c.persistence.save()
            }
        };
        o.prototype.Y = function (a) {
            return "$distinct_id" === a || "$token" === a
        };
        h.ac = function (a, b) {
            c.pc(this);
            this.Ya = b;
            this.$a = this.Ya.persistence;
            this.C = c.s(a.id);
            this.Eb = c.s(a.message_id);
            this.body = (c.s(a.body) || "").replace(/\n/g, "<br/>");
            this.uc = c.s(a.cta) || "Close";
            this.ba = c.s(a.cta_url) || p;
            this.Ua = c.s(a.image_url) || p;
            this.ca = c.s(a.type) || "takeover";
            this.style = c.s(a.style) || "light";
            this.I = c.s(a.thumb_image_url) || p;
            this.title = c.s(a.title) || "";
            this.ya = c.s(a.video_url) || p;
            this.ha = g.$b;
            this.U = g.Zb;
            this.qa = n;
            if (!this.ba)this.ba = "#dismiss", this.qa = s;
            this.u = "mini" === this.ca;
            if (!this.u)this.ca = "takeover";
            this.Ic = !this.u ? g.V : g.za;
            this.kb();
            this.ta = this.gc();
            this.jc()
        };
        var g = h.ac;
        g.J = 200;
        g.w =
            "mixpanel-notification";
        g.ia = 0.6;
        g.F = 25;
        g.la = 200;
        g.V = 388;
        g.za = 420;
        g.z = 85;
        g.Aa = 5;
        g.H = 60;
        g.Ba = Math.round(g.H / 2);
        g.$b = 595;
        g.Zb = 334;
        g.prototype.show = function () {
            var a = this;
            this.kb();
            this.o ? (this.ic(), this.hc(), this.kc(this.bc)) : setTimeout(function () {
                a.show()
            }, 300)
        };
        g.prototype.Pa = c.m(function () {
            this.Db || this.ib({invisible: n});
            var a = this.Tc ? this.h("video") : this.M();
            if (this.Tb)this.lc("bg", "visible"), this.K(a, "exiting"), setTimeout(this.jb, g.J); else {
                var b, c, e;
                this.u ? (b = "right", c = 20, e = -100) : (b = "top", c = g.F,
                    e = g.la + g.F);
                this.ma([{p: this.h("bg"), l: "opacity", start: g.ia, i: 0}, {
                    p: a,
                    l: "opacity",
                    start: 1,
                    i: 0
                }, {p: a, l: b, start: c, i: e}], g.J, this.jb)
            }
        });
        g.prototype.K = c.m(function (a, b) {
            b = g.w + "-" + b;
            "string" === typeof a && (a = this.h(a));
            a.className ? ~(" " + a.className + " ").indexOf(" " + b + " ") || (a.className += " " + b) : a.className = b
        });
        g.prototype.lc = c.m(function (a, b) {
            b = g.w + "-" + b;
            "string" === typeof a && (a = this.h(a));
            if (a.className)a.className = (" " + a.className + " ").replace(" " + b + " ", "").replace(/^[\s\xA0]+/, "").replace(/[\s\xA0]+$/,
                "")
        });
        g.prototype.ma = c.m(function (a, b, c, e) {
            var f = this, g = s, j, i;
            j = 1 * new Date;
            var h, e = e || j;
            h = j - e;
            for (j = 0; j < a.length; j++) {
                i = a[j];
                if ("undefined" === typeof i.D)i.D = i.start;
                if (i.D !== i.i) {
                    var g = n, l = i.i >= i.start ? 1 : -1;
                    i.D = i.start + (i.i - i.start) * h / b;
                    if ("opacity" !== i.l)i.D = Math.round(i.D);
                    if (0 < l && i.D >= i.i || 0 > l && i.D <= i.i)i.D = i.i
                }
            }
            if (g) {
                for (j = 0; j < a.length; j++)i = a[j], i.p && (i.p.style[i.l] = "" + i.D + ("opacity" === i.l ? "" : "px"));
                setTimeout(function () {
                    f.ma(a, b, c, e)
                }, 10)
            } else c && c()
        });
        g.prototype.bc = c.m(function () {
            var a = this;
            if (!this.Uc && !this.fb()[this.C])this.Uc = n, this.o.appendChild(this.da), setTimeout(function () {
                var b = a.M();
                if (a.Tb)a.u || a.K("bg", "visible"), a.K(b, "visible"), a.hb(); else {
                    var c, e, f;
                    a.u ? (c = "right", e = -100, f = 20) : (c = "top", e = g.la + g.F, f = g.F);
                    a.ma([{p: a.h("bg"), l: "opacity", start: 0, i: g.ia}, {p: b, l: "opacity", start: 0, i: 1}, {
                        p: b,
                        l: c,
                        start: e,
                        i: f
                    }], g.J, a.hb)
                }
            }, 100), c.R(a.h("cancel"), "click", function (b) {
                b.preventDefault();
                a.Pa()
            }), c.R(a.h("button") || a.h("mini-content"), "click", function (b) {
                b.preventDefault();
                a.S ? (a.La("$campaign_open",
                    {$resource_type: "video"}), a.mc()) : (a.Pa(), a.qa && a.La("$campaign_open", {$resource_type: "link"}, function () {
                    window.location.href = a.ba
                }))
            })
        });
        g.prototype.h = function (a) {
            return m.getElementById(g.w + "-" + a)
        };
        g.prototype.M = function () {
            return this.h(this.ca)
        };
        g.prototype.fb = function () {
            return this.$a.props.__cmpns || (this.$a.props.__cmpns = {})
        };
        g.prototype.L = function (a, b) {
            return this.B[a] && this.B[a] <= b
        };
        g.prototype.gc = function () {
            var a = [];
            this.u ? (this.I = this.I || "//cdn.mxpnl.com/site_media/images/icons/notifications/mini-news-dark.png",
                a.push(this.I)) : (this.Ua ? (a.push(this.Ua), this.xb = '<img id="img" src="' + this.Ua + '"/>') : this.xb = "", this.I ? (a.push(this.I), this.Nb = '<div id="thumbborder-wrapper"><div id="thumbborder"></div></div><img id="thumbnail" src="' + this.I + '" width="' + g.H + '" height="' + g.H + '"/><div id="thumbspacer"></div>') : this.Nb = "");
            return a
        };
        g.prototype.hc = function () {
            var a = "", b = "", c = "";
            this.da = m.createElement("div");
            this.da.id = g.w + "-wrapper";
            if (this.u)a = '<div id="mini"><div id="mainbox"><div id="cancel"><div id="cancel-icon"></div></div><div id="mini-content"><div id="mini-icon"><div id="mini-icon-img"></div></div><div id="body"><div id="body-text"><div>' +
                this.body + '</div></div></div></div></div><div id="mini-border"></div></div>'; else {
                var a = this.qa || this.S ? "" : '<div id="button-close"></div>', e = this.S ? '<div id="button-play"></div>' : "";
                this.L("ie", 7) && (e = a = "");
                a = '<div id="takeover">' + this.Nb + '<div id="mainbox"><div id="cancel"><div id="cancel-icon"></div></div><div id="content">' + this.xb + '<div id="title">' + this.title + '</div><div id="body">' + this.body + '</div><div id="tagline"><a href="http://mixpanel.com?from=inapp" target="_blank">POWERED BY MIXPANEL</a></div></div><div id="button">' +
                    a + '<a id="button-link" href="' + this.ba + '">' + this.uc + "</a>" + e + "</div></div></div>"
            }
            this.Vb ? (b = "//www.youtube.com/embed/" + this.Vb + "?wmode=transparent&showinfo=0&modestbranding=0&rel=0&autoplay=1&loop=0&vq=hd1080", this.Wb && (b += "&enablejsapi=1&html5=1&controls=0", c = '<div id="video-controls"><div id="video-progress" class="video-progress-el"><div id="video-progress-total" class="video-progress-el"></div><div id="video-elapsed" class="video-progress-el"></div></div><div id="video-time" class="video-progress-el"></div></div>')) :
            this.Ub && (b = "//player.vimeo.com/video/" + this.Ub + "?autoplay=1&title=0&byline=0&portrait=0");
            if (this.S)this.dd = '<iframe id="' + g.w + '-video-frame" width="' + this.ha + '" height="' + this.U + '"  src="' + b + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen="1" scrolling="no"></iframe>', c = '<div id="video-' + (this.Sa ? "" : "no") + 'flip"><div id="video"><div id="video-holder"></div>' + c + "</div></div>";
            b = c + a;
            this.Sa && (b = (this.u ? a : "") + '<div id="flipcontainer"><div id="flipper">' + (this.u ? c : b) + "</div></div>");
            this.da.innerHTML = ('<div id="overlay" class="' + this.ca + '"><div id="campaignid-' + this.C + '"><div id="bgwrapper"><div id="bg"></div>' + b + "</div></div></div>").replace(/class=\"/g, 'class="' + g.w + "-").replace(/id=\"/g, 'id="' + g.w + "-")
        };
        g.prototype.ic = function () {
            this.g = "dark" === this.style ? {
                Na: "#1d1f25",
                Z: "#282b32",
                pa: "#3a4147",
                ob: "#4a5157",
                qc: "#32353c",
                rb: "0.4",
                Xa: "#2a3137",
                wa: "#fff",
                ab: "#9498a3",
                Mb: "#464851",
                va: "#ddd"
            } : {
                Na: "#fff",
                Z: "#e7eaee",
                pa: "#eceff3",
                ob: "#f5f5f5",
                qc: "#e4ecf2",
                rb: "1.0",
                Xa: "#fafafa",
                wa: "#5c6578",
                ab: "#8b949b",
                Mb: "#ced9e6",
                va: "#7c8598"
            };
            var a = "0px 0px 35px 0px rgba(45, 49, 56, 0.7)", b = a, d = a, e = g.H + 2 * g.Aa, f = g.J / 1E3 + "s";
            this.u && (a = "none");
            var h = {};
            h["@media only screen and (max-width: " + (g.za + 20 - 1) + "px)"] = {"#overlay": {display: "none"}};
            a = {
                ".flipped": {transform: "rotateY(180deg)"},
                "#overlay": {
                    position: "fixed",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    overflow: "auto",
                    "text-align": "center",
                    "z-index": "10000",
                    "font-family": '"Helvetica", "Arial", sans-serif',
                    "-webkit-font-smoothing": "antialiased",
                    "-moz-osx-font-smoothing": "grayscale"
                },
                "#overlay.mini": {height: "0", overflow: "visible"},
                "#overlay a": {
                    width: "initial",
                    padding: "0",
                    "text-decoration": "none",
                    "text-transform": "none",
                    color: "inherit"
                },
                "#bgwrapper": {position: "relative", width: "100%", height: "100%"},
                "#bg": {
                    position: "fixed",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    "min-width": 4 * this.yc + "px",
                    "min-height": 4 * this.xc + "px",
                    "background-color": "black",
                    opacity: "0.0",
                    "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)",
                    filter: "alpha(opacity=60)",
                    transition: "opacity " + f
                },
                "#bg.visible": {opacity: g.ia},
                ".mini #bg": {width: "0", height: "0", "min-width": "0"},
                "#flipcontainer": {perspective: "1000px", position: "absolute", width: "100%"},
                "#flipper": {position: "relative", "transform-style": "preserve-3d", transition: "0.3s"},
                "#takeover": {
                    position: "absolute",
                    left: "50%",
                    width: g.V + "px",
                    "margin-left": Math.round(-g.V / 2) + "px",
                    "backface-visibility": "hidden",
                    transform: "rotateY(0deg)",
                    opacity: "0.0",
                    top: g.la + "px",
                    transition: "opacity " + f + ", top " + f
                },
                "#takeover.visible": {opacity: "1.0", top: g.F + "px"},
                "#takeover.exiting": {opacity: "0.0", top: g.la + "px"},
                "#thumbspacer": {height: g.Ba + "px"},
                "#thumbborder-wrapper": {
                    position: "absolute",
                    top: -g.Aa + "px",
                    left: g.V / 2 - g.Ba - g.Aa + "px",
                    width: e + "px",
                    height: e / 2 + "px",
                    overflow: "hidden"
                },
                "#thumbborder": {
                    position: "absolute",
                    width: e + "px",
                    height: e + "px",
                    "border-radius": e + "px",
                    "background-color": this.g.Z,
                    opacity: "0.5"
                },
                "#thumbnail": {
                    position: "absolute",
                    top: "0px",
                    left: g.V / 2 - g.Ba + "px",
                    width: g.H + "px",
                    height: g.H + "px",
                    overflow: "hidden",
                    "z-index": "100",
                    "border-radius": g.H + "px"
                },
                "#mini": {
                    position: "absolute",
                    right: "20px",
                    top: g.F + "px",
                    width: this.Ic + "px",
                    height: 2 * g.z + "px",
                    "margin-top": 20 - g.z + "px",
                    "backface-visibility": "hidden",
                    opacity: "0.0",
                    transform: "rotateX(90deg)",
                    transition: "opacity 0.3s, transform 0.3s, right 0.3s"
                },
                "#mini.visible": {opacity: "1.0", transform: "rotateX(0deg)"},
                "#mini.exiting": {opacity: "0.0", right: "-150px"},
                "#mainbox": {
                    "border-radius": "4px",
                    "box-shadow": a,
                    "text-align": "center",
                    "background-color": this.g.Na,
                    "font-size": "14px",
                    color: this.g.ab
                },
                "#mini #mainbox": {
                    height: g.z +
                    "px", "margin-top": g.z + "px", "border-radius": "3px", transition: "background-color " + f
                },
                "#mini-border": {
                    height: g.z + 6 + "px",
                    width: g.za + 6 + "px",
                    position: "absolute",
                    top: "-3px",
                    left: "-3px",
                    "margin-top": g.z + "px",
                    "border-radius": "6px",
                    opacity: "0.25",
                    "background-color": "#fff",
                    "z-index": "-1",
                    "box-shadow": d
                },
                "#mini-icon": {
                    position: "relative",
                    display: "inline-block",
                    width: "75px",
                    height: g.z + "px",
                    "border-radius": "3px 0 0 3px",
                    "background-color": this.g.Z,
                    background: "linear-gradient(135deg, " + this.g.ob + " 0%, " + this.g.Z +
                    " 100%)",
                    transition: "background-color " + f
                },
                "#mini:hover #mini-icon": {"background-color": this.g.Xa},
                "#mini:hover #mainbox": {"background-color": this.g.Xa},
                "#mini-icon-img": {
                    position: "absolute",
                    "background-image": "url(" + this.I + ")",
                    width: "48px",
                    height: "48px",
                    top: "20px",
                    left: "12px"
                },
                "#content": {padding: "30px 20px 0px 20px"},
                "#mini-content": {"text-align": "left", height: g.z + "px", cursor: "pointer"},
                "#img": {width: "328px", "margin-top": "30px", "border-radius": "5px"},
                "#title": {
                    "max-height": "600px",
                    overflow: "hidden",
                    "word-wrap": "break-word",
                    padding: "25px 0px 20px 0px",
                    "font-size": "19px",
                    "font-weight": "bold",
                    color: this.g.wa
                },
                "#body": {
                    "max-height": "600px",
                    "margin-bottom": "25px",
                    overflow: "hidden",
                    "word-wrap": "break-word",
                    "line-height": "21px",
                    "font-size": "15px",
                    "font-weight": "normal",
                    "text-align": "left"
                },
                "#mini #body": {
                    display: "inline-block",
                    "max-width": "250px",
                    margin: "0 0 0 30px",
                    height: g.z + "px",
                    "font-size": "16px",
                    "letter-spacing": "0.8px",
                    color: this.g.wa
                },
                "#mini #body-text": {display: "table", height: g.z + "px"},
                "#mini #body-text div": {
                    display: "table-cell",
                    "vertical-align": "middle"
                },
                "#tagline": {
                    "margin-bottom": "15px",
                    "font-size": "10px",
                    "font-weight": "600",
                    "letter-spacing": "0.8px",
                    color: "#ccd7e0",
                    "text-align": "left"
                },
                "#tagline a": {color: this.g.Mb, transition: "color " + f},
                "#tagline a:hover": {color: this.g.va},
                "#cancel": {
                    position: "absolute",
                    right: "0",
                    width: "8px",
                    height: "8px",
                    padding: "10px",
                    "border-radius": "20px",
                    margin: "12px 12px 0 0",
                    "box-sizing": "content-box",
                    cursor: "pointer",
                    transition: "background-color " + f
                },
                "#mini #cancel": {margin: "7px 7px 0 0"},
                "#cancel-icon": {
                    width: "8px",
                    height: "8px",
                    overflow: "hidden",
                    "background-image": "url(//cdn.mxpnl.com/site_media/images/icons/notifications/cancel-x.png)",
                    opacity: this.g.rb
                },
                "#cancel:hover": {"background-color": this.g.pa},
                "#button": {
                    display: "block",
                    height: "60px",
                    "line-height": "60px",
                    "text-align": "center",
                    "background-color": this.g.Z,
                    "border-radius": "0 0 4px 4px",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "background-color " + f
                },
                "#button-close": {
                    display: "inline-block",
                    width: "9px",
                    height: "60px",
                    "margin-right": "8px",
                    "vertical-align": "top",
                    "background-image": "url(//cdn.mxpnl.com/site_media/images/icons/notifications/close-x-" + this.style + ".png)",
                    "background-repeat": "no-repeat",
                    "background-position": "0px 25px"
                },
                "#button-play": {
                    display: "inline-block",
                    width: "30px",
                    height: "60px",
                    "margin-left": "15px",
                    "background-image": "url(//cdn.mxpnl.com/site_media/images/icons/notifications/play-" + this.style + "-small.png)",
                    "background-repeat": "no-repeat",
                    "background-position": "0px 15px"
                },
                "a#button-link": {
                    display: "inline-block",
                    "vertical-align": "top",
                    "text-align": "center",
                    "font-size": "17px",
                    "font-weight": "bold",
                    overflow: "hidden",
                    "word-wrap": "break-word",
                    color: this.g.wa,
                    transition: "color " + f
                },
                "#button:hover": {"background-color": this.g.pa, color: this.g.va},
                "#button:hover a": {color: this.g.va},
                "#video-noflip": {position: "relative", top: 2 * -this.U + "px"},
                "#video-flip": {"backface-visibility": "hidden", transform: "rotateY(180deg)"},
                "#video": {
                    position: "absolute",
                    width: this.ha - 1 + "px",
                    height: this.U + "px",
                    top: g.F + "px",
                    "margin-top": "100px",
                    left: "50%",
                    "margin-left": Math.round(-this.ha /
                        2) + "px",
                    overflow: "hidden",
                    "border-radius": "5px",
                    "box-shadow": b,
                    transform: "translateZ(1px)",
                    transition: "opacity " + f + ", top " + f
                },
                "#video.exiting": {opacity: "0.0", top: this.U + "px"},
                "#video-holder": {
                    position: "absolute",
                    width: this.ha - 1 + "px",
                    height: this.U + "px",
                    overflow: "hidden",
                    "border-radius": "5px"
                },
                "#video-frame": {"margin-left": "-1px", width: this.ha + "px"},
                "#video-controls": {opacity: "0", transition: "opacity 0.5s"},
                "#video:hover #video-controls": {opacity: "1.0"},
                "#video .video-progress-el": {
                    position: "absolute",
                    bottom: "0", height: "25px", "border-radius": "0 0 0 5px"
                },
                "#video-progress": {width: "90%"},
                "#video-progress-total": {width: "100%", "background-color": this.g.Na, opacity: "0.7"},
                "#video-elapsed": {width: "0", "background-color": "#6cb6f5", opacity: "0.9"},
                "#video #video-time": {
                    width: "10%",
                    right: "0",
                    "font-size": "11px",
                    "line-height": "25px",
                    color: this.g.ab,
                    "background-color": "#666",
                    "border-radius": "0 0 5px 0"
                }
            };
            this.L("ie", 8) && c.extend(a, {
                "* html #overlay": {position: "absolute"},
                "* html #bg": {position: "absolute"},
                "html, body": {height: "100%"}
            });
            this.L("ie", 7) && c.extend(a, {
                "#mini #body": {
                    display: "inline",
                    zoom: "1",
                    border: "1px solid " + this.g.pa
                }, "#mini #body-text": {padding: "20px"}, "#mini #mini-icon": {display: "none"}
            });
            var b = "backface-visibility,border-radius,box-shadow,opacity,perspective,transform,transform-style,transition".split(","), d = ["khtml", "moz", "ms", "o", "webkit"], j;
            for (j in a)for (e = 0; e < b.length; e++)if (f = b[e], f in a[j])for (var i = a[j][f], l = 0; l < d.length; l++)a[j]["-" + d[l] + "-" + f] = i;
            (function (a, b) {
                function c(a) {
                    var b = "", d;
                    for (d in a) {
                        var f =
                            d.replace(/#/g, "#" + g.w + "-").replace(/\./g, "." + g.w + "-"), b = b + ("\n" + f + " {"), f = a[d], e;
                        for (e in f)b += e + ":" + f[e] + ";";
                        b += "}"
                    }
                    return b
                }

                var d = c(a) + function (a) {
                        var b = "", d;
                        for (d in a)b += "\n" + d + " {" + c(a[d]) + "\n}";
                        return b
                    }(b), f = m.head || m.getElementsByTagName("head")[0] || m.documentElement, e = m.createElement("style");
                f.appendChild(e);
                e.setAttribute("type", "text/css");
                e.styleSheet ? e.styleSheet.cssText = d : e.textContent = d
            })(a, h)
        };
        g.prototype.jc = c.m(function () {
            if (this.ya) {
                var a = this;
                a.Wb = "postMessage" in window;
                m.createElement("div");
                a.ba = a.ya;
                var b = a.ya.match(/(?:youtube(?:-nocookie)?\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i), c = a.ya.match(/vimeo\.com\/.*?(\d+)/i);
                if (b) {
                    if (a.S = n, a.Vb = b[1], a.Wb)window.onYouTubeIframeAPIReady = function () {
                        a.h("video-frame") && a.mb()
                    }, b = m.createElement("script"), b.src = "//www.youtube.com/iframe_api", c = m.getElementsByTagName("script")[0], c.parentNode.insertBefore(b, c)
                } else if (c)a.S = n, a.Ub = c[1];
                if (a.L("ie", 7) || a.L("firefox", 3))a.S = s, a.qa = n
            }
        });
        g.prototype.hb = c.m(function () {
            function a(a,
                       b) {
                var c = {};
                if (m.defaultView && m.defaultView.getComputedStyle)c = m.defaultView.getComputedStyle(a, p); else if (a.currentStyle)c = a.currentStyle;
                return c[b]
            }

            var b = this;
            c.R(b.h("bg"), "click", function () {
                b.Pa()
            });
            if (this.C) {
                var d = this.h("overlay");
                d && "hidden" !== a(d, "visibility") && "none" !== a(d, "display") && this.ib()
            }
        });
        g.prototype.ib = c.m(function (a) {
            if (!this.Db)this.Db = n, this.C && (this.fb()[this.C] = 1 * new Date, this.$a.save()), this.La("$campaign_delivery", a), this.Ya.people.append({
                $campaigns: this.C, $notifications: {
                    campaign_id: this.C,
                    message_id: this.Eb, type: "web", time: new Date
                }
            })
        });
        g.prototype.kc = function (a) {
            var b = this;
            if (0 === this.ta.length)a(); else {
                for (var c = 0, e = [], f = 0; f < this.ta.length; f++) {
                    var g = new Image, h = function () {
                        c++;
                        c === b.ta.length && a && (a(), a = p)
                    };
                    g.onload = h;
                    g.src = this.ta[f];
                    g.complete && h();
                    e.push(g)
                }
                this.L("ie", 7) && setTimeout(function () {
                    var b = n;
                    for (f = 0; f < e.length; f++)e[f].complete || (b = s);
                    b && a && (a(), a = p)
                }, 500)
            }
        };
        g.prototype.jb = c.m(function () {
            window.clearInterval(this.nc);
            this.da.style.visibility = "hidden";
            this.o.removeChild(this.da)
        });
        g.prototype.kb = function () {
            function a(a) {
                if (a in e)return n;
                if (!c)for (var a = a[0].toUpperCase() + a.slice(1), a = ["O" + a, "Webkit" + a, "Moz" + a], b = 0; b < a.length; b++)if (a[b] in e)return n;
                return s
            }

            function b(a) {
                return (a = z.userAgent.match(a)) && a[1]
            }

            this.B = {};
            this.B.chrome = b(/Chrome\/(\d+)/);
            this.B.firefox = b(/Firefox\/(\d+)/);
            this.B.ie = b(/MSIE (\d+).+/);
            !this.B.ie && !window.ActiveXObject && "ActiveXObject" in window && (this.B.ie = 11);
            if (this.o = m.body || m.getElementsByTagName("body")[0])this.yc = Math.max(this.o.scrollWidth,
                m.documentElement.scrollWidth, this.o.offsetWidth, m.documentElement.offsetWidth, this.o.clientWidth, m.documentElement.clientWidth), this.xc = Math.max(this.o.scrollHeight, m.documentElement.scrollHeight, this.o.offsetHeight, m.documentElement.offsetHeight, this.o.clientHeight, m.documentElement.clientHeight);
            var c = this.B.ie, e = m.createElement("div").style;
            this.Tb = this.o && a("transition") && a("transform");
            this.Sa = (33 <= this.B.chrome || 15 <= this.B.firefox) && this.o && a("backfaceVisibility") && a("perspective") && a("transform")
        };
        g.prototype.mc = c.m(function () {
            function a() {
                window.YT && window.YT.loaded && b.mb();
                b.Tc = n;
                b.M().style.visibility = "hidden"
            }

            var b = this, c = [{p: b.M(), l: "opacity", start: 1, i: 0}, {
                p: b.M(),
                l: "top",
                start: g.F,
                i: -500
            }, {p: b.h("video-noflip"), l: "opacity", start: 0, i: 1}, {
                p: b.h("video-noflip"),
                l: "top",
                start: 2 * -b.U,
                i: 0
            }];
            if (b.u) {
                var e = b.h("bg"), f = b.h("overlay");
                e.style.width = "100%";
                e.style.height = "100%";
                f.style.width = "100%";
                b.K(b.M(), "exiting");
                b.K(e, "visible");
                c.push({p: b.h("bg"), l: "opacity", start: 0, i: g.ia})
            }
            b.h("video-holder").innerHTML =
                b.dd;
            b.Sa ? (b.K("flipper", "flipped"), setTimeout(a, g.J)) : b.ma(c, g.J, a)
        });
        g.prototype.La = function (a, b, d) {
            this.C ? (b = b || {}, b = c.extend(b, {
                campaign_id: this.C,
                message_id: this.Eb,
                message_type: "web_inapp",
                message_subtype: this.ca
            }), this.Ya.track(a, b, d)) : d && d.call()
        };
        g.prototype.mb = c.m(function () {
            var a = this;
            if (!a.ed) {
                a.ed = n;
                var b = a.h("video-elapsed"), d = a.h("video-time"), e = a.h("video-progress");
                new window.YT.Player(g.w + "-video-frame", {
                    events: {
                        onReady: function (f) {
                            function g(a) {
                                var a = Math.round(i - a), b = Math.floor(a /
                                    60), c = Math.floor(b / 60), a = a - 60 * b;
                                d.innerHTML = "-" + (c ? c + ":" : "") + ("00" + (b - 60 * c)).slice(-2) + ":" + ("00" + a).slice(-2)
                            }

                            var h = f.target, i = h.getDuration();
                            g(0);
                            a.nc = window.setInterval(function () {
                                var a = h.getCurrentTime();
                                b.style.width = 100 * (a / i) + "%";
                                g(a)
                            }, 250);
                            c.R(e, "click", function (a) {
                                a = Math.max(0, a.pageX - e.getBoundingClientRect().left);
                                h.seekTo(i * a / e.clientWidth, n)
                            })
                        }
                    }
                })
            }
        });
        c.toArray = c.ga;
        c.isObject = c.k;
        c.JSONEncode = c.ka;
        c.JSONDecode = c.ja;
        c.isBlockedUA = c.Bb;
        c.isEmptyObject = c.Q;
        c.info = c.info;
        c.info.device = c.info.tb;
        c.info.browser = c.info.$;
        c.info.properties = c.info.ea;
        h.prototype.init = h.prototype.Va;
        h.prototype.disable = h.prototype.disable;
        h.prototype.time_event = h.prototype.Wc;
        h.prototype.track = h.prototype.T;
        h.prototype.track_links = h.prototype.Zc;
        h.prototype.track_forms = h.prototype.Yc;
        h.prototype.track_pageview = h.prototype.Pb;
        h.prototype.register = h.prototype.fa;
        h.prototype.register_once = h.prototype.G;
        h.prototype.unregister = h.prototype.xa;
        h.prototype.identify = h.prototype.Ta;
        h.prototype.alias = h.prototype.oc;
        h.prototype.name_tag =
            h.prototype.Hc;
        h.prototype.set_config = h.prototype.Kb;
        h.prototype.get_config = h.prototype.e;
        h.prototype.get_property = h.prototype.sa;
        h.prototype.get_distinct_id = h.prototype.P;
        h.prototype.toString = h.prototype.toString;
        h.prototype._check_and_handle_notifications = h.prototype.cb;
        h.prototype._show_notification = h.prototype.lb;
        l.prototype.properties = l.prototype.ea;
        l.prototype.update_search_keyword = l.prototype.Sb;
        l.prototype.update_referrer_info = l.prototype.bb;
        l.prototype.get_cross_subdomain = l.prototype.Cc;
        l.prototype.clear = l.prototype.clear;
        o.prototype.set = o.prototype.set;
        o.prototype.set_once = o.prototype.Lb;
        o.prototype.increment = o.prototype.zb;
        o.prototype.append = o.prototype.append;
        o.prototype.union = o.prototype.Qb;
        o.prototype.track_charge = o.prototype.Xc;
        o.prototype.clear_charges = o.prototype.tc;
        o.prototype.delete_user = o.prototype.vc;
        o.prototype.toString = o.prototype.toString;
        c.Mc(h);
        var x = {};
        (function () {
            I = 1;
            t = window.mixpanel;
            c.d(t) ? q.aa("'mixpanel' object not initialized. Ensure you are using the latest version of the Mixpanel JS Library along with the snippet we provide.") :
                t.__loaded || t.config && t.persistence ? q.error("Mixpanel library has already been downloaded at least once.") : 1.1 > (t.__SV || 0) ? q.aa("Version mismatch; please ensure you're using the latest version of the Mixpanel code snippet.") : (c.a(t._i, function (a) {
                    a && c.isArray(a) && (x[a[a.length - 1]] = E.apply(this, a))
                }), O(), t.init(), c.a(x, function (a) {
                    a.oa()
                }), N())
        })()
    })();
})();
