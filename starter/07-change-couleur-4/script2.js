/*
EXERCICE 6 : Change couleur (4) - v2
Quand on clique sur un des boutons radio, la couleur de fond de la page change dans la couleur choisie
Version 2 : une seule fonction qui utilise e.target pour s'adapter au  bouton sur lequel on clique
AJOUT : Quand on clique sur le bouton, la couleur de fond de la page change de manière aléatoire
*/

function color(event) {
    if (event && event.currentTarget.type === "radio") {
        const color = event.currentTarget.value;
        document.body.style.backgroundColor = color;
    } else {
        document.body.style.backgroundColor = `rgb(` + Math.floor(Math.random() * 256) + `,` + Math.floor(Math.random() * 256) + `,` + Math.floor(Math.random() * 256) + `)`;
    }
}

document.getElementById("rouge").addEventListener("click", color);
document.getElementById("bleu").addEventListener("click", color);
document.getElementById("vert").addEventListener("click", color);
document.getElementById("jaune").addEventListener("click", color);
document.getElementById("boutonCouleur").addEventListener("click", color);

/*

document.getElementById("rouge").addEventListener("click", () => {
    document.body.style.backgroundColor= "red";
});
document.getElementById("vert").addEventListener("click", () => {
    document.body.style.backgroundColor= "green";
});
document.getElementById("bleu").addEventListener("click", () => {
    document.body.style.backgroundColor= "blue";
});
document.getElementById("jaune").addEventListener("click", () => {
    document.body.style.backgroundColor= "yellow";
});
document.getElementById("boutonCouleur").addEventListener("click", () => {
    document.body.style.backgroundColor= `rgb(` + Math.floor(Math.random()*256) + `,` + Math.floor(Math.random()*256) + `,` + Math.floor(Math.random()*256) + `)`;
});

*/