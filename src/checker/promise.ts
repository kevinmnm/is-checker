export {};

const wrapper = require('../helper/wrapper.js');

//## Promise checker ##//
module.exports = wrapper({
   callback: function promiseChecker() {
      Promise.prototype.isPromise = function (param: any) {
         return typeof param === 'object' && param.then;
      }
   },
   params: null,
});
