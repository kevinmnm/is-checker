"use strict";
const arrayChecker = require('./src/checker/array.js');
const bigintChecker = require('./src/checker/bigint.js');
const blobChecker = require('./src/checker/blob.js');
const booleanChecker = require('./src/checker/boolean.js');
const dateChecker = require('./src/checker/date.js');
const errorChecker = require('./src/checker/error.js');
const fileChecker = require('./src/checker/file.js');
const functionChecker = require('./src/checker/function.js');
const mapChecker = require('./src/checker/map.js');
const nullChecker = require('./src/checker/null.js');
const numberChecker = require('./src/checker/number.js');
const objectChecker = require('./src/checker/object.js');
const promiseChecker = require('./src/checker/promise.js');
const regexpChecker = require('./src/checker/regexp.js');
const setChecker = require('./src/checker/set.js');
const stringChecker = require('./src/checker/string.js');
const symbolChecker = require('./src/checker/symbol.js');
const undefinedChecker = require('./src/checker/undefined.js');
//## array ##//
arrayChecker();
//## bigint ##//
bigintChecker();
//## blob ##//
blobChecker();
//## boolean ##//
booleanChecker();
//## date ##//
dateChecker();
//## error ##//
errorChecker();
//## file ##//
fileChecker();
//## function ##//
functionChecker();
//## map ##//
mapChecker();
//## null ##//
nullChecker();
//## number ##//
numberChecker();
//## object ##//
objectChecker();
//## promise ##//
promiseChecker();
//## regexp ##//
regexpChecker();
//## set ##//
setChecker();
//## string ##//
stringChecker();
//## symbol ##//
symbolChecker();
//## undefined ##//
undefinedChecker();
