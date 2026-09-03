#  Flashcards de Óptica — Projeto Escolar 

Eae galera, beleza? Meu nome é Maria e esse aqui é o meu projeto de física/óptica pra escola. Eu não manjo quase nada de programação (sério, passei muita raiva fazendo isso dar certo ), mas com um monte de erro e quebrando a cabeça o negócio finalmente tá funcionando de verdade!!

O projeto basicamente é um jogo de flashcards (aqueles cartões de memória que você vira pra ver a resposta) pra ajudar a estudar pra prova de Óptica.

---

##  O que essa parada faz?
* **Perguntas Teóricas:** Tem perguntas sobre reflexão da luz, lentes, espelhos e olho humano.
* **Projetos com Arduino:** Tem cards sobre experimentos práticos (sensor de fumaça, LDR, servo motor e laser).
* **Efeito 3D:** Você clica no cartão e ele vira com um efeito 3D muito top pra te mostrar a resposta!
* **Imagens nos Cards:** Consegui fazer algumas imagens dos experimentos aparecerem na frente do cartão (deu um trabalho desgraçado porque a imagem sumia pro fundo do nada kkkkk, mas consertei!).
* **Botão Próximo:** Um botão que vai passando os cartões até o final e depois recomeça do zero de forma automática.

---

##  O que eu usei pra fazer (o que deu pra aprender kkk)
* **HTML5:** O esqueleto de tudo. Usei umas tags com nome esquisito tipo `<article>`, `<section>` e a famosa `<img>` pra enfiar as fotos lá.
* **CSS3:** Onde passei 80% do meu tempo chorando kkkk. É o que deixa o site bonito, bota as cores (usei tons de marrom/bege porque achei estético) e faz o cartão girar usando umas paradas de `perspective` e `rotateY`.
* **JavaScript:** A lógica do negócio. Tem uma lista gigante chamada `flashcards` com todas as perguntas, e funções que mudam o texto e a imagem na tela sozinhos.
---

## Perrengues que passei (pra eu nunca mais esquecer)
* **A vírgula esquecida:** O código inteiro parou de rodar uma hora porque esqueci de colocar uma `,` separando o cartão 6 do cartão 7. Fiquei mó tempão caçando o erro.
* **O ID fantasma:** Eu estava tentando buscar o id `imagem-resposta` no JavaScript, mas no meu HTML eu tinha escrito `imagem-pergunta`. O computador não adivinha né.
* **A imagem que sumia:** O cartão girava e a imagem ia pro limbo de trás do fundo branco. Tive que aprender a usar um tal de `transform-style: preserve-3d` no CSS pra consertar esse bug.
