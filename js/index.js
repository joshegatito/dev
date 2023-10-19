// Función para diferentes enlaces
function OpenLink(enlace){
    if (!enlace) {
        return;
    }

    var win = window.open(enlace, "_blank");
    win.focus();
}

const desplazamiento = document.getElementById("arriba");

// Función para mostrar u ocultar el botón según la posición de desplazamiento
function togglebutton() {

    if (window.scrollY >= 20)  {

        desplazamiento.style.display = "block";
    } 
    else 
    {
        desplazamiento.style.display = "none";
    }
}

desplazamiento.addEventListener("click", function() { window.scrollTo({top: 0,behavior: "smooth"});});

// Agregar un evento de desplazamiento para controlar la visibilidad del botón
window.addEventListener("scroll", togglebutton);

// Llamada inicial para configurar el botón según la posición de desplazamiento
togglebutton();
