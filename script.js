let textArea = document.getElementById('idCriptografar');
let mensagem = document.getElementById('idMensagem');

//A letra "e" é convertida para "enter"//
//A letra "i" é convertida para "imes"//
//A letra "a" é convertida para "ai"//
//A letra "o" é convertida para "ober"//
//A letra "u" é convertida para "ufat"//

function btnCriptografar() {
    let textoEncriptado = criptografar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = '';
}

function criptografar(stringEncriptada) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    document.querySelector('.areaMensagem').style.backgroundImage = 'none';
    return stringEncriptada;
}

function btnDescriptografar() {
    let textoDescriptado = descriptografar(textArea.value);
    mensagem.value = textoDescriptado;
    textArea.value = '';
}

function descriptografar(stringDescriptada) {
    let matrizCodigo = [['enter', 'e'], ['imes', 'i'], ['ai', 'a'], ['ober', 'o'], ['ufat', 'u']];
    stringDescriptada = stringDescriptada.toLowerCase();

    for (let i = 0; i<matrizCodigo.length; i++) {
        if(stringDescriptada.includes(matrizCodigo[i][0])) {
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    removerBackground();
    return stringDescriptada;
}

function copiarTexto() {
    navigator.clipboard.writeText(mensagem.value).then(() => {
        myFunction();
        alert('Mensagem copiada para a área de tranferência');
    })
}

function limparTexto() {
    mensagem.value = ' ';
    resetarBackground();
}

function removerBackground() {
    document.querySelector('.areaMensagem').style.backgroundImage = 'none';
}

function resetarBackground() {
    document.querySelector('.areaMensagem').style.backgroundImage = 'url(Assets/imagemAguardando.svg)';
}

function myFunction() {
    let popup = document.getElementById('myPopup');
    popup.classList.toggle('show');
}