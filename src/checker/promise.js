"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrapper = require('../helper/wrapper.js');
module.exports = wrapper({
    callback: function promiseChecker() {
        Promise.prototype.isPromise = function (param) {
            return typeof param === 'object' && param.then;
        };
    },
    params: null,
});
