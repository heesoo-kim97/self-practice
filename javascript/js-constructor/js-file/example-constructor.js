function ExampleConstructor() {}

console.log(ExampleConstructor.prototype);
console.log( typeof ExampleConstructor.prototype);

var newFunc = new ExampleConstructor();
console.log(newFunc);

var instance = newFunc instanceof ExampleConstructor;
console.log(instance);