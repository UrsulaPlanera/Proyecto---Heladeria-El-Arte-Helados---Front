let form = document.getElementById('form');
let usuario = document.getElementById('input-usuario');
let contraseña = document.getElementById('input-contraseña');
let code = document.getElementById('input-code');

function validar(){
    form.addEventListener("submit", e => {
        e.preventDefault()
        if (usuario.value == 'admin' && contraseña.value == 123 && code.value == 456){
            window.open('../gestor/inicio/gestor.html', '_blank')
        }
        else {
            alert('Información incorrecta. Vuelva a intentar.')
        };
    })
}

validar()