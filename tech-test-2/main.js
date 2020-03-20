class Game {
    constructor() {
        this.totalGrains = 0n;
        this.boardDom = document.getElementById("board");
        this.totalDom = document.getElementById("total");
        this.createBoard();
    }

    createBoard() {
        let html = ``;
        for (let row = 0; row < 8; row++) {
            html += `<tr>`;
            for (let col = 0; col < 8; col++) {
                const grains = 2n ** (BigInt(row) * 8n + BigInt(col));
                html += `<td><span>${grains}</span></td>`;
                this.totalGrains += grains;
            }
            html += `</tr>`;
        }
        this.boardDom.innerHTML = html;
        this.totalDom.innerText = `Total: ${this.totalGrains}`;
    }
}

window.onload = () => {
    const game = new Game();
};
