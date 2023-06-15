function Vs(e, t) {
  const n = /* @__PURE__ */ Object.create(null), r = e.split(",");
  for (let s = 0; s < r.length; s++)
    n[r[s]] = !0;
  return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
function Us(e) {
  if (ee(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = Ue(r) ? Iu(r) : Us(r);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else {
    if (Ue(e))
      return e;
    if (Ee(e))
      return e;
  }
}
const Eu = /;(?![^(]*\))/g, Ou = /:([^]+)/, Tu = /\/\*.*?\*\//gs;
function Iu(e) {
  const t = {};
  return e.replace(Tu, "").split(Eu).forEach((n) => {
    if (n) {
      const r = n.split(Ou);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function js(e) {
  let t = "";
  if (Ue(e))
    t = e;
  else if (ee(e))
    for (let n = 0; n < e.length; n++) {
      const r = js(e[n]);
      r && (t += r + " ");
    }
  else if (Ee(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Au = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Lu = /* @__PURE__ */ Vs(Au);
function bl(e) {
  return !!e || e === "";
}
const q = (e) => Ue(e) ? e : e == null ? "" : ee(e) || Ee(e) && (e.toString === Tl || !se(e.toString)) ? JSON.stringify(e, yl, 2) : String(e), yl = (e, t) => t && t.__v_isRef ? yl(e, t.value) : fn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, s]) => (n[`${r} =>`] = s, n), {})
} : El(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : Ee(t) && !ee(t) && !Il(t) ? String(t) : t, be = {}, cn = [], pt = () => {
}, Nu = () => !1, Cu = /^on[^a-z]/, gr = (e) => Cu.test(e), Hs = (e) => e.startsWith("onUpdate:"), Xe = Object.assign, Ws = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ru = Object.prototype.hasOwnProperty, ue = (e, t) => Ru.call(e, t), ee = Array.isArray, fn = (e) => vr(e) === "[object Map]", El = (e) => vr(e) === "[object Set]", se = (e) => typeof e == "function", Ue = (e) => typeof e == "string", Bs = (e) => typeof e == "symbol", Ee = (e) => e !== null && typeof e == "object", Ol = (e) => Ee(e) && se(e.then) && se(e.catch), Tl = Object.prototype.toString, vr = (e) => Tl.call(e), Su = (e) => vr(e).slice(8, -1), Il = (e) => vr(e) === "[object Object]", qs = (e) => Ue(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ir = /* @__PURE__ */ Vs(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), br = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, wu = /-(\w)/g, at = br((e) => e.replace(wu, (t, n) => n ? n.toUpperCase() : "")), Fu = /\B([A-Z])/g, dt = br((e) => e.replace(Fu, "-$1").toLowerCase()), yr = br((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ur = br((e) => e ? `on${yr(e)}` : ""), Un = (e, t) => !Object.is(e, t), jr = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, ur = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, cr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Mi;
const ku = () => Mi || (Mi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let yt;
class Al {
  constructor(t = !1) {
    this.detached = t, this.active = !0, this.effects = [], this.cleanups = [], this.parent = yt, !t && yt && (this.index = (yt.scopes || (yt.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const n = yt;
      try {
        return yt = this, t();
      } finally {
        yt = n;
      }
    }
  }
  on() {
    yt = this;
  }
  off() {
    yt = this.parent;
  }
  stop(t) {
    if (this.active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0, this.active = !1;
    }
  }
}
function Pu(e) {
  return new Al(e);
}
function Mu(e, t = yt) {
  t && t.active && t.effects.push(e);
}
const Ks = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Ll = (e) => (e.w & $t) > 0, Nl = (e) => (e.n & $t) > 0, Du = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= $t;
}, xu = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      const s = t[r];
      Ll(s) && !Nl(s) ? s.delete(e) : t[n++] = s, s.w &= ~$t, s.n &= ~$t;
    }
    t.length = n;
  }
}, ds = /* @__PURE__ */ new WeakMap();
let Fn = 0, $t = 1;
const ms = 30;
let mt;
const Jt = Symbol(""), hs = Symbol("");
class Ys {
  constructor(t, n = null, r) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Mu(this, r);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = mt, n = Dt;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = mt, mt = this, Dt = !0, $t = 1 << ++Fn, Fn <= ms ? Du(this) : Di(this), this.fn();
    } finally {
      Fn <= ms && xu(this), $t = 1 << --Fn, mt = this.parent, Dt = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    mt === this ? this.deferStop = !0 : this.active && (Di(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Di(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Dt = !0;
const Cl = [];
function On() {
  Cl.push(Dt), Dt = !1;
}
function Tn() {
  const e = Cl.pop();
  Dt = e === void 0 ? !0 : e;
}
function lt(e, t, n) {
  if (Dt && mt) {
    let r = ds.get(e);
    r || ds.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || r.set(n, s = Ks()), Rl(s);
  }
}
function Rl(e, t) {
  let n = !1;
  Fn <= ms ? Nl(e) || (e.n |= $t, n = !Ll(e)) : n = !e.has(mt), n && (e.add(mt), mt.deps.push(e));
}
function Rt(e, t, n, r, s, i) {
  const a = ds.get(e);
  if (!a)
    return;
  let l = [];
  if (t === "clear")
    l = [...a.values()];
  else if (n === "length" && ee(e)) {
    const o = cr(r);
    a.forEach((f, m) => {
      (m === "length" || m >= o) && l.push(f);
    });
  } else
    switch (n !== void 0 && l.push(a.get(n)), t) {
      case "add":
        ee(e) ? qs(n) && l.push(a.get("length")) : (l.push(a.get(Jt)), fn(e) && l.push(a.get(hs)));
        break;
      case "delete":
        ee(e) || (l.push(a.get(Jt)), fn(e) && l.push(a.get(hs)));
        break;
      case "set":
        fn(e) && l.push(a.get(Jt));
        break;
    }
  if (l.length === 1)
    l[0] && ps(l[0]);
  else {
    const o = [];
    for (const f of l)
      f && o.push(...f);
    ps(Ks(o));
  }
}
function ps(e, t) {
  const n = ee(e) ? e : [...e];
  for (const r of n)
    r.computed && xi(r);
  for (const r of n)
    r.computed || xi(r);
}
function xi(e, t) {
  (e !== mt || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const $u = /* @__PURE__ */ Vs("__proto__,__v_isRef,__isVue"), Sl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Bs)
), Vu = /* @__PURE__ */ Gs(), Uu = /* @__PURE__ */ Gs(!1, !0), ju = /* @__PURE__ */ Gs(!0), $i = /* @__PURE__ */ Hu();
function Hu() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = he(this);
      for (let i = 0, a = this.length; i < a; i++)
        lt(r, "get", i + "");
      const s = r[t](...n);
      return s === -1 || s === !1 ? r[t](...n.map(he)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      On();
      const r = he(this)[t].apply(this, n);
      return Tn(), r;
    };
  }), e;
}
function Gs(e = !1, t = !1) {
  return function(r, s, i) {
    if (s === "__v_isReactive")
      return !e;
    if (s === "__v_isReadonly")
      return e;
    if (s === "__v_isShallow")
      return t;
    if (s === "__v_raw" && i === (e ? t ? sc : Ml : t ? Pl : kl).get(r))
      return r;
    const a = ee(r);
    if (!e && a && ue($i, s))
      return Reflect.get($i, s, i);
    const l = Reflect.get(r, s, i);
    return (Bs(s) ? Sl.has(s) : $u(s)) || (e || lt(r, "get", s), t) ? l : Oe(l) ? a && qs(s) ? l : l.value : Ee(l) ? e ? Dl(l) : In(l) : l;
  };
}
const Wu = /* @__PURE__ */ wl(), Bu = /* @__PURE__ */ wl(!0);
function wl(e = !1) {
  return function(n, r, s, i) {
    let a = n[r];
    if (hn(a) && Oe(a) && !Oe(s))
      return !1;
    if (!e && (!fr(s) && !hn(s) && (a = he(a), s = he(s)), !ee(n) && Oe(a) && !Oe(s)))
      return a.value = s, !0;
    const l = ee(n) && qs(r) ? Number(r) < n.length : ue(n, r), o = Reflect.set(n, r, s, i);
    return n === he(i) && (l ? Un(s, a) && Rt(n, "set", r, s) : Rt(n, "add", r, s)), o;
  };
}
function qu(e, t) {
  const n = ue(e, t);
  e[t];
  const r = Reflect.deleteProperty(e, t);
  return r && n && Rt(e, "delete", t, void 0), r;
}
function Ku(e, t) {
  const n = Reflect.has(e, t);
  return (!Bs(t) || !Sl.has(t)) && lt(e, "has", t), n;
}
function Yu(e) {
  return lt(e, "iterate", ee(e) ? "length" : Jt), Reflect.ownKeys(e);
}
const Fl = {
  get: Vu,
  set: Wu,
  deleteProperty: qu,
  has: Ku,
  ownKeys: Yu
}, Gu = {
  get: ju,
  set(e, t) {
    return !0;
  },
  deleteProperty(e, t) {
    return !0;
  }
}, Xu = /* @__PURE__ */ Xe({}, Fl, {
  get: Uu,
  set: Bu
}), Xs = (e) => e, Er = (e) => Reflect.getPrototypeOf(e);
function zn(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const s = he(e), i = he(t);
  n || (t !== i && lt(s, "get", t), lt(s, "get", i));
  const { has: a } = Er(s), l = r ? Xs : n ? Zs : jn;
  if (a.call(s, t))
    return l(e.get(t));
  if (a.call(s, i))
    return l(e.get(i));
  e !== s && e.get(t);
}
function Qn(e, t = !1) {
  const n = this.__v_raw, r = he(n), s = he(e);
  return t || (e !== s && lt(r, "has", e), lt(r, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function Zn(e, t = !1) {
  return e = e.__v_raw, !t && lt(he(e), "iterate", Jt), Reflect.get(e, "size", e);
}
function Vi(e) {
  e = he(e);
  const t = he(this);
  return Er(t).has.call(t, e) || (t.add(e), Rt(t, "add", e, e)), this;
}
function Ui(e, t) {
  t = he(t);
  const n = he(this), { has: r, get: s } = Er(n);
  let i = r.call(n, e);
  i || (e = he(e), i = r.call(n, e));
  const a = s.call(n, e);
  return n.set(e, t), i ? Un(t, a) && Rt(n, "set", e, t) : Rt(n, "add", e, t), this;
}
function ji(e) {
  const t = he(this), { has: n, get: r } = Er(t);
  let s = n.call(t, e);
  s || (e = he(e), s = n.call(t, e)), r && r.call(t, e);
  const i = t.delete(e);
  return s && Rt(t, "delete", e, void 0), i;
}
function Hi() {
  const e = he(this), t = e.size !== 0, n = e.clear();
  return t && Rt(e, "clear", void 0, void 0), n;
}
function er(e, t) {
  return function(r, s) {
    const i = this, a = i.__v_raw, l = he(a), o = t ? Xs : e ? Zs : jn;
    return !e && lt(l, "iterate", Jt), a.forEach((f, m) => r.call(s, o(f), o(m), i));
  };
}
function tr(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, i = he(s), a = fn(i), l = e === "entries" || e === Symbol.iterator && a, o = e === "keys" && a, f = s[e](...r), m = n ? Xs : t ? Zs : jn;
    return !t && lt(i, "iterate", o ? hs : Jt), {
      next() {
        const { value: h, done: d } = f.next();
        return d ? { value: h, done: d } : {
          value: l ? [m(h[0]), m(h[1])] : m(h),
          done: d
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function wt(e) {
  return function(...t) {
    return e === "delete" ? !1 : this;
  };
}
function Ju() {
  const e = {
    get(i) {
      return zn(this, i);
    },
    get size() {
      return Zn(this);
    },
    has: Qn,
    add: Vi,
    set: Ui,
    delete: ji,
    clear: Hi,
    forEach: er(!1, !1)
  }, t = {
    get(i) {
      return zn(this, i, !1, !0);
    },
    get size() {
      return Zn(this);
    },
    has: Qn,
    add: Vi,
    set: Ui,
    delete: ji,
    clear: Hi,
    forEach: er(!1, !0)
  }, n = {
    get(i) {
      return zn(this, i, !0);
    },
    get size() {
      return Zn(this, !0);
    },
    has(i) {
      return Qn.call(this, i, !0);
    },
    add: wt("add"),
    set: wt("set"),
    delete: wt("delete"),
    clear: wt("clear"),
    forEach: er(!0, !1)
  }, r = {
    get(i) {
      return zn(this, i, !0, !0);
    },
    get size() {
      return Zn(this, !0);
    },
    has(i) {
      return Qn.call(this, i, !0);
    },
    add: wt("add"),
    set: wt("set"),
    delete: wt("delete"),
    clear: wt("clear"),
    forEach: er(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
    e[i] = tr(i, !1, !1), n[i] = tr(i, !0, !1), t[i] = tr(i, !1, !0), r[i] = tr(i, !0, !0);
  }), [
    e,
    n,
    t,
    r
  ];
}
const [zu, Qu, Zu, ec] = /* @__PURE__ */ Ju();
function Js(e, t) {
  const n = t ? e ? ec : Zu : e ? Qu : zu;
  return (r, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(ue(n, s) && s in r ? n : r, s, i);
}
const tc = {
  get: /* @__PURE__ */ Js(!1, !1)
}, nc = {
  get: /* @__PURE__ */ Js(!1, !0)
}, rc = {
  get: /* @__PURE__ */ Js(!0, !1)
}, kl = /* @__PURE__ */ new WeakMap(), Pl = /* @__PURE__ */ new WeakMap(), Ml = /* @__PURE__ */ new WeakMap(), sc = /* @__PURE__ */ new WeakMap();
function ic(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function ac(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ic(Su(e));
}
function In(e) {
  return hn(e) ? e : zs(e, !1, Fl, tc, kl);
}
function lc(e) {
  return zs(e, !1, Xu, nc, Pl);
}
function Dl(e) {
  return zs(e, !0, Gu, rc, Ml);
}
function zs(e, t, n, r, s) {
  if (!Ee(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = s.get(e);
  if (i)
    return i;
  const a = ac(e);
  if (a === 0)
    return e;
  const l = new Proxy(e, a === 2 ? r : n);
  return s.set(e, l), l;
}
function dn(e) {
  return hn(e) ? dn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function hn(e) {
  return !!(e && e.__v_isReadonly);
}
function fr(e) {
  return !!(e && e.__v_isShallow);
}
function xl(e) {
  return dn(e) || hn(e);
}
function he(e) {
  const t = e && e.__v_raw;
  return t ? he(t) : e;
}
function Qs(e) {
  return ur(e, "__v_skip", !0), e;
}
const jn = (e) => Ee(e) ? In(e) : e, Zs = (e) => Ee(e) ? Dl(e) : e;
function $l(e) {
  Dt && mt && (e = he(e), Rl(e.dep || (e.dep = Ks())));
}
function Vl(e, t) {
  e = he(e), e.dep && ps(e.dep);
}
function Oe(e) {
  return !!(e && e.__v_isRef === !0);
}
function me(e) {
  return Ul(e, !1);
}
function oc(e) {
  return Ul(e, !0);
}
function Ul(e, t) {
  return Oe(e) ? e : new uc(e, t);
}
class uc {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : he(t), this._value = n ? t : jn(t);
  }
  get value() {
    return $l(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || fr(t) || hn(t);
    t = n ? t : he(t), Un(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : jn(t), Vl(this));
  }
}
function L(e) {
  return Oe(e) ? e.value : e;
}
const cc = {
  get: (e, t, n) => L(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return Oe(s) && !Oe(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function jl(e) {
  return dn(e) ? e : new Proxy(e, cc);
}
function ei(e) {
  const t = ee(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = It(e, n);
  return t;
}
class fc {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
}
function It(e, t, n) {
  const r = e[t];
  return Oe(r) ? r : new fc(e, t, n);
}
var Hl;
class dc {
  constructor(t, n, r, s) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Hl] = !1, this._dirty = !0, this.effect = new Ys(t, () => {
      this._dirty || (this._dirty = !0, Vl(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = r;
  }
  get value() {
    const t = he(this);
    return $l(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Hl = "__v_isReadonly";
function mc(e, t, n = !1) {
  let r, s;
  const i = se(e);
  return i ? (r = e, s = pt) : (r = e.get, s = e.set), new dc(r, s, i || !s, n);
}
function xt(e, t, n, r) {
  let s;
  try {
    s = r ? e(...r) : e();
  } catch (i) {
    Or(i, t, n);
  }
  return s;
}
function _t(e, t, n, r) {
  if (se(e)) {
    const i = xt(e, t, n, r);
    return i && Ol(i) && i.catch((a) => {
      Or(a, t, n);
    }), i;
  }
  const s = [];
  for (let i = 0; i < e.length; i++)
    s.push(_t(e[i], t, n, r));
  return s;
}
function Or(e, t, n, r = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const a = t.proxy, l = n;
    for (; i; ) {
      const f = i.ec;
      if (f) {
        for (let m = 0; m < f.length; m++)
          if (f[m](e, a, l) === !1)
            return;
      }
      i = i.parent;
    }
    const o = t.appContext.config.errorHandler;
    if (o) {
      xt(o, null, 10, [e, a, l]);
      return;
    }
  }
  hc(e, n, s, r);
}
function hc(e, t, n, r = !0) {
  console.error(e);
}
let Hn = !1, _s = !1;
const Ye = [];
let At = 0;
const mn = [];
let Nt = null, Yt = 0;
const Wl = /* @__PURE__ */ Promise.resolve();
let ti = null;
function Xt(e) {
  const t = ti || Wl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function pc(e) {
  let t = At + 1, n = Ye.length;
  for (; t < n; ) {
    const r = t + n >>> 1;
    Wn(Ye[r]) < e ? t = r + 1 : n = r;
  }
  return t;
}
function ni(e) {
  (!Ye.length || !Ye.includes(e, Hn && e.allowRecurse ? At + 1 : At)) && (e.id == null ? Ye.push(e) : Ye.splice(pc(e.id), 0, e), Bl());
}
function Bl() {
  !Hn && !_s && (_s = !0, ti = Wl.then(Kl));
}
function _c(e) {
  const t = Ye.indexOf(e);
  t > At && Ye.splice(t, 1);
}
function gc(e) {
  ee(e) ? mn.push(...e) : (!Nt || !Nt.includes(e, e.allowRecurse ? Yt + 1 : Yt)) && mn.push(e), Bl();
}
function Wi(e, t = Hn ? At + 1 : 0) {
  for (; t < Ye.length; t++) {
    const n = Ye[t];
    n && n.pre && (Ye.splice(t, 1), t--, n());
  }
}
function ql(e) {
  if (mn.length) {
    const t = [...new Set(mn)];
    if (mn.length = 0, Nt) {
      Nt.push(...t);
      return;
    }
    for (Nt = t, Nt.sort((n, r) => Wn(n) - Wn(r)), Yt = 0; Yt < Nt.length; Yt++)
      Nt[Yt]();
    Nt = null, Yt = 0;
  }
}
const Wn = (e) => e.id == null ? 1 / 0 : e.id, vc = (e, t) => {
  const n = Wn(e) - Wn(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Kl(e) {
  _s = !1, Hn = !0, Ye.sort(vc);
  const t = pt;
  try {
    for (At = 0; At < Ye.length; At++) {
      const n = Ye[At];
      n && n.active !== !1 && xt(n, null, 14);
    }
  } finally {
    At = 0, Ye.length = 0, ql(), Hn = !1, ti = null, (Ye.length || mn.length) && Kl();
  }
}
function bc(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const r = e.vnode.props || be;
  let s = n;
  const i = t.startsWith("update:"), a = i && t.slice(7);
  if (a && a in r) {
    const m = `${a === "modelValue" ? "model" : a}Modifiers`, { number: h, trim: d } = r[m] || be;
    d && (s = n.map((N) => Ue(N) ? N.trim() : N)), h && (s = n.map(cr));
  }
  let l, o = r[l = Ur(t)] || r[l = Ur(at(t))];
  !o && i && (o = r[l = Ur(dt(t))]), o && _t(o, e, 6, s);
  const f = r[l + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, _t(f, e, 6, s);
  }
}
function Yl(e, t, n = !1) {
  const r = t.emitsCache, s = r.get(e);
  if (s !== void 0)
    return s;
  const i = e.emits;
  let a = {}, l = !1;
  if (!se(e)) {
    const o = (f) => {
      const m = Yl(f, t, !0);
      m && (l = !0, Xe(a, m));
    };
    !n && t.mixins.length && t.mixins.forEach(o), e.extends && o(e.extends), e.mixins && e.mixins.forEach(o);
  }
  return !i && !l ? (Ee(e) && r.set(e, null), null) : (ee(i) ? i.forEach((o) => a[o] = null) : Xe(a, i), Ee(e) && r.set(e, a), a);
}
function Tr(e, t) {
  return !e || !gr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ue(e, t[0].toLowerCase() + t.slice(1)) || ue(e, dt(t)) || ue(e, t));
}
let Ge = null, Gl = null;
function dr(e) {
  const t = Ge;
  return Ge = e, Gl = e && e.type.__scopeId || null, t;
}
function Be(e, t = Ge, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && Qi(-1);
    const i = dr(t);
    let a;
    try {
      a = e(...s);
    } finally {
      dr(i), r._d && Qi(1);
    }
    return a;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Hr(e) {
  const { type: t, vnode: n, proxy: r, withProxy: s, props: i, propsOptions: [a], slots: l, attrs: o, emit: f, render: m, renderCache: h, data: d, setupState: N, ctx: F, inheritAttrs: S } = e;
  let D, b;
  const C = dr(e);
  try {
    if (n.shapeFlag & 4) {
      const O = s || r;
      D = Ot(m.call(O, O, h, i, N, d, F)), b = o;
    } else {
      const O = t;
      D = Ot(O.length > 1 ? O(i, { attrs: o, slots: l, emit: f }) : O(i, null)), b = t.props ? o : yc(o);
    }
  } catch (O) {
    Mn.length = 0, Or(O, e, 1), D = fe(Vt);
  }
  let I = D;
  if (b && S !== !1) {
    const O = Object.keys(b), { shapeFlag: y } = I;
    O.length && y & 7 && (a && O.some(Hs) && (b = Ec(b, a)), I = pn(I, b));
  }
  return n.dirs && (I = pn(I), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition && (I.transition = n.transition), D = I, dr(C), D;
}
const yc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || gr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ec = (e, t) => {
  const n = {};
  for (const r in e)
    (!Hs(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function Oc(e, t, n) {
  const { props: r, children: s, component: i } = e, { props: a, children: l, patchFlag: o } = t, f = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && o >= 0) {
    if (o & 1024)
      return !0;
    if (o & 16)
      return r ? Bi(r, a, f) : !!a;
    if (o & 8) {
      const m = t.dynamicProps;
      for (let h = 0; h < m.length; h++) {
        const d = m[h];
        if (a[d] !== r[d] && !Tr(f, d))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : r === a ? !1 : r ? a ? Bi(r, a, f) : !0 : !!a;
  return !1;
}
function Bi(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (t[i] !== e[i] && !Tr(n, i))
      return !0;
  }
  return !1;
}
function Tc({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Ic = (e) => e.__isSuspense;
function Ac(e, t) {
  t && t.pendingBranch ? ee(e) ? t.effects.push(...e) : t.effects.push(e) : gc(e);
}
function Ir(e, t) {
  if (xe) {
    let n = xe.provides;
    const r = xe.parent && xe.parent.provides;
    r === n && (n = xe.provides = Object.create(r)), n[e] = t;
  }
}
function zt(e, t, n = !1) {
  const r = xe || Ge;
  if (r) {
    const s = r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && se(t) ? t.call(r.proxy) : t;
  }
}
function Xl(e, t) {
  return ri(e, null, t);
}
const nr = {};
function Re(e, t, n) {
  return ri(e, t, n);
}
function ri(e, t, { immediate: n, deep: r, flush: s, onTrack: i, onTrigger: a } = be) {
  const l = xe;
  let o, f = !1, m = !1;
  if (Oe(e) ? (o = () => e.value, f = fr(e)) : dn(e) ? (o = () => e, r = !0) : ee(e) ? (m = !0, f = e.some((I) => dn(I) || fr(I)), o = () => e.map((I) => {
    if (Oe(I))
      return I.value;
    if (dn(I))
      return ln(I);
    if (se(I))
      return xt(I, l, 2);
  })) : se(e) ? t ? o = () => xt(e, l, 2) : o = () => {
    if (!(l && l.isUnmounted))
      return h && h(), _t(e, l, 3, [d]);
  } : o = pt, t && r) {
    const I = o;
    o = () => ln(I());
  }
  let h, d = (I) => {
    h = b.onStop = () => {
      xt(I, l, 4);
    };
  }, N;
  if (qn)
    if (d = pt, t ? n && _t(t, l, 3, [
      o(),
      m ? [] : void 0,
      d
    ]) : o(), s === "sync") {
      const I = pf();
      N = I.__watcherHandles || (I.__watcherHandles = []);
    } else
      return pt;
  let F = m ? new Array(e.length).fill(nr) : nr;
  const S = () => {
    if (!!b.active)
      if (t) {
        const I = b.run();
        (r || f || (m ? I.some((O, y) => Un(O, F[y])) : Un(I, F))) && (h && h(), _t(t, l, 3, [
          I,
          F === nr ? void 0 : m && F[0] === nr ? [] : F,
          d
        ]), F = I);
      } else
        b.run();
  };
  S.allowRecurse = !!t;
  let D;
  s === "sync" ? D = S : s === "post" ? D = () => tt(S, l && l.suspense) : (S.pre = !0, l && (S.id = l.uid), D = () => ni(S));
  const b = new Ys(o, D);
  t ? n ? S() : F = b.run() : s === "post" ? tt(b.run.bind(b), l && l.suspense) : b.run();
  const C = () => {
    b.stop(), l && l.scope && Ws(l.scope.effects, b);
  };
  return N && N.push(C), C;
}
function Lc(e, t, n) {
  const r = this.proxy, s = Ue(e) ? e.includes(".") ? Jl(r, e) : () => r[e] : e.bind(r, r);
  let i;
  se(t) ? i = t : (i = t.handler, n = t);
  const a = xe;
  _n(this);
  const l = ri(s, i.bind(r), n);
  return a ? _n(a) : Qt(), l;
}
function Jl(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
function ln(e, t) {
  if (!Ee(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), Oe(e))
    ln(e.value, t);
  else if (ee(e))
    for (let n = 0; n < e.length; n++)
      ln(e[n], t);
  else if (El(e) || fn(e))
    e.forEach((n) => {
      ln(n, t);
    });
  else if (Il(e))
    for (const n in e)
      ln(e[n], t);
  return e;
}
function An(e) {
  return se(e) ? { setup: e, name: e.name } : e;
}
const kn = (e) => !!e.type.__asyncLoader, zl = (e) => e.type.__isKeepAlive;
function Nc(e, t) {
  Ql(e, "a", t);
}
function Cc(e, t) {
  Ql(e, "da", t);
}
function Ql(e, t, n = xe) {
  const r = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Ar(t, r, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      zl(s.parent.vnode) && Rc(r, t, n, s), s = s.parent;
  }
}
function Rc(e, t, n, r) {
  const s = Ar(t, e, r, !0);
  ii(() => {
    Ws(r[t], s);
  }, n);
}
function Ar(e, t, n = xe, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...a) => {
      if (n.isUnmounted)
        return;
      On(), _n(n);
      const l = _t(t, n, e, a);
      return Qt(), Tn(), l;
    });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const St = (e) => (t, n = xe) => (!qn || e === "sp") && Ar(e, (...r) => t(...r), n), Zl = St("bm"), Ln = St("m"), Sc = St("bu"), wc = St("u"), si = St("bum"), ii = St("um"), Fc = St("sp"), kc = St("rtg"), Pc = St("rtc");
function Mc(e, t = xe) {
  Ar("ec", e, t);
}
function Wt(e, t, n, r) {
  const s = e.dirs, i = t && t.dirs;
  for (let a = 0; a < s.length; a++) {
    const l = s[a];
    i && (l.oldValue = i[a].value);
    let o = l.dir[r];
    o && (On(), _t(o, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Tn());
  }
}
const eo = "components", to = Symbol();
function ai(e) {
  return Ue(e) ? Dc(eo, e, !1) || e : e || to;
}
function Dc(e, t, n = !0, r = !1) {
  const s = Ge || xe;
  if (s) {
    const i = s.type;
    if (e === eo) {
      const l = df(i, !1);
      if (l && (l === t || l === at(t) || l === yr(at(t))))
        return i;
    }
    const a = qi(s[e] || i[e], t) || qi(s.appContext[e], t);
    return !a && r ? i : a;
  }
}
function qi(e, t) {
  return e && (e[t] || e[at(t)] || e[yr(at(t))]);
}
function Yn(e, t, n = {}, r, s) {
  if (Ge.isCE || Ge.parent && kn(Ge.parent) && Ge.parent.isCE)
    return t !== "default" && (n.name = t), fe("slot", n, r && r());
  let i = e[t];
  i && i._c && (i._d = !1), De();
  const a = i && no(i(n)), l = mo(ut, {
    key: n.key || a && a.key || `_${t}`
  }, a || (r ? r() : []), a && e._ === 1 ? 64 : -2);
  return !s && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), i && i._c && (i._d = !0), l;
}
function no(e) {
  return e.some((t) => hr(t) ? !(t.type === Vt || t.type === ut && !no(t.children)) : !0) ? e : null;
}
const gs = (e) => e ? po(e) ? ci(e) || e.proxy : gs(e.parent) : null, Pn = /* @__PURE__ */ Xe(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => e.props,
  $attrs: (e) => e.attrs,
  $slots: (e) => e.slots,
  $refs: (e) => e.refs,
  $parent: (e) => gs(e.parent),
  $root: (e) => gs(e.root),
  $emit: (e) => e.emit,
  $options: (e) => li(e),
  $forceUpdate: (e) => e.f || (e.f = () => ni(e.update)),
  $nextTick: (e) => e.n || (e.n = Xt.bind(e.proxy)),
  $watch: (e) => Lc.bind(e)
}), Wr = (e, t) => e !== be && !e.__isScriptSetup && ue(e, t), xc = {
  get({ _: e }, t) {
    const { ctx: n, setupState: r, data: s, props: i, accessCache: a, type: l, appContext: o } = e;
    let f;
    if (t[0] !== "$") {
      const N = a[t];
      if (N !== void 0)
        switch (N) {
          case 1:
            return r[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (Wr(r, t))
          return a[t] = 1, r[t];
        if (s !== be && ue(s, t))
          return a[t] = 2, s[t];
        if ((f = e.propsOptions[0]) && ue(f, t))
          return a[t] = 3, i[t];
        if (n !== be && ue(n, t))
          return a[t] = 4, n[t];
        vs && (a[t] = 0);
      }
    }
    const m = Pn[t];
    let h, d;
    if (m)
      return t === "$attrs" && lt(e, "get", t), m(e);
    if ((h = l.__cssModules) && (h = h[t]))
      return h;
    if (n !== be && ue(n, t))
      return a[t] = 4, n[t];
    if (d = o.config.globalProperties, ue(d, t))
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: i } = e;
    return Wr(s, t) ? (s[t] = n, !0) : r !== be && ue(r, t) ? (r[t] = n, !0) : ue(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: i } }, a) {
    let l;
    return !!n[a] || e !== be && ue(e, a) || Wr(t, a) || (l = i[0]) && ue(l, a) || ue(r, a) || ue(Pn, a) || ue(s.config.globalProperties, a);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ue(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
let vs = !0;
function $c(e) {
  const t = li(e), n = e.proxy, r = e.ctx;
  vs = !1, t.beforeCreate && Ki(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: i,
    methods: a,
    watch: l,
    provide: o,
    inject: f,
    created: m,
    beforeMount: h,
    mounted: d,
    beforeUpdate: N,
    updated: F,
    activated: S,
    deactivated: D,
    beforeDestroy: b,
    beforeUnmount: C,
    destroyed: I,
    unmounted: O,
    render: y,
    renderTracked: R,
    renderTriggered: k,
    errorCaptured: W,
    serverPrefetch: B,
    expose: K,
    inheritAttrs: Y,
    components: z,
    directives: te,
    filters: de
  } = t;
  if (f && Vc(f, r, null, e.appContext.config.unwrapInjectedRef), a)
    for (const X in a) {
      const ne = a[X];
      se(ne) && (r[X] = ne.bind(n));
    }
  if (s) {
    const X = s.call(n, n);
    Ee(X) && (e.data = In(X));
  }
  if (vs = !0, i)
    for (const X in i) {
      const ne = i[X], Ne = se(ne) ? ne.bind(n, n) : se(ne.get) ? ne.get.bind(n, n) : pt, we = !se(ne) && se(ne.set) ? ne.set.bind(n) : pt, Ie = ae({
        get: Ne,
        set: we
      });
      Object.defineProperty(r, X, {
        enumerable: !0,
        configurable: !0,
        get: () => Ie.value,
        set: (ye) => Ie.value = ye
      });
    }
  if (l)
    for (const X in l)
      ro(l[X], r, n, X);
  if (o) {
    const X = se(o) ? o.call(n) : o;
    Reflect.ownKeys(X).forEach((ne) => {
      Ir(ne, X[ne]);
    });
  }
  m && Ki(m, e, "c");
  function J(X, ne) {
    ee(ne) ? ne.forEach((Ne) => X(Ne.bind(n))) : ne && X(ne.bind(n));
  }
  if (J(Zl, h), J(Ln, d), J(Sc, N), J(wc, F), J(Nc, S), J(Cc, D), J(Mc, W), J(Pc, R), J(kc, k), J(si, C), J(ii, O), J(Fc, B), ee(K))
    if (K.length) {
      const X = e.exposed || (e.exposed = {});
      K.forEach((ne) => {
        Object.defineProperty(X, ne, {
          get: () => n[ne],
          set: (Ne) => n[ne] = Ne
        });
      });
    } else
      e.exposed || (e.exposed = {});
  y && e.render === pt && (e.render = y), Y != null && (e.inheritAttrs = Y), z && (e.components = z), te && (e.directives = te);
}
function Vc(e, t, n = pt, r = !1) {
  ee(e) && (e = bs(e));
  for (const s in e) {
    const i = e[s];
    let a;
    Ee(i) ? "default" in i ? a = zt(i.from || s, i.default, !0) : a = zt(i.from || s) : a = zt(i), Oe(a) && r ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (l) => a.value = l
    }) : t[s] = a;
  }
}
function Ki(e, t, n) {
  _t(ee(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function ro(e, t, n, r) {
  const s = r.includes(".") ? Jl(n, r) : () => n[r];
  if (Ue(e)) {
    const i = t[e];
    se(i) && Re(s, i);
  } else if (se(e))
    Re(s, e.bind(n));
  else if (Ee(e))
    if (ee(e))
      e.forEach((i) => ro(i, t, n, r));
    else {
      const i = se(e.handler) ? e.handler.bind(n) : t[e.handler];
      se(i) && Re(s, i, e);
    }
}
function li(e) {
  const t = e.type, { mixins: n, extends: r } = t, { mixins: s, optionsCache: i, config: { optionMergeStrategies: a } } = e.appContext, l = i.get(t);
  let o;
  return l ? o = l : !s.length && !n && !r ? o = t : (o = {}, s.length && s.forEach((f) => mr(o, f, a, !0)), mr(o, t, a)), Ee(t) && i.set(t, o), o;
}
function mr(e, t, n, r = !1) {
  const { mixins: s, extends: i } = t;
  i && mr(e, i, n, !0), s && s.forEach((a) => mr(e, a, n, !0));
  for (const a in t)
    if (!(r && a === "expose")) {
      const l = Uc[a] || n && n[a];
      e[a] = l ? l(e[a], t[a]) : t[a];
    }
  return e;
}
const Uc = {
  data: Yi,
  props: qt,
  emits: qt,
  methods: qt,
  computed: qt,
  beforeCreate: Je,
  created: Je,
  beforeMount: Je,
  mounted: Je,
  beforeUpdate: Je,
  updated: Je,
  beforeDestroy: Je,
  beforeUnmount: Je,
  destroyed: Je,
  unmounted: Je,
  activated: Je,
  deactivated: Je,
  errorCaptured: Je,
  serverPrefetch: Je,
  components: qt,
  directives: qt,
  watch: Hc,
  provide: Yi,
  inject: jc
};
function Yi(e, t) {
  return t ? e ? function() {
    return Xe(se(e) ? e.call(this, this) : e, se(t) ? t.call(this, this) : t);
  } : t : e;
}
function jc(e, t) {
  return qt(bs(e), bs(t));
}
function bs(e) {
  if (ee(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Je(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function qt(e, t) {
  return e ? Xe(Xe(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function Hc(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = Xe(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Je(e[r], t[r]);
  return n;
}
function Wc(e, t, n, r = !1) {
  const s = {}, i = {};
  ur(i, Lr, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), so(e, t, s, i);
  for (const a in e.propsOptions[0])
    a in s || (s[a] = void 0);
  n ? e.props = r ? s : lc(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i;
}
function Bc(e, t, n, r) {
  const { props: s, attrs: i, vnode: { patchFlag: a } } = e, l = he(s), [o] = e.propsOptions;
  let f = !1;
  if ((r || a > 0) && !(a & 16)) {
    if (a & 8) {
      const m = e.vnode.dynamicProps;
      for (let h = 0; h < m.length; h++) {
        let d = m[h];
        if (Tr(e.emitsOptions, d))
          continue;
        const N = t[d];
        if (o)
          if (ue(i, d))
            N !== i[d] && (i[d] = N, f = !0);
          else {
            const F = at(d);
            s[F] = ys(o, l, F, N, e, !1);
          }
        else
          N !== i[d] && (i[d] = N, f = !0);
      }
    }
  } else {
    so(e, t, s, i) && (f = !0);
    let m;
    for (const h in l)
      (!t || !ue(t, h) && ((m = dt(h)) === h || !ue(t, m))) && (o ? n && (n[h] !== void 0 || n[m] !== void 0) && (s[h] = ys(o, l, h, void 0, e, !0)) : delete s[h]);
    if (i !== l)
      for (const h in i)
        (!t || !ue(t, h) && !0) && (delete i[h], f = !0);
  }
  f && Rt(e, "set", "$attrs");
}
function so(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let a = !1, l;
  if (t)
    for (let o in t) {
      if (ir(o))
        continue;
      const f = t[o];
      let m;
      s && ue(s, m = at(o)) ? !i || !i.includes(m) ? n[m] = f : (l || (l = {}))[m] = f : Tr(e.emitsOptions, o) || (!(o in r) || f !== r[o]) && (r[o] = f, a = !0);
    }
  if (i) {
    const o = he(n), f = l || be;
    for (let m = 0; m < i.length; m++) {
      const h = i[m];
      n[h] = ys(s, o, h, f[h], e, !ue(f, h));
    }
  }
  return a;
}
function ys(e, t, n, r, s, i) {
  const a = e[n];
  if (a != null) {
    const l = ue(a, "default");
    if (l && r === void 0) {
      const o = a.default;
      if (a.type !== Function && se(o)) {
        const { propsDefaults: f } = s;
        n in f ? r = f[n] : (_n(s), r = f[n] = o.call(null, t), Qt());
      } else
        r = o;
    }
    a[0] && (i && !l ? r = !1 : a[1] && (r === "" || r === dt(n)) && (r = !0));
  }
  return r;
}
function io(e, t, n = !1) {
  const r = t.propsCache, s = r.get(e);
  if (s)
    return s;
  const i = e.props, a = {}, l = [];
  let o = !1;
  if (!se(e)) {
    const m = (h) => {
      o = !0;
      const [d, N] = io(h, t, !0);
      Xe(a, d), N && l.push(...N);
    };
    !n && t.mixins.length && t.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  if (!i && !o)
    return Ee(e) && r.set(e, cn), cn;
  if (ee(i))
    for (let m = 0; m < i.length; m++) {
      const h = at(i[m]);
      Gi(h) && (a[h] = be);
    }
  else if (i)
    for (const m in i) {
      const h = at(m);
      if (Gi(h)) {
        const d = i[m], N = a[h] = ee(d) || se(d) ? { type: d } : Object.assign({}, d);
        if (N) {
          const F = zi(Boolean, N.type), S = zi(String, N.type);
          N[0] = F > -1, N[1] = S < 0 || F < S, (F > -1 || ue(N, "default")) && l.push(h);
        }
      }
    }
  const f = [a, l];
  return Ee(e) && r.set(e, f), f;
}
function Gi(e) {
  return e[0] !== "$";
}
function Xi(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function Ji(e, t) {
  return Xi(e) === Xi(t);
}
function zi(e, t) {
  return ee(t) ? t.findIndex((n) => Ji(n, e)) : se(t) && Ji(t, e) ? 0 : -1;
}
const ao = (e) => e[0] === "_" || e === "$stable", oi = (e) => ee(e) ? e.map(Ot) : [Ot(e)], qc = (e, t, n) => {
  if (t._n)
    return t;
  const r = Be((...s) => oi(t(...s)), n);
  return r._c = !1, r;
}, lo = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (ao(s))
      continue;
    const i = e[s];
    if (se(i))
      t[s] = qc(s, i, r);
    else if (i != null) {
      const a = oi(i);
      t[s] = () => a;
    }
  }
}, oo = (e, t) => {
  const n = oi(t);
  e.slots.default = () => n;
}, Kc = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = he(t), ur(t, "_", n)) : lo(t, e.slots = {});
  } else
    e.slots = {}, t && oo(e, t);
  ur(e.slots, Lr, 1);
}, Yc = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let i = !0, a = be;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : (Xe(s, t), !n && l === 1 && delete s._) : (i = !t.$stable, lo(t, s)), a = t;
  } else
    t && (oo(e, t), a = { default: 1 });
  if (i)
    for (const l in s)
      !ao(l) && !(l in a) && delete s[l];
};
function uo() {
  return {
    app: null,
    config: {
      isNativeTag: Nu,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Gc = 0;
function Xc(e, t) {
  return function(r, s = null) {
    se(r) || (r = Object.assign({}, r)), s != null && !Ee(s) && (s = null);
    const i = uo(), a = /* @__PURE__ */ new Set();
    let l = !1;
    const o = i.app = {
      _uid: Gc++,
      _component: r,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: _f,
      get config() {
        return i.config;
      },
      set config(f) {
      },
      use(f, ...m) {
        return a.has(f) || (f && se(f.install) ? (a.add(f), f.install(o, ...m)) : se(f) && (a.add(f), f(o, ...m))), o;
      },
      mixin(f) {
        return i.mixins.includes(f) || i.mixins.push(f), o;
      },
      component(f, m) {
        return m ? (i.components[f] = m, o) : i.components[f];
      },
      directive(f, m) {
        return m ? (i.directives[f] = m, o) : i.directives[f];
      },
      mount(f, m, h) {
        if (!l) {
          const d = fe(r, s);
          return d.appContext = i, m && t ? t(d, f) : e(d, f, h), l = !0, o._container = f, f.__vue_app__ = o, ci(d.component) || d.component.proxy;
        }
      },
      unmount() {
        l && (e(null, o._container), delete o._container.__vue_app__);
      },
      provide(f, m) {
        return i.provides[f] = m, o;
      }
    };
    return o;
  };
}
function Es(e, t, n, r, s = !1) {
  if (ee(e)) {
    e.forEach((d, N) => Es(d, t && (ee(t) ? t[N] : t), n, r, s));
    return;
  }
  if (kn(r) && !s)
    return;
  const i = r.shapeFlag & 4 ? ci(r.component) || r.component.proxy : r.el, a = s ? null : i, { i: l, r: o } = e, f = t && t.r, m = l.refs === be ? l.refs = {} : l.refs, h = l.setupState;
  if (f != null && f !== o && (Ue(f) ? (m[f] = null, ue(h, f) && (h[f] = null)) : Oe(f) && (f.value = null)), se(o))
    xt(o, l, 12, [a, m]);
  else {
    const d = Ue(o), N = Oe(o);
    if (d || N) {
      const F = () => {
        if (e.f) {
          const S = d ? ue(h, o) ? h[o] : m[o] : o.value;
          s ? ee(S) && Ws(S, i) : ee(S) ? S.includes(i) || S.push(i) : d ? (m[o] = [i], ue(h, o) && (h[o] = m[o])) : (o.value = [i], e.k && (m[e.k] = o.value));
        } else
          d ? (m[o] = a, ue(h, o) && (h[o] = a)) : N && (o.value = a, e.k && (m[e.k] = a));
      };
      a ? (F.id = -1, tt(F, n)) : F();
    }
  }
}
const tt = Ac;
function Jc(e) {
  return zc(e);
}
function zc(e, t) {
  const n = ku();
  n.__VUE__ = !0;
  const { insert: r, remove: s, patchProp: i, createElement: a, createText: l, createComment: o, setText: f, setElementText: m, parentNode: h, nextSibling: d, setScopeId: N = pt, insertStaticContent: F } = e, S = (_, u, c, p = null, A = null, w = null, P = !1, M = null, v = !!u.dynamicChildren) => {
    if (_ === u)
      return;
    _ && !Sn(_, u) && (p = re(_), ye(_, A, w, !0), _ = null), u.patchFlag === -2 && (v = !1, u.dynamicChildren = null);
    const { type: E, ref: g, shapeFlag: T } = u;
    switch (E) {
      case Gn:
        D(_, u, c, p);
        break;
      case Vt:
        b(_, u, c, p);
        break;
      case Br:
        _ == null && C(u, c, p, P);
        break;
      case ut:
        z(_, u, c, p, A, w, P, M, v);
        break;
      default:
        T & 1 ? y(_, u, c, p, A, w, P, M, v) : T & 6 ? te(_, u, c, p, A, w, P, M, v) : (T & 64 || T & 128) && E.process(_, u, c, p, A, w, P, M, v, Fe);
    }
    g != null && A && Es(g, _ && _.ref, w, u || _, !u);
  }, D = (_, u, c, p) => {
    if (_ == null)
      r(u.el = l(u.children), c, p);
    else {
      const A = u.el = _.el;
      u.children !== _.children && f(A, u.children);
    }
  }, b = (_, u, c, p) => {
    _ == null ? r(u.el = o(u.children || ""), c, p) : u.el = _.el;
  }, C = (_, u, c, p) => {
    [_.el, _.anchor] = F(_.children, u, c, p, _.el, _.anchor);
  }, I = ({ el: _, anchor: u }, c, p) => {
    let A;
    for (; _ && _ !== u; )
      A = d(_), r(_, c, p), _ = A;
    r(u, c, p);
  }, O = ({ el: _, anchor: u }) => {
    let c;
    for (; _ && _ !== u; )
      c = d(_), s(_), _ = c;
    s(u);
  }, y = (_, u, c, p, A, w, P, M, v) => {
    P = P || u.type === "svg", _ == null ? R(u, c, p, A, w, P, M, v) : B(_, u, A, w, P, M, v);
  }, R = (_, u, c, p, A, w, P, M) => {
    let v, E;
    const { type: g, props: T, shapeFlag: $, transition: x, dirs: H } = _;
    if (v = _.el = a(_.type, w, T && T.is, T), $ & 8 ? m(v, _.children) : $ & 16 && W(_.children, v, null, p, A, w && g !== "foreignObject", P, M), H && Wt(_, null, p, "created"), T) {
      for (const Q in T)
        Q !== "value" && !ir(Q) && i(v, Q, null, T[Q], w, _.children, p, A, V);
      "value" in T && i(v, "value", null, T.value), (E = T.onVnodeBeforeMount) && vt(E, p, _);
    }
    k(v, _, _.scopeId, P, p), H && Wt(_, null, p, "beforeMount");
    const G = (!A || A && !A.pendingBranch) && x && !x.persisted;
    G && x.beforeEnter(v), r(v, u, c), ((E = T && T.onVnodeMounted) || G || H) && tt(() => {
      E && vt(E, p, _), G && x.enter(v), H && Wt(_, null, p, "mounted");
    }, A);
  }, k = (_, u, c, p, A) => {
    if (c && N(_, c), p)
      for (let w = 0; w < p.length; w++)
        N(_, p[w]);
    if (A) {
      let w = A.subTree;
      if (u === w) {
        const P = A.vnode;
        k(_, P, P.scopeId, P.slotScopeIds, A.parent);
      }
    }
  }, W = (_, u, c, p, A, w, P, M, v = 0) => {
    for (let E = v; E < _.length; E++) {
      const g = _[E] = M ? Pt(_[E]) : Ot(_[E]);
      S(null, g, u, c, p, A, w, P, M);
    }
  }, B = (_, u, c, p, A, w, P) => {
    const M = u.el = _.el;
    let { patchFlag: v, dynamicChildren: E, dirs: g } = u;
    v |= _.patchFlag & 16;
    const T = _.props || be, $ = u.props || be;
    let x;
    c && Bt(c, !1), (x = $.onVnodeBeforeUpdate) && vt(x, c, u, _), g && Wt(u, _, c, "beforeUpdate"), c && Bt(c, !0);
    const H = A && u.type !== "foreignObject";
    if (E ? K(_.dynamicChildren, E, M, c, p, H, w) : P || ne(_, u, M, null, c, p, H, w, !1), v > 0) {
      if (v & 16)
        Y(M, u, T, $, c, p, A);
      else if (v & 2 && T.class !== $.class && i(M, "class", null, $.class, A), v & 4 && i(M, "style", T.style, $.style, A), v & 8) {
        const G = u.dynamicProps;
        for (let Q = 0; Q < G.length; Q++) {
          const oe = G[Q], Ze = T[oe], ot = $[oe];
          (ot !== Ze || oe === "value") && i(M, oe, Ze, ot, A, _.children, c, p, V);
        }
      }
      v & 1 && _.children !== u.children && m(M, u.children);
    } else
      !P && E == null && Y(M, u, T, $, c, p, A);
    ((x = $.onVnodeUpdated) || g) && tt(() => {
      x && vt(x, c, u, _), g && Wt(u, _, c, "updated");
    }, p);
  }, K = (_, u, c, p, A, w, P) => {
    for (let M = 0; M < u.length; M++) {
      const v = _[M], E = u[M], g = v.el && (v.type === ut || !Sn(v, E) || v.shapeFlag & 70) ? h(v.el) : c;
      S(v, E, g, null, p, A, w, P, !0);
    }
  }, Y = (_, u, c, p, A, w, P) => {
    if (c !== p) {
      if (c !== be)
        for (const M in c)
          !ir(M) && !(M in p) && i(_, M, c[M], null, P, u.children, A, w, V);
      for (const M in p) {
        if (ir(M))
          continue;
        const v = p[M], E = c[M];
        v !== E && M !== "value" && i(_, M, E, v, P, u.children, A, w, V);
      }
      "value" in p && i(_, "value", c.value, p.value);
    }
  }, z = (_, u, c, p, A, w, P, M, v) => {
    const E = u.el = _ ? _.el : l(""), g = u.anchor = _ ? _.anchor : l("");
    let { patchFlag: T, dynamicChildren: $, slotScopeIds: x } = u;
    x && (M = M ? M.concat(x) : x), _ == null ? (r(E, c, p), r(g, c, p), W(u.children, c, g, A, w, P, M, v)) : T > 0 && T & 64 && $ && _.dynamicChildren ? (K(_.dynamicChildren, $, c, A, w, P, M), (u.key != null || A && u === A.subTree) && co(_, u, !0)) : ne(_, u, c, g, A, w, P, M, v);
  }, te = (_, u, c, p, A, w, P, M, v) => {
    u.slotScopeIds = M, _ == null ? u.shapeFlag & 512 ? A.ctx.activate(u, c, p, P, v) : de(u, c, p, A, w, P, v) : Te(_, u, v);
  }, de = (_, u, c, p, A, w, P) => {
    const M = _.component = lf(_, p, A);
    if (zl(_) && (M.ctx.renderer = Fe), of(M), M.asyncDep) {
      if (A && A.registerDep(M, J), !_.el) {
        const v = M.subTree = fe(Vt);
        b(null, v, u, c);
      }
      return;
    }
    J(M, _, u, c, A, w, P);
  }, Te = (_, u, c) => {
    const p = u.component = _.component;
    if (Oc(_, u, c))
      if (p.asyncDep && !p.asyncResolved) {
        X(p, u, c);
        return;
      } else
        p.next = u, _c(p.update), p.update();
    else
      u.el = _.el, p.vnode = u;
  }, J = (_, u, c, p, A, w, P) => {
    const M = () => {
      if (_.isMounted) {
        let { next: g, bu: T, u: $, parent: x, vnode: H } = _, G = g, Q;
        Bt(_, !1), g ? (g.el = H.el, X(_, g, P)) : g = H, T && jr(T), (Q = g.props && g.props.onVnodeBeforeUpdate) && vt(Q, x, g, H), Bt(_, !0);
        const oe = Hr(_), Ze = _.subTree;
        _.subTree = oe, S(
          Ze,
          oe,
          h(Ze.el),
          re(Ze),
          _,
          A,
          w
        ), g.el = oe.el, G === null && Tc(_, oe.el), $ && tt($, A), (Q = g.props && g.props.onVnodeUpdated) && tt(() => vt(Q, x, g, H), A);
      } else {
        let g;
        const { el: T, props: $ } = u, { bm: x, m: H, parent: G } = _, Q = kn(u);
        if (Bt(_, !1), x && jr(x), !Q && (g = $ && $.onVnodeBeforeMount) && vt(g, G, u), Bt(_, !0), T && He) {
          const oe = () => {
            _.subTree = Hr(_), He(T, _.subTree, _, A, null);
          };
          Q ? u.type.__asyncLoader().then(
            () => !_.isUnmounted && oe()
          ) : oe();
        } else {
          const oe = _.subTree = Hr(_);
          S(null, oe, c, p, _, A, w), u.el = oe.el;
        }
        if (H && tt(H, A), !Q && (g = $ && $.onVnodeMounted)) {
          const oe = u;
          tt(() => vt(g, G, oe), A);
        }
        (u.shapeFlag & 256 || G && kn(G.vnode) && G.vnode.shapeFlag & 256) && _.a && tt(_.a, A), _.isMounted = !0, u = c = p = null;
      }
    }, v = _.effect = new Ys(
      M,
      () => ni(E),
      _.scope
    ), E = _.update = () => v.run();
    E.id = _.uid, Bt(_, !0), E();
  }, X = (_, u, c) => {
    u.component = _;
    const p = _.vnode.props;
    _.vnode = u, _.next = null, Bc(_, u.props, p, c), Yc(_, u.children, c), On(), Wi(), Tn();
  }, ne = (_, u, c, p, A, w, P, M, v = !1) => {
    const E = _ && _.children, g = _ ? _.shapeFlag : 0, T = u.children, { patchFlag: $, shapeFlag: x } = u;
    if ($ > 0) {
      if ($ & 128) {
        we(E, T, c, p, A, w, P, M, v);
        return;
      } else if ($ & 256) {
        Ne(E, T, c, p, A, w, P, M, v);
        return;
      }
    }
    x & 8 ? (g & 16 && V(E, A, w), T !== E && m(c, T)) : g & 16 ? x & 16 ? we(E, T, c, p, A, w, P, M, v) : V(E, A, w, !0) : (g & 8 && m(c, ""), x & 16 && W(T, c, p, A, w, P, M, v));
  }, Ne = (_, u, c, p, A, w, P, M, v) => {
    _ = _ || cn, u = u || cn;
    const E = _.length, g = u.length, T = Math.min(E, g);
    let $;
    for ($ = 0; $ < T; $++) {
      const x = u[$] = v ? Pt(u[$]) : Ot(u[$]);
      S(_[$], x, c, null, A, w, P, M, v);
    }
    E > g ? V(_, A, w, !0, !1, T) : W(u, c, p, A, w, P, M, v, T);
  }, we = (_, u, c, p, A, w, P, M, v) => {
    let E = 0;
    const g = u.length;
    let T = _.length - 1, $ = g - 1;
    for (; E <= T && E <= $; ) {
      const x = _[E], H = u[E] = v ? Pt(u[E]) : Ot(u[E]);
      if (Sn(x, H))
        S(x, H, c, null, A, w, P, M, v);
      else
        break;
      E++;
    }
    for (; E <= T && E <= $; ) {
      const x = _[T], H = u[$] = v ? Pt(u[$]) : Ot(u[$]);
      if (Sn(x, H))
        S(x, H, c, null, A, w, P, M, v);
      else
        break;
      T--, $--;
    }
    if (E > T) {
      if (E <= $) {
        const x = $ + 1, H = x < g ? u[x].el : p;
        for (; E <= $; )
          S(null, u[E] = v ? Pt(u[E]) : Ot(u[E]), c, H, A, w, P, M, v), E++;
      }
    } else if (E > $)
      for (; E <= T; )
        ye(_[E], A, w, !0), E++;
    else {
      const x = E, H = E, G = /* @__PURE__ */ new Map();
      for (E = H; E <= $; E++) {
        const st = u[E] = v ? Pt(u[E]) : Ot(u[E]);
        st.key != null && G.set(st.key, E);
      }
      let Q, oe = 0;
      const Ze = $ - H + 1;
      let ot = !1, Fi = 0;
      const Rn = new Array(Ze);
      for (E = 0; E < Ze; E++)
        Rn[E] = 0;
      for (E = x; E <= T; E++) {
        const st = _[E];
        if (oe >= Ze) {
          ye(st, A, w, !0);
          continue;
        }
        let gt;
        if (st.key != null)
          gt = G.get(st.key);
        else
          for (Q = H; Q <= $; Q++)
            if (Rn[Q - H] === 0 && Sn(st, u[Q])) {
              gt = Q;
              break;
            }
        gt === void 0 ? ye(st, A, w, !0) : (Rn[gt - H] = E + 1, gt >= Fi ? Fi = gt : ot = !0, S(st, u[gt], c, null, A, w, P, M, v), oe++);
      }
      const ki = ot ? Qc(Rn) : cn;
      for (Q = ki.length - 1, E = Ze - 1; E >= 0; E--) {
        const st = H + E, gt = u[st], Pi = st + 1 < g ? u[st + 1].el : p;
        Rn[E] === 0 ? S(null, gt, c, Pi, A, w, P, M, v) : ot && (Q < 0 || E !== ki[Q] ? Ie(gt, c, Pi, 2) : Q--);
      }
    }
  }, Ie = (_, u, c, p, A = null) => {
    const { el: w, type: P, transition: M, children: v, shapeFlag: E } = _;
    if (E & 6) {
      Ie(_.component.subTree, u, c, p);
      return;
    }
    if (E & 128) {
      _.suspense.move(u, c, p);
      return;
    }
    if (E & 64) {
      P.move(_, u, c, Fe);
      return;
    }
    if (P === ut) {
      r(w, u, c);
      for (let T = 0; T < v.length; T++)
        Ie(v[T], u, c, p);
      r(_.anchor, u, c);
      return;
    }
    if (P === Br) {
      I(_, u, c);
      return;
    }
    if (p !== 2 && E & 1 && M)
      if (p === 0)
        M.beforeEnter(w), r(w, u, c), tt(() => M.enter(w), A);
      else {
        const { leave: T, delayLeave: $, afterLeave: x } = M, H = () => r(w, u, c), G = () => {
          T(w, () => {
            H(), x && x();
          });
        };
        $ ? $(w, H, G) : G();
      }
    else
      r(w, u, c);
  }, ye = (_, u, c, p = !1, A = !1) => {
    const { type: w, props: P, ref: M, children: v, dynamicChildren: E, shapeFlag: g, patchFlag: T, dirs: $ } = _;
    if (M != null && Es(M, null, c, _, !0), g & 256) {
      u.ctx.deactivate(_);
      return;
    }
    const x = g & 1 && $, H = !kn(_);
    let G;
    if (H && (G = P && P.onVnodeBeforeUnmount) && vt(G, u, _), g & 6)
      ct(_.component, c, p);
    else {
      if (g & 128) {
        _.suspense.unmount(c, p);
        return;
      }
      x && Wt(_, null, u, "beforeUnmount"), g & 64 ? _.type.remove(_, u, c, A, Fe, p) : E && (w !== ut || T > 0 && T & 64) ? V(E, u, c, !1, !0) : (w === ut && T & 384 || !A && g & 16) && V(v, u, c), p && rt(_);
    }
    (H && (G = P && P.onVnodeUnmounted) || x) && tt(() => {
      G && vt(G, u, _), x && Wt(_, null, u, "unmounted");
    }, c);
  }, rt = (_) => {
    const { type: u, el: c, anchor: p, transition: A } = _;
    if (u === ut) {
      je(c, p);
      return;
    }
    if (u === Br) {
      O(_);
      return;
    }
    const w = () => {
      s(c), A && !A.persisted && A.afterLeave && A.afterLeave();
    };
    if (_.shapeFlag & 1 && A && !A.persisted) {
      const { leave: P, delayLeave: M } = A, v = () => P(c, w);
      M ? M(_.el, w, v) : v();
    } else
      w();
  }, je = (_, u) => {
    let c;
    for (; _ !== u; )
      c = d(_), s(_), _ = c;
    s(u);
  }, ct = (_, u, c) => {
    const { bum: p, scope: A, update: w, subTree: P, um: M } = _;
    p && jr(p), A.stop(), w && (w.active = !1, ye(P, _, u, c)), M && tt(M, u), tt(() => {
      _.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && _.asyncDep && !_.asyncResolved && _.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve());
  }, V = (_, u, c, p = !1, A = !1, w = 0) => {
    for (let P = w; P < _.length; P++)
      ye(_[P], u, c, p, A);
  }, re = (_) => _.shapeFlag & 6 ? re(_.component.subTree) : _.shapeFlag & 128 ? _.suspense.next() : d(_.anchor || _.el), pe = (_, u, c) => {
    _ == null ? u._vnode && ye(u._vnode, null, null, !0) : S(u._vnode || null, _, u, null, null, null, c), Wi(), ql(), u._vnode = _;
  }, Fe = {
    p: S,
    um: ye,
    m: Ie,
    r: rt,
    mt: de,
    mc: W,
    pc: ne,
    pbc: K,
    n: re,
    o: e
  };
  let Ce, He;
  return t && ([Ce, He] = t(Fe)), {
    render: pe,
    hydrate: Ce,
    createApp: Xc(pe, Ce)
  };
}
function Bt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function co(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (ee(r) && ee(s))
    for (let i = 0; i < r.length; i++) {
      const a = r[i];
      let l = s[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[i] = Pt(s[i]), l.el = a.el), n || co(a, l)), l.type === Gn && (l.el = a.el);
    }
}
function Qc(e) {
  const t = e.slice(), n = [0];
  let r, s, i, a, l;
  const o = e.length;
  for (r = 0; r < o; r++) {
    const f = e[r];
    if (f !== 0) {
      if (s = n[n.length - 1], e[s] < f) {
        t[r] = s, n.push(r);
        continue;
      }
      for (i = 0, a = n.length - 1; i < a; )
        l = i + a >> 1, e[n[l]] < f ? i = l + 1 : a = l;
      f < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), n[i] = r);
    }
  }
  for (i = n.length, a = n[i - 1]; i-- > 0; )
    n[i] = a, a = t[a];
  return n;
}
const Zc = (e) => e.__isTeleport, ut = Symbol(void 0), Gn = Symbol(void 0), Vt = Symbol(void 0), Br = Symbol(void 0), Mn = [];
let ht = null;
function De(e = !1) {
  Mn.push(ht = e ? null : []);
}
function ef() {
  Mn.pop(), ht = Mn[Mn.length - 1] || null;
}
let Bn = 1;
function Qi(e) {
  Bn += e;
}
function fo(e) {
  return e.dynamicChildren = Bn > 0 ? ht || cn : null, ef(), Bn > 0 && ht && ht.push(e), e;
}
function Ke(e, t, n, r, s, i) {
  return fo(U(e, t, n, r, s, i, !0));
}
function mo(e, t, n, r, s) {
  return fo(fe(e, t, n, r, s, !0));
}
function hr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Sn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Lr = "__vInternal", ho = ({ key: e }) => e != null ? e : null, ar = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? Ue(e) || Oe(e) || se(e) ? { i: Ge, r: e, k: t, f: !!n } : e : null;
function U(e, t = null, n = null, r = 0, s = null, i = e === ut ? 0 : 1, a = !1, l = !1) {
  const o = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ho(t),
    ref: t && ar(t),
    scopeId: Gl,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Ge
  };
  return l ? (ui(o, n), i & 128 && e.normalize(o)) : n && (o.shapeFlag |= Ue(n) ? 8 : 16), Bn > 0 && !a && ht && (o.patchFlag > 0 || i & 6) && o.patchFlag !== 32 && ht.push(o), o;
}
const fe = tf;
function tf(e, t = null, n = null, r = 0, s = null, i = !1) {
  if ((!e || e === to) && (e = Vt), hr(e)) {
    const l = pn(e, t, !0);
    return n && ui(l, n), Bn > 0 && !i && ht && (l.shapeFlag & 6 ? ht[ht.indexOf(e)] = l : ht.push(l)), l.patchFlag |= -2, l;
  }
  if (mf(e) && (e = e.__vccOpts), t) {
    t = nf(t);
    let { class: l, style: o } = t;
    l && !Ue(l) && (t.class = js(l)), Ee(o) && (xl(o) && !ee(o) && (o = Xe({}, o)), t.style = Us(o));
  }
  const a = Ue(e) ? 1 : Ic(e) ? 128 : Zc(e) ? 64 : Ee(e) ? 4 : se(e) ? 2 : 0;
  return U(e, t, n, r, s, a, i, !0);
}
function nf(e) {
  return e ? xl(e) || Lr in e ? Xe({}, e) : e : null;
}
function pn(e, t, n = !1) {
  const { props: r, ref: s, patchFlag: i, children: a } = e, l = t ? rf(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && ho(l),
    ref: t && t.ref ? n && s ? ee(s) ? s.concat(ar(t)) : [s, ar(t)] : ar(t) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== ut ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && pn(e.ssContent),
    ssFallback: e.ssFallback && pn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx
  };
}
function le(e = " ", t = 0) {
  return fe(Gn, null, e, t);
}
function Et(e = "", t = !1) {
  return t ? (De(), mo(Vt, null, e)) : fe(Vt, null, e);
}
function Ot(e) {
  return e == null || typeof e == "boolean" ? fe(Vt) : ee(e) ? fe(
    ut,
    null,
    e.slice()
  ) : typeof e == "object" ? Pt(e) : fe(Gn, null, String(e));
}
function Pt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : pn(e);
}
function ui(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (ee(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), ui(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(Lr in t) ? t._ctx = Ge : s === 3 && Ge && (Ge.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    se(t) ? (t = { default: t, _ctx: Ge }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [le(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function rf(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = js([t.class, r.class]));
      else if (s === "style")
        t.style = Us([t.style, r.style]);
      else if (gr(s)) {
        const i = t[s], a = r[s];
        a && i !== a && !(ee(i) && i.includes(a)) && (t[s] = i ? [].concat(i, a) : a);
      } else
        s !== "" && (t[s] = r[s]);
  }
  return t;
}
function vt(e, t, n, r = null) {
  _t(e, t, 7, [
    n,
    r
  ]);
}
const sf = uo();
let af = 0;
function lf(e, t, n) {
  const r = e.type, s = (t ? t.appContext : e.appContext) || sf, i = {
    uid: af++,
    vnode: e,
    type: r,
    parent: t,
    appContext: s,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Al(!0),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: io(r, s),
    emitsOptions: Yl(r, s),
    emit: null,
    emitted: null,
    propsDefaults: be,
    inheritAttrs: r.inheritAttrs,
    ctx: be,
    data: be,
    props: be,
    attrs: be,
    slots: be,
    refs: be,
    setupState: be,
    setupContext: null,
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = bc.bind(null, i), e.ce && e.ce(i), i;
}
let xe = null;
const Zt = () => xe || Ge, _n = (e) => {
  xe = e, e.scope.on();
}, Qt = () => {
  xe && xe.scope.off(), xe = null;
};
function po(e) {
  return e.vnode.shapeFlag & 4;
}
let qn = !1;
function of(e, t = !1) {
  qn = t;
  const { props: n, children: r } = e.vnode, s = po(e);
  Wc(e, n, s, t), Kc(e, r);
  const i = s ? uf(e, t) : void 0;
  return qn = !1, i;
}
function uf(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Qs(new Proxy(e.ctx, xc));
  const { setup: r } = n;
  if (r) {
    const s = e.setupContext = r.length > 1 ? ff(e) : null;
    _n(e), On();
    const i = xt(r, e, 0, [e.props, s]);
    if (Tn(), Qt(), Ol(i)) {
      if (i.then(Qt, Qt), t)
        return i.then((a) => {
          Zi(e, a, t);
        }).catch((a) => {
          Or(a, e, 0);
        });
      e.asyncDep = i;
    } else
      Zi(e, i, t);
  } else
    _o(e, t);
}
function Zi(e, t, n) {
  se(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ee(t) && (e.setupState = jl(t)), _o(e, n);
}
let ea;
function _o(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && ea && !r.render) {
      const s = r.template || li(e).template;
      if (s) {
        const { isCustomElement: i, compilerOptions: a } = e.appContext.config, { delimiters: l, compilerOptions: o } = r, f = Xe(Xe({
          isCustomElement: i,
          delimiters: l
        }, a), o);
        r.render = ea(s, f);
      }
    }
    e.render = r.render || pt;
  }
  _n(e), On(), $c(e), Tn(), Qt();
}
function cf(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return lt(e, "get", "$attrs"), t[n];
    }
  });
}
function ff(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = cf(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ci(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(jl(Qs(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Pn)
          return Pn[n](e);
      },
      has(t, n) {
        return n in t || n in Pn;
      }
    }));
}
function df(e, t = !0) {
  return se(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function mf(e) {
  return se(e) && "__vccOpts" in e;
}
const ae = (e, t) => mc(e, t, qn);
function gn(e, t, n) {
  const r = arguments.length;
  return r === 2 ? Ee(t) && !ee(t) ? hr(t) ? fe(e, null, [t]) : fe(e, t) : fe(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && hr(n) && (n = [n]), fe(e, t, n));
}
const hf = Symbol(""), pf = () => zt(hf), _f = "3.2.45", gf = "http://www.w3.org/2000/svg", Gt = typeof document < "u" ? document : null, ta = Gt && /* @__PURE__ */ Gt.createElement("template"), vf = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t ? Gt.createElementNS(gf, e) : Gt.createElement(e, n ? { is: n } : void 0);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (e) => Gt.createTextNode(e),
  createComment: (e) => Gt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Gt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  insertStaticContent(e, t, n, r, s, i) {
    const a = n ? n.previousSibling : t.lastChild;
    if (s && (s === i || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === i || !(s = s.nextSibling)); )
        ;
    else {
      ta.innerHTML = r ? `<svg>${e}</svg>` : e;
      const l = ta.content;
      if (r) {
        const o = l.firstChild;
        for (; o.firstChild; )
          l.appendChild(o.firstChild);
        l.removeChild(o);
      }
      t.insertBefore(l, n);
    }
    return [
      a ? a.nextSibling : t.firstChild,
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function bf(e, t, n) {
  const r = e._vtc;
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function yf(e, t, n) {
  const r = e.style, s = Ue(n);
  if (n && !s) {
    for (const i in n)
      Os(r, i, n[i]);
    if (t && !Ue(t))
      for (const i in t)
        n[i] == null && Os(r, i, "");
  } else {
    const i = r.display;
    s ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (r.display = i);
  }
}
const na = /\s*!important$/;
function Os(e, t, n) {
  if (ee(n))
    n.forEach((r) => Os(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Ef(e, t);
    na.test(n) ? e.setProperty(dt(r), n.replace(na, ""), "important") : e[r] = n;
  }
}
const ra = ["Webkit", "Moz", "ms"], qr = {};
function Ef(e, t) {
  const n = qr[t];
  if (n)
    return n;
  let r = at(t);
  if (r !== "filter" && r in e)
    return qr[t] = r;
  r = yr(r);
  for (let s = 0; s < ra.length; s++) {
    const i = ra[s] + r;
    if (i in e)
      return qr[t] = i;
  }
  return t;
}
const sa = "http://www.w3.org/1999/xlink";
function Of(e, t, n, r, s) {
  if (r && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(sa, t.slice(6, t.length)) : e.setAttributeNS(sa, t, n);
  else {
    const i = Lu(t);
    n == null || i && !bl(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : n);
  }
}
function Tf(e, t, n, r, s, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    r && a(r, s, i), e[t] = n == null ? "" : n;
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const o = n == null ? "" : n;
    (e.value !== o || e.tagName === "OPTION") && (e.value = o), n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const o = typeof e[t];
    o === "boolean" ? n = bl(n) : n == null && o === "string" ? (n = "", l = !0) : o === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(t);
}
function If(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Af(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
function Lf(e, t, n, r, s = null) {
  const i = e._vei || (e._vei = {}), a = i[t];
  if (r && a)
    a.value = r;
  else {
    const [l, o] = Nf(t);
    if (r) {
      const f = i[t] = Sf(r, s);
      If(e, l, f, o);
    } else
      a && (Af(e, l, a, o), i[t] = void 0);
  }
}
const ia = /(?:Once|Passive|Capture)$/;
function Nf(e) {
  let t;
  if (ia.test(e)) {
    t = {};
    let r;
    for (; r = e.match(ia); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : dt(e.slice(2)), t];
}
let Kr = 0;
const Cf = /* @__PURE__ */ Promise.resolve(), Rf = () => Kr || (Cf.then(() => Kr = 0), Kr = Date.now());
function Sf(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    _t(wf(r, n.value), t, 5, [r]);
  };
  return n.value = e, n.attached = Rf(), n;
}
function wf(e, t) {
  if (ee(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((r) => (s) => !s._stopped && r && r(s));
  } else
    return t;
}
const aa = /^on[a-z]/, Ff = (e, t, n, r, s = !1, i, a, l, o) => {
  t === "class" ? bf(e, r, s) : t === "style" ? yf(e, n, r) : gr(t) ? Hs(t) || Lf(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : kf(e, t, r, s)) ? Tf(e, t, r, i, a, l, o) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Of(e, t, r, s));
};
function kf(e, t, n, r) {
  return r ? !!(t === "innerHTML" || t === "textContent" || t in e && aa.test(t) && se(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || aa.test(t) && Ue(n) ? !1 : t in e;
}
function fi(e, t) {
  const n = An(e);
  class r extends di {
    constructor(i) {
      super(n, i, t);
    }
  }
  return r.def = n, r;
}
const Pf = typeof HTMLElement < "u" ? HTMLElement : class {
};
class di extends Pf {
  constructor(t, n = {}, r) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && r ? r(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, Xt(() => {
      this._connected || (oa(null, this.shadowRoot), this._instance = null);
    });
  }
  _resolveDef() {
    this._resolved = !0;
    for (let r = 0; r < this.attributes.length; r++)
      this._setAttr(this.attributes[r].name);
    new MutationObserver((r) => {
      for (const s of r)
        this._setAttr(s.attributeName);
    }).observe(this, { attributes: !0 });
    const t = (r, s = !1) => {
      const { props: i, styles: a } = r;
      let l;
      if (i && !ee(i))
        for (const o in i) {
          const f = i[o];
          (f === Number || f && f.type === Number) && (o in this._props && (this._props[o] = cr(this._props[o])), (l || (l = /* @__PURE__ */ Object.create(null)))[at(o)] = !0);
        }
      this._numberProps = l, s && this._resolveProps(r), this._applyStyles(a), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((r) => t(r, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: n } = t, r = ee(n) ? n : Object.keys(n || {});
    for (const s of Object.keys(this))
      s[0] !== "_" && r.includes(s) && this._setProp(s, this[s], !0, !1);
    for (const s of r.map(at))
      Object.defineProperty(this, s, {
        get() {
          return this._getProp(s);
        },
        set(i) {
          this._setProp(s, i);
        }
      });
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    const r = at(t);
    this._numberProps && this._numberProps[r] && (n = cr(n)), this._setProp(r, n, !1);
  }
  _getProp(t) {
    return this._props[t];
  }
  _setProp(t, n, r = !0, s = !0) {
    n !== this._props[t] && (this._props[t] = n, s && this._instance && this._update(), r && (n === !0 ? this.setAttribute(dt(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(dt(t), n + "") : n || this.removeAttribute(dt(t))));
  }
  _update() {
    oa(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = fe(this._def, Xe({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0;
      const r = (i, a) => {
        this.dispatchEvent(new CustomEvent(i, {
          detail: a
        }));
      };
      n.emit = (i, ...a) => {
        r(i, a), dt(i) !== i && r(dt(i), a);
      };
      let s = this;
      for (; s = s && (s.parentNode || s.host); )
        if (s instanceof di) {
          n.parent = s._instance, n.provides = s._instance.provides;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((n) => {
      const r = document.createElement("style");
      r.textContent = n, this.shadowRoot.appendChild(r);
    });
  }
}
const Mf = /* @__PURE__ */ Xe({ patchProp: Ff }, vf);
let la;
function Df() {
  return la || (la = Jc(Mf));
}
const oa = (...e) => {
  Df().render(...e);
};
/**
  * vee-validate v4.7.3
  * (c) 2022 Abdelrahman Awad
  * @license MIT
  */
function en(e) {
  return typeof e == "function";
}
function Dn(e) {
  return e == null;
}
const tn = (e) => e !== null && !!e && typeof e == "object" && !Array.isArray(e);
function go(e) {
  return Number(e) >= 0;
}
function xf(e) {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}
const vo = {};
function Yr(e, t) {
  Vf(e, t), vo[e] = t;
}
function $f(e) {
  return vo[e];
}
function Vf(e, t) {
  if (!en(t))
    throw new Error(`Extension Error: The validator '${e}' must be a function.`);
}
const Nn = Symbol("vee-validate-form"), Uf = Symbol("vee-validate-field-instance"), pr = Symbol("Default empty value"), jf = typeof window < "u";
function Ts(e) {
  return en(e) && !!e.__locatorRef;
}
function xn(e) {
  return !!e && en(e.validate);
}
function vn(e) {
  return e === "checkbox" || e === "radio";
}
function Hf(e) {
  return tn(e) || Array.isArray(e);
}
function bo(e) {
  return Array.isArray(e) ? e.length === 0 : tn(e) && Object.keys(e).length === 0;
}
function Nr(e) {
  return /^\[.+\]$/i.test(e);
}
function Wf(e) {
  return yo(e) && e.multiple;
}
function yo(e) {
  return e.tagName === "SELECT";
}
function Bf(e, t) {
  const n = ![!1, null, void 0, 0].includes(t.multiple) && !Number.isNaN(t.multiple);
  return e === "select" && "multiple" in t && n;
}
function qf(e, t) {
  return !Bf(e, t) && t.type !== "file" && !vn(t.type);
}
function Eo(e) {
  return mi(e) && e.target && "submit" in e.target;
}
function mi(e) {
  return e ? !!(typeof Event < "u" && en(Event) && e instanceof Event || e && e.srcElement) : !1;
}
function ua(e, t) {
  return t in e && e[t] !== pr;
}
function $e(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var n, r, s;
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!$e(e[r], t[r]))
          return !1;
      return !0;
    }
    if (e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (r of e.entries())
        if (!t.has(r[0]))
          return !1;
      for (r of e.entries())
        if (!$e(r[1], t.get(r[0])))
          return !1;
      return !0;
    }
    if (ca(e) && ca(t))
      return !(e.size !== t.size || e.name !== t.name || e.lastModified !== t.lastModified || e.type !== t.type);
    if (e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (r of e.entries())
        if (!t.has(r[0]))
          return !1;
      return !0;
    }
    if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (e[r] !== t[r])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    if (s = Object.keys(e), n = s.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, s[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      var i = s[r];
      if (!$e(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ca(e) {
  return jf ? e instanceof File : !1;
}
function fa(e, t, n) {
  typeof n.value == "object" && (n.value = ve(n.value)), !n.enumerable || n.get || n.set || !n.configurable || !n.writable || t === "__proto__" ? Object.defineProperty(e, t, n) : e[t] = n.value;
}
function ve(e) {
  if (typeof e != "object")
    return e;
  var t = 0, n, r, s, i = Object.prototype.toString.call(e);
  if (i === "[object Object]" ? s = Object.create(e.__proto__ || null) : i === "[object Array]" ? s = Array(e.length) : i === "[object Set]" ? (s = /* @__PURE__ */ new Set(), e.forEach(function(a) {
    s.add(ve(a));
  })) : i === "[object Map]" ? (s = /* @__PURE__ */ new Map(), e.forEach(function(a, l) {
    s.set(ve(l), ve(a));
  })) : i === "[object Date]" ? s = new Date(+e) : i === "[object RegExp]" ? s = new RegExp(e.source, e.flags) : i === "[object DataView]" ? s = new e.constructor(ve(e.buffer)) : i === "[object ArrayBuffer]" ? s = e.slice(0) : i.slice(-6) === "Array]" && (s = new e.constructor(e)), s) {
    for (r = Object.getOwnPropertySymbols(e); t < r.length; t++)
      fa(s, r[t], Object.getOwnPropertyDescriptor(e, r[t]));
    for (t = 0, r = Object.getOwnPropertyNames(e); t < r.length; t++)
      Object.hasOwnProperty.call(s, n = r[t]) && s[n] === e[n] || fa(s, n, Object.getOwnPropertyDescriptor(e, n));
  }
  return s || e;
}
function hi(e) {
  return Nr(e) ? e.replace(/\[|\]/gi, "") : e;
}
function Ae(e, t, n) {
  return e ? Nr(t) ? e[hi(t)] : (t || "").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((s, i) => Hf(s) && i in s ? s[i] : n, e) : n;
}
function kt(e, t, n) {
  if (Nr(t)) {
    e[hi(t)] = n;
    return;
  }
  const r = t.split(/\.|\[(\d+)\]/).filter(Boolean);
  let s = e;
  for (let i = 0; i < r.length; i++) {
    if (i === r.length - 1) {
      s[r[i]] = n;
      return;
    }
    (!(r[i] in s) || Dn(s[r[i]])) && (s[r[i]] = go(r[i + 1]) ? [] : {}), s = s[r[i]];
  }
}
function Gr(e, t) {
  if (Array.isArray(e) && go(t)) {
    e.splice(Number(t), 1);
    return;
  }
  tn(e) && delete e[t];
}
function rr(e, t) {
  if (Nr(t)) {
    delete e[hi(t)];
    return;
  }
  const n = t.split(/\.|\[(\d+)\]/).filter(Boolean);
  let r = e;
  for (let i = 0; i < n.length; i++) {
    if (i === n.length - 1) {
      Gr(r, n[i]);
      break;
    }
    if (!(n[i] in r) || Dn(r[n[i]]))
      break;
    r = r[n[i]];
  }
  const s = n.map((i, a) => Ae(e, n.slice(0, a).join(".")));
  for (let i = s.length - 1; i >= 0; i--)
    if (!!bo(s[i])) {
      if (i === 0) {
        Gr(e, n[0]);
        continue;
      }
      Gr(s[i - 1], n[i - 1]);
    }
}
function We(e) {
  return Object.keys(e);
}
function Cr(e, t = void 0) {
  const n = Zt();
  return (n == null ? void 0 : n.provides[e]) || zt(e, t);
}
function Is(e, t, n) {
  if (Array.isArray(e)) {
    const r = [...e], s = r.findIndex((i) => $e(i, t));
    return s >= 0 ? r.splice(s, 1) : r.push(t), r;
  }
  return $e(e, t) ? n : t;
}
function da(e, t = 0) {
  let n = null, r = [];
  return function(...s) {
    return n && window.clearTimeout(n), n = window.setTimeout(() => {
      const i = e(...s);
      r.forEach((a) => a(i)), r = [];
    }, t), new Promise((i) => r.push(i));
  };
}
function Kf(e, t) {
  return tn(t) && t.number ? xf(e) : e;
}
function As(e, t) {
  let n;
  return async function(...s) {
    const i = e(...s);
    n = i;
    const a = await i;
    return i !== n || (n = void 0, t(a, s)), a;
  };
}
function Yf({ get: e, set: t }) {
  const n = me(ve(e()));
  return Re(e, (r) => {
    $e(r, n.value) || (n.value = ve(r));
  }, {
    deep: !0
  }), Re(n, (r) => {
    $e(r, e()) || t(ve(r));
  }, {
    deep: !0
  }), n;
}
const Rr = (e, t, n) => t.slots.default ? typeof e == "string" || !e ? t.slots.default(n()) : {
  default: () => {
    var r, s;
    return (s = (r = t.slots).default) === null || s === void 0 ? void 0 : s.call(r, n());
  }
} : t.slots.default;
function Xr(e) {
  if (Oo(e))
    return e._value;
}
function Oo(e) {
  return "_value" in e;
}
function pi(e) {
  if (!mi(e))
    return e;
  const t = e.target;
  if (vn(t.type) && Oo(t))
    return Xr(t);
  if (t.type === "file" && t.files) {
    const n = Array.from(t.files);
    return t.multiple ? n : n[0];
  }
  if (Wf(t))
    return Array.from(t.options).filter((n) => n.selected && !n.disabled).map(Xr);
  if (yo(t)) {
    const n = Array.from(t.options).find((r) => r.selected);
    return n ? Xr(n) : t.value;
  }
  return t.value;
}
function To(e) {
  const t = {};
  return Object.defineProperty(t, "_$$isNormalized", {
    value: !0,
    writable: !1,
    enumerable: !1,
    configurable: !1
  }), e ? tn(e) && e._$$isNormalized ? e : tn(e) ? Object.keys(e).reduce((n, r) => {
    const s = Gf(e[r]);
    return e[r] !== !1 && (n[r] = ma(s)), n;
  }, t) : typeof e != "string" ? t : e.split("|").reduce((n, r) => {
    const s = Xf(r);
    return s.name && (n[s.name] = ma(s.params)), n;
  }, t) : t;
}
function Gf(e) {
  return e === !0 ? [] : Array.isArray(e) || tn(e) ? e : [e];
}
function ma(e) {
  const t = (n) => typeof n == "string" && n[0] === "@" ? Jf(n.slice(1)) : n;
  return Array.isArray(e) ? e.map(t) : e instanceof RegExp ? [e] : Object.keys(e).reduce((n, r) => (n[r] = t(e[r]), n), {});
}
const Xf = (e) => {
  let t = [];
  const n = e.split(":")[0];
  return e.includes(":") && (t = e.split(":").slice(1).join(":").split(",")), { name: n, params: t };
};
function Jf(e) {
  const t = (n) => Ae(n, e) || n[e];
  return t.__locatorRef = e, t;
}
function zf(e) {
  return Array.isArray(e) ? e.filter(Ts) : We(e).filter((t) => Ts(e[t])).map((t) => e[t]);
}
const Qf = {
  generateMessage: ({ field: e }) => `${e} is not valid.`,
  bails: !0,
  validateOnBlur: !0,
  validateOnChange: !0,
  validateOnInput: !1,
  validateOnModelUpdate: !0
};
let Ls = Object.assign({}, Qf);
const _i = () => Ls, Zf = (e) => {
  Ls = Object.assign(Object.assign({}, Ls), e);
}, ed = Zf;
async function Io(e, t, n = {}) {
  const r = n == null ? void 0 : n.bails, s = {
    name: (n == null ? void 0 : n.name) || "{field}",
    rules: t,
    bails: r != null ? r : !0,
    formData: (n == null ? void 0 : n.values) || {}
  }, a = (await td(s, e)).errors;
  return {
    errors: a,
    valid: !a.length
  };
}
async function td(e, t) {
  if (xn(e.rules))
    return nd(t, e.rules, { bails: e.bails });
  if (en(e.rules) || Array.isArray(e.rules)) {
    const a = {
      field: e.name,
      form: e.formData,
      value: t
    }, l = Array.isArray(e.rules) ? e.rules : [e.rules], o = l.length, f = [];
    for (let m = 0; m < o; m++) {
      const h = l[m], d = await h(t, a);
      if (typeof d != "string" && d)
        continue;
      const F = typeof d == "string" ? d : Ao(a);
      if (f.push(F), e.bails)
        return {
          errors: f
        };
    }
    return {
      errors: f
    };
  }
  const n = Object.assign(Object.assign({}, e), { rules: To(e.rules) }), r = [], s = Object.keys(n.rules), i = s.length;
  for (let a = 0; a < i; a++) {
    const l = s[a], o = await rd(n, t, {
      name: l,
      params: n.rules[l]
    });
    if (o.error && (r.push(o.error), e.bails))
      return {
        errors: r
      };
  }
  return {
    errors: r
  };
}
async function nd(e, t, n) {
  var r;
  return {
    errors: await t.validate(e, {
      abortEarly: (r = n.bails) !== null && r !== void 0 ? r : !0
    }).then(() => []).catch((i) => {
      if (i.name === "ValidationError")
        return i.errors;
      throw i;
    })
  };
}
async function rd(e, t, n) {
  const r = $f(n.name);
  if (!r)
    throw new Error(`No such validator '${n.name}' exists.`);
  const s = sd(n.params, e.formData), i = {
    field: e.name,
    value: t,
    form: e.formData,
    rule: Object.assign(Object.assign({}, n), { params: s })
  }, a = await r(t, s, i);
  return typeof a == "string" ? {
    error: a
  } : {
    error: a ? void 0 : Ao(i)
  };
}
function Ao(e) {
  const t = _i().generateMessage;
  return t ? t(e) : "Field is invalid";
}
function sd(e, t) {
  const n = (r) => Ts(r) ? r(t) : r;
  return Array.isArray(e) ? e.map(n) : Object.keys(e).reduce((r, s) => (r[s] = n(e[s]), r), {});
}
async function id(e, t) {
  const n = await e.validate(t, { abortEarly: !1 }).then(() => []).catch((i) => {
    if (i.name !== "ValidationError")
      throw i;
    return i.inner || [];
  }), r = {}, s = {};
  for (const i of n) {
    const a = i.errors;
    r[i.path] = { valid: !a.length, errors: a }, a.length && (s[i.path] = a[0]);
  }
  return {
    valid: !n.length,
    results: r,
    errors: s
  };
}
async function ad(e, t, n) {
  const s = We(e).map(async (f) => {
    var m, h, d;
    const N = await Io(Ae(t, f), e[f], {
      name: ((m = n == null ? void 0 : n.names) === null || m === void 0 ? void 0 : m[f]) || f,
      values: t,
      bails: (d = (h = n == null ? void 0 : n.bailsMap) === null || h === void 0 ? void 0 : h[f]) !== null && d !== void 0 ? d : !0
    });
    return Object.assign(Object.assign({}, N), { path: f });
  });
  let i = !0;
  const a = await Promise.all(s), l = {}, o = {};
  for (const f of a)
    l[f.path] = {
      valid: f.valid,
      errors: f.errors
    }, f.valid || (i = !1, o[f.path] = f.errors[0]);
  return {
    valid: i,
    results: l,
    errors: o
  };
}
let ha = 0;
function ld(e, t) {
  const { value: n, initialValue: r, setInitialValue: s } = Lo(e, t.modelValue, t.form), { errorMessage: i, errors: a, setErrors: l } = ud(e, t.form), o = od(n, r, a), f = ha >= Number.MAX_SAFE_INTEGER ? 0 : ++ha;
  function m(h) {
    var d;
    "value" in h && (n.value = h.value), "errors" in h && l(h.errors), "touched" in h && (o.touched = (d = h.touched) !== null && d !== void 0 ? d : o.touched), "initialValue" in h && s(h.initialValue);
  }
  return {
    id: f,
    path: e,
    value: n,
    initialValue: r,
    meta: o,
    errors: a,
    errorMessage: i,
    setState: m
  };
}
function Lo(e, t, n) {
  const r = me(L(t));
  function s() {
    return n ? Ae(n.meta.value.initialValues, L(e), L(r)) : L(r);
  }
  function i(f) {
    if (!n) {
      r.value = f;
      return;
    }
    n.stageInitialValue(L(e), f, !0);
  }
  const a = ae(s);
  if (!n)
    return {
      value: me(s()),
      initialValue: a,
      setInitialValue: i
    };
  const l = t ? L(t) : Ae(n.values, L(e), L(a));
  return n.stageInitialValue(L(e), l, !0), {
    value: ae({
      get() {
        return Ae(n.values, L(e));
      },
      set(f) {
        n.setFieldValue(L(e), f);
      }
    }),
    initialValue: a,
    setInitialValue: i
  };
}
function od(e, t, n) {
  const r = In({
    touched: !1,
    pending: !1,
    valid: !0,
    validated: !!L(n).length,
    initialValue: ae(() => L(t)),
    dirty: ae(() => !$e(L(e), L(t)))
  });
  return Re(n, (s) => {
    r.valid = !s.length;
  }, {
    immediate: !0,
    flush: "sync"
  }), r;
}
function ud(e, t) {
  function n(s) {
    return s ? Array.isArray(s) ? s : [s] : [];
  }
  if (!t) {
    const s = me([]);
    return {
      errors: s,
      errorMessage: ae(() => s.value[0]),
      setErrors: (i) => {
        s.value = n(i);
      }
    };
  }
  const r = ae(() => t.errorBag.value[L(e)] || []);
  return {
    errors: r,
    errorMessage: ae(() => r.value[0]),
    setErrors: (s) => {
      t.setFieldErrorBag(L(e), n(s));
    }
  };
}
function Sr(e, t, n) {
  return vn(n == null ? void 0 : n.type) ? dd(e, t, n) : No(e, t, n);
}
function No(e, t, n) {
  const { initialValue: r, validateOnMount: s, bails: i, type: a, checkedValue: l, label: o, validateOnValueUpdate: f, uncheckedValue: m, controlled: h, keepValueOnUnmount: d, modelPropName: N, syncVModel: F, form: S } = cd(L(e), n), D = h ? Cr(Nn) : void 0, b = S || D;
  let C = !1;
  const { id: I, value: O, initialValue: y, meta: R, setState: k, errors: W, errorMessage: B } = ld(e, {
    modelValue: r,
    form: b
  });
  F && md({ value: O, prop: N, handleChange: J });
  const K = () => {
    R.touched = !0;
  }, Y = ae(() => {
    let V = L(t);
    const re = L(b == null ? void 0 : b.schema);
    return re && !xn(re) && (V = fd(re, L(e)) || V), xn(V) || en(V) || Array.isArray(V) ? V : To(V);
  });
  async function z(V) {
    var re, pe;
    return b != null && b.validateSchema ? (re = (await b.validateSchema(V)).results[L(e)]) !== null && re !== void 0 ? re : { valid: !0, errors: [] } : Io(O.value, Y.value, {
      name: L(o) || L(e),
      values: (pe = b == null ? void 0 : b.values) !== null && pe !== void 0 ? pe : {},
      bails: i
    });
  }
  const te = As(async () => (R.pending = !0, R.validated = !0, z("validated-only")), (V) => (C && (V.valid = !0, V.errors = []), k({ errors: V.errors }), R.pending = !1, V)), de = As(async () => z("silent"), (V) => (C && (V.valid = !0), R.valid = V.valid, V));
  function Te(V) {
    return (V == null ? void 0 : V.mode) === "silent" ? de() : te();
  }
  function J(V, re = !0) {
    const pe = pi(V);
    O.value = pe, !f && re && te();
  }
  Ln(() => {
    if (s)
      return te();
    (!b || !b.validateSchema) && de();
  });
  function X(V) {
    R.touched = V;
  }
  let ne, Ne = ve(O.value);
  function we() {
    ne = Re(O, (V, re) => {
      if ($e(V, re) && $e(V, Ne))
        return;
      (f ? te : de)(), Ne = ve(V);
    }, {
      deep: !0
    });
  }
  we();
  function Ie(V) {
    var re;
    ne == null || ne();
    const pe = V && "value" in V ? V.value : y.value;
    k({
      value: ve(pe),
      initialValue: ve(pe),
      touched: (re = V == null ? void 0 : V.touched) !== null && re !== void 0 ? re : !1,
      errors: (V == null ? void 0 : V.errors) || []
    }), R.pending = !1, R.validated = !1, de(), Xt(() => {
      we();
    });
  }
  function ye(V) {
    O.value = V;
  }
  function rt(V) {
    k({ errors: Array.isArray(V) ? V : [V] });
  }
  const je = {
    id: I,
    name: e,
    label: o,
    value: O,
    meta: R,
    errors: W,
    errorMessage: B,
    type: a,
    checkedValue: l,
    uncheckedValue: m,
    bails: i,
    keepValueOnUnmount: d,
    resetField: Ie,
    handleReset: () => Ie(),
    validate: Te,
    handleChange: J,
    handleBlur: K,
    setState: k,
    setTouched: X,
    setErrors: rt,
    setValue: ye
  };
  if (Ir(Uf, je), Oe(t) && typeof L(t) != "function" && Re(t, (V, re) => {
    $e(V, re) || (R.validated ? te() : de());
  }, {
    deep: !0
  }), !b)
    return je;
  b.register(je), si(() => {
    C = !0, b.unregister(je);
  });
  const ct = ae(() => {
    const V = Y.value;
    return !V || en(V) || xn(V) || Array.isArray(V) ? {} : Object.keys(V).reduce((re, pe) => {
      const Fe = zf(V[pe]).map((Ce) => Ce.__locatorRef).reduce((Ce, He) => {
        const _ = Ae(b.values, He) || b.values[He];
        return _ !== void 0 && (Ce[He] = _), Ce;
      }, {});
      return Object.assign(re, Fe), re;
    }, {});
  });
  return Re(ct, (V, re) => {
    if (!Object.keys(V).length)
      return;
    !$e(V, re) && (R.validated ? te() : de());
  }), je;
}
function cd(e, t) {
  const n = () => ({
    initialValue: void 0,
    validateOnMount: !1,
    bails: !0,
    label: e,
    validateOnValueUpdate: !0,
    keepValueOnUnmount: void 0,
    modelPropName: "modelValue",
    syncVModel: !0,
    controlled: !0
  });
  if (!t)
    return n();
  const r = "valueProp" in t ? t.valueProp : t.checkedValue, s = "standalone" in t ? !t.standalone : t.controlled;
  return Object.assign(Object.assign(Object.assign({}, n()), t || {}), { controlled: s != null ? s : !0, checkedValue: r });
}
function fd(e, t) {
  if (!!e)
    return e[t];
}
function dd(e, t, n) {
  const r = n != null && n.standalone ? void 0 : Cr(Nn), s = n == null ? void 0 : n.checkedValue, i = n == null ? void 0 : n.uncheckedValue;
  function a(l) {
    const o = l.handleChange, f = ae(() => {
      const h = L(l.value), d = L(s);
      return Array.isArray(h) ? h.findIndex((N) => $e(N, d)) >= 0 : $e(d, h);
    });
    function m(h, d = !0) {
      var N;
      if (f.value === ((N = h == null ? void 0 : h.target) === null || N === void 0 ? void 0 : N.checked)) {
        d && l.validate();
        return;
      }
      let F = pi(h);
      r || (F = Is(L(l.value), L(s), L(i))), o(F, d);
    }
    return Object.assign(Object.assign({}, l), {
      checked: f,
      checkedValue: s,
      uncheckedValue: i,
      handleChange: m
    });
  }
  return a(No(e, t, n));
}
function md({ prop: e, value: t, handleChange: n }) {
  const r = Zt();
  if (!r)
    return;
  const s = e || "modelValue", i = `update:${s}`;
  s in r.props && (Re(t, (a) => {
    $e(a, pa(r, s)) || r.emit(i, a);
  }), Re(() => pa(r, s), (a) => {
    if (a === pr && t.value === void 0)
      return;
    const l = a === pr ? void 0 : a;
    $e(l, Kf(t.value, r.props.modelModifiers)) || n(l);
  }));
}
function pa(e, t) {
  return e.props[t];
}
An({
  name: "Field",
  inheritAttrs: !1,
  props: {
    as: {
      type: [String, Object],
      default: void 0
    },
    name: {
      type: String,
      required: !0
    },
    rules: {
      type: [Object, String, Function],
      default: void 0
    },
    validateOnMount: {
      type: Boolean,
      default: !1
    },
    validateOnBlur: {
      type: Boolean,
      default: void 0
    },
    validateOnChange: {
      type: Boolean,
      default: void 0
    },
    validateOnInput: {
      type: Boolean,
      default: void 0
    },
    validateOnModelUpdate: {
      type: Boolean,
      default: void 0
    },
    bails: {
      type: Boolean,
      default: () => _i().bails
    },
    label: {
      type: String,
      default: void 0
    },
    uncheckedValue: {
      type: null,
      default: void 0
    },
    modelValue: {
      type: null,
      default: pr
    },
    modelModifiers: {
      type: null,
      default: () => ({})
    },
    "onUpdate:modelValue": {
      type: null,
      default: void 0
    },
    standalone: {
      type: Boolean,
      default: !1
    },
    keepValue: {
      type: Boolean,
      default: void 0
    }
  },
  setup(e, t) {
    const n = It(e, "rules"), r = It(e, "name"), s = It(e, "label"), i = It(e, "uncheckedValue"), a = It(e, "keepValue"), { errors: l, value: o, errorMessage: f, validate: m, handleChange: h, handleBlur: d, setTouched: N, resetField: F, handleReset: S, meta: D, checked: b, setErrors: C } = Sr(r, n, {
      validateOnMount: e.validateOnMount,
      bails: e.bails,
      standalone: e.standalone,
      type: t.attrs.type,
      initialValue: pd(e, t),
      checkedValue: t.attrs.value,
      uncheckedValue: i,
      label: s,
      validateOnValueUpdate: !1,
      keepValueOnUnmount: a
    }), I = function(B, K = !0) {
      h(B, K), t.emit("update:modelValue", o.value);
    }, O = (W) => {
      vn(t.attrs.type) || (o.value = pi(W));
    }, y = function(B) {
      O(B), t.emit("update:modelValue", o.value);
    }, R = ae(() => {
      const { validateOnInput: W, validateOnChange: B, validateOnBlur: K, validateOnModelUpdate: Y } = hd(e), z = [d, t.attrs.onBlur, K ? m : void 0].filter(Boolean), te = [(X) => I(X, W), t.attrs.onInput].filter(Boolean), de = [(X) => I(X, B), t.attrs.onChange].filter(Boolean), Te = {
        name: e.name,
        onBlur: z,
        onInput: te,
        onChange: de
      };
      Te["onUpdate:modelValue"] = (X) => I(X, Y), vn(t.attrs.type) && b && (Te.checked = b.value);
      const J = _a(e, t);
      return qf(J, t.attrs) && (Te.value = o.value), Te;
    });
    function k() {
      return {
        field: R.value,
        value: o.value,
        meta: D,
        errors: l.value,
        errorMessage: f.value,
        validate: m,
        resetField: F,
        handleChange: I,
        handleInput: y,
        handleReset: S,
        handleBlur: d,
        setTouched: N,
        setErrors: C
      };
    }
    return t.expose({
      setErrors: C,
      setTouched: N,
      reset: F,
      validate: m,
      handleChange: h
    }), () => {
      const W = ai(_a(e, t)), B = Rr(W, t, k);
      return W ? gn(W, Object.assign(Object.assign({}, t.attrs), R.value), B) : B;
    };
  }
});
function _a(e, t) {
  let n = e.as || "";
  return !e.as && !t.slots.default && (n = "input"), n;
}
function hd(e) {
  var t, n, r, s;
  const { validateOnInput: i, validateOnChange: a, validateOnBlur: l, validateOnModelUpdate: o } = _i();
  return {
    validateOnInput: (t = e.validateOnInput) !== null && t !== void 0 ? t : i,
    validateOnChange: (n = e.validateOnChange) !== null && n !== void 0 ? n : a,
    validateOnBlur: (r = e.validateOnBlur) !== null && r !== void 0 ? r : l,
    validateOnModelUpdate: (s = e.validateOnModelUpdate) !== null && s !== void 0 ? s : o
  };
}
function pd(e, t) {
  return vn(t.attrs.type) ? ua(e, "modelValue") ? e.modelValue : void 0 : ua(e, "modelValue") ? e.modelValue : t.attrs.value;
}
let _d = 0;
function gi(e) {
  var t;
  const n = _d++, r = /* @__PURE__ */ new Set();
  let s = !1;
  const i = me({}), a = me(!1), l = me(0), o = [], f = In(ve(L(e == null ? void 0 : e.initialValues) || {})), { errorBag: m, setErrorBag: h, setFieldErrorBag: d } = bd(e == null ? void 0 : e.initialErrors), N = ae(() => We(m.value).reduce((v, E) => {
    const g = m.value[E];
    return g && g.length && (v[E] = g[0]), v;
  }, {}));
  function F(v) {
    const E = i.value[v];
    return Array.isArray(E) ? E[0] : E;
  }
  function S(v) {
    return !!i.value[v];
  }
  const D = ae(() => We(i.value).reduce((v, E) => {
    const g = F(E);
    return g && (v[E] = L(g.label || g.name) || ""), v;
  }, {})), b = ae(() => We(i.value).reduce((v, E) => {
    var g;
    const T = F(E);
    return T && (v[E] = (g = T.bails) !== null && g !== void 0 ? g : !0), v;
  }, {})), C = Object.assign({}, (e == null ? void 0 : e.initialErrors) || {}), I = (t = e == null ? void 0 : e.keepValuesOnUnmount) !== null && t !== void 0 ? t : !1, { initialValues: O, originalInitialValues: y, setInitialValues: R } = vd(i, f, e == null ? void 0 : e.initialValues), k = gd(i, f, y, N), W = ae(() => [...r, ...We(i.value)].reduce((v, E) => {
    const g = Ae(f, E);
    return kt(v, E, g), v;
  }, {})), B = e == null ? void 0 : e.validationSchema, K = da(P, 5), Y = da(P, 5), z = As(async (v) => await v === "silent" ? K() : Y(), (v, [E]) => {
    const g = J.fieldsByPath.value || {}, T = We(J.errorBag.value);
    return [
      .../* @__PURE__ */ new Set([...We(v.results), ...We(g), ...T])
    ].reduce((x, H) => {
      const G = g[H], Q = (v.results[H] || { errors: [] }).errors, oe = {
        errors: Q,
        valid: !Q.length
      };
      if (x.results[H] = oe, oe.valid || (x.errors[H] = oe.errors[0]), !G)
        return we(H, Q), x;
      if (ne(G, (ot) => ot.meta.valid = oe.valid), E === "silent")
        return x;
      const Ze = Array.isArray(G) ? G.some((ot) => ot.meta.validated) : G.meta.validated;
      return E === "validated-only" && !Ze || ne(G, (ot) => ot.setState({ errors: oe.errors })), x;
    }, { valid: v.valid, results: {}, errors: {} });
  });
  function te(v) {
    return function(g, T) {
      return function(x) {
        return x instanceof Event && (x.preventDefault(), x.stopPropagation()), re(We(i.value).reduce((H, G) => (H[G] = !0, H), {})), a.value = !0, l.value++, u().then((H) => {
          const G = ve(f);
          if (H.valid && typeof g == "function") {
            const Q = ve(W.value);
            return g(v ? Q : G, {
              evt: x,
              controlledValues: Q,
              setErrors: Ie,
              setFieldError: we,
              setTouched: re,
              setFieldTouched: V,
              setValues: rt,
              setFieldValue: ye,
              resetForm: pe
            });
          }
          !H.valid && typeof T == "function" && T({
            values: G,
            evt: x,
            errors: H.errors,
            results: H.results
          });
        }).then((H) => (a.value = !1, H), (H) => {
          throw a.value = !1, H;
        });
      };
    };
  }
  const Te = te(!1);
  Te.withControlled = te(!0);
  const J = {
    formId: n,
    fieldsByPath: i,
    values: f,
    controlledValues: W,
    errorBag: m,
    errors: N,
    schema: B,
    submitCount: l,
    meta: k,
    isSubmitting: a,
    fieldArrays: o,
    keepValuesOnUnmount: I,
    validateSchema: L(B) ? z : void 0,
    validate: u,
    register: He,
    unregister: _,
    setFieldErrorBag: d,
    validateField: c,
    setFieldValue: ye,
    setValues: rt,
    setErrors: Ie,
    setFieldError: we,
    setFieldTouched: V,
    setTouched: re,
    resetForm: pe,
    handleSubmit: Te,
    stageInitialValue: A,
    unsetInitialValue: p,
    setFieldInitialValue: w,
    useFieldModel: ct
  };
  function X(v) {
    return Array.isArray(v);
  }
  function ne(v, E) {
    return Array.isArray(v) ? v.forEach(E) : E(v);
  }
  function Ne(v) {
    Object.values(i.value).forEach((E) => {
      !E || ne(E, v);
    });
  }
  function we(v, E) {
    d(v, E);
  }
  function Ie(v) {
    h(v);
  }
  function ye(v, E, { force: g } = { force: !1 }) {
    var T;
    const $ = i.value[v], x = ve(E);
    if (!$) {
      kt(f, v, x);
      return;
    }
    if (X($) && ((T = $[0]) === null || T === void 0 ? void 0 : T.type) === "checkbox" && !Array.isArray(E)) {
      const G = ve(Is(Ae(f, v) || [], E, void 0));
      kt(f, v, G);
      return;
    }
    let H = x;
    !X($) && $.type === "checkbox" && !g && !s && (H = ve(Is(Ae(f, v), E, L($.uncheckedValue)))), kt(f, v, H);
  }
  function rt(v) {
    We(f).forEach((E) => {
      delete f[E];
    }), We(v).forEach((E) => {
      ye(E, v[E]);
    }), o.forEach((E) => E && E.reset());
  }
  function je(v) {
    const { value: E } = Lo(v, void 0, J);
    return Re(E, () => {
      S(L(v)) || u({ mode: "validated-only" });
    }, {
      deep: !0
    }), r.add(L(v)), E;
  }
  function ct(v) {
    return Array.isArray(v) ? v.map(je) : je(v);
  }
  function V(v, E) {
    const g = i.value[v];
    g && ne(g, (T) => T.setTouched(E));
  }
  function re(v) {
    We(v).forEach((E) => {
      V(E, !!v[E]);
    });
  }
  function pe(v) {
    s = !0, Ne((g) => g.resetField());
    const E = v != null && v.values ? v.values : y.value;
    R(E), rt(E), v != null && v.touched && re(v.touched), Ie((v == null ? void 0 : v.errors) || {}), l.value = (v == null ? void 0 : v.submitCount) || 0, Xt(() => {
      s = !1;
    });
  }
  function Fe(v, E) {
    const g = Qs(v), T = E;
    if (!i.value[T]) {
      i.value[T] = g;
      return;
    }
    const $ = i.value[T];
    $ && !Array.isArray($) && (i.value[T] = [$]), i.value[T] = [...i.value[T], g];
  }
  function Ce(v, E) {
    const g = E, T = i.value[g];
    if (!!T) {
      if (!X(T) && v.id === T.id) {
        delete i.value[g];
        return;
      }
      if (X(T)) {
        const $ = T.findIndex((x) => x.id === v.id);
        if ($ === -1)
          return;
        T.splice($, 1), T.length || delete i.value[g];
      }
    }
  }
  function He(v) {
    const E = L(v.name);
    Fe(v, E), Oe(v.name) && Re(v.name, async (T, $) => {
      await Xt(), Ce(v, $), Fe(v, T), (N.value[$] || N.value[T]) && (we($, void 0), c(T)), await Xt(), S($) || rr(f, $);
    });
    const g = L(v.errorMessage);
    g && (C == null ? void 0 : C[E]) !== g && c(E), delete C[E];
  }
  function _(v) {
    const E = L(v.name), g = i.value[E], T = !!g && X(g);
    Ce(v, E), Xt(() => {
      var $;
      const x = ($ = L(v.keepValueOnUnmount)) !== null && $ !== void 0 ? $ : L(I), H = Ae(f, E);
      if (T && (g === i.value[E] || !i.value[E]) && !x)
        if (Array.isArray(H)) {
          const Q = H.findIndex((oe) => $e(oe, L(v.checkedValue)));
          if (Q > -1) {
            const oe = [...H];
            oe.splice(Q, 1), ye(E, oe, { force: !0 });
          }
        } else
          H === L(v.checkedValue) && rr(f, E);
      if (!S(E)) {
        if (we(E, void 0), x || T && Array.isArray(H) && !bo(H))
          return;
        rr(f, E);
      }
    });
  }
  async function u(v) {
    const E = (v == null ? void 0 : v.mode) || "force";
    if (E === "force" && Ne((x) => x.meta.validated = !0), J.validateSchema)
      return J.validateSchema(E);
    const g = await Promise.all(Object.values(i.value).map((x) => {
      const H = Array.isArray(x) ? x[0] : x;
      return H ? H.validate(v).then((G) => ({
        key: L(H.name),
        valid: G.valid,
        errors: G.errors
      })) : Promise.resolve({ key: "", valid: !0, errors: [] });
    })), T = {}, $ = {};
    for (const x of g)
      T[x.key] = {
        valid: x.valid,
        errors: x.errors
      }, x.errors.length && ($[x.key] = x.errors[0]);
    return {
      valid: g.every((x) => x.valid),
      results: T,
      errors: $
    };
  }
  async function c(v) {
    const E = i.value[v];
    return E ? Array.isArray(E) ? E.map((g) => g.validate())[0] : E.validate() : Promise.resolve({ errors: [], valid: !0 });
  }
  function p(v) {
    rr(O.value, v);
  }
  function A(v, E, g = !1) {
    kt(f, v, E), w(v, E), g && !(e != null && e.initialValues) && kt(y.value, v, ve(E));
  }
  function w(v, E) {
    kt(O.value, v, ve(E));
  }
  async function P() {
    const v = L(B);
    return v ? xn(v) ? await id(v, f) : await ad(v, f, {
      names: D.value,
      bailsMap: b.value
    }) : { valid: !0, results: {}, errors: {} };
  }
  const M = Te((v, { evt: E }) => {
    Eo(E) && E.target.submit();
  });
  return Ln(() => {
    if (e != null && e.initialErrors && Ie(e.initialErrors), e != null && e.initialTouched && re(e.initialTouched), e != null && e.validateOnMount) {
      u();
      return;
    }
    J.validateSchema && J.validateSchema("silent");
  }), Oe(B) && Re(B, () => {
    var v;
    (v = J.validateSchema) === null || v === void 0 || v.call(J, "validated-only");
  }), Ir(Nn, J), Object.assign(Object.assign({}, J), { handleReset: () => pe(), submitForm: M });
}
function gd(e, t, n, r) {
  const s = {
    touched: "some",
    pending: "some",
    valid: "every"
  }, i = ae(() => !$e(t, L(n)));
  function a() {
    const o = Object.values(e.value).flat(1).filter(Boolean);
    return We(s).reduce((f, m) => {
      const h = s[m];
      return f[m] = o[h]((d) => d.meta[m]), f;
    }, {});
  }
  const l = In(a());
  return Xl(() => {
    const o = a();
    l.touched = o.touched, l.valid = o.valid, l.pending = o.pending;
  }), ae(() => Object.assign(Object.assign({ initialValues: L(n) }, l), { valid: l.valid && !We(r.value).length, dirty: i.value }));
}
function vd(e, t, n) {
  const r = me(ve(L(n)) || {}), s = me(ve(L(n)) || {});
  function i(a, l = !1) {
    r.value = ve(a), s.value = ve(a), l && We(e.value).forEach((o) => {
      const f = e.value[o], m = Array.isArray(f) ? f.some((d) => d.meta.touched) : f == null ? void 0 : f.meta.touched;
      if (!f || m)
        return;
      const h = Ae(r.value, o);
      kt(t, o, ve(h));
    });
  }
  return Oe(n) && Re(n, (a) => {
    i(a, !0);
  }, {
    deep: !0
  }), {
    initialValues: r,
    originalInitialValues: s,
    setInitialValues: i
  };
}
function bd(e) {
  const t = me({});
  function n(i) {
    return Array.isArray(i) ? i : i ? [i] : [];
  }
  function r(i, a) {
    if (!a) {
      delete t.value[i];
      return;
    }
    t.value[i] = n(a);
  }
  function s(i) {
    t.value = We(i).reduce((a, l) => {
      const o = i[l];
      return o && (a[l] = n(o)), a;
    }, {});
  }
  return e && s(e), {
    errorBag: t,
    setErrorBag: s,
    setFieldErrorBag: r
  };
}
An({
  name: "Form",
  inheritAttrs: !1,
  props: {
    as: {
      type: String,
      default: "form"
    },
    validationSchema: {
      type: Object,
      default: void 0
    },
    initialValues: {
      type: Object,
      default: void 0
    },
    initialErrors: {
      type: Object,
      default: void 0
    },
    initialTouched: {
      type: Object,
      default: void 0
    },
    validateOnMount: {
      type: Boolean,
      default: !1
    },
    onSubmit: {
      type: Function,
      default: void 0
    },
    onInvalidSubmit: {
      type: Function,
      default: void 0
    },
    keepValues: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, t) {
    const n = It(e, "initialValues"), r = It(e, "validationSchema"), s = It(e, "keepValues"), { errors: i, values: a, meta: l, isSubmitting: o, submitCount: f, controlledValues: m, validate: h, validateField: d, handleReset: N, resetForm: F, handleSubmit: S, setErrors: D, setFieldError: b, setFieldValue: C, setValues: I, setFieldTouched: O, setTouched: y } = gi({
      validationSchema: r.value ? r : void 0,
      initialValues: n,
      initialErrors: e.initialErrors,
      initialTouched: e.initialTouched,
      validateOnMount: e.validateOnMount,
      keepValuesOnUnmount: s
    }), R = S((Y, { evt: z }) => {
      Eo(z) && z.target.submit();
    }, e.onInvalidSubmit), k = e.onSubmit ? S(e.onSubmit, e.onInvalidSubmit) : R;
    function W(Y) {
      mi(Y) && Y.preventDefault(), N(), typeof t.attrs.onReset == "function" && t.attrs.onReset();
    }
    function B(Y, z) {
      return S(typeof Y == "function" && !z ? Y : z, e.onInvalidSubmit)(Y);
    }
    function K() {
      return {
        meta: l.value,
        errors: i.value,
        values: a,
        isSubmitting: o.value,
        submitCount: f.value,
        controlledValues: m.value,
        validate: h,
        validateField: d,
        handleSubmit: B,
        handleReset: N,
        submitForm: R,
        setErrors: D,
        setFieldError: b,
        setFieldValue: C,
        setValues: I,
        setFieldTouched: O,
        setTouched: y,
        resetForm: F
      };
    }
    return t.expose({
      setFieldError: b,
      setErrors: D,
      setFieldValue: C,
      setValues: I,
      setFieldTouched: O,
      setTouched: y,
      resetForm: F,
      validate: h,
      validateField: d
    }), function() {
      const z = e.as === "form" ? e.as : ai(e.as), te = Rr(z, t, K);
      if (!e.as)
        return te;
      const de = e.as === "form" ? {
        novalidate: !0
      } : {};
      return gn(z, Object.assign(Object.assign(Object.assign({}, de), t.attrs), { onSubmit: k, onReset: W }), te);
    };
  }
});
function yd(e) {
  const t = Cr(Nn, void 0), n = me([]), r = () => {
  }, s = {
    fields: n,
    remove: r,
    push: r,
    swap: r,
    insert: r,
    update: r,
    replace: r,
    prepend: r,
    move: r
  };
  if (!t || !L(e))
    return s;
  const i = t.fieldArrays.find((I) => L(I.path) === L(e));
  if (i)
    return i;
  let a = 0;
  function l() {
    const I = Ae(t == null ? void 0 : t.values, L(e), []) || [];
    n.value = I.map(f), o();
  }
  l();
  function o() {
    const I = n.value.length;
    for (let O = 0; O < I; O++) {
      const y = n.value[O];
      y.isFirst = O === 0, y.isLast = O === I - 1;
    }
  }
  function f(I) {
    const O = a++;
    return {
      key: O,
      value: Yf({
        get() {
          const R = Ae(t == null ? void 0 : t.values, L(e), []) || [], k = n.value.findIndex((W) => W.key === O);
          return k === -1 ? I : R[k];
        },
        set(R) {
          const k = n.value.findIndex((W) => W.key === O);
          k !== -1 && S(k, R);
        }
      }),
      isFirst: !1,
      isLast: !1
    };
  }
  function m(I) {
    const O = L(e), y = Ae(t == null ? void 0 : t.values, O);
    if (!y || !Array.isArray(y))
      return;
    const R = [...y];
    R.splice(I, 1), t == null || t.unsetInitialValue(O + `[${I}]`), t == null || t.setFieldValue(O, R), n.value.splice(I, 1), o();
  }
  function h(I) {
    const O = L(e), y = Ae(t == null ? void 0 : t.values, O), R = Dn(y) ? [] : y;
    if (!Array.isArray(R))
      return;
    const k = [...R];
    k.push(I), t == null || t.stageInitialValue(O + `[${k.length - 1}]`, I), t == null || t.setFieldValue(O, k), n.value.push(f(I)), o();
  }
  function d(I, O) {
    const y = L(e), R = Ae(t == null ? void 0 : t.values, y);
    if (!Array.isArray(R) || !(I in R) || !(O in R))
      return;
    const k = [...R], W = [...n.value], B = k[I];
    k[I] = k[O], k[O] = B;
    const K = W[I];
    W[I] = W[O], W[O] = K, t == null || t.setFieldValue(y, k), n.value = W, o();
  }
  function N(I, O) {
    const y = L(e), R = Ae(t == null ? void 0 : t.values, y);
    if (!Array.isArray(R) || R.length < I)
      return;
    const k = [...R], W = [...n.value];
    k.splice(I, 0, O), W.splice(I, 0, f(O)), t == null || t.setFieldValue(y, k), n.value = W, o();
  }
  function F(I) {
    const O = L(e);
    t == null || t.setFieldValue(O, I), l();
  }
  function S(I, O) {
    const y = L(e), R = Ae(t == null ? void 0 : t.values, y);
    !Array.isArray(R) || R.length - 1 < I || (t == null || t.setFieldValue(`${y}[${I}]`, O), t == null || t.validate({ mode: "validated-only" }));
  }
  function D(I) {
    const O = L(e), y = Ae(t == null ? void 0 : t.values, O), R = Dn(y) ? [] : y;
    if (!Array.isArray(R))
      return;
    const k = [I, ...R];
    t == null || t.stageInitialValue(O + `[${k.length - 1}]`, I), t == null || t.setFieldValue(O, k), n.value.unshift(f(I)), o();
  }
  function b(I, O) {
    const y = L(e), R = Ae(t == null ? void 0 : t.values, y), k = Dn(R) ? [] : [...R];
    if (!Array.isArray(R) || !(I in R) || !(O in R))
      return;
    const W = [...n.value], B = W[I];
    W.splice(I, 1), W.splice(O, 0, B);
    const K = k[I];
    k.splice(I, 1), k.splice(O, 0, K), t == null || t.setFieldValue(y, k), n.value = W, o();
  }
  const C = {
    fields: n,
    remove: m,
    push: h,
    swap: d,
    insert: N,
    update: S,
    replace: F,
    prepend: D,
    move: b
  };
  return t.fieldArrays.push(Object.assign({ path: e, reset: l }, C)), si(() => {
    const I = t.fieldArrays.findIndex((O) => L(O.path) === L(e));
    I >= 0 && t.fieldArrays.splice(I, 1);
  }), C;
}
An({
  name: "FieldArray",
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      required: !0
    }
  },
  setup(e, t) {
    const { push: n, remove: r, swap: s, insert: i, replace: a, update: l, prepend: o, move: f, fields: m } = yd(It(e, "name"));
    function h() {
      return {
        fields: m.value,
        push: n,
        remove: r,
        swap: s,
        insert: i,
        update: l,
        replace: a,
        prepend: o,
        move: f
      };
    }
    return t.expose({
      push: n,
      remove: r,
      swap: s,
      insert: i,
      update: l,
      replace: a,
      prepend: o,
      move: f
    }), () => Rr(void 0, t, h);
  }
});
An({
  name: "ErrorMessage",
  props: {
    as: {
      type: String,
      default: void 0
    },
    name: {
      type: String,
      required: !0
    }
  },
  setup(e, t) {
    const n = zt(Nn, void 0), r = ae(() => n == null ? void 0 : n.errors.value[e.name]);
    function s() {
      return {
        message: r.value
      };
    }
    return () => {
      if (!r.value)
        return;
      const i = e.as ? ai(e.as) : e.as, a = Rr(i, t, s), l = Object.assign({ role: "alert" }, t.attrs);
      return !i && (Array.isArray(a) || !a) && (a == null ? void 0 : a.length) ? a : (Array.isArray(a) || !a) && !(a != null && a.length) ? gn(i || "span", l, r.value) : gn(i, l, a);
    };
  }
});
function Co() {
  const e = Cr(Nn);
  return ae(() => (e == null ? void 0 : e.values) || {});
}
const Ed = { class: "checkbox" }, Od = ["for"], Td = ["id", "name", "checked"], Ct = {
  __name: "CheckboxItem",
  props: {
    id: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      required: !0
    },
    isReset: {
      type: Boolean,
      default: !1
    },
    rules: {
      type: Object,
      default: void 0
    }
  },
  emits: ["resetCompleted", "hasError"],
  setup(e, { emit: t }) {
    const n = e, { name: r, isReset: s } = ei(n), { checked: i, handleChange: a, resetField: l } = Sr(r, n.rules, {
      type: "checkbox",
      checkedValue: n.value
    });
    Re(s, () => {
      o();
    }), Ln(() => {
      o();
    });
    const o = () => {
      s.value && (l(), t("resetCompleted"));
    };
    return (f, m) => (De(), Ke("div", Ed, [
      U("label", { for: e.id }, [
        U("input", {
          id: e.id,
          name: L(r),
          type: "checkbox",
          checked: L(i),
          onChange: m[0] || (m[0] = (h) => L(a)(e.value))
        }, null, 40, Td),
        Yn(f.$slots, "default")
      ], 8, Od)
    ]));
  }
}, wr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, Id = {
  name: "ErrorSummary"
}, Ad = {
  class: "alert alert-danger",
  tabindex: "-1"
};
function Ld(e, t, n, r, s, i) {
  return De(), Ke("section", Ad, [
    U("h4", null, [
      Yn(e.$slots, "default")
    ])
  ]);
}
const Ro = /* @__PURE__ */ wr(Id, [["render", Ld]]), Nd = { class: "radio" }, Cd = ["for"], Rd = ["id", "name", "value"], ga = {
  __name: "RadioItem",
  props: {
    id: {
      type: String,
      required: !0
    },
    value: {
      type: Number,
      required: !0
    },
    name: {
      type: String,
      required: !0
    },
    rules: {
      type: Object,
      default: void 0
    }
  },
  setup(e) {
    const t = e, { name: n } = ei(t), { handleChange: r } = Sr(n, t.rules, {
      type: "radio"
    });
    return (s, i) => (De(), Ke("div", Nd, [
      U("label", { for: e.id }, [
        U("input", {
          id: e.id,
          name: L(n),
          type: "radio",
          onChange: i[0] || (i[0] = (a) => L(r)(e.value)),
          value: e.value
        }, null, 40, Rd),
        Yn(s.$slots, "default")
      ], 8, Cd)
    ]));
  }
}, Sd = ["for"], wd = ["id", "name", "cols", "rows", "value", "maxLength"], Ns = {
  __name: "TextareaInput",
  props: {
    id: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    cols: {
      type: Number,
      default: 20
    },
    rows: {
      type: Number,
      default: 2
    },
    value: {
      type: String,
      default: ""
    },
    maxLength: {
      type: Number,
      default: 750
    },
    isReset: {
      type: Boolean,
      default: !1
    },
    rules: {
      type: Object,
      default: void 0
    }
  },
  emits: ["resetCompleted"],
  setup(e, { emit: t }) {
    const n = e, { name: r, isReset: s } = ei(n), { value: i, handleChange: a, resetField: l } = Sr(r, n.rules);
    Re(s, () => {
      o();
    }), Ln(() => {
      o();
    });
    const o = () => {
      s.value && (l(), t("resetCompleted"));
    };
    return (f, m) => (De(), Ke("div", null, [
      U("label", { for: e.id }, [
        Yn(f.$slots, "default")
      ], 8, Sd),
      U("textarea", {
        id: e.id,
        name: L(r),
        cols: e.cols,
        rows: e.rows,
        value: L(i),
        maxLength: e.maxLength,
        class: "form-control",
        onInput: m[0] || (m[0] = (...h) => L(a) && L(a)(...h))
      }, null, 40, wd)
    ]));
  }
}, Qe = {
  BROKEN_LINKS: "brokenLinks",
  INFO_OUTDATED: "infoOutdated",
  INFO_HARD_TO_UNDERSTAND: "infoHardToUnderstand",
  INFO_WRONG: "infoWrong",
  INFO_NOT_FOUND: "infoNotFound",
  SPELLING_OR_GRAMMAR_MISTAKES: "spellingOrGrammarMistakes",
  OTHER: "other"
}, an = {
  NOT_ANSWERED: 0,
  YES: 1,
  NO: 2
};
/**
  * vee-validate v4.7.3
  * (c) 2022 Abdelrahman Awad
  * @license MIT
  */
function va(e) {
  return typeof e == "function";
}
const Fd = (e) => e !== null && !!e && typeof e == "object" && !Array.isArray(e);
function ba(e, t) {
  return e.replace(/(\d:)?{([^}]+)}/g, function(n, r, s) {
    if (!r || !t.params)
      return s in t ? t[s] : t.params && s in t.params ? t.params[s] : `{${s}}`;
    if (!Array.isArray(t.params))
      return s in t.params ? t.params[s] : `{${s}}`;
    const i = Number(r.replace(":", ""));
    return i in t.params ? t.params[i] : `${r}{${s}}`;
  });
}
function So(e, t) {
  return Object.keys(t).forEach((n) => {
    if (Fd(t[n])) {
      e[n] || (e[n] = {}), So(e[n], t[n]);
      return;
    }
    e[n] = t[n];
  }), e;
}
class kd {
  constructor(t, n) {
    this.container = {}, this.locale = t, this.merge(n);
  }
  resolve(t) {
    return this.format(this.locale, t);
  }
  getLocaleDefault(t, n) {
    var r, s, i, a, l;
    return ((i = (s = (r = this.container[t]) === null || r === void 0 ? void 0 : r.fields) === null || s === void 0 ? void 0 : s[n]) === null || i === void 0 ? void 0 : i._default) || ((l = (a = this.container[t]) === null || a === void 0 ? void 0 : a.messages) === null || l === void 0 ? void 0 : l._default);
  }
  format(t, n) {
    var r, s, i, a, l, o, f, m;
    let h;
    const { field: d, rule: N, form: F } = n, S = (i = (s = (r = this.container[t]) === null || r === void 0 ? void 0 : r.names) === null || s === void 0 ? void 0 : s[d]) !== null && i !== void 0 ? i : d;
    return N ? (h = ((o = (l = (a = this.container[t]) === null || a === void 0 ? void 0 : a.fields) === null || l === void 0 ? void 0 : l[d]) === null || o === void 0 ? void 0 : o[N.name]) || ((m = (f = this.container[t]) === null || f === void 0 ? void 0 : f.messages) === null || m === void 0 ? void 0 : m[N.name]), h || (h = this.getLocaleDefault(t, d) || `${S} is not valid`), va(h) ? h(n) : ba(h, Object.assign(Object.assign({}, F), { field: S, params: N.params }))) : (h = this.getLocaleDefault(t, d) || `${S} is not valid`, va(h) ? h(n) : ba(h, Object.assign(Object.assign({}, F), { field: S })));
  }
  merge(t) {
    So(this.container, t);
  }
}
let Kt;
function ya(e, t) {
  Kt || (Kt = new kd("en", {}));
  const n = (r) => Kt.resolve(r);
  return typeof e == "string" ? (Kt.locale = e, t && Kt.merge({ [e]: t }), n) : (Kt.merge(e), n);
}
function wo(e) {
  Kt.locale = e;
}
/**
  * vee-validate v4.7.3
  * (c) 2022 Abdelrahman Awad
  * @license MIT
  */
function Pd(e, t) {
  return Array.isArray(e) ? e[0] : e[t];
}
function Fo(e) {
  return !!(e == null || e === "" || Array.isArray(e) && e.length === 0);
}
function Md(e) {
  return e == null;
}
function Dd(e) {
  return Array.isArray(e) && e.length === 0;
}
const ko = (e, t) => {
  if (Fo(e))
    return !0;
  const n = Pd(t, "length");
  return Array.isArray(e) ? e.every((r) => ko(r, { length: n })) : String(e).length <= Number(n);
}, Po = (e, t) => Fo(e) ? !0 : Array.isArray(e) ? e.every((n) => Po(n, t)) : Array.from(t).some((n) => n == e), xd = (e) => Md(e) || Dd(e) || e === !1 ? !1 : !!String(e).trim().length, $d = {
  fields: {
    reasons: {
      required: "You must select at least one reason."
    }
  },
  messages: {
    required: "This field is required",
    max: "The value of the field may not be greater than 0:{max} characters",
    one_of: "You must select an option"
  }
}, Vd = {
  fields: {
    reasons: {
      required: "Vous devez s\xE9lectionner au moins une raison."
    }
  },
  messages: {
    required: "Ce champ est obligatoire",
    max: "La valeur du champ ne peut pas d\xE9passer 0:{max} caract\xE8res",
    one_of: "Vous devez s\xE9lectionner une option"
  }
}, Ud = {
  en: $d,
  fr: Vd
}, jd = "fr", Hd = {
  _default: "Le champ {field} est invalide",
  alpha: "Le champ {field} ne peut contenir que des lettres",
  alpha_num: "Le champ {field} ne peut contenir que des caract\xE8res alpha-num\xE9riques",
  alpha_dash: "Le champ {field} ne peut contenir que des caract\xE8res alpha-num\xE9riques, tirets ou soulign\xE9s",
  alpha_spaces: "Le champ {field} ne peut contenir que des lettres ou des espaces",
  between: "Le champ {field} doit \xEAtre compris entre 0:{min} et 1:{max}",
  confirmed: "Le champ {field} ne correspond pas",
  digits: "Le champ {field} doit \xEAtre un nombre entier de 0:{length} chiffres",
  dimensions: "Le champ {field} doit avoir une taille de 0:{width} pixels par 1:{height} pixels",
  email: "Le champ {field} doit \xEAtre une adresse e-mail valide",
  not_one_of: "Le champ {field} doit \xEAtre une valeur valide",
  ext: "Le champ {field} doit \xEAtre un fichier valide",
  image: "Le champ {field} doit \xEAtre une image",
  integer: "Le champ {field} doit \xEAtre un entier",
  length: "Le champ {field} doit contenir 0:{length} caract\xE8res",
  max_value: "Le champ {field} doit avoir une valeur de 0:{max} ou moins",
  max: "Le champ {field} ne peut pas contenir plus de 0:{length} caract\xE8res",
  mimes: "Le champ {field} doit avoir un type MIME valide",
  min_value: "Le champ {field} doit avoir une valeur de 0:{min} ou plus",
  min: "Le champ {field} doit contenir au minimum 0:{length} caract\xE8res",
  numeric: "Le champ {field} ne peut contenir que des chiffres",
  one_of: "Le champ {field} doit \xEAtre une valeur valide",
  regex: "Le champ {field} est invalide",
  required: "Le champ {field} est obligatoire",
  required_if: "Le champ {field} est obligatoire lorsque {target} poss\xE8de cette valeur",
  size: "Le champ {field} doit avoir un poids inf\xE9rieur \xE0 0:{size}KB"
}, Wd = {
  code: jd,
  messages: Hd
}, Bd = "en", qd = {
  _default: "The {field} is not valid",
  alpha: "The {field} field may only contain alphabetic characters",
  alpha_num: "The {field} field may only contain alpha-numeric characters",
  alpha_dash: "The {field} field may contain alpha-numeric characters as well as dashes and underscores",
  alpha_spaces: "The {field} field may only contain alphabetic characters as well as spaces",
  between: "The {field} field must be between 0:{min} and 1:{max}",
  confirmed: "The {field} field confirmation does not match",
  digits: "The {field} field must be numeric and exactly contain 0:{length} digits",
  dimensions: "The {field} field must be 0:{width} pixels by 1:{height} pixels",
  email: "The {field} field must be a valid email",
  not_one_of: "The {field} field is not a valid value",
  ext: "The {field} field is not a valid file",
  image: "The {field} field must be an image",
  integer: "The {field} field must be an integer",
  length: "The {field} field must be 0:{length} long",
  max_value: "The {field} field must be 0:{max} or less",
  max: "The {field} field may not be greater than 0:{length} characters",
  mimes: "The {field} field must have a valid file type",
  min_value: "The {field} field must be 0:{min} or more",
  min: "The {field} field must be at least 0:{length} characters",
  numeric: "The {field} field may only contain numeric characters",
  one_of: "The {field} field is not a valid value",
  regex: "The {field} field format is invalid",
  required_if: "The {field} field is required",
  required: "The {field} field is required",
  size: "The {field} field size must be less than 0:{size}KB",
  url: "The {field} field is not a valid URL"
}, Kd = {
  code: Bd,
  messages: qd
}, Mo = () => {
  Yr("required", xd), Yr("max", ko), Yr("one_of", Po), ya({ en: Kd, fr: Wd }), ed({
    generateMessage: ya(Ud)
  });
};
function Yd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Do = { exports: {} }, vi = { exports: {} }, xo = function(t, n) {
  return function() {
    for (var s = new Array(arguments.length), i = 0; i < s.length; i++)
      s[i] = arguments[i];
    return t.apply(n, s);
  };
}, Gd = xo, bi = Object.prototype.toString, yi = function(e) {
  return function(t) {
    var n = bi.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function nn(e) {
  return e = e.toLowerCase(), function(n) {
    return yi(n) === e;
  };
}
function Ei(e) {
  return Array.isArray(e);
}
function _r(e) {
  return typeof e > "u";
}
function Xd(e) {
  return e !== null && !_r(e) && e.constructor !== null && !_r(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var $o = nn("ArrayBuffer");
function Jd(e) {
  var t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && $o(e.buffer), t;
}
function zd(e) {
  return typeof e == "string";
}
function Qd(e) {
  return typeof e == "number";
}
function Vo(e) {
  return e !== null && typeof e == "object";
}
function lr(e) {
  if (yi(e) !== "object")
    return !1;
  var t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
var Zd = nn("Date"), em = nn("File"), tm = nn("Blob"), nm = nn("FileList");
function Oi(e) {
  return bi.call(e) === "[object Function]";
}
function rm(e) {
  return Vo(e) && Oi(e.pipe);
}
function sm(e) {
  var t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || bi.call(e) === t || Oi(e.toString) && e.toString() === t);
}
var im = nn("URLSearchParams");
function am(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function lm() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function Ti(e, t) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), Ei(e))
      for (var n = 0, r = e.length; n < r; n++)
        t.call(null, e[n], n, e);
    else
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && t.call(null, e[s], s, e);
}
function Cs() {
  var e = {};
  function t(s, i) {
    lr(e[i]) && lr(s) ? e[i] = Cs(e[i], s) : lr(s) ? e[i] = Cs({}, s) : Ei(s) ? e[i] = s.slice() : e[i] = s;
  }
  for (var n = 0, r = arguments.length; n < r; n++)
    Ti(arguments[n], t);
  return e;
}
function om(e, t, n) {
  return Ti(t, function(s, i) {
    n && typeof s == "function" ? e[i] = Gd(s, n) : e[i] = s;
  }), e;
}
function um(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function cm(e, t, n, r) {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, n && Object.assign(e.prototype, n);
}
function fm(e, t, n) {
  var r, s, i, a = {};
  t = t || {};
  do {
    for (r = Object.getOwnPropertyNames(e), s = r.length; s-- > 0; )
      i = r[s], a[i] || (t[i] = e[i], a[i] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}
function dm(e, t, n) {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  var r = e.indexOf(t, n);
  return r !== -1 && r === n;
}
function mm(e) {
  if (!e)
    return null;
  var t = e.length;
  if (_r(t))
    return null;
  for (var n = new Array(t); t-- > 0; )
    n[t] = e[t];
  return n;
}
var hm = function(e) {
  return function(t) {
    return e && t instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), qe = {
  isArray: Ei,
  isArrayBuffer: $o,
  isBuffer: Xd,
  isFormData: sm,
  isArrayBufferView: Jd,
  isString: zd,
  isNumber: Qd,
  isObject: Vo,
  isPlainObject: lr,
  isUndefined: _r,
  isDate: Zd,
  isFile: em,
  isBlob: tm,
  isFunction: Oi,
  isStream: rm,
  isURLSearchParams: im,
  isStandardBrowserEnv: lm,
  forEach: Ti,
  merge: Cs,
  extend: om,
  trim: am,
  stripBOM: um,
  inherits: cm,
  toFlatObject: fm,
  kindOf: yi,
  kindOfTest: nn,
  endsWith: dm,
  toArray: mm,
  isTypedArray: hm,
  isFileList: nm
}, rn = qe;
function Ea(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Uo = function(t, n, r) {
  if (!n)
    return t;
  var s;
  if (r)
    s = r(n);
  else if (rn.isURLSearchParams(n))
    s = n.toString();
  else {
    var i = [];
    rn.forEach(n, function(o, f) {
      o === null || typeof o > "u" || (rn.isArray(o) ? f = f + "[]" : o = [o], rn.forEach(o, function(h) {
        rn.isDate(h) ? h = h.toISOString() : rn.isObject(h) && (h = JSON.stringify(h)), i.push(Ea(f) + "=" + Ea(h));
      }));
    }), s = i.join("&");
  }
  if (s) {
    var a = t.indexOf("#");
    a !== -1 && (t = t.slice(0, a)), t += (t.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return t;
}, pm = qe;
function Fr() {
  this.handlers = [];
}
Fr.prototype.use = function(t, n, r) {
  return this.handlers.push({
    fulfilled: t,
    rejected: n,
    synchronous: r ? r.synchronous : !1,
    runWhen: r ? r.runWhen : null
  }), this.handlers.length - 1;
};
Fr.prototype.eject = function(t) {
  this.handlers[t] && (this.handlers[t] = null);
};
Fr.prototype.forEach = function(t) {
  pm.forEach(this.handlers, function(r) {
    r !== null && t(r);
  });
};
var _m = Fr, gm = qe, vm = function(t, n) {
  gm.forEach(t, function(s, i) {
    i !== n && i.toUpperCase() === n.toUpperCase() && (t[n] = s, delete t[i]);
  });
}, jo = qe;
function bn(e, t, n, r, s) {
  Error.call(this), this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
jo.inherits(bn, Error, {
  toJSON: function() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var Ho = bn.prototype, Wo = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED"
].forEach(function(e) {
  Wo[e] = { value: e };
});
Object.defineProperties(bn, Wo);
Object.defineProperty(Ho, "isAxiosError", { value: !0 });
bn.from = function(e, t, n, r, s, i) {
  var a = Object.create(Ho);
  return jo.toFlatObject(e, a, function(o) {
    return o !== Error.prototype;
  }), bn.call(a, e.message, t, n, r, s), a.name = e.name, i && Object.assign(a, i), a;
};
var Cn = bn, Bo = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ft = qe;
function bm(e, t) {
  t = t || new FormData();
  var n = [];
  function r(i) {
    return i === null ? "" : ft.isDate(i) ? i.toISOString() : ft.isArrayBuffer(i) || ft.isTypedArray(i) ? typeof Blob == "function" ? new Blob([i]) : Buffer.from(i) : i;
  }
  function s(i, a) {
    if (ft.isPlainObject(i) || ft.isArray(i)) {
      if (n.indexOf(i) !== -1)
        throw Error("Circular reference detected in " + a);
      n.push(i), ft.forEach(i, function(o, f) {
        if (!ft.isUndefined(o)) {
          var m = a ? a + "." + f : f, h;
          if (o && !a && typeof o == "object") {
            if (ft.endsWith(f, "{}"))
              o = JSON.stringify(o);
            else if (ft.endsWith(f, "[]") && (h = ft.toArray(o))) {
              h.forEach(function(d) {
                !ft.isUndefined(d) && t.append(m, r(d));
              });
              return;
            }
          }
          s(o, m);
        }
      }), n.pop();
    } else
      t.append(a, r(i));
  }
  return s(e), t;
}
var qo = bm, Jr, Oa;
function ym() {
  if (Oa)
    return Jr;
  Oa = 1;
  var e = Cn;
  return Jr = function(n, r, s) {
    var i = s.config.validateStatus;
    !s.status || !i || i(s.status) ? n(s) : r(new e(
      "Request failed with status code " + s.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
      s.config,
      s.request,
      s
    ));
  }, Jr;
}
var zr, Ta;
function Em() {
  if (Ta)
    return zr;
  Ta = 1;
  var e = qe;
  return zr = e.isStandardBrowserEnv() ? function() {
    return {
      write: function(r, s, i, a, l, o) {
        var f = [];
        f.push(r + "=" + encodeURIComponent(s)), e.isNumber(i) && f.push("expires=" + new Date(i).toGMTString()), e.isString(a) && f.push("path=" + a), e.isString(l) && f.push("domain=" + l), o === !0 && f.push("secure"), document.cookie = f.join("; ");
      },
      read: function(r) {
        var s = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
        return s ? decodeURIComponent(s[3]) : null;
      },
      remove: function(r) {
        this.write(r, "", Date.now() - 864e5);
      }
    };
  }() : function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }(), zr;
}
var Om = function(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}, Tm = function(t, n) {
  return n ? t.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : t;
}, Im = Om, Am = Tm, Ko = function(t, n) {
  return t && !Im(n) ? Am(t, n) : n;
}, Qr, Ia;
function Lm() {
  if (Ia)
    return Qr;
  Ia = 1;
  var e = qe, t = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ];
  return Qr = function(r) {
    var s = {}, i, a, l;
    return r && e.forEach(r.split(`
`), function(f) {
      if (l = f.indexOf(":"), i = e.trim(f.substr(0, l)).toLowerCase(), a = e.trim(f.substr(l + 1)), i) {
        if (s[i] && t.indexOf(i) >= 0)
          return;
        i === "set-cookie" ? s[i] = (s[i] ? s[i] : []).concat([a]) : s[i] = s[i] ? s[i] + ", " + a : a;
      }
    }), s;
  }, Qr;
}
var Zr, Aa;
function Nm() {
  if (Aa)
    return Zr;
  Aa = 1;
  var e = qe;
  return Zr = e.isStandardBrowserEnv() ? function() {
    var n = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a"), s;
    function i(a) {
      var l = a;
      return n && (r.setAttribute("href", l), l = r.href), r.setAttribute("href", l), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return s = i(window.location.href), function(l) {
      var o = e.isString(l) ? i(l) : l;
      return o.protocol === s.protocol && o.host === s.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), Zr;
}
var es, La;
function kr() {
  if (La)
    return es;
  La = 1;
  var e = Cn, t = qe;
  function n(r) {
    e.call(this, r == null ? "canceled" : r, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return t.inherits(n, e, {
    __CANCEL__: !0
  }), es = n, es;
}
var ts, Na;
function Cm() {
  return Na || (Na = 1, ts = function(t) {
    var n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return n && n[1] || "";
  }), ts;
}
var ns, Ca;
function Ra() {
  if (Ca)
    return ns;
  Ca = 1;
  var e = qe, t = ym(), n = Em(), r = Uo, s = Ko, i = Lm(), a = Nm(), l = Bo, o = Cn, f = kr(), m = Cm();
  return ns = function(d) {
    return new Promise(function(F, S) {
      var D = d.data, b = d.headers, C = d.responseType, I;
      function O() {
        d.cancelToken && d.cancelToken.unsubscribe(I), d.signal && d.signal.removeEventListener("abort", I);
      }
      e.isFormData(D) && e.isStandardBrowserEnv() && delete b["Content-Type"];
      var y = new XMLHttpRequest();
      if (d.auth) {
        var R = d.auth.username || "", k = d.auth.password ? unescape(encodeURIComponent(d.auth.password)) : "";
        b.Authorization = "Basic " + btoa(R + ":" + k);
      }
      var W = s(d.baseURL, d.url);
      y.open(d.method.toUpperCase(), r(W, d.params, d.paramsSerializer), !0), y.timeout = d.timeout;
      function B() {
        if (!!y) {
          var z = "getAllResponseHeaders" in y ? i(y.getAllResponseHeaders()) : null, te = !C || C === "text" || C === "json" ? y.responseText : y.response, de = {
            data: te,
            status: y.status,
            statusText: y.statusText,
            headers: z,
            config: d,
            request: y
          };
          t(function(J) {
            F(J), O();
          }, function(J) {
            S(J), O();
          }, de), y = null;
        }
      }
      if ("onloadend" in y ? y.onloadend = B : y.onreadystatechange = function() {
        !y || y.readyState !== 4 || y.status === 0 && !(y.responseURL && y.responseURL.indexOf("file:") === 0) || setTimeout(B);
      }, y.onabort = function() {
        !y || (S(new o("Request aborted", o.ECONNABORTED, d, y)), y = null);
      }, y.onerror = function() {
        S(new o("Network Error", o.ERR_NETWORK, d, y, y)), y = null;
      }, y.ontimeout = function() {
        var te = d.timeout ? "timeout of " + d.timeout + "ms exceeded" : "timeout exceeded", de = d.transitional || l;
        d.timeoutErrorMessage && (te = d.timeoutErrorMessage), S(new o(
          te,
          de.clarifyTimeoutError ? o.ETIMEDOUT : o.ECONNABORTED,
          d,
          y
        )), y = null;
      }, e.isStandardBrowserEnv()) {
        var K = (d.withCredentials || a(W)) && d.xsrfCookieName ? n.read(d.xsrfCookieName) : void 0;
        K && (b[d.xsrfHeaderName] = K);
      }
      "setRequestHeader" in y && e.forEach(b, function(te, de) {
        typeof D > "u" && de.toLowerCase() === "content-type" ? delete b[de] : y.setRequestHeader(de, te);
      }), e.isUndefined(d.withCredentials) || (y.withCredentials = !!d.withCredentials), C && C !== "json" && (y.responseType = d.responseType), typeof d.onDownloadProgress == "function" && y.addEventListener("progress", d.onDownloadProgress), typeof d.onUploadProgress == "function" && y.upload && y.upload.addEventListener("progress", d.onUploadProgress), (d.cancelToken || d.signal) && (I = function(z) {
        !y || (S(!z || z && z.type ? new f() : z), y.abort(), y = null);
      }, d.cancelToken && d.cancelToken.subscribe(I), d.signal && (d.signal.aborted ? I() : d.signal.addEventListener("abort", I))), D || (D = null);
      var Y = m(W);
      if (Y && ["http", "https", "file"].indexOf(Y) === -1) {
        S(new o("Unsupported protocol " + Y + ":", o.ERR_BAD_REQUEST, d));
        return;
      }
      y.send(D);
    });
  }, ns;
}
var rs, Sa;
function Rm() {
  return Sa || (Sa = 1, rs = null), rs;
}
var Me = qe, wa = vm, Fa = Cn, Sm = Bo, wm = qo, Fm = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function ka(e, t) {
  !Me.isUndefined(e) && Me.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
}
function km() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = Ra()), e;
}
function Pm(e, t, n) {
  if (Me.isString(e))
    try {
      return (t || JSON.parse)(e), Me.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
var Pr = {
  transitional: Sm,
  adapter: km(),
  transformRequest: [function(t, n) {
    if (wa(n, "Accept"), wa(n, "Content-Type"), Me.isFormData(t) || Me.isArrayBuffer(t) || Me.isBuffer(t) || Me.isStream(t) || Me.isFile(t) || Me.isBlob(t))
      return t;
    if (Me.isArrayBufferView(t))
      return t.buffer;
    if (Me.isURLSearchParams(t))
      return ka(n, "application/x-www-form-urlencoded;charset=utf-8"), t.toString();
    var r = Me.isObject(t), s = n && n["Content-Type"], i;
    if ((i = Me.isFileList(t)) || r && s === "multipart/form-data") {
      var a = this.env && this.env.FormData;
      return wm(i ? { "files[]": t } : t, a && new a());
    } else if (r || s === "application/json")
      return ka(n, "application/json"), Pm(t);
    return t;
  }],
  transformResponse: [function(t) {
    var n = this.transitional || Pr.transitional, r = n && n.silentJSONParsing, s = n && n.forcedJSONParsing, i = !r && this.responseType === "json";
    if (i || s && Me.isString(t) && t.length)
      try {
        return JSON.parse(t);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? Fa.from(a, Fa.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    return t;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Rm()
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
Me.forEach(["delete", "get", "head"], function(t) {
  Pr.headers[t] = {};
});
Me.forEach(["post", "put", "patch"], function(t) {
  Pr.headers[t] = Me.merge(Fm);
});
var Ii = Pr, Mm = qe, Dm = Ii, xm = function(t, n, r) {
  var s = this || Dm;
  return Mm.forEach(r, function(a) {
    t = a.call(s, t, n);
  }), t;
}, ss, Pa;
function Yo() {
  return Pa || (Pa = 1, ss = function(t) {
    return !!(t && t.__CANCEL__);
  }), ss;
}
var Ma = qe, is = xm, $m = Yo(), Vm = Ii, Um = kr();
function as(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Um();
}
var jm = function(t) {
  as(t), t.headers = t.headers || {}, t.data = is.call(
    t,
    t.data,
    t.headers,
    t.transformRequest
  ), t.headers = Ma.merge(
    t.headers.common || {},
    t.headers[t.method] || {},
    t.headers
  ), Ma.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(s) {
      delete t.headers[s];
    }
  );
  var n = t.adapter || Vm.adapter;
  return n(t).then(function(s) {
    return as(t), s.data = is.call(
      t,
      s.data,
      s.headers,
      t.transformResponse
    ), s;
  }, function(s) {
    return $m(s) || (as(t), s && s.response && (s.response.data = is.call(
      t,
      s.response.data,
      s.response.headers,
      t.transformResponse
    ))), Promise.reject(s);
  });
}, it = qe, Go = function(t, n) {
  n = n || {};
  var r = {};
  function s(m, h) {
    return it.isPlainObject(m) && it.isPlainObject(h) ? it.merge(m, h) : it.isPlainObject(h) ? it.merge({}, h) : it.isArray(h) ? h.slice() : h;
  }
  function i(m) {
    if (it.isUndefined(n[m])) {
      if (!it.isUndefined(t[m]))
        return s(void 0, t[m]);
    } else
      return s(t[m], n[m]);
  }
  function a(m) {
    if (!it.isUndefined(n[m]))
      return s(void 0, n[m]);
  }
  function l(m) {
    if (it.isUndefined(n[m])) {
      if (!it.isUndefined(t[m]))
        return s(void 0, t[m]);
    } else
      return s(void 0, n[m]);
  }
  function o(m) {
    if (m in n)
      return s(t[m], n[m]);
    if (m in t)
      return s(void 0, t[m]);
  }
  var f = {
    url: a,
    method: a,
    data: a,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: o
  };
  return it.forEach(Object.keys(t).concat(Object.keys(n)), function(h) {
    var d = f[h] || i, N = d(h);
    it.isUndefined(N) && d !== o || (r[h] = N);
  }), r;
}, ls, Da;
function Xo() {
  return Da || (Da = 1, ls = {
    version: "0.27.2"
  }), ls;
}
var Hm = Xo().version, Mt = Cn, Ai = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, t) {
  Ai[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
var xa = {};
Ai.transitional = function(t, n, r) {
  function s(i, a) {
    return "[Axios v" + Hm + "] Transitional option '" + i + "'" + a + (r ? ". " + r : "");
  }
  return function(i, a, l) {
    if (t === !1)
      throw new Mt(
        s(a, " has been removed" + (n ? " in " + n : "")),
        Mt.ERR_DEPRECATED
      );
    return n && !xa[a] && (xa[a] = !0, console.warn(
      s(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, a, l) : !0;
  };
};
function Wm(e, t, n) {
  if (typeof e != "object")
    throw new Mt("options must be an object", Mt.ERR_BAD_OPTION_VALUE);
  for (var r = Object.keys(e), s = r.length; s-- > 0; ) {
    var i = r[s], a = t[i];
    if (a) {
      var l = e[i], o = l === void 0 || a(l, i, e);
      if (o !== !0)
        throw new Mt("option " + i + " must be " + o, Mt.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new Mt("Unknown option " + i, Mt.ERR_BAD_OPTION);
  }
}
var Bm = {
  assertOptions: Wm,
  validators: Ai
}, Jo = qe, qm = Uo, $a = _m, Va = jm, Mr = Go, Km = Ko, zo = Bm, sn = zo.validators;
function yn(e) {
  this.defaults = e, this.interceptors = {
    request: new $a(),
    response: new $a()
  };
}
yn.prototype.request = function(t, n) {
  typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Mr(this.defaults, n), n.method ? n.method = n.method.toLowerCase() : this.defaults.method ? n.method = this.defaults.method.toLowerCase() : n.method = "get";
  var r = n.transitional;
  r !== void 0 && zo.assertOptions(r, {
    silentJSONParsing: sn.transitional(sn.boolean),
    forcedJSONParsing: sn.transitional(sn.boolean),
    clarifyTimeoutError: sn.transitional(sn.boolean)
  }, !1);
  var s = [], i = !0;
  this.interceptors.request.forEach(function(N) {
    typeof N.runWhen == "function" && N.runWhen(n) === !1 || (i = i && N.synchronous, s.unshift(N.fulfilled, N.rejected));
  });
  var a = [];
  this.interceptors.response.forEach(function(N) {
    a.push(N.fulfilled, N.rejected);
  });
  var l;
  if (!i) {
    var o = [Va, void 0];
    for (Array.prototype.unshift.apply(o, s), o = o.concat(a), l = Promise.resolve(n); o.length; )
      l = l.then(o.shift(), o.shift());
    return l;
  }
  for (var f = n; s.length; ) {
    var m = s.shift(), h = s.shift();
    try {
      f = m(f);
    } catch (d) {
      h(d);
      break;
    }
  }
  try {
    l = Va(f);
  } catch (d) {
    return Promise.reject(d);
  }
  for (; a.length; )
    l = l.then(a.shift(), a.shift());
  return l;
};
yn.prototype.getUri = function(t) {
  t = Mr(this.defaults, t);
  var n = Km(t.baseURL, t.url);
  return qm(n, t.params, t.paramsSerializer);
};
Jo.forEach(["delete", "get", "head", "options"], function(t) {
  yn.prototype[t] = function(n, r) {
    return this.request(Mr(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
Jo.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, a, l) {
      return this.request(Mr(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  yn.prototype[t] = n(), yn.prototype[t + "Form"] = n(!0);
});
var Ym = yn, os, Ua;
function Gm() {
  if (Ua)
    return os;
  Ua = 1;
  var e = kr();
  function t(n) {
    if (typeof n != "function")
      throw new TypeError("executor must be a function.");
    var r;
    this.promise = new Promise(function(a) {
      r = a;
    });
    var s = this;
    this.promise.then(function(i) {
      if (!!s._listeners) {
        var a, l = s._listeners.length;
        for (a = 0; a < l; a++)
          s._listeners[a](i);
        s._listeners = null;
      }
    }), this.promise.then = function(i) {
      var a, l = new Promise(function(o) {
        s.subscribe(o), a = o;
      }).then(i);
      return l.cancel = function() {
        s.unsubscribe(a);
      }, l;
    }, n(function(a) {
      s.reason || (s.reason = new e(a), r(s.reason));
    });
  }
  return t.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, t.prototype.subscribe = function(r) {
    if (this.reason) {
      r(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(r) : this._listeners = [r];
  }, t.prototype.unsubscribe = function(r) {
    if (!!this._listeners) {
      var s = this._listeners.indexOf(r);
      s !== -1 && this._listeners.splice(s, 1);
    }
  }, t.source = function() {
    var r, s = new t(function(a) {
      r = a;
    });
    return {
      token: s,
      cancel: r
    };
  }, os = t, os;
}
var us, ja;
function Xm() {
  return ja || (ja = 1, us = function(t) {
    return function(r) {
      return t.apply(null, r);
    };
  }), us;
}
var cs, Ha;
function Jm() {
  if (Ha)
    return cs;
  Ha = 1;
  var e = qe;
  return cs = function(n) {
    return e.isObject(n) && n.isAxiosError === !0;
  }, cs;
}
var Wa = qe, zm = xo, or = Ym, Qm = Go, Zm = Ii;
function Qo(e) {
  var t = new or(e), n = zm(or.prototype.request, t);
  return Wa.extend(n, or.prototype, t), Wa.extend(n, t), n.create = function(s) {
    return Qo(Qm(e, s));
  }, n;
}
var nt = Qo(Zm);
nt.Axios = or;
nt.CanceledError = kr();
nt.CancelToken = Gm();
nt.isCancel = Yo();
nt.VERSION = Xo().version;
nt.toFormData = qo;
nt.AxiosError = Cn;
nt.Cancel = nt.CanceledError;
nt.all = function(t) {
  return Promise.all(t);
};
nt.spread = Xm();
nt.isAxiosError = Jm();
vi.exports = nt;
vi.exports.default = nt;
(function(e) {
  e.exports = vi.exports;
})(Do);
const Zo = /* @__PURE__ */ Yd(Do.exports);
/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const Rs = typeof window < "u", eh = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol", jt = (e) => eh ? Symbol(e) : e, th = (e, t, n) => nh({ l: e, k: t, s: n }), nh = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), ke = (e) => typeof e == "number" && isFinite(e), rh = (e) => Ni(e) === "[object Date]", Ut = (e) => Ni(e) === "[object RegExp]", Dr = (e) => Z(e) && Object.keys(e).length === 0;
function sh(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Ve = Object.assign;
let Ba;
const $n = () => Ba || (Ba = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function qa(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const ih = Object.prototype.hasOwnProperty;
function Li(e, t) {
  return ih.call(e, t);
}
const _e = Array.isArray, Le = (e) => typeof e == "function", j = (e) => typeof e == "string", ie = (e) => typeof e == "boolean", ge = (e) => e !== null && typeof e == "object", eu = Object.prototype.toString, Ni = (e) => eu.call(e), Z = (e) => Ni(e) === "[object Object]", ah = (e) => e == null ? "" : _e(e) || Z(e) && e.toString === eu ? JSON.stringify(e, null, 2) : String(e);
/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const ce = {
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  __EXTEND_POINT__: 15
};
function xr(e, t, n = {}) {
  const { domain: r, messages: s, args: i } = n, a = e, l = new SyntaxError(String(a));
  return l.code = e, t && (l.location = t), l.domain = r, l;
}
function lh(e) {
  throw e;
}
function oh(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Ss(e, t, n) {
  const r = { start: e, end: t };
  return n != null && (r.source = n), r;
}
const Lt = " ", uh = "\r", ze = `
`, ch = String.fromCharCode(8232), fh = String.fromCharCode(8233);
function dh(e) {
  const t = e;
  let n = 0, r = 1, s = 1, i = 0;
  const a = (k) => t[k] === uh && t[k + 1] === ze, l = (k) => t[k] === ze, o = (k) => t[k] === fh, f = (k) => t[k] === ch, m = (k) => a(k) || l(k) || o(k) || f(k), h = () => n, d = () => r, N = () => s, F = () => i, S = (k) => a(k) || o(k) || f(k) ? ze : t[k], D = () => S(n), b = () => S(n + i);
  function C() {
    return i = 0, m(n) && (r++, s = 0), a(n) && n++, n++, s++, t[n];
  }
  function I() {
    return a(n + i) && i++, i++, t[n + i];
  }
  function O() {
    n = 0, r = 1, s = 1, i = 0;
  }
  function y(k = 0) {
    i = k;
  }
  function R() {
    const k = n + i;
    for (; k !== n; )
      C();
    i = 0;
  }
  return {
    index: h,
    line: d,
    column: N,
    peekOffset: F,
    charAt: S,
    currentChar: D,
    currentPeek: b,
    next: C,
    peek: I,
    reset: O,
    resetPeek: y,
    skipToPeek: R
  };
}
const Ft = void 0, Ka = "'", mh = "tokenizer";
function hh(e, t = {}) {
  const n = t.location !== !1, r = dh(e), s = () => r.index(), i = () => oh(r.line(), r.column(), r.index()), a = i(), l = s(), o = {
    currentType: 14,
    offset: l,
    startLoc: a,
    endLoc: a,
    lastType: 14,
    lastOffset: l,
    lastStartLoc: a,
    lastEndLoc: a,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, f = () => o, { onError: m } = t;
  function h(u, c, p, ...A) {
    const w = f();
    if (c.column += p, c.offset += p, m) {
      const P = Ss(w.startLoc, c), M = xr(u, P, {
        domain: mh,
        args: A
      });
      m(M);
    }
  }
  function d(u, c, p) {
    u.endLoc = i(), u.currentType = c;
    const A = { type: c };
    return n && (A.loc = Ss(u.startLoc, u.endLoc)), p != null && (A.value = p), A;
  }
  const N = (u) => d(u, 14);
  function F(u, c) {
    return u.currentChar() === c ? (u.next(), c) : (h(ce.EXPECTED_TOKEN, i(), 0, c), "");
  }
  function S(u) {
    let c = "";
    for (; u.currentPeek() === Lt || u.currentPeek() === ze; )
      c += u.currentPeek(), u.peek();
    return c;
  }
  function D(u) {
    const c = S(u);
    return u.skipToPeek(), c;
  }
  function b(u) {
    if (u === Ft)
      return !1;
    const c = u.charCodeAt(0);
    return c >= 97 && c <= 122 || c >= 65 && c <= 90 || c === 95;
  }
  function C(u) {
    if (u === Ft)
      return !1;
    const c = u.charCodeAt(0);
    return c >= 48 && c <= 57;
  }
  function I(u, c) {
    const { currentType: p } = c;
    if (p !== 2)
      return !1;
    S(u);
    const A = b(u.currentPeek());
    return u.resetPeek(), A;
  }
  function O(u, c) {
    const { currentType: p } = c;
    if (p !== 2)
      return !1;
    S(u);
    const A = u.currentPeek() === "-" ? u.peek() : u.currentPeek(), w = C(A);
    return u.resetPeek(), w;
  }
  function y(u, c) {
    const { currentType: p } = c;
    if (p !== 2)
      return !1;
    S(u);
    const A = u.currentPeek() === Ka;
    return u.resetPeek(), A;
  }
  function R(u, c) {
    const { currentType: p } = c;
    if (p !== 8)
      return !1;
    S(u);
    const A = u.currentPeek() === ".";
    return u.resetPeek(), A;
  }
  function k(u, c) {
    const { currentType: p } = c;
    if (p !== 9)
      return !1;
    S(u);
    const A = b(u.currentPeek());
    return u.resetPeek(), A;
  }
  function W(u, c) {
    const { currentType: p } = c;
    if (!(p === 8 || p === 12))
      return !1;
    S(u);
    const A = u.currentPeek() === ":";
    return u.resetPeek(), A;
  }
  function B(u, c) {
    const { currentType: p } = c;
    if (p !== 10)
      return !1;
    const A = () => {
      const P = u.currentPeek();
      return P === "{" ? b(u.peek()) : P === "@" || P === "%" || P === "|" || P === ":" || P === "." || P === Lt || !P ? !1 : P === ze ? (u.peek(), A()) : b(P);
    }, w = A();
    return u.resetPeek(), w;
  }
  function K(u) {
    S(u);
    const c = u.currentPeek() === "|";
    return u.resetPeek(), c;
  }
  function Y(u) {
    const c = S(u), p = u.currentPeek() === "%" && u.peek() === "{";
    return u.resetPeek(), {
      isModulo: p,
      hasSpace: c.length > 0
    };
  }
  function z(u, c = !0) {
    const p = (w = !1, P = "", M = !1) => {
      const v = u.currentPeek();
      return v === "{" ? P === "%" ? !1 : w : v === "@" || !v ? P === "%" ? !0 : w : v === "%" ? (u.peek(), p(w, "%", !0)) : v === "|" ? P === "%" || M ? !0 : !(P === Lt || P === ze) : v === Lt ? (u.peek(), p(!0, Lt, M)) : v === ze ? (u.peek(), p(!0, ze, M)) : !0;
    }, A = p();
    return c && u.resetPeek(), A;
  }
  function te(u, c) {
    const p = u.currentChar();
    return p === Ft ? Ft : c(p) ? (u.next(), p) : null;
  }
  function de(u) {
    return te(u, (p) => {
      const A = p.charCodeAt(0);
      return A >= 97 && A <= 122 || A >= 65 && A <= 90 || A >= 48 && A <= 57 || A === 95 || A === 36;
    });
  }
  function Te(u) {
    return te(u, (p) => {
      const A = p.charCodeAt(0);
      return A >= 48 && A <= 57;
    });
  }
  function J(u) {
    return te(u, (p) => {
      const A = p.charCodeAt(0);
      return A >= 48 && A <= 57 || A >= 65 && A <= 70 || A >= 97 && A <= 102;
    });
  }
  function X(u) {
    let c = "", p = "";
    for (; c = Te(u); )
      p += c;
    return p;
  }
  function ne(u) {
    D(u);
    const c = u.currentChar();
    return c !== "%" && h(ce.EXPECTED_TOKEN, i(), 0, c), u.next(), "%";
  }
  function Ne(u) {
    let c = "";
    for (; ; ) {
      const p = u.currentChar();
      if (p === "{" || p === "}" || p === "@" || p === "|" || !p)
        break;
      if (p === "%")
        if (z(u))
          c += p, u.next();
        else
          break;
      else if (p === Lt || p === ze)
        if (z(u))
          c += p, u.next();
        else {
          if (K(u))
            break;
          c += p, u.next();
        }
      else
        c += p, u.next();
    }
    return c;
  }
  function we(u) {
    D(u);
    let c = "", p = "";
    for (; c = de(u); )
      p += c;
    return u.currentChar() === Ft && h(ce.UNTERMINATED_CLOSING_BRACE, i(), 0), p;
  }
  function Ie(u) {
    D(u);
    let c = "";
    return u.currentChar() === "-" ? (u.next(), c += `-${X(u)}`) : c += X(u), u.currentChar() === Ft && h(ce.UNTERMINATED_CLOSING_BRACE, i(), 0), c;
  }
  function ye(u) {
    D(u), F(u, "'");
    let c = "", p = "";
    const A = (P) => P !== Ka && P !== ze;
    for (; c = te(u, A); )
      c === "\\" ? p += rt(u) : p += c;
    const w = u.currentChar();
    return w === ze || w === Ft ? (h(ce.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, i(), 0), w === ze && (u.next(), F(u, "'")), p) : (F(u, "'"), p);
  }
  function rt(u) {
    const c = u.currentChar();
    switch (c) {
      case "\\":
      case "'":
        return u.next(), `\\${c}`;
      case "u":
        return je(u, c, 4);
      case "U":
        return je(u, c, 6);
      default:
        return h(ce.UNKNOWN_ESCAPE_SEQUENCE, i(), 0, c), "";
    }
  }
  function je(u, c, p) {
    F(u, c);
    let A = "";
    for (let w = 0; w < p; w++) {
      const P = J(u);
      if (!P) {
        h(ce.INVALID_UNICODE_ESCAPE_SEQUENCE, i(), 0, `\\${c}${A}${u.currentChar()}`);
        break;
      }
      A += P;
    }
    return `\\${c}${A}`;
  }
  function ct(u) {
    D(u);
    let c = "", p = "";
    const A = (w) => w !== "{" && w !== "}" && w !== Lt && w !== ze;
    for (; c = te(u, A); )
      p += c;
    return p;
  }
  function V(u) {
    let c = "", p = "";
    for (; c = de(u); )
      p += c;
    return p;
  }
  function re(u) {
    const c = (p = !1, A) => {
      const w = u.currentChar();
      return w === "{" || w === "%" || w === "@" || w === "|" || !w || w === Lt ? A : w === ze ? (A += w, u.next(), c(p, A)) : (A += w, u.next(), c(!0, A));
    };
    return c(!1, "");
  }
  function pe(u) {
    D(u);
    const c = F(u, "|");
    return D(u), c;
  }
  function Fe(u, c) {
    let p = null;
    switch (u.currentChar()) {
      case "{":
        return c.braceNest >= 1 && h(ce.NOT_ALLOW_NEST_PLACEHOLDER, i(), 0), u.next(), p = d(c, 2, "{"), D(u), c.braceNest++, p;
      case "}":
        return c.braceNest > 0 && c.currentType === 2 && h(ce.EMPTY_PLACEHOLDER, i(), 0), u.next(), p = d(c, 3, "}"), c.braceNest--, c.braceNest > 0 && D(u), c.inLinked && c.braceNest === 0 && (c.inLinked = !1), p;
      case "@":
        return c.braceNest > 0 && h(ce.UNTERMINATED_CLOSING_BRACE, i(), 0), p = Ce(u, c) || N(c), c.braceNest = 0, p;
      default:
        let w = !0, P = !0, M = !0;
        if (K(u))
          return c.braceNest > 0 && h(ce.UNTERMINATED_CLOSING_BRACE, i(), 0), p = d(c, 1, pe(u)), c.braceNest = 0, c.inLinked = !1, p;
        if (c.braceNest > 0 && (c.currentType === 5 || c.currentType === 6 || c.currentType === 7))
          return h(ce.UNTERMINATED_CLOSING_BRACE, i(), 0), c.braceNest = 0, He(u, c);
        if (w = I(u, c))
          return p = d(c, 5, we(u)), D(u), p;
        if (P = O(u, c))
          return p = d(c, 6, Ie(u)), D(u), p;
        if (M = y(u, c))
          return p = d(c, 7, ye(u)), D(u), p;
        if (!w && !P && !M)
          return p = d(c, 13, ct(u)), h(ce.INVALID_TOKEN_IN_PLACEHOLDER, i(), 0, p.value), D(u), p;
        break;
    }
    return p;
  }
  function Ce(u, c) {
    const { currentType: p } = c;
    let A = null;
    const w = u.currentChar();
    switch ((p === 8 || p === 9 || p === 12 || p === 10) && (w === ze || w === Lt) && h(ce.INVALID_LINKED_FORMAT, i(), 0), w) {
      case "@":
        return u.next(), A = d(c, 8, "@"), c.inLinked = !0, A;
      case ".":
        return D(u), u.next(), d(c, 9, ".");
      case ":":
        return D(u), u.next(), d(c, 10, ":");
      default:
        return K(u) ? (A = d(c, 1, pe(u)), c.braceNest = 0, c.inLinked = !1, A) : R(u, c) || W(u, c) ? (D(u), Ce(u, c)) : k(u, c) ? (D(u), d(c, 12, V(u))) : B(u, c) ? (D(u), w === "{" ? Fe(u, c) || A : d(c, 11, re(u))) : (p === 8 && h(ce.INVALID_LINKED_FORMAT, i(), 0), c.braceNest = 0, c.inLinked = !1, He(u, c));
    }
  }
  function He(u, c) {
    let p = { type: 14 };
    if (c.braceNest > 0)
      return Fe(u, c) || N(c);
    if (c.inLinked)
      return Ce(u, c) || N(c);
    switch (u.currentChar()) {
      case "{":
        return Fe(u, c) || N(c);
      case "}":
        return h(ce.UNBALANCED_CLOSING_BRACE, i(), 0), u.next(), d(c, 3, "}");
      case "@":
        return Ce(u, c) || N(c);
      default:
        if (K(u))
          return p = d(c, 1, pe(u)), c.braceNest = 0, c.inLinked = !1, p;
        const { isModulo: w, hasSpace: P } = Y(u);
        if (w)
          return P ? d(c, 0, Ne(u)) : d(c, 4, ne(u));
        if (z(u))
          return d(c, 0, Ne(u));
        break;
    }
    return p;
  }
  function _() {
    const { currentType: u, offset: c, startLoc: p, endLoc: A } = o;
    return o.lastType = u, o.lastOffset = c, o.lastStartLoc = p, o.lastEndLoc = A, o.offset = s(), o.startLoc = i(), r.currentChar() === Ft ? d(o, 14) : He(r, o);
  }
  return {
    nextToken: _,
    currentOffset: s,
    currentPosition: i,
    context: f
  };
}
const ph = "parser", _h = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function gh(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const r = parseInt(t || n, 16);
      return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "\uFFFD";
    }
  }
}
function vh(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(b, C, I, O, ...y) {
    const R = b.currentPosition();
    if (R.offset += O, R.column += O, n) {
      const k = Ss(I, R), W = xr(C, k, {
        domain: ph,
        args: y
      });
      n(W);
    }
  }
  function s(b, C, I) {
    const O = {
      type: b,
      start: C,
      end: C
    };
    return t && (O.loc = { start: I, end: I }), O;
  }
  function i(b, C, I, O) {
    b.end = C, O && (b.type = O), t && b.loc && (b.loc.end = I);
  }
  function a(b, C) {
    const I = b.context(), O = s(3, I.offset, I.startLoc);
    return O.value = C, i(O, b.currentOffset(), b.currentPosition()), O;
  }
  function l(b, C) {
    const I = b.context(), { lastOffset: O, lastStartLoc: y } = I, R = s(5, O, y);
    return R.index = parseInt(C, 10), b.nextToken(), i(R, b.currentOffset(), b.currentPosition()), R;
  }
  function o(b, C) {
    const I = b.context(), { lastOffset: O, lastStartLoc: y } = I, R = s(4, O, y);
    return R.key = C, b.nextToken(), i(R, b.currentOffset(), b.currentPosition()), R;
  }
  function f(b, C) {
    const I = b.context(), { lastOffset: O, lastStartLoc: y } = I, R = s(9, O, y);
    return R.value = C.replace(_h, gh), b.nextToken(), i(R, b.currentOffset(), b.currentPosition()), R;
  }
  function m(b) {
    const C = b.nextToken(), I = b.context(), { lastOffset: O, lastStartLoc: y } = I, R = s(8, O, y);
    return C.type !== 12 ? (r(b, ce.UNEXPECTED_EMPTY_LINKED_MODIFIER, I.lastStartLoc, 0), R.value = "", i(R, O, y), {
      nextConsumeToken: C,
      node: R
    }) : (C.value == null && r(b, ce.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, bt(C)), R.value = C.value || "", i(R, b.currentOffset(), b.currentPosition()), {
      node: R
    });
  }
  function h(b, C) {
    const I = b.context(), O = s(7, I.offset, I.startLoc);
    return O.value = C, i(O, b.currentOffset(), b.currentPosition()), O;
  }
  function d(b) {
    const C = b.context(), I = s(6, C.offset, C.startLoc);
    let O = b.nextToken();
    if (O.type === 9) {
      const y = m(b);
      I.modifier = y.node, O = y.nextConsumeToken || b.nextToken();
    }
    switch (O.type !== 10 && r(b, ce.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, bt(O)), O = b.nextToken(), O.type === 2 && (O = b.nextToken()), O.type) {
      case 11:
        O.value == null && r(b, ce.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, bt(O)), I.key = h(b, O.value || "");
        break;
      case 5:
        O.value == null && r(b, ce.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, bt(O)), I.key = o(b, O.value || "");
        break;
      case 6:
        O.value == null && r(b, ce.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, bt(O)), I.key = l(b, O.value || "");
        break;
      case 7:
        O.value == null && r(b, ce.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, bt(O)), I.key = f(b, O.value || "");
        break;
      default:
        r(b, ce.UNEXPECTED_EMPTY_LINKED_KEY, C.lastStartLoc, 0);
        const y = b.context(), R = s(7, y.offset, y.startLoc);
        return R.value = "", i(R, y.offset, y.startLoc), I.key = R, i(I, y.offset, y.startLoc), {
          nextConsumeToken: O,
          node: I
        };
    }
    return i(I, b.currentOffset(), b.currentPosition()), {
      node: I
    };
  }
  function N(b) {
    const C = b.context(), I = C.currentType === 1 ? b.currentOffset() : C.offset, O = C.currentType === 1 ? C.endLoc : C.startLoc, y = s(2, I, O);
    y.items = [];
    let R = null;
    do {
      const B = R || b.nextToken();
      switch (R = null, B.type) {
        case 0:
          B.value == null && r(b, ce.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, bt(B)), y.items.push(a(b, B.value || ""));
          break;
        case 6:
          B.value == null && r(b, ce.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, bt(B)), y.items.push(l(b, B.value || ""));
          break;
        case 5:
          B.value == null && r(b, ce.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, bt(B)), y.items.push(o(b, B.value || ""));
          break;
        case 7:
          B.value == null && r(b, ce.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, bt(B)), y.items.push(f(b, B.value || ""));
          break;
        case 8:
          const K = d(b);
          y.items.push(K.node), R = K.nextConsumeToken || null;
          break;
      }
    } while (C.currentType !== 14 && C.currentType !== 1);
    const k = C.currentType === 1 ? C.lastOffset : b.currentOffset(), W = C.currentType === 1 ? C.lastEndLoc : b.currentPosition();
    return i(y, k, W), y;
  }
  function F(b, C, I, O) {
    const y = b.context();
    let R = O.items.length === 0;
    const k = s(1, C, I);
    k.cases = [], k.cases.push(O);
    do {
      const W = N(b);
      R || (R = W.items.length === 0), k.cases.push(W);
    } while (y.currentType !== 14);
    return R && r(b, ce.MUST_HAVE_MESSAGES_IN_PLURAL, I, 0), i(k, b.currentOffset(), b.currentPosition()), k;
  }
  function S(b) {
    const C = b.context(), { offset: I, startLoc: O } = C, y = N(b);
    return C.currentType === 14 ? y : F(b, I, O, y);
  }
  function D(b) {
    const C = hh(b, Ve({}, e)), I = C.context(), O = s(0, I.offset, I.startLoc);
    return t && O.loc && (O.loc.source = b), O.body = S(C), I.currentType !== 14 && r(C, ce.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, b[I.offset] || ""), i(O, C.currentOffset(), C.currentPosition()), O;
  }
  return { parse: D };
}
function bt(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "\u2026" : t;
}
function bh(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (i) => (n.helpers.add(i), i) };
}
function Ya(e, t) {
  for (let n = 0; n < e.length; n++)
    Ci(e[n], t);
}
function Ci(e, t) {
  switch (e.type) {
    case 1:
      Ya(e.cases, t), t.helper("plural");
      break;
    case 2:
      Ya(e.items, t);
      break;
    case 6:
      Ci(e.key, t), t.helper("linked"), t.helper("type");
      break;
    case 5:
      t.helper("interpolate"), t.helper("list");
      break;
    case 4:
      t.helper("interpolate"), t.helper("named");
      break;
  }
}
function yh(e, t = {}) {
  const n = bh(e);
  n.helper("normalize"), e.body && Ci(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function Eh(e, t) {
  const { sourceMap: n, filename: r, breakLineCode: s, needIndent: i } = t, a = {
    source: e.loc.source,
    filename: r,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: s,
    needIndent: i,
    indentLevel: 0
  }, l = () => a;
  function o(S, D) {
    a.code += S;
  }
  function f(S, D = !0) {
    const b = D ? s : "";
    o(i ? b + "  ".repeat(S) : b);
  }
  function m(S = !0) {
    const D = ++a.indentLevel;
    S && f(D);
  }
  function h(S = !0) {
    const D = --a.indentLevel;
    S && f(D);
  }
  function d() {
    f(a.indentLevel);
  }
  return {
    context: l,
    push: o,
    indent: m,
    deindent: h,
    newline: d,
    helper: (S) => `_${S}`,
    needIndent: () => a.needIndent
  };
}
function Oh(e, t) {
  const { helper: n } = e;
  e.push(`${n("linked")}(`), En(e, t.key), t.modifier ? (e.push(", "), En(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Th(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n("normalize")}([`), e.indent(r());
  const s = t.items.length;
  for (let i = 0; i < s && (En(e, t.items[i]), i !== s - 1); i++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function Ih(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n("plural")}([`), e.indent(r());
    const s = t.cases.length;
    for (let i = 0; i < s && (En(e, t.cases[i]), i !== s - 1); i++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function Ah(e, t) {
  t.body ? En(e, t.body) : e.push("null");
}
function En(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Ah(e, t);
      break;
    case 1:
      Ih(e, t);
      break;
    case 2:
      Th(e, t);
      break;
    case 6:
      Oh(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
  }
}
const Lh = (e, t = {}) => {
  const n = j(t.mode) ? t.mode : "normal", r = j(t.filename) ? t.filename : "message.intl", s = !!t.sourceMap, i = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", l = e.helpers || [], o = Eh(e, {
    mode: n,
    filename: r,
    sourceMap: s,
    breakLineCode: i,
    needIndent: a
  });
  o.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), o.indent(a), l.length > 0 && (o.push(`const { ${l.map((h) => `${h}: _${h}`).join(", ")} } = ctx`), o.newline()), o.push("return "), En(o, e), o.deindent(a), o.push("}");
  const { code: f, map: m } = o.context();
  return {
    ast: e,
    code: f,
    map: m ? m.toJSON() : void 0
  };
};
function Nh(e, t = {}) {
  const n = Ve({}, t), s = vh(n).parse(e);
  return yh(s, n), Lh(s, n);
}
/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const tu = {
  I18nInit: "i18n:init",
  FunctionTranslate: "function:translate"
};
/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const Ht = [];
Ht[0] = {
  w: [0],
  i: [3, 0],
  ["["]: [4],
  o: [7]
};
Ht[1] = {
  w: [1],
  ["."]: [2],
  ["["]: [4],
  o: [7]
};
Ht[2] = {
  w: [2],
  i: [3, 0],
  [0]: [3, 0]
};
Ht[3] = {
  i: [3, 0],
  [0]: [3, 0],
  w: [1, 1],
  ["."]: [2, 1],
  ["["]: [4, 1],
  o: [7, 1]
};
Ht[4] = {
  ["'"]: [5, 0],
  ['"']: [6, 0],
  ["["]: [
    4,
    2
  ],
  ["]"]: [1, 3],
  o: 8,
  l: [4, 0]
};
Ht[5] = {
  ["'"]: [4, 0],
  o: 8,
  l: [5, 0]
};
Ht[6] = {
  ['"']: [4, 0],
  o: 8,
  l: [6, 0]
};
const Ch = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Rh(e) {
  return Ch.test(e);
}
function Sh(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function wh(e) {
  if (e == null)
    return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function Fh(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Rh(t) ? Sh(t) : "*" + t;
}
function kh(e) {
  const t = [];
  let n = -1, r = 0, s = 0, i, a, l, o, f, m, h;
  const d = [];
  d[0] = () => {
    a === void 0 ? a = l : a += l;
  }, d[1] = () => {
    a !== void 0 && (t.push(a), a = void 0);
  }, d[2] = () => {
    d[0](), s++;
  }, d[3] = () => {
    if (s > 0)
      s--, r = 4, d[0]();
    else {
      if (s = 0, a === void 0 || (a = Fh(a), a === !1))
        return !1;
      d[1]();
    }
  };
  function N() {
    const F = e[n + 1];
    if (r === 5 && F === "'" || r === 6 && F === '"')
      return n++, l = "\\" + F, d[0](), !0;
  }
  for (; r !== null; )
    if (n++, i = e[n], !(i === "\\" && N())) {
      if (o = wh(i), h = Ht[r], f = h[o] || h.l || 8, f === 8 || (r = f[0], f[1] !== void 0 && (m = d[f[1]], m && (l = i, m() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Ga = /* @__PURE__ */ new Map();
function Ph(e, t) {
  return ge(e) ? e[t] : null;
}
function Mh(e, t) {
  if (!ge(e))
    return null;
  let n = Ga.get(t);
  if (n || (n = kh(t), n && Ga.set(t, n)), !n)
    return null;
  const r = n.length;
  let s = e, i = 0;
  for (; i < r; ) {
    const a = s[n[i]];
    if (a === void 0)
      return null;
    s = a, i++;
  }
  return s;
}
const Dh = (e) => e, xh = (e) => "", $h = "text", Vh = (e) => e.length === 0 ? "" : e.join(""), Uh = ah;
function Xa(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function jh(e) {
  const t = ke(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (ke(e.named.count) || ke(e.named.n)) ? ke(e.named.count) ? e.named.count : ke(e.named.n) ? e.named.n : t : t;
}
function Hh(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Wh(e = {}) {
  const t = e.locale, n = jh(e), r = ge(e.pluralRules) && j(t) && Le(e.pluralRules[t]) ? e.pluralRules[t] : Xa, s = ge(e.pluralRules) && j(t) && Le(e.pluralRules[t]) ? Xa : void 0, i = (b) => b[r(n, b.length, s)], a = e.list || [], l = (b) => a[b], o = e.named || {};
  ke(e.pluralIndex) && Hh(n, o);
  const f = (b) => o[b];
  function m(b) {
    const C = Le(e.messages) ? e.messages(b) : ge(e.messages) ? e.messages[b] : !1;
    return C || (e.parent ? e.parent.message(b) : xh);
  }
  const h = (b) => e.modifiers ? e.modifiers[b] : Dh, d = Z(e.processor) && Le(e.processor.normalize) ? e.processor.normalize : Vh, N = Z(e.processor) && Le(e.processor.interpolate) ? e.processor.interpolate : Uh, F = Z(e.processor) && j(e.processor.type) ? e.processor.type : $h, D = {
    list: l,
    named: f,
    plural: i,
    linked: (b, ...C) => {
      const [I, O] = C;
      let y = "text", R = "";
      C.length === 1 ? ge(I) ? (R = I.modifier || R, y = I.type || y) : j(I) && (R = I || R) : C.length === 2 && (j(I) && (R = I || R), j(O) && (y = O || y));
      let k = m(b)(D);
      return y === "vnode" && _e(k) && R && (k = k[0]), R ? h(R)(k, y) : k;
    },
    message: m,
    type: F,
    interpolate: N,
    normalize: d
  };
  return D;
}
let Kn = null;
function Bh(e) {
  Kn = e;
}
function qh(e, t, n) {
  Kn && Kn.emit(tu.I18nInit, {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const Kh = /* @__PURE__ */ Yh(tu.FunctionTranslate);
function Yh(e) {
  return (t) => Kn && Kn.emit(e, t);
}
const Gh = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  __EXTEND_POINT__: 7
};
function Xh(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ..._e(t) ? t : ge(t) ? Object.keys(t) : j(t) ? [t] : [n]
  ])];
}
function nu(e, t, n) {
  const r = j(n) ? n : Xn, s = e;
  s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map());
  let i = s.__localeChainCache.get(r);
  if (!i) {
    i = [];
    let a = [n];
    for (; _e(a); )
      a = Ja(i, a, t);
    const l = _e(t) || !Z(t) ? t : t.default ? t.default : null;
    a = j(l) ? [l] : l, _e(a) && Ja(i, a, !1), s.__localeChainCache.set(r, i);
  }
  return i;
}
function Ja(e, t, n) {
  let r = !0;
  for (let s = 0; s < t.length && ie(r); s++) {
    const i = t[s];
    j(i) && (r = Jh(e, t[s], n));
  }
  return r;
}
function Jh(e, t, n) {
  let r;
  const s = t.split("-");
  do {
    const i = s.join("-");
    r = zh(e, i, n), s.splice(-1, 1);
  } while (s.length && r === !0);
  return r;
}
function zh(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (_e(n) || Z(n)) && n[s] && (r = n[s]);
  }
  return r;
}
const Qh = "9.2.2", $r = -1, Xn = "en-US", za = "", Qa = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Zh() {
  return {
    upper: (e, t) => t === "text" && j(e) ? e.toUpperCase() : t === "vnode" && ge(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && j(e) ? e.toLowerCase() : t === "vnode" && ge(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && j(e) ? Qa(e) : t === "vnode" && ge(e) && "__v_isVNode" in e ? Qa(e.children) : e
  };
}
let ru;
function ep(e) {
  ru = e;
}
let su;
function tp(e) {
  su = e;
}
let iu;
function np(e) {
  iu = e;
}
let au = null;
const Za = (e) => {
  au = e;
}, rp = () => au;
let lu = null;
const el = (e) => {
  lu = e;
}, sp = () => lu;
let tl = 0;
function ip(e = {}) {
  const t = j(e.version) ? e.version : Qh, n = j(e.locale) ? e.locale : Xn, r = _e(e.fallbackLocale) || Z(e.fallbackLocale) || j(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : n, s = Z(e.messages) ? e.messages : { [n]: {} }, i = Z(e.datetimeFormats) ? e.datetimeFormats : { [n]: {} }, a = Z(e.numberFormats) ? e.numberFormats : { [n]: {} }, l = Ve({}, e.modifiers || {}, Zh()), o = e.pluralRules || {}, f = Le(e.missing) ? e.missing : null, m = ie(e.missingWarn) || Ut(e.missingWarn) ? e.missingWarn : !0, h = ie(e.fallbackWarn) || Ut(e.fallbackWarn) ? e.fallbackWarn : !0, d = !!e.fallbackFormat, N = !!e.unresolving, F = Le(e.postTranslation) ? e.postTranslation : null, S = Z(e.processor) ? e.processor : null, D = ie(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, b = !!e.escapeParameter, C = Le(e.messageCompiler) ? e.messageCompiler : ru, I = Le(e.messageResolver) ? e.messageResolver : su || Ph, O = Le(e.localeFallbacker) ? e.localeFallbacker : iu || Xh, y = ge(e.fallbackContext) ? e.fallbackContext : void 0, R = Le(e.onWarn) ? e.onWarn : sh, k = e, W = ge(k.__datetimeFormatters) ? k.__datetimeFormatters : /* @__PURE__ */ new Map(), B = ge(k.__numberFormatters) ? k.__numberFormatters : /* @__PURE__ */ new Map(), K = ge(k.__meta) ? k.__meta : {};
  tl++;
  const Y = {
    version: t,
    cid: tl,
    locale: n,
    fallbackLocale: r,
    messages: s,
    modifiers: l,
    pluralRules: o,
    missing: f,
    missingWarn: m,
    fallbackWarn: h,
    fallbackFormat: d,
    unresolving: N,
    postTranslation: F,
    processor: S,
    warnHtmlMessage: D,
    escapeParameter: b,
    messageCompiler: C,
    messageResolver: I,
    localeFallbacker: O,
    fallbackContext: y,
    onWarn: R,
    __meta: K
  };
  return Y.datetimeFormats = i, Y.numberFormats = a, Y.__datetimeFormatters = W, Y.__numberFormatters = B, __INTLIFY_PROD_DEVTOOLS__ && qh(Y, t, K), Y;
}
function Ri(e, t, n, r, s) {
  const { missing: i, onWarn: a } = e;
  if (i !== null) {
    const l = i(e, n, t, s);
    return j(l) ? l : t;
  } else
    return t;
}
function wn(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
const ap = (e) => e;
let nl = /* @__PURE__ */ Object.create(null);
function lp(e, t = {}) {
  {
    const r = (t.onCacheKey || ap)(e), s = nl[r];
    if (s)
      return s;
    let i = !1;
    const a = t.onError || lh;
    t.onError = (f) => {
      i = !0, a(f);
    };
    const { code: l } = Nh(e, t), o = new Function(`return ${l}`)();
    return i ? o : nl[r] = o;
  }
}
let ou = ce.__EXTEND_POINT__;
const fs = () => ++ou, on = {
  INVALID_ARGUMENT: ou,
  INVALID_DATE_ARGUMENT: fs(),
  INVALID_ISO_DATE_ARGUMENT: fs(),
  __EXTEND_POINT__: fs()
};
function un(e) {
  return xr(e, null, void 0);
}
const rl = () => "", Tt = (e) => Le(e);
function sl(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: s, messageCompiler: i, fallbackLocale: a, messages: l } = e, [o, f] = ws(...t), m = ie(f.missingWarn) ? f.missingWarn : e.missingWarn, h = ie(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn, d = ie(f.escapeParameter) ? f.escapeParameter : e.escapeParameter, N = !!f.resolvedMessage, F = j(f.default) || ie(f.default) ? ie(f.default) ? i ? o : () => o : f.default : n ? i ? o : () => o : "", S = n || F !== "", D = j(f.locale) ? f.locale : e.locale;
  d && op(f);
  let [b, C, I] = N ? [
    o,
    D,
    l[D] || {}
  ] : uu(e, o, D, a, h, m), O = b, y = o;
  if (!N && !(j(O) || Tt(O)) && S && (O = F, y = O), !N && (!(j(O) || Tt(O)) || !j(C)))
    return s ? $r : o;
  let R = !1;
  const k = () => {
    R = !0;
  }, W = Tt(O) ? O : cu(e, o, C, O, y, k);
  if (R)
    return O;
  const B = fp(e, C, I, f), K = Wh(B), Y = up(e, W, K), z = r ? r(Y, o) : Y;
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const te = {
      timestamp: Date.now(),
      key: j(o) ? o : Tt(O) ? O.key : "",
      locale: C || (Tt(O) ? O.locale : ""),
      format: j(O) ? O : Tt(O) ? O.source : "",
      message: z
    };
    te.meta = Ve({}, e.__meta, rp() || {}), Kh(te);
  }
  return z;
}
function op(e) {
  _e(e.list) ? e.list = e.list.map((t) => j(t) ? qa(t) : t) : ge(e.named) && Object.keys(e.named).forEach((t) => {
    j(e.named[t]) && (e.named[t] = qa(e.named[t]));
  });
}
function uu(e, t, n, r, s, i) {
  const { messages: a, onWarn: l, messageResolver: o, localeFallbacker: f } = e, m = f(e, r, n);
  let h = {}, d, N = null;
  const F = "translate";
  for (let S = 0; S < m.length && (d = m[S], h = a[d] || {}, (N = o(h, t)) === null && (N = h[t]), !(j(N) || Le(N))); S++) {
    const D = Ri(
      e,
      t,
      d,
      i,
      F
    );
    D !== t && (N = D);
  }
  return [N, d, h];
}
function cu(e, t, n, r, s, i) {
  const { messageCompiler: a, warnHtmlMessage: l } = e;
  if (Tt(r)) {
    const f = r;
    return f.locale = f.locale || n, f.key = f.key || t, f;
  }
  if (a == null) {
    const f = () => r;
    return f.locale = n, f.key = t, f;
  }
  const o = a(r, cp(e, n, s, r, l, i));
  return o.locale = n, o.key = t, o.source = r, o;
}
function up(e, t, n) {
  return t(n);
}
function ws(...e) {
  const [t, n, r] = e, s = {};
  if (!j(t) && !ke(t) && !Tt(t))
    throw un(on.INVALID_ARGUMENT);
  const i = ke(t) ? String(t) : (Tt(t), t);
  return ke(n) ? s.plural = n : j(n) ? s.default = n : Z(n) && !Dr(n) ? s.named = n : _e(n) && (s.list = n), ke(r) ? s.plural = r : j(r) ? s.default = r : Z(r) && Ve(s, r), [i, s];
}
function cp(e, t, n, r, s, i) {
  return {
    warnHtmlMessage: s,
    onError: (a) => {
      throw i && i(a), a;
    },
    onCacheKey: (a) => th(t, n, a)
  };
}
function fp(e, t, n, r) {
  const { modifiers: s, pluralRules: i, messageResolver: a, fallbackLocale: l, fallbackWarn: o, missingWarn: f, fallbackContext: m } = e, d = {
    locale: t,
    modifiers: s,
    pluralRules: i,
    messages: (N) => {
      let F = a(n, N);
      if (F == null && m) {
        const [, , S] = uu(m, N, t, l, o, f);
        F = a(S, N);
      }
      if (j(F)) {
        let S = !1;
        const b = cu(e, N, t, F, N, () => {
          S = !0;
        });
        return S ? rl : b;
      } else
        return Tt(F) ? F : rl;
    }
  };
  return e.processor && (d.processor = e.processor), r.list && (d.list = r.list), r.named && (d.named = r.named), ke(r.plural) && (d.pluralIndex = r.plural), d;
}
function il(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: s, onWarn: i, localeFallbacker: a } = e, { __datetimeFormatters: l } = e, [o, f, m, h] = Fs(...t), d = ie(m.missingWarn) ? m.missingWarn : e.missingWarn;
  ie(m.fallbackWarn) ? m.fallbackWarn : e.fallbackWarn;
  const N = !!m.part, F = j(m.locale) ? m.locale : e.locale, S = a(
    e,
    s,
    F
  );
  if (!j(o) || o === "")
    return new Intl.DateTimeFormat(F, h).format(f);
  let D = {}, b, C = null;
  const I = "datetime format";
  for (let R = 0; R < S.length && (b = S[R], D = n[b] || {}, C = D[o], !Z(C)); R++)
    Ri(e, o, b, d, I);
  if (!Z(C) || !j(b))
    return r ? $r : o;
  let O = `${b}__${o}`;
  Dr(h) || (O = `${O}__${JSON.stringify(h)}`);
  let y = l.get(O);
  return y || (y = new Intl.DateTimeFormat(b, Ve({}, C, h)), l.set(O, y)), N ? y.formatToParts(f) : y.format(f);
}
const fu = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function Fs(...e) {
  const [t, n, r, s] = e, i = {};
  let a = {}, l;
  if (j(t)) {
    const o = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!o)
      throw un(on.INVALID_ISO_DATE_ARGUMENT);
    const f = o[3] ? o[3].trim().startsWith("T") ? `${o[1].trim()}${o[3].trim()}` : `${o[1].trim()}T${o[3].trim()}` : o[1].trim();
    l = new Date(f);
    try {
      l.toISOString();
    } catch {
      throw un(on.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (rh(t)) {
    if (isNaN(t.getTime()))
      throw un(on.INVALID_DATE_ARGUMENT);
    l = t;
  } else if (ke(t))
    l = t;
  else
    throw un(on.INVALID_ARGUMENT);
  return j(n) ? i.key = n : Z(n) && Object.keys(n).forEach((o) => {
    fu.includes(o) ? a[o] = n[o] : i[o] = n[o];
  }), j(r) ? i.locale = r : Z(r) && (a = r), Z(s) && (a = s), [i.key || "", l, i, a];
}
function al(e, t, n) {
  const r = e;
  for (const s in n) {
    const i = `${t}__${s}`;
    !r.__datetimeFormatters.has(i) || r.__datetimeFormatters.delete(i);
  }
}
function ll(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: s, onWarn: i, localeFallbacker: a } = e, { __numberFormatters: l } = e, [o, f, m, h] = ks(...t), d = ie(m.missingWarn) ? m.missingWarn : e.missingWarn;
  ie(m.fallbackWarn) ? m.fallbackWarn : e.fallbackWarn;
  const N = !!m.part, F = j(m.locale) ? m.locale : e.locale, S = a(
    e,
    s,
    F
  );
  if (!j(o) || o === "")
    return new Intl.NumberFormat(F, h).format(f);
  let D = {}, b, C = null;
  const I = "number format";
  for (let R = 0; R < S.length && (b = S[R], D = n[b] || {}, C = D[o], !Z(C)); R++)
    Ri(e, o, b, d, I);
  if (!Z(C) || !j(b))
    return r ? $r : o;
  let O = `${b}__${o}`;
  Dr(h) || (O = `${O}__${JSON.stringify(h)}`);
  let y = l.get(O);
  return y || (y = new Intl.NumberFormat(b, Ve({}, C, h)), l.set(O, y)), N ? y.formatToParts(f) : y.format(f);
}
const du = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function ks(...e) {
  const [t, n, r, s] = e, i = {};
  let a = {};
  if (!ke(t))
    throw un(on.INVALID_ARGUMENT);
  const l = t;
  return j(n) ? i.key = n : Z(n) && Object.keys(n).forEach((o) => {
    du.includes(o) ? a[o] = n[o] : i[o] = n[o];
  }), j(r) ? i.locale = r : Z(r) && (a = r), Z(s) && (a = s), [i.key || "", l, i, a];
}
function ol(e, t, n) {
  const r = e;
  for (const s in n) {
    const i = `${t}__${s}`;
    !r.__numberFormatters.has(i) || r.__numberFormatters.delete(i);
  }
}
typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && ($n().__INTLIFY_PROD_DEVTOOLS__ = !1);
/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const dp = "9.2.2";
function mp() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && ($n().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && ($n().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && ($n().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
Gh.__EXTEND_POINT__;
let mu = ce.__EXTEND_POINT__;
const et = () => ++mu, Se = {
  UNEXPECTED_RETURN_TYPE: mu,
  INVALID_ARGUMENT: et(),
  MUST_BE_CALL_SETUP_TOP: et(),
  NOT_INSLALLED: et(),
  NOT_AVAILABLE_IN_LEGACY_MODE: et(),
  REQUIRED_VALUE: et(),
  INVALID_VALUE: et(),
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: et(),
  NOT_INSLALLED_WITH_PROVIDE: et(),
  UNEXPECTED_ERROR: et(),
  NOT_COMPATIBLE_LEGACY_VUE_I18N: et(),
  BRIDGE_SUPPORT_VUE_2_ONLY: et(),
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: et(),
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: et(),
  __EXTEND_POINT__: et()
};
function Pe(e, ...t) {
  return xr(e, null, void 0);
}
const Ps = /* @__PURE__ */ jt("__transrateVNode"), Ms = /* @__PURE__ */ jt("__datetimeParts"), Ds = /* @__PURE__ */ jt("__numberParts"), hu = jt("__setPluralRules");
jt("__intlifyMeta");
const pu = /* @__PURE__ */ jt("__injectWithOption");
function xs(e) {
  if (!ge(e))
    return e;
  for (const t in e)
    if (!!Li(e, t))
      if (!t.includes("."))
        ge(e[t]) && xs(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let s = e;
        for (let i = 0; i < r; i++)
          n[i] in s || (s[n[i]] = {}), s = s[n[i]];
        s[n[r]] = e[t], delete e[t], ge(s[n[r]]) && xs(s[n[r]]);
      }
  return e;
}
function Vr(e, t) {
  const { messages: n, __i18n: r, messageResolver: s, flatJson: i } = t, a = Z(n) ? n : _e(r) ? {} : { [e]: {} };
  if (_e(r) && r.forEach((l) => {
    if ("locale" in l && "resource" in l) {
      const { locale: o, resource: f } = l;
      o ? (a[o] = a[o] || {}, Vn(f, a[o])) : Vn(f, a);
    } else
      j(l) && Vn(JSON.parse(l), a);
  }), s == null && i)
    for (const l in a)
      Li(a, l) && xs(a[l]);
  return a;
}
const sr = (e) => !ge(e) || _e(e);
function Vn(e, t) {
  if (sr(e) || sr(t))
    throw Pe(Se.INVALID_VALUE);
  for (const n in e)
    Li(e, n) && (sr(e[n]) || sr(t[n]) ? t[n] = e[n] : Vn(e[n], t[n]));
}
function _u(e) {
  return e.type;
}
function gu(e, t, n) {
  let r = ge(t.messages) ? t.messages : {};
  "__i18nGlobal" in n && (r = Vr(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const s = Object.keys(r);
  s.length && s.forEach((i) => {
    e.mergeLocaleMessage(i, r[i]);
  });
  {
    if (ge(t.datetimeFormats)) {
      const i = Object.keys(t.datetimeFormats);
      i.length && i.forEach((a) => {
        e.mergeDateTimeFormat(a, t.datetimeFormats[a]);
      });
    }
    if (ge(t.numberFormats)) {
      const i = Object.keys(t.numberFormats);
      i.length && i.forEach((a) => {
        e.mergeNumberFormat(a, t.numberFormats[a]);
      });
    }
  }
}
function ul(e) {
  return fe(Gn, null, e, 0);
}
const cl = "__INTLIFY_META__";
let fl = 0;
function dl(e) {
  return (t, n, r, s) => e(n, r, Zt() || void 0, s);
}
const hp = () => {
  const e = Zt();
  let t = null;
  return e && (t = _u(e)[cl]) ? { [cl]: t } : null;
};
function Si(e = {}, t) {
  const { __root: n } = e, r = n === void 0;
  let s = ie(e.inheritLocale) ? e.inheritLocale : !0;
  const i = me(
    n && s ? n.locale.value : j(e.locale) ? e.locale : Xn
  ), a = me(
    n && s ? n.fallbackLocale.value : j(e.fallbackLocale) || _e(e.fallbackLocale) || Z(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), l = me(Vr(i.value, e)), o = me(Z(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), f = me(Z(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let m = n ? n.missingWarn : ie(e.missingWarn) || Ut(e.missingWarn) ? e.missingWarn : !0, h = n ? n.fallbackWarn : ie(e.fallbackWarn) || Ut(e.fallbackWarn) ? e.fallbackWarn : !0, d = n ? n.fallbackRoot : ie(e.fallbackRoot) ? e.fallbackRoot : !0, N = !!e.fallbackFormat, F = Le(e.missing) ? e.missing : null, S = Le(e.missing) ? dl(e.missing) : null, D = Le(e.postTranslation) ? e.postTranslation : null, b = n ? n.warnHtmlMessage : ie(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, C = !!e.escapeParameter;
  const I = n ? n.modifiers : Z(e.modifiers) ? e.modifiers : {};
  let O = e.pluralRules || n && n.pluralRules, y;
  y = (() => {
    r && el(null);
    const g = {
      version: dp,
      locale: i.value,
      fallbackLocale: a.value,
      messages: l.value,
      modifiers: I,
      pluralRules: O,
      missing: S === null ? void 0 : S,
      missingWarn: m,
      fallbackWarn: h,
      fallbackFormat: N,
      unresolving: !0,
      postTranslation: D === null ? void 0 : D,
      warnHtmlMessage: b,
      escapeParameter: C,
      messageResolver: e.messageResolver,
      __meta: { framework: "vue" }
    };
    g.datetimeFormats = o.value, g.numberFormats = f.value, g.__datetimeFormatters = Z(y) ? y.__datetimeFormatters : void 0, g.__numberFormatters = Z(y) ? y.__numberFormatters : void 0;
    const T = ip(g);
    return r && el(T), T;
  })(), wn(y, i.value, a.value);
  function k() {
    return [
      i.value,
      a.value,
      l.value,
      o.value,
      f.value
    ];
  }
  const W = ae({
    get: () => i.value,
    set: (g) => {
      i.value = g, y.locale = i.value;
    }
  }), B = ae({
    get: () => a.value,
    set: (g) => {
      a.value = g, y.fallbackLocale = a.value, wn(y, i.value, g);
    }
  }), K = ae(() => l.value), Y = /* @__PURE__ */ ae(() => o.value), z = /* @__PURE__ */ ae(() => f.value);
  function te() {
    return Le(D) ? D : null;
  }
  function de(g) {
    D = g, y.postTranslation = g;
  }
  function Te() {
    return F;
  }
  function J(g) {
    g !== null && (S = dl(g)), F = g, y.missing = S;
  }
  const X = (g, T, $, x, H, G) => {
    k();
    let Q;
    if (__INTLIFY_PROD_DEVTOOLS__)
      try {
        Za(hp()), r || (y.fallbackContext = n ? sp() : void 0), Q = g(y);
      } finally {
        Za(null), r || (y.fallbackContext = void 0);
      }
    else
      Q = g(y);
    if (ke(Q) && Q === $r) {
      const [oe, Ze] = T();
      return n && d ? x(n) : H(oe);
    } else {
      if (G(Q))
        return Q;
      throw Pe(Se.UNEXPECTED_RETURN_TYPE);
    }
  };
  function ne(...g) {
    return X((T) => Reflect.apply(sl, null, [T, ...g]), () => ws(...g), "translate", (T) => Reflect.apply(T.t, T, [...g]), (T) => T, (T) => j(T));
  }
  function Ne(...g) {
    const [T, $, x] = g;
    if (x && !ge(x))
      throw Pe(Se.INVALID_ARGUMENT);
    return ne(T, $, Ve({ resolvedMessage: !0 }, x || {}));
  }
  function we(...g) {
    return X((T) => Reflect.apply(il, null, [T, ...g]), () => Fs(...g), "datetime format", (T) => Reflect.apply(T.d, T, [...g]), () => za, (T) => j(T));
  }
  function Ie(...g) {
    return X((T) => Reflect.apply(ll, null, [T, ...g]), () => ks(...g), "number format", (T) => Reflect.apply(T.n, T, [...g]), () => za, (T) => j(T));
  }
  function ye(g) {
    return g.map((T) => j(T) || ke(T) || ie(T) ? ul(String(T)) : T);
  }
  const je = {
    normalize: ye,
    interpolate: (g) => g,
    type: "vnode"
  };
  function ct(...g) {
    return X(
      (T) => {
        let $;
        const x = T;
        try {
          x.processor = je, $ = Reflect.apply(sl, null, [x, ...g]);
        } finally {
          x.processor = null;
        }
        return $;
      },
      () => ws(...g),
      "translate",
      (T) => T[Ps](...g),
      (T) => [ul(T)],
      (T) => _e(T)
    );
  }
  function V(...g) {
    return X(
      (T) => Reflect.apply(ll, null, [T, ...g]),
      () => ks(...g),
      "number format",
      (T) => T[Ds](...g),
      () => [],
      (T) => j(T) || _e(T)
    );
  }
  function re(...g) {
    return X(
      (T) => Reflect.apply(il, null, [T, ...g]),
      () => Fs(...g),
      "datetime format",
      (T) => T[Ms](...g),
      () => [],
      (T) => j(T) || _e(T)
    );
  }
  function pe(g) {
    O = g, y.pluralRules = O;
  }
  function Fe(g, T) {
    const $ = j(T) ? T : i.value, x = _($);
    return y.messageResolver(x, g) !== null;
  }
  function Ce(g) {
    let T = null;
    const $ = nu(y, a.value, i.value);
    for (let x = 0; x < $.length; x++) {
      const H = l.value[$[x]] || {}, G = y.messageResolver(H, g);
      if (G != null) {
        T = G;
        break;
      }
    }
    return T;
  }
  function He(g) {
    const T = Ce(g);
    return T != null ? T : n ? n.tm(g) || {} : {};
  }
  function _(g) {
    return l.value[g] || {};
  }
  function u(g, T) {
    l.value[g] = T, y.messages = l.value;
  }
  function c(g, T) {
    l.value[g] = l.value[g] || {}, Vn(T, l.value[g]), y.messages = l.value;
  }
  function p(g) {
    return o.value[g] || {};
  }
  function A(g, T) {
    o.value[g] = T, y.datetimeFormats = o.value, al(y, g, T);
  }
  function w(g, T) {
    o.value[g] = Ve(o.value[g] || {}, T), y.datetimeFormats = o.value, al(y, g, T);
  }
  function P(g) {
    return f.value[g] || {};
  }
  function M(g, T) {
    f.value[g] = T, y.numberFormats = f.value, ol(y, g, T);
  }
  function v(g, T) {
    f.value[g] = Ve(f.value[g] || {}, T), y.numberFormats = f.value, ol(y, g, T);
  }
  fl++, n && Rs && (Re(n.locale, (g) => {
    s && (i.value = g, y.locale = g, wn(y, i.value, a.value));
  }), Re(n.fallbackLocale, (g) => {
    s && (a.value = g, y.fallbackLocale = g, wn(y, i.value, a.value));
  }));
  const E = {
    id: fl,
    locale: W,
    fallbackLocale: B,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(g) {
      s = g, g && n && (i.value = n.locale.value, a.value = n.fallbackLocale.value, wn(y, i.value, a.value));
    },
    get availableLocales() {
      return Object.keys(l.value).sort();
    },
    messages: K,
    get modifiers() {
      return I;
    },
    get pluralRules() {
      return O || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return m;
    },
    set missingWarn(g) {
      m = g, y.missingWarn = m;
    },
    get fallbackWarn() {
      return h;
    },
    set fallbackWarn(g) {
      h = g, y.fallbackWarn = h;
    },
    get fallbackRoot() {
      return d;
    },
    set fallbackRoot(g) {
      d = g;
    },
    get fallbackFormat() {
      return N;
    },
    set fallbackFormat(g) {
      N = g, y.fallbackFormat = N;
    },
    get warnHtmlMessage() {
      return b;
    },
    set warnHtmlMessage(g) {
      b = g, y.warnHtmlMessage = g;
    },
    get escapeParameter() {
      return C;
    },
    set escapeParameter(g) {
      C = g, y.escapeParameter = g;
    },
    t: ne,
    getLocaleMessage: _,
    setLocaleMessage: u,
    mergeLocaleMessage: c,
    getPostTranslationHandler: te,
    setPostTranslationHandler: de,
    getMissingHandler: Te,
    setMissingHandler: J,
    [hu]: pe
  };
  return E.datetimeFormats = Y, E.numberFormats = z, E.rt = Ne, E.te = Fe, E.tm = He, E.d = we, E.n = Ie, E.getDateTimeFormat = p, E.setDateTimeFormat = A, E.mergeDateTimeFormat = w, E.getNumberFormat = P, E.setNumberFormat = M, E.mergeNumberFormat = v, E[pu] = e.__injectWithOption, E[Ps] = ct, E[Ms] = re, E[Ds] = V, E;
}
function pp(e) {
  const t = j(e.locale) ? e.locale : Xn, n = j(e.fallbackLocale) || _e(e.fallbackLocale) || Z(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = Le(e.missing) ? e.missing : void 0, s = ie(e.silentTranslationWarn) || Ut(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, i = ie(e.silentFallbackWarn) || Ut(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, a = ie(e.fallbackRoot) ? e.fallbackRoot : !0, l = !!e.formatFallbackMessages, o = Z(e.modifiers) ? e.modifiers : {}, f = e.pluralizationRules, m = Le(e.postTranslation) ? e.postTranslation : void 0, h = j(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, d = !!e.escapeParameterHtml, N = ie(e.sync) ? e.sync : !0;
  let F = e.messages;
  if (Z(e.sharedMessages)) {
    const y = e.sharedMessages;
    F = Object.keys(y).reduce((k, W) => {
      const B = k[W] || (k[W] = {});
      return Ve(B, y[W]), k;
    }, F || {});
  }
  const { __i18n: S, __root: D, __injectWithOption: b } = e, C = e.datetimeFormats, I = e.numberFormats, O = e.flatJson;
  return {
    locale: t,
    fallbackLocale: n,
    messages: F,
    flatJson: O,
    datetimeFormats: C,
    numberFormats: I,
    missing: r,
    missingWarn: s,
    fallbackWarn: i,
    fallbackRoot: a,
    fallbackFormat: l,
    modifiers: o,
    pluralRules: f,
    postTranslation: m,
    warnHtmlMessage: h,
    escapeParameter: d,
    messageResolver: e.messageResolver,
    inheritLocale: N,
    __i18n: S,
    __root: D,
    __injectWithOption: b
  };
}
function $s(e = {}, t) {
  {
    const n = Si(pp(e)), r = {
      id: n.id,
      get locale() {
        return n.locale.value;
      },
      set locale(s) {
        n.locale.value = s;
      },
      get fallbackLocale() {
        return n.fallbackLocale.value;
      },
      set fallbackLocale(s) {
        n.fallbackLocale.value = s;
      },
      get messages() {
        return n.messages.value;
      },
      get datetimeFormats() {
        return n.datetimeFormats.value;
      },
      get numberFormats() {
        return n.numberFormats.value;
      },
      get availableLocales() {
        return n.availableLocales;
      },
      get formatter() {
        return {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(s) {
      },
      get missing() {
        return n.getMissingHandler();
      },
      set missing(s) {
        n.setMissingHandler(s);
      },
      get silentTranslationWarn() {
        return ie(n.missingWarn) ? !n.missingWarn : n.missingWarn;
      },
      set silentTranslationWarn(s) {
        n.missingWarn = ie(s) ? !s : s;
      },
      get silentFallbackWarn() {
        return ie(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn;
      },
      set silentFallbackWarn(s) {
        n.fallbackWarn = ie(s) ? !s : s;
      },
      get modifiers() {
        return n.modifiers;
      },
      get formatFallbackMessages() {
        return n.fallbackFormat;
      },
      set formatFallbackMessages(s) {
        n.fallbackFormat = s;
      },
      get postTranslation() {
        return n.getPostTranslationHandler();
      },
      set postTranslation(s) {
        n.setPostTranslationHandler(s);
      },
      get sync() {
        return n.inheritLocale;
      },
      set sync(s) {
        n.inheritLocale = s;
      },
      get warnHtmlInMessage() {
        return n.warnHtmlMessage ? "warn" : "off";
      },
      set warnHtmlInMessage(s) {
        n.warnHtmlMessage = s !== "off";
      },
      get escapeParameterHtml() {
        return n.escapeParameter;
      },
      set escapeParameterHtml(s) {
        n.escapeParameter = s;
      },
      get preserveDirectiveContent() {
        return !0;
      },
      set preserveDirectiveContent(s) {
      },
      get pluralizationRules() {
        return n.pluralRules || {};
      },
      __composer: n,
      t(...s) {
        const [i, a, l] = s, o = {};
        let f = null, m = null;
        if (!j(i))
          throw Pe(Se.INVALID_ARGUMENT);
        const h = i;
        return j(a) ? o.locale = a : _e(a) ? f = a : Z(a) && (m = a), _e(l) ? f = l : Z(l) && (m = l), Reflect.apply(n.t, n, [
          h,
          f || m || {},
          o
        ]);
      },
      rt(...s) {
        return Reflect.apply(n.rt, n, [...s]);
      },
      tc(...s) {
        const [i, a, l] = s, o = { plural: 1 };
        let f = null, m = null;
        if (!j(i))
          throw Pe(Se.INVALID_ARGUMENT);
        const h = i;
        return j(a) ? o.locale = a : ke(a) ? o.plural = a : _e(a) ? f = a : Z(a) && (m = a), j(l) ? o.locale = l : _e(l) ? f = l : Z(l) && (m = l), Reflect.apply(n.t, n, [
          h,
          f || m || {},
          o
        ]);
      },
      te(s, i) {
        return n.te(s, i);
      },
      tm(s) {
        return n.tm(s);
      },
      getLocaleMessage(s) {
        return n.getLocaleMessage(s);
      },
      setLocaleMessage(s, i) {
        n.setLocaleMessage(s, i);
      },
      mergeLocaleMessage(s, i) {
        n.mergeLocaleMessage(s, i);
      },
      d(...s) {
        return Reflect.apply(n.d, n, [...s]);
      },
      getDateTimeFormat(s) {
        return n.getDateTimeFormat(s);
      },
      setDateTimeFormat(s, i) {
        n.setDateTimeFormat(s, i);
      },
      mergeDateTimeFormat(s, i) {
        n.mergeDateTimeFormat(s, i);
      },
      n(...s) {
        return Reflect.apply(n.n, n, [...s]);
      },
      getNumberFormat(s) {
        return n.getNumberFormat(s);
      },
      setNumberFormat(s, i) {
        n.setNumberFormat(s, i);
      },
      mergeNumberFormat(s, i) {
        n.mergeNumberFormat(s, i);
      },
      getChoiceIndex(s, i) {
        return -1;
      },
      __onComponentInstanceCreated(s) {
        const { componentInstanceCreatedListener: i } = e;
        i && i(s, r);
      }
    };
    return r;
  }
}
const wi = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    validator: (e) => e === "parent" || e === "global",
    default: "parent"
  },
  i18n: {
    type: Object
  }
};
function _p({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, s) => r = [
    ...r,
    ..._e(s.children) ? s.children : [s]
  ], []) : t.reduce((n, r) => {
    const s = e[r];
    return s && (n[r] = s()), n;
  }, {});
}
function vu(e) {
  return ut;
}
const ml = {
  name: "i18n-t",
  props: Ve({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      validator: (e) => ke(e) || !isNaN(e)
    }
  }, wi),
  setup(e, t) {
    const { slots: n, attrs: r } = t, s = e.i18n || Jn({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const i = Object.keys(n).filter((h) => h !== "_"), a = {};
      e.locale && (a.locale = e.locale), e.plural !== void 0 && (a.plural = j(e.plural) ? +e.plural : e.plural);
      const l = _p(t, i), o = s[Ps](e.keypath, l, a), f = Ve({}, r), m = j(e.tag) || ge(e.tag) ? e.tag : vu();
      return gn(m, f, o);
    };
  }
};
function gp(e) {
  return _e(e) && !j(e[0]);
}
function bu(e, t, n, r) {
  const { slots: s, attrs: i } = t;
  return () => {
    const a = { part: !0 };
    let l = {};
    e.locale && (a.locale = e.locale), j(e.format) ? a.key = e.format : ge(e.format) && (j(e.format.key) && (a.key = e.format.key), l = Object.keys(e.format).reduce((d, N) => n.includes(N) ? Ve({}, d, { [N]: e.format[N] }) : d, {}));
    const o = r(e.value, a, l);
    let f = [a.key];
    _e(o) ? f = o.map((d, N) => {
      const F = s[d.type], S = F ? F({ [d.type]: d.value, index: N, parts: o }) : [d.value];
      return gp(S) && (S[0].key = `${d.type}-${N}`), S;
    }) : j(o) && (f = [o]);
    const m = Ve({}, i), h = j(e.tag) || ge(e.tag) ? e.tag : vu();
    return gn(h, m, f);
  };
}
const hl = {
  name: "i18n-n",
  props: Ve({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, wi),
  setup(e, t) {
    const n = e.i18n || Jn({ useScope: "parent", __useComponent: !0 });
    return bu(e, t, du, (...r) => n[Ds](...r));
  }
}, pl = {
  name: "i18n-d",
  props: Ve({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, wi),
  setup(e, t) {
    const n = e.i18n || Jn({ useScope: "parent", __useComponent: !0 });
    return bu(e, t, fu, (...r) => n[Ms](...r));
  }
};
function vp(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function bp(e) {
  const t = (a) => {
    const { instance: l, modifiers: o, value: f } = a;
    if (!l || !l.$)
      throw Pe(Se.UNEXPECTED_ERROR);
    const m = vp(e, l.$), h = _l(f);
    return [
      Reflect.apply(m.t, m, [...gl(h)]),
      m
    ];
  };
  return {
    created: (a, l) => {
      const [o, f] = t(l);
      Rs && e.global === f && (a.__i18nWatcher = Re(f.locale, () => {
        l.instance && l.instance.$forceUpdate();
      })), a.__composer = f, a.textContent = o;
    },
    unmounted: (a) => {
      Rs && a.__i18nWatcher && (a.__i18nWatcher(), a.__i18nWatcher = void 0, delete a.__i18nWatcher), a.__composer && (a.__composer = void 0, delete a.__composer);
    },
    beforeUpdate: (a, { value: l }) => {
      if (a.__composer) {
        const o = a.__composer, f = _l(l);
        a.textContent = Reflect.apply(o.t, o, [
          ...gl(f)
        ]);
      }
    },
    getSSRProps: (a) => {
      const [l] = t(a);
      return { textContent: l };
    }
  };
}
function _l(e) {
  if (j(e))
    return { path: e };
  if (Z(e)) {
    if (!("path" in e))
      throw Pe(Se.REQUIRED_VALUE, "path");
    return e;
  } else
    throw Pe(Se.INVALID_VALUE);
}
function gl(e) {
  const { path: t, locale: n, args: r, choice: s, plural: i } = e, a = {}, l = r || {};
  return j(n) && (a.locale = n), ke(s) && (a.plural = s), ke(i) && (a.plural = i), [t, l, a];
}
function yp(e, t, ...n) {
  const r = Z(n[0]) ? n[0] : {}, s = !!r.useI18nComponentName;
  (ie(r.globalInstall) ? r.globalInstall : !0) && (e.component(s ? "i18n" : ml.name, ml), e.component(hl.name, hl), e.component(pl.name, pl)), e.directive("t", bp(t));
}
function Ep(e, t, n) {
  return {
    beforeCreate() {
      const r = Zt();
      if (!r)
        throw Pe(Se.UNEXPECTED_ERROR);
      const s = this.$options;
      if (s.i18n) {
        const i = s.i18n;
        s.__i18n && (i.__i18n = s.__i18n), i.__root = t, this === this.$root ? this.$i18n = vl(e, i) : (i.__injectWithOption = !0, this.$i18n = $s(i));
      } else
        s.__i18n ? this === this.$root ? this.$i18n = vl(e, s) : this.$i18n = $s({
          __i18n: s.__i18n,
          __injectWithOption: !0,
          __root: t
        }) : this.$i18n = e;
      s.__i18nGlobal && gu(t, s, s), e.__onComponentInstanceCreated(this.$i18n), n.__setInstance(r, this.$i18n), this.$t = (...i) => this.$i18n.t(...i), this.$rt = (...i) => this.$i18n.rt(...i), this.$tc = (...i) => this.$i18n.tc(...i), this.$te = (i, a) => this.$i18n.te(i, a), this.$d = (...i) => this.$i18n.d(...i), this.$n = (...i) => this.$i18n.n(...i), this.$tm = (i) => this.$i18n.tm(i);
    },
    mounted() {
    },
    unmounted() {
      const r = Zt();
      if (!r)
        throw Pe(Se.UNEXPECTED_ERROR);
      delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, n.__deleteInstance(r), delete this.$i18n;
    }
  };
}
function vl(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[hu](t.pluralizationRules || e.pluralizationRules);
  const n = Vr(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((r) => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((r) => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats).forEach((r) => e.mergeNumberFormat(r, t.numberFormats[r])), e;
}
const yu = /* @__PURE__ */ jt("global-vue-i18n");
function Op(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && ie(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, r = ie(e.globalInjection) ? e.globalInjection : !0, s = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, i = /* @__PURE__ */ new Map(), [a, l] = Tp(e, n), o = jt("");
  function f(d) {
    return i.get(d) || null;
  }
  function m(d, N) {
    i.set(d, N);
  }
  function h(d) {
    i.delete(d);
  }
  {
    const d = {
      get mode() {
        return __VUE_I18N_LEGACY_API__ && n ? "legacy" : "composition";
      },
      get allowComposition() {
        return s;
      },
      async install(N, ...F) {
        N.__VUE_I18N_SYMBOL__ = o, N.provide(N.__VUE_I18N_SYMBOL__, d), !n && r && Fp(N, d.global), __VUE_I18N_FULL_INSTALL__ && yp(N, d, ...F), __VUE_I18N_LEGACY_API__ && n && N.mixin(Ep(l, l.__composer, d));
        const S = N.unmount;
        N.unmount = () => {
          d.dispose(), S();
        };
      },
      get global() {
        return l;
      },
      dispose() {
        a.stop();
      },
      __instances: i,
      __getInstance: f,
      __setInstance: m,
      __deleteInstance: h
    };
    return d;
  }
}
function Jn(e = {}) {
  const t = Zt();
  if (t == null)
    throw Pe(Se.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Pe(Se.NOT_INSLALLED);
  const n = Ip(t), r = Lp(n), s = _u(t), i = Ap(e, s);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw Pe(Se.NOT_AVAILABLE_IN_LEGACY_MODE);
    return Rp(t, i, r, e);
  }
  if (i === "global")
    return gu(r, e, s), r;
  if (i === "parent") {
    let o = Np(n, t, e.__useComponent);
    return o == null && (o = r), o;
  }
  const a = n;
  let l = a.__getInstance(t);
  if (l == null) {
    const o = Ve({}, e);
    "__i18n" in s && (o.__i18n = s.__i18n), r && (o.__root = r), l = Si(o), Cp(a, t), a.__setInstance(t, l);
  }
  return l;
}
function Tp(e, t, n) {
  const r = Pu();
  {
    const s = __VUE_I18N_LEGACY_API__ && t ? r.run(() => $s(e)) : r.run(() => Si(e));
    if (s == null)
      throw Pe(Se.UNEXPECTED_ERROR);
    return [r, s];
  }
}
function Ip(e) {
  {
    const t = zt(e.isCE ? yu : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw Pe(e.isCE ? Se.NOT_INSLALLED_WITH_PROVIDE : Se.UNEXPECTED_ERROR);
    return t;
  }
}
function Ap(e, t) {
  return Dr(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Lp(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Np(e, t, n = !1) {
  let r = null;
  const s = t.root;
  let i = t.parent;
  for (; i != null; ) {
    const a = e;
    if (e.mode === "composition")
      r = a.__getInstance(i);
    else if (__VUE_I18N_LEGACY_API__) {
      const l = a.__getInstance(i);
      l != null && (r = l.__composer, n && r && !r[pu] && (r = null));
    }
    if (r != null || s === i)
      break;
    i = i.parent;
  }
  return r;
}
function Cp(e, t, n) {
  Ln(() => {
  }, t), ii(() => {
    e.__deleteInstance(t);
  }, t);
}
function Rp(e, t, n, r = {}) {
  const s = t === "local", i = oc(null);
  if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw Pe(Se.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const a = ie(r.inheritLocale) ? r.inheritLocale : !0, l = me(
    s && a ? n.locale.value : j(r.locale) ? r.locale : Xn
  ), o = me(
    s && a ? n.fallbackLocale.value : j(r.fallbackLocale) || _e(r.fallbackLocale) || Z(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : l.value
  ), f = me(Vr(l.value, r)), m = me(Z(r.datetimeFormats) ? r.datetimeFormats : { [l.value]: {} }), h = me(Z(r.numberFormats) ? r.numberFormats : { [l.value]: {} }), d = s ? n.missingWarn : ie(r.missingWarn) || Ut(r.missingWarn) ? r.missingWarn : !0, N = s ? n.fallbackWarn : ie(r.fallbackWarn) || Ut(r.fallbackWarn) ? r.fallbackWarn : !0, F = s ? n.fallbackRoot : ie(r.fallbackRoot) ? r.fallbackRoot : !0, S = !!r.fallbackFormat, D = Le(r.missing) ? r.missing : null, b = Le(r.postTranslation) ? r.postTranslation : null, C = s ? n.warnHtmlMessage : ie(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, I = !!r.escapeParameter, O = s ? n.modifiers : Z(r.modifiers) ? r.modifiers : {}, y = r.pluralRules || s && n.pluralRules;
  function R() {
    return [
      l.value,
      o.value,
      f.value,
      m.value,
      h.value
    ];
  }
  const k = ae({
    get: () => i.value ? i.value.locale.value : l.value,
    set: (c) => {
      i.value && (i.value.locale.value = c), l.value = c;
    }
  }), W = ae({
    get: () => i.value ? i.value.fallbackLocale.value : o.value,
    set: (c) => {
      i.value && (i.value.fallbackLocale.value = c), o.value = c;
    }
  }), B = ae(() => i.value ? i.value.messages.value : f.value), K = ae(() => m.value), Y = ae(() => h.value);
  function z() {
    return i.value ? i.value.getPostTranslationHandler() : b;
  }
  function te(c) {
    i.value && i.value.setPostTranslationHandler(c);
  }
  function de() {
    return i.value ? i.value.getMissingHandler() : D;
  }
  function Te(c) {
    i.value && i.value.setMissingHandler(c);
  }
  function J(c) {
    return R(), c();
  }
  function X(...c) {
    return i.value ? J(() => Reflect.apply(i.value.t, null, [...c])) : J(() => "");
  }
  function ne(...c) {
    return i.value ? Reflect.apply(i.value.rt, null, [...c]) : "";
  }
  function Ne(...c) {
    return i.value ? J(() => Reflect.apply(i.value.d, null, [...c])) : J(() => "");
  }
  function we(...c) {
    return i.value ? J(() => Reflect.apply(i.value.n, null, [...c])) : J(() => "");
  }
  function Ie(c) {
    return i.value ? i.value.tm(c) : {};
  }
  function ye(c, p) {
    return i.value ? i.value.te(c, p) : !1;
  }
  function rt(c) {
    return i.value ? i.value.getLocaleMessage(c) : {};
  }
  function je(c, p) {
    i.value && (i.value.setLocaleMessage(c, p), f.value[c] = p);
  }
  function ct(c, p) {
    i.value && i.value.mergeLocaleMessage(c, p);
  }
  function V(c) {
    return i.value ? i.value.getDateTimeFormat(c) : {};
  }
  function re(c, p) {
    i.value && (i.value.setDateTimeFormat(c, p), m.value[c] = p);
  }
  function pe(c, p) {
    i.value && i.value.mergeDateTimeFormat(c, p);
  }
  function Fe(c) {
    return i.value ? i.value.getNumberFormat(c) : {};
  }
  function Ce(c, p) {
    i.value && (i.value.setNumberFormat(c, p), h.value[c] = p);
  }
  function He(c, p) {
    i.value && i.value.mergeNumberFormat(c, p);
  }
  const _ = {
    get id() {
      return i.value ? i.value.id : -1;
    },
    locale: k,
    fallbackLocale: W,
    messages: B,
    datetimeFormats: K,
    numberFormats: Y,
    get inheritLocale() {
      return i.value ? i.value.inheritLocale : a;
    },
    set inheritLocale(c) {
      i.value && (i.value.inheritLocale = c);
    },
    get availableLocales() {
      return i.value ? i.value.availableLocales : Object.keys(f.value);
    },
    get modifiers() {
      return i.value ? i.value.modifiers : O;
    },
    get pluralRules() {
      return i.value ? i.value.pluralRules : y;
    },
    get isGlobal() {
      return i.value ? i.value.isGlobal : !1;
    },
    get missingWarn() {
      return i.value ? i.value.missingWarn : d;
    },
    set missingWarn(c) {
      i.value && (i.value.missingWarn = c);
    },
    get fallbackWarn() {
      return i.value ? i.value.fallbackWarn : N;
    },
    set fallbackWarn(c) {
      i.value && (i.value.missingWarn = c);
    },
    get fallbackRoot() {
      return i.value ? i.value.fallbackRoot : F;
    },
    set fallbackRoot(c) {
      i.value && (i.value.fallbackRoot = c);
    },
    get fallbackFormat() {
      return i.value ? i.value.fallbackFormat : S;
    },
    set fallbackFormat(c) {
      i.value && (i.value.fallbackFormat = c);
    },
    get warnHtmlMessage() {
      return i.value ? i.value.warnHtmlMessage : C;
    },
    set warnHtmlMessage(c) {
      i.value && (i.value.warnHtmlMessage = c);
    },
    get escapeParameter() {
      return i.value ? i.value.escapeParameter : I;
    },
    set escapeParameter(c) {
      i.value && (i.value.escapeParameter = c);
    },
    t: X,
    getPostTranslationHandler: z,
    setPostTranslationHandler: te,
    getMissingHandler: de,
    setMissingHandler: Te,
    rt: ne,
    d: Ne,
    n: we,
    tm: Ie,
    te: ye,
    getLocaleMessage: rt,
    setLocaleMessage: je,
    mergeLocaleMessage: ct,
    getDateTimeFormat: V,
    setDateTimeFormat: re,
    mergeDateTimeFormat: pe,
    getNumberFormat: Fe,
    setNumberFormat: Ce,
    mergeNumberFormat: He
  };
  function u(c) {
    c.locale.value = l.value, c.fallbackLocale.value = o.value, Object.keys(f.value).forEach((p) => {
      c.mergeLocaleMessage(p, f.value[p]);
    }), Object.keys(m.value).forEach((p) => {
      c.mergeDateTimeFormat(p, m.value[p]);
    }), Object.keys(h.value).forEach((p) => {
      c.mergeNumberFormat(p, h.value[p]);
    }), c.escapeParameter = I, c.fallbackFormat = S, c.fallbackRoot = F, c.fallbackWarn = N, c.missingWarn = d, c.warnHtmlMessage = C;
  }
  return Zl(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw Pe(Se.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const c = i.value = e.proxy.$i18n.__composer;
    t === "global" ? (l.value = c.locale.value, o.value = c.fallbackLocale.value, f.value = c.messages.value, m.value = c.datetimeFormats.value, h.value = c.numberFormats.value) : s && u(c);
  }), _;
}
const Sp = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], wp = ["t", "rt", "d", "n", "tm"];
function Fp(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  Sp.forEach((r) => {
    const s = Object.getOwnPropertyDescriptor(t, r);
    if (!s)
      throw Pe(Se.UNEXPECTED_ERROR);
    const i = Oe(s.value) ? {
      get() {
        return s.value.value;
      },
      set(a) {
        s.value.value = a;
      }
    } : {
      get() {
        return s.get && s.get();
      }
    };
    Object.defineProperty(n, r, i);
  }), e.config.globalProperties.$i18n = n, wp.forEach((r) => {
    const s = Object.getOwnPropertyDescriptor(t, r);
    if (!s || !s.value)
      throw Pe(Se.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${r}`, s);
  });
}
ep(lp);
tp(Mh);
np(nu);
mp();
if (__INTLIFY_PROD_DEVTOOLS__) {
  const e = $n();
  e.__INTLIFY__ = !0, Bh(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const kp = `@import"https://www.priv.gc.ca/wet/gcweb-opc/css/theme.min.css";@import"https://www.priv.gc.ca/css/opc-style.css";details{border-color:#b31885}details summary,details summary:hover,details summary:focus{background-color:#b31885;border-color:#b31885;color:#fff;font-weight:700;text-align:left}form fieldset{border:none}form fieldset fieldset{margin-left:30px;padding-top:0}form fieldset>div.form-group{margin-left:20px}form fieldset>div.form-group>label{font-weight:inherit}form legend{font-size:inherit!important;margin-bottom:5px!important}aside#feedbackSection2 details{border-color:#b31885}aside#feedbackSection2 details summary{background-color:#b31885;border-color:#b31885;color:#fff;font-weight:700;text-align:left}aside#feedbackSection2 form fieldset{border:none}aside#feedbackSection2 form fieldset fieldset{margin-left:30px;padding-top:0}aside#feedbackSection2 form fieldset>div.form-group{margin-left:20px}aside#feedbackSection2 form fieldset>div.form-group div>label{font-weight:inherit}aside#feedbackSection2 form legend{font-size:inherit!important;margin-bottom:5px!important}#feedbackSection2 .btn-primary{background-color:#00627e}.h5{color:#b31885;font-weight:500}
`, Pp = {
  id: "feedbackSection2",
  "aria-labelledby": "feedbackDetails2"
}, Mp = {
  id: "feedbackDetails2",
  class: "btn btn-default"
}, Dp = { id: "feedbackInputs" }, xp = { class: "required" }, $p = { class: "field-name" }, Vp = { class: "required" }, Up = {
  key: 0,
  class: "form-group"
}, jp = { class: "label label-danger" }, Hp = { class: "label label-danger" }, Wp = {
  key: 1,
  id: "feedbackNoFieldset"
}, Bp = { class: "required" }, qp = { class: "field-name" }, Kp = { class: "required" }, Yp = {
  key: 0,
  class: "form-group"
}, Gp = { class: "label label-danger" }, Xp = { class: "label label-danger" }, Jp = { class: "alert alert-info" }, zp = { class: "h5" }, Qp = ["href"], Zp = ["href"], e_ = { class: "btn btn-primary" }, t_ = {
  key: 1,
  id: "feedbackSuccess"
}, n_ = { class: "h5" }, r_ = ["href"], s_ = { key: 2 }, i_ = {
  __name: "FeedbackHelpful.ce",
  props: {
    contentId: {
      type: Number,
      default: null
    },
    versionId: {
      type: String,
      default: null
    },
    feedbackApi: {
      type: String,
      default: null
    }
  },
  setup(e) {
    const t = e, { t: n, locale: r } = Jn();
    Mo(), wo(r.value);
    const s = "https://www.priv.gc.ca", i = {
      isHelpful: an.NOT_ANSWERED,
      comment: "",
      reasons: []
    }, { setFieldValue: a, handleSubmit: l, errors: o } = gi({
      initialValues: i
    }), f = me(!1), m = me(!1), h = Co(), d = me(!1), N = me(!0), F = me(""), S = l((B) => {
      const K = {
        nodeId: t.contentId,
        versionId: t.versionId,
        isHelpful: parseInt(B.isHelpful),
        comment: B.comment,
        reasons: B.reasons,
        url: window.location.href
      }, Y = t.feedbackApi || "https://api.priv.gc.ca/feedback/api/feedback";
      Zo.post(Y, K).then(() => {
        N.value = !1, d.value = !0, F.value = "";
      }).catch((z) => {
        var te;
        ((te = z.response) == null ? void 0 : te.status) === 400 ? F.value = n("errors.invalidRequest") : (F.value = n("errors.serverError"), N.value = !1);
      });
    }), D = ae(() => h.value.isHelpful), b = ae(() => h.value.reasons.includes(Qe.OTHER)), C = ae(() => F.value !== ""), I = () => b.value ? a("reasons", [Qe.OTHER]) : R(), O = () => {
      f.value = !0, b.value && R();
    }, y = () => {
      m.value = !0, f.value = !0;
    }, R = () => a("reasons", h.value.reasons.filter((B) => B !== Qe.OTHER)), k = () => f.value = !1, W = () => m.value = !1;
    return (B, K) => (De(), Ke("aside", Pp, [
      U("details", null, [
        U("summary", Mp, q(L(n)("pageHelpful")), 1),
        N.value ? (De(), Ke("form", {
          key: 0,
          onSubmit: K[6] || (K[6] = (...Y) => L(S) && L(S)(...Y))
        }, [
          U("fieldset", Dp, [
            U("legend", xp, [
              U("span", $p, q(L(n)("selectOne")), 1),
              U("strong", Vp, " (" + q(L(n)("required")) + ")", 1),
              le(q(L(n)("punctuation.colon")), 1)
            ]),
            fe(ga, {
              id: "helpfulPageYes",
              value: L(an).YES,
              name: "isHelpful",
              onInput: y,
              rules: { one_of: [1, 2] }
            }, {
              default: Be(() => [
                le(q(L(n)("yes")), 1)
              ]),
              _: 1
            }, 8, ["value"]),
            L(D) == L(an).YES ? (De(), Ke("div", Up, [
              fe(Ns, {
                name: "comment",
                id: "commentHelpful",
                "maxLength.number": "750",
                rules: { required: !0, max: 750 },
                "is-reset": f.value,
                onResetCompleted: k
              }, {
                default: Be(() => [
                  le(q(L(n)("why")) + "? " + q(L(n)("commentProvideAdditionalDetails")), 1)
                ]),
                _: 1
              }, 8, ["is-reset"]),
              U("span", jp, q(L(o).comment), 1)
            ])) : Et("", !0),
            fe(ga, {
              id: "helpfulPageNo",
              value: L(an).NO,
              name: "isHelpful",
              onInput: K[0] || (K[0] = (Y) => y()),
              rules: { one_of: [1, 2] }
            }, {
              default: Be(() => [
                le(q(L(n)("no")), 1)
              ]),
              _: 1
            }, 8, ["value"]),
            U("span", Hp, q(L(o).isHelpful), 1),
            L(D) == L(an).NO ? (De(), Ke("fieldset", Wp, [
              U("legend", Bp, [
                U("span", qp, q(L(n)("why")) + "? " + q(L(n)("selectOptions")), 1),
                U("strong", Kp, " (" + q(L(n)("required")) + ")", 1),
                le(q(L(n)("punctuation.colon")), 1)
              ]),
              fe(Ct, {
                name: "reasons",
                id: "infoHardToUnderstand",
                value: L(Qe).INFO_HARD_TO_UNDERSTAND,
                "is-reset": m.value,
                onResetCompleted: W,
                onChange: K[1] || (K[1] = (Y) => O()),
                rules: { required: !0 }
              }, {
                default: Be(() => [
                  le(q(L(n)("form.infoHardToUnderstand")), 1)
                ]),
                _: 1
              }, 8, ["value", "is-reset"]),
              fe(Ct, {
                name: "reasons",
                id: "infoWrong",
                value: L(Qe).INFO_WRONG,
                onChange: K[2] || (K[2] = (Y) => O())
              }, {
                default: Be(() => [
                  le(q(L(n)("form.infoWrong")), 1)
                ]),
                _: 1
              }, 8, ["value"]),
              fe(Ct, {
                name: "reasons",
                id: "helpfulInfoOutdated",
                value: L(Qe).INFO_OUTDATED,
                onChange: K[3] || (K[3] = (Y) => O())
              }, {
                default: Be(() => [
                  le(q(L(n)("form.infoOutdated")), 1)
                ]),
                _: 1
              }, 8, ["value"]),
              fe(Ct, {
                name: "reasons",
                id: "infoNotFound",
                value: L(Qe).INFO_NOT_FOUND,
                onChange: K[4] || (K[4] = (Y) => O())
              }, {
                default: Be(() => [
                  le(q(L(n)("form.infoNotFound")), 1)
                ]),
                _: 1
              }, 8, ["value"]),
              fe(Ct, {
                name: "reasons",
                id: "helpfulOther",
                value: L(Qe).OTHER,
                onChange: K[5] || (K[5] = (Y) => I())
              }, {
                default: Be(() => [
                  le(q(L(n)("form.other")) + " ", 1),
                  L(b) ? (De(), Ke("div", Yp, [
                    fe(Ns, {
                      name: "comment",
                      id: "commentOtherNotHelpful",
                      "maxLength.number": "750",
                      rules: { required: !0, max: 750 }
                    }, {
                      default: Be(() => [
                        le(q(L(n)("commentSpecifyDetails")), 1)
                      ]),
                      _: 1
                    }),
                    U("span", Gp, q(L(o).comment), 1)
                  ])) : Et("", !0)
                ]),
                _: 1
              }, 8, ["value"]),
              U("span", Xp, q(L(o).reasons), 1)
            ])) : Et("", !0)
          ]),
          U("div", null, [
            U("div", Jp, [
              U("h2", zp, q(L(n)("submissionInformation.note")), 1),
              U("ul", null, [
                U("li", null, [
                  U("small", null, [
                    U("strong", null, q(L(n)("contact.noReply")) + ".", 1),
                    le(" " + q(L(n)("contact.forEnquiries")) + " ", 1),
                    U("a", {
                      href: `${L(s)}${L(n)("contact.opcContactLink")}`
                    }, q(L(n)("contact.contactOpc")), 9, Qp),
                    le(".")
                  ])
                ]),
                U("li", null, [
                  U("small", null, [
                    U("strong", null, q(L(n)("submissionInformation.noPersonalInfo")) + ",", 1),
                    le(" " + q(L(n)("submissionInformation.personalInfoItems")) + ".", 1)
                  ])
                ]),
                U("li", null, [
                  U("small", null, [
                    U("strong", null, q(L(n)("submissionInformation.forMoreInfo")), 1),
                    le(", " + q(L(n)("submissionInformation.referTo")) + " ", 1),
                    U("a", {
                      href: `${L(s)}${L(n)("submissionInformation.termsOfUseLink")}`
                    }, q(L(n)("submissionInformation.termsOfUse")), 9, Zp),
                    le(".")
                  ])
                ])
              ])
            ]),
            U("div", null, [
              U("button", e_, q(L(n)("form.submit")), 1)
            ])
          ])
        ], 32)) : Et("", !0),
        d.value ? (De(), Ke("div", t_, [
          U("div", null, [
            U("h2", n_, q(L(n)("confirmation.thankYouForFeedback")) + "!", 1),
            U("p", null, [
              le(q(L(n)("contact.noReply")) + ". " + q(L(n)("contact.forEnquiries")) + " ", 1),
              U("a", {
                href: `${L(s)}${L(n)("contact.opcContactLink")}`
              }, q(L(n)("contact.contactOpc")), 9, r_),
              le(".")
            ])
          ])
        ])) : Et("", !0),
        L(C) ? (De(), Ke("div", s_, [
          fe(Ro, null, {
            default: Be(() => [
              le(q(F.value), 1)
            ]),
            _: 1
          })
        ])) : Et("", !0)
      ])
    ]));
  }
}, a_ = /* @__PURE__ */ wr(i_, [["styles", [kp]]]), l_ = `@import"https://www.priv.gc.ca/wet/gcweb-opc/css/theme.min.css";@import"https://www.priv.gc.ca/css/opc-style.css";form fieldset{border:none}form legend{font-size:inherit!important;margin-bottom:5px!important}#feedbackSection details summary{text-align:left}span.redspan{color:#d3080c}#feedbackSection form fieldset{border:none}#feedbackSection form legend{font-size:inherit!important;margin-bottom:5px!important}#reportAProblem.btn-default,#reportAProblem.btn-default:visited{color:#00627e}#feedbackSection .btn-primary{background-color:#00627e}#reportAProblem{text-align:left}.h5{color:#b31885;font-weight:500}
`, o_ = {
  "aria-labelledby": "reportAProblem",
  id: "feedbackSection"
}, u_ = { class: "brdr-0" }, c_ = {
  id: "reportAProblem",
  class: "btn btn-default"
}, f_ = { class: "well row" }, d_ = { id: "reportAProblemInputs" }, m_ = { class: "required" }, h_ = { class: "field-name" }, p_ = { class: "required" }, __ = {
  key: 0,
  class: "form-group"
}, g_ = { class: "label label-danger" }, v_ = { class: "label label-danger" }, b_ = { class: "alert alert-info" }, y_ = { class: "h5" }, E_ = ["href"], O_ = ["href"], T_ = { class: "btn btn-primary" }, I_ = {
  key: 1,
  id: "feedbackSuccess"
}, A_ = { class: "h5" }, L_ = ["href"], N_ = { key: 2 }, C_ = {
  __name: "FeedbackProblem.ce",
  props: {
    contentId: {
      type: Number,
      default: null
    },
    versionId: {
      type: String,
      default: null
    },
    feedbackApi: {
      type: String,
      default: null
    }
  },
  setup(e) {
    const t = e, { t: n, locale: r } = Jn();
    Mo(), wo(r.value);
    const s = "https://www.priv.gc.ca", i = {
      comment: "",
      reasons: []
    }, { setFieldValue: a, handleSubmit: l, errors: o } = gi({
      initialValues: i
    }), f = me(!1), m = Co(), h = me(!1), d = me(!0), N = me(""), F = l((y) => {
      const R = {
        nodeId: t.contentId,
        versionId: t.versionId,
        comment: y.comment,
        reasons: y.reasons,
        isHelpful: an.NO,
        isReportingAProblem: !0,
        url: window.location.href
      }, k = t.feedbackApi || "https://api.priv.gc.ca/feedback/api/feedback";
      Zo.post(k, R).then(() => {
        d.value = !1, h.value = !0, N.value = "";
      }).catch((W) => {
        var B;
        ((B = W.response) == null ? void 0 : B.status) === 400 ? N.value = n("errors.invalidRequest") : (N.value = n("errors.serverError"), d.value = !1);
      });
    }), S = ae(() => m.value.reasons.includes(Qe.OTHER)), D = ae(() => N.value !== ""), b = () => S.value ? a("reasons", [Qe.OTHER]) : I(), C = () => {
      f.value = !0, S.value && I();
    }, I = () => a("reasons", m.value.reasons.filter((y) => y !== Qe.OTHER)), O = () => f.value = !1;
    return (y, R) => (De(), Ke("aside", o_, [
      U("details", u_, [
        U("summary", c_, q(L(n)("reportProblem")), 1),
        U("div", f_, [
          d.value ? (De(), Ke("form", {
            key: 0,
            onSubmit: R[0] || (R[0] = (...k) => L(F) && L(F)(...k))
          }, [
            U("fieldset", d_, [
              U("legend", m_, [
                U("span", h_, q(L(n)("selectOptions")), 1),
                U("strong", p_, " (" + q(L(n)("required")) + ")", 1),
                le(q(L(n)("punctuation.colon")), 1)
              ]),
              fe(Ct, {
                name: "reasons",
                id: "pageHasBrokenLinks",
                value: L(Qe).BROKEN_LINKS,
                onChange: C,
                rules: { required: !0 }
              }, {
                default: Be(() => [
                  le(q(L(n)("form.brokenLinks")), 1)
                ]),
                _: 1
              }, 8, ["value"]),
              fe(Ct, {
                name: "reasons",
                id: "pageHasSpellingOrGrammarMistakes",
                value: L(Qe).SPELLING_OR_GRAMMAR_MISTAKES,
                onChange: C
              }, {
                default: Be(() => [
                  le(q(L(n)("form.spellingOrGrammarMistakes")), 1)
                ]),
                _: 1
              }, 8, ["value"]),
              fe(Ct, {
                name: "reasons",
                id: "problemInfoOutdated",
                value: L(Qe).INFO_OUTDATED,
                onChange: C
              }, {
                default: Be(() => [
                  le(q(L(n)("form.infoWrongOrOutdated")), 1)
                ]),
                _: 1
              }, 8, ["value"]),
              fe(Ct, {
                name: "reasons",
                id: "problemOtherReason",
                value: L(Qe).OTHER,
                onChange: b
              }, {
                default: Be(() => [
                  le(q(L(n)("form.other")) + " ", 1),
                  L(S) ? (De(), Ke("div", __, [
                    fe(Ns, {
                      name: "comment",
                      id: "commentHelpful",
                      "maxLength.number": "750",
                      rules: { required: !0, max: 750 },
                      "is-reset": f.value,
                      onResetCompleted: O
                    }, {
                      default: Be(() => [
                        le(q(L(n)("commentSpecifyDetails")), 1)
                      ]),
                      _: 1
                    }, 8, ["is-reset"]),
                    U("span", g_, q(L(o).comment), 1)
                  ])) : Et("", !0)
                ]),
                _: 1
              }, 8, ["value"]),
              U("span", v_, q(L(o).reasons), 1)
            ]),
            U("div", null, [
              U("div", b_, [
                U("h2", y_, q(L(n)("submissionInformation.note")), 1),
                U("ul", null, [
                  U("li", null, [
                    U("small", null, [
                      U("strong", null, q(L(n)("contact.noReply")) + ".", 1),
                      le(" " + q(L(n)("contact.forEnquiries")) + " ", 1),
                      U("a", {
                        href: `${L(s)}${L(n)("contact.opcContactLink")}`
                      }, q(L(n)("contact.contactOpc")), 9, E_),
                      le(".")
                    ])
                  ]),
                  U("li", null, [
                    U("small", null, [
                      U("strong", null, q(L(n)("submissionInformation.noPersonalInfo")) + ",", 1),
                      le(" " + q(L(n)("submissionInformation.personalInfoItems")) + ".", 1)
                    ])
                  ]),
                  U("li", null, [
                    U("small", null, [
                      U("strong", null, q(L(n)("submissionInformation.forMoreInfo")), 1),
                      le(", " + q(L(n)("submissionInformation.referTo")) + " ", 1),
                      U("a", {
                        href: `${L(s)}${L(n)("submissionInformation.termsOfUseLink")}`
                      }, q(L(n)("submissionInformation.termsOfUse")), 9, O_),
                      le(". ")
                    ])
                  ])
                ])
              ]),
              U("div", null, [
                U("button", T_, q(L(n)("form.submit")), 1)
              ])
            ])
          ], 32)) : Et("", !0),
          h.value ? (De(), Ke("div", I_, [
            U("div", null, [
              U("h2", A_, q(L(n)("confirmation.thankYouForHelp")) + "!", 1),
              U("p", null, [
                le(q(L(n)("contact.noReply")) + ". " + q(L(n)("contact.forEnquiries")) + " ", 1),
                U("a", {
                  href: `${L(s)}${L(n)("contact.opcContactLink")}`
                }, q(L(n)("contact.contactOpc")), 9, L_),
                le(".")
              ])
            ])
          ])) : Et("", !0),
          L(D) ? (De(), Ke("div", N_, [
            fe(Ro, null, {
              default: Be(() => [
                le(q(N.value), 1)
              ]),
              _: 1
            })
          ])) : Et("", !0)
        ])
      ])
    ]));
  }
}, R_ = /* @__PURE__ */ wr(C_, [["styles", [l_]]]), S_ = "Est-ce que cette information vous a \xE9t\xE9 utile?", w_ = "Signaler un probl\xE8me ou une erreur sur cette page", F_ = "Veuillez s\xE9lectionner une option", k_ = "Oui", P_ = "Non", M_ = "Pourquoi", D_ = "Veuillez pr\xE9ciser (maximum de 750 caract\xE8res) :", x_ = "Veuillez pr\xE9ciser (maximum de 750 caract\xE8res) :", $_ = "obligatoire", V_ = "Veuillez cocher toutes les r\xE9ponses pertinentes", U_ = "S\xE9lectionner une option", j_ = "S\xE9lectionner les r\xE9ponses pertinentes", H_ = {
  note: "Remarque",
  noPersonalInfo: "N'inscrivez aucun renseignement personnel",
  personalInfoItems: "comme votre nom, num\xE9ro d'assurances sociale (NAS), votre adresse au domicile ou au travail, ou encore les num\xE9ros de cas ou de dossiers",
  forMoreInfo: "Pour plus d'information au sujet de cette fonctionnalit\xE9",
  referTo: "veuillez consulter nos",
  termsOfUseLink: "/fr/protection-de-la-vie-privee-et-transparence-au-commissariat/conditions-d-utilisation/",
  termsOfUse: "conditions d'utilisation"
}, W_ = {
  thankYouForFeedback: "Merci de votre r\xE9troaction",
  thankYouForHelp: "Merci de votre aide"
}, B_ = {
  forEnquiries: "Pour toute question, veuillez",
  opcContactLink: "/fr/communiquer-avec-le-commissariat/",
  contactOpc: "communiquer avec le Commissariat \xE0 la protection de la vie priv\xE9e",
  noReply: "Vous ne recevrez pas de r\xE9ponse"
}, q_ = {
  invalidRequest: "Une requ\xEAte invalide a \xE9t\xE9 effectu\xE9e. Veuillez essayer de nouveau.",
  serverError: "Une erreur est survenue, s'il vous plait r\xE9essayer de nouveau plus tard."
}, K_ = {
  infoHardToUnderstand: "L'information est difficile \xE0 comprendre.",
  infoWrong: "L'information est erron\xE9e.",
  infoOutdated: "L'information n'est plus \xE0 jour.",
  infoNotFound: "Je ne trouve pas l'information que je cherche.",
  reportProblem: "Signaler un probl\xE8me ou une erreur sur cette page.",
  brokenLinks: "Il y a des hyperliens bris\xE9s.",
  spellingOrGrammarMistakes: "Il y a des erreurs d'orthographe ou de grammaire.",
  infoWrongOrOutdated: "L'information est erron\xE9e ou n'est plus \xE0 jour.",
  other: "Autre.",
  submit: "Soumettre"
}, Y_ = {
  colon: " :"
}, G_ = {
  pageHelpful: S_,
  reportProblem: w_,
  selectOne: F_,
  yes: k_,
  no: P_,
  why: M_,
  commentProvideAdditionalDetails: D_,
  commentSpecifyDetails: x_,
  required: $_,
  selectOptions: V_,
  selectOption: U_,
  selectAllThatApply: j_,
  submissionInformation: H_,
  confirmation: W_,
  contact: B_,
  errors: q_,
  form: K_,
  punctuation: Y_
}, X_ = "Was this page helpful?", J_ = "Report a problem or mistake on this page", z_ = "Please select one", Q_ = "Yes", Z_ = "No", eg = "Why", tg = "Please provide details (maximum of 750 characters):", ng = "Please specify (maximum of 750 characters):", rg = "Select an option", sg = "Select all that apply", ig = "required", ag = "Please select all that apply", lg = {
  note: "Note",
  noPersonalInfo: "Do not include any personal information",
  personalInfoItems: "such as your name, social insurance number (SIN), home or business address or any case or files numbers",
  forMoreInfo: "For more information about this tool",
  referTo: "please refer to our",
  termsOfUseLink: "/en/privacy-and-transparency-at-the-opc/terms-and-conditions-of-use/",
  termsOfUse: "terms and conditions of use"
}, og = {
  thankYouForFeedback: "Thank you for your feedback",
  thankYouForHelp: "Thank you for your help"
}, ug = {
  forEnquiries: "For enquiries, please",
  opcContactLink: "/en/contact-the-opc/",
  contactOpc: "contact the Office of the Privacy Commissioner",
  noReply: "You will not receive a reply"
}, cg = {
  invalidRequest: "An invalid request was made, please try again.",
  serverError: "Something went wrong, please try again later."
}, fg = {
  infoHardToUnderstand: "The information is hard to understand.",
  infoWrong: "The information is wrong.",
  infoOutdated: "The information is outdated.",
  infoNotFound: "I can't find the information I'm looking for.",
  reportProblem: "Report a problem or mistake on this page",
  brokenLinks: "There are broken links.",
  spellingOrGrammarMistakes: "The page has spelling or grammar mistakes.",
  infoWrongOrOutdated: "The information is wrong or outdated.",
  other: "Other.",
  submit: "Submit"
}, dg = {
  colon: ":"
}, mg = {
  pageHelpful: X_,
  reportProblem: J_,
  selectOne: z_,
  yes: Q_,
  no: Z_,
  why: eg,
  commentProvideAdditionalDetails: tg,
  commentSpecifyDetails: ng,
  selectOption: rg,
  selectAllThatApply: sg,
  required: ig,
  selectOptions: ag,
  submissionInformation: lg,
  confirmation: og,
  contact: ug,
  errors: cg,
  form: fg,
  punctuation: dg
}, hg = An({
  props: {
    locale: {
      type: String,
      default: "en"
    }
  },
  setup(e) {
    const t = Op({
      locale: "en",
      legacy: !1,
      messages: {
        en: mg,
        fr: G_
      }
    });
    return Ir(yu, t), Xl(() => {
      t.global.locale.value = e.locale;
    }), {};
  }
});
function pg(e, t, n, r, s, i) {
  return Yn(e.$slots, "default");
}
const _g = /* @__PURE__ */ wr(hg, [["render", pg]]), gg = fi(a_), vg = fi(R_), bg = fi(_g);
customElements.define("i18n-host", bg);
customElements.define("feedback-helpful", gg);
customElements.define("feedback-problem", vg);
