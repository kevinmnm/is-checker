export {};

const wrapper = require('../helper/wrapper.js');

//## Set checker ##//
module.exports = wrapper({
   callback: function setChecker() {
      globalThis.Set.prototype.isSet = function (param: any) {
         return param instanceof Set;
      }
   },
   params: null,
});
