let isActive = false;
    const container = document.querySelector('.container');

    function createPixels() {
      const cols = Math.ceil(window.innerWidth / 16);
      const rows = Math.ceil(window.innerHeight / 16);

      //container.innerHTML = ''; // Clear existing pixels

      for (let i = 0; i < rows * cols; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        container.appendChild(pixel);
      }
    }

    // Function that handles mouseenter event
    function colorPixel(event) {
      event.target.style.backgroundColor = 'black';
    }

    // Add event listener for key press
    document.body.addEventListener("keydown", () => {
      if (isActive === false) {
        // Add the mouseenter event listener to all pixels
        document.querySelectorAll('.pixel').forEach((item) => {
          item.addEventListener('mouseenter', colorPixel);
        });
        isActive = true;
      } else {
        // Remove the mouseenter event listener from all pixels
        document.querySelectorAll('.pixel').forEach((item) => {
          item.removeEventListener('mouseenter', colorPixel);
        });
        isActive = false;
      }
    });

    createPixels(); 