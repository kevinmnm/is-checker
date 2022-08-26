"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrapper = require('../helper/wrapper');
module.exports = wrapper({
    callback: function blobChecker() {
        const isBrowser = typeof window !== 'undefined' && typeof window.document !== "undefined";
        (!isBrowser) && (globalThis.Blob = require('buffer').Blob);
        globalThis.Blob.isBlob = function (param) {
            return typeof param === 'object' && param instanceof Blob;
        };
    },
    params: null,
});
