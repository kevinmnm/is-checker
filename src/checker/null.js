"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrapper = require('../helper/wrapper.js');
module.exports = wrapper({
    callback: function nullChecker() {
        globalThis.Null = class Null {
            constructor() { }
            static isNull(param) {
                return (typeof param === 'object' && param === null);
            }
        };
    }
});
