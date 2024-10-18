function SplitScroll() {
    const scrollController = new ScrollMagic.Controller();

    var container = document.querySelector('.aboutMe');
    var containerHeight = container.offsetHeight;

    var scrollScene = new ScrollMagic.Scene({
        duration: containerHeight,
        triggerElement: '.aboutMeTitle',
        triggerHook: 0
    })
    .setPin('.aboutMeTitle')
    .addTo(scrollController)

    return scrollScene;
}

$(document).ready(function() {
    var scrollScene = SplitScroll();
    window.addEventListener('resize', function() {
        if (scrollScene)
        {
            scrollScene.destroy(true);
        }
        scrollScene = SplitScroll();
    })
});

// function UpdateDuration(scrollScene) {
//     var container = document.querySelector('.aboutMe');
//     var containerHeight = container.offsetHeight;
//     scrollScene.duration(containerHeight);
// }


// const track = document.getElementById("projectImageTrack")
// window.onmousedown = e => {
//     track.dataset.mouseDownAt = e.clientX;
// }
// window.onmousemove = e => {
//     if(track.dataset.mouseDownAt === "0") return;

//     const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX, maxDelta = window.innerWidth / 2;
    
//     const percentage = (mouseDelta / maxDelta) * -100;
//     const nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

//     track.dataset.percentage = nextPercentage;
//     track.style.transform = `translate(${nextPercentage}%, 0%)`;
// }
// window.onmouseup = () => {
//     track.dataset.mouseDownAt = "0";
//     track.dataset.prevPercentage = track.dataset.percentage;
// }