"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrapper = require('../helper/wrapper.js');
module.exports = wrapper({
    callback: function fileChecker() {
        File.prototype.isFile = function (param) {
            return typeof param === 'object' && param instanceof File;
        };
    }
});
