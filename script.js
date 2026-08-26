const flashcards = [
    {
        pergunta: "1. Óptica / Propriedades da luz: Qual é a principal propriedade da luz em relação à sua trajetória em meios homogêneos?",
        resposta: "A luz se propaga em linha reta."
    },
    {
        pergunta: "2. Óptica / Reflexão da luz: O que diz a primeira lei da reflexão?",
        resposta: "O raio incidente, a reta normal e o raio refletido pertencem ao mesmo plano."
    },
    {
        pergunta: "3. Óptica / Espelhos: Como é a imagem formada por um espelho plano?",
        resposta: "É virtual, direta e de tamanho igual ao do objeto."
    },
    {
        pergunta: "4. Óptica / Fenômenos da Luz: O que é o fenômeno da refração da luz?",
        resposta: "É a mudança na velocidade e na direção da luz ao passar de um meio para outro diferente."
    },
    {
        pergunta: "5. Óptica / Lentes: Qual é a principal característica de uma lente convergente?",
        resposta: "Ela é mais espessa no centro do que nas bordas e focaliza os raios de luz em um ponto."
    },
    {
        pergunta: "6. Óptica do corpo humano: Qual parte do olho humano funciona como uma lente natural que foca a luz na retina?",
        resposta: "O cristalino."
    }
];

let indiceAtual = 0;

// Captura segura de referências para evitar o erro de 'null' no console
const elementoPergunta = document.getElementById("pergunta");
const elementoResposta = document.getElementById("resposta");

function atualizarCard() {
    if (elementoPergunta && elementoResposta) {
        elementoPergunta.textContent = flashcards[indiceAtual].pergunta;
        elementoResposta.textContent = flashcards[indiceAtual].resposta;
        elementoResposta.classList.add("escondido"); // Esconde a resposta do novo card carregado
    }
}

function virarCard() {
    if (elementoResposta) {
        elementoResposta.classList.toggle("escondido");
    }
}

function proximoCard(event) {
    if (event) {
        event.stopPropagation(); // Bloqueia o clique propagado para a div pai (.flashcard)
    }
    indiceAtual = (indiceAtual + 1) % flashcards.length;
    atualizarCard();
}

// Inicializa a aplicação quando o DOM estiver completamente pronto
window.addEventListener("DOMContentLoaded", () => {
    atualizarCard();
});