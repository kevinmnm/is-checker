const wrapper = require('../helper/wrapper.js');

//## String checker ##//
module.exports = wrapper({
   callback: function stringChecker() {
      String.prototype.isString = function (param) {
         return (typeof param === 'string');
      }
   },
   params: null,
});
