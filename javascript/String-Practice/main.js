// getting the first character letter
function getFirstChar(string) {
    return string[0];
}

// getting the last character letter
function getLastChar(string) {
    return string[string.length - 1]
}

// capitalizing only the first letter
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
} 

// checking if the word is caplitalized
function isUpperCased(word) {
    if (word === word.toUpperCase()) {
        return true;
    } else {
        return false;
    }
}

//checking if the all letters are lowercased
function isLowerCased(word) {
    if (word === word.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}

//checking if a character is a vowel
function isVowel(char) {
    if (char.toLowerCase() === 'a' || char.toLowerCase() === 'e' || char.toLowerCase() === 'i' || char.toLowerCase() === 'o' || char.toLowerCase() === 'u') {
        return true;
    } else {
        return false;
    }
}

// separating each word into a single string value in an array
function getWord(string) {
    return string.split(' ');
}

// reversing the order of the word
function reverseWord(word) {
    var newArr = '';
    for (var i = word.length -1; i >= 0; i--) {
        newArr += word[i];
    }
    return newArr;
}

//cuts string down to the length and adds ellipsis(...)
function truncate(length, string) {
    var newStr = '';
    for (var i = 0; i < length; i++) {
        if (string[i]) {
            newStr += string[i];
        }
    }
    return newStr + '...';
}

// Capitalize only the first letter of the string
// if the word is javascript -> JavaScript
function capitalizeWord(word) {
    var newWord = '';
    if (word.toLowerCase() === 'javascript') {
        return 'JavaScript';
    } else {
        for(var i = 1; i < word.length; i++) {
            newWord += word[i].toLowerCase();
        }
        return word[0].toUpperCase() + newWord;
    }
}

// Another way of capitalizeword
function capitalizeWord2(word) {
    var capitalize = word.charAt(0).toUpperCase() + word.slice(1).toLowercase;
    var javaScript = 'JavaScript';
    if (word.toLowercase() === 'javascript') {
        return javaScript;
    } else {
        return capitalize;
    }
}

// return a string capitalized every other letter - starting with second letter
function ransomCase(string) {
    var newString = '';
    for (var i = 0; i < string.length; i++) {
        if (i % 2 === 0) {
            newString += string.charAt(i).toLowerCase();
        } else {
            newString += string[i].toUpperCase();
        }
    }
    return newString;
}

//capitalize every new word in a string
function capitalizeWords(string) {
    var emptyStr = '';
    for (var i = 0; i < string.length; i++) {
        if (i === 0) {
            emptyStr += string.charAt(0).toUpperCase();
        } else if (string[i - 1] === ' '){
            emptyStr += string[i].toUpperCase();
        } else {
            emptyStr += string[i].toLowerCase();
        }
    }
    return emptyStr;
}

//another way to do capitalizeWords with boolean
function capitalizeWords2(string) {
    var newString = '';
    var isCapitalize = true;
    for (var i = 0; i < string.length; i++) {
        if (isCapitalize) {
            newString += string[i].toUpperCase();
            isCapitalize = false;
        } else if (string[i] === ' ') {
            newString += string[i];
            isCapitalize = true;
        } else {
            newString += string[i].toLowerCase();
        }
    }
    return newString;
}

//return the total number of vowels in a string
function numVowels(string) {
    var countVowel = 0;
    for(var i = 0; i < string.length; i++) {
        if(string[i].toLowerCase() === 'a' || string[i].toLowerCase() === 'e' || string[i].toLowerCase() === 'i' || string[i].toLowerCase() === 'o' || string[i].toLowerCase() === 'u') {
            countVowel++;
        }
    }
    return countVowel;
}

// return string value up to the length
function firstChars(length, string) {
    var newStr = '';
    if (string === '') {
        return "";
    }
    else {
        for (var i = 0; i < length; i++) {
            newStr += string[i];
            if (i === string.length - 1) {
                break;
            }
        }
    }
    
    return newStr;
}

//Another way using boolean
function firstChars2(length, string) {
    var newString = '';
    for (var i = 0; i < length; i++) {
        if (string[i]) {
            newString += string[i];
        }
    }
    return newString;
}

//return string value up to the length from reverse order
function lastChars(length, string) {
    var newStr = '';
    for (var i = string.length - length; i < string.length; i++) {
        if (string[i]) {
            newStr += string[i];
        }
    }
    return newStr;
}
// swap the two characters at two index specified
function swapChars(firstIndex, secondIndex, string) {
    var newString = '';
    for (var i = 0; i < string.length; i++) {
        if (i === firstIndex) {
            newString += string[secondIndex];
        } else if (i === secondIndex) {
            newString += string[firstIndex];
        } else {
            newString += string[i];
        }
    }
    return newString;
}

//return a boolean value to check if the string is a palindrome (mirrored word like bob, racecar)
function isPalindromic(string) {
   var newStr = ''; 
   var backwardStr = '';
    for (var i = 0; i < string.length; i++) {
        if  (string[i]  !== ' ') {
            newStr += string[i];
        }
    }
    for(var z = string.length - 1; z >= 0; z--) {
        if  (string[z]  !== ' ') {
            backwardStr += string[z];
        }
    }
    if(newStr === backwardStr && newStr.length > 1) {
        return true;
    } else {
        return false;
    }
}

//return a boolean value to determine anagrams - rearranging the letter into a new word
function isAnagram(firstString, secondString) {
    var orderFirstString = firstString.toLowerCase().split('').sort().join('').replaceAll(' ','');
    var orderSecondString = secondString.toLowerCase().split('').sort().join('').replaceAll(' ','');
    if (orderFirstString === orderSecondString) {
        return true;
    } else {
        return false;
    }
}