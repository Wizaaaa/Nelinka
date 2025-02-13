const yes = document.getElementById('yes');
const no = document.getElementById('no');
const nadpis = document.getElementById('nadpis');
const container = document.getElementById('container');

const  img = document.createElement('img');
img.src = 'https://media1.tenor.com/m/arqlNu8gyJYAAAAC/cat-cat-jumping.gif';
const src = document.getElementById('container');

let idk = [
    "Proč 😭",
    "😭😭😭😭😭😭😭😭😭",
    "To ranilo mé srdíčko",
    "💔💔💔",
    "Au",
    "Budu bečet",
    "💀",
    "Nemám slov",
    "GG",
    "😱",
    "😢",
    "😭",
    "Hm",
    "Hmmmmmmmmmm",
    "Aha"
];

stav = true;

yes.onclick = () => {
    stav = false;
    nadpis.innerHTML = 'JUPIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII';
    src.appendChild(img);
    container.style.flexDirection = 'column';
}

no.addEventListener('mouseover', () => {
    if (stav == true) {
        const x = Math.random() * 1000;
        const y = Math.random() * 900;
        no.style.left = x + 'px';
        no.style.top = y + 'px';
        nadpis.innerHTML = idk[Math.floor(Math.random() * idk.length)];
    }
});


no.onclick = () => {
    if (stav == true) {
        nadpis.innerHTML = idk[Math.floor(Math.random() * idk.length)];
    }
}