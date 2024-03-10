// back to top button
const showOnPx = 50;
const backToTopButton = document.querySelector(".back-to-top");

window.onscroll = function() {
    scrollFunction();
}

function scrollFunction () {
    if (document.documentElement.scrollTop > showOnPx || document.body.scrollTop > showOnPx) {
        backToTopButton.style.display = "block";
    }
    else {
        backToTopButton.style.display = "none";
    }
}

function topFunction () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

backToTopButton.addEventListener('click', topFunction);

// navbar toggle button
const toggleButton = document.querySelector(".toggle-button");
const nav_links = document.querySelectorAll("nav ul li");

function toggle_nav () {
    for (let i = 0; i < nav_links.length; i++){
        nav_links[i].classList.toggle("show-nav");
    }
}

toggleButton.addEventListener('click', toggle_nav)