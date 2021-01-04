
const fruits = [
    23,
    12,
    1
];
console.log("fruits : ", fruits);

// ajout d'un élément en fin du tableau
fruits.push("orange");
console.log("fruits : ", fruits);

// supression du dernier élément
fruits.pop();
console.log("fruits : ", fruits);

// la propriété length qui permet d'obtenir la taille du tableau
console.log("taille du tableau : ", fruits.length);

// Parcours du tableau 
// ancienne méthode
for (let i = 0; i < fruits.length; i++) {
    console.log(`fruit pour l'index ${i} : `, fruits[i]);
}
// Nouvelle méthode forEach est une "higher order function" car elle attend une fonction
// en parametre. On appelle cela un "callback"
fruits.forEach((elt, i) => {
    console.log(`element pour l'index ${i} :`, elt);
    if(typeof(elt) == "function") {
        elt();
    }
});

// Autre méthode pour parcourir un tableau à index for of
for(elt of fruits) {
    console.log(`element (avec for of):`, elt);
}

// Création d'un nouveau tableau à partir d'un tableau existant avec map
const items_fruits = fruits.map((fruit) => `<li>${fruit}</li>`);
console.log("items_fruits", items_fruits);

// tri d'un tableau
fruits.sort();
console.log("tableau classé ", fruits);
