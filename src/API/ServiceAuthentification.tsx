export function Connexion(mail:String,password:String){
  fetch('http://localhost:8000/user/register', {
    //Utilise la methode POST / GET / PUT ...
    method: 'GET',
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
      .then((response) => response.json())
      .catch((error) => console.error(error))
      .finally(() => (false));
      ;
}

export function Inscription(mail:String,password:String){
  fetch('http://localhost:8000/user/register', {
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
      .then((response) => response.json())
      .catch((error) => console.error(error))
      .finally(() => (false));
      ;
}

export function ajoutOuvrage(Titre:any, Auteur:any, Tome:any, Genre:any, Style:any, Description:any){
  fetch('http://localhost:8000/user/register', {
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
  fetch('http://localhost:8000/user/register', {
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