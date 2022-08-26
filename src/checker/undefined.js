"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrapper = require('../helper/wrapper.js');
module.exports = wrapper({
    callback: function undefinedChecker() {
        globalThis.Undefined = class Undefined {
            constructor() { }
            static isUndefined(param) {
                return typeof param === 'undefined';
            }
        };
    }
});
