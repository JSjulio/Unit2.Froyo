// The user is prompted for froyo flavors upon entering the website.
const userInputString = prompt(
    "Please enter what ice cream flavors you'd like.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );

// The user's input string is split into an array of strings.
const stringArray = userInputString.split(",");

console.log(stringArray); 

// A loop is used to iterate through the array of flavors.
// An object is used to keep count of how many orders there are of each flavor.

const flavorCount = {};

// The program correctly counts the number of each flavor in the user's input.
// The logic for counting the frequencies of elements in an array is ...
// organized into a function that returns an object.

for (let i = 0; i < stringArray.length; i++) {
    const flavor = stringArray[i].trim();
    if (flavorCount[flavor]) {
        flavorCount[flavor] += 1; 
    } else {
        flavorCount[flavor] = 1;
    }
}


// The console output changes depending on the user's input.
//if else

// console.table(flavorCount);


console.log("Flavor\tCount");
for (const flavor in flavorCount) {
    console.log(`${flavor}\t${flavorCount[flavor]}`);
}





