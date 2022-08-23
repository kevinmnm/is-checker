"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrapper = require('../helper/wrapper.js');
module.exports = wrapper({
    callback: function undefinedChecker() {
        window.Undefined = class Undfeind {
            constructor() { }
            static isUndefined(param) {
                return typeof param === 'undefined';
            }
        };
    }
});
