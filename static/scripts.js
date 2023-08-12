// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    // Get the element with the 'typed' class
    var typedElement = document.querySelector('.typed');

    // Check if the element exists
    if (typedElement) {
        // Get the data-typed-items attribute value
        var typedItems = typedElement.getAttribute('data-typed-items');

        // Initialize Typed.js
        var typed = new Typed('.typed', {
            strings: typedItems.split(',').map(item => item.trim()), // Split and trim the items
            typeSpeed: 80,
            backSpeed: 40,
            backDelay: 1000,
            startDelay: 1000,
            loop: true,
            loopCount: Infinity,
            showCursor: true,
            cursorChar: '|',
        });
    }
});
