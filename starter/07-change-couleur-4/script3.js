/*
EXERCICE 6 : Change couleur (4) - v3
Quand on clique sur un des boutons radio, la couleur de fond de la page change dans la couleur choisie
Version 3 : version 2 + on parcourt les boutons avec une boucle foreach pour leur ajouter leur addEventListener
*/

function color(event) {
    if (event && event.currentTarget.type === "radio") {
        const color = event.currentTarget.value;
        document.body.style.backgroundColor = color;
    } else {
        document.body.style.backgroundColor = `rgb(` + Math.floor(Math.random() * 256) + `,` + Math.floor(Math.random() * 256) + `,` + Math.floor(Math.random() * 256) + `)`;
    }
}

const buttons = document.querySelectorAll("input");
buttons.forEach(function (button) {
    button.addEventListener("click", color);
});

const colors = document.getElementById("boutonCouleur");
colors.addEventListener("click", color);