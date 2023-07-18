import ehUmCPF from './valida-cpf.js';
import ehMaiorDeIdade from './valida-idade.js';

const camposDoFormulario = document.querySelectorAll('[required]');
const formulario = document.querySelector('[data-formulario]');

formulario.addEventListener('submit', (e) => {

    e.preventDefault();

    const listaRespostas = {
        'nome': e.target.elements['nome'].value,
        'email': e.target.elements['email'].value,
        'rg': e.target.elements['rg'].value,
        'cpf': e.target.elements['cpf'].value,
        'aniversario': e.target.elements['aniversario'].value,
    };

    localStorage.setItem('cadastro', JSON.stringify(listaRespostas));

    window.location.href = './abrir-conta-form-2.html';

});

camposDoFormulario.forEach((campo) => {

    campo.addEventListener('blur', () => verificaCampo(campo));
    campo.addEventListener('invalid', evento => evento.preventDefault());
    
});

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
];

const mensagens = {
    nome: {
        valueMissing: `O campo "nome" não pode estar vazio.`,
        patternMismatch: 'Por favor, preencha um nome válido.',
        tooShort: 'Por favor, preencha um nome válido.'
    },
    email: {
        valueMissing: `O campo "e-mail" não pode estar vazio.`,
        typeMismatch: 'Por favor, preencha um e-mail válido.',
        tooShort: 'Por favor, preencha um e-mail válido.'
    },
    rg: {
        valueMissing: `O campo "RG" não pode estar vazio.`,
        patternMismatch: 'Por favor, preencha um RG válido.',
        tooShort: 'O campo de RG não tem caractéres o suficiente.'
    },
    cpf: {
        valueMissing: `O campo "CPF" não pode estar vazio.`,
        patternMismatch: 'Por favor, preencha um CPF válido.',
        customError: 'O CPF digitado não existe.',
        tooShort: `O campo "CPF" não tem caractéres suficientes.`
    },
    aniversario: {
        valueMissing: `O campo "data de nascimento" não pode estar vazio.`,
        customError: 'Você deve ter 18 anos ou mais para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.'
    }
};

function verificaCampo(campo) {

    let mensagem = '';

    campo.setCustomValidity('');

    if(campo.name == 'cpf' && campo.value.length >= 11) {
        ehUmCPF(campo);
    };

    if(campo.name == 'aniversario' && campo.value != '') {
        ehMaiorDeIdade(campo);
    };

    tiposDeErro.forEach(erro => {

        if(campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
            console.log(mensagem);

        };

    });

    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorDeInput = campo.checkValidity();

    if(!validadorDeInput) {
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = '';
    };
    
};