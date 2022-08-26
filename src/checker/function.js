"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrapper = require('../helper/wrapper.js');
module.exports = wrapper({
    callback: function functionChecker() {
        globalThis.Function.prototype.isFunction = function (param) {
            return typeof param === 'function';
        };
        globalThis.Function.prototype.isPromise = function (param) {
            return typeof param === 'function';
        };
    },
    params: null,
});
