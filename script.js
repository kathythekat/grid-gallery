const carouselImages = document.querySelector('.carousel-images');

const carouselButtons = document.querySelectorAll('.carousel-button');

const numOfImages = document.querySelectorAll('.carousel-images img').length;

let imageIndex = 1;

let translateX = 0;

//event listener for clicking carousel buttons

carouselButtons.forEach(button => {
    button.addEventListener('click', event => {
        event.stopPropagation();
         if (event.target.id === 'previous') {
             if(imageIndex !== 1) {
                 imageIndex--;
                 translateX += 480;
             } else {
                imageIndex = numOfImages;
                translateX = 480 - (480 * numOfImages);
             }
         } else {
             if(imageIndex !== numOfImages) {
                imageIndex++;
                translateX -= 480;
             } else {
                 imageIndex = 1;
                 translateX = 0;
             }
         }

        carouselImages.style.transform = `translateX(${translateX}px)`;
    });
})

//click on image in grid gallery, have carousel modal pop up.

const squares = document.querySelectorAll('.grid-container img');

squares.forEach(square => {
    square.addEventListener('click', openCarousel);
})

const carouselModal = document.getElementById('carouselModal');

console.log(squares);

function openCarousel(e) {
    console.log(e.target);
    
    const number = Number(e.target.id.split('-')[1])

    const translateX = `-${(480*(number)-480)}px`;

    carouselImages.style.transform = `translateX(${translateX})`
    carouselModal.classList.add("carousel-modal--open");
}

carouselModal.addEventListener('click', closeCarousel);

function closeCarousel() {
    carouselModal.classList.remove('carousel-modal--open');
}

//when clicking on a square, open carousel modal to that matching image
    //if i click on square-1, open imageindex1, 

