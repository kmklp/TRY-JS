console.log(15 >= 15); // где >= оператор а 15 и 15 операнды
console.log(`15` >= 15);//операнд справа и слева приводится кчислу, в данном случае сторока слева приводится кчислу
console.log(Number(true));// это 1
console.log(Number(false));// это 0

const x = 1 === true;// использовать только строгое равенство 1 === true = false, иначе будет 1 == true = 1 
console.log(x);

console.log(Boolean('-4')); //false - 0; NaN; null; undefined; пустая строка '' или ""
                          //true - всё остальное