const colors = [
    'rgb(255, 0, 0)',
    'rgb(255, 255, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 255, 255)',
    'rgb(0, 0, 255)',
    'rgb(255, 0, 255)',
];

// function helps 
const pickColor = () => {
     const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

const squares = document.querySelectorAll('.square');
const pickedColor = pickColor();
const colorDisplay = document.querySelector('.colorDisplay');
const message = document.querySelector('#message');

colorDisplay.textContent = pickedColor;



const handleClick = event => {
    const { backgroundColor } = event.target.style;
    if(backgroundColor === pickedColor) {
        message.textContent = 'Color Correct!';
        
        squares.forEach((square, color) => {
            square.style.backgroundColor = pickedColor;
        });
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

