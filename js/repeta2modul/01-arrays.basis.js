
/*const friends = ["Mango", "Kiwi", "Poly", "Ajacs", 1, 2, 3];
console.log(friends);
console.log(friends[2]);

friends[1] = "papric";
console.log(friends);

const lastIndex = friends.length - 1;
console.log(lastIndex);*/
/*
*Перебор (интерация) массива
*-for- если нужен индекс или нужно изменить элемент массива
*-for-of- если индекс не нужен и в массиве ничего менять не нужно
*/

/*
const friends = ["Mango", "Kiwi", "Poly", "Ajacs", 1, 2, 3];
//console.table(friends);
//lastIndex = friends.lenght - 1;

for (let i = 0; i < friends.length; i += 1) {
    friends[i] += `-${i}`;
}

console.table(friends);


/*const friends = ["Mango", "Kiwi", "Poly", "Ajacs", 1, 2, 3];
for (const friend of friends) {
    console.log(friend);
}*/

    /*Задач
Посчитать общую суммму покупки в корзине

const cart = [54, 28, 105, 70, 92, 17, 120];
let total = 0;
/*
// 1 перебрать массив
for (let i = 0; i < cart.length; i += 1){
    console.log(cart[i]);

    total += cart[i];
}
       //или использовать for(of)
for (const value of cart) {
    total += value;
}
console.log(`total:`,total)
// 2 сделать переменную total до цикла

//3 каждый элемент приплюсовать к тотал

                /*задача 2 - внутрь каждого елемента массива -переопределить значение и округлить спомощью  Math.round*/
/*
for (let i = 0; i < cart.length; i += 1){
    cart[i] = Math.round(cart[i] * 1.1);
}
console.log(cart);
*/
           //Задача 3 - напиши скрипт который подсчитывает сумму всех чётных чисел в массиве
//1 Переменная total
const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
let total = 0;
//2 Перебрать массив
/*
for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);

    //3 На каждой интерации проверить элемент на чётность
    if (numbers[i] % 2 === 0) {
        console.log( `Четное`);
    }
    //4 Если чётный то плюсуем к total
    total += numbers[i];
}
                   // или применяем for(of)
for (const number of numbers) {
    if (number % 2 === 0) {
        console.log(`${number} - четное`);
        total += number;
    }
}
console.log(`сумма всех чётных чисел =`, total);
*/
            //Лучше делать логику от обратного с помошью continue

for (const number of numbers) {
    if (number % 2 !== 0) {
        console.log(` - НЕ четное - пропустить`,number);
        continue;
    }
    console.log(`${number} - четное`);
    total += number;
}
console.log(`сумма всех чётных чисел =`, total);