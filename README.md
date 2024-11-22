# Desafio-Js
Projeto focado no aprendizado e na replicação de conceitos da linguagem JavaScript
# 🦸 Classificador de Nível de Herói

Este projeto utiliza **JavaScript** para determinar o nível de um herói com base em sua quantidade de experiência (XP). O nível é atribuído por meio de condições que avaliam a faixa de XP fornecida.

---

## 🚀 Funcionalidades

- Classifica o herói em níveis com base no XP:
  - **Ferro**: XP < 1000
  - **Bronze**: 1001 ≤ XP ≤ 2000
  - **Prata**: 2001 ≤ XP ≤ 5000
  - **Ouro**: 5001 ≤ XP ≤ 7000
  - **Platina**: 7001 ≤ XP ≤ 8000
  - **Ascendente**: 8001 ≤ XP ≤ 9000
  - **Imortal**: 9001 ≤ XP ≤ 10000
  - **Radiante**: XP ≥ 10001
- Exibe no console o nome do herói e seu nível.

---

## 📋 Pré-requisitos

- Ambiente de execução de **JavaScript**, como:
  - Navegador (com console aberto) ou
  - **Node.js** instalado na máquina.

---

## 🛠️ Como Usar

1. **Execute o código no ambiente de sua escolha**:
   - No console do navegador ou no terminal utilizando o Node.js.

2. **Exemplo de código:**
   ```javascript
   // Variável para armazenar o nome do herói
   let nomeHeroi = "Ash";

   // Variável para armazenar o XP
   let xpHeroi = 3000;

   // Variável para armazenar o nível do herói
   let nivelHeroi = "";

   // Estrutura de decisão para determinar o nível do herói
   if (xpHeroi < 1000) {
       nivelHeroi = "Ferro";
   } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
       nivelHeroi = "Bronze";
   } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
       nivelHeroi = "Prata";
   } else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
       nivelHeroi = "Ouro";
   } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
       nivelHeroi = "Platina";
   } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
       nivelHeroi = "Ascendente";
   } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
       nivelHeroi = "Imortal";
   } else if (xpHeroi >= 10001) {
       nivelHeroi = "Radiante";
   } else {
       nivelHeroi = "Indefinido";
   }

   // Saída da mensagem final
   console.log('Nome do Herói: ' + nomeHeroi, 'e seu nível é de: ' + nivelHeroi);
