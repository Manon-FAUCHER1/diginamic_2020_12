import Card from "./Card.js";
import CoopDom from "../CoopDom.js";

export default class Column extends CoopDom {
    constructor(title) {
        super();
        this.title = title;
        this.cards = []; 

        // Appel de la méthode qui va afficher la colonne
        this.domElements = this.render();

        // Gestion des événements
        this.domElements.button.onclick = () => {
            console.log("click sur le bouton d'ajout d'une carte");
            console.log("this : ", this);
            this.addCard();
        };
        
    }
    addCard = () => {
        console.log("dans addCard");
        new Card("Question", "Réponse", this); // this représente l'instance de la colonne
    }
    removeCard = (card) => {
        console.log("Dans removeCard");
        card.domElements.article.remove();// supprime l'élément du dom article de la carte
    }
    render = () => {
        // Création  des éléments du DOM grâce à la méthode createAddDomElt héritée de CoopDom
        const section = this.createAddDomElt("section", "", document.getElementById("main"),{"class":"column col-3"});
        const title = this.createAddDomElt("h2", this.title, section);
        const button = this.createAddDomElt("button", "Ajouter une carte", section, {"class":"btn btn-success"});
        const section_cards = this.createAddDomElt("section", "", section ,{"class":"cards"});

        return {
            "section": section,
            "title": title,
            "button": button,
            "section_cards": section_cards
        };
    }
}