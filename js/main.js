document.addEventListener("DOMContentLoaded", function() {

    // Mobile menu toggle
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");

    navToggle.addEventListener("click", function() {
        navMenu.classList.toggle("open");
        navToggle.classList.toggle("active");
    });

    // Close menu on link click
    document.querySelectorAll(".nav-link").forEach(function(link) {
        link.addEventListener("click", function() {
            navMenu.classList.remove("open");
            navToggle.classList.remove("active");
        });
    });

    // Navbar scroll effect
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    function updateActiveLink() {
        var scrollPos = window.scrollY + 120;
        sections.forEach(function(section) {
            var top = section.offsetTop;
            var height = section.offsetHeight;
            var id = section.getAttribute("id");
            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(function(link) {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === "#" + id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();

    // Scroll reveal
    var reveals = document.querySelectorAll(".reveal");

    function revealOnScroll() {
        var windowHeight = window.innerHeight;
        reveals.forEach(function(el) {
            var top = el.getBoundingClientRect().top;
            if (top < windowHeight - 80) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

});
