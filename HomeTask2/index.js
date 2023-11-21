const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Введите число :", (answer) => {
  const namber = Number(answer);
  if (isNaN(namber)) {
    throw new Error("Wrong namber format");
  }
  for (let index = 1; index <= 10; index++) {
    console.log(`${index} * ${namber} = ${namber * index}`);
  }
  rl.close();
});
/**
 *  Этот код относится к структурной  парадигме, Структурная, поскольку используется for и нет goto.
    Процедуры в данной программе не объявляются, но при этом все держится на структурных
    управляющих конструкциях.
 */