// 2. The user inputs their account balance into a browser prompt.
     // If it's greater than 100, they are told they are rich!
     // If it's between 20 and 100, they are told they are surviving.
     // If it's less than 20, they are told they are poor.

const balance = Number(prompt("How many gold pieces do you have?"));

if (balance > 100) {
    alert("Oh dammmnn you rich.");
} else if (balance >= 20) {
    alert("Mmk, you're survivin'.");
} else if (balance < 20) {
    alert("You poor like dirt.")
}