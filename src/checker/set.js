const wrapper = require('../helper/wrapper.js');

//## Set checker ##//
module.exports = wrapper({
   callback: function setChecker() {
      Set.prototype.isSet = function (param) {
         return param instanceof Set;
      }
   },
   params: null,
});
