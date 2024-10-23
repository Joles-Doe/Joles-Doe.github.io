$(document).ready(function() {
    //Calculates size of the navbar
    var navbarHeight = document.getElementById('navbar').offsetHeight;
    window.addEventListener('resize', function() {
        navbarHeight = document.getElementById('navbar').offsetHeight;
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