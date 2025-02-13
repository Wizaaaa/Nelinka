const detectDeviceType = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      ? 'Mobile'
      : 'Desktop'; 
  
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const nadpis = document.getElementById('nadpis');
const container = document.getElementById('container');

const  img = document.createElement('img');
img.src = 'https://media1.tenor.com/m/arqlNu8gyJYAAAAC/cat-cat-jumping.gif';

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
    nadpis.innerHTML = 'JUPIIIIIIIIIIIIIIIIIIIIIIII';
    container.insertBefore(img, nadpis.nextSibling);
    no.style.position = 'static';
    yes.style.width = '80px';
    yes.style.height = '50px';
}

no.addEventListener('mouseover', () => {
    if (stav == true && detectDeviceType() == 'Desktop') {
        no.style.position = "absolute";
        const x = Math.random() * 1000;
        const y = Math.random() * 900;
        no.style.left = x + 'px';
        no.style.top = y + 'px';
        nadpis.innerHTML = idk[Math.floor(Math.random() * idk.length)];
    }
});

let bigger = 10;

no.onclick = () => {
    if (stav == true && detectDeviceType() == 'Mobile') {
        bigger += 10;
        nadpis.innerHTML = idk[Math.floor(Math.random() * idk.length)];
        yes.style.width = (80 + bigger) + "px";
        yes.style.height = (50 + bigger) + "px";
    }
}