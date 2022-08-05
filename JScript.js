const board = document.querySelector('.board');


function createBox()
{
    const square = document.createElement('div');
    square.classList.add('.square');
    square.style.width = '20px';
    square.style.height = '20px';
    square.style.border = '1px solid black';


    board.appendChild(square);
}

for(let i = 1; i <= 10; i++)
{
    createBox();
}
