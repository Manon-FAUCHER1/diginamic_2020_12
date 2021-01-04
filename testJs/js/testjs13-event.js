// Récupération de l'objet du dom qui sera à la source de l'événement
const button_add = document.querySelector("#add-p");

// Ajout d'un "event listener" sur button_add
button_add.onclick = function() {
    createAddDomElt("p","Lorem ipsum", document.querySelector("#paragraphes"));
}

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