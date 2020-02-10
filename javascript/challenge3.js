// 3. The user types their name into a browser prompt.
    // If it is 10 characters or longer, they are posh!
    // If it is not, they are cool.

    const name = prompt("What's your name, son?");

    if (name.length >= 10) {
        alert("Oh I say, you are quite poosh.");
    } else if (name.length < 10) {
        alert("Gimme five dude, you're rad as hell.")
    }