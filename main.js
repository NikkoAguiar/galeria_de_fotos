const form = document.getElementById('form_agenda');
let contatos = [];
let numero = [];
let linhas = '';
const inputContato = document.getElementById('campo_1');
const inputNumero = document.getElementById('campo_2');
const containerMensagemErro = document.getElementById('mensagem_erro');
const containerMensagemErro2 = document.getElementById('mensagem_erro_2');
// const containerMensagemErroNumero = document.getElementById('mensagem_erro_numero');
const botao = document.getElementById('botao');

inputContato.addEventListener('keyup', function(e){
    e.preventDefault();
    const mensagemErro2 = `O primeiro nome deve conter pelo menos 3 letras`;
    contatos.push(inputContato.value);
    if(contatos.length <= 3){
        containerMensagemErro2.innerHTML = mensagemErro2;
        containerMensagemErro2.style.display = 'block';
        document.getElementById('botao').disabled = true;
    }if(contatos.includes('')){
        containerMensagemErro2.innerHTML = mensagemErro2;
        containerMensagemErro2.style.display = 'block';
        contatos.pop(inputContato.value);
        console.log(contatos);
        document.getElementById('botao').disabled = true;
    }else if(contatos.length > 3){
        containerMensagemErro2.style.display = 'none';
        document.getElementById('botao').disabled = false;
    }
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    formValido = validaNome(inputContato.value);
    const mensagemErro = `O nome não está completo!`
    if(!formValido){
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
    }else{
        containerMensagemErro.style.display = 'none';
        adicionarLinha();
        atualizarTabela();
    }
})

function adicionarLinha(){
    if(numero.includes(parseInt(inputNumero.value))){
        alert(`O número ${inputNumero.value} já foi inserido!`);
    }else{
        contatos.push(inputContato.value);
        numero.push(parseInt(inputNumero.value));
        let linha = '<tr>';
        linha += `<td>${inputContato.value}</td>`;
        linha += `<td>+55 51 ${inputNumero.value}</td>`;
        linha += '</tr>'
        linhas += linha;
    }
    inputContato.value = '';
    inputNumero.value = '';
}

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');

    return nomeComoArray.length >= 2;
}

// inputNumero.addEventListener('keyup', function(e){
//     e.preventDefault();
//     const mensagemErroNumero = `Não é um número válido!`;
//     if(numero.length < 9){
//         numero.push(parseInt(inputNumero.value));
//     }else if(numero.length <= 8 || numero.length >= 10){
//         containerMensagemErroNumero.innerHTML = mensagemErroNumero;
//         containerMensagemErroNumero.style.display = 'block';
//         console.log(numero);
//     }else if(numero.includes('')){
//         numero.pop(inputNumero.value);
//     }else{
//         containerMensagemErroNumero.style.display = 'none';
//     }
// })