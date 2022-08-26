export {};
const wrapper = require('../helper/wrapper.js');

//## Boolean checker ##//
module.exports = wrapper({
   callback: function booleanChecker() {
      globalThis.Boolean.prototype.isBoolean = function (param: any) {
         return typeof param === 'boolean';
      }
   },
   params: null,
});
