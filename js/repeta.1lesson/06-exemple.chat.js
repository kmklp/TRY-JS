/*Напиши скрипт который проверяет возможность открыть чат с пользователем
Для этого пользователь должен быть:
-другом
-онлайн
-без режима не безпокоить*/

const isFriend = true;
const isOnline = true;
const isDntWorry = true;

const canOpenChat = isFriend && isOnline && isDntWorry;
console.log(`Можно ли открыть чат?`.canOpenChat);