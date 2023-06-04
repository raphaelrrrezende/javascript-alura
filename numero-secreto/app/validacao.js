function verificarValor(chute) {

    const numero = +chute;

    if(chuteInvalido(numero)) {
        console.log('Valor inválido')
    }

    if(numeroNaoPermitido(numero)) {
        console.log(`Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}`)
    }

};

function chuteInvalido(numero) {
    return Number.isNaN(numero);
};

function numeroNaoPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
};
