let i = 1;
function a() {
  let j = 2;
  function b(){
    let l = 4;
    console.log("j :", j);
  }
  // b() appel de l'exécution de la fonction
  // b est le passage de la référence de la fonction
  return b; 
}

console.log("i :", i);
//console.log("j : ", j);

const maFonction = a();
// ici bien que l'on soit dans le contexte global,
// on a accès à j qui est dans le contexte de a() grâce au 
// mécanisme des closure
maFonction(); 