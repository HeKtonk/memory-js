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
// Variable pour empêcher le joueur de retourner une carte si elle a etait retournée
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
    // Insert le contenu html dans htmlImg
    htmlImg.innerHTML = `<div class="">
    <img src="${image}" alt="">
    <div class="img-cover"<\div>
    <\div>`;
    // class img-cover à définir
    return htmlImg;
}

// On cree chaque carte
imgLegumes.forEach((image)=>{
    // On cree un element html pour la première img et on l'insert dans imageBoard
    const imageBoard = createHtmlImg(image);
    // Dans l'element div récupéré au depart, on lui ajoute un enfant avec l'elemnt contenu dans imageBoard
    imgBoard.appendChild(imageBoard);
});
// On ecoute le click sur la div de jeu
imgBoard.addEventListener("click", (event) => {
    // Si le click est bloqué, alors on sort de l'event
    if (clickBlocked) {
        return;
    }
    // On bloque le click sur cette image
    clickBlocked = true;
    // Si notre plateau d'image ne contient pas la class untapped alors on lui ajoute
    if(!imgBoard.classList.contains("untapped")) {
        imgBoard.classList.add("untapped");
    }
    // Si c'est la première carte
    if (firstImg) {
        // A comprendre
        let currentImg = imgBoard.querySelector("class1 class2");
    }
    // Si les deux images ont la même source, alors on verifie si la partie est terminée et on rest les variables
    if (currentImg.src === firstImg.src) {
        checkGameStatus();
        firstImg = null;
        currentImg = null;
    } else {
        setTimeout(() => {
            firstImg.parentNode.parentNode.classList.remove("untapped");
            firstImg = null;
            currentImg.parentNode.parentNode.classList.remove("untapped");
            currentImg = null;
        },3000);
    }
})

// il y a une erreur ou tout doit etre dans le if d'un if else
// lien
// https://github.com/jhrick/memory-game-js-vanilla/blob/main/js/script.js