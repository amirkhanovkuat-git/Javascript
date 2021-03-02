/* jshint node: true */
"use strict";

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const john = Object.create(soldier);

// const john = {
//     healt: 100
// };

// john.__proto__ = soldier;

// console.log(john.armor);

Object.setPrototypeOf(john, soldier);

john.sayHello();