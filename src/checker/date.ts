export {};
const wrapper = require('../helper/wrapper.js');

//## Date checker ##//
module.exports = wrapper({
   callback: function dateChecker() {
      Date.prototype.isDate = function (param: any) {
         return typeof param === 'object' && param instanceof Date;
      }
   },
   params: null,
});
