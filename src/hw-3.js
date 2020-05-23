/**
 * Проверить строку str на уникальные символы, если все символы в строке встречаются один раз, то
 * функция должна возвращать true, в противном случаи false
 * Например:
 *  "avbhye3" => true
 *  "afsbvra" => false
 *  "Aaret64ip" => true
 */
function task1(str) {
    for(i=0; i < str.length; i++) {
        if (str.split(str[i]).length-1 > 1) {
            return false;
        }
    }
    return true;
}


/**
 * Проверить строку str на буквы, если в строке есть буквы, то их нужно вынести в переменную result и вернуть эту
 * переменную
 */
function task2(str) {
    let result = '';
    for(i=0; i < str.length; i++)
    {
        if (/[a-zA-Z]/.exec(str[i])) {
            result += str[i];
        }
    }
    return result;
}

/**
 * arr массив чисел. Нужно найти в массиве найбольшое число и вернуть его
 */
function task3(arr) {
return Math.max.apply(null,arr);
}

/**
 * В функцию приходит объект obj. Нужно скопировать все его свойства в объект result и вернуть его
 */
function task4(obj) {
    const result = {};
    // ваш код должен быть ниже этой строки
Object.assign(result, obj);
    // ваш код должен быть выше этой строки
    return result;
}


/**
 * Приходит строка str такого вида "Ivan Ivanov", вы должны сохранить первые символы в переменную result. Должен
 * иметь такой вид "I.I."
 * Еще пример: str => "Vitalik Skopets". result => "V.S."
 */
function task5(str) {
    let result = '';
    for(i=0; i < str.length; i++)
    {
        if (/[A-Z]/.exec(str[i])) {
            result += str[i] + '.';
        }
    }
    return result;
}



/**
 * Написать логику, которая будет возвращать название планеты. По ее номеру начиная от ближайшей к солнцу.
 * Примечание: написать эту логику без if и switch!!!!!!!
 */
function task6(num) {
    let arr = ['Солнце', 'Меркурий', 'Венера', 'Земля', 'Марс','Юпитер', 'Сатурн', 'Уран', 'Нептун'];
    return arr[num];
}


/**
 * Функция должна удалять первый и последний символы из строки str и вернуть получившеюся строку.
 */
function task7(str) {
    return str.slice(1, -1);
}

// функция подсчета ряда Фибоначчи

function fib(n) {
    let fibonacci = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci;
}

