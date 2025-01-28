const yes = document.getElementById('yes');
const no = document.getElementById('no');

no.addEventListener('mouseover', () => {
    const x = Math.random() * 1000;
    const y = Math.random() * 1000;
    no.style.left = x + 'px';
    no.style.top = y + 'px';
});