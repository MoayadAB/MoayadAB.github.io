document.addEventListener("DOMContentLoaded", function() {

    // Mobile menu toggle
    var navToggle = document.getElementById("navToggle");
    var navMenu = document.getElementById("navMenu");

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
    var navbar = document.getElementById("navbar");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Active nav link on scroll
    var sections = document.querySelectorAll("section[id]");
    var navLinks = document.querySelectorAll(".nav-link");

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

    // Project modal
    var modal = document.getElementById("projectModal");
    var modalBackdrop = document.getElementById("modalBackdrop");
    var modalClose = document.getElementById("modalClose");
    var modalBadge = document.getElementById("modalBadge");
    var modalTitle = document.getElementById("modalTitle");
    var modalDesc = document.getElementById("modalDesc");
    var modalTags = document.getElementById("modalTags");
    var modalFooter = document.getElementById("modalFooter");

    function openModal(card) {
        modalBadge.textContent = card.getAttribute("data-project-badge");
        modalTitle.textContent = card.getAttribute("data-project-title");
        modalDesc.textContent = card.getAttribute("data-project-desc");

        var tags = card.getAttribute("data-project-tags").split(",");
        modalTags.innerHTML = "";
        tags.forEach(function(tag) {
            var span = document.createElement("span");
            span.textContent = tag.trim();
            modalTags.appendChild(span);
        });

        modalFooter.innerHTML = "";
        var link = card.getAttribute("data-project-link");
        if (link) {
            var a = document.createElement("a");
            a.href = link;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.className = "modal-link";
            a.innerHTML = 'View on GitHub <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>';
            modalFooter.appendChild(a);
        } else {
            var p = document.createElement("p");
            p.className = "modal-status";
            p.textContent = "GitHub link coming soon";
            modalFooter.appendChild(p);
        }

        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    }

    document.querySelectorAll(".project-card").forEach(function(card) {
        card.addEventListener("click", function() {
            openModal(card);
        });
    });

    modalClose.addEventListener("click", closeModal);
    modalBackdrop.addEventListener("click", closeModal);
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeModal();
        }
    });

});
