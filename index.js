const myAge = 35;
// create a constant variable and assign current age

let earlyYears = 2;
// create a reassignable variable earlyYears subject to change.

earlyYears = earlyYears * 10.5;
// calculate the age value of the earlyYears.

let laterYears = myAge - 2;
// create laterYears to represent myAge - earlyYears.

laterYears = laterYears * 4;
// reassign laterYears to reflect the age value after the first 2 years.

/*
TO TEST earlyYears & laterYears 
console.log(earlyYears);
console.log(laterYears);
*/

let myAgeInDogYears = earlyYears + laterYears;
// create variable to total my human age in dog years.

let myName = "Moises";
myName = myName.toLowerCase();
// reassign myName to return a lowercase string

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
// using interpolation display My name is NAME. I am HUMAN AGE years old in human years which is DOG AGE years old in dog years. Replace NAME with myName, HUMAN AGE with myAge, and DOG AGE with myAgeInDogYears in the sentence above.
