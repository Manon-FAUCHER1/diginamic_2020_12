for (let i = 0; i < 10; i++) {
    //console.log("i : ", i);
}
//console.log("i après la boucle : ", i);

let i = 2;   // type : number
let j = "2"; // type : string
if (i == j) {// le == fait du transtypage et compare la valeur
    console.log("i est égal à j");
}

if (i === j) {// le === ne fait pas de transtypage et compare la valeur uniquement
    // si le type est le même
    console.log("i est égal à j");
} else {
    console.log("i n'est pas égal à j");
}

// variables de type object
/* let p1 = {
    name: "Robert"
};
let p2 = p1; // passage par  référence pour les types non primitifs
p1.name = "José";

console.log("p2 : ", p2);

if (p1 == p2) { // quand js compare des objet, il ne regarde que la référence à l'espace mémoire
    console.log("p1 est  égal à p2");
} else {
    console.log("p1 n'est pas égal à p2");
} */

// Copie par valeur pour les types primitifs
let a = 12;
let b = a;
a = "Hello World";
console.log("a : ", a);
console.log("b : ", b);

const jc = {
    nom: "Dusse",
    prenom: "Jean-Claude",
    sePresenter: function(){
      console.log("Bonjour, je m'appelle " +
      this.prenom + " " + this.nom);
    }
  }
  console.log("prénom : ", jc["prenom"]);
  /* for(let key in jc) {
    console.log(key + " : " + jc[key]); // on se rend compte ici que les objets sont des tableaux associatifs
  } */