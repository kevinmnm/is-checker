export {};

const wrapper = require('../helper/wrapper.js');
// const isNode = !!process?.versions?.node;
// globalThis.File = isNode ? require('buffer').File : window.File;

//## File checker ##//
module.exports = wrapper({
   callback: function fileChecker() {
      File.prototype.isFile = function (param: any) {
         return typeof param === 'object' && param instanceof File;
      }
   }
});
// module.exports = wrapper({
//    callback: function fileChecker() {
//       if (window?.File) {
//          window.File.prototype.isFile = function (param: any) {
//             return typeof param === 'object' && param instanceof File;
//          }
//       }
//       else {
//          globalThis.File = {
//             isFile: function () {
//                console.error('File type is currently not supported in this environment.');
//             }
//          }
//       }
//    },
//    params: null,
// });
