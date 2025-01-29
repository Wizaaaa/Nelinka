const yes = document.getElementById('yes');
const no = document.getElementById('no');
const nadpis = document.getElementById('nadpis');


let idk = [
    "Proč 😭",
    "😭😭😭😭😭😭😭😭😭",
    "To ranilo mé srdíčko",
    "💔💔💔",
    "Au",
    "Budu bečet",
    "💀",
    "Nemám slov"
];

no.addEventListener('mouseover', () => {
    const x = Math.random() * 1000;
    const y = Math.random() * 900;
    no.style.left = x + 'px';
    no.style.top = y + 'px';
    nadpis.innerHTML = idk[Math.floor(Math.random() * idk.length)];

});

yes.onclick = () => {
    nadpis.innerHTML = 'JUPIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII';
}

no.onclick = () => {
    nadpis.innerHTML = 'Reálně nemám tušení jak se ti to povedlo, protože by to mělo být nereálný, ale gj :D';
}