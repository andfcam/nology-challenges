let wantToRepeat = true;
while (wantToRepeat) {
    const firstNumber = Number(prompt("Enter first number"));
    const operator = prompt("Enter the operator");
    const secondNumber = Number(prompt("Enter second number"));

    switch (operator) {
        case "+":
            alert(firstNumber + secondNumber);
            break;
        case "-":
            alert(firstNumber - secondNumber);
            break;
        case "/":
            alert(firstNumber / secondNumber);
            break;
        case "*":
            alert(firstNumber * secondNumber);
            break;
        default:
            alert("Invalid operator.");
    }

    const answer = prompt("Want to run again? Y/N");
    
    if (answer.toLowerCase() !== 'y') {
        wantToRepeat = false;
    }
}