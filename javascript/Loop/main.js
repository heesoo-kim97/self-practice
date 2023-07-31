function getNumbersToTen() {
    var number = [];
    var currentNum = 1;
    while(currentNum <= 10) {
        number.push(currentNum)
        currentNum++;
    }
    return number;
}

// can use if statement or increase increments by 2
function getEvenNumbersToTwenty() {
    var evenNumbers = [];
    var currentNum = 2;
    while (currentNum <=20) {
        evenNumbers.push(currentNum);
        currentNum += 2;
    }
    return evenNumbers;
}

function repeatWord(word, times) {
    var count = 1;
    var repeated = '';
    while (count < times) {
        repeated.push(word);
        count++;
    }
    return repeated;
};

function logEachCharacter(string) {
    for (var i = 0; i < string.length; i++) {
        console.log(string[i]);
    }
}

function doubleAll(numbers) {
    var doubled = [];
    for (var i = 0; i < numbers.length; i++) {
        doubled.push(numbers[i] * 2);
    }
    return doubled;
}

/*
 for ...in loop
defined variable represents all the key in an object
only iterates string properties of an object
 */
function getKey(object) {
    var keys = [];
    for (var key in object) {
        keys.push(key);
    }
    return keys;
}

function getValues(object) {
    var values = [];
    for (var key in object) {
        values.push(object[key]);
    }
    return values;
}

function countdown(number) {
    var down = [];
    while(number >= 0) {
        down.push(number);
        number--;
    }
    return down;
}

function sumAll(numbers) {
 var sum = 0;
 for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
 }
 return sum;
}

function getIndex(array) {
    var index = [];
    for (var i = 0; i < array.length; i++) {
        index.push(i)
    }
    return index;
}

function addSuffixToAll(words, suffix) {
    var addSuffix = [];
    for(var i = 0; i < words.length; i++) {
        addSuffix.push(words[i] + suffix);
    }
    return addSuffix;
}

function getStudentNames(students) {
    var getNames = [];
    for (var i = 0; i < students.length; i++) {
        getNames.push(students[i].name)
    }
    return getNames;
}

function includesSeven(array) {
    for(var i = 0; i < array.length; i++) {
        if (array[i] === 7) {
            return true;
        } 
    }
    return false;
}

function findIndex(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        } 
    } 
    return -1;
}

function oddOrEven(numbers) {
    var arr = [];
    for(var i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 === 0) {
            arr.push('even');
        } else {
            arr.push('odd');
        }
    }
    return arr;
}