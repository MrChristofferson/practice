var cars = [
{name: "Toyota", color:"red"},
{name: "Honda", color:"blue"},
{name: "Lambo", color:"green"},
{name: "Ferarri", color:"black"}
];

var carColor = cars.map(function(cars){
  cars.name + " is color" + cars.color
})

console.log(carColor)