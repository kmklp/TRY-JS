/*
*Напиши скрипт который посчитает общую сумму работников.
*Количество работников хранчтся в переменной employees.
*Зарплата каждого работника это случайное число  от 500 до 5000.
*Записать сумму в переменную totalSalary и вівести в консоль*/

// 1 Сделать вары
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
console.log(`totalSalary:`, totalSalary);