const grid = document.getElementById('grid');
const sizeButtons = document.querySelectorAll('.size');
const colorButtons = document.querySelectorAll('#lastcolor');
const colorPicker = document.getElementById('colorpicker');

let brushSize = 50;
let color = "#0000ff";
let currentColorIndex = 1;

sizeButtons.forEach(button => {button.addEventListener('click', changeSize);});
colorButtons.forEach(button => {button.addEventListener('click', changeColor);});
colorButtons[0].value = color;
colorButtons[0].style.backgroundColor = color;
colorPicker.addEventListener('change', changeColor);

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

function changeColor()
{
    if(this.value == undefined) return;
    color = this.value;
    
    for(let i = 0; i < colorButtons.length; i++)
    {
        if(colorButtons[i].value === this.value) return;
    }

    if(currentColorIndex == colorButtons.length)
    {
        currentColorIndex = 0;
    }
        
    colorButtons[currentColorIndex].value = color;
    colorButtons[currentColorIndex].style.backgroundColor = color;

    currentColorIndex++;
    

    
}

paint();