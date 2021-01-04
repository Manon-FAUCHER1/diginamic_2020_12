export default class Coopernet {
    constructor(url) {
      this.url = url;
    }
    getToken = () => {
      return fetch(`${this.url}/rest/session/token/`)
        .then(function (response) {
          if (response.status !== 200) { // si ça c'est mal passé
            throw new Error("Le serveur n'a pas répondu correctement");
          } else return response.text(); // renvoie une promesse
        })
        .then(function (data) { // data correspond au retour du résolve (ici deux lignes au dessus)
          return data;
        });
    }
    getUser = (login, pwd, token) => { // y y fonctionne
      console.log("dans getUser");
      // utilisation de fetch
      return fetch(`${this.url}/user/login?_format=json`, {
        credentials: "same-origin",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": token
        },
        body: JSON.stringify({
          name: login,
          pass: pwd
        })
      })
        .then(response => response.json())
        .then(data => {
          //console.log("success", data);
          if (data.current_user === undefined) {
            console.log("Erreur de login");
            throw new Error("Erreur de data : ", data);
          } else {
            //console.log("user", data.current_user);
            return {
              userid: data.current_user.uid,
              userlogin: login,
              userpwd: pwd
            }
  
          }
        });
  
    };
    getTerms = (user, token) => {
      // création de la requête
      console.log("Dans getTerms");
      return fetch(`${this.url}/memo/themes/` +
        user.userid, {
        credentials: "same-origin",
        method: "GET",
        headers: {
          "Content-Type": "application/hal+json",
          "X-CSRF-Token": token,
          "Authorization": "Basic " + btoa(user.userid + ":" + user.userpwd) // btoa = encodage en base 64
        }
      })
        .then(response => {
          if (response.status === 200) return response.json(); // vérifie que le format json
          else throw new Error("Problème de réponse ", response);
        })
        .then(data => {
          console.log("data reçues dans getTerms :", data);
          if (data) {
            return data;
          } else {
            throw new Error("Problème de data ", data);
          }
        });
    };
    getCards = (user, token, term_number) => {
      return fetch(this.url +
        "/memo/list_cartes_term/" +
        user.userid +
        "/" +
        term_number +
        "&_format=json&time=" +
        Math.floor(Math.random() * 10000), {
        credentials: "same-origin",
        method: "GET",
        headers: {
          "Content-Type": "application/hal+json",
          "X-CSRF-Token": token,
          "Authorization": "Basic " + btoa(user.userid + ":" + user.userpwd) // btoa = encodage en base 64
        }
      })
      .then(response => {
        if (response.status === 200) return response.json(); // vérifie que le format json est respecté
        else throw new Error("Problème de réponse ", response);
      })
      .then(data => {
        console.log("data reçues dans getTerms :", data);
        if (data) {
          return data;
        } else {
          throw new Error("Problème de data ", data);
        }
      });
    }
  }

  /**
   * Travaillez ensemble pour réflêchir à comment s'y prendre pour utiliser
   * cette class Coopernet
   *  - instancier la class
   *  - appeler la méthode getToken
   *  - appeler la méthode getUser
   *  - appeler la méthode getTerms va renvoyer un tableau d'objets qui donnent
   *  - toutes les infos concernant les termes (js, html ...)
   *  - Afficher les termes en utilisant une class Term (constructor + render)
   *  - Gérer l'évenement click sur chaque terme qui va appeler getCards
   */