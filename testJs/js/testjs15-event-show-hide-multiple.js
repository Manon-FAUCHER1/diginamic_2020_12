/**
 * Faire en sorte que le click sur un titre h1
 * cache ou fasse apparaître le paragraphe qui se trouve
 * juste après lui
 * 
 * 1 - ajouter des event listner sur les élément DOM qui correspond à h1
 *     Il faudra utiliser querySelectorAll
 * 2 - Dans chaque event listner, il faudra aller chercher le paragraphe suivant
 *     (utiliser nextElementSibling) pour le cacher ou l'afficher
 *     Cela sous-entend que vous avez trouvé comment modifier des propriétés css via 
 *     du javascript
 */

// récupération des éléments du dom qui correspondent aux h1 sous forme de tableau à index
const h1s = document.querySelectorAll("h1");

for (h1 of h1s) {
  h1.onclick = function (event) {
    console.log("click sur h1");
    // récupérer le paragraphe qui suit ce h1 soit le prochain élément frère
    const p = this.nextElementSibling;


    // Récupération de l'élément de style "visibility" sur le paragraphe
    const visibility = p.style.visibility;
    console.log("visibility : ", visibility);
    // 
    if (visibility || visibility == "visible") p.style.visibility = "hidden";
    else p.style.visibility = "visible";
  }
}


