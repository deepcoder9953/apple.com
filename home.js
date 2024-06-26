var left = document.querySelector('.arrowleft');
var right = document.querySelector('.arrowright');
var slide = document.querySelector('.slider');
var slides = document.querySelectorAll('.sliderimg');

var slideWidth = 1400;
var totalSlides = slides.length;
var slideNum = 1;


var firstClone = slides[0].cloneNode(true);
var lastClone = slides[totalSlides - 1].cloneNode(true);


slide.appendChild(firstClone);
slide.insertBefore(lastClone, slides[0]);


slide.style.transform = `translateX(-${slideWidth}px)`;

var moveToNextSlide = () => {
    if (slideNum >= totalSlides) {
        slide.style.transition = 'none';
        slideNum = 1;
        slide.style.transform = `translateX(-${slideNum * slideWidth}px)`;
    } else {
        slide.style.transition = 'transform 0.5s ease';
        slideNum++;
        slide.style.transform = `translateX(-${slideNum * slideWidth}px)`;
    }
};

var moveToPrevSlide = () => {
    if (slideNum <= 0) {
        slide.style.transition = 'none';
        slideNum = totalSlides - 1;
        slide.style.transform = `translateX(-${slideNum * slideWidth}px)`;
    } else {
        slide.style.transition = 'transform 0.5s ease';
        slideNum--;
        slide.style.transform = `translateX(-${slideNum * slideWidth}px)`;
    }
};

right.addEventListener("click", moveToNextSlide);
left.addEventListener("click", moveToPrevSlide);

setInterval(moveToNextSlide, 3000);

slide.addEventListener('transitionend', () => {
    if (slides[slideNum] === firstClone) {
        slide.style.transition = 'none';
        slideNum = 1;
        slide.style.transform = `translateX(-${slideNum * slideWidth}px)`;
    }

    if (slides[slideNum] === lastClone) {
        slide.style.transition = 'none';
        slideNum = totalSlides - 1;
        slide.style.transform = `translateX(-${slideNum * slideWidth}px)`;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const sliderInner = document.querySelector(".sliderinnerimages");
    const controlButton = document.getElementById("controlbtn");
    let isRunning = true;

    controlButton.addEventListener("click", function () {
        if (isRunning) {
            sliderInner.classList.add("paused");
            controlButton.textContent = "Start";
        } else {
            sliderInner.classList.remove("paused");
            controlButton.textContent = "Stop";
        }
        isRunning = !isRunning;
    });
});
