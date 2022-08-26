"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrapper = require('../helper/wrapper.js');
module.exports = wrapper({
    callback: function mapChecker() {
        globalThis.Map.prototype.isMap = function (param) {
            return param instanceof Map;
        };
    },
    params: null,
});
