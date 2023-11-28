/*
SOURCE : https://github.com/oc-courses/javascript-web/tree/gh-pages/chapitre_5/js
*/

/*
EXERCICE 5bis : Change couleur (2) - Colorie la page en fonction des touches pressées
- Change la couleur de fond du body lorsque l'utilisateur appuie sur une des touches
    R (rouge), J (jaune), V (vert) ou B (bleu),
    que ce soit en minuscules ou en majuscules
    et affiche le message 'Touche … non gérée' s'il presse une autre touche.
- Méthode : Cette fois, JS ne fait qu'appliquer une classe sur le body, c'est CSS qui se charge de le styler.
- PRESSÉ ? : tu peux repartir du code de la version précédente, il n'y a qu'une modification mineure à opérer.
*/

function keyboardEvent(event) {
    const touche = event.key.toLowerCase();

    //document.body.classList.remove("red", "yellow", "green", "blue");
    document.body.classList.remove(...document.body.classList);

    switch (touche) {
        case "r":
            document.body.classList.add("red");
            break;
        case "j":
            document.body.classList.add("yellow");
            break;
        case "v":
            document.body.classList.add("green");
            break;
        case "b":
            document.body.classList.add("blue");
            break;
        default:
            alert(`Touche ${touche} non gérée`);
    }
}

document.addEventListener("keydown", keyboardEvent);
