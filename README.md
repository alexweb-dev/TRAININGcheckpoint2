# Wild Heroes

Nous allons créer une application affichant une liste de super héros.

Pour cela, nous aurons besoin besoin de cette API : [Documentation de l'API](https://akabab.github.io/superhero-api/api/).

Installe le projet avec la commande `npm ci` (à préférer à `npm install`, car les versions des modules seront les mêmes que le package-lock.json).

Le module `react-router-dom` est déjà installé. Tu n'as pas à installer de modules pour cet exercice !

## 0. Routing

Dans le fichier `Main.jsx` ajoute la configuration nécessaire a la mise en place des routes suivantes :

- "/" affiche le composant de type page `<Heros />`
- "/heroes/:id" affiche le composant de type page `<HeroesDetail />`

Pour cela vous devrez utiliser la méthode `createBrowserRouter` que vous pouvez importer depuis la librairie `react-router-dom`, lien de la documentation pour la mise en place du routeur : [documentation react router](https://reactrouter.com/en/main/routers/create-browser-router)
  
## 1. API

Dans le composant `<Heros />`, appelle l'API afin de récupérer la liste des héros et fait un `console.log` du résultat.

Fait en sorte de n'appeler l'API qu'au montage du composant pour cela utiliser la methode `loader` depuis votre router dans `Main.jsx` et récuperer les données dans votre composant `<Heros />` via la méthode `useLoaderData`
Lien de la documentation pour la mise en place d'un loader : [documentation react router loader](https://reactrouter.com/en/main/route/loader)

## 2. Liste

Dans ton componsant `<Heros />`, appelle le composant `<HeroesList />` en lui passant en props la liste des héros récupérés de l'API.

Fait un `console.log` des props pour vérifier que tout a bien été reçu.

Dans le jsx de `<HeroesList />`, affiche la liste des noms des héros.

## 3. Détail

Dans ton composant `<HeroesList />`, modifie l'affichage de tes héros afin d'appeler le composant `<HeroesItem />` et en lui passant les informations d'un héros par les props.

Modifie le composant `<HeroesItem />` afin d'afficher quelques informations d'un héros :

- son nom
- son image "xs" si elle existe
- son alignement

## 4. Détail

En fonction de l'identifiant récuperez via l'url (useParams), le composant `<HeroesDetail />` doit appeler l'API (useEffect) afin d'afficher le nom et les statistiques du héros.

Ajout dans `<HeroesDetail />` d'un bouton "Back to the list" qui redirige (useNavigate) sur la page qui affiche la liste des héros.

## 5. Layout

Maintenant on voudrait pouvoir inclure nos layout (header, footer) sur toutes nos pages sans avoir à les inclure sur chacune d'elle.

Pour cela modifier votre router dans le fichier `main.jsx` pour déclarer les routes suivantes :

- "/" affiche le composant `App.jsx` qui aura pour enfant (children props) les routes suivantes :
  - "/" affiche le composant de type page `<Heros />`
  - "/heroes/:id" affiche le composant de type page `<HeroesDetail />`

Ensuite dans votre composant `App.jsx` :

- Importer les composant `Header.jsx` & `Footer.jsx`
- Importer le composant `Outlet` depuis la librairie `react-router-dom`
- return la structure jsx suivante : 
```js
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
```

## 6. Filtrage

Dans `<HeroesList />`, ajoute un label "Rechercher" et un champs texte, avant la liste.

À la modification du texte du champs, filtrer les héros pour n'afficher que ceux dont le nom correspont à la recherche.
