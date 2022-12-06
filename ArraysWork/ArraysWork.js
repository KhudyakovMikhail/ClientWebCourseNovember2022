var array1 = [17, 5, -10, 14, -8, 37, 26, -1, 33, -18, -25, 45, 22, 44];
console.log(array1);

function getSortedArray(array) {
    return array.sort(function (e1, e2) {
        return e2 - e1;
    });
}

var sortedArray = getSortedArray(array1)
console.log(sortedArray);

function getFirst5Elements(array) {
    return array.slice(0, 5);
}

var first5Array = getFirst5Elements(sortedArray);
console.log(first5Array);

function getLast5Elements(array) {
    return array.slice(sortedArray.length - 5);
}

var last5Array = getLast5Elements(sortedArray);
console.log(last5Array);

function getEvenNumbersSum(array) {
    return array.filter(function (element) {
        if (element % 2 === 0) {
            return element;
        }
    }).reduce(function (sum, element) {
        return sum + element;
    }, 0);
}

var evenNumbersSum = getEvenNumbersSum(array1);
console.log(evenNumbersSum);

var array2 = [];

for (var i = 1; i <= 100; i++) {
    array2.push(i);
}

console.log(array2);

function getEvenNumbersSquaresArray(array) {
    return array.filter(function (element) {
        if (element % 2 === 0) {
            return element;
        }
    }).map(function (element) {
        return element * element;
    });
}

var squaresArray = getEvenNumbersSquaresArray(array2);
console.log(squaresArray);