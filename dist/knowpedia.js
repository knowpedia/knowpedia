/*!
 * knowpedia - 为knowpedia项目定制的前端框架。
 *
 * git+https://github.com/knowpedia/knowpedia.git
 *
 * author 你好2007 < https://hai2007.gitee.io/sweethome >
 *
 * version 0.2.1
 *
 * Copyright (c) 2021 hai2007 走一步，再走一步。
 * Released under the MIT license
 *
 * Date:Tue Aug 24 2021 17:57:59 GMT+0800 (中国标准时间)
 */
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var quickPaper_core_min = createCommonjsModule(function (module) {

  function ownKeys(e, t) {
    var n = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }

    return n;
  }

  function _objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ownKeys(Object(n), !0).forEach(function (t) {
        _defineProperty(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }

    return e;
  }

  function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }

  function _typeof$1(e) {
    return (_typeof$1 = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    })(e);
  }
  /*!
  * quick-paper.core v0.6.0
  * (c) 2019-2021 你好2007 git+https://github.com/hai2007/quick-paper.git
  * License: MIT
  */


  !function () {
    var e = Object.prototype.toString;

    function t(t) {
      return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : e.call(t);
    }

    var n = function n(e, _n) {
      return null !== _n && "object" === _typeof$1(_n) && e.indexOf(_n.nodeType) > -1 && !function (e) {
        if (null === e || "object" !== _typeof$1(e) || "[object Object]" != t(e)) return !1;
        if (null === Object.getPrototypeOf(e)) return !0;

        for (var n = e; null !== Object.getPrototypeOf(n);) {
          n = Object.getPrototypeOf(n);
        }

        return Object.getPrototypeOf(e) === n;
      }(_n);
    },
        r = function r(e) {
      var n = _typeof$1(e);

      return "string" === n || "object" === n && null != e && !Array.isArray(e) && "[object String]" === t(e);
    },
        o = function o(e) {
      if (!function (e) {
        var t = _typeof$1(e);

        return null != e && ("object" === t || "function" === t);
      }(e)) return !1;
      var n = t(e);
      return "[object Function]" === n || "[object AsyncFunction]" === n || "[object GeneratorFunction]" === n || "[object Proxy]" === n;
    },
        i = function i(e) {
      return Array.isArray(e);
    };

    function s(e) {
      /^[_$]/.test(e) && console.error("The beginning of _ or $ is not allowed：" + e);
    }

    var a = 1;

    function c(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          o = {},
          i = [];
      if (!r(e)) return {
        type: "component",
        options: e,
        attrs: {},
        children: []
      };

      for (var s in t) {
        /^@/.test(s) ? o[s.replace(/^@/, "q-on:")] = t[s] : /^:/.test(s) ? o["q-bind" + s] = t[s] : o[s] = t[s];
      }

      for (var a, c = 0; c < n.length; c++) {
        a = n[c], r(a) ? /\{\{[^}]+\}\}/.test(a) ? i.push({
          type: "bindText",
          content: ('" ' + a + ' "').replace(/\{\{([^}]+)\}\}/g, '"+$1+"')
        }) : i.push({
          type: "text",
          content: a
        }) : i.push(a);
      }

      return {
        type: "none",
        tagName: e,
        attrs: o,
        children: i
      };
    }

    function l(e) {
      for (var t = (e + "").toLowerCase(), n = (e + "").toUpperCase(), r = "", o = !1, i = 0; i < e.length; i++) {
        "-" != e[i] ? o ? (r += n[i], o = !1) : r += t[i] : o = !0;
      }

      return r;
    }

    var p = {
      blankReg: new RegExp("[\\x20\\t\\r\\n\\f]"),
      blanksReg: /^[\x20\t\r\n\f]{0,}$/,
      identifier: /^[a-zA-Z_$][0-9a-zA-Z_$]{0,}$/
    },
        u = ["+", "-", "*", "/", "%", "&", "|", "!", "?", ":", "[", "]", "(", ")", ">", "<", "="],
        f = ["+", "-", "*", "/", "%", "&", "|", "!", "?", ":", ">", "<", "=", "<=", ">=", "==", "===", "!=", "!=="];

    function d(e, t, n) {
      t = t.trim();

      var o = -1,
          i = null,
          s = function s() {
        return i = o++ < t.length - 1 ? t[o] : null;
      },
          a = function a(e) {
        return t.substring(o, e + o > t.length ? t.length : e + o);
      };

      s();

      for (var c = []; !(o >= t.length);) {
        if (u.indexOf(i) > -1) {
          if (["&", "|", "="].indexOf(i) > -1) {
            if (["==="].indexOf(a(3)) > -1) c.push(a(3)), o += 2, s();else {
              if (!(["&&", "||", "=="].indexOf(a(2)) > -1)) throw new Error("Illegal expression : " + t + "\nstep='analyseExpress',index=" + o);
              c.push(a(2)), o += 1, s();
            }
          } else ["!=="].indexOf(a(3)) > -1 ? (c.push(a(3)), o += 2, s()) : [">=", "<=", "!="].indexOf(a(2)) > -1 ? (c.push(a(2)), o += 1, s()) : (c.push(i), s());
        } else if (['"', "'"].indexOf(i) > -1) {
          var l = "",
              d = i;

          for (s(); i != d;) {
            if (o >= t.length) throw new Error("String unclosed error : " + t + "\nstep='analyseExpress',index=" + o);
            l += i, s();
          }

          c.push(l + "@string"), s();
        } else if (/\d/.test(i)) {
          var h = "no";
          l = i;

          for (s(); o < t.length;) {
            if (/\d/.test(i)) l += i, "error" == h && (h = "yes");else {
              if ("." != i || "no" != h) break;
              l += i, h = "error";
            }
            s();
          }

          "error" == h && (l += "0"), c.push(+l);
        } else if (["null", "true"].indexOf(a(4)) > -1) c.push({
          "null": null,
          "true": !0
        }[a(4)]), o += 3, s();else if (["false"].indexOf(a(5)) > -1) c.push({
          "false": !1
        }[a(5)]), o += 4, s();else if (["undefined"].indexOf(a(9)) > -1) c.push({
          undefined: void 0
        }[a(9)]), o += 8, s();else if (p.blankReg.test(i)) do {
          s();
        } while (p.blankReg.test(i) && o < t.length);else {
          var v = !1;
          if ("." == i && (v = !0, s()), !p.identifier.test(i)) throw new Error("Illegal express : " + t + "\nstep='analyseExpress',index=" + o);

          for (var y = 1; o + y <= t.length && p.identifier.test(a(y));) {
            y += 1;
          }

          if (v) c.push("["), c.push(a(y - 1) + "@string"), c.push("]");else {
            var _ = a(y - 1),
                g = _ in n ? n[_] : e[_];

            c.push(r(g) ? g + "@string" : g);
          }
          o += y - 2, s();
        }
      }

      for (var b = 0, m = 0; m < c.length; m++) {
        ["+", "-"].indexOf(c[m]) > -1 && (0 == m || f.indexOf(c[b - 1]) > -1) ? (c[b++] = +(c[m] + c[m + 1]), m += 1) : c[b++] = c[m];
      }

      return c.length = b, c;
    }

    var h = function h(e) {
      return "string" == typeof e ? e.replace(/@string$/, "") : e;
    };

    function v(e) {
      for (var t, n = 0, r = 0; r < e.length; r++) {
        "!" == e[r] ? e[n] = !e[++r] : e[n] = e[r], n += 1;
      }

      if (1 == n) return h(e[0]);

      for (e.length = n, n = 0, r = 0; r < e.length; r++) {
        "*" == e[r] ? e[n - 1] = h(e[n - 1]) * h(e[++r]) : "/" == e[r] ? e[n - 1] = h(e[n - 1]) / h(e[++r]) : "%" == e[r] ? e[n - 1] = h(e[n - 1]) % h(e[++r]) : e[n++] = e[r];
      }

      if (1 == n) return h(e[0]);

      for (e.length = n, n = 0, r = 0; r < e.length; r++) {
        "+" == e[r] ? e[n - 1] = "string" == typeof (t = h(e[n - 1]) + h(e[++r])) ? t + "@string" : t : "-" == e[r] ? e[n - 1] = h(e[n - 1]) - h(e[++r]) : e[n++] = e[r];
      }

      if (1 == n) return h(e[0]);

      for (e.length = n, n = 0, r = 0; r < e.length; r++) {
        ">" == e[r] ? e[n - 1] = h(e[n - 1]) > h(e[++r]) : "<" == e[r] ? e[n - 1] = h(e[n - 1]) < h(e[++r]) : "<=" == e[r] ? e[n - 1] = h(e[n - 1]) <= h(e[++r]) : ">=" == e[r] ? e[n - 1] = h(e[n - 1]) >= h(e[++r]) : e[n++] = e[r];
      }

      if (1 == n) return h(e[0]);

      for (e.length = n, n = 0, r = 0; r < e.length; r++) {
        "==" == e[r] ? e[n - 1] = h(e[n - 1]) == h(e[++r]) : "===" == e[r] ? e[n - 1] = h(e[n - 1]) === h(e[++r]) : "!=" == e[r] ? e[n - 1] = h(e[n - 1]) != h(e[++r]) : "!==" == e[r] ? e[n - 1] = h(e[n - 1]) !== h(e[++r]) : e[n++] = e[r];
      }

      if (1 == n) return h(e[0]);

      for (e.length = n, n = 0, r = 0; r < e.length; r++) {
        "&&" == e[r] ? (e[n - 1] = h(e[n - 1]) && h(e[1 + r]), r += 1) : "||" == e[r] ? (e[n - 1] = h(e[n - 1]) || h(e[1 + r]), r += 1) : e[n++] = e[r];
      }

      if (1 == n) return h(e[0]);

      for (e.length = n, n = 0, r = 0; r < e.length; r++) {
        "?" == e[r] ? (e[n - 1] = h(e[n - 1]) ? h(e[r + 1]) : h(e[r + 3]), r += 3) : e[n++] = e[r];
      }

      if (1 == n) return h(e[0]);
      throw e.length = n, new Error("Unrecognized expression : [" + e.toString() + "]");
    }

    var y = function y(e) {
      for (var t = !0; t;) {
        t = !1;

        for (var n = [], o = [], i = !1, s = 0; s < e.length; s++) {
          if ("[" == e[s] && 0 != s && "]" != e[s - 1]) {
            if (i) {
              n.push("[");

              for (var a = 0; a < o.length; a++) {
                n.push(o[a]);
              }
            } else i = !0;

            o = [];
          } else if ("]" == e[s] && i) {
            t = !0;
            var c = v(o),
                l = n[n.length - 1][c];
            n[n.length - 1] = r(l) ? l + "@string" : l, i = !1;
          } else i ? o.push(e[s]) : n.push(e[s]);
        }

        e = n;
      }

      return e;
    },
        _ = function _(e) {
      for (var t = [], n = [], r = 0; r < e.length; r++) {
        "[" == e[r] ? n = [] : "]" == e[r] ? t.push(v(n)) : n.push(e[r]);
      }

      return t;
    };

    function g(e, t, n) {
      var o,
          i = function e(t, n, o) {
        if (n.indexOf("(") > -1) {
          for (var i = [], s = [], a = 0, c = 0; c < n.length; c++) {
            if ("(" == n[c]) a > 0 && s.push("("), a += 1;else if (")" == n[c]) {
              if (a > 1 && s.push(")"), 0 == (a -= 1)) {
                var l = v(e(t, s));
                i.push(r(l) ? l + "@string" : l), s = [];
              }
            } else a > 0 ? s.push(n[c]) : i.push(n[c]);
          }

          n = i;
        }

        return y(n);
      }(e, t);

      if ("[" != i[0]) o = [v(i)];else if ("]" == i[i.length - 1]) o = _(i);else {
        var s = i.lastIndexOf("]"),
            a = _(i.slice(0, s + 1)),
            c = i.slice(s + 1);

        c.unshift(function (e, t, n) {
          for (var r = (t[0] in n) ? n[t[0]] : e[t[0]], o = 1; o < t.length; o++) {
            try {
              r = r[t[o]];
            } catch (r) {
              throw console.error({
                target: e,
                scope: n,
                expressArray: t,
                index: o
              }), r;
            }
          }

          return r;
        }(e, a, n)), o = [v(c)];
      }
      return o;
    }
    /*!
       * 🔪 - 设置或获取指定对象上字符串表达式对应的值
       * https://github.com/hai2007/algorithm.js/blob/master/value.js
       *
       * author hai2007 < https://hai2007.gitee.io/sweethome >
       *
       * Copyright (c) 2020-present hai2007 走一步，再走一步。
       * Released under the MIT license
       */


    var b = function b(e, t, n) {
      arguments.length < 3 && (n = {});
      var r = d(e, t, n),
          o = g(e, r, n);
      if (o.length > 1) throw new Error("Illegal expression : " + t + "\nstep='evalExpress',path=" + o + ",expressArray=" + r);
      return o[0];
    };

    function m(e, t, n) {
      window.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener(t, n, !1);
    }

    function x(e) {
      if (!(this instanceof x)) throw new Error("QuickPaper is a constructor and should be called with the `new` keyword");
      var t;
      this._name = e.name || "noname", this.$$lifecycle(e.beforeCreate), this.$$init(e), this.$$lifecycle("created"), t = this._el, n([1, 9, 11], t) && this.$$mount();
    }

    !function (e) {
      e.prototype.$$init = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

        for (var t in this._options = e, this._uid = a++, this._data = o(e.data) ? e.data() : e.data, this._el = e.el, this.__isMounted = !1, this.__isDestroyed = !1, e.methods) {
          s(t), this[t] = e.methods[t];
        }

        for (var n in this._data) {
          this[n] = this._data[n];
        }

        for (var r in this.__componentLib_scope = {}, e.component) {
          this.__componentLib_scope[r] = e.component[r];
        }

        for (var i in this.__directiveLib_scope = {}, e.directive) {
          this.__directiveLib_scope[i] = e.directive[i];
        }
      };
    }(x), function (e) {
      e.prototype.$$lifecycle = function (e) {
        o(e) ? e() : ["created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed"].indexOf(e) > -1 && o(this._options[e]) && this._options[e].call(this);
      };
    }(x), function (e) {
      e.prototype.$$mountComponent = function () {
        this.$$lifecycle("beforeMount"), this._vnode = this.$$render(c), this.__directiveTask = [], this.__componentTask = [], this.__bindTextTask = [], function e(t, n, r, o) {
          var i,
              s = b(t, n);

          if (s) {
            if ("none" == s.type) {
              var a = l(s.tagName);
              t.__componentLib[a] || t.__componentLib_scope[a] ? (s.options = t.__componentLib[a] || t.__componentLib_scope[a], s.type = "component") : s.type = "tag";
            }

            if ("component" == s.type) {
              i = document.createElement("quick-paper-component"), r.appendChild(i), s.options.el = i, "render" in s.options || (s.options.render = function (e) {
                return e("quick-paper-component", {}, []);
              }), s.instance = new o(s.options), s.instance.__parent = t;
              var c = {};

              for (var p in s.attrs) {
                /^data-quickpaper-/.test(p) || (/^:/.test(p) ? c[p.replace("q-bind" + p)] = s.attrs[p] : /^@/.test(p) ? c[p.replace(p.replace(/^@/, "q-on:"))] = s.attrs[p] : c[p] = s.attrs[p]);
              }

              var u = {
                attrs: c,
                instance: s.instance
              };

              if ("component" == u.instance._name) {
                var f = u.attrs["q-bind:is"];
                u.instance.lister(o, t[f]);
              }

              t.__componentTask.push(u);
            } else if ("tag" == s.type) {
              for (var d in i = document.createElement(s.tagName), "Quick-Paper-COMPONENT" == r.nodeName || "Quick-Paper-COMPONENT" == r._nodeName ? (m = i, (g = r).parentNode.replaceChild(m, g), t._el = i) : r.appendChild(i), s.attrs) {
                var h = s.attrs[d],
                    v = (d + ":").split(":"),
                    y = t.__directiveLib[l(v[0])] || t.__directiveLib_scope[l(v[0])];

                y ? t.__directiveTask.push(_objectSpread(_objectSpread({
                  el: i
                }, y), {}, {
                  value: h,
                  type: v[1]
                })) : i.setAttribute(d, h);
              }

              for (var _ = 0; _ < s.children.length; _++) {
                e(t, n + ".children[" + _ + "]", i, o);
              }
            } else "text" == s.type ? ((i = document.createTextNode("")).textContent = s.content.replace(/↵/g, "\n"), r.appendChild(i)) : "bindText" == s.type ? ((i = document.createTextNode("")).textContent = b(t, s.content).replace(/↵/g, "\n"), r.appendChild(i), t.__bindTextTask.push({
              el: i,
              content: s.content
            })) : console.error("Type not expected：" + s.type);

            var g, m;
          } else console.error("vnode is undefined!");
        }(this, "_vnode", this._el, e);

        for (var t = 0; t < this.__directiveTask.length; t++) {
          var n = this.__directiveTask[t];

          if (o(n.inserted)) {
            var r = void 0;

            try {
              r = b(this, n.value);
            } catch (e) {}

            n.inserted(n.el, {
              target: this,
              exp: n.value,
              value: r,
              type: n.type
            });
          }
        }

        !function (e) {
          var t = function t(_t) {
            s(_t), o(e[_t]) && console.error('Data property "' + _t + '" has already been defined as a Method.');
            var n = e._data[_t];
            e[_t] = n, Object.defineProperty(e, _t, {
              get: function get() {
                return n;
              },
              set: function set(t) {
                n = t, e.$$updateComponent();
              }
            });
          };

          for (var n in e._data) {
            t(n);
          }
        }(this), this.__isMounted = !0, this.$$lifecycle("mounted");
      }, e.prototype.$$updateComponent = function () {
        this.$$lifecycle("beforeUpdate");

        for (var t = 0; t < this.__directiveTask.length; t++) {
          var n = this.__directiveTask[t];

          if (o(n.update)) {
            var r = void 0;

            try {
              r = b(this, n.value);
            } catch (e) {}

            n.update(n.el, {
              target: this,
              exp: n.value,
              value: r,
              type: n.type
            });
          }
        }

        for (var i = 0; i < this.__bindTextTask.length; i++) {
          var s = this.__bindTextTask[i],
              a = b(this, s.content).replace(/↵/g, "\n");
          s.el.textContent != a && (s.el.textContent = a);
        }

        for (var c = 0; c < this.__componentTask.length; c++) {
          var l = this.__componentTask[c];

          if ("component" == l.instance._name) {
            var p = l.attrs["q-bind:is"];
            l.instance.lister(e, this[p]);
          }
        }

        this.$$lifecycle("updated");
      }, e.prototype.$$destroyComponent = function () {
        this.$$lifecycle("beforeDestroy");

        for (var e = 0; e < this.__directiveTask.length; e++) {
          var t = this.__directiveTask[e];
          o(t["delete"]) && t["delete"](t.el, {
            target: this,
            exp: t.value,
            value: b(this, t.value),
            type: t.type
          });
        }

        this.$$lifecycle("destroyed");
      };
    }(x);

    var $ = function $(e, t) {
      r(t.type) && t.type.length > 0 ? e.getAttribute(t.type) != t.value && e.setAttribute(t.type, t.value) : e.value == t.value && e.textContent == t.value || (e.value = e.textContent = t.value);
    },
        O = {
      inserted: $,
      update: $
    },
        w = {
      inserted: function inserted(e, t) {
        for (var n = t.type.split("."), r = {
          prevent: !1,
          stop: !1,
          once: !1
        }, o = 1; o < n.length; o++) {
          r[n[o]] = !0;
        }

        m(e, n[0], function o(i) {
          r.stop && function (e) {
            (e = e || window.event).stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
          }(i), r.prevent && function (e) {
            (e = e || window.event).preventDefault ? e.preventDefault() : e.returnValue = !1;
          }(i);
          var s,
              a,
              c,
              l = /^([^(]+)(\([^)]{0,}\)){0,1}/.exec(t.exp),
              p = [],
              u = [];

          if (l[2]) {
            var f = l[2].replace(/^\(/, "").replace(/\)$/, "").trim();
            f.length > 0 && (u = f.split(","));
          }

          for (var d = 0; d < u.length; d++) {
            var h = u[d];
            h = b(t.target, h), p.push(h);
          }

          p.push(i), t.target[l[1]].apply(t.target, p), r.once && (s = e, a = n[0], c = o, window.detachEvent ? s.detachEvent("on" + a, c) : s.removeEventListener(a, c, !1));
        });
      }
    },
        j = {
      inserted: function inserted(e, t) {
        e.value = t.value, m(e, "input", function () {
          !function (e, t, n, r) {
            arguments.length < 3 && (r = {});

            for (var o = d(e, t, r), s = g(e, o, r), a = e, c = 0; c < s.length - 1; c++) {
              s[c] in a || (a[s[c]] = i(a) ? [] : {}), a = a[s[c]];
            }

            a[s[s.length - 1]] = n;
          }(t.target, "." + t.exp, e.value);
        });
      },
      update: function update(e, t) {
        e.value = t.value;
      }
    };

    !function (e) {
      e.prototype.__directiveLib = {}, e.prototype.__componentLib = {}, function (e) {
        e.directive = function (t, n) {
          e.prototype.__directiveLib[t] = n;
        }, e.component = function (t, n) {
          e.prototype.__componentLib[t] = n;
        };
      }(e), function (e) {
        e.use = function (t) {
          t.install.call(t, e);
        };
      }(e);
    }(x), x.directive("qBind", O), x.directive("qOn", w), x.directive("qModel", j), x.component("component", {
      name: "component",
      data: function data() {
        return {
          is: null
        };
      },
      methods: {
        lister: function lister(e, t) {
          if (t != this.is && null != t) {
            var n = this._oldComponent;
            n && n.$$lifecycle("beforeDestroy"), this.is = t;
            var r = t;
            r.el = this._el, r.el._nodeName = "Quick-Paper-COMPONENT", this._oldComponent = new e(r), this._el = this._oldComponent._el, n && (n.$$lifecycle("destroyed"), n = null);
          }
        }
      }
    }), x.prototype.$$mount = function () {
      if (!o(this._options.render)) throw new Error("options.render needs to be a function");
      this.$$render = this._options.render, this.$$mountComponent();
    }, "object" === ( _typeof$1(module)) && "object" === _typeof$1(module.exports) ? module.exports = x : window.QuickPaper = x;
  }();
});

var crossEndCanvas_min = createCommonjsModule(function (module) {
  /*!
   * cross-end-canvas - 提供跨端的canvas画笔，保持一致的绘图方法和效果，包括普通的web端、uniapp框架、微信小程序等小程序等。
   *
   * git+https://github.com/hai2007/cross-end-canvas.git
   *
   * author 你好2007 < https://hai2007.gitee.io/sweethome >
   *
   * version 0.1.1
   *
   * Copyright (c) 2021 hai2007 走一步，再走一步。
   * Released under the MIT license
   *
   * Date:Tue Aug 24 2021 11:02:07 GMT+0800 (中国标准时间)
   */
  (function () {

    function _typeof(obj) {
      "@babel/helpers - typeof";

      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
          return typeof obj;
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof(obj);
    }

    var rotate = function rotate(cx, cy, deg, x, y) {
      var cos = Math.cos(deg),
          sin = Math.sin(deg);
      return [+((x - cx) * cos - (y - cy) * sin + cx).toFixed(7), +((x - cx) * sin + (y - cy) * cos + cy).toFixed(7)];
    };

    function arc(beginA, rotateA, cx, cy, r1, r2, doback) {
      if (rotateA < 0) {
        beginA += rotateA;
        rotateA *= -1;
      }

      var temp = [],
          p;
      p = rotate(0, 0, beginA, r1, 0);
      temp[0] = p[0];
      temp[1] = p[1];
      p = rotate(0, 0, rotateA, p[0], p[1]);
      temp[2] = p[0];
      temp[3] = p[1];
      p = rotate(0, 0, beginA, r2, 0);
      temp[4] = p[0];
      temp[5] = p[1];
      p = rotate(0, 0, rotateA, p[0], p[1]);
      temp[6] = p[0];
      temp[7] = p[1];
      doback(beginA, beginA + rotateA, temp[0] + cx, temp[1] + cy, temp[4] + cx, temp[5] + cy, temp[2] + cx, temp[3] + cy, temp[6] + cx, temp[7] + cy, (r2 - r1) * .5);
    }

    var initPainterConfig = {
      fillStyle: "black",
      strokeStyle: "black",
      lineWidth: 1,
      textAlign: "left",
      textBaseline: "middle",
      "font-size": 16,
      "font-family": "sans-serif",
      "arc-start-cap": "butt",
      "arc-end-cap": "butt",
      lineDash: [],
      shadowBlur: 0,
      shadowColor: "black"
    };

    var initText = function initText(painter, config, x, y, deg, platform) {
      painter.beginPath();
      painter.translate(x, y);
      painter.rotate(deg);

      if (platform != "web") {
        painter.setFontSize(config["font-size"]);
      } else {
        painter.font = config["font-size"] + "px " + config["font-family"];
      }

      return painter;
    };

    var initArc = function initArc(painter, config, cx, cy, r1, r2, beginDeg, deg) {
      if (r1 > r2) {
        var temp = r1;
        r1 = r2;
        r2 = temp;
      }

      beginDeg = beginDeg % (Math.PI * 2);

      if (deg >= Math.PI * 1.999999 || deg <= -Math.PI * 1.999999) {
        deg = Math.PI * 2;
      } else {
        deg = deg % (Math.PI * 2);
      }

      arc(beginDeg, deg, cx, cy, r1, r2, function (beginA, endA, begInnerX, begInnerY, begOuterX, begOuterY, endInnerX, endInnerY, endOuterX, endOuterY, r) {
        if (r < 0) r = -r;
        painter.beginPath();
        painter.moveTo(begInnerX, begInnerY);
        painter.arc(cx, cy, r1, beginA, endA, false);
        if (config["arc-end-cap"] != "round") painter.lineTo(endOuterX, endOuterY);else painter.arc((endInnerX + endOuterX) * .5, (endInnerY + endOuterY) * .5, r, endA - Math.PI, endA, true);
        painter.arc(cx, cy, r2, endA, beginA, true);
        if (config["arc-start-cap"] != "round") painter.lineTo(begInnerX, begInnerY);else painter.arc((begInnerX + begOuterX) * .5, (begInnerY + begOuterY) * .5, r, beginA, beginA - Math.PI, true);
      });
      if (config["arc-start-cap"] == "butt") painter.closePath();
      return painter;
    };

    var initCircle = function initCircle(painter, cx, cy, r) {
      painter.beginPath();
      painter.moveTo(cx + r, cy);
      painter.arc(cx, cy, r, 0, Math.PI * 2);
      return painter;
    };

    var initRect = function initRect(painter, x, y, width, height) {
      painter.beginPath();
      painter.rect(x, y, width, height);
      return painter;
    };

    var linearGradient = function linearGradient(painter, x0, y0, x1, y1) {
      var gradient = painter.createLinearGradient(x0, y0, x1, y1);
      var enhanceGradient = {
        value: function value() {
          return gradient;
        },
        addColorStop: function addColorStop(stop, color) {
          gradient.addColorStop(stop, color);
          return enhanceGradient;
        }
      };
      return enhanceGradient;
    };

    var radialGradient = function radialGradient(painter, cx, cy, r) {
      var gradient = painter.createRadialGradient(cx, cy, 0, cx, cy, r);
      var enhanceGradient = {
        value: function value() {
          return gradient;
        },
        addColorStop: function addColorStop(stop, color) {
          gradient.addColorStop(stop, color);
          return enhanceGradient;
        }
      };
      return enhanceGradient;
    };

    var unSupportAttr = {};

    function painterFactory(painter, platform) {
      var config = {};
      var useConfig = platform == "uni-app" ? function (key, value) {
        if (["font-size", "font-family", "arc-start-cap", "arc-end-cap"].indexOf(key) > -1) {
          config[key] = value;
        } else {
          try {
            painter["set" + key[0].toUpperCase() + key.substr(1)](value);
          } catch (e) {
            if (!unSupportAttr[platform]) {
              unSupportAttr[platform] = {};
            }

            if (!unSupportAttr[platform][key]) {
              unSupportAttr[platform][key] = true;
              console.warn("内置画笔的" + key + "属性在" + platform + "平台上不支持！");
            }
          }
        }
      } : function (key, value) {
        if (key == "lineDash") {
          painter.setLineDash(value);
        } else if (["font-size", "font-family", "arc-start-cap", "arc-end-cap"].indexOf(key) > -1) {
          config[key] = value;
        } else if (key in initPainterConfig) {
          painter[key] = value;
        } else {
          throw new Error("Illegal configuration item of painter : " + key + " !");
        }
      };
      var enhancePainter = {
        config: function config() {
          if (arguments.length === 1) {
            if (_typeof(arguments[0]) !== "object") return painter[arguments[0]];

            for (var key in arguments[0]) {
              useConfig(key, arguments[0][key]);
            }
          } else if (arguments.length === 2) {
            useConfig(arguments[0], arguments[1]);
          }

          return enhancePainter;
        },
        fillText: function fillText(text, x, y, deg) {
          painter.save();
          initText(painter, config, x, y, deg || 0, platform).fillText(text, 0, 0);
          painter.restore();
          return enhancePainter;
        },
        strokeText: function strokeText(text, x, y, deg) {
          painter.save();
          initText(painter, config, x, y, deg || 0, platform).strokeText(text, 0, 0);
          painter.restore();
          return enhancePainter;
        },
        fullText: function fullText(text, x, y, deg) {
          painter.save();
          initText(painter, config, x, y, deg || 0, platform);
          painter.fillText(text, 0, 0);
          painter.strokeText(text, 0, 0);
          painter.restore();
          return enhancePainter;
        },
        beginPath: function beginPath() {
          painter.beginPath();
          return enhancePainter;
        },
        closePath: function closePath() {
          painter.closePath();
          return enhancePainter;
        },
        moveTo: function moveTo(x, y) {
          painter.moveTo(x, y);
          return enhancePainter;
        },
        lineTo: function lineTo(x, y) {
          painter.lineTo(x, y);
          return enhancePainter;
        },
        arc: function arc(x, y, r, beginDeg, deg) {
          painter.arc(x, y, r, beginDeg, beginDeg + deg, deg < 0);
          return enhancePainter;
        },
        fill: function fill() {
          painter.fill();
          return enhancePainter;
        },
        stroke: function stroke() {
          painter.stroke();
          return enhancePainter;
        },
        full: function full() {
          painter.fill();
          painter.stroke();
          return enhancePainter;
        },
        save: function save() {
          painter.save();
          return enhancePainter;
        },
        restore: function restore() {
          painter.restore();
          return enhancePainter;
        },
        quadraticCurveTo: function quadraticCurveTo(cpx, cpy, x, y) {
          painter.quadraticCurveTo(cpx, cpy, x, y);
          return enhancePainter;
        },
        bezierCurveTo: function bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
          painter.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
          return enhancePainter;
        },
        clearRect: function clearRect(x, y, w, h) {
          painter.clearRect(x, y, w, h);
          return enhancePainter;
        },
        fillArc: function fillArc(cx, cy, r1, r2, beginDeg, deg) {
          initArc(painter, config, cx, cy, r1, r2, beginDeg, deg).fill();
          return enhancePainter;
        },
        strokeArc: function strokeArc(cx, cy, r1, r2, beginDeg, deg) {
          initArc(painter, config, cx, cy, r1, r2, beginDeg, deg).stroke();
          return enhancePainter;
        },
        fullArc: function fullArc(cx, cy, r1, r2, beginDeg, deg) {
          initArc(painter, config, cx, cy, r1, r2, beginDeg, deg);
          painter.fill();
          painter.stroke();
          return enhancePainter;
        },
        fillCircle: function fillCircle(cx, cy, r) {
          initCircle(painter, cx, cy, r).fill();
          return enhancePainter;
        },
        strokeCircle: function strokeCircle(cx, cy, r) {
          initCircle(painter, cx, cy, r).stroke();
          return enhancePainter;
        },
        fullCircle: function fullCircle(cx, cy, r) {
          initCircle(painter, cx, cy, r);
          painter.fill();
          painter.stroke();
          return enhancePainter;
        },
        fillRect: function fillRect(x, y, width, height) {
          initRect(painter, x, y, width, height).fill();
          return enhancePainter;
        },
        strokeRect: function strokeRect(x, y, width, height) {
          initRect(painter, x, y, width, height).stroke();
          return enhancePainter;
        },
        fullRect: function fullRect(x, y, width, height) {
          initRect(painter, x, y, width, height);
          painter.fill();
          painter.stroke();
          return enhancePainter;
        },
        createLinearGradient: function createLinearGradient(x0, y0, x1, y1) {
          return linearGradient(painter, x0, y0, x1, y1);
        },
        createRadialGradient: function createRadialGradient(cx, cy, r) {
          return radialGradient(painter, cx, cy, r);
        }
      };
      if (platform == "uni-app") enhancePainter.draw = function () {
        painter.draw();
        return enhancePainter;
      };
      return enhancePainter;
    }

    var CrossEndCanvas = function CrossEndCanvas(config) {
      return new Promise(function (resolve, reject) {
        if (config.platform == "web") {
          var canvas = document.getElementById(config.id);
          var width = canvas.clientWidth,
              height = canvas.clientHeight;
          canvas.style.width = width + "px";
          canvas.style.height = height + "px";
          canvas.setAttribute("width", width * 2);
          canvas.setAttribute("height", height * 2);
          var painter = canvas.getContext("2d");
          painter.scale(2, 2);
          resolve([painter, config.platform]);
        } else if (config.platform == "uni-app") {
          resolve([uni.createCanvasContext(config.id, config.target), config.platform]);
        } else if (config.platform == "weixin") {
          var dpr = wx.getSystemInfoSync().pixelRatio;
          wx.createSelectorQuery()["in"](config.target).select("#" + config.id).fields({
            node: true,
            size: true
          }).exec(function (res) {
            var canvas = res[0].node;
            var painter = canvas.getContext("2d");
            canvas.width = res[0].width * dpr;
            canvas.height = res[0].height * dpr;
            painter.scale(dpr, dpr);
            resolve([painter, config.platform]);
          });
        } else {
          reject("你必须配置一个合法的平台");
        }
      }).then(function (data) {
        return painterFactory(data[0], data[1]);
      });
    };

    if (( _typeof(module)) === "object" && _typeof(module.exports) === "object") {
      module.exports = CrossEndCanvas;
    } else {
      window.CrossEndCanvas = CrossEndCanvas;
    }
  })();
});

var config = {
  mathFormula: {
    "font-size": 12,
    "padding-size": 2
  }
};

var toString = Object.prototype.toString;
/**
 * 获取一个值的类型字符串[object type]
 *
 * @param {*} value 需要返回类型的值
 * @returns {string} 返回类型字符串
 */

function getType (value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }

  return toString.call(value);
}

/**
 * 判断一个值是不是String。
 *
 * @param {*} value 需要判断类型的值
 * @returns {boolean} 如果是String返回true，否则返回false
 */

function _isString (value) {
  var type = _typeof(value);

  return type === 'string' || type === 'object' && value != null && !Array.isArray(value) && getType(value) === '[object String]';
}

var isString = _isString;

var doit = function doit(el, binding) {
  // 随机生成唯一标志
  var id = "kp-math-formula-id-" + (Math.random() * 100000000000).toFixed(0); // 获取需要绘制的式子的数据

  var mathFormulaData = binding.value;
  if (!mathFormulaData) return; // 设置画布大小并插入页面

  el.innerHTML = "<canvas id='" + id + "' style='width:" + mathFormulaData.width + "px;height:" + mathFormulaData.height + "px;vertical-align: middle;'>非常抱歉，您的浏览器不支持canvas!</canvas>"; // 建立绘图对象

  crossEndCanvas_min({
    id: id,
    platform: 'web'
  }).then(function (painter) {
    // 统一配置画笔
    painter.config({
      "textAlign": "center",
      "textBaseline": "middle",
      "font-size": config.mathFormula['font-size']
    });

    var drawFormula = function drawFormula(x, y, data) {
      switch (data.type) {
        case "string":
          {
            painter.fillText(data.contents[0], x + data.width * 0.5, y + data.height * 0.5);
            break;
          }

        case "gen":
          {
            // 先绘制根号下的表达式
            drawFormula(x + 5 + config.mathFormula['padding-size'], y + config.mathFormula['padding-size'], data.contents[0]); // 然后绘制根号

            painter.beginPath().lineTo(x + config.mathFormula['padding-size'], y + data.height - config.mathFormula['padding-size']).lineTo(x + config.mathFormula['padding-size'] + 2.5, y + data.height - config.mathFormula['padding-size'] - 2.5).lineTo(x + config.mathFormula['padding-size'] + 5, y + data.height - config.mathFormula['padding-size']).lineTo(x + config.mathFormula['padding-size'] + 5, y + config.mathFormula['padding-size'] * 0.5).lineTo(x + data.width - config.mathFormula['padding-size'], y + config.mathFormula['padding-size'] * 0.5).stroke();
            break;
          }

        case "limt":
          {
            // 先绘制极限文字和趋势
            painter.fillText("limt", x + config.mathFormula['padding-size'] + data._help.leftWidth * 0.5, y + config.mathFormula['padding-size'] + data._help.limtSize.height * 0.5);
            drawFormula(x + config.mathFormula['padding-size'], y + data._help.limtSize.height + config.mathFormula['padding-size'], data.contents[0]); // 然后绘制表达式

            drawFormula(x + config.mathFormula['padding-size'] + data._help.leftWidth, y, data.contents[1]);
            break;
          }

        case "sum":
          {
            // 先绘制左边的，从下到上
            drawFormula(x + data._help.leftWidth * 0.5 - data._help.p1Width * 0.5 + config.mathFormula["padding-size"], y + data.height * 0.5 + 10 + config.mathFormula["padding-size"], data.contents[0]);
            painter.beginPath().lineTo(x + data._help.leftWidth * 0.5 + 10 + config.mathFormula["padding-size"], y + data.height * 0.5 - 10 + config.mathFormula["padding-size"]).lineTo(x + data._help.leftWidth * 0.5 - 10 + config.mathFormula["padding-size"], y + data.height * 0.5 - 10 + config.mathFormula["padding-size"]).lineTo(x + data._help.leftWidth * 0.5 + 7 + config.mathFormula["padding-size"], y + data.height * 0.5 + config.mathFormula["padding-size"]).lineTo(x + data._help.leftWidth * 0.5 - 10 + config.mathFormula["padding-size"], y + data.height * 0.5 + 10 + config.mathFormula["padding-size"]).lineTo(x + data._help.leftWidth * 0.5 + 10 + config.mathFormula["padding-size"], y + data.height * 0.5 + 10 + config.mathFormula["padding-size"]).stroke();
            drawFormula(x + data._help.leftWidth * 0.5 - data._help.p2Width * 0.5 + config.mathFormula["padding-size"], y + data.height * 0.5 - 10 - data._help.p2Height + config.mathFormula["padding-size"], data.contents[1]); // 然后绘制右边的

            drawFormula(x + data._help.leftWidth + config.mathFormula["padding-size"], y + data.height * 0.5 - data._help.rightHeight * 0.5, data.contents[2]);
            break;
          }

        case "join":
          {
            // 从左到右，一个个绘制即可
            var _iterator = _createForOfIteratorHelper(data.contents),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;
                drawFormula(x + config.mathFormula["padding-size"], y - item.height * 0.5 + data.height * 0.5, item);
                x += item.width;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            break;
          }

        default:
          {
            console.error('未匹配的数据格式：');
            console.error(x, y, data);
          }
      }
    };

    drawFormula(0, 0, mathFormulaData);
  });
};
/**
 * 根据 mathFormula 提供的方法生成的数据，
 * 绘制出数学式子
 */


var kpMathFormula = {
  inserted: function inserted(el, binding) {
    doit(el, binding);
  },
  update: function update(el, binding) {
    doit(el, binding);
  }
};

/*!
 * 💡 - 提供常用的DOM操作方法
 * https://github.com/hai2007/tool.js/blob/master/xhtml.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */
// 命名空间路径
var namespace = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: "http://www.w3.org/1999/xhtml",
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
/**
 * 结点操作补充
 */

var xhtml = {
  // 阻止冒泡
  "stopPropagation": function stopPropagation(event) {
    event = event || window.event;

    if (event.stopPropagation) {
      //这是其他非IE浏览器
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  },
  // 阻止默认事件
  "preventDefault": function preventDefault(event) {
    event = event || window.event;

    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },
  // 判断是否是结点
  "isNode": function isNode(param) {
    return param && (param.nodeType === 1 || param.nodeType === 9 || param.nodeType === 11);
  },
  // 绑定事件
  "bind": function bind(dom, eventType, callback) {
    if (dom.constructor === Array || dom.constructor === NodeList || dom.constructor === HTMLCollection) {
      for (var i = 0; i < dom.length; i++) {
        this.bind(dom[i], eventType, callback);
      }

      return;
    }

    if (window.attachEvent) dom.attachEvent("on" + eventType, callback);else dom.addEventListener(eventType, callback, false);
  },
  // 去掉绑定事件
  "unbind": function unbind(dom, eventType, handler) {
    if (dom.constructor === Array || dom.constructor === NodeList || dom.constructor === HTMLCollection) {
      for (var i = 0; i < dom.length; i++) {
        this.unbind(dom[i], eventType, handler);
      }

      return;
    }

    if (window.detachEvent) dom.detachEvent('on' + eventType, handler);else dom.removeEventListener(eventType, handler, false);
  },
  // 在当前上下文context上查找结点
  // selectFun可选，返回boolean用以判断当前面对的结点是否保留
  "find": function find(context, selectFun, tagName) {
    if (!this.isNode(context)) return [];
    var nodes = context.getElementsByTagName(tagName || '*');
    var result = [];

    for (var i = 0; i < nodes.length; i++) {
      if (this.isNode(nodes[i]) && (typeof selectFun != "function" || selectFun(nodes[i]))) result.push(nodes[i]);
    }

    return result;
  },
  // 寻找当前结点的孩子结点
  // selectFun可选，返回boolean用以判断当前面对的结点是否保留
  "children": function children(dom, selectFun) {
    var nodes = dom.childNodes;
    var result = [];

    for (var i = 0; i < nodes.length; i++) {
      if (this.isNode(nodes[i]) && (typeof selectFun != "function" || selectFun(nodes[i]))) result.push(nodes[i]);
    }

    return result;
  },
  // 判断结点是否有指定class
  // clazzs可以是字符串或数组字符串
  // notStrict可选，boolean值，默认false表示结点必须包含全部class,true表示至少包含一个即可
  "hasClass": function hasClass(dom, clazzs, notStrict) {
    if (clazzs.constructor !== Array) clazzs = [clazzs];
    var class_str = " " + (dom.getAttribute('class') || "") + " ";

    for (var i = 0; i < clazzs.length; i++) {
      if (class_str.indexOf(" " + clazzs[i] + " ") >= 0) {
        if (notStrict) return true;
      } else {
        if (!notStrict) return false;
      }
    }

    return true;
  },
  // 删除指定class
  "removeClass": function removeClass(dom, clazz) {
    var oldClazz = " " + (dom.getAttribute('class') || "") + " ";
    var newClazz = oldClazz.replace(" " + clazz.trim() + " ", " ");
    dom.setAttribute('class', newClazz.trim());
  },
  // 添加指定class
  "addClass": function addClass(dom, clazz) {
    if (this.hasClass(dom, clazz)) return;
    var oldClazz = dom.getAttribute('class') || "";
    dom.setAttribute('class', oldClazz + " " + clazz);
  },
  // 字符串变成结点
  // isSvg可选，boolean值，默认false表示结点是html，为true表示svg类型
  "toNode": function toNode(template, isSvg) {
    var frame; // html和svg上下文不一样

    if (isSvg) frame = document.createElementNS(namespace.svg, 'svg');else {
      var frameTagName = 'div'; // 大部分的标签可以直接使用div作为容器
      // 部分特殊的需要特殊的容器标签

      if (/^<tr[> ]/.test(template)) {
        frameTagName = "tbody";
      } else if (/^<th[> ]/.test(template) || /^<td[> ]/.test(template)) {
        frameTagName = "tr";
      } else if (/^<thead[> ]/.test(template) || /^<tbody[> ]/.test(template)) {
        frameTagName = "table";
      }

      frame = document.createElement(frameTagName);
    } // 低版本浏览器svg没有innerHTML，考虑是vue框架中，没有补充

    frame.innerHTML = template;
    var childNodes = frame.childNodes;

    for (var i = 0; i < childNodes.length; i++) {
      if (this.isNode(childNodes[i])) return childNodes[i];
    }
  },
  // 主动触发事件
  "trigger": function trigger(dom, eventType) {
    //创建event的对象实例。
    if (document.createEventObject) {
      // IE浏览器支持fireEvent方法
      dom.fireEvent('on' + eventType, document.createEventObject());
    } // 其他标准浏览器使用dispatchEvent方法
    else {
      var _event = document.createEvent('HTMLEvents'); // 3个参数：事件类型，是否冒泡，是否阻止浏览器的默认行为


      _event.initEvent(eventType, true, false);

      dom.dispatchEvent(_event);
    }
  },
  // 获取样式
  "getStyle": function getStyle(dom, name) {
    // 获取结点的全部样式
    var allStyle = document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(dom, null) : dom.currentStyle; // 如果没有指定属性名称，返回全部样式

    return typeof name === 'string' ? allStyle.getPropertyValue(name) : allStyle;
  },
  // 获取元素位置
  "offsetPosition": function offsetPosition(dom) {
    var left = 0;
    var top = 0;
    top = dom.offsetTop;
    left = dom.offsetLeft;
    dom = dom.offsetParent;

    while (dom) {
      top += dom.offsetTop;
      left += dom.offsetLeft;
      dom = dom.offsetParent;
    }

    return {
      "left": left,
      "top": top
    };
  },
  // 获取鼠标相对元素位置
  "mousePosition": function mousePosition(dom, event) {
    var bounding = dom.getBoundingClientRect();
    if (!event || !event.clientX) throw new Error('Event is necessary!');
    return {
      "x": event.clientX - bounding.left,
      "y": event.clientY - bounding.top
    };
  },
  // 删除结点
  "remove": function remove(dom) {
    dom.parentNode.removeChild(dom);
  },
  // 设置多个样式
  "setStyles": function setStyles(dom, styles) {
    for (var key in styles) {
      dom.style[key] = styles[key];
    }
  },
  // 获取元素大小
  "size": function size(dom, type) {
    var elemHeight, elemWidth;

    if (type == 'content') {
      //内容
      elemWidth = dom.clientWidth - (this.getStyle(dom, 'padding-left') + "").replace('px', '') - (this.getStyle(dom, 'padding-right') + "").replace('px', '');
      elemHeight = dom.clientHeight - (this.getStyle(dom, 'padding-top') + "").replace('px', '') - (this.getStyle(dom, 'padding-bottom') + "").replace('px', '');
    } else if (type == 'padding') {
      //内容+内边距
      elemWidth = dom.clientWidth;
      elemHeight = dom.clientHeight;
    } else if (type == 'border') {
      //内容+内边距+边框
      elemWidth = dom.offsetWidth;
      elemHeight = dom.offsetHeight;
    } else if (type == 'scroll') {
      //滚动的宽（不包括border）
      elemWidth = dom.scrollWidth;
      elemHeight = dom.scrollHeight;
    } else {
      elemWidth = dom.offsetWidth;
      elemHeight = dom.offsetHeight;
    }

    return {
      width: elemWidth,
      height: elemHeight
    };
  },
  // 在被选元素内部的结尾插入内容
  "append": function append(el, template) {
    var node = this.isNode(template) ? template : this.toNode(template);
    el.appendChild(node);
    return node;
  },
  // 在被选元素内部的开头插入内容
  "prepend": function prepend(el, template) {
    var node = this.isNode(template) ? template : this.toNode(template);
    el.insertBefore(node, el.childNodes[0]);
    return node;
  },
  // 在被选元素之后插入内容
  "after": function after(el, template) {
    var node = this.isNode(template) ? template : this.toNode(template);
    el.parentNode.insertBefore(node, el.nextSibling);
    return node;
  },
  // 在被选元素之前插入内容
  "before": function before(el, template) {
    var node = this.isNode(template) ? template : this.toNode(template);
    el.parentNode.insertBefore(node, el);
    return node;
  }
};

// 主要用于计算文字的宽
var helpHidden = null;
function calcSize (texts) {
  if (!helpHidden) {
    helpHidden = xhtml.toNode("<div></div>"); // 设置一些必要的样式

    xhtml.setStyles(helpHidden, {
      "font-size": config.mathFormula['font-size'] + "px",
      "font-family": "sans-serif",
      "padding": "0",
      "border": "none",
      "position": "fixed",
      "bottom": "-100px"
    });
    xhtml.append(document.body, helpHidden);
  }

  helpHidden.innerText = texts;
  return xhtml.size(helpHidden);
}

/**
 * 用于捕获用户意图的一系列方法
 */

var formatBasic = function formatBasic(p1) {
  if (isString(p1)) {
    var contentSize = calcSize(p1);
    return {
      width: contentSize.width + config.mathFormula["padding-size"] * 2,
      height: contentSize.height + config.mathFormula["padding-size"] * 2,
      contents: [p1],
      type: 'string'
    };
  } else {
    return p1;
  }
};

var helpSize = {};

var getContentSize = function getContentSize(p1) {
  if (!(p1 in helpSize)) {
    helpSize[p1] = calcSize(p1);
  }

  return helpSize[p1];
};

var mathFormula = {
  // 根号
  gen: function gen(p1) {
    var p1Obj = formatBasic(p1);
    return {
      width: p1Obj.width + 5 + config.mathFormula["padding-size"] * 2,
      height: p1Obj.height + config.mathFormula["padding-size"] * 2,
      contents: [p1Obj],
      type: 'gen'
    };
  },
  // 极限
  limt: function limt(p1, p2) {
    var p1Obj = formatBasic(p1);
    var p2Obj = formatBasic(p2);
    var limtSize = getContentSize('limt');
    var leftHeight = limtSize.height + p1Obj.height;
    return {
      width: p1Obj.width + p2Obj.width + config.mathFormula["padding-size"] * 2,
      height: leftHeight > p2Obj.height ? leftHeight : p2Obj.height,
      contents: [p1Obj, p2Obj],
      type: 'limt',
      _help: {
        limtSize: limtSize,
        leftWidth: p1Obj.width
      }
    };
  },
  // 求和
  sum: function sum(p1, p2, p3) {
    var p1Obj = formatBasic(p1);
    var p2Obj = formatBasic(p2);
    var p3Obj = formatBasic(p3);
    var leftWidth = Math.max(p1Obj.width, p2Obj.width, 20);
    return {
      width: leftWidth + p3Obj.width + config.mathFormula["padding-size"] * 2,
      height: Math.max(Math.max(p1Obj.height, p2Obj.height) * 2 + 20, p3Obj.height) + config.mathFormula["padding-size"] * 2,
      contents: [p1Obj, p2Obj, p3Obj],
      type: "sum",
      _help: {
        leftWidth: leftWidth,
        p1Height: p1Obj.height,
        p1Width: p1Obj.width,
        p2Height: p2Obj.height,
        p2Width: p2Obj.width,
        rightHeight: p3Obj.height
      }
    };
  },
  // 拼接组合
  join: function join() {
    var pxObjs = [],
        width = 0,
        height = 0;

    for (var _len = arguments.length, px = new Array(_len), _key = 0; _key < _len; _key++) {
      px[_key] = arguments[_key];
    }

    for (var _i = 0, _px = px; _i < _px.length; _i++) {
      var p = _px[_i];
      var pxObj = formatBasic(p);
      pxObjs.push(pxObj);
      width += pxObj.width;
      height = pxObj.height > height ? pxObj.height : height;
    }

    return {
      width: width + config.mathFormula["padding-size"] * 2,
      height: height + config.mathFormula["padding-size"] * 2,
      contents: pxObjs,
      type: "join"
    };
  }
};

// 引入QuickPaper核心代码，基于此进行二次开发
quickPaper_core_min.directive("kpMathFormula", kpMathFormula); // 意图捕获方法集
quickPaper_core_min.prototype.$mathFormula = mathFormula;

export default quickPaper_core_min;
