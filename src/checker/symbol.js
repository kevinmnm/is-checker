"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrapper = require('../helper/wrapper.js');
module.exports = wrapper({
    callback: function symbolChecker() {
        globalThis.Symbol.prototype.isSymbol = function (param) {
            return (typeof param === 'symbol');
        };
    },
    params: null,
});
