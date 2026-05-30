const form = document.getElementById("contactFrom")
const campoNombre = document.getElementById("nombre")
const campoEmail = document.getElementById("email")
const campoAsunto = document.getElementById("asunto")
const campoMensaje = document.getElementById("mensaje")
const AlertaExito = document.getElementById("mensajeExito")

function esEmailValido(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) 
}

function marcarError(campo, mensajeID){
    campo.classList.add("error")
    document.getElementById(mensajeID).classList.add("visible")
}

function limpiarError(campo, mensajeID){
    campo.classList.remove("error")
    document.getElementById(mensajeID).classList.remove("visible")
}

form.addEventListener("submit", function(event){
    event.preventDefault()

    let valido = true

    if(campoNombre.value.trim()===""){
        marcarError(campoNombre, 'errNombre')
        valido = false
    }else{
        limpiarError(campoNombre, 'errNombre')
    }

    if(!esEmailValido(campoEmail.value.trim())){
        marcarError(campoEmail, 'errEmail')
        valido = false
    }else{
        limpiarError(campoEmail, 'errEmail')
    }

    if(campoAsunto===""){
        marcarError(campoAsunto, 'errAsunto')
        valido = false
    }else{
        limpiarError(campoAsunto, 'ErrAsunto')
    }

    if(campoMensaje.value.trim()===""){
        marcarError(campoMensaje, 'errMensaje')
        valido = false
    }else{
        limpiarError(campoMensaje, 'errMensaje')
    }

    if(valido){
        AlertaExito.classList.add('visible')
        form.reset()
        setTimeout(() => {
            AlertaExito.classList.remove('visible')
        }, 4000);
    }

})

[campoNombre,campoEmail,campoAsunto,campoMensaje].forEach(function(campo){
    campo.addEventListener('input', function(){
        campo.classList.remove('visible')
    })
})