'use strict'

//First task solution
const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
const initials = userNames.sort()
  .map(name => name
    .trim().split(' ')
    .map(name => name.slice(0, 1))
    .join('.')
  );

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]

//Second task solution
const userNames1 = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
const vowels = "АЕЄИІЇОУЮЯ"
const filteredNames = userNames1.filter(name => vowels.includes(name.slice(0, 1)));

//Second task loop solution
const filteredNamesViaLoop = [];
for(let i = 0; i < userNames1.length; i++) {
  if (vowels.includes(userNames1[i].slice(0, 1))) {
    filteredNamesViaLoop.push(userNames1[i])
  }
}

console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']
console.log(filteredNamesViaLoop) // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']

//Third task loop solution
const currentMaxValue = 4589;
const str = currentMaxValue.toString();
const arr = [];

for(let i = 0; i < str.length; i++) {
  arr.push(str[i]);
}

const reverseMaxValue = +arr.reverse().join("")

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

//Fourth task loop solution
const resultsArray = [1, 2, [3, [4]]];
let productOfArray = resultsArray.flat(Infinity).reduce((accum, item) => accum * item)



console.log(productOfArray); // 24
