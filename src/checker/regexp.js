"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrapper = require('../helper/wrapper.js');
module.exports = wrapper({
    callback: function regexpChecker(param) {
        globalThis.RegExp.prototype.isRegExp = function () {
            return typeof param === 'object' && param instanceof RegExp;
        };
    },
    params: null,
});
