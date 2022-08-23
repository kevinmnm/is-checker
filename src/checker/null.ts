export {};

const wrapper = require('../helper/wrapper.js');
const Null: Function = function(){};

//## Set checker ##//
module.exports = wrapper({
   callback: function nullChecker() {
      Null.prototype.isNull = function (param: any) {
         return typeof param === 'object' && param === null;
      }
   }
});
// module.exports = wrapper({
//    callback: function nullChecker() {
//       window.Null = class Null {
//          constructor() {}
//          static isNull(param) {
//             return (typeof param === 'object' && param === null);
//          }
//       }

//       Null.prototype.isNull = function (param) {
//          return param instanceof Null;
//       }
//    },
//    params: null,
// });
