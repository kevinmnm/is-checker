export {};
const wrapper = require('../helper/wrapper.js');

//## Bigint checker ##//
module.exports = wrapper({
   callback: function bigintChecker() {
      globalThis.BigInt.prototype.isBigInt = function (param: any) {
         return typeof param === 'bigint';
      }
   },
   params: null,
});
