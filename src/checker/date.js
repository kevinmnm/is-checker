"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrapper = require('../helper/wrapper.js');
module.exports = wrapper({
    callback: function dateChecker() {
        Date.prototype.isDate = function (param) {
            return typeof param === 'object' && param instanceof Date;
        };
    },
    params: null,
});
