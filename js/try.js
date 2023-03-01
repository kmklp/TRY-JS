(() => {
  //попросить ввести число и сохранить в переменной
  let base = prompt("введите число");
  base = Number(base);

  console.log(base);
  //попросить ввести степень и сохранить в переменной
  let subbase = prompt("введите степень");
  subbase = Number(subbase);

  console.log(subbase);
  //возвести введенные данные и вывести
  const result = base ** subbase;

  console.log(result);

  // пример конкастенации строк
  const terminalMsg = `игрок ${base} вы можете съиграть с игроком ${subbase}`;
  console.log(terminalMsg);
})();
