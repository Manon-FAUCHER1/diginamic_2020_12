function getToken() {
    return new Promise(function (resolve, reject) {
        if (Math.random() > 0.5) {
            // l'argument "Xdl586655zeEszzs" devient le premier paramètre de la fonction qui
            // est en paramatre du prochain "then"
            resolve("Xdl586655zeEszzs"); 

        }
        else {
            reject("Erreur dans l'obtention du token");
        }
    });

}
function getUser() {
    return new Promise(function (resolve, reject) {
        if (Math.random() > 0.5) {
            resolve({ "login": "bob", "uid": "158" });
        }
        else {
            reject("Erreur dans l'obtention des informations concernant l'utilisateur");
        }
    });

}
/* getToken()
    .then(function (data) {
        console.log("Cas favorable, token : ", data);
        // chaînage possible car getUser renvoie également une promesse
        return getUser();
    })
    .then(function (data) {
        console.log("Cas favorable, user : ", data);
    })
    .catch(function (error) {
        console.error(error);
    }); */

async function getTokenUser() { // async prévient que on va manipuler des fonction asynchrone
    try {
        // token correpond à l'argument renvoyé par la fonction resolve de getToken()
        const token = await getToken(); 
        console.log("token : ", token);
        // récupération des infos de l'utilisateur si la récupération du code s'est bien passée
        const user = await getUser();
        // affichage des infos de l'utilisateur si la récupération des données s'est bien passée.
        console.log("user : ", user);
    } catch (error) {
        console.log('Erreur attrapée : ', error);
    }
}
getTokenUser();


