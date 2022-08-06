const wrapper = require('../helper/wrapper.js');

//## Map checker ##//
module.exports = wrapper({
   callback: function mapChecker() {
      Map.prototype.isMap = function (param) {
         return param instanceof Map;
      }
   },
   params: null,
});
