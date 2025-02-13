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
    nadpis.innerHTML = 'JUPIIIIIIIIIIIIIIIIIIIIIIII';
    src.appendChild(img);
    container.style.flexDirection = 'column';
    no.style.left = '50%';
    if ( detectDeviceType() == 'Desktop') {
        yes.style.top = '45%';
        no.style.top = '45%';
    }else {
        yes.style.top = '55%';
        no.style.top = '55%';
    }

}

no.addEventListener('mouseover', () => {
    if (stav == true && detectDeviceType() == 'Desktop') {
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