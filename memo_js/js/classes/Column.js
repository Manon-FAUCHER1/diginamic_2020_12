import Card from "./Card.js";
import QuestionAnswerForm from "./QuestionAnwerForm.js";
import CoopDom from "./CoopDom.js";

export default class Column extends CoopDom {
    constructor(title, cards) {
        super();
        this.title = title;
        this.cards = cards;      

        // Appel de la méthode qui va afficher la colonne
        this.domElements = this.render();

        // Appel de la méthode qui va afficher les cartes
        this.renderCards();

        this.handleEvents();

    }
    handleEvents = () => {
        // affichage du formulaire au click sur le bouton Ajouter
        // Gestion des événements
        this.domElements.button_add.onclick = () => {
            console.log("click sur le bouton d'ajout d'une carte");
            console.log("this : ", this);
            this.domElements.form_add.setVisibility(true);
        };
    }
    addCard = (question,reponse) => {
        console.log("dans addCard");
        new Card(question, reponse, this); // this représente l'instance de la colonne
    }
    removeCard = (card) => {
        console.log("Dans removeCard");
        card.domElements.article.remove();// supprime l'élément du dom article de la carte
    }
    renderCards = () => {
        // il faut faire en sorte que les cartes contenues dans this.cards
        // génèrent des éléments du dom en passant par la class "Card"
        for(let card of this.cards) {
            new Card(card.question, card.reponse, this);
        }
    }
    render = () => {
        // Création  des éléments du DOM grâce à la méthode createAddDomElt héritée de CoopDom
        const section = this.createAddDomElt("section", "", document.querySelector("#board"),{"class":"column col-3"});
        const title = this.createAddDomElt("h3", this.title, section);
        const button_add = this.createAddDomElt("button", "Ajouter une carte", section, {"class":"btn btn-success"});
        const section_cards = this.createAddDomElt("section", "", section ,{"class":"cards"});

        const form_add_button = { 
            text: "Ajouter",
            clickHandler: (questionValue, answerValue) => {
                this.addCard(questionValue, answerValue);
                this.domElements.form_add.setVisibility(false);
                this.domElements.form_add.clearForm();
                
            }
        }
        const form_add = new QuestionAnswerForm("", "", form_add_button, section);
        form_add.setVisibility(false);
        
        return {
            "section": section,
            "title": title,
            "button_add": button_add,
            "section_cards": section_cards,
            "form_add": form_add
        };
    }
}