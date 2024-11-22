//variável para  armazenar o nome do héroi
let nomeHeroi = "Thor"
//variável para armazenar o xp
let xpHeroi = 9000

// Variável para armazenar o nível do herói
let nivelHeroi = "";

// Estrutura de decisão para determinar o nível do herói com base no XP
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
console.log('Nome do Héroi : ' +nomeHeroi , 'e seu nível é de : ' +nivelHeroi);

