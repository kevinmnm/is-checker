# This value is.. check! ✅
---

> **Simple and light-weight JavaScript type checker that mimics existing type checking methods!**
----

## Installation
#### NPM
`npm install is-checker`

#### CDN
```
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

---

<div id="introduction"></div>
##Introduction
Have you tried to validate the type of a variable and wonder why some native objects provide *'is'* type checking method but some don't? For example: 

```
const array = [1, 2, 3];
Array.isArray(array); // Works!

const number = 100;
Number.isNumber(number); // Doesn't work :(
```

This is why **is-checker** will add *'is'* checker for every types in JavaScript!

```
const string = 'is-checker';
String.isString(string); // How convenient!
```

The purpose is to create something easy to remember without having to look back at package documentation. Since we already have some default methods to check certain types, why not extend them to every types?

---

## Guide

Every types in JavaScript will have same *'is'* checker method attached to it. If type doesn't have a class by default, it'll create one. Some types will have additional methods created to it.

#### String
- isString()

#### Number
- isNumber()

#### Object
- isObject()

#### Array
- isArray()
- isEmpty()

#### Boolean
- isBoolean()

#### Null
- isNull()

#### Undefined
- isUndefined()

#### Function
- isFunction()

#### Promise
- isPromise()

#### Date
- isDate()

#### Symbol
- isSymbol()

#### File
- isFile()

#### Blob
- isBlob()

#### Error
- isError()

#### Map
- isMap()

#### Set
- isSet()

#### Regexp
- isRegexp()

#### Bigint
- isBigint()

---

## More
- [Source Code](https://github.com/kevinmnm/is-checker)
- [About Me](https://kevsong.com/)