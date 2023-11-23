/* EXERCICE 2 :
- Ajouter un champ texte dans le HTML qui permet à l'utilisateur d'entrer son prénom
- Au clic sur le bouton,
   - Récupérer le prénom (la valeur du champ prénom)
   - Afficher dans une boîte de dialogue le message
       * "Bonjour, … ! " si la personne a bien entré un prénom
       * "Bonjour, toi ! Tu ne veux pas me dire comment tu t'appelles ?" sinon
- Faire 3 versions d'écriture :
   * 1°) avec une fonction nommée
   * 2°) avec une fonction anonyme
   * 3°) avec une arrow fonction et une expression conditionnelle
*/

/*

function direBonjour(prenom){
    if (prenom !== ""){
        alert(`Bonjour, ${prenom} !`);
    }else {
        alert("Bonjour, toi ! Tu ne veux pas me dire comment tu t'appelles ?");
    }
}

function clique(){
    const prenomInput = document.getElementById("prenom");
    const prenom = prenomInput.value;

    direBonjour(prenom);
}

const surname = document.getElementById("hello");

surname.addEventListener("click", clique);

*/

// Autre écriture

/*

const surname = document.getElementById("hello");

surname.addEventListener("click", function () {
    const prenomInput = document.getElementById("prenom");
    const prenom = prenomInput.value;
    if (prenom !== "") {
        alert(`Bonjour, ${prenom} !`);
    } else {
        alert("Bonjour, toi ! Tu ne veux pas me dire comment tu t'appelles ?");
    }
});

*/

// Plus court : écriture ES6 avec expression conditionnelle

const surname = document.getElementById("hello");

surname.addEventListener("click",  () => {
    const prenomInput = document.getElementById("prenom");
    const prenom = prenomInput.value;
    if (prenom !== "") {
        alert(`Bonjour, ${prenom} !`);
    } else {
        alert("Bonjour, toi ! Tu ne veux pas me dire comment tu t'appelles ?");
    }
});