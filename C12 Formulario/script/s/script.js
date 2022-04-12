const formulario = document.querySelector('form');

const nombre = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#pass');

formulario.addEventListener('submit', function (event) {
    // frenar el envío por defecto
    event.preventDefault();
 
    function validarName (){
        if(nombre.value.length > 25){
            nombre.classList.add('error');
            mensajeError.innerText = 'El nombre no puede tener mas de 25 caracteres';
            nombreError.appendChild(mensajeError);
        }
    }

    function validarEmail (){
        if(email.value.){
            email.classList.add('error');
            mensajeError.innerText = 'El email no puede tener mas de 25 caracteres';
            emailError.appendChild(mensajeError);
        }
    }
    
});
/* 
    El nombre puede ser una o más palabras pero hasta 25 caracteres.
● El email debe ser válido en su formato.
● La contraseña debe tener entre 8 y 20 caracteres
● Se debe aceptar los términos y condiciones.
● Finalmente si alguno de los campos está incompleto debe pintarse en rojo o
mostrar algún cartel al respecto con el error. */