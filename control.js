function agregarTexto() {
    const textoExistente = document.getElementById('tweet').value;
    const nuevoTexto = document.getElementById('inputText').value;

    // Si hay texto nuevo, lo agrega al área de texto
    if (nuevoTexto.trim() !== '') {
        document.getElementById('tweet').value = textoExistente + ' ' + nuevoTexto;
        document.getElementById('inputText').value = ''; // Limpiar el campo de entrada
    }
}

function eliminarTexto() {
    document.getElementById('tweet').value = ''; // Eliminar todo el contenido del área de texto
}
