export {};

const wrapper = require('../helper/wrapper.js');

//## Number checker ##//
module.exports = wrapper({
   callback: function numberChecker() {
      globalThis.Number.prototype.isNumber = function (param: any) {
         return typeof param === 'number';
      }
      globalThis.Number.prototype.isPositive = function (param: any) {
         return typeof param === 'number' && param > 0;
      }
      globalThis.Number.prototype.isZero = function (param: any) {
         return typeof param === 'number' && param === 0;
      }
      globalThis.Number.prototype.isNegative = function (param: any) {
         return typeof param === 'number' && param < 0;
      }
   },
   params: null,
});
