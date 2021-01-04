class Person {
    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }
    introduceMySelf() {
        console.log(`Bonjour, je m'appelle ${this.prenom} ${this.nom}`);
    }
}

class Enseignant extends Person {
    constructor(nom, prenom, matiere) {
        super(nom, prenom);
        this.matiere = matiere;
    }
    introduceMySelf() {
        super.introduceMySelf();
        console.log(`... et je suis un enseignant`);
    }
    enseigne() {
        console.log(`J'enseigne ${this.matiere}`);
    }
}

const bob = new Person("Dylan", "Bob");
bob.introduceMySelf();

const jose = new Enseignant("Bové", "José", "l'art de faire du fromage");
jose.introduceMySelf();
jose.enseigne();