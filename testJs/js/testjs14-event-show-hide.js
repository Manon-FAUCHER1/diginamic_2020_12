/**
 * Faire en sorte que le click sur le titre h1
 * cache ou fasse apparaître le paragraphe qui se trouve
 * juste après le titre de niveau 1
 * 
 * 1 - ajouter un event handler sur l'élément DOM qui correspond à h1
 * 2 - Dans ce event handler, on va tester si le paragraphe est visible. 
 *     S'il est visible, le cacher (visibility hidden) sinon le montrer (visibility  visible)
 *     Cela sous-entend que vous avez trouvé comment modifier des propriétés css via 
 *     du javascript
 */

const h1 = document.querySelector("h1");


h1.onclick = function() {
    element =  document.querySelector("p");
    console.log("classList : ", element.classList);
    element.classList.toggle("disparaitre");
}
/* const h1 = document.querySelector("h1");
const p = document.querySelector("p");

h1.onclick = function () {
  const visibility = p.style.visibility;
  console.log("visibility : ", visibility);
  if(!visibility || visibility == "visible") p.style.visibility = "hidden";
  else p.style.visibility = "visible";
} */


