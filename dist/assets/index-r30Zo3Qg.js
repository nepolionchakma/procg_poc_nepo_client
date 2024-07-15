function Ac(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function bc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var $c = { exports: {} },
  Bo = {},
  Bc = { exports: {} },
  J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sl = Symbol.for("react.element"),
  Jp = Symbol.for("react.portal"),
  Zp = Symbol.for("react.fragment"),
  qp = Symbol.for("react.strict_mode"),
  eh = Symbol.for("react.profiler"),
  th = Symbol.for("react.provider"),
  nh = Symbol.for("react.context"),
  rh = Symbol.for("react.forward_ref"),
  lh = Symbol.for("react.suspense"),
  oh = Symbol.for("react.memo"),
  ih = Symbol.for("react.lazy"),
  lu = Symbol.iterator;
function ah(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (lu && e[lu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Vc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Wc = Object.assign,
  Hc = {};
function Sr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Hc),
    (this.updater = n || Vc);
}
Sr.prototype.isReactComponent = {};
Sr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Sr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Qc() {}
Qc.prototype = Sr.prototype;
function Ba(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Hc),
    (this.updater = n || Vc);
}
var Va = (Ba.prototype = new Qc());
Va.constructor = Ba;
Wc(Va, Sr.prototype);
Va.isPureReactComponent = !0;
var ou = Array.isArray,
  Kc = Object.prototype.hasOwnProperty,
  Wa = { current: null },
  Gc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Kc.call(t, r) && !Gc.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: Sl,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Wa.current,
  };
}
function sh(e, t) {
  return {
    $$typeof: Sl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ha(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Sl;
}
function uh(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var iu = /\/+/g;
function pi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? uh("" + e.key)
    : t.toString(36);
}
function ql(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Sl:
          case Jp:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + pi(i, 0) : r),
      ou(l)
        ? ((n = ""),
          e != null && (n = e.replace(iu, "$&/") + "/"),
          ql(l, t, n, "", function (u) {
            return u;
          }))
        : l != null &&
          (Ha(l) &&
            (l = sh(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(iu, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), ou(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var s = r + pi(o, a);
      i += ql(o, t, n, s, l);
    }
  else if (((s = ah(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + pi(o, a++)), (i += ql(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function Ol(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    ql(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function ch(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ve = { current: null },
  eo = { transition: null },
  dh = {
    ReactCurrentDispatcher: Ve,
    ReactCurrentBatchConfig: eo,
    ReactCurrentOwner: Wa,
  };
function Xc() {
  throw Error("act(...) is not supported in production builds of React.");
}
J.Children = {
  map: Ol,
  forEach: function (e, t, n) {
    Ol(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ol(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ol(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ha(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
J.Component = Sr;
J.Fragment = Zp;
J.Profiler = eh;
J.PureComponent = Ba;
J.StrictMode = qp;
J.Suspense = lh;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dh;
J.act = Xc;
J.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Wc({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Wa.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      Kc.call(t, s) &&
        !Gc.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Sl, type: e.type, key: l, ref: o, props: r, _owner: i };
};
J.createContext = function (e) {
  return (
    (e = {
      $$typeof: nh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: th, _context: e }),
    (e.Consumer = e)
  );
};
J.createElement = Yc;
J.createFactory = function (e) {
  var t = Yc.bind(null, e);
  return (t.type = e), t;
};
J.createRef = function () {
  return { current: null };
};
J.forwardRef = function (e) {
  return { $$typeof: rh, render: e };
};
J.isValidElement = Ha;
J.lazy = function (e) {
  return { $$typeof: ih, _payload: { _status: -1, _result: e }, _init: ch };
};
J.memo = function (e, t) {
  return { $$typeof: oh, type: e, compare: t === void 0 ? null : t };
};
J.startTransition = function (e) {
  var t = eo.transition;
  eo.transition = {};
  try {
    e();
  } finally {
    eo.transition = t;
  }
};
J.unstable_act = Xc;
J.useCallback = function (e, t) {
  return Ve.current.useCallback(e, t);
};
J.useContext = function (e) {
  return Ve.current.useContext(e);
};
J.useDebugValue = function () {};
J.useDeferredValue = function (e) {
  return Ve.current.useDeferredValue(e);
};
J.useEffect = function (e, t) {
  return Ve.current.useEffect(e, t);
};
J.useId = function () {
  return Ve.current.useId();
};
J.useImperativeHandle = function (e, t, n) {
  return Ve.current.useImperativeHandle(e, t, n);
};
J.useInsertionEffect = function (e, t) {
  return Ve.current.useInsertionEffect(e, t);
};
J.useLayoutEffect = function (e, t) {
  return Ve.current.useLayoutEffect(e, t);
};
J.useMemo = function (e, t) {
  return Ve.current.useMemo(e, t);
};
J.useReducer = function (e, t, n) {
  return Ve.current.useReducer(e, t, n);
};
J.useRef = function (e) {
  return Ve.current.useRef(e);
};
J.useState = function (e) {
  return Ve.current.useState(e);
};
J.useSyncExternalStore = function (e, t, n) {
  return Ve.current.useSyncExternalStore(e, t, n);
};
J.useTransition = function () {
  return Ve.current.useTransition();
};
J.version = "18.3.1";
Bc.exports = J;
var _ = Bc.exports;
const Ot = bc(_),
  fh = Ac({ __proto__: null, default: Ot }, [_]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ph = _,
  hh = Symbol.for("react.element"),
  mh = Symbol.for("react.fragment"),
  vh = Object.prototype.hasOwnProperty,
  gh = ph.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  yh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Jc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) vh.call(t, r) && !yh.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: hh,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: gh.current,
  };
}
Bo.Fragment = mh;
Bo.jsx = Jc;
Bo.jsxs = Jc;
$c.exports = Bo;
var w = $c.exports,
  Bi = {},
  Zc = { exports: {} },
  rt = {},
  qc = { exports: {} },
  ed = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(z, A) {
    var B = z.length;
    z.push(A);
    e: for (; 0 < B; ) {
      var X = (B - 1) >>> 1,
        ee = z[X];
      if (0 < l(ee, A)) (z[X] = A), (z[B] = ee), (B = X);
      else break e;
    }
  }
  function n(z) {
    return z.length === 0 ? null : z[0];
  }
  function r(z) {
    if (z.length === 0) return null;
    var A = z[0],
      B = z.pop();
    if (B !== A) {
      z[0] = B;
      e: for (var X = 0, ee = z.length, St = ee >>> 1; X < St; ) {
        var Re = 2 * (X + 1) - 1,
          ft = z[Re],
          Ue = Re + 1,
          $n = z[Ue];
        if (0 > l(ft, B))
          Ue < ee && 0 > l($n, ft)
            ? ((z[X] = $n), (z[Ue] = B), (X = Ue))
            : ((z[X] = ft), (z[Re] = B), (X = Re));
        else if (Ue < ee && 0 > l($n, B)) (z[X] = $n), (z[Ue] = B), (X = Ue);
        else break e;
      }
    }
    return A;
  }
  function l(z, A) {
    var B = z.sortIndex - A.sortIndex;
    return B !== 0 ? B : z.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var s = [],
    u = [],
    f = 1,
    c = null,
    p = 3,
    S = !1,
    k = !1,
    x = !1,
    N = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(z) {
    for (var A = n(u); A !== null; ) {
      if (A.callback === null) r(u);
      else if (A.startTime <= z)
        r(u), (A.sortIndex = A.expirationTime), t(s, A);
      else break;
      A = n(u);
    }
  }
  function C(z) {
    if (((x = !1), v(z), !k))
      if (n(s) !== null) (k = !0), Xe(L);
      else {
        var A = n(u);
        A !== null && oe(C, A.startTime - z);
      }
  }
  function L(z, A) {
    (k = !1), x && ((x = !1), h(T), (T = -1)), (S = !0);
    var B = p;
    try {
      for (
        v(A), c = n(s);
        c !== null && (!(c.expirationTime > A) || (z && !W()));

      ) {
        var X = c.callback;
        if (typeof X == "function") {
          (c.callback = null), (p = c.priorityLevel);
          var ee = X(c.expirationTime <= A);
          (A = e.unstable_now()),
            typeof ee == "function" ? (c.callback = ee) : c === n(s) && r(s),
            v(A);
        } else r(s);
        c = n(s);
      }
      if (c !== null) var St = !0;
      else {
        var Re = n(u);
        Re !== null && oe(C, Re.startTime - A), (St = !1);
      }
      return St;
    } finally {
      (c = null), (p = B), (S = !1);
    }
  }
  var g = !1,
    j = null,
    T = -1,
    O = 5,
    F = -1;
  function W() {
    return !(e.unstable_now() - F < O);
  }
  function H() {
    if (j !== null) {
      var z = e.unstable_now();
      F = z;
      var A = !0;
      try {
        A = j(!0, z);
      } finally {
        A ? le() : ((g = !1), (j = null));
      }
    } else g = !1;
  }
  var le;
  if (typeof d == "function")
    le = function () {
      d(H);
    };
  else if (typeof MessageChannel < "u") {
    var ce = new MessageChannel(),
      dt = ce.port2;
    (ce.port1.onmessage = H),
      (le = function () {
        dt.postMessage(null);
      });
  } else
    le = function () {
      N(H, 0);
    };
  function Xe(z) {
    (j = z), g || ((g = !0), le());
  }
  function oe(z, A) {
    T = N(function () {
      z(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (z) {
      z.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      k || S || ((k = !0), Xe(L));
    }),
    (e.unstable_forceFrameRate = function (z) {
      0 > z || 125 < z
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (O = 0 < z ? Math.floor(1e3 / z) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (z) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = p;
      }
      var B = p;
      p = A;
      try {
        return z();
      } finally {
        p = B;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (z, A) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var B = p;
      p = z;
      try {
        return A();
      } finally {
        p = B;
      }
    }),
    (e.unstable_scheduleCallback = function (z, A, B) {
      var X = e.unstable_now();
      switch (
        (typeof B == "object" && B !== null
          ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? X + B : X))
          : (B = X),
        z)
      ) {
        case 1:
          var ee = -1;
          break;
        case 2:
          ee = 250;
          break;
        case 5:
          ee = 1073741823;
          break;
        case 4:
          ee = 1e4;
          break;
        default:
          ee = 5e3;
      }
      return (
        (ee = B + ee),
        (z = {
          id: f++,
          callback: A,
          priorityLevel: z,
          startTime: B,
          expirationTime: ee,
          sortIndex: -1,
        }),
        B > X
          ? ((z.sortIndex = B),
            t(u, z),
            n(s) === null &&
              z === n(u) &&
              (x ? (h(T), (T = -1)) : (x = !0), oe(C, B - X)))
          : ((z.sortIndex = ee), t(s, z), k || S || ((k = !0), Xe(L))),
        z
      );
    }),
    (e.unstable_shouldYield = W),
    (e.unstable_wrapCallback = function (z) {
      var A = p;
      return function () {
        var B = p;
        p = A;
        try {
          return z.apply(this, arguments);
        } finally {
          p = B;
        }
      };
    });
})(ed);
qc.exports = ed;
var wh = qc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xh = _,
  nt = wh;
function R(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var td = new Set(),
  nl = {};
function An(e, t) {
  fr(e, t), fr(e + "Capture", t);
}
function fr(e, t) {
  for (nl[e] = t, e = 0; e < t.length; e++) td.add(t[e]);
}
var Ut = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Vi = Object.prototype.hasOwnProperty,
  Sh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  au = {},
  su = {};
function kh(e) {
  return Vi.call(su, e)
    ? !0
    : Vi.call(au, e)
    ? !1
    : Sh.test(e)
    ? (su[e] = !0)
    : ((au[e] = !0), !1);
}
function Eh(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ch(e, t, n, r) {
  if (t === null || typeof t > "u" || Eh(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function We(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ze = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ze[e] = new We(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ze[t] = new We(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ze[e] = new We(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ze[e] = new We(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ze[e] = new We(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ze[e] = new We(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ze[e] = new We(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ze[e] = new We(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ze[e] = new We(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Qa = /[\-:]([a-z])/g;
function Ka(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Qa, Ka);
    ze[t] = new We(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Qa, Ka);
    ze[t] = new We(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Qa, Ka);
  ze[t] = new We(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ze[e] = new We(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ze.xlinkHref = new We(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ze[e] = new We(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ga(e, t, n, r) {
  var l = ze.hasOwnProperty(t) ? ze[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ch(t, n, l, r) && (n = null),
    r || l === null
      ? kh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Vt = xh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Il = Symbol.for("react.element"),
  Gn = Symbol.for("react.portal"),
  Yn = Symbol.for("react.fragment"),
  Ya = Symbol.for("react.strict_mode"),
  Wi = Symbol.for("react.profiler"),
  nd = Symbol.for("react.provider"),
  rd = Symbol.for("react.context"),
  Xa = Symbol.for("react.forward_ref"),
  Hi = Symbol.for("react.suspense"),
  Qi = Symbol.for("react.suspense_list"),
  Ja = Symbol.for("react.memo"),
  Jt = Symbol.for("react.lazy"),
  ld = Symbol.for("react.offscreen"),
  uu = Symbol.iterator;
function jr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (uu && e[uu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ye = Object.assign,
  hi;
function $r(e) {
  if (hi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      hi = (t && t[1]) || "";
    }
  return (
    `
` +
    hi +
    e
  );
}
var mi = !1;
function vi(e, t) {
  if (!e || mi) return "";
  mi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var l = u.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          a = o.length - 1;
        1 <= i && 0 <= a && l[i] !== o[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (l[i] !== o[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || l[i] !== o[a])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (mi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? $r(e) : "";
}
function _h(e) {
  switch (e.tag) {
    case 5:
      return $r(e.type);
    case 16:
      return $r("Lazy");
    case 13:
      return $r("Suspense");
    case 19:
      return $r("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = vi(e.type, !1)), e;
    case 11:
      return (e = vi(e.type.render, !1)), e;
    case 1:
      return (e = vi(e.type, !0)), e;
    default:
      return "";
  }
}
function Ki(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Yn:
      return "Fragment";
    case Gn:
      return "Portal";
    case Wi:
      return "Profiler";
    case Ya:
      return "StrictMode";
    case Hi:
      return "Suspense";
    case Qi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case rd:
        return (e.displayName || "Context") + ".Consumer";
      case nd:
        return (e._context.displayName || "Context") + ".Provider";
      case Xa:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ja:
        return (
          (t = e.displayName || null), t !== null ? t : Ki(e.type) || "Memo"
        );
      case Jt:
        (t = e._payload), (e = e._init);
        try {
          return Ki(e(t));
        } catch {}
    }
  return null;
}
function Ph(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ki(t);
    case 8:
      return t === Ya ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function fn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function od(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Nh(e) {
  var t = od(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Fl(e) {
  e._valueTracker || (e._valueTracker = Nh(e));
}
function id(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = od(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function po(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Gi(e, t) {
  var n = t.checked;
  return ye({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function cu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = fn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ad(e, t) {
  (t = t.checked), t != null && Ga(e, "checked", t, !1);
}
function Yi(e, t) {
  ad(e, t);
  var n = fn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Xi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Xi(e, t.type, fn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function du(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Xi(e, t, n) {
  (t !== "number" || po(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Br = Array.isArray;
function ir(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + fn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ji(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return ye({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function fu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (Br(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: fn(n) };
}
function sd(e, t) {
  var n = fn(t.value),
    r = fn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function pu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ud(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Zi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ud(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ul,
  cd = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ul = Ul || document.createElement("div"),
          Ul.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ul.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function rl(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Qr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  jh = ["Webkit", "ms", "Moz", "O"];
Object.keys(Qr).forEach(function (e) {
  jh.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Qr[t] = Qr[e]);
  });
});
function dd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Qr.hasOwnProperty(e) && Qr[e])
    ? ("" + t).trim()
    : t + "px";
}
function fd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = dd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Rh = ye(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function qi(e, t) {
  if (t) {
    if (Rh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function ea(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ta = null;
function Za(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var na = null,
  ar = null,
  sr = null;
function hu(e) {
  if ((e = Cl(e))) {
    if (typeof na != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = Ko(t)), na(e.stateNode, e.type, t));
  }
}
function pd(e) {
  ar ? (sr ? sr.push(e) : (sr = [e])) : (ar = e);
}
function hd() {
  if (ar) {
    var e = ar,
      t = sr;
    if (((sr = ar = null), hu(e), t)) for (e = 0; e < t.length; e++) hu(t[e]);
  }
}
function md(e, t) {
  return e(t);
}
function vd() {}
var gi = !1;
function gd(e, t, n) {
  if (gi) return e(t, n);
  gi = !0;
  try {
    return md(e, t, n);
  } finally {
    (gi = !1), (ar !== null || sr !== null) && (vd(), hd());
  }
}
function ll(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ko(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var ra = !1;
if (Ut)
  try {
    var Rr = {};
    Object.defineProperty(Rr, "passive", {
      get: function () {
        ra = !0;
      },
    }),
      window.addEventListener("test", Rr, Rr),
      window.removeEventListener("test", Rr, Rr);
  } catch {
    ra = !1;
  }
function Lh(e, t, n, r, l, o, i, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var Kr = !1,
  ho = null,
  mo = !1,
  la = null,
  Th = {
    onError: function (e) {
      (Kr = !0), (ho = e);
    },
  };
function Mh(e, t, n, r, l, o, i, a, s) {
  (Kr = !1), (ho = null), Lh.apply(Th, arguments);
}
function zh(e, t, n, r, l, o, i, a, s) {
  if ((Mh.apply(this, arguments), Kr)) {
    if (Kr) {
      var u = ho;
      (Kr = !1), (ho = null);
    } else throw Error(R(198));
    mo || ((mo = !0), (la = u));
  }
}
function bn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function yd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function mu(e) {
  if (bn(e) !== e) throw Error(R(188));
}
function Dh(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = bn(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return mu(l), e;
        if (o === r) return mu(l), t;
        o = o.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, a = l.child; a; ) {
        if (a === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (a === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = o.child; a; ) {
          if (a === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (a === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function wd(e) {
  return (e = Dh(e)), e !== null ? xd(e) : null;
}
function xd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = xd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Sd = nt.unstable_scheduleCallback,
  vu = nt.unstable_cancelCallback,
  Oh = nt.unstable_shouldYield,
  Ih = nt.unstable_requestPaint,
  Se = nt.unstable_now,
  Fh = nt.unstable_getCurrentPriorityLevel,
  qa = nt.unstable_ImmediatePriority,
  kd = nt.unstable_UserBlockingPriority,
  vo = nt.unstable_NormalPriority,
  Uh = nt.unstable_LowPriority,
  Ed = nt.unstable_IdlePriority,
  Vo = null,
  Pt = null;
function Ah(e) {
  if (Pt && typeof Pt.onCommitFiberRoot == "function")
    try {
      Pt.onCommitFiberRoot(Vo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var yt = Math.clz32 ? Math.clz32 : Bh,
  bh = Math.log,
  $h = Math.LN2;
function Bh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((bh(e) / $h) | 0)) | 0;
}
var Al = 64,
  bl = 4194304;
function Vr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function go(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~l;
    a !== 0 ? (r = Vr(a)) : ((o &= i), o !== 0 && (r = Vr(o)));
  } else (i = n & ~l), i !== 0 ? (r = Vr(i)) : o !== 0 && (r = Vr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - yt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Vh(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Wh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - yt(o),
      a = 1 << i,
      s = l[i];
    s === -1
      ? (!(a & n) || a & r) && (l[i] = Vh(a, t))
      : s <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function oa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Cd() {
  var e = Al;
  return (Al <<= 1), !(Al & 4194240) && (Al = 64), e;
}
function yi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function kl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - yt(t)),
    (e[t] = n);
}
function Hh(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - yt(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function es(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - yt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var ne = 0;
function _d(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Pd,
  ts,
  Nd,
  jd,
  Rd,
  ia = !1,
  $l = [],
  rn = null,
  ln = null,
  on = null,
  ol = new Map(),
  il = new Map(),
  qt = [],
  Qh =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function gu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      rn = null;
      break;
    case "dragenter":
    case "dragleave":
      ln = null;
      break;
    case "mouseover":
    case "mouseout":
      on = null;
      break;
    case "pointerover":
    case "pointerout":
      ol.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      il.delete(t.pointerId);
  }
}
function Lr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = Cl(t)), t !== null && ts(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Kh(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (rn = Lr(rn, e, t, n, r, l)), !0;
    case "dragenter":
      return (ln = Lr(ln, e, t, n, r, l)), !0;
    case "mouseover":
      return (on = Lr(on, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return ol.set(o, Lr(ol.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), il.set(o, Lr(il.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Ld(e) {
  var t = _n(e.target);
  if (t !== null) {
    var n = bn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = yd(n)), t !== null)) {
          (e.blockedOn = t),
            Rd(e.priority, function () {
              Nd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function to(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = aa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ta = r), n.target.dispatchEvent(r), (ta = null);
    } else return (t = Cl(n)), t !== null && ts(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function yu(e, t, n) {
  to(e) && n.delete(t);
}
function Gh() {
  (ia = !1),
    rn !== null && to(rn) && (rn = null),
    ln !== null && to(ln) && (ln = null),
    on !== null && to(on) && (on = null),
    ol.forEach(yu),
    il.forEach(yu);
}
function Tr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ia ||
      ((ia = !0),
      nt.unstable_scheduleCallback(nt.unstable_NormalPriority, Gh)));
}
function al(e) {
  function t(l) {
    return Tr(l, e);
  }
  if (0 < $l.length) {
    Tr($l[0], e);
    for (var n = 1; n < $l.length; n++) {
      var r = $l[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    rn !== null && Tr(rn, e),
      ln !== null && Tr(ln, e),
      on !== null && Tr(on, e),
      ol.forEach(t),
      il.forEach(t),
      n = 0;
    n < qt.length;
    n++
  )
    (r = qt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < qt.length && ((n = qt[0]), n.blockedOn === null); )
    Ld(n), n.blockedOn === null && qt.shift();
}
var ur = Vt.ReactCurrentBatchConfig,
  yo = !0;
function Yh(e, t, n, r) {
  var l = ne,
    o = ur.transition;
  ur.transition = null;
  try {
    (ne = 1), ns(e, t, n, r);
  } finally {
    (ne = l), (ur.transition = o);
  }
}
function Xh(e, t, n, r) {
  var l = ne,
    o = ur.transition;
  ur.transition = null;
  try {
    (ne = 4), ns(e, t, n, r);
  } finally {
    (ne = l), (ur.transition = o);
  }
}
function ns(e, t, n, r) {
  if (yo) {
    var l = aa(e, t, n, r);
    if (l === null) ji(e, t, r, wo, n), gu(e, r);
    else if (Kh(l, e, t, n, r)) r.stopPropagation();
    else if ((gu(e, r), t & 4 && -1 < Qh.indexOf(e))) {
      for (; l !== null; ) {
        var o = Cl(l);
        if (
          (o !== null && Pd(o),
          (o = aa(e, t, n, r)),
          o === null && ji(e, t, r, wo, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else ji(e, t, r, null, n);
  }
}
var wo = null;
function aa(e, t, n, r) {
  if (((wo = null), (e = Za(r)), (e = _n(e)), e !== null))
    if (((t = bn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = yd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (wo = e), null;
}
function Td(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Fh()) {
        case qa:
          return 1;
        case kd:
          return 4;
        case vo:
        case Uh:
          return 16;
        case Ed:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tn = null,
  rs = null,
  no = null;
function Md() {
  if (no) return no;
  var e,
    t = rs,
    n = t.length,
    r,
    l = "value" in tn ? tn.value : tn.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (no = l.slice(e, 1 < r ? 1 - r : void 0));
}
function ro(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Bl() {
  return !0;
}
function wu() {
  return !1;
}
function lt(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Bl
        : wu),
      (this.isPropagationStopped = wu),
      this
    );
  }
  return (
    ye(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Bl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Bl));
      },
      persist: function () {},
      isPersistent: Bl,
    }),
    t
  );
}
var kr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ls = lt(kr),
  El = ye({}, kr, { view: 0, detail: 0 }),
  Jh = lt(El),
  wi,
  xi,
  Mr,
  Wo = ye({}, El, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: os,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Mr &&
            (Mr && e.type === "mousemove"
              ? ((wi = e.screenX - Mr.screenX), (xi = e.screenY - Mr.screenY))
              : (xi = wi = 0),
            (Mr = e)),
          wi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : xi;
    },
  }),
  xu = lt(Wo),
  Zh = ye({}, Wo, { dataTransfer: 0 }),
  qh = lt(Zh),
  em = ye({}, El, { relatedTarget: 0 }),
  Si = lt(em),
  tm = ye({}, kr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  nm = lt(tm),
  rm = ye({}, kr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  lm = lt(rm),
  om = ye({}, kr, { data: 0 }),
  Su = lt(om),
  im = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  am = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  sm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function um(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = sm[e]) ? !!t[e] : !1;
}
function os() {
  return um;
}
var cm = ye({}, El, {
    key: function (e) {
      if (e.key) {
        var t = im[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ro(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? am[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: os,
    charCode: function (e) {
      return e.type === "keypress" ? ro(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ro(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  dm = lt(cm),
  fm = ye({}, Wo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ku = lt(fm),
  pm = ye({}, El, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: os,
  }),
  hm = lt(pm),
  mm = ye({}, kr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vm = lt(mm),
  gm = ye({}, Wo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  ym = lt(gm),
  wm = [9, 13, 27, 32],
  is = Ut && "CompositionEvent" in window,
  Gr = null;
Ut && "documentMode" in document && (Gr = document.documentMode);
var xm = Ut && "TextEvent" in window && !Gr,
  zd = Ut && (!is || (Gr && 8 < Gr && 11 >= Gr)),
  Eu = " ",
  Cu = !1;
function Dd(e, t) {
  switch (e) {
    case "keyup":
      return wm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Od(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Xn = !1;
function Sm(e, t) {
  switch (e) {
    case "compositionend":
      return Od(t);
    case "keypress":
      return t.which !== 32 ? null : ((Cu = !0), Eu);
    case "textInput":
      return (e = t.data), e === Eu && Cu ? null : e;
    default:
      return null;
  }
}
function km(e, t) {
  if (Xn)
    return e === "compositionend" || (!is && Dd(e, t))
      ? ((e = Md()), (no = rs = tn = null), (Xn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return zd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Em = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function _u(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Em[e.type] : t === "textarea";
}
function Id(e, t, n, r) {
  pd(r),
    (t = xo(t, "onChange")),
    0 < t.length &&
      ((n = new ls("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Yr = null,
  sl = null;
function Cm(e) {
  Kd(e, 0);
}
function Ho(e) {
  var t = qn(e);
  if (id(t)) return e;
}
function _m(e, t) {
  if (e === "change") return t;
}
var Fd = !1;
if (Ut) {
  var ki;
  if (Ut) {
    var Ei = "oninput" in document;
    if (!Ei) {
      var Pu = document.createElement("div");
      Pu.setAttribute("oninput", "return;"),
        (Ei = typeof Pu.oninput == "function");
    }
    ki = Ei;
  } else ki = !1;
  Fd = ki && (!document.documentMode || 9 < document.documentMode);
}
function Nu() {
  Yr && (Yr.detachEvent("onpropertychange", Ud), (sl = Yr = null));
}
function Ud(e) {
  if (e.propertyName === "value" && Ho(sl)) {
    var t = [];
    Id(t, sl, e, Za(e)), gd(Cm, t);
  }
}
function Pm(e, t, n) {
  e === "focusin"
    ? (Nu(), (Yr = t), (sl = n), Yr.attachEvent("onpropertychange", Ud))
    : e === "focusout" && Nu();
}
function Nm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ho(sl);
}
function jm(e, t) {
  if (e === "click") return Ho(t);
}
function Rm(e, t) {
  if (e === "input" || e === "change") return Ho(t);
}
function Lm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var xt = typeof Object.is == "function" ? Object.is : Lm;
function ul(e, t) {
  if (xt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Vi.call(t, l) || !xt(e[l], t[l])) return !1;
  }
  return !0;
}
function ju(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ru(e, t) {
  var n = ju(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ju(n);
  }
}
function Ad(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ad(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function bd() {
  for (var e = window, t = po(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = po(e.document);
  }
  return t;
}
function as(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Tm(e) {
  var t = bd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ad(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && as(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Ru(n, o));
        var i = Ru(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Mm = Ut && "documentMode" in document && 11 >= document.documentMode,
  Jn = null,
  sa = null,
  Xr = null,
  ua = !1;
function Lu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ua ||
    Jn == null ||
    Jn !== po(r) ||
    ((r = Jn),
    "selectionStart" in r && as(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Xr && ul(Xr, r)) ||
      ((Xr = r),
      (r = xo(sa, "onSelect")),
      0 < r.length &&
        ((t = new ls("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Jn))));
}
function Vl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Zn = {
    animationend: Vl("Animation", "AnimationEnd"),
    animationiteration: Vl("Animation", "AnimationIteration"),
    animationstart: Vl("Animation", "AnimationStart"),
    transitionend: Vl("Transition", "TransitionEnd"),
  },
  Ci = {},
  $d = {};
Ut &&
  (($d = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Zn.animationend.animation,
    delete Zn.animationiteration.animation,
    delete Zn.animationstart.animation),
  "TransitionEvent" in window || delete Zn.transitionend.transition);
function Qo(e) {
  if (Ci[e]) return Ci[e];
  if (!Zn[e]) return e;
  var t = Zn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in $d) return (Ci[e] = t[n]);
  return e;
}
var Bd = Qo("animationend"),
  Vd = Qo("animationiteration"),
  Wd = Qo("animationstart"),
  Hd = Qo("transitionend"),
  Qd = new Map(),
  Tu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function hn(e, t) {
  Qd.set(e, t), An(t, [e]);
}
for (var _i = 0; _i < Tu.length; _i++) {
  var Pi = Tu[_i],
    zm = Pi.toLowerCase(),
    Dm = Pi[0].toUpperCase() + Pi.slice(1);
  hn(zm, "on" + Dm);
}
hn(Bd, "onAnimationEnd");
hn(Vd, "onAnimationIteration");
hn(Wd, "onAnimationStart");
hn("dblclick", "onDoubleClick");
hn("focusin", "onFocus");
hn("focusout", "onBlur");
hn(Hd, "onTransitionEnd");
fr("onMouseEnter", ["mouseout", "mouseover"]);
fr("onMouseLeave", ["mouseout", "mouseover"]);
fr("onPointerEnter", ["pointerout", "pointerover"]);
fr("onPointerLeave", ["pointerout", "pointerover"]);
An(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
An(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
An("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
An(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
An(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
An(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Wr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Om = new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));
function Mu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), zh(r, t, void 0, e), (e.currentTarget = null);
}
function Kd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            s = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), s !== o && l.isPropagationStopped())) break e;
          Mu(l, a, u), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (s = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          Mu(l, a, u), (o = s);
        }
    }
  }
  if (mo) throw ((e = la), (mo = !1), (la = null), e);
}
function fe(e, t) {
  var n = t[ha];
  n === void 0 && (n = t[ha] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Gd(t, e, 2, !1), n.add(r));
}
function Ni(e, t, n) {
  var r = 0;
  t && (r |= 4), Gd(n, e, r, t);
}
var Wl = "_reactListening" + Math.random().toString(36).slice(2);
function cl(e) {
  if (!e[Wl]) {
    (e[Wl] = !0),
      td.forEach(function (n) {
        n !== "selectionchange" && (Om.has(n) || Ni(n, !1, e), Ni(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Wl] || ((t[Wl] = !0), Ni("selectionchange", !1, t));
  }
}
function Gd(e, t, n, r) {
  switch (Td(t)) {
    case 1:
      var l = Yh;
      break;
    case 4:
      l = Xh;
      break;
    default:
      l = ns;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !ra ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function ji(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = _n(a)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  gd(function () {
    var u = o,
      f = Za(n),
      c = [];
    e: {
      var p = Qd.get(e);
      if (p !== void 0) {
        var S = ls,
          k = e;
        switch (e) {
          case "keypress":
            if (ro(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = dm;
            break;
          case "focusin":
            (k = "focus"), (S = Si);
            break;
          case "focusout":
            (k = "blur"), (S = Si);
            break;
          case "beforeblur":
          case "afterblur":
            S = Si;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            S = xu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = qh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = hm;
            break;
          case Bd:
          case Vd:
          case Wd:
            S = nm;
            break;
          case Hd:
            S = vm;
            break;
          case "scroll":
            S = Jh;
            break;
          case "wheel":
            S = ym;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = lm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = ku;
        }
        var x = (t & 4) !== 0,
          N = !x && e === "scroll",
          h = x ? (p !== null ? p + "Capture" : null) : p;
        x = [];
        for (var d = u, v; d !== null; ) {
          v = d;
          var C = v.stateNode;
          if (
            (v.tag === 5 &&
              C !== null &&
              ((v = C),
              h !== null && ((C = ll(d, h)), C != null && x.push(dl(d, C, v)))),
            N)
          )
            break;
          d = d.return;
        }
        0 < x.length &&
          ((p = new S(p, k, null, n, f)), c.push({ event: p, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (S = e === "mouseout" || e === "pointerout"),
          p &&
            n !== ta &&
            (k = n.relatedTarget || n.fromElement) &&
            (_n(k) || k[At]))
        )
          break e;
        if (
          (S || p) &&
          ((p =
            f.window === f
              ? f
              : (p = f.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          S
            ? ((k = n.relatedTarget || n.toElement),
              (S = u),
              (k = k ? _n(k) : null),
              k !== null &&
                ((N = bn(k)), k !== N || (k.tag !== 5 && k.tag !== 6)) &&
                (k = null))
            : ((S = null), (k = u)),
          S !== k)
        ) {
          if (
            ((x = xu),
            (C = "onMouseLeave"),
            (h = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = ku),
              (C = "onPointerLeave"),
              (h = "onPointerEnter"),
              (d = "pointer")),
            (N = S == null ? p : qn(S)),
            (v = k == null ? p : qn(k)),
            (p = new x(C, d + "leave", S, n, f)),
            (p.target = N),
            (p.relatedTarget = v),
            (C = null),
            _n(f) === u &&
              ((x = new x(h, d + "enter", k, n, f)),
              (x.target = v),
              (x.relatedTarget = N),
              (C = x)),
            (N = C),
            S && k)
          )
            t: {
              for (x = S, h = k, d = 0, v = x; v; v = Qn(v)) d++;
              for (v = 0, C = h; C; C = Qn(C)) v++;
              for (; 0 < d - v; ) (x = Qn(x)), d--;
              for (; 0 < v - d; ) (h = Qn(h)), v--;
              for (; d--; ) {
                if (x === h || (h !== null && x === h.alternate)) break t;
                (x = Qn(x)), (h = Qn(h));
              }
              x = null;
            }
          else x = null;
          S !== null && zu(c, p, S, x, !1),
            k !== null && N !== null && zu(c, N, k, x, !0);
        }
      }
      e: {
        if (
          ((p = u ? qn(u) : window),
          (S = p.nodeName && p.nodeName.toLowerCase()),
          S === "select" || (S === "input" && p.type === "file"))
        )
          var L = _m;
        else if (_u(p))
          if (Fd) L = Rm;
          else {
            L = Nm;
            var g = Pm;
          }
        else
          (S = p.nodeName) &&
            S.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (L = jm);
        if (L && (L = L(e, u))) {
          Id(c, L, n, f);
          break e;
        }
        g && g(e, p, u),
          e === "focusout" &&
            (g = p._wrapperState) &&
            g.controlled &&
            p.type === "number" &&
            Xi(p, "number", p.value);
      }
      switch (((g = u ? qn(u) : window), e)) {
        case "focusin":
          (_u(g) || g.contentEditable === "true") &&
            ((Jn = g), (sa = u), (Xr = null));
          break;
        case "focusout":
          Xr = sa = Jn = null;
          break;
        case "mousedown":
          ua = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ua = !1), Lu(c, n, f);
          break;
        case "selectionchange":
          if (Mm) break;
        case "keydown":
        case "keyup":
          Lu(c, n, f);
      }
      var j;
      if (is)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Xn
          ? Dd(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (zd &&
          n.locale !== "ko" &&
          (Xn || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Xn && (j = Md())
            : ((tn = f),
              (rs = "value" in tn ? tn.value : tn.textContent),
              (Xn = !0))),
        (g = xo(u, T)),
        0 < g.length &&
          ((T = new Su(T, e, null, n, f)),
          c.push({ event: T, listeners: g }),
          j ? (T.data = j) : ((j = Od(n)), j !== null && (T.data = j)))),
        (j = xm ? Sm(e, n) : km(e, n)) &&
          ((u = xo(u, "onBeforeInput")),
          0 < u.length &&
            ((f = new Su("onBeforeInput", "beforeinput", null, n, f)),
            c.push({ event: f, listeners: u }),
            (f.data = j)));
    }
    Kd(c, t);
  });
}
function dl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function xo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = ll(e, n)),
      o != null && r.unshift(dl(e, o, l)),
      (o = ll(e, t)),
      o != null && r.push(dl(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Qn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function zu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      u = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      l
        ? ((s = ll(n, o)), s != null && i.unshift(dl(n, s, a)))
        : l || ((s = ll(n, o)), s != null && i.push(dl(n, s, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Im = /\r\n?/g,
  Fm = /\u0000|\uFFFD/g;
function Du(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Im,
      `
`
    )
    .replace(Fm, "");
}
function Hl(e, t, n) {
  if (((t = Du(t)), Du(e) !== t && n)) throw Error(R(425));
}
function So() {}
var ca = null,
  da = null;
function fa(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var pa = typeof setTimeout == "function" ? setTimeout : void 0,
  Um = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ou = typeof Promise == "function" ? Promise : void 0,
  Am =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ou < "u"
      ? function (e) {
          return Ou.resolve(null).then(e).catch(bm);
        }
      : pa;
function bm(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ri(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), al(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  al(t);
}
function an(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Iu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Er = Math.random().toString(36).slice(2),
  _t = "__reactFiber$" + Er,
  fl = "__reactProps$" + Er,
  At = "__reactContainer$" + Er,
  ha = "__reactEvents$" + Er,
  $m = "__reactListeners$" + Er,
  Bm = "__reactHandles$" + Er;
function _n(e) {
  var t = e[_t];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[At] || n[_t])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Iu(e); e !== null; ) {
          if ((n = e[_t])) return n;
          e = Iu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Cl(e) {
  return (
    (e = e[_t] || e[At]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function qn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function Ko(e) {
  return e[fl] || null;
}
var ma = [],
  er = -1;
function mn(e) {
  return { current: e };
}
function pe(e) {
  0 > er || ((e.current = ma[er]), (ma[er] = null), er--);
}
function ue(e, t) {
  er++, (ma[er] = e.current), (e.current = t);
}
var pn = {},
  Fe = mn(pn),
  Ke = mn(!1),
  zn = pn;
function pr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return pn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Ge(e) {
  return (e = e.childContextTypes), e != null;
}
function ko() {
  pe(Ke), pe(Fe);
}
function Fu(e, t, n) {
  if (Fe.current !== pn) throw Error(R(168));
  ue(Fe, t), ue(Ke, n);
}
function Yd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(R(108, Ph(e) || "Unknown", l));
  return ye({}, n, r);
}
function Eo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || pn),
    (zn = Fe.current),
    ue(Fe, e),
    ue(Ke, Ke.current),
    !0
  );
}
function Uu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((e = Yd(e, t, zn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      pe(Ke),
      pe(Fe),
      ue(Fe, e))
    : pe(Ke),
    ue(Ke, n);
}
var Mt = null,
  Go = !1,
  Li = !1;
function Xd(e) {
  Mt === null ? (Mt = [e]) : Mt.push(e);
}
function Vm(e) {
  (Go = !0), Xd(e);
}
function vn() {
  if (!Li && Mt !== null) {
    Li = !0;
    var e = 0,
      t = ne;
    try {
      var n = Mt;
      for (ne = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Mt = null), (Go = !1);
    } catch (l) {
      throw (Mt !== null && (Mt = Mt.slice(e + 1)), Sd(qa, vn), l);
    } finally {
      (ne = t), (Li = !1);
    }
  }
  return null;
}
var tr = [],
  nr = 0,
  Co = null,
  _o = 0,
  ot = [],
  it = 0,
  Dn = null,
  zt = 1,
  Dt = "";
function kn(e, t) {
  (tr[nr++] = _o), (tr[nr++] = Co), (Co = e), (_o = t);
}
function Jd(e, t, n) {
  (ot[it++] = zt), (ot[it++] = Dt), (ot[it++] = Dn), (Dn = e);
  var r = zt;
  e = Dt;
  var l = 32 - yt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - yt(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (zt = (1 << (32 - yt(t) + l)) | (n << l) | r),
      (Dt = o + e);
  } else (zt = (1 << o) | (n << l) | r), (Dt = e);
}
function ss(e) {
  e.return !== null && (kn(e, 1), Jd(e, 1, 0));
}
function us(e) {
  for (; e === Co; )
    (Co = tr[--nr]), (tr[nr] = null), (_o = tr[--nr]), (tr[nr] = null);
  for (; e === Dn; )
    (Dn = ot[--it]),
      (ot[it] = null),
      (Dt = ot[--it]),
      (ot[it] = null),
      (zt = ot[--it]),
      (ot[it] = null);
}
var tt = null,
  et = null,
  he = !1,
  gt = null;
function Zd(e, t) {
  var n = at(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Au(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (tt = e), (et = an(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (tt = e), (et = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Dn !== null ? { id: zt, overflow: Dt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = at(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (tt = e),
            (et = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function va(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ga(e) {
  if (he) {
    var t = et;
    if (t) {
      var n = t;
      if (!Au(e, t)) {
        if (va(e)) throw Error(R(418));
        t = an(n.nextSibling);
        var r = tt;
        t && Au(e, t)
          ? Zd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (he = !1), (tt = e));
      }
    } else {
      if (va(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (he = !1), (tt = e);
    }
  }
}
function bu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  tt = e;
}
function Ql(e) {
  if (e !== tt) return !1;
  if (!he) return bu(e), (he = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !fa(e.type, e.memoizedProps))),
    t && (t = et))
  ) {
    if (va(e)) throw (qd(), Error(R(418)));
    for (; t; ) Zd(e, t), (t = an(t.nextSibling));
  }
  if ((bu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              et = an(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      et = null;
    }
  } else et = tt ? an(e.stateNode.nextSibling) : null;
  return !0;
}
function qd() {
  for (var e = et; e; ) e = an(e.nextSibling);
}
function hr() {
  (et = tt = null), (he = !1);
}
function cs(e) {
  gt === null ? (gt = [e]) : gt.push(e);
}
var Wm = Vt.ReactCurrentBatchConfig;
function zr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var a = l.refs;
            i === null ? delete a[o] : (a[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function Kl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function $u(e) {
  var t = e._init;
  return t(e._payload);
}
function ef(e) {
  function t(h, d) {
    if (e) {
      var v = h.deletions;
      v === null ? ((h.deletions = [d]), (h.flags |= 16)) : v.push(d);
    }
  }
  function n(h, d) {
    if (!e) return null;
    for (; d !== null; ) t(h, d), (d = d.sibling);
    return null;
  }
  function r(h, d) {
    for (h = new Map(); d !== null; )
      d.key !== null ? h.set(d.key, d) : h.set(d.index, d), (d = d.sibling);
    return h;
  }
  function l(h, d) {
    return (h = dn(h, d)), (h.index = 0), (h.sibling = null), h;
  }
  function o(h, d, v) {
    return (
      (h.index = v),
      e
        ? ((v = h.alternate),
          v !== null
            ? ((v = v.index), v < d ? ((h.flags |= 2), d) : v)
            : ((h.flags |= 2), d))
        : ((h.flags |= 1048576), d)
    );
  }
  function i(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function a(h, d, v, C) {
    return d === null || d.tag !== 6
      ? ((d = Fi(v, h.mode, C)), (d.return = h), d)
      : ((d = l(d, v)), (d.return = h), d);
  }
  function s(h, d, v, C) {
    var L = v.type;
    return L === Yn
      ? f(h, d, v.props.children, C, v.key)
      : d !== null &&
        (d.elementType === L ||
          (typeof L == "object" &&
            L !== null &&
            L.$$typeof === Jt &&
            $u(L) === d.type))
      ? ((C = l(d, v.props)), (C.ref = zr(h, d, v)), (C.return = h), C)
      : ((C = co(v.type, v.key, v.props, null, h.mode, C)),
        (C.ref = zr(h, d, v)),
        (C.return = h),
        C);
  }
  function u(h, d, v, C) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== v.containerInfo ||
      d.stateNode.implementation !== v.implementation
      ? ((d = Ui(v, h.mode, C)), (d.return = h), d)
      : ((d = l(d, v.children || [])), (d.return = h), d);
  }
  function f(h, d, v, C, L) {
    return d === null || d.tag !== 7
      ? ((d = Mn(v, h.mode, C, L)), (d.return = h), d)
      : ((d = l(d, v)), (d.return = h), d);
  }
  function c(h, d, v) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = Fi("" + d, h.mode, v)), (d.return = h), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Il:
          return (
            (v = co(d.type, d.key, d.props, null, h.mode, v)),
            (v.ref = zr(h, null, d)),
            (v.return = h),
            v
          );
        case Gn:
          return (d = Ui(d, h.mode, v)), (d.return = h), d;
        case Jt:
          var C = d._init;
          return c(h, C(d._payload), v);
      }
      if (Br(d) || jr(d))
        return (d = Mn(d, h.mode, v, null)), (d.return = h), d;
      Kl(h, d);
    }
    return null;
  }
  function p(h, d, v, C) {
    var L = d !== null ? d.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return L !== null ? null : a(h, d, "" + v, C);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Il:
          return v.key === L ? s(h, d, v, C) : null;
        case Gn:
          return v.key === L ? u(h, d, v, C) : null;
        case Jt:
          return (L = v._init), p(h, d, L(v._payload), C);
      }
      if (Br(v) || jr(v)) return L !== null ? null : f(h, d, v, C, null);
      Kl(h, v);
    }
    return null;
  }
  function S(h, d, v, C, L) {
    if ((typeof C == "string" && C !== "") || typeof C == "number")
      return (h = h.get(v) || null), a(d, h, "" + C, L);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case Il:
          return (h = h.get(C.key === null ? v : C.key) || null), s(d, h, C, L);
        case Gn:
          return (h = h.get(C.key === null ? v : C.key) || null), u(d, h, C, L);
        case Jt:
          var g = C._init;
          return S(h, d, v, g(C._payload), L);
      }
      if (Br(C) || jr(C)) return (h = h.get(v) || null), f(d, h, C, L, null);
      Kl(d, C);
    }
    return null;
  }
  function k(h, d, v, C) {
    for (
      var L = null, g = null, j = d, T = (d = 0), O = null;
      j !== null && T < v.length;
      T++
    ) {
      j.index > T ? ((O = j), (j = null)) : (O = j.sibling);
      var F = p(h, j, v[T], C);
      if (F === null) {
        j === null && (j = O);
        break;
      }
      e && j && F.alternate === null && t(h, j),
        (d = o(F, d, T)),
        g === null ? (L = F) : (g.sibling = F),
        (g = F),
        (j = O);
    }
    if (T === v.length) return n(h, j), he && kn(h, T), L;
    if (j === null) {
      for (; T < v.length; T++)
        (j = c(h, v[T], C)),
          j !== null &&
            ((d = o(j, d, T)), g === null ? (L = j) : (g.sibling = j), (g = j));
      return he && kn(h, T), L;
    }
    for (j = r(h, j); T < v.length; T++)
      (O = S(j, h, T, v[T], C)),
        O !== null &&
          (e && O.alternate !== null && j.delete(O.key === null ? T : O.key),
          (d = o(O, d, T)),
          g === null ? (L = O) : (g.sibling = O),
          (g = O));
    return (
      e &&
        j.forEach(function (W) {
          return t(h, W);
        }),
      he && kn(h, T),
      L
    );
  }
  function x(h, d, v, C) {
    var L = jr(v);
    if (typeof L != "function") throw Error(R(150));
    if (((v = L.call(v)), v == null)) throw Error(R(151));
    for (
      var g = (L = null), j = d, T = (d = 0), O = null, F = v.next();
      j !== null && !F.done;
      T++, F = v.next()
    ) {
      j.index > T ? ((O = j), (j = null)) : (O = j.sibling);
      var W = p(h, j, F.value, C);
      if (W === null) {
        j === null && (j = O);
        break;
      }
      e && j && W.alternate === null && t(h, j),
        (d = o(W, d, T)),
        g === null ? (L = W) : (g.sibling = W),
        (g = W),
        (j = O);
    }
    if (F.done) return n(h, j), he && kn(h, T), L;
    if (j === null) {
      for (; !F.done; T++, F = v.next())
        (F = c(h, F.value, C)),
          F !== null &&
            ((d = o(F, d, T)), g === null ? (L = F) : (g.sibling = F), (g = F));
      return he && kn(h, T), L;
    }
    for (j = r(h, j); !F.done; T++, F = v.next())
      (F = S(j, h, T, F.value, C)),
        F !== null &&
          (e && F.alternate !== null && j.delete(F.key === null ? T : F.key),
          (d = o(F, d, T)),
          g === null ? (L = F) : (g.sibling = F),
          (g = F));
    return (
      e &&
        j.forEach(function (H) {
          return t(h, H);
        }),
      he && kn(h, T),
      L
    );
  }
  function N(h, d, v, C) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Yn &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Il:
          e: {
            for (var L = v.key, g = d; g !== null; ) {
              if (g.key === L) {
                if (((L = v.type), L === Yn)) {
                  if (g.tag === 7) {
                    n(h, g.sibling),
                      (d = l(g, v.props.children)),
                      (d.return = h),
                      (h = d);
                    break e;
                  }
                } else if (
                  g.elementType === L ||
                  (typeof L == "object" &&
                    L !== null &&
                    L.$$typeof === Jt &&
                    $u(L) === g.type)
                ) {
                  n(h, g.sibling),
                    (d = l(g, v.props)),
                    (d.ref = zr(h, g, v)),
                    (d.return = h),
                    (h = d);
                  break e;
                }
                n(h, g);
                break;
              } else t(h, g);
              g = g.sibling;
            }
            v.type === Yn
              ? ((d = Mn(v.props.children, h.mode, C, v.key)),
                (d.return = h),
                (h = d))
              : ((C = co(v.type, v.key, v.props, null, h.mode, C)),
                (C.ref = zr(h, d, v)),
                (C.return = h),
                (h = C));
          }
          return i(h);
        case Gn:
          e: {
            for (g = v.key; d !== null; ) {
              if (d.key === g)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === v.containerInfo &&
                  d.stateNode.implementation === v.implementation
                ) {
                  n(h, d.sibling),
                    (d = l(d, v.children || [])),
                    (d.return = h),
                    (h = d);
                  break e;
                } else {
                  n(h, d);
                  break;
                }
              else t(h, d);
              d = d.sibling;
            }
            (d = Ui(v, h.mode, C)), (d.return = h), (h = d);
          }
          return i(h);
        case Jt:
          return (g = v._init), N(h, d, g(v._payload), C);
      }
      if (Br(v)) return k(h, d, v, C);
      if (jr(v)) return x(h, d, v, C);
      Kl(h, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        d !== null && d.tag === 6
          ? (n(h, d.sibling), (d = l(d, v)), (d.return = h), (h = d))
          : (n(h, d), (d = Fi(v, h.mode, C)), (d.return = h), (h = d)),
        i(h))
      : n(h, d);
  }
  return N;
}
var mr = ef(!0),
  tf = ef(!1),
  Po = mn(null),
  No = null,
  rr = null,
  ds = null;
function fs() {
  ds = rr = No = null;
}
function ps(e) {
  var t = Po.current;
  pe(Po), (e._currentValue = t);
}
function ya(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function cr(e, t) {
  (No = e),
    (ds = rr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Qe = !0), (e.firstContext = null));
}
function ut(e) {
  var t = e._currentValue;
  if (ds !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), rr === null)) {
      if (No === null) throw Error(R(308));
      (rr = e), (No.dependencies = { lanes: 0, firstContext: e });
    } else rr = rr.next = e;
  return t;
}
var Pn = null;
function hs(e) {
  Pn === null ? (Pn = [e]) : Pn.push(e);
}
function nf(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), hs(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    bt(e, r)
  );
}
function bt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Zt = !1;
function ms(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function rf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function It(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function sn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Z & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      bt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), hs(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    bt(e, n)
  );
}
function lo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), es(e, n);
  }
}
function Bu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function jo(e, t, n, r) {
  var l = e.updateQueue;
  Zt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var s = a,
      u = s.next;
    (s.next = null), i === null ? (o = u) : (i.next = u), (i = s);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== i &&
        (a === null ? (f.firstBaseUpdate = u) : (a.next = u),
        (f.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var c = l.baseState;
    (i = 0), (f = u = s = null), (a = o);
    do {
      var p = a.lane,
        S = a.eventTime;
      if ((r & p) === p) {
        f !== null &&
          (f = f.next =
            {
              eventTime: S,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var k = e,
            x = a;
          switch (((p = t), (S = n), x.tag)) {
            case 1:
              if (((k = x.payload), typeof k == "function")) {
                c = k.call(S, c, p);
                break e;
              }
              c = k;
              break e;
            case 3:
              k.flags = (k.flags & -65537) | 128;
            case 0:
              if (
                ((k = x.payload),
                (p = typeof k == "function" ? k.call(S, c, p) : k),
                p == null)
              )
                break e;
              c = ye({}, c, p);
              break e;
            case 2:
              Zt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [a]) : p.push(a));
      } else
        (S = {
          eventTime: S,
          lane: p,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((u = f = S), (s = c)) : (f = f.next = S),
          (i |= p);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (p = a),
          (a = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (s = c),
      (l.baseState = s),
      (l.firstBaseUpdate = u),
      (l.lastBaseUpdate = f),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (In |= i), (e.lanes = i), (e.memoizedState = c);
  }
}
function Vu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(R(191, l));
        l.call(r);
      }
    }
}
var _l = {},
  Nt = mn(_l),
  pl = mn(_l),
  hl = mn(_l);
function Nn(e) {
  if (e === _l) throw Error(R(174));
  return e;
}
function vs(e, t) {
  switch ((ue(hl, t), ue(pl, e), ue(Nt, _l), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Zi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Zi(t, e));
  }
  pe(Nt), ue(Nt, t);
}
function vr() {
  pe(Nt), pe(pl), pe(hl);
}
function lf(e) {
  Nn(hl.current);
  var t = Nn(Nt.current),
    n = Zi(t, e.type);
  t !== n && (ue(pl, e), ue(Nt, n));
}
function gs(e) {
  pl.current === e && (pe(Nt), pe(pl));
}
var ve = mn(0);
function Ro(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ti = [];
function ys() {
  for (var e = 0; e < Ti.length; e++)
    Ti[e]._workInProgressVersionPrimary = null;
  Ti.length = 0;
}
var oo = Vt.ReactCurrentDispatcher,
  Mi = Vt.ReactCurrentBatchConfig,
  On = 0,
  ge = null,
  _e = null,
  Ne = null,
  Lo = !1,
  Jr = !1,
  ml = 0,
  Hm = 0;
function De() {
  throw Error(R(321));
}
function ws(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!xt(e[n], t[n])) return !1;
  return !0;
}
function xs(e, t, n, r, l, o) {
  if (
    ((On = o),
    (ge = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (oo.current = e === null || e.memoizedState === null ? Ym : Xm),
    (e = n(r, l)),
    Jr)
  ) {
    o = 0;
    do {
      if (((Jr = !1), (ml = 0), 25 <= o)) throw Error(R(301));
      (o += 1),
        (Ne = _e = null),
        (t.updateQueue = null),
        (oo.current = Jm),
        (e = n(r, l));
    } while (Jr);
  }
  if (
    ((oo.current = To),
    (t = _e !== null && _e.next !== null),
    (On = 0),
    (Ne = _e = ge = null),
    (Lo = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function Ss() {
  var e = ml !== 0;
  return (ml = 0), e;
}
function Ct() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ne === null ? (ge.memoizedState = Ne = e) : (Ne = Ne.next = e), Ne;
}
function ct() {
  if (_e === null) {
    var e = ge.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = _e.next;
  var t = Ne === null ? ge.memoizedState : Ne.next;
  if (t !== null) (Ne = t), (_e = e);
  else {
    if (e === null) throw Error(R(310));
    (_e = e),
      (e = {
        memoizedState: _e.memoizedState,
        baseState: _e.baseState,
        baseQueue: _e.baseQueue,
        queue: _e.queue,
        next: null,
      }),
      Ne === null ? (ge.memoizedState = Ne = e) : (Ne = Ne.next = e);
  }
  return Ne;
}
function vl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function zi(e) {
  var t = ct(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = _e,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var a = (i = null),
      s = null,
      u = o;
    do {
      var f = u.lane;
      if ((On & f) === f)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var c = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((a = s = c), (i = r)) : (s = s.next = c),
          (ge.lanes |= f),
          (In |= f);
      }
      u = u.next;
    } while (u !== null && u !== o);
    s === null ? (i = r) : (s.next = a),
      xt(r, t.memoizedState) || (Qe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (ge.lanes |= o), (In |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Di(e) {
  var t = ct(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    xt(o, t.memoizedState) || (Qe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function of() {}
function af(e, t) {
  var n = ge,
    r = ct(),
    l = t(),
    o = !xt(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Qe = !0)),
    (r = r.queue),
    ks(cf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Ne !== null && Ne.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      gl(9, uf.bind(null, n, r, l, t), void 0, null),
      je === null)
    )
      throw Error(R(349));
    On & 30 || sf(n, t, l);
  }
  return l;
}
function sf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ge.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ge.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function uf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), df(t) && ff(e);
}
function cf(e, t, n) {
  return n(function () {
    df(t) && ff(e);
  });
}
function df(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !xt(e, n);
  } catch {
    return !0;
  }
}
function ff(e) {
  var t = bt(e, 1);
  t !== null && wt(t, e, 1, -1);
}
function Wu(e) {
  var t = Ct();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: vl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Gm.bind(null, ge, e)),
    [t.memoizedState, e]
  );
}
function gl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ge.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ge.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function pf() {
  return ct().memoizedState;
}
function io(e, t, n, r) {
  var l = Ct();
  (ge.flags |= e),
    (l.memoizedState = gl(1 | t, n, void 0, r === void 0 ? null : r));
}
function Yo(e, t, n, r) {
  var l = ct();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (_e !== null) {
    var i = _e.memoizedState;
    if (((o = i.destroy), r !== null && ws(r, i.deps))) {
      l.memoizedState = gl(t, n, o, r);
      return;
    }
  }
  (ge.flags |= e), (l.memoizedState = gl(1 | t, n, o, r));
}
function Hu(e, t) {
  return io(8390656, 8, e, t);
}
function ks(e, t) {
  return Yo(2048, 8, e, t);
}
function hf(e, t) {
  return Yo(4, 2, e, t);
}
function mf(e, t) {
  return Yo(4, 4, e, t);
}
function vf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function gf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Yo(4, 4, vf.bind(null, t, e), n)
  );
}
function Es() {}
function yf(e, t) {
  var n = ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ws(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function wf(e, t) {
  var n = ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ws(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function xf(e, t, n) {
  return On & 21
    ? (xt(n, t) || ((n = Cd()), (ge.lanes |= n), (In |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Qe = !0)), (e.memoizedState = n));
}
function Qm(e, t) {
  var n = ne;
  (ne = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Mi.transition;
  Mi.transition = {};
  try {
    e(!1), t();
  } finally {
    (ne = n), (Mi.transition = r);
  }
}
function Sf() {
  return ct().memoizedState;
}
function Km(e, t, n) {
  var r = cn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    kf(e))
  )
    Ef(t, n);
  else if (((n = nf(e, t, n, r)), n !== null)) {
    var l = Be();
    wt(n, e, r, l), Cf(n, t, r);
  }
}
function Gm(e, t, n) {
  var r = cn(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (kf(e)) Ef(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), xt(a, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), hs(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = nf(e, t, l, r)),
      n !== null && ((l = Be()), wt(n, e, r, l), Cf(n, t, r));
  }
}
function kf(e) {
  var t = e.alternate;
  return e === ge || (t !== null && t === ge);
}
function Ef(e, t) {
  Jr = Lo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Cf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), es(e, n);
  }
}
var To = {
    readContext: ut,
    useCallback: De,
    useContext: De,
    useEffect: De,
    useImperativeHandle: De,
    useInsertionEffect: De,
    useLayoutEffect: De,
    useMemo: De,
    useReducer: De,
    useRef: De,
    useState: De,
    useDebugValue: De,
    useDeferredValue: De,
    useTransition: De,
    useMutableSource: De,
    useSyncExternalStore: De,
    useId: De,
    unstable_isNewReconciler: !1,
  },
  Ym = {
    readContext: ut,
    useCallback: function (e, t) {
      return (Ct().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ut,
    useEffect: Hu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        io(4194308, 4, vf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return io(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return io(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ct();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ct();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Km.bind(null, ge, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ct();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Wu,
    useDebugValue: Es,
    useDeferredValue: function (e) {
      return (Ct().memoizedState = e);
    },
    useTransition: function () {
      var e = Wu(!1),
        t = e[0];
      return (e = Qm.bind(null, e[1])), (Ct().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ge,
        l = Ct();
      if (he) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), je === null)) throw Error(R(349));
        On & 30 || sf(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Hu(cf.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        gl(9, uf.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ct(),
        t = je.identifierPrefix;
      if (he) {
        var n = Dt,
          r = zt;
        (n = (r & ~(1 << (32 - yt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ml++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Hm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Xm = {
    readContext: ut,
    useCallback: yf,
    useContext: ut,
    useEffect: ks,
    useImperativeHandle: gf,
    useInsertionEffect: hf,
    useLayoutEffect: mf,
    useMemo: wf,
    useReducer: zi,
    useRef: pf,
    useState: function () {
      return zi(vl);
    },
    useDebugValue: Es,
    useDeferredValue: function (e) {
      var t = ct();
      return xf(t, _e.memoizedState, e);
    },
    useTransition: function () {
      var e = zi(vl)[0],
        t = ct().memoizedState;
      return [e, t];
    },
    useMutableSource: of,
    useSyncExternalStore: af,
    useId: Sf,
    unstable_isNewReconciler: !1,
  },
  Jm = {
    readContext: ut,
    useCallback: yf,
    useContext: ut,
    useEffect: ks,
    useImperativeHandle: gf,
    useInsertionEffect: hf,
    useLayoutEffect: mf,
    useMemo: wf,
    useReducer: Di,
    useRef: pf,
    useState: function () {
      return Di(vl);
    },
    useDebugValue: Es,
    useDeferredValue: function (e) {
      var t = ct();
      return _e === null ? (t.memoizedState = e) : xf(t, _e.memoizedState, e);
    },
    useTransition: function () {
      var e = Di(vl)[0],
        t = ct().memoizedState;
      return [e, t];
    },
    useMutableSource: of,
    useSyncExternalStore: af,
    useId: Sf,
    unstable_isNewReconciler: !1,
  };
function ht(e, t) {
  if (e && e.defaultProps) {
    (t = ye({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function wa(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ye({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Xo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? bn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Be(),
      l = cn(e),
      o = It(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = sn(e, o, l)),
      t !== null && (wt(t, e, l, r), lo(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Be(),
      l = cn(e),
      o = It(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = sn(e, o, l)),
      t !== null && (wt(t, e, l, r), lo(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Be(),
      r = cn(e),
      l = It(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = sn(e, l, r)),
      t !== null && (wt(t, e, r, n), lo(t, e, r));
  },
};
function Qu(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ul(n, r) || !ul(l, o)
      : !0
  );
}
function _f(e, t, n) {
  var r = !1,
    l = pn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = ut(o))
      : ((l = Ge(t) ? zn : Fe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? pr(e, l) : pn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Xo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Ku(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Xo.enqueueReplaceState(t, t.state, null);
}
function xa(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), ms(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = ut(o))
    : ((o = Ge(t) ? zn : Fe.current), (l.context = pr(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (wa(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Xo.enqueueReplaceState(l, l.state, null),
      jo(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function gr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += _h(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Oi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Sa(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Zm = typeof WeakMap == "function" ? WeakMap : Map;
function Pf(e, t, n) {
  (n = It(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      zo || ((zo = !0), (Ta = r)), Sa(e, t);
    }),
    n
  );
}
function Nf(e, t, n) {
  (n = It(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Sa(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Sa(e, t),
          typeof r != "function" &&
            (un === null ? (un = new Set([this])) : un.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Gu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Zm();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = fv.bind(null, e, t, n)), t.then(e, e));
}
function Yu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Xu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = It(-1, 1)), (t.tag = 2), sn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var qm = Vt.ReactCurrentOwner,
  Qe = !1;
function $e(e, t, n, r) {
  t.child = e === null ? tf(t, null, n, r) : mr(t, e.child, n, r);
}
function Ju(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    cr(t, l),
    (r = xs(e, t, n, r, o, l)),
    (n = Ss()),
    e !== null && !Qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        $t(e, t, l))
      : (he && n && ss(t), (t.flags |= 1), $e(e, t, r, l), t.child)
  );
}
function Zu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Ts(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), jf(e, t, o, r, l))
      : ((e = co(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ul), n(i, r) && e.ref === t.ref)
    )
      return $t(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = dn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function jf(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (ul(o, r) && e.ref === t.ref)
      if (((Qe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (Qe = !0);
      else return (t.lanes = e.lanes), $t(e, t, l);
  }
  return ka(e, t, n, r, l);
}
function Rf(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ue(or, Ze),
        (Ze |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ue(or, Ze),
          (Ze |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ue(or, Ze),
        (Ze |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ue(or, Ze),
      (Ze |= r);
  return $e(e, t, l, n), t.child;
}
function Lf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ka(e, t, n, r, l) {
  var o = Ge(n) ? zn : Fe.current;
  return (
    (o = pr(t, o)),
    cr(t, l),
    (n = xs(e, t, n, r, o, l)),
    (r = Ss()),
    e !== null && !Qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        $t(e, t, l))
      : (he && r && ss(t), (t.flags |= 1), $e(e, t, n, l), t.child)
  );
}
function qu(e, t, n, r, l) {
  if (Ge(n)) {
    var o = !0;
    Eo(t);
  } else o = !1;
  if ((cr(t, l), t.stateNode === null))
    ao(e, t), _f(t, n, r), xa(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var s = i.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = ut(u))
      : ((u = Ge(n) ? zn : Fe.current), (u = pr(t, u)));
    var f = n.getDerivedStateFromProps,
      c =
        typeof f == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    c ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || s !== u) && Ku(t, i, r, u)),
      (Zt = !1);
    var p = t.memoizedState;
    (i.state = p),
      jo(t, r, i, l),
      (s = t.memoizedState),
      a !== r || p !== s || Ke.current || Zt
        ? (typeof f == "function" && (wa(t, n, f, r), (s = t.memoizedState)),
          (a = Zt || Qu(t, n, a, r, p, s, u))
            ? (c ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = u),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      rf(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : ht(t.type, a)),
      (i.props = u),
      (c = t.pendingProps),
      (p = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = ut(s))
        : ((s = Ge(n) ? zn : Fe.current), (s = pr(t, s)));
    var S = n.getDerivedStateFromProps;
    (f =
      typeof S == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== c || p !== s) && Ku(t, i, r, s)),
      (Zt = !1),
      (p = t.memoizedState),
      (i.state = p),
      jo(t, r, i, l);
    var k = t.memoizedState;
    a !== c || p !== k || Ke.current || Zt
      ? (typeof S == "function" && (wa(t, n, S, r), (k = t.memoizedState)),
        (u = Zt || Qu(t, n, u, r, p, k, s) || !1)
          ? (f ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, k, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, k, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = k)),
        (i.props = r),
        (i.state = k),
        (i.context = s),
        (r = u))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ea(e, t, n, r, o, l);
}
function Ea(e, t, n, r, l, o) {
  Lf(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Uu(t, n, !1), $t(e, t, o);
  (r = t.stateNode), (qm.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = mr(t, e.child, null, o)), (t.child = mr(t, null, a, o)))
      : $e(e, t, a, o),
    (t.memoizedState = r.state),
    l && Uu(t, n, !0),
    t.child
  );
}
function Tf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Fu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Fu(e, t.context, !1),
    vs(e, t.containerInfo);
}
function ec(e, t, n, r, l) {
  return hr(), cs(l), (t.flags |= 256), $e(e, t, n, r), t.child;
}
var Ca = { dehydrated: null, treeContext: null, retryLane: 0 };
function _a(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Mf(e, t, n) {
  var r = t.pendingProps,
    l = ve.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    ue(ve, l & 1),
    e === null)
  )
    return (
      ga(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = qo(i, r, 0, null)),
              (e = Mn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = _a(n)),
              (t.memoizedState = Ca),
              e)
            : Cs(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return ev(e, t, i, r, a, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (a = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = dn(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (o = dn(a, o)) : ((o = Mn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? _a(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ca),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = dn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Cs(e, t) {
  return (
    (t = qo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Gl(e, t, n, r) {
  return (
    r !== null && cs(r),
    mr(t, e.child, null, n),
    (e = Cs(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ev(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Oi(Error(R(422)))), Gl(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = qo({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Mn(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && mr(t, e.child, null, i),
        (t.child.memoizedState = _a(i)),
        (t.memoizedState = Ca),
        o);
  if (!(t.mode & 1)) return Gl(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(R(419))), (r = Oi(o, r, void 0)), Gl(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), Qe || a)) {
    if (((r = je), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), bt(e, l), wt(r, e, l, -1));
    }
    return Ls(), (r = Oi(Error(R(421)))), Gl(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = pv.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (et = an(l.nextSibling)),
      (tt = t),
      (he = !0),
      (gt = null),
      e !== null &&
        ((ot[it++] = zt),
        (ot[it++] = Dt),
        (ot[it++] = Dn),
        (zt = e.id),
        (Dt = e.overflow),
        (Dn = t)),
      (t = Cs(t, r.children)),
      (t.flags |= 4096),
      t);
}
function tc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ya(e.return, t, n);
}
function Ii(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function zf(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if (($e(e, t, r.children, n), (r = ve.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && tc(e, n, t);
        else if (e.tag === 19) tc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ue(ve, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Ro(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Ii(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Ro(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Ii(t, !0, n, null, o);
        break;
      case "together":
        Ii(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ao(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function $t(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (In |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = dn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = dn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function tv(e, t, n) {
  switch (t.tag) {
    case 3:
      Tf(t), hr();
      break;
    case 5:
      lf(t);
      break;
    case 1:
      Ge(t.type) && Eo(t);
      break;
    case 4:
      vs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      ue(Po, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ue(ve, ve.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Mf(e, t, n)
          : (ue(ve, ve.current & 1),
            (e = $t(e, t, n)),
            e !== null ? e.sibling : null);
      ue(ve, ve.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return zf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        ue(ve, ve.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Rf(e, t, n);
  }
  return $t(e, t, n);
}
var Df, Pa, Of, If;
Df = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Pa = function () {};
Of = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Nn(Nt.current);
    var o = null;
    switch (n) {
      case "input":
        (l = Gi(e, l)), (r = Gi(e, r)), (o = []);
        break;
      case "select":
        (l = ye({}, l, { value: void 0 })),
          (r = ye({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = Ji(e, l)), (r = Ji(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = So);
    }
    qi(n, r);
    var i;
    n = null;
    for (u in l)
      if (!r.hasOwnProperty(u) && l.hasOwnProperty(u) && l[u] != null)
        if (u === "style") {
          var a = l[u];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (nl.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((a = l != null ? l[u] : void 0),
        r.hasOwnProperty(u) && s !== a && (s != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                a[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (o = o || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (nl.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && fe("scroll", e),
                  o || a === s || (o = []))
                : (o = o || []).push(u, s));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
If = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Dr(e, t) {
  if (!he)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function nv(e, t, n) {
  var r = t.pendingProps;
  switch ((us(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Oe(t), null;
    case 1:
      return Ge(t.type) && ko(), Oe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        vr(),
        pe(Ke),
        pe(Fe),
        ys(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ql(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), gt !== null && (Da(gt), (gt = null)))),
        Pa(e, t),
        Oe(t),
        null
      );
    case 5:
      gs(t);
      var l = Nn(hl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Of(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return Oe(t), null;
        }
        if (((e = Nn(Nt.current)), Ql(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[_t] = t), (r[fl] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              fe("cancel", r), fe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              fe("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Wr.length; l++) fe(Wr[l], r);
              break;
            case "source":
              fe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              fe("error", r), fe("load", r);
              break;
            case "details":
              fe("toggle", r);
              break;
            case "input":
              cu(r, o), fe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                fe("invalid", r);
              break;
            case "textarea":
              fu(r, o), fe("invalid", r);
          }
          qi(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Hl(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Hl(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : nl.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  fe("scroll", r);
            }
          switch (n) {
            case "input":
              Fl(r), du(r, o, !0);
              break;
            case "textarea":
              Fl(r), pu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = So);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ud(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[_t] = t),
            (e[fl] = r),
            Df(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = ea(n, r)), n)) {
              case "dialog":
                fe("cancel", e), fe("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                fe("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Wr.length; l++) fe(Wr[l], e);
                l = r;
                break;
              case "source":
                fe("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                fe("error", e), fe("load", e), (l = r);
                break;
              case "details":
                fe("toggle", e), (l = r);
                break;
              case "input":
                cu(e, r), (l = Gi(e, r)), fe("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = ye({}, r, { value: void 0 })),
                  fe("invalid", e);
                break;
              case "textarea":
                fu(e, r), (l = Ji(e, r)), fe("invalid", e);
                break;
              default:
                l = r;
            }
            qi(n, l), (a = l);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var s = a[o];
                o === "style"
                  ? fd(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && cd(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && rl(e, s)
                    : typeof s == "number" && rl(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (nl.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && fe("scroll", e)
                      : s != null && Ga(e, o, s, i));
              }
            switch (n) {
              case "input":
                Fl(e), du(e, r, !1);
                break;
              case "textarea":
                Fl(e), pu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + fn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? ir(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      ir(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = So);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Oe(t), null;
    case 6:
      if (e && t.stateNode != null) If(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (((n = Nn(hl.current)), Nn(Nt.current), Ql(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[_t] = t),
            (o = r.nodeValue !== n) && ((e = tt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Hl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Hl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[_t] = t),
            (t.stateNode = r);
      }
      return Oe(t), null;
    case 13:
      if (
        (pe(ve),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (he && et !== null && t.mode & 1 && !(t.flags & 128))
          qd(), hr(), (t.flags |= 98560), (o = !1);
        else if (((o = Ql(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(R(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(R(317));
            o[_t] = t;
          } else
            hr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Oe(t), (o = !1);
        } else gt !== null && (Da(gt), (gt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ve.current & 1 ? Pe === 0 && (Pe = 3) : Ls())),
          t.updateQueue !== null && (t.flags |= 4),
          Oe(t),
          null);
    case 4:
      return (
        vr(), Pa(e, t), e === null && cl(t.stateNode.containerInfo), Oe(t), null
      );
    case 10:
      return ps(t.type._context), Oe(t), null;
    case 17:
      return Ge(t.type) && ko(), Oe(t), null;
    case 19:
      if ((pe(ve), (o = t.memoizedState), o === null)) return Oe(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Dr(o, !1);
        else {
          if (Pe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Ro(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Dr(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ue(ve, (ve.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Se() > yr &&
            ((t.flags |= 128), (r = !0), Dr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ro(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Dr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !he)
            )
              return Oe(t), null;
          } else
            2 * Se() - o.renderingStartTime > yr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Dr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Se()),
          (t.sibling = null),
          (n = ve.current),
          ue(ve, r ? (n & 1) | 2 : n & 1),
          t)
        : (Oe(t), null);
    case 22:
    case 23:
      return (
        Rs(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ze & 1073741824 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function rv(e, t) {
  switch ((us(t), t.tag)) {
    case 1:
      return (
        Ge(t.type) && ko(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        vr(),
        pe(Ke),
        pe(Fe),
        ys(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return gs(t), null;
    case 13:
      if (
        (pe(ve), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(R(340));
        hr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return pe(ve), null;
    case 4:
      return vr(), null;
    case 10:
      return ps(t.type._context), null;
    case 22:
    case 23:
      return Rs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Yl = !1,
  Ie = !1,
  lv = typeof WeakSet == "function" ? WeakSet : Set,
  I = null;
function lr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        xe(e, t, r);
      }
    else n.current = null;
}
function Na(e, t, n) {
  try {
    n();
  } catch (r) {
    xe(e, t, r);
  }
}
var nc = !1;
function ov(e, t) {
  if (((ca = yo), (e = bd()), as(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            s = -1,
            u = 0,
            f = 0,
            c = e,
            p = null;
          t: for (;;) {
            for (
              var S;
              c !== n || (l !== 0 && c.nodeType !== 3) || (a = i + l),
                c !== o || (r !== 0 && c.nodeType !== 3) || (s = i + r),
                c.nodeType === 3 && (i += c.nodeValue.length),
                (S = c.firstChild) !== null;

            )
              (p = c), (c = S);
            for (;;) {
              if (c === e) break t;
              if (
                (p === n && ++u === l && (a = i),
                p === o && ++f === r && (s = i),
                (S = c.nextSibling) !== null)
              )
                break;
              (c = p), (p = c.parentNode);
            }
            c = S;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (da = { focusedElem: e, selectionRange: n }, yo = !1, I = t; I !== null; )
    if (((t = I), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (I = e);
    else
      for (; I !== null; ) {
        t = I;
        try {
          var k = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (k !== null) {
                  var x = k.memoizedProps,
                    N = k.memoizedState,
                    h = t.stateNode,
                    d = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : ht(t.type, x),
                      N
                    );
                  h.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (C) {
          xe(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (I = e);
          break;
        }
        I = t.return;
      }
  return (k = nc), (nc = !1), k;
}
function Zr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Na(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Jo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ja(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ff(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ff(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[_t], delete t[fl], delete t[ha], delete t[$m], delete t[Bm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Uf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function rc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Uf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ra(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = So));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ra(e, t, n), e = e.sibling; e !== null; ) Ra(e, t, n), (e = e.sibling);
}
function La(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (La(e, t, n), e = e.sibling; e !== null; ) La(e, t, n), (e = e.sibling);
}
var Te = null,
  mt = !1;
function Kt(e, t, n) {
  for (n = n.child; n !== null; ) Af(e, t, n), (n = n.sibling);
}
function Af(e, t, n) {
  if (Pt && typeof Pt.onCommitFiberUnmount == "function")
    try {
      Pt.onCommitFiberUnmount(Vo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ie || lr(n, t);
    case 6:
      var r = Te,
        l = mt;
      (Te = null),
        Kt(e, t, n),
        (Te = r),
        (mt = l),
        Te !== null &&
          (mt
            ? ((e = Te),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Te.removeChild(n.stateNode));
      break;
    case 18:
      Te !== null &&
        (mt
          ? ((e = Te),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ri(e.parentNode, n)
              : e.nodeType === 1 && Ri(e, n),
            al(e))
          : Ri(Te, n.stateNode));
      break;
    case 4:
      (r = Te),
        (l = mt),
        (Te = n.stateNode.containerInfo),
        (mt = !0),
        Kt(e, t, n),
        (Te = r),
        (mt = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Na(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Kt(e, t, n);
      break;
    case 1:
      if (
        !Ie &&
        (lr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          xe(n, t, a);
        }
      Kt(e, t, n);
      break;
    case 21:
      Kt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ie = (r = Ie) || n.memoizedState !== null), Kt(e, t, n), (Ie = r))
        : Kt(e, t, n);
      break;
    default:
      Kt(e, t, n);
  }
}
function lc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new lv()),
      t.forEach(function (r) {
        var l = hv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function pt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Te = a.stateNode), (mt = !1);
              break e;
            case 3:
              (Te = a.stateNode.containerInfo), (mt = !0);
              break e;
            case 4:
              (Te = a.stateNode.containerInfo), (mt = !0);
              break e;
          }
          a = a.return;
        }
        if (Te === null) throw Error(R(160));
        Af(o, i, l), (Te = null), (mt = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (u) {
        xe(l, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) bf(t, e), (t = t.sibling);
}
function bf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((pt(t, e), Et(e), r & 4)) {
        try {
          Zr(3, e, e.return), Jo(3, e);
        } catch (x) {
          xe(e, e.return, x);
        }
        try {
          Zr(5, e, e.return);
        } catch (x) {
          xe(e, e.return, x);
        }
      }
      break;
    case 1:
      pt(t, e), Et(e), r & 512 && n !== null && lr(n, n.return);
      break;
    case 5:
      if (
        (pt(t, e),
        Et(e),
        r & 512 && n !== null && lr(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          rl(l, "");
        } catch (x) {
          xe(e, e.return, x);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && ad(l, o),
              ea(a, i);
            var u = ea(a, o);
            for (i = 0; i < s.length; i += 2) {
              var f = s[i],
                c = s[i + 1];
              f === "style"
                ? fd(l, c)
                : f === "dangerouslySetInnerHTML"
                ? cd(l, c)
                : f === "children"
                ? rl(l, c)
                : Ga(l, f, c, u);
            }
            switch (a) {
              case "input":
                Yi(l, o);
                break;
              case "textarea":
                sd(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var S = o.value;
                S != null
                  ? ir(l, !!o.multiple, S, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? ir(l, !!o.multiple, o.defaultValue, !0)
                      : ir(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[fl] = o;
          } catch (x) {
            xe(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((pt(t, e), Et(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (x) {
          xe(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (pt(t, e), Et(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          al(t.containerInfo);
        } catch (x) {
          xe(e, e.return, x);
        }
      break;
    case 4:
      pt(t, e), Et(e);
      break;
    case 13:
      pt(t, e),
        Et(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Ns = Se())),
        r & 4 && lc(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ie = (u = Ie) || f), pt(t, e), (Ie = u)) : pt(t, e),
        Et(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !f && e.mode & 1)
        )
          for (I = e, f = e.child; f !== null; ) {
            for (c = I = f; I !== null; ) {
              switch (((p = I), (S = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Zr(4, p, p.return);
                  break;
                case 1:
                  lr(p, p.return);
                  var k = p.stateNode;
                  if (typeof k.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (k.props = t.memoizedProps),
                        (k.state = t.memoizedState),
                        k.componentWillUnmount();
                    } catch (x) {
                      xe(r, n, x);
                    }
                  }
                  break;
                case 5:
                  lr(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    ic(c);
                    continue;
                  }
              }
              S !== null ? ((S.return = p), (I = S)) : ic(c);
            }
            f = f.sibling;
          }
        e: for (f = null, c = e; ; ) {
          if (c.tag === 5) {
            if (f === null) {
              f = c;
              try {
                (l = c.stateNode),
                  u
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = c.stateNode),
                      (s = c.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (a.style.display = dd("display", i)));
              } catch (x) {
                xe(e, e.return, x);
              }
            }
          } else if (c.tag === 6) {
            if (f === null)
              try {
                c.stateNode.nodeValue = u ? "" : c.memoizedProps;
              } catch (x) {
                xe(e, e.return, x);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === e) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            f === c && (f = null), (c = c.return);
          }
          f === c && (f = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      pt(t, e), Et(e), r & 4 && lc(e);
      break;
    case 21:
      break;
    default:
      pt(t, e), Et(e);
  }
}
function Et(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Uf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (rl(l, ""), (r.flags &= -33));
          var o = rc(e);
          La(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = rc(e);
          Ra(e, a, i);
          break;
        default:
          throw Error(R(161));
      }
    } catch (s) {
      xe(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function iv(e, t, n) {
  (I = e), $f(e);
}
function $f(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var l = I,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Yl;
      if (!i) {
        var a = l.alternate,
          s = (a !== null && a.memoizedState !== null) || Ie;
        a = Yl;
        var u = Ie;
        if (((Yl = i), (Ie = s) && !u))
          for (I = l; I !== null; )
            (i = I),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? ac(l)
                : s !== null
                ? ((s.return = i), (I = s))
                : ac(l);
        for (; o !== null; ) (I = o), $f(o), (o = o.sibling);
        (I = l), (Yl = a), (Ie = u);
      }
      oc(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (I = o)) : oc(e);
  }
}
function oc(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ie || Jo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ht(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Vu(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Vu(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var f = u.memoizedState;
                  if (f !== null) {
                    var c = f.dehydrated;
                    c !== null && al(c);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        Ie || (t.flags & 512 && ja(t));
      } catch (p) {
        xe(t, t.return, p);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function ic(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function ac(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Jo(4, t);
          } catch (s) {
            xe(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              xe(t, l, s);
            }
          }
          var o = t.return;
          try {
            ja(t);
          } catch (s) {
            xe(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ja(t);
          } catch (s) {
            xe(t, i, s);
          }
      }
    } catch (s) {
      xe(t, t.return, s);
    }
    if (t === e) {
      I = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (I = a);
      break;
    }
    I = t.return;
  }
}
var av = Math.ceil,
  Mo = Vt.ReactCurrentDispatcher,
  _s = Vt.ReactCurrentOwner,
  st = Vt.ReactCurrentBatchConfig,
  Z = 0,
  je = null,
  Ce = null,
  Me = 0,
  Ze = 0,
  or = mn(0),
  Pe = 0,
  yl = null,
  In = 0,
  Zo = 0,
  Ps = 0,
  qr = null,
  He = null,
  Ns = 0,
  yr = 1 / 0,
  Tt = null,
  zo = !1,
  Ta = null,
  un = null,
  Xl = !1,
  nn = null,
  Do = 0,
  el = 0,
  Ma = null,
  so = -1,
  uo = 0;
function Be() {
  return Z & 6 ? Se() : so !== -1 ? so : (so = Se());
}
function cn(e) {
  return e.mode & 1
    ? Z & 2 && Me !== 0
      ? Me & -Me
      : Wm.transition !== null
      ? (uo === 0 && (uo = Cd()), uo)
      : ((e = ne),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Td(e.type))),
        e)
    : 1;
}
function wt(e, t, n, r) {
  if (50 < el) throw ((el = 0), (Ma = null), Error(R(185)));
  kl(e, n, r),
    (!(Z & 2) || e !== je) &&
      (e === je && (!(Z & 2) && (Zo |= n), Pe === 4 && en(e, Me)),
      Ye(e, r),
      n === 1 && Z === 0 && !(t.mode & 1) && ((yr = Se() + 500), Go && vn()));
}
function Ye(e, t) {
  var n = e.callbackNode;
  Wh(e, t);
  var r = go(e, e === je ? Me : 0);
  if (r === 0)
    n !== null && vu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && vu(n), t === 1))
      e.tag === 0 ? Vm(sc.bind(null, e)) : Xd(sc.bind(null, e)),
        Am(function () {
          !(Z & 6) && vn();
        }),
        (n = null);
    else {
      switch (_d(r)) {
        case 1:
          n = qa;
          break;
        case 4:
          n = kd;
          break;
        case 16:
          n = vo;
          break;
        case 536870912:
          n = Ed;
          break;
        default:
          n = vo;
      }
      n = Yf(n, Bf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Bf(e, t) {
  if (((so = -1), (uo = 0), Z & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (dr() && e.callbackNode !== n) return null;
  var r = go(e, e === je ? Me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Oo(e, r);
  else {
    t = r;
    var l = Z;
    Z |= 2;
    var o = Wf();
    (je !== e || Me !== t) && ((Tt = null), (yr = Se() + 500), Tn(e, t));
    do
      try {
        cv();
        break;
      } catch (a) {
        Vf(e, a);
      }
    while (!0);
    fs(),
      (Mo.current = o),
      (Z = l),
      Ce !== null ? (t = 0) : ((je = null), (Me = 0), (t = Pe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = oa(e)), l !== 0 && ((r = l), (t = za(e, l)))), t === 1)
    )
      throw ((n = yl), Tn(e, 0), en(e, r), Ye(e, Se()), n);
    if (t === 6) en(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !sv(l) &&
          ((t = Oo(e, r)),
          t === 2 && ((o = oa(e)), o !== 0 && ((r = o), (t = za(e, o)))),
          t === 1))
      )
        throw ((n = yl), Tn(e, 0), en(e, r), Ye(e, Se()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          En(e, He, Tt);
          break;
        case 3:
          if (
            (en(e, r), (r & 130023424) === r && ((t = Ns + 500 - Se()), 10 < t))
          ) {
            if (go(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Be(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = pa(En.bind(null, e, He, Tt), t);
            break;
          }
          En(e, He, Tt);
          break;
        case 4:
          if ((en(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - yt(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = Se() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * av(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = pa(En.bind(null, e, He, Tt), r);
            break;
          }
          En(e, He, Tt);
          break;
        case 5:
          En(e, He, Tt);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return Ye(e, Se()), e.callbackNode === n ? Bf.bind(null, e) : null;
}
function za(e, t) {
  var n = qr;
  return (
    e.current.memoizedState.isDehydrated && (Tn(e, t).flags |= 256),
    (e = Oo(e, t)),
    e !== 2 && ((t = He), (He = n), t !== null && Da(t)),
    e
  );
}
function Da(e) {
  He === null ? (He = e) : He.push.apply(He, e);
}
function sv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!xt(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function en(e, t) {
  for (
    t &= ~Ps,
      t &= ~Zo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - yt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function sc(e) {
  if (Z & 6) throw Error(R(327));
  dr();
  var t = go(e, 0);
  if (!(t & 1)) return Ye(e, Se()), null;
  var n = Oo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = oa(e);
    r !== 0 && ((t = r), (n = za(e, r)));
  }
  if (n === 1) throw ((n = yl), Tn(e, 0), en(e, t), Ye(e, Se()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    En(e, He, Tt),
    Ye(e, Se()),
    null
  );
}
function js(e, t) {
  var n = Z;
  Z |= 1;
  try {
    return e(t);
  } finally {
    (Z = n), Z === 0 && ((yr = Se() + 500), Go && vn());
  }
}
function Fn(e) {
  nn !== null && nn.tag === 0 && !(Z & 6) && dr();
  var t = Z;
  Z |= 1;
  var n = st.transition,
    r = ne;
  try {
    if (((st.transition = null), (ne = 1), e)) return e();
  } finally {
    (ne = r), (st.transition = n), (Z = t), !(Z & 6) && vn();
  }
}
function Rs() {
  (Ze = or.current), pe(or);
}
function Tn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Um(n)), Ce !== null))
    for (n = Ce.return; n !== null; ) {
      var r = n;
      switch ((us(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ko();
          break;
        case 3:
          vr(), pe(Ke), pe(Fe), ys();
          break;
        case 5:
          gs(r);
          break;
        case 4:
          vr();
          break;
        case 13:
          pe(ve);
          break;
        case 19:
          pe(ve);
          break;
        case 10:
          ps(r.type._context);
          break;
        case 22:
        case 23:
          Rs();
      }
      n = n.return;
    }
  if (
    ((je = e),
    (Ce = e = dn(e.current, null)),
    (Me = Ze = t),
    (Pe = 0),
    (yl = null),
    (Ps = Zo = In = 0),
    (He = qr = null),
    Pn !== null)
  ) {
    for (t = 0; t < Pn.length; t++)
      if (((n = Pn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Pn = null;
  }
  return e;
}
function Vf(e, t) {
  do {
    var n = Ce;
    try {
      if ((fs(), (oo.current = To), Lo)) {
        for (var r = ge.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Lo = !1;
      }
      if (
        ((On = 0),
        (Ne = _e = ge = null),
        (Jr = !1),
        (ml = 0),
        (_s.current = null),
        n === null || n.return === null)
      ) {
        (Pe = 1), (yl = t), (Ce = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          a = n,
          s = t;
        if (
          ((t = Me),
          (a.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            f = a,
            c = f.tag;
          if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var p = f.alternate;
            p
              ? ((f.updateQueue = p.updateQueue),
                (f.memoizedState = p.memoizedState),
                (f.lanes = p.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var S = Yu(i);
          if (S !== null) {
            (S.flags &= -257),
              Xu(S, i, a, o, t),
              S.mode & 1 && Gu(o, u, t),
              (t = S),
              (s = u);
            var k = t.updateQueue;
            if (k === null) {
              var x = new Set();
              x.add(s), (t.updateQueue = x);
            } else k.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Gu(o, u, t), Ls();
              break e;
            }
            s = Error(R(426));
          }
        } else if (he && a.mode & 1) {
          var N = Yu(i);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256),
              Xu(N, i, a, o, t),
              cs(gr(s, a));
            break e;
          }
        }
        (o = s = gr(s, a)),
          Pe !== 4 && (Pe = 2),
          qr === null ? (qr = [o]) : qr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var h = Pf(o, s, t);
              Bu(o, h);
              break e;
            case 1:
              a = s;
              var d = o.type,
                v = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (un === null || !un.has(v))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var C = Nf(o, a, t);
                Bu(o, C);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Qf(n);
    } catch (L) {
      (t = L), Ce === n && n !== null && (Ce = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Wf() {
  var e = Mo.current;
  return (Mo.current = To), e === null ? To : e;
}
function Ls() {
  (Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4),
    je === null || (!(In & 268435455) && !(Zo & 268435455)) || en(je, Me);
}
function Oo(e, t) {
  var n = Z;
  Z |= 2;
  var r = Wf();
  (je !== e || Me !== t) && ((Tt = null), Tn(e, t));
  do
    try {
      uv();
      break;
    } catch (l) {
      Vf(e, l);
    }
  while (!0);
  if ((fs(), (Z = n), (Mo.current = r), Ce !== null)) throw Error(R(261));
  return (je = null), (Me = 0), Pe;
}
function uv() {
  for (; Ce !== null; ) Hf(Ce);
}
function cv() {
  for (; Ce !== null && !Oh(); ) Hf(Ce);
}
function Hf(e) {
  var t = Gf(e.alternate, e, Ze);
  (e.memoizedProps = e.pendingProps),
    t === null ? Qf(e) : (Ce = t),
    (_s.current = null);
}
function Qf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = rv(n, t)), n !== null)) {
        (n.flags &= 32767), (Ce = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Pe = 6), (Ce = null);
        return;
      }
    } else if (((n = nv(n, t, Ze)), n !== null)) {
      Ce = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ce = t;
      return;
    }
    Ce = t = e;
  } while (t !== null);
  Pe === 0 && (Pe = 5);
}
function En(e, t, n) {
  var r = ne,
    l = st.transition;
  try {
    (st.transition = null), (ne = 1), dv(e, t, n, r);
  } finally {
    (st.transition = l), (ne = r);
  }
  return null;
}
function dv(e, t, n, r) {
  do dr();
  while (nn !== null);
  if (Z & 6) throw Error(R(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Hh(e, o),
    e === je && ((Ce = je = null), (Me = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Xl ||
      ((Xl = !0),
      Yf(vo, function () {
        return dr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = st.transition), (st.transition = null);
    var i = ne;
    ne = 1;
    var a = Z;
    (Z |= 4),
      (_s.current = null),
      ov(e, n),
      bf(n, e),
      Tm(da),
      (yo = !!ca),
      (da = ca = null),
      (e.current = n),
      iv(n),
      Ih(),
      (Z = a),
      (ne = i),
      (st.transition = o);
  } else e.current = n;
  if (
    (Xl && ((Xl = !1), (nn = e), (Do = l)),
    (o = e.pendingLanes),
    o === 0 && (un = null),
    Ah(n.stateNode),
    Ye(e, Se()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (zo) throw ((zo = !1), (e = Ta), (Ta = null), e);
  return (
    Do & 1 && e.tag !== 0 && dr(),
    (o = e.pendingLanes),
    o & 1 ? (e === Ma ? el++ : ((el = 0), (Ma = e))) : (el = 0),
    vn(),
    null
  );
}
function dr() {
  if (nn !== null) {
    var e = _d(Do),
      t = st.transition,
      n = ne;
    try {
      if (((st.transition = null), (ne = 16 > e ? 16 : e), nn === null))
        var r = !1;
      else {
        if (((e = nn), (nn = null), (Do = 0), Z & 6)) throw Error(R(331));
        var l = Z;
        for (Z |= 4, I = e.current; I !== null; ) {
          var o = I,
            i = o.child;
          if (I.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var u = a[s];
                for (I = u; I !== null; ) {
                  var f = I;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Zr(8, f, o);
                  }
                  var c = f.child;
                  if (c !== null) (c.return = f), (I = c);
                  else
                    for (; I !== null; ) {
                      f = I;
                      var p = f.sibling,
                        S = f.return;
                      if ((Ff(f), f === u)) {
                        I = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = S), (I = p);
                        break;
                      }
                      I = S;
                    }
                }
              }
              var k = o.alternate;
              if (k !== null) {
                var x = k.child;
                if (x !== null) {
                  k.child = null;
                  do {
                    var N = x.sibling;
                    (x.sibling = null), (x = N);
                  } while (x !== null);
                }
              }
              I = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (I = i);
          else
            e: for (; I !== null; ) {
              if (((o = I), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Zr(9, o, o.return);
                }
              var h = o.sibling;
              if (h !== null) {
                (h.return = o.return), (I = h);
                break e;
              }
              I = o.return;
            }
        }
        var d = e.current;
        for (I = d; I !== null; ) {
          i = I;
          var v = i.child;
          if (i.subtreeFlags & 2064 && v !== null) (v.return = i), (I = v);
          else
            e: for (i = d; I !== null; ) {
              if (((a = I), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Jo(9, a);
                  }
                } catch (L) {
                  xe(a, a.return, L);
                }
              if (a === i) {
                I = null;
                break e;
              }
              var C = a.sibling;
              if (C !== null) {
                (C.return = a.return), (I = C);
                break e;
              }
              I = a.return;
            }
        }
        if (
          ((Z = l), vn(), Pt && typeof Pt.onPostCommitFiberRoot == "function")
        )
          try {
            Pt.onPostCommitFiberRoot(Vo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ne = n), (st.transition = t);
    }
  }
  return !1;
}
function uc(e, t, n) {
  (t = gr(n, t)),
    (t = Pf(e, t, 1)),
    (e = sn(e, t, 1)),
    (t = Be()),
    e !== null && (kl(e, 1, t), Ye(e, t));
}
function xe(e, t, n) {
  if (e.tag === 3) uc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        uc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (un === null || !un.has(r)))
        ) {
          (e = gr(n, e)),
            (e = Nf(t, e, 1)),
            (t = sn(t, e, 1)),
            (e = Be()),
            t !== null && (kl(t, 1, e), Ye(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function fv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Be()),
    (e.pingedLanes |= e.suspendedLanes & n),
    je === e &&
      (Me & n) === n &&
      (Pe === 4 || (Pe === 3 && (Me & 130023424) === Me && 500 > Se() - Ns)
        ? Tn(e, 0)
        : (Ps |= n)),
    Ye(e, t);
}
function Kf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = bl), (bl <<= 1), !(bl & 130023424) && (bl = 4194304))
      : (t = 1));
  var n = Be();
  (e = bt(e, t)), e !== null && (kl(e, t, n), Ye(e, n));
}
function pv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Kf(e, n);
}
function hv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  r !== null && r.delete(t), Kf(e, n);
}
var Gf;
Gf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ke.current) Qe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Qe = !1), tv(e, t, n);
      Qe = !!(e.flags & 131072);
    }
  else (Qe = !1), he && t.flags & 1048576 && Jd(t, _o, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ao(e, t), (e = t.pendingProps);
      var l = pr(t, Fe.current);
      cr(t, n), (l = xs(null, t, r, e, l, n));
      var o = Ss();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ge(r) ? ((o = !0), Eo(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            ms(t),
            (l.updater = Xo),
            (t.stateNode = l),
            (l._reactInternals = t),
            xa(t, r, e, n),
            (t = Ea(null, t, r, !0, o, n)))
          : ((t.tag = 0), he && o && ss(t), $e(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ao(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = vv(r)),
          (e = ht(r, e)),
          l)
        ) {
          case 0:
            t = ka(null, t, r, e, n);
            break e;
          case 1:
            t = qu(null, t, r, e, n);
            break e;
          case 11:
            t = Ju(null, t, r, e, n);
            break e;
          case 14:
            t = Zu(null, t, r, ht(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ht(r, l)),
        ka(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ht(r, l)),
        qu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Tf(t), e === null)) throw Error(R(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          rf(e, t),
          jo(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = gr(Error(R(423)), t)), (t = ec(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = gr(Error(R(424)), t)), (t = ec(e, t, r, n, l));
            break e;
          } else
            for (
              et = an(t.stateNode.containerInfo.firstChild),
                tt = t,
                he = !0,
                gt = null,
                n = tf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((hr(), r === l)) {
            t = $t(e, t, n);
            break e;
          }
          $e(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        lf(t),
        e === null && ga(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        fa(r, l) ? (i = null) : o !== null && fa(r, o) && (t.flags |= 32),
        Lf(e, t),
        $e(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && ga(t), null;
    case 13:
      return Mf(e, t, n);
    case 4:
      return (
        vs(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = mr(t, null, r, n)) : $e(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ht(r, l)),
        Ju(e, t, r, l, n)
      );
    case 7:
      return $e(e, t, t.pendingProps, n), t.child;
    case 8:
      return $e(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return $e(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          ue(Po, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (xt(o.value, i)) {
            if (o.children === l.children && !Ke.current) {
              t = $t(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                i = o.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = It(-1, n & -n)), (s.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null
                          ? (s.next = s)
                          : ((s.next = f.next), (f.next = s)),
                          (u.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      ya(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(R(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  ya(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        $e(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        cr(t, n),
        (l = ut(l)),
        (r = r(l)),
        (t.flags |= 1),
        $e(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ht(r, t.pendingProps)),
        (l = ht(r.type, l)),
        Zu(e, t, r, l, n)
      );
    case 15:
      return jf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ht(r, l)),
        ao(e, t),
        (t.tag = 1),
        Ge(r) ? ((e = !0), Eo(t)) : (e = !1),
        cr(t, n),
        _f(t, r, l),
        xa(t, r, l, n),
        Ea(null, t, r, !0, e, n)
      );
    case 19:
      return zf(e, t, n);
    case 22:
      return Rf(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function Yf(e, t) {
  return Sd(e, t);
}
function mv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function at(e, t, n, r) {
  return new mv(e, t, n, r);
}
function Ts(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function vv(e) {
  if (typeof e == "function") return Ts(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Xa)) return 11;
    if (e === Ja) return 14;
  }
  return 2;
}
function dn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = at(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function co(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Ts(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Yn:
        return Mn(n.children, l, o, t);
      case Ya:
        (i = 8), (l |= 8);
        break;
      case Wi:
        return (
          (e = at(12, n, t, l | 2)), (e.elementType = Wi), (e.lanes = o), e
        );
      case Hi:
        return (e = at(13, n, t, l)), (e.elementType = Hi), (e.lanes = o), e;
      case Qi:
        return (e = at(19, n, t, l)), (e.elementType = Qi), (e.lanes = o), e;
      case ld:
        return qo(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case nd:
              i = 10;
              break e;
            case rd:
              i = 9;
              break e;
            case Xa:
              i = 11;
              break e;
            case Ja:
              i = 14;
              break e;
            case Jt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = at(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Mn(e, t, n, r) {
  return (e = at(7, e, r, t)), (e.lanes = n), e;
}
function qo(e, t, n, r) {
  return (
    (e = at(22, e, r, t)),
    (e.elementType = ld),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Fi(e, t, n) {
  return (e = at(6, e, null, t)), (e.lanes = n), e;
}
function Ui(e, t, n) {
  return (
    (t = at(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function gv(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = yi(0)),
    (this.expirationTimes = yi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = yi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Ms(e, t, n, r, l, o, i, a, s) {
  return (
    (e = new gv(e, t, n, a, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = at(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ms(o),
    e
  );
}
function yv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Gn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Xf(e) {
  if (!e) return pn;
  e = e._reactInternals;
  e: {
    if (bn(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ge(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ge(n)) return Yd(e, n, t);
  }
  return t;
}
function Jf(e, t, n, r, l, o, i, a, s) {
  return (
    (e = Ms(n, r, !0, e, l, o, i, a, s)),
    (e.context = Xf(null)),
    (n = e.current),
    (r = Be()),
    (l = cn(n)),
    (o = It(r, l)),
    (o.callback = t ?? null),
    sn(n, o, l),
    (e.current.lanes = l),
    kl(e, l, r),
    Ye(e, r),
    e
  );
}
function ei(e, t, n, r) {
  var l = t.current,
    o = Be(),
    i = cn(l);
  return (
    (n = Xf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = It(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = sn(l, t, i)),
    e !== null && (wt(e, l, i, o), lo(e, l, i)),
    i
  );
}
function Io(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function cc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function zs(e, t) {
  cc(e, t), (e = e.alternate) && cc(e, t);
}
function wv() {
  return null;
}
var Zf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ds(e) {
  this._internalRoot = e;
}
ti.prototype.render = Ds.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  ei(e, t, null, null);
};
ti.prototype.unmount = Ds.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Fn(function () {
      ei(null, e, null, null);
    }),
      (t[At] = null);
  }
};
function ti(e) {
  this._internalRoot = e;
}
ti.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = jd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < qt.length && t !== 0 && t < qt[n].priority; n++);
    qt.splice(n, 0, e), n === 0 && Ld(e);
  }
};
function Os(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ni(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function dc() {}
function xv(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = Io(i);
        o.call(u);
      };
    }
    var i = Jf(t, r, e, 0, null, !1, !1, "", dc);
    return (
      (e._reactRootContainer = i),
      (e[At] = i.current),
      cl(e.nodeType === 8 ? e.parentNode : e),
      Fn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Io(s);
      a.call(u);
    };
  }
  var s = Ms(e, 0, !1, null, null, !1, !1, "", dc);
  return (
    (e._reactRootContainer = s),
    (e[At] = s.current),
    cl(e.nodeType === 8 ? e.parentNode : e),
    Fn(function () {
      ei(t, s, n, r);
    }),
    s
  );
}
function ri(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var s = Io(i);
        a.call(s);
      };
    }
    ei(t, i, e, l);
  } else i = xv(n, t, e, l, r);
  return Io(i);
}
Pd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Vr(t.pendingLanes);
        n !== 0 &&
          (es(t, n | 1), Ye(t, Se()), !(Z & 6) && ((yr = Se() + 500), vn()));
      }
      break;
    case 13:
      Fn(function () {
        var r = bt(e, 1);
        if (r !== null) {
          var l = Be();
          wt(r, e, 1, l);
        }
      }),
        zs(e, 1);
  }
};
ts = function (e) {
  if (e.tag === 13) {
    var t = bt(e, 134217728);
    if (t !== null) {
      var n = Be();
      wt(t, e, 134217728, n);
    }
    zs(e, 134217728);
  }
};
Nd = function (e) {
  if (e.tag === 13) {
    var t = cn(e),
      n = bt(e, t);
    if (n !== null) {
      var r = Be();
      wt(n, e, t, r);
    }
    zs(e, t);
  }
};
jd = function () {
  return ne;
};
Rd = function (e, t) {
  var n = ne;
  try {
    return (ne = e), t();
  } finally {
    ne = n;
  }
};
na = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Yi(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Ko(r);
            if (!l) throw Error(R(90));
            id(r), Yi(r, l);
          }
        }
      }
      break;
    case "textarea":
      sd(e, n);
      break;
    case "select":
      (t = n.value), t != null && ir(e, !!n.multiple, t, !1);
  }
};
md = js;
vd = Fn;
var Sv = { usingClientEntryPoint: !1, Events: [Cl, qn, Ko, pd, hd, js] },
  Or = {
    findFiberByHostInstance: _n,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  kv = {
    bundleType: Or.bundleType,
    version: Or.version,
    rendererPackageName: Or.rendererPackageName,
    rendererConfig: Or.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Vt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = wd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Or.findFiberByHostInstance || wv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Jl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Jl.isDisabled && Jl.supportsFiber)
    try {
      (Vo = Jl.inject(kv)), (Pt = Jl);
    } catch {}
}
rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sv;
rt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Os(t)) throw Error(R(200));
  return yv(e, t, null, n);
};
rt.createRoot = function (e, t) {
  if (!Os(e)) throw Error(R(299));
  var n = !1,
    r = "",
    l = Zf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Ms(e, 1, !1, null, null, n, !1, r, l)),
    (e[At] = t.current),
    cl(e.nodeType === 8 ? e.parentNode : e),
    new Ds(t)
  );
};
rt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return (e = wd(t)), (e = e === null ? null : e.stateNode), e;
};
rt.flushSync = function (e) {
  return Fn(e);
};
rt.hydrate = function (e, t, n) {
  if (!ni(t)) throw Error(R(200));
  return ri(null, e, t, !0, n);
};
rt.hydrateRoot = function (e, t, n) {
  if (!Os(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = Zf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Jf(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[At] = t.current),
    cl(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new ti(t);
};
rt.render = function (e, t, n) {
  if (!ni(t)) throw Error(R(200));
  return ri(null, e, t, !1, n);
};
rt.unmountComponentAtNode = function (e) {
  if (!ni(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (Fn(function () {
        ri(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[At] = null);
        });
      }),
      !0)
    : !1;
};
rt.unstable_batchedUpdates = js;
rt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ni(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return ri(e, t, n, !1, r);
};
rt.version = "18.3.1-next-f1338f8080-20240426";
function qf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qf);
    } catch (e) {
      console.error(e);
    }
}
qf(), (Zc.exports = rt);
var Is = Zc.exports;
const Ev = bc(Is),
  Cv = Ac({ __proto__: null, default: Ev }, [Is]);
var fc = Is;
(Bi.createRoot = fc.createRoot), (Bi.hydrateRoot = fc.hydrateRoot);
/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function me() {
  return (
    (me = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    me.apply(this, arguments)
  );
}
var Ee;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Ee || (Ee = {}));
const pc = "popstate";
function _v(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: a } = r.location;
    return wl(
      "",
      { pathname: o, search: i, hash: a },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : Un(l);
  }
  return Nv(t, n, null, e);
}
function G(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function wr(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Pv() {
  return Math.random().toString(36).substr(2, 8);
}
function hc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function wl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    me(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? gn(t) : t,
      { state: n, key: (t && t.key) || r || Pv() }
    )
  );
}
function Un(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function gn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Nv(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    a = Ee.Pop,
    s = null,
    u = f();
  u == null && ((u = 0), i.replaceState(me({}, i.state, { idx: u }), ""));
  function f() {
    return (i.state || { idx: null }).idx;
  }
  function c() {
    a = Ee.Pop;
    let N = f(),
      h = N == null ? null : N - u;
    (u = N), s && s({ action: a, location: x.location, delta: h });
  }
  function p(N, h) {
    a = Ee.Push;
    let d = wl(x.location, N, h);
    u = f() + 1;
    let v = hc(d, u),
      C = x.createHref(d);
    try {
      i.pushState(v, "", C);
    } catch (L) {
      if (L instanceof DOMException && L.name === "DataCloneError") throw L;
      l.location.assign(C);
    }
    o && s && s({ action: a, location: x.location, delta: 1 });
  }
  function S(N, h) {
    a = Ee.Replace;
    let d = wl(x.location, N, h);
    u = f();
    let v = hc(d, u),
      C = x.createHref(d);
    i.replaceState(v, "", C),
      o && s && s({ action: a, location: x.location, delta: 0 });
  }
  function k(N) {
    let h = l.location.origin !== "null" ? l.location.origin : l.location.href,
      d = typeof N == "string" ? N : Un(N);
    return (
      (d = d.replace(/ $/, "%20")),
      G(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          d
      ),
      new URL(d, h)
    );
  }
  let x = {
    get action() {
      return a;
    },
    get location() {
      return e(l, i);
    },
    listen(N) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(pc, c),
        (s = N),
        () => {
          l.removeEventListener(pc, c), (s = null);
        }
      );
    },
    createHref(N) {
      return t(l, N);
    },
    createURL: k,
    encodeLocation(N) {
      let h = k(N);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: p,
    replace: S,
    go(N) {
      return i.go(N);
    },
  };
  return x;
}
var se;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(se || (se = {}));
const jv = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Rv(e) {
  return e.index === !0;
}
function xl(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, o) => {
      let i = [...n, String(o)],
        a = typeof l.id == "string" ? l.id : i.join("-");
      if (
        (G(
          l.index !== !0 || !l.children,
          "Cannot specify children on an index route"
        ),
        G(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        Rv(l))
      ) {
        let s = me({}, l, t(l), { id: a });
        return (r[a] = s), s;
      } else {
        let s = me({}, l, t(l), { id: a, children: void 0 });
        return (
          (r[a] = s), l.children && (s.children = xl(l.children, t, i, r)), s
        );
      }
    })
  );
}
function Cn(e, t, n) {
  return n === void 0 && (n = "/"), fo(e, t, n, !1);
}
function fo(e, t, n, r) {
  let l = typeof t == "string" ? gn(t) : t,
    o = Bt(l.pathname || "/", n);
  if (o == null) return null;
  let i = ep(e);
  Tv(i);
  let a = null;
  for (let s = 0; a == null && s < i.length; ++s) {
    let u = Bv(o);
    a = bv(i[s], u, r);
  }
  return a;
}
function Lv(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function ep(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, a) => {
    let s = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    s.relativePath.startsWith("/") &&
      (G(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let u = Ft([r, s.relativePath]),
      f = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (G(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      ep(o.children, t, f, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: Uv(u, o.index), routesMeta: f });
  };
  return (
    e.forEach((o, i) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) l(o, i);
      else for (let s of tp(o.path)) l(o, i, s);
    }),
    t
  );
}
function tp(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = tp(r.join("/")),
    a = [];
  return (
    a.push(...i.map((s) => (s === "" ? o : [o, s].join("/")))),
    l && a.push(...i),
    a.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function Tv(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Av(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Mv = /^:[\w-]+$/,
  zv = 3,
  Dv = 2,
  Ov = 1,
  Iv = 10,
  Fv = -2,
  mc = (e) => e === "*";
function Uv(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(mc) && (r += Fv),
    t && (r += Dv),
    n
      .filter((l) => !mc(l))
      .reduce((l, o) => l + (Mv.test(o) ? zv : o === "" ? Ov : Iv), r)
  );
}
function Av(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function bv(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    l = {},
    o = "/",
    i = [];
  for (let a = 0; a < r.length; ++a) {
    let s = r[a],
      u = a === r.length - 1,
      f = o === "/" ? t : t.slice(o.length) || "/",
      c = Fo(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: u },
        f
      ),
      p = s.route;
    if (
      (!c &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (c = Fo(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          f
        )),
      !c)
    )
      return null;
    Object.assign(l, c.params),
      i.push({
        params: l,
        pathname: Ft([o, c.pathname]),
        pathnameBase: Hv(Ft([o, c.pathnameBase])),
        route: p,
      }),
      c.pathnameBase !== "/" && (o = Ft([o, c.pathnameBase]));
  }
  return i;
}
function Fo(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = $v(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    a = l.slice(1);
  return {
    params: r.reduce((u, f, c) => {
      let { paramName: p, isOptional: S } = f;
      if (p === "*") {
        let x = a[c] || "";
        i = o.slice(0, o.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const k = a[c];
      return (
        S && !k ? (u[p] = void 0) : (u[p] = (k || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function $v(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    wr(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, a, s) => (
            r.push({ paramName: a, isOptional: s != null }),
            s ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Bv(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      wr(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Bt(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Vv(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? gn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Wv(n, t)) : t,
    search: Qv(r),
    hash: Kv(l),
  };
}
function Wv(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Ai(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function np(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Fs(e, t) {
  let n = np(e);
  return t
    ? n.map((r, l) => (l === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Us(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = gn(e))
    : ((l = me({}, e)),
      G(
        !l.pathname || !l.pathname.includes("?"),
        Ai("?", "pathname", "search", l)
      ),
      G(
        !l.pathname || !l.pathname.includes("#"),
        Ai("#", "pathname", "hash", l)
      ),
      G(!l.search || !l.search.includes("#"), Ai("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    a;
  if (i == null) a = n;
  else {
    let c = t.length - 1;
    if (!r && i.startsWith("..")) {
      let p = i.split("/");
      for (; p[0] === ".."; ) p.shift(), (c -= 1);
      l.pathname = p.join("/");
    }
    a = c >= 0 ? t[c] : "/";
  }
  let s = Vv(l, a),
    u = i && i !== "/" && i.endsWith("/"),
    f = (o || i === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (u || f) && (s.pathname += "/"), s;
}
const Ft = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Hv = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Qv = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Kv = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class As {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function li(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const rp = ["post", "put", "patch", "delete"],
  Gv = new Set(rp),
  Yv = ["get", ...rp],
  Xv = new Set(Yv),
  Jv = new Set([301, 302, 303, 307, 308]),
  Zv = new Set([307, 308]),
  bi = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  qv = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Ir = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  bs = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  eg = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  lp = "remix-router-transitions";
function tg(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  G(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let m = e.detectErrorBoundary;
    l = (y) => ({ hasErrorBoundary: m(y) });
  } else l = eg;
  let o = {},
    i = xl(e.routes, l, void 0, o),
    a,
    s = e.basename || "/",
    u = e.unstable_dataStrategy || ig,
    f = e.unstable_patchRoutesOnMiss,
    c = me(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        unstable_skipActionErrorRevalidation: !1,
      },
      e.future
    ),
    p = null,
    S = new Set(),
    k = null,
    x = null,
    N = null,
    h = e.hydrationData != null,
    d = Cn(i, e.history.location, s),
    v = null;
  if (d == null && !f) {
    let m = be(404, { pathname: e.history.location.pathname }),
      { matches: y, route: E } = _c(i);
    (d = y), (v = { [E.id]: m });
  }
  d && f && fi(d, i, e.history.location.pathname).active && (d = null);
  let C;
  if (!d) (C = !1), (d = []);
  else if (d.some((m) => m.route.lazy)) C = !1;
  else if (!d.some((m) => m.route.loader)) C = !0;
  else if (c.v7_partialHydration) {
    let m = e.hydrationData ? e.hydrationData.loaderData : null,
      y = e.hydrationData ? e.hydrationData.errors : null,
      E = (P) =>
        P.route.loader
          ? typeof P.route.loader == "function" && P.route.loader.hydrate === !0
            ? !1
            : (m && m[P.route.id] !== void 0) || (y && y[P.route.id] !== void 0)
          : !0;
    if (y) {
      let P = d.findIndex((D) => y[D.route.id] !== void 0);
      C = d.slice(0, P + 1).every(E);
    } else C = d.every(E);
  } else C = e.hydrationData != null;
  let L,
    g = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: d,
      initialized: C,
      navigation: bi,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || v,
      fetchers: new Map(),
      blockers: new Map(),
    },
    j = Ee.Pop,
    T = !1,
    O,
    F = !1,
    W = new Map(),
    H = null,
    le = !1,
    ce = !1,
    dt = [],
    Xe = [],
    oe = new Map(),
    z = 0,
    A = -1,
    B = new Map(),
    X = new Set(),
    ee = new Map(),
    St = new Map(),
    Re = new Set(),
    ft = new Map(),
    Ue = new Map(),
    $n = new Map(),
    si = !1;
  function Dp() {
    if (
      ((p = e.history.listen((m) => {
        let { action: y, location: E, delta: P } = m;
        if (si) {
          si = !1;
          return;
        }
        wr(
          Ue.size === 0 || P != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let D = eu({
          currentLocation: g.location,
          nextLocation: E,
          historyAction: y,
        });
        if (D && P != null) {
          (si = !0),
            e.history.go(P * -1),
            Rl(D, {
              state: "blocked",
              location: E,
              proceed() {
                Rl(D, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: E,
                }),
                  e.history.go(P);
              },
              reset() {
                let U = new Map(g.blockers);
                U.set(D, Ir), Ae({ blockers: U });
              },
            });
          return;
        }
        return Sn(y, E);
      })),
      n)
    ) {
      wg(t, W);
      let m = () => xg(t, W);
      t.addEventListener("pagehide", m),
        (H = () => t.removeEventListener("pagehide", m));
    }
    return g.initialized || Sn(Ee.Pop, g.location, { initialHydration: !0 }), L;
  }
  function Op() {
    p && p(),
      H && H(),
      S.clear(),
      O && O.abort(),
      g.fetchers.forEach((m, y) => jl(y)),
      g.blockers.forEach((m, y) => qs(y));
  }
  function Ip(m) {
    return S.add(m), () => S.delete(m);
  }
  function Ae(m, y) {
    y === void 0 && (y = {}), (g = me({}, g, m));
    let E = [],
      P = [];
    c.v7_fetcherPersist &&
      g.fetchers.forEach((D, U) => {
        D.state === "idle" && (Re.has(U) ? P.push(U) : E.push(U));
      }),
      [...S].forEach((D) =>
        D(g, {
          deletedFetchers: P,
          unstable_viewTransitionOpts: y.viewTransitionOpts,
          unstable_flushSync: y.flushSync === !0,
        })
      ),
      c.v7_fetcherPersist &&
        (E.forEach((D) => g.fetchers.delete(D)), P.forEach((D) => jl(D)));
  }
  function Bn(m, y, E) {
    var P, D;
    let { flushSync: U } = E === void 0 ? {} : E,
      V =
        g.actionData != null &&
        g.navigation.formMethod != null &&
        vt(g.navigation.formMethod) &&
        g.navigation.state === "loading" &&
        ((P = m.state) == null ? void 0 : P._isRedirect) !== !0,
      M;
    y.actionData
      ? Object.keys(y.actionData).length > 0
        ? (M = y.actionData)
        : (M = null)
      : V
      ? (M = g.actionData)
      : (M = null);
    let Q = y.loaderData
        ? Ec(g.loaderData, y.loaderData, y.matches || [], y.errors)
        : g.loaderData,
      b = g.blockers;
    b.size > 0 && ((b = new Map(b)), b.forEach((q, ie) => b.set(ie, Ir)));
    let $ =
      T === !0 ||
      (g.navigation.formMethod != null &&
        vt(g.navigation.formMethod) &&
        ((D = m.state) == null ? void 0 : D._isRedirect) !== !0);
    a && ((i = a), (a = void 0)),
      le ||
        j === Ee.Pop ||
        (j === Ee.Push
          ? e.history.push(m, m.state)
          : j === Ee.Replace && e.history.replace(m, m.state));
    let re;
    if (j === Ee.Pop) {
      let q = W.get(g.location.pathname);
      q && q.has(m.pathname)
        ? (re = { currentLocation: g.location, nextLocation: m })
        : W.has(m.pathname) &&
          (re = { currentLocation: m, nextLocation: g.location });
    } else if (F) {
      let q = W.get(g.location.pathname);
      q
        ? q.add(m.pathname)
        : ((q = new Set([m.pathname])), W.set(g.location.pathname, q)),
        (re = { currentLocation: g.location, nextLocation: m });
    }
    Ae(
      me({}, y, {
        actionData: M,
        loaderData: Q,
        historyAction: j,
        location: m,
        initialized: !0,
        navigation: bi,
        revalidation: "idle",
        restoreScrollPosition: nu(m, y.matches || g.matches),
        preventScrollReset: $,
        blockers: b,
      }),
      { viewTransitionOpts: re, flushSync: U === !0 }
    ),
      (j = Ee.Pop),
      (T = !1),
      (F = !1),
      (le = !1),
      (ce = !1),
      (dt = []),
      (Xe = []);
  }
  async function Qs(m, y) {
    if (typeof m == "number") {
      e.history.go(m);
      return;
    }
    let E = Oa(
        g.location,
        g.matches,
        s,
        c.v7_prependBasename,
        m,
        c.v7_relativeSplatPath,
        y == null ? void 0 : y.fromRouteId,
        y == null ? void 0 : y.relative
      ),
      {
        path: P,
        submission: D,
        error: U,
      } = vc(c.v7_normalizeFormMethod, !1, E, y),
      V = g.location,
      M = wl(g.location, P, y && y.state);
    M = me({}, M, e.history.encodeLocation(M));
    let Q = y && y.replace != null ? y.replace : void 0,
      b = Ee.Push;
    Q === !0
      ? (b = Ee.Replace)
      : Q === !1 ||
        (D != null &&
          vt(D.formMethod) &&
          D.formAction === g.location.pathname + g.location.search &&
          (b = Ee.Replace));
    let $ =
        y && "preventScrollReset" in y ? y.preventScrollReset === !0 : void 0,
      re = (y && y.unstable_flushSync) === !0,
      q = eu({ currentLocation: V, nextLocation: M, historyAction: b });
    if (q) {
      Rl(q, {
        state: "blocked",
        location: M,
        proceed() {
          Rl(q, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: M,
          }),
            Qs(m, y);
        },
        reset() {
          let ie = new Map(g.blockers);
          ie.set(q, Ir), Ae({ blockers: ie });
        },
      });
      return;
    }
    return await Sn(b, M, {
      submission: D,
      pendingError: U,
      preventScrollReset: $,
      replace: y && y.replace,
      enableViewTransition: y && y.unstable_viewTransition,
      flushSync: re,
    });
  }
  function Fp() {
    if (
      (ui(),
      Ae({ revalidation: "loading" }),
      g.navigation.state !== "submitting")
    ) {
      if (g.navigation.state === "idle") {
        Sn(g.historyAction, g.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Sn(j || g.historyAction, g.navigation.location, {
        overrideNavigation: g.navigation,
      });
    }
  }
  async function Sn(m, y, E) {
    O && O.abort(),
      (O = null),
      (j = m),
      (le = (E && E.startUninterruptedRevalidation) === !0),
      Kp(g.location, g.matches),
      (T = (E && E.preventScrollReset) === !0),
      (F = (E && E.enableViewTransition) === !0);
    let P = a || i,
      D = E && E.overrideNavigation,
      U = Cn(P, y, s),
      V = (E && E.flushSync) === !0,
      M = fi(U, P, y.pathname);
    if ((M.active && M.matches && (U = M.matches), !U)) {
      let { error: te, notFoundMatches: Le, route: ke } = ci(y.pathname);
      Bn(
        y,
        { matches: Le, loaderData: {}, errors: { [ke.id]: te } },
        { flushSync: V }
      );
      return;
    }
    if (
      g.initialized &&
      !ce &&
      fg(g.location, y) &&
      !(E && E.submission && vt(E.submission.formMethod))
    ) {
      Bn(y, { matches: U }, { flushSync: V });
      return;
    }
    O = new AbortController();
    let Q = Kn(e.history, y, O.signal, E && E.submission),
      b;
    if (E && E.pendingError)
      b = [tl(U).route.id, { type: se.error, error: E.pendingError }];
    else if (E && E.submission && vt(E.submission.formMethod)) {
      let te = await Up(Q, y, E.submission, U, M.active, {
        replace: E.replace,
        flushSync: V,
      });
      if (te.shortCircuited) return;
      if (te.pendingActionResult) {
        let [Le, ke] = te.pendingActionResult;
        if (qe(ke) && li(ke.error) && ke.error.status === 404) {
          (O = null),
            Bn(y, {
              matches: te.matches,
              loaderData: {},
              errors: { [Le]: ke.error },
            });
          return;
        }
      }
      (U = te.matches || U),
        (b = te.pendingActionResult),
        (D = $i(y, E.submission)),
        (V = !1),
        (M.active = !1),
        (Q = Kn(e.history, Q.url, Q.signal));
    }
    let {
      shortCircuited: $,
      matches: re,
      loaderData: q,
      errors: ie,
    } = await Ap(
      Q,
      y,
      U,
      M.active,
      D,
      E && E.submission,
      E && E.fetcherSubmission,
      E && E.replace,
      E && E.initialHydration === !0,
      V,
      b
    );
    $ ||
      ((O = null),
      Bn(y, me({ matches: re || U }, Cc(b), { loaderData: q, errors: ie })));
  }
  async function Up(m, y, E, P, D, U) {
    U === void 0 && (U = {}), ui();
    let V = gg(y, E);
    if ((Ae({ navigation: V }, { flushSync: U.flushSync === !0 }), D)) {
      let b = await Tl(P, y.pathname, m.signal);
      if (b.type === "aborted") return { shortCircuited: !0 };
      if (b.type === "error") {
        let { error: $, notFoundMatches: re, route: q } = Ll(y.pathname, b);
        return {
          matches: re,
          pendingActionResult: [q.id, { type: se.error, error: $ }],
        };
      } else if (b.matches) P = b.matches;
      else {
        let { notFoundMatches: $, error: re, route: q } = ci(y.pathname);
        return {
          matches: $,
          pendingActionResult: [q.id, { type: se.error, error: re }],
        };
      }
    }
    let M,
      Q = Hr(P, y);
    if (!Q.route.action && !Q.route.lazy)
      M = {
        type: se.error,
        error: be(405, {
          method: m.method,
          pathname: y.pathname,
          routeId: Q.route.id,
        }),
      };
    else if (((M = (await Pr("action", m, [Q], P))[0]), m.signal.aborted))
      return { shortCircuited: !0 };
    if (Rn(M)) {
      let b;
      return (
        U && U.replace != null
          ? (b = U.replace)
          : (b =
              xc(M.response.headers.get("Location"), new URL(m.url), s) ===
              g.location.pathname + g.location.search),
        await _r(m, M, { submission: E, replace: b }),
        { shortCircuited: !0 }
      );
    }
    if (jn(M)) throw be(400, { type: "defer-action" });
    if (qe(M)) {
      let b = tl(P, Q.route.id);
      return (
        (U && U.replace) !== !0 && (j = Ee.Push),
        { matches: P, pendingActionResult: [b.route.id, M] }
      );
    }
    return { matches: P, pendingActionResult: [Q.route.id, M] };
  }
  async function Ap(m, y, E, P, D, U, V, M, Q, b, $) {
    let re = D || $i(y, U),
      q = U || V || jc(re),
      ie = !le && (!c.v7_partialHydration || !Q);
    if (P) {
      if (ie) {
        let we = Ks($);
        Ae(me({ navigation: re }, we !== void 0 ? { actionData: we } : {}), {
          flushSync: b,
        });
      }
      let Y = await Tl(E, y.pathname, m.signal);
      if (Y.type === "aborted") return { shortCircuited: !0 };
      if (Y.type === "error") {
        let { error: we, notFoundMatches: Je, route: ae } = Ll(y.pathname, Y);
        return { matches: Je, loaderData: {}, errors: { [ae.id]: we } };
      } else if (Y.matches) E = Y.matches;
      else {
        let { error: we, notFoundMatches: Je, route: ae } = ci(y.pathname);
        return { matches: Je, loaderData: {}, errors: { [ae.id]: we } };
      }
    }
    let te = a || i,
      [Le, ke] = gc(
        e.history,
        g,
        E,
        q,
        y,
        c.v7_partialHydration && Q === !0,
        c.unstable_skipActionErrorRevalidation,
        ce,
        dt,
        Xe,
        Re,
        ee,
        X,
        te,
        s,
        $
      );
    if (
      (di(
        (Y) =>
          !(E && E.some((we) => we.route.id === Y)) ||
          (Le && Le.some((we) => we.route.id === Y))
      ),
      (A = ++z),
      Le.length === 0 && ke.length === 0)
    ) {
      let Y = Js();
      return (
        Bn(
          y,
          me(
            {
              matches: E,
              loaderData: {},
              errors: $ && qe($[1]) ? { [$[0]]: $[1].error } : null,
            },
            Cc($),
            Y ? { fetchers: new Map(g.fetchers) } : {}
          ),
          { flushSync: b }
        ),
        { shortCircuited: !0 }
      );
    }
    if (ie) {
      let Y = {};
      if (!P) {
        Y.navigation = re;
        let we = Ks($);
        we !== void 0 && (Y.actionData = we);
      }
      ke.length > 0 && (Y.fetchers = bp(ke)), Ae(Y, { flushSync: b });
    }
    ke.forEach((Y) => {
      oe.has(Y.key) && Ht(Y.key), Y.controller && oe.set(Y.key, Y.controller);
    });
    let Nr = () => ke.forEach((Y) => Ht(Y.key));
    O && O.signal.addEventListener("abort", Nr);
    let { loaderResults: Qt, fetcherResults: Vn } = await Gs(
      g.matches,
      E,
      Le,
      ke,
      m
    );
    if (m.signal.aborted) return { shortCircuited: !0 };
    O && O.signal.removeEventListener("abort", Nr),
      ke.forEach((Y) => oe.delete(Y.key));
    let Wn = Pc([...Qt, ...Vn]);
    if (Wn) {
      if (Wn.idx >= Le.length) {
        let Y = ke[Wn.idx - Le.length].key;
        X.add(Y);
      }
      return await _r(m, Wn.result, { replace: M }), { shortCircuited: !0 };
    }
    let { loaderData: Hn, errors: kt } = kc(g, E, Le, Qt, $, ke, Vn, ft);
    ft.forEach((Y, we) => {
      Y.subscribe((Je) => {
        (Je || Y.done) && ft.delete(we);
      });
    }),
      c.v7_partialHydration &&
        Q &&
        g.errors &&
        Object.entries(g.errors)
          .filter((Y) => {
            let [we] = Y;
            return !Le.some((Je) => Je.route.id === we);
          })
          .forEach((Y) => {
            let [we, Je] = Y;
            kt = Object.assign(kt || {}, { [we]: Je });
          });
    let Ml = Js(),
      zl = Zs(A),
      Dl = Ml || zl || ke.length > 0;
    return me(
      { matches: E, loaderData: Hn, errors: kt },
      Dl ? { fetchers: new Map(g.fetchers) } : {}
    );
  }
  function Ks(m) {
    if (m && !qe(m[1])) return { [m[0]]: m[1].data };
    if (g.actionData)
      return Object.keys(g.actionData).length === 0 ? null : g.actionData;
  }
  function bp(m) {
    return (
      m.forEach((y) => {
        let E = g.fetchers.get(y.key),
          P = Fr(void 0, E ? E.data : void 0);
        g.fetchers.set(y.key, P);
      }),
      new Map(g.fetchers)
    );
  }
  function $p(m, y, E, P) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    oe.has(m) && Ht(m);
    let D = (P && P.unstable_flushSync) === !0,
      U = a || i,
      V = Oa(
        g.location,
        g.matches,
        s,
        c.v7_prependBasename,
        E,
        c.v7_relativeSplatPath,
        y,
        P == null ? void 0 : P.relative
      ),
      M = Cn(U, V, s),
      Q = fi(M, U, V);
    if ((Q.active && Q.matches && (M = Q.matches), !M)) {
      jt(m, y, be(404, { pathname: V }), { flushSync: D });
      return;
    }
    let {
      path: b,
      submission: $,
      error: re,
    } = vc(c.v7_normalizeFormMethod, !0, V, P);
    if (re) {
      jt(m, y, re, { flushSync: D });
      return;
    }
    let q = Hr(M, b);
    if (((T = (P && P.preventScrollReset) === !0), $ && vt($.formMethod))) {
      Bp(m, y, b, q, M, Q.active, D, $);
      return;
    }
    ee.set(m, { routeId: y, path: b }), Vp(m, y, b, q, M, Q.active, D, $);
  }
  async function Bp(m, y, E, P, D, U, V, M) {
    ui(), ee.delete(m);
    function Q(ae) {
      if (!ae.route.action && !ae.route.lazy) {
        let Rt = be(405, { method: M.formMethod, pathname: E, routeId: y });
        return jt(m, y, Rt, { flushSync: V }), !0;
      }
      return !1;
    }
    if (!U && Q(P)) return;
    let b = g.fetchers.get(m);
    Wt(m, yg(M, b), { flushSync: V });
    let $ = new AbortController(),
      re = Kn(e.history, E, $.signal, M);
    if (U) {
      let ae = await Tl(D, E, re.signal);
      if (ae.type === "aborted") return;
      if (ae.type === "error") {
        let { error: Rt } = Ll(E, ae);
        jt(m, y, Rt, { flushSync: V });
        return;
      } else if (ae.matches) {
        if (((D = ae.matches), (P = Hr(D, E)), Q(P))) return;
      } else {
        jt(m, y, be(404, { pathname: E }), { flushSync: V });
        return;
      }
    }
    oe.set(m, $);
    let q = z,
      te = (await Pr("action", re, [P], D))[0];
    if (re.signal.aborted) {
      oe.get(m) === $ && oe.delete(m);
      return;
    }
    if (c.v7_fetcherPersist && Re.has(m)) {
      if (Rn(te) || qe(te)) {
        Wt(m, Xt(void 0));
        return;
      }
    } else {
      if (Rn(te))
        if ((oe.delete(m), A > q)) {
          Wt(m, Xt(void 0));
          return;
        } else
          return X.add(m), Wt(m, Fr(M)), _r(re, te, { fetcherSubmission: M });
      if (qe(te)) {
        jt(m, y, te.error);
        return;
      }
    }
    if (jn(te)) throw be(400, { type: "defer-action" });
    let Le = g.navigation.location || g.location,
      ke = Kn(e.history, Le, $.signal),
      Nr = a || i,
      Qt =
        g.navigation.state !== "idle"
          ? Cn(Nr, g.navigation.location, s)
          : g.matches;
    G(Qt, "Didn't find any matches after fetcher action");
    let Vn = ++z;
    B.set(m, Vn);
    let Wn = Fr(M, te.data);
    g.fetchers.set(m, Wn);
    let [Hn, kt] = gc(
      e.history,
      g,
      Qt,
      M,
      Le,
      !1,
      c.unstable_skipActionErrorRevalidation,
      ce,
      dt,
      Xe,
      Re,
      ee,
      X,
      Nr,
      s,
      [P.route.id, te]
    );
    kt
      .filter((ae) => ae.key !== m)
      .forEach((ae) => {
        let Rt = ae.key,
          ru = g.fetchers.get(Rt),
          Xp = Fr(void 0, ru ? ru.data : void 0);
        g.fetchers.set(Rt, Xp),
          oe.has(Rt) && Ht(Rt),
          ae.controller && oe.set(Rt, ae.controller);
      }),
      Ae({ fetchers: new Map(g.fetchers) });
    let Ml = () => kt.forEach((ae) => Ht(ae.key));
    $.signal.addEventListener("abort", Ml);
    let { loaderResults: zl, fetcherResults: Dl } = await Gs(
      g.matches,
      Qt,
      Hn,
      kt,
      ke
    );
    if ($.signal.aborted) return;
    $.signal.removeEventListener("abort", Ml),
      B.delete(m),
      oe.delete(m),
      kt.forEach((ae) => oe.delete(ae.key));
    let Y = Pc([...zl, ...Dl]);
    if (Y) {
      if (Y.idx >= Hn.length) {
        let ae = kt[Y.idx - Hn.length].key;
        X.add(ae);
      }
      return _r(ke, Y.result);
    }
    let { loaderData: we, errors: Je } = kc(
      g,
      g.matches,
      Hn,
      zl,
      void 0,
      kt,
      Dl,
      ft
    );
    if (g.fetchers.has(m)) {
      let ae = Xt(te.data);
      g.fetchers.set(m, ae);
    }
    Zs(Vn),
      g.navigation.state === "loading" && Vn > A
        ? (G(j, "Expected pending action"),
          O && O.abort(),
          Bn(g.navigation.location, {
            matches: Qt,
            loaderData: we,
            errors: Je,
            fetchers: new Map(g.fetchers),
          }))
        : (Ae({
            errors: Je,
            loaderData: Ec(g.loaderData, we, Qt, Je),
            fetchers: new Map(g.fetchers),
          }),
          (ce = !1));
  }
  async function Vp(m, y, E, P, D, U, V, M) {
    let Q = g.fetchers.get(m);
    Wt(m, Fr(M, Q ? Q.data : void 0), { flushSync: V });
    let b = new AbortController(),
      $ = Kn(e.history, E, b.signal);
    if (U) {
      let te = await Tl(D, E, $.signal);
      if (te.type === "aborted") return;
      if (te.type === "error") {
        let { error: Le } = Ll(E, te);
        jt(m, y, Le, { flushSync: V });
        return;
      } else if (te.matches) (D = te.matches), (P = Hr(D, E));
      else {
        jt(m, y, be(404, { pathname: E }), { flushSync: V });
        return;
      }
    }
    oe.set(m, b);
    let re = z,
      ie = (await Pr("loader", $, [P], D))[0];
    if (
      (jn(ie) && (ie = (await up(ie, $.signal, !0)) || ie),
      oe.get(m) === b && oe.delete(m),
      !$.signal.aborted)
    ) {
      if (Re.has(m)) {
        Wt(m, Xt(void 0));
        return;
      }
      if (Rn(ie))
        if (A > re) {
          Wt(m, Xt(void 0));
          return;
        } else {
          X.add(m), await _r($, ie);
          return;
        }
      if (qe(ie)) {
        jt(m, y, ie.error);
        return;
      }
      G(!jn(ie), "Unhandled fetcher deferred data"), Wt(m, Xt(ie.data));
    }
  }
  async function _r(m, y, E) {
    let {
      submission: P,
      fetcherSubmission: D,
      replace: U,
    } = E === void 0 ? {} : E;
    y.response.headers.has("X-Remix-Revalidate") && (ce = !0);
    let V = y.response.headers.get("Location");
    G(V, "Expected a Location header on the redirect Response"),
      (V = xc(V, new URL(m.url), s));
    let M = wl(g.location, V, { _isRedirect: !0 });
    if (n) {
      let ie = !1;
      if (y.response.headers.has("X-Remix-Reload-Document")) ie = !0;
      else if (bs.test(V)) {
        const te = e.history.createURL(V);
        ie = te.origin !== t.location.origin || Bt(te.pathname, s) == null;
      }
      if (ie) {
        U ? t.location.replace(V) : t.location.assign(V);
        return;
      }
    }
    O = null;
    let Q = U === !0 ? Ee.Replace : Ee.Push,
      { formMethod: b, formAction: $, formEncType: re } = g.navigation;
    !P && !D && b && $ && re && (P = jc(g.navigation));
    let q = P || D;
    if (Zv.has(y.response.status) && q && vt(q.formMethod))
      await Sn(Q, M, {
        submission: me({}, q, { formAction: V }),
        preventScrollReset: T,
      });
    else {
      let ie = $i(M, P);
      await Sn(Q, M, {
        overrideNavigation: ie,
        fetcherSubmission: D,
        preventScrollReset: T,
      });
    }
  }
  async function Pr(m, y, E, P) {
    try {
      let D = await ag(u, m, y, E, P, o, l);
      return await Promise.all(
        D.map((U, V) => {
          if (hg(U)) {
            let M = U.result;
            return {
              type: se.redirect,
              response: cg(M, y, E[V].route.id, P, s, c.v7_relativeSplatPath),
            };
          }
          return ug(U);
        })
      );
    } catch (D) {
      return E.map(() => ({ type: se.error, error: D }));
    }
  }
  async function Gs(m, y, E, P, D) {
    let [U, ...V] = await Promise.all([
      E.length ? Pr("loader", D, E, y) : [],
      ...P.map((M) => {
        if (M.matches && M.match && M.controller) {
          let Q = Kn(e.history, M.path, M.controller.signal);
          return Pr("loader", Q, [M.match], M.matches).then((b) => b[0]);
        } else
          return Promise.resolve({
            type: se.error,
            error: be(404, { pathname: M.path }),
          });
      }),
    ]);
    return (
      await Promise.all([
        Nc(
          m,
          E,
          U,
          U.map(() => D.signal),
          !1,
          g.loaderData
        ),
        Nc(
          m,
          P.map((M) => M.match),
          V,
          P.map((M) => (M.controller ? M.controller.signal : null)),
          !0
        ),
      ]),
      { loaderResults: U, fetcherResults: V }
    );
  }
  function ui() {
    (ce = !0),
      dt.push(...di()),
      ee.forEach((m, y) => {
        oe.has(y) && (Xe.push(y), Ht(y));
      });
  }
  function Wt(m, y, E) {
    E === void 0 && (E = {}),
      g.fetchers.set(m, y),
      Ae(
        { fetchers: new Map(g.fetchers) },
        { flushSync: (E && E.flushSync) === !0 }
      );
  }
  function jt(m, y, E, P) {
    P === void 0 && (P = {});
    let D = tl(g.matches, y);
    jl(m),
      Ae(
        { errors: { [D.route.id]: E }, fetchers: new Map(g.fetchers) },
        { flushSync: (P && P.flushSync) === !0 }
      );
  }
  function Ys(m) {
    return (
      c.v7_fetcherPersist &&
        (St.set(m, (St.get(m) || 0) + 1), Re.has(m) && Re.delete(m)),
      g.fetchers.get(m) || qv
    );
  }
  function jl(m) {
    let y = g.fetchers.get(m);
    oe.has(m) && !(y && y.state === "loading" && B.has(m)) && Ht(m),
      ee.delete(m),
      B.delete(m),
      X.delete(m),
      Re.delete(m),
      g.fetchers.delete(m);
  }
  function Wp(m) {
    if (c.v7_fetcherPersist) {
      let y = (St.get(m) || 0) - 1;
      y <= 0 ? (St.delete(m), Re.add(m)) : St.set(m, y);
    } else jl(m);
    Ae({ fetchers: new Map(g.fetchers) });
  }
  function Ht(m) {
    let y = oe.get(m);
    G(y, "Expected fetch controller: " + m), y.abort(), oe.delete(m);
  }
  function Xs(m) {
    for (let y of m) {
      let E = Ys(y),
        P = Xt(E.data);
      g.fetchers.set(y, P);
    }
  }
  function Js() {
    let m = [],
      y = !1;
    for (let E of X) {
      let P = g.fetchers.get(E);
      G(P, "Expected fetcher: " + E),
        P.state === "loading" && (X.delete(E), m.push(E), (y = !0));
    }
    return Xs(m), y;
  }
  function Zs(m) {
    let y = [];
    for (let [E, P] of B)
      if (P < m) {
        let D = g.fetchers.get(E);
        G(D, "Expected fetcher: " + E),
          D.state === "loading" && (Ht(E), B.delete(E), y.push(E));
      }
    return Xs(y), y.length > 0;
  }
  function Hp(m, y) {
    let E = g.blockers.get(m) || Ir;
    return Ue.get(m) !== y && Ue.set(m, y), E;
  }
  function qs(m) {
    g.blockers.delete(m), Ue.delete(m);
  }
  function Rl(m, y) {
    let E = g.blockers.get(m) || Ir;
    G(
      (E.state === "unblocked" && y.state === "blocked") ||
        (E.state === "blocked" && y.state === "blocked") ||
        (E.state === "blocked" && y.state === "proceeding") ||
        (E.state === "blocked" && y.state === "unblocked") ||
        (E.state === "proceeding" && y.state === "unblocked"),
      "Invalid blocker state transition: " + E.state + " -> " + y.state
    );
    let P = new Map(g.blockers);
    P.set(m, y), Ae({ blockers: P });
  }
  function eu(m) {
    let { currentLocation: y, nextLocation: E, historyAction: P } = m;
    if (Ue.size === 0) return;
    Ue.size > 1 && wr(!1, "A router only supports one blocker at a time");
    let D = Array.from(Ue.entries()),
      [U, V] = D[D.length - 1],
      M = g.blockers.get(U);
    if (
      !(M && M.state === "proceeding") &&
      V({ currentLocation: y, nextLocation: E, historyAction: P })
    )
      return U;
  }
  function ci(m) {
    let y = be(404, { pathname: m }),
      E = a || i,
      { matches: P, route: D } = _c(E);
    return di(), { notFoundMatches: P, route: D, error: y };
  }
  function Ll(m, y) {
    let E = y.partialMatches,
      P = E[E.length - 1].route,
      D = be(400, {
        type: "route-discovery",
        routeId: P.id,
        pathname: m,
        message:
          y.error != null && "message" in y.error ? y.error : String(y.error),
      });
    return { notFoundMatches: E, route: P, error: D };
  }
  function di(m) {
    let y = [];
    return (
      ft.forEach((E, P) => {
        (!m || m(P)) && (E.cancel(), y.push(P), ft.delete(P));
      }),
      y
    );
  }
  function Qp(m, y, E) {
    if (((k = m), (N = y), (x = E || null), !h && g.navigation === bi)) {
      h = !0;
      let P = nu(g.location, g.matches);
      P != null && Ae({ restoreScrollPosition: P });
    }
    return () => {
      (k = null), (N = null), (x = null);
    };
  }
  function tu(m, y) {
    return (
      (x &&
        x(
          m,
          y.map((P) => Lv(P, g.loaderData))
        )) ||
      m.key
    );
  }
  function Kp(m, y) {
    if (k && N) {
      let E = tu(m, y);
      k[E] = N();
    }
  }
  function nu(m, y) {
    if (k) {
      let E = tu(m, y),
        P = k[E];
      if (typeof P == "number") return P;
    }
    return null;
  }
  function fi(m, y, E) {
    if (f)
      if (m) {
        let P = m[m.length - 1].route;
        if (P.path && (P.path === "*" || P.path.endsWith("/*")))
          return { active: !0, matches: fo(y, E, s, !0) };
      } else return { active: !0, matches: fo(y, E, s, !0) || [] };
    return { active: !1, matches: null };
  }
  async function Tl(m, y, E) {
    let P = m,
      D = P.length > 0 ? P[P.length - 1].route : null;
    for (;;) {
      let U = a == null,
        V = a || i;
      try {
        await og(f, y, P, V, o, l, $n, E);
      } catch ($) {
        return { type: "error", error: $, partialMatches: P };
      } finally {
        U && (i = [...i]);
      }
      if (E.aborted) return { type: "aborted" };
      let M = Cn(V, y, s),
        Q = !1;
      if (M) {
        let $ = M[M.length - 1].route;
        if ($.index) return { type: "success", matches: M };
        if ($.path && $.path.length > 0)
          if ($.path === "*") Q = !0;
          else return { type: "success", matches: M };
      }
      let b = fo(V, y, s, !0);
      if (
        !b ||
        P.map(($) => $.route.id).join("-") ===
          b.map(($) => $.route.id).join("-")
      )
        return { type: "success", matches: Q ? M : null };
      if (((P = b), (D = P[P.length - 1].route), D.path === "*"))
        return { type: "success", matches: P };
    }
  }
  function Gp(m) {
    (o = {}), (a = xl(m, l, void 0, o));
  }
  function Yp(m, y) {
    let E = a == null;
    ip(m, y, a || i, o, l), E && ((i = [...i]), Ae({}));
  }
  return (
    (L = {
      get basename() {
        return s;
      },
      get future() {
        return c;
      },
      get state() {
        return g;
      },
      get routes() {
        return i;
      },
      get window() {
        return t;
      },
      initialize: Dp,
      subscribe: Ip,
      enableScrollRestoration: Qp,
      navigate: Qs,
      fetch: $p,
      revalidate: Fp,
      createHref: (m) => e.history.createHref(m),
      encodeLocation: (m) => e.history.encodeLocation(m),
      getFetcher: Ys,
      deleteFetcher: Wp,
      dispose: Op,
      getBlocker: Hp,
      deleteBlocker: qs,
      patchRoutes: Yp,
      _internalFetchControllers: oe,
      _internalActiveDeferreds: ft,
      _internalSetRoutes: Gp,
    }),
    L
  );
}
function ng(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Oa(e, t, n, r, l, o, i, a) {
  let s, u;
  if (i) {
    s = [];
    for (let c of t)
      if ((s.push(c), c.route.id === i)) {
        u = c;
        break;
      }
  } else (s = t), (u = t[t.length - 1]);
  let f = Us(l || ".", Fs(s, o), Bt(e.pathname, n) || e.pathname, a === "path");
  return (
    l == null && ((f.search = e.search), (f.hash = e.hash)),
    (l == null || l === "" || l === ".") &&
      u &&
      u.route.index &&
      !$s(f.search) &&
      (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (f.pathname = f.pathname === "/" ? n : Ft([n, f.pathname])),
    Un(f)
  );
}
function vc(e, t, n, r) {
  if (!r || !ng(r)) return { path: n };
  if (r.formMethod && !vg(r.formMethod))
    return { path: n, error: be(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: be(400, { type: "invalid-body" }) }),
    o = r.formMethod || "get",
    i = e ? o.toUpperCase() : o.toLowerCase(),
    a = ap(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!vt(i)) return l();
      let p =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((S, k) => {
              let [x, N] = k;
              return (
                "" +
                S +
                x +
                "=" +
                N +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: i,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: p,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!vt(i)) return l();
      try {
        let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: i,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: p,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  G(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let s, u;
  if (r.formData) (s = Ia(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (s = Ia(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (s = r.body), (u = Sc(s));
  else if (r.body == null) (s = new URLSearchParams()), (u = new FormData());
  else
    try {
      (s = new URLSearchParams(r.body)), (u = Sc(s));
    } catch {
      return l();
    }
  let f = {
    formMethod: i,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (vt(f.formMethod)) return { path: n, submission: f };
  let c = gn(n);
  return (
    t && c.search && $s(c.search) && s.append("index", ""),
    (c.search = "?" + s),
    { path: Un(c), submission: f }
  );
}
function rg(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function gc(e, t, n, r, l, o, i, a, s, u, f, c, p, S, k, x) {
  let N = x ? (qe(x[1]) ? x[1].error : x[1].data) : void 0,
    h = e.createURL(t.location),
    d = e.createURL(l),
    v = x && qe(x[1]) ? x[0] : void 0,
    C = v ? rg(n, v) : n,
    L = x ? x[1].statusCode : void 0,
    g = i && L && L >= 400,
    j = C.filter((O, F) => {
      let { route: W } = O;
      if (W.lazy) return !0;
      if (W.loader == null) return !1;
      if (o)
        return typeof W.loader != "function" || W.loader.hydrate
          ? !0
          : t.loaderData[W.id] === void 0 &&
              (!t.errors || t.errors[W.id] === void 0);
      if (
        lg(t.loaderData, t.matches[F], O) ||
        s.some((ce) => ce === O.route.id)
      )
        return !0;
      let H = t.matches[F],
        le = O;
      return yc(
        O,
        me(
          {
            currentUrl: h,
            currentParams: H.params,
            nextUrl: d,
            nextParams: le.params,
          },
          r,
          {
            actionResult: N,
            unstable_actionStatus: L,
            defaultShouldRevalidate: g
              ? !1
              : a ||
                h.pathname + h.search === d.pathname + d.search ||
                h.search !== d.search ||
                op(H, le),
          }
        )
      );
    }),
    T = [];
  return (
    c.forEach((O, F) => {
      if (o || !n.some((dt) => dt.route.id === O.routeId) || f.has(F)) return;
      let W = Cn(S, O.path, k);
      if (!W) {
        T.push({
          key: F,
          routeId: O.routeId,
          path: O.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let H = t.fetchers.get(F),
        le = Hr(W, O.path),
        ce = !1;
      p.has(F)
        ? (ce = !1)
        : u.includes(F)
        ? (ce = !0)
        : H && H.state !== "idle" && H.data === void 0
        ? (ce = a)
        : (ce = yc(
            le,
            me(
              {
                currentUrl: h,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: d,
                nextParams: n[n.length - 1].params,
              },
              r,
              {
                actionResult: N,
                unstable_actionStatus: L,
                defaultShouldRevalidate: g ? !1 : a,
              }
            )
          )),
        ce &&
          T.push({
            key: F,
            routeId: O.routeId,
            path: O.path,
            matches: W,
            match: le,
            controller: new AbortController(),
          });
    }),
    [j, T]
  );
}
function lg(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function op(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function yc(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function og(e, t, n, r, l, o, i, a) {
  let s = [t, ...n.map((u) => u.route.id)].join("-");
  try {
    let u = i.get(s);
    u ||
      ((u = e({
        path: t,
        matches: n,
        patch: (f, c) => {
          a.aborted || ip(f, c, r, l, o);
        },
      })),
      i.set(s, u)),
      u && pg(u) && (await u);
  } finally {
    i.delete(s);
  }
}
function ip(e, t, n, r, l) {
  if (e) {
    var o;
    let i = r[e];
    G(i, "No route found to patch children into: routeId = " + e);
    let a = xl(
      t,
      l,
      [
        e,
        "patch",
        String(((o = i.children) == null ? void 0 : o.length) || "0"),
      ],
      r
    );
    i.children ? i.children.push(...a) : (i.children = a);
  } else {
    let i = xl(t, l, ["patch", String(n.length || "0")], r);
    n.push(...i);
  }
}
async function wc(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  G(l, "No route found in manifest");
  let o = {};
  for (let i in r) {
    let s = l[i] !== void 0 && i !== "hasErrorBoundary";
    wr(
      !s,
      'Route "' +
        l.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.')
    ),
      !s && !jv.has(i) && (o[i] = r[i]);
  }
  Object.assign(l, o), Object.assign(l, me({}, t(l), { lazy: void 0 }));
}
function ig(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function ag(e, t, n, r, l, o, i, a) {
  let s = r.reduce((c, p) => c.add(p.route.id), new Set()),
    u = new Set(),
    f = await e({
      matches: l.map((c) => {
        let p = s.has(c.route.id);
        return me({}, c, {
          shouldLoad: p,
          resolve: (k) => (
            u.add(c.route.id),
            p
              ? sg(t, n, c, o, i, k, a)
              : Promise.resolve({ type: se.data, result: void 0 })
          ),
        });
      }),
      request: n,
      params: l[0].params,
      context: a,
    });
  return (
    l.forEach((c) =>
      G(
        u.has(c.route.id),
        '`match.resolve()` was not called for route id "' +
          c.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.'
      )
    ),
    f.filter((c, p) => s.has(l[p].route.id))
  );
}
async function sg(e, t, n, r, l, o, i) {
  let a,
    s,
    u = (f) => {
      let c,
        p = new Promise((x, N) => (c = N));
      (s = () => c()), t.signal.addEventListener("abort", s);
      let S = (x) =>
          typeof f != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + n.route.id + "]")
                )
              )
            : f(
                { request: t, params: n.params, context: i },
                ...(x !== void 0 ? [x] : [])
              ),
        k;
      return (
        o
          ? (k = o((x) => S(x)))
          : (k = (async () => {
              try {
                return { type: "data", result: await S() };
              } catch (x) {
                return { type: "error", result: x };
              }
            })()),
        Promise.race([k, p])
      );
    };
  try {
    let f = n.route[e];
    if (n.route.lazy)
      if (f) {
        let c,
          [p] = await Promise.all([
            u(f).catch((S) => {
              c = S;
            }),
            wc(n.route, l, r),
          ]);
        if (c !== void 0) throw c;
        a = p;
      } else if ((await wc(n.route, l, r), (f = n.route[e]), f)) a = await u(f);
      else if (e === "action") {
        let c = new URL(t.url),
          p = c.pathname + c.search;
        throw be(405, { method: t.method, pathname: p, routeId: n.route.id });
      } else return { type: se.data, result: void 0 };
    else if (f) a = await u(f);
    else {
      let c = new URL(t.url),
        p = c.pathname + c.search;
      throw be(404, { pathname: p });
    }
    G(
      a.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (f) {
    return { type: se.error, result: f };
  } finally {
    s && t.signal.removeEventListener("abort", s);
  }
  return a;
}
async function ug(e) {
  let { result: t, type: n, status: r } = e;
  if (sp(t)) {
    let i;
    try {
      let a = t.headers.get("Content-Type");
      a && /\bapplication\/json\b/.test(a)
        ? t.body == null
          ? (i = null)
          : (i = await t.json())
        : (i = await t.text());
    } catch (a) {
      return { type: se.error, error: a };
    }
    return n === se.error
      ? {
          type: se.error,
          error: new As(t.status, t.statusText, i),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: se.data, data: i, statusCode: t.status, headers: t.headers };
  }
  if (n === se.error)
    return { type: se.error, error: t, statusCode: li(t) ? t.status : r };
  if (mg(t)) {
    var l, o;
    return {
      type: se.deferred,
      deferredData: t,
      statusCode: (l = t.init) == null ? void 0 : l.status,
      headers:
        ((o = t.init) == null ? void 0 : o.headers) &&
        new Headers(t.init.headers),
    };
  }
  return { type: se.data, data: t, statusCode: r };
}
function cg(e, t, n, r, l, o) {
  let i = e.headers.get("Location");
  if (
    (G(
      i,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !bs.test(i))
  ) {
    let a = r.slice(0, r.findIndex((s) => s.route.id === n) + 1);
    (i = Oa(new URL(t.url), a, l, !0, i, o)), e.headers.set("Location", i);
  }
  return e;
}
function xc(e, t, n) {
  if (bs.test(e)) {
    let r = e,
      l = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
      o = Bt(l.pathname, n) != null;
    if (l.origin === t.origin && o) return l.pathname + l.search + l.hash;
  }
  return e;
}
function Kn(e, t, n, r) {
  let l = e.createURL(ap(t)).toString(),
    o = { signal: n };
  if (r && vt(r.formMethod)) {
    let { formMethod: i, formEncType: a } = r;
    (o.method = i.toUpperCase()),
      a === "application/json"
        ? ((o.headers = new Headers({ "Content-Type": a })),
          (o.body = JSON.stringify(r.json)))
        : a === "text/plain"
        ? (o.body = r.text)
        : a === "application/x-www-form-urlencoded" && r.formData
        ? (o.body = Ia(r.formData))
        : (o.body = r.formData);
  }
  return new Request(l, o);
}
function Ia(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Sc(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function dg(e, t, n, r, l, o) {
  let i = {},
    a = null,
    s,
    u = !1,
    f = {},
    c = r && qe(r[1]) ? r[1].error : void 0;
  return (
    n.forEach((p, S) => {
      let k = t[S].route.id;
      if (
        (G(!Rn(p), "Cannot handle redirect results in processLoaderData"),
        qe(p))
      ) {
        let x = p.error;
        c !== void 0 && ((x = c), (c = void 0)), (a = a || {});
        {
          let N = tl(e, k);
          a[N.route.id] == null && (a[N.route.id] = x);
        }
        (i[k] = void 0),
          u || ((u = !0), (s = li(p.error) ? p.error.status : 500)),
          p.headers && (f[k] = p.headers);
      } else
        jn(p)
          ? (l.set(k, p.deferredData),
            (i[k] = p.deferredData.data),
            p.statusCode != null &&
              p.statusCode !== 200 &&
              !u &&
              (s = p.statusCode),
            p.headers && (f[k] = p.headers))
          : ((i[k] = p.data),
            p.statusCode && p.statusCode !== 200 && !u && (s = p.statusCode),
            p.headers && (f[k] = p.headers));
    }),
    c !== void 0 && r && ((a = { [r[0]]: c }), (i[r[0]] = void 0)),
    { loaderData: i, errors: a, statusCode: s || 200, loaderHeaders: f }
  );
}
function kc(e, t, n, r, l, o, i, a) {
  let { loaderData: s, errors: u } = dg(t, n, r, l, a);
  for (let f = 0; f < o.length; f++) {
    let { key: c, match: p, controller: S } = o[f];
    G(
      i !== void 0 && i[f] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let k = i[f];
    if (!(S && S.signal.aborted))
      if (qe(k)) {
        let x = tl(e.matches, p == null ? void 0 : p.route.id);
        (u && u[x.route.id]) || (u = me({}, u, { [x.route.id]: k.error })),
          e.fetchers.delete(c);
      } else if (Rn(k)) G(!1, "Unhandled fetcher revalidation redirect");
      else if (jn(k)) G(!1, "Unhandled fetcher deferred data");
      else {
        let x = Xt(k.data);
        e.fetchers.set(c, x);
      }
  }
  return { loaderData: s, errors: u };
}
function Ec(e, t, n, r) {
  let l = me({}, t);
  for (let o of n) {
    let i = o.route.id;
    if (
      (t.hasOwnProperty(i)
        ? t[i] !== void 0 && (l[i] = t[i])
        : e[i] !== void 0 && o.route.loader && (l[i] = e[i]),
      r && r.hasOwnProperty(i))
    )
      break;
  }
  return l;
}
function Cc(e) {
  return e
    ? qe(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function tl(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function _c(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function be(e, t) {
  let {
      pathname: n,
      routeId: r,
      method: l,
      type: o,
      message: i,
    } = t === void 0 ? {} : t,
    a = "Unknown Server Error",
    s = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((a = "Bad Request"),
        o === "route-discovery"
          ? (s =
              'Unable to match URL "' +
              n +
              '" - the `children()` function for ' +
              ("route `" + r + "` threw the following error:\n" + i))
          : l && n && r
          ? (s =
              "You made a " +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action"
          ? (s = "defer() is not supported in actions")
          : o === "invalid-body" && (s = "Unable to encode submission body"))
      : e === 403
      ? ((a = "Forbidden"),
        (s = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((a = "Not Found"), (s = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((a = "Method Not Allowed"),
        l && n && r
          ? (s =
              "You made a " +
              l.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : l && (s = 'Invalid request method "' + l.toUpperCase() + '"')),
    new As(e || 500, a, new Error(s), !0)
  );
}
function Pc(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Rn(n)) return { result: n, idx: t };
  }
}
function ap(e) {
  let t = typeof e == "string" ? gn(e) : e;
  return Un(me({}, t, { hash: "" }));
}
function fg(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function pg(e) {
  return typeof e == "object" && e != null && "then" in e;
}
function hg(e) {
  return sp(e.result) && Jv.has(e.result.status);
}
function jn(e) {
  return e.type === se.deferred;
}
function qe(e) {
  return e.type === se.error;
}
function Rn(e) {
  return (e && e.type) === se.redirect;
}
function mg(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function sp(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function vg(e) {
  return Xv.has(e.toLowerCase());
}
function vt(e) {
  return Gv.has(e.toLowerCase());
}
async function Nc(e, t, n, r, l, o) {
  for (let i = 0; i < n.length; i++) {
    let a = n[i],
      s = t[i];
    if (!s) continue;
    let u = e.find((c) => c.route.id === s.route.id),
      f = u != null && !op(u, s) && (o && o[s.route.id]) !== void 0;
    if (jn(a) && (l || f)) {
      let c = r[i];
      G(c, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await up(a, c, l).then((p) => {
          p && (n[i] = p || n[i]);
        });
    }
  }
}
async function up(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: se.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: se.error, error: l };
      }
    return { type: se.data, data: e.deferredData.data };
  }
}
function $s(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Hr(e, t) {
  let n = typeof t == "string" ? gn(t).search : t.search;
  if (e[e.length - 1].route.index && $s(n || "")) return e[e.length - 1];
  let r = np(e);
  return r[r.length - 1];
}
function jc(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: o,
    json: i,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: i,
        text: void 0,
      };
  }
}
function $i(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function gg(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Fr(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function yg(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Xt(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function wg(e, t) {
  try {
    let n = e.sessionStorage.getItem(lp);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(l, new Set(o || []));
    }
  } catch {}
}
function xg(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(lp, JSON.stringify(n));
    } catch (r) {
      wr(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Uo() {
  return (
    (Uo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Uo.apply(this, arguments)
  );
}
const Pl = _.createContext(null),
  Bs = _.createContext(null),
  yn = _.createContext(null),
  Vs = _.createContext(null),
  wn = _.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  cp = _.createContext(null);
function Sg(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Nl() || G(!1);
  let { basename: r, navigator: l } = _.useContext(yn),
    { hash: o, pathname: i, search: a } = oi(e, { relative: n }),
    s = i;
  return (
    r !== "/" && (s = i === "/" ? r : Ft([r, i])),
    l.createHref({ pathname: s, search: a, hash: o })
  );
}
function Nl() {
  return _.useContext(Vs) != null;
}
function xn() {
  return Nl() || G(!1), _.useContext(Vs).location;
}
function dp(e) {
  _.useContext(yn).static || _.useLayoutEffect(e);
}
function kg() {
  let { isDataRoute: e } = _.useContext(wn);
  return e ? Ig() : Eg();
}
function Eg() {
  Nl() || G(!1);
  let e = _.useContext(Pl),
    { basename: t, future: n, navigator: r } = _.useContext(yn),
    { matches: l } = _.useContext(wn),
    { pathname: o } = xn(),
    i = JSON.stringify(Fs(l, n.v7_relativeSplatPath)),
    a = _.useRef(!1);
  return (
    dp(() => {
      a.current = !0;
    }),
    _.useCallback(
      function (u, f) {
        if ((f === void 0 && (f = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let c = Us(u, JSON.parse(i), o, f.relative === "path");
        e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : Ft([t, c.pathname])),
          (f.replace ? r.replace : r.push)(c, f.state, f);
      },
      [t, r, i, o, e]
    )
  );
}
const Cg = _.createContext(null);
function _g(e) {
  let t = _.useContext(wn).outlet;
  return t && _.createElement(Cg.Provider, { value: e }, t);
}
function oi(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = _.useContext(yn),
    { matches: l } = _.useContext(wn),
    { pathname: o } = xn(),
    i = JSON.stringify(Fs(l, r.v7_relativeSplatPath));
  return _.useMemo(() => Us(e, JSON.parse(i), o, n === "path"), [e, i, o, n]);
}
function Pg(e, t, n, r) {
  Nl() || G(!1);
  let { navigator: l } = _.useContext(yn),
    { matches: o } = _.useContext(wn),
    i = o[o.length - 1],
    a = i ? i.params : {};
  i && i.pathname;
  let s = i ? i.pathnameBase : "/";
  i && i.route;
  let u = xn(),
    f;
  f = u;
  let c = f.pathname || "/",
    p = c;
  if (s !== "/") {
    let x = s.replace(/^\//, "").split("/");
    p = "/" + c.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let S = Cn(e, { pathname: p });
  return Tg(
    S &&
      S.map((x) =>
        Object.assign({}, x, {
          params: Object.assign({}, a, x.params),
          pathname: Ft([
            s,
            l.encodeLocation
              ? l.encodeLocation(x.pathname).pathname
              : x.pathname,
          ]),
          pathnameBase:
            x.pathnameBase === "/"
              ? s
              : Ft([
                  s,
                  l.encodeLocation
                    ? l.encodeLocation(x.pathnameBase).pathname
                    : x.pathnameBase,
                ]),
        })
      ),
    o,
    n,
    r
  );
}
function Ng() {
  let e = Og(),
    t = li(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return _.createElement(
    _.Fragment,
    null,
    _.createElement("h2", null, "Unexpected Application Error!"),
    _.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? _.createElement("pre", { style: l }, n) : null,
    null
  );
}
const jg = _.createElement(Ng, null);
class Rg extends _.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? _.createElement(
          wn.Provider,
          { value: this.props.routeContext },
          _.createElement(cp.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Lg(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = _.useContext(Pl);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    _.createElement(wn.Provider, { value: t }, r)
  );
}
function Tg(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let i = e,
    a = (l = n) == null ? void 0 : l.errors;
  if (a != null) {
    let f = i.findIndex(
      (c) => c.route.id && (a == null ? void 0 : a[c.route.id]) !== void 0
    );
    f >= 0 || G(!1), (i = i.slice(0, Math.min(i.length, f + 1)));
  }
  let s = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < i.length; f++) {
      let c = i[f];
      if (
        ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (u = f),
        c.route.id)
      ) {
        let { loaderData: p, errors: S } = n,
          k =
            c.route.loader &&
            p[c.route.id] === void 0 &&
            (!S || S[c.route.id] === void 0);
        if (c.route.lazy || k) {
          (s = !0), u >= 0 ? (i = i.slice(0, u + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((f, c, p) => {
    let S,
      k = !1,
      x = null,
      N = null;
    n &&
      ((S = a && c.route.id ? a[c.route.id] : void 0),
      (x = c.route.errorElement || jg),
      s &&
        (u < 0 && p === 0
          ? ((k = !0), (N = null))
          : u === p &&
            ((k = !0), (N = c.route.hydrateFallbackElement || null))));
    let h = t.concat(i.slice(0, p + 1)),
      d = () => {
        let v;
        return (
          S
            ? (v = x)
            : k
            ? (v = N)
            : c.route.Component
            ? (v = _.createElement(c.route.Component, null))
            : c.route.element
            ? (v = c.route.element)
            : (v = f),
          _.createElement(Lg, {
            match: c,
            routeContext: { outlet: f, matches: h, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (c.route.ErrorBoundary || c.route.errorElement || p === 0)
      ? _.createElement(Rg, {
          location: n.location,
          revalidation: n.revalidation,
          component: x,
          error: S,
          children: d(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : d();
  }, null);
}
var fp = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(fp || {}),
  Ao = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Ao || {});
function Mg(e) {
  let t = _.useContext(Pl);
  return t || G(!1), t;
}
function zg(e) {
  let t = _.useContext(Bs);
  return t || G(!1), t;
}
function Dg(e) {
  let t = _.useContext(wn);
  return t || G(!1), t;
}
function pp(e) {
  let t = Dg(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || G(!1), n.route.id;
}
function Og() {
  var e;
  let t = _.useContext(cp),
    n = zg(Ao.UseRouteError),
    r = pp(Ao.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Ig() {
  let { router: e } = Mg(fp.UseNavigateStable),
    t = pp(Ao.UseNavigateStable),
    n = _.useRef(!1);
  return (
    dp(() => {
      n.current = !0;
    }),
    _.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, Uo({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function Fg(e) {
  return _g(e.context);
}
function Ug(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = Ee.Pop,
    navigator: o,
    static: i = !1,
    future: a,
  } = e;
  Nl() && G(!1);
  let s = t.replace(/^\/*/, "/"),
    u = _.useMemo(
      () => ({
        basename: s,
        navigator: o,
        static: i,
        future: Uo({ v7_relativeSplatPath: !1 }, a),
      }),
      [s, a, o, i]
    );
  typeof r == "string" && (r = gn(r));
  let {
      pathname: f = "/",
      search: c = "",
      hash: p = "",
      state: S = null,
      key: k = "default",
    } = r,
    x = _.useMemo(() => {
      let N = Bt(f, s);
      return N == null
        ? null
        : {
            location: { pathname: N, search: c, hash: p, state: S, key: k },
            navigationType: l,
          };
    }, [s, f, c, p, S, k, l]);
  return x == null
    ? null
    : _.createElement(
        yn.Provider,
        { value: u },
        _.createElement(Vs.Provider, { children: n, value: x })
      );
}
new Promise(() => {});
function Ag(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: _.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: _.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: _.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function xr() {
  return (
    (xr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    xr.apply(this, arguments)
  );
}
function hp(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function bg(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function $g(e, t) {
  return e.button === 0 && (!t || t === "_self") && !bg(e);
}
const Bg = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Vg = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  Wg = "6";
try {
  window.__reactRouterVersion = Wg;
} catch {}
function Hg(e, t) {
  return tg({
    basename: void 0,
    future: xr({}, void 0, { v7_prependBasename: !0 }),
    history: _v({ window: void 0 }),
    hydrationData: Qg(),
    routes: e,
    mapRouteProperties: Ag,
    unstable_dataStrategy: void 0,
    unstable_patchRoutesOnMiss: void 0,
    window: void 0,
  }).initialize();
}
function Qg() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = xr({}, t, { errors: Kg(t.errors) })), t;
}
function Kg(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new As(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      if (l.__subType) {
        let o = window[l.__subType];
        if (typeof o == "function")
          try {
            let i = new o(l.message);
            (i.stack = ""), (n[r] = i);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(l.message);
        (o.stack = ""), (n[r] = o);
      }
    } else n[r] = l;
  return n;
}
const mp = _.createContext({ isTransitioning: !1 }),
  Gg = _.createContext(new Map()),
  Yg = "startTransition",
  Rc = fh[Yg],
  Xg = "flushSync",
  Lc = Cv[Xg];
function Jg(e) {
  Rc ? Rc(e) : e();
}
function Ur(e) {
  Lc ? Lc(e) : e();
}
class Zg {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function qg(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, o] = _.useState(n.state),
    [i, a] = _.useState(),
    [s, u] = _.useState({ isTransitioning: !1 }),
    [f, c] = _.useState(),
    [p, S] = _.useState(),
    [k, x] = _.useState(),
    N = _.useRef(new Map()),
    { v7_startTransition: h } = r || {},
    d = _.useCallback(
      (j) => {
        h ? Jg(j) : j();
      },
      [h]
    ),
    v = _.useCallback(
      (j, T) => {
        let {
          deletedFetchers: O,
          unstable_flushSync: F,
          unstable_viewTransitionOpts: W,
        } = T;
        O.forEach((le) => N.current.delete(le)),
          j.fetchers.forEach((le, ce) => {
            le.data !== void 0 && N.current.set(ce, le.data);
          });
        let H =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!W || H) {
          F ? Ur(() => o(j)) : d(() => o(j));
          return;
        }
        if (F) {
          Ur(() => {
            p && (f && f.resolve(), p.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: W.currentLocation,
                nextLocation: W.nextLocation,
              });
          });
          let le = n.window.document.startViewTransition(() => {
            Ur(() => o(j));
          });
          le.finished.finally(() => {
            Ur(() => {
              c(void 0), S(void 0), a(void 0), u({ isTransitioning: !1 });
            });
          }),
            Ur(() => S(le));
          return;
        }
        p
          ? (f && f.resolve(),
            p.skipTransition(),
            x({
              state: j,
              currentLocation: W.currentLocation,
              nextLocation: W.nextLocation,
            }))
          : (a(j),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: W.currentLocation,
              nextLocation: W.nextLocation,
            }));
      },
      [n.window, p, f, N, d]
    );
  _.useLayoutEffect(() => n.subscribe(v), [n, v]),
    _.useEffect(() => {
      s.isTransitioning && !s.flushSync && c(new Zg());
    }, [s]),
    _.useEffect(() => {
      if (f && i && n.window) {
        let j = i,
          T = f.promise,
          O = n.window.document.startViewTransition(async () => {
            d(() => o(j)), await T;
          });
        O.finished.finally(() => {
          c(void 0), S(void 0), a(void 0), u({ isTransitioning: !1 });
        }),
          S(O);
      }
    }, [d, i, f, n.window]),
    _.useEffect(() => {
      f && i && l.location.key === i.location.key && f.resolve();
    }, [f, p, l.location, i]),
    _.useEffect(() => {
      !s.isTransitioning &&
        k &&
        (a(k.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: k.currentLocation,
          nextLocation: k.nextLocation,
        }),
        x(void 0));
    }, [s.isTransitioning, k]),
    _.useEffect(() => {}, []);
  let C = _.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (j) => n.navigate(j),
        push: (j, T, O) =>
          n.navigate(j, {
            state: T,
            preventScrollReset: O == null ? void 0 : O.preventScrollReset,
          }),
        replace: (j, T, O) =>
          n.navigate(j, {
            replace: !0,
            state: T,
            preventScrollReset: O == null ? void 0 : O.preventScrollReset,
          }),
      }),
      [n]
    ),
    L = n.basename || "/",
    g = _.useMemo(
      () => ({ router: n, navigator: C, static: !1, basename: L }),
      [n, C, L]
    );
  return _.createElement(
    _.Fragment,
    null,
    _.createElement(
      Pl.Provider,
      { value: g },
      _.createElement(
        Bs.Provider,
        { value: l },
        _.createElement(
          Gg.Provider,
          { value: N.current },
          _.createElement(
            mp.Provider,
            { value: s },
            _.createElement(
              Ug,
              {
                basename: L,
                location: l.location,
                navigationType: l.historyAction,
                navigator: C,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              l.initialized || n.future.v7_partialHydration
                ? _.createElement(ey, {
                    routes: n.routes,
                    future: n.future,
                    state: l,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function ey(e) {
  let { routes: t, future: n, state: r } = e;
  return Pg(t, void 0, r, n);
}
const ty =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  ny = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ws = _.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: a,
        target: s,
        to: u,
        preventScrollReset: f,
        unstable_viewTransition: c,
      } = t,
      p = hp(t, Bg),
      { basename: S } = _.useContext(yn),
      k,
      x = !1;
    if (typeof u == "string" && ny.test(u) && ((k = u), ty))
      try {
        let v = new URL(window.location.href),
          C = u.startsWith("//") ? new URL(v.protocol + u) : new URL(u),
          L = Bt(C.pathname, S);
        C.origin === v.origin && L != null
          ? (u = L + C.search + C.hash)
          : (x = !0);
      } catch {}
    let N = Sg(u, { relative: l }),
      h = ly(u, {
        replace: i,
        state: a,
        target: s,
        preventScrollReset: f,
        relative: l,
        unstable_viewTransition: c,
      });
    function d(v) {
      r && r(v), v.defaultPrevented || h(v);
    }
    return _.createElement(
      "a",
      xr({}, p, { href: k || N, onClick: x || o ? r : d, ref: n, target: s })
    );
  }),
  Fa = _.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: l = !1,
        className: o = "",
        end: i = !1,
        style: a,
        to: s,
        unstable_viewTransition: u,
        children: f,
      } = t,
      c = hp(t, Vg),
      p = oi(s, { relative: c.relative }),
      S = xn(),
      k = _.useContext(Bs),
      { navigator: x, basename: N } = _.useContext(yn),
      h = k != null && oy(p) && u === !0,
      d = x.encodeLocation ? x.encodeLocation(p).pathname : p.pathname,
      v = S.pathname,
      C =
        k && k.navigation && k.navigation.location
          ? k.navigation.location.pathname
          : null;
    l ||
      ((v = v.toLowerCase()),
      (C = C ? C.toLowerCase() : null),
      (d = d.toLowerCase())),
      C && N && (C = Bt(C, N) || C);
    const L = d !== "/" && d.endsWith("/") ? d.length - 1 : d.length;
    let g = v === d || (!i && v.startsWith(d) && v.charAt(L) === "/"),
      j =
        C != null &&
        (C === d || (!i && C.startsWith(d) && C.charAt(d.length) === "/")),
      T = { isActive: g, isPending: j, isTransitioning: h },
      O = g ? r : void 0,
      F;
    typeof o == "function"
      ? (F = o(T))
      : (F = [
          o,
          g ? "active" : null,
          j ? "pending" : null,
          h ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let W = typeof a == "function" ? a(T) : a;
    return _.createElement(
      Ws,
      xr({}, c, {
        "aria-current": O,
        className: F,
        ref: n,
        style: W,
        to: s,
        unstable_viewTransition: u,
      }),
      typeof f == "function" ? f(T) : f
    );
  });
var Ua;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Ua || (Ua = {}));
var Tc;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Tc || (Tc = {}));
function ry(e) {
  let t = _.useContext(Pl);
  return t || G(!1), t;
}
function ly(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    s = kg(),
    u = xn(),
    f = oi(e, { relative: i });
  return _.useCallback(
    (c) => {
      if ($g(c, n)) {
        c.preventDefault();
        let p = r !== void 0 ? r : Un(u) === Un(f);
        s(e, {
          replace: p,
          state: l,
          preventScrollReset: o,
          relative: i,
          unstable_viewTransition: a,
        });
      }
    },
    [u, s, f, r, l, n, e, o, i, a]
  );
}
function oy(e, t) {
  t === void 0 && (t = {});
  let n = _.useContext(mp);
  n == null && G(!1);
  let { basename: r } = ry(Ua.useViewTransitionState),
    l = oi(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let o = Bt(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    i = Bt(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Fo(l.pathname, i) != null || Fo(l.pathname, o) != null;
}
const Mc = { "how-to": "How to" },
  iy = (e) =>
    e in Mc
      ? Mc[e]
      : e
          .split("-")
          .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
          .join(" ");
/**
 * @license lucide-react v0.404.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ay = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  vp = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.404.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var sy = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.404.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uy = _.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: l = "",
      children: o,
      iconNode: i,
      ...a
    },
    s
  ) =>
    _.createElement(
      "svg",
      {
        ref: s,
        ...sy,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: vp("lucide", l),
        ...a,
      },
      [
        ...i.map(([u, f]) => _.createElement(u, f)),
        ...(Array.isArray(o) ? o : [o]),
      ]
    )
);
/**
 * @license lucide-react v0.404.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cy = (e, t) => {
  const n = _.forwardRef(({ className: r, ...l }, o) =>
    _.createElement(uy, {
      ref: o,
      iconNode: t,
      className: vp(`lucide-${ay(e)}`, r),
      ...l,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.404.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dy = cy("ChevronRight", [
    ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
  ]),
  fy = () => {
    const t = xn()
      .pathname.split("/")
      .filter((n) => n);
    return w.jsx("div", {
      className: "py-2 w-full",
      children: w.jsx("nav", {
        children: w.jsxs("ul", {
          className: "flex ",
          children: [
            w.jsx("li", {
              className: "text-url underline font-bold ",
              children: w.jsx(Ws, {
                to: "/",
                className: "flex gap-1",
                children: w.jsx("span", { children: "Home" }),
              }),
            }),
            t.map((n, r) => {
              const l = r === t.length - 1,
                o = `/${t.slice(0, r + 1).join("/")}`,
                i = iy(n);
              return w.jsxs(
                "li",
                {
                  className: "flex",
                  children: [
                    w.jsx("span", {
                      className: "mx-2",
                      children: w.jsx(dy, {}),
                    }),
                    l
                      ? w.jsx("span", { children: i })
                      : w.jsx("span", { children: i }),
                  ],
                },
                o
              );
            }),
          ],
        }),
      }),
    });
  },
  py = [
    {
      id: 0,
      label: "Finance",
      icon: "https://procg-poc-nepo.netlify.app/Left_Nav_Icon/Finance.png",
      in_navs: [
        {
          id: 0,
          name: "Risk Management",
          icon: "https://procg-poc-nepo.netlify.app/Left_Nav_Icon/Risk%20Management.png",
          link: "/finance/risk-management",
        },
        {
          id: 1,
          name: "Control Management",
          icon: "https://procg-poc-nepo.netlify.app/Left_Nav_Icon/Control%20Management.png",
          link: "/finance/control-management",
        },
        {
          id: 2,
          name: "Issue Management",
          icon: "https://procg-poc-nepo.netlify.app/Left_Nav_Icon/Issue%20Management.png",
          link: "/finance/issue-management",
        },
      ],
    },
    {
      id: 1,
      label: "Continuous Monitoring",
      icon: "https://procg-poc-nepo.netlify.app/Left_Nav_Icon/Continuous%20Monitoring.png",
      in_navs: [
        {
          id: 0,
          name: "Continuous Control Management",
          icon: "https://procg-poc-nepo.netlify.app/Left_Nav_Icon/Continuous%20Control%20Management.png",
          link: "/continuous-monitoring/continuous-control-management",
        },
        {
          id: 1,
          name: "Result Management",
          icon: "https://procg-poc-nepo.netlify.app/Left_Nav_Icon/Result%20Management.png",
          link: "/continuous-monitoring/result-management",
        },
      ],
    },
    {
      id: 2,
      label: "Tools",
      icon: "https://procg-poc-nepo.netlify.app/Left_Nav_Icon/Tools.png",
      in_navs: [
        {
          id: 0,
          name: "Setup and Administration",
          icon: "https://procg-poc-nepo.netlify.app/Left_Nav_Icon/Setup%20and%20Administration.png",
          link: "/tools/setup-and-administration",
        },
      ],
    },
  ],
  gp = [
    {
      id: 0,
      name: "Home",
      icon: "https://procg-poc-nepo.netlify.app/Top_Nav_Icon/Home.svg",
      link: "/",
    },
    {
      id: 1,
      name: "Alerts",
      icon: "https://procg-poc-nepo.netlify.app/Top_Nav_Icon/Alerts.svg",
      link: "/alerts",
    },
    {
      id: 2,
      name: "Tasks",
      icon: "https://procg-poc-nepo.netlify.app/Top_Nav_Icon/Tasks.svg",
      link: "/tasks",
    },
    {
      id: 3,
      name: "Notifications",
      icon: "https://procg-poc-nepo.netlify.app/Top_Nav_Icon/Notification.svg",
      link: "/notifications",
    },
  ],
  yp = [
    { id: 0, name: "Profile", icon: "fa-user", link: "/profile" },
    { id: 1, name: "Security", icon: "fa-shield-halved", link: "/security" },
    { id: 2, name: "Settings", icon: "fa-gear", link: "/settings" },
    { id: 3, name: "Logout", icon: "fa-right-from-bracket", link: "#" },
  ],
  hy = { LeftNav: py, TopNav: gp, Profile: yp };
var wp = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  zc = Ot.createContext && Ot.createContext(wp),
  my = ["attr", "size", "title"];
function vy(e, t) {
  if (e == null) return {};
  var n = gy(e, t),
    r,
    l;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (l = 0; l < o.length; l++)
      (r = o[l]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function gy(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function bo() {
  return (
    (bo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    bo.apply(this, arguments)
  );
}
function Dc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function $o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Dc(Object(n), !0).forEach(function (r) {
          yy(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Dc(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function yy(e, t, n) {
  return (
    (t = wy(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function wy(e) {
  var t = xy(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function xy(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xp(e) {
  return (
    e &&
    e.map((t, n) =>
      Ot.createElement(t.tag, $o({ key: n }, t.attr), xp(t.child))
    )
  );
}
function ii(e) {
  return (t) =>
    Ot.createElement(Sy, bo({ attr: $o({}, e.attr) }, t), xp(e.child));
}
function Sy(e) {
  var t = (n) => {
    var { attr: r, size: l, title: o } = e,
      i = vy(e, my),
      a = l || n.size || "1em",
      s;
    return (
      n.className && (s = n.className),
      e.className && (s = (s ? s + " " : "") + e.className),
      Ot.createElement(
        "svg",
        bo(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          i,
          {
            className: s,
            style: $o($o({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        o && Ot.createElement("title", null, o),
        e.children
      )
    );
  };
  return zc !== void 0
    ? Ot.createElement(zc.Consumer, null, (n) => t(n))
    : t(wp);
}
function ky(e) {
  return ii({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z",
        },
        child: [],
      },
    ],
  })(e);
}
function Ey(e) {
  return ii({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z",
        },
        child: [],
      },
    ],
  })(e);
}
const Cy = ({ name: e, icon: t, link: n, collapsed: r, path: l }) => {
    const o = (i) => {
      r || i.stopPropagation();
    };
    return w.jsx("li", {
      onClick: o,
      className: `p-1 transition-all duration-300 border border-slate-50 rounded-xl  ${
        r
          ? "flex items-center w-[310px] hover:bg-slate-50 "
          : "pl-8 hover:bg-sky-50e "
      }
      ${l === n && "text-red-600"}`,
      children: w.jsxs(Fa, {
        to: n,
        className: "flex items-center p-2",
        children: [
          w.jsx("img", { src: t, alt: e, className: "w-4 h-4 mr-2" }),
          w.jsx("span", { children: e }),
        ],
      }),
    });
  },
  _y = ({
    id: e,
    label: t,
    icon: n,
    inNavs: r,
    isOpen: l,
    collapsed: o,
    toggleGroup: i,
    activeGroup: a,
    subMenuActiveValue: s,
    path: u,
  }) =>
    w.jsx(w.Fragment, {
      children: w.jsxs("div", {
        onClick: () => i(e),
        className: `border-b border-slate-400 border-dashed relative cursor-pointer duration-300 ${
          s === t && "bg-sky-200"
        }`,
        children: [
          w.jsx("span", {
            className: `h-[56px] w-1 left-0 top-0 absolute duration-500  ${
              s === t && "bg-red-600"
            }`,
          }),
          w.jsxs("div", {
            className: `flex gap-2 items-center justify-between p-4 ${
              l && "bg-slate-200"
            }`,
            children: [
              w.jsxs("div", {
                className: "flex justify-between gap-2 ",
                children: [
                  w.jsx("img", { src: n, alt: t, className: "w-6 h-6 " }),
                  o
                    ? s === t
                      ? w.jsx("span", {
                          className: "h-2 w-2 rounded-full bg-red-600",
                        })
                      : w.jsx("span", {
                          className: "h-2 w-2 rounded-full bg-slate-400",
                        })
                    : "",
                  !o && w.jsx("span", { children: t }),
                ],
              }),
              !o &&
                w.jsx("span", {
                  className: " ",
                  children: l ? w.jsx(Ey, {}) : w.jsx(ky, {}),
                }),
            ],
          }),
          (l || (o && a === e)) &&
            w.jsxs("div", {
              className: `${
                o
                  ? "absolute left-24 top-1 p-2 bg-sky-50e rounded shadow-2xl z-50"
                  : " bg-slate-50"
              }`,
              children: [
                w.jsx("div", {
                  className: "flex flex-col gap-2 p-1",
                  children: r.map((f) =>
                    w.jsx(Cy, { ...f, collapsed: o, path: u }, f.id)
                  ),
                }),
                w.jsx("div", {
                  className: `\r
              absolute -left-4 top-2\r
              border-t-[15px]\r
              border-t-transparent\r
              border-r-[16px]\r
              border-r-bg-sky-50e\r
              border-b-[15px]\r
              border-b-transparent\r
              duration-500 transition-transform`,
                }),
              ],
            }),
        ],
      }),
    }),
  Sp = _.createContext(null),
  kp = () => {
    const e = _.useContext(Sp);
    if (!e) throw new Error("Error inside .");
    return e;
  },
  Py = ({ children: e }) => {
    const [t, n] = _.useState(!1),
      [r, l] = _.useState(""),
      o = { collapsed: t, setCollapsed: n, active_url: r, setActive_url: l };
    return w.jsx(Sp.Provider, { value: o, children: e });
  },
  Ny = () => {
    const [e, t] = _.useState([]),
      [n, r] = _.useState(null),
      { collapsed: l } = kp(),
      i = xn().pathname,
      { LeftNav: a } = hy,
      s = (S) => {
        l
          ? r(n === S ? null : S)
          : e.includes(S)
          ? t(e.filter((k) => k !== S))
          : t([...e, S]);
      };
    _.useEffect(() => {
      (async () => {
        (await l) ? t([]) : (r(null), t([]));
      })();
    }, [l]);
    const [u, f] = _.useState("");
    _.useEffect(() => {
      f(
        i === "/finance/risk-management" ||
          i === "/finance/control-management" ||
          i === "/finance/issue-management"
          ? "Finance"
          : i === "/continuous-monitoring/continuous-control-management" ||
            i === "/continuous-monitoring/result-management"
          ? "Continuous Monitoring"
          : i === "/tools/setup-and-administration"
          ? "Tools"
          : "No SubMenu"
      );
    }, [i]);
    const c = _.useRef(null),
      p = (S) => {
        c.current && !c.current.contains(S.target) && r(null);
      };
    return (
      _.useEffect(
        () => (
          e
            ? document.addEventListener("mousedown", p)
            : document.removeEventListener("mousedown", p),
          () => {
            document.removeEventListener("mousedown", p);
          }
        ),
        [e]
      ),
      w.jsx("div", {
        ref: c,
        className: ` transition-all duration-500 bg-slate-50 h-[94vh] ${
          l ? "w-[73px] " : "w-72 overflow-auto"
        }`,
        children: w.jsx("ul", {
          className: " ",
          children: a.map((S) =>
            w.jsx(
              _y,
              {
                id: S.id,
                label: S.label,
                icon: S.icon,
                inNavs: S.in_navs,
                isOpen: e.includes(S.id),
                collapsed: l,
                toggleGroup: s,
                activeGroup: n,
                subMenuActiveValue: u,
                path: i,
              },
              S.id
            )
          ),
        }),
      })
    );
  },
  jy = () =>
    w.jsxs("div", {
      className: "flex gap-2 fixed w-full mt-[54px] ",
      children: [
        w.jsx("div", { children: w.jsx(Ny, {}) }),
        w.jsxs("div", {
          className: "w-full",
          children: [w.jsx(fy, {}), w.jsx(Fg, {})],
        }),
      ],
    }),
  Ep = "/Top_Nav_Icon/logo.png",
  Ry = "/Top_Nav_Icon/Profile.svg";
function Ly(e) {
  return ii({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "line",
        attr: { x1: "3", y1: "12", x2: "21", y2: "12" },
        child: [],
      },
      { tag: "line", attr: { x1: "3", y1: "6", x2: "21", y2: "6" }, child: [] },
      {
        tag: "line",
        attr: { x1: "3", y1: "18", x2: "21", y2: "18" },
        child: [],
      },
    ],
  })(e);
}
function Ty(e) {
  return ii({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "line",
        attr: { x1: "18", y1: "6", x2: "6", y2: "18" },
        child: [],
      },
      {
        tag: "line",
        attr: { x1: "6", y1: "6", x2: "18", y2: "18" },
        child: [],
      },
    ],
  })(e);
}
const Cp = _.createContext(null),
  ai = () => {
    const e = _.useContext(Cp);
    if (!e) throw new Error("Error inside database");
    return e;
  },
  My = ({ children: e }) => {
    const [t, n] = _.useState(""),
      [r, l] = _.useState(!1),
      o = async (a, s) => {
        l(!0);
        try {
          const u = await fetch("http://localhost:2333/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: a, password: s }),
          });
          if (u.ok) {
            const f = await u.json();
            n(f.access_token),
              localStorage.setItem(
                "access_token",
                JSON.stringify(f.access_token)
              ),
              l(!1);
          } else u.status === 408 && console.log("Invalid Credential.");
        } catch (u) {
          console.log(u);
        }
      };
    console.log(t, "access_token");
    const i = { login: o, access_token: t, setAccess_token: n, isLoading: r };
    return w.jsx(Cp.Provider, { value: i, children: e });
  },
  zy = () => {
    const { collapsed: e, setCollapsed: t } = kp(),
      { setAccess_token: n } = ai(),
      [r, l] = _.useState(!1),
      o = gp,
      i = yp,
      s = xn().pathname;
    _.useEffect(() => {
      function p(x) {
        return x === "true";
      }
      const S = localStorage.getItem("isCollapsed"),
        k = S !== null ? p(S) : !1;
      t(k);
    }, [t]);
    const u = () => {
        t(!e), localStorage.setItem("isCollapsed", JSON.stringify(!e));
      },
      f = () => {
        l(!r);
      },
      c = () => {
        localStorage.removeItem("access_token"), n("");
      };
    return w.jsxs("div", {
      className:
        "flex justify-between px-5 py-2 border shadow-lg bg-slate-50 sticky top-0 z-50",
      children: [
        w.jsxs("div", {
          className: "flex gap-4 items-center justify-center",
          children: [
            w.jsx("div", {
              onClick: u,
              className:
                " bg-sky-50e hover:bg-sky-200 cursor-pointer p-1 rounded-full h-9 w-9 flex items-center justify-center",
              children: w.jsx("div", {
                children: e ? w.jsx(Ly, {}) : w.jsx(Ty, {}),
              }),
            }),
            w.jsxs("div", {
              className: "flex",
              children: [
                w.jsx(Ws, {
                  to: "/",
                  children: w.jsx("img", {
                    src: Ep,
                    alt: "Logo",
                    className: "w-28",
                  }),
                }),
                w.jsx("span", {
                  className: "text-url inline-block mt-3 tracking-tighter",
                  children: "Advanced Controls",
                }),
              ],
            }),
          ],
        }),
        w.jsxs("div", {
          className: "flex gap-7 items-center relative",
          children: [
            o.map((p) =>
              w.jsx(
                "div",
                {
                  className: "flex items-center justify-center",
                  children: w.jsx(Fa, {
                    to: p.link,
                    children: ({ isActive: S, isPending: k }) =>
                      w.jsxs("div", {
                        className: `flex items-center justify-center gap-3 px-5 py-[5px] rounded-md duration-300 ${
                          S ? "bg-sky-200" : ""
                        } ${k ? "slide" : ""}`,
                        children: [
                          w.jsx("img", {
                            className: "h-5 w-5",
                            src: p.icon,
                            alt: "",
                          }),
                          w.jsx("span", {
                            children: p.name === "Profile" ? "" : p.name,
                          }),
                        ],
                      }),
                  }),
                },
                p.id
              )
            ),
            w.jsx("div", {
              className: "relative",
              children: w.jsx("img", {
                className: "cursor-pointer",
                src: Ry,
                alt: "profile",
                onClick: f,
              }),
            }),
            r &&
              w.jsxs("div", {
                className:
                  "w-48 bg-sky-200 absolute right-2 top-14 rounded flex flex-col pb-4 duration-500 p-4 gap-2 z-50",
                children: [
                  w.jsx("div", {
                    className: "flex justify-end px-2",
                    children: w.jsx("i", {
                      onClick: () => l(!1),
                      className:
                        "fa-solid fa-xmark cursor-pointer rounded-full my-2",
                    }),
                  }),
                  w.jsx("div", {
                    className:
                      "border-l-[15px] border-l-transparent border-b-[25px] border-b-sky-200 border-r-[15px] border-r-transparent absolute right-3 -top-4 duration-500 transition-transform",
                  }),
                  i.map((p) =>
                    w.jsxs(
                      Fa,
                      {
                        to: p.link,
                        onClick: p.name === "Logout" ? c : void 0,
                        className: `${
                          s === p.link && "text-red-500"
                        } flex gap-3 p-3 hover:bg-sky-50e border cursor-pointer rounded-xl`,
                        children: [
                          w.jsx("div", {
                            children: w.jsx("i", {
                              className: `fa-solid ${p.icon}`,
                            }),
                          }),
                          w.jsx("span", { children: p.name }),
                        ],
                      },
                      p.id
                    )
                  ),
                ],
              }),
          ],
        }),
      ],
    });
  },
  Dy = () =>
    w.jsx("div", { className: "fixed w-full z-10", children: w.jsx(zy, {}) }),
  Oy = "/LogIn/LogInLeft.svg",
  Iy = () =>
    w.jsx("div", {
      children: w.jsx("img", {
        className: "w-[300px]",
        src: Oy,
        alt: "Log In Left Image",
      }),
    });
function Fy(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Uy(...e) {
  return (t) => e.forEach((n) => Fy(n, t));
}
var _p = _.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    l = _.Children.toArray(n),
    o = l.find(by);
  if (o) {
    const i = o.props.children,
      a = l.map((s) =>
        s === o
          ? _.Children.count(i) > 1
            ? _.Children.only(null)
            : _.isValidElement(i)
            ? i.props.children
            : null
          : s
      );
    return w.jsx(Aa, {
      ...r,
      ref: t,
      children: _.isValidElement(i) ? _.cloneElement(i, void 0, a) : null,
    });
  }
  return w.jsx(Aa, { ...r, ref: t, children: n });
});
_p.displayName = "Slot";
var Aa = _.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (_.isValidElement(n)) {
    const l = By(n);
    return _.cloneElement(n, { ...$y(r, n.props), ref: t ? Uy(t, l) : l });
  }
  return _.Children.count(n) > 1 ? _.Children.only(null) : null;
});
Aa.displayName = "SlotClone";
var Ay = ({ children: e }) => w.jsx(w.Fragment, { children: e });
function by(e) {
  return _.isValidElement(e) && e.type === Ay;
}
function $y(e, t) {
  const n = { ...t };
  for (const r in t) {
    const l = e[r],
      o = t[r];
    /^on[A-Z]/.test(r)
      ? l && o
        ? (n[r] = (...a) => {
            o(...a), l(...a);
          })
        : l && (n[r] = l)
      : r === "style"
      ? (n[r] = { ...l, ...o })
      : r === "className" && (n[r] = [l, o].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function By(e) {
  var r, l;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (l = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : l.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function Pp(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Pp(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function Vy() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Pp(e)) && (r && (r += " "), (r += t));
  return r;
}
const Oc = (e) => (typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e),
  Ic = Vy,
  Wy = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Ic(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: l, defaultVariants: o } = t,
      i = Object.keys(l).map((u) => {
        const f = n == null ? void 0 : n[u],
          c = o == null ? void 0 : o[u];
        if (f === null) return null;
        const p = Oc(f) || Oc(c);
        return l[u][p];
      }),
      a =
        n &&
        Object.entries(n).reduce((u, f) => {
          let [c, p] = f;
          return p === void 0 || (u[c] = p), u;
        }, {}),
      s =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, f) => {
              let { class: c, className: p, ...S } = f;
              return Object.entries(S).every((k) => {
                let [x, N] = k;
                return Array.isArray(N)
                  ? N.includes({ ...o, ...a }[x])
                  : { ...o, ...a }[x] === N;
              })
                ? [...u, c, p]
                : u;
            }, []);
    return Ic(
      e,
      i,
      s,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  };
function Np(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var l = e.length;
      for (t = 0; t < l; t++)
        e[t] && (n = Np(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function Hy() {
  for (var e, t, n = 0, r = "", l = arguments.length; n < l; n++)
    (e = arguments[n]) && (t = Np(e)) && (r && (r += " "), (r += t));
  return r;
}
const Hs = "-";
function Qy(e) {
  const t = Gy(e),
    { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
  function l(i) {
    const a = i.split(Hs);
    return a[0] === "" && a.length !== 1 && a.shift(), jp(a, t) || Ky(i);
  }
  function o(i, a) {
    const s = n[i] || [];
    return a && r[i] ? [...s, ...r[i]] : s;
  }
  return { getClassGroupId: l, getConflictingClassGroupIds: o };
}
function jp(e, t) {
  var i;
  if (e.length === 0) return t.classGroupId;
  const n = e[0],
    r = t.nextPart.get(n),
    l = r ? jp(e.slice(1), r) : void 0;
  if (l) return l;
  if (t.validators.length === 0) return;
  const o = e.join(Hs);
  return (i = t.validators.find(({ validator: a }) => a(o))) == null
    ? void 0
    : i.classGroupId;
}
const Fc = /^\[(.+)\]$/;
function Ky(e) {
  if (Fc.test(e)) {
    const t = Fc.exec(e)[1],
      n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}
function Gy(e) {
  const { theme: t, prefix: n } = e,
    r = { nextPart: new Map(), validators: [] };
  return (
    Xy(Object.entries(e.classGroups), n).forEach(([o, i]) => {
      ba(i, r, o, t);
    }),
    r
  );
}
function ba(e, t, n, r) {
  e.forEach((l) => {
    if (typeof l == "string") {
      const o = l === "" ? t : Uc(t, l);
      o.classGroupId = n;
      return;
    }
    if (typeof l == "function") {
      if (Yy(l)) {
        ba(l(r), t, n, r);
        return;
      }
      t.validators.push({ validator: l, classGroupId: n });
      return;
    }
    Object.entries(l).forEach(([o, i]) => {
      ba(i, Uc(t, o), n, r);
    });
  });
}
function Uc(e, t) {
  let n = e;
  return (
    t.split(Hs).forEach((r) => {
      n.nextPart.has(r) ||
        n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
        (n = n.nextPart.get(r));
    }),
    n
  );
}
function Yy(e) {
  return e.isThemeGetter;
}
function Xy(e, t) {
  return t
    ? e.map(([n, r]) => {
        const l = r.map((o) =>
          typeof o == "string"
            ? t + o
            : typeof o == "object"
            ? Object.fromEntries(Object.entries(o).map(([i, a]) => [t + i, a]))
            : o
        );
        return [n, l];
      })
    : e;
}
function Jy(e) {
  if (e < 1) return { get: () => {}, set: () => {} };
  let t = 0,
    n = new Map(),
    r = new Map();
  function l(o, i) {
    n.set(o, i), t++, t > e && ((t = 0), (r = n), (n = new Map()));
  }
  return {
    get(o) {
      let i = n.get(o);
      if (i !== void 0) return i;
      if ((i = r.get(o)) !== void 0) return l(o, i), i;
    },
    set(o, i) {
      n.has(o) ? n.set(o, i) : l(o, i);
    },
  };
}
const Rp = "!";
function Zy(e) {
  const { separator: t, experimentalParseClassName: n } = e,
    r = t.length === 1,
    l = t[0],
    o = t.length;
  function i(a) {
    const s = [];
    let u = 0,
      f = 0,
      c;
    for (let N = 0; N < a.length; N++) {
      let h = a[N];
      if (u === 0) {
        if (h === l && (r || a.slice(N, N + o) === t)) {
          s.push(a.slice(f, N)), (f = N + o);
          continue;
        }
        if (h === "/") {
          c = N;
          continue;
        }
      }
      h === "[" ? u++ : h === "]" && u--;
    }
    const p = s.length === 0 ? a : a.substring(f),
      S = p.startsWith(Rp),
      k = S ? p.substring(1) : p,
      x = c && c > f ? c - f : void 0;
    return {
      modifiers: s,
      hasImportantModifier: S,
      baseClassName: k,
      maybePostfixModifierPosition: x,
    };
  }
  return n
    ? function (s) {
        return n({ className: s, parseClassName: i });
      }
    : i;
}
function qy(e) {
  if (e.length <= 1) return e;
  const t = [];
  let n = [];
  return (
    e.forEach((r) => {
      r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
    }),
    t.push(...n.sort()),
    t
  );
}
function e0(e) {
  return { cache: Jy(e.cacheSize), parseClassName: Zy(e), ...Qy(e) };
}
const t0 = /\s+/;
function n0(e, t) {
  const {
      parseClassName: n,
      getClassGroupId: r,
      getConflictingClassGroupIds: l,
    } = t,
    o = new Set();
  return e
    .trim()
    .split(t0)
    .map((i) => {
      const {
        modifiers: a,
        hasImportantModifier: s,
        baseClassName: u,
        maybePostfixModifierPosition: f,
      } = n(i);
      let c = !!f,
        p = r(c ? u.substring(0, f) : u);
      if (!p) {
        if (!c) return { isTailwindClass: !1, originalClassName: i };
        if (((p = r(u)), !p))
          return { isTailwindClass: !1, originalClassName: i };
        c = !1;
      }
      const S = qy(a).join(":");
      return {
        isTailwindClass: !0,
        modifierId: s ? S + Rp : S,
        classGroupId: p,
        originalClassName: i,
        hasPostfixModifier: c,
      };
    })
    .reverse()
    .filter((i) => {
      if (!i.isTailwindClass) return !0;
      const { modifierId: a, classGroupId: s, hasPostfixModifier: u } = i,
        f = a + s;
      return o.has(f)
        ? !1
        : (o.add(f), l(s, u).forEach((c) => o.add(a + c)), !0);
    })
    .reverse()
    .map((i) => i.originalClassName)
    .join(" ");
}
function r0() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Lp(t)) && (r && (r += " "), (r += n));
  return r;
}
function Lp(e) {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Lp(e[r])) && (n && (n += " "), (n += t));
  return n;
}
function l0(e, ...t) {
  let n,
    r,
    l,
    o = i;
  function i(s) {
    const u = t.reduce((f, c) => c(f), e());
    return (n = e0(u)), (r = n.cache.get), (l = n.cache.set), (o = a), a(s);
  }
  function a(s) {
    const u = r(s);
    if (u) return u;
    const f = n0(s, n);
    return l(s, f), f;
  }
  return function () {
    return o(r0.apply(null, arguments));
  };
}
function de(e) {
  const t = (n) => n[e] || [];
  return (t.isThemeGetter = !0), t;
}
const Tp = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  o0 = /^\d+\/\d+$/,
  i0 = new Set(["px", "full", "screen"]),
  a0 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  s0 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  u0 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  c0 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  d0 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Lt(e) {
  return Ln(e) || i0.has(e) || o0.test(e);
}
function Gt(e) {
  return Cr(e, "length", w0);
}
function Ln(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Zl(e) {
  return Cr(e, "number", Ln);
}
function Ar(e) {
  return !!e && Number.isInteger(Number(e));
}
function f0(e) {
  return e.endsWith("%") && Ln(e.slice(0, -1));
}
function K(e) {
  return Tp.test(e);
}
function Yt(e) {
  return a0.test(e);
}
const p0 = new Set(["length", "size", "percentage"]);
function h0(e) {
  return Cr(e, p0, Mp);
}
function m0(e) {
  return Cr(e, "position", Mp);
}
const v0 = new Set(["image", "url"]);
function g0(e) {
  return Cr(e, v0, S0);
}
function y0(e) {
  return Cr(e, "", x0);
}
function br() {
  return !0;
}
function Cr(e, t, n) {
  const r = Tp.exec(e);
  return r
    ? r[1]
      ? typeof t == "string"
        ? r[1] === t
        : t.has(r[1])
      : n(r[2])
    : !1;
}
function w0(e) {
  return s0.test(e) && !u0.test(e);
}
function Mp() {
  return !1;
}
function x0(e) {
  return c0.test(e);
}
function S0(e) {
  return d0.test(e);
}
function k0() {
  const e = de("colors"),
    t = de("spacing"),
    n = de("blur"),
    r = de("brightness"),
    l = de("borderColor"),
    o = de("borderRadius"),
    i = de("borderSpacing"),
    a = de("borderWidth"),
    s = de("contrast"),
    u = de("grayscale"),
    f = de("hueRotate"),
    c = de("invert"),
    p = de("gap"),
    S = de("gradientColorStops"),
    k = de("gradientColorStopPositions"),
    x = de("inset"),
    N = de("margin"),
    h = de("opacity"),
    d = de("padding"),
    v = de("saturate"),
    C = de("scale"),
    L = de("sepia"),
    g = de("skew"),
    j = de("space"),
    T = de("translate"),
    O = () => ["auto", "contain", "none"],
    F = () => ["auto", "hidden", "clip", "visible", "scroll"],
    W = () => ["auto", K, t],
    H = () => [K, t],
    le = () => ["", Lt, Gt],
    ce = () => ["auto", Ln, K],
    dt = () => [
      "bottom",
      "center",
      "left",
      "left-bottom",
      "left-top",
      "right",
      "right-bottom",
      "right-top",
      "top",
    ],
    Xe = () => ["solid", "dashed", "dotted", "double", "none"],
    oe = () => [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity",
    ],
    z = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch",
    ],
    A = () => ["", "0", K],
    B = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column",
    ],
    X = () => [Ln, Zl],
    ee = () => [Ln, K];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [br],
      spacing: [Lt, Gt],
      blur: ["none", "", Yt, K],
      brightness: X(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Yt, K],
      borderSpacing: H(),
      borderWidth: le(),
      contrast: X(),
      grayscale: A(),
      hueRotate: ee(),
      invert: A(),
      gap: H(),
      gradientColorStops: [e],
      gradientColorStopPositions: [f0, Gt],
      inset: W(),
      margin: W(),
      opacity: X(),
      padding: H(),
      saturate: X(),
      scale: X(),
      sepia: A(),
      skew: ee(),
      space: H(),
      translate: H(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", K] }],
      container: ["container"],
      columns: [{ columns: [Yt] }],
      "break-after": [{ "break-after": B() }],
      "break-before": [{ "break-before": B() }],
      "break-inside": [
        { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
      ],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none", "start", "end"] }],
      clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [
        { object: ["contain", "cover", "fill", "none", "scale-down"] },
      ],
      "object-position": [{ object: [...dt(), K] }],
      overflow: [{ overflow: F() }],
      "overflow-x": [{ "overflow-x": F() }],
      "overflow-y": [{ "overflow-y": F() }],
      overscroll: [{ overscroll: O() }],
      "overscroll-x": [{ "overscroll-x": O() }],
      "overscroll-y": [{ "overscroll-y": O() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [x] }],
      "inset-x": [{ "inset-x": [x] }],
      "inset-y": [{ "inset-y": [x] }],
      start: [{ start: [x] }],
      end: [{ end: [x] }],
      top: [{ top: [x] }],
      right: [{ right: [x] }],
      bottom: [{ bottom: [x] }],
      left: [{ left: [x] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", Ar, K] }],
      basis: [{ basis: W() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", K] }],
      grow: [{ grow: A() }],
      shrink: [{ shrink: A() }],
      order: [{ order: ["first", "last", "none", Ar, K] }],
      "grid-cols": [{ "grid-cols": [br] }],
      "col-start-end": [{ col: ["auto", { span: ["full", Ar, K] }, K] }],
      "col-start": [{ "col-start": ce() }],
      "col-end": [{ "col-end": ce() }],
      "grid-rows": [{ "grid-rows": [br] }],
      "row-start-end": [{ row: ["auto", { span: [Ar, K] }, K] }],
      "row-start": [{ "row-start": ce() }],
      "row-end": [{ "row-end": ce() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", K] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", K] }],
      gap: [{ gap: [p] }],
      "gap-x": [{ "gap-x": [p] }],
      "gap-y": [{ "gap-y": [p] }],
      "justify-content": [{ justify: ["normal", ...z()] }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal", ...z(), "baseline"] }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [...z(), "baseline"] }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [d] }],
      px: [{ px: [d] }],
      py: [{ py: [d] }],
      ps: [{ ps: [d] }],
      pe: [{ pe: [d] }],
      pt: [{ pt: [d] }],
      pr: [{ pr: [d] }],
      pb: [{ pb: [d] }],
      pl: [{ pl: [d] }],
      m: [{ m: [N] }],
      mx: [{ mx: [N] }],
      my: [{ my: [N] }],
      ms: [{ ms: [N] }],
      me: [{ me: [N] }],
      mt: [{ mt: [N] }],
      mr: [{ mr: [N] }],
      mb: [{ mb: [N] }],
      ml: [{ ml: [N] }],
      "space-x": [{ "space-x": [j] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [j] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", K, t] }],
      "min-w": [{ "min-w": [K, t, "min", "max", "fit"] }],
      "max-w": [
        {
          "max-w": [
            K,
            t,
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [Yt] },
            Yt,
          ],
        },
      ],
      h: [{ h: [K, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "min-h": [{ "min-h": [K, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "max-h": [{ "max-h": [K, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      size: [{ size: [K, t, "auto", "min", "max", "fit"] }],
      "font-size": [{ text: ["base", Yt, Gt] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            Zl,
          ],
        },
      ],
      "font-family": [{ font: [br] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            K,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", Ln, Zl] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            Lt,
            K,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", K] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", K] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [h] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [h] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [...Xe(), "wavy"] }],
      "text-decoration-thickness": [
        { decoration: ["auto", "from-font", Lt, Gt] },
      ],
      "underline-offset": [{ "underline-offset": ["auto", Lt, K] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
      indent: [{ indent: H() }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            K,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", K] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [h] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [...dt(), m0] }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", h0] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            g0,
          ],
        },
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [k] }],
      "gradient-via-pos": [{ via: [k] }],
      "gradient-to-pos": [{ to: [k] }],
      "gradient-from": [{ from: [S] }],
      "gradient-via": [{ via: [S] }],
      "gradient-to": [{ to: [S] }],
      rounded: [{ rounded: [o] }],
      "rounded-s": [{ "rounded-s": [o] }],
      "rounded-e": [{ "rounded-e": [o] }],
      "rounded-t": [{ "rounded-t": [o] }],
      "rounded-r": [{ "rounded-r": [o] }],
      "rounded-b": [{ "rounded-b": [o] }],
      "rounded-l": [{ "rounded-l": [o] }],
      "rounded-ss": [{ "rounded-ss": [o] }],
      "rounded-se": [{ "rounded-se": [o] }],
      "rounded-ee": [{ "rounded-ee": [o] }],
      "rounded-es": [{ "rounded-es": [o] }],
      "rounded-tl": [{ "rounded-tl": [o] }],
      "rounded-tr": [{ "rounded-tr": [o] }],
      "rounded-br": [{ "rounded-br": [o] }],
      "rounded-bl": [{ "rounded-bl": [o] }],
      "border-w": [{ border: [a] }],
      "border-w-x": [{ "border-x": [a] }],
      "border-w-y": [{ "border-y": [a] }],
      "border-w-s": [{ "border-s": [a] }],
      "border-w-e": [{ "border-e": [a] }],
      "border-w-t": [{ "border-t": [a] }],
      "border-w-r": [{ "border-r": [a] }],
      "border-w-b": [{ "border-b": [a] }],
      "border-w-l": [{ "border-l": [a] }],
      "border-opacity": [{ "border-opacity": [h] }],
      "border-style": [{ border: [...Xe(), "hidden"] }],
      "divide-x": [{ "divide-x": [a] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [a] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [h] }],
      "divide-style": [{ divide: Xe() }],
      "border-color": [{ border: [l] }],
      "border-color-x": [{ "border-x": [l] }],
      "border-color-y": [{ "border-y": [l] }],
      "border-color-t": [{ "border-t": [l] }],
      "border-color-r": [{ "border-r": [l] }],
      "border-color-b": [{ "border-b": [l] }],
      "border-color-l": [{ "border-l": [l] }],
      "divide-color": [{ divide: [l] }],
      "outline-style": [{ outline: ["", ...Xe()] }],
      "outline-offset": [{ "outline-offset": [Lt, K] }],
      "outline-w": [{ outline: [Lt, Gt] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: le() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [h] }],
      "ring-offset-w": [{ "ring-offset": [Lt, Gt] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", Yt, y0] }],
      "shadow-color": [{ shadow: [br] }],
      opacity: [{ opacity: [h] }],
      "mix-blend": [{ "mix-blend": [...oe(), "plus-lighter", "plus-darker"] }],
      "bg-blend": [{ "bg-blend": oe() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [n] }],
      brightness: [{ brightness: [r] }],
      contrast: [{ contrast: [s] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", Yt, K] }],
      grayscale: [{ grayscale: [u] }],
      "hue-rotate": [{ "hue-rotate": [f] }],
      invert: [{ invert: [c] }],
      saturate: [{ saturate: [v] }],
      sepia: [{ sepia: [L] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [n] }],
      "backdrop-brightness": [{ "backdrop-brightness": [r] }],
      "backdrop-contrast": [{ "backdrop-contrast": [s] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [f] }],
      "backdrop-invert": [{ "backdrop-invert": [c] }],
      "backdrop-opacity": [{ "backdrop-opacity": [h] }],
      "backdrop-saturate": [{ "backdrop-saturate": [v] }],
      "backdrop-sepia": [{ "backdrop-sepia": [L] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [i] }],
      "border-spacing-x": [{ "border-spacing-x": [i] }],
      "border-spacing-y": [{ "border-spacing-y": [i] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            K,
          ],
        },
      ],
      duration: [{ duration: ee() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", K] }],
      delay: [{ delay: ee() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", K] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [C] }],
      "scale-x": [{ "scale-x": [C] }],
      "scale-y": [{ "scale-y": [C] }],
      rotate: [{ rotate: [Ar, K] }],
      "translate-x": [{ "translate-x": [T] }],
      "translate-y": [{ "translate-y": [T] }],
      "skew-x": [{ "skew-x": [g] }],
      "skew-y": [{ "skew-y": [g] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            K,
          ],
        },
      ],
      accent: [{ accent: ["auto", e] }],
      appearance: [{ appearance: ["none", "auto"] }],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            K,
          ],
        },
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": H() }],
      "scroll-mx": [{ "scroll-mx": H() }],
      "scroll-my": [{ "scroll-my": H() }],
      "scroll-ms": [{ "scroll-ms": H() }],
      "scroll-me": [{ "scroll-me": H() }],
      "scroll-mt": [{ "scroll-mt": H() }],
      "scroll-mr": [{ "scroll-mr": H() }],
      "scroll-mb": [{ "scroll-mb": H() }],
      "scroll-ml": [{ "scroll-ml": H() }],
      "scroll-p": [{ "scroll-p": H() }],
      "scroll-px": [{ "scroll-px": H() }],
      "scroll-py": [{ "scroll-py": H() }],
      "scroll-ps": [{ "scroll-ps": H() }],
      "scroll-pe": [{ "scroll-pe": H() }],
      "scroll-pt": [{ "scroll-pt": H() }],
      "scroll-pr": [{ "scroll-pr": H() }],
      "scroll-pb": [{ "scroll-pb": H() }],
      "scroll-pl": [{ "scroll-pl": H() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [{ touch: ["auto", "none", "manipulation"] }],
      "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
      "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [
        { "will-change": ["auto", "scroll", "contents", "transform", K] },
      ],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [Lt, Gt, Zl] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
      "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
const E0 = l0(k0);
function C0(...e) {
  return E0(Hy(e));
}
const _0 = Wy(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  $a = _.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...l }, o) => {
      const i = r ? _p : "button";
      return w.jsx(i, {
        className: C0(_0({ variant: t, size: n, className: e })),
        ref: o,
        ...l,
      });
    }
  );
$a.displayName = "Button";
const P0 = "/LogIn/language.svg",
  N0 = "/LogIn/down_arrow.svg",
  j0 = () => {
    const [e, t] = _.useState(""),
      [n, r] = _.useState(""),
      { login: l } = ai(),
      o = async (i) => {
        i.preventDefault();
        try {
          await l(e, n);
        } catch (a) {
          console.error("login error", a.message);
        }
      };
    return w.jsx("div", {
      children: w.jsxs("div", {
        className: "p-4 flex flex-col gap-3 w-[448px] border",
        children: [
          w.jsxs("div", {
            className: "flex flex-col gap-3 ",
            children: [
              w.jsx("img", { className: "w-[120px]", src: Ep, alt: "Logo" }),
              w.jsxs("div", {
                className: "flex flex-col gap-1",
                children: [
                  w.jsx("h3", {
                    className: "text-2xl",
                    children: "Welcome to PROCG-POC Project",
                  }),
                  w.jsx("span", {
                    className: "text-slate-500  text-sm",
                    children:
                      "Please enter your credentials to access your account.",
                  }),
                ],
              }),
            ],
          }),
          w.jsx("div", {
            className: " ",
            children: w.jsxs("form", {
              onSubmit: o,
              className: "flex flex-col gap-3",
              children: [
                w.jsxs("div", {
                  className: "flex flex-col gap-1",
                  children: [
                    w.jsx("label", {
                      className: "text-slate-500 text-sm",
                      htmlFor: "email",
                      children: "Email address",
                    }),
                    w.jsx("input", {
                      autoFocus: !0,
                      type: "email",
                      name: "email",
                      id: "email",
                      onChange: (i) => t(i.target.value),
                      placeholder: "Enter mail address",
                      className: "py-2 px-4 rounded-md text-sm border",
                    }),
                  ],
                }),
                w.jsxs("div", {
                  className: "flex flex-col gap-1",
                  children: [
                    w.jsx("label", {
                      className: "text-slate-500 text-sm",
                      htmlFor: "password",
                      children: "Password",
                    }),
                    w.jsx("input", {
                      type: "password",
                      name: "password",
                      id: "password",
                      onChange: (i) => r(i.target.value),
                      placeholder: "Enter password",
                      className: "py-2 px-4 rounded-md text-sm border",
                    }),
                    w.jsx("label", {
                      className: "flex flex-row-reverse text-url text-sm",
                      htmlFor: "",
                      children: "Forget password?",
                    }),
                  ],
                }),
                w.jsxs("div", {
                  className: "flex gap-4 text-sm",
                  children: [
                    w.jsx("input", {
                      type: "checkbox",
                      name: "remember",
                      id: "remember",
                    }),
                    w.jsx("label", {
                      htmlFor: "remember",
                      children: "Remember me",
                    }),
                  ],
                }),
                w.jsxs("div", {
                  children: [
                    w.jsx($a, {
                      type: "submit",
                      className: "w-full bg-login",
                      children: "Login",
                    }),
                    w.jsxs("div", {
                      className: "flex items-center my-2",
                      children: [
                        w.jsx("div", {
                          className: "flex-grow border-t border-gray-300",
                        }),
                        w.jsx("span", {
                          className: "mx-4 text-gray-500 text-sm",
                          children: "OR",
                        }),
                        w.jsx("div", {
                          className: "flex-grow border-t border-gray-300",
                        }),
                      ],
                    }),
                    w.jsx($a, {
                      className: "w-full bg-button_sso",
                      children: "Continue with SSO",
                    }),
                  ],
                }),
                w.jsx("div", {
                  className: "p-4 rounded-md bg-slate-200 text-sm",
                  children: w.jsx("span", {
                    children:
                      "By clicking Continue, you agree to our Terms of Service and Privacy Policy.",
                  }),
                }),
                w.jsxs("div", {
                  className: "flex gap-2 items-center justify-center text-sm",
                  children: [
                    w.jsx("img", { src: P0, alt: "language img" }),
                    w.jsx("label", { children: "English" }),
                    w.jsx("img", { src: N0, alt: "down_arrow img" }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  zp = () => {
    const { isLoading: e } = ai();
    return w.jsx("div", {
      className: "w-[1200px] h-screen flex justify-center mx-auto",
      children: e
        ? w.jsx("div", {
            className: "flex items-center justify-center h-screen w-screen",
            children: w.jsxs("div", {
              className: "loader flex justify-between w-80",
              children: [
                w.jsx("div", {
                  className:
                    "w-8 h-8 bg-red-500 rounded-full repeat-infinite duration-900 animate-ping",
                }),
                w.jsx("div", {
                  className:
                    "w-8 h-8 bg-red-500 rounded-full repeat-infinite duration-900 animate-ping",
                }),
                w.jsx("div", {
                  className:
                    "w-8 h-8 bg-red-500 rounded-full repeat-infinite duration-900 animate-ping",
                }),
                w.jsx("div", {
                  className:
                    "w-8 h-8 bg-red-500 rounded-full repeat-infinite duration-900 animate-ping",
                }),
              ],
            }),
          })
        : w.jsxs("div", {
            className: "w-[1200px] h-screen flex justify-center mx-auto",
            children: [
              w.jsx("div", {
                className: "flex items-center justify-center px-[174px]",
                children: w.jsx(Iy, {}),
              }),
              w.jsx("div", {
                className: "w-[590px] flex items-center justify-center ",
                children: w.jsx(j0, {}),
              }),
            ],
          }),
    });
  },
  R0 = () => {
    const { access_token: e, setAccess_token: t, isLoading: n } = ai();
    return (
      _.useEffect(() => {
        const r = localStorage.getItem("access_token");
        t(r);
      }, []),
      e
        ? w.jsx("main", {
            children: w.jsxs("div", {
              className: "flex flex-col",
              children: [w.jsx(Dy, {}), w.jsx(jy, {})],
            }),
          })
        : w.jsx(zp, {})
    );
  },
  L0 = () =>
    w.jsx("div", {
      className: "w-full h-full flex items-center justify-center ",
      children: "Alerts",
    }),
  T0 = () =>
    w.jsx("div", {
      className: "w-full h-full flex items-center justify-center ",
      children: "Tasks",
    }),
  M0 = () =>
    w.jsx("div", {
      className: "w-full h-full flex items-center justify-center ",
      children: "Notifications",
    }),
  z0 = () =>
    w.jsx("div", {
      className: "w-full h-full flex items-center justify-center ",
      children: "Home",
    }),
  D0 = () =>
    w.jsx("div", {
      className: "w-full h-full flex items-center justify-center ",
      children: "Risk_Management",
    }),
  O0 = () =>
    w.jsx("div", {
      className: "w-full h-full flex items-center justify-center ",
      children: "Control_Management",
    }),
  I0 = () =>
    w.jsx("div", {
      className: "w-full h-full flex items-center justify-center ",
      children: "Issue_Management",
    }),
  F0 = () =>
    w.jsx("div", {
      className: "w-full h-full flex items-center justify-center ",
      children: "Setup_and_Administration",
    }),
  U0 = () =>
    w.jsx("div", {
      className: "w-full h-full flex items-center justify-center ",
      children: "Result_Management",
    }),
  A0 = () =>
    w.jsx("div", {
      className: "w-full h-full flex items-center justify-center ",
      children: "Continuous_Control_Management",
    }),
  b0 = () =>
    w.jsx("div", {
      className: "w-full h-full flex items-center justify-center ",
      children: "Profile",
    }),
  $0 = () =>
    w.jsx("div", {
      className: "w-full h-full flex items-center justify-center ",
      children: "Security",
    }),
  B0 = () =>
    w.jsx("div", {
      className: "w-full h-full flex items-center justify-center ",
      children: "Settings",
    }),
  V0 = Hg([
    {
      path: "/",
      element: w.jsx(R0, {}),
      children: [
        { path: "/", element: w.jsx(z0, {}) },
        { path: "/alerts", element: w.jsx(L0, {}) },
        { path: "/tasks", element: w.jsx(T0, {}) },
        { path: "/notifications", element: w.jsx(M0, {}) },
        { path: "/profile", element: w.jsx(b0, {}) },
        { path: "/security", element: w.jsx($0, {}) },
        { path: "/settings", element: w.jsx(B0, {}) },
        { path: "/finance/risk-management", element: w.jsx(D0, {}) },
        { path: "/finance/control-management", element: w.jsx(O0, {}) },
        { path: "/finance/issue-management", element: w.jsx(I0, {}) },
        {
          path: "/continuous-monitoring/continuous-control-management",
          element: w.jsx(A0, {}),
        },
        {
          path: "/continuous-monitoring/result-management",
          element: w.jsx(U0, {}),
        },
        { path: "/tools/setup-and-administration", element: w.jsx(F0, {}) },
      ],
    },
    { path: "login", element: w.jsx(zp, {}) },
  ]),
  W0 = () => w.jsx(qg, { router: V0 });
Bi.createRoot(document.getElementById("root")).render(
  w.jsx(Ot.StrictMode, {
    children: w.jsx(My, { children: w.jsx(Py, { children: w.jsx(W0, {}) }) }),
  })
);
