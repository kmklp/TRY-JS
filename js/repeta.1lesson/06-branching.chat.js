/*Напиши скрипт который проверяет возможность открыть чат с пользователем
Для этого пользователь должен быть:
-другом
-онлайн
-без режима не безпокоить*/

const isFriend = true;
const isOnline = true;
const isDntWorry = false;

const canOpenChat = isFriend && isOnline && !isDntWorry;
console.log(`Можно ли открыть чат?`, canOpenChat);

/*Напиши скрипт проверки подписки пользователя при доступе к контенту 
- есть три типа подписки: free, pro, и vip
-получить доступ могут только пользователи pro и vip*/

const subscribtion = `pro`;
//если пользователь pro или пользователь vip тогда есть доступ

const canAccessContent = subscribtion === `pro` || subscribtion === `vip`;
console.log(`Есть доступ к контенту?`, subscribtion);

          //Branching - Ветвления
if (4>30) {
//тело
    console.log(`выполнится - тело`);//если false то тело не выполнится, если тру то выполнится обе команды
}
console.log(`выполнится - дальше`);

if (40 > 30) {
    console.log(`x > y`);//выполняется одно из значений
} else{
    console.log(`x < y`);
}

const salary = 1010;

if (salary <= 500) {
    console.log(`уровень 1`);
} else if (salary > 500 && salary <= 1000) {
    console.log(`уровень 2`);
} else if (salary > 1000 && salary < 1500) {
    console.log(`уровень 3`);
} else  /*(salary > 1500)*/ { 
    console.log(`уровень 4`);
 }

