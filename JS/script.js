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
// 4. INTERACTIVE LOCATION MAP
// ========================================

const mapElement = document.getElementById("locationMap");

if (mapElement && typeof L !== "undefined") {

    // Create the map centred between the two areas
    const locationMap = L.map("locationMap").setView(
        [-25.7535, 28.2270],
        14
    );

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(locationMap);

    // Approximate Pretoria Central area marker
    const pretoriaMarker = L.marker([-25.7479, 28.2293])
        .addTo(locationMap);

    pretoriaMarker.bindPopup(
        "<strong>Chill & Swirl Ice Cream</strong><br>Pretoria Central<br>Approximate area"
    );

    // Approximate Sunnyside area marker
    const sunnysideMarker = L.marker([-25.7585, 28.2250])
        .addTo(locationMap);

    sunnysideMarker.bindPopup(
        "<strong>Chill & Swirl Ice Cream</strong><br>Sunnyside<br>Approximate area"
    );

    // Display both locations when the map loads
    pretoriaMarker.openPopup();

} else if (mapElement) {

    console.error("Leaflet could not load. Please check your internet connection.");

}


// ========================================
// 5. WEBSITE CONFIRMATION
// ========================================

console.log("Chill & Swirl JavaScript loaded successfully.");