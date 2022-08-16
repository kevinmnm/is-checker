<style>
   .guide-summary {
      font-weight: 600;
      font-size: 1.25em;
      cursor: pointer;
      width: max-content;
      user-select: none;
   }
   .guide-summary:hover {
      color: yellowgreen;
   }
   .sub-guide-summary {
      font-weight: 100;
      cursor: pointer;
      font-size: 1em;
   }
   /* .guide-method-name {
      font-weight: 400;
      cursor: pointer;
   } */
   .sub {
      margin-left: 16px;
      margin-bottom: 10px;
   }
   .code-example-box {
      border: 1px solid grey;
      cursor: text;
   }
</style>

# Type of this value is.. check! ✅
---

> **Simple and light-weight JavaScript type checker that mimics existing type checking methods!**
---

## Installation
#### NPM
`npm install is-checker`

#### CDN
```js
// For latest version.
<script src="https://kevsong.com/cdn/is-checker"></script>
// Or
<script src="https://kevsong.com/cdn/is-checker@latest"></script>

// For specific version.
<script src="https://kevsong.com/cdn/is-checker@1.0.0"></script>
```
---

## Contents
- [Introduction](#introduction)
- [Guide](#guide)
- [About](#about)

---

<div id="introduction"></div>

## Introduction

Have you tried to validate the type of a variable and wonder why some native objects provide *'is'* type checking method but some don't? For example: 

```js
const array = [1, 2, 3];
Array.isArray(array); // Works!

const number = 100;
Number.isNumber(number); // Doesn't work :(
```

This is why **is-checker** will add *'is'* checker for every types in JavaScript!

```js
const string = 'is-checker';
String.isString(string); // How convenient!
```

The purpose is to create something easy to remember without having to look back at package documentation. Since we already have some default methods to check certain types, why not extend them to every types?

---

<a name="guide"></a>

## Guide

Every types in JavaScript will have same *'is'* checker method attached to it. If type doesn't have a class by default, it'll create one. Some types will have additional methods created to it.


<!-- <details>
   <summary class="guide-summary">Array</summary>
      <div class="sub">
         <details>
            <summary class="sub-guide-summary">
               <span class="guide-method-name">isArray()</span>
            </summary>
            <pre class="code-example-box">
const myArray = [];
Array.isArray(myArray) // true.</pre>
         </details>
         <span class="guide-method-desc"></span>
      </div>
</details>
<details>
   <summary class="guide-summary">Bigint</summary>
      <div class="sub">
         <details>
            <summary class="sub-guide-summary">
               <span class="guide-method-name">isBigint()</span>
            </summary>
            <pre class="code-example-box">
const myBigint = BigInt(9007199254740991);
Bigint.isBigint(myBigint) // true.</pre>
         </details>
         <span class="guide-method-desc"></span>
      </div>
</details>

<details>
   <summary class="guide-summary">Error</summary>
      <div class="sub">
         <details>
            <summary class="sub-guide-summary">
               <span class="guide-method-name">isError()</span>
            </summary>
            <pre class="code-example-box">
const myError = new Error('error!');
Error.isError(myError) // true.</pre>
         </details>
         <span class="guide-method-desc"></span>
      </div>
</details>

<details>
   <summary class="guide-summary">Blob</summary>
      <div class="sub">
         <details>
            <summary class="sub-guide-summary">
               <span class="guide-method-name">isBlob()</span>
            </summary>
            <pre class="code-example-box">
const myBlob = new Blob([], {});
Blob.isBlob(myBlob) // true.</pre>
         </details>
         <span class="guide-method-desc"></span>
      </div>
</details>

<details>
   <summary class="guide-summary">Date</summary>
      <div class="sub">
         <details>
            <summary class="sub-guide-summary">
               <span class="guide-method-name">isDate()</span>
            </summary>
            <pre class="code-example-box">
const myDate = new Date();
Date.isDate(myDate) // true.</pre>
         </details>
         <span class="guide-method-desc"></span>
      </div>
</details>

<details>
   <summary class="guide-summary">File</summary>
      <div class="sub">
         <details>
            <summary class="sub-guide-summary">
               <span class="guide-method-name">isFile()</span>
            </summary>
            <pre class="code-example-box">
const myFile = new File();
File.isFile(myFile) // true.</pre>
         </details>
         <span class="guide-method-desc"></span>
      </div>
</details>

<details>
   <summary class="guide-summary">Boolean</summary>
      <div class="sub">
         <details>
            <summary class="sub-guide-summary">
               <span class="guide-method-name">isBoolean()</span>
            </summary>
            <pre class="code-example-box">
const myBoolean = true;
Boolean.isBoolean(myBoolean) // true.</pre>
         </details>
         <span class="guide-method-desc"></span>
      </div>
</details>

<details>
   <summary class="guide-summary">Map</summary>
      <div class="sub">
         <details>
            <summary class="sub-guide-summary">
               <span class="guide-method-name">isMap()</span>
            </summary>
            <pre class="code-example-box">
const myMap = new Map();
Map.isMap(myMap) // true.</pre>
         </details>
         <span class="guide-method-desc"></span>
      </div>
</details>

<details>
   <summary class="guide-summary">Function</summary>
      <div class="sub">
         <details>
            <summary class="sub-guide-summary">
               <span class="guide-method-name">isFunction()</span>
            </summary>
            <pre class="code-example-box">
const myFunction = () => null;
Function.isFunction(myFunction) // true.</pre>
         </details>
         <span class="guide-method-desc"></span>
      </div>
</details>

<details>
   <summary class="guide-summary">Null</summary>
      <div class="sub">
         <details>
            <summary class="sub-guide-summary">
               <span class="guide-method-name">isNull()</span>
            </summary>
            <pre class="code-example-box">
const myNull = null;
Null.isNull(myNull) // true.</pre>
         </details>
         <span class="guide-method-desc"></span>
      </div>
</details>

<details>
   <summary class="guide-summary">Number</summary>
      <div class="sub">
         <details>
            <summary class="sub-guide-summary">
               <span class="guide-method-name">isNumber()</span>
            </summary>
            <pre class="code-example-box">
const myNumber = 100;
Number.isNumber(myNumber) // true.</pre>
         </details>
         <span class="guide-method-desc"></span>
      </div>
</details>

<details>
   <summary class="guide-summary">Object</summary>
      <div class="sub">
         <details>
            <summary class="sub-guide-summary">
               <span class="guide-method-name">isObject()</span>
            </summary>
            <pre class="code-example-box">
const myObject = {};
Object.isObject(myObject) // true.</pre>
         </details>
         <span class="guide-method-desc"></span>
      </div>
</details>

<details>
   <summary class="guide-summary">Promise</summary>
      <div class="sub">
         <details>
            <summary class="sub-guide-summary">
               <span class="guide-method-name">isPromise()</span>
            </summary>
            <pre class="code-example-box">
const myPromise = new Promise( res => res());
Promise.isPromise(myPromise) // true.</pre>
         </details>
         <span class="guide-method-desc"></span>
      </div>
</details>

<details>
   <summary class="guide-summary">String</summary>
      <div class="sub">
         <details>
            <summary class="sub-guide-summary">
               <span class="guide-method-name">isString()</span>
            </summary>
            <pre class="code-example-box">
const myString = '';
String.isString(myString) // true.</pre>
         </details>
         <span class="guide-method-desc"></span>
      </div>
</details>

<details>
   <summary class="guide-summary">Set</summary>
      <div class="sub">
         <details>
            <summary class="sub-guide-summary">
               <span class="guide-method-name">isSet()</span>
            </summary>
            <pre class="code-example-box">
const mySet = new Set();
Set.isSet(mySet) // true.</pre>
         </details>
         <span class="guide-method-desc"></span>
      </div>
</details>

<details>
   <summary class="guide-summary">Symbol</summary>
      <div class="sub">
         <details>
            <summary class="sub-guide-summary">
               <span class="guide-method-name">isSymbol()</span>
            </summary>
            <pre class="code-example-box">
const mySymbol = Symbol();
Symbol.isSymbol(mySymbol) // true.</pre>
         </details>
         <span class="guide-method-desc"></span>
      </div>
</details>

<details>
   <summary class="guide-summary">Regexp</summary>
      <div class="sub">
         <details>
            <summary class="sub-guide-summary">
               <span class="guide-method-name">isRegexp()</span>
            </summary>
            <pre class="code-example-box">
const myRegexp = new RegExp();
Regexp.isRegexp(myRegexp) // true.</pre>
         </details>
         <span class="guide-method-desc"></span>
      </div>
</details>

<details>
   <summary class="guide-summary">Undefined</summary>
      <div class="sub">
         <details>
            <summary class="sub-guide-summary">
               <span class="guide-method-name">isUndefined()</span>
            </summary>
            <pre class="code-example-box">
const myUndefined = undefined;
Undefined.isUndefined(myUndefined) // true.</pre>
         </details>
         <span class="guide-method-desc"></span>
      </div>
</details> -->

##### Array
- isArray()
```js
const myArray = ;
Array.isArray(myArray) // true.
```

##### Bigint
- isBigint()
```js
const myBigint = ;
Bigint.isBigint(myBigint) // true.
```

##### Boolean
- isBoolean()
```js
const myBoolean = ;
Boolean.isBoolean(myBoolean) // true.
```

##### Date
- isDate()
```js
const myDate = ;
Date.isDate(myDate) // true.
```

##### Blob
- isBlob()
```js
const myBlob = ;
Blob.isBlob(myBlob) // true.
```

##### Error
- isError()
```js
const myError = ;
Error.isError(myError) // true.
```

##### Function
- isFunction()
```js
const myFunction = ;
Function.isFunction(myFunction) // true.
```

##### Map
- isMap()
```js
const myMap = ;
Map.isMap(myMap) // true.
```

##### File
- isFile()
```js
const myFile = ;
File.isFile(myFile) // true.
```

##### Null
- isNull()
```js
const myNull = ;
Null.isNull(myNull) // true.
```

##### Number
- isNumber()
```js
const myNumber = ;
Number.isNumber(myNumber) // true.
```

##### Promise
- isPromise()
```js
const myPromise = ;
Promise.isPromise(myPromise) // true.
```

##### Object
- isObject()
```js
const myObject = ;
Object.isObject(myObject) // true.
```

##### Set
- isSet()
```js
const mySet = ;
Set.isSet(mySet) // true.
```

##### Regexp
- isRegexp()
```js
const myRegexp = ;
Regexp.isRegexp(myRegexp) // true.
```

##### Symbol
- isSymbol()
```js
const mySymbol = ;
Symbol.isSymbol(mySymbol) // true.
```

##### String
- isString()
```js
const myString = ;
String.isString(myString) // true.
```

##### Undefined
- isUndefined()
```js
const myUndefined = ;
Undefined.isUndefined(myUndefined) // true.
```

---

<a name="about"></a>

## About
- [Source Code](https://github.com/kevinmnm/is-checker)
- [About Me](https://kevsong.com/)