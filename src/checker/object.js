"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrapper = require('../helper/wrapper.js');
module.exports = wrapper({
    callback: function objectChecker() {
        globalThis.Object.prototype.isObject = function (param) {
            return (typeof param === 'object' && param !== null && !Array.isArray(param));
        };
    },
    params: null,
});
