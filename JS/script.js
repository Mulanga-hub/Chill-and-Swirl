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
// 2. WEBSITE CONFIRMATION
// ========================================

console.log("Chill & Swirl JavaScript loaded successfully.");