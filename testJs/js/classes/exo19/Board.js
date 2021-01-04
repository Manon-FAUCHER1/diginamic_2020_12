import Column from "./Column.js";
import CoopDom from "../CoopDom.js";

export default class Board extends CoopDom {
    constructor(title, columns) {
        super();
        this.title = title;
        this.columns = columns;

        // affichage des éléments du dom
        this.render();
    }
    render = () => {
        // on supprime tous les éléments du dom qui sont dans main avec innerHTML = '';
        const main = document.querySelector("#board");
        main.innerHTML = '';
        // Titre
        this.createAddDomElt(
            "h2",
            this.title,
            main,
            {"class": "col-12"});

        // Création des Colonnes en parcourant this.column et en utilisant la class Column
        for(let col of this.columns) {
            new Column(col.name, col.cartes);
        }

    }
}