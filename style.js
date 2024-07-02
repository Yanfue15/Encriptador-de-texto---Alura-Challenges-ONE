function encriptar() {
    var texto = document.getElementById('texto').value.toLowerCase();
    var textoEncriptado = texto.replace(/e/g, 'enter')
                              .replace(/i/g, 'imes')
                              .replace(/a/g, 'ai')
                              .replace(/o/g, 'ober')
                              .replace(/u/g, 'ufat');
    
    document.querySelector('.contenedor-hola .mensaje').textContent = textoEncriptado;
    document.getElementById('mensaje-encriptado').textContent = textoEncriptado;
    document.getElementById('texto').value = ''; // Limpiar el input después de encriptar

    // Ocultar elementos
    document.querySelector('.contenedor-hola .triangulo-img').style.display = 'none';
    document.querySelector('.contenedor-hola .mensaje').style.display = 'none';

    // Mostrar elementos
    document.querySelector('.contenedor-hola .mensaje2').style.display = 'block';
}

function desencriptar() {
    var texto = document.getElementById('texto').value;
    var textoDesencriptado = texto.replace(/enter/g, 'e')
                                 .replace(/imes/g, 'i')
                                 .replace(/ai/g, 'a')
                                 .replace(/ober/g, 'o')
                                 .replace(/ufat/g, 'u');
    
    document.querySelector('.contenedor-hola .mensaje').textContent = textoDesencriptado;
    document.getElementById('mensaje-encriptado').textContent = textoDesencriptado;
    document.getElementById('texto').value = ''; // Limpiar el input después de desencriptar

    // Ocultar elementos
    document.querySelector('.contenedor-hola .triangulo-img').style.display = 'none';
    document.querySelector('.contenedor-hola .mensaje').style.display = 'none';

    // Mostrar elementos
    document.querySelector('.contenedor-hola .mensaje2').style.display = 'block';
}

document.querySelector('.copiar').addEventListener('click', function() {
    var mensaje = document.querySelector('.contenedor-hola .mensaje').textContent;
    navigator.clipboard.writeText(mensaje)
        .then(() => alert('Texto copiado al portapapeles'))
        .catch(err => console.error('Error al copiar texto: ', err));
});
