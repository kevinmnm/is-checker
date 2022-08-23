"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrapper = require('../helper/wrapper.js');
module.exports = wrapper({
    callback: function numberChecker() {
        Number.prototype.isNumber = function (param) {
            return typeof param === 'number';
        };
        Number.prototype.isPositive = function (param) {
            return typeof param === 'number' && param > 0;
        };
        Number.prototype.isZero = function (param) {
            return typeof param === 'number' && param === 0;
        };
        Number.prototype.isNegative = function (param) {
            return typeof param === 'number' && param < 0;
        };
    },
    params: null,
});
