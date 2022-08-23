"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrapper = require('../helper/wrapper.js');
module.exports = wrapper({
    callback: function stringChecker() {
        String.prototype.isString = function (param) {
            return (typeof param === 'string');
        };
    },
    params: null,
});
