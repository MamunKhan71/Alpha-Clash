function hideElementByID(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementByID(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function addBgColor(elementId){
    const bg = document.getElementById(elementId);
    bg.classList.add('bg-amber-400');
}

function removeBgColor(elementId){
    const bg = document.getElementById(elementId);
    bg.classList.remove('bg-amber-400');
}

function checkValue(generatedValue, inputValue){
    if(generatedValue == inputValue){
        return true;
    }else{
        return false;
    }
}