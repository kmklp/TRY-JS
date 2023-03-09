/*Задание № 1
напиши скрипт выбора стоимости отеля по количеству звёзд.
1 - 20$; 2 - 30$; 3 - 50$; 4 - 70$; 5 - 120$;
Если в переменной stars, больше чисел 1-5б выведи строку `Такого количества звёзд нет*/

const stars = 2;
let cost;

/*if (stars === 1) {
    cost = 20;
} else if (stars === 2){
    cost = 30;
} else if (stars === 3) {
     cost = 50;
} else if (stars === 4) {
     cost = 70;
} else if (stars === 5) {
    cost = 120;
} else {
    console.log(`Такого количества звёзд нет`);
}
console.log(cost);
   Задание № 2
   Напиши скрипт выбора стоимости отеля по количеству звёзд
   1 и 2 -ая звезда = 20$
   3 и 4 -ая звезда = 50$
   5     -ая звезда = 120$
*/
/*if (stars === 1 || stars === 2) {
    cost = 20;
} else if (stars === 3 || stars === 4) {
    cost = 50;
} else if (stars === 5) {
    cost = 120;
} else {
    console.log(`Такого не существует`);
}
console.log(cost);*/

 /*     // Пример с switch
      Для задания 1 -го
switch (stars) {
    case 1:
        cost = 20;
        console.log(`произвольное к-во строк`)
        break;
    
    case 2:
        cost = 30;
        break;
    
    case 3:
        cost = 50;
        break;

    case 4:
        cost = 70;
        break;
    
    case 5:
        cost = 120;
        break;
    
    default:
        console.log(`Такого количества звёзд нет`);
}
console.log(cost)
       
       // Пример switch для задания 2 -го просто обьединяем case
switch(stars){
    case 1:
    case 2:
        cost = 20;
        console.log(`произвольное к-во строк`);
        console.log(`может быть ниже `);
        break;
    
    case 3:
    case 4:
        cost = 50;
        break;
    
    case 5:
        cost = 120;
        break;
    
    default:
        console.log(`Такого количества звёзд нет`);
}
console.log(cost);*/

     //Задача 3 
/*Напиши скрипт выбора опции доставки товара.
  Опция хранится в переменной   option: 1- самовівоз; 2 - курьер; 3 - почта;

   В переменную mesege записать сообщение в зависимости щт опции :
-`Вы можете забрать товар завтра с 12.00 в нашем офисе`
-`Курьер доставит товар завтра с 9.00 до 18.00`
-`Посылка будет отправлена сегодня `
-`Вам презвонит менеджер`*/
 
//1 - сделать переменные
const option = 2;
let message = ``;
//2 - сделать switch
/*switch (option) {
    case 1:
        message = (`Вы можете забрать товар завтра с 12.00 в нашем офисе`);
        break;
    case 2:
        message = (`Курьер доставит товар завтра с 9.00 до 18.00`);
        break;
    case 3:
        message = (`Посылка будет отправлена сегодня `);
        break;
    
    default:
        console.log(`Вам презвонит менеджер`);
}
console.log(message);*/

    //Цикл for
for (let i = 5; i <= 20; i += 5){
    console.log(i);
}
console.log(`цикл будет повторятся 20 раз.пока не запнется на лжи 20 + 1 =21 false`);