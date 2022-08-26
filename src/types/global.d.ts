export declare global {
   interface Window {
      Null: any;
      Undefined: any;
   }
   declare module globalThis {
      var Undefined: any;
      var Null: any;
      var File: any;
   }
   interface Array { isEmpty: Function; }
   interface Boolean { isBoolean: Function; }
   interface Blob { isBlob: Function; }
   interface Error { isError: Function; }
   interface File { isFile: Function; }
   interface BigInt { isBigInt: Function; }
   interface Date { isDate: Function; }
   interface Function {
      isFunction: Function;
      isPromise: Function;
   }
   interface Number {
      isNumber: Function;
      isPositive: Function;
      isZero: Function;
      isNegative: Function;
   }
   interface Map { isMap: Function; }
   interface Null extends Null { isNull: Function; }
   interface Object { isObject: Function; }
   interface Promise { isPromise: Function; }
   interface RegExp { isRegExp: Function; }
   interface Symbol { isSymbol: Function; }
   interface String { isString: Function; }
   interface Set { isSet: Function; }
   interface Undefined { isUndefined: Function; }
}