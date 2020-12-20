/*
Recebendo informação do usuário
- Combobox recebe opção do usuário
- Variável recebe combobox
- Mostra uma div com explicação do método selecionado
- Solicita motivação da leitura(pode ser um alert após confirmação do botão)
- Botão para confirmar seleção
*/
//Definindo array de Métodos caso seja necessário
// var met = [];
// met[0] = 'Consulta simples';
// met[1] = 'Pŕos e contras';
// met[2] = 'Presente, passado e futuro';
// met[3] = 'Ponto cego';
// met[4] = 'A cruz';
// met[5] = 'Cruz Celta';
// met[6] = 'Mandala Astrológica';
// met[7] = 'O jogo da decisão';
// met[8] = 'Próximo Passo';

function selecionar(qualBotao) {
    switch (qualBotao) {
        case '1':
            document.getElementById("botaoSelecionado").innerHTML = '<object type="text/html" data="met/met1.html"></object>';
            break;
        case '2':
            document.getElementById("botaoSelecionado").innerHTML = '<object type="text/html" data="met/met2.html"></object>';
            break;
        case '3':
            document.getElementById("botaoSelecionado").innerHTML = '<object type="text/html" data="met/met3.html"></object>';
            break;
        case '4':
            document.getElementById("botaoSelecionado").innerHTML = '<object type="text/html" data="met/met4.html"></object>';
            break;
        case '5':
            document.getElementById("botaoSelecionado").innerHTML = '<object type="text/html" data="met/met5.html"></object>';
            break;
        case '6':
            document.getElementById("botaoSelecionado").innerHTML = '<object type="text/html" data="met/met6.html"></object>';
            break;
        case '7':
            document.getElementById("botaoSelecionado").innerHTML = '<object type="text/html" data="met/met7.html"></object>';
            break;
        case '8':
            document.getElementById("botaoSelecionado").innerHTML = '<object type="text/html" data="met/met8.html"></object>';
            break;
        case '9':
            document.getElementById("botaoSelecionado").innerHTML = '<object type="text/html" data="met/met9.html"></object>';
            break;
        case '10':
            document.getElementById("botaoSelecionado").innerHTML = '<object type="text/html" data="met/arc.html"></object>';
            break;
        default:
            document.getElementById("botaoSelecionado").innerHTML = "erro";
    }
}

function data() {
    hoje = new Date();
    d = hoje.getDate();
    m = hoje.getHours();
    a = hoje.getFullYear();
    document.getElementById('data').innerHTML = '<br>' + d + '/' + m + '/' + a;
}

function questao() {
    var pergunta = window.prompt('Insira aqui a sua pergunta')
    document.getElementById('pergunta').innerHTML ='<br><hr>' + 'Questão da pergunta: ' + pergunta + '<br><hr>';
}

/*
Função para sortear cartas
-Sorteia um numero de 0 a 22 sem repetir
-recebe os valores sorteados em um array ou variável
*/

/*
Imprimindo resultado
- imprime a data
- imprime método de leitura
- imprime a questão
- Imprime a imagem do arcano
- Imprime os id's das divs dos numeros armazenados no valor da array ou variáveis
*/