/*
SOURCE : https://github.com/oc-courses/javascript-web/tree/gh-pages/chapitre_5/js
*/
/*
EXERCICE 5 : Change couleur (2) - Colorie la page en fonction des touches pressées
- Change la couleur de fond du body lorsque l'utilisateur appuie sur une des touches
    R (rouge), J (jaune), V (vert) ou B (bleu),
    que ce soit en minuscules ou en majuscules
    et affiche le message 'Touche … non gérée' s'il presse une autre touche.
- Méthode : utilise un switch pour gérer les différents cas de touches
*/

function keybordEvent(event){
    const touche = event.key.toLowerCase();
    /*

    if (event.key === "r"){
        document.body.style.backgroundColor = "red";
    }
    if (event.key === "j"){
        document.body.style.backgroundColor = "yellow";
    }
    if (event.key === "v"){
        document.body.style.backgroundColor = "green";
    }
    if (event.key === "b"){
        document.body.style.backgroundColor = "blue";
    }

     */
    switch (touche){
        case "r":
            document.body.style.backgroundColor= "red";
            break;
        case "j":
            document.body.style.backgroundColor= "yellow";
            break;
        case "v":
            document.body.style.backgroundColor= "green";
            break;
        case "b":
            document.body.style.backgroundColor= "blue";
            break;
        default:
            alert(`Touche ${touche} non gérée`);
    }
}

document.addEventListener("keydown", keybordEvent);


/* 
N.B. La méthode de récupération de la touche pressée dans le tutoriel est dépréciée et plus compliquée (on récupère le code de la touche et puis il faut encore y appliquer une fonction pour transformer ce code en lettre) :
var touche = String.fromCharCode(e.charCode); // Récupération de la touche pressée
touche = touche.toUpperCase(); // Pour gérer indifféremment minuscules et majuscules
 => il existe une méthode plus directe, voir documentation : 
 https://developer.mozilla.org/fr/docs/Web/API/KeyboardEvent
*/