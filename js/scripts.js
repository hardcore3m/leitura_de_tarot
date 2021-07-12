// ############################################## HEADER & FOOTER
$(document).ready(function () {
    $('header').append('<div class="header">' +
        '<div>' +
        '<img src="../img/eremita.png" alt="">' +
        '</div>' +
        '<div class="menu">' +
        '<div>' +
        '<h1>Estudo do tarot</h1>' +
        '</div>' +
        '<div class="menulinks">' +
        '<a href="index.html" id="index">' +
        '<div>' +
        'Início' +
        '</div>' +
        '</a>' +
        '<a href="arc.html" id="arc">' +
        '<div>' +
        'Arcanos' +
        '</div>' +
        '</a>' +
        '<a href="metodos.html" id="aMetodos" >' +
        '<div>' +
        'Métodos' +
        '</div>' +
        '</a>' +
        '<a href="#" id="sobre">' +
        '<div>' +
        'Leituras' +
        '</div>' +
        '</a>' +
        '</div>' +
        '</div>' +
        '</div>'
    )
    $(".apresentacao").append(
        '<div id="footer">Criado por Rafael Marins para conteúdo de material de portifólio.Todos as referẽncias dos textos, imagens, fontes etc. estão aqui</div>'
    )
})


// ############################################## CRIAÇÃO DOS OPTIONS
for (let index = 0; index < tiragem.length; index++) {
    $(document).ready(function () {
        $("#btnEscolha").before(
            '<div class="opcoes"><b>' + tiragem[index].posicao + ' - ' + tiragem[index].nome + ': </b>' +
            '<select id="escolha' + index + '">' +
            "<option value=0>O Louco</option>" +
            "<option value=1>O Mago</option>" +
            " <option value = 2 > A Sacerdotiza </option>" +
            " <option value = 3 > A Imperatriz </option>" +
            " <option value = 4 > O Imperador </option>" +
            " <option value = 5 > O hierofante </option>" +
            " <option value = 6 > O Enamorado </option>" +
            " <option value = 7 > O Carro </option>" +
            " <option value = 8 > A Justiça </option>" +
            " <option value = 9 > O Eremita </option>" +
            " <option value = 10 > A Roda Da Fortuna </option>" +
            " <option value = 11 > A Força </option>" +
            " <option value = 12 > O Pendurado </option>" +
            " <option value = 13 > A Morte </option>" +
            " <option value = 14 > A Temperança </option>" +
            " <option value = 15 > O Diabo </option>" +
            " <option value = 16 > A Torre </option>" +
            " <option value = 17 > A Estrela </option>" +
            " <option value = 18 > A Lua </option>" +
            " <option value = 19 > O Sol </option>" +
            " <option value = 20 > O Julgamento </option>" +
            " <option value = 21 > O Mundo </option>" +
            " <option value = 22 > Ás de Copas </option>" +
            " <option value = 23 > 2 de Copas </option>" +
            " <option value = 24 > 3 de Copas </option>" +
            " <option value = 25 > 4 de Copas </option>" +
            " <option value = 26 > 5 de Copas </option>" +
            " <option value = 27 > 6 de Copas </option>" +
            " <option value = 28 > 7 de Copas </option>" +
            " <option value = 29 > 8 de Copas </option>" +
            " <option value = 30 > 9 de Copas </option>" +
            " <option value = 31 > 10 de Copas </option>" +
            " <option value = 32 > Rei de Copas </option>" +
            " <option value = 33 > Rainha de Copas </option>" +
            " <option value = 34 > Cavaleiro de Copas </option>" +
            " <option value = 35 > Princesa de Copas </option>" +
            " <option value = 36 > Ás de Ouros </option>" +
            " <option value = 37 > 2 de Ouros </option>" +
            " <option value = 38 > 3 de Ouros </option>" +
            " <option value = 39 > 4 de Ouros </option>" +
            " <option value = 40 > 5 de Ouros </option>" +
            " <option value = 41 > 6 de Ouros </option>" +
            " <option value = 42 > 7 de Ouros </option>" +
            " <option value = 43 > 8 de Ouros </option>" +
            " <option value = 44 > 9 de Ouros </option>" +
            " <option value = 45 > 10 de Ouros </option>" +
            " <option value = 46 > Rei de Ouros </option>" +
            " <option value = 47 > Rainha de Ouros </option>" +
            " <option value = 48 > Cavaleiro de Ouros </option>" +
            " <option value = 49 > Princesa de Ouros </option>" +
            " <option value = 50 > Ás de Espadas </option>" +
            " <option value = 51 > 2 de Espadas </option>" +
            " <option value = 52 > 3 de Espadas </option>" +
            " <option value = 53 > 4 de Espadas </option>" +
            " <option value = 54 > 5 de Espadas </option>" +
            " <option value = 55 > 6 de Espadas </option>" +
            " <option value = 56 > 7 de Espadas </option>" +
            " <option value = 57 > 8 de Espadas </option>" +
            " <option value = 58 > 9 de Espadas </option>" +
            " <option value = 59 > 10 de Espadas </option>" +
            " <option value = 60 > Rei de Espadas </option>" +
            " <option value = 61 > Rainha de Espadas </option>" +
            " <option value = 62 > Cavaleiro de Espadas </option>" +
            " <option value = 63 > Princesa de Espadas </option>" +
            " <option value = 64 > Ás de Paus </option>" +
            " <option value = 65 > 2 de Paus </option>" +
            " <option value = 66 > 3 de Paus </option>" +
            " <option value = 67 > 4 de Paus </option>" +
            " <option value = 68 > 5 de Paus </option>" +
            " <option value = 69 > 6 de Paus </option>" +
            " <option value = 70 > 7 de Paus </option>" +
            " <option value = 71 > 8 de Paus </option>" +
            " <option value = 72 > 9 de Paus </option>" +
            " <option value = 73 > 10 de Paus </option>" +
            " <option value = 74 > Rei de Paus </option>" +
            " <option value = 75 > Rainha de Paus </option>" +
            " <option value = 76 > Cavaleiro de Paus </option>" +
            " <option value = 77 > Princesa de Paus </option>" +
            " </select><br></div>")
    });

}

// ############################################## ONCLICK
function escolha() {
    escondeOpcoes();
    data();
    // questao();
    getPpf();

}

function getPpf() {
    var contMaiores = 0;
    var contPaus = 0;
    var contCopas = 0;
    var contEspadas = 0;
    var contOuros = 0;


    for (let index = 0; index < tiragem.length; index++) {
        var myElements = $("select");
        switch (tiragem[index].aspecto) {
            case 'geral':
                var aplicarAspecto = arcano[myElements[index].value].geral;
                break;
            case 'mental':
                var aplicarAspecto = arcano[myElements[index].value].mental;
                break;
            case 'material':
                var aplicarAspecto = arcano[myElements[index].value].material;
                break;
            case 'espiritual':
                var aplicarAspecto = arcano[myElements[index].value].espiritual;
                break;
            case 'sentimental':
                var aplicarAspecto = arcano[myElements[index].value].sentimental;
                break;
            case 'conselho':
                var aplicarAspecto = arcano[myElements[index].value].conselho;
                break;
            case 'advertencia':
                var aplicarAspecto = arcano[myElements[index].value].advertencia;
                break;
            case 'material+sentimental':
                var aplicarAspecto = "Observando pelo lado sentimental<br>" + arcano[myElements[index].value].sentimental + "<br> Obsevando pelo lado material" + arcano[myElements[index].value].material;
                break;
            default:
                var aplicarAspecto = "#########";
                break;
        }
        if (myElements[index].value <= 21) {
            contMaiores++;
        } else if (myElements[index].value > 21 && myElements[index].value <= 35) {
            contCopas++;
        } else if (myElements[index].value > 35 && myElements[index].value <= 49) {
            contOuros++;
        } else if (myElements[index].value > 49 && myElements[index].value <= 63) {
            contEspadas++;
        } else if (myElements[index].value > 63) {
            contPaus++;
        }
        $("#resumo").before('<div class="leituras" id="arcano' + index + '">' +
            '<h4>' + tiragem[index].posicao + " - " + tiragem[index].nome + '</h4>' +
            "<br>" + tiragem[index].significado +
            " É análisada pelo plano " + tiragem[index].aspecto + "." +
            '<h5>' + arcano[myElements[index].value].numero + " - " + arcano[myElements[index].value].nome + '</h5>' +
            aplicarAspecto +
            '</div>'
        );

    }
    $("#resumo").after('<div id="analise"></div>')

    $("#analise").append(
        '<tr>' +
            '<th class="am" style="width:' + Math.floor((contMaiores * 100) / tiragem.length) + '%;">Maiores</th>' +
            '<th class="ap" style="width:' + Math.floor((contPaus * 100) / tiragem.length) + '%;">Paus</th>' +
            '<th class="ae" style="width:' + Math.floor((contEspadas * 100) / tiragem.length) + '%;">Espadas</th>' +
            '<th class="ao" style="width:' + Math.floor((contOuros * 100) / tiragem.length) + '%;">Ouros</th>' +
            '<th class="ac" style="width:' + Math.floor((contCopas * 100) / tiragem.length) + '%;">Copas</th>' +
            '</tr>' +
            '<tr>' +
            '<td class="am" >' + contMaiores + '</td>' +
            '<td class="ap" >' + contPaus + '</td>' +
            '<td class="ae" >' + contEspadas + '</td>' +
            '<td class="ao" >' + contOuros + '</td>' +
            '<td class="ac" >' + contCopas + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td class="am" >' + Math.floor((contMaiores * 100) / tiragem.length) + '%</td>' +
            '<td class="ap" >' + Math.floor((contPaus * 100) / tiragem.length) + '%</td>' +
            '<td class="ae" >' + Math.floor((contEspadas * 100) / tiragem.length) + '%</td>' +
            '<td class="ao" >' + Math.floor((contOuros * 100) / tiragem.length) + '%</td>' +
            '<td class="ac" >' + Math.floor((contCopas * 100) / tiragem.length) + '%</td>' +
            '</tr>'    )

}

function reset() {
    $(".leituras").remove();
    $("#analise").remove();
    $(".opcoes").show();
    $("#btnEscolha").show();

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
    document.getElementById('pergunta').innerHTML = '<br><b>Nome: </b>' + nome + '<br><b>Data: </b>' + d + '/' +
        m + '/' + a + '<br><b>Questão da pergunta: </b>' + pergunta + '<br><hr>';
}

function escondeOpcoes() {
    $(".leituras").remove();
    $(".opcoes").hide();
    $("#btnEscolha").hide();
}