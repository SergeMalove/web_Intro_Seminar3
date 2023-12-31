/*
Функция getArr принимает целое положительное число, необходимо реализовать 
функцию так, чтобы она возвращала массив, в котором будут записаны числа в 
убывающем порядке, которые кратны 3, до нуля включительно, см. примеры.
*/
function getArr(num) {
    let arr = [];
    while (num >= 0) {
        if (num % 3 == 0) {
            arr.push(num);
            num -= 3;
        } else {
            num--;
        }
    }
    return arr;
}

console.log(getArr(15)); // [15, 12, 9, 6, 3, 0]
console.log(getArr(17)); // [15, 12, 9, 6, 3, 0]
console.log(getArr(22)); // [21, 18, 15, 12, 9, 6, 3, 0]