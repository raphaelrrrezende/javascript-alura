const btnMostrar = document.querySelector('.mostrar');
const btnEsconder = document.querySelector('.esconder');
const lista = document.querySelector('.lista');

btnEsconder.addEventListener('click', () => {
    lista.style.display = 'none';
    btnEsconder.style.display = 'none';
    btnMostrar.style.display = 'block';
});

btnMostrar.addEventListener('click', () => {
    lista.style.display = 'block';
    btnEsconder.style.display = 'block';
    btnMostrar.style.display = 'none';
});

if(lista.display === 'block') {
    btnEsconder.style.display = 'block';
    btnMostrar.style.display = 'none';
} else {
    btnEsconder.style.display = 'none';
    btnMostrar.style.display = 'block';
}