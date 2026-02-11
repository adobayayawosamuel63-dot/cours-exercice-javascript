//  function isListEven( listNumber){
//     for (let i = 0; i < listNumber.length; i++) {
//     if (listNumber[i] % 2 != 0) {
//         return false;
//     }
//     return true;
//  } }

//  let liste = [ 1,6,9 ];
//     console.log(isListEven(liste));


//     Exercice 1 
// Créer une fonction qui s'appelle "bonneNote" qui prend en paramètre un entier note
// si ce nombre n'est pas compris entre 0 et 20, la fonction renvoie false
// sinon, si la note est supérieur a 14, la fonction renvoie "Bonne note",
// la fonction renvoie "Note normale" sinon


// function bonneNote (Note) {
//      if( Note < 0 || Note > 20) {
//             return false
//         } else if ( Note > 14) {
//           console.log("bonne note");
//         } else{
//             console.log("note normal");
            
//         }
    
// }

// const note1 = 17;
//  console.log(bonneNote(note1));
  

// Exercice 2
// Créer une fonction nommée inverseBool qui prend en paramètre un booléen.
// La fonction doit retourner la valeur inverse de ce booléen.

// let avis = true;
// function inverseBool (valeur) {
//      if( valeur==true){
//         return false;
//      }else if ( valeur== false) {
//         return true;
//      }
// }
//  console.log(inverseBool(avis));

// Exercice 3
// Créer une fonction nommée trouveIndex qui prend en paramètres une liste
//  et un nombre
// entier.
// ● La fonction doit retourner la position du nombre dans la liste.

// let livre = [4,5,8,11];
// let nb = 10 ;

// function trouveIndex (liste,nombre) {
//     // let m = liste.length;
//     for( let i = 0 ; i < liste.length ; i++) {
//         if (liste[i] == nombre) {
//             return i ;
//             }                          
//     }
//      return console.log(" il n' y a pas dans la liste")
// }

// console.log(trouveIndex(livre,nb));
  

// Exercice 4
// Créer une fonction nommée supprimeDoublons qui prend en paramètre une liste.
// Pour t’aider, tu peux utiliser la méthode includes, qui permet de vérifier si 
// un élément est
// déjà présent dans une liste.
// ● La fonction doit retourner une nouvelle liste sans doublons.
// ● L’ordre des éléments doit être conservé.

// let list = [0,1,0,3,3,5,4,6]
// function supprimeDoublons (liste) {
//     let Nliste = [];
//     for(let i = 0 ; i < liste.length; i++) {
            
//           if(!Nliste.includes(liste[i])){
//                Nliste.push(liste[i]) 
//           }
//     }
//     console.log(Nliste);
    
// }

//         console.log(supprimeDoublons(list));
    


// Exercice 5
// Créer une fonction nommée premierElement qui prend en paramètre une liste.
// ● La fonction doit retourner le premier élément de la liste.
// ● Si la liste est vide, la fonction doit retourner false.
//  let list = [0,1,0,3,3,5,4,6]
//  let li = []
// function premierElement(liste) {
//     if(liste[0] === String || liste.length == 0 ){
//        return false ;
//     } 
//         return (liste[0]);
//     }

// console.log(premierElement(li));


// Exercice 6
// Créer une fonction nommée dernierElement qui prend en paramètre une liste.
// ● La fonction doit retourner le dernier élément de la liste.
// ● Si la liste est vide, la fonction doit retourner false.
// let list = [0,1,0,3,3,5,4,6]
//  let li = []
// function dernierElement (liste) {
//     if( liste.length == 0 ){
//        return false ;
//     } 
//         return (liste[(list.length - 1)]);
//     }

//     console.log(dernierElement(list));


//     Exercice 7
// Créer une fonction nommée additionListe qui prend en paramètre une liste de nombres
// entiers.
// ● La fonction doit retourner la somme de tous les éléments de la liste.
// ● Si la liste est vide, la fonction doit retourner 0.

// let list = [0,1,0,3,3,5,4,6]
//  let li = []
 
// function additionListe (liste) {
// let somme = 0;
// for(i = 0 ; i < liste.length; i++){
//     somme += liste[i];
// }
//   return somme;
// }

// console.log(additionListe(list))


// Exercice 8
// Créer une fonction nommée elementSelonBool qui prend en paramètres une liste et un
// booléen.
// ● Si le booléen est true, la fonction doit retourner le premier élément de la liste.
// ● Si le booléen est false, la fonction doit retourner le dernier élément de la liste.
// ● Si la liste est vide, la fonction doit retourner false.

// let list = [0,1,0,3,3,5,4,6]
//  let li = []
//  let avis = false;
// function elementSelonBool (liste,valeur) {
//     if(valeur === true) {
//         return(liste[0]);
//     } else if (valeur === false) {
//         return( liste[liste.length - 1])
//     } 
//     return false
    
// }

// console.log(elementSelonBool(list,avis))



// Exercice 4
// Créer une fonction nommée supprimeDoublons qui prend en paramètre une liste.
// Pour t’aider, tu peux utiliser la méthode includes, qui permet de vérifier si 
// un élément est
// déjà présent dans une liste.
// ● La fonction doit retourner une nouvelle liste sans doublons.
// ● L’ordre des éléments doit être conservé.


// function supprimeDoublons (liste) {
//     let Nliste = []  // renvoie false quand la liste est vide
//     if ( liste.length == 0){
//         return false
//     } 

//     for( let i = 0 ; i < liste.length ; i++) {  // ajout les nuveau element
//     if ( !Nliste.includes(liste[i])){
//         Nliste.push(liste[i])
//     } 
//     }
//     return (Nliste)  // renvois la nouvelle list en console
//     }

//  let list = [0,1,0,3,3,5,4,6]

//  console.log(supprimeDoublons(list))

 