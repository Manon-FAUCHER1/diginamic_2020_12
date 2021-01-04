import Board from "./classes/Board.js";
import Term from "./classes/Term.js";
import Coopernet from "./services/Coopernet.js";


// instanciation de la classe Coopernet qui perme de communiquer avec le serveur
const coop = new Coopernet("https://www.coopernet.fr");

/**
 * Chainage de promesses
 * 1 - promesse de token
 * 2 - promesse de user (uniquement si la promesse précédente est "resolve")
 * 3 - promesse de terms 
 */
let token;
let user;

async function getTokenUser() {
    try {
        // récupération du token
        token = await coop.getToken();
        console.log("token dans getTokenUser", token);

        // récupération des données de l'utilisateur
        user = await coop.getUser("yd", "yd", token);
        console.log("user dans getTokenUser : ", user);

        // récupération des termes (rubriques)
        const terms = await coop.getTerms(user, token);
        console.log("termes de y : ", terms);

        // parcours du table terms
        for (let term of terms) {
            // callback : c'est à dire passage de la référence vers la méthode createBoard
            new Term(term, createBoard);
        }
    }
    catch (error) {
        console.error("Erreur attrapée dans getTokenUser  : ", error)
    }
}
async function createBoard(title, id) {
    console.log("Dans createBoard ", title, id);
    try{
        if (token && user) {
            // récupération des colonnes
            const columns = await coop.getCards(user, token, id);
            console.log("colonnes : ", columns);
            const board = new Board(title, columns);
            console.log("board : ", board);
        }
    }
    catch(error) {
        console.error("Erreur attrapée : ", error)
    }

}

/**
 * Appel du token et du user de façon asynchrone
 */
getTokenUser();

