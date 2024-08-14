function inversement (chaine) {
    return chaine.split('').reverse().join('');

}
let reversed = inversement("Redrum");
console.log(reversed);


function counterchar(chaine){
    return chaine.length;

}
let counter = counterchar("dgffhfjfhrhrhugjghfjrhjrhrhfjfufhrhfhfurhrhgsgsys")
console.log(counter)

function capitalizeFirstLetterOfEachWord(phrase) {
    // Diviser la phrase en mots en utilisant l'espace comme délimiteur
    return phrase.split(' ').map(word => {
        // Mettre en majuscule la première lettre et concaténer le reste du mot
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' '); // Rejoindre les mots modifiés avec un espace
}

// Exemple d'utilisation
const phrase = "bonjour le monde, comment ça va ?";
const phraseModifiee = capitalizeFirstLetterOfEachWord(phrase);

console.log(phraseModifiee); // "Bonjour Le Monde, Comment Ça Va ?"


// Fonction de tableau

function findMaxAndMin(numbers) {
    if (numbers.length === 0) {
        throw new Error("Le tableau ne peut pas être vide");
    }

    const max = Math.max(...numbers);
    const min = Math.min(...numbers);

    return { max, min };
}

// Exemple d'utilisation
const numbers = [3, 5, 7, 2, 8, 1, 6];
const result = findMaxAndMin(numbers);

console.log(`Valeur maximale : ${result.max}`); // "Valeur maximale : 8"
console.log(`Valeur minimale : ${result.min}`); // "Valeur minimale : 1"


// somme d'un tableau
function sumArray(elements) {
    // Vérifie si le tableau est vide ou s'il contient des éléments non numériques
    if (!Array.isArray(elements) || elements.length === 0) {
        throw new Error("Le tableau ne peut pas être vide et doit contenir uniquement des nombres.");
    }

    return elements.reduce((accumulator, currentValue) => {
        if (typeof currentValue !== 'number') {
            throw new Error("Tous les éléments du tableau doivent être des nombres.");
        }
        return accumulator + currentValue;
    }, 0);
}

// Exemple d'utilisation
const number = [1, 2, 3, 4, 5];
const totalSum = sumArray(number);

console.log(`La somme des éléments est : ${totalSum}`); // "La somme des éléments est : 15"

// filtre le tableau en fonction (condition)
function filtrerElements(tableau, condition) {
    return tableau.filter(condition);
}

// Exemple d'utilisation
const tableau = [1, 2, 3, 4, 5, 6];
const condition = x => x % 2 === 0;  // Garder seulement les nombres pairs

const resultat = filtrerElements(tableau, condition);
console.log(resultat);  // Affiche : [2, 4, 6]

//fonction Math

function factorielleRecursive(n) {
    if (n === 0 || n === 1) {
        return 1; // La factorielle de 0 et 1 est 1
    }
    return n * factorielleRecursive(n - 1); // Appel récursif
}

// Exemple d'utilisation
console.log(factorielleRecursive(5)); // Affiche : 120

//fonction qui verifie le premier nombre
function estPremier(nombre) {
    // Un nombre inférieur ou égal à 1 n'est pas premier
    if (nombre <= 1) {
        return false;
    }
    // Vérifier les cas simples
    if (nombre === 2 || nombre === 3) {
        return true; // 2 et 3 sont premiers
    }
    // Les nombres pairs et les multiples de 3 ne sont pas premiers (à l'exception de 2 et 3)
    if (nombre % 2 === 0 || nombre % 3 === 0) {
        return false;
    }
    // Vérifier les autres facteurs jusqu'à la racine carrée du nombre
    for (let i = 5; i * i <= nombre; i += 6) {
        if (nombre % i === 0 || nombre % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

// Exemple d'utilisation :
console.log(estPremier(11)); // true
console.log(estPremier(15)); // false
console.log(estPremier(2));  // true
console.log(estPremier(1));  // false

// fibonacci

function suiteFibonacci(jusqua) {
    // Initialisation des deux premiers termes de la suite
    const resultats = [0, 1];
    
    // On génère les termes de la suite jusqu'à atteindre le nombre demandé
    while (resultats.length < jusqua) {
        // Le prochain terme est la somme des deux termes précédents
        const prochainTerme = resultats[resultats.length - 1] + resultats[resultats.length - 2];
        resultats.push(prochainTerme);
    }
    
    // Retourne les termes de la suite jusqu'à la longueur spécifiée
    return resultats.slice(0, jusqua);
}

// Exemple d'utilisation :
console.log(suiteFibonacci(5));  // Affiche [0, 1, 1, 2, 3]
console.log(suiteFibonacci(10)); // Affiche [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
