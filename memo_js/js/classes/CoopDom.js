export default class CoopDom {
    /**
     * 4 paramètres qui prendront la valeur des arguments passés
     * @param {string} tagname 
     * @param {string} text 
     * @param {DOM Element} parentElt 
     * @param {object} attributes 
     */
    createAddDomElt = function (tagname, text, parentElt = document.body, attributes) {
        let element = document.createElement(tagname);
        if (text) element.textContent = text;
        parentElt.appendChild(element);
        // Parcours d'un objet littéral avec for ... in
        for (let key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
        return element; // retourne une référence à l'élément du DOM
    }
}