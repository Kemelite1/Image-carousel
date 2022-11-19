
var track = document.querySelector('.carouseltrack');
var slides = Array.from(track.children);
var nextButton = document.querySelector('.carousel-button--left');
var prevButton = document.querySelector('.carousel-button--right');
var dotsNav = document.querySelector('.carouselnav');
var dots = Array.from('dotsNav.children');

var slideWidth = slides[0].getBoundingClientRect().width;

// console.log(slideWidth);


// arrange the slides next to one another
var setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';


};
slides.forEach(setSlidePosition);

var moveToSlide = (track, currentSlide, targetSlide) => {
    console.log('ggg')
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');

}

// when i click left, move slides to the left
prevButton.addEventListener('click', e => {
    var currentSlide = track.querySelector('.current-slide');
    var prevSlide = currentSlide.previousElementSibling;
    
    moveToSlide(track, currentSlide, prevSlide);

});



// when i click right, move slides to the right
nextButton.addEventListener('click', e => {
    var currentSlide = track.querySelector('.current-slide');
    var nextSlide = currentSlide.nextElementSibling;
    
    moveToSlide(track, currentSlide, nextSlide);
});
// when i click the nav indicators, move to that slide