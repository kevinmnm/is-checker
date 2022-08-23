"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrapper = require('../helper/wrapper.js');
module.exports = wrapper({
    callback: function bigintChecker() {
        globalThis.BigInt.prototype.isBigInt = function (param) {
            return typeof param === 'bigint';
        };
    },
    params: null,
});
