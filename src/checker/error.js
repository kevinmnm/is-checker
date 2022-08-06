const wrapper = require('../helper/wrapper.js');

//## Error checker ##//
module.exports = wrapper({
   callback: function errorChecker() {
      Error.prototype.isError = function (param) {
         return typeof param === 'object' && param instanceof Error;
      }
   },
   params: null,
});
