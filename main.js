const form = document.getElementById('form-cadastro');

let linhas = '';
const nome = []; 
const numeros = [];

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionarLinha();
    atualizaTabela();

    
});

function adicionarLinha (){
    const nomeCadastro = document.getElementById('digite-nome');
    const numeroCadastro = document.getElementById('digite-numero');

    const numero = parseInt(numeroCadastro.value)

    if(numeros.includes(numero)){
        alert(`esse número:${numeroCadastro.value}, ja foi cadastrado`)
    }
    else{
        nome.push(nomeCadastro.value);
        numeros.push(parseInt(numeroCadastro.value))

        let linha = '<tr>'
        linha += `<td class="partir">${nomeCadastro.value}<td>`
        linha += `<td>${numeroCadastro.value}<td>`
        linha += '</td>'
        linhas += linha
    }
    nomeCadastro.value = '';
    numeroCadastro.value = '';

};

function atualizaTabela (){

    const table = document.querySelector('tbody');
    table.innerHTML = linhas

}