const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const sol = document.getElementById('sol');

turnOn.addEventListener('click', (event) => {
    sol.src = 'asstes/img/ana-branca1.jpg';
})

turnOff.addEventListener('click', (event) => {
    sol.src = 'asstes/img/sol1.webp';
})

sol.addEventListener('dblclick', (event) => {
    sol.src = 'asstes/img/super-nova1.webp'
})