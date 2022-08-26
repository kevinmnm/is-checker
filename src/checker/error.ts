export {};
const wrapper = require('../helper/wrapper.js');

//## Error checker ##//
module.exports = wrapper({
   callback: function errorChecker() {
      globalThis.Error.prototype.isError = function (param: any) {
         return typeof param === 'object' && param instanceof Error;
      }
   },
   params: null,
});
