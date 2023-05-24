/*!
* Start Bootstrap - Bare v5.0.9 (https://startbootstrap.com/template/bare)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function copiarLink() {
    var input = document.getElementById("url_acortada");
    input.select();
    input.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand("copy");
    alert("¡Link copiado al portapapeles!");
}

document.addEventListener('DOMContentLoaded', function () {
    var btnCopiar = document.getElementById('btn-copiar');
    var urlAcortada = document.getElementById('url-acortada');

    new ClipboardJS(btnCopiar, {
        text: function () {
            return urlAcortada.value;
        }
    });

    btnCopiar.addEventListener('click', function () {
        alert('¡Link copiado al portapapeles!');
    });
});
