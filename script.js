const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
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
        enunciado: "TeenWolf: Quem foi o lobisomem alfa que mordeu Scott McCall na primeira temporada, transformando-o?",
        alternativas: [
            {
                texto: "Peter Hale.",
                afirmacao: "Demonstrou conhecer bem a história de Teen Wolf lembrando do Alfa original!"
            },
            {
                texto: "Malia Tate.",
                afirmacao: "Acabou confundindo os personagens da série Teen Wolf."
            }
        ]
    },
    {
        enunciado: "TeenWolf: Qual é a verdadeira natureza sobrenatural de Lydia Martin?",
        alternativas: [
            {
                texto: "Kitsune.",
                afirmacao: "Confundiu as criaturas sobrenaturais de Teen Wolf."
            },
            {
                texto: "Banshee.",
                afirmacao: "Acertou em cheio a verdadeira natureza de Lydia Martin em Teen Wolf!"
            }
        ]
    }
];