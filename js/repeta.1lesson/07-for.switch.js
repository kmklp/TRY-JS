/*напиши скрипт выбора стоимости отеля по количеству звёзд.
1 - 20$; 2 - 30$; 3 - 50$; 4 - 70$; 5 - 120$;
Если в переменной stars, больше чисел 1-5б выведи строку `Такого количества звёзд нет*/

const stars = 1;
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
console.log(cost);*/

      // Пример с switch
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