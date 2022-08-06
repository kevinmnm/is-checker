const wrapper = require('../helper/wrapper.js');
// const isBrowser = !!globalThis?.window;
// globalThis.Blob = isBrowser ? window.Blob : require('buffer').Blob;
globalThis.Blob = window?.Blob || require('buffer')?.Blob;

//## Blob checker ##//
module.exports = wrapper({
   callback: function blobChecker() {
      globalThis.Blob.prototype.isBlob = function (param) {
         return typeof param === 'object' && param instanceof Blob;
      }
   },
   params: null,
});
