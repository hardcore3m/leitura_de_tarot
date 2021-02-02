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
    m = hoje.getMonth()+1;
    a = hoje.getFullYear();
}

function questao() {
    var nome = window.prompt('Insira Aqui seu nome: ')
    var pergunta = window.prompt('Insira aqui a sua pergunta :')
    document.getElementById('pergunta').innerHTML = '<br><b>Nome: </b>'+nome + '<br><b>Data: </b>' + d + '/' + m + '/' + a + '<br><b>Questão da pergunta: </b>' + pergunta + '<br><hr>';
}

function escondeOpcoes() {
    var container = document.getElementById('quadroOpcoes');
    container.style.display = 'none';
}

$('.owl-carousel').owlcarousel({
    loop:true,
    margin:10,
    nav:false
})