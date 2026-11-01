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
// 4. INQUIRY FORM VALIDATION AND RESPONSE
// ========================================

const inquiryForm = document.getElementById("inquiryForm");

const inquiryResponse =
    document.getElementById("inquiryResponse");


if (inquiryForm && inquiryResponse) {

    inquiryForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Check whether all required fields are valid
        if (!inquiryForm.checkValidity()) {

            inquiryForm.reportValidity();
            return;

        }

        // Collect customer information
        const customerName =
            document.getElementById("name").value.trim();

        const inquiryType =
            document.getElementById("inquiry-type").value;

        const product =
            document.getElementById("product").value;

        const quantity =
            document.getElementById("quantity").value;

        // Prepare a response based on the inquiry type
        let responseMessage = "";

        switch (inquiryType) {

            case "general":
                responseMessage =
                    "Thank you for your question. Our team will be happy to assist you with more information about Chill & Swirl Ice Cream.";
                break;

            case "order":
                responseMessage =
                    "Thank you for your order inquiry. Our team will review your selected product and quantity and assist you with the ordering process.";
                break;

            case "availability":
                responseMessage =
                    "Thank you for checking product availability. Please contact our team to confirm whether your selected product is currently available.";
                break;

            case "event":
                responseMessage =
                    "Thank you for considering Chill & Swirl Ice Cream for your event. Our team will assist you with available options and pricing.";
                break;

            case "special-request":
                responseMessage =
                    "Thank you for your special request. Our team will review your requirements and assist you where possible.";
                break;

            default:
                responseMessage =
                    "Thank you for contacting Chill & Swirl Ice Cream.";
        }

        // Display the customer's response
        inquiryResponse.textContent =
            "Thank you, " + customerName + "! " +
            responseMessage +
            (product ? " Selected product: " + product + "." : "") +
            " Quantity: " + quantity + ".";

        // Reset the form after successful submission
        inquiryForm.reset();

        // Bring the response into view
        inquiryResponse.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

}


// ========================================
// 5. WEBSITE CONFIRMATION
// ========================================

console.log("Chill & Swirl JavaScript loaded successfully.");