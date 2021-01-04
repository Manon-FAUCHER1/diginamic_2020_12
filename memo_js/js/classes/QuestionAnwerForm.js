 import CoopDom from "./CoopDom.js";
 export default class QuestionAnswerForm extends CoopDom {

    constructor(question, answer, button, parentEl) {
        super();
        this.question = question;
        this.answer = answer;
        this.button = button;
        this.parentEl = parentEl;
        this.domElements = this.render();

        this.handleEvents()
    }

    render() {
        // création du formulaire
        const form = this.createAddDomElt(
            "form",
            "",
            this.parentEl
        );

        // création de l'input "Question"
        const label_question = this.createAddDomElt(
            "label",
            "Question",
            form
        );
        const input_question = this.createAddDomElt(
            "input",
            "",
            form,
            {"type": "text", "value": this.question, "class": "form-control"}
        );

        // crétion de l'input "answer"
        const label_answer = this.createAddDomElt(
            "label",
            "Réponse",
            form
        );
        const input_answer = this.createAddDomElt(
            "input",
            "",
            form,
            {"type": "text", "value": this.answer, "class": "form-control"}
        );

        // crétion de l'input "button_submit"
        const button_submit = this.createAddDomElt(
            "input",
            "",
            form,
            {"type": "submit", "value": this.button.text, "class": "btn btn-primary mt-3 mb-3"}
        );

        return {
            "form": form,
            "input_answer": input_answer,
            "input_question": input_question,
            "button_submit": button_submit,
        };

    }

    handleEvents() {
        this.domElements.form.onsubmit = (event) => {
            console.log("click sur le boutton", this.button.text);
            event.preventDefault();

            const questionRes = this.domElements.input_question.value;
            const answerRes = this.domElements.input_answer.value;

            this.button.clickHandler(questionRes, answerRes);
        }

    }

    setVisibility(isVisible) {
        this.domElements.form.hidden = !isVisible;
    }
    
    clearForm() {
        this.domElements.input_question.value = "";
        this.domElements.input_answer.value = "";
    }

}