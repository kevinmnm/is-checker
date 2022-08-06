const wrapper = require('../helper/wrapper.js');
      
//## Symbol checker ##//
module.exports = wrapper({
   callback: function symbolChecker() {
      Symbol.prototype.isSymbol = function (param) {
         return (typeof param === 'symbol');
      }
   },
   params: null,
});
