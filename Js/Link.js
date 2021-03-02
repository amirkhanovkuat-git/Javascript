/* jshint node: true */
'use strict';
function copy(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers); 

// newNumbers.a = 10;
// newNumbers.c.x = 15;
// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 30,
    e: 50
};

const clone = (Object.assign({}, add));

// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'abcde'; 

// console.log(oldArray);
// console.log(newArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

// const num = [5, 10, 15];

// log(...num);

// const coll = [5, 1, 10];
// const newColl = [...coll];

// console.log(newColl);

const obj = {
    word: 'city',
    num: 5
};
const newObj = {...obj};

console.log(newObj);
