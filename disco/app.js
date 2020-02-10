const onload = () => {
    const $newDivs = [];

    const generateColor = () => '#' + (Math.random().toString(16) + "000000").substring(2, 8);

    // for each div, assign random timeout to beginning before setInterval

    setInterval(() => {
        for (let i = 0; i < 16; i++) {
            $newDivs[i] = $('<div></div>').css("background-color", generateColor());
        }
        $('section').append($newDivs);
        $('div').fadeOut();
    }, 500);
}

$(onload);