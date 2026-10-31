// ========================================
// CHILL & SWIRL ICE CREAM
// PART 3 - JAVASCRIPT FUNCTIONALITY
// ========================================


// ========================================
// 1. FAQ ACCORDION
// ========================================

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const answerId = question.getAttribute("aria-controls");
        const answer = document.getElementById(answerId);

        const isExpanded = question.getAttribute("aria-expanded") === "true";

        question.setAttribute("aria-expanded", !isExpanded);

        answer.hidden = isExpanded;

    });

});


// ========================================
// 2. IMAGE GALLERY LIGHTBOX
// ========================================

const openLightboxButton = document.getElementById("openLightbox");
const imageLightbox = document.getElementById("imageLightbox");
const closeLightboxButton = document.getElementById("closeLightbox");


if (openLightboxButton && imageLightbox && closeLightboxButton) {

    // Open the lightbox when the gallery image is clicked
    openLightboxButton.addEventListener("click", function () {

        imageLightbox.hidden = false;
        closeLightboxButton.focus();

    });


    // Close the lightbox using the close button
    closeLightboxButton.addEventListener("click", function () {

        imageLightbox.hidden = true;
        openLightboxButton.focus();

    });


    // Close the lightbox when the background is clicked
    imageLightbox.addEventListener("click", function (event) {

        if (event.target === imageLightbox) {

            imageLightbox.hidden = true;
            openLightboxButton.focus();

        }

    });


    // Close the lightbox when Escape is pressed
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape" && !imageLightbox.hidden) {

            imageLightbox.hidden = true;
            openLightboxButton.focus();

        }

    });

}


// ========================================
// 3. WEBSITE CONFIRMATION
// ========================================

console.log("Chill & Swirl JavaScript loaded successfully.");