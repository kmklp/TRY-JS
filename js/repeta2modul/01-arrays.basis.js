
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
//const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
//let total = 0;
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
/*
for (const number of numbers) {
    if (number % 2 !== 0) {
        console.log(` - НЕ четное - пропустить`,number);
        continue;
    }
    console.log(`${number} - четное`);
    total += number;
}
console.log(`сумма всех чётных чисел =`, total);
*/
      //Задача на поиск в массиве обьекта, имени

//const logins = [`manDoge`, `kiwiDubst`, `polySkout`, `ajaxTen`];
//const loginToFind = `polySkout`;
/*
for (let i = 0; i < logins.length; i += 1) {
    const login = logins[i];

    if ( login === loginToFind) {
        message = `обьект ${loginToFind} найден`;
        break;
    }

        message = `обьект ${loginToFind} не  найден`;
    
}
console.log(message);

const message = logins.includes(loginToFind) //назівается абстракция
? `Пользователь ${loginToFind} найден`
: `Пользователь ${loginToFind} не найден`;

console.log(message);
*/
//const numbers = [7, 18, 14, 24, 5, 85, 19];
//let smallNumber = numbers[0];
 /*
for (number of numbers) {
    if (number < smallNumber) {
        smallNumber = number;
    }
}
console.log(`Cамій маленький це ${smallNumber}`);
*/

                                                    // удаляем последний єлемент ,  с помощью slice
     /*
const logins = [`manDoge`, `kiwiDubst`, `polySkout`, `ajaxTen`,];
//let string = ``;

for (const login of logins) {
    string += login + `,`;
}
string = string.slice(0, string.length - 1);
console.log(string);
// получится manDoge`, `kiwiDubst`, `polySkout`, `ajaxTen` - без запятой

     //Но есть метод сшивания сторок join
const string = logins.join(`, `);
console.log(string);
*/
                                              //ЗАДАЧА С ПРИМЕНЕНИЕМ SPLIT- эта задача не получилась!!!!!!
/*
*Напиши скрипт который заменяет регистр каждого символа в строке на противоположный
*Например б если строка `JfvaScript` то на выходе должна быть строка `jAVAsCRIPT`
*/
/*
const string = 'JavaScript';
const letters = string.split('');
let inverterString = '';

console.log(letters);

for (const letter of letters) {
    console.log(letter);

    const isEqual = letter === letter.toLowerCase();
    inverterString +=
        letter === toLowerCase()
        ? letter.toUpperCase()
        : letter.toLowerCase();
}
console.log('inverterString:', inverterString);
*/

           //Метод работі с массиво - текстом вниз.разїединили по пробелу и сшили с помощью тире-
/*
const title = 'Top 10 benefits of React framework';

const normalisedTitle = title.toLowerCase();
console.log(normalisedTitle);

const words = normalisedTitle.split(' ');
console.log(words);

const dash = words.join('-');
console.log(dash);
                                             //Ещё проще
const dash1 = title.toLowerCase().split(' ').join('-');

console.log(dash1);
*/
                    // Задача 2 напиши скрипт который считывает сумму двух массивов
/*
const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;

const numbers = array1.concat(array2);

for (const number of numbers) {
    total += number;
}
console.log(total);
*/

            //Робота с картами
const cards = [
  "карточка - 1",
  "карточка - 2",
  "карточка - 3",
  "карточка - 4",
  "карточка - 5",
];
console.table(cards);
//удаление по индексу - indexOf()
/*
const cardRemove = "карточка - 3";
const index = cards.indexOf(cardRemove);
console.log(index);

cards.splice(index, 1);

console.table(cards);
*/
               //вставляем новую карточку "карточка - 6" на третье место 
               /*
const cardInsert = "карточка - 6"; 
const index = 3;

cards.splice(index, 0, cardInsert);
console.table(cards);
*/
                         //удаляем карточку 2 и ставим "карточку - 7";
const cardUp = "карточку - 7";
const cardRemove = "карточка - 2";
const index = cards.indexOf(cardRemove);

console.log(index);

cards.splice(index, 1, cardUp);
console.table(cards);