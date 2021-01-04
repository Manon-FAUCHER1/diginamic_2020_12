// gérer la soumission du formulaire
const form = document.querySelector("form");

form.onsubmit = function(event) {
  event.preventDefault();
}

// gestion de la modification des inputs
// récupération des élément du DOM qui correspondent aux inputs 
// avec query selector par exemple
const input_euro = document.querySelector("#euro");
const input_chf = document.querySelector("#chf");


// affectation d'une fonction gestionnaire d'événement (input)
// qui va appeler la fonction convert et qui va modifier
// l'input des francs suisse (chf) ou l'input des euros 
input_euro.oninput = function() {
  console.log("input dans euro");
  input_chf.value = convert(input_euro.value, "chf");
}
input_chf.oninput = function() {
  console.log("input dans chf");
  input_euro.value = convert(input_chf.value, "euro");
}


function convert(amount, currency) {
  if(currency == "chf") return amount * 1.06;
  else return amount / 1.06;
}