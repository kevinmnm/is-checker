export { };

const wrapper = require('../helper/wrapper.js');

//## Undefined checker ##//
module.exports = wrapper({
   callback: function undefinedChecker() {
      
      globalThis.Undefined = class Undefined {
         constructor() { }
         static isUndefined(param: any) {
            return typeof param === 'undefined';
         }
      }

      // globalThis.Undefined.prototype.isUndefined = function (param: any) {
      //    return (typeof param === 'undefined');
      // }
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
