/* EXERCICE 10 :
Au focus sur le champ, vide-le et change sa couleur de fond. Lorsqu'on clique en dehors, sa couleur de fond redevient transparente.
- VERSION 1 :
	Ne le fais que pour le champ prénom
- VERSION 2 :
	Fais-le pour le champ prénom et pour le champ nom séparément avec des fonctions différentes
- VERSION 3 :
	Fais-le de manière générique avec une seule fonction qui peut s'adapter au champ sur lequel on l'applique et associe cette fonction à tous les champs texte de la page en parcourant ceux-ci avec une boucle for.
*/

// Un seul champ

/*
const changeInput = {
    init(){
        document.querySelectorAll("input[type=text]").forEach((input) => {
            input.addEventListener("focus", (event) => {
                event.currentTarget.style.backgroundColor = "red";
                event.currentTarget.value = "";
            });
            input.addEventListener("blur", (event) => {
                event.currentTarget.style.backgroundColor = "white";
            });
        })
    }
}

changeInput.init();

*/

const changeInput = {
    inputValues: document.querySelectorAll("input[type=text]"),
    focusColor: "red",
    blurColor: "white",
    init() {
        this.addEventListeners();
    },
    addEventListeners() {
        for (const inputValue of this.inputValues) {
            inputValue.addEventListener("focus", this.focus);
            inputValue.addEventListener("blur", this.blur);
        }
    },
    focus(event) {
        //console.log(this);
        event.currentTarget.style.backgroundColor = this.focusColor;
        event.currentTarget.value = "";
    },
    blur(event) {
        //console.log(this);
        event.currentTarget.style.backgroundColor = this.blurColor;
    }
}

changeInput.init();

// Deux champs


// Plusieurs champs