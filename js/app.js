const imgBoard = document.getElementById("board");
const gameOverMessage = document.getElementById("cover");

// On creer un tableau contenant le chemin d'accès aux différentes images des légumes
let imgLegumes = [
    "/resources/memory-legume/1.svg",
    "/resources/memory-legume/2.svg",
    "/resources/memory-legume/3.svg",
    "/resources/memory-legume/4.svg",
    "/resources/memory-legume/5.svg",
    "/resources/memory-legume/6.svg"
];
//console.log(imgLegumes);
// Fontion pour mélanger les images
function shuffleImg(imgTable) {
    // On itère dans le tableau donné en décrémentant jusqu'a atteidre 0
    for(let i = imgTable.length-1; i > 0; i--){
        // Math.random permet d'obtenir un nombre entre 0(inclus) et (i+1)(exclus)
        // Math.floor permet d'arondir ce nombre pour qu'il soit un index valide pour le tableau
        const j = Math.floor(Math.random()*(i+1));
        // on échange les elements à l'aide de la syntaxe de décomposition d'assignation
        // Cela permet d'échanger les valeurs des deux éléments sans avoir besoin d'une variable temporaire.
        [imgTable[i], imgTable[j]] = [imgTable[j], imgTable[i]]
    }
    // On retourne le tableau mélangé
    return imgTable
}
shuffleImg(imgLegumes);
//console.log(imgLegumes);
// Variable qui déterminera si toute les cartes sont retournées
let allRevealed = false;
// Variable pour empêcher le joueur de retourner plus de carte que voulu
let clickBlocked = false;
// détermine la première carte
let firstImg;
// contient le score en nombre de coup
let score = 0;
// 
const allIgm = imgBoard.children;