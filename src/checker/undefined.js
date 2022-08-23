"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrapper = require('../helper/wrapper.js');
const Undefined = function () { };
module.exports = wrapper({
    callback: function undefinedChecker() {
        Undefined.prototype.isUndefined = function (param) {
            return (typeof param === 'undefined');
        };
    }
});
