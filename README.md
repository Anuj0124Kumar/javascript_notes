# javascript_notes

1-------- Call Apply Bind---------
Call Apply Bind

let employee1 = {
firstname:"Anuj",
lastname:"vishwakarma"
}

let employee2 = {
firstname:"Sourabh",
lastname:"Kumar"
}

function invite(first,last){
console.log(first+" "+this.firstname+" "+this.lastname+" "+last);
}

invite.call(employee1,"Hello","Dear");
invite.call(employee2,"Hello","good");

Apply

let employee1 = {
firstname:"Anuj",
lastname:"vishwakarma"
}

let employee2 = {
firstname:"Sourabh",
lastname:"Kumar"
}

function invite (first,last){
console.log(first+" "+this.firstname+" "+this.lastname+" "+" "+last);
}

invite.apply(employee1,["Hello","dear"]);
invite.apply(employee2,["Hello","dear"]);

Bind
let employee1 = {
firstname:"Anuj",
lastname:"vishwakarma"
}

let employee2 = {
firstname:"Sourabh",
lastname:"Kumar"
}

function invite(first,last){
console.log(first+" "+this.firstname+" "+this.lastname+" "+last);
}

let employ1call = invite.bind(employee1);
let employ2call = invite.bind(employee2);

employ1call("Hello","dear");
employ2call("Hello","dear");

2 What is JSON?

JSON stands for JavaScript Object Notation

JSON is a lightweight format for storing and transporting data

JSON is often used when data is sent from a server to a web page

JSON is "self-describing" and easy to understand.

example----

JSON

to convert string to native object

JSON.parse(data);

To convert native object to string (it is present on web server)

JSON.stringify(data);

3 Slice -----

The slice() method returns the selected elements in an array as a new array object. It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element. If you omit the second argument then it selects till the end.

let arr = [1,2,3,3,5,5,678,8];

let arr1 = arr.slice(0,3);
let arr2 = arr.slice(4,7);
let arr3 = arr.slice(2);
let arr4 = arr.slice(0,-2);

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);

Note: Slice method won't mutate the original array but it returns the subset as a new array.

4. Splice----

The splice() method is used either adds/removes items to/from an array, and then returns the removed item. The first argument specifies the array position for insertion or deletion whereas the optional second argument indicates the number of elements to be deleted. Each additional argument is added to the array.

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,4,57,8];
let arr3 = [9,8,7,6,5,4]

let marr1 = arr1.splice(0,2);
let marr2= arr2.splice(2,5);
let marr3 = arr3.splice(0,-2);

console.log(arr1+"-->"+marr1);
console.log(arr2+"-->"+marr2);
console.log(arr3+"-->"+marr3);

Note: Splice method modifies the original array and returns the deleted array.

5.How do you compare Object and Map?

Objects are similar to Maps in that both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. Due to this reason, Objects have been used as Maps historically. But there are important differences that make using a Map preferable in certain cases.

i-The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.

ii-The keys in Map are ordered while keys added to Object are not. Thus, when iterating over it, a Map object returns keys in order of insertion.

iii-You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually.

iv-A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.

v-An Object has a prototype, so there are default keys in the map that could collide with your keys if you're not careful. As of ES5 this can be bypassed by using map = Object.create(null), but this is seldom done.

vi-A Map may perform better in scenarios involving frequent addition and removal of key pairs.

6.What is the difference between == and === operators?

JavaScript provides both strict(===, !==) and type-converting(==, !=) equality comparison. The strict operators take type of variable in consideration, while non-strict operators make type correction/conversion based upon values of variables. The strict operators follow the below conditions for different types,

i-Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions.

ii-Two numbers are strictly equal when they are numerically equal. i.e, Having the same number value. There are two special cases in this,
A--->NaN is not equal to anything, including NaN.
B--->Positive and negative zeros are equal to one another.

iii->Two Boolean operands are strictly equal if both are true or both are false

iv-Two objects are strictly equal if they refer to the same Object.
v-Null and Undefined types are not equal with ===, but equal with ==. i.e, null===undefined --> false but null==undefined --> true

Some of the example which covers the above cases,

0 == false // true
0 === false // false
1 == "1" // true
1 === "1" // false
null == undefined // true
null === undefined // false
'0' == false // true
'0' === false // false
[]==[] or []===[] //false, refer different objects in memory
{}=={} or {}==={} //false, refer different objects in memory

7 What are lambda or arrow functions?
An arrow function is a shorter syntax for a function expression and does not have its own this, arguments, super, or new.target. These functions are best suited for non-method functions, and they cannot be used as constructors.

8 What is a first class function

In Javascript, functions are first class objects. First-class functions means when functions in that language are treated like any other variable.

For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable. For example, in the below example, handler functions assigned to a listener

example
const handler = () => console.log("This is a click handler function");
document.addEventListener("click", handler);

9-What is a first order function?
First-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value.

example-
const firstOrder = () => console.log("I am a first order function!");

10-What is a higher order function?

Higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.

Example-

const firstOrderFunc = () =>
console.log("Hello, I am a First order function");
const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
higherOrder(firstOrderFunc);


11-What is a unary function?

Unary function (i.e. monadic) is a function that accepts exactly one argument. It stands for a single argument accepted by a function.

example
const unaryFunction = (a) => console.log(a + 10); // Add 10 to the given argument and display the value

12=const unaryFunction = (a) => console.log(a + 10); // Add 10 to the given argument and display the value?

Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument. Currying is named after a mathematician Haskell Curry. By applying currying, a n-ary function turns it into a unary function.

Let's take an example of n-ary function and how it turns into a currying function,

example
const multiArgFunction = (a, b, c) => a + b + c;
console.log(multiArgFunction(1, 2, 3)); // 6

const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
curryUnaryFunction(1); // returns a function: b => c =>  1 + b + c
curryUnaryFunction(1)(2); // returns a function: c => 3 + c
curryUnaryFunction(1)(2)(3); // returns the number 6