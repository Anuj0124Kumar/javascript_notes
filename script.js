

// 1-------- Call Apply Bind---------
// Call Apply Bind

// let employee1 = {
//     firstname:"Anuj",
//     lastname:"vishwakarma"
// }

// let employee2 = {
//     firstname:"Sourabh",
//     lastname:"Kumar"
// }


// function invite(first,last){
//     console.log(first+" "+this.firstname+" "+this.lastname+" "+last);
// }


// invite.call(employee1,"Hello","Dear");
// invite.call(employee2,"Hello","good");

// Apply 

// let employee1 = {
//     firstname:"Anuj",
//     lastname:"vishwakarma"
// }

// let employee2 = {
//     firstname:"Sourabh",
//     lastname:"Kumar"
// }

// function invite (first,last){
//     console.log(first+" "+this.firstname+" "+this.lastname+" "+" "+last);
// }



// invite.apply(employee1,["Hello","dear"]);
// invite.apply(employee2,["Hello","dear"]);

// Bind
// let employee1 = {
//     firstname:"Anuj",
//     lastname:"vishwakarma"
// }

// let employee2 = {
//     firstname:"Sourabh",
//     lastname:"Kumar"
// }


// function invite(first,last){
//     console.log(first+" "+this.firstname+" "+this.lastname+" "+last);
// }


// let employ1call = invite.bind(employee1);
// let employ2call = invite.bind(employee2);

// employ1call("Hello","dear");
// employ2call("Hello","dear");


//  JSON----

// to convert string to native object


//   JSON.parse(data);

//    to convert native object to string (it is present on web server)

//   JSON.stringify(data);


//  3  Slice -----

//  The slice() method returns the selected elements in an array as a new array object. It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element. If you omit the second argument then it selects till the end.

// let arr = [1,2,3,3,5,5,678,8];

// let arr1 = arr.slice(0,3);
// let arr2 = arr.slice(4,7);
// let arr3 = arr.slice(2);
// let arr4 = arr.slice(0,-2);

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);

//4. splice---

// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,4,57,8];
// let arr3 = [9,8,7,6,5,4]



// let marr1 = arr1.splice(0,2);
// let marr2= arr2.splice(2,5);
// let marr3 = arr3.splice(0,-2);

// console.log(arr1+"-->"+marr1);
// console.log(arr2+"-->"+marr2);
// console.log(arr3+"-->"+marr3);

//first class function;----------

// const handler = () =>{
//     console.log("First order function");
// }

// document.addEventListener("click",handler);


//  first order function---------

// const firstorder  = () =>{
//     console.log('first order func');
// }

// firstorder();


//Higher Order function-----------

//  const firstorderfunc = ()=>{
//     console.log("Higher Order function");
//  }

//  const HigherOrderFun = (ReturnFirstOrderfunc) =>{
//     ReturnFirstOrderfunc();
//  }

//  HigherOrderFun(firstorderfunc);

// Unary func ----------------------


// const unaryFunc = (a) =>{
//     return a+10;
// }

// console.log(unaryFunc(34));

//currying -----------------------

// const multiArgFunction = (a, b, c) => a + b + c;
// console.log(multiArgFunction(1, 2, 3)); // 6

// const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
// curryUnaryFunction(1); // returns a function: b => c =>  1 + b + c
// curryUnaryFunction(1)(2); // returns a function: c => 3 + c
// curryUnaryFunction(1)(2)(3); // returns the number 6


// const pureFunc = (x) =>{
//     return x+2;
// }

// const result = pureFunc(10);
// console.log(result);


// let x=20;

// const impureFunc =() =>{
//    console.log(x);
//    x+=2;
// }

// impureFunc();
// impureFunc();
// impureFunc();
// impureFunc();

//--------let------------------

// let age = 30;

// function printAge (){
//     let age = 32;// block scope
//     console.log(age);
// }

// printAge();
// console.log(age);


//----------switch-----------

// with error due to same scope

// function switchState(x) {

//     switch(x){
//         case 0:
//          let name;
//          break;

//         case 1:
//             let name;
//             break; 
//     }
// }
// // Without error 
// function switchState(x) {

//     switch(x){
//         case 0:
//          {
//             let name;
//            break;
//          }

//         case 1:
//             let name;
//             break; 
//     }
// }


//TDZ

// console.log(age);//UND
// console.log(time);//Cannot access 'time' before initialization

// var age = 26;
// let time = 36;


// const memoAddition = () =>{
   
//     let cache = {};
     
//     return (value) =>{
//         if(value in cache){
//             return cache[value];
//         }
//         else{
//             let result = 10+value;
//             cache[value] = result;
//             return result;
//         }
//     }
// }

// let addition = memoAddition();
// console.log(addition(10));


//-------closure-------



// var closureExam = (name) =>{

//    var  getInfo = (message) =>{
//         console.log(message+ " " + name);
//     }
//     return getInfo;
// }

// var callClosure = closureExam("Anuj");

// console.log(callClosure("Hello"));
// console.log(callClosure("Hi"));

