"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrapper = require('../helper/wrapper.js');
module.exports = wrapper({
    callback: function fileChecker() {
        if (!globalThis.File) {
            globalThis.File = class File {
                constructor() { }
                static isFile(param) {
                    return typeof param === 'object' && param instanceof File;
                }
            };
            return;
        }
        globalThis.File.prototype.isFile = function (param) {
            return typeof param === 'object' && param instanceof File;
        };
    }
});
