// Exercice 1 : Manipulation de listes
// On considère la liste de nombres suivante :
// [1, 5, 6, 3, 9, 2]
// Consigne :
// Écrire un programme qui permet d’inverser l’ordre des éléments de cette liste.
// Le programme devra :
// 1. Stocker la liste donnée dans une variable.
// 2. Inverser l’ordre des éléments de la liste.
// 3. Afficher la liste obtenue après inversion.

// let liste = [1, 5, 6, 3, 9, 2];
// let Nliste = []
// for ( let i = (liste.length - 1) ; i>=0; i--){
//    Nliste.push(liste[i])
// }
// console.log(Nliste)

// Exercice 2 : Filtrer des nombres dans une liste
// On considère la liste de nombres suivante :
// [4, 9, 12, 7, 18, 5, 21, 10]
// Consigne :
// Écrire un programme qui permet de conserver uniquement les nombres multiples de 3
// présents dans cette liste.
// Le programme devra :
// 1. Stocker la liste donnée dans une variable.
// 2. Identifier les nombres multiples de 3.
// 3. Créer une nouvelle liste contenant uniquement ces nombres.
// 4. Afficher la nouvelle liste.
// Rappel :
// Un nombre est multiple de 3 s’il est divisible par 3


// let liste = [4, 9, 12, 7, 18, 5, 21, 10]
// let Nliste = []
// for (let i = 0 ; i < liste.length ; i++ ){
//     if ( liste[i] % 3 == 0){
//         Nliste.push(liste[i])
//     }
// }
// console.log(Nliste)


// Exercice 3 : Calculer la moyenne d’une liste
// On considère la liste de nombres suivante :
// [8, 12, 15, 6, 10, 9]
// Consigne :
// Écrire un programme qui permet de calculer la moyenne des nombres contenus
//  dans cette
// liste.
// Le programme devra :
// 1. Stocker la liste donnée dans une variable.
// 2. Calculer la somme des nombres de la liste.
// 3. Calculer la moyenne des nombres.
// 4. Afficher la moyenne obtenue.
// Rappel :
// La moyenne se calcule en divisant la somme des valeurs par le nombre
//  de valeurs.

// let liste = [8, 12, 15, 6, 10, 9]
// let somme = 0 ; 

// for( let i = 0 ; i < liste.length ; i++){
//     somme += liste[i]
// }
// console.log(somme)
// let moyenne = somme / liste.length
// console.log(moyenne)



// Exercice 4 : Calculer une moyenne avec une fonction
// On considère la liste de nombres suivante :
// [8, 12, 15, 6, 10, 9]
// Consigne :
// Écrire un programme qui permet de calculer la moyenne des nombres contenus
//  dans cette
// liste en utilisant une fonction.
// Le programme devra :
// 1. Créer une fonction qui calcule la moyenne d’une liste de nombres.
// 2. Passer la liste donnée en paramètre de la fonction.
// 3. Afficher la moyenne retournée par la fonction.
// Rappel :
// La moyenne se calcule en divisant la somme des valeurs par le nombre
//  de valeurs

// let list = [8, 12, 15, 6, 10, 9]

// function moyenne (liste) {
//      let somme = 0 
//      let calculeM;
//      for( let i = 0 ; i < liste.length ; i++){
//     somme += liste[i]
// }
//  return calculeM = (somme / liste.length)

// }

// console.log(moyenne(list))

// Exercice 5 : Utiliser une fonction avec un objet JavaScript
// On considère l’objet JavaScript suivant :
// {
// prenom: "Alice",
// age: "23",
// notes: [19, 17.5, 12.5, 13.2, 18.5]
// }
// Consigne :
// En utilisant la fonction créée dans l’exercice précédent, écrire un programme
//  qui permet de
// calculer la moyenne des notes d’Alice.
// Le programme devra :
// 1. Stocker l’objet dans une variable.
// 2. Récupérer la liste des notes d’Alice.
// 3. Utiliser la fonction de calcul de moyenne sur cette liste.
// 4. Afficher la moyenne des notes d’Alice.

// let individutA = {
//  prenom: "Alice",
//  age: "23",
//  notes: [19, 17.5, 12.5, 13.2, 18.5]
//  }

//  function moyenne (liste) {
//      let somme = 0 
//      let calculeM;
//      for( let i = 0 ; i < liste.length ; i++){
//     somme += liste[i]
// }
//  return calculeM = (somme / liste.length)

// }

// console.log(moyenne(individutA.notes))


// Exercice 6 : Calculer la moyenne de plusieurs élèves
// On considère la liste d’objets JavaScript suivante :
// [
// { prenom: "Alice", notes: [19, 17.5, 12.5, 13.2, 18.5] },
// { prenom: "Bob", notes: [14, 11, 16, 18, 15] },
// { prenom: "Charlie", notes: [9, 10.5, 12, 8.5, 11] }
// ]
// Consigne :
// Écrire un programme qui permet de calculer la moyenne de chaque élève 
// et d’afficher son
// prénom accompagné de sa moyenne.
// Le programme devra :
// 1. Réutiliser la fonction de calcul de moyenne créée précédemment.
// 2. Parcourir la liste des élèves.
// 3. Calculer la moyenne des notes pour chaque élève.
// 4. Afficher pour chaque élève son prénom et sa moyenne.
// Exemple d’affichage attendu :
// Alice : ...
// Bob : ...
// Charlie : ...


// let list =  [
//  { prenom: "Alice", notes: [19, 17.5, 12.5, 13.2, 18.5] },
//  { prenom: "Bob", notes: [14, 11, 16, 18, 15] },
//  { prenom: "Charlie", notes: [9, 10.5, 12, 8.5, 11] }
//  ]

//   function moyenne (liste) {

//      let somme = 0 
//      let calculeM;
//      for( let i = 0 ; i < liste.length ; i++){
//     somme += liste[i]
// }
//  return calculeM = (somme / liste.length)

// }

// for (let i = 0 ; i < list.length ; i++){
//     console.log (list[i].prenom + ":")
//   console.log(moyenne(list[i].notes))

// }
