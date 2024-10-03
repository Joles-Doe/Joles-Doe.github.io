function SplitScroll() {
    const scrollController = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: '.aboutMeTitle',
        triggerHook: 0
    })
    .setPin('.aboutMeTitle')
    .addTo(scrollController)
}

$(document).ready(function() {
    SplitScroll();
});