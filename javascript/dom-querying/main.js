console.log('hello, world');

/* 
the Document method querySelector() returns the 
first Element within that matches the specified selector.
If no matches are found, null is returned.
*/

var heading1 = document.querySelector('h1');
console.log(heading1);
console.dir(heading1);

var explain = document.querySelector('#explanation');
console.log(explain);
console.dir(explain);

var hint = document.querySelector('.hint');
console.log(hint);
console.dir(hint);

var allP = document.querySelectorAll('p');
console.log(allP);

var allLink = document.querySelectorAll('.example-link');
console.log(allLink);