// Задача 1: Получить от пользователя два числа и вывести в диалоговое окно сумму значений, 
// которые ввел пользователь, вывод должен выглядеть так (пример):
// Результат сложения чисел 5 и 2 равен 7.

const num1 = +prompt("Введите первое число");
const num2 = +prompt("Введите второе число");

function sum(num1, num2) {
    return num1 + num2;
}

alert(`Результат сложения чисел ${num1} и ${num2}: ${sum(num1, num2)}`);
