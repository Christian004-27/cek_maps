document.addEventListener("DOMContentLoaded", function() {
    // Efek scroll untuk navigasi
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });

    // Highlight menu aktif
    window.addEventListener("scroll", function() {
        let scrollPosition = window.scrollY;
        links.forEach(link => {
            let section = document.querySelector(link.getAttribute("href"));
            if (section.offsetTop - 60 <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                links.forEach(l => l.classList.remove("active"));
                link.classList.add("active");
            }
        });
    });

    // Efek hover pada tabel
    const rows = document.querySelectorAll("table tr");
    rows.forEach((row, index) => {
        if (index !== 0) { // Hindari header
            row.addEventListener("mouseenter", function() {
                this.style.backgroundColor = "#ddd";
            });
            row.addEventListener("mouseleave", function() {
                this.style.backgroundColor = "";
            });
        }
    });
});
