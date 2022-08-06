const wrapper = require('../helper/wrapper.js');

//## Array checker ##//
module.exports = wrapper({
   callback: function arrayChecker() {
      Array.prototype.isEmpty = function (param) {
         return Array.isArray(param) && param.length === 0;
      }
   },
   params: null,
});
