

// Array.push()
/* The push() method adds one or more elements to the end of an array
   and returns the new length of the array */
const city = ['Seoul', 'Incheon', 'Suwon'];
const newCity = city.push('Busan', 'Daejeon');
console.log('push length: ', newCity);
console.log('value after push: ', city);

// Array.unshift()
/* The unshift() method adds one or more elements to the beginning of an
   an array and returns the new length o the array */
const array1 = [1, 2, 3];

const unshift = array1.unshift(4, 5);

console.log('unshift length: ', unshift);
console.log('value after unshift: ', array1);

// Array.pop()
/* The pop() method removes the last element from an array and returns
   that element. This method changes the length of the array. */

const pop = array1.pop();

console.log('length of pop: ', pop);
console.log('value after pop: ', array1);


// Array.shift()
/* The shift() method removes the first element from an array and returns
   that removed element. This method changes the length of the array. */
const shift = array1.shift();
console.log('shift length: ', shift);
console.log('value after shift: ', array1);

// Array.splice()
/* The splice() method changes the contents of an array by removing
   or replacing existing elements and/or adding new elements in place.
   splice(index number to insert, How many elements to replace, value) */

const month = ['Jan', 'Feb', 'March', 'April', 'May'];
var spliceLength = month.splice(3, 2, "June", "July");
console.log('splice month: ', month);
console.log('length of splice: ', spliceLength);

// Array.reverse()
/* The reverse() method reverses an array in place and returns the reference
   to the same array, the first array element now becoming the last, and the
   last aray elements becoming the first. */
   var reverse = month.reverse();
   console.log('reverse length: ', reverse); 
   console.log('reversed value: ', month);

//  Array.sort()
/* The sort() method sorts the elements of an array in place and returns the
   reference to the same array, now sorted. The default sort order is ascending,
   built upon converting the elements into strings, then comparing their 
   sequences of UTF-16 code units values.
   - Alphabetical, numerical by first digit first */
var sort = month.sort();
console.log('sorting alphabetical: ', month);
console.log('var assigned: ', sort);

const num = [2, 34, 100, 55, 2621, 88, 42];
num.sort();
console.log('number sorting: ', num);

// Array.fill()
/* The fill() method changes all elements in an array to a static value,
   from a start index, (default 0) to an end index (default array.length).
   It returns the modified array. 
   fill(value you wanna change to, starting index, ending index) */

   const array2 = [1, 2, 3, 4];
   array2.fill(0, 2, 4);
   console.log(array2);
   array2.fill(5, 1);
   console.log(array2);
   array2.fill(8);
   console.log(array2);

// Array.map()
/* The map() method creates a new array populated with the results of
   calling a provided function on every element in the calling array */

    const array3 = [1, 4, 5, 16];
    const map3 = array3.map(x => x + 2);
    console.log('value after map: ', map3);

    function timesTwo(x) {
        return x*2;
    };

    const map4 = array3.map(timesTwo);
    console.log('value after map: ', map4);

// Array.filter()
/* The filter() method creates a shallow copy of a portion of a given
   array, filtered down to just the elements from the given array
   that pass the test implemented by the provided function*/

   const numbers = [2, 3, 4, 5, 6, 7];
   const result = numbers.filter(n => n > 4);
   console.log('filter numbers: ', result);

   const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
   const result1 = words.filter(word => word.length > 6);
   console.log('filter words: ', result1);

// Array.slice()
/* The slice() method returns a shallow copy of a portion of an array into
   a new array object selected from start to end (end not included) 
   where start and end represent the index of items in that array. */
   const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

   console.log(animals.slice(2));
   console.log(animals.slice(2, 4));
   console.log(animals.slice(-2));
   console.log(animals.slice(2, -1));

// Array.concat()
/* The concat() method is used to merge two or more arrays. This method
    does not change the existing arrays, but instead returns a new array */

    const arr = ['a', 'b', 'c'];
    const arr1 = ['d','e', 'f'];
    const arr2 = ['g'];
    console.log('concat value: ', arr.concat(arr1, arr2));

// Array.flat()
/* The flat() method creates a new array with all sub-array elements
   concatenated into it recursively up to the specified depth */

   const arr3 = [0, 1, 2, [[[3, [4, 5]], 6]]];
   console.log(arr3);
   console.log(arr3.flat());
   console.log(arr3.flat(2));
   console.log(arr3.flat(4));

// Array.flatMap()
/* The flatMap() method returns a new array formed by applying a given
   callback function to each element of the array, and then flattening
   the result by one level. It is combination of map() and flat() */

   const newArr = [1, 2, [3],[4, 5], 6, []];
   const flatmap = newArr.flatMap(num => num );
   console.log('flatmap value: ', flatmap);


// Array.indexOf()
/* The indexOf() method returns the first index at which a given element
   can be found in the array, or -1 if it is not present. */

   const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
   console.log('indexOf value: ', beasts.indexOf('camel'));
   console.log('indexOf value: ', beasts.indexOf('bison', 2))
   console.log('indexOf value: ', beasts.indexOf('human')); 

// Array.findIndex()
/* The findIndex() method returns the index of the first element in 
   an array that satisfies the provided testing function. If no
   elements satisfy the testing function, -1 is returned */

   const numArr = [5, 23, 35, 21, 12, 34, 100, 123, 32];

   const even = (param) => param % 2 === 0;
   console.log('findIndex value: ', numArr.findIndex(even));

// Aray.find()
/* The find() method returns the first element in the provided array
   that satisfies the provided testing function. If no values satisfy
   the testing function, undefined is returned.  */
    console.log('find value: ', numArr.find(even));

// Array.includes()
/* The includes() method determines whether an array includes a certain
   value among its entries, returning true or false as appropriate */
    const pets = ['cat', 'dog', 'hamster'];
    console.log('includes value: ', pets.includes('hamster'));

// Array.some() 
/* The some() method tests whether at least one element in the array 
   passes the test implemented by the provided function. It returns true
   if, in the array, it finds an element for which the provided function 
   returns true; otherwise it returns false.
   It doesn't modify the array. */

   const ex = [1,2,3,4,5];
   console.log('value of some: ', ex.some(even));

// Array.every()
/* The every() method tests whether all elements in the array pass the test
   implemented by the provided function. It returns a Boolean value.*/
 const odd = [1, 3, 5, 7, 9];
 const evenNum = [2, 4, 6, 8, 10];
 console.log('every method result: ', odd.every(even));
 console.log('every method result: ', evenNum.every(even));

// Array.join() 
/* The join() method creates and returns a new string by concatenating all
   of the elements in an array separated by commas or a specified separator
   string. If the array has only one item, then that item will be returned
   without using the separator */

    const elements = ['Fire', 'Water', 'Air'];
    console.log(elements.join());
    console.log(elements.join(''));
    console.log(elements.join('-'));

// Array.reduce()
/* The reduce() method executes a user-supplied "reducer" callback function
   on each element of the array, in order, passing in the return value 
   form the calculation on the preceding element.
   reduce(function to execute, initial value of accumulator) */

   const array4 = [1, 2, 3, 4];
   const initialValue = 0;
   const sumWithInitial = array4.reduce (
    (accumulator, currentValue) => accumulator  + currentValue, initialValue
   );
   console.log(sumWithInitial);
   
   const sum = array4.reduce((accumulator, currentValue) => {
    return accumulator + currentValue; 
   }, 0)
console.log('sum: ', sum);

//Array.forEach() 
/* The forEach() method executes a provided function once for each array element. */

const array5 = ['a', 'b', 'c'];
array5.forEach(element => element + 'd');
console.log("array5", array5);

   const json = [
    {
        "city": 'Seoul',
        "population": 9
    },
    {
        "city": 'Busan',
        "population": 3
    }
    ];
