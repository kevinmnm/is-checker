export {};
const wrapper = require('../helper/wrapper');

//## Array checker ##//
module.exports = wrapper({
   callback: function arrayChecker() {
      Array.prototype.isEmpty = function (param: any) {
         return Array.isArray(param) && param.length === 0;
      }
   },
   params: null,
});
