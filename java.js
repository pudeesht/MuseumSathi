
document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.events-carousel');
    let scrollAmount = 0;

    function autoScroll() {
        if (carousel.scrollWidth !== carousel.clientWidth) {
            carousel.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
            scrollAmount += 300;
            if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
                scrollAmount = 0;
                carousel.scrollTo({ left: 0, behavior: 'smooth' });
            }
        }
    }

    // Adjust the interval to control the auto-scrolling speed
    setInterval(autoScroll, 3000);
});
