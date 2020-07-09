let container = document.querySelector('.container');
let btnBckChanger = document.querySelector('.btn-color-changer');
let textContainer = document.querySelector('.text-container');

function changeColor(){
    let newHSL = generateColor();
    container.style.backgroundColor = newHSL;
    console.log(container.style.backgroundColor);
    textContainer.innerHTML = newHSL;
}

function generateColor(){
    let hue = randomIntFromInterval(0, 360);
    let saturation = randomIntFromInterval(0, 100);
    let lightness = randomIntFromInterval(0, 100);

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}