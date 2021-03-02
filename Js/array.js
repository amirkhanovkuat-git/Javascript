/* jshint node: true */
"use strict";

const arr = [5, 2, 10, 1, 15];
arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});