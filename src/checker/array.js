"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrapper = require('../helper/wrapper');
module.exports = wrapper({
    callback: function arrayChecker() {
        globalThis.Array.prototype.isEmpty = function (param) {
            return Array.isArray(param) && param.length === 0;
        };
    },
    params: null,
});
