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
        case '22':
            escolha1 = 22;
            getPpf();
            break;
        case '23':
            escolha1 = 23;
            getPpf();
            break;
        case '24':
            escolha1 = 24;
            getPpf();
            break;
        case '25':
            escolha1 = 25;
            getPpf();
            break;
        case '26':
            escolha1 = 26;
            getPpf();
            break;
        case '27':
            escolha1 = 27;
            getPpf();
            break;
        case '28':
            escolha1 = 28;
            getPpf();
            break;
        case '29':
            escolha1 = 29;
            getPpf();
            break;
        case '30':
            escolha1 = 30;
            getPpf();
            break;
        case '31':
            escolha1 = 31;
            getPpf();
            break;
        case '32':
            escolha1 = 32;
            getPpf();
            break;
        case '33':
            escolha1 = 33;
            getPpf();
            break;
        case '34':
            escolha1 = 34;
            getPpf();
            break;
        case '35':
            escolha1 = 35;
            getPpf();
            break;
        case '36':
            escolha1 = 36;
            getPpf();
            break;
        case '37':
            escolha1 = 37;
            getPpf();
            break;
        case '38':
            escolha1 = 38;
            getPpf();
            break;
        case '39':
            escolha1 = 39;
            getPpf();
            break;
        case '40':
            escolha1 = 40;
            getPpf();
            break;
        case '41':
            escolha1 = 41;
            getPpf();
            break;
        case '42':
            escolha1 = 42;
            getPpf();
            break;
        case '43':
            escolha1 = 43;
            getPpf();
            break;
        case '44':
            escolha1 = 44;
            getPpf();
            break;
        case '45':
            escolha1 = 45;
            getPpf();
            break;
        case '46':
            escolha1 = 46;
            getPpf();
            break;
        case '47':
            escolha1 = 47;
            getPpf();
            break;
        case '48':
            escolha1 = 48;
            getPpf();
            break;
        case '49':
            escolha1 = 49;
            getPpf();
            break;
        case '50':
            escolha1 = 50;
            getPpf();
            break;
        case '51':
            escolha1 = 51;
            getPpf();
            break;
        case '52':
            escolha1 = 52;
            getPpf();
            break;
        case '53':
            escolha1 = 53;
            getPpf();
            break;
        case '54':
            escolha1 = 54;
            getPpf();
            break;
        case '55':
            escolha1 = 55;
            getPpf();
            break;
        case '56':
            escolha1 = 56;
            getPpf();
            break;
        case '57':
            escolha1 = 57;
            getPpf();
            break;
        case '58':
            escolha1 = 58;
            getPpf();
            break;
        case '59':
            escolha1 = 59;
            getPpf();
            break;
        case '60':
            escolha1 = 60;
            getPpf();
            break;
        case '61':
            escolha1 = 61;
            getPpf();
            break;
        case '62':
            escolha1 = 62;
            getPpf();
            break;
        case '63':
            escolha1 = 63;
            getPpf();
            break;
        case '64':
            escolha1 = 64;
            getPpf();
            break;
        case '65':
            escolha1 = 65;
            getPpf();
            break;
        case '66':
            escolha1 = 66;
            getPpf();
            break;
        case '67':
            escolha1 = 67;
            getPpf();
            break;
        case '68':
            escolha1 = 68;
            getPpf();
            break;
        case '69':
            escolha1 = 69;
            getPpf();
            break;
        case '70':
            escolha1 = 70;
            getPpf();
            break;
        case '71':
            escolha1 = 71;
            getPpf();
            break;
        case '72':
            escolha1 = 72;
            getPpf();
            break;
        case '73':
            escolha1 = 73;
            getPpf();
            break;
        case '74':
            escolha1 = 74;
            getPpf();
            break;
        case '75':
            escolha1 = 75;
            getPpf();
            break;
        case '76':
            escolha1 = 76;
            getPpf();
            break;
        case '77':
            escolha1 = 77;
            getPpf();
            break;

        default:
            document.getElementById("botaoSelecionado").innerHTML = "erro";
    }
}

 /* When the user clicks on the button, 
            toggle between hiding and showing the dropdwn content */
            function dropIt() {
                document.getElementById("mydropdwn").classList.toggle("show");
              }
              
              // Close the dropdwn if the user clicks outside of it
              window.onclick = function(e) {
                if (!e.target.matches('.dropbttn')) {
                var mydropdwn = document.getElementById("mydropdwn");
                  if (mydropdwn.classList.contains('show')) {
                    mydropdwn.classList.remove('show');
                  }
                }
              }