"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrapper = require('../helper/wrapper.js');
module.exports = wrapper({
    callback: function numberChecker() {
        globalThis.Number.prototype.isNumber = function (param) {
            return typeof param === 'number';
        };
        globalThis.Number.prototype.isPositive = function (param) {
            return typeof param === 'number' && param > 0;
        };
        globalThis.Number.prototype.isZero = function (param) {
            return typeof param === 'number' && param === 0;
        };
        globalThis.Number.prototype.isNegative = function (param) {
            return typeof param === 'number' && param < 0;
        };
    },
    params: null,
});
