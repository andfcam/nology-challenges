const names = ["Benny", "Anna", "Bjorn", "Anna"];

//Task 1
for (name of names) {
    console.log(name);
}

//Task 2
for (letter of names[1].split('')) {
    console.log(letter);
}

//Task 3
for (name of names) {
    console.log(name.length);
}

//Task 4
console.log(names.indexOf("Bjorn"));

//Task 5
for (name of names.sort()) {
    console.log(name);
}

//Extension 1
const abbaLengthSort = names.sort((a, b) => { return a.length - b.length; });
console.log(abbaLengthSort);

//Extension 2
const startsWithB = names.filter((name) => name.startsWith("B"));
console.log(startsWithB);

//Extension 3
names.sort();
names.push(names.shift());
const firstLetter = (response, word) => response += word.charAt(0);
console.log(names.reduce(firstLetter, ''));

//Extension 4
const legends = names.map((name) => `${name} the legend`);
console.log(legends);


// Task:
// 1. Loop through the names and print each one
// 2. Print every letter from the second name in the list
// 3. Loop through the array and print the length of each name
// 4. Use an array method to find the index of the name "Bjorn"
// 5. Loop through the array and print each item in alphabetical order
// EXTENSION
    // 1. Sort the array by the length of the names, shortest to largest
    // 2. Only return names that start with a "B"
    // 3. Using the sort and reduce methods, return the word "ABBA" using the array
    // 4. Using map, print each name adding "the legend" to the end of each.