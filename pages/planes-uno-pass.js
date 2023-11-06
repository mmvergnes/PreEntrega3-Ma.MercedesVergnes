//planes-uno-pass.js
let login = localStorage.getItem('login');
if (!login) {
    location.href = "log-in-page.html";
}
let datos = JSON.parse(login);

let nombre = datos[0];
let lblNombre = document.getElementById("lblNombre");
lblNombre.innerHTML = `${nombre}!`;


// crear packs nuevos
class Pack {
    constructor(nombre, creditos, precio, texto) {
        this.nombre = nombre,
            this.creditos = creditos;
        this.precio = precio;
        this.texto = texto;
    }
}

const pack1 = new Pack("Recarga", 20, "$6.000", "Los créditos se podrán canjear por clases al momento de reservarlas. Cada una de las clases tiene su valor en créditos. Según el tipo de clase o el horario, su valor en créditos puede disminuir del valor nominal, pero nunca una clase puede superar ese valor.");
const pack2 = new Pack("Actitud", 40, "$10.200", "Los créditos se podrán canjear por clases al momento de reservarlas. Cada una de las clases tiene su valor en créditos. Según el tipo de clase o el horario, su valor en créditos puede disminuir del valor nominal, pero nunca una clase puede superar ese valor.");
const pack3 = new Pack("Frecuente", 60, "$14.400", "Los créditos se podrán canjear por clases al momento de reservarlas. Cada una de las clases tiene su valor en créditos. Según el tipo de clase o el horario, su valor en créditos puede disminuir del valor nominal, pero nunca una clase puede superar ese valor.");
const pack4 = new Pack("Inicial", 10, "$3.000", "Los créditos se podrán canjear por clases al momento de reservarlas. Cada una de las clases tiene su valor en créditos. Según el tipo de clase o el horario, su valor en créditos puede disminuir del valor nominal, pero nunca una clase puede superar ese valor.");

const agregarPack2 = document.createElement('figure');
const agregarPack3 = document.createElement('figure');
const agregarPack4 = document.createElement('figure');
const addModal2 = document.createElement('modal');
const addModal3 = document.createElement('modal');
const addModal4 = document.createElement('modal');

agregarPack2.innerHTML = `<img class="box" src="../img/box-actitud.png" alt="Box actitud"> <figcaption><span class="text-bold">Hasta ${pack2.creditos} clases</span> para utilizar cuando quieras.</figcaption> <h2 class="pack-3 text-bold">${pack2.precio}.-</h2> <button id="modal2" class="buy-btn uppercase-font">Comprar</button>`;
agregarPack3.innerHTML = `<img class="box" src="../img/box-frecuente.png" alt="Box frecuente"> <figcaption><span class="text-bold">Hasta ${pack3.creditos} clases</span> para utilizar cuando quieras.</figcaption> <h2 class="pack-2 text-bold">${pack3.precio}.-</h2>  <button id="modal3" class="buy-btn uppercase-font">Comprar</button>`;
agregarPack4.innerHTML = `<img class="box" src="../img/box-inicial.png" alt="Box inicial"> <figcaption><span class="text-bold">Hasta ${pack4.creditos} clases</span> para utilizar cuando quieras.</figcaption> <h2 class="pack-4 text-bold">${pack4.precio}.-</h2> <button id="modal4" class="buy-btn uppercase-font">Comprar</button>`;
addModal2.innerHTML = `<div class="modal fade" id="openModal2" tabindex="-1" aria-labelledby="modalTitle" aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <div class="pass-title">
                <h1 class="text-bold">Pack ${pack2.nombre}</h1>
                <a href="./planes-uno-pass.html">Ver más packs</a>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" data-aos="fade-up">
            <div class="row text-center">
                <div class="col-12 img-pack">
                    <img class="box" src="../img/box-actitud.png" alt="Box actitud">
                </div>
                <div class="col-12">
                    <h2><span class="text-bold">${pack2.creditos}</span> para utilizar cuando quieras.</h2>
                    <h2 class="pack-3 text-bold">${pack2.precio}.-</h2>
                    <p>${pack2.texto}</p>
                </div>
            </div>
        </div>
        <div class="modal-footer justify-content-center">
            <div class="d-grid gap-2 d-md-block">
                <a class="btn btn-primary" href="./page-not-found.html" role="button">Pagar con MP</a>
                <button class="btn btn-primary" role="button" data-bs-toggle="modal"
                    data-bs-target="#cashModal">Pagar en UNO</button>
            </div>
            <div class="terms-and-conds">
                <span>Al confirmar la compra, se aceptan los <a href="./page-not-found.html">términos y
                        condiciones</a></span>
            </div>
        </div>
    </div>
</div>
</div>`
addModal3.innerHTML = `<div class="modal fade" id="openModal3" tabindex="-1" aria-labelledby="modalTitle" aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <div class="pass-title">
                <h1 class="text-bold">Pack ${pack3.nombre}</h1>
                <a href="./planes-uno-pass.html">Ver más packs</a>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" data-aos="fade-up">
            <div class="row text-center">
                <div class="col-12 img-pack">
                    <img class="box" src="../img/box-frecuente.png" alt="Box frecuente">
                </div>
                <div class="col-12">
                    <h2><span class="text-bold">${pack3.creditos}</span> para utilizar cuando quieras.</h2>
                    <h2 class="pack-2 text-bold">${pack3.precio}.-</h2>
                    <p>${pack3.texto}</p>
                </div>
            </div>
        </div>
        <div class="modal-footer justify-content-center">
            <div class="d-grid gap-2 d-md-block">
                <a class="btn btn-primary" href="./page-not-found.html" role="button">Pagar con MP</a>
                <button class="btn btn-primary" role="button" data-bs-toggle="modal"
                    data-bs-target="#cashModal">Pagar en UNO</button>
            </div>
            <div class="terms-and-conds">
                <span>Al confirmar la compra, se aceptan los <a href="./page-not-found.html">términos y
                        condiciones</a></span>
            </div>
        </div>
    </div>
</div>
</div>`
addModal4.innerHTML = `<div class="modal fade" id="openModal4" tabindex="-1" aria-labelledby="modalTitle" aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <div class="pass-title">
                <h1 class="text-bold">Pack ${pack4.nombre}</h1>
                <a href="./planes-uno-pass.html">Ver más packs</a>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" data-aos="fade-up">
            <div class="row text-center">
                <div class="col-12 img-pack">
                    <img class="box" src="../img/box-inicial.png" alt="Box inicial">
                </div>
                <div class="col-12">
                    <h2><span class="text-bold">${pack4.creditos}</span> para utilizar cuando quieras.</h2>
                    <h2 class="pack-4 text-bold">${pack4.precio}.-</h2>
                    <p>${pack4.texto}</p>
                </div>
            </div>
        </div>
        <div class="modal-footer justify-content-center">
            <div class="d-grid gap-2 d-md-block">
                <a class="btn btn-primary" href="./page-not-found.html" role="button">Pagar con MP</a>
                <button class="btn btn-primary" role="button" data-bs-toggle="modal"
                    data-bs-target="#cashModal">Pagar en UNO</button>
            </div>
            <div class="terms-and-conds">
                <span>Al confirmar la compra, se aceptan los <a href="./page-not-found.html">términos y
                        condiciones</a></span>
            </div>
        </div>
    </div>
</div>
</div>`

const packs = document.querySelector("#packs");

packs.append(agregarPack2, agregarPack3, agregarPack4, addModal2, addModal3, addModal4);



// abrir modals //

const link = document.getElementById("logIn");
const link2 = document.getElementById("modal2");
const link3 = document.getElementById("modal3");
const link4 = document.getElementById("modal4");

const openLogInModal = new bootstrap.Modal("#openLogInModal");
const openModal2 = new bootstrap.Modal('#openModal2');
const openModal3 = new bootstrap.Modal('#openModal3');
const openModal4 = new bootstrap.Modal('#openModal4');

link.addEventListener("click", () => {
    openLogInModal.show();
});
link2.addEventListener("click", () => {
    openModal2.show();
});
link3.addEventListener("click", () => {
    openModal3.show();
});
link4.addEventListener("click", () => {
    openModal4.show();
});


// Agregar packs al storage

const selectPackStr = JSON.stringify(pack1);
const selectPackStr2 = JSON.stringify(pack2);
const selectPackStr3 = JSON.stringify(pack3);
const selectPackStr4 = JSON.stringify(pack4);

localStorage.setItem("pack1", selectPackStr);
localStorage.setItem("pack2", selectPackStr2);
localStorage.setItem("pack3", selectPackStr3);
localStorage.setItem("pack4", selectPackStr4);
