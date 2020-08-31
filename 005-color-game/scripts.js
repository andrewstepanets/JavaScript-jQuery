const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    
    return `rgb(${red}, ${green}, ${blue})`;
}

const generateRandomColor = num => {
    const arr = [];
    // add random colors to array
    for (let index = 0; index < num; index++) {
        // get random color and push into array
        arr.push(randomColor());
    }
    return arr;
};

const colors = generateRandomColor(6);

// function helps 
const pickColor = (arr) => {
     const random = Math.floor(Math.random() * arr.length);
    return arr[random];
}

const header = document.querySelector('.header');
const squares = document.querySelectorAll('.square');
const pickedColor = pickColor(colors);
const colorDisplay = document.querySelector('.colorDisplay');
const message = document.querySelector('#message');
const resetColorButton = document.querySelector('#resetColorButton');

colorDisplay.textContent = pickedColor;


const handleClick = event => {
    const { backgroundColor } = event.target.style;
    if(backgroundColor === pickedColor) {
        message.textContent = 'Color Correct!';
        squares.forEach((square, color) => {
            square.style.backgroundColor = pickedColor;
        });
        header.style.background = pickedColor;
    } else {
        event.target.style.backgroundColor = '#232323';
        message.textContent = 'Try Again!';
    }
};

squares.forEach((square, idx) => {
    // adding back color to square div
    square.style.backgroundColor = colors[idx];
    // add Event Listeners
    square.addEventListener('click', handleClick);
});


