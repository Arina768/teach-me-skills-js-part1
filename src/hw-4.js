/**
 * Написать функцию, которая будет считать ряд Фибоначчи. Функция должна возвращать массив из чисел
 * Фибоначчи, длина массива будет приходить, как аргумент функции
 */
function fibonacci(length) {
    let fibonacci = [0, 1];
        for (let i = 2; i <= length; i++) {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        }
        return fibonacci;
}

/**
 * Написать свою функцию map
 */
function map(array, callback) {
    return array.map(callback);
}

// function second(num) {
//     return num * 3;
// }
// let arr = [3, 4, 1];
// console.log(map(arr, second));

/**
 * Написать свою функцию filter
 */
function filter(array, callback) {
return array.filter(callback);
}
// function filterIt(num) {
//     return num <= 20;
// }
// let arr2 = [3, 4, 13, 1, 24];
// console.log(filter(arr2,filterIt));


/**
 * Написать свою функцию indexOf
 */
function indexOf(array, value, fromIndex) {
return  array.indexOf(value, fromIndex);
}

/**
 * Написать свою функцию reduce
 */
function reduce(array, callback, acc) {
return array.reduce(callback, acc);
}
// function reduceIt(a, b) {
//     return a + b;
// }
// let arr4 = [3, 4, 13, 1, 24];
// console.log(reduce(arr4,reduceIt,4));


/**
 * Написать свою функцию find
 */
function find(array, callback) {
return array.find(callback);
}
// function findMe(num) {
//  return num >100;
// }
// let arr4 = [30, -4, 130, 1, 24];
// console.log(find(arr4, findMe));

/**
 * Написать свою функцию sort
 */
function sort(array, callback) {
return array.sort(callback);
}
// function sortIt(a, b) {
//     return a - b;
// }
// let arr4 = [300, -4, 130, 1, 24];
// console.log(sort(arr4, sortIt));

/**
 * Написать свою функцию Object.keys
 */
function objectKeys(obj) {
    return Object.keys(obj);
}
// let smt = {
//     name : 'Ar',
//     age: 33,
// };
// console.log(objectKeys(smt));
//

/**
 * Написать свою функцию Object.values
 */
function objectValues(obj) {
    return Object.values(obj);
}
