/* jshint node: true */
"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

// options.makeTest();

const {border, bg} = options.colors;
console.log(border);

// console.log(Object.keys(options).length);

// console.log(options['colors']['border']);

// console.log(options.name);

// delete options.name;
// console.log(options); 

// let counter = 0; 

// for (let key in options) {
//     if (typeof(options[key]) === 'object'){
//         for (let mkey in options[key]) {            
//             console.log(`Свойство ${mkey} имеет значение ${options[key][mkey]}`);
//         }
//     } else {
//         counter += 1;
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
    
// }

// console.log(counter);