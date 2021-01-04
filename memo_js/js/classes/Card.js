import CoopDom from "./CoopDom.js";
import QuestionAnswerForm from "./QuestionAnwerForm.js";

export default class Card extends CoopDom {
    constructor(question, answer, column) {
        super();
        this.question = question;
        this.answer = answer;
        this.column = column;
        
        // construction du dom de la carte
        this.domElements = this.render();

        // gestion des événements
        this.handleEvents();

        this.domElements.question.onclick = () => {
            if (this.domElements.answer.hidden == true) {
                this.domElements.answer.hidden = false;                
            } else {
                this.domElements.answer.hidden = true;
            };
        }
    }

    handleEvents = () => {
        // suppression d'une carte
        this.domElements.button_remove.onclick = () => {
            console.log("click sur le bouton pour supprimer une carte");
            console.log("this dans onclick du bouton de suppression de carte : ", this);
            this.column.removeCard(this);
        }

        // affichage du formulaire au click sur le bouton Modifier
        this.domElements.button_edit.onclick = () => {
            this.domElements.form_edit.hidden = false;
        }

        // gestion de la soumission du formulaire de modification
        this.domElements.form_edit.onsubmit = (event) => {
            console.log("Gestion de la soumission du formulaire de modification");
            event.preventDefault();

            // Récupération des nouvelles valeurs
            const new_question = this.domElements.input_question.value;
            const new_answer = this.domElements.input_answer.value;

            // Modification à la fois des propriétés question et answer
            // mais aussi des éléments du dom correspondant
            this.question = new_question;
            this.domElements.question.textContent = new_question;
            this.answer = new_answer;
            this.domElements.answer.textContent = new_answer;

            // on cache le formulaire
            this.domElements.form_edit.hidden = true;
        }
    }
    render = () => {
        console.log("Dans la fonction render de Card");
        // Création  des éléments du DOM grâce à la méthode createAddDomElt héritée de CoopDom
        const article = this.createAddDomElt(
            "article",
            "",
            this.column.domElements.section_cards,
            {"class": "text-light bg-dark rounded p-4 mt-2 mb-2"}
        );
        // création des boutons
        const button_remove = this.createAddDomElt(
            "button",
            "Supprimer la carte",
            article,
            {"class": "btn btn-danger mr-2 mb-2 w-100"}
        );
        /**
         * Créer un bouton qui va afficher au click un formulaire
         * qui permettra de modifier la carte (la question et/ou la réponse )
         */
        const button_edit = this.createAddDomElt(
            "button",
            "Modifier la carte",
            article,
            {"class": "btn btn-warning mr-2 w-100"}
        );

        const form_edit_button = { 
            text: "Ajouter",
            clickHandler: (questionValue, answerValue) => {
                this.addCard(questionValue, answerValue);
                this.domElements.form_add.setVisibility(false);
                this.domElements.form_add.clearForm();
                
            }
        }
        const form_edit = new QuestionAnswerForm(this.question, this.answer, form_edit_button, article);
        form_add.setVisibility(false);

        
        return {
            "article": article,
            "question": question,
            "answer": answer,
            "button_remove": button_remove,
            "form_edit": form_edit,
            "button_edit": button_edit,
        };

    }
}