/**
 * Class Card
 * @param {string} question 
 * @param {string} answer 
 */
class Card {
    constructor(question, answer = "") {
        // propriétés
        this.question = question;
        this.answer = answer;
    }

    // Ajout de la méthode dumpQuestionAnswer 
    dumpQuestionAnswer = function() {
        console.log(`Question : ${this.question} - Réponse : ${this.answer}`);
    }
}

const c1 = new Card("Nom de l'inventeur du web ?", "Tim Berners-Lee");
console.log("c1 : ", c1);