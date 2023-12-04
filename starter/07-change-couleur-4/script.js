/*
EXERCICE 6 : Change couleur (4) - v1
Quand on clique sur un des boutons radio, la couleur de fond de la page change dans la couleur choisie
Version 1  : une fonction par bouton radio
	À faire après pour préparer la version 2 : 
		(1) un alert dans une fonction pour voir à quoi correspond e.target
		(2) un alert dans chaque fonction pour voir à quoi correspond e.target.value
*/

const red = document.getElementById("rouge");
const green = document.getElementById("vert");
const blue = document.getElementById("bleu");
const yellow = document.getElementById("jaune");
const random = document.getElementById("boutonCouleur");
red.addEventListener("click", (event) =>{
    document.body.style.backgroundColor = "rgba(250,50,50,.50)";
    alert(event.currentTarget);
})
green.addEventListener("click", (event) =>{
    document.body.style.backgroundColor = "rgba(50,250,50,.30)";
    alert(event.currentTarget.value);
})
blue.addEventListener("click", (event) =>{
    document.body.style.backgroundColor = "rgba(50,220,250,.50)";
})
yellow.addEventListener("click", (event) =>{
    document.body.style.backgroundColor = "rgba(250,250,50,.40)";
})
random.addEventListener("click", (event) =>{
    document.body.style.backgroundColor = `rgb(` + Math.floor(Math.random() * 256) + `,` + Math.floor(Math.random() * 256) + `,` + Math.floor(Math.random() * 256) + `)`;
})

console.log(Math.floor(Math.random()*255)+1);
//document.body.style.backgroundColor = "rgba(200,250,250,.40)";

/*

const couleur = {
    red: document.getElementById("rouge"),
    green: document.getElementById("vert"),
    blue: document.getElementById("bleu"),
    yellow: document.getElementById("jaune")
}

*/