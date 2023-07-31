var numbers = [3,5,8];

var maxValue = Math.max(...numbers);
console.log(maxValue);

var heros = ['Ironman', 'Superman', 'Batman', 'Spiderman'];
var randomNumber = Math.random(heros) * heros.length;
var randomIndex = Math.floor(randomNumber);
console.log(randomIndex);

var randomHero = heros[randomIndex];
console.log(randomHero);
