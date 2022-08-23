"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrapper = require('../helper/wrapper.js');
module.exports = wrapper({
    callback: function functionChecker() {
        Function.prototype.isFunction = function (param) {
            return typeof param === 'function';
        };
        Function.prototype.isPromise = function (param) {
            return typeof param === 'function';
        };
    },
    params: null,
});
