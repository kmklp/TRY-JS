//Ввод пользователя
//Метод window.confirm() и window.prompt()

//const shouldRenew = confirm(`Хочете продовжити підписку`); //-возвращает true или false, блокирует исполнение кода, возвращает на своё место буль(boolean)
//console.log(shouldRenew);

let quantity = prompt(`Введите количество товаров`); //- prompt всегда возвращает строку
quantity = Number(quantity);
console.log(typeof quantity);
console.log(quantity);
