for (let i = 1; i <= 1000; i++) {
    if (i % 15 === 0) console.log("Fizzbuzz!");
    else if (i % 5 === 0) console.log("Buzz!");
    else if (i % 3 === 0) console.log("Fizz!");
    else console.log(i);
}

for (let i = 0; i < 1000; i++) console.log((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);
