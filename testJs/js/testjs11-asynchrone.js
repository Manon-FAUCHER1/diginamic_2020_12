console.log('avant');
// setTimeout est non bloquante donc asynchrone
setTimeout(() => {console.log('affiché après 2 secondes');},2000);
console.log('après');