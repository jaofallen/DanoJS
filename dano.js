const atacante = prompt("Qual é o nome do personagem atacante?");
const pa = prompt("Qual seu poder de ataque ?");
const defensor = prompt("Qual é o nome do personagem defensor?");
let pontosVida = prompt("Quantos pontos de vida ele possui?");
const pd = prompt("Qual é o seu poder de defesa?");
const escudo = confirm("O defensor possui um escudo? (Sim/Não)");

let danoCausado = 0;

if (pa > pd && escudo === false) {
  danoCausado = pa - pd;
} else if (pa > pd && escudo === true) {
  danoCausado = (pa - pd) / 2;
}

pontosVida -= danoCausado;

alert(atacante + " causou " + danoCausado + " pontos de vida em " + defensor);
alert(
  atacante +
    "\nPoder de ataque: " +
    pa +
    "\n\n" +
    defensor +
    "\nPontos de vida: " +
    pontosVida +
    "\nPoder de defesa: " +
    pd +
    "\nPossui escudo: " +
    escudo
);
