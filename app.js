const textoIngresado = document.getElementById("ingreso_texto");
const mensajeEncriptado = document.getElementById("texto_encriptado");
const mensajeDeAlerta = document.getElementById("mensaje_error");
const texAlerta = document.getElementsByClassName("texto_alerta");
const botonEncriptar = document.getElementsByClassName("btnEncriptar");

function obtenerTexto() {
  let cadenaIngresada = textoIngresado.value.toLowerCase();

  let expresions = /([áéíóúüÁÉÍÓÚÜ]|[ñÑ{}+^*|$/ªº!"@·#~%€&¬=?'¿¡`¨Ç_()-/\\/])/g;


  if (cadenaIngresada == "") {
    texAlerta[0].textContent = "Ningún mensaje fue encontrado Ingresa el texto que desees encriptar o desencriptar.";
   
  } if (cadenaIngresada !== "") {
     texAlerta[0].textContent = "";
     document.getElementById("img_busqueda").style.display= "none";
  } if (cadenaIngresada.match(expresions)) {
    mensajeDeAlerta.textContent = "No se aceptan caracteres especiales.";
    textoIngresado.value = "";
  } else {
    mensajeDeAlerta.textContent = "";
    return cadenaIngresada;
  }
};

function btnEncriptar() {
  let cadenaEncriptada = encriptar(obtenerTexto());
  mensajeEncriptado.value = cadenaEncriptada;
  textoIngresado.style.display = "block"
  textoIngresado.value = "";
  
}


function encriptar(textoEncriptado) {
  let resultado = "";
  textoEncriptado = textoEncriptado;
  for (let i = 0; i < textoEncriptado.length; i++) {
    let letra = textoEncriptado[i];
    if (letra === "a") {
      resultado += "ai";
    } else if (letra === "e") {
      resultado += "enter";
    } else if (letra === "i") {
      resultado += "imes";
    } else if (letra === "o") {
      resultado += "ober";
    } else if (letra === "u") {
      resultado += "ufat";
    } else {
      resultado += letra; // Agrega el caracter actual al resultado
    }
  }

  return resultado;
}

function btnDesencriptar() {
  let cadenaEncriptada = desEncriptar(mensajeEncriptado.value);
  mensajeEncriptado.value = cadenaEncriptada;
  textoIngresado.value = "";
 
  return cadenaEncriptada;
}

function desEncriptar(cadenaDesEncriptada) {
  let matriz = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  cadenaDesEncriptada = cadenaDesEncriptada;
  for (let i = 0; i < matriz.length; i++) {
    if (cadenaDesEncriptada.includes(matriz[i][1])) {
      cadenaDesEncriptada = cadenaDesEncriptada.replaceAll(
        matriz[i][1],
        matriz[i][0]
      );
    }
  }
 
  return cadenaDesEncriptada;

 
}

function btnCopiar() {
  let copiarTexto = mensajeEncriptado.value; 
  // Copia el texto al portapapeles
  navigator.clipboard
    .writeText(copiarTexto)
    .then(() => {
      copiarTexto.value;
    })
    .catch((err) => {
      console.error("Error al copiar:", err);
    });
  //  mensajeEncriptado=""
}
