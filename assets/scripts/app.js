//Function to add the ScrollMagic sticky section
function SplitScroll() {
    const scrollController = new ScrollMagic.Controller();

    var pagesHeight = document.getElementById('aboutMePages').offsetHeight;
    var containerHeight = document.getElementById('aboutMeTitle').offsetHeight;

    var scrollScene = new ScrollMagic.Scene({
        duration: pagesHeight - containerHeight,
        triggerElement: '#aboutMeTitle',
        triggerHook: 0
    })
    .setPin('#aboutMeTitle')
    .addTo(scrollController)
    .addIndicators()

    return scrollScene;
}

//The aboutme div likes to create whitespace, so this function gives it an absolute height
function ResizeAboutMe() {
    var pageOneHeight = document.getElementById('aboutMePageOne').offsetHeight;
    var pageTwoHeight = document.getElementById('aboutMePageTwo').offsetHeight;

    var aboutMe = document.getElementById('aboutMe');
    var aboutMePages = document.getElementById('aboutMePages');
    aboutMe.style.height = pageOneHeight + pageTwoHeight + 'px';
    aboutMePages.style.height = pageOneHeight + pageTwoHeight + 'px'; 

    var aboutMeTitle = document.getElementById('aboutMeTitle');
    aboutMeTitle.style.maxHeight = aboutMe.style.height; 
}

$(document).ready(function() {
    ResizeAboutMe();
    var scrollScene = SplitScroll();
    var navbarHeight = document.getElementById('navbar').offsetHeight;

    window.addEventListener('resize', function() {
        navbarHeight = document.getElementById('navbar').offsetHeight;
        if (scrollScene)
        {
            scrollScene.destroy(true);
        }
        ResizeAboutMe();
        scrollScene = SplitScroll();
    })

    //Event listeners for the navbar buttons
    document.getElementById('titleButton').addEventListener('click', function() {
        const target = document.getElementById('title');
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({
            top: targetPosition,
            behaviour: 'smooth'
        })
    });
    document.getElementById('projectsButton').addEventListener('click', function() {
        const target = document.getElementById('projects');
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - (navbarHeight + 5);
        window.scrollTo({
            top: targetPosition,
            behaviour: 'smooth'
        })
    });
    document.getElementById('aboutmeButton').addEventListener('click', function() {
        const target = document.getElementById('aboutMe');
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - (navbarHeight + 5);
        window.scrollTo({
            top: targetPosition,
            behaviour: 'smooth'
        })
    });

    //Event listeners for the contact me buttons
    document.getElementById('contactmeButton').addEventListener('click', function() {
        const target = document.getElementById('contactMe');
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - (navbarHeight + 5);
        window.scrollTo({
            top: targetPosition,
            behaviour: 'smooth'
        })
    });
    document.getElementById("emailContainer").addEventListener("click", function() {
        const email = "contactme.scottlewis@gmail.com";
        window.location.href = `mailto:${email}`;
    });
});

// window.onload = function() {
//     ResizeAboutMe();
//     navbarHeight = document.getElementById('navbar').offsetHeight;
//     if (scrollScene)
//     {
//         scrollScene.destroy(true);
//     }
//     ResizeAboutMe();
//     scrollScene = SplitScroll();
// };