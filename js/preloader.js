document.addEventListener("DOMContentLoaded", function () {
    // Show the preloader for 2 seconds
    setTimeout(function () {
        // Hide the preloader and show the main content after 2 seconds
        document.querySelector(".preloader").style.display = "none";
        document.querySelector(".main-content").style.display = "block";
    }, 2000); // Adjust the duration in milliseconds (2 seconds in this example)
});
