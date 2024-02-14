function randomAlphabetGenerator(){
    let difference = 90-65;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = String.fromCodePoint(rand + 65);
    return rand;
}

function play(){
    hideElementByID('home');
    showElementByID('playground');
    const randAlpha = randomAlphabetGenerator();
    const alphaChange = document.getElementById('randAlpha');
    alphaChange.innerText = randAlpha;
    addBgColor(randAlpha.toLowerCase());    
}
document.addEventListener('keypress', function(e){
    if(e.key === "Enter" && document.getElementById('home').style.display !== 'none'){
        e.preventDefault();
        
        play();
    }
})