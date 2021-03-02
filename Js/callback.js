/* jshint node: true */
"use strict";

// function first() {
//     // do something 
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// first();

// function second() {
//     console.log(2);
// }

// second();

function learnJs(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок');
}

learnJs('Javascript', done);