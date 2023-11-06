const club = "UNO Bahía Club";
var nombre;

class Pack {
  constructor(nombre, creditos, precio) {
    this.nombre = nombre;
    this.creditos = creditos;
    this.precio = precio;
  }
}

const pack1 = new Pack("Recarga", 20, "$6.000");
const pack2 = new Pack("Frecuente", 40, "$10.200");
const pack3 = new Pack("Actitud", 60, "$14.400");
const pack4 = new Pack("Inicial", 10, "$3.000");

const metodoDePago = [
  { id: 1, opcion: "Mercado Pago" },
  { id: 2, opcion: "Efectivo" },
];

const opcionCancelar = { id: 0, opcion: "Cancelar" };

function mensajeBienvenida() {
  alert(`Bienvenid@ a ${club}`);

  nombre = prompt("Por favor, ingrese su Nombre");

  while (!nombre) {
    alert("*Este campo es requerido");
    nombre = prompt("Por favor, ingrese su Nombre");
  }
  let apellido = prompt("Ingrese su Apellido");
  while (!apellido) {
    alert("*Este campo es requerido");
    apellido = prompt("Por favor, ingrese su Apellido");
  }
  console.log(nombre + " " + apellido);

  let email = prompt("Ingrese su Email");
  while (!email) {
    alert("*Este campo es requerido");
    email = prompt("Por favor, ingrese su Email");
  }
  console.log(email);

  alert(`Hola! ${nombre}, nos alegra que hayas decidido incorporarte a ${club}.
Te contamos que actualmente estamos trabajando con un sistema de créditos con el que podés pagar las clases que usas, cuando las usas; y cada actividad tiene un valor en créditos.

A continuación, te mostraremos los Packs que podrás contratar para asistir a las mismas:

PACK ENERGÍA $6.400 - 2 a 10 créditos

PACK RECARGA $12.800 - 4 a 20 créditos

PACK REFUERZO $21.760 - 8 a 40 créditos

PACK ACTITUD $30.720 - 12 a 60 créditos`);

  let respuestaCorrecta = prompt(`${nombre}, deseas contratar un pack?`);
  if (respuestaCorrecta == "si") {
    alert("Exelente! Continuemos...");
    seleccionarPack();
  } else {
    alert(":( Lo sentimos. Esperamos volver a verte pronto.");
    mensajeBienvenida();
  }
}

function seleccionarPack() {
  let pack = prompt(`Seleccioná el pack adecuado para vos: 
    1: Pack Recarga
    2: Pack Frecuente
    3: Pack Actitud
    4: Pack Inicial`);
  var correcto = pack == "1" || pack == "2" || pack == "3" || pack == "4";

  while (!correcto) {
    alert("La opción ingresada no corresponde a un pack vigente.");
    pack = prompt(`Seleccioná el pack adecuado para vos: 
    1: Pack Recarga
    2: Pack Frecuente
    3: Pack Actitud
    4: Pack Inicial`);
    var correcto = pack == "1" || pack == "2" || pack == "3" || pack == "4";
  }

  switch (pack) {
    case "1":
      alert(
        `Excelente! Haz seleccionado el Pack ${pack1.nombre}. El monto a abonar es de ${pack1.precio}.-`
      );
      seleccionarMetodo();
      break;
    case "2":
      alert(
        `Excelente! Haz seleccionado el Pack ${pack2.nombre}. El monto a abonar es de ${pack2.precio}.-`
      );
      seleccionarMetodo();
      break;
    case "3":
      alert(
        `Excelente! Haz seleccionado el Pack ${pack3.nombre}. El monto a abonar es de ${pack3.precio}.-`
      );
      seleccionarMetodo();
      break;
    case "4":
      alert(
        `Excelente! Haz seleccionado el Pack ${pack4.nombre}. El monto a abonar es de ${pack4.precio}.-`
      );
      seleccionarMetodo();
      break;
  }
}

function opcionesDePago() {
  let opcionesDePago = metodoDePago.concat([opcionCancelar]);
  opcionesDePago = opcionesDePago.reduce(
    (prev, curr) => (prev += `    ${curr.id}: ${curr.opcion} \n`),
    ""
  );
  return opcionesDePago;
}

function obtenerPagoPorId(id) {
  let metodos = metodoDePago.filter((metodo) => metodo.id == id);
  if (metodos.length > 0) {
    return metodos[0];
  }
  return null;
}

function seleccionarMetodo() {
  let opcionCorrecta = false;
  let pagoId;

  while (!opcionCorrecta) {
    responsePago = prompt(`${nombre}, cómo deseas abonar? 
    \n${opcionesDePago()}`);

    pagoId = parseInt(responsePago);

    opcionCorrecta = obtenerPagoPorId(pagoId) || pagoId == 0;
  }
  console.log(pagoId);
  switch (pagoId) {
    case 0:
      alert("El proceso de pago ha sido cancelado");
      console.log("El proceso de pago ha sido cancelado");
      break;
    case 1:
      console.log(
        "Perfecto! te redirigiremos a MP para efectuar el pago. Gracias!"
      );
      alert("Perfecto! te redirigiremos a MP para efectuar el pago. Gracias!");
      break;
    case 2:
      console.log(
        "Felicitaciones! Te esperamos en el club para abonar y disfrutar de las clases."
      );
      alert(
        `Felicitaciones! Te esperamos en el club para abonar tu pack y disfrutar de las clases.`
      );
      break;
  }

  mensajeBienvenida();
}

window.onload = mensajeBienvenida();
