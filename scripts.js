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
    m = hoje.getMonth() + 1;
    a = hoje.getFullYear();
}

function questao() {
    var nome = window.prompt('Insira Aqui seu nome: ')
    var pergunta = window.prompt('Insira aqui a sua pergunta :')
    document.getElementById('pergunta').innerHTML = '<br><b>Nome: </b>' + nome + '<br><b>Data: </b>' + d + '/' + m + '/' + a + '<br><b>Questão da pergunta: </b>' + pergunta + '<br><hr>';
}

function escondeOpcoes() {
    var container = document.getElementById('quadroOpcoes');
    container.style.display = 'none';
}

function navCartas(qualBotao) {
    switch (qualBotao) {
        case 'maiores':
            document.getElementById("navMaiores").style.display = "block";
            document.getElementById("navPaus").style.display = "none";
            document.getElementById("navOuros").style.display = "none";
            document.getElementById("navCopas").style.display = "none";
            document.getElementById("navEspadas").style.display = "none";
            break;
        case 'paus':
            document.getElementById("navMaiores").style.display = "none";
            document.getElementById("navPaus").style.display = "block";
            document.getElementById("navOuros").style.display = "none";
            document.getElementById("navCopas").style.display = "none";
            document.getElementById("navEspadas").style.display = "none";
            break;
        case 'ouros':
            document.getElementById("navMaiores").style.display = "none";
            document.getElementById("navPaus").style.display = "none";
            document.getElementById("navOuros").style.display = "block";
            document.getElementById("navCopas").style.display = "none";
            document.getElementById("navEspadas").style.display = "none";
            break;
        case 'copas':
            document.getElementById("navMaiores").style.display = "none";
            document.getElementById("navPaus").style.display = "none";
            document.getElementById("navOuros").style.display = "none";
            document.getElementById("navCopas").style.display = "block";
            document.getElementById("navEspadas").style.display = "none";
            break;
        case 'espadas':
            document.getElementById("navMaiores").style.display = "none";
            document.getElementById("navPaus").style.display = "none";
            document.getElementById("navOuros").style.display = "none";
            document.getElementById("navCopas").style.display = "none";
            document.getElementById("navEspadas").style.display = "block";
            break;
        case '0':
            escolha1 = 0;
            getPpf();
            break;
        case '1':
            escolha1 = 1;
            getPpf();
            break;
        case '2':
            escolha1 = 2;
            getPpf();
            break;
        case '3':
            escolha1 = 3;
            getPpf();
            break;
        case '4':
            escolha1 = 4;
            getPpf();
            break;
        case '5':
            escolha1 = 5;
            getPpf();
            break;
        case '6':
            escolha1 = 6;
            getPpf();
            break;
        case '7':
            escolha1 = 7;
            getPpf();
            break;
        case '8':
            escolha1 = 8;
            getPpf();
            break;
        case '9':
            escolha1 = 9;
            getPpf();
            break;
        case '10':
            escolha1 = 10;
            getPpf();
            break;
        case '11':
            escolha1 = 11;
            getPpf();
            break;
        case '12':
            escolha1 = 12;
            getPpf();
            break;
        case '13':
            escolha1 = 13;
            getPpf();
            break;
        case '14':
            escolha1 = 14;
            getPpf();
            break;
        case '15':
            escolha1 = 15;
            getPpf();
            break;
        case '16':
            escolha1 = 16;
            getPpf();
            break;
        case '17':
            escolha1 = 17;
            getPpf();
            break;
        case '18':
            escolha1 = 18;
            getPpf();
            break;
        case '19':
            escolha1 = 19;
            getPpf();
            break;
        case '20':
            escolha1 = 20;
            getPpf();
            break;
        case '21':
            escolha1 = 21;
            getPpf();
            break;
       
        default:
            document.getElementById("botaoSelecionado").innerHTML = "erro";
    }
}