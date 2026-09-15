/* =========================================================
   SONS OF LALOMAUGA
   JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            mainNav.classList.toggle("active");

        });


        const navLinks = mainNav.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mainNav.classList.remove("active");

            });

        });

    }


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {

        currentYear.textContent = new Date().getFullYear();

    }


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 500) {

                backToTop.classList.add("visible");

            } else {

                backToTop.classList.remove("visible");

            }

        });


        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =====================================================
       COUNTER ANIMATION
    ===================================================== */

    const counters = document.querySelectorAll(".counter");

    let countersStarted = false;

    function animateCounters() {

        if (countersStarted) {
            return;
        }

        const statsSection = document.querySelector(".family-stats");

        if (!statsSection) {
            return;
        }

        const sectionTop =
            statsSection.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {

            countersStarted = true;

            counters.forEach(function (counter) {

                const target =
                    parseInt(counter.dataset.target);

                let current = 0;

                const duration = 1500;

                const increment =
                    target / (duration / 20);

                const timer = setInterval(function () {

                    current += increment;

                    if (current >= target) {

                        current = target;

                        clearInterval(timer);

                    }

                    counter.textContent =
                        Math.floor(current).toLocaleString();

                }, 20);

            });

        }

    }

    window.addEventListener("scroll", animateCounters);

    animateCounters();


    /* =====================================================
       HEADER SCROLL EFFECT
    ===================================================== */

    const header =
        document.querySelector(".site-header");

    window.addEventListener("scroll", function () {

        if (!header) {
            return;
        }

        if (window.scrollY > 50) {

            header.style.boxShadow =
                "0 10px 30px rgba(0,0,0,0.15)";

        } else {

            header.style.boxShadow = "none";

        }

    });


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements = document.querySelectorAll(
        ".story-card, " +
        ".timeline-item, " +
        ".event-card, " +
        ".news-card, " +
        ".gallery-item, " +
        ".contact-card"
    );


    revealElements.forEach(function (element) {

        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

    });


    function revealOnScroll() {

        revealElements.forEach(function (element) {

            const elementTop =
                element.getBoundingClientRect().top;

            if (elementTop < window.innerHeight - 80) {

                element.style.opacity = "1";
                element.style.transform =
                    "translateY(0)";

            }

        });

    }


    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navigationLinks =
        document.querySelectorAll(".main-nav a");


    function updateActiveNavigation() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection = section.getAttribute("id");

            }

        });


        navigationLinks.forEach(function (link) {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (href === "#" + currentSection) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );

    updateActiveNavigation();


    /* =====================================================
       SMOOTH INTERNAL LINKS
    ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(
        function (link) {

            link.addEventListener("click", function (event) {

                const targetId =
                    this.getAttribute("href");

                if (
                    targetId === "#" ||
                    targetId === ""
                ) {

                    return;

                }

                const target =
                    document.querySelector(targetId);

                if (!target) {
                    return;
                }

                event.preventDefault();

                const headerHeight =
                    header ? header.offsetHeight : 0;

                const targetPosition =
                    target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

            });

        }
    );

});