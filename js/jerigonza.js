// Capturar elementos HTML

const entrada = document.getElementById("entrada-texto");
const avisoEntrada = document.querySelector(".aviso-texto");
const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const salida = document.getElementById("salida-texto");
const avisoSalida = document.querySelector(".salida-aviso");
const btnCopiar = document.querySelector(".btn-copiar");

// Funciones encriptar y desencriptar

function encriptar(texto) {
  salida.value = texto
    .replaceAll("e", "epe")
    .replaceAll("i", "ipi")
    .replaceAll("a", "apa")
    .replaceAll("o", "opo")
    .replaceAll("u", "upu");
  avisoSalida.remove();
  btnCopiar.style.visibility = "inherit";
}

function desencriptar(texto) {
  salida.value = texto
    .replaceAll("epe", "e")
    .replaceAll("ipi", "i")
    .replaceAll("apa", "a")
    .replaceAll("opo", "o")
    .replaceAll("upu", "u");
  avisoSalida.remove();
  btnCopiar.style.visibility = "inherit";
}

// Aviso de validación

function textoNoValido() {
  avisoEntrada.style.color = "#FF0000";
  avisoEntrada.style.fontWeight = "700";
  avisoEntrada.textContent = "Ingresa un texto valido.";
  setTimeout(() => {
    avisoEntrada.removeAttribute("style");
    avisoEntrada.textContent =
      "No ingresar mayúsculas, caracteres especiales y acentos.";
  }, 2500);
}

// Validar texto de entrada

function validarTexto(entradaTxt) {
  // Verificar si la entrada está vacía
  if (entradaTxt.trim() === "") {
    return true;
  }
  // Retorna true solamente si la expresión regular encuentra coincidencias en la cadena.
  return /[A-ZÁÉÍÓÚÜ]|[^A-Za-z0-9\sñ]/.test(entradaTxt);
}

// Capturar entradas de texto

btnEncriptar.addEventListener("click", () => {
  let txt = entrada.value;

  validarTexto(txt) ? textoNoValido() : encriptar(txt);
});

btnDesencriptar.addEventListener("click", () => {
  let txt = entrada.value;

  validarTexto(txt) ? textoNoValido() : desencriptar(txt);
});

// Copiar texto de salida

btnCopiar.addEventListener("click", () => {
  salida.select();
  document.execCommand("copy");
});
