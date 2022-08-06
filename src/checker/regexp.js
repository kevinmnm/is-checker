const wrapper = require('../helper/wrapper.js');
      
//## Regexp checker ##//
module.exports = wrapper({
   callback: function regexpChecker(param) {
      return typeof param === 'object' && param instanceof RegExp;
   },
   params: null,
});
