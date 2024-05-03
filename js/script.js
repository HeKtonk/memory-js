const imgBoard = document.getElementById("memory-game");
const restartGameBtn = document.getElementById("restart");
let isAllRevealed = false;
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let pair = 0;
let nbError = 0;
displayNbError();

let imgLegumes = [
    "/resources/memory-legume/1.svg",
    "/resources/memory-legume/2.svg",
    "/resources/memory-legume/3.svg",
    "/resources/memory-legume/4.svg",
    "/resources/memory-legume/5.svg",
    "/resources/memory-legume/6.svg"
];

imgLegumes = imgLegumes.concat(imgLegumes);

function shuffleImg(imgTable) {
    for(let i = imgTable.length-1; i > 0; i--){
        const j = Math.floor(Math.random()*(i+1));
        [imgTable[i], imgTable[j]] = [imgTable[j], imgTable[i]]
    }
    return imgTable
}
shuffleImg(imgLegumes);

function createHtmlImg(image){
    const htmlImg = document.createElement("div");
    htmlImg.className = "memory-card";
    htmlImg.dataset.legume = `${image}`;
    htmlImg.innerHTML = `<img src="${image}" alt="Loading..." class="front-face"/>
    <img src="resources/logo-javascript.svg" alt="Loading..." class="back-face"/>`
    return htmlImg;
}

imgLegumes.forEach((image)=>{
    const imageBoard = createHtmlImg(image);
    imgBoard.appendChild(imageBoard).addEventListener('click', flipCard);
});

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        return;
    }
    
    hasFlippedCard = false;
    secondCard = this;

    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.legume === secondCard.dataset.legume;
    isMatch ? disableCards() : unFlipCards();
    isWin(pair);
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
    pair++;
    displayScore();
}

function unFlipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
        nbError++;
        displayNbError();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

restartGameBtn.addEventListener("click", () => {
  location.reload();
});

function isWin(pair) {
    if (pair === 6) {
        setTimeout(() => {
            alert("Tu as découvert toutes les paires !");
        }, 1500);
    }
}

function displayNbError() {
    const error = document.getElementById("displayError");
    error.textContent = nbError + " coup(s) effectué(s)"
}

function displayScore() {
    const error = document.getElementById("displayError");
    error.textContent = error.textContent + " et " + pair + " paire(s) trouvée(s) !";
}
