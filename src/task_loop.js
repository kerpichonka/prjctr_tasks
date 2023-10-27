//First task solution
for(let i = 1; i <= 100; i++) {
  let message;

  if(i % 3 === 0 && i % 5 === 0) {
    message = 'LolKek'
  } else if(i % 3 === 0) {
    message = 'Lol'
  } else if(i % 5 === 0) {
    message = 'Kek'
  } else {
    message = i;
  }

  console.log(message);
}


// Second task solution
let value = 3;

// solution with "for" loop
if(value >= 0) {
  for(let i = 2; i < value; i = i + 2) {
    console.log(i);
  }
  if (value <= 2) console.log("Ви ввели число: 0 || 1 || 2");
} else if(value < 0) {
    for(let i = -2; i > value; i = i - 2) {
      console.log(i);
    }
    if (value >= -2) console.log("Ви ввели число: -1 || -2");
} else {
    console.log('Таке чуство шо Бог десь наказує нас за шось');
}

// solution with "while" loop
if(value >= 0) {
  let i = 2
  while(i < value) {
    console.log(i);
    i = i + 2;
  }
  if (value <= 2) console.log("Ви ввели число: 0 || 1 || 2");
} else if(value < 0) {
    let i = -2
    while(i > value) {
      console.log(i);
      i = i - 2;
    }
    if (value >= -2) console.log("Ви ввели число: -1 || -2");
} else {
    console.log('Таке чуство шо Бог десь наказує нас за шось');
}
