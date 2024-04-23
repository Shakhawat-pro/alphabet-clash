// function play(){
//     const homeSection = document.getElementById('home-section')
//     homeSection.classList.add('hidden')
//     const playgroundSection = document.getElementById('playground-section')
//     playgroundSection.classList.remove('hidden')
// }

const audio = new Audio()
let isGamePlayOn = false

const artBoard = document.getElementById('art-board')

//timer
const timerElement = document.getElementById('timer');
let timeLeft = parseInt(timerElement.style.getPropertyValue('--value'));

function countdown() {
    if (timeLeft > 0) {
        timeLeft--;
        timerElement.style.setProperty('--value', timeLeft);
        setTimeout(countdown, 1000); 
    } else {
        gameOver()
    }
}

// function playAgain(){
//     const playAgainElement = document.getElementById('play-again');
//     playAgainElement.classList.add('hidden');
// }


function handleKeyBoardKeyUPEvent(event){
    if(isGamePlayOn == false){
        return
    }
    const playerPress = event.key
    console.log('player pressed', playerPress)
    if(playerPress === 'Escape'){
        gameOver()
    }
    const currentAlphabetElement = document.getElementById('random-display')
    const currentAlphabet = currentAlphabetElement.innerText
    const expectedAlphabet = currentAlphabet.toLowerCase();
    if(playerPress === expectedAlphabet){
        //Audio
        audio.src = "/audio/point.mp3"
        audio.play()
        // update score
        const currentScoreElement = document.getElementById('current-score')
        const currentScoreText =currentScoreElement.innerText
        const currentScore = parseInt(currentScoreText);
        const newScore = currentScore + 1 ;
        currentScoreElement.innerText = newScore;
        // Start a new round
        continueGame();
        removeBackgroundColor(expectedAlphabet);
    }
    else{
        // audio
        audio.src = "/audio/fail.mp3"
        audio.play()
        
        
        
        const currentLifeElement = document.getElementById('current-life')
        const currentLifeText = currentLifeElement.innerText
        const currentLife = parseInt(currentLifeText)
        const newLife = currentLife - 1;
        currentLifeElement.innerText = newLife
        //Dynamic color
        const newLifePercentage = (newLife / 5) * 100
        console.log(newLifePercentage);
        artBoard.style.background =`linear-gradient(#FFFFFFB3 ${newLifePercentage}%, red)`
        
        if(newLife === 0){
            gameOver()
            audio.src = "/audio/game-over.mp3"
            audio.play()
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
    isGamePlayOn = true;
    timeLeft = 30;
    countdown()
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
    isGamePlayOn = false

    artBoard.style.background =`linear-gradient(#FFFFFFB3 100%, red)`
}

function returnToHome() {
    hideElementById('playground-section');
    hideElementById('final-section');
    showHiddenId('home-section');
    isGamePlayOn = false;
}

