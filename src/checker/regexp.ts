export { };

const wrapper = require('../helper/wrapper.js');

//## Regexp checker ##//
module.exports = wrapper({
   callback: function regexpChecker(param: any) {
      globalThis.RegExp.prototype.isRegExp = function () {
         return typeof param === 'object' && param instanceof RegExp;
      }
   },
   params: null,
});
