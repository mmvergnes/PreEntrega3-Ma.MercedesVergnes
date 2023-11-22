//planes-uno-pass.js
let login = localStorage.getItem('login');
if (!login) {
    location.href = "log-in-page.html";
}
let datos = JSON.parse(login);

let nombre = datos[0];
let lblNombre = document.getElementById("lblNombre");
lblNombre.innerHTML = `${nombre}!`;



let selectedPack = undefined;
async function cargarPacks() {
    let data = undefined;
    try {
        const resp = await fetch("/data.json");
        data = await resp.json();
    } catch (error) {
        console.error("Lo sentimos, los packs no fueron cargados.");
    }
    if (data != undefined) {
        const cards = document.querySelector('#packs');
        data.forEach((pack => {
            const img = document.createElement("img");
            img.setAttribute("class", `box`);
            img.setAttribute("src", `/${pack.img}`);
            img.setAttribute("alt", pack.alt);

            const figcaption = document.createElement("figcaption");
            const span = document.createElement("span");
            span.setAttribute("class", "pack-4 text-bold");
            span.innerHTML = pack.clases;
            figcaption.appendChild(span);

            const h2 = document.createElement("h2");
            h2.setAttribute("class", "pack-4 text-bold")
            h2.innerHTML = pack.valor;

            const button = document.createElement("button");
            button.setAttribute("class", "buy-btn uppercase-font");
            button.innerHTML = "Comprar";
            button.onclick = function (e) {
                e.preventDefault();

                Swal.fire({
                    imageUrl: `/${pack.img}`,
                    imageWidth: "400",
                    imageAlt: `${pack.alt}`,
                    title: `${pack.nombre} ${pack.valor}`,
                    text: `${pack.descripcion}`,                  
                    showCancelButton: true,
                    confirmButtonColor: "#198754",
                    focusConfirm: false,
                    confirmButtonText: "Continuar",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    input: "checkbox",
                    inputValue: 0,
                    inputPlaceholder: `Acepto los Términos y Condiciones`,
                    inputValidator: (result) => {
                        return !result && "Para continuar, necesitas aceptar los Términos y Condiciones";
                    },
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            icon: "success",
                            title: "¡Felicitaciones!",
                            text: "Tu compra está pendiente de pago. Seguí las instrucciones que te enviamos por email. Te esperamos.",
                            timer: 3000,
                            showConfirmButton: false
                        });
                    } else if (result.isDenied) {
                        Swal.fire("Esperamos verte por aca nuevamente", "", "error");
                    }
                });
            }

            const figure = document.createElement("figure");
            figure.appendChild(img);
            figure.appendChild(figcaption);
            figure.appendChild(h2);
            figure.appendChild(button);

            cards.appendChild(figure);
        }));
    }
};

cargarPacks();
