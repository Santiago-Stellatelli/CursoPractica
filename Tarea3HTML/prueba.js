function seguro() {
    alert('Estas seguro que quieres enviar el formulario? ');
    console.log(e)
}


function validar() {
    const escribirmin = minimo(document.formulario.nombre.value, 5);
    
    if(escribirmin){
        alert('Perfecto')
    } else{
        alert(`Debes ingresar al menos 5 caracteres en el campo "Nombre de tu mascota"`)
    }
}


function minimo(texto, largo) {
    return texto.length > largo
}





