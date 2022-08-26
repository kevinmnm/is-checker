export { };
const wrapper = require('../helper/wrapper');
// const isBrowser = !!globalThis?.window;
// globalThis.Blob = isBrowser ? window.Blob : require('buffer').Blob;
// globalThis.Blob = window?.Blob || require('buffer')?.Blob;

//## Blob checker ##//
module.exports = wrapper({
   callback: function blobChecker() {
      const isBrowser = typeof window !== 'undefined' && typeof window.document !== "undefined";

      (!isBrowser) && (globalThis.Blob = require('buffer').Blob);

      globalThis.Blob.prototype.isBlob = function (param: any) {
         return typeof param === 'object' && param instanceof Blob;
      }

   },
   params: null,
});
