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

        const isExpanded =
            question.getAttribute("aria-expanded") === "true";

        question.setAttribute("aria-expanded", !isExpanded);

        if (answer) {
            answer.hidden = isExpanded;
        }

    });

});


// ========================================
// 2. IMAGE GALLERY LIGHTBOX
// ========================================

const openLightboxButton =
    document.getElementById("openLightbox");

const imageLightbox =
    document.getElementById("imageLightbox");

const closeLightboxButton =
    document.getElementById("closeLightbox");


if (openLightboxButton && imageLightbox && closeLightboxButton) {

    openLightboxButton.addEventListener("click", function () {

        imageLightbox.hidden = false;
        closeLightboxButton.focus();

    });

    closeLightboxButton.addEventListener("click", function () {

        imageLightbox.hidden = true;
        openLightboxButton.focus();

    });

    imageLightbox.addEventListener("click", function (event) {

        if (event.target === imageLightbox) {

            imageLightbox.hidden = true;
            openLightboxButton.focus();

        }

    });

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape" && !imageLightbox.hidden) {

            imageLightbox.hidden = true;
            openLightboxButton.focus();

        }

    });

}


// ========================================
// 3. MENU PRODUCT SEARCH
// ========================================

const menuSearch = document.getElementById("menuSearch");

const menuItems = document.querySelectorAll(".menu-item");

const noSearchResults =
    document.getElementById("noSearchResults");


if (menuSearch && menuItems.length > 0) {

    menuSearch.addEventListener("input", function () {

        const searchText = menuSearch.value.toLowerCase().trim();

        let matchingItems = 0;

        menuItems.forEach(function (item) {

            const productText = item.textContent.toLowerCase();

            if (productText.includes(searchText)) {

                item.hidden = false;
                matchingItems++;

            } else {

                item.hidden = true;

            }

        });

        if (noSearchResults) {
            noSearchResults.hidden = matchingItems !== 0;
        }

    });


    menuSearch.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            event.preventDefault();

            const searchText = menuSearch.value.toLowerCase().trim();

            const matchingItem = Array.from(menuItems).find(function (item) {

                return item.textContent.toLowerCase().includes(searchText);

            });

            if (matchingItem) {

                matchingItem.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

                matchingItem.style.outline = "3px solid #ff69b4";

                setTimeout(function () {

                    matchingItem.style.outline = "";

                }, 2500);

            }

        }

    });

}


// ========================================
// 4. WEBSITE CONFIRMATION
// ========================================

console.log("Chill & Swirl JavaScript loaded successfully.");