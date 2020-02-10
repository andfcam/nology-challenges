// Write a function that reverses a string so it reads backwards

const reverse = (word) => [...word].reverse().join("");

const result = reverse("olleh");
console.log(result);