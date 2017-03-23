/******/ !function(modules) {
    /******/
    /******/
    // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/
        // Check if module is in cache
        /******/
        if (installedModules[moduleId]) /******/
        return installedModules[moduleId].exports;
        /******/
        /******/
        // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            exports: {},
            /******/
            id: moduleId,
            /******/
            loaded: !1
        };
        /******/
        /******/
        // Return the exports of the module
        /******/
        /******/
        /******/
        // Execute the module function
        /******/
        /******/
        /******/
        // Flag the module as loaded
        /******/
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.loaded = !0, module.exports;
    }
    // webpackBootstrap
    /******/
    // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/
    // Load entry module and return exports
    /******/
    /******/
    /******/
    /******/
    // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/
    // expose the module cache
    /******/
    /******/
    /******/
    // __webpack_public_path__
    /******/
    return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
    __webpack_require__.p = "", __webpack_require__(0);
}([ /* 0 */
/***/
function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(24);
}, /* 1 */
/***/
function(module, exports, __webpack_require__) {
    /**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
    "use strict";
    var emptyFunction = __webpack_require__(6), warning = emptyFunction;
    module.exports = warning;
}, /* 2 */
/***/
function(module, exports, __webpack_require__) {
    /**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
    "use strict";
    function hasValidRef(config) {
        return void 0 !== config.ref;
    }
    function hasValidKey(config) {
        return void 0 !== config.key;
    }
    var _assign = __webpack_require__(5), ReactCurrentOwner = __webpack_require__(10), hasOwnProperty = (__webpack_require__(1), 
    __webpack_require__(13), Object.prototype.hasOwnProperty), REACT_ELEMENT_TYPE = __webpack_require__(11), RESERVED_PROPS = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    }, ReactElement = function(type, key, ref, self, source, owner, props) {
        var element = {
            // This tag allow us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type: type,
            key: key,
            ref: ref,
            props: props,
            // Record the component responsible for creating this element.
            _owner: owner
        };
        return element;
    };
    /**
	 * Create and return a new ReactElement of the given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
	 */
    ReactElement.createElement = function(type, config, children) {
        var propName, props = {}, key = null, ref = null, self = null, source = null;
        if (null != config) {
            hasValidRef(config) && (ref = config.ref), hasValidKey(config) && (key = "" + config.key), 
            self = void 0 === config.__self ? null : config.__self, source = void 0 === config.__source ? null : config.__source;
            // Remaining properties are added to a new props object
            for (propName in config) hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName) && (props[propName] = config[propName]);
        }
        // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.
        var childrenLength = arguments.length - 2;
        if (1 === childrenLength) props.children = children; else if (childrenLength > 1) {
            for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++) childArray[i] = arguments[i + 2];
            props.children = childArray;
        }
        // Resolve default props
        if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) void 0 === props[propName] && (props[propName] = defaultProps[propName]);
        }
        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    }, /**
	 * Return a function that produces ReactElements of a given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
	 */
    ReactElement.createFactory = function(type) {
        var factory = ReactElement.createElement.bind(null, type);
        // Expose the type on the factory and the prototype so that it can be
        // easily accessed on elements. E.g. `<Foo />.type === Foo`.
        // This should not be named `constructor` since this may not be the function
        // that created the element, and it may not even be a constructor.
        // Legacy hook TODO: Warn if this is accessed
        return factory.type = type, factory;
    }, ReactElement.cloneAndReplaceKey = function(oldElement, newKey) {
        var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
        return newElement;
    }, /**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
	 */
    ReactElement.cloneElement = function(element, config, children) {
        var propName, props = _assign({}, element.props), key = element.key, ref = element.ref, self = element._self, source = element._source, owner = element._owner;
        if (null != config) {
            hasValidRef(config) && (// Silently steal the ref from the parent.
            ref = config.ref, owner = ReactCurrentOwner.current), hasValidKey(config) && (key = "" + config.key);
            // Remaining properties override existing props
            var defaultProps;
            element.type && element.type.defaultProps && (defaultProps = element.type.defaultProps);
            for (propName in config) hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName) && (void 0 === config[propName] && void 0 !== defaultProps ? // Resolve default props
            props[propName] = defaultProps[propName] : props[propName] = config[propName]);
        }
        // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.
        var childrenLength = arguments.length - 2;
        if (1 === childrenLength) props.children = children; else if (childrenLength > 1) {
            for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++) childArray[i] = arguments[i + 2];
            props.children = childArray;
        }
        return ReactElement(element.type, key, ref, self, source, owner, props);
    }, /**
	 * Verifies the object is a ReactElement.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
    ReactElement.isValidElement = function(object) {
        return "object" == typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }, module.exports = ReactElement;
}, /* 3 */
/***/
function(module, exports, __webpack_require__) {
    /**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
    "use strict";
    function invariant(condition, format, a, b, c, d, e, f) {
        if (validateFormat(format), !condition) {
            var error;
            if (void 0 === format) error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
                var args = [ a, b, c, d, e, f ], argIndex = 0;
                error = new Error(format.replace(/%s/g, function() {
                    return args[argIndex++];
                })), error.name = "Invariant Violation";
            }
            // we don't care about invariant's own frame
            throw error.framesToPop = 1, error;
        }
    }
    /**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
    var validateFormat = function(format) {};
    module.exports = invariant;
}, /* 4 */
/***/
function(module, exports) {
    /**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
    "use strict";
    /**
	 * WARNING: DO NOT manually require this module.
	 * This is a replacement for `invariant(...)` used by the error code system
	 * and will _only_ be required by the corresponding babel pass.
	 * It always throws.
	 */
    function reactProdInvariant(code) {
        for (var argCount = arguments.length - 1, message = "Minified React error #" + code + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + code, argIdx = 0; argIdx < argCount; argIdx++) message += "&args[]=" + encodeURIComponent(arguments[argIdx + 1]);
        message += " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        var error = new Error(message);
        // we don't care about reactProdInvariant's own frame
        throw error.name = "Invariant Violation", error.framesToPop = 1, error;
    }
    module.exports = reactProdInvariant;
}, /* 5 */
/***/
function(module, exports) {
    /*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
    "use strict";
    function toObject(val) {
        if (null === val || void 0 === val) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(val);
    }
    function shouldUseNative() {
        try {
            if (!Object.assign) return !1;
            // Detect buggy property enumeration order in older V8 versions.
            // https://bugs.chromium.org/p/v8/issues/detail?id=4118
            var test1 = new String("abc");
            if (// eslint-disable-line no-new-wrappers
            test1[5] = "de", "5" === Object.getOwnPropertyNames(test1)[0]) return !1;
            for (var test2 = {}, i = 0; i < 10; i++) test2["_" + String.fromCharCode(i)] = i;
            var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
                return test2[n];
            });
            if ("0123456789" !== order2.join("")) return !1;
            // https://bugs.chromium.org/p/v8/issues/detail?id=3056
            var test3 = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(letter) {
                test3[letter] = letter;
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, test3)).join("");
        } catch (err) {
            // We don't expect any of the above to throw, but better to be safe.
            return !1;
        }
    }
    /* eslint-disable no-unused-vars */
    var getOwnPropertySymbols = Object.getOwnPropertySymbols, hasOwnProperty = Object.prototype.hasOwnProperty, propIsEnumerable = Object.prototype.propertyIsEnumerable;
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
        for (var from, symbols, to = toObject(target), s = 1; s < arguments.length; s++) {
            from = Object(arguments[s]);
            for (var key in from) hasOwnProperty.call(from, key) && (to[key] = from[key]);
            if (getOwnPropertySymbols) {
                symbols = getOwnPropertySymbols(from);
                for (var i = 0; i < symbols.length; i++) propIsEnumerable.call(from, symbols[i]) && (to[symbols[i]] = from[symbols[i]]);
            }
        }
        return to;
    };
}, /* 6 */
/***/
function(module, exports) {
    "use strict";
    /**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
    function makeEmptyFunction(arg) {
        return function() {
            return arg;
        };
    }
    /**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
    var emptyFunction = function() {};
    emptyFunction.thatReturns = makeEmptyFunction, emptyFunction.thatReturnsFalse = makeEmptyFunction(!1), 
    emptyFunction.thatReturnsTrue = makeEmptyFunction(!0), emptyFunction.thatReturnsNull = makeEmptyFunction(null), 
    emptyFunction.thatReturnsThis = function() {
        return this;
    }, emptyFunction.thatReturnsArgument = function(arg) {
        return arg;
    }, module.exports = emptyFunction;
}, /* 7 */
/***/
function(module, exports, __webpack_require__) {
    /**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
    "use strict";
    var emptyObject = {};
    module.exports = emptyObject;
}, /* 8 */
/***/
function(module, exports, __webpack_require__) {
    /**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
    "use strict";
    /**
	 * Base class helpers for the updating state of a component.
	 */
    function ReactComponent(props, context, updater) {
        this.props = props, this.context = context, this.refs = emptyObject, // We initialize the default updater but the real one gets injected by the
        // renderer.
        this.updater = updater || ReactNoopUpdateQueue;
    }
    var _prodInvariant = __webpack_require__(4), ReactNoopUpdateQueue = __webpack_require__(9), emptyObject = (__webpack_require__(13), 
    __webpack_require__(7));
    __webpack_require__(3), __webpack_require__(1);
    ReactComponent.prototype.isReactComponent = {}, /**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
    ReactComponent.prototype.setState = function(partialState, callback) {
        "object" != typeof partialState && "function" != typeof partialState && null != partialState ? _prodInvariant("85") : void 0, 
        this.updater.enqueueSetState(this, partialState), callback && this.updater.enqueueCallback(this, callback, "setState");
    }, /**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
    ReactComponent.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this), callback && this.updater.enqueueCallback(this, callback, "forceUpdate");
    };
    module.exports = ReactComponent;
}, /* 9 */
/***/
function(module, exports, __webpack_require__) {
    /**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
    "use strict";
    function warnNoop(publicInstance, callerName) {
    }
    var ReactNoopUpdateQueue = (__webpack_require__(1), {
        /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
        isMounted: function(publicInstance) {
            return !1;
        },
        /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
        enqueueCallback: function(publicInstance, callback) {},
        /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
        enqueueForceUpdate: function(publicInstance) {
            warnNoop(publicInstance, "forceUpdate");
        },
        /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
        enqueueReplaceState: function(publicInstance, completeState) {
            warnNoop(publicInstance, "replaceState");
        },
        /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
        enqueueSetState: function(publicInstance, partialState) {
            warnNoop(publicInstance, "setState");
        }
    });
    module.exports = ReactNoopUpdateQueue;
}, /* 10 */
/***/
function(module, exports) {
    /**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
    "use strict";
    /**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */
    var ReactCurrentOwner = {
        /**
	   * @internal
	   * @type {ReactComponent}
	   */
        current: null
    };
    module.exports = ReactCurrentOwner;
}, /* 11 */
/***/
function(module, exports) {
    /**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
    "use strict";
    // The Symbol used to tag the ReactElement type. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
    module.exports = REACT_ELEMENT_TYPE;
}, /* 12 */
/***/
function(module, exports, __webpack_require__) {
    /**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
    "use strict";
    var ReactPropTypeLocationNames = {};
    module.exports = ReactPropTypeLocationNames;
}, /* 13 */
/***/
function(module, exports, __webpack_require__) {
    /**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
    "use strict";
    var canDefineProperty = !1;
    module.exports = canDefineProperty;
}, /* 14 */
/***/
function(module, exports) {
    /**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
    "use strict";
    // Before Symbol spec.
    /**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */
    function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if ("function" == typeof iteratorFn) return iteratorFn;
    }
    /* global Symbol */
    var ITERATOR_SYMBOL = "function" == typeof Symbol && Symbol.iterator, FAUX_ITERATOR_SYMBOL = "@@iterator";
    module.exports = getIteratorFn;
}, /* 15 */
/***/
function(module, exports) {
    "use strict";
    function placeHoldersCount(b64) {
        var len = b64.length;
        if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        // the number of equal signs (place holders)
        // if there are two placeholders, than the two characters before it
        // represent one byte
        // if there is only one, then the three characters before it represent 2 bytes
        // this is just a cheap hack to not do indexOf twice
        return "=" === b64[len - 2] ? 2 : "=" === b64[len - 1] ? 1 : 0;
    }
    function byteLength(b64) {
        // base64 is 4/3 + up to two characters of the original data
        return 3 * b64.length / 4 - placeHoldersCount(b64);
    }
    function toByteArray(b64) {
        var i, j, l, tmp, placeHolders, arr, len = b64.length;
        placeHolders = placeHoldersCount(b64), arr = new Arr(3 * len / 4 - placeHolders), 
        // if there are placeholders, only get up to the last complete 4 chars
        l = placeHolders > 0 ? len - 4 : len;
        var L = 0;
        for (i = 0, j = 0; i < l; i += 4, j += 3) tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)], 
        arr[L++] = tmp >> 16 & 255, arr[L++] = tmp >> 8 & 255, arr[L++] = 255 & tmp;
        return 2 === placeHolders ? (tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4, 
        arr[L++] = 255 & tmp) : 1 === placeHolders && (tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2, 
        arr[L++] = tmp >> 8 & 255, arr[L++] = 255 & tmp), arr;
    }
    function tripletToBase64(num) {
        return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[63 & num];
    }
    function encodeChunk(uint8, start, end) {
        for (var tmp, output = [], i = start; i < end; i += 3) tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2], 
        output.push(tripletToBase64(tmp));
        return output.join("");
    }
    function fromByteArray(uint8) {
        // must be multiple of 3
        // go through the array every three bytes, we'll deal with trailing stuff later
        for (var tmp, len = uint8.length, extraBytes = len % 3, output = "", parts = [], maxChunkLength = 16383, i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
        // pad the end with zeros, but make sure to not forget the extra bytes
        return 1 === extraBytes ? (tmp = uint8[len - 1], output += lookup[tmp >> 2], output += lookup[tmp << 4 & 63], 
        output += "==") : 2 === extraBytes && (tmp = (uint8[len - 2] << 8) + uint8[len - 1], 
        output += lookup[tmp >> 10], output += lookup[tmp >> 4 & 63], output += lookup[tmp << 2 & 63], 
        output += "="), parts.push(output), parts.join("");
    }
    exports.byteLength = byteLength, exports.toByteArray = toByteArray, exports.fromByteArray = fromByteArray;
    for (var lookup = [], revLookup = [], Arr = "undefined" != typeof Uint8Array ? Uint8Array : Array, code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, len = code.length; i < len; ++i) lookup[i] = code[i], 
    revLookup[code.charCodeAt(i)] = i;
    revLookup["-".charCodeAt(0)] = 62, revLookup["_".charCodeAt(0)] = 63;
}, /* 16 */
/***/
function(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */
    (function(global) {
        /*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
        /* eslint-disable no-proto */
        "use strict";
        function typedArraySupport() {
            try {
                var arr = new Uint8Array(1);
                // typed array instances can be augmented
                // chrome 9-10 lack `subarray`
                return arr.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                        return 42;
                    }
                }, 42 === arr.foo() && "function" == typeof arr.subarray && 0 === arr.subarray(1, 1).byteLength;
            } catch (e) {
                return !1;
            }
        }
        function kMaxLength() {
            return Buffer.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function createBuffer(that, length) {
            if (kMaxLength() < length) throw new RangeError("Invalid typed array length");
            // Return an augmented `Uint8Array` instance, for best performance
            // Fallback: Return an object instance of the Buffer class
            return Buffer.TYPED_ARRAY_SUPPORT ? (that = new Uint8Array(length), that.__proto__ = Buffer.prototype) : (null === that && (that = new Buffer(length)), 
            that.length = length), that;
        }
        /**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */
        function Buffer(arg, encodingOrOffset, length) {
            if (!(Buffer.TYPED_ARRAY_SUPPORT || this instanceof Buffer)) return new Buffer(arg, encodingOrOffset, length);
            // Common case.
            if ("number" == typeof arg) {
                if ("string" == typeof encodingOrOffset) throw new Error("If encoding is specified then the first argument must be a string");
                return allocUnsafe(this, arg);
            }
            return from(this, arg, encodingOrOffset, length);
        }
        function from(that, value, encodingOrOffset, length) {
            if ("number" == typeof value) throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && value instanceof ArrayBuffer ? fromArrayBuffer(that, value, encodingOrOffset, length) : "string" == typeof value ? fromString(that, value, encodingOrOffset) : fromObject(that, value);
        }
        function assertSize(size) {
            if ("number" != typeof size) throw new TypeError('"size" argument must be a number');
            if (size < 0) throw new RangeError('"size" argument must not be negative');
        }
        function alloc(that, size, fill, encoding) {
            return assertSize(size), size <= 0 ? createBuffer(that, size) : void 0 !== fill ? "string" == typeof encoding ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill) : createBuffer(that, size);
        }
        function allocUnsafe(that, size) {
            if (assertSize(size), that = createBuffer(that, size < 0 ? 0 : 0 | checked(size)), 
            !Buffer.TYPED_ARRAY_SUPPORT) for (var i = 0; i < size; ++i) that[i] = 0;
            return that;
        }
        function fromString(that, string, encoding) {
            if ("string" == typeof encoding && "" !== encoding || (encoding = "utf8"), !Buffer.isEncoding(encoding)) throw new TypeError('"encoding" must be a valid string encoding');
            var length = 0 | byteLength(string, encoding);
            that = createBuffer(that, length);
            var actual = that.write(string, encoding);
            // Writing a hex string, for example, that contains invalid characters will
            // cause everything after the first invalid character to be ignored. (e.g.
            // 'abxxcd' will be treated as 'ab')
            return actual !== length && (that = that.slice(0, actual)), that;
        }
        function fromArrayLike(that, array) {
            var length = array.length < 0 ? 0 : 0 | checked(array.length);
            that = createBuffer(that, length);
            for (var i = 0; i < length; i += 1) that[i] = 255 & array[i];
            return that;
        }
        function fromArrayBuffer(that, array, byteOffset, length) {
            // this throws if `array` is not a valid ArrayBuffer
            if (array.byteLength, byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError("'offset' is out of bounds");
            if (array.byteLength < byteOffset + (length || 0)) throw new RangeError("'length' is out of bounds");
            // Return an augmented `Uint8Array` instance, for best performance
            // Fallback: Return an object instance of the Buffer class
            return array = void 0 === byteOffset && void 0 === length ? new Uint8Array(array) : void 0 === length ? new Uint8Array(array, byteOffset) : new Uint8Array(array, byteOffset, length), 
            Buffer.TYPED_ARRAY_SUPPORT ? (that = array, that.__proto__ = Buffer.prototype) : that = fromArrayLike(that, array), 
            that;
        }
        function fromObject(that, obj) {
            if (Buffer.isBuffer(obj)) {
                var len = 0 | checked(obj.length);
                return that = createBuffer(that, len), 0 === that.length ? that : (obj.copy(that, 0, 0, len), 
                that);
            }
            if (obj) {
                if ("undefined" != typeof ArrayBuffer && obj.buffer instanceof ArrayBuffer || "length" in obj) return "number" != typeof obj.length || isnan(obj.length) ? createBuffer(that, 0) : fromArrayLike(that, obj);
                if ("Buffer" === obj.type && isArray(obj.data)) return fromArrayLike(that, obj.data);
            }
            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
        }
        function checked(length) {
            // Note: cannot use `length < kMaxLength()` here because that fails when
            // length is NaN (which is otherwise coerced to zero.)
            if (length >= kMaxLength()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes");
            return 0 | length;
        }
        function SlowBuffer(length) {
            // eslint-disable-line eqeqeq
            return +length != length && (length = 0), Buffer.alloc(+length);
        }
        function byteLength(string, encoding) {
            if (Buffer.isBuffer(string)) return string.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) return string.byteLength;
            "string" != typeof string && (string = "" + string);
            var len = string.length;
            if (0 === len) return 0;
            for (// Use a for loop to avoid recursion
            var loweredCase = !1; ;) switch (encoding) {
              case "ascii":
              case "latin1":
              case "binary":
                return len;

              case "utf8":
              case "utf-8":
              case void 0:
                return utf8ToBytes(string).length;

              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * len;

              case "hex":
                return len >>> 1;

              case "base64":
                return base64ToBytes(string).length;

              default:
                if (loweredCase) return utf8ToBytes(string).length;
                // assume utf8
                encoding = ("" + encoding).toLowerCase(), loweredCase = !0;
            }
        }
        function slowToString(encoding, start, end) {
            var loweredCase = !1;
            // Return early if start > this.length. Done here to prevent potential uint32
            // coercion fail below.
            if (// No need to verify that "this.length <= MAX_UINT32" since it's a read-only
            // property of a typed array.
            // This behaves neither like String nor Uint8Array in that we set start/end
            // to their upper/lower bounds if the value passed is out of range.
            // undefined is handled specially as per ECMA-262 6th Edition,
            // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
            (void 0 === start || start < 0) && (start = 0), start > this.length) return "";
            if ((void 0 === end || end > this.length) && (end = this.length), end <= 0) return "";
            if (// Force coersion to uint32. This will also coerce falsey/NaN values to 0.
            end >>>= 0, start >>>= 0, end <= start) return "";
            for (encoding || (encoding = "utf8"); ;) switch (encoding) {
              case "hex":
                return hexSlice(this, start, end);

              case "utf8":
              case "utf-8":
                return utf8Slice(this, start, end);

              case "ascii":
                return asciiSlice(this, start, end);

              case "latin1":
              case "binary":
                return latin1Slice(this, start, end);

              case "base64":
                return base64Slice(this, start, end);

              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return utf16leSlice(this, start, end);

              default:
                if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
                encoding = (encoding + "").toLowerCase(), loweredCase = !0;
            }
        }
        function swap(b, n, m) {
            var i = b[n];
            b[n] = b[m], b[m] = i;
        }
        // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
        // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
        //
        // Arguments:
        // - buffer - a Buffer to search
        // - val - a string, Buffer, or number
        // - byteOffset - an index into `buffer`; will be clamped to an int32
        // - encoding - an optional encoding, relevant is val is a string
        // - dir - true for indexOf, false for lastIndexOf
        function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
            // Empty buffer means no match
            if (0 === buffer.length) return -1;
            if (// Normalize byteOffset
            "string" == typeof byteOffset ? (encoding = byteOffset, byteOffset = 0) : byteOffset > 2147483647 ? byteOffset = 2147483647 : byteOffset < -2147483648 && (byteOffset = -2147483648), 
            byteOffset = +byteOffset, // Coerce to Number.
            isNaN(byteOffset) && (// byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
            byteOffset = dir ? 0 : buffer.length - 1), // Normalize byteOffset: negative offsets start from the end of the buffer
            byteOffset < 0 && (byteOffset = buffer.length + byteOffset), byteOffset >= buffer.length) {
                if (dir) return -1;
                byteOffset = buffer.length - 1;
            } else if (byteOffset < 0) {
                if (!dir) return -1;
                byteOffset = 0;
            }
            // Finally, search either indexOf (if dir is true) or lastIndexOf
            if (// Normalize val
            "string" == typeof val && (val = Buffer.from(val, encoding)), Buffer.isBuffer(val)) // Special case: looking for empty string/buffer always fails
            // Special case: looking for empty string/buffer always fails
            return 0 === val.length ? -1 : arrayIndexOf(buffer, val, byteOffset, encoding, dir);
            if ("number" == typeof val) // Search for a byte value [0-255]
            // Search for a byte value [0-255]
            return val &= 255, Buffer.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? dir ? Uint8Array.prototype.indexOf.call(buffer, val, byteOffset) : Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset) : arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir);
            throw new TypeError("val must be string, number or Buffer");
        }
        function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
            function read(buf, i) {
                return 1 === indexSize ? buf[i] : buf.readUInt16BE(i * indexSize);
            }
            var indexSize = 1, arrLength = arr.length, valLength = val.length;
            if (void 0 !== encoding && (encoding = String(encoding).toLowerCase(), "ucs2" === encoding || "ucs-2" === encoding || "utf16le" === encoding || "utf-16le" === encoding)) {
                if (arr.length < 2 || val.length < 2) return -1;
                indexSize = 2, arrLength /= 2, valLength /= 2, byteOffset /= 2;
            }
            var i;
            if (dir) {
                var foundIndex = -1;
                for (i = byteOffset; i < arrLength; i++) if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
                    if (foundIndex === -1 && (foundIndex = i), i - foundIndex + 1 === valLength) return foundIndex * indexSize;
                } else foundIndex !== -1 && (i -= i - foundIndex), foundIndex = -1;
            } else for (byteOffset + valLength > arrLength && (byteOffset = arrLength - valLength), 
            i = byteOffset; i >= 0; i--) {
                for (var found = !0, j = 0; j < valLength; j++) if (read(arr, i + j) !== read(val, j)) {
                    found = !1;
                    break;
                }
                if (found) return i;
            }
            return -1;
        }
        function hexWrite(buf, string, offset, length) {
            offset = Number(offset) || 0;
            var remaining = buf.length - offset;
            length ? (length = Number(length), length > remaining && (length = remaining)) : length = remaining;
            // must be an even number of digits
            var strLen = string.length;
            if (strLen % 2 !== 0) throw new TypeError("Invalid hex string");
            length > strLen / 2 && (length = strLen / 2);
            for (var i = 0; i < length; ++i) {
                var parsed = parseInt(string.substr(2 * i, 2), 16);
                if (isNaN(parsed)) return i;
                buf[offset + i] = parsed;
            }
            return i;
        }
        function utf8Write(buf, string, offset, length) {
            return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
        }
        function asciiWrite(buf, string, offset, length) {
            return blitBuffer(asciiToBytes(string), buf, offset, length);
        }
        function latin1Write(buf, string, offset, length) {
            return asciiWrite(buf, string, offset, length);
        }
        function base64Write(buf, string, offset, length) {
            return blitBuffer(base64ToBytes(string), buf, offset, length);
        }
        function ucs2Write(buf, string, offset, length) {
            return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
        }
        function base64Slice(buf, start, end) {
            return 0 === start && end === buf.length ? base64.fromByteArray(buf) : base64.fromByteArray(buf.slice(start, end));
        }
        function utf8Slice(buf, start, end) {
            end = Math.min(buf.length, end);
            for (var res = [], i = start; i < end; ) {
                var firstByte = buf[i], codePoint = null, bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
                if (i + bytesPerSequence <= end) {
                    var secondByte, thirdByte, fourthByte, tempCodePoint;
                    switch (bytesPerSequence) {
                      case 1:
                        firstByte < 128 && (codePoint = firstByte);
                        break;

                      case 2:
                        secondByte = buf[i + 1], 128 === (192 & secondByte) && (tempCodePoint = (31 & firstByte) << 6 | 63 & secondByte, 
                        tempCodePoint > 127 && (codePoint = tempCodePoint));
                        break;

                      case 3:
                        secondByte = buf[i + 1], thirdByte = buf[i + 2], 128 === (192 & secondByte) && 128 === (192 & thirdByte) && (tempCodePoint = (15 & firstByte) << 12 | (63 & secondByte) << 6 | 63 & thirdByte, 
                        tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343) && (codePoint = tempCodePoint));
                        break;

                      case 4:
                        secondByte = buf[i + 1], thirdByte = buf[i + 2], fourthByte = buf[i + 3], 128 === (192 & secondByte) && 128 === (192 & thirdByte) && 128 === (192 & fourthByte) && (tempCodePoint = (15 & firstByte) << 18 | (63 & secondByte) << 12 | (63 & thirdByte) << 6 | 63 & fourthByte, 
                        tempCodePoint > 65535 && tempCodePoint < 1114112 && (codePoint = tempCodePoint));
                    }
                }
                null === codePoint ? (// we did not generate a valid codePoint so insert a
                // replacement char (U+FFFD) and advance only 1 byte
                codePoint = 65533, bytesPerSequence = 1) : codePoint > 65535 && (// encode to utf16 (surrogate pair dance)
                codePoint -= 65536, res.push(codePoint >>> 10 & 1023 | 55296), codePoint = 56320 | 1023 & codePoint), 
                res.push(codePoint), i += bytesPerSequence;
            }
            return decodeCodePointsArray(res);
        }
        function decodeCodePointsArray(codePoints) {
            var len = codePoints.length;
            if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints);
            for (// Decode in chunks to avoid "call stack size exceeded".
            var res = "", i = 0; i < len; ) res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
            return res;
        }
        function asciiSlice(buf, start, end) {
            var ret = "";
            end = Math.min(buf.length, end);
            for (var i = start; i < end; ++i) ret += String.fromCharCode(127 & buf[i]);
            return ret;
        }
        function latin1Slice(buf, start, end) {
            var ret = "";
            end = Math.min(buf.length, end);
            for (var i = start; i < end; ++i) ret += String.fromCharCode(buf[i]);
            return ret;
        }
        function hexSlice(buf, start, end) {
            var len = buf.length;
            (!start || start < 0) && (start = 0), (!end || end < 0 || end > len) && (end = len);
            for (var out = "", i = start; i < end; ++i) out += toHex(buf[i]);
            return out;
        }
        function utf16leSlice(buf, start, end) {
            for (var bytes = buf.slice(start, end), res = "", i = 0; i < bytes.length; i += 2) res += String.fromCharCode(bytes[i] + 256 * bytes[i + 1]);
            return res;
        }
        /*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
        function checkOffset(offset, ext, length) {
            if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
            if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
        }
        function checkInt(buf, value, offset, ext, max, min) {
            if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
            if (offset + ext > buf.length) throw new RangeError("Index out of range");
        }
        function objectWriteUInt16(buf, value, offset, littleEndian) {
            value < 0 && (value = 65535 + value + 1);
            for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>> 8 * (littleEndian ? i : 1 - i);
        }
        function objectWriteUInt32(buf, value, offset, littleEndian) {
            value < 0 && (value = 4294967295 + value + 1);
            for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) buf[offset + i] = value >>> 8 * (littleEndian ? i : 3 - i) & 255;
        }
        function checkIEEE754(buf, value, offset, ext, max, min) {
            if (offset + ext > buf.length) throw new RangeError("Index out of range");
            if (offset < 0) throw new RangeError("Index out of range");
        }
        function writeFloat(buf, value, offset, littleEndian, noAssert) {
            return noAssert || checkIEEE754(buf, value, offset, 4, 3.4028234663852886e38, -3.4028234663852886e38), 
            ieee754.write(buf, value, offset, littleEndian, 23, 4), offset + 4;
        }
        function writeDouble(buf, value, offset, littleEndian, noAssert) {
            return noAssert || checkIEEE754(buf, value, offset, 8, 1.7976931348623157e308, -1.7976931348623157e308), 
            ieee754.write(buf, value, offset, littleEndian, 52, 8), offset + 8;
        }
        function base64clean(str) {
            // Node converts strings with length < 2 to ''
            if (// Node strips out invalid characters like \n and \t from the string, base64-js does not
            str = stringtrim(str).replace(INVALID_BASE64_RE, ""), str.length < 2) return "";
            // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
            for (;str.length % 4 !== 0; ) str += "=";
            return str;
        }
        function stringtrim(str) {
            return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
        }
        function toHex(n) {
            return n < 16 ? "0" + n.toString(16) : n.toString(16);
        }
        function utf8ToBytes(string, units) {
            units = units || 1 / 0;
            for (var codePoint, length = string.length, leadSurrogate = null, bytes = [], i = 0; i < length; ++i) {
                // is surrogate component
                if (codePoint = string.charCodeAt(i), codePoint > 55295 && codePoint < 57344) {
                    // last char was a lead
                    if (!leadSurrogate) {
                        // no lead yet
                        if (codePoint > 56319) {
                            // unexpected trail
                            (units -= 3) > -1 && bytes.push(239, 191, 189);
                            continue;
                        }
                        if (i + 1 === length) {
                            // unpaired lead
                            (units -= 3) > -1 && bytes.push(239, 191, 189);
                            continue;
                        }
                        // valid lead
                        leadSurrogate = codePoint;
                        continue;
                    }
                    // 2 leads in a row
                    if (codePoint < 56320) {
                        (units -= 3) > -1 && bytes.push(239, 191, 189), leadSurrogate = codePoint;
                        continue;
                    }
                    // valid surrogate pair
                    codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
                } else leadSurrogate && (units -= 3) > -1 && bytes.push(239, 191, 189);
                // encode utf8
                if (leadSurrogate = null, codePoint < 128) {
                    if ((units -= 1) < 0) break;
                    bytes.push(codePoint);
                } else if (codePoint < 2048) {
                    if ((units -= 2) < 0) break;
                    bytes.push(codePoint >> 6 | 192, 63 & codePoint | 128);
                } else if (codePoint < 65536) {
                    if ((units -= 3) < 0) break;
                    bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, 63 & codePoint | 128);
                } else {
                    if (!(codePoint < 1114112)) throw new Error("Invalid code point");
                    if ((units -= 4) < 0) break;
                    bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, 63 & codePoint | 128);
                }
            }
            return bytes;
        }
        function asciiToBytes(str) {
            for (var byteArray = [], i = 0; i < str.length; ++i) // Node's code seems to be doing this and not & 0x7F..
            byteArray.push(255 & str.charCodeAt(i));
            return byteArray;
        }
        function utf16leToBytes(str, units) {
            for (var c, hi, lo, byteArray = [], i = 0; i < str.length && !((units -= 2) < 0); ++i) c = str.charCodeAt(i), 
            hi = c >> 8, lo = c % 256, byteArray.push(lo), byteArray.push(hi);
            return byteArray;
        }
        function base64ToBytes(str) {
            return base64.toByteArray(base64clean(str));
        }
        function blitBuffer(src, dst, offset, length) {
            for (var i = 0; i < length && !(i + offset >= dst.length || i >= src.length); ++i) dst[i + offset] = src[i];
            return i;
        }
        function isnan(val) {
            return val !== val;
        }
        var base64 = __webpack_require__(15), ieee754 = __webpack_require__(19), isArray = __webpack_require__(22);
        exports.Buffer = Buffer, exports.SlowBuffer = SlowBuffer, exports.INSPECT_MAX_BYTES = 50, 
        /**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.
	
	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
        Buffer.TYPED_ARRAY_SUPPORT = void 0 !== global.TYPED_ARRAY_SUPPORT ? global.TYPED_ARRAY_SUPPORT : typedArraySupport(), 
        /*
	 * Export kMaxLength after typed array support is determined.
	 */
        exports.kMaxLength = kMaxLength(), Buffer.poolSize = 8192, // not used by this implementation
        // TODO: Legacy, not needed anymore. Remove in next major version.
        Buffer._augment = function(arr) {
            return arr.__proto__ = Buffer.prototype, arr;
        }, /**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
        Buffer.from = function(value, encodingOrOffset, length) {
            return from(null, value, encodingOrOffset, length);
        }, Buffer.TYPED_ARRAY_SUPPORT && (Buffer.prototype.__proto__ = Uint8Array.prototype, 
        Buffer.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && Buffer[Symbol.species] === Buffer && // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
        Object.defineProperty(Buffer, Symbol.species, {
            value: null,
            configurable: !0
        })), /**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
        Buffer.alloc = function(size, fill, encoding) {
            return alloc(null, size, fill, encoding);
        }, /**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
        Buffer.allocUnsafe = function(size) {
            return allocUnsafe(null, size);
        }, /**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
        Buffer.allocUnsafeSlow = function(size) {
            return allocUnsafe(null, size);
        }, Buffer.isBuffer = function(b) {
            return !(null == b || !b._isBuffer);
        }, Buffer.compare = function(a, b) {
            if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError("Arguments must be Buffers");
            if (a === b) return 0;
            for (var x = a.length, y = b.length, i = 0, len = Math.min(x, y); i < len; ++i) if (a[i] !== b[i]) {
                x = a[i], y = b[i];
                break;
            }
            return x < y ? -1 : y < x ? 1 : 0;
        }, Buffer.isEncoding = function(encoding) {
            switch (String(encoding).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;

              default:
                return !1;
            }
        }, Buffer.concat = function(list, length) {
            if (!isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === list.length) return Buffer.alloc(0);
            var i;
            if (void 0 === length) for (length = 0, i = 0; i < list.length; ++i) length += list[i].length;
            var buffer = Buffer.allocUnsafe(length), pos = 0;
            for (i = 0; i < list.length; ++i) {
                var buf = list[i];
                if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
                buf.copy(buffer, pos), pos += buf.length;
            }
            return buffer;
        }, Buffer.byteLength = byteLength, // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
        // Buffer instances.
        Buffer.prototype._isBuffer = !0, Buffer.prototype.swap16 = function() {
            var len = this.length;
            if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var i = 0; i < len; i += 2) swap(this, i, i + 1);
            return this;
        }, Buffer.prototype.swap32 = function() {
            var len = this.length;
            if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var i = 0; i < len; i += 4) swap(this, i, i + 3), swap(this, i + 1, i + 2);
            return this;
        }, Buffer.prototype.swap64 = function() {
            var len = this.length;
            if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var i = 0; i < len; i += 8) swap(this, i, i + 7), swap(this, i + 1, i + 6), 
            swap(this, i + 2, i + 5), swap(this, i + 3, i + 4);
            return this;
        }, Buffer.prototype.toString = function() {
            var length = 0 | this.length;
            return 0 === length ? "" : 0 === arguments.length ? utf8Slice(this, 0, length) : slowToString.apply(this, arguments);
        }, Buffer.prototype.equals = function(b) {
            if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
            return this === b || 0 === Buffer.compare(this, b);
        }, Buffer.prototype.inspect = function() {
            var str = "", max = exports.INSPECT_MAX_BYTES;
            return this.length > 0 && (str = this.toString("hex", 0, max).match(/.{2}/g).join(" "), 
            this.length > max && (str += " ... ")), "<Buffer " + str + ">";
        }, Buffer.prototype.compare = function(target, start, end, thisStart, thisEnd) {
            if (!Buffer.isBuffer(target)) throw new TypeError("Argument must be a Buffer");
            if (void 0 === start && (start = 0), void 0 === end && (end = target ? target.length : 0), 
            void 0 === thisStart && (thisStart = 0), void 0 === thisEnd && (thisEnd = this.length), 
            start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
            if (thisStart >= thisEnd && start >= end) return 0;
            if (thisStart >= thisEnd) return -1;
            if (start >= end) return 1;
            if (start >>>= 0, end >>>= 0, thisStart >>>= 0, thisEnd >>>= 0, this === target) return 0;
            for (var x = thisEnd - thisStart, y = end - start, len = Math.min(x, y), thisCopy = this.slice(thisStart, thisEnd), targetCopy = target.slice(start, end), i = 0; i < len; ++i) if (thisCopy[i] !== targetCopy[i]) {
                x = thisCopy[i], y = targetCopy[i];
                break;
            }
            return x < y ? -1 : y < x ? 1 : 0;
        }, Buffer.prototype.includes = function(val, byteOffset, encoding) {
            return this.indexOf(val, byteOffset, encoding) !== -1;
        }, Buffer.prototype.indexOf = function(val, byteOffset, encoding) {
            return bidirectionalIndexOf(this, val, byteOffset, encoding, !0);
        }, Buffer.prototype.lastIndexOf = function(val, byteOffset, encoding) {
            return bidirectionalIndexOf(this, val, byteOffset, encoding, !1);
        }, Buffer.prototype.write = function(string, offset, length, encoding) {
            // Buffer#write(string)
            if (void 0 === offset) encoding = "utf8", length = this.length, offset = 0; else if (void 0 === length && "string" == typeof offset) encoding = offset, 
            length = this.length, offset = 0; else {
                if (!isFinite(offset)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                offset |= 0, isFinite(length) ? (length |= 0, void 0 === encoding && (encoding = "utf8")) : (encoding = length, 
                length = void 0);
            }
            var remaining = this.length - offset;
            if ((void 0 === length || length > remaining) && (length = remaining), string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            encoding || (encoding = "utf8");
            for (var loweredCase = !1; ;) switch (encoding) {
              case "hex":
                return hexWrite(this, string, offset, length);

              case "utf8":
              case "utf-8":
                return utf8Write(this, string, offset, length);

              case "ascii":
                return asciiWrite(this, string, offset, length);

              case "latin1":
              case "binary":
                return latin1Write(this, string, offset, length);

              case "base64":
                // Warning: maxLength not taken into account in base64Write
                return base64Write(this, string, offset, length);

              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return ucs2Write(this, string, offset, length);

              default:
                if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
                encoding = ("" + encoding).toLowerCase(), loweredCase = !0;
            }
        }, Buffer.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            };
        };
        // Based on http://stackoverflow.com/a/22747272/680742, the browser with
        // the lowest limit is Chrome, with 0x10000 args.
        // We go 1 magnitude less, for safety
        var MAX_ARGUMENTS_LENGTH = 4096;
        Buffer.prototype.slice = function(start, end) {
            var len = this.length;
            start = ~~start, end = void 0 === end ? len : ~~end, start < 0 ? (start += len, 
            start < 0 && (start = 0)) : start > len && (start = len), end < 0 ? (end += len, 
            end < 0 && (end = 0)) : end > len && (end = len), end < start && (end = start);
            var newBuf;
            if (Buffer.TYPED_ARRAY_SUPPORT) newBuf = this.subarray(start, end), newBuf.__proto__ = Buffer.prototype; else {
                var sliceLen = end - start;
                newBuf = new Buffer(sliceLen, void 0);
                for (var i = 0; i < sliceLen; ++i) newBuf[i] = this[i + start];
            }
            return newBuf;
        }, Buffer.prototype.readUIntLE = function(offset, byteLength, noAssert) {
            offset |= 0, byteLength |= 0, noAssert || checkOffset(offset, byteLength, this.length);
            for (var val = this[offset], mul = 1, i = 0; ++i < byteLength && (mul *= 256); ) val += this[offset + i] * mul;
            return val;
        }, Buffer.prototype.readUIntBE = function(offset, byteLength, noAssert) {
            offset |= 0, byteLength |= 0, noAssert || checkOffset(offset, byteLength, this.length);
            for (var val = this[offset + --byteLength], mul = 1; byteLength > 0 && (mul *= 256); ) val += this[offset + --byteLength] * mul;
            return val;
        }, Buffer.prototype.readUInt8 = function(offset, noAssert) {
            return noAssert || checkOffset(offset, 1, this.length), this[offset];
        }, Buffer.prototype.readUInt16LE = function(offset, noAssert) {
            return noAssert || checkOffset(offset, 2, this.length), this[offset] | this[offset + 1] << 8;
        }, Buffer.prototype.readUInt16BE = function(offset, noAssert) {
            return noAssert || checkOffset(offset, 2, this.length), this[offset] << 8 | this[offset + 1];
        }, Buffer.prototype.readUInt32LE = function(offset, noAssert) {
            return noAssert || checkOffset(offset, 4, this.length), (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + 16777216 * this[offset + 3];
        }, Buffer.prototype.readUInt32BE = function(offset, noAssert) {
            return noAssert || checkOffset(offset, 4, this.length), 16777216 * this[offset] + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
        }, Buffer.prototype.readIntLE = function(offset, byteLength, noAssert) {
            offset |= 0, byteLength |= 0, noAssert || checkOffset(offset, byteLength, this.length);
            for (var val = this[offset], mul = 1, i = 0; ++i < byteLength && (mul *= 256); ) val += this[offset + i] * mul;
            return mul *= 128, val >= mul && (val -= Math.pow(2, 8 * byteLength)), val;
        }, Buffer.prototype.readIntBE = function(offset, byteLength, noAssert) {
            offset |= 0, byteLength |= 0, noAssert || checkOffset(offset, byteLength, this.length);
            for (var i = byteLength, mul = 1, val = this[offset + --i]; i > 0 && (mul *= 256); ) val += this[offset + --i] * mul;
            return mul *= 128, val >= mul && (val -= Math.pow(2, 8 * byteLength)), val;
        }, Buffer.prototype.readInt8 = function(offset, noAssert) {
            return noAssert || checkOffset(offset, 1, this.length), 128 & this[offset] ? (255 - this[offset] + 1) * -1 : this[offset];
        }, Buffer.prototype.readInt16LE = function(offset, noAssert) {
            noAssert || checkOffset(offset, 2, this.length);
            var val = this[offset] | this[offset + 1] << 8;
            return 32768 & val ? 4294901760 | val : val;
        }, Buffer.prototype.readInt16BE = function(offset, noAssert) {
            noAssert || checkOffset(offset, 2, this.length);
            var val = this[offset + 1] | this[offset] << 8;
            return 32768 & val ? 4294901760 | val : val;
        }, Buffer.prototype.readInt32LE = function(offset, noAssert) {
            return noAssert || checkOffset(offset, 4, this.length), this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
        }, Buffer.prototype.readInt32BE = function(offset, noAssert) {
            return noAssert || checkOffset(offset, 4, this.length), this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
        }, Buffer.prototype.readFloatLE = function(offset, noAssert) {
            return noAssert || checkOffset(offset, 4, this.length), ieee754.read(this, offset, !0, 23, 4);
        }, Buffer.prototype.readFloatBE = function(offset, noAssert) {
            return noAssert || checkOffset(offset, 4, this.length), ieee754.read(this, offset, !1, 23, 4);
        }, Buffer.prototype.readDoubleLE = function(offset, noAssert) {
            return noAssert || checkOffset(offset, 8, this.length), ieee754.read(this, offset, !0, 52, 8);
        }, Buffer.prototype.readDoubleBE = function(offset, noAssert) {
            return noAssert || checkOffset(offset, 8, this.length), ieee754.read(this, offset, !1, 52, 8);
        }, Buffer.prototype.writeUIntLE = function(value, offset, byteLength, noAssert) {
            if (value = +value, offset |= 0, byteLength |= 0, !noAssert) {
                var maxBytes = Math.pow(2, 8 * byteLength) - 1;
                checkInt(this, value, offset, byteLength, maxBytes, 0);
            }
            var mul = 1, i = 0;
            for (this[offset] = 255 & value; ++i < byteLength && (mul *= 256); ) this[offset + i] = value / mul & 255;
            return offset + byteLength;
        }, Buffer.prototype.writeUIntBE = function(value, offset, byteLength, noAssert) {
            if (value = +value, offset |= 0, byteLength |= 0, !noAssert) {
                var maxBytes = Math.pow(2, 8 * byteLength) - 1;
                checkInt(this, value, offset, byteLength, maxBytes, 0);
            }
            var i = byteLength - 1, mul = 1;
            for (this[offset + i] = 255 & value; --i >= 0 && (mul *= 256); ) this[offset + i] = value / mul & 255;
            return offset + byteLength;
        }, Buffer.prototype.writeUInt8 = function(value, offset, noAssert) {
            return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 1, 255, 0), 
            Buffer.TYPED_ARRAY_SUPPORT || (value = Math.floor(value)), this[offset] = 255 & value, 
            offset + 1;
        }, Buffer.prototype.writeUInt16LE = function(value, offset, noAssert) {
            return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 2, 65535, 0), 
            Buffer.TYPED_ARRAY_SUPPORT ? (this[offset] = 255 & value, this[offset + 1] = value >>> 8) : objectWriteUInt16(this, value, offset, !0), 
            offset + 2;
        }, Buffer.prototype.writeUInt16BE = function(value, offset, noAssert) {
            return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 2, 65535, 0), 
            Buffer.TYPED_ARRAY_SUPPORT ? (this[offset] = value >>> 8, this[offset + 1] = 255 & value) : objectWriteUInt16(this, value, offset, !1), 
            offset + 2;
        }, Buffer.prototype.writeUInt32LE = function(value, offset, noAssert) {
            return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 4, 4294967295, 0), 
            Buffer.TYPED_ARRAY_SUPPORT ? (this[offset + 3] = value >>> 24, this[offset + 2] = value >>> 16, 
            this[offset + 1] = value >>> 8, this[offset] = 255 & value) : objectWriteUInt32(this, value, offset, !0), 
            offset + 4;
        }, Buffer.prototype.writeUInt32BE = function(value, offset, noAssert) {
            return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 4, 4294967295, 0), 
            Buffer.TYPED_ARRAY_SUPPORT ? (this[offset] = value >>> 24, this[offset + 1] = value >>> 16, 
            this[offset + 2] = value >>> 8, this[offset + 3] = 255 & value) : objectWriteUInt32(this, value, offset, !1), 
            offset + 4;
        }, Buffer.prototype.writeIntLE = function(value, offset, byteLength, noAssert) {
            if (value = +value, offset |= 0, !noAssert) {
                var limit = Math.pow(2, 8 * byteLength - 1);
                checkInt(this, value, offset, byteLength, limit - 1, -limit);
            }
            var i = 0, mul = 1, sub = 0;
            for (this[offset] = 255 & value; ++i < byteLength && (mul *= 256); ) value < 0 && 0 === sub && 0 !== this[offset + i - 1] && (sub = 1), 
            this[offset + i] = (value / mul >> 0) - sub & 255;
            return offset + byteLength;
        }, Buffer.prototype.writeIntBE = function(value, offset, byteLength, noAssert) {
            if (value = +value, offset |= 0, !noAssert) {
                var limit = Math.pow(2, 8 * byteLength - 1);
                checkInt(this, value, offset, byteLength, limit - 1, -limit);
            }
            var i = byteLength - 1, mul = 1, sub = 0;
            for (this[offset + i] = 255 & value; --i >= 0 && (mul *= 256); ) value < 0 && 0 === sub && 0 !== this[offset + i + 1] && (sub = 1), 
            this[offset + i] = (value / mul >> 0) - sub & 255;
            return offset + byteLength;
        }, Buffer.prototype.writeInt8 = function(value, offset, noAssert) {
            return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 1, 127, -128), 
            Buffer.TYPED_ARRAY_SUPPORT || (value = Math.floor(value)), value < 0 && (value = 255 + value + 1), 
            this[offset] = 255 & value, offset + 1;
        }, Buffer.prototype.writeInt16LE = function(value, offset, noAssert) {
            return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 2, 32767, -32768), 
            Buffer.TYPED_ARRAY_SUPPORT ? (this[offset] = 255 & value, this[offset + 1] = value >>> 8) : objectWriteUInt16(this, value, offset, !0), 
            offset + 2;
        }, Buffer.prototype.writeInt16BE = function(value, offset, noAssert) {
            return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 2, 32767, -32768), 
            Buffer.TYPED_ARRAY_SUPPORT ? (this[offset] = value >>> 8, this[offset + 1] = 255 & value) : objectWriteUInt16(this, value, offset, !1), 
            offset + 2;
        }, Buffer.prototype.writeInt32LE = function(value, offset, noAssert) {
            return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 4, 2147483647, -2147483648), 
            Buffer.TYPED_ARRAY_SUPPORT ? (this[offset] = 255 & value, this[offset + 1] = value >>> 8, 
            this[offset + 2] = value >>> 16, this[offset + 3] = value >>> 24) : objectWriteUInt32(this, value, offset, !0), 
            offset + 4;
        }, Buffer.prototype.writeInt32BE = function(value, offset, noAssert) {
            return value = +value, offset |= 0, noAssert || checkInt(this, value, offset, 4, 2147483647, -2147483648), 
            value < 0 && (value = 4294967295 + value + 1), Buffer.TYPED_ARRAY_SUPPORT ? (this[offset] = value >>> 24, 
            this[offset + 1] = value >>> 16, this[offset + 2] = value >>> 8, this[offset + 3] = 255 & value) : objectWriteUInt32(this, value, offset, !1), 
            offset + 4;
        }, Buffer.prototype.writeFloatLE = function(value, offset, noAssert) {
            return writeFloat(this, value, offset, !0, noAssert);
        }, Buffer.prototype.writeFloatBE = function(value, offset, noAssert) {
            return writeFloat(this, value, offset, !1, noAssert);
        }, Buffer.prototype.writeDoubleLE = function(value, offset, noAssert) {
            return writeDouble(this, value, offset, !0, noAssert);
        }, Buffer.prototype.writeDoubleBE = function(value, offset, noAssert) {
            return writeDouble(this, value, offset, !1, noAssert);
        }, // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
        Buffer.prototype.copy = function(target, targetStart, start, end) {
            // Copy 0 bytes; we're done
            if (start || (start = 0), end || 0 === end || (end = this.length), targetStart >= target.length && (targetStart = target.length), 
            targetStart || (targetStart = 0), end > 0 && end < start && (end = start), end === start) return 0;
            if (0 === target.length || 0 === this.length) return 0;
            // Fatal error conditions
            if (targetStart < 0) throw new RangeError("targetStart out of bounds");
            if (start < 0 || start >= this.length) throw new RangeError("sourceStart out of bounds");
            if (end < 0) throw new RangeError("sourceEnd out of bounds");
            // Are we oob?
            end > this.length && (end = this.length), target.length - targetStart < end - start && (end = target.length - targetStart + start);
            var i, len = end - start;
            if (this === target && start < targetStart && targetStart < end) // descending copy from end
            for (i = len - 1; i >= 0; --i) target[i + targetStart] = this[i + start]; else if (len < 1e3 || !Buffer.TYPED_ARRAY_SUPPORT) // ascending copy from start
            for (i = 0; i < len; ++i) target[i + targetStart] = this[i + start]; else Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
            return len;
        }, // Usage:
        //    buffer.fill(number[, offset[, end]])
        //    buffer.fill(buffer[, offset[, end]])
        //    buffer.fill(string[, offset[, end]][, encoding])
        Buffer.prototype.fill = function(val, start, end, encoding) {
            // Handle string cases:
            if ("string" == typeof val) {
                if ("string" == typeof start ? (encoding = start, start = 0, end = this.length) : "string" == typeof end && (encoding = end, 
                end = this.length), 1 === val.length) {
                    var code = val.charCodeAt(0);
                    code < 256 && (val = code);
                }
                if (void 0 !== encoding && "string" != typeof encoding) throw new TypeError("encoding must be a string");
                if ("string" == typeof encoding && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
            } else "number" == typeof val && (val &= 255);
            // Invalid ranges are not set to a default, so can range check early.
            if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
            if (end <= start) return this;
            start >>>= 0, end = void 0 === end ? this.length : end >>> 0, val || (val = 0);
            var i;
            if ("number" == typeof val) for (i = start; i < end; ++i) this[i] = val; else {
                var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString()), len = bytes.length;
                for (i = 0; i < end - start; ++i) this[i + start] = bytes[i % len];
            }
            return this;
        };
        // HELPER FUNCTIONS
        // ================
        var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
    }).call(exports, function() {
        return this;
    }());
}, /* 17 */
/***/
function(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(18)(void 0), // imports
    // module
    exports.push([ module.id, '#marlinTreeView .start_back{padding:30px 0 0 30px}#marlinTreeView .start_back ul{list-style:none;margin:0;padding:0}#marlinTreeView .start_back ul li p{margin:0;padding:0}#marlinTreeView .contents_start button{height:42px;font-size:18px;text-align:center;margin:10px;padding:0;display:inline-block;opacity:.7;border:1px solid #d3d3d3;border-radius:20px;box-shadow:0 0 10px #ddd;text-indent:15px}#marlinTreeView .contents_start button[type=button]{width:350px;background-position:0 -123px}#marlinTreeView .contents_start button[type=submit]{width:150px;color:#008b8b;background-position:0 -163px}#marlinTreeView .contents_start button:active{box-shadow:0 0 10px #000}#marlinTreeView .contents_wrap{display:flex;display:-webkit-flex;padding:10px 0}#marlinTreeView .contents_wrap ul{padding-left:40px;margin:0;list-style:none}#marlinTreeView .contents_wrap li{position:relative}#marlinTreeView .contents_tree{display:flex;display:-webkit-flex;height:40px;position:relative;margin:10px;border:1px solid #d3d3d3;border-radius:20px 4px 4px 20px;box-shadow:0 0 8px #eee;z-index:10}#marlinTreeView .contents_tree:active{background-color:#fff;box-shadow:0 0 10px #008b8b}#marlinTreeView .contents_wrap .button_child_down,#marlinTreeView .contents_wrap .button_child_none,#marlinTreeView .contents_wrap .button_child_up{position:absolute;left:-21px;top:10px;background-position:-1px -101px}#marlinTreeView .contents_wrap .button_child_up{transform:rotate(0deg)}#marlinTreeView .contents_wrap .button_child_down,#marlinTreeView .contents_wrap .button_child_up:hover{transform:rotate(90deg)}#marlinTreeView .contents_wrap .button_child_down:hover{transform:rotate(0deg)}#marlinTreeView .contents_wrap .button_child_none{display:none}#marlinTreeView button{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAADNCAMAAAD9qcJuAAAATlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADEoqZZAAAAGXRSTlMA5LlUL+0+9NrF0QkRiyRwYaB8G6mySGmW5E5bKAAAA8hJREFUaN7tmOtuqzAQhH3DYAMGc0kz7/+iBzBuQxp7iRpFOlLmB1jV113W7LAEtkl5Du4Vo9QjqCe4y8IYb5bjJQ9WS6wQt8pyCmi3RQtkL1PGlBdA5sAvQG8LDXy9AHRTBVixygLV5FKgxVE2BUaAx0UeLBVT5RnQLyt/BpyX1XwGxMAGnAItsy8GMYMAOY7iKVDyIyfZe6V8VTzjwi+C02ddyIMLJcCpgNfoQn3KM4q4ytGa+gCScllfj36epnmTAaw/7cLqzy4M3is0U0XwYx5sl9VwBpyCXWkQA+twCuSMnwMNMwSIoHIqaLselXZheau3u1APc1mKtiGwxq9dY+FrIhyHkaqp3VZb2jV1hfbG4TYZ1t9wMmMGDXOciikNPzH6HMdmOKa6LV7e/+Xipgntd966SYL1ukHDzjWWZ1IzV2HP6yCyxTi+1yEx5LdH7/UaaGLDg1p44hZGrqqppqhrJQ24pttsLdw3Zxp3HjR7q7QVbl86YXV2yJRqW6kyO2gEAK5Wjm+PoIS2OFvMeE4oRuLddlT5cgoEFVspRMwQj9IXMa3piPQ10lU/uY/0nREvuNdE97xF9XQ9x4l1GNNqDJyGp+MZoGM9JMmVqi+7iSuKK9TabIWirq90Cz1zR9exHG3p6Ovboiqa2495Ca72aghBbpxjJKhCHTQortWSl9ZkjFHsldL9nS6p1CgOwszeq1p3k7VTp+s85wS49d5yCJf/PcP7Zuu4nqPPcWKM63FOkyPEGiyyAmPSMGvaS7U7sCnM44p0yDUa7GSfeFvoeBMiiVKGBe8egpNlbCeLQNrpIWj9jx3D495bAhwtVxlwsj+c3lOnitm5QsdisttjS53dnrjh0l6IDSduId0UdJs92bi0FT56gRrdCsu5Fa1uMtjYcXyLdyPxRYf6pFO32FRUxlRFWLf1A9BjlRikY8zJQWCV/8214bpuvbTFvOfkFu4wR9QWVB65Zv333Su1lPvCrEmao2cBxHk4IP74cWtN3a+A8S/Vz+eP7j6kvn3R4wC/fRfUdyUP7HdENtwVLoBCPgJlAYjjJ5rKLWUO1SIsWs9DHX4H2uPbpgmbGRW30AD8WZBO/Wwx9PY8u+H0LXy6Keg2e75xaSvQ5vqDXckHAP1IoR9SH/2P+swZYs6sWs70nHHWjozRc0bxfdGWbW7OqCJ+OwCQmjM7V2i2g+k5o1dOsQgm54wqdy6CqTnjcRRLzRlQYEzdHrmWJeeMR/wEQc2ZayTJOXPdW4uYM4Es1zM9Z9piTUXOmajPnPnMmVfqHwvtkR84NmxQAAAAAElFTkSuQmCC") no-repeat;font-size:0;border:none;cursor:pointer;transition:.2s;opacity:.3;padding:0}#marlinTreeView button:hover{opacity:.8}#marlinTreeView .button_child_up,.button_child_down,.button_child_none,.button_delete,.button_edit_off,.button_edit_on,.button_lock,.button_unlock{width:20px;height:20px}#marlinTreeView .button_add{width:30px;height:30px;margin:5px 0 5px 5px;float:left;background-position:-5px -128px}#marlinTreeView .button_delete{width:15px;height:15px;margin:12px;position:absolute;top:0;right:0;background-position:0 -64px}#marlinTreeView .contents_tree .button_edit_off,#marlinTreeView .contents_tree .button_edit_on{position:absolute;top:0;right:38px;margin:10px 0}#marlinTreeView .contents_tree .button_edit_on{display:block;background-position:0 -43px}#marlinTreeView .contents_tree .button_edit_off{display:none;background-position:0 -81px}#marlinTreeView .contents_tree:hover .button_edit_off,#marlinTreeView .contents_tree:hover .button_unlock{display:block}#marlinTreeView .button_lock,#marlinTreeView .button_unlock{position:absolute;margin:10px;background-size:37px}#marlinTreeView .button_unlock{display:none;right:60px;background-position:0 0}#marlinTreeView .button_lock{right:0;background-position:0 -20px}.contents_tree .text_area{width:100%;min-width:350px;padding-right:70px;overflow:hidden}.contents_tree .text_area input{width:100%;height:25px;position:relative;box-sizing:border-box;padding:0 10px 0 5px;font-size:18px;color:#008b8b;background-color:transparent;border:none;border-bottom:1px solid #008b8b}.contents_tree .text_area span{width:100%;height:40px;line-height:40px;display:inline-block;padding-left:15px;box-sizing:border-box}.contents_tree .read_area{cursor:move}@media (max-width:479px){#marlinTreeView .contents_wrap ul{width:100%;box-sizing:border-box}.contents_tree .text_area{width:100%;min-width:50px;padding-right:90px}.contents_tree .text_area span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#marlinTreeView .contents_start button[type=button]{width:80%;background-position:0 -123px}#marlinTreeView .contents_start button[type=submit]{width:80%;color:#008b8b;background-position:0 -163px}}', "" ]);
}, /* 18 */
/***/
function(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */
    (function(Buffer) {
        function cssWithMappingToString(item, useSourceMap) {
            var content = item[1] || "", cssMapping = item[3];
            if (!cssMapping) return content;
            if (useSourceMap) {
                var sourceMapping = toComment(cssMapping), sourceURLs = cssMapping.sources.map(function(source) {
                    return "/*# sourceURL=" + cssMapping.sourceRoot + source + " */";
                });
                return [ content ].concat(sourceURLs).concat([ sourceMapping ]).join("\n");
            }
            return [ content ].join("\n");
        }
        // Adapted from convert-source-map (MIT)
        function toComment(sourceMap) {
            var base64 = new Buffer(JSON.stringify(sourceMap)).toString("base64"), data = "sourceMappingURL=data:application/json;charset=utf-8;base64," + base64;
            return "/*# " + data + " */";
        }
        /*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
        // css base code, injected by the css-loader
        module.exports = function(useSourceMap) {
            var list = [];
            // return the list of modules as css string
            // import a list of modules into the list
            return list.toString = function() {
                return this.map(function(item) {
                    var content = cssWithMappingToString(item, useSourceMap);
                    return item[2] ? "@media " + item[2] + "{" + content + "}" : content;
                }).join("");
            }, list.i = function(modules, mediaQuery) {
                "string" == typeof modules && (modules = [ [ null, modules, "" ] ]);
                for (var alreadyImportedModules = {}, i = 0; i < this.length; i++) {
                    var id = this[i][0];
                    "number" == typeof id && (alreadyImportedModules[id] = !0);
                }
                for (i = 0; i < modules.length; i++) {
                    var item = modules[i];
                    // skip already imported module
                    // this implementation is not 100% perfect for weird media query combinations
                    //  when a module is imported multiple times with different media queries.
                    //  I hope this will never occur (Hey this way we have smaller bundles)
                    "number" == typeof item[0] && alreadyImportedModules[item[0]] || (mediaQuery && !item[2] ? item[2] = mediaQuery : mediaQuery && (item[2] = "(" + item[2] + ") and (" + mediaQuery + ")"), 
                    list.push(item));
                }
            }, list;
        };
    }).call(exports, __webpack_require__(16).Buffer);
}, /* 19 */
/***/
function(module, exports) {
    exports.read = function(buffer, offset, isLE, mLen, nBytes) {
        var e, m, eLen = 8 * nBytes - mLen - 1, eMax = (1 << eLen) - 1, eBias = eMax >> 1, nBits = -7, i = isLE ? nBytes - 1 : 0, d = isLE ? -1 : 1, s = buffer[offset + i];
        for (i += d, e = s & (1 << -nBits) - 1, s >>= -nBits, nBits += eLen; nBits > 0; e = 256 * e + buffer[offset + i], 
        i += d, nBits -= 8) ;
        for (m = e & (1 << -nBits) - 1, e >>= -nBits, nBits += mLen; nBits > 0; m = 256 * m + buffer[offset + i], 
        i += d, nBits -= 8) ;
        if (0 === e) e = 1 - eBias; else {
            if (e === eMax) return m ? NaN : (s ? -1 : 1) * (1 / 0);
            m += Math.pow(2, mLen), e -= eBias;
        }
        return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    }, exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
        var e, m, c, eLen = 8 * nBytes - mLen - 1, eMax = (1 << eLen) - 1, eBias = eMax >> 1, rt = 23 === mLen ? Math.pow(2, -24) - Math.pow(2, -77) : 0, i = isLE ? 0 : nBytes - 1, d = isLE ? 1 : -1, s = value < 0 || 0 === value && 1 / value < 0 ? 1 : 0;
        for (value = Math.abs(value), isNaN(value) || value === 1 / 0 ? (m = isNaN(value) ? 1 : 0, 
        e = eMax) : (e = Math.floor(Math.log(value) / Math.LN2), value * (c = Math.pow(2, -e)) < 1 && (e--, 
        c *= 2), value += e + eBias >= 1 ? rt / c : rt * Math.pow(2, 1 - eBias), value * c >= 2 && (e++, 
        c /= 2), e + eBias >= eMax ? (m = 0, e = eMax) : e + eBias >= 1 ? (m = (value * c - 1) * Math.pow(2, mLen), 
        e += eBias) : (m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen), e = 0)); mLen >= 8; buffer[offset + i] = 255 & m, 
        i += d, m /= 256, mLen -= 8) ;
        for (e = e << mLen | m, eLen += mLen; eLen > 0; buffer[offset + i] = 255 & e, i += d, 
        e /= 256, eLen -= 8) ;
        buffer[offset + i - d] |= 128 * s;
    };
}, /* 20 */
/***/
function(module, exports, __webpack_require__) {
    function copy(object) {
        return object instanceof Array ? object.slice() : object && "object" == typeof object ? assign(new object.constructor(), object) : object;
    }
    function newContext() {
        function update(object, spec) {
            invariant(!Array.isArray(spec), "update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."), 
            invariant("object" == typeof spec && null !== spec, "update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: %s.", Object.keys(commands).join(", "));
            var index, key, nextObject = object, specKeys = getAllKeys(spec);
            for (index = 0; index < specKeys.length; index++) {
                var key = specKeys[index];
                if (hasOwnProperty.call(commands, key)) nextObject = commands[key](spec[key], nextObject, spec, object); else {
                    var nextValueForKey = update(object[key], spec[key]);
                    nextValueForKey !== nextObject[key] && (nextObject === object && (nextObject = copy(object)), 
                    nextObject[key] = nextValueForKey);
                }
            }
            return nextObject;
        }
        var commands = assign({}, defaultCommands);
        return update.extend = function(directive, fn) {
            commands[directive] = fn;
        }, update;
    }
    // invariants
    function invariantPushAndUnshift(value, spec, command) {
        invariant(Array.isArray(value), "update(): expected target of %s to be an array; got %s.", command, value);
        var specValue = spec[command];
        invariant(Array.isArray(specValue), "update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?", command, specValue);
    }
    function invariantSplices(value, spec) {
        invariant(Array.isArray(value), "Expected $splice target to be an array; got %s", value), 
        invariantSplice(spec.$splice);
    }
    function invariantSplice(value) {
        invariant(Array.isArray(value), "update(): expected spec of $splice to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?", value);
    }
    function invariantApply(fn) {
        invariant("function" == typeof fn, "update(): expected spec of $apply to be a function; got %s.", fn);
    }
    function invariantSet(spec) {
        invariant(1 === Object.keys(spec).length, "Cannot have more than one key in an object with $set");
    }
    function invariantMerge(target, specValue) {
        invariant(specValue && "object" == typeof specValue, "update(): $merge expects a spec of type 'object'; got %s", specValue), 
        invariant(target && "object" == typeof target, "update(): $merge expects a target of type 'object'; got %s", target);
    }
    var invariant = __webpack_require__(21), hasOwnProperty = Object.prototype.hasOwnProperty, splice = Array.prototype.splice, assign = Object.assign || function(target, source) {
        for (var keys = getAllKeys(source), i = 0; i < keys.length; i++) {
            var key = keys[i];
            hasOwnProperty.call(source, key) && (target[key] = source[key]);
        }
        return target;
    }, getAllKeys = "function" == typeof Object.getOwnPropertySymbols ? function(obj) {
        return Object.keys(obj).concat(Object.getOwnPropertySymbols(obj));
    } : function(obj) {
        return Object.keys(obj);
    }, defaultCommands = {
        $push: function(value, original, spec) {
            return invariantPushAndUnshift(original, spec, "$push"), original.concat(value);
        },
        $unshift: function(value, original, spec) {
            return invariantPushAndUnshift(original, spec, "$unshift"), value.concat(original);
        },
        $splice: function(value, nextObject, spec, object) {
            var originalValue = nextObject === object ? copy(object) : nextObject;
            return invariantSplices(originalValue, spec), value.forEach(function(args) {
                invariantSplice(args), splice.apply(originalValue, args);
            }), originalValue;
        },
        $set: function(value, original, spec) {
            return invariantSet(spec), value;
        },
        $merge: function(value, nextObject, spec, object) {
            var originalValue = nextObject === object ? copy(object) : nextObject;
            return invariantMerge(originalValue, value), getAllKeys(value).forEach(function(key) {
                originalValue[key] = value[key];
            }), originalValue;
        },
        $apply: function(value, original) {
            return invariantApply(value), value(original);
        }
    };
    module.exports = newContext(), module.exports.newContext = newContext;
}, /* 21 */
/***/
function(module, exports, __webpack_require__) {
    /**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
    "use strict";
    /**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
    var invariant = function(condition, format, a, b, c, d, e, f) {
        if (!condition) {
            var error;
            if (void 0 === format) error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
                var args = [ a, b, c, d, e, f ], argIndex = 0;
                error = new Error(format.replace(/%s/g, function() {
                    return args[argIndex++];
                })), error.name = "Invariant Violation";
            }
            // we don't care about invariant's own frame
            throw error.framesToPop = 1, error;
        }
    };
    module.exports = invariant;
}, /* 22 */
/***/
function(module, exports) {
    var toString = {}.toString;
    module.exports = Array.isArray || function(arr) {
        return "[object Array]" == toString.call(arr);
    };
}, /* 23 */
/***/
function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    /* WEBPACK VAR INJECTION */ (function(global, module) {
        (function() {
            /*--------------------------------------------------------------------------*/
            /**
	   * Adds the key-value `pair` to `map`.
	   *
	   * @private
	   * @param {Object} map The map to modify.
	   * @param {Array} pair The key-value pair to add.
	   * @returns {Object} Returns `map`.
	   */
            function addMapEntry(map, pair) {
                // Don't return `map.set` because it's not chainable in IE 11.
                return map.set(pair[0], pair[1]), map;
            }
            /**
	   * Adds `value` to `set`.
	   *
	   * @private
	   * @param {Object} set The set to modify.
	   * @param {*} value The value to add.
	   * @returns {Object} Returns `set`.
	   */
            function addSetEntry(set, value) {
                // Don't return `set.add` because it's not chainable in IE 11.
                return set.add(value), set;
            }
            /**
	   * A faster alternative to `Function#apply`, this function invokes `func`
	   * with the `this` binding of `thisArg` and the arguments of `args`.
	   *
	   * @private
	   * @param {Function} func The function to invoke.
	   * @param {*} thisArg The `this` binding of `func`.
	   * @param {Array} args The arguments to invoke `func` with.
	   * @returns {*} Returns the result of `func`.
	   */
            function apply(func, thisArg, args) {
                switch (args.length) {
                  case 0:
                    return func.call(thisArg);

                  case 1:
                    return func.call(thisArg, args[0]);

                  case 2:
                    return func.call(thisArg, args[0], args[1]);

                  case 3:
                    return func.call(thisArg, args[0], args[1], args[2]);
                }
                return func.apply(thisArg, args);
            }
            /**
	   * A specialized version of `baseAggregator` for arrays.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} setter The function to set `accumulator` values.
	   * @param {Function} iteratee The iteratee to transform keys.
	   * @param {Object} accumulator The initial aggregated object.
	   * @returns {Function} Returns `accumulator`.
	   */
            function arrayAggregator(array, setter, iteratee, accumulator) {
                for (var index = -1, length = null == array ? 0 : array.length; ++index < length; ) {
                    var value = array[index];
                    setter(accumulator, value, iteratee(value), array);
                }
                return accumulator;
            }
            /**
	   * A specialized version of `_.forEach` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns `array`.
	   */
            function arrayEach(array, iteratee) {
                for (var index = -1, length = null == array ? 0 : array.length; ++index < length && iteratee(array[index], index, array) !== !1; ) ;
                return array;
            }
            /**
	   * A specialized version of `_.forEachRight` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns `array`.
	   */
            function arrayEachRight(array, iteratee) {
                for (var length = null == array ? 0 : array.length; length-- && iteratee(array[length], length, array) !== !1; ) ;
                return array;
            }
            /**
	   * A specialized version of `_.every` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} predicate The function invoked per iteration.
	   * @returns {boolean} Returns `true` if all elements pass the predicate check,
	   *  else `false`.
	   */
            function arrayEvery(array, predicate) {
                for (var index = -1, length = null == array ? 0 : array.length; ++index < length; ) if (!predicate(array[index], index, array)) return !1;
                return !0;
            }
            /**
	   * A specialized version of `_.filter` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} predicate The function invoked per iteration.
	   * @returns {Array} Returns the new filtered array.
	   */
            function arrayFilter(array, predicate) {
                for (var index = -1, length = null == array ? 0 : array.length, resIndex = 0, result = []; ++index < length; ) {
                    var value = array[index];
                    predicate(value, index, array) && (result[resIndex++] = value);
                }
                return result;
            }
            /**
	   * A specialized version of `_.includes` for arrays without support for
	   * specifying an index to search from.
	   *
	   * @private
	   * @param {Array} [array] The array to inspect.
	   * @param {*} target The value to search for.
	   * @returns {boolean} Returns `true` if `target` is found, else `false`.
	   */
            function arrayIncludes(array, value) {
                var length = null == array ? 0 : array.length;
                return !!length && baseIndexOf(array, value, 0) > -1;
            }
            /**
	   * This function is like `arrayIncludes` except that it accepts a comparator.
	   *
	   * @private
	   * @param {Array} [array] The array to inspect.
	   * @param {*} target The value to search for.
	   * @param {Function} comparator The comparator invoked per element.
	   * @returns {boolean} Returns `true` if `target` is found, else `false`.
	   */
            function arrayIncludesWith(array, value, comparator) {
                for (var index = -1, length = null == array ? 0 : array.length; ++index < length; ) if (comparator(value, array[index])) return !0;
                return !1;
            }
            /**
	   * A specialized version of `_.map` for arrays without support for iteratee
	   * shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns the new mapped array.
	   */
            function arrayMap(array, iteratee) {
                for (var index = -1, length = null == array ? 0 : array.length, result = Array(length); ++index < length; ) result[index] = iteratee(array[index], index, array);
                return result;
            }
            /**
	   * Appends the elements of `values` to `array`.
	   *
	   * @private
	   * @param {Array} array The array to modify.
	   * @param {Array} values The values to append.
	   * @returns {Array} Returns `array`.
	   */
            function arrayPush(array, values) {
                for (var index = -1, length = values.length, offset = array.length; ++index < length; ) array[offset + index] = values[index];
                return array;
            }
            /**
	   * A specialized version of `_.reduce` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @param {*} [accumulator] The initial value.
	   * @param {boolean} [initAccum] Specify using the first element of `array` as
	   *  the initial value.
	   * @returns {*} Returns the accumulated value.
	   */
            function arrayReduce(array, iteratee, accumulator, initAccum) {
                var index = -1, length = null == array ? 0 : array.length;
                for (initAccum && length && (accumulator = array[++index]); ++index < length; ) accumulator = iteratee(accumulator, array[index], index, array);
                return accumulator;
            }
            /**
	   * A specialized version of `_.reduceRight` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @param {*} [accumulator] The initial value.
	   * @param {boolean} [initAccum] Specify using the last element of `array` as
	   *  the initial value.
	   * @returns {*} Returns the accumulated value.
	   */
            function arrayReduceRight(array, iteratee, accumulator, initAccum) {
                var length = null == array ? 0 : array.length;
                for (initAccum && length && (accumulator = array[--length]); length--; ) accumulator = iteratee(accumulator, array[length], length, array);
                return accumulator;
            }
            /**
	   * A specialized version of `_.some` for arrays without support for iteratee
	   * shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} predicate The function invoked per iteration.
	   * @returns {boolean} Returns `true` if any element passes the predicate check,
	   *  else `false`.
	   */
            function arraySome(array, predicate) {
                for (var index = -1, length = null == array ? 0 : array.length; ++index < length; ) if (predicate(array[index], index, array)) return !0;
                return !1;
            }
            /**
	   * Converts an ASCII `string` to an array.
	   *
	   * @private
	   * @param {string} string The string to convert.
	   * @returns {Array} Returns the converted array.
	   */
            function asciiToArray(string) {
                return string.split("");
            }
            /**
	   * Splits an ASCII `string` into an array of its words.
	   *
	   * @private
	   * @param {string} The string to inspect.
	   * @returns {Array} Returns the words of `string`.
	   */
            function asciiWords(string) {
                return string.match(reAsciiWord) || [];
            }
            /**
	   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
	   * without support for iteratee shorthands, which iterates over `collection`
	   * using `eachFunc`.
	   *
	   * @private
	   * @param {Array|Object} collection The collection to inspect.
	   * @param {Function} predicate The function invoked per iteration.
	   * @param {Function} eachFunc The function to iterate over `collection`.
	   * @returns {*} Returns the found element or its key, else `undefined`.
	   */
            function baseFindKey(collection, predicate, eachFunc) {
                var result;
                return eachFunc(collection, function(value, key, collection) {
                    if (predicate(value, key, collection)) return result = key, !1;
                }), result;
            }
            /**
	   * The base implementation of `_.findIndex` and `_.findLastIndex` without
	   * support for iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {Function} predicate The function invoked per iteration.
	   * @param {number} fromIndex The index to search from.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
            function baseFindIndex(array, predicate, fromIndex, fromRight) {
                for (var length = array.length, index = fromIndex + (fromRight ? 1 : -1); fromRight ? index-- : ++index < length; ) if (predicate(array[index], index, array)) return index;
                return -1;
            }
            /**
	   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
            function baseIndexOf(array, value, fromIndex) {
                return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
            }
            /**
	   * This function is like `baseIndexOf` except that it accepts a comparator.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @param {Function} comparator The comparator invoked per element.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
            function baseIndexOfWith(array, value, fromIndex, comparator) {
                for (var index = fromIndex - 1, length = array.length; ++index < length; ) if (comparator(array[index], value)) return index;
                return -1;
            }
            /**
	   * The base implementation of `_.isNaN` without support for number objects.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	   */
            function baseIsNaN(value) {
                return value !== value;
            }
            /**
	   * The base implementation of `_.mean` and `_.meanBy` without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {number} Returns the mean.
	   */
            function baseMean(array, iteratee) {
                var length = null == array ? 0 : array.length;
                return length ? baseSum(array, iteratee) / length : NAN;
            }
            /**
	   * The base implementation of `_.property` without support for deep paths.
	   *
	   * @private
	   * @param {string} key The key of the property to get.
	   * @returns {Function} Returns the new accessor function.
	   */
            function baseProperty(key) {
                return function(object) {
                    return null == object ? undefined : object[key];
                };
            }
            /**
	   * The base implementation of `_.propertyOf` without support for deep paths.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @returns {Function} Returns the new accessor function.
	   */
            function basePropertyOf(object) {
                return function(key) {
                    return null == object ? undefined : object[key];
                };
            }
            /**
	   * The base implementation of `_.reduce` and `_.reduceRight`, without support
	   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
	   *
	   * @private
	   * @param {Array|Object} collection The collection to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @param {*} accumulator The initial value.
	   * @param {boolean} initAccum Specify using the first or last element of
	   *  `collection` as the initial value.
	   * @param {Function} eachFunc The function to iterate over `collection`.
	   * @returns {*} Returns the accumulated value.
	   */
            function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
                return eachFunc(collection, function(value, index, collection) {
                    accumulator = initAccum ? (initAccum = !1, value) : iteratee(accumulator, value, index, collection);
                }), accumulator;
            }
            /**
	   * The base implementation of `_.sortBy` which uses `comparer` to define the
	   * sort order of `array` and replaces criteria objects with their corresponding
	   * values.
	   *
	   * @private
	   * @param {Array} array The array to sort.
	   * @param {Function} comparer The function to define sort order.
	   * @returns {Array} Returns `array`.
	   */
            function baseSortBy(array, comparer) {
                var length = array.length;
                for (array.sort(comparer); length--; ) array[length] = array[length].value;
                return array;
            }
            /**
	   * The base implementation of `_.sum` and `_.sumBy` without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {number} Returns the sum.
	   */
            function baseSum(array, iteratee) {
                for (var result, index = -1, length = array.length; ++index < length; ) {
                    var current = iteratee(array[index]);
                    current !== undefined && (result = result === undefined ? current : result + current);
                }
                return result;
            }
            /**
	   * The base implementation of `_.times` without support for iteratee shorthands
	   * or max array length checks.
	   *
	   * @private
	   * @param {number} n The number of times to invoke `iteratee`.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns the array of results.
	   */
            function baseTimes(n, iteratee) {
                for (var index = -1, result = Array(n); ++index < n; ) result[index] = iteratee(index);
                return result;
            }
            /**
	   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
	   * of key-value pairs for `object` corresponding to the property names of `props`.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @param {Array} props The property names to get values for.
	   * @returns {Object} Returns the key-value pairs.
	   */
            function baseToPairs(object, props) {
                return arrayMap(props, function(key) {
                    return [ key, object[key] ];
                });
            }
            /**
	   * The base implementation of `_.unary` without support for storing metadata.
	   *
	   * @private
	   * @param {Function} func The function to cap arguments for.
	   * @returns {Function} Returns the new capped function.
	   */
            function baseUnary(func) {
                return function(value) {
                    return func(value);
                };
            }
            /**
	   * The base implementation of `_.values` and `_.valuesIn` which creates an
	   * array of `object` property values corresponding to the property names
	   * of `props`.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @param {Array} props The property names to get values for.
	   * @returns {Object} Returns the array of property values.
	   */
            function baseValues(object, props) {
                return arrayMap(props, function(key) {
                    return object[key];
                });
            }
            /**
	   * Checks if a `cache` value for `key` exists.
	   *
	   * @private
	   * @param {Object} cache The cache to query.
	   * @param {string} key The key of the entry to check.
	   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	   */
            function cacheHas(cache, key) {
                return cache.has(key);
            }
            /**
	   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
	   * that is not found in the character symbols.
	   *
	   * @private
	   * @param {Array} strSymbols The string symbols to inspect.
	   * @param {Array} chrSymbols The character symbols to find.
	   * @returns {number} Returns the index of the first unmatched string symbol.
	   */
            function charsStartIndex(strSymbols, chrSymbols) {
                for (var index = -1, length = strSymbols.length; ++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1; ) ;
                return index;
            }
            /**
	   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
	   * that is not found in the character symbols.
	   *
	   * @private
	   * @param {Array} strSymbols The string symbols to inspect.
	   * @param {Array} chrSymbols The character symbols to find.
	   * @returns {number} Returns the index of the last unmatched string symbol.
	   */
            function charsEndIndex(strSymbols, chrSymbols) {
                for (var index = strSymbols.length; index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1; ) ;
                return index;
            }
            /**
	   * Gets the number of `placeholder` occurrences in `array`.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} placeholder The placeholder to search for.
	   * @returns {number} Returns the placeholder count.
	   */
            function countHolders(array, placeholder) {
                for (var length = array.length, result = 0; length--; ) array[length] === placeholder && ++result;
                return result;
            }
            /**
	   * Used by `_.template` to escape characters for inclusion in compiled string literals.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
            function escapeStringChar(chr) {
                return "\\" + stringEscapes[chr];
            }
            /**
	   * Gets the value at `key` of `object`.
	   *
	   * @private
	   * @param {Object} [object] The object to query.
	   * @param {string} key The key of the property to get.
	   * @returns {*} Returns the property value.
	   */
            function getValue(object, key) {
                return null == object ? undefined : object[key];
            }
            /**
	   * Checks if `string` contains Unicode symbols.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
	   */
            function hasUnicode(string) {
                return reHasUnicode.test(string);
            }
            /**
	   * Checks if `string` contains a word composed of Unicode symbols.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {boolean} Returns `true` if a word is found, else `false`.
	   */
            function hasUnicodeWord(string) {
                return reHasUnicodeWord.test(string);
            }
            /**
	   * Converts `iterator` to an array.
	   *
	   * @private
	   * @param {Object} iterator The iterator to convert.
	   * @returns {Array} Returns the converted array.
	   */
            function iteratorToArray(iterator) {
                for (var data, result = []; !(data = iterator.next()).done; ) result.push(data.value);
                return result;
            }
            /**
	   * Converts `map` to its key-value pairs.
	   *
	   * @private
	   * @param {Object} map The map to convert.
	   * @returns {Array} Returns the key-value pairs.
	   */
            function mapToArray(map) {
                var index = -1, result = Array(map.size);
                return map.forEach(function(value, key) {
                    result[++index] = [ key, value ];
                }), result;
            }
            /**
	   * Creates a unary function that invokes `func` with its argument transformed.
	   *
	   * @private
	   * @param {Function} func The function to wrap.
	   * @param {Function} transform The argument transform.
	   * @returns {Function} Returns the new function.
	   */
            function overArg(func, transform) {
                return function(arg) {
                    return func(transform(arg));
                };
            }
            /**
	   * Replaces all `placeholder` elements in `array` with an internal placeholder
	   * and returns an array of their indexes.
	   *
	   * @private
	   * @param {Array} array The array to modify.
	   * @param {*} placeholder The placeholder to replace.
	   * @returns {Array} Returns the new array of placeholder indexes.
	   */
            function replaceHolders(array, placeholder) {
                for (var index = -1, length = array.length, resIndex = 0, result = []; ++index < length; ) {
                    var value = array[index];
                    value !== placeholder && value !== PLACEHOLDER || (array[index] = PLACEHOLDER, result[resIndex++] = index);
                }
                return result;
            }
            /**
	   * Converts `set` to an array of its values.
	   *
	   * @private
	   * @param {Object} set The set to convert.
	   * @returns {Array} Returns the values.
	   */
            function setToArray(set) {
                var index = -1, result = Array(set.size);
                return set.forEach(function(value) {
                    result[++index] = value;
                }), result;
            }
            /**
	   * Converts `set` to its value-value pairs.
	   *
	   * @private
	   * @param {Object} set The set to convert.
	   * @returns {Array} Returns the value-value pairs.
	   */
            function setToPairs(set) {
                var index = -1, result = Array(set.size);
                return set.forEach(function(value) {
                    result[++index] = [ value, value ];
                }), result;
            }
            /**
	   * A specialized version of `_.indexOf` which performs strict equality
	   * comparisons of values, i.e. `===`.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
            function strictIndexOf(array, value, fromIndex) {
                for (var index = fromIndex - 1, length = array.length; ++index < length; ) if (array[index] === value) return index;
                return -1;
            }
            /**
	   * A specialized version of `_.lastIndexOf` which performs strict equality
	   * comparisons of values, i.e. `===`.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
            function strictLastIndexOf(array, value, fromIndex) {
                for (var index = fromIndex + 1; index--; ) if (array[index] === value) return index;
                return index;
            }
            /**
	   * Gets the number of symbols in `string`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {number} Returns the string size.
	   */
            function stringSize(string) {
                return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
            }
            /**
	   * Converts `string` to an array.
	   *
	   * @private
	   * @param {string} string The string to convert.
	   * @returns {Array} Returns the converted array.
	   */
            function stringToArray(string) {
                return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
            }
            /**
	   * Gets the size of a Unicode `string`.
	   *
	   * @private
	   * @param {string} string The string inspect.
	   * @returns {number} Returns the string size.
	   */
            function unicodeSize(string) {
                for (var result = reUnicode.lastIndex = 0; reUnicode.test(string); ) ++result;
                return result;
            }
            /**
	   * Converts a Unicode `string` to an array.
	   *
	   * @private
	   * @param {string} string The string to convert.
	   * @returns {Array} Returns the converted array.
	   */
            function unicodeToArray(string) {
                return string.match(reUnicode) || [];
            }
            /**
	   * Splits a Unicode `string` into an array of its words.
	   *
	   * @private
	   * @param {string} The string to inspect.
	   * @returns {Array} Returns the words of `string`.
	   */
            function unicodeWords(string) {
                return string.match(reUnicodeWord) || [];
            }
            /** Used as a safe reference for `undefined` in pre-ES5 environments. */
            var undefined, VERSION = "4.17.4", LARGE_ARRAY_SIZE = 200, CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", HASH_UNDEFINED = "__lodash_hash_undefined__", MAX_MEMOIZE_SIZE = 500, PLACEHOLDER = "__lodash_placeholder__", CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4, COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2, WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512, DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...", HOT_COUNT = 800, HOT_SPAN = 16, LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3, INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 1.7976931348623157e308, NAN = NaN, MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1, wrapFlags = [ [ "ary", WRAP_ARY_FLAG ], [ "bind", WRAP_BIND_FLAG ], [ "bindKey", WRAP_BIND_KEY_FLAG ], [ "curry", WRAP_CURRY_FLAG ], [ "curryRight", WRAP_CURRY_RIGHT_FLAG ], [ "flip", WRAP_FLIP_FLAG ], [ "partial", WRAP_PARTIAL_FLAG ], [ "partialRight", WRAP_PARTIAL_RIGHT_FLAG ], [ "rearg", WRAP_REARG_FLAG ] ], argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]", arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]", reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g, reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source), reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g, reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, reLeadingDot = /^\./, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source), reTrim = /^\s+|\s+$/g, reTrimStart = /^\s+/, reTrimEnd = /\s+$/, reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /, reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, reEscapeChar = /\\(\\)?/g, reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, reFlags = /\w*$/, reIsBadHex = /^[-+]0x[0-9a-f]+$/i, reIsBinary = /^0b[01]+$/i, reIsHostCtor = /^\[object .+?Constructor\]$/, reIsOctal = /^0o[0-7]+$/i, reIsUint = /^(?:0|[1-9]\d*)$/, reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, reNoMatch = /($^)/, reUnescapedString = /['\n\r\u2028\u2029\\]/g, rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange, rsApos = "['’]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d", rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [ rsNonAstral, rsRegional, rsSurrPair ].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)", rsOrdUpper = "\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [ rsDingbat, rsRegional, rsSurrPair ].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [ rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral ].join("|") + ")", reApos = RegExp(rsApos, "g"), reComboMark = RegExp(rsCombo, "g"), reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g"), reUnicodeWord = RegExp([ rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [ rsBreak, rsUpper, "$" ].join("|") + ")", rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [ rsBreak, rsUpper + rsMiscLower, "$" ].join("|") + ")", rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower, rsUpper + "+" + rsOptContrUpper, rsOrdUpper, rsOrdLower, rsDigits, rsEmoji ].join("|"), "g"), reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]"), reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, contextProps = [ "Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout" ], templateCounter = -1, typedArrayTags = {};
            typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = !0, 
            typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = !1;
            /** Used to identify `toStringTag` values supported by `_.clone`. */
            var cloneableTags = {};
            cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = !0, 
            cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = !1;
            /** Used to map Latin Unicode letters to basic Latin letters. */
            var deburredLetters = {
                // Latin-1 Supplement block.
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ã": "A",
                "Ä": "A",
                "Å": "A",
                "à": "a",
                "á": "a",
                "â": "a",
                "ã": "a",
                "ä": "a",
                "å": "a",
                "Ç": "C",
                "ç": "c",
                "Ð": "D",
                "ð": "d",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ë": "E",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ë": "e",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ï": "I",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ï": "i",
                "Ñ": "N",
                "ñ": "n",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Õ": "O",
                "Ö": "O",
                "Ø": "O",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "õ": "o",
                "ö": "o",
                "ø": "o",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ü": "U",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ü": "u",
                "Ý": "Y",
                "ý": "y",
                "ÿ": "y",
                "Æ": "Ae",
                "æ": "ae",
                "Þ": "Th",
                "þ": "th",
                "ß": "ss",
                // Latin Extended-A block.
                "Ā": "A",
                "Ă": "A",
                "Ą": "A",
                "ā": "a",
                "ă": "a",
                "ą": "a",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "Ď": "D",
                "Đ": "D",
                "ď": "d",
                "đ": "d",
                "Ē": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ę": "E",
                "Ě": "E",
                "ē": "e",
                "ĕ": "e",
                "ė": "e",
                "ę": "e",
                "ě": "e",
                "Ĝ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ģ": "G",
                "ĝ": "g",
                "ğ": "g",
                "ġ": "g",
                "ģ": "g",
                "Ĥ": "H",
                "Ħ": "H",
                "ĥ": "h",
                "ħ": "h",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "Į": "I",
                "İ": "I",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "į": "i",
                "ı": "i",
                "Ĵ": "J",
                "ĵ": "j",
                "Ķ": "K",
                "ķ": "k",
                "ĸ": "k",
                "Ĺ": "L",
                "Ļ": "L",
                "Ľ": "L",
                "Ŀ": "L",
                "Ł": "L",
                "ĺ": "l",
                "ļ": "l",
                "ľ": "l",
                "ŀ": "l",
                "ł": "l",
                "Ń": "N",
                "Ņ": "N",
                "Ň": "N",
                "Ŋ": "N",
                "ń": "n",
                "ņ": "n",
                "ň": "n",
                "ŋ": "n",
                "Ō": "O",
                "Ŏ": "O",
                "Ő": "O",
                "ō": "o",
                "ŏ": "o",
                "ő": "o",
                "Ŕ": "R",
                "Ŗ": "R",
                "Ř": "R",
                "ŕ": "r",
                "ŗ": "r",
                "ř": "r",
                "Ś": "S",
                "Ŝ": "S",
                "Ş": "S",
                "Š": "S",
                "ś": "s",
                "ŝ": "s",
                "ş": "s",
                "š": "s",
                "Ţ": "T",
                "Ť": "T",
                "Ŧ": "T",
                "ţ": "t",
                "ť": "t",
                "ŧ": "t",
                "Ũ": "U",
                "Ū": "U",
                "Ŭ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ų": "U",
                "ũ": "u",
                "ū": "u",
                "ŭ": "u",
                "ů": "u",
                "ű": "u",
                "ų": "u",
                "Ŵ": "W",
                "ŵ": "w",
                "Ŷ": "Y",
                "ŷ": "y",
                "Ÿ": "Y",
                "Ź": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "ź": "z",
                "ż": "z",
                "ž": "z",
                "Ĳ": "IJ",
                "ĳ": "ij",
                "Œ": "Oe",
                "œ": "oe",
                "ŉ": "'n",
                "ſ": "s"
            }, htmlEscapes = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            }, htmlUnescapes = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'"
            }, stringEscapes = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }, freeParseFloat = parseFloat, freeParseInt = parseInt, freeGlobal = "object" == typeof global && global && global.Object === Object && global, freeSelf = "object" == typeof self && self && self.Object === Object && self, root = freeGlobal || freeSelf || Function("return this")(), freeExports = "object" == typeof exports && exports && !exports.nodeType && exports, freeModule = freeExports && "object" == typeof module && module && !module.nodeType && module, moduleExports = freeModule && freeModule.exports === freeExports, freeProcess = moduleExports && freeGlobal.process, nodeUtil = function() {
                try {
                    return freeProcess && freeProcess.binding && freeProcess.binding("util");
                } catch (e) {}
            }(), nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray, asciiSize = baseProperty("length"), deburrLetter = basePropertyOf(deburredLetters), escapeHtmlChar = basePropertyOf(htmlEscapes), unescapeHtmlChar = basePropertyOf(htmlUnescapes), runInContext = function runInContext(context) {
                /*------------------------------------------------------------------------*/
                /**
	     * Creates a `lodash` object which wraps `value` to enable implicit method
	     * chain sequences. Methods that operate on and return arrays, collections,
	     * and functions can be chained together. Methods that retrieve a single value
	     * or may return a primitive value will automatically end the chain sequence
	     * and return the unwrapped value. Otherwise, the value must be unwrapped
	     * with `_#value`.
	     *
	     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
	     * enabled using `_.chain`.
	     *
	     * The execution of chained methods is lazy, that is, it's deferred until
	     * `_#value` is implicitly or explicitly called.
	     *
	     * Lazy evaluation allows several methods to support shortcut fusion.
	     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
	     * the creation of intermediate arrays and can greatly reduce the number of
	     * iteratee executions. Sections of a chain sequence qualify for shortcut
	     * fusion if the section is applied to an array and iteratees accept only
	     * one argument. The heuristic for whether a section qualifies for shortcut
	     * fusion is subject to change.
	     *
	     * Chaining is supported in custom builds as long as the `_#value` method is
	     * directly or indirectly included in the build.
	     *
	     * In addition to lodash methods, wrappers have `Array` and `String` methods.
	     *
	     * The wrapper `Array` methods are:
	     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
	     *
	     * The wrapper `String` methods are:
	     * `replace` and `split`
	     *
	     * The wrapper methods that support shortcut fusion are:
	     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
	     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
	     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
	     *
	     * The chainable wrapper methods are:
	     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
	     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
	     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
	     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
	     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
	     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
	     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
	     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
	     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
	     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
	     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
	     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
	     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
	     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
	     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
	     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
	     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
	     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
	     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
	     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
	     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
	     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
	     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
	     * `zipObject`, `zipObjectDeep`, and `zipWith`
	     *
	     * The wrapper methods that are **not** chainable by default are:
	     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
	     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
	     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
	     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
	     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
	     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
	     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
	     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
	     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
	     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
	     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
	     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
	     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
	     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
	     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
	     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
	     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
	     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
	     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
	     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
	     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
	     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
	     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
	     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
	     * `upperFirst`, `value`, and `words`
	     *
	     * @name _
	     * @constructor
	     * @category Seq
	     * @param {*} value The value to wrap in a `lodash` instance.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var wrapped = _([1, 2, 3]);
	     *
	     * // Returns an unwrapped value.
	     * wrapped.reduce(_.add);
	     * // => 6
	     *
	     * // Returns a wrapped value.
	     * var squares = wrapped.map(square);
	     *
	     * _.isArray(squares);
	     * // => false
	     *
	     * _.isArray(squares.value());
	     * // => true
	     */
                function lodash(value) {
                    if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
                        if (value instanceof LodashWrapper) return value;
                        if (hasOwnProperty.call(value, "__wrapped__")) return wrapperClone(value);
                    }
                    return new LodashWrapper(value);
                }
                /**
	     * The function whose prototype chain sequence wrappers inherit from.
	     *
	     * @private
	     */
                function baseLodash() {}
                /**
	     * The base constructor for creating `lodash` wrapper objects.
	     *
	     * @private
	     * @param {*} value The value to wrap.
	     * @param {boolean} [chainAll] Enable explicit method chain sequences.
	     */
                function LodashWrapper(value, chainAll) {
                    this.__wrapped__ = value, this.__actions__ = [], this.__chain__ = !!chainAll, this.__index__ = 0, 
                    this.__values__ = undefined;
                }
                /*------------------------------------------------------------------------*/
                /**
	     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
	     *
	     * @private
	     * @constructor
	     * @param {*} value The value to wrap.
	     */
                function LazyWrapper(value) {
                    this.__wrapped__ = value, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, 
                    this.__iteratees__ = [], this.__takeCount__ = MAX_ARRAY_LENGTH, this.__views__ = [];
                }
                /**
	     * Creates a clone of the lazy wrapper object.
	     *
	     * @private
	     * @name clone
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the cloned `LazyWrapper` object.
	     */
                function lazyClone() {
                    var result = new LazyWrapper(this.__wrapped__);
                    return result.__actions__ = copyArray(this.__actions__), result.__dir__ = this.__dir__, 
                    result.__filtered__ = this.__filtered__, result.__iteratees__ = copyArray(this.__iteratees__), 
                    result.__takeCount__ = this.__takeCount__, result.__views__ = copyArray(this.__views__), 
                    result;
                }
                /**
	     * Reverses the direction of lazy iteration.
	     *
	     * @private
	     * @name reverse
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the new reversed `LazyWrapper` object.
	     */
                function lazyReverse() {
                    if (this.__filtered__) {
                        var result = new LazyWrapper(this);
                        result.__dir__ = -1, result.__filtered__ = !0;
                    } else result = this.clone(), result.__dir__ *= -1;
                    return result;
                }
                /**
	     * Extracts the unwrapped value from its lazy wrapper.
	     *
	     * @private
	     * @name value
	     * @memberOf LazyWrapper
	     * @returns {*} Returns the unwrapped value.
	     */
                function lazyValue() {
                    var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
                    if (!isArr || !isRight && arrLength == length && takeCount == length) return baseWrapperValue(array, this.__actions__);
                    var result = [];
                    outer: for (;length-- && resIndex < takeCount; ) {
                        index += dir;
                        for (var iterIndex = -1, value = array[index]; ++iterIndex < iterLength; ) {
                            var data = iteratees[iterIndex], iteratee = data.iteratee, type = data.type, computed = iteratee(value);
                            if (type == LAZY_MAP_FLAG) value = computed; else if (!computed) {
                                if (type == LAZY_FILTER_FLAG) continue outer;
                                break outer;
                            }
                        }
                        result[resIndex++] = value;
                    }
                    return result;
                }
                /*------------------------------------------------------------------------*/
                /**
	     * Creates a hash object.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [entries] The key-value pairs to cache.
	     */
                function Hash(entries) {
                    var index = -1, length = null == entries ? 0 : entries.length;
                    for (this.clear(); ++index < length; ) {
                        var entry = entries[index];
                        this.set(entry[0], entry[1]);
                    }
                }
                /**
	     * Removes all key-value entries from the hash.
	     *
	     * @private
	     * @name clear
	     * @memberOf Hash
	     */
                function hashClear() {
                    this.__data__ = nativeCreate ? nativeCreate(null) : {}, this.size = 0;
                }
                /**
	     * Removes `key` and its value from the hash.
	     *
	     * @private
	     * @name delete
	     * @memberOf Hash
	     * @param {Object} hash The hash to modify.
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */
                function hashDelete(key) {
                    var result = this.has(key) && delete this.__data__[key];
                    return this.size -= result ? 1 : 0, result;
                }
                /**
	     * Gets the hash value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf Hash
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */
                function hashGet(key) {
                    var data = this.__data__;
                    if (nativeCreate) {
                        var result = data[key];
                        return result === HASH_UNDEFINED ? undefined : result;
                    }
                    return hasOwnProperty.call(data, key) ? data[key] : undefined;
                }
                /**
	     * Checks if a hash value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf Hash
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */
                function hashHas(key) {
                    var data = this.__data__;
                    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
                }
                /**
	     * Sets the hash `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf Hash
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the hash instance.
	     */
                function hashSet(key, value) {
                    var data = this.__data__;
                    return this.size += this.has(key) ? 0 : 1, data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value, 
                    this;
                }
                /*------------------------------------------------------------------------*/
                /**
	     * Creates an list cache object.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [entries] The key-value pairs to cache.
	     */
                function ListCache(entries) {
                    var index = -1, length = null == entries ? 0 : entries.length;
                    for (this.clear(); ++index < length; ) {
                        var entry = entries[index];
                        this.set(entry[0], entry[1]);
                    }
                }
                /**
	     * Removes all key-value entries from the list cache.
	     *
	     * @private
	     * @name clear
	     * @memberOf ListCache
	     */
                function listCacheClear() {
                    this.__data__ = [], this.size = 0;
                }
                /**
	     * Removes `key` and its value from the list cache.
	     *
	     * @private
	     * @name delete
	     * @memberOf ListCache
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */
                function listCacheDelete(key) {
                    var data = this.__data__, index = assocIndexOf(data, key);
                    if (index < 0) return !1;
                    var lastIndex = data.length - 1;
                    return index == lastIndex ? data.pop() : splice.call(data, index, 1), --this.size, 
                    !0;
                }
                /**
	     * Gets the list cache value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf ListCache
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */
                function listCacheGet(key) {
                    var data = this.__data__, index = assocIndexOf(data, key);
                    return index < 0 ? undefined : data[index][1];
                }
                /**
	     * Checks if a list cache value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf ListCache
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */
                function listCacheHas(key) {
                    return assocIndexOf(this.__data__, key) > -1;
                }
                /**
	     * Sets the list cache `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf ListCache
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the list cache instance.
	     */
                function listCacheSet(key, value) {
                    var data = this.__data__, index = assocIndexOf(data, key);
                    return index < 0 ? (++this.size, data.push([ key, value ])) : data[index][1] = value, 
                    this;
                }
                /*------------------------------------------------------------------------*/
                /**
	     * Creates a map cache object to store key-value pairs.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [entries] The key-value pairs to cache.
	     */
                function MapCache(entries) {
                    var index = -1, length = null == entries ? 0 : entries.length;
                    for (this.clear(); ++index < length; ) {
                        var entry = entries[index];
                        this.set(entry[0], entry[1]);
                    }
                }
                /**
	     * Removes all key-value entries from the map.
	     *
	     * @private
	     * @name clear
	     * @memberOf MapCache
	     */
                function mapCacheClear() {
                    this.size = 0, this.__data__ = {
                        hash: new Hash(),
                        map: new (Map || ListCache)(),
                        string: new Hash()
                    };
                }
                /**
	     * Removes `key` and its value from the map.
	     *
	     * @private
	     * @name delete
	     * @memberOf MapCache
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */
                function mapCacheDelete(key) {
                    var result = getMapData(this, key).delete(key);
                    return this.size -= result ? 1 : 0, result;
                }
                /**
	     * Gets the map value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf MapCache
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */
                function mapCacheGet(key) {
                    return getMapData(this, key).get(key);
                }
                /**
	     * Checks if a map value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf MapCache
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */
                function mapCacheHas(key) {
                    return getMapData(this, key).has(key);
                }
                /**
	     * Sets the map `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf MapCache
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the map cache instance.
	     */
                function mapCacheSet(key, value) {
                    var data = getMapData(this, key), size = data.size;
                    return data.set(key, value), this.size += data.size == size ? 0 : 1, this;
                }
                /*------------------------------------------------------------------------*/
                /**
	     *
	     * Creates an array cache object to store unique values.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [values] The values to cache.
	     */
                function SetCache(values) {
                    var index = -1, length = null == values ? 0 : values.length;
                    for (this.__data__ = new MapCache(); ++index < length; ) this.add(values[index]);
                }
                /**
	     * Adds `value` to the array cache.
	     *
	     * @private
	     * @name add
	     * @memberOf SetCache
	     * @alias push
	     * @param {*} value The value to cache.
	     * @returns {Object} Returns the cache instance.
	     */
                function setCacheAdd(value) {
                    return this.__data__.set(value, HASH_UNDEFINED), this;
                }
                /**
	     * Checks if `value` is in the array cache.
	     *
	     * @private
	     * @name has
	     * @memberOf SetCache
	     * @param {*} value The value to search for.
	     * @returns {number} Returns `true` if `value` is found, else `false`.
	     */
                function setCacheHas(value) {
                    return this.__data__.has(value);
                }
                /*------------------------------------------------------------------------*/
                /**
	     * Creates a stack cache object to store key-value pairs.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [entries] The key-value pairs to cache.
	     */
                function Stack(entries) {
                    var data = this.__data__ = new ListCache(entries);
                    this.size = data.size;
                }
                /**
	     * Removes all key-value entries from the stack.
	     *
	     * @private
	     * @name clear
	     * @memberOf Stack
	     */
                function stackClear() {
                    this.__data__ = new ListCache(), this.size = 0;
                }
                /**
	     * Removes `key` and its value from the stack.
	     *
	     * @private
	     * @name delete
	     * @memberOf Stack
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */
                function stackDelete(key) {
                    var data = this.__data__, result = data.delete(key);
                    return this.size = data.size, result;
                }
                /**
	     * Gets the stack value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf Stack
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */
                function stackGet(key) {
                    return this.__data__.get(key);
                }
                /**
	     * Checks if a stack value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf Stack
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */
                function stackHas(key) {
                    return this.__data__.has(key);
                }
                /**
	     * Sets the stack `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf Stack
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the stack cache instance.
	     */
                function stackSet(key, value) {
                    var data = this.__data__;
                    if (data instanceof ListCache) {
                        var pairs = data.__data__;
                        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) return pairs.push([ key, value ]), 
                        this.size = ++data.size, this;
                        data = this.__data__ = new MapCache(pairs);
                    }
                    return data.set(key, value), this.size = data.size, this;
                }
                /*------------------------------------------------------------------------*/
                /**
	     * Creates an array of the enumerable property names of the array-like `value`.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @param {boolean} inherited Specify returning inherited property names.
	     * @returns {Array} Returns the array of property names.
	     */
                function arrayLikeKeys(value, inherited) {
                    var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
                    for (var key in value) !inherited && !hasOwnProperty.call(value, key) || skipIndexes && (// Safari 9 has enumerable `arguments.length` in strict mode.
                    "length" == key || // Node.js 0.10 has enumerable non-index properties on buffers.
                    isBuff && ("offset" == key || "parent" == key) || // PhantomJS 2 has enumerable non-index properties on typed arrays.
                    isType && ("buffer" == key || "byteLength" == key || "byteOffset" == key) || // Skip index properties.
                    isIndex(key, length)) || result.push(key);
                    return result;
                }
                /**
	     * A specialized version of `_.sample` for arrays.
	     *
	     * @private
	     * @param {Array} array The array to sample.
	     * @returns {*} Returns the random element.
	     */
                function arraySample(array) {
                    var length = array.length;
                    return length ? array[baseRandom(0, length - 1)] : undefined;
                }
                /**
	     * A specialized version of `_.sampleSize` for arrays.
	     *
	     * @private
	     * @param {Array} array The array to sample.
	     * @param {number} n The number of elements to sample.
	     * @returns {Array} Returns the random elements.
	     */
                function arraySampleSize(array, n) {
                    return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
                }
                /**
	     * A specialized version of `_.shuffle` for arrays.
	     *
	     * @private
	     * @param {Array} array The array to shuffle.
	     * @returns {Array} Returns the new shuffled array.
	     */
                function arrayShuffle(array) {
                    return shuffleSelf(copyArray(array));
                }
                /**
	     * This function is like `assignValue` except that it doesn't assign
	     * `undefined` values.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {string} key The key of the property to assign.
	     * @param {*} value The value to assign.
	     */
                function assignMergeValue(object, key, value) {
                    (value === undefined || eq(object[key], value)) && (value !== undefined || key in object) || baseAssignValue(object, key, value);
                }
                /**
	     * Assigns `value` to `key` of `object` if the existing value is not equivalent
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {string} key The key of the property to assign.
	     * @param {*} value The value to assign.
	     */
                function assignValue(object, key, value) {
                    var objValue = object[key];
                    hasOwnProperty.call(object, key) && eq(objValue, value) && (value !== undefined || key in object) || baseAssignValue(object, key, value);
                }
                /**
	     * Gets the index at which the `key` is found in `array` of key-value pairs.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {*} key The key to search for.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     */
                function assocIndexOf(array, key) {
                    for (var length = array.length; length--; ) if (eq(array[length][0], key)) return length;
                    return -1;
                }
                /**
	     * Aggregates elements of `collection` on `accumulator` with keys transformed
	     * by `iteratee` and values set by `setter`.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} setter The function to set `accumulator` values.
	     * @param {Function} iteratee The iteratee to transform keys.
	     * @param {Object} accumulator The initial aggregated object.
	     * @returns {Function} Returns `accumulator`.
	     */
                function baseAggregator(collection, setter, iteratee, accumulator) {
                    return baseEach(collection, function(value, key, collection) {
                        setter(accumulator, value, iteratee(value), collection);
                    }), accumulator;
                }
                /**
	     * The base implementation of `_.assign` without support for multiple sources
	     * or `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @returns {Object} Returns `object`.
	     */
                function baseAssign(object, source) {
                    return object && copyObject(source, keys(source), object);
                }
                /**
	     * The base implementation of `_.assignIn` without support for multiple sources
	     * or `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @returns {Object} Returns `object`.
	     */
                function baseAssignIn(object, source) {
                    return object && copyObject(source, keysIn(source), object);
                }
                /**
	     * The base implementation of `assignValue` and `assignMergeValue` without
	     * value checks.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {string} key The key of the property to assign.
	     * @param {*} value The value to assign.
	     */
                function baseAssignValue(object, key, value) {
                    "__proto__" == key && defineProperty ? defineProperty(object, key, {
                        configurable: !0,
                        enumerable: !0,
                        value: value,
                        writable: !0
                    }) : object[key] = value;
                }
                /**
	     * The base implementation of `_.at` without support for individual paths.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {string[]} paths The property paths to pick.
	     * @returns {Array} Returns the picked elements.
	     */
                function baseAt(object, paths) {
                    for (var index = -1, length = paths.length, result = Array(length), skip = null == object; ++index < length; ) result[index] = skip ? undefined : get(object, paths[index]);
                    return result;
                }
                /**
	     * The base implementation of `_.clamp` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {number} number The number to clamp.
	     * @param {number} [lower] The lower bound.
	     * @param {number} upper The upper bound.
	     * @returns {number} Returns the clamped number.
	     */
                function baseClamp(number, lower, upper) {
                    return number === number && (upper !== undefined && (number = number <= upper ? number : upper), 
                    lower !== undefined && (number = number >= lower ? number : lower)), number;
                }
                /**
	     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	     * traversed objects.
	     *
	     * @private
	     * @param {*} value The value to clone.
	     * @param {boolean} bitmask The bitmask flags.
	     *  1 - Deep clone
	     *  2 - Flatten inherited properties
	     *  4 - Clone symbols
	     * @param {Function} [customizer] The function to customize cloning.
	     * @param {string} [key] The key of `value`.
	     * @param {Object} [object] The parent object of `value`.
	     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	     * @returns {*} Returns the cloned value.
	     */
                function baseClone(value, bitmask, customizer, key, object, stack) {
                    var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
                    if (customizer && (result = object ? customizer(value, key, object, stack) : customizer(value)), 
                    result !== undefined) return result;
                    if (!isObject(value)) return value;
                    var isArr = isArray(value);
                    if (isArr) {
                        if (result = initCloneArray(value), !isDeep) return copyArray(value, result);
                    } else {
                        var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
                        if (isBuffer(value)) return cloneBuffer(value, isDeep);
                        if (tag == objectTag || tag == argsTag || isFunc && !object) {
                            if (result = isFlat || isFunc ? {} : initCloneObject(value), !isDeep) return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
                        } else {
                            if (!cloneableTags[tag]) return object ? value : {};
                            result = initCloneByTag(value, tag, baseClone, isDeep);
                        }
                    }
                    // Check for circular references and return its corresponding clone.
                    stack || (stack = new Stack());
                    var stacked = stack.get(value);
                    if (stacked) return stacked;
                    stack.set(value, result);
                    var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys, props = isArr ? undefined : keysFunc(value);
                    return arrayEach(props || value, function(subValue, key) {
                        props && (key = subValue, subValue = value[key]), // Recursively populate clone (susceptible to call stack limits).
                        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
                    }), result;
                }
                /**
	     * The base implementation of `_.conforms` which doesn't clone `source`.
	     *
	     * @private
	     * @param {Object} source The object of property predicates to conform to.
	     * @returns {Function} Returns the new spec function.
	     */
                function baseConforms(source) {
                    var props = keys(source);
                    return function(object) {
                        return baseConformsTo(object, source, props);
                    };
                }
                /**
	     * The base implementation of `_.conformsTo` which accepts `props` to check.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property predicates to conform to.
	     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
	     */
                function baseConformsTo(object, source, props) {
                    var length = props.length;
                    if (null == object) return !length;
                    for (object = Object(object); length--; ) {
                        var key = props[length], predicate = source[key], value = object[key];
                        if (value === undefined && !(key in object) || !predicate(value)) return !1;
                    }
                    return !0;
                }
                /**
	     * The base implementation of `_.delay` and `_.defer` which accepts `args`
	     * to provide to `func`.
	     *
	     * @private
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {Array} args The arguments to provide to `func`.
	     * @returns {number|Object} Returns the timer id or timeout object.
	     */
                function baseDelay(func, wait, args) {
                    if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                    return setTimeout(function() {
                        func.apply(undefined, args);
                    }, wait);
                }
                /**
	     * The base implementation of methods like `_.difference` without support
	     * for excluding multiple arrays or iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Array} values The values to exclude.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     */
                function baseDifference(array, values, iteratee, comparator) {
                    var index = -1, includes = arrayIncludes, isCommon = !0, length = array.length, result = [], valuesLength = values.length;
                    if (!length) return result;
                    iteratee && (values = arrayMap(values, baseUnary(iteratee))), comparator ? (includes = arrayIncludesWith, 
                    isCommon = !1) : values.length >= LARGE_ARRAY_SIZE && (includes = cacheHas, isCommon = !1, 
                    values = new SetCache(values));
                    outer: for (;++index < length; ) {
                        var value = array[index], computed = null == iteratee ? value : iteratee(value);
                        if (value = comparator || 0 !== value ? value : 0, isCommon && computed === computed) {
                            for (var valuesIndex = valuesLength; valuesIndex--; ) if (values[valuesIndex] === computed) continue outer;
                            result.push(value);
                        } else includes(values, computed, comparator) || result.push(value);
                    }
                    return result;
                }
                /**
	     * The base implementation of `_.every` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`
	     */
                function baseEvery(collection, predicate) {
                    var result = !0;
                    return baseEach(collection, function(value, index, collection) {
                        return result = !!predicate(value, index, collection);
                    }), result;
                }
                /**
	     * The base implementation of methods like `_.max` and `_.min` which accepts a
	     * `comparator` to determine the extremum value.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The iteratee invoked per iteration.
	     * @param {Function} comparator The comparator used to compare values.
	     * @returns {*} Returns the extremum value.
	     */
                function baseExtremum(array, iteratee, comparator) {
                    for (var index = -1, length = array.length; ++index < length; ) {
                        var value = array[index], current = iteratee(value);
                        if (null != current && (computed === undefined ? current === current && !isSymbol(current) : comparator(current, computed))) var computed = current, result = value;
                    }
                    return result;
                }
                /**
	     * The base implementation of `_.fill` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     */
                function baseFill(array, value, start, end) {
                    var length = array.length;
                    for (start = toInteger(start), start < 0 && (start = -start > length ? 0 : length + start), 
                    end = end === undefined || end > length ? length : toInteger(end), end < 0 && (end += length), 
                    end = start > end ? 0 : toLength(end); start < end; ) array[start++] = value;
                    return array;
                }
                /**
	     * The base implementation of `_.filter` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     */
                function baseFilter(collection, predicate) {
                    var result = [];
                    return baseEach(collection, function(value, index, collection) {
                        predicate(value, index, collection) && result.push(value);
                    }), result;
                }
                /**
	     * The base implementation of `_.flatten` with support for restricting flattening.
	     *
	     * @private
	     * @param {Array} array The array to flatten.
	     * @param {number} depth The maximum recursion depth.
	     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	     * @param {Array} [result=[]] The initial result value.
	     * @returns {Array} Returns the new flattened array.
	     */
                function baseFlatten(array, depth, predicate, isStrict, result) {
                    var index = -1, length = array.length;
                    for (predicate || (predicate = isFlattenable), result || (result = []); ++index < length; ) {
                        var value = array[index];
                        depth > 0 && predicate(value) ? depth > 1 ? // Recursively flatten arrays (susceptible to call stack limits).
                        baseFlatten(value, depth - 1, predicate, isStrict, result) : arrayPush(result, value) : isStrict || (result[result.length] = value);
                    }
                    return result;
                }
                /**
	     * The base implementation of `_.forOwn` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
                function baseForOwn(object, iteratee) {
                    return object && baseFor(object, iteratee, keys);
                }
                /**
	     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
                function baseForOwnRight(object, iteratee) {
                    return object && baseForRight(object, iteratee, keys);
                }
                /**
	     * The base implementation of `_.functions` which creates an array of
	     * `object` function property names filtered from `props`.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Array} props The property names to filter.
	     * @returns {Array} Returns the function names.
	     */
                function baseFunctions(object, props) {
                    return arrayFilter(props, function(key) {
                        return isFunction(object[key]);
                    });
                }
                /**
	     * The base implementation of `_.get` without support for default values.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to get.
	     * @returns {*} Returns the resolved value.
	     */
                function baseGet(object, path) {
                    path = castPath(path, object);
                    for (var index = 0, length = path.length; null != object && index < length; ) object = object[toKey(path[index++])];
                    return index && index == length ? object : undefined;
                }
                /**
	     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	     * symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @param {Function} symbolsFunc The function to get the symbols of `object`.
	     * @returns {Array} Returns the array of property names and symbols.
	     */
                function baseGetAllKeys(object, keysFunc, symbolsFunc) {
                    var result = keysFunc(object);
                    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
                }
                /**
	     * The base implementation of `getTag` without fallbacks for buggy environments.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @returns {string} Returns the `toStringTag`.
	     */
                function baseGetTag(value) {
                    return null == value ? value === undefined ? undefinedTag : nullTag : symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
                }
                /**
	     * The base implementation of `_.gt` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than `other`,
	     *  else `false`.
	     */
                function baseGt(value, other) {
                    return value > other;
                }
                /**
	     * The base implementation of `_.has` without support for deep paths.
	     *
	     * @private
	     * @param {Object} [object] The object to query.
	     * @param {Array|string} key The key to check.
	     * @returns {boolean} Returns `true` if `key` exists, else `false`.
	     */
                function baseHas(object, key) {
                    return null != object && hasOwnProperty.call(object, key);
                }
                /**
	     * The base implementation of `_.hasIn` without support for deep paths.
	     *
	     * @private
	     * @param {Object} [object] The object to query.
	     * @param {Array|string} key The key to check.
	     * @returns {boolean} Returns `true` if `key` exists, else `false`.
	     */
                function baseHasIn(object, key) {
                    return null != object && key in Object(object);
                }
                /**
	     * The base implementation of `_.inRange` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {number} number The number to check.
	     * @param {number} start The start of the range.
	     * @param {number} end The end of the range.
	     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
	     */
                function baseInRange(number, start, end) {
                    return number >= nativeMin(start, end) && number < nativeMax(start, end);
                }
                /**
	     * The base implementation of methods like `_.intersection`, without support
	     * for iteratee shorthands, that accepts an array of arrays to inspect.
	     *
	     * @private
	     * @param {Array} arrays The arrays to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of shared values.
	     */
                function baseIntersection(arrays, iteratee, comparator) {
                    for (var includes = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array(othLength), maxLength = 1 / 0, result = []; othIndex--; ) {
                        var array = arrays[othIndex];
                        othIndex && iteratee && (array = arrayMap(array, baseUnary(iteratee))), maxLength = nativeMin(array.length, maxLength), 
                        caches[othIndex] = !comparator && (iteratee || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined;
                    }
                    array = arrays[0];
                    var index = -1, seen = caches[0];
                    outer: for (;++index < length && result.length < maxLength; ) {
                        var value = array[index], computed = iteratee ? iteratee(value) : value;
                        if (value = comparator || 0 !== value ? value : 0, !(seen ? cacheHas(seen, computed) : includes(result, computed, comparator))) {
                            for (othIndex = othLength; --othIndex; ) {
                                var cache = caches[othIndex];
                                if (!(cache ? cacheHas(cache, computed) : includes(arrays[othIndex], computed, comparator))) continue outer;
                            }
                            seen && seen.push(computed), result.push(value);
                        }
                    }
                    return result;
                }
                /**
	     * The base implementation of `_.invert` and `_.invertBy` which inverts
	     * `object` with values transformed by `iteratee` and set by `setter`.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} setter The function to set `accumulator` values.
	     * @param {Function} iteratee The iteratee to transform values.
	     * @param {Object} accumulator The initial inverted object.
	     * @returns {Function} Returns `accumulator`.
	     */
                function baseInverter(object, setter, iteratee, accumulator) {
                    return baseForOwn(object, function(value, key, object) {
                        setter(accumulator, iteratee(value), key, object);
                    }), accumulator;
                }
                /**
	     * The base implementation of `_.invoke` without support for individual
	     * method arguments.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {Array} args The arguments to invoke the method with.
	     * @returns {*} Returns the result of the invoked method.
	     */
                function baseInvoke(object, path, args) {
                    path = castPath(path, object), object = parent(object, path);
                    var func = null == object ? object : object[toKey(last(path))];
                    return null == func ? undefined : apply(func, object, args);
                }
                /**
	     * The base implementation of `_.isArguments`.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	     */
                function baseIsArguments(value) {
                    return isObjectLike(value) && baseGetTag(value) == argsTag;
                }
                /**
	     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
	     */
                function baseIsArrayBuffer(value) {
                    return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
                }
                /**
	     * The base implementation of `_.isDate` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
	     */
                function baseIsDate(value) {
                    return isObjectLike(value) && baseGetTag(value) == dateTag;
                }
                /**
	     * The base implementation of `_.isEqual` which supports partial comparisons
	     * and tracks traversed objects.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {boolean} bitmask The bitmask flags.
	     *  1 - Unordered comparison
	     *  2 - Partial comparison
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     */
                function baseIsEqual(value, other, bitmask, customizer, stack) {
                    return value === other || (null == value || null == other || !isObjectLike(value) && !isObjectLike(other) ? value !== value && other !== other : baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack));
                }
                /**
	     * A specialized version of `baseIsEqual` for arrays and objects which performs
	     * deep comparisons and tracks traversed objects enabling objects with circular
	     * references to be compared.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	     * @param {Function} customizer The function to customize comparisons.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
                function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
                    var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
                    objTag = objTag == argsTag ? objectTag : objTag, othTag = othTag == argsTag ? objectTag : othTag;
                    var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
                    if (isSameTag && isBuffer(object)) {
                        if (!isBuffer(other)) return !1;
                        objIsArr = !0, objIsObj = !1;
                    }
                    if (isSameTag && !objIsObj) return stack || (stack = new Stack()), objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
                    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
                        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
                        if (objIsWrapped || othIsWrapped) {
                            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
                            return stack || (stack = new Stack()), equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
                        }
                    }
                    return !!isSameTag && (stack || (stack = new Stack()), equalObjects(object, other, bitmask, customizer, equalFunc, stack));
                }
                /**
	     * The base implementation of `_.isMap` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	     */
                function baseIsMap(value) {
                    return isObjectLike(value) && getTag(value) == mapTag;
                }
                /**
	     * The base implementation of `_.isMatch` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @param {Array} matchData The property names, values, and compare flags to match.
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     */
                function baseIsMatch(object, source, matchData, customizer) {
                    var index = matchData.length, length = index, noCustomizer = !customizer;
                    if (null == object) return !length;
                    for (object = Object(object); index--; ) {
                        var data = matchData[index];
                        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) return !1;
                    }
                    for (;++index < length; ) {
                        data = matchData[index];
                        var key = data[0], objValue = object[key], srcValue = data[1];
                        if (noCustomizer && data[2]) {
                            if (objValue === undefined && !(key in object)) return !1;
                        } else {
                            var stack = new Stack();
                            if (customizer) var result = customizer(objValue, srcValue, key, object, source, stack);
                            if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) return !1;
                        }
                    }
                    return !0;
                }
                /**
	     * The base implementation of `_.isNative` without bad shim checks.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a native function,
	     *  else `false`.
	     */
                function baseIsNative(value) {
                    if (!isObject(value) || isMasked(value)) return !1;
                    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
                    return pattern.test(toSource(value));
                }
                /**
	     * The base implementation of `_.isRegExp` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
	     */
                function baseIsRegExp(value) {
                    return isObjectLike(value) && baseGetTag(value) == regexpTag;
                }
                /**
	     * The base implementation of `_.isSet` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	     */
                function baseIsSet(value) {
                    return isObjectLike(value) && getTag(value) == setTag;
                }
                /**
	     * The base implementation of `_.isTypedArray` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	     */
                function baseIsTypedArray(value) {
                    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
                }
                /**
	     * The base implementation of `_.iteratee`.
	     *
	     * @private
	     * @param {*} [value=_.identity] The value to convert to an iteratee.
	     * @returns {Function} Returns the iteratee.
	     */
                function baseIteratee(value) {
                    // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
                    // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
                    // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
                    // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
                    return "function" == typeof value ? value : null == value ? identity : "object" == typeof value ? isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value) : property(value);
                }
                /**
	     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */
                function baseKeys(object) {
                    if (!isPrototype(object)) return nativeKeys(object);
                    var result = [];
                    for (var key in Object(object)) hasOwnProperty.call(object, key) && "constructor" != key && result.push(key);
                    return result;
                }
                /**
	     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */
                function baseKeysIn(object) {
                    if (!isObject(object)) return nativeKeysIn(object);
                    var isProto = isPrototype(object), result = [];
                    for (var key in object) ("constructor" != key || !isProto && hasOwnProperty.call(object, key)) && result.push(key);
                    return result;
                }
                /**
	     * The base implementation of `_.lt` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than `other`,
	     *  else `false`.
	     */
                function baseLt(value, other) {
                    return value < other;
                }
                /**
	     * The base implementation of `_.map` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     */
                function baseMap(collection, iteratee) {
                    var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
                    return baseEach(collection, function(value, key, collection) {
                        result[++index] = iteratee(value, key, collection);
                    }), result;
                }
                /**
	     * The base implementation of `_.matches` which doesn't clone `source`.
	     *
	     * @private
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new spec function.
	     */
                function baseMatches(source) {
                    var matchData = getMatchData(source);
                    return 1 == matchData.length && matchData[0][2] ? matchesStrictComparable(matchData[0][0], matchData[0][1]) : function(object) {
                        return object === source || baseIsMatch(object, source, matchData);
                    };
                }
                /**
	     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	     *
	     * @private
	     * @param {string} path The path of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new spec function.
	     */
                function baseMatchesProperty(path, srcValue) {
                    return isKey(path) && isStrictComparable(srcValue) ? matchesStrictComparable(toKey(path), srcValue) : function(object) {
                        var objValue = get(object, path);
                        return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
                    };
                }
                /**
	     * The base implementation of `_.merge` without support for multiple sources.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {number} srcIndex The index of `source`.
	     * @param {Function} [customizer] The function to customize merged values.
	     * @param {Object} [stack] Tracks traversed source values and their merged
	     *  counterparts.
	     */
                function baseMerge(object, source, srcIndex, customizer, stack) {
                    object !== source && baseFor(source, function(srcValue, key) {
                        if (isObject(srcValue)) stack || (stack = new Stack()), baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack); else {
                            var newValue = customizer ? customizer(object[key], srcValue, key + "", object, source, stack) : undefined;
                            newValue === undefined && (newValue = srcValue), assignMergeValue(object, key, newValue);
                        }
                    }, keysIn);
                }
                /**
	     * A specialized version of `baseMerge` for arrays and objects which performs
	     * deep merges and tracks traversed objects enabling objects with circular
	     * references to be merged.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {string} key The key of the value to merge.
	     * @param {number} srcIndex The index of `source`.
	     * @param {Function} mergeFunc The function to merge values.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @param {Object} [stack] Tracks traversed source values and their merged
	     *  counterparts.
	     */
                function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
                    var objValue = object[key], srcValue = source[key], stacked = stack.get(srcValue);
                    if (stacked) return void assignMergeValue(object, key, stacked);
                    var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined, isCommon = newValue === undefined;
                    if (isCommon) {
                        var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
                        newValue = srcValue, isArr || isBuff || isTyped ? isArray(objValue) ? newValue = objValue : isArrayLikeObject(objValue) ? newValue = copyArray(objValue) : isBuff ? (isCommon = !1, 
                        newValue = cloneBuffer(srcValue, !0)) : isTyped ? (isCommon = !1, newValue = cloneTypedArray(srcValue, !0)) : newValue = [] : isPlainObject(srcValue) || isArguments(srcValue) ? (newValue = objValue, 
                        isArguments(objValue) ? newValue = toPlainObject(objValue) : (!isObject(objValue) || srcIndex && isFunction(objValue)) && (newValue = initCloneObject(srcValue))) : isCommon = !1;
                    }
                    isCommon && (// Recursively merge objects and arrays (susceptible to call stack limits).
                    stack.set(srcValue, newValue), mergeFunc(newValue, srcValue, srcIndex, customizer, stack), 
                    stack.delete(srcValue)), assignMergeValue(object, key, newValue);
                }
                /**
	     * The base implementation of `_.nth` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {Array} array The array to query.
	     * @param {number} n The index of the element to return.
	     * @returns {*} Returns the nth element of `array`.
	     */
                function baseNth(array, n) {
                    var length = array.length;
                    if (length) return n += n < 0 ? length : 0, isIndex(n, length) ? array[n] : undefined;
                }
                /**
	     * The base implementation of `_.orderBy` without param guards.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	     * @param {string[]} orders The sort orders of `iteratees`.
	     * @returns {Array} Returns the new sorted array.
	     */
                function baseOrderBy(collection, iteratees, orders) {
                    var index = -1;
                    iteratees = arrayMap(iteratees.length ? iteratees : [ identity ], baseUnary(getIteratee()));
                    var result = baseMap(collection, function(value, key, collection) {
                        var criteria = arrayMap(iteratees, function(iteratee) {
                            return iteratee(value);
                        });
                        return {
                            criteria: criteria,
                            index: ++index,
                            value: value
                        };
                    });
                    return baseSortBy(result, function(object, other) {
                        return compareMultiple(object, other, orders);
                    });
                }
                /**
	     * The base implementation of `_.pick` without support for individual
	     * property identifiers.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {string[]} paths The property paths to pick.
	     * @returns {Object} Returns the new object.
	     */
                function basePick(object, paths) {
                    return basePickBy(object, paths, function(value, path) {
                        return hasIn(object, path);
                    });
                }
                /**
	     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {string[]} paths The property paths to pick.
	     * @param {Function} predicate The function invoked per property.
	     * @returns {Object} Returns the new object.
	     */
                function basePickBy(object, paths, predicate) {
                    for (var index = -1, length = paths.length, result = {}; ++index < length; ) {
                        var path = paths[index], value = baseGet(object, path);
                        predicate(value, path) && baseSet(result, castPath(path, object), value);
                    }
                    return result;
                }
                /**
	     * A specialized version of `baseProperty` which supports deep paths.
	     *
	     * @private
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new accessor function.
	     */
                function basePropertyDeep(path) {
                    return function(object) {
                        return baseGet(object, path);
                    };
                }
                /**
	     * The base implementation of `_.pullAllBy` without support for iteratee
	     * shorthands.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns `array`.
	     */
                function basePullAll(array, values, iteratee, comparator) {
                    var indexOf = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values.length, seen = array;
                    for (array === values && (values = copyArray(values)), iteratee && (seen = arrayMap(array, baseUnary(iteratee))); ++index < length; ) for (var fromIndex = 0, value = values[index], computed = iteratee ? iteratee(value) : value; (fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1; ) seen !== array && splice.call(seen, fromIndex, 1), 
                    splice.call(array, fromIndex, 1);
                    return array;
                }
                /**
	     * The base implementation of `_.pullAt` without support for individual
	     * indexes or capturing the removed elements.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {number[]} indexes The indexes of elements to remove.
	     * @returns {Array} Returns `array`.
	     */
                function basePullAt(array, indexes) {
                    for (var length = array ? indexes.length : 0, lastIndex = length - 1; length--; ) {
                        var index = indexes[length];
                        if (length == lastIndex || index !== previous) {
                            var previous = index;
                            isIndex(index) ? splice.call(array, index, 1) : baseUnset(array, index);
                        }
                    }
                    return array;
                }
                /**
	     * The base implementation of `_.random` without support for returning
	     * floating-point numbers.
	     *
	     * @private
	     * @param {number} lower The lower bound.
	     * @param {number} upper The upper bound.
	     * @returns {number} Returns the random number.
	     */
                function baseRandom(lower, upper) {
                    return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
                }
                /**
	     * The base implementation of `_.range` and `_.rangeRight` which doesn't
	     * coerce arguments.
	     *
	     * @private
	     * @param {number} start The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} step The value to increment or decrement by.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Array} Returns the range of numbers.
	     */
                function baseRange(start, end, step, fromRight) {
                    for (var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result = Array(length); length--; ) result[fromRight ? length : ++index] = start, 
                    start += step;
                    return result;
                }
                /**
	     * The base implementation of `_.repeat` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {string} string The string to repeat.
	     * @param {number} n The number of times to repeat the string.
	     * @returns {string} Returns the repeated string.
	     */
                function baseRepeat(string, n) {
                    var result = "";
                    if (!string || n < 1 || n > MAX_SAFE_INTEGER) return result;
                    // Leverage the exponentiation by squaring algorithm for a faster repeat.
                    // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
                    do n % 2 && (result += string), n = nativeFloor(n / 2), n && (string += string); while (n);
                    return result;
                }
                /**
	     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	     *
	     * @private
	     * @param {Function} func The function to apply a rest parameter to.
	     * @param {number} [start=func.length-1] The start position of the rest parameter.
	     * @returns {Function} Returns the new function.
	     */
                function baseRest(func, start) {
                    return setToString(overRest(func, start, identity), func + "");
                }
                /**
	     * The base implementation of `_.sample`.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to sample.
	     * @returns {*} Returns the random element.
	     */
                function baseSample(collection) {
                    return arraySample(values(collection));
                }
                /**
	     * The base implementation of `_.sampleSize` without param guards.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to sample.
	     * @param {number} n The number of elements to sample.
	     * @returns {Array} Returns the random elements.
	     */
                function baseSampleSize(collection, n) {
                    var array = values(collection);
                    return shuffleSelf(array, baseClamp(n, 0, array.length));
                }
                /**
	     * The base implementation of `_.set`.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @param {Function} [customizer] The function to customize path creation.
	     * @returns {Object} Returns `object`.
	     */
                function baseSet(object, path, value, customizer) {
                    if (!isObject(object)) return object;
                    path = castPath(path, object);
                    for (var index = -1, length = path.length, lastIndex = length - 1, nested = object; null != nested && ++index < length; ) {
                        var key = toKey(path[index]), newValue = value;
                        if (index != lastIndex) {
                            var objValue = nested[key];
                            newValue = customizer ? customizer(objValue, key, nested) : undefined, newValue === undefined && (newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {});
                        }
                        assignValue(nested, key, newValue), nested = nested[key];
                    }
                    return object;
                }
                /**
	     * The base implementation of `_.shuffle`.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to shuffle.
	     * @returns {Array} Returns the new shuffled array.
	     */
                function baseShuffle(collection) {
                    return shuffleSelf(values(collection));
                }
                /**
	     * The base implementation of `_.slice` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */
                function baseSlice(array, start, end) {
                    var index = -1, length = array.length;
                    start < 0 && (start = -start > length ? 0 : length + start), end = end > length ? length : end, 
                    end < 0 && (end += length), length = start > end ? 0 : end - start >>> 0, start >>>= 0;
                    for (var result = Array(length); ++index < length; ) result[index] = array[index + start];
                    return result;
                }
                /**
	     * The base implementation of `_.some` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     */
                function baseSome(collection, predicate) {
                    var result;
                    return baseEach(collection, function(value, index, collection) {
                        return result = predicate(value, index, collection), !result;
                    }), !!result;
                }
                /**
	     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
	     * performs a binary search of `array` to determine the index at which `value`
	     * should be inserted into `array` in order to maintain its sort order.
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */
                function baseSortedIndex(array, value, retHighest) {
                    var low = 0, high = null == array ? low : array.length;
                    if ("number" == typeof value && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
                        for (;low < high; ) {
                            var mid = low + high >>> 1, computed = array[mid];
                            null !== computed && !isSymbol(computed) && (retHighest ? computed <= value : computed < value) ? low = mid + 1 : high = mid;
                        }
                        return high;
                    }
                    return baseSortedIndexBy(array, value, identity, retHighest);
                }
                /**
	     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
	     * which invokes `iteratee` for `value` and each element of `array` to compute
	     * their sort ranking. The iteratee is invoked with one argument; (value).
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} iteratee The iteratee invoked per element.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */
                function baseSortedIndexBy(array, value, iteratee, retHighest) {
                    value = iteratee(value);
                    for (var low = 0, high = null == array ? 0 : array.length, valIsNaN = value !== value, valIsNull = null === value, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined; low < high; ) {
                        var mid = nativeFloor((low + high) / 2), computed = iteratee(array[mid]), othIsDefined = computed !== undefined, othIsNull = null === computed, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
                        if (valIsNaN) var setLow = retHighest || othIsReflexive; else setLow = valIsUndefined ? othIsReflexive && (retHighest || othIsDefined) : valIsNull ? othIsReflexive && othIsDefined && (retHighest || !othIsNull) : valIsSymbol ? othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol) : !othIsNull && !othIsSymbol && (retHighest ? computed <= value : computed < value);
                        setLow ? low = mid + 1 : high = mid;
                    }
                    return nativeMin(high, MAX_ARRAY_INDEX);
                }
                /**
	     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
	     * support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     */
                function baseSortedUniq(array, iteratee) {
                    for (var index = -1, length = array.length, resIndex = 0, result = []; ++index < length; ) {
                        var value = array[index], computed = iteratee ? iteratee(value) : value;
                        if (!index || !eq(computed, seen)) {
                            var seen = computed;
                            result[resIndex++] = 0 === value ? 0 : value;
                        }
                    }
                    return result;
                }
                /**
	     * The base implementation of `_.toNumber` which doesn't ensure correct
	     * conversions of binary, hexadecimal, or octal string values.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {number} Returns the number.
	     */
                function baseToNumber(value) {
                    return "number" == typeof value ? value : isSymbol(value) ? NAN : +value;
                }
                /**
	     * The base implementation of `_.toString` which doesn't convert nullish
	     * values to empty strings.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {string} Returns the string.
	     */
                function baseToString(value) {
                    // Exit early for strings to avoid a performance hit in some environments.
                    if ("string" == typeof value) return value;
                    if (isArray(value)) // Recursively convert values (susceptible to call stack limits).
                    return arrayMap(value, baseToString) + "";
                    if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : "";
                    var result = value + "";
                    return "0" == result && 1 / value == -INFINITY ? "-0" : result;
                }
                /**
	     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     */
                function baseUniq(array, iteratee, comparator) {
                    var index = -1, includes = arrayIncludes, length = array.length, isCommon = !0, result = [], seen = result;
                    if (comparator) isCommon = !1, includes = arrayIncludesWith; else if (length >= LARGE_ARRAY_SIZE) {
                        var set = iteratee ? null : createSet(array);
                        if (set) return setToArray(set);
                        isCommon = !1, includes = cacheHas, seen = new SetCache();
                    } else seen = iteratee ? [] : result;
                    outer: for (;++index < length; ) {
                        var value = array[index], computed = iteratee ? iteratee(value) : value;
                        if (value = comparator || 0 !== value ? value : 0, isCommon && computed === computed) {
                            for (var seenIndex = seen.length; seenIndex--; ) if (seen[seenIndex] === computed) continue outer;
                            iteratee && seen.push(computed), result.push(value);
                        } else includes(seen, computed, comparator) || (seen !== result && seen.push(computed), 
                        result.push(value));
                    }
                    return result;
                }
                /**
	     * The base implementation of `_.unset`.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The property path to unset.
	     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
	     */
                function baseUnset(object, path) {
                    return path = castPath(path, object), object = parent(object, path), null == object || delete object[toKey(last(path))];
                }
                /**
	     * The base implementation of `_.update`.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to update.
	     * @param {Function} updater The function to produce the updated value.
	     * @param {Function} [customizer] The function to customize path creation.
	     * @returns {Object} Returns `object`.
	     */
                function baseUpdate(object, path, updater, customizer) {
                    return baseSet(object, path, updater(baseGet(object, path)), customizer);
                }
                /**
	     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
	     * without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to query.
	     * @param {Function} predicate The function invoked per iteration.
	     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Array} Returns the slice of `array`.
	     */
                function baseWhile(array, predicate, isDrop, fromRight) {
                    for (var length = array.length, index = fromRight ? length : -1; (fromRight ? index-- : ++index < length) && predicate(array[index], index, array); ) ;
                    return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
                }
                /**
	     * The base implementation of `wrapperValue` which returns the result of
	     * performing a sequence of actions on the unwrapped `value`, where each
	     * successive action is supplied the return value of the previous.
	     *
	     * @private
	     * @param {*} value The unwrapped value.
	     * @param {Array} actions Actions to perform to resolve the unwrapped value.
	     * @returns {*} Returns the resolved value.
	     */
                function baseWrapperValue(value, actions) {
                    var result = value;
                    return result instanceof LazyWrapper && (result = result.value()), arrayReduce(actions, function(result, action) {
                        return action.func.apply(action.thisArg, arrayPush([ result ], action.args));
                    }, result);
                }
                /**
	     * The base implementation of methods like `_.xor`, without support for
	     * iteratee shorthands, that accepts an array of arrays to inspect.
	     *
	     * @private
	     * @param {Array} arrays The arrays to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of values.
	     */
                function baseXor(arrays, iteratee, comparator) {
                    var length = arrays.length;
                    if (length < 2) return length ? baseUniq(arrays[0]) : [];
                    for (var index = -1, result = Array(length); ++index < length; ) for (var array = arrays[index], othIndex = -1; ++othIndex < length; ) othIndex != index && (result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator));
                    return baseUniq(baseFlatten(result, 1), iteratee, comparator);
                }
                /**
	     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
	     *
	     * @private
	     * @param {Array} props The property identifiers.
	     * @param {Array} values The property values.
	     * @param {Function} assignFunc The function to assign values.
	     * @returns {Object} Returns the new object.
	     */
                function baseZipObject(props, values, assignFunc) {
                    for (var index = -1, length = props.length, valsLength = values.length, result = {}; ++index < length; ) {
                        var value = index < valsLength ? values[index] : undefined;
                        assignFunc(result, props[index], value);
                    }
                    return result;
                }
                /**
	     * Casts `value` to an empty array if it's not an array like object.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @returns {Array|Object} Returns the cast array-like object.
	     */
                function castArrayLikeObject(value) {
                    return isArrayLikeObject(value) ? value : [];
                }
                /**
	     * Casts `value` to `identity` if it's not a function.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @returns {Function} Returns cast function.
	     */
                function castFunction(value) {
                    return "function" == typeof value ? value : identity;
                }
                /**
	     * Casts `value` to a path array if it's not one.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @param {Object} [object] The object to query keys on.
	     * @returns {Array} Returns the cast property path array.
	     */
                function castPath(value, object) {
                    return isArray(value) ? value : isKey(value, object) ? [ value ] : stringToPath(toString(value));
                }
                /**
	     * Casts `array` to a slice if it's needed.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {number} start The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the cast slice.
	     */
                function castSlice(array, start, end) {
                    var length = array.length;
                    return end = end === undefined ? length : end, !start && end >= length ? array : baseSlice(array, start, end);
                }
                /**
	     * Creates a clone of  `buffer`.
	     *
	     * @private
	     * @param {Buffer} buffer The buffer to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Buffer} Returns the cloned buffer.
	     */
                function cloneBuffer(buffer, isDeep) {
                    if (isDeep) return buffer.slice();
                    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
                    return buffer.copy(result), result;
                }
                /**
	     * Creates a clone of `arrayBuffer`.
	     *
	     * @private
	     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	     * @returns {ArrayBuffer} Returns the cloned array buffer.
	     */
                function cloneArrayBuffer(arrayBuffer) {
                    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
                    return new Uint8Array(result).set(new Uint8Array(arrayBuffer)), result;
                }
                /**
	     * Creates a clone of `dataView`.
	     *
	     * @private
	     * @param {Object} dataView The data view to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the cloned data view.
	     */
                function cloneDataView(dataView, isDeep) {
                    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
                    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
                }
                /**
	     * Creates a clone of `map`.
	     *
	     * @private
	     * @param {Object} map The map to clone.
	     * @param {Function} cloneFunc The function to clone values.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the cloned map.
	     */
                function cloneMap(map, isDeep, cloneFunc) {
                    var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
                    return arrayReduce(array, addMapEntry, new map.constructor());
                }
                /**
	     * Creates a clone of `regexp`.
	     *
	     * @private
	     * @param {Object} regexp The regexp to clone.
	     * @returns {Object} Returns the cloned regexp.
	     */
                function cloneRegExp(regexp) {
                    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
                    return result.lastIndex = regexp.lastIndex, result;
                }
                /**
	     * Creates a clone of `set`.
	     *
	     * @private
	     * @param {Object} set The set to clone.
	     * @param {Function} cloneFunc The function to clone values.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the cloned set.
	     */
                function cloneSet(set, isDeep, cloneFunc) {
                    var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
                    return arrayReduce(array, addSetEntry, new set.constructor());
                }
                /**
	     * Creates a clone of the `symbol` object.
	     *
	     * @private
	     * @param {Object} symbol The symbol object to clone.
	     * @returns {Object} Returns the cloned symbol object.
	     */
                function cloneSymbol(symbol) {
                    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
                }
                /**
	     * Creates a clone of `typedArray`.
	     *
	     * @private
	     * @param {Object} typedArray The typed array to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the cloned typed array.
	     */
                function cloneTypedArray(typedArray, isDeep) {
                    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
                    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
                }
                /**
	     * Compares values to sort them in ascending order.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {number} Returns the sort order indicator for `value`.
	     */
                function compareAscending(value, other) {
                    if (value !== other) {
                        var valIsDefined = value !== undefined, valIsNull = null === value, valIsReflexive = value === value, valIsSymbol = isSymbol(value), othIsDefined = other !== undefined, othIsNull = null === other, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
                        if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) return 1;
                        if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) return -1;
                    }
                    return 0;
                }
                /**
	     * Used by `_.orderBy` to compare multiple properties of a value to another
	     * and stable sort them.
	     *
	     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
	     * specify an order of "desc" for descending or "asc" for ascending sort order
	     * of corresponding values.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {boolean[]|string[]} orders The order to sort by for each property.
	     * @returns {number} Returns the sort order indicator for `object`.
	     */
                function compareMultiple(object, other, orders) {
                    for (var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length; ++index < length; ) {
                        var result = compareAscending(objCriteria[index], othCriteria[index]);
                        if (result) {
                            if (index >= ordersLength) return result;
                            var order = orders[index];
                            return result * ("desc" == order ? -1 : 1);
                        }
                    }
                    // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
                    // that causes it, under certain circumstances, to provide the same value for
                    // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
                    // for more details.
                    //
                    // This also ensures a stable sort in V8 and other engines.
                    // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
                    return object.index - other.index;
                }
                /**
	     * Creates an array that is the composition of partially applied arguments,
	     * placeholders, and provided arguments into a single array of arguments.
	     *
	     * @private
	     * @param {Array} args The provided arguments.
	     * @param {Array} partials The arguments to prepend to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @params {boolean} [isCurried] Specify composing for a curried function.
	     * @returns {Array} Returns the new array of composed arguments.
	     */
                function composeArgs(args, partials, holders, isCurried) {
                    for (var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array(leftLength + rangeLength), isUncurried = !isCurried; ++leftIndex < leftLength; ) result[leftIndex] = partials[leftIndex];
                    for (;++argsIndex < holdersLength; ) (isUncurried || argsIndex < argsLength) && (result[holders[argsIndex]] = args[argsIndex]);
                    for (;rangeLength--; ) result[leftIndex++] = args[argsIndex++];
                    return result;
                }
                /**
	     * This function is like `composeArgs` except that the arguments composition
	     * is tailored for `_.partialRight`.
	     *
	     * @private
	     * @param {Array} args The provided arguments.
	     * @param {Array} partials The arguments to append to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @params {boolean} [isCurried] Specify composing for a curried function.
	     * @returns {Array} Returns the new array of composed arguments.
	     */
                function composeArgsRight(args, partials, holders, isCurried) {
                    for (var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array(rangeLength + rightLength), isUncurried = !isCurried; ++argsIndex < rangeLength; ) result[argsIndex] = args[argsIndex];
                    for (var offset = argsIndex; ++rightIndex < rightLength; ) result[offset + rightIndex] = partials[rightIndex];
                    for (;++holdersIndex < holdersLength; ) (isUncurried || argsIndex < argsLength) && (result[offset + holders[holdersIndex]] = args[argsIndex++]);
                    return result;
                }
                /**
	     * Copies the values of `source` to `array`.
	     *
	     * @private
	     * @param {Array} source The array to copy values from.
	     * @param {Array} [array=[]] The array to copy values to.
	     * @returns {Array} Returns `array`.
	     */
                function copyArray(source, array) {
                    var index = -1, length = source.length;
                    for (array || (array = Array(length)); ++index < length; ) array[index] = source[index];
                    return array;
                }
                /**
	     * Copies properties of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy properties from.
	     * @param {Array} props The property identifiers to copy.
	     * @param {Object} [object={}] The object to copy properties to.
	     * @param {Function} [customizer] The function to customize copied values.
	     * @returns {Object} Returns `object`.
	     */
                function copyObject(source, props, object, customizer) {
                    var isNew = !object;
                    object || (object = {});
                    for (var index = -1, length = props.length; ++index < length; ) {
                        var key = props[index], newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
                        newValue === undefined && (newValue = source[key]), isNew ? baseAssignValue(object, key, newValue) : assignValue(object, key, newValue);
                    }
                    return object;
                }
                /**
	     * Copies own symbols of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy symbols from.
	     * @param {Object} [object={}] The object to copy symbols to.
	     * @returns {Object} Returns `object`.
	     */
                function copySymbols(source, object) {
                    return copyObject(source, getSymbols(source), object);
                }
                /**
	     * Copies own and inherited symbols of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy symbols from.
	     * @param {Object} [object={}] The object to copy symbols to.
	     * @returns {Object} Returns `object`.
	     */
                function copySymbolsIn(source, object) {
                    return copyObject(source, getSymbolsIn(source), object);
                }
                /**
	     * Creates a function like `_.groupBy`.
	     *
	     * @private
	     * @param {Function} setter The function to set accumulator values.
	     * @param {Function} [initializer] The accumulator object initializer.
	     * @returns {Function} Returns the new aggregator function.
	     */
                function createAggregator(setter, initializer) {
                    return function(collection, iteratee) {
                        var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
                        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
                    };
                }
                /**
	     * Creates a function like `_.assign`.
	     *
	     * @private
	     * @param {Function} assigner The function to assign values.
	     * @returns {Function} Returns the new assigner function.
	     */
                function createAssigner(assigner) {
                    return baseRest(function(object, sources) {
                        var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined, guard = length > 2 ? sources[2] : undefined;
                        for (customizer = assigner.length > 3 && "function" == typeof customizer ? (length--, 
                        customizer) : undefined, guard && isIterateeCall(sources[0], sources[1], guard) && (customizer = length < 3 ? undefined : customizer, 
                        length = 1), object = Object(object); ++index < length; ) {
                            var source = sources[index];
                            source && assigner(object, source, index, customizer);
                        }
                        return object;
                    });
                }
                /**
	     * Creates a `baseEach` or `baseEachRight` function.
	     *
	     * @private
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */
                function createBaseEach(eachFunc, fromRight) {
                    return function(collection, iteratee) {
                        if (null == collection) return collection;
                        if (!isArrayLike(collection)) return eachFunc(collection, iteratee);
                        for (var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection); (fromRight ? index-- : ++index < length) && iteratee(iterable[index], index, iterable) !== !1; ) ;
                        return collection;
                    };
                }
                /**
	     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */
                function createBaseFor(fromRight) {
                    return function(object, iteratee, keysFunc) {
                        for (var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length; length--; ) {
                            var key = props[fromRight ? length : ++index];
                            if (iteratee(iterable[key], key, iterable) === !1) break;
                        }
                        return object;
                    };
                }
                /**
	     * Creates a function that wraps `func` to invoke it with the optional `this`
	     * binding of `thisArg`.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
                function createBind(func, bitmask, thisArg) {
                    function wrapper() {
                        var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
                        return fn.apply(isBind ? thisArg : this, arguments);
                    }
                    var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
                    return wrapper;
                }
                /**
	     * Creates a function like `_.lowerFirst`.
	     *
	     * @private
	     * @param {string} methodName The name of the `String` case method to use.
	     * @returns {Function} Returns the new case function.
	     */
                function createCaseFirst(methodName) {
                    return function(string) {
                        string = toString(string);
                        var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined, chr = strSymbols ? strSymbols[0] : string.charAt(0), trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
                        return chr[methodName]() + trailing;
                    };
                }
                /**
	     * Creates a function like `_.camelCase`.
	     *
	     * @private
	     * @param {Function} callback The function to combine each word.
	     * @returns {Function} Returns the new compounder function.
	     */
                function createCompounder(callback) {
                    return function(string) {
                        return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
                    };
                }
                /**
	     * Creates a function that produces an instance of `Ctor` regardless of
	     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
	     *
	     * @private
	     * @param {Function} Ctor The constructor to wrap.
	     * @returns {Function} Returns the new wrapped function.
	     */
                function createCtor(Ctor) {
                    return function() {
                        // Use a `switch` statement to work with class constructors. See
                        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
                        // for more details.
                        var args = arguments;
                        switch (args.length) {
                          case 0:
                            return new Ctor();

                          case 1:
                            return new Ctor(args[0]);

                          case 2:
                            return new Ctor(args[0], args[1]);

                          case 3:
                            return new Ctor(args[0], args[1], args[2]);

                          case 4:
                            return new Ctor(args[0], args[1], args[2], args[3]);

                          case 5:
                            return new Ctor(args[0], args[1], args[2], args[3], args[4]);

                          case 6:
                            return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);

                          case 7:
                            return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
                        }
                        var thisBinding = baseCreate(Ctor.prototype), result = Ctor.apply(thisBinding, args);
                        // Mimic the constructor's `return` behavior.
                        // See https://es5.github.io/#x13.2.2 for more details.
                        return isObject(result) ? result : thisBinding;
                    };
                }
                /**
	     * Creates a function that wraps `func` to enable currying.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {number} arity The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
                function createCurry(func, bitmask, arity) {
                    function wrapper() {
                        for (var length = arguments.length, args = Array(length), index = length, placeholder = getHolder(wrapper); index--; ) args[index] = arguments[index];
                        var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
                        if (length -= holders.length, length < arity) return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length);
                        var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
                        return apply(fn, this, args);
                    }
                    var Ctor = createCtor(func);
                    return wrapper;
                }
                /**
	     * Creates a `_.find` or `_.findLast` function.
	     *
	     * @private
	     * @param {Function} findIndexFunc The function to find the collection index.
	     * @returns {Function} Returns the new find function.
	     */
                function createFind(findIndexFunc) {
                    return function(collection, predicate, fromIndex) {
                        var iterable = Object(collection);
                        if (!isArrayLike(collection)) {
                            var iteratee = getIteratee(predicate, 3);
                            collection = keys(collection), predicate = function(key) {
                                return iteratee(iterable[key], key, iterable);
                            };
                        }
                        var index = findIndexFunc(collection, predicate, fromIndex);
                        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
                    };
                }
                /**
	     * Creates a `_.flow` or `_.flowRight` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new flow function.
	     */
                function createFlow(fromRight) {
                    return flatRest(function(funcs) {
                        var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
                        for (fromRight && funcs.reverse(); index--; ) {
                            var func = funcs[index];
                            if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                            if (prereq && !wrapper && "wrapper" == getFuncName(func)) var wrapper = new LodashWrapper([], !0);
                        }
                        for (index = wrapper ? index : length; ++index < length; ) {
                            func = funcs[index];
                            var funcName = getFuncName(func), data = "wrapper" == funcName ? getData(func) : undefined;
                            wrapper = data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && 1 == data[9] ? wrapper[getFuncName(data[0])].apply(wrapper, data[3]) : 1 == func.length && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
                        }
                        return function() {
                            var args = arguments, value = args[0];
                            if (wrapper && 1 == args.length && isArray(value)) return wrapper.plant(value).value();
                            for (var index = 0, result = length ? funcs[index].apply(this, args) : value; ++index < length; ) result = funcs[index].call(this, result);
                            return result;
                        };
                    });
                }
                /**
	     * Creates a function that wraps `func` to invoke it with optional `this`
	     * binding of `thisArg`, partial application, and currying.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to prepend to those provided to
	     *  the new function.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [partialsRight] The arguments to append to those provided
	     *  to the new function.
	     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
                function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
                    function wrapper() {
                        for (var length = arguments.length, args = Array(length), index = length; index--; ) args[index] = arguments[index];
                        if (isCurried) var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
                        if (partials && (args = composeArgs(args, partials, holders, isCurried)), partialsRight && (args = composeArgsRight(args, partialsRight, holdersRight, isCurried)), 
                        length -= holdersCount, isCurried && length < arity) {
                            var newHolders = replaceHolders(args, placeholder);
                            return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length);
                        }
                        var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
                        return length = args.length, argPos ? args = reorder(args, argPos) : isFlip && length > 1 && args.reverse(), 
                        isAry && ary < length && (args.length = ary), this && this !== root && this instanceof wrapper && (fn = Ctor || createCtor(fn)), 
                        fn.apply(thisBinding, args);
                    }
                    var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined : createCtor(func);
                    return wrapper;
                }
                /**
	     * Creates a function like `_.invertBy`.
	     *
	     * @private
	     * @param {Function} setter The function to set accumulator values.
	     * @param {Function} toIteratee The function to resolve iteratees.
	     * @returns {Function} Returns the new inverter function.
	     */
                function createInverter(setter, toIteratee) {
                    return function(object, iteratee) {
                        return baseInverter(object, setter, toIteratee(iteratee), {});
                    };
                }
                /**
	     * Creates a function that performs a mathematical operation on two values.
	     *
	     * @private
	     * @param {Function} operator The function to perform the operation.
	     * @param {number} [defaultValue] The value used for `undefined` arguments.
	     * @returns {Function} Returns the new mathematical operation function.
	     */
                function createMathOperation(operator, defaultValue) {
                    return function(value, other) {
                        var result;
                        if (value === undefined && other === undefined) return defaultValue;
                        if (value !== undefined && (result = value), other !== undefined) {
                            if (result === undefined) return other;
                            "string" == typeof value || "string" == typeof other ? (value = baseToString(value), 
                            other = baseToString(other)) : (value = baseToNumber(value), other = baseToNumber(other)), 
                            result = operator(value, other);
                        }
                        return result;
                    };
                }
                /**
	     * Creates a function like `_.over`.
	     *
	     * @private
	     * @param {Function} arrayFunc The function to iterate over iteratees.
	     * @returns {Function} Returns the new over function.
	     */
                function createOver(arrayFunc) {
                    return flatRest(function(iteratees) {
                        return iteratees = arrayMap(iteratees, baseUnary(getIteratee())), baseRest(function(args) {
                            var thisArg = this;
                            return arrayFunc(iteratees, function(iteratee) {
                                return apply(iteratee, thisArg, args);
                            });
                        });
                    });
                }
                /**
	     * Creates the padding for `string` based on `length`. The `chars` string
	     * is truncated if the number of characters exceeds `length`.
	     *
	     * @private
	     * @param {number} length The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padding for `string`.
	     */
                function createPadding(length, chars) {
                    chars = chars === undefined ? " " : baseToString(chars);
                    var charsLength = chars.length;
                    if (charsLength < 2) return charsLength ? baseRepeat(chars, length) : chars;
                    var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
                    return hasUnicode(chars) ? castSlice(stringToArray(result), 0, length).join("") : result.slice(0, length);
                }
                /**
	     * Creates a function that wraps `func` to invoke it with the `this` binding
	     * of `thisArg` and `partials` prepended to the arguments it receives.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {Array} partials The arguments to prepend to those provided to
	     *  the new function.
	     * @returns {Function} Returns the new wrapped function.
	     */
                function createPartial(func, bitmask, thisArg, partials) {
                    function wrapper() {
                        for (var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func; ++leftIndex < leftLength; ) args[leftIndex] = partials[leftIndex];
                        for (;argsLength--; ) args[leftIndex++] = arguments[++argsIndex];
                        return apply(fn, isBind ? thisArg : this, args);
                    }
                    var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
                    return wrapper;
                }
                /**
	     * Creates a `_.range` or `_.rangeRight` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new range function.
	     */
                function createRange(fromRight) {
                    return function(start, end, step) {
                        // Ensure the sign of `-0` is preserved.
                        return step && "number" != typeof step && isIterateeCall(start, end, step) && (end = step = undefined), 
                        start = toFinite(start), end === undefined ? (end = start, start = 0) : end = toFinite(end), 
                        step = step === undefined ? start < end ? 1 : -1 : toFinite(step), baseRange(start, end, step, fromRight);
                    };
                }
                /**
	     * Creates a function that performs a relational operation on two values.
	     *
	     * @private
	     * @param {Function} operator The function to perform the operation.
	     * @returns {Function} Returns the new relational operation function.
	     */
                function createRelationalOperation(operator) {
                    return function(value, other) {
                        return "string" == typeof value && "string" == typeof other || (value = toNumber(value), 
                        other = toNumber(other)), operator(value, other);
                    };
                }
                /**
	     * Creates a function that wraps `func` to continue currying.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {Function} wrapFunc The function to create the `func` wrapper.
	     * @param {*} placeholder The placeholder value.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to prepend to those provided to
	     *  the new function.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
                function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
                    var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined, newHoldersRight = isCurry ? undefined : holders, newPartials = isCurry ? partials : undefined, newPartialsRight = isCurry ? undefined : partials;
                    bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG, bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG), 
                    bitmask & WRAP_CURRY_BOUND_FLAG || (bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG));
                    var newData = [ func, bitmask, thisArg, newPartials, newHolders, newPartialsRight, newHoldersRight, argPos, ary, arity ], result = wrapFunc.apply(undefined, newData);
                    return isLaziable(func) && setData(result, newData), result.placeholder = placeholder, 
                    setWrapToString(result, func, bitmask);
                }
                /**
	     * Creates a function like `_.round`.
	     *
	     * @private
	     * @param {string} methodName The name of the `Math` method to use when rounding.
	     * @returns {Function} Returns the new round function.
	     */
                function createRound(methodName) {
                    var func = Math[methodName];
                    return function(number, precision) {
                        if (number = toNumber(number), precision = null == precision ? 0 : nativeMin(toInteger(precision), 292)) {
                            // Shift with exponential notation to avoid floating-point issues.
                            // See [MDN](https://mdn.io/round#Examples) for more details.
                            var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
                            return pair = (toString(value) + "e").split("e"), +(pair[0] + "e" + (+pair[1] - precision));
                        }
                        return func(number);
                    };
                }
                /**
	     * Creates a `_.toPairs` or `_.toPairsIn` function.
	     *
	     * @private
	     * @param {Function} keysFunc The function to get the keys of a given object.
	     * @returns {Function} Returns the new pairs function.
	     */
                function createToPairs(keysFunc) {
                    return function(object) {
                        var tag = getTag(object);
                        return tag == mapTag ? mapToArray(object) : tag == setTag ? setToPairs(object) : baseToPairs(object, keysFunc(object));
                    };
                }
                /**
	     * Creates a function that either curries or invokes `func` with optional
	     * `this` binding and partially applied arguments.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to wrap.
	     * @param {number} bitmask The bitmask flags.
	     *    1 - `_.bind`
	     *    2 - `_.bindKey`
	     *    4 - `_.curry` or `_.curryRight` of a bound function
	     *    8 - `_.curry`
	     *   16 - `_.curryRight`
	     *   32 - `_.partial`
	     *   64 - `_.partialRight`
	     *  128 - `_.rearg`
	     *  256 - `_.ary`
	     *  512 - `_.flip`
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to be partially applied.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
                function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
                    var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
                    if (!isBindKey && "function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                    var length = partials ? partials.length : 0;
                    if (length || (bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG), partials = holders = undefined), 
                    ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0), arity = arity === undefined ? arity : toInteger(arity), 
                    length -= holders ? holders.length : 0, bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
                        var partialsRight = partials, holdersRight = holders;
                        partials = holders = undefined;
                    }
                    var data = isBindKey ? undefined : getData(func), newData = [ func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity ];
                    if (data && mergeData(newData, data), func = newData[0], bitmask = newData[1], thisArg = newData[2], 
                    partials = newData[3], holders = newData[4], arity = newData[9] = newData[9] === undefined ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0), 
                    !arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG) && (bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)), 
                    bitmask && bitmask != WRAP_BIND_FLAG) result = bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG ? createCurry(func, bitmask, arity) : bitmask != WRAP_PARTIAL_FLAG && bitmask != (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG) || holders.length ? createHybrid.apply(undefined, newData) : createPartial(func, bitmask, thisArg, partials); else var result = createBind(func, bitmask, thisArg);
                    var setter = data ? baseSetData : setData;
                    return setWrapToString(setter(result, newData), func, bitmask);
                }
                /**
	     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
	     * of source objects to the destination object for all destination properties
	     * that resolve to `undefined`.
	     *
	     * @private
	     * @param {*} objValue The destination value.
	     * @param {*} srcValue The source value.
	     * @param {string} key The key of the property to assign.
	     * @param {Object} object The parent object of `objValue`.
	     * @returns {*} Returns the value to assign.
	     */
                function customDefaultsAssignIn(objValue, srcValue, key, object) {
                    return objValue === undefined || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key) ? srcValue : objValue;
                }
                /**
	     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
	     * objects into destination objects that are passed thru.
	     *
	     * @private
	     * @param {*} objValue The destination value.
	     * @param {*} srcValue The source value.
	     * @param {string} key The key of the property to merge.
	     * @param {Object} object The parent object of `objValue`.
	     * @param {Object} source The parent object of `srcValue`.
	     * @param {Object} [stack] Tracks traversed source values and their merged
	     *  counterparts.
	     * @returns {*} Returns the value to assign.
	     */
                function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
                    // Recursively merge objects and arrays (susceptible to call stack limits).
                    return isObject(objValue) && isObject(srcValue) && (stack.set(srcValue, objValue), 
                    baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack), stack.delete(srcValue)), 
                    objValue;
                }
                /**
	     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
	     * objects.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @param {string} key The key of the property to inspect.
	     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
	     */
                function customOmitClone(value) {
                    return isPlainObject(value) ? undefined : value;
                }
                /**
	     * A specialized version of `baseIsEqualDeep` for arrays with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Array} array The array to compare.
	     * @param {Array} other The other array to compare.
	     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	     * @param {Function} customizer The function to customize comparisons.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Object} stack Tracks traversed `array` and `other` objects.
	     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	     */
                function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
                    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
                    if (arrLength != othLength && !(isPartial && othLength > arrLength)) return !1;
                    // Assume cyclic values are equal.
                    var stacked = stack.get(array);
                    if (stacked && stack.get(other)) return stacked == other;
                    var index = -1, result = !0, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;
                    // Ignore non-index properties.
                    for (stack.set(array, other), stack.set(other, array); ++index < arrLength; ) {
                        var arrValue = array[index], othValue = other[index];
                        if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
                        if (compared !== undefined) {
                            if (compared) continue;
                            result = !1;
                            break;
                        }
                        // Recursively compare arrays (susceptible to call stack limits).
                        if (seen) {
                            if (!arraySome(other, function(othValue, othIndex) {
                                if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) return seen.push(othIndex);
                            })) {
                                result = !1;
                                break;
                            }
                        } else if (arrValue !== othValue && !equalFunc(arrValue, othValue, bitmask, customizer, stack)) {
                            result = !1;
                            break;
                        }
                    }
                    return stack.delete(array), stack.delete(other), result;
                }
                /**
	     * A specialized version of `baseIsEqualDeep` for comparing objects of
	     * the same `toStringTag`.
	     *
	     * **Note:** This function only supports comparing values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {string} tag The `toStringTag` of the objects to compare.
	     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	     * @param {Function} customizer The function to customize comparisons.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Object} stack Tracks traversed `object` and `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
                function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
                    switch (tag) {
                      case dataViewTag:
                        if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return !1;
                        object = object.buffer, other = other.buffer;

                      case arrayBufferTag:
                        return !(object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other)));

                      case boolTag:
                      case dateTag:
                      case numberTag:
                        // Coerce booleans to `1` or `0` and dates to milliseconds.
                        // Invalid dates are coerced to `NaN`.
                        return eq(+object, +other);

                      case errorTag:
                        return object.name == other.name && object.message == other.message;

                      case regexpTag:
                      case stringTag:
                        // Coerce regexes to strings and treat strings, primitives and objects,
                        // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
                        // for more details.
                        return object == other + "";

                      case mapTag:
                        var convert = mapToArray;

                      case setTag:
                        var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
                        if (convert || (convert = setToArray), object.size != other.size && !isPartial) return !1;
                        // Assume cyclic values are equal.
                        var stacked = stack.get(object);
                        if (stacked) return stacked == other;
                        bitmask |= COMPARE_UNORDERED_FLAG, // Recursively compare objects (susceptible to call stack limits).
                        stack.set(object, other);
                        var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
                        return stack.delete(object), result;

                      case symbolTag:
                        if (symbolValueOf) return symbolValueOf.call(object) == symbolValueOf.call(other);
                    }
                    return !1;
                }
                /**
	     * A specialized version of `baseIsEqualDeep` for objects with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	     * @param {Function} customizer The function to customize comparisons.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Object} stack Tracks traversed `object` and `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
                function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
                    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
                    if (objLength != othLength && !isPartial) return !1;
                    for (var index = objLength; index--; ) {
                        var key = objProps[index];
                        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) return !1;
                    }
                    // Assume cyclic values are equal.
                    var stacked = stack.get(object);
                    if (stacked && stack.get(other)) return stacked == other;
                    var result = !0;
                    stack.set(object, other), stack.set(other, object);
                    for (var skipCtor = isPartial; ++index < objLength; ) {
                        key = objProps[index];
                        var objValue = object[key], othValue = other[key];
                        if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
                        // Recursively compare objects (susceptible to call stack limits).
                        if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
                            result = !1;
                            break;
                        }
                        skipCtor || (skipCtor = "constructor" == key);
                    }
                    if (result && !skipCtor) {
                        var objCtor = object.constructor, othCtor = other.constructor;
                        // Non `Object` object instances with different constructors are not equal.
                        objCtor != othCtor && "constructor" in object && "constructor" in other && !("function" == typeof objCtor && objCtor instanceof objCtor && "function" == typeof othCtor && othCtor instanceof othCtor) && (result = !1);
                    }
                    return stack.delete(object), stack.delete(other), result;
                }
                /**
	     * A specialized version of `baseRest` which flattens the rest array.
	     *
	     * @private
	     * @param {Function} func The function to apply a rest parameter to.
	     * @returns {Function} Returns the new function.
	     */
                function flatRest(func) {
                    return setToString(overRest(func, undefined, flatten), func + "");
                }
                /**
	     * Creates an array of own enumerable property names and symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names and symbols.
	     */
                function getAllKeys(object) {
                    return baseGetAllKeys(object, keys, getSymbols);
                }
                /**
	     * Creates an array of own and inherited enumerable property names and
	     * symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names and symbols.
	     */
                function getAllKeysIn(object) {
                    return baseGetAllKeys(object, keysIn, getSymbolsIn);
                }
                /**
	     * Gets the name of `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {string} Returns the function name.
	     */
                function getFuncName(func) {
                    for (var result = func.name + "", array = realNames[result], length = hasOwnProperty.call(realNames, result) ? array.length : 0; length--; ) {
                        var data = array[length], otherFunc = data.func;
                        if (null == otherFunc || otherFunc == func) return data.name;
                    }
                    return result;
                }
                /**
	     * Gets the argument placeholder value for `func`.
	     *
	     * @private
	     * @param {Function} func The function to inspect.
	     * @returns {*} Returns the placeholder value.
	     */
                function getHolder(func) {
                    var object = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
                    return object.placeholder;
                }
                /**
	     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
	     * this function returns the custom method, otherwise it returns `baseIteratee`.
	     * If arguments are provided, the chosen function is invoked with them and
	     * its result is returned.
	     *
	     * @private
	     * @param {*} [value] The value to convert to an iteratee.
	     * @param {number} [arity] The arity of the created iteratee.
	     * @returns {Function} Returns the chosen function or its result.
	     */
                function getIteratee() {
                    var result = lodash.iteratee || iteratee;
                    return result = result === iteratee ? baseIteratee : result, arguments.length ? result(arguments[0], arguments[1]) : result;
                }
                /**
	     * Gets the data for `map`.
	     *
	     * @private
	     * @param {Object} map The map to query.
	     * @param {string} key The reference key.
	     * @returns {*} Returns the map data.
	     */
                function getMapData(map, key) {
                    var data = map.__data__;
                    return isKeyable(key) ? data["string" == typeof key ? "string" : "hash"] : data.map;
                }
                /**
	     * Gets the property names, values, and compare flags of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the match data of `object`.
	     */
                function getMatchData(object) {
                    for (var result = keys(object), length = result.length; length--; ) {
                        var key = result[length], value = object[key];
                        result[length] = [ key, value, isStrictComparable(value) ];
                    }
                    return result;
                }
                /**
	     * Gets the native function at `key` of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {string} key The key of the method to get.
	     * @returns {*} Returns the function if it's native, else `undefined`.
	     */
                function getNative(object, key) {
                    var value = getValue(object, key);
                    return baseIsNative(value) ? value : undefined;
                }
                /**
	     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @returns {string} Returns the raw `toStringTag`.
	     */
                function getRawTag(value) {
                    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
                    try {
                        value[symToStringTag] = undefined;
                        var unmasked = !0;
                    } catch (e) {}
                    var result = nativeObjectToString.call(value);
                    return unmasked && (isOwn ? value[symToStringTag] = tag : delete value[symToStringTag]), 
                    result;
                }
                /**
	     * Gets the view, applying any `transforms` to the `start` and `end` positions.
	     *
	     * @private
	     * @param {number} start The start of the view.
	     * @param {number} end The end of the view.
	     * @param {Array} transforms The transformations to apply to the view.
	     * @returns {Object} Returns an object containing the `start` and `end`
	     *  positions of the view.
	     */
                function getView(start, end, transforms) {
                    for (var index = -1, length = transforms.length; ++index < length; ) {
                        var data = transforms[index], size = data.size;
                        switch (data.type) {
                          case "drop":
                            start += size;
                            break;

                          case "dropRight":
                            end -= size;
                            break;

                          case "take":
                            end = nativeMin(end, start + size);
                            break;

                          case "takeRight":
                            start = nativeMax(start, end - size);
                        }
                    }
                    return {
                        start: start,
                        end: end
                    };
                }
                /**
	     * Extracts wrapper details from the `source` body comment.
	     *
	     * @private
	     * @param {string} source The source to inspect.
	     * @returns {Array} Returns the wrapper details.
	     */
                function getWrapDetails(source) {
                    var match = source.match(reWrapDetails);
                    return match ? match[1].split(reSplitDetails) : [];
                }
                /**
	     * Checks if `path` exists on `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @param {Function} hasFunc The function to check properties.
	     * @returns {boolean} Returns `true` if `path` exists, else `false`.
	     */
                function hasPath(object, path, hasFunc) {
                    path = castPath(path, object);
                    for (var index = -1, length = path.length, result = !1; ++index < length; ) {
                        var key = toKey(path[index]);
                        if (!(result = null != object && hasFunc(object, key))) break;
                        object = object[key];
                    }
                    return result || ++index != length ? result : (length = null == object ? 0 : object.length, 
                    !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object)));
                }
                /**
	     * Initializes an array clone.
	     *
	     * @private
	     * @param {Array} array The array to clone.
	     * @returns {Array} Returns the initialized clone.
	     */
                function initCloneArray(array) {
                    var length = array.length, result = array.constructor(length);
                    // Add properties assigned by `RegExp#exec`.
                    return length && "string" == typeof array[0] && hasOwnProperty.call(array, "index") && (result.index = array.index, 
                    result.input = array.input), result;
                }
                /**
	     * Initializes an object clone.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @returns {Object} Returns the initialized clone.
	     */
                function initCloneObject(object) {
                    return "function" != typeof object.constructor || isPrototype(object) ? {} : baseCreate(getPrototype(object));
                }
                /**
	     * Initializes an object clone based on its `toStringTag`.
	     *
	     * **Note:** This function only supports cloning values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @param {string} tag The `toStringTag` of the object to clone.
	     * @param {Function} cloneFunc The function to clone values.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the initialized clone.
	     */
                function initCloneByTag(object, tag, cloneFunc, isDeep) {
                    var Ctor = object.constructor;
                    switch (tag) {
                      case arrayBufferTag:
                        return cloneArrayBuffer(object);

                      case boolTag:
                      case dateTag:
                        return new Ctor(+object);

                      case dataViewTag:
                        return cloneDataView(object, isDeep);

                      case float32Tag:
                      case float64Tag:
                      case int8Tag:
                      case int16Tag:
                      case int32Tag:
                      case uint8Tag:
                      case uint8ClampedTag:
                      case uint16Tag:
                      case uint32Tag:
                        return cloneTypedArray(object, isDeep);

                      case mapTag:
                        return cloneMap(object, isDeep, cloneFunc);

                      case numberTag:
                      case stringTag:
                        return new Ctor(object);

                      case regexpTag:
                        return cloneRegExp(object);

                      case setTag:
                        return cloneSet(object, isDeep, cloneFunc);

                      case symbolTag:
                        return cloneSymbol(object);
                    }
                }
                /**
	     * Inserts wrapper `details` in a comment at the top of the `source` body.
	     *
	     * @private
	     * @param {string} source The source to modify.
	     * @returns {Array} details The details to insert.
	     * @returns {string} Returns the modified source.
	     */
                function insertWrapDetails(source, details) {
                    var length = details.length;
                    if (!length) return source;
                    var lastIndex = length - 1;
                    return details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex], details = details.join(length > 2 ? ", " : " "), 
                    source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
                }
                /**
	     * Checks if `value` is a flattenable `arguments` object or array.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	     */
                function isFlattenable(value) {
                    return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
                }
                /**
	     * Checks if `value` is a valid array-like index.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	     */
                function isIndex(value, length) {
                    return length = null == length ? MAX_SAFE_INTEGER : length, !!length && ("number" == typeof value || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
                }
                /**
	     * Checks if the given arguments are from an iteratee call.
	     *
	     * @private
	     * @param {*} value The potential iteratee value argument.
	     * @param {*} index The potential iteratee index or key argument.
	     * @param {*} object The potential iteratee object argument.
	     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	     *  else `false`.
	     */
                function isIterateeCall(value, index, object) {
                    if (!isObject(object)) return !1;
                    var type = typeof index;
                    return !!("number" == type ? isArrayLike(object) && isIndex(index, object.length) : "string" == type && index in object) && eq(object[index], value);
                }
                /**
	     * Checks if `value` is a property name and not a property path.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {Object} [object] The object to query keys on.
	     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	     */
                function isKey(value, object) {
                    if (isArray(value)) return !1;
                    var type = typeof value;
                    return !("number" != type && "symbol" != type && "boolean" != type && null != value && !isSymbol(value)) || (reIsPlainProp.test(value) || !reIsDeepProp.test(value) || null != object && value in Object(object));
                }
                /**
	     * Checks if `value` is suitable for use as unique object key.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	     */
                function isKeyable(value) {
                    var type = typeof value;
                    return "string" == type || "number" == type || "symbol" == type || "boolean" == type ? "__proto__" !== value : null === value;
                }
                /**
	     * Checks if `func` has a lazy counterpart.
	     *
	     * @private
	     * @param {Function} func The function to check.
	     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
	     *  else `false`.
	     */
                function isLaziable(func) {
                    var funcName = getFuncName(func), other = lodash[funcName];
                    if ("function" != typeof other || !(funcName in LazyWrapper.prototype)) return !1;
                    if (func === other) return !0;
                    var data = getData(other);
                    return !!data && func === data[0];
                }
                /**
	     * Checks if `func` has its source masked.
	     *
	     * @private
	     * @param {Function} func The function to check.
	     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	     */
                function isMasked(func) {
                    return !!maskSrcKey && maskSrcKey in func;
                }
                /**
	     * Checks if `value` is likely a prototype object.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	     */
                function isPrototype(value) {
                    var Ctor = value && value.constructor, proto = "function" == typeof Ctor && Ctor.prototype || objectProto;
                    return value === proto;
                }
                /**
	     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` if suitable for strict
	     *  equality comparisons, else `false`.
	     */
                function isStrictComparable(value) {
                    return value === value && !isObject(value);
                }
                /**
	     * A specialized version of `matchesProperty` for source values suitable
	     * for strict equality comparisons, i.e. `===`.
	     *
	     * @private
	     * @param {string} key The key of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new spec function.
	     */
                function matchesStrictComparable(key, srcValue) {
                    return function(object) {
                        return null != object && (object[key] === srcValue && (srcValue !== undefined || key in Object(object)));
                    };
                }
                /**
	     * A specialized version of `_.memoize` which clears the memoized function's
	     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	     *
	     * @private
	     * @param {Function} func The function to have its output memoized.
	     * @returns {Function} Returns the new memoized function.
	     */
                function memoizeCapped(func) {
                    var result = memoize(func, function(key) {
                        return cache.size === MAX_MEMOIZE_SIZE && cache.clear(), key;
                    }), cache = result.cache;
                    return result;
                }
                /**
	     * Merges the function metadata of `source` into `data`.
	     *
	     * Merging metadata reduces the number of wrappers used to invoke a function.
	     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
	     * may be applied regardless of execution order. Methods like `_.ary` and
	     * `_.rearg` modify function arguments, making the order in which they are
	     * executed important, preventing the merging of metadata. However, we make
	     * an exception for a safe combined case where curried functions have `_.ary`
	     * and or `_.rearg` applied.
	     *
	     * @private
	     * @param {Array} data The destination metadata.
	     * @param {Array} source The source metadata.
	     * @returns {Array} Returns `data`.
	     */
                function mergeData(data, source) {
                    var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG), isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
                    // Exit early if metadata can't be merged.
                    if (!isCommon && !isCombo) return data;
                    // Use source `thisArg` if available.
                    srcBitmask & WRAP_BIND_FLAG && (data[2] = source[2], // Set when currying a bound function.
                    newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG);
                    // Compose partial arguments.
                    var value = source[3];
                    if (value) {
                        var partials = data[3];
                        data[3] = partials ? composeArgs(partials, value, source[4]) : value, data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
                    }
                    // Compose partial right arguments.
                    // Use source `argPos` if available.
                    // Use source `ary` if it's smaller.
                    // Use source `arity` if one is not provided.
                    // Use source `func` and merge bitmasks.
                    return value = source[5], value && (partials = data[5], data[5] = partials ? composeArgsRight(partials, value, source[6]) : value, 
                    data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6]), value = source[7], 
                    value && (data[7] = value), srcBitmask & WRAP_ARY_FLAG && (data[8] = null == data[8] ? source[8] : nativeMin(data[8], source[8])), 
                    null == data[9] && (data[9] = source[9]), data[0] = source[0], data[1] = newBitmask, 
                    data;
                }
                /**
	     * This function is like
	     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	     * except that it includes inherited enumerable properties.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */
                function nativeKeysIn(object) {
                    var result = [];
                    if (null != object) for (var key in Object(object)) result.push(key);
                    return result;
                }
                /**
	     * Converts `value` to a string using `Object.prototype.toString`.
	     *
	     * @private
	     * @param {*} value The value to convert.
	     * @returns {string} Returns the converted string.
	     */
                function objectToString(value) {
                    return nativeObjectToString.call(value);
                }
                /**
	     * A specialized version of `baseRest` which transforms the rest array.
	     *
	     * @private
	     * @param {Function} func The function to apply a rest parameter to.
	     * @param {number} [start=func.length-1] The start position of the rest parameter.
	     * @param {Function} transform The rest array transform.
	     * @returns {Function} Returns the new function.
	     */
                function overRest(func, start, transform) {
                    return start = nativeMax(start === undefined ? func.length - 1 : start, 0), function() {
                        for (var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length); ++index < length; ) array[index] = args[start + index];
                        index = -1;
                        for (var otherArgs = Array(start + 1); ++index < start; ) otherArgs[index] = args[index];
                        return otherArgs[start] = transform(array), apply(func, this, otherArgs);
                    };
                }
                /**
	     * Gets the parent value at `path` of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array} path The path to get the parent value of.
	     * @returns {*} Returns the parent value.
	     */
                function parent(object, path) {
                    return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
                }
                /**
	     * Reorder `array` according to the specified indexes where the element at
	     * the first index is assigned as the first element, the element at
	     * the second index is assigned as the second element, and so on.
	     *
	     * @private
	     * @param {Array} array The array to reorder.
	     * @param {Array} indexes The arranged array indexes.
	     * @returns {Array} Returns `array`.
	     */
                function reorder(array, indexes) {
                    for (var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array); length--; ) {
                        var index = indexes[length];
                        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
                    }
                    return array;
                }
                /**
	     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
	     * with wrapper details in a comment at the top of the source body.
	     *
	     * @private
	     * @param {Function} wrapper The function to modify.
	     * @param {Function} reference The reference function.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @returns {Function} Returns `wrapper`.
	     */
                function setWrapToString(wrapper, reference, bitmask) {
                    var source = reference + "";
                    return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
                }
                /**
	     * Creates a function that'll short out and invoke `identity` instead
	     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	     * milliseconds.
	     *
	     * @private
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new shortable function.
	     */
                function shortOut(func) {
                    var count = 0, lastCalled = 0;
                    return function() {
                        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
                        if (lastCalled = stamp, remaining > 0) {
                            if (++count >= HOT_COUNT) return arguments[0];
                        } else count = 0;
                        return func.apply(undefined, arguments);
                    };
                }
                /**
	     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
	     *
	     * @private
	     * @param {Array} array The array to shuffle.
	     * @param {number} [size=array.length] The size of `array`.
	     * @returns {Array} Returns `array`.
	     */
                function shuffleSelf(array, size) {
                    var index = -1, length = array.length, lastIndex = length - 1;
                    for (size = size === undefined ? length : size; ++index < size; ) {
                        var rand = baseRandom(index, lastIndex), value = array[rand];
                        array[rand] = array[index], array[index] = value;
                    }
                    return array.length = size, array;
                }
                /**
	     * Converts `value` to a string key if it's not a string or symbol.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @returns {string|symbol} Returns the key.
	     */
                function toKey(value) {
                    if ("string" == typeof value || isSymbol(value)) return value;
                    var result = value + "";
                    return "0" == result && 1 / value == -INFINITY ? "-0" : result;
                }
                /**
	     * Converts `func` to its source code.
	     *
	     * @private
	     * @param {Function} func The function to convert.
	     * @returns {string} Returns the source code.
	     */
                function toSource(func) {
                    if (null != func) {
                        try {
                            return funcToString.call(func);
                        } catch (e) {}
                        try {
                            return func + "";
                        } catch (e) {}
                    }
                    return "";
                }
                /**
	     * Updates wrapper `details` based on `bitmask` flags.
	     *
	     * @private
	     * @returns {Array} details The details to modify.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @returns {Array} Returns `details`.
	     */
                function updateWrapDetails(details, bitmask) {
                    return arrayEach(wrapFlags, function(pair) {
                        var value = "_." + pair[0];
                        bitmask & pair[1] && !arrayIncludes(details, value) && details.push(value);
                    }), details.sort();
                }
                /**
	     * Creates a clone of `wrapper`.
	     *
	     * @private
	     * @param {Object} wrapper The wrapper to clone.
	     * @returns {Object} Returns the cloned wrapper.
	     */
                function wrapperClone(wrapper) {
                    if (wrapper instanceof LazyWrapper) return wrapper.clone();
                    var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
                    return result.__actions__ = copyArray(wrapper.__actions__), result.__index__ = wrapper.__index__, 
                    result.__values__ = wrapper.__values__, result;
                }
                /*------------------------------------------------------------------------*/
                /**
	     * Creates an array of elements split into groups the length of `size`.
	     * If `array` can't be split evenly, the final chunk will be the remaining
	     * elements.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to process.
	     * @param {number} [size=1] The length of each chunk
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the new array of chunks.
	     * @example
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 2);
	     * // => [['a', 'b'], ['c', 'd']]
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 3);
	     * // => [['a', 'b', 'c'], ['d']]
	     */
                function chunk(array, size, guard) {
                    size = (guard ? isIterateeCall(array, size, guard) : size === undefined) ? 1 : nativeMax(toInteger(size), 0);
                    var length = null == array ? 0 : array.length;
                    if (!length || size < 1) return [];
                    for (var index = 0, resIndex = 0, result = Array(nativeCeil(length / size)); index < length; ) result[resIndex++] = baseSlice(array, index, index += size);
                    return result;
                }
                /**
	     * Creates an array with all falsey values removed. The values `false`, `null`,
	     * `0`, `""`, `undefined`, and `NaN` are falsey.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to compact.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.compact([0, 1, false, 2, '', 3]);
	     * // => [1, 2, 3]
	     */
                function compact(array) {
                    for (var index = -1, length = null == array ? 0 : array.length, resIndex = 0, result = []; ++index < length; ) {
                        var value = array[index];
                        value && (result[resIndex++] = value);
                    }
                    return result;
                }
                /**
	     * Creates a new array concatenating `array` with any additional arrays
	     * and/or values.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to concatenate.
	     * @param {...*} [values] The values to concatenate.
	     * @returns {Array} Returns the new concatenated array.
	     * @example
	     *
	     * var array = [1];
	     * var other = _.concat(array, 2, [3], [[4]]);
	     *
	     * console.log(other);
	     * // => [1, 2, 3, [4]]
	     *
	     * console.log(array);
	     * // => [1]
	     */
                function concat() {
                    var length = arguments.length;
                    if (!length) return [];
                    for (var args = Array(length - 1), array = arguments[0], index = length; index--; ) args[index - 1] = arguments[index];
                    return arrayPush(isArray(array) ? copyArray(array) : [ array ], baseFlatten(args, 1));
                }
                /**
	     * Creates a slice of `array` with `n` elements dropped from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.5.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.drop([1, 2, 3]);
	     * // => [2, 3]
	     *
	     * _.drop([1, 2, 3], 2);
	     * // => [3]
	     *
	     * _.drop([1, 2, 3], 5);
	     * // => []
	     *
	     * _.drop([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */
                function drop(array, n, guard) {
                    var length = null == array ? 0 : array.length;
                    return length ? (n = guard || n === undefined ? 1 : toInteger(n), baseSlice(array, n < 0 ? 0 : n, length)) : [];
                }
                /**
	     * Creates a slice of `array` with `n` elements dropped from the end.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropRight([1, 2, 3]);
	     * // => [1, 2]
	     *
	     * _.dropRight([1, 2, 3], 2);
	     * // => [1]
	     *
	     * _.dropRight([1, 2, 3], 5);
	     * // => []
	     *
	     * _.dropRight([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */
                function dropRight(array, n, guard) {
                    var length = null == array ? 0 : array.length;
                    return length ? (n = guard || n === undefined ? 1 : toInteger(n), n = length - n, 
                    baseSlice(array, 0, n < 0 ? 0 : n)) : [];
                }
                /**
	     * Creates a slice of `array` excluding elements dropped from the end.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * invoked with three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.dropRightWhile(users, function(o) { return !o.active; });
	     * // => objects for ['barney']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
	     * // => objects for ['barney', 'fred']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.dropRightWhile(users, ['active', false]);
	     * // => objects for ['barney']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.dropRightWhile(users, 'active');
	     * // => objects for ['barney', 'fred', 'pebbles']
	     */
                function dropRightWhile(array, predicate) {
                    return array && array.length ? baseWhile(array, getIteratee(predicate, 3), !0, !0) : [];
                }
                /**
	     * Creates a slice of `array` excluding elements dropped from the beginning.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * invoked with three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.dropWhile(users, function(o) { return !o.active; });
	     * // => objects for ['pebbles']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.dropWhile(users, { 'user': 'barney', 'active': false });
	     * // => objects for ['fred', 'pebbles']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.dropWhile(users, ['active', false]);
	     * // => objects for ['pebbles']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.dropWhile(users, 'active');
	     * // => objects for ['barney', 'fred', 'pebbles']
	     */
                function dropWhile(array, predicate) {
                    return array && array.length ? baseWhile(array, getIteratee(predicate, 3), !0) : [];
                }
                /**
	     * Fills elements of `array` with `value` from `start` up to, but not
	     * including, `end`.
	     *
	     * **Note:** This method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.2.0
	     * @category Array
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _.fill(array, 'a');
	     * console.log(array);
	     * // => ['a', 'a', 'a']
	     *
	     * _.fill(Array(3), 2);
	     * // => [2, 2, 2]
	     *
	     * _.fill([4, 6, 8, 10], '*', 1, 3);
	     * // => [4, '*', '*', 10]
	     */
                function fill(array, value, start, end) {
                    var length = null == array ? 0 : array.length;
                    return length ? (start && "number" != typeof start && isIterateeCall(array, value, start) && (start = 0, 
                    end = length), baseFill(array, value, start, end)) : [];
                }
                /**
	     * This method is like `_.find` except that it returns the index of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.findIndex(users, function(o) { return o.user == 'barney'; });
	     * // => 0
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findIndex(users, { 'user': 'fred', 'active': false });
	     * // => 1
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findIndex(users, ['active', false]);
	     * // => 0
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findIndex(users, 'active');
	     * // => 2
	     */
                function findIndex(array, predicate, fromIndex) {
                    var length = null == array ? 0 : array.length;
                    if (!length) return -1;
                    var index = null == fromIndex ? 0 : toInteger(fromIndex);
                    return index < 0 && (index = nativeMax(length + index, 0)), baseFindIndex(array, getIteratee(predicate, 3), index);
                }
                /**
	     * This method is like `_.findIndex` except that it iterates over elements
	     * of `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @param {number} [fromIndex=array.length-1] The index to search from.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
	     * // => 2
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
	     * // => 0
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findLastIndex(users, ['active', false]);
	     * // => 2
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findLastIndex(users, 'active');
	     * // => 0
	     */
                function findLastIndex(array, predicate, fromIndex) {
                    var length = null == array ? 0 : array.length;
                    if (!length) return -1;
                    var index = length - 1;
                    return fromIndex !== undefined && (index = toInteger(fromIndex), index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1)), 
                    baseFindIndex(array, getIteratee(predicate, 3), index, !0);
                }
                /**
	     * Flattens `array` a single level deep.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flatten([1, [2, [3, [4]], 5]]);
	     * // => [1, 2, [3, [4]], 5]
	     */
                function flatten(array) {
                    var length = null == array ? 0 : array.length;
                    return length ? baseFlatten(array, 1) : [];
                }
                /**
	     * Recursively flattens `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flattenDeep([1, [2, [3, [4]], 5]]);
	     * // => [1, 2, 3, 4, 5]
	     */
                function flattenDeep(array) {
                    var length = null == array ? 0 : array.length;
                    return length ? baseFlatten(array, INFINITY) : [];
                }
                /**
	     * Recursively flatten `array` up to `depth` times.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.4.0
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @param {number} [depth=1] The maximum recursion depth.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * var array = [1, [2, [3, [4]], 5]];
	     *
	     * _.flattenDepth(array, 1);
	     * // => [1, 2, [3, [4]], 5]
	     *
	     * _.flattenDepth(array, 2);
	     * // => [1, 2, 3, [4], 5]
	     */
                function flattenDepth(array, depth) {
                    var length = null == array ? 0 : array.length;
                    return length ? (depth = depth === undefined ? 1 : toInteger(depth), baseFlatten(array, depth)) : [];
                }
                /**
	     * The inverse of `_.toPairs`; this method returns an object composed
	     * from key-value `pairs`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} pairs The key-value pairs.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.fromPairs([['a', 1], ['b', 2]]);
	     * // => { 'a': 1, 'b': 2 }
	     */
                function fromPairs(pairs) {
                    for (var index = -1, length = null == pairs ? 0 : pairs.length, result = {}; ++index < length; ) {
                        var pair = pairs[index];
                        result[pair[0]] = pair[1];
                    }
                    return result;
                }
                /**
	     * Gets the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @alias first
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the first element of `array`.
	     * @example
	     *
	     * _.head([1, 2, 3]);
	     * // => 1
	     *
	     * _.head([]);
	     * // => undefined
	     */
                function head(array) {
                    return array && array.length ? array[0] : undefined;
                }
                /**
	     * Gets the index at which the first occurrence of `value` is found in `array`
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons. If `fromIndex` is negative, it's used as the
	     * offset from the end of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.indexOf([1, 2, 1, 2], 2);
	     * // => 1
	     *
	     * // Search from the `fromIndex`.
	     * _.indexOf([1, 2, 1, 2], 2, 2);
	     * // => 3
	     */
                function indexOf(array, value, fromIndex) {
                    var length = null == array ? 0 : array.length;
                    if (!length) return -1;
                    var index = null == fromIndex ? 0 : toInteger(fromIndex);
                    return index < 0 && (index = nativeMax(length + index, 0)), baseIndexOf(array, value, index);
                }
                /**
	     * Gets all but the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.initial([1, 2, 3]);
	     * // => [1, 2]
	     */
                function initial(array) {
                    var length = null == array ? 0 : array.length;
                    return length ? baseSlice(array, 0, -1) : [];
                }
                /**
	     * Converts all elements in `array` into a string separated by `separator`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to convert.
	     * @param {string} [separator=','] The element separator.
	     * @returns {string} Returns the joined string.
	     * @example
	     *
	     * _.join(['a', 'b', 'c'], '~');
	     * // => 'a~b~c'
	     */
                function join(array, separator) {
                    return null == array ? "" : nativeJoin.call(array, separator);
                }
                /**
	     * Gets the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the last element of `array`.
	     * @example
	     *
	     * _.last([1, 2, 3]);
	     * // => 3
	     */
                function last(array) {
                    var length = null == array ? 0 : array.length;
                    return length ? array[length - 1] : undefined;
                }
                /**
	     * This method is like `_.indexOf` except that it iterates over elements of
	     * `array` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @param {number} [fromIndex=array.length-1] The index to search from.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.lastIndexOf([1, 2, 1, 2], 2);
	     * // => 3
	     *
	     * // Search from the `fromIndex`.
	     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
	     * // => 1
	     */
                function lastIndexOf(array, value, fromIndex) {
                    var length = null == array ? 0 : array.length;
                    if (!length) return -1;
                    var index = length;
                    return fromIndex !== undefined && (index = toInteger(fromIndex), index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1)), 
                    value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, !0);
                }
                /**
	     * Gets the element at index `n` of `array`. If `n` is negative, the nth
	     * element from the end is returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.11.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=0] The index of the element to return.
	     * @returns {*} Returns the nth element of `array`.
	     * @example
	     *
	     * var array = ['a', 'b', 'c', 'd'];
	     *
	     * _.nth(array, 1);
	     * // => 'b'
	     *
	     * _.nth(array, -2);
	     * // => 'c';
	     */
                function nth(array, n) {
                    return array && array.length ? baseNth(array, toInteger(n)) : undefined;
                }
                /**
	     * This method is like `_.pull` except that it accepts an array of values to remove.
	     *
	     * **Note:** Unlike `_.difference`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
	     *
	     * _.pullAll(array, ['a', 'c']);
	     * console.log(array);
	     * // => ['b', 'b']
	     */
                function pullAll(array, values) {
                    return array && array.length && values && values.length ? basePullAll(array, values) : array;
                }
                /**
	     * This method is like `_.pullAll` except that it accepts `iteratee` which is
	     * invoked for each element of `array` and `values` to generate the criterion
	     * by which they're compared. The iteratee is invoked with one argument: (value).
	     *
	     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
	     *
	     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
	     * console.log(array);
	     * // => [{ 'x': 2 }]
	     */
                function pullAllBy(array, values, iteratee) {
                    return array && array.length && values && values.length ? basePullAll(array, values, getIteratee(iteratee, 2)) : array;
                }
                /**
	     * This method is like `_.pullAll` except that it accepts `comparator` which
	     * is invoked to compare elements of `array` to `values`. The comparator is
	     * invoked with two arguments: (arrVal, othVal).
	     *
	     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.6.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
	     *
	     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
	     * console.log(array);
	     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
	     */
                function pullAllWith(array, values, comparator) {
                    return array && array.length && values && values.length ? basePullAll(array, values, undefined, comparator) : array;
                }
                /**
	     * Removes all elements from `array` that `predicate` returns truthy for
	     * and returns an array of the removed elements. The predicate is invoked
	     * with three arguments: (value, index, array).
	     *
	     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
	     * to pull elements from an array by value.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = [1, 2, 3, 4];
	     * var evens = _.remove(array, function(n) {
	     *   return n % 2 == 0;
	     * });
	     *
	     * console.log(array);
	     * // => [1, 3]
	     *
	     * console.log(evens);
	     * // => [2, 4]
	     */
                function remove(array, predicate) {
                    var result = [];
                    if (!array || !array.length) return result;
                    var index = -1, indexes = [], length = array.length;
                    for (predicate = getIteratee(predicate, 3); ++index < length; ) {
                        var value = array[index];
                        predicate(value, index, array) && (result.push(value), indexes.push(index));
                    }
                    return basePullAt(array, indexes), result;
                }
                /**
	     * Reverses `array` so that the first element becomes the last, the second
	     * element becomes the second to last, and so on.
	     *
	     * **Note:** This method mutates `array` and is based on
	     * [`Array#reverse`](https://mdn.io/Array/reverse).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _.reverse(array);
	     * // => [3, 2, 1]
	     *
	     * console.log(array);
	     * // => [3, 2, 1]
	     */
                function reverse(array) {
                    return null == array ? array : nativeReverse.call(array);
                }
                /**
	     * Creates a slice of `array` from `start` up to, but not including, `end`.
	     *
	     * **Note:** This method is used instead of
	     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
	     * returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */
                function slice(array, start, end) {
                    var length = null == array ? 0 : array.length;
                    return length ? (end && "number" != typeof end && isIterateeCall(array, start, end) ? (start = 0, 
                    end = length) : (start = null == start ? 0 : toInteger(start), end = end === undefined ? length : toInteger(end)), 
                    baseSlice(array, start, end)) : [];
                }
                /**
	     * Uses a binary search to determine the lowest index at which `value`
	     * should be inserted into `array` in order to maintain its sort order.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedIndex([30, 50], 40);
	     * // => 1
	     */
                function sortedIndex(array, value) {
                    return baseSortedIndex(array, value);
                }
                /**
	     * This method is like `_.sortedIndex` except that it accepts `iteratee`
	     * which is invoked for `value` and each element of `array` to compute their
	     * sort ranking. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * var objects = [{ 'x': 4 }, { 'x': 5 }];
	     *
	     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
	     * // => 0
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
	     * // => 0
	     */
                function sortedIndexBy(array, value, iteratee) {
                    return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
                }
                /**
	     * This method is like `_.indexOf` except that it performs a binary
	     * search on a sorted `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
	     * // => 1
	     */
                function sortedIndexOf(array, value) {
                    var length = null == array ? 0 : array.length;
                    if (length) {
                        var index = baseSortedIndex(array, value);
                        if (index < length && eq(array[index], value)) return index;
                    }
                    return -1;
                }
                /**
	     * This method is like `_.sortedIndex` except that it returns the highest
	     * index at which `value` should be inserted into `array` in order to
	     * maintain its sort order.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
	     * // => 4
	     */
                function sortedLastIndex(array, value) {
                    return baseSortedIndex(array, value, !0);
                }
                /**
	     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
	     * which is invoked for `value` and each element of `array` to compute their
	     * sort ranking. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * var objects = [{ 'x': 4 }, { 'x': 5 }];
	     *
	     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
	     * // => 1
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
	     * // => 1
	     */
                function sortedLastIndexBy(array, value, iteratee) {
                    return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), !0);
                }
                /**
	     * This method is like `_.lastIndexOf` except that it performs a binary
	     * search on a sorted `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
	     * // => 3
	     */
                function sortedLastIndexOf(array, value) {
                    var length = null == array ? 0 : array.length;
                    if (length) {
                        var index = baseSortedIndex(array, value, !0) - 1;
                        if (eq(array[index], value)) return index;
                    }
                    return -1;
                }
                /**
	     * This method is like `_.uniq` except that it's designed and optimized
	     * for sorted arrays.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.sortedUniq([1, 1, 2]);
	     * // => [1, 2]
	     */
                function sortedUniq(array) {
                    return array && array.length ? baseSortedUniq(array) : [];
                }
                /**
	     * This method is like `_.uniqBy` except that it's designed and optimized
	     * for sorted arrays.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
	     * // => [1.1, 2.3]
	     */
                function sortedUniqBy(array, iteratee) {
                    return array && array.length ? baseSortedUniq(array, getIteratee(iteratee, 2)) : [];
                }
                /**
	     * Gets all but the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.tail([1, 2, 3]);
	     * // => [2, 3]
	     */
                function tail(array) {
                    var length = null == array ? 0 : array.length;
                    return length ? baseSlice(array, 1, length) : [];
                }
                /**
	     * Creates a slice of `array` with `n` elements taken from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.take([1, 2, 3]);
	     * // => [1]
	     *
	     * _.take([1, 2, 3], 2);
	     * // => [1, 2]
	     *
	     * _.take([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.take([1, 2, 3], 0);
	     * // => []
	     */
                function take(array, n, guard) {
                    return array && array.length ? (n = guard || n === undefined ? 1 : toInteger(n), 
                    baseSlice(array, 0, n < 0 ? 0 : n)) : [];
                }
                /**
	     * Creates a slice of `array` with `n` elements taken from the end.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeRight([1, 2, 3]);
	     * // => [3]
	     *
	     * _.takeRight([1, 2, 3], 2);
	     * // => [2, 3]
	     *
	     * _.takeRight([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.takeRight([1, 2, 3], 0);
	     * // => []
	     */
                function takeRight(array, n, guard) {
                    var length = null == array ? 0 : array.length;
                    return length ? (n = guard || n === undefined ? 1 : toInteger(n), n = length - n, 
                    baseSlice(array, n < 0 ? 0 : n, length)) : [];
                }
                /**
	     * Creates a slice of `array` with elements taken from the end. Elements are
	     * taken until `predicate` returns falsey. The predicate is invoked with
	     * three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.takeRightWhile(users, function(o) { return !o.active; });
	     * // => objects for ['fred', 'pebbles']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
	     * // => objects for ['pebbles']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.takeRightWhile(users, ['active', false]);
	     * // => objects for ['fred', 'pebbles']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.takeRightWhile(users, 'active');
	     * // => []
	     */
                function takeRightWhile(array, predicate) {
                    return array && array.length ? baseWhile(array, getIteratee(predicate, 3), !1, !0) : [];
                }
                /**
	     * Creates a slice of `array` with elements taken from the beginning. Elements
	     * are taken until `predicate` returns falsey. The predicate is invoked with
	     * three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.takeWhile(users, function(o) { return !o.active; });
	     * // => objects for ['barney', 'fred']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.takeWhile(users, { 'user': 'barney', 'active': false });
	     * // => objects for ['barney']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.takeWhile(users, ['active', false]);
	     * // => objects for ['barney', 'fred']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.takeWhile(users, 'active');
	     * // => []
	     */
                function takeWhile(array, predicate) {
                    return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
                }
                /**
	     * Creates a duplicate-free version of an array, using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons, in which only the first occurrence of each element
	     * is kept. The order of result values is determined by the order they occur
	     * in the array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.uniq([2, 1, 2]);
	     * // => [2, 1]
	     */
                function uniq(array) {
                    return array && array.length ? baseUniq(array) : [];
                }
                /**
	     * This method is like `_.uniq` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the criterion by which
	     * uniqueness is computed. The order of result values is determined by the
	     * order they occur in the array. The iteratee is invoked with one argument:
	     * (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
	     * // => [2.1, 1.2]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }, { 'x': 2 }]
	     */
                function uniqBy(array, iteratee) {
                    return array && array.length ? baseUniq(array, getIteratee(iteratee, 2)) : [];
                }
                /**
	     * This method is like `_.uniq` except that it accepts `comparator` which
	     * is invoked to compare elements of `array`. The order of result values is
	     * determined by the order they occur in the array.The comparator is invoked
	     * with two arguments: (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
	     *
	     * _.uniqWith(objects, _.isEqual);
	     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
	     */
                function uniqWith(array, comparator) {
                    return comparator = "function" == typeof comparator ? comparator : undefined, array && array.length ? baseUniq(array, undefined, comparator) : [];
                }
                /**
	     * This method is like `_.zip` except that it accepts an array of grouped
	     * elements and creates an array regrouping the elements to their pre-zip
	     * configuration.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.2.0
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
	     * // => [['a', 1, true], ['b', 2, false]]
	     *
	     * _.unzip(zipped);
	     * // => [['a', 'b'], [1, 2], [true, false]]
	     */
                function unzip(array) {
                    if (!array || !array.length) return [];
                    var length = 0;
                    return array = arrayFilter(array, function(group) {
                        if (isArrayLikeObject(group)) return length = nativeMax(group.length, length), !0;
                    }), baseTimes(length, function(index) {
                        return arrayMap(array, baseProperty(index));
                    });
                }
                /**
	     * This method is like `_.unzip` except that it accepts `iteratee` to specify
	     * how regrouped values should be combined. The iteratee is invoked with the
	     * elements of each group: (...group).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.8.0
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @param {Function} [iteratee=_.identity] The function to combine
	     *  regrouped values.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
	     * // => [[1, 10, 100], [2, 20, 200]]
	     *
	     * _.unzipWith(zipped, _.add);
	     * // => [3, 30, 300]
	     */
                function unzipWith(array, iteratee) {
                    if (!array || !array.length) return [];
                    var result = unzip(array);
                    return null == iteratee ? result : arrayMap(result, function(group) {
                        return apply(iteratee, undefined, group);
                    });
                }
                /**
	     * This method is like `_.fromPairs` except that it accepts two arrays,
	     * one of property identifiers and one of corresponding values.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.4.0
	     * @category Array
	     * @param {Array} [props=[]] The property identifiers.
	     * @param {Array} [values=[]] The property values.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.zipObject(['a', 'b'], [1, 2]);
	     * // => { 'a': 1, 'b': 2 }
	     */
                function zipObject(props, values) {
                    return baseZipObject(props || [], values || [], assignValue);
                }
                /**
	     * This method is like `_.zipObject` except that it supports property paths.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.1.0
	     * @category Array
	     * @param {Array} [props=[]] The property identifiers.
	     * @param {Array} [values=[]] The property values.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
	     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
	     */
                function zipObjectDeep(props, values) {
                    return baseZipObject(props || [], values || [], baseSet);
                }
                /*------------------------------------------------------------------------*/
                /**
	     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
	     * chain sequences enabled. The result of such sequences must be unwrapped
	     * with `_#value`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.3.0
	     * @category Seq
	     * @param {*} value The value to wrap.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36 },
	     *   { 'user': 'fred',    'age': 40 },
	     *   { 'user': 'pebbles', 'age': 1 }
	     * ];
	     *
	     * var youngest = _
	     *   .chain(users)
	     *   .sortBy('age')
	     *   .map(function(o) {
	     *     return o.user + ' is ' + o.age;
	     *   })
	     *   .head()
	     *   .value();
	     * // => 'pebbles is 1'
	     */
                function chain(value) {
                    var result = lodash(value);
                    return result.__chain__ = !0, result;
                }
                /**
	     * This method invokes `interceptor` and returns `value`. The interceptor
	     * is invoked with one argument; (value). The purpose of this method is to
	     * "tap into" a method chain sequence in order to modify intermediate results.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Seq
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * _([1, 2, 3])
	     *  .tap(function(array) {
	     *    // Mutate input array.
	     *    array.pop();
	     *  })
	     *  .reverse()
	     *  .value();
	     * // => [2, 1]
	     */
                function tap(value, interceptor) {
                    return interceptor(value), value;
                }
                /**
	     * This method is like `_.tap` except that it returns the result of `interceptor`.
	     * The purpose of this method is to "pass thru" values replacing intermediate
	     * results in a method chain sequence.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Seq
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @returns {*} Returns the result of `interceptor`.
	     * @example
	     *
	     * _('  abc  ')
	     *  .chain()
	     *  .trim()
	     *  .thru(function(value) {
	     *    return [value];
	     *  })
	     *  .value();
	     * // => ['abc']
	     */
                function thru(value, interceptor) {
                    return interceptor(value);
                }
                /**
	     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
	     *
	     * @name chain
	     * @memberOf _
	     * @since 0.1.0
	     * @category Seq
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * // A sequence without explicit chaining.
	     * _(users).head();
	     * // => { 'user': 'barney', 'age': 36 }
	     *
	     * // A sequence with explicit chaining.
	     * _(users)
	     *   .chain()
	     *   .head()
	     *   .pick('user')
	     *   .value();
	     * // => { 'user': 'barney' }
	     */
                function wrapperChain() {
                    return chain(this);
                }
                /**
	     * Executes the chain sequence and returns the wrapped result.
	     *
	     * @name commit
	     * @memberOf _
	     * @since 3.2.0
	     * @category Seq
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2];
	     * var wrapped = _(array).push(3);
	     *
	     * console.log(array);
	     * // => [1, 2]
	     *
	     * wrapped = wrapped.commit();
	     * console.log(array);
	     * // => [1, 2, 3]
	     *
	     * wrapped.last();
	     * // => 3
	     *
	     * console.log(array);
	     * // => [1, 2, 3]
	     */
                function wrapperCommit() {
                    return new LodashWrapper(this.value(), this.__chain__);
                }
                /**
	     * Gets the next value on a wrapped object following the
	     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
	     *
	     * @name next
	     * @memberOf _
	     * @since 4.0.0
	     * @category Seq
	     * @returns {Object} Returns the next iterator value.
	     * @example
	     *
	     * var wrapped = _([1, 2]);
	     *
	     * wrapped.next();
	     * // => { 'done': false, 'value': 1 }
	     *
	     * wrapped.next();
	     * // => { 'done': false, 'value': 2 }
	     *
	     * wrapped.next();
	     * // => { 'done': true, 'value': undefined }
	     */
                function wrapperNext() {
                    this.__values__ === undefined && (this.__values__ = toArray(this.value()));
                    var done = this.__index__ >= this.__values__.length, value = done ? undefined : this.__values__[this.__index__++];
                    return {
                        done: done,
                        value: value
                    };
                }
                /**
	     * Enables the wrapper to be iterable.
	     *
	     * @name Symbol.iterator
	     * @memberOf _
	     * @since 4.0.0
	     * @category Seq
	     * @returns {Object} Returns the wrapper object.
	     * @example
	     *
	     * var wrapped = _([1, 2]);
	     *
	     * wrapped[Symbol.iterator]() === wrapped;
	     * // => true
	     *
	     * Array.from(wrapped);
	     * // => [1, 2]
	     */
                function wrapperToIterator() {
                    return this;
                }
                /**
	     * Creates a clone of the chain sequence planting `value` as the wrapped value.
	     *
	     * @name plant
	     * @memberOf _
	     * @since 3.2.0
	     * @category Seq
	     * @param {*} value The value to plant.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var wrapped = _([1, 2]).map(square);
	     * var other = wrapped.plant([3, 4]);
	     *
	     * other.value();
	     * // => [9, 16]
	     *
	     * wrapped.value();
	     * // => [1, 4]
	     */
                function wrapperPlant(value) {
                    for (var result, parent = this; parent instanceof baseLodash; ) {
                        var clone = wrapperClone(parent);
                        clone.__index__ = 0, clone.__values__ = undefined, result ? previous.__wrapped__ = clone : result = clone;
                        var previous = clone;
                        parent = parent.__wrapped__;
                    }
                    return previous.__wrapped__ = value, result;
                }
                /**
	     * This method is the wrapper version of `_.reverse`.
	     *
	     * **Note:** This method mutates the wrapped array.
	     *
	     * @name reverse
	     * @memberOf _
	     * @since 0.1.0
	     * @category Seq
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _(array).reverse().value()
	     * // => [3, 2, 1]
	     *
	     * console.log(array);
	     * // => [3, 2, 1]
	     */
                function wrapperReverse() {
                    var value = this.__wrapped__;
                    if (value instanceof LazyWrapper) {
                        var wrapped = value;
                        return this.__actions__.length && (wrapped = new LazyWrapper(this)), wrapped = wrapped.reverse(), 
                        wrapped.__actions__.push({
                            func: thru,
                            args: [ reverse ],
                            thisArg: undefined
                        }), new LodashWrapper(wrapped, this.__chain__);
                    }
                    return this.thru(reverse);
                }
                /**
	     * Executes the chain sequence to resolve the unwrapped value.
	     *
	     * @name value
	     * @memberOf _
	     * @since 0.1.0
	     * @alias toJSON, valueOf
	     * @category Seq
	     * @returns {*} Returns the resolved unwrapped value.
	     * @example
	     *
	     * _([1, 2, 3]).value();
	     * // => [1, 2, 3]
	     */
                function wrapperValue() {
                    return baseWrapperValue(this.__wrapped__, this.__actions__);
                }
                /**
	     * Checks if `predicate` returns truthy for **all** elements of `collection`.
	     * Iteration is stopped once `predicate` returns falsey. The predicate is
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * **Note:** This method returns `true` for
	     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
	     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
	     * elements of empty collections.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.every([true, 1, null, 'yes'], Boolean);
	     * // => false
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.every(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.every(users, ['active', false]);
	     * // => true
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.every(users, 'active');
	     * // => false
	     */
                function every(collection, predicate, guard) {
                    var func = isArray(collection) ? arrayEvery : baseEvery;
                    return guard && isIterateeCall(collection, predicate, guard) && (predicate = undefined), 
                    func(collection, getIteratee(predicate, 3));
                }
                /**
	     * Iterates over elements of `collection`, returning an array of all elements
	     * `predicate` returns truthy for. The predicate is invoked with three
	     * arguments: (value, index|key, collection).
	     *
	     * **Note:** Unlike `_.remove`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     * @see _.reject
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * _.filter(users, function(o) { return !o.active; });
	     * // => objects for ['fred']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.filter(users, { 'age': 36, 'active': true });
	     * // => objects for ['barney']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.filter(users, ['active', false]);
	     * // => objects for ['fred']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.filter(users, 'active');
	     * // => objects for ['barney']
	     */
                function filter(collection, predicate) {
                    var func = isArray(collection) ? arrayFilter : baseFilter;
                    return func(collection, getIteratee(predicate, 3));
                }
                /**
	     * Creates a flattened array of values by running each element in `collection`
	     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
	     * with three arguments: (value, index|key, collection).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * function duplicate(n) {
	     *   return [n, n];
	     * }
	     *
	     * _.flatMap([1, 2], duplicate);
	     * // => [1, 1, 2, 2]
	     */
                function flatMap(collection, iteratee) {
                    return baseFlatten(map(collection, iteratee), 1);
                }
                /**
	     * This method is like `_.flatMap` except that it recursively flattens the
	     * mapped results.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * function duplicate(n) {
	     *   return [[[n, n]]];
	     * }
	     *
	     * _.flatMapDeep([1, 2], duplicate);
	     * // => [1, 1, 2, 2]
	     */
                function flatMapDeep(collection, iteratee) {
                    return baseFlatten(map(collection, iteratee), INFINITY);
                }
                /**
	     * This method is like `_.flatMap` except that it recursively flattens the
	     * mapped results up to `depth` times.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {number} [depth=1] The maximum recursion depth.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * function duplicate(n) {
	     *   return [[[n, n]]];
	     * }
	     *
	     * _.flatMapDepth([1, 2], duplicate, 2);
	     * // => [[1, 1], [2, 2]]
	     */
                function flatMapDepth(collection, iteratee, depth) {
                    return depth = depth === undefined ? 1 : toInteger(depth), baseFlatten(map(collection, iteratee), depth);
                }
                /**
	     * Iterates over elements of `collection` and invokes `iteratee` for each element.
	     * The iteratee is invoked with three arguments: (value, index|key, collection).
	     * Iteratee functions may exit iteration early by explicitly returning `false`.
	     *
	     * **Note:** As with other "Collections" methods, objects with a "length"
	     * property are iterated like arrays. To avoid this behavior use `_.forIn`
	     * or `_.forOwn` for object iteration.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @alias each
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     * @see _.forEachRight
	     * @example
	     *
	     * _.forEach([1, 2], function(value) {
	     *   console.log(value);
	     * });
	     * // => Logs `1` then `2`.
	     *
	     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	     */
                function forEach(collection, iteratee) {
                    var func = isArray(collection) ? arrayEach : baseEach;
                    return func(collection, getIteratee(iteratee, 3));
                }
                /**
	     * This method is like `_.forEach` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @alias eachRight
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     * @see _.forEach
	     * @example
	     *
	     * _.forEachRight([1, 2], function(value) {
	     *   console.log(value);
	     * });
	     * // => Logs `2` then `1`.
	     */
                function forEachRight(collection, iteratee) {
                    var func = isArray(collection) ? arrayEachRight : baseEachRight;
                    return func(collection, getIteratee(iteratee, 3));
                }
                /**
	     * Checks if `value` is in `collection`. If `collection` is a string, it's
	     * checked for a substring of `value`, otherwise
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * is used for equality comparisons. If `fromIndex` is negative, it's used as
	     * the offset from the end of `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to inspect.
	     * @param {*} value The value to search for.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
	     * @returns {boolean} Returns `true` if `value` is found, else `false`.
	     * @example
	     *
	     * _.includes([1, 2, 3], 1);
	     * // => true
	     *
	     * _.includes([1, 2, 3], 1, 2);
	     * // => false
	     *
	     * _.includes({ 'a': 1, 'b': 2 }, 1);
	     * // => true
	     *
	     * _.includes('abcd', 'bc');
	     * // => true
	     */
                function includes(collection, value, fromIndex, guard) {
                    collection = isArrayLike(collection) ? collection : values(collection), fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
                    var length = collection.length;
                    return fromIndex < 0 && (fromIndex = nativeMax(length + fromIndex, 0)), isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
                }
                /**
	     * Creates an array of values by running each element in `collection` thru
	     * `iteratee`. The iteratee is invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	     *
	     * The guarded methods are:
	     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
	     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
	     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
	     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * _.map([4, 8], square);
	     * // => [16, 64]
	     *
	     * _.map({ 'a': 4, 'b': 8 }, square);
	     * // => [16, 64] (iteration order is not guaranteed)
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.map(users, 'user');
	     * // => ['barney', 'fred']
	     */
                function map(collection, iteratee) {
                    var func = isArray(collection) ? arrayMap : baseMap;
                    return func(collection, getIteratee(iteratee, 3));
                }
                /**
	     * This method is like `_.sortBy` except that it allows specifying the sort
	     * orders of the iteratees to sort by. If `orders` is unspecified, all values
	     * are sorted in ascending order. Otherwise, specify an order of "desc" for
	     * descending or "asc" for ascending sort order of corresponding values.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
	     *  The iteratees to sort by.
	     * @param {string[]} [orders] The sort orders of `iteratees`.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 34 },
	     *   { 'user': 'fred',   'age': 40 },
	     *   { 'user': 'barney', 'age': 36 }
	     * ];
	     *
	     * // Sort by `user` in ascending order and by `age` in descending order.
	     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
	     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
	     */
                function orderBy(collection, iteratees, orders, guard) {
                    return null == collection ? [] : (isArray(iteratees) || (iteratees = null == iteratees ? [] : [ iteratees ]), 
                    orders = guard ? undefined : orders, isArray(orders) || (orders = null == orders ? [] : [ orders ]), 
                    baseOrderBy(collection, iteratees, orders));
                }
                /**
	     * Reduces `collection` to a value which is the accumulated result of running
	     * each element in `collection` thru `iteratee`, where each successive
	     * invocation is supplied the return value of the previous. If `accumulator`
	     * is not given, the first element of `collection` is used as the initial
	     * value. The iteratee is invoked with four arguments:
	     * (accumulator, value, index|key, collection).
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.reduce`, `_.reduceRight`, and `_.transform`.
	     *
	     * The guarded methods are:
	     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
	     * and `sortBy`
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @returns {*} Returns the accumulated value.
	     * @see _.reduceRight
	     * @example
	     *
	     * _.reduce([1, 2], function(sum, n) {
	     *   return sum + n;
	     * }, 0);
	     * // => 3
	     *
	     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
	     *   (result[value] || (result[value] = [])).push(key);
	     *   return result;
	     * }, {});
	     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
	     */
                function reduce(collection, iteratee, accumulator) {
                    var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
                    return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
                }
                /**
	     * This method is like `_.reduce` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @returns {*} Returns the accumulated value.
	     * @see _.reduce
	     * @example
	     *
	     * var array = [[0, 1], [2, 3], [4, 5]];
	     *
	     * _.reduceRight(array, function(flattened, other) {
	     *   return flattened.concat(other);
	     * }, []);
	     * // => [4, 5, 2, 3, 0, 1]
	     */
                function reduceRight(collection, iteratee, accumulator) {
                    var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
                    return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
                }
                /**
	     * The opposite of `_.filter`; this method returns the elements of `collection`
	     * that `predicate` does **not** return truthy for.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     * @see _.filter
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false },
	     *   { 'user': 'fred',   'age': 40, 'active': true }
	     * ];
	     *
	     * _.reject(users, function(o) { return !o.active; });
	     * // => objects for ['fred']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.reject(users, { 'age': 40, 'active': true });
	     * // => objects for ['barney']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.reject(users, ['active', false]);
	     * // => objects for ['fred']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.reject(users, 'active');
	     * // => objects for ['barney']
	     */
                function reject(collection, predicate) {
                    var func = isArray(collection) ? arrayFilter : baseFilter;
                    return func(collection, negate(getIteratee(predicate, 3)));
                }
                /**
	     * Gets a random element from `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to sample.
	     * @returns {*} Returns the random element.
	     * @example
	     *
	     * _.sample([1, 2, 3, 4]);
	     * // => 2
	     */
                function sample(collection) {
                    var func = isArray(collection) ? arraySample : baseSample;
                    return func(collection);
                }
                /**
	     * Gets `n` random elements at unique keys from `collection` up to the
	     * size of `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to sample.
	     * @param {number} [n=1] The number of elements to sample.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the random elements.
	     * @example
	     *
	     * _.sampleSize([1, 2, 3], 2);
	     * // => [3, 1]
	     *
	     * _.sampleSize([1, 2, 3], 4);
	     * // => [2, 3, 1]
	     */
                function sampleSize(collection, n, guard) {
                    n = (guard ? isIterateeCall(collection, n, guard) : n === undefined) ? 1 : toInteger(n);
                    var func = isArray(collection) ? arraySampleSize : baseSampleSize;
                    return func(collection, n);
                }
                /**
	     * Creates an array of shuffled values, using a version of the
	     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to shuffle.
	     * @returns {Array} Returns the new shuffled array.
	     * @example
	     *
	     * _.shuffle([1, 2, 3, 4]);
	     * // => [4, 1, 3, 2]
	     */
                function shuffle(collection) {
                    var func = isArray(collection) ? arrayShuffle : baseShuffle;
                    return func(collection);
                }
                /**
	     * Gets the size of `collection` by returning its length for array-like
	     * values or the number of own enumerable string keyed properties for objects.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to inspect.
	     * @returns {number} Returns the collection size.
	     * @example
	     *
	     * _.size([1, 2, 3]);
	     * // => 3
	     *
	     * _.size({ 'a': 1, 'b': 2 });
	     * // => 2
	     *
	     * _.size('pebbles');
	     * // => 7
	     */
                function size(collection) {
                    if (null == collection) return 0;
                    if (isArrayLike(collection)) return isString(collection) ? stringSize(collection) : collection.length;
                    var tag = getTag(collection);
                    return tag == mapTag || tag == setTag ? collection.size : baseKeys(collection).length;
                }
                /**
	     * Checks if `predicate` returns truthy for **any** element of `collection`.
	     * Iteration is stopped once `predicate` returns truthy. The predicate is
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.some([null, 0, 'yes', false], Boolean);
	     * // => true
	     *
	     * var users = [
	     *   { 'user': 'barney', 'active': true },
	     *   { 'user': 'fred',   'active': false }
	     * ];
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.some(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.some(users, ['active', false]);
	     * // => true
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.some(users, 'active');
	     * // => true
	     */
                function some(collection, predicate, guard) {
                    var func = isArray(collection) ? arraySome : baseSome;
                    return guard && isIterateeCall(collection, predicate, guard) && (predicate = undefined), 
                    func(collection, getIteratee(predicate, 3));
                }
                /*------------------------------------------------------------------------*/
                /**
	     * The opposite of `_.before`; this method creates a function that invokes
	     * `func` once it's called `n` or more times.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {number} n The number of calls before `func` is invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var saves = ['profile', 'settings'];
	     *
	     * var done = _.after(saves.length, function() {
	     *   console.log('done saving!');
	     * });
	     *
	     * _.forEach(saves, function(type) {
	     *   asyncSave({ 'type': type, 'complete': done });
	     * });
	     * // => Logs 'done saving!' after the two async saves have completed.
	     */
                function after(n, func) {
                    if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                    return n = toInteger(n), function() {
                        if (--n < 1) return func.apply(this, arguments);
                    };
                }
                /**
	     * Creates a function that invokes `func`, with up to `n` arguments,
	     * ignoring any additional arguments.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {Function} func The function to cap arguments for.
	     * @param {number} [n=func.length] The arity cap.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the new capped function.
	     * @example
	     *
	     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
	     * // => [6, 8, 10]
	     */
                function ary(func, n, guard) {
                    return n = guard ? undefined : n, n = func && null == n ? func.length : n, createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
                }
                /**
	     * Creates a function that invokes `func`, with the `this` binding and arguments
	     * of the created function, while it's called less than `n` times. Subsequent
	     * calls to the created function return the result of the last `func` invocation.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {number} n The number of calls at which `func` is no longer invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * jQuery(element).on('click', _.before(5, addContactToList));
	     * // => Allows adding up to 4 contacts to the list.
	     */
                function before(n, func) {
                    var result;
                    if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                    return n = toInteger(n), function() {
                        return --n > 0 && (result = func.apply(this, arguments)), n <= 1 && (func = undefined), 
                        result;
                    };
                }
                /**
	     * Creates a function that accepts arguments of `func` and either invokes
	     * `func` returning its result, if at least `arity` number of arguments have
	     * been provided, or returns a function that accepts the remaining `func`
	     * arguments, and so on. The arity of `func` may be specified if `func.length`
	     * is not sufficient.
	     *
	     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method doesn't set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curry(abc);
	     *
	     * curried(1)(2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // Curried with placeholders.
	     * curried(1)(_, 3)(2);
	     * // => [1, 2, 3]
	     */
                function curry(func, arity, guard) {
                    arity = guard ? undefined : arity;
                    var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
                    return result.placeholder = curry.placeholder, result;
                }
                /**
	     * This method is like `_.curry` except that arguments are applied to `func`
	     * in the manner of `_.partialRight` instead of `_.partial`.
	     *
	     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method doesn't set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curryRight(abc);
	     *
	     * curried(3)(2)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(2, 3)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // Curried with placeholders.
	     * curried(3)(1, _)(2);
	     * // => [1, 2, 3]
	     */
                function curryRight(func, arity, guard) {
                    arity = guard ? undefined : arity;
                    var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
                    return result.placeholder = curryRight.placeholder, result;
                }
                /**
	     * Creates a debounced function that delays invoking `func` until after `wait`
	     * milliseconds have elapsed since the last time the debounced function was
	     * invoked. The debounced function comes with a `cancel` method to cancel
	     * delayed `func` invocations and a `flush` method to immediately invoke them.
	     * Provide `options` to indicate whether `func` should be invoked on the
	     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	     * with the last arguments provided to the debounced function. Subsequent
	     * calls to the debounced function return the result of the last `func`
	     * invocation.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is
	     * invoked on the trailing edge of the timeout only if the debounced function
	     * is invoked more than once during the `wait` timeout.
	     *
	     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	     *
	     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	     * for details over the differences between `_.debounce` and `_.throttle`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to debounce.
	     * @param {number} [wait=0] The number of milliseconds to delay.
	     * @param {Object} [options={}] The options object.
	     * @param {boolean} [options.leading=false]
	     *  Specify invoking on the leading edge of the timeout.
	     * @param {number} [options.maxWait]
	     *  The maximum time `func` is allowed to be delayed before it's invoked.
	     * @param {boolean} [options.trailing=true]
	     *  Specify invoking on the trailing edge of the timeout.
	     * @returns {Function} Returns the new debounced function.
	     * @example
	     *
	     * // Avoid costly calculations while the window size is in flux.
	     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	     *
	     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	     * jQuery(element).on('click', _.debounce(sendMail, 300, {
	     *   'leading': true,
	     *   'trailing': false
	     * }));
	     *
	     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	     * var source = new EventSource('/stream');
	     * jQuery(source).on('message', debounced);
	     *
	     * // Cancel the trailing debounced invocation.
	     * jQuery(window).on('popstate', debounced.cancel);
	     */
                function debounce(func, wait, options) {
                    function invokeFunc(time) {
                        var args = lastArgs, thisArg = lastThis;
                        return lastArgs = lastThis = undefined, lastInvokeTime = time, result = func.apply(thisArg, args);
                    }
                    function leadingEdge(time) {
                        // Invoke the leading edge.
                        // Reset any `maxWait` timer.
                        // Start the timer for the trailing edge.
                        return lastInvokeTime = time, timerId = setTimeout(timerExpired, wait), leading ? invokeFunc(time) : result;
                    }
                    function remainingWait(time) {
                        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result = wait - timeSinceLastCall;
                        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
                    }
                    function shouldInvoke(time) {
                        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
                        // Either this is the first call, activity has stopped and we're at the
                        // trailing edge, the system time has gone backwards and we're treating
                        // it as the trailing edge, or we've hit the `maxWait` limit.
                        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
                    }
                    function timerExpired() {
                        var time = now();
                        // Restart the timer.
                        return shouldInvoke(time) ? trailingEdge(time) : void (timerId = setTimeout(timerExpired, remainingWait(time)));
                    }
                    function trailingEdge(time) {
                        // Only invoke if we have `lastArgs` which means `func` has been
                        // debounced at least once.
                        // Only invoke if we have `lastArgs` which means `func` has been
                        // debounced at least once.
                        return timerId = undefined, trailing && lastArgs ? invokeFunc(time) : (lastArgs = lastThis = undefined, 
                        result);
                    }
                    function cancel() {
                        timerId !== undefined && clearTimeout(timerId), lastInvokeTime = 0, lastArgs = lastCallTime = lastThis = timerId = undefined;
                    }
                    function flush() {
                        return timerId === undefined ? result : trailingEdge(now());
                    }
                    function debounced() {
                        var time = now(), isInvoking = shouldInvoke(time);
                        if (lastArgs = arguments, lastThis = this, lastCallTime = time, isInvoking) {
                            if (timerId === undefined) return leadingEdge(lastCallTime);
                            if (maxing) // Handle invocations in a tight loop.
                            return timerId = setTimeout(timerExpired, wait), invokeFunc(lastCallTime);
                        }
                        return timerId === undefined && (timerId = setTimeout(timerExpired, wait)), result;
                    }
                    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = !1, maxing = !1, trailing = !0;
                    if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                    return wait = toNumber(wait) || 0, isObject(options) && (leading = !!options.leading, 
                    maxing = "maxWait" in options, maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait, 
                    trailing = "trailing" in options ? !!options.trailing : trailing), debounced.cancel = cancel, 
                    debounced.flush = flush, debounced;
                }
                /**
	     * Creates a function that invokes `func` with arguments reversed.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Function
	     * @param {Function} func The function to flip arguments for.
	     * @returns {Function} Returns the new flipped function.
	     * @example
	     *
	     * var flipped = _.flip(function() {
	     *   return _.toArray(arguments);
	     * });
	     *
	     * flipped('a', 'b', 'c', 'd');
	     * // => ['d', 'c', 'b', 'a']
	     */
                function flip(func) {
                    return createWrap(func, WRAP_FLIP_FLAG);
                }
                /**
	     * Creates a function that memoizes the result of `func`. If `resolver` is
	     * provided, it determines the cache key for storing the result based on the
	     * arguments provided to the memoized function. By default, the first argument
	     * provided to the memoized function is used as the map cache key. The `func`
	     * is invoked with the `this` binding of the memoized function.
	     *
	     * **Note:** The cache is exposed as the `cache` property on the memoized
	     * function. Its creation may be customized by replacing the `_.memoize.Cache`
	     * constructor with one whose instances implement the
	     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to have its output memoized.
	     * @param {Function} [resolver] The function to resolve the cache key.
	     * @returns {Function} Returns the new memoized function.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2 };
	     * var other = { 'c': 3, 'd': 4 };
	     *
	     * var values = _.memoize(_.values);
	     * values(object);
	     * // => [1, 2]
	     *
	     * values(other);
	     * // => [3, 4]
	     *
	     * object.a = 2;
	     * values(object);
	     * // => [1, 2]
	     *
	     * // Modify the result cache.
	     * values.cache.set(object, ['a', 'b']);
	     * values(object);
	     * // => ['a', 'b']
	     *
	     * // Replace `_.memoize.Cache`.
	     * _.memoize.Cache = WeakMap;
	     */
                function memoize(func, resolver) {
                    if ("function" != typeof func || null != resolver && "function" != typeof resolver) throw new TypeError(FUNC_ERROR_TEXT);
                    var memoized = function() {
                        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
                        if (cache.has(key)) return cache.get(key);
                        var result = func.apply(this, args);
                        return memoized.cache = cache.set(key, result) || cache, result;
                    };
                    return memoized.cache = new (memoize.Cache || MapCache)(), memoized;
                }
                /**
	     * Creates a function that negates the result of the predicate `func`. The
	     * `func` predicate is invoked with the `this` binding and arguments of the
	     * created function.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {Function} predicate The predicate to negate.
	     * @returns {Function} Returns the new negated function.
	     * @example
	     *
	     * function isEven(n) {
	     *   return n % 2 == 0;
	     * }
	     *
	     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
	     * // => [1, 3, 5]
	     */
                function negate(predicate) {
                    if ("function" != typeof predicate) throw new TypeError(FUNC_ERROR_TEXT);
                    return function() {
                        var args = arguments;
                        switch (args.length) {
                          case 0:
                            return !predicate.call(this);

                          case 1:
                            return !predicate.call(this, args[0]);

                          case 2:
                            return !predicate.call(this, args[0], args[1]);

                          case 3:
                            return !predicate.call(this, args[0], args[1], args[2]);
                        }
                        return !predicate.apply(this, args);
                    };
                }
                /**
	     * Creates a function that is restricted to invoking `func` once. Repeat calls
	     * to the function return the value of the first invocation. The `func` is
	     * invoked with the `this` binding and arguments of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var initialize = _.once(createApplication);
	     * initialize();
	     * initialize();
	     * // => `createApplication` is invoked once
	     */
                function once(func) {
                    return before(2, func);
                }
                /**
	     * Creates a function that invokes `func` with the `this` binding of the
	     * created function and arguments from `start` and beyond provided as
	     * an array.
	     *
	     * **Note:** This method is based on the
	     * [rest parameter](https://mdn.io/rest_parameters).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Function
	     * @param {Function} func The function to apply a rest parameter to.
	     * @param {number} [start=func.length-1] The start position of the rest parameter.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.rest(function(what, names) {
	     *   return what + ' ' + _.initial(names).join(', ') +
	     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	     * });
	     *
	     * say('hello', 'fred', 'barney', 'pebbles');
	     * // => 'hello fred, barney, & pebbles'
	     */
                function rest(func, start) {
                    if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                    return start = start === undefined ? start : toInteger(start), baseRest(func, start);
                }
                /**
	     * Creates a function that invokes `func` with the `this` binding of the
	     * create function and an array of arguments much like
	     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
	     *
	     * **Note:** This method is based on the
	     * [spread operator](https://mdn.io/spread_operator).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.2.0
	     * @category Function
	     * @param {Function} func The function to spread arguments over.
	     * @param {number} [start=0] The start position of the spread.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.spread(function(who, what) {
	     *   return who + ' says ' + what;
	     * });
	     *
	     * say(['fred', 'hello']);
	     * // => 'fred says hello'
	     *
	     * var numbers = Promise.all([
	     *   Promise.resolve(40),
	     *   Promise.resolve(36)
	     * ]);
	     *
	     * numbers.then(_.spread(function(x, y) {
	     *   return x + y;
	     * }));
	     * // => a Promise of 76
	     */
                function spread(func, start) {
                    if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                    return start = null == start ? 0 : nativeMax(toInteger(start), 0), baseRest(function(args) {
                        var array = args[start], otherArgs = castSlice(args, 0, start);
                        return array && arrayPush(otherArgs, array), apply(func, this, otherArgs);
                    });
                }
                /**
	     * Creates a throttled function that only invokes `func` at most once per
	     * every `wait` milliseconds. The throttled function comes with a `cancel`
	     * method to cancel delayed `func` invocations and a `flush` method to
	     * immediately invoke them. Provide `options` to indicate whether `func`
	     * should be invoked on the leading and/or trailing edge of the `wait`
	     * timeout. The `func` is invoked with the last arguments provided to the
	     * throttled function. Subsequent calls to the throttled function return the
	     * result of the last `func` invocation.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is
	     * invoked on the trailing edge of the timeout only if the throttled function
	     * is invoked more than once during the `wait` timeout.
	     *
	     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	     *
	     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	     * for details over the differences between `_.throttle` and `_.debounce`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to throttle.
	     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	     * @param {Object} [options={}] The options object.
	     * @param {boolean} [options.leading=true]
	     *  Specify invoking on the leading edge of the timeout.
	     * @param {boolean} [options.trailing=true]
	     *  Specify invoking on the trailing edge of the timeout.
	     * @returns {Function} Returns the new throttled function.
	     * @example
	     *
	     * // Avoid excessively updating the position while scrolling.
	     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	     *
	     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	     * jQuery(element).on('click', throttled);
	     *
	     * // Cancel the trailing throttled invocation.
	     * jQuery(window).on('popstate', throttled.cancel);
	     */
                function throttle(func, wait, options) {
                    var leading = !0, trailing = !0;
                    if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                    return isObject(options) && (leading = "leading" in options ? !!options.leading : leading, 
                    trailing = "trailing" in options ? !!options.trailing : trailing), debounce(func, wait, {
                        leading: leading,
                        maxWait: wait,
                        trailing: trailing
                    });
                }
                /**
	     * Creates a function that accepts up to one argument, ignoring any
	     * additional arguments.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Function
	     * @param {Function} func The function to cap arguments for.
	     * @returns {Function} Returns the new capped function.
	     * @example
	     *
	     * _.map(['6', '8', '10'], _.unary(parseInt));
	     * // => [6, 8, 10]
	     */
                function unary(func) {
                    return ary(func, 1);
                }
                /**
	     * Creates a function that provides `value` to `wrapper` as its first
	     * argument. Any additional arguments provided to the function are appended
	     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
	     * binding of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {*} value The value to wrap.
	     * @param {Function} [wrapper=identity] The wrapper function.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var p = _.wrap(_.escape, function(func, text) {
	     *   return '<p>' + func(text) + '</p>';
	     * });
	     *
	     * p('fred, barney, & pebbles');
	     * // => '<p>fred, barney, &amp; pebbles</p>'
	     */
                function wrap(value, wrapper) {
                    return partial(castFunction(wrapper), value);
                }
                /*------------------------------------------------------------------------*/
                /**
	     * Casts `value` as an array if it's not one.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.4.0
	     * @category Lang
	     * @param {*} value The value to inspect.
	     * @returns {Array} Returns the cast array.
	     * @example
	     *
	     * _.castArray(1);
	     * // => [1]
	     *
	     * _.castArray({ 'a': 1 });
	     * // => [{ 'a': 1 }]
	     *
	     * _.castArray('abc');
	     * // => ['abc']
	     *
	     * _.castArray(null);
	     * // => [null]
	     *
	     * _.castArray(undefined);
	     * // => [undefined]
	     *
	     * _.castArray();
	     * // => []
	     *
	     * var array = [1, 2, 3];
	     * console.log(_.castArray(array) === array);
	     * // => true
	     */
                function castArray() {
                    if (!arguments.length) return [];
                    var value = arguments[0];
                    return isArray(value) ? value : [ value ];
                }
                /**
	     * Creates a shallow clone of `value`.
	     *
	     * **Note:** This method is loosely based on the
	     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
	     * and supports cloning arrays, array buffers, booleans, date objects, maps,
	     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
	     * arrays. The own enumerable properties of `arguments` objects are cloned
	     * as plain objects. An empty object is returned for uncloneable values such
	     * as error objects, functions, DOM nodes, and WeakMaps.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to clone.
	     * @returns {*} Returns the cloned value.
	     * @see _.cloneDeep
	     * @example
	     *
	     * var objects = [{ 'a': 1 }, { 'b': 2 }];
	     *
	     * var shallow = _.clone(objects);
	     * console.log(shallow[0] === objects[0]);
	     * // => true
	     */
                function clone(value) {
                    return baseClone(value, CLONE_SYMBOLS_FLAG);
                }
                /**
	     * This method is like `_.clone` except that it accepts `customizer` which
	     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
	     * cloning is handled by the method instead. The `customizer` is invoked with
	     * up to four arguments; (value [, index|key, object, stack]).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to clone.
	     * @param {Function} [customizer] The function to customize cloning.
	     * @returns {*} Returns the cloned value.
	     * @see _.cloneDeepWith
	     * @example
	     *
	     * function customizer(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(false);
	     *   }
	     * }
	     *
	     * var el = _.cloneWith(document.body, customizer);
	     *
	     * console.log(el === document.body);
	     * // => false
	     * console.log(el.nodeName);
	     * // => 'BODY'
	     * console.log(el.childNodes.length);
	     * // => 0
	     */
                function cloneWith(value, customizer) {
                    return customizer = "function" == typeof customizer ? customizer : undefined, baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
                }
                /**
	     * This method is like `_.clone` except that it recursively clones `value`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.0.0
	     * @category Lang
	     * @param {*} value The value to recursively clone.
	     * @returns {*} Returns the deep cloned value.
	     * @see _.clone
	     * @example
	     *
	     * var objects = [{ 'a': 1 }, { 'b': 2 }];
	     *
	     * var deep = _.cloneDeep(objects);
	     * console.log(deep[0] === objects[0]);
	     * // => false
	     */
                function cloneDeep(value) {
                    return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
                }
                /**
	     * This method is like `_.cloneWith` except that it recursively clones `value`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to recursively clone.
	     * @param {Function} [customizer] The function to customize cloning.
	     * @returns {*} Returns the deep cloned value.
	     * @see _.cloneWith
	     * @example
	     *
	     * function customizer(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(true);
	     *   }
	     * }
	     *
	     * var el = _.cloneDeepWith(document.body, customizer);
	     *
	     * console.log(el === document.body);
	     * // => false
	     * console.log(el.nodeName);
	     * // => 'BODY'
	     * console.log(el.childNodes.length);
	     * // => 20
	     */
                function cloneDeepWith(value, customizer) {
                    return customizer = "function" == typeof customizer ? customizer : undefined, baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
                }
                /**
	     * Checks if `object` conforms to `source` by invoking the predicate
	     * properties of `source` with the corresponding property values of `object`.
	     *
	     * **Note:** This method is equivalent to `_.conforms` when `source` is
	     * partially applied.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.14.0
	     * @category Lang
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property predicates to conform to.
	     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2 };
	     *
	     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
	     * // => true
	     *
	     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
	     * // => false
	     */
                function conformsTo(object, source) {
                    return null == source || baseConformsTo(object, source, keys(source));
                }
                /**
	     * Performs a
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * comparison between two values to determine if they are equivalent.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     * @example
	     *
	     * var object = { 'a': 1 };
	     * var other = { 'a': 1 };
	     *
	     * _.eq(object, object);
	     * // => true
	     *
	     * _.eq(object, other);
	     * // => false
	     *
	     * _.eq('a', 'a');
	     * // => true
	     *
	     * _.eq('a', Object('a'));
	     * // => false
	     *
	     * _.eq(NaN, NaN);
	     * // => true
	     */
                function eq(value, other) {
                    return value === other || value !== value && other !== other;
                }
                /**
	     * Checks if `value` is array-like. A value is considered array-like if it's
	     * not a function and has a `value.length` that's an integer greater than or
	     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	     * @example
	     *
	     * _.isArrayLike([1, 2, 3]);
	     * // => true
	     *
	     * _.isArrayLike(document.body.children);
	     * // => true
	     *
	     * _.isArrayLike('abc');
	     * // => true
	     *
	     * _.isArrayLike(_.noop);
	     * // => false
	     */
                function isArrayLike(value) {
                    return null != value && isLength(value.length) && !isFunction(value);
                }
                /**
	     * This method is like `_.isArrayLike` except that it also checks if `value`
	     * is an object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an array-like object,
	     *  else `false`.
	     * @example
	     *
	     * _.isArrayLikeObject([1, 2, 3]);
	     * // => true
	     *
	     * _.isArrayLikeObject(document.body.children);
	     * // => true
	     *
	     * _.isArrayLikeObject('abc');
	     * // => false
	     *
	     * _.isArrayLikeObject(_.noop);
	     * // => false
	     */
                function isArrayLikeObject(value) {
                    return isObjectLike(value) && isArrayLike(value);
                }
                /**
	     * Checks if `value` is classified as a boolean primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
	     * @example
	     *
	     * _.isBoolean(false);
	     * // => true
	     *
	     * _.isBoolean(null);
	     * // => false
	     */
                function isBoolean(value) {
                    return value === !0 || value === !1 || isObjectLike(value) && baseGetTag(value) == boolTag;
                }
                /**
	     * Checks if `value` is likely a DOM element.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
	     * @example
	     *
	     * _.isElement(document.body);
	     * // => true
	     *
	     * _.isElement('<body>');
	     * // => false
	     */
                function isElement(value) {
                    return isObjectLike(value) && 1 === value.nodeType && !isPlainObject(value);
                }
                /**
	     * Checks if `value` is an empty object, collection, map, or set.
	     *
	     * Objects are considered empty if they have no own enumerable string keyed
	     * properties.
	     *
	     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
	     * jQuery-like collections are considered empty if they have a `length` of `0`.
	     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	     * @example
	     *
	     * _.isEmpty(null);
	     * // => true
	     *
	     * _.isEmpty(true);
	     * // => true
	     *
	     * _.isEmpty(1);
	     * // => true
	     *
	     * _.isEmpty([1, 2, 3]);
	     * // => false
	     *
	     * _.isEmpty({ 'a': 1 });
	     * // => false
	     */
                function isEmpty(value) {
                    if (null == value) return !0;
                    if (isArrayLike(value) && (isArray(value) || "string" == typeof value || "function" == typeof value.splice || isBuffer(value) || isTypedArray(value) || isArguments(value))) return !value.length;
                    var tag = getTag(value);
                    if (tag == mapTag || tag == setTag) return !value.size;
                    if (isPrototype(value)) return !baseKeys(value).length;
                    for (var key in value) if (hasOwnProperty.call(value, key)) return !1;
                    return !0;
                }
                /**
	     * Performs a deep comparison between two values to determine if they are
	     * equivalent.
	     *
	     * **Note:** This method supports comparing arrays, array buffers, booleans,
	     * date objects, error objects, maps, numbers, `Object` objects, regexes,
	     * sets, strings, symbols, and typed arrays. `Object` objects are compared
	     * by their own, not inherited, enumerable properties. Functions and DOM
	     * nodes are compared by strict equality, i.e. `===`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     * @example
	     *
	     * var object = { 'a': 1 };
	     * var other = { 'a': 1 };
	     *
	     * _.isEqual(object, other);
	     * // => true
	     *
	     * object === other;
	     * // => false
	     */
                function isEqual(value, other) {
                    return baseIsEqual(value, other);
                }
                /**
	     * This method is like `_.isEqual` except that it accepts `customizer` which
	     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
	     * are handled by the method instead. The `customizer` is invoked with up to
	     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     * @example
	     *
	     * function isGreeting(value) {
	     *   return /^h(?:i|ello)$/.test(value);
	     * }
	     *
	     * function customizer(objValue, othValue) {
	     *   if (isGreeting(objValue) && isGreeting(othValue)) {
	     *     return true;
	     *   }
	     * }
	     *
	     * var array = ['hello', 'goodbye'];
	     * var other = ['hi', 'goodbye'];
	     *
	     * _.isEqualWith(array, other, customizer);
	     * // => true
	     */
                function isEqualWith(value, other, customizer) {
                    customizer = "function" == typeof customizer ? customizer : undefined;
                    var result = customizer ? customizer(value, other) : undefined;
                    return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
                }
                /**
	     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
	     * `SyntaxError`, `TypeError`, or `URIError` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
	     * @example
	     *
	     * _.isError(new Error);
	     * // => true
	     *
	     * _.isError(Error);
	     * // => false
	     */
                function isError(value) {
                    if (!isObjectLike(value)) return !1;
                    var tag = baseGetTag(value);
                    return tag == errorTag || tag == domExcTag || "string" == typeof value.message && "string" == typeof value.name && !isPlainObject(value);
                }
                /**
	     * Checks if `value` is a finite primitive number.
	     *
	     * **Note:** This method is based on
	     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
	     * @example
	     *
	     * _.isFinite(3);
	     * // => true
	     *
	     * _.isFinite(Number.MIN_VALUE);
	     * // => true
	     *
	     * _.isFinite(Infinity);
	     * // => false
	     *
	     * _.isFinite('3');
	     * // => false
	     */
                function isFinite(value) {
                    return "number" == typeof value && nativeIsFinite(value);
                }
                /**
	     * Checks if `value` is classified as a `Function` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	     * @example
	     *
	     * _.isFunction(_);
	     * // => true
	     *
	     * _.isFunction(/abc/);
	     * // => false
	     */
                function isFunction(value) {
                    if (!isObject(value)) return !1;
                    // The use of `Object#toString` avoids issues with the `typeof` operator
                    // in Safari 9 which returns 'object' for typed arrays and other constructors.
                    var tag = baseGetTag(value);
                    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
                }
                /**
	     * Checks if `value` is an integer.
	     *
	     * **Note:** This method is based on
	     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
	     * @example
	     *
	     * _.isInteger(3);
	     * // => true
	     *
	     * _.isInteger(Number.MIN_VALUE);
	     * // => false
	     *
	     * _.isInteger(Infinity);
	     * // => false
	     *
	     * _.isInteger('3');
	     * // => false
	     */
                function isInteger(value) {
                    return "number" == typeof value && value == toInteger(value);
                }
                /**
	     * Checks if `value` is a valid array-like length.
	     *
	     * **Note:** This method is loosely based on
	     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	     * @example
	     *
	     * _.isLength(3);
	     * // => true
	     *
	     * _.isLength(Number.MIN_VALUE);
	     * // => false
	     *
	     * _.isLength(Infinity);
	     * // => false
	     *
	     * _.isLength('3');
	     * // => false
	     */
                function isLength(value) {
                    return "number" == typeof value && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
                }
                /**
	     * Checks if `value` is the
	     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	     * @example
	     *
	     * _.isObject({});
	     * // => true
	     *
	     * _.isObject([1, 2, 3]);
	     * // => true
	     *
	     * _.isObject(_.noop);
	     * // => true
	     *
	     * _.isObject(null);
	     * // => false
	     */
                function isObject(value) {
                    var type = typeof value;
                    return null != value && ("object" == type || "function" == type);
                }
                /**
	     * Checks if `value` is object-like. A value is object-like if it's not `null`
	     * and has a `typeof` result of "object".
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	     * @example
	     *
	     * _.isObjectLike({});
	     * // => true
	     *
	     * _.isObjectLike([1, 2, 3]);
	     * // => true
	     *
	     * _.isObjectLike(_.noop);
	     * // => false
	     *
	     * _.isObjectLike(null);
	     * // => false
	     */
                function isObjectLike(value) {
                    return null != value && "object" == typeof value;
                }
                /**
	     * Performs a partial deep comparison between `object` and `source` to
	     * determine if `object` contains equivalent property values.
	     *
	     * **Note:** This method is equivalent to `_.matches` when `source` is
	     * partially applied.
	     *
	     * Partial comparisons will match empty array and empty object `source`
	     * values against any array or object value, respectively. See `_.isEqual`
	     * for a list of supported value comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2 };
	     *
	     * _.isMatch(object, { 'b': 2 });
	     * // => true
	     *
	     * _.isMatch(object, { 'b': 1 });
	     * // => false
	     */
                function isMatch(object, source) {
                    return object === source || baseIsMatch(object, source, getMatchData(source));
                }
                /**
	     * This method is like `_.isMatch` except that it accepts `customizer` which
	     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
	     * are handled by the method instead. The `customizer` is invoked with five
	     * arguments: (objValue, srcValue, index|key, object, source).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     * @example
	     *
	     * function isGreeting(value) {
	     *   return /^h(?:i|ello)$/.test(value);
	     * }
	     *
	     * function customizer(objValue, srcValue) {
	     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
	     *     return true;
	     *   }
	     * }
	     *
	     * var object = { 'greeting': 'hello' };
	     * var source = { 'greeting': 'hi' };
	     *
	     * _.isMatchWith(object, source, customizer);
	     * // => true
	     */
                function isMatchWith(object, source, customizer) {
                    return customizer = "function" == typeof customizer ? customizer : undefined, baseIsMatch(object, source, getMatchData(source), customizer);
                }
                /**
	     * Checks if `value` is `NaN`.
	     *
	     * **Note:** This method is based on
	     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
	     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
	     * `undefined` and other non-number values.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	     * @example
	     *
	     * _.isNaN(NaN);
	     * // => true
	     *
	     * _.isNaN(new Number(NaN));
	     * // => true
	     *
	     * isNaN(undefined);
	     * // => true
	     *
	     * _.isNaN(undefined);
	     * // => false
	     */
                function isNaN(value) {
                    // An `NaN` primitive is the only value that is not equal to itself.
                    // Perform the `toStringTag` check first to avoid errors with some
                    // ActiveX objects in IE.
                    return isNumber(value) && value != +value;
                }
                /**
	     * Checks if `value` is a pristine native function.
	     *
	     * **Note:** This method can't reliably detect native functions in the presence
	     * of the core-js package because core-js circumvents this kind of detection.
	     * Despite multiple requests, the core-js maintainer has made it clear: any
	     * attempt to fix the detection will be obstructed. As a result, we're left
	     * with little choice but to throw an error. Unfortunately, this also affects
	     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
	     * which rely on core-js.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a native function,
	     *  else `false`.
	     * @example
	     *
	     * _.isNative(Array.prototype.push);
	     * // => true
	     *
	     * _.isNative(_);
	     * // => false
	     */
                function isNative(value) {
                    if (isMaskable(value)) throw new Error(CORE_ERROR_TEXT);
                    return baseIsNative(value);
                }
                /**
	     * Checks if `value` is `null`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
	     * @example
	     *
	     * _.isNull(null);
	     * // => true
	     *
	     * _.isNull(void 0);
	     * // => false
	     */
                function isNull(value) {
                    return null === value;
                }
                /**
	     * Checks if `value` is `null` or `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
	     * @example
	     *
	     * _.isNil(null);
	     * // => true
	     *
	     * _.isNil(void 0);
	     * // => true
	     *
	     * _.isNil(NaN);
	     * // => false
	     */
                function isNil(value) {
                    return null == value;
                }
                /**
	     * Checks if `value` is classified as a `Number` primitive or object.
	     *
	     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
	     * classified as numbers, use the `_.isFinite` method.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
	     * @example
	     *
	     * _.isNumber(3);
	     * // => true
	     *
	     * _.isNumber(Number.MIN_VALUE);
	     * // => true
	     *
	     * _.isNumber(Infinity);
	     * // => true
	     *
	     * _.isNumber('3');
	     * // => false
	     */
                function isNumber(value) {
                    return "number" == typeof value || isObjectLike(value) && baseGetTag(value) == numberTag;
                }
                /**
	     * Checks if `value` is a plain object, that is, an object created by the
	     * `Object` constructor or one with a `[[Prototype]]` of `null`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.8.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     * }
	     *
	     * _.isPlainObject(new Foo);
	     * // => false
	     *
	     * _.isPlainObject([1, 2, 3]);
	     * // => false
	     *
	     * _.isPlainObject({ 'x': 0, 'y': 0 });
	     * // => true
	     *
	     * _.isPlainObject(Object.create(null));
	     * // => true
	     */
                function isPlainObject(value) {
                    if (!isObjectLike(value) || baseGetTag(value) != objectTag) return !1;
                    var proto = getPrototype(value);
                    if (null === proto) return !0;
                    var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
                    return "function" == typeof Ctor && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
                }
                /**
	     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
	     * double precision number which isn't the result of a rounded unsafe integer.
	     *
	     * **Note:** This method is based on
	     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
	     * @example
	     *
	     * _.isSafeInteger(3);
	     * // => true
	     *
	     * _.isSafeInteger(Number.MIN_VALUE);
	     * // => false
	     *
	     * _.isSafeInteger(Infinity);
	     * // => false
	     *
	     * _.isSafeInteger('3');
	     * // => false
	     */
                function isSafeInteger(value) {
                    return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
                }
                /**
	     * Checks if `value` is classified as a `String` primitive or object.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	     * @example
	     *
	     * _.isString('abc');
	     * // => true
	     *
	     * _.isString(1);
	     * // => false
	     */
                function isString(value) {
                    return "string" == typeof value || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
                }
                /**
	     * Checks if `value` is classified as a `Symbol` primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	     * @example
	     *
	     * _.isSymbol(Symbol.iterator);
	     * // => true
	     *
	     * _.isSymbol('abc');
	     * // => false
	     */
                function isSymbol(value) {
                    return "symbol" == typeof value || isObjectLike(value) && baseGetTag(value) == symbolTag;
                }
                /**
	     * Checks if `value` is `undefined`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	     * @example
	     *
	     * _.isUndefined(void 0);
	     * // => true
	     *
	     * _.isUndefined(null);
	     * // => false
	     */
                function isUndefined(value) {
                    return value === undefined;
                }
                /**
	     * Checks if `value` is classified as a `WeakMap` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
	     * @example
	     *
	     * _.isWeakMap(new WeakMap);
	     * // => true
	     *
	     * _.isWeakMap(new Map);
	     * // => false
	     */
                function isWeakMap(value) {
                    return isObjectLike(value) && getTag(value) == weakMapTag;
                }
                /**
	     * Checks if `value` is classified as a `WeakSet` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
	     * @example
	     *
	     * _.isWeakSet(new WeakSet);
	     * // => true
	     *
	     * _.isWeakSet(new Set);
	     * // => false
	     */
                function isWeakSet(value) {
                    return isObjectLike(value) && baseGetTag(value) == weakSetTag;
                }
                /**
	     * Converts `value` to an array.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Array} Returns the converted array.
	     * @example
	     *
	     * _.toArray({ 'a': 1, 'b': 2 });
	     * // => [1, 2]
	     *
	     * _.toArray('abc');
	     * // => ['a', 'b', 'c']
	     *
	     * _.toArray(1);
	     * // => []
	     *
	     * _.toArray(null);
	     * // => []
	     */
                function toArray(value) {
                    if (!value) return [];
                    if (isArrayLike(value)) return isString(value) ? stringToArray(value) : copyArray(value);
                    if (symIterator && value[symIterator]) return iteratorToArray(value[symIterator]());
                    var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
                    return func(value);
                }
                /**
	     * Converts `value` to a finite number.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.12.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {number} Returns the converted number.
	     * @example
	     *
	     * _.toFinite(3.2);
	     * // => 3.2
	     *
	     * _.toFinite(Number.MIN_VALUE);
	     * // => 5e-324
	     *
	     * _.toFinite(Infinity);
	     * // => 1.7976931348623157e+308
	     *
	     * _.toFinite('3.2');
	     * // => 3.2
	     */
                function toFinite(value) {
                    if (!value) return 0 === value ? value : 0;
                    if (value = toNumber(value), value === INFINITY || value === -INFINITY) {
                        var sign = value < 0 ? -1 : 1;
                        return sign * MAX_INTEGER;
                    }
                    return value === value ? value : 0;
                }
                /**
	     * Converts `value` to an integer.
	     *
	     * **Note:** This method is loosely based on
	     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.toInteger(3.2);
	     * // => 3
	     *
	     * _.toInteger(Number.MIN_VALUE);
	     * // => 0
	     *
	     * _.toInteger(Infinity);
	     * // => 1.7976931348623157e+308
	     *
	     * _.toInteger('3.2');
	     * // => 3
	     */
                function toInteger(value) {
                    var result = toFinite(value), remainder = result % 1;
                    return result === result ? remainder ? result - remainder : result : 0;
                }
                /**
	     * Converts `value` to an integer suitable for use as the length of an
	     * array-like object.
	     *
	     * **Note:** This method is based on
	     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.toLength(3.2);
	     * // => 3
	     *
	     * _.toLength(Number.MIN_VALUE);
	     * // => 0
	     *
	     * _.toLength(Infinity);
	     * // => 4294967295
	     *
	     * _.toLength('3.2');
	     * // => 3
	     */
                function toLength(value) {
                    return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
                }
                /**
	     * Converts `value` to a number.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to process.
	     * @returns {number} Returns the number.
	     * @example
	     *
	     * _.toNumber(3.2);
	     * // => 3.2
	     *
	     * _.toNumber(Number.MIN_VALUE);
	     * // => 5e-324
	     *
	     * _.toNumber(Infinity);
	     * // => Infinity
	     *
	     * _.toNumber('3.2');
	     * // => 3.2
	     */
                function toNumber(value) {
                    if ("number" == typeof value) return value;
                    if (isSymbol(value)) return NAN;
                    if (isObject(value)) {
                        var other = "function" == typeof value.valueOf ? value.valueOf() : value;
                        value = isObject(other) ? other + "" : other;
                    }
                    if ("string" != typeof value) return 0 === value ? value : +value;
                    value = value.replace(reTrim, "");
                    var isBinary = reIsBinary.test(value);
                    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
                }
                /**
	     * Converts `value` to a plain object flattening inherited enumerable string
	     * keyed properties of `value` to own properties of the plain object.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Object} Returns the converted plain object.
	     * @example
	     *
	     * function Foo() {
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.assign({ 'a': 1 }, new Foo);
	     * // => { 'a': 1, 'b': 2 }
	     *
	     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	     * // => { 'a': 1, 'b': 2, 'c': 3 }
	     */
                function toPlainObject(value) {
                    return copyObject(value, keysIn(value));
                }
                /**
	     * Converts `value` to a safe integer. A safe integer can be compared and
	     * represented correctly.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.toSafeInteger(3.2);
	     * // => 3
	     *
	     * _.toSafeInteger(Number.MIN_VALUE);
	     * // => 0
	     *
	     * _.toSafeInteger(Infinity);
	     * // => 9007199254740991
	     *
	     * _.toSafeInteger('3.2');
	     * // => 3
	     */
                function toSafeInteger(value) {
                    return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : 0 === value ? value : 0;
                }
                /**
	     * Converts `value` to a string. An empty string is returned for `null`
	     * and `undefined` values. The sign of `-0` is preserved.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {string} Returns the converted string.
	     * @example
	     *
	     * _.toString(null);
	     * // => ''
	     *
	     * _.toString(-0);
	     * // => '-0'
	     *
	     * _.toString([1, 2, 3]);
	     * // => '1,2,3'
	     */
                function toString(value) {
                    return null == value ? "" : baseToString(value);
                }
                /**
	     * Creates an object that inherits from the `prototype` object. If a
	     * `properties` object is given, its own enumerable string keyed properties
	     * are assigned to the created object.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.3.0
	     * @category Object
	     * @param {Object} prototype The object to inherit from.
	     * @param {Object} [properties] The properties to assign to the object.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * function Shape() {
	     *   this.x = 0;
	     *   this.y = 0;
	     * }
	     *
	     * function Circle() {
	     *   Shape.call(this);
	     * }
	     *
	     * Circle.prototype = _.create(Shape.prototype, {
	     *   'constructor': Circle
	     * });
	     *
	     * var circle = new Circle;
	     * circle instanceof Circle;
	     * // => true
	     *
	     * circle instanceof Shape;
	     * // => true
	     */
                function create(prototype, properties) {
                    var result = baseCreate(prototype);
                    return null == properties ? result : baseAssign(result, properties);
                }
                /**
	     * This method is like `_.find` except that it returns the key of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.1.0
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {string|undefined} Returns the key of the matched element,
	     *  else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findKey(users, function(o) { return o.age < 40; });
	     * // => 'barney' (iteration order is not guaranteed)
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findKey(users, { 'age': 1, 'active': true });
	     * // => 'pebbles'
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findKey(users, ['active', false]);
	     * // => 'fred'
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findKey(users, 'active');
	     * // => 'barney'
	     */
                function findKey(object, predicate) {
                    return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
                }
                /**
	     * This method is like `_.findKey` except that it iterates over elements of
	     * a collection in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {string|undefined} Returns the key of the matched element,
	     *  else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findLastKey(users, function(o) { return o.age < 40; });
	     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findLastKey(users, { 'age': 36, 'active': true });
	     * // => 'barney'
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findLastKey(users, ['active', false]);
	     * // => 'fred'
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findLastKey(users, 'active');
	     * // => 'pebbles'
	     */
                function findLastKey(object, predicate) {
                    return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
                }
                /**
	     * Iterates over own and inherited enumerable string keyed properties of an
	     * object and invokes `iteratee` for each property. The iteratee is invoked
	     * with three arguments: (value, key, object). Iteratee functions may exit
	     * iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.3.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     * @see _.forInRight
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forIn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
	     */
                function forIn(object, iteratee) {
                    return null == object ? object : baseFor(object, getIteratee(iteratee, 3), keysIn);
                }
                /**
	     * This method is like `_.forIn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     * @see _.forIn
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forInRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
	     */
                function forInRight(object, iteratee) {
                    return null == object ? object : baseForRight(object, getIteratee(iteratee, 3), keysIn);
                }
                /**
	     * Iterates over own enumerable string keyed properties of an object and
	     * invokes `iteratee` for each property. The iteratee is invoked with three
	     * arguments: (value, key, object). Iteratee functions may exit iteration
	     * early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.3.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     * @see _.forOwnRight
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	     */
                function forOwn(object, iteratee) {
                    return object && baseForOwn(object, getIteratee(iteratee, 3));
                }
                /**
	     * This method is like `_.forOwn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     * @see _.forOwn
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwnRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
	     */
                function forOwnRight(object, iteratee) {
                    return object && baseForOwnRight(object, getIteratee(iteratee, 3));
                }
                /**
	     * Creates an array of function property names from own enumerable properties
	     * of `object`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @returns {Array} Returns the function names.
	     * @see _.functionsIn
	     * @example
	     *
	     * function Foo() {
	     *   this.a = _.constant('a');
	     *   this.b = _.constant('b');
	     * }
	     *
	     * Foo.prototype.c = _.constant('c');
	     *
	     * _.functions(new Foo);
	     * // => ['a', 'b']
	     */
                function functions(object) {
                    return null == object ? [] : baseFunctions(object, keys(object));
                }
                /**
	     * Creates an array of function property names from own and inherited
	     * enumerable properties of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @returns {Array} Returns the function names.
	     * @see _.functions
	     * @example
	     *
	     * function Foo() {
	     *   this.a = _.constant('a');
	     *   this.b = _.constant('b');
	     * }
	     *
	     * Foo.prototype.c = _.constant('c');
	     *
	     * _.functionsIn(new Foo);
	     * // => ['a', 'b', 'c']
	     */
                function functionsIn(object) {
                    return null == object ? [] : baseFunctions(object, keysIn(object));
                }
                /**
	     * Gets the value at `path` of `object`. If the resolved value is
	     * `undefined`, the `defaultValue` is returned in its place.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.7.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.get(object, 'a[0].b.c');
	     * // => 3
	     *
	     * _.get(object, ['a', '0', 'b', 'c']);
	     * // => 3
	     *
	     * _.get(object, 'a.b.c', 'default');
	     * // => 'default'
	     */
                function get(object, path, defaultValue) {
                    var result = null == object ? undefined : baseGet(object, path);
                    return result === undefined ? defaultValue : result;
                }
                /**
	     * Checks if `path` is a direct property of `object`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @returns {boolean} Returns `true` if `path` exists, else `false`.
	     * @example
	     *
	     * var object = { 'a': { 'b': 2 } };
	     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
	     *
	     * _.has(object, 'a');
	     * // => true
	     *
	     * _.has(object, 'a.b');
	     * // => true
	     *
	     * _.has(object, ['a', 'b']);
	     * // => true
	     *
	     * _.has(other, 'a');
	     * // => false
	     */
                function has(object, path) {
                    return null != object && hasPath(object, path, baseHas);
                }
                /**
	     * Checks if `path` is a direct or inherited property of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @returns {boolean} Returns `true` if `path` exists, else `false`.
	     * @example
	     *
	     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	     *
	     * _.hasIn(object, 'a');
	     * // => true
	     *
	     * _.hasIn(object, 'a.b');
	     * // => true
	     *
	     * _.hasIn(object, ['a', 'b']);
	     * // => true
	     *
	     * _.hasIn(object, 'b');
	     * // => false
	     */
                function hasIn(object, path) {
                    return null != object && hasPath(object, path, baseHasIn);
                }
                /**
	     * Creates an array of the own enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects. See the
	     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	     * for more details.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keys(new Foo);
	     * // => ['a', 'b'] (iteration order is not guaranteed)
	     *
	     * _.keys('hi');
	     * // => ['0', '1']
	     */
                function keys(object) {
                    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
                }
                /**
	     * Creates an array of the own and inherited enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keysIn(new Foo);
	     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	     */
                function keysIn(object) {
                    return isArrayLike(object) ? arrayLikeKeys(object, !0) : baseKeysIn(object);
                }
                /**
	     * The opposite of `_.mapValues`; this method creates an object with the
	     * same values as `object` and keys generated by running each own enumerable
	     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
	     * with three arguments: (value, key, object).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.8.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns the new mapped object.
	     * @see _.mapValues
	     * @example
	     *
	     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
	     *   return key + value;
	     * });
	     * // => { 'a1': 1, 'b2': 2 }
	     */
                function mapKeys(object, iteratee) {
                    var result = {};
                    return iteratee = getIteratee(iteratee, 3), baseForOwn(object, function(value, key, object) {
                        baseAssignValue(result, iteratee(value, key, object), value);
                    }), result;
                }
                /**
	     * Creates an object with the same keys as `object` and values generated
	     * by running each own enumerable string keyed property of `object` thru
	     * `iteratee`. The iteratee is invoked with three arguments:
	     * (value, key, object).
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns the new mapped object.
	     * @see _.mapKeys
	     * @example
	     *
	     * var users = {
	     *   'fred':    { 'user': 'fred',    'age': 40 },
	     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	     * };
	     *
	     * _.mapValues(users, function(o) { return o.age; });
	     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.mapValues(users, 'age');
	     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	     */
                function mapValues(object, iteratee) {
                    var result = {};
                    return iteratee = getIteratee(iteratee, 3), baseForOwn(object, function(value, key, object) {
                        baseAssignValue(result, key, iteratee(value, key, object));
                    }), result;
                }
                /**
	     * The opposite of `_.pickBy`; this method creates an object composed of
	     * the own and inherited enumerable string keyed properties of `object` that
	     * `predicate` doesn't return truthy for. The predicate is invoked with two
	     * arguments: (value, key).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function} [predicate=_.identity] The function invoked per property.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': '2', 'c': 3 };
	     *
	     * _.omitBy(object, _.isNumber);
	     * // => { 'b': '2' }
	     */
                function omitBy(object, predicate) {
                    return pickBy(object, negate(getIteratee(predicate)));
                }
                /**
	     * Creates an object composed of the `object` properties `predicate` returns
	     * truthy for. The predicate is invoked with two arguments: (value, key).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function} [predicate=_.identity] The function invoked per property.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': '2', 'c': 3 };
	     *
	     * _.pickBy(object, _.isNumber);
	     * // => { 'a': 1, 'c': 3 }
	     */
                function pickBy(object, predicate) {
                    if (null == object) return {};
                    var props = arrayMap(getAllKeysIn(object), function(prop) {
                        return [ prop ];
                    });
                    return predicate = getIteratee(predicate), basePickBy(object, props, function(value, path) {
                        return predicate(value, path[0]);
                    });
                }
                /**
	     * This method is like `_.get` except that if the resolved value is a
	     * function it's invoked with the `this` binding of its parent object and
	     * its result is returned.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to resolve.
	     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
	     *
	     * _.result(object, 'a[0].b.c1');
	     * // => 3
	     *
	     * _.result(object, 'a[0].b.c2');
	     * // => 4
	     *
	     * _.result(object, 'a[0].b.c3', 'default');
	     * // => 'default'
	     *
	     * _.result(object, 'a[0].b.c3', _.constant('default'));
	     * // => 'default'
	     */
                function result(object, path, defaultValue) {
                    path = castPath(path, object);
                    var index = -1, length = path.length;
                    for (// Ensure the loop is entered when path is empty.
                    length || (length = 1, object = undefined); ++index < length; ) {
                        var value = null == object ? undefined : object[toKey(path[index])];
                        value === undefined && (index = length, value = defaultValue), object = isFunction(value) ? value.call(object) : value;
                    }
                    return object;
                }
                /**
	     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
	     * it's created. Arrays are created for missing index properties while objects
	     * are created for all other missing properties. Use `_.setWith` to customize
	     * `path` creation.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.7.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.set(object, 'a[0].b.c', 4);
	     * console.log(object.a[0].b.c);
	     * // => 4
	     *
	     * _.set(object, ['x', '0', 'y', 'z'], 5);
	     * console.log(object.x[0].y.z);
	     * // => 5
	     */
                function set(object, path, value) {
                    return null == object ? object : baseSet(object, path, value);
                }
                /**
	     * This method is like `_.set` except that it accepts `customizer` which is
	     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
	     * path creation is handled by the method instead. The `customizer` is invoked
	     * with three arguments: (nsValue, key, nsObject).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = {};
	     *
	     * _.setWith(object, '[0][1]', 'a', Object);
	     * // => { '0': { '1': 'a' } }
	     */
                function setWith(object, path, value, customizer) {
                    return customizer = "function" == typeof customizer ? customizer : undefined, null == object ? object : baseSet(object, path, value, customizer);
                }
                /**
	     * An alternative to `_.reduce`; this method transforms `object` to a new
	     * `accumulator` object which is the result of running each of its own
	     * enumerable string keyed properties thru `iteratee`, with each invocation
	     * potentially mutating the `accumulator` object. If `accumulator` is not
	     * provided, a new object with the same `[[Prototype]]` will be used. The
	     * iteratee is invoked with four arguments: (accumulator, value, key, object).
	     * Iteratee functions may exit iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.3.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The custom accumulator value.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * _.transform([2, 3, 4], function(result, n) {
	     *   result.push(n *= n);
	     *   return n % 2 == 0;
	     * }, []);
	     * // => [4, 9]
	     *
	     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
	     *   (result[value] || (result[value] = [])).push(key);
	     * }, {});
	     * // => { '1': ['a', 'c'], '2': ['b'] }
	     */
                function transform(object, iteratee, accumulator) {
                    var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
                    if (iteratee = getIteratee(iteratee, 4), null == accumulator) {
                        var Ctor = object && object.constructor;
                        accumulator = isArrLike ? isArr ? new Ctor() : [] : isObject(object) && isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
                    }
                    return (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
                        return iteratee(accumulator, value, index, object);
                    }), accumulator;
                }
                /**
	     * Removes the property at `path` of `object`.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to unset.
	     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
	     * _.unset(object, 'a[0].b.c');
	     * // => true
	     *
	     * console.log(object);
	     * // => { 'a': [{ 'b': {} }] };
	     *
	     * _.unset(object, ['a', '0', 'b', 'c']);
	     * // => true
	     *
	     * console.log(object);
	     * // => { 'a': [{ 'b': {} }] };
	     */
                function unset(object, path) {
                    return null == object || baseUnset(object, path);
                }
                /**
	     * This method is like `_.set` except that accepts `updater` to produce the
	     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
	     * is invoked with one argument: (value).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.6.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {Function} updater The function to produce the updated value.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
	     * console.log(object.a[0].b.c);
	     * // => 9
	     *
	     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
	     * console.log(object.x[0].y.z);
	     * // => 0
	     */
                function update(object, path, updater) {
                    return null == object ? object : baseUpdate(object, path, castFunction(updater));
                }
                /**
	     * This method is like `_.update` except that it accepts `customizer` which is
	     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
	     * path creation is handled by the method instead. The `customizer` is invoked
	     * with three arguments: (nsValue, key, nsObject).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.6.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {Function} updater The function to produce the updated value.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = {};
	     *
	     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
	     * // => { '0': { '1': 'a' } }
	     */
                function updateWith(object, path, updater, customizer) {
                    return customizer = "function" == typeof customizer ? customizer : undefined, null == object ? object : baseUpdate(object, path, castFunction(updater), customizer);
                }
                /**
	     * Creates an array of the own enumerable string keyed property values of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.values(new Foo);
	     * // => [1, 2] (iteration order is not guaranteed)
	     *
	     * _.values('hi');
	     * // => ['h', 'i']
	     */
                function values(object) {
                    return null == object ? [] : baseValues(object, keys(object));
                }
                /**
	     * Creates an array of the own and inherited enumerable string keyed property
	     * values of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.valuesIn(new Foo);
	     * // => [1, 2, 3] (iteration order is not guaranteed)
	     */
                function valuesIn(object) {
                    return null == object ? [] : baseValues(object, keysIn(object));
                }
                /*------------------------------------------------------------------------*/
                /**
	     * Clamps `number` within the inclusive `lower` and `upper` bounds.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Number
	     * @param {number} number The number to clamp.
	     * @param {number} [lower] The lower bound.
	     * @param {number} upper The upper bound.
	     * @returns {number} Returns the clamped number.
	     * @example
	     *
	     * _.clamp(-10, -5, 5);
	     * // => -5
	     *
	     * _.clamp(10, -5, 5);
	     * // => 5
	     */
                function clamp(number, lower, upper) {
                    return upper === undefined && (upper = lower, lower = undefined), upper !== undefined && (upper = toNumber(upper), 
                    upper = upper === upper ? upper : 0), lower !== undefined && (lower = toNumber(lower), 
                    lower = lower === lower ? lower : 0), baseClamp(toNumber(number), lower, upper);
                }
                /**
	     * Checks if `n` is between `start` and up to, but not including, `end`. If
	     * `end` is not specified, it's set to `start` with `start` then set to `0`.
	     * If `start` is greater than `end` the params are swapped to support
	     * negative ranges.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.3.0
	     * @category Number
	     * @param {number} number The number to check.
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
	     * @see _.range, _.rangeRight
	     * @example
	     *
	     * _.inRange(3, 2, 4);
	     * // => true
	     *
	     * _.inRange(4, 8);
	     * // => true
	     *
	     * _.inRange(4, 2);
	     * // => false
	     *
	     * _.inRange(2, 2);
	     * // => false
	     *
	     * _.inRange(1.2, 2);
	     * // => true
	     *
	     * _.inRange(5.2, 4);
	     * // => false
	     *
	     * _.inRange(-3, -2, -6);
	     * // => true
	     */
                function inRange(number, start, end) {
                    return start = toFinite(start), end === undefined ? (end = start, start = 0) : end = toFinite(end), 
                    number = toNumber(number), baseInRange(number, start, end);
                }
                /**
	     * Produces a random number between the inclusive `lower` and `upper` bounds.
	     * If only one argument is provided a number between `0` and the given number
	     * is returned. If `floating` is `true`, or either `lower` or `upper` are
	     * floats, a floating-point number is returned instead of an integer.
	     *
	     * **Note:** JavaScript follows the IEEE-754 standard for resolving
	     * floating-point values which can produce unexpected results.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.7.0
	     * @category Number
	     * @param {number} [lower=0] The lower bound.
	     * @param {number} [upper=1] The upper bound.
	     * @param {boolean} [floating] Specify returning a floating-point number.
	     * @returns {number} Returns the random number.
	     * @example
	     *
	     * _.random(0, 5);
	     * // => an integer between 0 and 5
	     *
	     * _.random(5);
	     * // => also an integer between 0 and 5
	     *
	     * _.random(5, true);
	     * // => a floating-point number between 0 and 5
	     *
	     * _.random(1.2, 5.2);
	     * // => a floating-point number between 1.2 and 5.2
	     */
                function random(lower, upper, floating) {
                    if (floating && "boolean" != typeof floating && isIterateeCall(lower, upper, floating) && (upper = floating = undefined), 
                    floating === undefined && ("boolean" == typeof upper ? (floating = upper, upper = undefined) : "boolean" == typeof lower && (floating = lower, 
                    lower = undefined)), lower === undefined && upper === undefined ? (lower = 0, upper = 1) : (lower = toFinite(lower), 
                    upper === undefined ? (upper = lower, lower = 0) : upper = toFinite(upper)), lower > upper) {
                        var temp = lower;
                        lower = upper, upper = temp;
                    }
                    if (floating || lower % 1 || upper % 1) {
                        var rand = nativeRandom();
                        return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
                    }
                    return baseRandom(lower, upper);
                }
                /**
	     * Converts the first character of `string` to upper case and the remaining
	     * to lower case.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to capitalize.
	     * @returns {string} Returns the capitalized string.
	     * @example
	     *
	     * _.capitalize('FRED');
	     * // => 'Fred'
	     */
                function capitalize(string) {
                    return upperFirst(toString(string).toLowerCase());
                }
                /**
	     * Deburrs `string` by converting
	     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
	     * letters to basic Latin letters and removing
	     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to deburr.
	     * @returns {string} Returns the deburred string.
	     * @example
	     *
	     * _.deburr('déjà vu');
	     * // => 'deja vu'
	     */
                function deburr(string) {
                    return string = toString(string), string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
                }
                /**
	     * Checks if `string` ends with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to inspect.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=string.length] The position to search up to.
	     * @returns {boolean} Returns `true` if `string` ends with `target`,
	     *  else `false`.
	     * @example
	     *
	     * _.endsWith('abc', 'c');
	     * // => true
	     *
	     * _.endsWith('abc', 'b');
	     * // => false
	     *
	     * _.endsWith('abc', 'b', 2);
	     * // => true
	     */
                function endsWith(string, target, position) {
                    string = toString(string), target = baseToString(target);
                    var length = string.length;
                    position = position === undefined ? length : baseClamp(toInteger(position), 0, length);
                    var end = position;
                    return position -= target.length, position >= 0 && string.slice(position, end) == target;
                }
                /**
	     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
	     * corresponding HTML entities.
	     *
	     * **Note:** No other characters are escaped. To escape additional
	     * characters use a third-party library like [_he_](https://mths.be/he).
	     *
	     * Though the ">" character is escaped for symmetry, characters like
	     * ">" and "/" don't need escaping in HTML and have no special meaning
	     * unless they're part of a tag or unquoted attribute value. See
	     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
	     * (under "semi-related fun fact") for more details.
	     *
	     * When working with HTML you should always
	     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
	     * XSS vectors.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escape('fred, barney, & pebbles');
	     * // => 'fred, barney, &amp; pebbles'
	     */
                function escape(string) {
                    return string = toString(string), string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
                }
                /**
	     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
	     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escapeRegExp('[lodash](https://lodash.com/)');
	     * // => '\[lodash\]\(https://lodash\.com/\)'
	     */
                function escapeRegExp(string) {
                    return string = toString(string), string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
                }
                /**
	     * Pads `string` on the left and right sides if it's shorter than `length`.
	     * Padding characters are truncated if they can't be evenly divided by `length`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.pad('abc', 8);
	     * // => '  abc   '
	     *
	     * _.pad('abc', 8, '_-');
	     * // => '_-abc_-_'
	     *
	     * _.pad('abc', 3);
	     * // => 'abc'
	     */
                function pad(string, length, chars) {
                    string = toString(string), length = toInteger(length);
                    var strLength = length ? stringSize(string) : 0;
                    if (!length || strLength >= length) return string;
                    var mid = (length - strLength) / 2;
                    return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
                }
                /**
	     * Pads `string` on the right side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padEnd('abc', 6);
	     * // => 'abc   '
	     *
	     * _.padEnd('abc', 6, '_-');
	     * // => 'abc_-_'
	     *
	     * _.padEnd('abc', 3);
	     * // => 'abc'
	     */
                function padEnd(string, length, chars) {
                    string = toString(string), length = toInteger(length);
                    var strLength = length ? stringSize(string) : 0;
                    return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
                }
                /**
	     * Pads `string` on the left side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padStart('abc', 6);
	     * // => '   abc'
	     *
	     * _.padStart('abc', 6, '_-');
	     * // => '_-_abc'
	     *
	     * _.padStart('abc', 3);
	     * // => 'abc'
	     */
                function padStart(string, length, chars) {
                    string = toString(string), length = toInteger(length);
                    var strLength = length ? stringSize(string) : 0;
                    return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
                }
                /**
	     * Converts `string` to an integer of the specified radix. If `radix` is
	     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
	     * hexadecimal, in which case a `radix` of `16` is used.
	     *
	     * **Note:** This method aligns with the
	     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.1.0
	     * @category String
	     * @param {string} string The string to convert.
	     * @param {number} [radix=10] The radix to interpret `value` by.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.parseInt('08');
	     * // => 8
	     *
	     * _.map(['6', '08', '10'], _.parseInt);
	     * // => [6, 8, 10]
	     */
                function parseInt(string, radix, guard) {
                    return guard || null == radix ? radix = 0 : radix && (radix = +radix), nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
                }
                /**
	     * Repeats the given string `n` times.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to repeat.
	     * @param {number} [n=1] The number of times to repeat the string.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {string} Returns the repeated string.
	     * @example
	     *
	     * _.repeat('*', 3);
	     * // => '***'
	     *
	     * _.repeat('abc', 2);
	     * // => 'abcabc'
	     *
	     * _.repeat('abc', 0);
	     * // => ''
	     */
                function repeat(string, n, guard) {
                    return n = (guard ? isIterateeCall(string, n, guard) : n === undefined) ? 1 : toInteger(n), 
                    baseRepeat(toString(string), n);
                }
                /**
	     * Replaces matches for `pattern` in `string` with `replacement`.
	     *
	     * **Note:** This method is based on
	     * [`String#replace`](https://mdn.io/String/replace).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to modify.
	     * @param {RegExp|string} pattern The pattern to replace.
	     * @param {Function|string} replacement The match replacement.
	     * @returns {string} Returns the modified string.
	     * @example
	     *
	     * _.replace('Hi Fred', 'Fred', 'Barney');
	     * // => 'Hi Barney'
	     */
                function replace() {
                    var args = arguments, string = toString(args[0]);
                    return args.length < 3 ? string : string.replace(args[1], args[2]);
                }
                /**
	     * Splits `string` by `separator`.
	     *
	     * **Note:** This method is based on
	     * [`String#split`](https://mdn.io/String/split).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to split.
	     * @param {RegExp|string} separator The separator pattern to split by.
	     * @param {number} [limit] The length to truncate results to.
	     * @returns {Array} Returns the string segments.
	     * @example
	     *
	     * _.split('a-b-c', '-', 2);
	     * // => ['a', 'b']
	     */
                function split(string, separator, limit) {
                    return limit && "number" != typeof limit && isIterateeCall(string, separator, limit) && (separator = limit = undefined), 
                    (limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0) ? (string = toString(string), 
                    string && ("string" == typeof separator || null != separator && !isRegExp(separator)) && (separator = baseToString(separator), 
                    !separator && hasUnicode(string)) ? castSlice(stringToArray(string), 0, limit) : string.split(separator, limit)) : [];
                }
                /**
	     * Checks if `string` starts with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to inspect.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=0] The position to search from.
	     * @returns {boolean} Returns `true` if `string` starts with `target`,
	     *  else `false`.
	     * @example
	     *
	     * _.startsWith('abc', 'a');
	     * // => true
	     *
	     * _.startsWith('abc', 'b');
	     * // => false
	     *
	     * _.startsWith('abc', 'b', 1);
	     * // => true
	     */
                function startsWith(string, target, position) {
                    return string = toString(string), position = null == position ? 0 : baseClamp(toInteger(position), 0, string.length), 
                    target = baseToString(target), string.slice(position, position + target.length) == target;
                }
                /**
	     * Creates a compiled template function that can interpolate data properties
	     * in "interpolate" delimiters, HTML-escape interpolated data properties in
	     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
	     * properties may be accessed as free variables in the template. If a setting
	     * object is given, it takes precedence over `_.templateSettings` values.
	     *
	     * **Note:** In the development build `_.template` utilizes
	     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
	     * for easier debugging.
	     *
	     * For more information on precompiling templates see
	     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
	     *
	     * For more information on Chrome extension sandboxes see
	     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The template string.
	     * @param {Object} [options={}] The options object.
	     * @param {RegExp} [options.escape=_.templateSettings.escape]
	     *  The HTML "escape" delimiter.
	     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
	     *  The "evaluate" delimiter.
	     * @param {Object} [options.imports=_.templateSettings.imports]
	     *  An object to import into the template as free variables.
	     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
	     *  The "interpolate" delimiter.
	     * @param {string} [options.sourceURL='lodash.templateSources[n]']
	     *  The sourceURL of the compiled template.
	     * @param {string} [options.variable='obj']
	     *  The data object variable name.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the compiled template function.
	     * @example
	     *
	     * // Use the "interpolate" delimiter to create a compiled template.
	     * var compiled = _.template('hello <%= user %>!');
	     * compiled({ 'user': 'fred' });
	     * // => 'hello fred!'
	     *
	     * // Use the HTML "escape" delimiter to escape data property values.
	     * var compiled = _.template('<b><%- value %></b>');
	     * compiled({ 'value': '<script>' });
	     * // => '<b>&lt;script&gt;</b>'
	     *
	     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
	     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // Use the internal `print` function in "evaluate" delimiters.
	     * var compiled = _.template('<% print("hello " + user); %>!');
	     * compiled({ 'user': 'barney' });
	     * // => 'hello barney!'
	     *
	     * // Use the ES template literal delimiter as an "interpolate" delimiter.
	     * // Disable support by replacing the "interpolate" delimiter.
	     * var compiled = _.template('hello ${ user }!');
	     * compiled({ 'user': 'pebbles' });
	     * // => 'hello pebbles!'
	     *
	     * // Use backslashes to treat delimiters as plain text.
	     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
	     * compiled({ 'value': 'ignored' });
	     * // => '<%- value %>'
	     *
	     * // Use the `imports` option to import `jQuery` as `jq`.
	     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
	     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
	     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
	     * compiled(data);
	     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
	     *
	     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
	     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
	     * compiled.source;
	     * // => function(data) {
	     * //   var __t, __p = '';
	     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
	     * //   return __p;
	     * // }
	     *
	     * // Use custom template delimiters.
	     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
	     * var compiled = _.template('hello {{ user }}!');
	     * compiled({ 'user': 'mustache' });
	     * // => 'hello mustache!'
	     *
	     * // Use the `source` property to inline compiled templates for meaningful
	     * // line numbers in error messages and stack traces.
	     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
	     *   var JST = {\
	     *     "main": ' + _.template(mainText).source + '\
	     *   };\
	     * ');
	     */
                function template(string, options, guard) {
                    // Based on John Resig's `tmpl` implementation
                    // (http://ejohn.org/blog/javascript-micro-templating/)
                    // and Laura Doktorova's doT.js (https://github.com/olado/doT).
                    var settings = lodash.templateSettings;
                    guard && isIterateeCall(string, options, guard) && (options = undefined), string = toString(string), 
                    options = assignInWith({}, options, settings, customDefaultsAssignIn);
                    var isEscaping, isEvaluating, imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys), index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '", reDelimiters = RegExp((options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g"), sourceURL = "//# sourceURL=" + ("sourceURL" in options ? options.sourceURL : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
                    string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
                        // The JS engine embedded in Adobe products needs `match` returned in
                        // order to produce the correct `offset` value.
                        // Escape characters that can't be included in string literals.
                        // Replace delimiters with snippets.
                        return interpolateValue || (interpolateValue = esTemplateValue), source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar), 
                        escapeValue && (isEscaping = !0, source += "' +\n__e(" + escapeValue + ") +\n'"), 
                        evaluateValue && (isEvaluating = !0, source += "';\n" + evaluateValue + ";\n__p += '"), 
                        interpolateValue && (source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'"), 
                        index = offset + match.length, match;
                    }), source += "';\n";
                    // If `variable` is not specified wrap a with-statement around the generated
                    // code to add the data object to the top of the scope chain.
                    var variable = options.variable;
                    variable || (source = "with (obj) {\n" + source + "\n}\n"), // Cleanup code by stripping empty strings.
                    source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;"), 
                    // Frame code as the function body.
                    source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
                    var result = attempt(function() {
                        return Function(importsKeys, sourceURL + "return " + source).apply(undefined, importsValues);
                    });
                    if (// Provide the compiled function's source by its `toString` method or
                    // the `source` property as a convenience for inlining compiled templates.
                    result.source = source, isError(result)) throw result;
                    return result;
                }
                /**
	     * Converts `string`, as a whole, to lower case just like
	     * [String#toLowerCase](https://mdn.io/toLowerCase).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the lower cased string.
	     * @example
	     *
	     * _.toLower('--Foo-Bar--');
	     * // => '--foo-bar--'
	     *
	     * _.toLower('fooBar');
	     * // => 'foobar'
	     *
	     * _.toLower('__FOO_BAR__');
	     * // => '__foo_bar__'
	     */
                function toLower(value) {
                    return toString(value).toLowerCase();
                }
                /**
	     * Converts `string`, as a whole, to upper case just like
	     * [String#toUpperCase](https://mdn.io/toUpperCase).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the upper cased string.
	     * @example
	     *
	     * _.toUpper('--foo-bar--');
	     * // => '--FOO-BAR--'
	     *
	     * _.toUpper('fooBar');
	     * // => 'FOOBAR'
	     *
	     * _.toUpper('__foo_bar__');
	     * // => '__FOO_BAR__'
	     */
                function toUpper(value) {
                    return toString(value).toUpperCase();
                }
                /**
	     * Removes leading and trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trim('  abc  ');
	     * // => 'abc'
	     *
	     * _.trim('-_-abc-_-', '_-');
	     * // => 'abc'
	     *
	     * _.map(['  foo  ', '  bar  '], _.trim);
	     * // => ['foo', 'bar']
	     */
                function trim(string, chars, guard) {
                    if (string = toString(string), string && (guard || chars === undefined)) return string.replace(reTrim, "");
                    if (!string || !(chars = baseToString(chars))) return string;
                    var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
                    return castSlice(strSymbols, start, end).join("");
                }
                /**
	     * Removes trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimEnd('  abc  ');
	     * // => '  abc'
	     *
	     * _.trimEnd('-_-abc-_-', '_-');
	     * // => '-_-abc'
	     */
                function trimEnd(string, chars, guard) {
                    if (string = toString(string), string && (guard || chars === undefined)) return string.replace(reTrimEnd, "");
                    if (!string || !(chars = baseToString(chars))) return string;
                    var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
                    return castSlice(strSymbols, 0, end).join("");
                }
                /**
	     * Removes leading whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimStart('  abc  ');
	     * // => 'abc  '
	     *
	     * _.trimStart('-_-abc-_-', '_-');
	     * // => 'abc-_-'
	     */
                function trimStart(string, chars, guard) {
                    if (string = toString(string), string && (guard || chars === undefined)) return string.replace(reTrimStart, "");
                    if (!string || !(chars = baseToString(chars))) return string;
                    var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
                    return castSlice(strSymbols, start).join("");
                }
                /**
	     * Truncates `string` if it's longer than the given maximum string length.
	     * The last characters of the truncated string are replaced with the omission
	     * string which defaults to "...".
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to truncate.
	     * @param {Object} [options={}] The options object.
	     * @param {number} [options.length=30] The maximum string length.
	     * @param {string} [options.omission='...'] The string to indicate text is omitted.
	     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
	     * @returns {string} Returns the truncated string.
	     * @example
	     *
	     * _.truncate('hi-diddly-ho there, neighborino');
	     * // => 'hi-diddly-ho there, neighbo...'
	     *
	     * _.truncate('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': ' '
	     * });
	     * // => 'hi-diddly-ho there,...'
	     *
	     * _.truncate('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': /,? +/
	     * });
	     * // => 'hi-diddly-ho there...'
	     *
	     * _.truncate('hi-diddly-ho there, neighborino', {
	     *   'omission': ' [...]'
	     * });
	     * // => 'hi-diddly-ho there, neig [...]'
	     */
                function truncate(string, options) {
                    var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
                    if (isObject(options)) {
                        var separator = "separator" in options ? options.separator : separator;
                        length = "length" in options ? toInteger(options.length) : length, omission = "omission" in options ? baseToString(options.omission) : omission;
                    }
                    string = toString(string);
                    var strLength = string.length;
                    if (hasUnicode(string)) {
                        var strSymbols = stringToArray(string);
                        strLength = strSymbols.length;
                    }
                    if (length >= strLength) return string;
                    var end = length - stringSize(omission);
                    if (end < 1) return omission;
                    var result = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
                    if (separator === undefined) return result + omission;
                    if (strSymbols && (end += result.length - end), isRegExp(separator)) {
                        if (string.slice(end).search(separator)) {
                            var match, substring = result;
                            for (separator.global || (separator = RegExp(separator.source, toString(reFlags.exec(separator)) + "g")), 
                            separator.lastIndex = 0; match = separator.exec(substring); ) var newEnd = match.index;
                            result = result.slice(0, newEnd === undefined ? end : newEnd);
                        }
                    } else if (string.indexOf(baseToString(separator), end) != end) {
                        var index = result.lastIndexOf(separator);
                        index > -1 && (result = result.slice(0, index));
                    }
                    return result + omission;
                }
                /**
	     * The inverse of `_.escape`; this method converts the HTML entities
	     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
	     * their corresponding characters.
	     *
	     * **Note:** No other HTML entities are unescaped. To unescape additional
	     * HTML entities use a third-party library like [_he_](https://mths.be/he).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.6.0
	     * @category String
	     * @param {string} [string=''] The string to unescape.
	     * @returns {string} Returns the unescaped string.
	     * @example
	     *
	     * _.unescape('fred, barney, &amp; pebbles');
	     * // => 'fred, barney, & pebbles'
	     */
                function unescape(string) {
                    return string = toString(string), string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
                }
                /**
	     * Splits `string` into an array of its words.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to inspect.
	     * @param {RegExp|string} [pattern] The pattern to match words.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the words of `string`.
	     * @example
	     *
	     * _.words('fred, barney, & pebbles');
	     * // => ['fred', 'barney', 'pebbles']
	     *
	     * _.words('fred, barney, & pebbles', /[^, ]+/g);
	     * // => ['fred', 'barney', '&', 'pebbles']
	     */
                function words(string, pattern, guard) {
                    return string = toString(string), pattern = guard ? undefined : pattern, pattern === undefined ? hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string) : string.match(pattern) || [];
                }
                /**
	     * Creates a function that iterates over `pairs` and invokes the corresponding
	     * function of the first predicate to return truthy. The predicate-function
	     * pairs are invoked with the `this` binding and arguments of the created
	     * function.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {Array} pairs The predicate-function pairs.
	     * @returns {Function} Returns the new composite function.
	     * @example
	     *
	     * var func = _.cond([
	     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
	     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
	     *   [_.stubTrue,                      _.constant('no match')]
	     * ]);
	     *
	     * func({ 'a': 1, 'b': 2 });
	     * // => 'matches A'
	     *
	     * func({ 'a': 0, 'b': 1 });
	     * // => 'matches B'
	     *
	     * func({ 'a': '1', 'b': '2' });
	     * // => 'no match'
	     */
                function cond(pairs) {
                    var length = null == pairs ? 0 : pairs.length, toIteratee = getIteratee();
                    return pairs = length ? arrayMap(pairs, function(pair) {
                        if ("function" != typeof pair[1]) throw new TypeError(FUNC_ERROR_TEXT);
                        return [ toIteratee(pair[0]), pair[1] ];
                    }) : [], baseRest(function(args) {
                        for (var index = -1; ++index < length; ) {
                            var pair = pairs[index];
                            if (apply(pair[0], this, args)) return apply(pair[1], this, args);
                        }
                    });
                }
                /**
	     * Creates a function that invokes the predicate properties of `source` with
	     * the corresponding property values of a given object, returning `true` if
	     * all predicates return truthy, else `false`.
	     *
	     * **Note:** The created function is equivalent to `_.conformsTo` with
	     * `source` partially applied.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {Object} source The object of property predicates to conform to.
	     * @returns {Function} Returns the new spec function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': 2, 'b': 1 },
	     *   { 'a': 1, 'b': 2 }
	     * ];
	     *
	     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
	     * // => [{ 'a': 1, 'b': 2 }]
	     */
                function conforms(source) {
                    return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
                }
                /**
	     * Creates a function that returns `value`.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Util
	     * @param {*} value The value to return from the new function.
	     * @returns {Function} Returns the new constant function.
	     * @example
	     *
	     * var objects = _.times(2, _.constant({ 'a': 1 }));
	     *
	     * console.log(objects);
	     * // => [{ 'a': 1 }, { 'a': 1 }]
	     *
	     * console.log(objects[0] === objects[1]);
	     * // => true
	     */
                function constant(value) {
                    return function() {
                        return value;
                    };
                }
                /**
	     * Checks `value` to determine whether a default value should be returned in
	     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
	     * or `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.14.0
	     * @category Util
	     * @param {*} value The value to check.
	     * @param {*} defaultValue The default value.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * _.defaultTo(1, 10);
	     * // => 1
	     *
	     * _.defaultTo(undefined, 10);
	     * // => 10
	     */
                function defaultTo(value, defaultValue) {
                    return null == value || value !== value ? defaultValue : value;
                }
                /**
	     * This method returns the first argument it receives.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {*} value Any value.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * var object = { 'a': 1 };
	     *
	     * console.log(_.identity(object) === object);
	     * // => true
	     */
                function identity(value) {
                    return value;
                }
                /**
	     * Creates a function that invokes `func` with the arguments of the created
	     * function. If `func` is a property name, the created function returns the
	     * property value for a given element. If `func` is an array or object, the
	     * created function returns `true` for elements that contain the equivalent
	     * source properties, otherwise it returns `false`.
	     *
	     * @static
	     * @since 4.0.0
	     * @memberOf _
	     * @category Util
	     * @param {*} [func=_.identity] The value to convert to a callback.
	     * @returns {Function} Returns the callback.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
	     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.filter(users, _.iteratee(['user', 'fred']));
	     * // => [{ 'user': 'fred', 'age': 40 }]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.map(users, _.iteratee('user'));
	     * // => ['barney', 'fred']
	     *
	     * // Create custom iteratee shorthands.
	     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
	     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
	     *     return func.test(string);
	     *   };
	     * });
	     *
	     * _.filter(['abc', 'def'], /ef/);
	     * // => ['def']
	     */
                function iteratee(func) {
                    return baseIteratee("function" == typeof func ? func : baseClone(func, CLONE_DEEP_FLAG));
                }
                /**
	     * Creates a function that performs a partial deep comparison between a given
	     * object and `source`, returning `true` if the given object has equivalent
	     * property values, else `false`.
	     *
	     * **Note:** The created function is equivalent to `_.isMatch` with `source`
	     * partially applied.
	     *
	     * Partial comparisons will match empty array and empty object `source`
	     * values against any array or object value, respectively. See `_.isEqual`
	     * for a list of supported value comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Util
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new spec function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': 1, 'b': 2, 'c': 3 },
	     *   { 'a': 4, 'b': 5, 'c': 6 }
	     * ];
	     *
	     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
	     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
	     */
                function matches(source) {
                    return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
                }
                /**
	     * Creates a function that performs a partial deep comparison between the
	     * value at `path` of a given object to `srcValue`, returning `true` if the
	     * object value is equivalent, else `false`.
	     *
	     * **Note:** Partial comparisons will match empty array and empty object
	     * `srcValue` values against any array or object value, respectively. See
	     * `_.isEqual` for a list of supported value comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.2.0
	     * @category Util
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new spec function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': 1, 'b': 2, 'c': 3 },
	     *   { 'a': 4, 'b': 5, 'c': 6 }
	     * ];
	     *
	     * _.find(objects, _.matchesProperty('a', 4));
	     * // => { 'a': 4, 'b': 5, 'c': 6 }
	     */
                function matchesProperty(path, srcValue) {
                    return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
                }
                /**
	     * Adds all own enumerable string keyed function properties of a source
	     * object to the destination object. If `object` is a function, then methods
	     * are added to its prototype as well.
	     *
	     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
	     * avoid conflicts caused by modifying the original.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {Function|Object} [object=lodash] The destination object.
	     * @param {Object} source The object of functions to add.
	     * @param {Object} [options={}] The options object.
	     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
	     * @returns {Function|Object} Returns `object`.
	     * @example
	     *
	     * function vowels(string) {
	     *   return _.filter(string, function(v) {
	     *     return /[aeiou]/i.test(v);
	     *   });
	     * }
	     *
	     * _.mixin({ 'vowels': vowels });
	     * _.vowels('fred');
	     * // => ['e']
	     *
	     * _('fred').vowels().value();
	     * // => ['e']
	     *
	     * _.mixin({ 'vowels': vowels }, { 'chain': false });
	     * _('fred').vowels();
	     * // => ['e']
	     */
                function mixin(object, source, options) {
                    var props = keys(source), methodNames = baseFunctions(source, props);
                    null != options || isObject(source) && (methodNames.length || !props.length) || (options = source, 
                    source = object, object = this, methodNames = baseFunctions(source, keys(source)));
                    var chain = !(isObject(options) && "chain" in options && !options.chain), isFunc = isFunction(object);
                    return arrayEach(methodNames, function(methodName) {
                        var func = source[methodName];
                        object[methodName] = func, isFunc && (object.prototype[methodName] = function() {
                            var chainAll = this.__chain__;
                            if (chain || chainAll) {
                                var result = object(this.__wrapped__), actions = result.__actions__ = copyArray(this.__actions__);
                                return actions.push({
                                    func: func,
                                    args: arguments,
                                    thisArg: object
                                }), result.__chain__ = chainAll, result;
                            }
                            return func.apply(object, arrayPush([ this.value() ], arguments));
                        });
                    }), object;
                }
                /**
	     * Reverts the `_` variable to its previous value and returns a reference to
	     * the `lodash` function.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @returns {Function} Returns the `lodash` function.
	     * @example
	     *
	     * var lodash = _.noConflict();
	     */
                function noConflict() {
                    return root._ === this && (root._ = oldDash), this;
                }
                /**
	     * This method returns `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.3.0
	     * @category Util
	     * @example
	     *
	     * _.times(2, _.noop);
	     * // => [undefined, undefined]
	     */
                function noop() {}
                /**
	     * Creates a function that gets the argument at index `n`. If `n` is negative,
	     * the nth argument from the end is returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {number} [n=0] The index of the argument to return.
	     * @returns {Function} Returns the new pass-thru function.
	     * @example
	     *
	     * var func = _.nthArg(1);
	     * func('a', 'b', 'c', 'd');
	     * // => 'b'
	     *
	     * var func = _.nthArg(-2);
	     * func('a', 'b', 'c', 'd');
	     * // => 'c'
	     */
                function nthArg(n) {
                    return n = toInteger(n), baseRest(function(args) {
                        return baseNth(args, n);
                    });
                }
                /**
	     * Creates a function that returns the value at `path` of a given object.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Util
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new accessor function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': 2 } },
	     *   { 'a': { 'b': 1 } }
	     * ];
	     *
	     * _.map(objects, _.property('a.b'));
	     * // => [2, 1]
	     *
	     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	     * // => [1, 2]
	     */
                function property(path) {
                    return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
                }
                /**
	     * The opposite of `_.property`; this method creates a function that returns
	     * the value at a given path of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Util
	     * @param {Object} object The object to query.
	     * @returns {Function} Returns the new accessor function.
	     * @example
	     *
	     * var array = [0, 1, 2],
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
	     * // => [2, 0]
	     */
                function propertyOf(object) {
                    return function(path) {
                        return null == object ? undefined : baseGet(object, path);
                    };
                }
                /**
	     * This method returns a new empty array.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {Array} Returns the new empty array.
	     * @example
	     *
	     * var arrays = _.times(2, _.stubArray);
	     *
	     * console.log(arrays);
	     * // => [[], []]
	     *
	     * console.log(arrays[0] === arrays[1]);
	     * // => false
	     */
                function stubArray() {
                    return [];
                }
                /**
	     * This method returns `false`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {boolean} Returns `false`.
	     * @example
	     *
	     * _.times(2, _.stubFalse);
	     * // => [false, false]
	     */
                function stubFalse() {
                    return !1;
                }
                /**
	     * This method returns a new empty object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {Object} Returns the new empty object.
	     * @example
	     *
	     * var objects = _.times(2, _.stubObject);
	     *
	     * console.log(objects);
	     * // => [{}, {}]
	     *
	     * console.log(objects[0] === objects[1]);
	     * // => false
	     */
                function stubObject() {
                    return {};
                }
                /**
	     * This method returns an empty string.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {string} Returns the empty string.
	     * @example
	     *
	     * _.times(2, _.stubString);
	     * // => ['', '']
	     */
                function stubString() {
                    return "";
                }
                /**
	     * This method returns `true`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {boolean} Returns `true`.
	     * @example
	     *
	     * _.times(2, _.stubTrue);
	     * // => [true, true]
	     */
                function stubTrue() {
                    return !0;
                }
                /**
	     * Invokes the iteratee `n` times, returning an array of the results of
	     * each invocation. The iteratee is invoked with one argument; (index).
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {number} n The number of times to invoke `iteratee`.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * _.times(3, String);
	     * // => ['0', '1', '2']
	     *
	     *  _.times(4, _.constant(0));
	     * // => [0, 0, 0, 0]
	     */
                function times(n, iteratee) {
                    if (n = toInteger(n), n < 1 || n > MAX_SAFE_INTEGER) return [];
                    var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
                    iteratee = getIteratee(iteratee), n -= MAX_ARRAY_LENGTH;
                    for (var result = baseTimes(length, iteratee); ++index < n; ) iteratee(index);
                    return result;
                }
                /**
	     * Converts `value` to a property path array.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {*} value The value to convert.
	     * @returns {Array} Returns the new property path array.
	     * @example
	     *
	     * _.toPath('a.b.c');
	     * // => ['a', 'b', 'c']
	     *
	     * _.toPath('a[0].b.c');
	     * // => ['a', '0', 'b', 'c']
	     */
                function toPath(value) {
                    return isArray(value) ? arrayMap(value, toKey) : isSymbol(value) ? [ value ] : copyArray(stringToPath(toString(value)));
                }
                /**
	     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {string} [prefix=''] The value to prefix the ID with.
	     * @returns {string} Returns the unique ID.
	     * @example
	     *
	     * _.uniqueId('contact_');
	     * // => 'contact_104'
	     *
	     * _.uniqueId();
	     * // => '105'
	     */
                function uniqueId(prefix) {
                    var id = ++idCounter;
                    return toString(prefix) + id;
                }
                /**
	     * Computes the maximum value of `array`. If `array` is empty or falsey,
	     * `undefined` is returned.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @returns {*} Returns the maximum value.
	     * @example
	     *
	     * _.max([4, 2, 8, 6]);
	     * // => 8
	     *
	     * _.max([]);
	     * // => undefined
	     */
                function max(array) {
                    return array && array.length ? baseExtremum(array, identity, baseGt) : undefined;
                }
                /**
	     * This method is like `_.max` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the criterion by which
	     * the value is ranked. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {*} Returns the maximum value.
	     * @example
	     *
	     * var objects = [{ 'n': 1 }, { 'n': 2 }];
	     *
	     * _.maxBy(objects, function(o) { return o.n; });
	     * // => { 'n': 2 }
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.maxBy(objects, 'n');
	     * // => { 'n': 2 }
	     */
                function maxBy(array, iteratee) {
                    return array && array.length ? baseExtremum(array, getIteratee(iteratee, 2), baseGt) : undefined;
                }
                /**
	     * Computes the mean of the values in `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @returns {number} Returns the mean.
	     * @example
	     *
	     * _.mean([4, 2, 8, 6]);
	     * // => 5
	     */
                function mean(array) {
                    return baseMean(array, identity);
                }
                /**
	     * This method is like `_.mean` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the value to be averaged.
	     * The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {number} Returns the mean.
	     * @example
	     *
	     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
	     *
	     * _.meanBy(objects, function(o) { return o.n; });
	     * // => 5
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.meanBy(objects, 'n');
	     * // => 5
	     */
                function meanBy(array, iteratee) {
                    return baseMean(array, getIteratee(iteratee, 2));
                }
                /**
	     * Computes the minimum value of `array`. If `array` is empty or falsey,
	     * `undefined` is returned.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @returns {*} Returns the minimum value.
	     * @example
	     *
	     * _.min([4, 2, 8, 6]);
	     * // => 2
	     *
	     * _.min([]);
	     * // => undefined
	     */
                function min(array) {
                    return array && array.length ? baseExtremum(array, identity, baseLt) : undefined;
                }
                /**
	     * This method is like `_.min` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the criterion by which
	     * the value is ranked. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {*} Returns the minimum value.
	     * @example
	     *
	     * var objects = [{ 'n': 1 }, { 'n': 2 }];
	     *
	     * _.minBy(objects, function(o) { return o.n; });
	     * // => { 'n': 1 }
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.minBy(objects, 'n');
	     * // => { 'n': 1 }
	     */
                function minBy(array, iteratee) {
                    return array && array.length ? baseExtremum(array, getIteratee(iteratee, 2), baseLt) : undefined;
                }
                /**
	     * Computes the sum of the values in `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.4.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * _.sum([4, 2, 8, 6]);
	     * // => 20
	     */
                function sum(array) {
                    return array && array.length ? baseSum(array, identity) : 0;
                }
                /**
	     * This method is like `_.sum` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the value to be summed.
	     * The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
	     *
	     * _.sumBy(objects, function(o) { return o.n; });
	     * // => 20
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.sumBy(objects, 'n');
	     * // => 20
	     */
                function sumBy(array, iteratee) {
                    return array && array.length ? baseSum(array, getIteratee(iteratee, 2)) : 0;
                }
                context = null == context ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
                /** Built-in constructor references. */
                var Array = context.Array, Date = context.Date, Error = context.Error, Function = context.Function, Math = context.Math, Object = context.Object, RegExp = context.RegExp, String = context.String, TypeError = context.TypeError, arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype, coreJsData = context["__core-js_shared__"], funcToString = funcProto.toString, hasOwnProperty = objectProto.hasOwnProperty, idCounter = 0, maskSrcKey = function() {
                    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
                    return uid ? "Symbol(src)_1." + uid : "";
                }(), nativeObjectToString = objectProto.toString, objectCtorString = funcToString.call(Object), oldDash = root._, reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Buffer = moduleExports ? context.Buffer : undefined, Symbol = context.Symbol, Uint8Array = context.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined, getPrototype = overArg(Object.getPrototypeOf, Object), objectCreate = Object.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined, symIterator = Symbol ? Symbol.iterator : undefined, symToStringTag = Symbol ? Symbol.toStringTag : undefined, defineProperty = function() {
                    try {
                        var func = getNative(Object, "defineProperty");
                        return func({}, "", {}), func;
                    } catch (e) {}
                }(), ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date && Date.now !== root.Date.now && Date.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout, nativeCeil = Math.ceil, nativeFloor = Math.floor, nativeGetSymbols = Object.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object.keys, Object), nativeMax = Math.max, nativeMin = Math.min, nativeNow = Date.now, nativeParseInt = context.parseInt, nativeRandom = Math.random, nativeReverse = arrayProto.reverse, DataView = getNative(context, "DataView"), Map = getNative(context, "Map"), Promise = getNative(context, "Promise"), Set = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object, "create"), metaMap = WeakMap && new WeakMap(), realNames = {}, dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap), symbolProto = Symbol ? Symbol.prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined, symbolToString = symbolProto ? symbolProto.toString : undefined, baseCreate = function() {
                    function object() {}
                    return function(proto) {
                        if (!isObject(proto)) return {};
                        if (objectCreate) return objectCreate(proto);
                        object.prototype = proto;
                        var result = new object();
                        return object.prototype = undefined, result;
                    };
                }();
                /**
	     * By default, the template delimiters used by lodash are like those in
	     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
	     * following template settings to use alternative delimiters.
	     *
	     * @static
	     * @memberOf _
	     * @type {Object}
	     */
                lodash.templateSettings = {
                    /**
	       * Used to detect `data` property values to be HTML-escaped.
	       *
	       * @memberOf _.templateSettings
	       * @type {RegExp}
	       */
                    escape: reEscape,
                    /**
	       * Used to detect code to be evaluated.
	       *
	       * @memberOf _.templateSettings
	       * @type {RegExp}
	       */
                    evaluate: reEvaluate,
                    /**
	       * Used to detect `data` property values to inject.
	       *
	       * @memberOf _.templateSettings
	       * @type {RegExp}
	       */
                    interpolate: reInterpolate,
                    /**
	       * Used to reference the data object in the template text.
	       *
	       * @memberOf _.templateSettings
	       * @type {string}
	       */
                    variable: "",
                    /**
	       * Used to import variables into the compiled template.
	       *
	       * @memberOf _.templateSettings
	       * @type {Object}
	       */
                    imports: {
                        /**
	         * A reference to the `lodash` function.
	         *
	         * @memberOf _.templateSettings.imports
	         * @type {Function}
	         */
                        _: lodash
                    }
                }, // Ensure wrappers are instances of `baseLodash`.
                lodash.prototype = baseLodash.prototype, lodash.prototype.constructor = lodash, 
                LodashWrapper.prototype = baseCreate(baseLodash.prototype), LodashWrapper.prototype.constructor = LodashWrapper, 
                // Ensure `LazyWrapper` is an instance of `baseLodash`.
                LazyWrapper.prototype = baseCreate(baseLodash.prototype), LazyWrapper.prototype.constructor = LazyWrapper, 
                // Add methods to `Hash`.
                Hash.prototype.clear = hashClear, Hash.prototype.delete = hashDelete, Hash.prototype.get = hashGet, 
                Hash.prototype.has = hashHas, Hash.prototype.set = hashSet, // Add methods to `ListCache`.
                ListCache.prototype.clear = listCacheClear, ListCache.prototype.delete = listCacheDelete, 
                ListCache.prototype.get = listCacheGet, ListCache.prototype.has = listCacheHas, 
                ListCache.prototype.set = listCacheSet, // Add methods to `MapCache`.
                MapCache.prototype.clear = mapCacheClear, MapCache.prototype.delete = mapCacheDelete, 
                MapCache.prototype.get = mapCacheGet, MapCache.prototype.has = mapCacheHas, MapCache.prototype.set = mapCacheSet, 
                // Add methods to `SetCache`.
                SetCache.prototype.add = SetCache.prototype.push = setCacheAdd, SetCache.prototype.has = setCacheHas, 
                // Add methods to `Stack`.
                Stack.prototype.clear = stackClear, Stack.prototype.delete = stackDelete, Stack.prototype.get = stackGet, 
                Stack.prototype.has = stackHas, Stack.prototype.set = stackSet;
                /**
	     * The base implementation of `_.forEach` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     */
                var baseEach = createBaseEach(baseForOwn), baseEachRight = createBaseEach(baseForOwnRight, !0), baseFor = createBaseFor(), baseForRight = createBaseFor(!0), baseSetData = metaMap ? function(func, data) {
                    return metaMap.set(func, data), func;
                } : identity, baseSetToString = defineProperty ? function(func, string) {
                    return defineProperty(func, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: constant(string),
                        writable: !0
                    });
                } : identity, castRest = baseRest, clearTimeout = ctxClearTimeout || function(id) {
                    return root.clearTimeout(id);
                }, createSet = Set && 1 / setToArray(new Set([ , -0 ]))[1] == INFINITY ? function(values) {
                    return new Set(values);
                } : noop, getData = metaMap ? function(func) {
                    return metaMap.get(func);
                } : noop, getSymbols = nativeGetSymbols ? function(object) {
                    return null == object ? [] : (object = Object(object), arrayFilter(nativeGetSymbols(object), function(symbol) {
                        return propertyIsEnumerable.call(object, symbol);
                    }));
                } : stubArray, getSymbolsIn = nativeGetSymbols ? function(object) {
                    for (var result = []; object; ) arrayPush(result, getSymbols(object)), object = getPrototype(object);
                    return result;
                } : stubArray, getTag = baseGetTag;
                // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
                (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) && (getTag = function(value) {
                    var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : undefined, ctorString = Ctor ? toSource(Ctor) : "";
                    if (ctorString) switch (ctorString) {
                      case dataViewCtorString:
                        return dataViewTag;

                      case mapCtorString:
                        return mapTag;

                      case promiseCtorString:
                        return promiseTag;

                      case setCtorString:
                        return setTag;

                      case weakMapCtorString:
                        return weakMapTag;
                    }
                    return result;
                });
                /**
	     * Checks if `func` is capable of being masked.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
	     */
                var isMaskable = coreJsData ? isFunction : stubFalse, setData = shortOut(baseSetData), setTimeout = ctxSetTimeout || function(func, wait) {
                    return root.setTimeout(func, wait);
                }, setToString = shortOut(baseSetToString), stringToPath = memoizeCapped(function(string) {
                    var result = [];
                    return reLeadingDot.test(string) && result.push(""), string.replace(rePropName, function(match, number, quote, string) {
                        result.push(quote ? string.replace(reEscapeChar, "$1") : number || match);
                    }), result;
                }), difference = baseRest(function(array, values) {
                    return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, !0)) : [];
                }), differenceBy = baseRest(function(array, values) {
                    var iteratee = last(values);
                    return isArrayLikeObject(iteratee) && (iteratee = undefined), isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, !0), getIteratee(iteratee, 2)) : [];
                }), differenceWith = baseRest(function(array, values) {
                    var comparator = last(values);
                    return isArrayLikeObject(comparator) && (comparator = undefined), isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, !0), undefined, comparator) : [];
                }), intersection = baseRest(function(arrays) {
                    var mapped = arrayMap(arrays, castArrayLikeObject);
                    return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
                }), intersectionBy = baseRest(function(arrays) {
                    var iteratee = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
                    return iteratee === last(mapped) ? iteratee = undefined : mapped.pop(), mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee, 2)) : [];
                }), intersectionWith = baseRest(function(arrays) {
                    var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
                    return comparator = "function" == typeof comparator ? comparator : undefined, comparator && mapped.pop(), 
                    mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined, comparator) : [];
                }), pull = baseRest(pullAll), pullAt = flatRest(function(array, indexes) {
                    var length = null == array ? 0 : array.length, result = baseAt(array, indexes);
                    return basePullAt(array, arrayMap(indexes, function(index) {
                        return isIndex(index, length) ? +index : index;
                    }).sort(compareAscending)), result;
                }), union = baseRest(function(arrays) {
                    return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, !0));
                }), unionBy = baseRest(function(arrays) {
                    var iteratee = last(arrays);
                    return isArrayLikeObject(iteratee) && (iteratee = undefined), baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, !0), getIteratee(iteratee, 2));
                }), unionWith = baseRest(function(arrays) {
                    var comparator = last(arrays);
                    return comparator = "function" == typeof comparator ? comparator : undefined, baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, !0), undefined, comparator);
                }), without = baseRest(function(array, values) {
                    return isArrayLikeObject(array) ? baseDifference(array, values) : [];
                }), xor = baseRest(function(arrays) {
                    return baseXor(arrayFilter(arrays, isArrayLikeObject));
                }), xorBy = baseRest(function(arrays) {
                    var iteratee = last(arrays);
                    return isArrayLikeObject(iteratee) && (iteratee = undefined), baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
                }), xorWith = baseRest(function(arrays) {
                    var comparator = last(arrays);
                    return comparator = "function" == typeof comparator ? comparator : undefined, baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
                }), zip = baseRest(unzip), zipWith = baseRest(function(arrays) {
                    var length = arrays.length, iteratee = length > 1 ? arrays[length - 1] : undefined;
                    return iteratee = "function" == typeof iteratee ? (arrays.pop(), iteratee) : undefined, 
                    unzipWith(arrays, iteratee);
                }), wrapperAt = flatRest(function(paths) {
                    var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
                        return baseAt(object, paths);
                    };
                    return !(length > 1 || this.__actions__.length) && value instanceof LazyWrapper && isIndex(start) ? (value = value.slice(start, +start + (length ? 1 : 0)), 
                    value.__actions__.push({
                        func: thru,
                        args: [ interceptor ],
                        thisArg: undefined
                    }), new LodashWrapper(value, this.__chain__).thru(function(array) {
                        return length && !array.length && array.push(undefined), array;
                    })) : this.thru(interceptor);
                }), countBy = createAggregator(function(result, value, key) {
                    hasOwnProperty.call(result, key) ? ++result[key] : baseAssignValue(result, key, 1);
                }), find = createFind(findIndex), findLast = createFind(findLastIndex), groupBy = createAggregator(function(result, value, key) {
                    hasOwnProperty.call(result, key) ? result[key].push(value) : baseAssignValue(result, key, [ value ]);
                }), invokeMap = baseRest(function(collection, path, args) {
                    var index = -1, isFunc = "function" == typeof path, result = isArrayLike(collection) ? Array(collection.length) : [];
                    return baseEach(collection, function(value) {
                        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
                    }), result;
                }), keyBy = createAggregator(function(result, value, key) {
                    baseAssignValue(result, key, value);
                }), partition = createAggregator(function(result, value, key) {
                    result[key ? 0 : 1].push(value);
                }, function() {
                    return [ [], [] ];
                }), sortBy = baseRest(function(collection, iteratees) {
                    if (null == collection) return [];
                    var length = iteratees.length;
                    return length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1]) ? iteratees = [] : length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2]) && (iteratees = [ iteratees[0] ]), 
                    baseOrderBy(collection, baseFlatten(iteratees, 1), []);
                }), now = ctxNow || function() {
                    return root.Date.now();
                }, bind = baseRest(function(func, thisArg, partials) {
                    var bitmask = WRAP_BIND_FLAG;
                    if (partials.length) {
                        var holders = replaceHolders(partials, getHolder(bind));
                        bitmask |= WRAP_PARTIAL_FLAG;
                    }
                    return createWrap(func, bitmask, thisArg, partials, holders);
                }), bindKey = baseRest(function(object, key, partials) {
                    var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
                    if (partials.length) {
                        var holders = replaceHolders(partials, getHolder(bindKey));
                        bitmask |= WRAP_PARTIAL_FLAG;
                    }
                    return createWrap(key, bitmask, object, partials, holders);
                }), defer = baseRest(function(func, args) {
                    return baseDelay(func, 1, args);
                }), delay = baseRest(function(func, wait, args) {
                    return baseDelay(func, toNumber(wait) || 0, args);
                });
                // Expose `MapCache`.
                memoize.Cache = MapCache;
                /**
	     * Creates a function that invokes `func` with its arguments transformed.
	     *
	     * @static
	     * @since 4.0.0
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to wrap.
	     * @param {...(Function|Function[])} [transforms=[_.identity]]
	     *  The argument transforms.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function doubled(n) {
	     *   return n * 2;
	     * }
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var func = _.overArgs(function(x, y) {
	     *   return [x, y];
	     * }, [square, doubled]);
	     *
	     * func(9, 3);
	     * // => [81, 6]
	     *
	     * func(10, 5);
	     * // => [100, 10]
	     */
                var overArgs = castRest(function(func, transforms) {
                    transforms = 1 == transforms.length && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
                    var funcsLength = transforms.length;
                    return baseRest(function(args) {
                        for (var index = -1, length = nativeMin(args.length, funcsLength); ++index < length; ) args[index] = transforms[index].call(this, args[index]);
                        return apply(func, this, args);
                    });
                }), partial = baseRest(function(func, partials) {
                    var holders = replaceHolders(partials, getHolder(partial));
                    return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
                }), partialRight = baseRest(function(func, partials) {
                    var holders = replaceHolders(partials, getHolder(partialRight));
                    return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
                }), rearg = flatRest(function(func, indexes) {
                    return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
                }), gt = createRelationalOperation(baseGt), gte = createRelationalOperation(function(value, other) {
                    return value >= other;
                }), isArguments = baseIsArguments(function() {
                    return arguments;
                }()) ? baseIsArguments : function(value) {
                    return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
                }, isArray = Array.isArray, isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer, isBuffer = nativeIsBuffer || stubFalse, isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate, isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap, isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp, isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet, isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray, lt = createRelationalOperation(baseLt), lte = createRelationalOperation(function(value, other) {
                    return value <= other;
                }), assign = createAssigner(function(object, source) {
                    if (isPrototype(source) || isArrayLike(source)) return void copyObject(source, keys(source), object);
                    for (var key in source) hasOwnProperty.call(source, key) && assignValue(object, key, source[key]);
                }), assignIn = createAssigner(function(object, source) {
                    copyObject(source, keysIn(source), object);
                }), assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
                    copyObject(source, keysIn(source), object, customizer);
                }), assignWith = createAssigner(function(object, source, srcIndex, customizer) {
                    copyObject(source, keys(source), object, customizer);
                }), at = flatRest(baseAt), defaults = baseRest(function(args) {
                    return args.push(undefined, customDefaultsAssignIn), apply(assignInWith, undefined, args);
                }), defaultsDeep = baseRest(function(args) {
                    return args.push(undefined, customDefaultsMerge), apply(mergeWith, undefined, args);
                }), invert = createInverter(function(result, value, key) {
                    result[value] = key;
                }, constant(identity)), invertBy = createInverter(function(result, value, key) {
                    hasOwnProperty.call(result, value) ? result[value].push(key) : result[value] = [ key ];
                }, getIteratee), invoke = baseRest(baseInvoke), merge = createAssigner(function(object, source, srcIndex) {
                    baseMerge(object, source, srcIndex);
                }), mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
                    baseMerge(object, source, srcIndex, customizer);
                }), omit = flatRest(function(object, paths) {
                    var result = {};
                    if (null == object) return result;
                    var isDeep = !1;
                    paths = arrayMap(paths, function(path) {
                        return path = castPath(path, object), isDeep || (isDeep = path.length > 1), path;
                    }), copyObject(object, getAllKeysIn(object), result), isDeep && (result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone));
                    for (var length = paths.length; length--; ) baseUnset(result, paths[length]);
                    return result;
                }), pick = flatRest(function(object, paths) {
                    return null == object ? {} : basePick(object, paths);
                }), toPairs = createToPairs(keys), toPairsIn = createToPairs(keysIn), camelCase = createCompounder(function(result, word, index) {
                    return word = word.toLowerCase(), result + (index ? capitalize(word) : word);
                }), kebabCase = createCompounder(function(result, word, index) {
                    return result + (index ? "-" : "") + word.toLowerCase();
                }), lowerCase = createCompounder(function(result, word, index) {
                    return result + (index ? " " : "") + word.toLowerCase();
                }), lowerFirst = createCaseFirst("toLowerCase"), snakeCase = createCompounder(function(result, word, index) {
                    return result + (index ? "_" : "") + word.toLowerCase();
                }), startCase = createCompounder(function(result, word, index) {
                    return result + (index ? " " : "") + upperFirst(word);
                }), upperCase = createCompounder(function(result, word, index) {
                    return result + (index ? " " : "") + word.toUpperCase();
                }), upperFirst = createCaseFirst("toUpperCase"), attempt = baseRest(function(func, args) {
                    try {
                        return apply(func, undefined, args);
                    } catch (e) {
                        return isError(e) ? e : new Error(e);
                    }
                }), bindAll = flatRest(function(object, methodNames) {
                    return arrayEach(methodNames, function(key) {
                        key = toKey(key), baseAssignValue(object, key, bind(object[key], object));
                    }), object;
                }), flow = createFlow(), flowRight = createFlow(!0), method = baseRest(function(path, args) {
                    return function(object) {
                        return baseInvoke(object, path, args);
                    };
                }), methodOf = baseRest(function(object, args) {
                    return function(path) {
                        return baseInvoke(object, path, args);
                    };
                }), over = createOver(arrayMap), overEvery = createOver(arrayEvery), overSome = createOver(arraySome), range = createRange(), rangeRight = createRange(!0), add = createMathOperation(function(augend, addend) {
                    return augend + addend;
                }, 0), ceil = createRound("ceil"), divide = createMathOperation(function(dividend, divisor) {
                    return dividend / divisor;
                }, 1), floor = createRound("floor"), multiply = createMathOperation(function(multiplier, multiplicand) {
                    return multiplier * multiplicand;
                }, 1), round = createRound("round"), subtract = createMathOperation(function(minuend, subtrahend) {
                    return minuend - subtrahend;
                }, 0);
                /*------------------------------------------------------------------------*/
                // Add methods that return wrapped values in chain sequences.
                // Add aliases.
                // Add methods to `lodash.prototype`.
                /*------------------------------------------------------------------------*/
                // Add methods that return unwrapped values in chain sequences.
                // Add aliases.
                /*------------------------------------------------------------------------*/
                /**
	     * The semantic version number.
	     *
	     * @static
	     * @memberOf _
	     * @type {string}
	     */
                // Assign default placeholders.
                // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
                // Add `LazyWrapper` methods that accept an `iteratee` value.
                // Add `LazyWrapper` methods for `_.head` and `_.last`.
                // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
                // Add `LazyWrapper` methods to `lodash.prototype`.
                // Add `Array` methods to `lodash.prototype`.
                // Map minified method names to their real names.
                // Add methods to `LazyWrapper`.
                // Add chain sequence methods to the `lodash` wrapper.
                // Add lazy aliases.
                return lodash.after = after, lodash.ary = ary, lodash.assign = assign, lodash.assignIn = assignIn, 
                lodash.assignInWith = assignInWith, lodash.assignWith = assignWith, lodash.at = at, 
                lodash.before = before, lodash.bind = bind, lodash.bindAll = bindAll, lodash.bindKey = bindKey, 
                lodash.castArray = castArray, lodash.chain = chain, lodash.chunk = chunk, lodash.compact = compact, 
                lodash.concat = concat, lodash.cond = cond, lodash.conforms = conforms, lodash.constant = constant, 
                lodash.countBy = countBy, lodash.create = create, lodash.curry = curry, lodash.curryRight = curryRight, 
                lodash.debounce = debounce, lodash.defaults = defaults, lodash.defaultsDeep = defaultsDeep, 
                lodash.defer = defer, lodash.delay = delay, lodash.difference = difference, lodash.differenceBy = differenceBy, 
                lodash.differenceWith = differenceWith, lodash.drop = drop, lodash.dropRight = dropRight, 
                lodash.dropRightWhile = dropRightWhile, lodash.dropWhile = dropWhile, lodash.fill = fill, 
                lodash.filter = filter, lodash.flatMap = flatMap, lodash.flatMapDeep = flatMapDeep, 
                lodash.flatMapDepth = flatMapDepth, lodash.flatten = flatten, lodash.flattenDeep = flattenDeep, 
                lodash.flattenDepth = flattenDepth, lodash.flip = flip, lodash.flow = flow, lodash.flowRight = flowRight, 
                lodash.fromPairs = fromPairs, lodash.functions = functions, lodash.functionsIn = functionsIn, 
                lodash.groupBy = groupBy, lodash.initial = initial, lodash.intersection = intersection, 
                lodash.intersectionBy = intersectionBy, lodash.intersectionWith = intersectionWith, 
                lodash.invert = invert, lodash.invertBy = invertBy, lodash.invokeMap = invokeMap, 
                lodash.iteratee = iteratee, lodash.keyBy = keyBy, lodash.keys = keys, lodash.keysIn = keysIn, 
                lodash.map = map, lodash.mapKeys = mapKeys, lodash.mapValues = mapValues, lodash.matches = matches, 
                lodash.matchesProperty = matchesProperty, lodash.memoize = memoize, lodash.merge = merge, 
                lodash.mergeWith = mergeWith, lodash.method = method, lodash.methodOf = methodOf, 
                lodash.mixin = mixin, lodash.negate = negate, lodash.nthArg = nthArg, lodash.omit = omit, 
                lodash.omitBy = omitBy, lodash.once = once, lodash.orderBy = orderBy, lodash.over = over, 
                lodash.overArgs = overArgs, lodash.overEvery = overEvery, lodash.overSome = overSome, 
                lodash.partial = partial, lodash.partialRight = partialRight, lodash.partition = partition, 
                lodash.pick = pick, lodash.pickBy = pickBy, lodash.property = property, lodash.propertyOf = propertyOf, 
                lodash.pull = pull, lodash.pullAll = pullAll, lodash.pullAllBy = pullAllBy, lodash.pullAllWith = pullAllWith, 
                lodash.pullAt = pullAt, lodash.range = range, lodash.rangeRight = rangeRight, lodash.rearg = rearg, 
                lodash.reject = reject, lodash.remove = remove, lodash.rest = rest, lodash.reverse = reverse, 
                lodash.sampleSize = sampleSize, lodash.set = set, lodash.setWith = setWith, lodash.shuffle = shuffle, 
                lodash.slice = slice, lodash.sortBy = sortBy, lodash.sortedUniq = sortedUniq, lodash.sortedUniqBy = sortedUniqBy, 
                lodash.split = split, lodash.spread = spread, lodash.tail = tail, lodash.take = take, 
                lodash.takeRight = takeRight, lodash.takeRightWhile = takeRightWhile, lodash.takeWhile = takeWhile, 
                lodash.tap = tap, lodash.throttle = throttle, lodash.thru = thru, lodash.toArray = toArray, 
                lodash.toPairs = toPairs, lodash.toPairsIn = toPairsIn, lodash.toPath = toPath, 
                lodash.toPlainObject = toPlainObject, lodash.transform = transform, lodash.unary = unary, 
                lodash.union = union, lodash.unionBy = unionBy, lodash.unionWith = unionWith, lodash.uniq = uniq, 
                lodash.uniqBy = uniqBy, lodash.uniqWith = uniqWith, lodash.unset = unset, lodash.unzip = unzip, 
                lodash.unzipWith = unzipWith, lodash.update = update, lodash.updateWith = updateWith, 
                lodash.values = values, lodash.valuesIn = valuesIn, lodash.without = without, lodash.words = words, 
                lodash.wrap = wrap, lodash.xor = xor, lodash.xorBy = xorBy, lodash.xorWith = xorWith, 
                lodash.zip = zip, lodash.zipObject = zipObject, lodash.zipObjectDeep = zipObjectDeep, 
                lodash.zipWith = zipWith, lodash.entries = toPairs, lodash.entriesIn = toPairsIn, 
                lodash.extend = assignIn, lodash.extendWith = assignInWith, mixin(lodash, lodash), 
                lodash.add = add, lodash.attempt = attempt, lodash.camelCase = camelCase, lodash.capitalize = capitalize, 
                lodash.ceil = ceil, lodash.clamp = clamp, lodash.clone = clone, lodash.cloneDeep = cloneDeep, 
                lodash.cloneDeepWith = cloneDeepWith, lodash.cloneWith = cloneWith, lodash.conformsTo = conformsTo, 
                lodash.deburr = deburr, lodash.defaultTo = defaultTo, lodash.divide = divide, lodash.endsWith = endsWith, 
                lodash.eq = eq, lodash.escape = escape, lodash.escapeRegExp = escapeRegExp, lodash.every = every, 
                lodash.find = find, lodash.findIndex = findIndex, lodash.findKey = findKey, lodash.findLast = findLast, 
                lodash.findLastIndex = findLastIndex, lodash.findLastKey = findLastKey, lodash.floor = floor, 
                lodash.forEach = forEach, lodash.forEachRight = forEachRight, lodash.forIn = forIn, 
                lodash.forInRight = forInRight, lodash.forOwn = forOwn, lodash.forOwnRight = forOwnRight, 
                lodash.get = get, lodash.gt = gt, lodash.gte = gte, lodash.has = has, lodash.hasIn = hasIn, 
                lodash.head = head, lodash.identity = identity, lodash.includes = includes, lodash.indexOf = indexOf, 
                lodash.inRange = inRange, lodash.invoke = invoke, lodash.isArguments = isArguments, 
                lodash.isArray = isArray, lodash.isArrayBuffer = isArrayBuffer, lodash.isArrayLike = isArrayLike, 
                lodash.isArrayLikeObject = isArrayLikeObject, lodash.isBoolean = isBoolean, lodash.isBuffer = isBuffer, 
                lodash.isDate = isDate, lodash.isElement = isElement, lodash.isEmpty = isEmpty, 
                lodash.isEqual = isEqual, lodash.isEqualWith = isEqualWith, lodash.isError = isError, 
                lodash.isFinite = isFinite, lodash.isFunction = isFunction, lodash.isInteger = isInteger, 
                lodash.isLength = isLength, lodash.isMap = isMap, lodash.isMatch = isMatch, lodash.isMatchWith = isMatchWith, 
                lodash.isNaN = isNaN, lodash.isNative = isNative, lodash.isNil = isNil, lodash.isNull = isNull, 
                lodash.isNumber = isNumber, lodash.isObject = isObject, lodash.isObjectLike = isObjectLike, 
                lodash.isPlainObject = isPlainObject, lodash.isRegExp = isRegExp, lodash.isSafeInteger = isSafeInteger, 
                lodash.isSet = isSet, lodash.isString = isString, lodash.isSymbol = isSymbol, lodash.isTypedArray = isTypedArray, 
                lodash.isUndefined = isUndefined, lodash.isWeakMap = isWeakMap, lodash.isWeakSet = isWeakSet, 
                lodash.join = join, lodash.kebabCase = kebabCase, lodash.last = last, lodash.lastIndexOf = lastIndexOf, 
                lodash.lowerCase = lowerCase, lodash.lowerFirst = lowerFirst, lodash.lt = lt, lodash.lte = lte, 
                lodash.max = max, lodash.maxBy = maxBy, lodash.mean = mean, lodash.meanBy = meanBy, 
                lodash.min = min, lodash.minBy = minBy, lodash.stubArray = stubArray, lodash.stubFalse = stubFalse, 
                lodash.stubObject = stubObject, lodash.stubString = stubString, lodash.stubTrue = stubTrue, 
                lodash.multiply = multiply, lodash.nth = nth, lodash.noConflict = noConflict, lodash.noop = noop, 
                lodash.now = now, lodash.pad = pad, lodash.padEnd = padEnd, lodash.padStart = padStart, 
                lodash.parseInt = parseInt, lodash.random = random, lodash.reduce = reduce, lodash.reduceRight = reduceRight, 
                lodash.repeat = repeat, lodash.replace = replace, lodash.result = result, lodash.round = round, 
                lodash.runInContext = runInContext, lodash.sample = sample, lodash.size = size, 
                lodash.snakeCase = snakeCase, lodash.some = some, lodash.sortedIndex = sortedIndex, 
                lodash.sortedIndexBy = sortedIndexBy, lodash.sortedIndexOf = sortedIndexOf, lodash.sortedLastIndex = sortedLastIndex, 
                lodash.sortedLastIndexBy = sortedLastIndexBy, lodash.sortedLastIndexOf = sortedLastIndexOf, 
                lodash.startCase = startCase, lodash.startsWith = startsWith, lodash.subtract = subtract, 
                lodash.sum = sum, lodash.sumBy = sumBy, lodash.template = template, lodash.times = times, 
                lodash.toFinite = toFinite, lodash.toInteger = toInteger, lodash.toLength = toLength, 
                lodash.toLower = toLower, lodash.toNumber = toNumber, lodash.toSafeInteger = toSafeInteger, 
                lodash.toString = toString, lodash.toUpper = toUpper, lodash.trim = trim, lodash.trimEnd = trimEnd, 
                lodash.trimStart = trimStart, lodash.truncate = truncate, lodash.unescape = unescape, 
                lodash.uniqueId = uniqueId, lodash.upperCase = upperCase, lodash.upperFirst = upperFirst, 
                lodash.each = forEach, lodash.eachRight = forEachRight, lodash.first = head, mixin(lodash, function() {
                    var source = {};
                    return baseForOwn(lodash, function(func, methodName) {
                        hasOwnProperty.call(lodash.prototype, methodName) || (source[methodName] = func);
                    }), source;
                }(), {
                    chain: !1
                }), lodash.VERSION = VERSION, arrayEach([ "bind", "bindKey", "curry", "curryRight", "partial", "partialRight" ], function(methodName) {
                    lodash[methodName].placeholder = lodash;
                }), arrayEach([ "drop", "take" ], function(methodName, index) {
                    LazyWrapper.prototype[methodName] = function(n) {
                        n = n === undefined ? 1 : nativeMax(toInteger(n), 0);
                        var result = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
                        return result.__filtered__ ? result.__takeCount__ = nativeMin(n, result.__takeCount__) : result.__views__.push({
                            size: nativeMin(n, MAX_ARRAY_LENGTH),
                            type: methodName + (result.__dir__ < 0 ? "Right" : "")
                        }), result;
                    }, LazyWrapper.prototype[methodName + "Right"] = function(n) {
                        return this.reverse()[methodName](n).reverse();
                    };
                }), arrayEach([ "filter", "map", "takeWhile" ], function(methodName, index) {
                    var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
                    LazyWrapper.prototype[methodName] = function(iteratee) {
                        var result = this.clone();
                        return result.__iteratees__.push({
                            iteratee: getIteratee(iteratee, 3),
                            type: type
                        }), result.__filtered__ = result.__filtered__ || isFilter, result;
                    };
                }), arrayEach([ "head", "last" ], function(methodName, index) {
                    var takeName = "take" + (index ? "Right" : "");
                    LazyWrapper.prototype[methodName] = function() {
                        return this[takeName](1).value()[0];
                    };
                }), arrayEach([ "initial", "tail" ], function(methodName, index) {
                    var dropName = "drop" + (index ? "" : "Right");
                    LazyWrapper.prototype[methodName] = function() {
                        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
                    };
                }), LazyWrapper.prototype.compact = function() {
                    return this.filter(identity);
                }, LazyWrapper.prototype.find = function(predicate) {
                    return this.filter(predicate).head();
                }, LazyWrapper.prototype.findLast = function(predicate) {
                    return this.reverse().find(predicate);
                }, LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
                    return "function" == typeof path ? new LazyWrapper(this) : this.map(function(value) {
                        return baseInvoke(value, path, args);
                    });
                }), LazyWrapper.prototype.reject = function(predicate) {
                    return this.filter(negate(getIteratee(predicate)));
                }, LazyWrapper.prototype.slice = function(start, end) {
                    start = toInteger(start);
                    var result = this;
                    return result.__filtered__ && (start > 0 || end < 0) ? new LazyWrapper(result) : (start < 0 ? result = result.takeRight(-start) : start && (result = result.drop(start)), 
                    end !== undefined && (end = toInteger(end), result = end < 0 ? result.dropRight(-end) : result.take(end - start)), 
                    result);
                }, LazyWrapper.prototype.takeRightWhile = function(predicate) {
                    return this.reverse().takeWhile(predicate).reverse();
                }, LazyWrapper.prototype.toArray = function() {
                    return this.take(MAX_ARRAY_LENGTH);
                }, baseForOwn(LazyWrapper.prototype, function(func, methodName) {
                    var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + ("last" == methodName ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
                    lodashFunc && (lodash.prototype[methodName] = function() {
                        var value = this.__wrapped__, args = isTaker ? [ 1 ] : arguments, isLazy = value instanceof LazyWrapper, iteratee = args[0], useLazy = isLazy || isArray(value), interceptor = function(value) {
                            var result = lodashFunc.apply(lodash, arrayPush([ value ], args));
                            return isTaker && chainAll ? result[0] : result;
                        };
                        useLazy && checkIteratee && "function" == typeof iteratee && 1 != iteratee.length && (// Avoid lazy use if the iteratee has a "length" value other than `1`.
                        isLazy = useLazy = !1);
                        var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
                        if (!retUnwrapped && useLazy) {
                            value = onlyLazy ? value : new LazyWrapper(this);
                            var result = func.apply(value, args);
                            return result.__actions__.push({
                                func: thru,
                                args: [ interceptor ],
                                thisArg: undefined
                            }), new LodashWrapper(result, chainAll);
                        }
                        return isUnwrapped && onlyLazy ? func.apply(this, args) : (result = this.thru(interceptor), 
                        isUnwrapped ? isTaker ? result.value()[0] : result.value() : result);
                    });
                }), arrayEach([ "pop", "push", "shift", "sort", "splice", "unshift" ], function(methodName) {
                    var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
                    lodash.prototype[methodName] = function() {
                        var args = arguments;
                        if (retUnwrapped && !this.__chain__) {
                            var value = this.value();
                            return func.apply(isArray(value) ? value : [], args);
                        }
                        return this[chainName](function(value) {
                            return func.apply(isArray(value) ? value : [], args);
                        });
                    };
                }), baseForOwn(LazyWrapper.prototype, function(func, methodName) {
                    var lodashFunc = lodash[methodName];
                    if (lodashFunc) {
                        var key = lodashFunc.name + "", names = realNames[key] || (realNames[key] = []);
                        names.push({
                            name: methodName,
                            func: lodashFunc
                        });
                    }
                }), realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [ {
                    name: "wrapper",
                    func: undefined
                } ], LazyWrapper.prototype.clone = lazyClone, LazyWrapper.prototype.reverse = lazyReverse, 
                LazyWrapper.prototype.value = lazyValue, lodash.prototype.at = wrapperAt, lodash.prototype.chain = wrapperChain, 
                lodash.prototype.commit = wrapperCommit, lodash.prototype.next = wrapperNext, lodash.prototype.plant = wrapperPlant, 
                lodash.prototype.reverse = wrapperReverse, lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue, 
                lodash.prototype.first = lodash.prototype.head, symIterator && (lodash.prototype[symIterator] = wrapperToIterator), 
                lodash;
            }, _ = runInContext();
            // Expose Lodash on the global object to prevent errors when Lodash is
            // loaded by a script tag in the presence of an AMD loader.
            // See http://requirejs.org/docs/errors.html#mismatch for more details.
            // Use `_.noConflict` to remove Lodash from the global object.
            root._ = _, __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return _;
            }.call(exports, __webpack_require__, exports, module), // Define as an anonymous module so, through path mapping, it can be
            // referenced as the "underscore" module.
            !(__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        }).call(this);
    }).call(exports, function() {
        return this;
    }(), __webpack_require__(42)(module));
}, /* 24 */
/***/
function(module, exports, __webpack_require__) {
    try {
        (function() {
            "use strict";
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            function _possibleConstructorReturn(self, call) {
                if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !call || "object" != typeof call && "function" != typeof call ? self : call;
            }
            function _inherits(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                        "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                    Constructor;
                };
            }(), _react = __webpack_require__(38), _react2 = _interopRequireDefault(_react), _immutabilityHelper = __webpack_require__(20), _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper), _lodash = __webpack_require__(23), _lodash2 = _interopRequireDefault(_lodash), _Support = __webpack_require__(25), _style = __webpack_require__(41), Tree = (_interopRequireDefault(_style), 
            function(_React$Component) {
                function Tree(props) {
                    _classCallCheck(this, Tree);
                    var _this = _possibleConstructorReturn(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).call(this, props));
                    return _this._handleSubmit = _this._handleSubmit.bind(_this), _this._handleDeleteNode = _this._handleDeleteNode.bind(_this), 
                    _this._handleToggleLock = _this._handleToggleLock.bind(_this), _this._handleToggleEdit = _this._handleToggleEdit.bind(_this), 
                    _this._handleChange = _this._handleChange.bind(_this), _this._handleToggleFold = _this._handleToggleFold.bind(_this), 
                    _this._handleAddRootNode = _this._handleAddRootNode.bind(_this), _this._handleAddNode = _this._handleAddNode.bind(_this), 
                    _this.state = {
                        nodeData: props.data
                    }, _this;
                }
                return _inherits(Tree, _React$Component), _createClass(Tree, [ {
                    key: "_handleSubmit",
                    value: function() {
                        this.props.onSubmit(JSON.stringify(this.state.nodeData));
                    }
                }, {
                    key: "_handleDeleteNode",
                    value: function(_ref) {
                        var target = _ref.target, nodeData = _lodash2.default.cloneDeep(this.state.nodeData), index = target.closest("li").getAttribute("data-index").split("-");
                        (0, _Support.deleteData)(nodeData, index), this.setState({
                            nodeData: nodeData
                        });
                    }
                }, {
                    key: "_handleToggleLock",
                    value: function(_ref2) {
                        var target = _ref2.target, nodeData = _lodash2.default.cloneDeep(this.state.nodeData), index = target.closest("li").getAttribute("data-index").split("-"), selectedNode = (0, 
                        _Support.selectData)(nodeData, index);
                        selectedNode.isLocked = !selectedNode.isLocked, this.setState({
                            nodeData: nodeData
                        });
                    }
                }, {
                    key: "_handleToggleEdit",
                    value: function(_ref3) {
                        var target = _ref3.target, nodeData = _lodash2.default.cloneDeep(this.state.nodeData), index = target.closest("li").getAttribute("data-index").split("-"), selectedNode = (0, 
                        _Support.selectData)(nodeData, index);
                        selectedNode.isEditMode = !selectedNode.isEditMode, this.setState({
                            nodeData: nodeData
                        });
                    }
                }, {
                    key: "_handleChange",
                    value: function(_ref4) {
                        var target = _ref4.target, nodeData = _lodash2.default.cloneDeep(this.state.nodeData), index = target.closest("li").getAttribute("data-index").split("-"), selectedNode = (0, 
                        _Support.selectData)(nodeData, index);
                        selectedNode.title = target.value, this.setState({
                            nodeData: nodeData
                        });
                    }
                }, {
                    key: "_handleToggleFold",
                    value: function(_ref5) {
                        var target = _ref5.target, ul = target.parentElement.lastElementChild;
                        if (target.className = "button_child_up" === target.className ? "button_child_down" : "button_child_up", 
                        "button_child_up" === target.className) {
                            var t = ul.animate([ {
                                opacity: 1,
                                easing: "ease-out"
                            }, {
                                opacity: .1,
                                easing: "ease-in"
                            }, {
                                opacity: 0
                            } ], {
                                duration: 1e3
                            });
                            t.addEventListener("finish", function() {
                                ul.className = "button_child_none";
                            });
                        } else {
                            ul.className = "";
                            ul.animate([ {
                                opacity: 0,
                                easing: "ease-out"
                            }, {
                                opacity: .2,
                                easing: "ease-in"
                            }, {
                                opacity: 1
                            } ], {
                                duration: 1e3
                            });
                        }
                    }
                }, {
                    key: "_handleAddRootNode",
                    value: function() {
                        return void 0 === this.state.nodeData ? void this.setState({
                            nodeData: [ (0, _Support.initData)() ]
                        }) : void this.setState((0, _immutabilityHelper2.default)(this.state, {
                            nodeData: {
                                $push: [ (0, _Support.initData)() ]
                            }
                        }));
                    }
                }, {
                    key: "_handleAddNode",
                    value: function(_ref6) {
                        var target = _ref6.target, nodeData = _lodash2.default.cloneDeep(this.state.nodeData), index = target.closest("li").getAttribute("data-index").split("-"), selectedNode = (0, 
                        _Support.selectData)(nodeData, index);
                        selectedNode.childNodes ? selectedNode.childNodes.push((0, _Support.initData)()) : selectedNode.childNodes = [ (0, 
                        _Support.initData)() ], this.setState({
                            nodeData: nodeData
                        });
                    }
                }, {
                    key: "_renderReadField",
                    value: function(title) {
                        return _react2.default.createElement("span", {
                            className: "read_area"
                        }, title);
                    }
                }, {
                    key: "_renderEditField",
                    value: function(title) {
                        return _react2.default.createElement("span", {
                            className: "input_area"
                        }, _react2.default.createElement("input", {
                            type: "text",
                            className: "edit",
                            onChange: this._handleChange,
                            value: title
                        }));
                    }
                }, {
                    key: "_renderDefaultBtns",
                    value: function() {
                        return _react2.default.createElement("div", {
                            className: "button_group"
                        }, _react2.default.createElement("button", {
                            onClick: this._handleAddNode,
                            type: "button",
                            className: "button_add"
                        }, "ADD"), _react2.default.createElement("button", {
                            onClick: this._handleToggleLock,
                            type: "button",
                            className: "button_unlock"
                        }, "LOCK"), _react2.default.createElement("button", {
                            onClick: this._handleToggleEdit,
                            type: "button",
                            className: "button_edit_off"
                        }, "EDIT"), _react2.default.createElement("button", {
                            onClick: this._handleDeleteNode,
                            type: "button",
                            className: "button_delete"
                        }, "DELETE"));
                    }
                }, {
                    key: "_renderEditBtns",
                    value: function() {
                        return _react2.default.createElement("div", {
                            className: "button_group"
                        }, _react2.default.createElement("button", {
                            onClick: this._handleToggleEdit,
                            type: "button",
                            className: "button_edit_on"
                        }, "COMPLETE"), _react2.default.createElement("button", {
                            onClick: this._handleDeleteNode,
                            type: "button",
                            className: "button_delete"
                        }, "DELETE"));
                    }
                }, {
                    key: "_renderLockBtns",
                    value: function() {
                        return _react2.default.createElement("div", {
                            className: "button_group"
                        }, _react2.default.createElement("button", {
                            onClick: this._handleToggleLock,
                            type: "button",
                            className: "button_lock"
                        }, "UNLOCK"));
                    }
                }, {
                    key: "_renderButtonGroup",
                    value: function(isParentLocked, isLocked) {
                        var isEditMode = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return isParentLocked ? void 0 : isLocked ? this._renderLockBtns() : isEditMode ? this._renderEditBtns() : this._renderDefaultBtns();
                    }
                }, {
                    key: "_renderNode",
                    value: function(node, keys) {
                        var isParentLocked = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], hasChild = _lodash2.default.isEmpty(node.childNodes) ? "button_child_none" : "button_child_down", willChildLock = isParentLocked ? isParentLocked : node.isLocked;
                        return _react2.default.createElement("li", {
                            "data-index": keys,
                            key: keys
                        }, _react2.default.createElement("button", {
                            type: "button",
                            className: hasChild,
                            onClick: this._handleToggleFold
                        }, "open"), _react2.default.createElement("div", {
                            className: "contents_tree"
                        }, this.props.isEditable ? this._renderButtonGroup(isParentLocked, node.isLocked, node.isEditMode) : void 0, _react2.default.createElement("div", {
                            className: "text_area"
                        }, node.isEditMode ? this._renderEditField(node.title) : this._renderReadField(node.title))), _lodash2.default.isEmpty(node.childNodes) ? void 0 : this._renderNodeContainer(node.childNodes, keys, willChildLock));
                    }
                }, {
                    key: "_renderNodeContainer",
                    value: function(nodes, depth) {
                        var _this2 = this, isParentLocked = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return _react2.default.createElement("ul", null, nodes.map(function(e, i) {
                            var keys = "init" !== depth ? depth + "-" + i : i;
                            return _this2._renderNode(e, keys, isParentLocked);
                        }));
                    }
                }, {
                    key: "_renderAddRootArea",
                    value: function() {
                        return _react2.default.createElement("div", {
                            className: "start_back"
                        }, _react2.default.createElement("ul", null, _react2.default.createElement("li", null, _react2.default.createElement("p", null, _react2.default.createElement("strong", null, "MARLIN TREE"))), _react2.default.createElement("li", {
                            className: "contents_start"
                        }, _react2.default.createElement("button", {
                            onClick: this._handleAddRootNode,
                            type: "button"
                        }, "MARLIN TREE START"), _react2.default.createElement("button", {
                            onClick: this._handleSubmit,
                            type: "submit"
                        }, "SUBMIT"))));
                    }
                }, {
                    key: "render",
                    value: function() {
                        return _react2.default.createElement("div", {
                            id: "marlinTreeView"
                        }, this.props.isEditable ? this._renderAddRootArea() : void 0, _react2.default.createElement("div", {
                            className: "contents_wrap"
                        }, this._renderNodeContainer(this.state.nodeData, "init")));
                    }
                } ]), Tree;
            }(_react2.default.Component));
            exports.default = Tree;
        }).call(this);
    } finally {}
}, /* 25 */
/***/
function(module, exports, __webpack_require__) {
    try {
        (function() {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            exports.initData = function() {
                return {
                    title: "",
                    isEditMode: !0,
                    isLocked: !1,
                    order: 0,
                    childNodes: []
                };
            }, exports.selectData = function() {
                var data = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, indexArray = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], _hasChildNodes = function _hasChildNodes() {
                    var data = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, indexArray = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    return indexArray.length > 0 ? _hasChildNodes(data.childNodes[indexArray.shift()], indexArray) : data;
                };
                return _hasChildNodes(data[indexArray.shift()], indexArray);
            }, exports.deleteData = function() {
                var data = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, indexArray = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], _hasChildNodes = function _hasChildNodes() {
                    var data = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, indexArray = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    return indexArray.length > 1 ? _hasChildNodes(data.childNodes[indexArray.shift()], indexArray) : (data.childNodes.splice(indexArray.shift(), 1), 
                    data);
                };
                return 1 === indexArray.length ? (data.splice(indexArray.shift(), 1), data) : _hasChildNodes(data[indexArray.shift()], indexArray);
            };
        }).call(this);
    } finally {}
}, /* 26 */
/***/
function(module, exports) {
    /**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
    "use strict";
    /**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {string} key to be escaped.
	 * @return {string} the escaped key.
	 */
    function escape(key) {
        var escapeRegex = /[=:]/g, escaperLookup = {
            "=": "=0",
            ":": "=2"
        }, escapedString = ("" + key).replace(escapeRegex, function(match) {
            return escaperLookup[match];
        });
        return "$" + escapedString;
    }
    /**
	 * Unescape and unwrap key for human-readable display
	 *
	 * @param {string} key to unescape.
	 * @return {string} the unescaped key.
	 */
    function unescape(key) {
        var unescapeRegex = /(=0|=2)/g, unescaperLookup = {
            "=0": "=",
            "=2": ":"
        }, keySubstring = "." === key[0] && "$" === key[1] ? key.substring(2) : key.substring(1);
        return ("" + keySubstring).replace(unescapeRegex, function(match) {
            return unescaperLookup[match];
        });
    }
    var KeyEscapeUtils = {
        escape: escape,
        unescape: unescape
    };
    module.exports = KeyEscapeUtils;
}, /* 27 */
/***/
function(module, exports, __webpack_require__) {
    /**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
    "use strict";
    var _prodInvariant = __webpack_require__(4), oneArgumentPooler = (__webpack_require__(3), 
    function(copyFieldsFrom) {
        var Klass = this;
        if (Klass.instancePool.length) {
            var instance = Klass.instancePool.pop();
            return Klass.call(instance, copyFieldsFrom), instance;
        }
        return new Klass(copyFieldsFrom);
    }), twoArgumentPooler = function(a1, a2) {
        var Klass = this;
        if (Klass.instancePool.length) {
            var instance = Klass.instancePool.pop();
            return Klass.call(instance, a1, a2), instance;
        }
        return new Klass(a1, a2);
    }, threeArgumentPooler = function(a1, a2, a3) {
        var Klass = this;
        if (Klass.instancePool.length) {
            var instance = Klass.instancePool.pop();
            return Klass.call(instance, a1, a2, a3), instance;
        }
        return new Klass(a1, a2, a3);
    }, fourArgumentPooler = function(a1, a2, a3, a4) {
        var Klass = this;
        if (Klass.instancePool.length) {
            var instance = Klass.instancePool.pop();
            return Klass.call(instance, a1, a2, a3, a4), instance;
        }
        return new Klass(a1, a2, a3, a4);
    }, standardReleaser = function(instance) {
        var Klass = this;
        instance instanceof Klass ? void 0 : _prodInvariant("25"), instance.destructor(), 
        Klass.instancePool.length < Klass.poolSize && Klass.instancePool.push(instance);
    }, DEFAULT_POOL_SIZE = 10, DEFAULT_POOLER = oneArgumentPooler, addPoolingTo = function(CopyConstructor, pooler) {
        // Casting as any so that flow ignores the actual implementation and trusts
        // it to match the type we declared
        var NewKlass = CopyConstructor;
        return NewKlass.instancePool = [], NewKlass.getPooled = pooler || DEFAULT_POOLER, 
        NewKlass.poolSize || (NewKlass.poolSize = DEFAULT_POOL_SIZE), NewKlass.release = standardReleaser, 
        NewKlass;
    }, PooledClass = {
        addPoolingTo: addPoolingTo,
        oneArgumentPooler: oneArgumentPooler,
        twoArgumentPooler: twoArgumentPooler,
        threeArgumentPooler: threeArgumentPooler,
        fourArgumentPooler: fourArgumentPooler
    };
    module.exports = PooledClass;
}, /* 28 */
/***/
function(module, exports, __webpack_require__) {
    /**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
    "use strict";
    var _assign = __webpack_require__(5), ReactChildren = __webpack_require__(29), ReactComponent = __webpack_require__(8), ReactPureComponent = __webpack_require__(34), ReactClass = __webpack_require__(30), ReactDOMFactories = __webpack_require__(31), ReactElement = __webpack_require__(2), ReactPropTypes = __webpack_require__(32), ReactVersion = __webpack_require__(35), onlyChild = __webpack_require__(36), createElement = (__webpack_require__(1), 
    ReactElement.createElement), createFactory = ReactElement.createFactory, cloneElement = ReactElement.cloneElement, __spread = _assign, React = {
        // Modern
        Children: {
            map: ReactChildren.map,
            forEach: ReactChildren.forEach,
            count: ReactChildren.count,
            toArray: ReactChildren.toArray,
            only: onlyChild
        },
        Component: ReactComponent,
        PureComponent: ReactPureComponent,
        createElement: createElement,
        cloneElement: cloneElement,
        isValidElement: ReactElement.isValidElement,
        // Classic
        PropTypes: ReactPropTypes,
        createClass: ReactClass.createClass,
        createFactory: createFactory,
        createMixin: function(mixin) {
            // Currently a noop. Will be used to validate and trace mixins.
            return mixin;
        },
        // This looks DOM specific but these are actually isomorphic helpers
        // since they are just generating DOM strings.
        DOM: ReactDOMFactories,
        version: ReactVersion,
        // Deprecated hook for JSX spread, don't use this for anything.
        __spread: __spread
    };
    module.exports = React;
}, /* 29 */
/***/
function(module, exports, __webpack_require__) {
    /**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
    "use strict";
    function escapeUserProvidedKey(text) {
        return ("" + text).replace(userProvidedKeyEscapeRegex, "$&/");
    }
    /**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
    function ForEachBookKeeping(forEachFunction, forEachContext) {
        this.func = forEachFunction, this.context = forEachContext, this.count = 0;
    }
    function forEachSingleChild(bookKeeping, child, name) {
        var func = bookKeeping.func, context = bookKeeping.context;
        func.call(context, child, bookKeeping.count++);
    }
    /**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
    function forEachChildren(children, forEachFunc, forEachContext) {
        if (null == children) return children;
        var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
        traverseAllChildren(children, forEachSingleChild, traverseContext), ForEachBookKeeping.release(traverseContext);
    }
    /**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
    function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
        this.result = mapResult, this.keyPrefix = keyPrefix, this.func = mapFunction, this.context = mapContext, 
        this.count = 0;
    }
    function mapSingleChildIntoContext(bookKeeping, child, childKey) {
        var result = bookKeeping.result, keyPrefix = bookKeeping.keyPrefix, func = bookKeeping.func, context = bookKeeping.context, mappedChild = func.call(context, child, bookKeeping.count++);
        Array.isArray(mappedChild) ? mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument) : null != mappedChild && (ReactElement.isValidElement(mappedChild) && (mappedChild = ReactElement.cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        keyPrefix + (!mappedChild.key || child && child.key === mappedChild.key ? "" : escapeUserProvidedKey(mappedChild.key) + "/") + childKey)), 
        result.push(mappedChild));
    }
    function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
        var escapedPrefix = "";
        null != prefix && (escapedPrefix = escapeUserProvidedKey(prefix) + "/");
        var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
        traverseAllChildren(children, mapSingleChildIntoContext, traverseContext), MapBookKeeping.release(traverseContext);
    }
    /**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
    function mapChildren(children, func, context) {
        if (null == children) return children;
        var result = [];
        return mapIntoWithKeyPrefixInternal(children, result, null, func, context), result;
    }
    function forEachSingleChildDummy(traverseContext, child, name) {
        return null;
    }
    /**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
    function countChildren(children, context) {
        return traverseAllChildren(children, forEachSingleChildDummy, null);
    }
    /**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
	 */
    function toArray(children) {
        var result = [];
        return mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument), 
        result;
    }
    var PooledClass = __webpack_require__(27), ReactElement = __webpack_require__(2), emptyFunction = __webpack_require__(6), traverseAllChildren = __webpack_require__(37), twoArgumentPooler = PooledClass.twoArgumentPooler, fourArgumentPooler = PooledClass.fourArgumentPooler, userProvidedKeyEscapeRegex = /\/+/g;
    ForEachBookKeeping.prototype.destructor = function() {
        this.func = null, this.context = null, this.count = 0;
    }, PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler), MapBookKeeping.prototype.destructor = function() {
        this.result = null, this.keyPrefix = null, this.func = null, this.context = null, 
        this.count = 0;
    }, PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);
    var ReactChildren = {
        forEach: forEachChildren,
        map: mapChildren,
        mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
        count: countChildren,
        toArray: toArray
    };
    module.exports = ReactChildren;
}, /* 30 */
/***/
function(module, exports, __webpack_require__) {
    /**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
    "use strict";
    // Helper function to allow the creation of anonymous functions which do not
    // have .name set to the name of the variable being assigned to.
    function identity(fn) {
        return fn;
    }
    function validateMethodOverride(isAlreadyDefined, name) {
        var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;
        // Disallow overriding of base class methods unless explicitly allowed.
        ReactClassMixin.hasOwnProperty(name) && ("OVERRIDE_BASE" !== specPolicy ? _prodInvariant("73", name) : void 0), 
        // Disallow defining methods more than once unless explicitly allowed.
        isAlreadyDefined && ("DEFINE_MANY" !== specPolicy && "DEFINE_MANY_MERGED" !== specPolicy ? _prodInvariant("74", name) : void 0);
    }
    /**
	 * Mixin helper which handles policy validation and reserved
	 * specification keys when building React classes.
	 */
    function mixSpecIntoComponent(Constructor, spec) {
        if (spec) {
            "function" == typeof spec ? _prodInvariant("75") : void 0, ReactElement.isValidElement(spec) ? _prodInvariant("76") : void 0;
            var proto = Constructor.prototype, autoBindPairs = proto.__reactAutoBindPairs;
            // By handling mixins before any other properties, we ensure the same
            // chaining order is applied to methods with DEFINE_MANY policy, whether
            // mixins are listed before or after these methods in the spec.
            spec.hasOwnProperty(MIXINS_KEY) && RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
            for (var name in spec) if (spec.hasOwnProperty(name) && name !== MIXINS_KEY) {
                var property = spec[name], isAlreadyDefined = proto.hasOwnProperty(name);
                if (validateMethodOverride(isAlreadyDefined, name), RESERVED_SPEC_KEYS.hasOwnProperty(name)) RESERVED_SPEC_KEYS[name](Constructor, property); else {
                    // Setup methods on prototype:
                    // The following member methods should not be automatically bound:
                    // 1. Expected ReactClass methods (in the "interface").
                    // 2. Overridden methods (that were mixed in).
                    var isReactClassMethod = ReactClassInterface.hasOwnProperty(name), isFunction = "function" == typeof property, shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== !1;
                    if (shouldAutoBind) autoBindPairs.push(name, property), proto[name] = property; else if (isAlreadyDefined) {
                        var specPolicy = ReactClassInterface[name];
                        // These cases should already be caught by validateMethodOverride.
                        !isReactClassMethod || "DEFINE_MANY_MERGED" !== specPolicy && "DEFINE_MANY" !== specPolicy ? _prodInvariant("77", specPolicy, name) : void 0, 
                        // For methods which are defined more than once, call the existing
                        // methods before calling the new property, merging if appropriate.
                        "DEFINE_MANY_MERGED" === specPolicy ? proto[name] = createMergedResultFunction(proto[name], property) : "DEFINE_MANY" === specPolicy && (proto[name] = createChainedFunction(proto[name], property));
                    } else proto[name] = property;
                }
            }
        } else ;
    }
    function mixStaticSpecIntoComponent(Constructor, statics) {
        if (statics) for (var name in statics) {
            var property = statics[name];
            if (statics.hasOwnProperty(name)) {
                var isReserved = name in RESERVED_SPEC_KEYS;
                isReserved ? _prodInvariant("78", name) : void 0;
                var isInherited = name in Constructor;
                isInherited ? _prodInvariant("79", name) : void 0, Constructor[name] = property;
            }
        }
    }
    /**
	 * Merge two objects, but throw if both contain the same key.
	 *
	 * @param {object} one The first object, which is mutated.
	 * @param {object} two The second object
	 * @return {object} one after it has been mutated to contain everything in two.
	 */
    function mergeIntoWithNoDuplicateKeys(one, two) {
        one && two && "object" == typeof one && "object" == typeof two ? void 0 : _prodInvariant("80");
        for (var key in two) two.hasOwnProperty(key) && (void 0 !== one[key] ? _prodInvariant("81", key) : void 0, 
        one[key] = two[key]);
        return one;
    }
    /**
	 * Creates a function that invokes two functions and merges their return values.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
    function createMergedResultFunction(one, two) {
        return function() {
            var a = one.apply(this, arguments), b = two.apply(this, arguments);
            if (null == a) return b;
            if (null == b) return a;
            var c = {};
            return mergeIntoWithNoDuplicateKeys(c, a), mergeIntoWithNoDuplicateKeys(c, b), c;
        };
    }
    /**
	 * Creates a function that invokes two functions and ignores their return vales.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
    function createChainedFunction(one, two) {
        return function() {
            one.apply(this, arguments), two.apply(this, arguments);
        };
    }
    /**
	 * Binds a method to the component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 * @param {function} method Method to be bound.
	 * @return {function} The bound method.
	 */
    function bindAutoBindMethod(component, method) {
        var boundMethod = method.bind(component);
        return boundMethod;
    }
    /**
	 * Binds all auto-bound methods in a component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 */
    function bindAutoBindMethods(component) {
        for (var pairs = component.__reactAutoBindPairs, i = 0; i < pairs.length; i += 2) {
            var autoBindKey = pairs[i], method = pairs[i + 1];
            component[autoBindKey] = bindAutoBindMethod(component, method);
        }
    }
    var _prodInvariant = __webpack_require__(4), _assign = __webpack_require__(5), ReactComponent = __webpack_require__(8), ReactElement = __webpack_require__(2), ReactNoopUpdateQueue = (__webpack_require__(12), 
    __webpack_require__(9)), emptyObject = __webpack_require__(7), MIXINS_KEY = (__webpack_require__(3), 
    __webpack_require__(1), "mixins"), injectedMixins = [], ReactClassInterface = {
        /**
	   * An array of Mixin objects to include when defining your component.
	   *
	   * @type {array}
	   * @optional
	   */
        mixins: "DEFINE_MANY",
        /**
	   * An object containing properties and methods that should be defined on
	   * the component's constructor instead of its prototype (static methods).
	   *
	   * @type {object}
	   * @optional
	   */
        statics: "DEFINE_MANY",
        /**
	   * Definition of prop types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
        propTypes: "DEFINE_MANY",
        /**
	   * Definition of context types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
        contextTypes: "DEFINE_MANY",
        /**
	   * Definition of context types this component sets for its children.
	   *
	   * @type {object}
	   * @optional
	   */
        childContextTypes: "DEFINE_MANY",
        // ==== Definition methods ====
        /**
	   * Invoked when the component is mounted. Values in the mapping will be set on
	   * `this.props` if that prop is not specified (i.e. using an `in` check).
	   *
	   * This method is invoked before `getInitialState` and therefore cannot rely
	   * on `this.state` or use `this.setState`.
	   *
	   * @return {object}
	   * @optional
	   */
        getDefaultProps: "DEFINE_MANY_MERGED",
        /**
	   * Invoked once before the component is mounted. The return value will be used
	   * as the initial value of `this.state`.
	   *
	   *   getInitialState: function() {
	   *     return {
	   *       isOn: false,
	   *       fooBaz: new BazFoo()
	   *     }
	   *   }
	   *
	   * @return {object}
	   * @optional
	   */
        getInitialState: "DEFINE_MANY_MERGED",
        /**
	   * @return {object}
	   * @optional
	   */
        getChildContext: "DEFINE_MANY_MERGED",
        /**
	   * Uses props from `this.props` and state from `this.state` to render the
	   * structure of the component.
	   *
	   * No guarantees are made about when or how often this method is invoked, so
	   * it must not have side effects.
	   *
	   *   render: function() {
	   *     var name = this.props.name;
	   *     return <div>Hello, {name}!</div>;
	   *   }
	   *
	   * @return {ReactComponent}
	   * @nosideeffects
	   * @required
	   */
        render: "DEFINE_ONCE",
        // ==== Delegate methods ====
        /**
	   * Invoked when the component is initially created and about to be mounted.
	   * This may have side effects, but any external subscriptions or data created
	   * by this method must be cleaned up in `componentWillUnmount`.
	   *
	   * @optional
	   */
        componentWillMount: "DEFINE_MANY",
        /**
	   * Invoked when the component has been mounted and has a DOM representation.
	   * However, there is no guarantee that the DOM node is in the document.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been mounted (initialized and rendered) for the first time.
	   *
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
        componentDidMount: "DEFINE_MANY",
        /**
	   * Invoked before the component receives new props.
	   *
	   * Use this as an opportunity to react to a prop transition by updating the
	   * state using `this.setState`. Current props are accessed via `this.props`.
	   *
	   *   componentWillReceiveProps: function(nextProps, nextContext) {
	   *     this.setState({
	   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	   *     });
	   *   }
	   *
	   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	   * transition may cause a state change, but the opposite is not true. If you
	   * need it, you are probably looking for `componentWillUpdate`.
	   *
	   * @param {object} nextProps
	   * @optional
	   */
        componentWillReceiveProps: "DEFINE_MANY",
        /**
	   * Invoked while deciding if the component should be updated as a result of
	   * receiving new props, state and/or context.
	   *
	   * Use this as an opportunity to `return false` when you're certain that the
	   * transition to the new props/state/context will not require a component
	   * update.
	   *
	   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	   *     return !equal(nextProps, this.props) ||
	   *       !equal(nextState, this.state) ||
	   *       !equal(nextContext, this.context);
	   *   }
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @return {boolean} True if the component should update.
	   * @optional
	   */
        shouldComponentUpdate: "DEFINE_ONCE",
        /**
	   * Invoked when the component is about to update due to a transition from
	   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	   * and `nextContext`.
	   *
	   * Use this as an opportunity to perform preparation before an update occurs.
	   *
	   * NOTE: You **cannot** use `this.setState()` in this method.
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @param {ReactReconcileTransaction} transaction
	   * @optional
	   */
        componentWillUpdate: "DEFINE_MANY",
        /**
	   * Invoked when the component's DOM representation has been updated.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been updated.
	   *
	   * @param {object} prevProps
	   * @param {?object} prevState
	   * @param {?object} prevContext
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
        componentDidUpdate: "DEFINE_MANY",
        /**
	   * Invoked when the component is about to be removed from its parent and have
	   * its DOM representation destroyed.
	   *
	   * Use this as an opportunity to deallocate any external resources.
	   *
	   * NOTE: There is no `componentDidUnmount` since your component will have been
	   * destroyed by that point.
	   *
	   * @optional
	   */
        componentWillUnmount: "DEFINE_MANY",
        // ==== Advanced methods ====
        /**
	   * Updates the component's currently mounted DOM representation.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   * @overridable
	   */
        updateComponent: "OVERRIDE_BASE"
    }, RESERVED_SPEC_KEYS = {
        displayName: function(Constructor, displayName) {
            Constructor.displayName = displayName;
        },
        mixins: function(Constructor, mixins) {
            if (mixins) for (var i = 0; i < mixins.length; i++) mixSpecIntoComponent(Constructor, mixins[i]);
        },
        childContextTypes: function(Constructor, childContextTypes) {
            Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, childContextTypes);
        },
        contextTypes: function(Constructor, contextTypes) {
            Constructor.contextTypes = _assign({}, Constructor.contextTypes, contextTypes);
        },
        /**
	   * Special case getDefaultProps which should move into statics but requires
	   * automatic merging.
	   */
        getDefaultProps: function(Constructor, getDefaultProps) {
            Constructor.getDefaultProps ? Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps) : Constructor.getDefaultProps = getDefaultProps;
        },
        propTypes: function(Constructor, propTypes) {
            Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
        },
        statics: function(Constructor, statics) {
            mixStaticSpecIntoComponent(Constructor, statics);
        },
        autobind: function() {}
    }, ReactClassMixin = {
        /**
	   * TODO: This will be deprecated because state should always keep a consistent
	   * type signature and the only use case for this, is to avoid that.
	   */
        replaceState: function(newState, callback) {
            this.updater.enqueueReplaceState(this, newState), callback && this.updater.enqueueCallback(this, callback, "replaceState");
        },
        /**
	   * Checks whether or not this composite component is mounted.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
        isMounted: function() {
            return this.updater.isMounted(this);
        }
    }, ReactClassComponent = function() {};
    _assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);
    /**
	 * Module for creating composite components.
	 *
	 * @class ReactClass
	 */
    var ReactClass = {
        /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
        createClass: function(spec) {
            // To keep our warnings more understandable, we'll use a little hack here to
            // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
            // unnecessarily identify a class without displayName as 'Constructor'.
            var Constructor = identity(function(props, context, updater) {
                // Wire up auto-binding
                this.__reactAutoBindPairs.length && bindAutoBindMethods(this), this.props = props, 
                this.context = context, this.refs = emptyObject, this.updater = updater || ReactNoopUpdateQueue, 
                this.state = null;
                // ReactClasses doesn't have constructors. Instead, they use the
                // getInitialState and componentWillMount methods for initialization.
                var initialState = this.getInitialState ? this.getInitialState() : null;
                "object" != typeof initialState || Array.isArray(initialState) ? _prodInvariant("82", Constructor.displayName || "ReactCompositeComponent") : void 0, 
                this.state = initialState;
            });
            Constructor.prototype = new ReactClassComponent(), Constructor.prototype.constructor = Constructor, 
            Constructor.prototype.__reactAutoBindPairs = [], injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor)), 
            mixSpecIntoComponent(Constructor, spec), // Initialize the defaultProps property after all mixins have been merged.
            Constructor.getDefaultProps && (Constructor.defaultProps = Constructor.getDefaultProps()), 
            Constructor.prototype.render ? void 0 : _prodInvariant("83");
            // Reduce time spent doing lookups by setting these on the prototype.
            for (var methodName in ReactClassInterface) Constructor.prototype[methodName] || (Constructor.prototype[methodName] = null);
            return Constructor;
        },
        injection: {
            injectMixin: function(mixin) {
                injectedMixins.push(mixin);
            }
        }
    };
    module.exports = ReactClass;
}, /* 31 */
/***/
function(module, exports, __webpack_require__) {
    /**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
    "use strict";
    var ReactElement = __webpack_require__(2), createDOMFactory = ReactElement.createFactory, ReactDOMFactories = {
        a: createDOMFactory("a"),
        abbr: createDOMFactory("abbr"),
        address: createDOMFactory("address"),
        area: createDOMFactory("area"),
        article: createDOMFactory("article"),
        aside: createDOMFactory("aside"),
        audio: createDOMFactory("audio"),
        b: createDOMFactory("b"),
        base: createDOMFactory("base"),
        bdi: createDOMFactory("bdi"),
        bdo: createDOMFactory("bdo"),
        big: createDOMFactory("big"),
        blockquote: createDOMFactory("blockquote"),
        body: createDOMFactory("body"),
        br: createDOMFactory("br"),
        button: createDOMFactory("button"),
        canvas: createDOMFactory("canvas"),
        caption: createDOMFactory("caption"),
        cite: createDOMFactory("cite"),
        code: createDOMFactory("code"),
        col: createDOMFactory("col"),
        colgroup: createDOMFactory("colgroup"),
        data: createDOMFactory("data"),
        datalist: createDOMFactory("datalist"),
        dd: createDOMFactory("dd"),
        del: createDOMFactory("del"),
        details: createDOMFactory("details"),
        dfn: createDOMFactory("dfn"),
        dialog: createDOMFactory("dialog"),
        div: createDOMFactory("div"),
        dl: createDOMFactory("dl"),
        dt: createDOMFactory("dt"),
        em: createDOMFactory("em"),
        embed: createDOMFactory("embed"),
        fieldset: createDOMFactory("fieldset"),
        figcaption: createDOMFactory("figcaption"),
        figure: createDOMFactory("figure"),
        footer: createDOMFactory("footer"),
        form: createDOMFactory("form"),
        h1: createDOMFactory("h1"),
        h2: createDOMFactory("h2"),
        h3: createDOMFactory("h3"),
        h4: createDOMFactory("h4"),
        h5: createDOMFactory("h5"),
        h6: createDOMFactory("h6"),
        head: createDOMFactory("head"),
        header: createDOMFactory("header"),
        hgroup: createDOMFactory("hgroup"),
        hr: createDOMFactory("hr"),
        html: createDOMFactory("html"),
        i: createDOMFactory("i"),
        iframe: createDOMFactory("iframe"),
        img: createDOMFactory("img"),
        input: createDOMFactory("input"),
        ins: createDOMFactory("ins"),
        kbd: createDOMFactory("kbd"),
        keygen: createDOMFactory("keygen"),
        label: createDOMFactory("label"),
        legend: createDOMFactory("legend"),
        li: createDOMFactory("li"),
        link: createDOMFactory("link"),
        main: createDOMFactory("main"),
        map: createDOMFactory("map"),
        mark: createDOMFactory("mark"),
        menu: createDOMFactory("menu"),
        menuitem: createDOMFactory("menuitem"),
        meta: createDOMFactory("meta"),
        meter: createDOMFactory("meter"),
        nav: createDOMFactory("nav"),
        noscript: createDOMFactory("noscript"),
        object: createDOMFactory("object"),
        ol: createDOMFactory("ol"),
        optgroup: createDOMFactory("optgroup"),
        option: createDOMFactory("option"),
        output: createDOMFactory("output"),
        p: createDOMFactory("p"),
        param: createDOMFactory("param"),
        picture: createDOMFactory("picture"),
        pre: createDOMFactory("pre"),
        progress: createDOMFactory("progress"),
        q: createDOMFactory("q"),
        rp: createDOMFactory("rp"),
        rt: createDOMFactory("rt"),
        ruby: createDOMFactory("ruby"),
        s: createDOMFactory("s"),
        samp: createDOMFactory("samp"),
        script: createDOMFactory("script"),
        section: createDOMFactory("section"),
        select: createDOMFactory("select"),
        small: createDOMFactory("small"),
        source: createDOMFactory("source"),
        span: createDOMFactory("span"),
        strong: createDOMFactory("strong"),
        style: createDOMFactory("style"),
        sub: createDOMFactory("sub"),
        summary: createDOMFactory("summary"),
        sup: createDOMFactory("sup"),
        table: createDOMFactory("table"),
        tbody: createDOMFactory("tbody"),
        td: createDOMFactory("td"),
        textarea: createDOMFactory("textarea"),
        tfoot: createDOMFactory("tfoot"),
        th: createDOMFactory("th"),
        thead: createDOMFactory("thead"),
        time: createDOMFactory("time"),
        title: createDOMFactory("title"),
        tr: createDOMFactory("tr"),
        track: createDOMFactory("track"),
        u: createDOMFactory("u"),
        ul: createDOMFactory("ul"),
        var: createDOMFactory("var"),
        video: createDOMFactory("video"),
        wbr: createDOMFactory("wbr"),
        // SVG
        circle: createDOMFactory("circle"),
        clipPath: createDOMFactory("clipPath"),
        defs: createDOMFactory("defs"),
        ellipse: createDOMFactory("ellipse"),
        g: createDOMFactory("g"),
        image: createDOMFactory("image"),
        line: createDOMFactory("line"),
        linearGradient: createDOMFactory("linearGradient"),
        mask: createDOMFactory("mask"),
        path: createDOMFactory("path"),
        pattern: createDOMFactory("pattern"),
        polygon: createDOMFactory("polygon"),
        polyline: createDOMFactory("polyline"),
        radialGradient: createDOMFactory("radialGradient"),
        rect: createDOMFactory("rect"),
        stop: createDOMFactory("stop"),
        svg: createDOMFactory("svg"),
        text: createDOMFactory("text"),
        tspan: createDOMFactory("tspan")
    };
    module.exports = ReactDOMFactories;
}, /* 32 */
/***/
function(module, exports, __webpack_require__) {
    /**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
    "use strict";
    /**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
    /*eslint-disable no-self-compare*/
    function is(x, y) {
        // SameValue algorithm
        // SameValue algorithm
        return x === y ? 0 !== x || 1 / x === 1 / y : x !== x && y !== y;
    }
    /*eslint-enable no-self-compare*/
    /**
	 * We use an Error-like object for backward compatibility as people may call
	 * PropTypes directly and inspect their output. However we don't use real
	 * Errors anymore. We don't inspect their stack anyway, and creating them
	 * is prohibitively expensive if they are created too often, such as what
	 * happens in oneOfType() for any type before the one that matched.
	 */
    function PropTypeError(message) {
        this.message = message, this.stack = "";
    }
    function createChainableTypeChecker(validate) {
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS, propFullName = propFullName || propName;
            if (null == props[propName]) {
                var locationName = ReactPropTypeLocationNames[location];
                return isRequired ? new PropTypeError(null === props[propName] ? "The " + locationName + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`.") : "The " + locationName + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`.")) : null;
            }
            return validate(props, propName, componentName, location, propFullName);
        }
        var chainedCheckType = checkType.bind(null, !1);
        return chainedCheckType.isRequired = checkType.bind(null, !0), chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName], propType = getPropType(propValue);
            if (propType !== expectedType) {
                var locationName = ReactPropTypeLocationNames[location], preciseType = getPreciseType(propValue);
                return new PropTypeError("Invalid " + locationName + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunction.thatReturns(null));
    }
    function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if ("function" != typeof typeChecker) return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
                var locationName = ReactPropTypeLocationNames[location], propType = getPropType(propValue);
                return new PropTypeError("Invalid " + locationName + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
            }
            for (var i = 0; i < propValue.length; i++) {
                var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
                if (error instanceof Error) return error;
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactElement.isValidElement(propValue)) {
                var locationName = ReactPropTypeLocationNames[location], propType = getPropType(propValue);
                return new PropTypeError("Invalid " + locationName + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
                var locationName = ReactPropTypeLocationNames[location], expectedClassName = expectedClass.name || ANONYMOUS, actualClassName = getClassName(props[propName]);
                return new PropTypeError("Invalid " + locationName + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
        function validate(props, propName, componentName, location, propFullName) {
            for (var propValue = props[propName], i = 0; i < expectedValues.length; i++) if (is(propValue, expectedValues[i])) return null;
            var locationName = ReactPropTypeLocationNames[location], valuesString = JSON.stringify(expectedValues);
            return new PropTypeError("Invalid " + locationName + " `" + propFullName + "` of value `" + propValue + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return Array.isArray(expectedValues) ? createChainableTypeChecker(validate) : emptyFunction.thatReturnsNull;
    }
    function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if ("function" != typeof typeChecker) return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
            var propValue = props[propName], propType = getPropType(propValue);
            if ("object" !== propType) {
                var locationName = ReactPropTypeLocationNames[location];
                return new PropTypeError("Invalid " + locationName + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
            }
            for (var key in propValue) if (propValue.hasOwnProperty(key)) {
                var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                if (error instanceof Error) return error;
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
        function validate(props, propName, componentName, location, propFullName) {
            for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                var checker = arrayOfTypeCheckers[i];
                if (null == checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret)) return null;
            }
            var locationName = ReactPropTypeLocationNames[location];
            return new PropTypeError("Invalid " + locationName + " `" + propFullName + "` supplied to " + ("`" + componentName + "`."));
        }
        return Array.isArray(arrayOfTypeCheckers) ? createChainableTypeChecker(validate) : emptyFunction.thatReturnsNull;
    }
    function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
                var locationName = ReactPropTypeLocationNames[location];
                return new PropTypeError("Invalid " + locationName + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName], propType = getPropType(propValue);
            if ("object" !== propType) {
                var locationName = ReactPropTypeLocationNames[location];
                return new PropTypeError("Invalid " + locationName + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
            }
            for (var key in shapeTypes) {
                var checker = shapeTypes[key];
                if (checker) {
                    var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                    if (error) return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return !0;

          case "boolean":
            return !propValue;

          case "object":
            if (Array.isArray(propValue)) return propValue.every(isNode);
            if (null === propValue || ReactElement.isValidElement(propValue)) return !0;
            var iteratorFn = getIteratorFn(propValue);
            if (!iteratorFn) return !1;
            var step, iterator = iteratorFn.call(propValue);
            if (iteratorFn !== propValue.entries) {
                for (;!(step = iterator.next()).done; ) if (!isNode(step.value)) return !1;
            } else // Iterator will provide entry [k,v] tuples rather than values.
            for (;!(step = iterator.next()).done; ) {
                var entry = step.value;
                if (entry && !isNode(entry[1])) return !1;
            }
            return !0;

          default:
            return !1;
        }
    }
    function isSymbol(propType, propValue) {
        // Native Symbol.
        // Native Symbol.
        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        return "symbol" === propType || ("Symbol" === propValue["@@toStringTag"] || "function" == typeof Symbol && propValue instanceof Symbol);
    }
    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
        var propType = typeof propValue;
        return Array.isArray(propValue) ? "array" : propValue instanceof RegExp ? "object" : isSymbol(propType, propValue) ? "symbol" : propType;
    }
    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
        var propType = getPropType(propValue);
        if ("object" === propType) {
            if (propValue instanceof Date) return "date";
            if (propValue instanceof RegExp) return "regexp";
        }
        return propType;
    }
    // Returns class name of the object, if any.
    function getClassName(propValue) {
        return propValue.constructor && propValue.constructor.name ? propValue.constructor.name : ANONYMOUS;
    }
    var ReactElement = __webpack_require__(2), ReactPropTypeLocationNames = __webpack_require__(12), ReactPropTypesSecret = __webpack_require__(33), emptyFunction = __webpack_require__(6), getIteratorFn = __webpack_require__(14), ANONYMOUS = (__webpack_require__(1), 
    "<<anonymous>>"), ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker
    };
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype, module.exports = ReactPropTypes;
}, /* 33 */
/***/
function(module, exports) {
    /**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
}, /* 34 */
/***/
function(module, exports, __webpack_require__) {
    /**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
    "use strict";
    /**
	 * Base class helpers for the updating state of a component.
	 */
    function ReactPureComponent(props, context, updater) {
        // Duplicated from ReactComponent.
        this.props = props, this.context = context, this.refs = emptyObject, // We initialize the default updater but the real one gets injected by the
        // renderer.
        this.updater = updater || ReactNoopUpdateQueue;
    }
    function ComponentDummy() {}
    var _assign = __webpack_require__(5), ReactComponent = __webpack_require__(8), ReactNoopUpdateQueue = __webpack_require__(9), emptyObject = __webpack_require__(7);
    ComponentDummy.prototype = ReactComponent.prototype, ReactPureComponent.prototype = new ComponentDummy(), 
    ReactPureComponent.prototype.constructor = ReactPureComponent, // Avoid an extra prototype jump for these methods.
    _assign(ReactPureComponent.prototype, ReactComponent.prototype), ReactPureComponent.prototype.isPureReactComponent = !0, 
    module.exports = ReactPureComponent;
}, /* 35 */
/***/
function(module, exports) {
    /**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
    "use strict";
    module.exports = "15.4.2";
}, /* 36 */
/***/
function(module, exports, __webpack_require__) {
    /**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
    "use strict";
    /**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */
    function onlyChild(children) {
        return ReactElement.isValidElement(children) ? void 0 : _prodInvariant("143"), children;
    }
    var _prodInvariant = __webpack_require__(4), ReactElement = __webpack_require__(2);
    __webpack_require__(3);
    module.exports = onlyChild;
}, /* 37 */
/***/
function(module, exports, __webpack_require__) {
    /**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
    "use strict";
    /**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
    function getComponentKey(component, index) {
        // Do some typechecking here since we call this blindly. We want to ensure
        // that we don't block potential future ES APIs.
        // Do some typechecking here since we call this blindly. We want to ensure
        // that we don't block potential future ES APIs.
        return component && "object" == typeof component && null != component.key ? KeyEscapeUtils.escape(component.key) : index.toString(36);
    }
    /**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
    function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
        var type = typeof children;
        if ("undefined" !== type && "boolean" !== type || (// All of the above are perceived as null.
        children = null), null === children || "string" === type || "number" === type || // The following is inlined from ReactElement. This means we can optimize
        // some checks. React Fiber also inlines this logic for similar purposes.
        "object" === type && children.$$typeof === REACT_ELEMENT_TYPE) // If it's the only child, treat the name as if it was wrapped in an array
        // so that it's consistent if the number of children grows.
        return callback(traverseContext, children, "" === nameSoFar ? SEPARATOR + getComponentKey(children, 0) : nameSoFar), 
        1;
        var child, nextName, subtreeCount = 0, nextNamePrefix = "" === nameSoFar ? SEPARATOR : nameSoFar + SUBSEPARATOR;
        if (Array.isArray(children)) for (var i = 0; i < children.length; i++) child = children[i], 
        nextName = nextNamePrefix + getComponentKey(child, i), subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext); else {
            var iteratorFn = getIteratorFn(children);
            if (iteratorFn) {
                var step, iterator = iteratorFn.call(children);
                if (iteratorFn !== children.entries) for (var ii = 0; !(step = iterator.next()).done; ) child = step.value, 
                nextName = nextNamePrefix + getComponentKey(child, ii++), subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext); else // Iterator will provide entry [k,v] tuples rather than values.
                for (;!(step = iterator.next()).done; ) {
                    var entry = step.value;
                    entry && (child = entry[1], nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0), 
                    subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext));
                }
            } else if ("object" === type) {
                var addendum = "", childrenString = String(children);
                _prodInvariant("31", "[object Object]" === childrenString ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString, addendum);
            }
        }
        return subtreeCount;
    }
    /**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
    function traverseAllChildren(children, callback, traverseContext) {
        return null == children ? 0 : traverseAllChildrenImpl(children, "", callback, traverseContext);
    }
    var _prodInvariant = __webpack_require__(4), REACT_ELEMENT_TYPE = (__webpack_require__(10), 
    __webpack_require__(11)), getIteratorFn = __webpack_require__(14), KeyEscapeUtils = (__webpack_require__(3), 
    __webpack_require__(26)), SEPARATOR = (__webpack_require__(1), "."), SUBSEPARATOR = ":";
    module.exports = traverseAllChildren;
}, /* 38 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    module.exports = __webpack_require__(28);
}, /* 39 */
/***/
function(module, exports, __webpack_require__) {
    function addStylesToDom(styles, options) {
        for (var i = 0; i < styles.length; i++) {
            var item = styles[i], domStyle = stylesInDom[item.id];
            if (domStyle) {
                domStyle.refs++;
                for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j](item.parts[j]);
                for (;j < item.parts.length; j++) domStyle.parts.push(addStyle(item.parts[j], options));
            } else {
                for (var parts = [], j = 0; j < item.parts.length; j++) parts.push(addStyle(item.parts[j], options));
                stylesInDom[item.id] = {
                    id: item.id,
                    refs: 1,
                    parts: parts
                };
            }
        }
    }
    function listToStyles(list) {
        for (var styles = [], newStyles = {}, i = 0; i < list.length; i++) {
            var item = list[i], id = item[0], css = item[1], media = item[2], sourceMap = item[3], part = {
                css: css,
                media: media,
                sourceMap: sourceMap
            };
            newStyles[id] ? newStyles[id].parts.push(part) : styles.push(newStyles[id] = {
                id: id,
                parts: [ part ]
            });
        }
        return styles;
    }
    function insertStyleElement(options, styleElement) {
        var head = getHeadElement(), lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
        if ("top" === options.insertAt) lastStyleElementInsertedAtTop ? lastStyleElementInsertedAtTop.nextSibling ? head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling) : head.appendChild(styleElement) : head.insertBefore(styleElement, head.firstChild), 
        styleElementsInsertedAtTop.push(styleElement); else {
            if ("bottom" !== options.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            head.appendChild(styleElement);
        }
    }
    function removeStyleElement(styleElement) {
        styleElement.parentNode.removeChild(styleElement);
        var idx = styleElementsInsertedAtTop.indexOf(styleElement);
        idx >= 0 && styleElementsInsertedAtTop.splice(idx, 1);
    }
    function createStyleElement(options) {
        var styleElement = document.createElement("style");
        return options.attrs.type = "text/css", attachTagAttrs(styleElement, options.attrs), 
        insertStyleElement(options, styleElement), styleElement;
    }
    function createLinkElement(options) {
        var linkElement = document.createElement("link");
        return options.attrs.type = "text/css", options.attrs.rel = "stylesheet", attachTagAttrs(linkElement, options.attrs), 
        insertStyleElement(options, linkElement), linkElement;
    }
    function attachTagAttrs(element, attrs) {
        Object.keys(attrs).forEach(function(key) {
            element.setAttribute(key, attrs[key]);
        });
    }
    function addStyle(obj, options) {
        var styleElement, update, remove;
        if (options.singleton) {
            var styleIndex = singletonCounter++;
            styleElement = singletonElement || (singletonElement = createStyleElement(options)), 
            update = applyToSingletonTag.bind(null, styleElement, styleIndex, !1), remove = applyToSingletonTag.bind(null, styleElement, styleIndex, !0);
        } else obj.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (styleElement = createLinkElement(options), 
        update = updateLink.bind(null, styleElement, options), remove = function() {
            removeStyleElement(styleElement), styleElement.href && URL.revokeObjectURL(styleElement.href);
        }) : (styleElement = createStyleElement(options), update = applyToTag.bind(null, styleElement), 
        remove = function() {
            removeStyleElement(styleElement);
        });
        return update(obj), function(newObj) {
            if (newObj) {
                if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) return;
                update(obj = newObj);
            } else remove();
        };
    }
    function applyToSingletonTag(styleElement, index, remove, obj) {
        var css = remove ? "" : obj.css;
        if (styleElement.styleSheet) styleElement.styleSheet.cssText = replaceText(index, css); else {
            var cssNode = document.createTextNode(css), childNodes = styleElement.childNodes;
            childNodes[index] && styleElement.removeChild(childNodes[index]), childNodes.length ? styleElement.insertBefore(cssNode, childNodes[index]) : styleElement.appendChild(cssNode);
        }
    }
    function applyToTag(styleElement, obj) {
        var css = obj.css, media = obj.media;
        if (media && styleElement.setAttribute("media", media), styleElement.styleSheet) styleElement.styleSheet.cssText = css; else {
            for (;styleElement.firstChild; ) styleElement.removeChild(styleElement.firstChild);
            styleElement.appendChild(document.createTextNode(css));
        }
    }
    function updateLink(linkElement, options, obj) {
        var css = obj.css, sourceMap = obj.sourceMap, autoFixUrls = void 0 === options.convertToAbsoluteUrls && sourceMap;
        (options.convertToAbsoluteUrls || autoFixUrls) && (css = fixUrls(css)), sourceMap && (// http://stackoverflow.com/a/26603875
        css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */");
        var blob = new Blob([ css ], {
            type: "text/css"
        }), oldSrc = linkElement.href;
        linkElement.href = URL.createObjectURL(blob), oldSrc && URL.revokeObjectURL(oldSrc);
    }
    /*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
    var stylesInDom = {}, memoize = function(fn) {
        var memo;
        return function() {
            return "undefined" == typeof memo && (memo = fn.apply(this, arguments)), memo;
        };
    }, isOldIE = memoize(function() {
        return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
    }), getHeadElement = memoize(function() {
        return document.head || document.getElementsByTagName("head")[0];
    }), singletonElement = null, singletonCounter = 0, styleElementsInsertedAtTop = [], fixUrls = __webpack_require__(40);
    module.exports = function(list, options) {
        options = options || {}, options.attrs = "object" == typeof options.attrs ? options.attrs : {}, 
        // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
        // tags it will allow on a page
        "undefined" == typeof options.singleton && (options.singleton = isOldIE()), // By default, add <style> tags to the bottom of <head>.
        "undefined" == typeof options.insertAt && (options.insertAt = "bottom");
        var styles = listToStyles(list);
        return addStylesToDom(styles, options), function(newList) {
            for (var mayRemove = [], i = 0; i < styles.length; i++) {
                var item = styles[i], domStyle = stylesInDom[item.id];
                domStyle.refs--, mayRemove.push(domStyle);
            }
            if (newList) {
                var newStyles = listToStyles(newList);
                addStylesToDom(newStyles, options);
            }
            for (var i = 0; i < mayRemove.length; i++) {
                var domStyle = mayRemove[i];
                if (0 === domStyle.refs) {
                    for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();
                    delete stylesInDom[domStyle.id];
                }
            }
        };
    };
    var replaceText = function() {
        var textStore = [];
        return function(index, replacement) {
            return textStore[index] = replacement, textStore.filter(Boolean).join("\n");
        };
    }();
}, /* 40 */
/***/
function(module, exports) {
    /**
	 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
	 * embed the css on the page. This breaks all relative urls because now they are relative to a
	 * bundle instead of the current page.
	 *
	 * One solution is to only use full urls, but that may be impossible.
	 *
	 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
	 *
	 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
	 *
	 */
    module.exports = function(css) {
        // get current location
        var location = "undefined" != typeof window && window.location;
        if (!location) throw new Error("fixUrls requires window.location");
        // blank or null?
        if (!css || "string" != typeof css) return css;
        var baseUrl = location.protocol + "//" + location.host, currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"), fixedCss = css.replace(/url *\( *(.+?) *\)/g, function(fullMatch, origUrl) {
            // strip quotes (if they exist)
            var unquotedOrigUrl = origUrl.replace(/^"(.*)"$/, function(o, $1) {
                return $1;
            }).replace(/^'(.*)'$/, function(o, $1) {
                return $1;
            });
            // already a full url? no change
            if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) return fullMatch;
            // convert the url to a full url
            var newUrl;
            // send back the fixed url(...)
            //TODO: should we add protocol?
            return newUrl = 0 === unquotedOrigUrl.indexOf("//") ? unquotedOrigUrl : 0 === unquotedOrigUrl.indexOf("/") ? baseUrl + unquotedOrigUrl : currentDir + unquotedOrigUrl.replace(/^\.\//, ""), 
            "url(" + JSON.stringify(newUrl) + ")";
        });
        // send back the fixed css
        return fixedCss;
    };
}, /* 41 */
/***/
function(module, exports, __webpack_require__) {
    // style-loader: Adds some css to the DOM by adding a <style> tag
    // load the styles
    var content = __webpack_require__(17);
    "string" == typeof content && (content = [ [ module.id, content, "" ] ]);
    // add the styles to the DOM
    __webpack_require__(39)(content, {});
    content.locals && (module.exports = content.locals);
}, /* 42 */
/***/
function(module, exports) {
    module.exports = function(module) {
        // module.parent = undefined by default
        return module.webpackPolyfill || (module.deprecate = function() {}, module.paths = [], 
        module.children = [], module.webpackPolyfill = 1), module;
    };
} ]);
//# sourceMappingURL=bundle.js.map