"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrapper = require('../helper/wrapper.js');
module.exports = wrapper({
    callback: function errorChecker() {
        globalThis.Error.prototype.isError = function (param) {
            return typeof param === 'object' && param instanceof Error;
        };
    },
    params: null,
});
