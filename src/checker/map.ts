export {};

const wrapper = require('../helper/wrapper.js');

//## Map checker ##//
module.exports = wrapper({
   callback: function mapChecker() {
      globalThis.Map.prototype.isMap = function (param: any) {
         return param instanceof Map;
      }
   },
   params: null,
});
