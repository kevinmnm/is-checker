"use strict";
const arrayChecker = require('./checker/array.js');
const bigintChecker = require('./checker/bigint.js');
const blobChecker = require('./checker/blob.js');
const booleanChecker = require('./checker/boolean.js');
const dateChecker = require('./checker/date.js');
const errorChecker = require('./checker/error.js');
const fileChecker = require('./checker/file.js');
const functionChecker = require('./checker/function.js');
const mapChecker = require('./checker/map.js');
const nullChecker = require('./checker/null.js');
const numberChecker = require('./checker/number.js');
const objectChecker = require('./checker/object.js');
const promiseChecker = require('./checker/promise.js');
const regexpChecker = require('./checker/regexp.js');
const setChecker = require('./checker/set.js');
const stringChecker = require('./checker/string.js');
const symbolChecker = require('./checker/symbol.js');
const undefinedChecker = require('./checker/undefined.js');
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
