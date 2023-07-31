// return only the first element
function head(array) {
    return array[0];
}

//return only te last element
function last(array) {
    return array[array.length - 1];
}

//return all elements except for the first
function tall(array) {
    var newArray = [];
    for (var i = 1; i < array.length; i++) {
        newArray.push(array[i]);
    }
    return newArray;
}

//return all elements except for the last
function initial(array) {
    var newArray = [];
    for (var i = 0; i < array.length - 1; i++) {
        newArray.push(array[i]);
    }
    return newArray;
}

// reverse the order of element
function reverse(array) {
    return array.reverse();
}

//another way to reverse the order
function reverse2(array) {
    var newArr = [];
    for (var i = array.length - 1; i >= 0; i--) {
        newArr.push(array[i]);
    }
    return newArr;
}

//take out the elements with false value (NaN, null, undefined, 0, false, '')
// empty string is false but empty [], {} is not false
function compact(array) {
    var remove = [];
    for (var i = 0; i < array.length; i++) {
        if (Boolean(array[i]) === true) {
            remove.push(array[i]);
        }
    }
    return remove;
}

// return array value only containing specified number of elements
function take(array, count) {
    if (array.length === 0) {
        return [];
    }
    var newArr = [];
    for(var i = 0; i < count; i++) {
        newArr.push(array[i]);
    }
    return newArr;
}

//dropping the array values up to the number specified
function drop(array, count) {
    var emptyArr = [];
    for (var i = count; i < array.length; i++) {
        emptyArr.push(array[i]);
    }
    return emptyArr;
}

//return a boolean value to check if the value exists or not in the array
function includes(array, value) {  
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}

// returning only the array values from the back of array values
function takeRight(array, count) {
    var newArr = [];
    for (var i = array.length - count; i < array.length; i++) {
        newArr.push(array[i]);
        if (count > array.length) {
            newArr = array;
        }
    }
    return newArr;
}

// dropping the specified number of elements starting from the back
function dropRight(array, count) {
    var newArray = [];
    for (var i = 0; i < array.length - count; i++) {
        newArray.push(array[i]);
    }
    return newArray;
}

// separate each array into each array with the size indicated
// separate whatever you can first into the size indicated
function chunk(array, size) {
    var mainArray = [];
    var newArray = [];
    var count = 0;
    if (array.length === 0) {
        return [];
    }
    for(var i = 0; i < array.length; i++) {
        if(count === size) {
            mainArray.push(newArray);
            newArray = [];
            newArray.push(array[i]);
            count = 0;
        } else {
            newArray.push(array[i]);
        }
            count++;
    }
    mainArray.push(newArray);
    return mainArray;
}

// chunk fuction another way
function chunk2(array, size) {
    var mainArr = [];
    var newArr = [];
    if (array.length === 0) {
        return [];
    }
    for (var i = 0; i < array.length; i++) {
        if(newArr.length === size) {
            mainArr.push(newArr);
            newArr = [];
        }
        newArr.push(array[i]);
    }
    mainArr.push(newArr);
    return mainArr;
}

//boolean value to indicate whether or not the two arrays are equal to each other
function equal(first, second) {
    if(first.length !== second.length) {
        return false;
    }
    for (var i = 0; i < first.length; i++) {
        if(first[i] !== second[i]) {
            return false;
        }
    }
    return true;
}

//flatten any direct child arrays unwrapped
function flatten(array) {
    
}