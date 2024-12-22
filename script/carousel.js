const slides = document.querySelector(".slides");
const slideElements = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

function updateCarousel() {
    const slideWidth = slideElements[0].clientWidth;
    slides.style.transform = `translateX(${-currentIndex * slideWidth}px)`;

    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
    });
}

prevButton.addEventListener("click", () => {
    currentIndex =
        currentIndex === 0 ? slideElements.length - 1 : currentIndex - 1;
    updateCarousel();
});

nextButton.addEventListener("click", () => {
    currentIndex =
        currentIndex === slideElements.length - 1 ? 0 : currentIndex + 1;
    updateCarousel();
});

// Add click events for dots
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentIndex = index;
        updateCarousel();
    });
});

window.addEventListener("resize", updateCarousel); // Adjust carousel on window resize
