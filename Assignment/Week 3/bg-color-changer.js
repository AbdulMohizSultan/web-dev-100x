
const colorDiv = document.querySelector('.color_change');

function changeColor(color) {
    colorDiv.style.backgroundColor = color;
}

document.querySelector('.Red').addEventListener('click', () => changeColor('red'));
document.querySelector('.Yellow').addEventListener('click', () => changeColor('yellow'));
document.querySelector('.Black').addEventListener('click', () => changeColor('black'));
document.querySelector('.Pure').addEventListener('click', () => changeColor('purple'));
document.querySelector('.Green').addEventListener('click', () => changeColor('green'));
document.querySelector('.Bule').addEventListener('click', () => changeColor('blue'));
document.querySelector('.Default').addEventListener('click', () => changeColor('antiquewhite'));

