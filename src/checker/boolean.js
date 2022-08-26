"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrapper = require('../helper/wrapper.js');
module.exports = wrapper({
    callback: function booleanChecker() {
        globalThis.Boolean.prototype.isBoolean = function (param) {
            return typeof param === 'boolean';
        };
    },
    params: null,
});
