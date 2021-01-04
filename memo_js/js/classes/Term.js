import CoopDom from "./CoopDom.js";
export default class Term  extends CoopDom {
    constructor(term, createBoard) {
        super();

        // propriétés
        this.name = term.name;
        this.id = term.id;

        // appel de la fonction render d'affichage et stockage des éléments correspondant du dom
        this.domButton = this.render();

        // Gestion des événement
        this.domButton.onclick = () => {
            console.log("Click sur le bouton de Term ", this.name, this.id);
            createBoard(this.name, this.id);
        }
    }

    render = () => {
        console.log("Dans la fonction render de Term");
        // Création  des éléments du DOM grâce à la méthode createAddDomElt héritée de CoopDom
        const button = this.createAddDomElt(
            "button",
            this.name,
            document.querySelector("#terms"),
            {"class": "btn btn-warning m-2"}
        );
        return button;
    }

}