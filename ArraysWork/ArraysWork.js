(function () {
    var array1 = [17, 5, -10, 14, -8, 37, 26, -1, 33, -18, -25, 45, 22, 44];

    function sortArrayDescending(array) {
        array.sort(function (e1, e2) {
            return e2 - e1;
        });
    }

    sortArrayDescending(array1)
    console.log("Отсортированный по убыванию массив чисел:");
    console.log(array1);

    function getFirst5Elements(array) {
        return array.slice(0, 5);
    }

    var first5ArrayElements = getFirst5Elements(array1);
    console.log("Первые 5 элементов массива:");
    console.log(first5ArrayElements);

    function getLast5Elements(array) {
        return array.slice(array1.length - 5);
    }

    var last5ArrayElements = getLast5Elements(array1);
    console.log("Последние 5 элементов массива:");
    console.log(last5ArrayElements);

    function getEvenNumbersSum(array) {
        return array.filter(function (element) {
            return element % 2 === 0;
        }).reduce(function (sum, element) {
            return sum + element;
        }, 0);
    }

    var evenNumbersSum = getEvenNumbersSum(array1);
    console.log("Сума четных элементов массива:");
    console.log(evenNumbersSum);

    var array2 = [];

    for (var i = 1; i <= 100; i++) {
        array2.push(i);
    }

    console.log("Массив от 1 до 100:");
    console.log(array2);

    function getEvenNumbersSquaresArray(array) {
        return array.filter(function (element) {
            return element % 2 === 0;
        }).map(function (element) {
            return element * element;
        });
    }

    var squaresArray = getEvenNumbersSquaresArray(array2);
    console.log("Список квадратов четных чисел массива:");
    console.log(squaresArray);
})();