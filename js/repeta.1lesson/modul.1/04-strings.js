/*const messege = (`В этой строке 28 символов!!!`); //length- считает симводлы в строке
console.log(messege.length);*/


       //сшивание строк
/*console.log(`dog` + `cat` + ` mause`);// Конкантенация строк ,сшивание, пробел перед маусом
 
const firstName = `Tom`;
const secondName = `Kruz`;
const fullName = firstName +` `+ secondName;//посредине между переменніми. в строке. вставлен пробел

console.log(fullName);

 //Напиши скрипт,который выведет строкув формате
//гость x y, поселяется в z номер, качеством q
//поставив вместо x y z q значение переменных

const hotelNumber = `700`;
const quality = `ekonom`;
const welcome = firstName + ` ` + secondName + ` setless(поселяется) in number ` + hotelNumber + ` ` + quality;

console.log(welcome);// сшивание строк

const welcomeMsg = `${firstName} ${secondName} setless(поселяется) in number ${hotelNumber} ${quality}`;
console.log(welcomeMsg) // сшивание строк методом шаблонов ${story}*/

/*let brand = `SamsunG`;
brand = brand.toUpperCase(brand);// toLowerCase и toUpperCase -выравнивают строки

console.log(brand);*/

/*let brand = `SAMSUNG`;
brand = brand.toLowerCase(brand);
console.log(brand);
console.log(brand[3]);//берет от слова букву по номера включая первую = 0
console.log(brand.slice(3).toUpperCase());// щтрезает с 3 ей и увиличивает*/

const word1 = `спам`;
const word2 = `распродажа`;

const string1 = `Привет это не спам, ты выиграешь миллион`;
const string2 = `Большая РАСПРОДАЖА, не пропустите`;
const string3 = `Рекламная компания- самая лучшая`

console.log(string1.includes(word1));
console.log(string1.includes(word2));

const normalizedString2 = word2.toLowerCase();// normalized нормализует с помощью toLowerCase
console.log(normalizedString2.includes(word2));

console.log(string3.includes(word1));
console.log(string3.includes(word2));






