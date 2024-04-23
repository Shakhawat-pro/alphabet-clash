// function play(){
//     const homeSection = document.getElementById('home-section')
//     homeSection.classList.add('hidden')
//     const playgroundSection = document.getElementById('playground-section')
//     playgroundSection.classList.remove('hidden')
// }
function playAgain(){
    const playAgain = document.getElementById('play-again')
    playAgain.classLists.add('hidden')
}
function handleKeyBoardKeyUPEvent(event){
    const playerPress = event.key
    console.log('player pressed', playerPress)
    if(playerPress === 'Escape'){
        gameOver()
    }
    const currentAlphabetElement = document.getElementById('random-display')
    const currentAlphabet = currentAlphabetElement.innerText
    const expectedAlphabet = currentAlphabet.toLowerCase();
    if(playerPress === expectedAlphabet){
        // update score
        // 1.get the current score
        const currentScoreElement = document.getElementById('current-score')
        const currentScoreText =currentScoreElement.innerText
        const currentScore = parseInt(currentScoreText);
        const newScore = currentScore + 1 ;
        currentScoreElement.innerText = newScore;
        // 2.
        // Start a new round
        continueGame();
        removeBackgroundColor(expectedAlphabet);
    }
    else{
        const currentLifeElement = document.getElementById('current-life')
        const currentLifeText = currentLifeElement.innerText
        const currentLife = parseInt(currentLifeText)
        const newLife = currentLife - 1;
        currentLifeElement.innerText = newLife
        console.log('nur')

        if(newLife === 0){
            gameOver()
        }

    }
} 
document.addEventListener('keyup', handleKeyBoardKeyUPEvent)

function continueGame(){
    const alphabet = getARandomAlphabet();
    const randomDisplay = document.getElementById('random-display')
    randomDisplay.innerText = alphabet
    addBackgroundColor(alphabet)    

}

function play(){
    hideElementById('home-section')
    hideElementById('final-section')
    showHiddenId('playground-section')
    setElementValueByID('current-life', 5)
    setElementValueByID('current-score', 0)
    continueGame()
}

function gameOver(){
    hideElementById('playground-section')
    showHiddenId('final-section')
    // Update finale score
    const lastScoreElement = document.getElementById('current-score')
    const lastScoreText = lastScoreElement.innerText
    const lastScore = parseInt(lastScoreText)
    const gameScore = document.getElementById('game-score')
    gameScore.innerText = lastScore

    const randomDisplayElement = document.getElementById('random-display')
    const randomDisplayText = randomDisplayElement.innerText
    removeBackgroundColor(randomDisplayText);


}