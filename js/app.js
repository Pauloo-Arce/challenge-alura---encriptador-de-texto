const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const btnCopiar = document.querySelector(".btn-copiar");

const textoEncriptar = document.querySelector(".encriptar");
const condicion = document.querySelector(".texto-condicion");
const respuesta = document.querySelector(".evaluar");
const contenidoTarjeta = document.querySelector(".contenedor-tarjeta");

btnEncriptar.addEventListener("click", (e) => {
  e.preventDefault();
  let texto = textoEncriptar.value;
  let txt = texto
    .normalize("NFD")
    .replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

  if (texto == "") {
    condicion.style.background = "#0A3871";
    condicion.style.color = "#fff";
    condicion.style.fontWeight = "800";
    condicion.textContent = "El campo de texto no debe estar vacío";

    setTimeout(() => {
      condicion.removeAttribute("style");
    }, 1500);
  } else if (texto != txt) {
    condicion.style.background = "#0A3871";
    condicion.style.color = "#fff";
    condicion.style.fontWeight = "800";
    condicion.textContent = "No debe tener acentos y caracteres especiales";

    setTimeout(() => {
      condicion.removeAttribute("style");
    }, 1500);
  } else if (texto != texto.toLowerCase()) {
    condicion.style.background = "#0A3871";
    condicion.style.color = "#fff";
    condicion.style.fontWeight = "800";
    condicion.textContent = "El texto debe ser todo en minúscula";

    setTimeout(() => {
      condicion.removeAttribute("style");
    }, 1500);
  } else {
    texto = texto.replace(/a/gm, "ai");
    texto = texto.replace(/e/gm, "enter");
    texto = texto.replace(/i/gm, "imes");
    texto = texto.replace(/o/gm, "ober");
    texto = texto.replace(/u/gm, "ufat");

    respuesta.innerHTML = texto;
    btnCopiar.style.visibility = "inherit";
    contenidoTarjeta.remove();
  }
});


btnDesencriptar.addEventListener("click", (e) => {
  e.preventDefault();
  let texto = textoEncriptar.value;
  let txt = texto
    .normalize("NFD")
    .replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

  if (texto == "") {
    condicion.style.background = "#0A3871";
    condicion.style.color = "#fff";
    condicion.style.fontWeight = "800";
    condicion.textContent = "El campo de texto no debe estar vacío";

    setTimeout(() => {
      condicion.removeAttribute("style");
    }, 1500);
  } else if (texto != txt) {
    condicion.style.background = "#0A3871";
    condicion.style.color = "#fff";
    condicion.style.fontWeight = "800";
    condicion.textContent = "No debe tener acentos y caracteres especiales";

    setTimeout(() => {
      condicion.removeAttribute("style");
    }, 1500);
  } else if (texto != texto.toLowerCase()) {
    condicion.style.background = "#0A3871";
    condicion.style.color = "#fff";
    condicion.style.fontWeight = "800";
    condicion.textContent = "El texto debe ser todo en minúscula";

    setTimeout(() => {
      condicion.removeAttribute("style");
    }, 1500);
  } else {
    texto = texto.replace(/ai/gm, "a");
    texto = texto.replace(/enter/gm, "e");
    texto = texto.replace(/imes/gm, "i");
    texto = texto.replace(/ober/gm, "o");
    texto = texto.replace(/ufat/gm, "u");

    respuesta.innerHTML = texto;
    btnCopiar.style.visibility = "inherit";
    contenidoTarjeta.remove();
  }
});

btnCopiar.addEventListener("click", (e) => {
  e.preventDefault();

  let copiar = respuesta;
  let textoParaCopiar = copiar.value || copiar.innerText;
  copiar.select();

  navigator.clipboard
    .writeText(textoParaCopiar)
    .then(() => {
      console.log("Texto copiado al portapapeles");
    })
    .catch((error) => {
      console.error("Error al copiar el texto: ", error);
    });
});
