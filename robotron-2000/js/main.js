const robotron = document.querySelector('#robotron');

robotron.addEventListener('click', (evento) => {
    console.log(evento);
});

function dizOla(nome) {
    console.log('Olá, ' + nome);
    console.log('Bem-vindo(a) ao Robotron 2000!');
}

dizOla('Raphael');