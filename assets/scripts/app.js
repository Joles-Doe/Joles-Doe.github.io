function SplitScroll() {
    const scrollController = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: 500,
        triggerElement: '.aboutMeTitle'
    })
    .addIndicators()
    .addTo(scrollController)
}

console.log("jQuery version:", jQuery.fn.jquery);
$(document).ready(function() {
    SplitScroll();
});