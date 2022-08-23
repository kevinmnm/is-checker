export {};

const wrapper = require('../helper/wrapper.js');

//## Object checker ##//
module.exports = wrapper({
   callback: function objectChecker() {
      Object.prototype.isObject = function (param: any) {
         return (typeof param === 'object' && param !== null && !Array.isArray(param));
      }
   },
   params: null,
});
