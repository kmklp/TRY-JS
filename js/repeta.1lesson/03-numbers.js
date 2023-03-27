//let elementWidth = `50px`;
//const result = Number.parseInt(elementWidth); //- parseInt оставляет числа и запинается на первом не числе, и на точке тоже дробь отбросит

//console.log(result);

/*let elementWidth = `50px`;
elementWidth = Number.parseInt(elementWidth); //- parseInt оставляет числа и запинается на первом не числе, и на точке тоже дробь отбросит

console.log(`elementWidth:`, elementWidth);

let elementHeight = `100.590510px`;
elementHeight = Number.parseFloat(elementHeight);// - parseFloat читает с лева на право, точку, до нуля

console.log(`elementHeight:`, elementHeight);*/

/*let salary = 1300.67256;
salary = salary.toFixed(2); // toFixed отсекает до числа в скобках после точки
salary = Number(salary);

console.log(salary);
console.log(Number(salary.toFixed(4))); // способ матрёшки*/

/*let quantity = `30`
let value = `Эту строку невозможно привести к числу`; - будет Nan - not a number (не число)

console.log(Number(quantity));
console.log(Number(value));*/

/*const base = 3;
const power = 3;

const result = Math.pow(base, power);// у Math много функций в данном случае функция pow
console.log(2 ** 3);
console.log(result);*/

/*Задача
Напиши скрипт который просит пользователя ввести число и степень,
Возводит число в эту степень и сохраняет переменную*

//1.Попросить ввести число и сохранить в переменную
let base = prompt(`введите число`)
base = Number(base);

console.log(base);

//2.Попросить ввести степень и сохранить переменную

let power = prompt(`введите степень`);
power = Number(power);

console.log(power);

//3.возвести введенные данные в степень и вывести
const result = base ** power;
console.log(result);
*/
/*
function calculateTotalPrice(orderedQuantity, pricePerItem) {
    //orderedQuantity = 5;
    //pricePerItem = 100;
    // Change code below this line
    const totalPrice = orderedQuantity * pricePerItem;
    
    // Change code above this line
    return totalPrice;
    
}
console.log(calculateTotalPrice(5, 100));
//calculateTotalPrice(5, 100);
//console.log(totalPrice);
*/
/*
function makeMessage(name, price) {
  
  // Change code below this lin
   const message =  `You picked ${name}, price per item is ${price} credits`;
  // Change code above this line
  return message;
};
console.log(makeMessage(`Radar`, `6150`));
*/
