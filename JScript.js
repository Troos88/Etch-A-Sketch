const grid = document.getElementById('grid');
const sizeButtons = document.querySelectorAll('.size');

let brushSize = 50;
let color = 'black';

sizeButtons.forEach(button => {button.addEventListener('click', changeSize);});

function paint()
{
    grid.style.gridTemplateColumns = `repeat(${brushSize}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${brushSize}, 1fr)`

    for(let i = 0; i < brushSize * brushSize; i++)
    {
        const element = document.createElement('div');
        element.classList.add('element');
        element.addEventListener('mouseover', () => {element.style.backgroundColor = color});
        

        grid.appendChild(element);

    }
}

function clearCanvas()
{
    while(grid.firstChild)
    {
        grid.removeChild(grid.firstChild);
    }
    paint();
}

function changeSize(e)
{
    brushSize = e.target.id;
    clearCanvas();
}

paint();