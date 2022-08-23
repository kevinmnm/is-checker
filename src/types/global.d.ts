export declare global {
   interface Window {
      Null: Function;
   }
   // interface GlobalThis {
   //    Null: Function;
   // }
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
   interface Regexp { isRegexp: Function; }
   interface Symbol { isSymbol: Function; }
   interface String { isString: Function; }
   interface Set { isSet: Function; }
   interface Undefined { isUndefined: Function; }
}