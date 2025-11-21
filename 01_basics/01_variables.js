//important notes is here
/*
 1.Prefer not to use var because of issue in block scope and function scope
 2.Use let for variable which value is changeable
 3.Use const for variable which value is not changeable

 4. curle braces ke jo jo bhi lekha jata hai usko hi scope kehte hai
  exp;      {  
              }
 5. Global Scope : Jo variable function ke bahar declare hota hai usko global scope kehte hai
 6. Local Scope : Jo variable function ke andar declare hota hai usko local scope kehte hai
 7. Block Scope : Jo variable curly braces ke andar declare hota hai usko block scope kehte hai
 8. perfer not to use var  
    because of issue in block scope and function scope
*/


// coding area is here 

let a = 10;
console.log(a)

const b = "Good Bye"
console.log(b)

let c = " my code is successfully"
console.log(c)

// add two number program 

let a1 = 15;
let b1 = 49;
let c1 = a1 + b1;
console.log("The Addition is : " + c1);

// substraction two number program

let a2 = 50;
let b2 = 20;
let c2 = a2 - b2;
console.log("The Substraction is : " + c2);

// multiplication two number program

let a3 = 5;
let b3 = 4;
let c3 = a3 * b3;
console.log("The Multiplication is : " + c3);

// division two number program

let a4 = 40;
let b4 = 5;
let c4 = a4 / b4;
console.log("The Division is : " + c4);

// modulus two number program

let a5 = 29;
let b5 = 6;
let c5 = a5 % b5;
console.log("The Modulus is : " + c5);

// here ab next topic par bat hogi 

let ueserName = "JohnDoe";
let userId = 12345;
let userPassword = "securePass!";
let UserCity = "New York";
var userState;  // Using var (not recommended)
let isLoggedIn = true;


console.table([ueserName, userId, userPassword, UserCity, isLoggedIn,userState])


