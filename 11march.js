// include:- it checks the element whether present in array or not and gives result in boolean value.
// let arr = [1, 2, 3, 4, 5]
// console.log(arr);
// console.log(arr.includes(5));

// lastIndexof:- reutrn the last index at which the given element can be found
// let fruits = ['banana', 'orange', 'apple', 'banana', 'kiwi', 'banana']
// console.log(fruits);
// console.log(fruits.lastIndexOf('banana'));

// findIndex:- It returns the index of the first element in the array that satisfies the provided testing function.
// Whenever you give a function as an argument to another function that is known as call back function.
// (a.) for understanding the structure.
// let arr = [1, 2, 3, 4, 5];
//  function cb() { // call back function and returns a boolean value
//     // condtions or operations
//  }
//  let result = arr.findIndex(cb);

// (b.)
// let arr = [1, 2, 3, 4, 5, 6];
// function cb(element) {
//     return element > 5;
// }
// let result = arr.findIndex(cb);
// console.log(result);

// (b.) by usning anonymous function.
// let arr = [1, 2, 3, 4, 5, 6]
// let result = arr.findIndex(function (element){
//     return element > 5;
// })
// console.log(result);

// concat:- to concat two or more arrays.
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = arr1.concat(arr2);
// console.log(arr3);

// toString:- it just convert everything in array to string.
// const arr = ['a', 'b', 1, 'c', '2', 'c3', 4, 5, 6];
// console.log(arr);
// let result = arr.toString();
// console.log(result);

// join:- join the things in array by whatever we provide.
// (a)
// let fruits = ['apple', 'banana', 'mango'];
// console.log(fruits);
// let result = fruits.join("-");
// console.log(result);

// (b.)
// let fruits = ['apple', 'banana', 'mango'];
// console.log(fruits);
// let result = fruits.join("");
// console.log(result);

// (c.)
// let fruits = ['apple', 'banana', 'mango'];
// console.log(fruits);
// let result = fruits.join(" ");
// console.log(result);

// (d.)
// let fruits = ['apple', 'banana', 'mango'];
// console.log(fruits);
// let result = fruits.join(); // if i dont provide any argument then it will separated by comma (,) by default.
// console.log(result);

// some:- some returns true when ateast one of the element in the array satisfies the condition that we provide.
// (a.) for understanding only structure
// let arr = [1, 2, 3, 4, 5];
// function isEven (element) {
//     if (element % 2 === 0) {
//         return true;
//     }
//     return false;
// }

// (b.)
// let arr = [1, 2, 3, 4, 5];
// function isEven(element) { // Testing function
//     return element % 2 === 0; // true or false
// }
// let result = arr.some(isEven); // cb function
// console.log(result);

// (c.) by using anonymous function
// let arr  = [1, 2, 3, 4, 5];
// let result = arr.some(function (element){ // here isEven (function definition) is replaced over here i.e. known as
//     return element % 2 === 0;            //  anonymous function.
// })
// console.log(result);

// (d.) by using arrow function
// let arr  = [1, 2, 3, 4, 5];
// let result = arr.some (element => element % 2 === 0);
// console.log(result);

// every:- returns true if every element of the array satisfies the given condition.
// let arr = [2, 4, 6, 8];
// let result = arr.every(item => item % 2 === 0);
// console.log(result);

// Exercise:-
// 1.
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.some(x => x < 2));
// console.log(arr.every(x => x < 6));

// 2.
// let str = 'string';
// console.log(str.length);

// 3.
// let fruits = ['apple', 'orange', 'banana', 'pear']
// console.log(fruits.some(f => f.length < 5));

// filter:- return a new array with the elements that satisfy the given condition.
// (a.) by using normal function:-
// let arr = [1, 2, 3, 4, 5];
// function isGreaterThan(element) {  // this is call back function which returns boolean value.
//     return element > 2;
// }
// let newArray = arr.filter(isGreaterThan);
// console.log(newArray);

// (b.) by using arrow function:-
// let arr = [1, 2, 3, 4, 5];
// let newArray = arr.filter(element => element > 2);
// console.log(newArray);

// (c.) by using anonymous function:-
// let arr = [1, 2, 3, 4, 5];
// let newArray = arr.filter(function(element){
//     return element > 3;
// })
// console.log(newArray);

// Q:- filter out the odd numbers?
// let arr = [1, 2, 3, 4, 5];
// let newArray = arr.filter(item => item % 2 === 1);
// console.log(newArray);

// or

// let arr = [1, 2, 3, 4, 5];
// let newArray = arr.filter(item => item % 2 !== 0);
// console.log(newArray);

// map: - return a new array but it is populated with the results of the call back function.
// (a.) using normal way:-
// let arr = [1, 2, 3, 4, 5];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i]*2);
// }
// console.log(newArr);

// or

// let arr = [1, 2, 3, 4, 5];
// let newArr = [];
// for (let i = 0; i < 5; i++) {
//     newArr.push(arr[i]*2);
// }
// console.log(newArr);

// (b.) by using map:- map loops over the all the elements of arr, and returns the value after we perform those operations 
//      that we want to perform inside the call back function.
// let arr = [1, 2, 3, 4, 5];
// function double(item) {
//     return item * 2;
// }
// let newArr = arr.map(double); // call back will be executed for each item
// console.log(newArr);

// (b.) using map with arrow function instead of normal function
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.map(item => item *3);
// console.log(newArr);

// Q:- square the element of the array in the new array?
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [10, 9, 8];
// let newArr1 = arr1.map(item => item * item)
// let newArr2 = arr2.map(item => item * item)
// console.log(newArr1, newArr2);

// Q:- return a new array which add 5 to each element?
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.map(item => item+5)
// console.log(newArr);

// foreach:- only executes a provided function once for each element in the array. It does not returns anything while map
//           executes the function also returns the answer in new array.
// Q:- Print double of array elements, not push in new array using for loop.
// Ans:- 
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i]*2;
//     console.log(element);
// }

// or

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]*2);
// }

// Q:- Print double of array elements, not push in new array using forEach method with arrow function.
// Ans:-
// let arr = [1, 2, 3, 4, 5];
// arr.forEach(item => {
//     console.log(item*2);
// })

// Q:- Print double of array elements, not push in new array using forEach method with normal function.
// Ans:-
// let arr = [1, 2, 3, 4, 5];
// function double(item) {
//     console.log(item*2);
// }
// arr.forEach(double);

// Q:- Difference between map and forEACH?
// Ans:- map returns in new array while forEach does not and the similarity is they will run for all elements.

// Q:- using forEach calculate the summ of elements in arr?
// Ans:-
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// arr.forEach(item => {
//     sum += item;  // sum = sum + item
// })
// console.log(sum);

// Q:- using for loop calculate the summ of elements in arr?
// Ans:-
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum);

// reduce:- reduces the array to a single value. it gives or returns a single value.
// three words are used - accumulator, current and initial value.
// two arguments taken by reduce function - reduce(callback, accumulator)
// callback function takes two parameters - 1. accumulator and 2. current
// (a.)
// let arr = [1, 2, 3, 4, 5];
// let initialvalue = 0;
// let result = arr.reduce(function (accumulator, current) {
//     return accumulator = accumulator + current;
// }, initialvalue);
// console.log(result);

// Exercise:-
// Q:- square each and every number in array and filter new array only even  number and then sum of the even number.
// Ans:-
// let arr = [1, 2, 3, 4, 5];
// let squareValue = arr.map(item => item*item)
// console.log(squareValue);
// let evenSquare = squareValue.filter(item => item % 2 === 0)
// console.log(evenSquare);
// let sumOfEvenSquare = evenSquare.reduce((acc, curr) => {
//     acc += curr;
//     return acc
// }, 0);
// console.log(sumOfEvenSquare);
// Also try to do by normal and anonymous function.

// -----------------------CHAINABLE METHOD---------------------------------------
// filter, map and reduce are chainable i.e. one after the other. We are saying it chainable because these three array functions
// returns a new array and in new array, we can apply array function so that why these are chainable. 
// e.g.
// let arr = [1, 2, 3, 4, 5];
// let sumOfEvenSquare = arr.map(item => item * item).filter(item => item % 2 === 0).reduce((acc, curr) => {
//     acc += curr;
//     return acc;
// }, 0)
// console.log(sumOfEvenSquare);