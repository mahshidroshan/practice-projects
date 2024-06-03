const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const eraseBtn = document.getElementById('erase');
const penBtn = document.getElementById('pen');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

let size = 10;
let isPressed = false;
let color = colorEl.value = 'black';
let x, y;
let currentTool = 'pen';

// Function to resize canvas
function resizeCanvas() {
    const pixelRatio = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * pixelRatio;
    canvas.height = rect.height * pixelRatio;
    ctx.scale(pixelRatio, pixelRatio);
}

// Function to update brush size on screen
function updateSizeOnScreen() {
    sizeEL.innerText = size;
}

// Function to draw a circle
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

// Function to draw a line
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

// Function to get mouse position relative to canvas
function getMousePos(canvas, e) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}

// Mouse event listeners
canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    const pos = getMousePos(canvas, e);
    x = pos.x;
    y = pos.y;
    if(currentTool === 'pen'){
        drawCircle(x, y);
    } else if (currentTool === "erase"){
        eraseAt(x, y);
    }
});

document.addEventListener('mouseup', () => {
    isPressed = false;
    x = y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
    if (!isPressed) return;
    const pos = getMousePos(canvas, e);
    const x2 = pos.x;
    const y2 = pos.y;
    if (currentTool === 'pen') {
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
    } else if (currentTool === 'erase') {
        eraseAt(x2, y2);
    }
    x = x2;
    y = y2;
});

// Function to erase at a specific position
function eraseAt(x, y) {
    ctx.save(); // Save the current state of the canvas
    ctx.globalCompositeOperation = 'destination-out'; // Set the composite operation to 'destination-out' to erase instead of drawing
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2); // Use arc to create a circular erase area
    ctx.fill();
    ctx.restore(); // Restore the canvas state to what it was before erasing
}

// Button event listeners
increaseBtn.addEventListener('click', () => {
    size = Math.min(size + 5, 50);
    updateSizeOnScreen();
});

decreaseBtn.addEventListener('click', () => {
    size = Math.max(size - 5, 5);
    updateSizeOnScreen();
});

penBtn.addEventListener('click', () => {
    currentTool = 'pen';
})

eraseBtn.addEventListener('click', () => {
    currentTool = 'erase';
})

colorEl.addEventListener('change', (e) => color = e.target.value);

clearEl.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));

// Resize canvas on window resize
window.addEventListener('resize', resizeCanvas);
resizeCanvas();
updateSizeOnScreen();