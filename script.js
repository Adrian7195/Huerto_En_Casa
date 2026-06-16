// =====================================
// MODAL DE COTIZACIÓN
// =====================================

const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

if (openModal) {
    openModal.addEventListener("click", () => {
        modal.classList.add("active");
    });
}

if (closeModal) {
    closeModal.addEventListener("click", () => {
        modal.classList.remove("active");
    });
}

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});

// =====================================
// CALCULADORA DE HUERTO
// =====================================

const btnCalcular = document.getElementById("btnCalcular");

if (btnCalcular) {

    btnCalcular.addEventListener("click", () => {

        const metros =
            parseFloat(
                document.getElementById("metros").value
            );

        if (isNaN(metros) || metros <= 0) {

            alert(
                "Ingrese una cantidad válida de metros cuadrados."
            );

            return;
        }

        const costo = metros * 350;
        const produccion = metros * 8;
        const ahorro = metros * 25;

        document.getElementById(
            "resultadoCosto"
        ).textContent =
            "S/ " +
            costo.toLocaleString("es-PE");

        document.getElementById(
            "resultadoProduccion"
        ).textContent =
            produccion +
            " kg";

        document.getElementById(
            "resultadoAhorro"
        ).textContent =
            "S/ " +
            ahorro.toLocaleString("es-PE");
    });

}

// =====================================
// CONTADORES ANIMADOS
// =====================================

const counters =
    document.querySelectorAll(".counter");

const startCounters = () => {

    counters.forEach(counter => {

        const target =
            +counter.dataset.target;

        let count = 0;

        const increment =
            target / 80;

        const updateCounter = () => {

            if (count < target) {

                count += increment;

                counter.innerText =
                    Math.ceil(count);

                requestAnimationFrame(
                    updateCounter
                );

            } else {

                counter.innerText =
                    target;

            }
        };

        updateCounter();

    });

};

startCounters();

// =====================================
// SCROLL SUAVE
// =====================================

document
.querySelectorAll('a[href^="#"]')
.forEach(link => {

    link.addEventListener(
        "click",
        function (e) {

            e.preventDefault();

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth",
                    block: "start"

                });

            }
        }
    );

});

// =====================================
// MENU MOVIL
// =====================================

const menuBtn =
    document.getElementById("menuBtn");

const menu =
    document.getElementById("menu");

if (menuBtn && menu) {

    menuBtn.addEventListener("click", () => {

        if (
            menu.style.display === "flex"
        ) {

            menu.style.display = "none";

        } else {

            menu.style.display = "flex";
            menu.style.flexDirection =
                "column";

            menu.style.position =
                "absolute";

            menu.style.top = "90px";

            menu.style.left = "0";

            menu.style.width = "100%";

            menu.style.padding =
                "25px";

            menu.style.background =
                "#ffffff";

            menu.style.boxShadow =
                "0 10px 25px rgba(0,0,0,.08)";
        }
    });

}

// =====================================
// ANIMACIÓN AL HACER SCROLL
// =====================================

const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";
                }

            });

        },

        {
            threshold: 0.1
        }
    );

document
.querySelectorAll(
    ".card, .plan, .plant-card, .testimonial"
)
.forEach(el => {

    el.style.opacity = "0";

    el.style.transform =
        "translateY(40px)";

    el.style.transition =
        "all .6s ease";

    observer.observe(el);

});

// =====================================
// FORMULARIO CONTACTO
// =====================================

const form =
    document.querySelector(
        ".contact-form"
    );

if (form) {

    form.addEventListener(
        "submit",
        (e) => {

            e.preventDefault();

            alert(
                "¡Gracias! Tu solicitud fue enviada correctamente."
            );

            form.reset();

        }
    );

}