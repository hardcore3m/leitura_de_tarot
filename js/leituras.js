var leituras = [{
        leitura: "Carta Simples",
        sigla: "csimples.html",
        perguntas: "Questões em geral",
        descricao: "Sorteie uma carta tendo em mente um determinado tema. O método permite uma vasta possibilidade de interpretações, que podem ser evidentes ou não no momento da consulta.",
        geral: true,
        espiritual: false,
        amor: false,
        material: false,
        direcionamento: false,
        tiragem: [{
            posicao: 'Casa I',
            nome: 'Carta Única',
            significado: 'Uma carta quando é necessário um sentido mais abrangente para uma questão',
            aspecto: 'geral'
        }, ],
    },
    {
        leitura: "Passado, Presente e Futuro",
        sigla: "ppf.html",
        perguntas: "",
        descricao: "Escolha esse método para questoẽs que podem ser respondidas com o que causou a questão, em que estado está a questão e em caminho provavelmente ela seguirá.",
        geral: true,
        espiritual: false,
        amor: false,
        material: false,
        direcionamento: true,
        tiragem: [{
                posicao: 'Casa I',
                nome: 'Passado',
                significado: 'Suas influências do passado. O que lhe trouxe até este momento',
                aspecto: 'geral'
            },
            {
                posicao: 'Casa II',
                nome: 'Presente',
                significado: 'O agora, as energias atuantes nesse momento',
                aspecto: 'geral'
            },
            {
                posicao: 'Casa III',
                nome: 'Futuro',
                significado: 'O que é mais provável de acontecer nestas circunstâncias',
                aspecto: 'geral'
            },
        ]
    },
    {
        leitura: "O Caminho",
        sigla: "caminho.html",
        perguntas: "",
        descricao: "Este método consiste em mostrar o tema envolvido, o comportamento até o momento e como se comportar no futuro. Indicado para se descobrir quais as mais prováveis possibilidades para se atingir uma meta.",
        geral: true,
        espiritual: true,
        amor: false,
        material: true,
        direcionamento: true,
        tiragem:[{
            posicao: 'I',
            nome: 'Assunto',
            significado: 'As chances e os riscos envolvidos na pergunta.',
            aspecto: 'casa1'
        },
        {
            posicao: 'II',
            nome: 'Postura consciente',
            significado: 'O que está na cabeça: Pensamentos, motivações racionais, intenções etc.',
            aspecto: 'casa2'
        },
        {
            posicao: 'III',
            nome: 'Postura inconsciente',
            significado: 'O que está no nosso coração: Desejos, saudades e temores.',
            aspecto: 'casa3'
        },
        {
            posicao: 'IV',
            nome: 'Postura exterior',
            significado: 'A nossa apresentação e nossa aparência<',
            aspecto: 'casa4'
        },
        {
            posicao: 'V',
            nome: 'Proposta para o consciente',
            significado: 'Proposta para o modo de agir racional, como devemos agir no futuro',
            aspecto: 'casa5'
        },
        {
            posicao: 'VI',
            nome: 'Proposta para o inconsciente',
            significado: 'Proposta para o modo de analizar emocionalmente, como devemos abordar no futuro',
            aspecto: 'casa6'
        },
        {
            posicao: 'VII',
            nome: 'Proposta para a apresentação',
            significado: 'Assim nós devemos nos apresentar, como construir e apresentar a própria imagem',
            aspecto: 'casa7'
        },
    ]
    },
    {
        leitura: "Cruz Celta",
        sigla: "celta.html",
        perguntas: "",
        descricao: "Método de leitura universal. Excelente para compreender o desenvolvimento de uma acontecimento ou assunto.",
        geral: true,
        espiritual: false,
        amor: false,
        material: false,
        direcionamento: true,
        tiragem:[{
            posicao: 'I',
            nome: 'Situação Inicial',
            significado: 'De onde parte a questão.',
            aspecto: 'geral'
        },
        {
            posicao: 'II',
            nome: 'Influência da questão',
            significado: 'O impulso seguinte, o que ajuda ou atrapalha a situação.',
            aspecto: 'geral'
        },
        {
            posicao: 'III',
            nome: 'O Consciente',
            significado: 'O que é visto, reconhecido ou anseado com clareza.',
            aspecto: 'geral'
        },
        {
            posicao: 'IV',
            nome: 'O Inconsciente',
            significado: 'O que é influente na questão, mas não é observado por ninguém.',
            aspecto: 'geral'
        },
        {
            posicao: 'V',
            nome: 'Causa da questão',
            significado: 'O passado, o que trouxe até a questão.',
            aspecto: 'geral'
        },
        {
            posicao: 'VI',
            nome: 'Futuro da questão',
            significado: 'O futuro a curto prazo, o próximo passo.',
            aspecto: 'geral'
        },
        {
            posicao: 'VII',
            nome: 'Postura',
            significado: 'Como você vê a questão.',
            aspecto: 'geral'
        },
        {
            posicao: 'VIII',
            nome: 'Ambiente',
            significado: 'Como fontes externas influenciam a situação',
            aspecto: 'geral'
        },
        {
            posicao: 'IX',
            nome: 'Esperanças e temores',
            significado: 'Quais são os fatos que nos trazem receio ou conforto na situação',
            aspecto: 'geral'
        },
        {
            posicao: 'X',
            nome: 'Resultado',
            significado: 'O futuro a longo prazo, o desfecho da situação',
            aspecto: 'geral'
        },
    ]
    },
    {
        leitura: "A Cruz",
        sigla: "cruz.html",
        perguntas: "",
        descricao: "Este método consiste em avaliar uma situação. Forncendo sugestões e tendências no decorrer dos acontecimentos. Uma mensagem curta que aponta para uma direção valiosa.",
        geral: true,
        espiritual: false,
        amor: false,
        material: false,
        direcionamento: true,
        tiragem:[{
            posicao: 'Posição I',
            nome: 'Assunto em questão',
            significado: '',
            aspecto: 'geral'
        },
        {
            posicao: 'Posição II',
            nome: 'Como <b>não</b> agir frente a situação',
            significado: '',
            aspecto: 'advertencia'
        },
        {
            posicao: 'Posição III',
            nome: 'Como agir frente a situação',
            significado: '',
            aspecto: 'conselho'
        },
        {
            posicao: 'Posição IV',
            nome: 'Propósito da situação',
            significado: '',
            aspecto: 'geral'
        },
    ]
    },
    {
        leitura: "Jogo da Decisão",
        sigla: "decisao.html",
        perguntas: "",
        descricao: "Método de leitura universal. Excelente para compreender o desenvolvimento de uma acontecimento ou assunto.",
        geral: true,
        espiritual: false,
        amor: false,
        material: false,
        direcionamento: true,
        tiragem:[{
            posicao: 'I',
            nome: 'Posicionamento adotado',
            significado: 'Posicionamento adotado | Figuração do contexto.',
            aspecto: 'geral'
        },
        {
            posicao: 'II',
            nome: 'Afirmação em curto prazo ',
            significado: 'Caso <b>Faça</b>, situação em um curto prazo.',
            aspecto: 'geral'
        },
        {
            posicao: 'III',
            nome: 'Afirmação em médio prazo',
            significado: 'Caso <b>Faça</b>, situação em um médio prazo',
            aspecto: 'geral'
        },
        {
            posicao: 'IV',
            nome: 'Afirmação em médio prazo',
            significado: 'Caso <b>Faça</b>, situação em um longo prazo',
            aspecto: 'geral'
        },
        {
            posicao: 'V',
            nome: 'Negação em curto prazo',
            significado: 'Caso <b>Não Faça</b>, situação em um curto prazo</h4>',
            aspecto: 'geral'
        },
        {
            posicao: 'VI',
            nome: 'Negação em médio prazo',
            significado: 'Caso <b>Não Faça</b>, situação em um médio prazo</h4>',
            aspecto: 'geral'
        },
        {
            posicao: 'VII',
            nome: 'Negação em longo prazo',
            significado: 'Caso <b>Não Faça</b>, situação em um longo prazo</h4>',
            aspecto: 'geral'
        },
        {
            posicao: 'VIII',
            nome: 'Ambiente',
            significado: 'Como fontes externas influenciam a situação',
            aspecto: 'geral'
        },
        {
            posicao: 'IX',
            nome: 'Esperanças e temores',
            significado: 'Quais são os fatos que nos trazem receio ou conforto na situação',
            aspecto: 'geral'
        },
        {
            posicao: 'X',
            nome: 'Resultado',
            significado: 'O futuro a longo prazo, o desfecho da situação',
            aspecto: 'geral'
        },
    ]
    },
    {
        leitura: "Janela de johari",
        sigla: "johari.html",
        perguntas: "",
        descricao: "Também conhecido como <b><i>Ponto Cego</i></b>, este método consiste em avaliar aspectos da nossa personalidade e nos indica o quão divergente está a nossa percepção do nós mesmos da visão que os outros tem de nós. Ótimo para autoconhecimento e possíveis dificuldades em enxergar a si mesmo.",
        geral: true,
        espiritual: true,
        amor: false,
        material: false,
        direcionamento: true,
        tiragem:[{
            posicao: 'Casa I',
            nome: 'Identidade inequívoca',
            significado: 'O que é claro sobre o nosso respeito.',
            aspecto: 'geral'
        },
        {
            posicao: 'Casa II',
            nome: 'Ponto Cego',
            significado: 'Comportamentos que outras pessoas percebem em nós, mas nós não os enxergamos.',
            aspecto: 'geral'
        },
        {
            posicao: 'Casa III',
            nome: 'Sombra',
            significado: 'Comportamentos que reconhecemos em nós, mas ocultamos dos outros.',
            aspecto: 'geral'
        },
        {
            posicao: 'Casa IV',
            nome: 'Grande Incógnita',
            significado: 'Aspectos ou forças inconscientes, que influenciam, mas que são despercebidas por nós e pelos outros.',
            aspecto: 'geral'
        },
    ]
    },
    {
        leitura: "Mandala Astrológica",
        sigla: "mandala.html",
        perguntas: "",
        descricao: "Método baseado no círculo de signos astrológicos para uma avaliação abrangente do estado que estamos e as perspectivas futuras",
        geral: true,
        espiritual: true,
        amor: false,
        material: false,
        direcionamento: true,
        tiragem:[{
            posicao: 'Casa I',
            nome: 'Foco',
            significado: 'Regida pelo signo de Áries. Simboliza o estado de espírito do consulente, o seu direcionamento e o foco de sua iniciativa.\n' +
                'É importante, pois determinará como as cartas nas outras posições serão percebidas',
            aspecto: 'geral'
        },
        {
            posicao: 'Casa II',
            nome: 'Dinheiro',
            significado: 'Regida pelo signo de Touro. Como está a sua situação financeira? Como seu dinheiro anda circulando',
            aspecto: 'material'
        },
        {
            posicao: 'Casa III',
            nome: 'Comunicação',
            significado: 'Regida pelo signo de Gêmeos. Como você anda se comunicando atualmente?',
            aspecto: 'mental'
        },
        {
            posicao: 'Casa IV',
            nome: 'Lar',
            significado: 'Regida pelo signo de Câncer. Seu ambiente de descanso, sua moradia',
            aspecto: 'material+sentimental'
        },
        {
            posicao: 'Casa V',
            nome: 'Lazer e afetividade',
            significado: 'Regida pelo signo de Leão. Simboliza tudo que lhe dá prazer, tudo o que faz para se divertir. Onde você se sente tranquilidade espressando seus sentimentos',
            aspecto: 'sentimental'
        },
        {
            posicao: 'Casa VI',
            nome: 'Rotina e trabalho',
            significado: 'Regida pelo signo de Virgem. Como anda o dia-a-dia, a sua rotina profissional?',
            aspecto: 'material'
        },
        {
            posicao: 'Casa VII',
            nome: 'Relacionamento',
            significado: 'Regida pelo signo de Libra. Como anda seu relacionamento fixo ou a disposição para um novo?',
            aspecto: 'sentimental'
        },
        {
            posicao: 'Casa VIII',
            nome: 'Inconsciente',
            significado: 'Regida pelo signo de Escorpião. O nosso lado oculto, o que não dizemos a ninguém',
            aspecto: 'sentimental'
        },
        {
            posicao: 'Casa IX',
            nome: 'Comunicação',
            significado: 'Regida pelo signo de Sagitário. Todas as suas espectativas a longo prazo: Viagens, estudos, carrera, família etc.',
            aspecto: 'mental'
        },
        {
            posicao: 'Casa X',
            nome: 'Realizações',
            significado: 'Regida pelo signo de Capricórnio. Qual o seu poder para realizar objetivos? Qual a sua atitude frente a eles?',
            aspecto: 'material'
        },
        {
            posicao: 'Casa XI',
            nome: 'Social',
            significado: 'Regida pelo signo de Aquário. Sua reação frente ao ambiente, aos amigos próximos',
            aspecto: 'mental'
        },
        {
            posicao: 'Casa XII',
            nome: 'Desafio',
            significado: 'Regida pelo signo de Peixes.Seus aspectos a serem superados. Seu carma a curto prazo.',
            aspecto: 'conselho'
        },

    ]
    },
    {
        leitura: "Prós e Contras",
        sigla: "pec.html",
        perguntas: "",
        descricao: "Escolha esse método para questoẽs que podem ser respondidas com o que fazer e o que não fazer, ou sobre o ponto positivo e o ponto negativo de alguma questão",
        geral: true,
        espiritual: true,
        amor: true,
        material: true,
        direcionamento: true,
        tiragem:[{
            posicao: 'Casa I',
            nome: 'Pŕos',
            significado: 'Circunstâncias favoráveis a sua intenção',
            aspecto: 'geral'
        },
        {
            posicao: 'Casa II',
            nome: 'Contras',
            significado: 'Circunstâncias opositoras a sua intenção',
            aspecto: 'geral'
        },
    ]
    },
    {
        leitura: "Próximo Passo",
        sigla: "proximopasso.html",
        perguntas: "",
        descricao: "Este método apresenta uma solução a curto prazo para uma situação, o que deve ser feito em seguida. É Semelhante ao método da cruz, mas voltado para interpretações mais objetivas",
        geral: true,
        espiritual: true,
        amor: false,
        material: true,
        direcionamento: true,
        tiragem:[{
            posicao: 'I',
            nome: 'Assunto em questão',
            significado: 'A influência principal da questão, as energias que mais influenciam o entorno da questão',
            aspecto: 'geral'
        },
        {
            posicao: 'II',
            nome: 'Postura obscura',
            significado: 'Como <b>não</b> agir frente a situação',
            aspecto: 'advertencia'
        },   
        {
            posicao: 'III',
            nome: 'Postura edificante',
            significado: 'Como agir frente a situação',
            aspecto: 'conselho'
        },   
        {
            posicao: 'IV',
            nome: 'Propósito da situação',
            significado: 'Qual o maior ganho com o desenvolvimento da questão',
            aspecto: 'geral'
        },               
    ]
    },
    {
        leitura: "Leitura Diária",
        sigla: "diaria.html",
        perguntas: "",
        descricao: "Para entender seus pensamentos, sentimentos e ações diárias",
        geral: true,
        espiritual: false,
        amor: false,
        material: false,
        direcionamento: true,
        tiragem:[{
            posicao: 'Casa I',
            nome: 'Pensamento',
            significado: 'Que coisas estão em sua mente? O que você está pensando muito hoje?',
            aspecto: 'geral'
        },
        {
            posicao: 'Casa II',
            nome: 'Sentimento',
            significado: 'Como estão suas emoções hoje? Qual é o sentimento dominante hoje?',
            aspecto: 'geral'
        },
        {
            posicao: 'Casa III',
            nome: 'Ação',
            significado: 'Em que tarefas você está focado em realizar hoje?',
            aspecto: 'geral'
        },
    ]
    },
    {
        leitura: "",
        sigla: "",
        perguntas: "",
        descricao: "",
        geral: false,
        espiritual: false,
        amor: false,
        material: false,
        direcionamento: false,
    },
]
// console.table(leituras[0].tiragem);
// console.log(leituras[0].tiragem.length);
// for (let j = 0; j < leituras[1].tiragem.length; j++) {
//     console.table(leituras[1].tiragem[j]);
// console.log(leituras[1].tiragem[j].nome);
// }