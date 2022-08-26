export {};

const wrapper = require('../helper/wrapper.js');

//## String checker ##//
module.exports = wrapper({
   callback: function stringChecker() {
      globalThis.String.prototype.isString = function (param: any) {
         return (typeof param === 'string');
      }
   },
   params: null,
});
