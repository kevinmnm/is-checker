export {};

const wrapper = require('../helper/wrapper.js');
      
//## Symbol checker ##//
module.exports = wrapper({
   callback: function symbolChecker() {
      globalThis.Symbol.prototype.isSymbol = function (param: any) {
         return (typeof param === 'symbol');
      }
   },
   params: null,
});
