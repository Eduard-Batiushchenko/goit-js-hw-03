const findBestEmployee = function (employees) {
  const entries = Object.entries(employees);
  let bestWorkload = entries[0][1];
  let bestEmployee = entries[0][0];
  for (let i = 1; i < entries.length; i += 1) {
    if (bestWorkload < entries[i][1]) {
      bestWorkload = entries[i][1];
      bestEmployee = entries[i][0];
    }
  }
  return `${bestEmployee}: ${bestWorkload}`;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
