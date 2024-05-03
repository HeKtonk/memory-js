const imgBoard = document.getElementById("memory-game");
const restartGameBtn = document.getElementById("restart");
let isAllRevealed = false;
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let pair = 0;
let nbError = 0;

let imgLegumes = [
    "/memory-js/resources/memory-legume/1.svg",
    "/memory-js/resources/memory-legume/2.svg",
    "/memory-js/resources/memory-legume/3.svg",
    "/memory-js/resources/memory-legume/4.svg",
    "/memory-js/resources/memory-legume/5.svg",
    "/memory-js/resources/memory-legume/6.svg"
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
    <img src="/memory-js/resources/logo-javascript.svg" alt="Loading..." class="back-face"/>`
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
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
    nbError++;
}

function unFlipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
        pair++;
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

restartGameBtn.addEventListener("click", () => {
  location.reload();
});