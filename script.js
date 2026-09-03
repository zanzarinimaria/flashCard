const flashcards = [
    {
        pergunta: "1. Óptica / Propriedades da luz: Qual é a principal propriedade da luz em relação à sua trajetória em meios homogêneos?",
        resposta: "A luz se propaga em linha reta.",
        imagem: null
    },
    {
        pergunta: "2. Óptica / Reflexão da luz: O que diz a primeira lei da reflexão?",
        resposta: "O raio incidente, a reta normal e o raio refletido pertencem ao mesmo plano.",
        imagem: null
    },
    {
        pergunta: "3. Óptica / Espelhos: Como é a imagem formada por um espelho plano?",
        resposta: "É virtual, direta e de tamanho igual ao do objeto.",
        imagem: null
    },
    {
        pergunta: "4. Óptica / Fenômenos da Luz: O que é o fenômeno da refração da luz?",
        resposta: "É a mudança na velocidade e na direção da luz ao passar de um meio para outro diferente.",
        imagem: null
    },
    {
        pergunta: "5. Óptica / Lentes: Qual é a principal característica de uma lente convergente?",
        resposta: "Ela é mais espessa no centro do que nas bordas e focaliza os raios de luz em um ponto.",
        imagem: null
    },
    {
        pergunta: "6. Óptica do corpo humano: Qual parte do olho humano funciona como uma lente natural que foca a luz na retina?",
        resposta: "O cristalino.",
        imagem: null
    }
    {
    pergunta: "7. Experimento / Sensor de Gás e Fumaça",
    resposta: "É um sistema automático de alarme de incêndio que usa um Arduino Uno conectado a um sensor MQ-2 para monitorar constantemente a qualidade do ar. Enquanto o ambiente está seguro, o sistema mantém um LED verde aceso, mas ao detectar níveis perigosos de fumaça ou gás, o microcontrolador aciona um LED vermelho e um alarme sonoro no buzzer para alertar sobre o perigo.",
    imagem: "img/img_2.jpg" 
    },
    {
    pergunta: "8. Experimento / LDR e servo motor",
    resposta: "É um sistema automático de rastreamento de luz que usa sensores LDR para medir a claridade do ambiente e um microcontrolador Arduino para processar essas leituras. Quando a luz muda de posição, o Arduino aciona um servo motor para girar e alinhar a estrutura diretamente em direção à fonte mais luminosa, uma técnica muito usada para otimizar painéis solares.",
    imagem: "img/img_3.jpg" 
    },
    {
    pergunta: "9. Experimento / Laser de Fenda Dupla e Única",
    resposta: "É um experimento de óptica que demonstra o comportamento da luz. Ao passar por uma fenda, o feixe de laser sofre difração e se espalha. Ao passar por duas fendas, as ondas de luz se cruzam e geram interferência, criando um padrão de faixas claras e escuras. O Arduino pode ser usado com sensores de luz (LDRs) para medir a intensidade dessas faixas automaticamente.",
    imagem: "img/img_1.jpg"
    }
];

let indiceAtual = 0;

const elementoPergunta = document.getElementById("pergunta");
const elementoResposta = document.getElementById("resposta");
const elementoImagem = document.getElementById("imagem-resposta");

function atualizarCard() {
    if (elementoPergunta && elementoResposta) {
        elementoPergunta.textContent = flashcards[indiceAtual].pergunta;
        elementoResposta.textContent = flashcards[indiceAtual].resposta;
        
        // Exibe ou oculta a imagem dependendo do card
        if (flashcards[indiceAtual].imagem && elementoImagem) {
            elementoImagem.src = flashcards[indiceAtual].imagem;
            elementoImagem.style.display = "block";
        } else if (elementoImagem) {
            elementoImagem.src = "";
            elementoImagem.style.display = "none";
        }
    }
}

function virarCard() {
    if (elementoResposta) {
        elementoResposta.classList.toggle("escondido");
    }
}

function proximoCard(event) {
    if (event) {
        event.stopPropagation();
    }
    indiceAtual = (indiceAtual + 1) % flashcards.length;
    atualizarCard();
}

window.addEventListener("DOMContentLoaded", () => {
    atualizarCard();
});