"use strict";

// function boom() {
//   console.log("why so serious");
// }
// boom();
// boom();

// function fruitsPro(apples, oranges) {
//   const juice = `There are ${apples} apples and ${oranges} oranges in the box.`;
//   return juice;
// }
// const appleJuice = fruitsPro(3, 5);
// console.log(appleJuice);
// console.log(fruitsPro(3, 7));

// FUNCTION DECLARATION
// function birthYear(input) {
//   const boom = 2023 - input;
//   const year = `You were born in ${boom}`;
//   return year;
// }
// console.log(birthYear(29));
// console.log(birthYear(39));
// console.log(birthYear(35));
// console.log(birthYear(23));

// FUNCTION EXPRESSION

// const birthYear2 = function (agee) {
//   const age1 = 2023 - agee;
//   return `You were born in ${age1}`;
// };
// const bom = birthYear2(25);
// console.log(bom);
// console.log(birthYear2(23));

// // ARROW FUNCTION

// const agee1 = (birthYear2) => 2023 - birthYear2;
// console.log(birthYear2(18));

// const retirementAge = (birthYear3) => {
//   const age3 = 2023 - birthYear3;
//   const retire = 65 - age3;
//   return `there are ${retire} years left until you can successfully retire `;
// };
// console.log(retirementAge(1998));

// CALLING A FUNCTION INSIDE ANOTHER FUNCTION

// function cutFruits(fruits) {
//   return fruits * 4;
// }

// function fruitsPro(apples, oranges) {
//   const cutApple = cutFruits(apples);
//   const cutOranges = cutFruits(oranges);
//   const juice = `Juice with ${cutApple} pieces of apples and ${cutOranges} pieces of oranges.`;
//   return juice;
// }
// console.log(fruitsPro(2, 3));

// const calcAge = function (booom) {
//   return 2023 - booom;
// };

// const yearsTillRetirement = function (birthYear1, name) {
//   const age = calcAge(birthYear1);
//   const retired = 65 - age;
//   if (retired > 0) {
//     return `Dear ${name} there are ${retired} years until retirement`;
//   } else {
//     return `Dear ${name} you have already retired, abi you want to continue working ni😃`;
//   }
// };
// console.log(yearsTillRetirement(1992, "Jonas"));
// console.log(yearsTillRetirement(1950, "Boom"));

// CODING ASSIGNMENT

// FIRST TEST
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// const chechWinner = function (scoreDolphins, scoreKoalas) {
//   if (scoreDolphins > 2 * scoreKoalas) {
//     return `Dolphins win (${scoreDolphins} vs ${scoreKoalas})`;
//   } else if (scoreKoalas > 2 * scoreDolphins) {
//     return `Koalas win (${scoreKoalas} vs. ${scoreDolphins})`;
//   } else {
//     return `it's a tie`;
//   }
// };

// // SECOND TEST
// const calcAverage2 = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const scoreDolphins2 = calcAverage2(85, 54, 41);
// const scoreKoalas2 = calcAverage2(23, 34, 27);

// console.log(chechWinner(scoreDolphins, scoreKoalas));
// console.log(chechWinner(scoreDolphins2, scoreKoalas2));

/******************************************/
// ARRAYS
/******************************************/
// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Charles";

// const friends = ["Michael", "Steven", "Charles"];
// console.log(friends);

// const years = new Array(1991, 1984, 2008);
// console.log(years);

// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[3] = "Yamen";
// console.log(friends);

// const firstName = "Lolex";
// const lolex = [firstName, "Ayoola", 2023 - 1980, friends];
// console.log(lolex);

// Exercise
// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };

// const years = [1990, 1991, 1995, 1996, 1999];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);
// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// const friends = ["Michael", "Steven", "Charles"];

// ADD ELEMENT
// const newLength = friends.push("Jay");
// console.log(newLength);

// friends.unshift("Boom");
// console.log(friends);

// // REMOVE ELEMENT
// friends.pop();
// const popped = friends.pop();

// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Steven"));

// console.log(friends.includes("Bob"));
// console.log(friends.includes("Michael"));

// if (friends.includes("Michael")) {
//   console.log("You have a friend called Michael");
// }

// EXERCISE

// const calcTip = function (tab) {
//   if (tab >= 20 && tab <= 300) {
//     return tab * 0.15;
//   } else {
//     return tab * 0.2;
//   }
// };
// const billss = [125, 555, 44];

// const bills = [calcTip(billss[0]), calcTip(billss[1]), calcTip(billss[2])];
// console.log(bills, billss);

// const total = [
//   bills[0] + billss[0],
//   bills[1] + billss[1],
//   bills[2] + billss[2],
// ];
// console.log(total);

// OBJECTS
// const lolexArray = [
//   "Ololade",
//   "Ayoola",
//   "34-4",
//   "Student",
//   ["Michael", "Peter", "Steven"],
// ];

// const lolex = {
//   firstName: "Ololade",
//   lastName: "Ayoola",
//   age: 34 - 4,
//   job: "Student",
//   friends: ["Michael", "Peter", "Steven"],
// };
// console.log(lolex);

// // HOW TO GET PROPERTY FROM AN OBJECT
// // Dot Notation
// console.log(lolex.job);

// // Bracket Notation
// console.log(lolex["lastName"]);

// const nameKey = "Name";
// console.log(lolex["first" + nameKey]);
// console.log(lolex["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about lolex? Choose between firstName, lastName, age job, friends, location and twitter"
// );
// if (lolex[interestedIn]) {
//   console.log(lolex[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age job and friends"
//   );
// }

// // HOW TO ADD NEW PROPERTY
// lolex.location = "Nigeria";
// lolex["twitter"] = "@ololadeDOTdev";
// console.log(lolex);

// // CHALLENGE
// console.log(
//   `${lolex.firstName} has ${lolex.friends.length} friends, and her best friend is called ${lolex.friends[0]}`
// );

// const lolex = {
//   firstName: "Ololade",
//   lastName: "Ayoola",
//   birthYear: "1991",
//   job: "Engineer",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   // calcAge: function (birthYear) {
//   //   return 2023 - 1991;
//   // },

//   // calcAge: function () {
//   //   return 2023 - this.birthYear;
//   // },
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//CHALLENGE

// boom: function () {
//   if (this.hasDriversLicense) {
//     return `and she has a driver's license`;
//   } else {
//     return `and she has no driver's license`;
//   }
// },

//   getSummary: function () {
//     return `${lolex.firstName} is a ${this.calcAge()}-year old ${
//       lolex.job
//     }, and she has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
//   },
// };
// console.log(lolex.calcAge());
// console.log(lolex.age);
// console.log(lolex.age);

// console.log(lolex.getSummary());
// console.log(lolex.boom());

// CHALLENGE
// console.log(`${lolex.firstName} is a ${lolex.age}-year old ${
//   lolex.job
// }, ${lolex.boom()}
// `);

// CODING CHALLENGES

// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.marksBMI = this.mass / this.height ** 2;
//     return this.marksBMI;
//   },
// };

// const john = {
//   firstName: "John",
//   lastName: "Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.johnsBMI = this.mass / this.height ** 2;
//     return this.johnsBMI;
//   },
// };

// mark.marksBMI = mark.calcBMI();
// john.johnsBMI = john.calcBMI();
// console.log(mark);
// console.log(john);

// console.log(
//   `${
//     mark.marksBMI > john.johnsBMI
//       ? `${mark.firstName}'s BMI (${mark.marksBMI}), is higher than ${john.firstName}'s (${john.johnsBMI})!`
//       : `${john.firstName}'s BMI (${john.johnsBMI}), is higher than ${mark.firstName}'s BMI (${mark.marksBMI})!`
//   }`
// );

// LOOPS

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifthing weights repetition ${rep} 🏋️‍♀️`);
// }

// const loly = [
//   "Ololade",
//   "Ayoola",
//   2037 - 1991,
//   "Student",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// // console.log(loly[0])
// // console.log(loly[1])
// // ....
// // console.log(loly[4])

// const types = [];

// for (let i = 0; i < loly.length; i++) {
//   console.log(loly[i], typeof loly[i]);

//   // Filling Types Array
//   // types[i] = typeof loly[i];

//   types.push(typeof loly[i]);
// }
// console.log(types);

// const years = [1991, 1992, 2007, 1983, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// CONTINUE AND BREAK

// CONTINUE FOR STRINGS
// for (let i = 0; i < loly.length; i++) {
//   if (typeof loly[i] !== "string") continue;

//   console.log(loly[i], typeof loly[i]);
// }

// BREAK WITH NUMBER
// for (let i = 0; i < loly.length; i++) {
//   if (typeof loly[i] === "number") break;

//   console.log(loly[i], typeof loly[i]);
// }

// const loly = [
//   "Ololade",
//   "Ayoola",
//   "34-4",
//   "Student",
//   ["Michael", "Peter", "Steven"],
// ];

// // HOW TO LOOP FROM BOTTOM TO TOP

// for (let i = loly.length - 1; i >= 0; i--) {
//   console.log(i, loly[i]);
// }

// // CREATING A LOOP INSIDE OF A LOOP
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-----Starting Exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`exercise ${exercise}: Lifting weight repetition ${rep} `);
//   }
// }

// FOR LOOP
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifthing weights repetition ${rep} 🏋️‍♀️`);
// }

// // WHILE LOOP
// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifthing weights repetition ${rep} 🏋️‍♀️`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log("Loop is about to end.....");
// }

// FINAL CODING CHALLENGE OF THIS SECTION

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (tab) {
  if (tab >= 20 && tab <= 300) {
    return tab * 0.15;
  } else {
    return tab * 0.2;
  }
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}
// console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage([2, 3, 4]));
console.log(calcAverage([2, 3, 10]));
