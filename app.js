const nums = [1, 2, 3, 4, 5];
const numsNew = nums.map((num) => num * 2);
console.log(numsNew);
//
let numsToStrings = [];
nums.forEach((num) => numsToStrings.push(String(num)));
console.log(numsToStrings);
//
const names = ["john", "JACOB", "jinGleHeimer", "schmidt"];

const capitalizeNames = (arrayOfNames) => {
    let capitalizedNames = [];
    arrayOfNames.forEach((name) => {
        const firstLetter = name.slice(0, 1);
        const rest = name.slice(1, name.length);
        newName = firstLetter.toUpperCase() + rest.toLowerCase();
        capitalizedNames.push(newName);


    });
    console.log(capitalizedNames);

};

capitalizeNames(names);

//

const namesArray = [
    {
        name: "Aloe Jones",
        age: 20
    },
    {
        name: "Bentley Smith",
        age: 25
    },
    {
        name: "Candice Lane",
        age: 33
    },
    {
        name: "Danica Puckett",
        age: 55
    }
];


function namesOnly(array) {
    let namesArray = [];
    array.map((obj) => {
        namesArray.push(obj.name);
    });
    return namesArray;
}
console.log(namesOnly(namesArray));

//

function makeStrings(arr) {
    namesArray.map((obj) => {
        if (obj.age > 30) {
            return `${obj.name} can go to the matrix`;
        } else {
            return `${obj.name} is not old enough to go to the matrix`;
        }
    });
}

makeStrings(namesArray);
//

function readyToPutInTheDOM(arr) {
    return arr.map((obj) => `<h1>${obj.name}</h1><h2>${obj.age}</h2>`);
}
console.log(readyToPutInTheDOM(namesArray));


// .filter() exercises

const myArray = [3, 6, 8, 2];
function fiveAndGreaterOnly(arr) {
    return arr.filter(num => num > 5);
}
console.log(fiveAndGreaterOnly(myArray));
//

function evensOnly(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]
//

function fiveCharactersOrFewerOnly(arr) {
    return arr.filter(word => word.length <= 5);
}
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]
//

function peopleWhoBelongToTheIlluminati(arr) {
    return arr.filter(person => person.member);
}
console.log(peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]));
//

function ofAge(arr) {
    return arr.filter(person => person.age > 18);
}
console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]));

//

function leastToGreatest(arr) {
    return arr.sort((a, b) => a - b);
}
console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90]
//

function greatestToLeast(arr) {
    return arr.sort((a, b) => b - a);
}
console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1]
//
function lengthSort(arr) {
    return arr.sort((a, b) => a.length - b.length);
}
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"]
//

function alphabetical(arr) {
    return arr.sort();
}
console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"]
//

function byAge(arr) {
    return arr.sort((a, b) => a.age - b.age);
}
console.log(byAge([
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]));
// => [ { name: 'Misunderstood Observer', age: 2 },
//  { name: 'Quiet Samurai', age: 22 },
//  { name: 'Unlucky Swami', age: 77 },
//  { name: 'Arrogant Ambassador', age: 100 } ]

//
// Array reduce exercises

function total(arr) {
    return arr.reduce((final, currentNum) => {
        final += currentNum;
        return final;
    });
}

console.log(total([1, 2, 3])); // 6
//

function stringConcat(arr) {
    return arr.reduce((final, currentNum) => {
        return final + currentNum;
    }, "");
}
console.log(stringConcat([1, 2, 3])); // "123"
//

function totalVotes(arr) {
    return arr.reduce((final, user) => {
        if (user.voted) {
            final++;
        }
        return final;
    }, 0);
}

var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];
console.log(totalVotes(voters)); // 7
//

function shoppingSpree(arr) {
    return arr.reduce((final, currentItem) => {
        return final += currentItem.price;
    }, 0);
}
var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
console.log(shoppingSpree(wishlist)); // 227005
//

function flatten(arr) {
    return arr.reduce((final, currentArray) => {
        return final.concat(currentArray);
    }, []);
}
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
//

var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];
function voterResults(arr) {
    return arr.reduce((final, currentVoter) => {
        if (currentVoter.age <= 25 && currentVoter.voted) {
            final.numYoungVotes++;
        } else if (currentVoter.age <= 35 && currentVoter.voted) {
            final.numMidVotes++;
        } else if (currentVoter.age <= 55 && currentVoter.voted) {
            final.numOldVotes++;
        }
        if (currentVoter.age <= 25) {
            final.numYoungPeople++;
        } else if (currentVoter.age <= 35) {
            final.numMidPeople++;
        } else if (currentVoter.age <= 55) {
            final.numOldPeople++;
        }
        return final;
    }, {
        numYoungVotes: 0,
        numYoungPeople: 0,
        numMidVotes: 0,
        numMidPeople: 0,
        numOldVotes: 0,
        numOldPeople: 0
    });
}
console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}*/
//

// Multiple Array Methods Part 1

var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
];

function sortedOfAge(arr) {
    let over18 = arr.filter(obj => obj.age > 18);
    over18.sort((a, b) => {
        if (a.lastName > b.lastName) {
            return 1;
        } else {
            return -1;
        }
    });
    let result = over18.map(obj => `<li>${obj.firstName} ${obj.lastName} is ${obj.age}</li>`);
    return result;
}

console.log(sortedOfAge(peopleArray));

/*
Output:
[
    "<li>Kyle Mooney is 27</li>",
    "<li>Sarah Palin is 47</li>",
    "<li>Rick Sanchez is 78</li>",
    "<li>Morty Smith is 29</li>",
    "<li>Lev Tolstoy is 82</li>"
]
*/
// extra credit
function reversedArray(arr) {
    let endsWithAOrY = arr.filter(obj => {
        if (obj.lastName.endsWith("a") || obj.lastName.endsWith("y")) {
            return true;
        }
    });
    endsWithAOrY.splice(1, 1);
    endsWithAOrY.reverse();
    return endsWithAOrY;
}
var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
];

console.log(reversedArray(peopleArray));








