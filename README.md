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

13 Pure function and impure function?
 
 Pure functions return the same output if we use the same input parameters. However, impure functions give different outcomes when we pass the same arguments multiple times.

const pureFunc = (x) =>{
    return x+2;
}

const result = pureFunc(10);
console.log(result);

----impure func-----

let x=20;

const impureFunc =() =>{
   console.log(x);
   x+=2;
}

impureFunc();
impureFunc();
impureFunc();
impureFunc();

14 What is the purpose of the let keyword?

  The let statement declares a block scope local variable. Hence the variables defined with let keyword are limited in scope to the block, statement, or expression on which it is used. Whereas variables declared with the var keyword used to define a variable globally, or locally to an entire function regardless of block scope.

Let's take an example to demonstrate the usage,

let age = 30;

function printAge (){
    let age = 32;// block scope
    console.log(age);
}

printAge();
console.log(age);

difference with Var

function userDetails(username) {
  if (username) {
    console.log(salary); // undefined due to hoisting
    console.log(age); // ReferenceError: Cannot access 'age' before initialization
    let age = 30;
    var salary = 10000;
  }
  console.log(salary); //10000 (accessible to due function scope)
  console.log(age); //error: age is not defined(due to block scope)
}
userDetails("John");

   

15 - What is the reason to choose the name let as a keyword?

let is a mathematical statement that was adopted by early programming languages like Scheme and Basic. It has been borrowed from dozens of other languages that use let already as a traditional keyword as close to var as possible.

16-How do you redeclare variables in switch block without an ?

//----------switch-----------

// with error due to same scope

function switchState(x) {

    switch(x){
        case 0:
         let name;
         break;

        case 1:
            let name;
            break; 
    }
}
// Without error 
function switchState(x) {

    switch(x){
        case 0:
         {
            let name;
           break;
         }

        case 1:
            let name;
            break; 
    }
}

17-What is the Temporal Dead Zone?
Temporal Dead Zone is the period of time during which the let and const declarations cannot be accessed.
also state variable not reachable.

console.log(age);//UND
console.log(time);//Cannot access 'time' before initialization

var age = 26;
let time = 36;

18 -What is IIFE(Immediately Invoked Function Expression)?

    IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The signature of it would be as below,

    (function () {
    // logic here
    })();

19-How do you decode or encode a URL in JavaScript?

    encodeURI() function is used to encode an URL. This function requires a URL string as a parameter and return that encoded string. decodeURI() function is used to decode an URL. This function requires an encoded URL string as parameter and return that decoded string.

    Note: If you want to encode characters such as / ? : @ & = + $ # then you need to use encodeURIComponent().

    let uri = "employeeDetails?name=john&occupation=manager";
    let encoded_uri = encodeURI(uri);
    let decoded_uri = decodeURI(encoded_uri);

20-What is memoization?

Memoization is a programming technique which attempts to increase a function’s performance by caching its previously computed results. Each time a memoized function is called, its parameters are used to index the cache. If the data is present, then it can be returned, without executing the entire function. Otherwise the function is executed and then the result is added to the cache. Let's take an example of adding function with memoization.

const memoAddition = () =>{
   
    let cache = {};
     
    return (value) =>{
        if(value in cache){
            return cache[value];
        }
        else{
            let result = 10+value;
            cache[value] = result;
            return result;
        }
    }
}

let addition = memoAddition();
console.log(addition(10));

21- What is Hoisting?
 Hoisting is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution. Remember that JavaScript only hoists declarations, not initialisation. Let's take a simple example of variable hoisting,

 console.log(message); //output : undefined
var message = "The variable Has been hoisted";

The above code looks like as below to the interpreter,

var message;
console.log(message);
message = "The variable Has been hoisted";


In the same fashion, function declarations are hoisted too

message("Good morning"); //Good morning

function message(name) {
  console.log(name);
}
This hoisting makes functions to be safely used in code before they are declared.

22-closure?

A closure is the combination of a function and the lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function’s variables. The closure has three scope chains

1 Own scope where variables defined between its curly brackets.
2 Outer function’s variables.
3 Global variables.

var closureExam = (name) =>{

   var  getInfo = (message) =>{
        console.log(message+ " " + name);
    }
    return getInfo;
}

var callClosure = closureExam("Anuj");

console.log(callClosure("Hello"));
console.log(callClosure("Hi"));

23-What are modules?

 Modules refer to small units of independent, reusable code and also act as the foundation of many JavaScript design patterns. Most of the JavaScript modules export an object literal, a function, or a constructor

 24-needs of module.
  Why do you need modules
  Below are the list of benefits using modules in javascript ecosystem

    Maintainability
    Reusability
    Namespacing

25-What is scope in javascript?
   
   Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime. In other words, scope determines the visibility of variables and other resources in areas of your code.

26-How do you access web storage?
The Window object implements the WindowLocalStorage and WindowSessionStorage objects which has localStorage(window.localStorage) and sessionStorage(window.sessionStorage) properties respectively. These properties create an instance of the Storage object, through which data items can be set, retrieved and removed for a specific domain and storage type (session or local). For example, you can read and write on local storage objects as below.

localStorage.setItem("logo", document.getElementById("logo").value);
localStorage.getItem("logo");

27-What are the methods available on session storage?

    The session storage provided methods for reading, writing and clearing the session data

        // Save data to sessionStorage
    sessionStorage.setItem("key", "value");

    // Get saved data from sessionStorage
    let data = sessionStorage.getItem("key");

    // Remove saved data from sessionStorage
    sessionStorage.removeItem("key");

    // Remove all saved data from sessionStorage
    sessionStorage.clear();

28-What is a storage event and its event handler?

    The StorageEvent is an event that fires when a storage area has been changed in the context of another document. Whereas onstorage property is an EventHandler for processing storage events. The syntax would be as below.

    window.onstorage = functionRef;

    window.onstorage = function (e) {
        console.log(
            "The " +
            e.key +
            " key has been changed from " +
            e.oldValue +
            " to " +
            e.newValue +
            "."
     );
   };

   29-Why do you need web storage?
      Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance. Also, the information is never transferred to the server. Hence this is a more recommended approach than Cookies.

    30-How do you check web storage browser support?

       if (typeof Storage !== "undefined") {
        // Code for localStorage/sessionStorage.
        } else {
        // Sorry! No Web Storage support..
    }

    31-How do you check web workers browser support?

       if (typeof Worker !== "undefined") {
        // code for Web worker support.
        } else {
        // Sorry! No Web Worker support..
        }

    32-What is a promise?

    A promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it’s not resolved(for example, network error). It will be in one of the 3 possible states: fulfilled, rejected, or pending.


    const promise = new Promise(
    (resolve)=>{
        setTimeout(()=>{
            resolve("resolve");
        },4000)
    },
    (reject)=>{}
)

33- promise chaining.
  
  const promise = new Promise(function(resolve,reject){
    setTimeout(()=>resolve(1),1000);
}).then(function( result){
    console.log(result);
    return result*2;
}).then(function(result){
    console.log(result);
    return result*3;
}).then(function(result){
    console.log(result);
    return 4*result;
})

promise.then((value)=>console.log(value));

    promise.then((value)=>console.log(value));

promise.then((value)=>console.log(value));

33- what is callback function?

   A callback function is a function passed into another function as an argument. This function is invoked inside the outer function to complete an action. Let's take a simple example of how to use callback function


  function innerCallBack(name){
       console.log("Hello"+" "+name);
       document.write("Hello World!"+" "+name);
    }

  function callBackfunc(backcall){
      let name = prompt("please enter your name");
       backcall(name);
   }

   callBackfunc(innerCallBack);


   34-Why do we need callbacks?

   The callbacks are needed because javascript is an event driven language. That means instead of waiting for a response javascript will keep executing while listening for other events. Let's take an example with the first function invoking an API call(simulated by setTimeout) and the next function which logs the message.

   function firstFunction() {
  // Simulate a code delay
        setTimeout(function () {
            console.log("First function called");
        }, 1000);
        }
        function secondFunction() {
        console.log("Second function called");
        }
        firstFunction();
        secondFunction();

        Output;
        // Second function called
        // First function called

        As observed from the output, javascript didn't wait for the response of the first function and the remaining code block got executed. So callbacks are used in a way to make sure that certain code doesn’t execute until the other code finishes execution.

        35-What is a callback hell

        Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard to read and debug when dealing with asynchronous logic. The callback hell looks like below,

        async1(function(){
            async2(function(){
                async3(function(){
                    async4(function(){
                        ....
                    });
                });
            });
        });

        36-How do you receive server-sent event notifications

        The EventSource object is used to receive server-sent event notifications. For example, you can receive messages from server as below,

        if (typeof EventSource !== "undefined") {
            var source = new EventSource("sse_generator.js");
            source.onmessage = function (event) {
                document.getElementById("output").innerHTML += event.data + "<br>";
            };
         }

         37-How do you check browser support for server-sent events

         if (typeof EventSource !== "undefined") {
            // Server-sent events supported. Let's have some code here!
            } else {
            // No server-sent events supported
            }