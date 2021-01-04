// Appel de la fonction
let perimetre3 = calculPerimetre(3); // 3 est ici la valeur de l'argument

/**
 * Fonction qui attend en paramètre un nombre positif
 * et qui renvoie le périmètre (nombre à virgule positif)
 * Le mot clé function déclenche du "hoisting". C'est comme si la f
 * fonction était déclarée en haut du fichier.
 * @param {number} rayon 
 * @return number
 */
function calculPerimetre(rayon) { // rayon est le paramètre attendu par la fonction
    return 2 * 3.14 * rayon;
}



console.log("Perimetre pour un rayon de 3 : ", perimetre3);