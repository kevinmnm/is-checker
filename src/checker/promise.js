const wrapper = require('../helper/wrapper.js');

//## Promise checker ##//
module.exports = wrapper({
   callback: function promiseChecker() {
      Promise.prototype.isPromise = function (param) {
         return typeof param === 'object' && param.then;
      }
   },
   params: null,
});
