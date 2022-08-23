"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrapper = require('../helper/wrapper.js');
const Null = function () { };
module.exports = wrapper({
    callback: function nullChecker() {
        Null.prototype.isNull = function (param) {
            return typeof param === 'object' && param === null;
        };
    }
});
