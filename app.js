const texto = document.querySelector(".texto"); 
const btnEncriptar = document.querySelector("#btnEncriptar");
const btnDesencriptar = document.querySelector("#btnDesencriptar");
const btnCopiar = document.querySelector("#copiar");
const container2 = document.querySelector("#container2");
const containerImagen = document.querySelector(".containerImagen");
const containerText = document.querySelector(".containerText");
const caracteresNoPermitidos = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZáéíóúÁÉÍÓÚ";

btnEncriptar.addEventListener('click', encriptar);
btnDesencriptar.addEventListener('click', desencriptar);

function encriptar() {
    const textoOriginal = texto.value.trim();
    if (esValido(textoOriginal)) {
        let textoEncriptado = textoOriginal
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        mostrarResultado(textoEncriptado);
    } else {
        alert("Por favor, introduce caracteres válidos.");
    }
}

function desencriptar() {
    const textoEncriptado = texto.value.trim();
    if (esValido(textoEncriptado)) {
        let textoOriginal = textoEncriptado
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        mostrarResultado(textoOriginal);
    } else {
        alert("Por favor, introduce caracteres válidos.");
    }
}

function esValido(texto) {
    if (texto === "") return false; 
    for (let i = 0; i < texto.length; i++) {
        if (caracteresNoPermitidos.includes(texto[i])) {
            return false;
        }
    }
    return true;
}

function mostrarResultado(resultado) {
    containerImagen.style.display = "none";
    containerText.style.display = "none";
    
    container2.innerHTML = `
        <div class="containerText">
            <h3>Resultado:</h3>
            <p>${resultado}</p>
        </div>
    `;

    btnCopiar.style.display = "block";
    btnCopiar.onclick = async () => {
        try {
            await navigator.clipboard.writeText(resultado);
            alert('Texto copiado al portapapeles');
        } catch (err) {
            console.error('Error al copiar el texto: ', err);
        }
    };
}






