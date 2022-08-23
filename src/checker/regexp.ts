export {};

const wrapper = require('../helper/wrapper.js');
      
//## Regexp checker ##//
module.exports = wrapper({
   callback: function regexpChecker(param: any) {
      return typeof param === 'object' && param instanceof RegExp;
   },
   params: null,
});
