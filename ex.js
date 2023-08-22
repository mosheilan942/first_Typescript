"use strict";
function bigNum(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
;
function bigNumPrint(num1, num2) {
    console.log(num1 > num2 ? num1 : num2);
}
;
function oddNum(num1) {
    return num1 % 2 === 0 ? "the number is even" : "the number is odd";
}
;
function arrayN(num1) {
    let arr = [];
    for (let i = 0; i < num1; i++) {
        arr.push(i);
    }
    return arr;
}
;
function langthStr(str) {
    return str.length;
}
;
function findMax(arr) {
    let max = 0;
    arr.filter(num => num > max ? max = num : null);
    return max;
}
console.log(findMax([1, 2, 3, 4, 5]));
function printPerson(person) {
    let str = '';
    for (const key in person) {
        str += `${person[key]}`;
    }
    return str;
}
function isMinor(person) {
    return person.Age > 18 ? true : false;
}
;
function oldReader(person) {
    let max = 0;
    let man = 0;
    person.forEach(e => e.Age > max ? max = e.Age : null);
    // let index = person.findIndex((e => e.Age === max))
    for (let i = 0; i < person.length; i++) {
        person[i].Age === max ? man = person[i] : null;
    }
    return man;
}
function oldbook(person) {
    let min = person[0].favoriteBook.Year;
    let book = 0;
    person.forEach(e => e.favoriteBook.Year < min ? min = e.favoriteBook.Year : null);
    // let index = person.findIndex((e => e.Age === max))
    for (let i = 0; i < person.length; i++) {
        person[i].favoriteBook.Year === min ? book = person[i].favoriteBook : null;
    }
    return book;
}
;
let array2 = [{
        Name: "string",
        Age: 12,
        isStudent: true,
        favoriteBook: {
            Title: "string",
            Author: "string",
            Year: 1990
        }
    }, {
        Name: "string",
        Age: 20,
        isStudent: true,
        favoriteBook: {
            Title: "string",
            Author: "string",
            Year: 1800
        }
    }, {
        Name: "string",
        Age: 18,
        isStudent: true,
        favoriteBook: {
            Title: "string",
            Author: "string",
            Year: 1700
        }
    }, {
        Name: "string",
        Age: 88,
        isStudent: true,
        favoriteBook: {
            Title: "string",
            Author: "string",
            Year: 1600
        }
    }
];
// console.log(oldReader(array));
// console.log(oldbook(array));
function findSumEven(array) {
    let sum = 0;
    array.forEach(num => num % 2 === 0 ? sum += num : null);
    return sum;
}
;
function findArea(arg) {
    return "the area if the rectangle is: " + arg.height * arg.width;
}
function palindrome(str) {
    let j = str.length;
    let check = false;
    for (let i = 0; i < str.length / 2; i++) {
        j = j - 1;
        if (str[i] === str[j]) {
            check = true;
        }
        else {
            check = false;
            return check;
        }
    }
    return check;
}
// console.log(palindrome("1235321"));
function chengeStr(array) {
    let firstarray = [];
    array.map(function (str) {
        let newstr = str.substring(1).toLowerCase();
        firstarray.push(newstr);
    });
    let secondarray = [];
    for (var i = 0; i < array.length; i++) {
        let str = array[i][0].toUpperCase() + firstarray[i];
        secondarray.push(str);
    }
    return secondarray;
}
;
console.log(chengeStr(["moshe", "ilan", "simi", "loziny"]));
function uniq(array) {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        if (!obj[current]) {
            obj[current] = i;
        }
    }
    array = [];
    for (const iterator of obj) {
        array.push(iterator);
    }
    return array;
}
;
let array = [1, 2, 3, 4, 5, 6, 1, 2, 3];
console.log(uniq(array));
() => { };
