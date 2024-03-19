
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function encriptar(){
let textoAEncriptar = document.getElementById('textoUsuario').value;
console.log(textoAEncriptar);
asignarTextoElemento('p',`fatjkgasfas${textoAEncriptar}jasdkjgwthru`);
}

function desencriptar(){
    let textoADesencriptar = document.getElementById('textoUsuario').value;
    console.log(textoADesencriptar);
asignarTextoElemento('h1',`${textoADesencriptar}`);
}

function copiar(){
    let textoACopiar= document.getElementById('textoUsuario').value;
    console.log(textoACopiar);
    navigator.clipboard.writeText(`${textoACopiar}`);
    }







