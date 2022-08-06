const wrapper = require('../helper/wrapper.js');
      
//## Symbol checker ##//
module.exports = wrapper({
   callback: function undefinedChecker() {
      window.Undefined = class Undefined {
         constructor() {}
         static isUndefined(param) {
            return typeof param === 'undefined';
         }
      }

      Undefined.prototype.isUndefined = function (param) {
         return (typeof param === 'undefined');
      }
   },
   params: null,
});
