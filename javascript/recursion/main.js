function sum(number) {
    if (number === 0) {
        return 0;
    }
    return number + sum(number - 1);
}

console.log(sum(10));

function sumEven(number) {
    if (number === 0) {
        return 0;
    } else if (number % 2 !== 0) {
        return sumEven(number-1);
    }
    return number + sumEven(number-1);
}

console.log(sumEven(10));

function factorial(number) {
    if (number === 1) {
        return 1;
    }
    return number*factorial(number-1);
}

console.log(factorial(4));

function pascal(row, column) {
    if (column>row) {
        return 0;
    }
    if (column<=1 || row<=1) {
        return 1;
    }
    return pascal(row-1, column) + pascal(row-1, column-1);
}

function triangle(number) {
    let string = "";
    for (let row=1; row<=number; row++) {
        for(let column=1; column<=row; column++) {
            string += `${pascal(row, column)} `;
        }
        string += "\n";
    }
    return string;
}

console.log(triangle(10));