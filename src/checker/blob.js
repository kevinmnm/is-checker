"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrapper = require('../helper/wrapper');
module.exports = wrapper({
    callback: function blobChecker() {
        Blob.prototype.isBlob = function (param) {
            return typeof param === 'object' && param instanceof Blob;
        };
    },
    params: null,
});
