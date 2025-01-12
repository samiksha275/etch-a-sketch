createPixels();
function createPixels(){
    const cols = Math.ceil(window.innerHeight / 16), rows = Math.ceil(window.innerWidth / 16);
    let i, element = document.querySelector('.container');
    for(i = 0; i < rows * cols; i++){
        let newElement = document.createElement('div');
        newElement.classList.add('pixel');
        element.appendChild(newElement);
    }
    document.body.appendChild(element);
}