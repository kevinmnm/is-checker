"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrapper = require('../helper/wrapper.js');
module.exports = wrapper({
    callback: function setChecker() {
        globalThis.Set.prototype.isSet = function (param) {
            return param instanceof Set;
        };
    },
    params: null,
});
