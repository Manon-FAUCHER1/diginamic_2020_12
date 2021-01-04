import Card from "./Card.js";
import CoopDom from "../CoopDom.js";

export default class Column extends CoopDom {
    constructor(title, cards,) {
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
            this.domElements.form_add.hidden = false;

        };


        // gestion de la soumission du formulaire de modification
        this.domElements.form_add.onsubmit = (event) => {
            console.log("Gestion de la soumission du formulaire d'ajout'");
            event.preventDefault();

            // Récupération des nouvelles valeurs
            const new_question_add = this.domElements.input_question_add.value;
            const new_answer_add = this.domElements.input_answer_add.value;

            // Modification à la fois des propriétés question et answer
            // mais aussi des éléments du dom correspondant
            
            this.domElements.input_question_add.textContent = new_question_add;
            this.domElements.input_answer_add.textContent = new_answer_add;

            // on cache le formulaire
            this.addCard(new_question_add, new_answer_add);
            this.domElements.form_add.hidden = true;
        }

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

        // création du formulaire
        const form_add = this.createAddDomElt(
            "form",
            "",
            section
        );
        const label_question_add = this.createAddDomElt(
            "label",
            "Question",
            form_add
        );
        const input_question_add = this.createAddDomElt(
            "input",
            "",
            form_add,
            {"type": "text", "value": "", "class": "form-control"}
        );
        const label_answer_add = this.createAddDomElt(
            "label",
            "Réponse",
            form_add
        );
        const input_answer_add = this.createAddDomElt(
            "input",
            "",
            form_add,
            {"type": "text", "value": "", "class": "form-control"}
        );
        const button_submit_add = this.createAddDomElt(
            "input",
            "",
            form_add,
            {"type": "submit", "value": "Ajouter", "class": "btn btn-primary mt-3 mb-3"}
        );
        // on cache le formulaire
        form_add.hidden = true;
        

        return {
            "section": section,
            "title": title,
            "button_add": button_add,
            "section_cards": section_cards,
            "form_add": form_add,
            "input_question_add": input_question_add,
            "input_answer_add": input_answer_add,
        };
    }
}