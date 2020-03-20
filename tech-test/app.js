class Wasp {
    constructor(type, health, damage) {
        this.type = type;
        this.health = health;
        this.damage = damage;
    }

    hit = () => {
        this.health -= this.damage;
    };
}

class Queen extends Wasp {
    constructor() {
        super("Queen", 80, 7);
    }
}

class Worker extends Wasp {
    constructor() {
        super("Worker", 68, 10);
    }
}

class Drone extends Wasp {
    constructor() {
        super("Drone", 60, 12);
    }
}

let wasps = [];
const queen = new Queen();
wasps.push(queen);

class Game {
    constructor() {
        this.init();
    }

    init = () => {
        this.wasps = [];

        this.initWasps();
        this.initDom();
        this.updateDom();
    };

    initWasps = () => {
        this.wasps.push(new Queen());
        for (let i = 0; i < 5; i++) this.wasps.push(new Worker());
        for (let i = 0; i < 8; i++) this.wasps.push(new Drone());
        console.log(this.wasps);
    };

    initDom = () => {
        this.container = document.getElementById("wasps");
        this.addListeners();
    };

    addListeners = () => {
        document
            .getElementById("attack")
            .addEventListener("click", this.handleAttack);
        document.getElementById("new").addEventListener("click", this.init);
    };

    updateDom = () => {
        this.container.innerHTML = "";
        this.aliveWasps.forEach(wasp => this.createDiv(wasp));
    };

    createDiv = wasp => {
        const div = document.createElement("div");
        div.innerHTML = `<h2>${wasp.type}</h2><p>${wasp.health}</p>`;
        div.classList.add("wasp");

        if (wasp.health <= wasp.damage) div.classList.add("red");
        else if (wasp.health <= wasp.damage * 3) div.classList.add("orange");

        this.container.append(div);
    };

    handleAttack = () => {
        this.randomWasp.hit();
        this.updateDom();

        if (this.queen.health <= 0) this.gameOver();
    };

    gameOver = () => {
        this.wasps.forEach(wasp => (wasp.health = 0));
        this.updateDom();

        document
            .getElementById("attack")
            .removeEventListener("click", this.handleAttack);
        alert("Game over!");
    };

    get aliveWasps() {
        return this.wasps.filter(wasp => wasp.health > 0);
    }

    get randomWasp() {
        const randomInt = Math.floor(Math.random() * this.aliveWasps.length);
        return this.aliveWasps[randomInt];
    }

    get queen() {
        return this.wasps.find(wasp => wasp.type === "Queen");
    }
}

window.onload = () => {
    const game = new Game();
};
