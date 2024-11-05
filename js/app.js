//Receber tipo do ingresso, quantidade, quantidade por setor
let quantidadePista = parseInt(document.getElementById ('qtd-pista').textContent);
let quantidadeSuperior = parseInt(document.getElementById ('qtd-superior').textContent);
let quantidadeInferior = parseInt(document.getElementById ('qtd-inferior').textContent);

function comprar(){
    let tipoIngresso = document.getElementById ('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById ('qtd').value);
    
    if (isNaN (quantidade) || quantidade <= 0){
        alert ('Insira uma quantidade válida');
        return;
    }

    if(tipoIngresso == 'pista'){
        comprarPista (quantidade);

    } else if(tipoIngresso == 'superior'){
        comprarSuperior(quantidade);

        } else {
            comprarInferior(quantidade)
        }
    
}

function comprarPista(quantidade){
    if (quantidade <= quantidadePista){
    quantidadePista = quantidadePista - quantidade;
    document.getElementById ('qtd-pista').textContent = quantidadePista;
    document.getElementById ('qtd').value = '';
    alert ('Compra concluida com sucesso');
    } else{
        alert ('Quantidade indisponível');
    }
}

function comprarSuperior(quantidade){
    if (quantidade <= quantidadeSuperior){
    quantidadeSuperior = quantidadeSuperior - quantidade;
    document.getElementById ('qtd-superior').textContent = quantidadeSuperior;
    document.getElementById ('qtd').value = '';
    alert ('Compra concluida com sucesso');
    } else{
        alert ('Quantidade indisponível');
    }
}

function comprarInferior(quantidade){
    if (quantidade <= quantidadeInferior){
    quantidadeInferior = quantidadeInferior - quantidade;
    document.getElementById ('qtd-inferior').textContent = quantidadeInferior;
    document.getElementById ('qtd').value = '';
    alert ('Compra concluida com sucesso');
    } else{
        alert ('Quantidade indisponível');
    }
}