/**
 * Написать функцию, которая будет принимать бесконечное количество аргументов(коллбэк кфнкций) и во втором вызове
 * бесконечное количесвто аргументов.
 * Например: foo(foo1(foo2(10)))
 * Ваша функция должна выглядеть так:
 * task1(foo, foo1, foo2)(10);
 */
function task1(...functions) {
  let array = [];
  return function smt(...secondArguments) {
    for (let i = 0; i < functions.length; i++) {
      for (let j = 0; j < secondArguments.length; j++) {
        array.push(functions[i](secondArguments[j]));
      }
    }
    return array;
  }
}


/**
 * Напсиать функцию, которая будет принимать строку. Функция должна проверить явяляется ли строка палиндромом
 */
function task2(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++){
    if (str[i] !== str[str.length - 1 - i]){
      return false;
    }
  }
  return true
}
// или так
// function  task2(str) {
//   str = str.toLowerCase();
//   const reverseStr = str.split('').reverse().join('');
//   return str === reverseStr;
// }


/**
 * Написать функцию, которая будет принимать целое число n. Нужно вывести в консоль числа от 1 до n.
 * Вместо чисел кратных на 3 выводить fizz, вместо чисел кратных 5 - buzz. Если числа кратные 15, то fizzbuzz
 */
function task3(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}


/**
 * Напсиать функцию, что будет принимать 2 аргумента, строки. Вы должны проверить является ли второе слово анаграммой
 * второго.
 * Примеры:
 * anagram('finder', 'Friend'); => true
 * anagram('', ''); => false
 */
function task4(firstString, secondString) {
  if (! /[\d\s\W]/.exec(firstString && secondString)){
    let firstWord = firstString.toLowerCase().split('').sort().join('');
    let secondWord = secondString.toLowerCase().split('').sort().join('');
    return firstWord === secondWord;
  }
  return false;
}


/**
 * Написать функцию, которая будет принимать число. Функция должна возвращать массив чисел, которые являются делителями.
 */
function task5(number) {
 let divisors = [1];
  for (let i = 2; i <= number; i++){
    if (number % i === 0){
      divisors.push(i);
    }
  }
  return divisors;
}

