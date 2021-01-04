
// déclaration et affectation
// var est function scope. Donc si la variable n'est pas déclarée dans une fonction
// alors la variable devient globale

// Il n'y a pas de hoisting avec let et la variable ne peut pas être une variable globale
// let est block scope
{
    let i = `Hello`; 
    console.log("i = ", i);
    i = 13;
    console.log("i = ", i);
}


//i = "Hello";
//i = true
//i = null;
// concaténation si i est une chaîne de caractères adition si i est un nombre
//i = i + 5; 




