const r3pl4c3L3tt3r5 = (letter) => {
    switch (letter) {
        case 'i': return '1';
        case 's': return '5';
        default: return letter;
    }
}

const state = "mississippi";
const st4t3 = state.split('').map(r3pl4c3L3tt3r5).join('');

console.log(st4t3);

