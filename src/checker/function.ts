export {};

const wrapper = require('../helper/wrapper.js');

//## Function checker ##//
module.exports = wrapper({
   callback: function functionChecker() {
      Function.prototype.isFunction = function (param: any) {
         return typeof param === 'function';
      }
      Function.prototype.isPromise = function (param: any) {
         return typeof param === 'function';
      }
   },
   params: null,
});
