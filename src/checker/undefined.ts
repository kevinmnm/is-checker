export { };

const wrapper = require('../helper/wrapper.js');
const Undefined: Function = function(){};

//## Undefined checker ##//
module.exports = wrapper({
   callback: function undefinedChecker() {
      Undefined.prototype.isUndefined = function (param: any) {
         return (typeof param === 'undefined');
      }
   }
});
// module.exports = wrapper({
//    callback: function undefinedChecker() {
//       window.Undefined = class Undefined {
//          constructor() { }
//          static isUndefined(param) {
//             return typeof param === 'undefined';
//          }
//       }

//       Undefined.prototype.isUndefined = function (param: any) {
//          return (typeof param === 'undefined');
//       }
//    },
//    params: null,
// });
