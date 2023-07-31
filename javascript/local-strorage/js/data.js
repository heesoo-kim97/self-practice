/* exported todos */

var todos = [];

var previousTodosJSON = localStorage.getItem('javascript-local-storage');

if (previousTodosJSON !== null) {
    todos = JSON.parse(previousTodosJSON);
}

window.addEventListener('beforeunload', todosHandler);

function todosHandler(event) {
    console.log(event.target);
    var todosJSON = JSON.stringify(todos);
    localStorage.setItem('javascript-local-storage', todosJSON);
}

/*
storing data in localStorage allows the JS sites and apps to
store and access the data without an expiration date. 
The data will always be persisted and will not expire.
So, data stored in the browser will be available even 
after closing the browser window.
*/