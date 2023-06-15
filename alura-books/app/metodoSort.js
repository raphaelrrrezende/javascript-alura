let btnOrdenarPreco = document.getElementById('btnOrdenarPorPreco');

btnOrdenarPreco.addEventListener('click', ordenarLivros);

function ordenarLivros() {

    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);

    exibirLivros(livrosOrdenados);
    
};