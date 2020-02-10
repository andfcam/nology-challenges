const sqrt = (number) => { return Math.sqrt(number); }

const isInteger = (number) => { return Number.isInteger(number); }

const sqrtIsInteger = (number) => { return isInteger(sqrt(number)); }

console.log(sqrtIsInteger(17));
