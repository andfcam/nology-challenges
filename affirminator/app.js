const onload = () => {
    const compliments = ["Your shoe is really good.", "Ooo, I like your neck.", "You're brilliant.", "Great knees."];

    $('button').click(function () {
        let index = Math.floor(Math.random() * compliments.length);
        $('.affirmation').text(compliments[index]);
    });
}

$(onload);
