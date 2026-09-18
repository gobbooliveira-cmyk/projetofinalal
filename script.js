const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia: um chat que consegue responder todas as dúvidas que uma pessoa pode ter, além de gerar imagens e áudios hiper-realistas. Qual o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início, sentiu um certo receio quanto ao avanço acelerado da IA."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Ficou entusiasmado com as infinitas possibilidades do novo avanço tecnológico."
            }           
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, uma professora de tecnologia da escola pediu um trabalho sobre o uso de tecnologia em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utilizar uma ferramenta de busca com IA para resumir informações e facilitar o entendimento.",
                afirmacao: "Passou a utilizar a inteligência artificial para otimizar pesquisas e estudos do dia a dia."
            },
            {
                texto: "Escrever o trabalho com base em conversas, pesquisas tradicionais e conhecimentos próprios.",
                afirmacao: "Preferiu manter a autonomia no aprendizado sem depender diretamente de ferramentas gerativas."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho, houve um debate sobre como a IA impacta o trabalho do futuro. Como você se posiciona?",
        alternativas: [
            {
                texto: "Preocupo-me com as pessoas que perderão seus empregos para máquinas e defendo a proteção aos trabalhadores.",
                afirmacao: "Manteve uma visão crítica, destacando a necessidade de proteger empregos diante do avanço da automação."
            },
            {
                texto: "Defendo a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "Enxergou a inteligência artificial como uma aliada capaz de expandir a capacidade humana."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design tradicional (como o Paint).",
                afirmacao: "Valorizou o processo criativo autoral ao produzir suas próprias artes manualmente."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Explorou ferramentas gerativas para traduzir ideias visuais rapidamente."
            }
        ]
    },
    {
        enunciado: "Em um trabalho de biologia em grupo, uma pessoa do seu grupo usou IA e o texto ficou idêntico ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "Revisar o trabalho e contribuir com perspectivas pessoais, já que toda máquina pode errar.",
                afirmacao: "Aprendeu a importância da curadoria humana e do pensamento crítico sobre os textos gerados por IA."
            },
            {
                texto: "Manter o texto gerado, pois escrever comandos para o chat já é uma forma de contribuição.",
                afirmacao: "Acreditou que a mediação via comandos já é o suficiente para a autoria de um projeto."
            }
        ]
    },
    {
        enunciado: "Teen Wolf: Quem morde Scott McCall no primeiro episódio, transformando-o em lobisomem?",
        alternativas: [
            {
                texto: "Peter Hale.",
                afirmacao: "E provou que domina a cultura pop lembrando exatamente quem foi o Alfa original em Teen Wolf!"
            },
            {
                texto: "Malia Tate.",
                afirmacao: "E fechou o percurso com um palpite curioso sobre o universo dos lobisomens."
            }
        ]
    }
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();