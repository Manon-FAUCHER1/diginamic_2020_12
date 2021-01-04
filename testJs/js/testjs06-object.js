/**
 * Fonction constructeur de Card
 * @param {string} question 
 * @param {string} answer 
 */
function Card(question, answer) {
    // propriétés
    this.question = question;
    this.answer = answer;
    this.toto = "toto";
}

// Ajout d'une méthode au prototype de la fonction constructeur Card
Card.prototype.dumpQuestionAnswer = () => {
    console.log(`Question : ${this.question} - Réponse : ${this.answer}`);
}

// Quand on utilise "new", c'est que l'on crée une instance
const c1 = new Card("Nom de l'inventeur du web ?", "Tim Berners-Lee");
const c2 = new Card("Inventeur du JS ?", "Brandan Eich");

// Atteindre les propriétés
console.log(c1.question);

// Appel des méthodes
c1.dumpQuestionAnswer();

console.log(c2);
console.log("hasOwnProperty : ", c2.hasOwnProperty('dumpQuestionAnswer'));

// Ajout d'une nouvelle propriété au prototype de Object
Object.prototype.pi = 3.14;

console.log("pi pour c2 : ", c2.pi);

const obj = {
    name: "toto"
}
console.log("pi pour toto : ", obj.pi);


