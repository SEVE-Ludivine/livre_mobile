export function Connexion(mail:String,password:String) {  
  fetch('https://b3-groupe1.etu.epsi-nantes.fr/user/login', {
    //Utilise la methode POST / GET / PUT ...
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    //Bind les parametre avec l'API et la vue
    body: JSON.stringify({
      email: mail,
      password: password
    })
  })
      .then((_response) => {
      console.log('API REPONSE')
      //login("token")
    })
      .catch((error) => console.error(error))
      .finally(() => {
      });
  return "token"
}

export function Inscription(mail:String,password:String){
  fetch('https://api.chucknorris.io/jokes/random', {
    //Utilise la methode POST / GET / PUT ...
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }/*,
    //Bind les parametre avec l'API et la vue
    body: JSON.stringify({
      "email": mail,
      "pseudo": mail,
      "password": password
    })*/
  })
      .then((response) => {console.log(response)})
      .catch((error) => console.error(error))
      .finally(() => (false));
      
}

export function ajoutOuvrage(Titre:any, Auteur:any, Tome:any, Genre:any, Style:any, Description:any){
  fetch('https://b3-groupe1.etu.epsi-nantes.fr/collection/create', {
    //Utilise la methode POST / GET / PUT ...
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    //Bind les parametre avec l'API et la vue
    body: JSON.stringify({
      titre: Titre,
      auteur: Auteur,
      tome: Tome,
      genre: Genre,
      style: Style,
      description: Description
    })
  })
      .then((response) => response.json())
      .catch((error) => console.error(error))
      .finally(() => (false));
      ;
}
export function filtreOuvrage(Titre:any, Auteur:any, Tome:any, Genre:any, Style:any, Description:any){
  fetch('https://b3-groupe1.etu.epsi-nantes.fr/collection/create', {
    //Utilise la methode POST / GET / PUT ...
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    //Bind les parametre avec l'API et la vue
    body: JSON.stringify({
      titre: Titre,
      auteur: Auteur,
      tome: Tome,
      genre: Genre,
      style: Style,
      description: Description
    })
  })
      .then((response) => response.json())
      .catch((error) => console.error(error))
      .finally(() => (false));
      ;
}

export function GetGenres(){
  fetch('https://b3-groupe1.etu.epsi-nantes.fr/collection/findGenre', {
    //Utilise la methode POST / GET / PUT ...
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
      .then((response) => {return response})
      .catch((error) => console.error(error))
      .finally(() => (false));
      return 0
}