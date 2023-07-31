function isUnderFive(number) {
    if (number < 5) {
        return true;
    } else {
        return false;
    }
}

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function startsWithJ(string) {
    if (string[0] === 'J') {
        return true;
    } else {
        return false;
    }
}

function isOldEnoughToDrink(person) {
    if (person.age >= 21) {
        return true;
    } else {
        return false;
    }
}