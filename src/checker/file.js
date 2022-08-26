"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrapper = require('../helper/wrapper.js');
module.exports = wrapper({
    callback: function fileChecker() {
        const isBrowser = typeof window !== 'undefined' && typeof window.document !== "undefined";
        if (!isBrowser) {
            globalThis.File = class File {
                constructor() { }
            };
        }
        globalThis.File.isFile = function (param) {
            return typeof param === 'object' && param instanceof File;
        };
    }
});
