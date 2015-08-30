var array = [];

for (i = 0; i < 100; i++){
  if (i % 2 == 1) {
    array.push(i)
  }
}

console.log(array.pop())
console.log(array)
