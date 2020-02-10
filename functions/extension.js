// EXTENSION:
// Write a function that takes in a word and a number
// Print the word out that number of times

const printLoop = (word, num) => {
    for (let i = 0; i < num; i++) {
        console.log(word);
    }
    return;
}

printLoop("Hello", 4);