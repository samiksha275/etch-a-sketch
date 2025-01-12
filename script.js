let isActive = false;
let pixDimension = 16;
let c = 250;
const container = document.querySelector('.container');

eventListeners();
createPixels();

document.querySelector('.grid').addEventListener("click", () => {
    container.innerHTML = '';
    pixDimension = document.querySelector('.pix-dim').value && Number(document.querySelector('.pix-dim').value) < 20 
        ? parseInt(document.querySelector('.pix-dim').value) 
        : 16;
    isActive = false; // Reset active state
    c = 50;
    createPixels();
    eventListeners();
});

function createPixels() {
    const cols = Math.ceil(window.innerWidth / pixDimension);
    const rows = Math.ceil(window.innerHeight / pixDimension);

    for (let i = 0; i < rows * cols; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.height = `${pixDimension}px`;
        pixel.style.width = `${pixDimension}px`;
        container.appendChild(pixel);
    }
}

function colorPixel(event) {
    const pixel = event.target; // Target the hovered pixel
    let currentOpacity = parseFloat(pixel.style.opacity) || 0.1; // Get the current opacity
    pixel.style.backgroundColor = `rgb(${c}, ${c}, ${c})`;
    if(c > 2){
        c -= 2 ;
    }
}

function eventListeners() {
    document.body.addEventListener("keydown", () => {
        if (!isActive) {
            // Activate coloring
            document.querySelectorAll('.pixel').forEach((pixel) => {
                pixel.addEventListener('mouseenter', colorPixel);
            });
            isActive = true;
        } else {
            // Deactivate coloring
            document.querySelectorAll('.pixel').forEach((pixel) => {
                pixel.removeEventListener('mouseenter', colorPixel);
            });
            isActive = false;
        }
    });
}

