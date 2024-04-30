const imgBoard = document.getElementById("board");
const EndOfGame = document.getElementById("cover");


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
// On double le tableau en ajoutant une copie des élémnts existant
imgLegumes = imgLegumes.concat(imgLegumes);
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
let isAllRevealed = false;
// Variable pour empêcher le joueur de retourner une carte manuellement
let clickBlocked = false;
// Stock la première carte
let firstImg;
// Stock le score du joueur
let score = 0;
// Met tous les enfants de ma div avec l'id board dans allImg
const allIgm = imgBoard.children;
console.log(allIgm);

// On détermine si toutes les cartes sont retournées
function checkGameStatus() {
    // on itère entre les balises contenues dans la div contenant le jeu
    for (let i = allImg.length; i >0; i--) {
        const image = allIgm[i];
        // Si l'une d'elle contient la class untapped, alors c'est faux
        if (!image.classList.contains("untapped")) {
            isAllRevealed = false;
            break;
        // Sinon elles sont toute retournées et c'est vrai
        } else {
            isAllRevealed = true;
        }
    }
}

function createHtmlImg(image){
    // On cree l'element div que l'on récupère dans htmlImg
    const htmlImg = document.createElement("div");
    // Ajoute une class à htmlImg
    htmlImg.classList.add("???") // class a définir
    // Insert la contenu html dans htmlImg
    htmlImg.innerHTML = `<div class="">
    <img src="${image}" alt="">
    <div class="img-cover"<\div>
    <\div>`;
    // class img-cover à définir
    return htmlImg;
}

// On cree chaque carte
imgLegumes
