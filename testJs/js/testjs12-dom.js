// Permet de stocker dans la variable h1 l'élément du 
// DOM qui a pour identité h1
const h1 = document.getElementById("h1");
console.log("h1 : ", h1);

// Création d'un élément du DOM
const h2 = document.createElement("h2");
console.log("h2 : ", h2);

// Ajouter du texte à un élément du DOM
h2.textContent = "Titre de niveau 2";

// ajouter l'élément dans le DOM : ici ajout de h2 en dernier fils de body
window.document.body.appendChild(h2);

// ajout d'un span dans le titre de niveau 1
createAddDomElt("span", "test", h1);
createAddDomElt(
    "h3",
    "Titre de niveau 3",
    document.body,
    { 
        "id": "myh3", 
        "class": "primary red ", 
        "lang": "fr",
        "title": "ceci est un titre" 
    }// objet littéral soit un tableau associatif (clé - valeur) avec la syntaxe JSON
    // un fois que l'on a la clé d'une valeur, pour obtenir la valeur elle même : attributes["id"]
);

console.log("window", window.document);
/**
 * 4 paramètres qui prendront la valeur des arguments passés
 * @param {string} tagname 
 * @param {string} text 
 * @param {DOM Element} parentElt 
 * @param {object} attributes 
 */
function createAddDomElt(tagname, text, parentElt = document.body, attributes) {
    let element = document.createElement(tagname);
    if (text) element.textContent = text;
    parentElt.appendChild(element);
    // Parcours d'un objet littéral avec for ... in
    for(let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }

}

// Sélection d'élemetns du dom avec la méthode querySelector (comprendre requête via des selecteurs css)
/* const body = window.document.body;
const body = document.body; */
const body = document.querySelector("body");

// récupération de plusieurs éléments du DOM sous forme d'un tableau à index
const lis = document.querySelectorAll("ul > li");
console.log("lis", lis);
