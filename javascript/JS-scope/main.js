/*
Global Scope

A variable declared outside a function. become Global

A global variable has Global Scope:
All scripts and functions on a web page(html file) can access it.

example:
*/
let carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName
}

/*
Automatically Global

If you assign a value to a variable that has not been declared,
it will automatically become a GLOBAL variable

example:
*/

myFunction();

// code here can use carName

function myFunction() {
  carName = "Volvo";
}

/*
Block Scope

keyword let and const provide Block scope in JS
variables declared inside a {} block cannot be accessed from outside

variables declared with the var keyword cannot have block scope.
variables decalred inside a {} can be accessed from the outside.

example:
*/
{
  let x = 2;
}
// x can NOT be used here

{
  var x = 2;
}
// x CAN be used here


/*
Function Scope

Variables declared within a JavaScript Function, become LOCAL to the function.

Local variables have Function Scope:
They can only be accessed from within the function.

since local variables are only recognized inside their functions,
variables with the same name can be used in different functions
like var = i

Each function creates a new scope. 
Varaibles defined inside a function are not accessible from the outside
var, let , const are all local inside a function.

example:
*/

// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName