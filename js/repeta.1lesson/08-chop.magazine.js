/*
 *Напиши скрипт который посчитает общую сумму работников.
 *Количество работников хранчтся в переменной employees.
 *Зарплата каждого работника это случайное число  от 500 до 5000.
 *Записать сумму в переменную totalSalary и вівести в консоль*/

/*// 1 Сделать вары
const minSalary = 500;
const maxSalary = 5000;
const employees = 30;
let totalSalary = 0;
// 2 перебрать работников в цикле
for (let i = 1; i <= employees; i += 1) {
// 3 сгенерить случайную зп
    const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary,);
    console.log(`Зп работника номер  ${i} - ${salary}`)
// 4 прибавить к тоталу
    totalSalary += salary;  
}
// 5 лог
console.log(`totalSalary:`, totalSalary);*/

//Задание
/*
- Напиши скрипт который подсчитывает сумму всех чётных чисел,
- которые входят диапазон чисел в переменных от min до max.
- Например, если min=0 и max=5, то диапазон 0-5, и внем два чётніх числа - 2 и 4,
*/
/*
// 1 вары
const min = 0;
const max = 5;
let total = 0;
 
// for от min до max с шагом в 1
for (let i = min; i <= max; i += 1){
    console.log(i);
// проверяем остаток от деления
    if (i % 2 !== 0) {
        console.log(`Не чётное: `, i);
        continue;
    }

// пишем в сумму
console.log(`чётное: `, i);
total += i;
}
console.log(`total: `, total);
*/

//Задание - Напиши скрипт обработки покупки в магазине.
/*
- Баланс пользователя хранится в переменной balance
- Сумма покупки хранится в переменной payment
- Перед проверкой вывести сообщение:
`Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных средств на счету`

-Если сумма покупки не привышает баланс
    -Вычесть из баланса сумму покупки 
    -Вывести сообщение `На счету осталось [число ] кредитов`
-Если сумма покупки превышает баланс:
    -Вывести сообщение `На счету недостаточно средств для проведения операцции!`
-В конце вывести сообщение `Операция завершена`
*/
/*
// 1 Делаем вары
let balance = 10000;
const payment = 2000;
// 2 Делаем строку с сообщением
console.log(
    `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`);
// 3 делаем проверку
if (balance >= payment) {
  console.log(`ok`);
  // 4 Вычесть из баланса сумму покупки
    balance -= payment; //balance = balance - payment
    
    console.log(`Всё хорошо,снимаем деньги, спасибо за покупку!`)
  console.log(`На счету осталось ${balance} кредитов`);
} else {
console.log(`На счету недостаточно средств для проведения операцции!`);
}
console.log(`Операция завершена`);
*/

/*     Задача - Напиши скрипт подсчёта сумми покупки со скидкой в зависимости  от полученной
суммы за всё время (партнерская программа)

- Общая сумма потраченного хранится в переменной totalSpent
- Сумма текущего платежа хранится в переменной payment
- Скидка хранится в переменной discount

- Если потрачено от [100 до 1000) -бронзовый партнер, скидка 2%
- Если потрачено от [1000 до 5000) - серебрянный  партнер, скидка 5%
- Если потрачено больше [5000) - золотой партнер, скидка 10%
- Если потрачено меньше [100 ) - не партнер, скидка 0%

- В результате вывести сообщение `Оформляем заказ на сумму [сумма] со скидкой [скидка]%`
*/

let totalSpent = 5000; //сколько я потратил за всю историю
let payment = 1000; // сколько я потратил сейчас
let discount = 0;

if (totalSpent >= 100 && totalSpent < 1000) {
  console.log(`Бронзовый партнер, скидка 2%`);
  discount = 0.02;
} else if (totalSpent >= 1000 && totalSpent < 5000) {
  console.log(`серебрянный  партнер, скидка 5%`);
  discount = 0.05;
} else if (totalSpent >= 5000) {
  console.log(` золотой партнер, скидка 10%`);
  discount = 0.1;
} else {
  console.log(`скидки нет`);
}
payment -= payment * discount;

console.log(
  `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`
);

totalSpent += payment;

console.log(`Общая сумма потраченного в магазине: ${totalSpent}`);
//`Бронзовый партнер, скидка 2%`
//`Серебрянный партнер.скидка 5%`
//`Золотой партнер.скидка 10%`
//`Увас ещё нет партнерской скидки`