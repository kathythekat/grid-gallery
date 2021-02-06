const carouselImages = document.querySelector('.carousel-images');

const carouselButtons = document.querySelectorAll('.carousel-button');

const numOfImages = document.querySelectorAll('.carousel-images img').length;

//click on image in grid gallery, have carousel modal pop up.

const squares = document.querySelectorAll('.grid-container img');

squares.forEach(square => {
    square.addEventListener('click', openCarousel);
})

const carouselModal = document.getElementById('carouselModal');


function openCarousel(e) {
    const number = Array.prototype.findIndex.call(squares, (square) => square === e.target);

    let translateX = `-${(480*number)}px`;
    let clickAxis = -480 * number;

    carouselImages.style.transform = `translateX(${translateX})`
    carouselModal.classList.add("carousel-modal--open");

    //event listener for clicking carousel buttons
    carouselButtons.forEach(button => {
        button.addEventListener('click', event => {
            if (event.target.id === 'previous') {
                if(clickAxis !== 0) {
                    clickAxis += 480;
                } else {
                    clickAxis = 480 - (480 * numOfImages);
                }
            } else {
                if(clickAxis !== (-480 * (numOfImages - 1))) {
                    clickAxis -= 480;
                } else {
                    clickAxis = 0;
                }
            }
            carouselImages.style.transform = `translateX(${clickAxis}px)`;
            event.stopPropagation();
        });
    })

    if (carouselModal.classList.contains('carousel-modal--open')) {
        document.addEventListener('keydown', e => {
            if (e.key === 'ArrowLeft') {
                if(clickAxis !== 0) {
                    clickAxis += 480;
                } else {
                    clickAxis = 480 - (480 * numOfImages);
                }
            } 
            if (e.key === 'ArrowRight') {
                if(clickAxis !== (-480 * (numOfImages - 1))) {
                    clickAxis -= 480;
                } else {
                    clickAxis = 0;
                }
            }
            carouselImages.style.transform = `translateX(${clickAxis}px)`; 
        })
    }

}

//close carousel modal when clicking on modal
carouselModal.addEventListener('click', closeCarousel);
function closeCarousel() {
    carouselModal.classList.remove('carousel-modal--open');
}
