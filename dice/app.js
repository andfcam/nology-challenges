window.onload = () => {
    // const bags = document.querySelectorAll('li');

    // bags.forEach((bag, i) => {
    //     if (i % 2 === 1) bag.classList += "bold";
    //     bag.style.fontSize = 10 * (i + 1);
    // })

    const dice = document.getElementById('dice');
    dice.src = `img/${Math.ceil(Math.random() * 6)}.png`;
}
