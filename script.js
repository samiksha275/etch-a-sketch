let isActive = false;
let pixDimension = 16;
const container = document.querySelector('.container');
eventListeners();
createPixels();

document.querySelector('.grid').addEventListener("click", () => {
    container.innerHTML = '';
    pixDimension = document.querySelector('.pix-dim').value && Number(document.querySelector('.pix-dim').value) < 20? parseInt(document.querySelector('.pix-dim').value) : 16;
    isActive = false;
    eventListeners();
    createPixels();
})
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
    event.target.style.backgroundColor = 'black';
}

function eventListeners(){
    document.body.addEventListener("keydown", () => {
        if (isActive === false) {
        document.querySelectorAll('.pixel').forEach((item) => {
            item.addEventListener('mouseenter', colorPixel);
        });
        isActive = true;
        } 
        else {
        document.querySelectorAll('.pixel').forEach((item) => {
            item.removeEventListener('mouseenter', colorPixel);
        });
        isActive = false;
        }
    });
}
