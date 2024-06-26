let currentSlide = 0;

function moveSlide(direction) {
    const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.sliderimg');
    const totalSlides = slides.length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const offset = -currentSlide * 100;
    slider.style.transform = `translateX(${offset}%)`;
}


let currentSlide2 = 0;

function moveDynamic(direction) {
    const slides = document.querySelectorAll('.sliderdiv img');
    const totalSlides = slides.length;

    currentSlide2 = (currentSlide2 + direction + totalSlides) % totalSlides;
    const newTransform = -currentSlide2 * 100; // 100% width of each slide
    document.querySelector('.slidercontent').style.transform = `translateX(${newTransform}%)`;
}


let currentSlide3 = 0;

function moveDynamicc(direction) {
    const slidess = document.querySelectorAll('.sliderdiv02 img'); // Fixed variable name
    const totalSlides = slidess.length;

    currentSlide3 = (currentSlide3 + direction + totalSlides) % totalSlides; // Using currentSlide3 consistently
    const newTransformm = -currentSlide3 * 100; // 100% width of each slide, fixed variable name
    document.querySelector('.slidercontent02').style.transform = `translateX(${newTransformm}%)`; // Applying the transform
}

let currentSlide4 = 0;

function moveDynamiccc(direction) {
    const slidess = document.querySelectorAll('.sliderdiv03 img'); // Fixed variable name
    const totalSlides = slidess.length;

    currentSlide4 = (currentSlide4 + direction + totalSlides) % totalSlides; // Using currentSlide3 consistently
    const newTransformm = -currentSlide4 * 100; // 100% width of each slide, fixed variable name
    document.querySelector('.slidercontent03').style.transform = `translateX(${newTransformm}%)`; // Applying the transform
}

let currentSlide5 = 0;

function moveDynamicccc(direction) {
    const slidess = document.querySelectorAll('.sliderdiv04 img'); // Fixed variable name
    const totalSlides = slidess.length;

    currentSlide5 = (currentSlide5 + direction + totalSlides) % totalSlides; // Using currentSlide3 consistently
    const newTransformm = -currentSlide5 * 100; // 100% width of each slide, fixed variable name
    document.querySelector('.slidercontent04').style.transform = `translateX(${newTransformm}%)`; // Applying the transform
}

let currentSlide6 = 0;

function moveDynamiccccc(direction) {
    const slidess = document.querySelectorAll('.sliderdiv05 img'); // Fixed variable name
    const totalSlides = slidess.length;

    currentSlide6 = (currentSlide6 + direction + totalSlides) % totalSlides; // Using currentSlide3 consistently
    const newTransformm = -currentSlide6 * 100; // 100% width of each slide, fixed variable name
    document.querySelector('.slidercontent05').style.transform = `translateX(${newTransformm}%)`; // Applying the transform
}

let currentSlide7 = 0;

function moveDynamicccccc(direction) {
    const slidess = document.querySelectorAll('.sliderdiv06 img'); // Fixed variable name
    const totalSlides = slidess.length;

    currentSlide7 = (currentSlide7 + direction + totalSlides) % totalSlides; // Using currentSlide7 consistently
    const newTransformm = -currentSlide7 * 100; // 100% width of each slide, fixed variable name
    document.querySelector('.slidercontent06').style.transform = `translateX(${newTransformm}%)`; // Applying the transform
}

let currentSlide8 = 0;

function moveDynamiccccccc(direction) {
    const slidess = document.querySelectorAll('.sliderdiv07 img'); // Fixed variable name
    const totalSlides = slidess.length;

    currentSlide8 = (currentSlide8 + direction + totalSlides) % totalSlides; // Using currentSlide7 consistently
    const newTransformm = -currentSlide8 * 100; // 100% width of each slide, fixed variable name
    document.querySelector('.slidercontent07').style.transform = `translateX(${newTransformm}%)`; // Applying the transform
}
