//Variables
let country = 'Azerbaijan';
let continent = 'Europe';
let population = 10000000;
console.log(country + ' ' + continent + ' ' + population)
//Data types
let isIsland = false;
let language;
console.log(isIsland + ' ' + country + ' ' + continent + ' ' + population + ' ' + language)
//Coding challenge
let markMass = 78;
let johnMass = 92;
let johnHeight = 1.95;
let markHeight = 1.69;
let markBMI = markMass / (markHeight ** 2);
let johnBMI = johnMass / (johnHeight ** 2);
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
//Coding challange
const avarageScoreDolphins = (96 + 108 + 89) / 3;
const avarageScoreKoalas = (88 + 91 + 110) / 3;
if (avarageScoreDolphins == avarageScoreKoalas) console.log("DRAW");
else if (avarageScoreDolphins > avarageScoreKoalas) console.log("Dophins winner");
else console.log("Koalas winner");
//Coding challange
const bill = 350;
const tip = bill <= 300 && bill >= 25 ? 15 : 20;
console.log(tip);
