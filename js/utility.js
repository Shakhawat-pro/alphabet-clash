function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}
function showHiddenId(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}

function addBackgroundColor(elementId){
    const color = document.getElementById(elementId)
    color.classList.add('bg-rose-500', 'text-white');
}
function removeBackgroundColor(elementId){
    const color = document.getElementById(elementId)
    color.classList.remove('bg-rose-500', 'text-white');
}
function setElementValueByID(elementId, value){
    const element = document.getElementById(elementId)
    element.innerText = value
}
function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random()*25
    const index = Math.round(randomNumber)
    const alphabet = alphabets[index]
    return alphabet;
}