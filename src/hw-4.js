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
    const newArray = [];
    for (let i = 0; i < array.length; i++){
        newArray.push(callback (array[i]))
    }
    return newArray;
}


/**
 * Написать свою функцию filter
 */
function filter(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

// function filterIt(num) {
//  return num < 20;
//     }


/**
 * Написать свою функцию indexOf
 */
function indexOf(array, value, fromIndex) {
    let index = 0;
    for (let i = fromIndex; i < array.length; i++) {
        if (array[i] === value){
            return i;
        } else {
            index = -1;
        }
    }
    return index;
}



/**
 * Написать свою функцию reduce
 */
function reduce(array, callback, acc) {

    let result = acc;
    for (let i = 0; i < array.length; i++){
        result = (callback (result, array[i]));
    }
    return result;
}
// function reduceIt(a, b) {
//     return a + b;
// }


/**
 * Написать свою функцию find
 */
function find(array, callback) {
    for (let i = 0; i < array.length; i++){
        if (callback(array[i]) === true){
            return array[i];
        }
    }
}
// function findIt(num) {
//  return num >100;
// }

/**
 * Написать свою функцию sort
 */
function sort(array, callback) {
    let sortArray = [];
    let newArray = array.slice();
    for (let i = 0; i < array.length ;i++)  {
        sortArray.push(callback(...newArray));
         let index = newArray.indexOf(callback (...newArray), 0);
        newArray.splice(index, 1);
    }
    return sortArray;
}
// function getMin (...num) {
//     return Math.min(...num);
// }


/**
 * Написать свою функцию Object.keys
 */
function objectKeys(obj) {
    let newArray = [];
     for (const key in obj){
         newArray.push(key);
     }
     return newArray;
}


/**
 * Написать свою функцию Object.values
 */
function objectValues(obj) {
    let newArray = [];
        for (const key in obj){
            newArray.push(obj[key]);
        }
    return newArray;
}






