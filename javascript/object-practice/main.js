// return the value of the key property
function getValue(object, key) {
    return object[key];
}

//add property to a object
function setValue(object, key, value) {
    object[key] = value;
}

 //turn object values into array data using object.keys
 function getKeysWithMethod(obj) {
    return Object.keys(obj);    
 }

 //turn object keys into array data not using objet.keys
 function getKeys(obj) {
    var arr = [];
    for (key in obj) {
        arr.push(key);
    }
    return arr;
 }

//turn object values into array data
function getValues(object, key) {
    var array = [];
    for (key in object) {
     array.push(object[key]);
    }
    return array;
 }

// return an object that takes in an array with two elements 
// first element as the key and the other as value 
function toObject(keyValuePair) {
    var obj={};
    obj[keyValuePair[0]] = keyValuePair[1]; 
    return obj;
}

//extract the object properties based on array input
function pick(source, arr) {
    var obj = {};
   for (var i = 0; i < arr.length; i++) {
    if(source[arr[i]] !== undefined) {
        obj[arr[i]] = source[arr[i]];
    }
   }
   return obj;
}

//opposite of pick; create an object coposed of properties of source
function omit(sources, array) {
    for (var i = 0; i < array.length; i++) {
        if (sources[array[i]] !== undefined) {
            delete sources[array[i]];
        }
    }
    return sources;
}

//another way to do omit
function omit2(sources, array) {
    var newObject = {};
    var copyKey = true;
    for(keyOfSource in sources) {
        for(var i = 0; i < array.length; i++) {
            if (keyOfSource === array[i]) {
                copyKey = false;
            }
        }
        if (copyKey === true) {
            newObject[keyOfSource] = source[keyOfSource];
        }
        copyKey = true;
    }
    return newObject;
}

//return an object that flips key and value of the input object
function invert(source) {
    for(key in source) {
        source[source[key]] = key;
        delete source[key];
    }
    return source;
}

//invert function using new object
function invert2(source) {
    var newObj = {};
    for (keys in source) {
        newObj[source[keys]] = keys;
    }
    return newObj;
}

//for any key that does not exist in target object add them
function defaults(target, source) {
   for(sourceKey in source) {
    if (target[sourceKey] === undefined) {
        target[sourceKey] = source[sourceKey];
    }
   }
   return target;
}
