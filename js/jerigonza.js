// Capturar elementos HTML

const entrada = document.querySelector(".entrada-texto");

const btnEncriptar = document.querySelector(".btn-encriptar");

const btnDesencriptar = document.querySelector(".btn-desencriptar");

const salida = document.querySelector(".salida-texto");

const aviso = document.querySelector(".salida-aviso");

const btnCopiar = document.querySelector(".btn-copiar");

// Función encriptar (primera forma)

function convertirAJerigonza(texto) {
  const reemplazos = {
    a: "apa",
    e: "epe",
    i: "ipi",
    o: "opo",
    u: "upu",
  };

  return texto.replace(/a|e|i|o|u/g, (match) => reemplazos[match]);
}

// Función desencriptar (segunda forma)

function revertirJerigonza(texto) {
  const reemplazos = {
    apa: "a",
    epe: "e",
    ipi: "i",
    opo: "o",
    upu: "u",
  };

  return texto.replace(/apa|epe|ipi|opo|upu/g, (match) => reemplazos[match]);
}

// Función para quitar acentos

function quitarAcentos(textoConAcentos) {
  return textoConAcentos.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Capturar evento del boton encriptar

btnEncriptar.addEventListener("click", (event) => {
  let texto = entrada.value;

  salida.innerHTML = convertirAJerigonza(quitarAcentos(texto.toLowerCase()));

  aviso.remove();

  btnCopiar.style.visibility = "inherit";
});

// Capturar evento del boton desencriptar

btnDesencriptar.addEventListener("click", (event) => {
  let texto = entrada.value;

  salida.innerHTML = revertirJerigonza(quitarAcentos(texto.toLowerCase()));

  aviso.remove();

  btnCopiar.style.visibility = "inherit";
});

// Boton copiar

btnCopiar.addEventListener("click", (event) => {
  salida.select();

  document.execCommand("copy");
});
