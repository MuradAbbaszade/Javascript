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
const tip = bill <= 300 && bill >= 25 ? ((bill * 15) / 100) : ((bill * 15) / 100);
console.log(`The bill was ${bill},the tip was ${tip} and the final value is ${bill + tip}`);
//Functions
function getSum(a, b) {
    return a + b;
}
const sum = function (a, b) {
    return a + b;
}
//Coding challange
const calcAvarage = (a, b, c) => (a + b + c) / 3;
/*const dolphinsScore = calcAvarage(44, 23, 71);
const koalasScore = calcAvarage(65, 54, 49);*/
const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins < avgKoalas) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    }
    else if (avgDolphins > avgKoalas) {
        console.log(`Dolphins win (${avgKoalas} vs ${avgDolphins})`);
    }
    else {
        console.log(`Draw (${avgKoalas} vs ${avgDolphins})`);
    }
}
checkWinner(calcAvarage(440, 250, 71), calcAvarage(200, 150, 49));
//Arrays in JS
const person = ['Murad', 'Abbaszade', 18, 'Baku'];
const people = new Array();
people.push(person);//add element to back
people.pop();//remove element from back
people.unshift(person)//add element to front
people.shift()//remove element from front
people.includes('a')//check value is present in array
people.indexOf('a')//get index of value in array
people.length()//get length of the array
console.log(people[0]);