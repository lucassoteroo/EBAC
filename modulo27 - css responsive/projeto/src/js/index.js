import '../scss/styles.scss'
import '../assets/img/logo.png'
import '../assets/img/comecar.jpg'
import '../assets/img/estudar.jpg'
import '../assets/img/investir.jpg'
import '../assets/img/planejar.jpg'
import '../assets/img/vontade.jpg'

let camposObrigatorios = document.querySelectorAll('input.contato__nome');
let camposEmail = document.querySelectorAll('input.contato__email');

const validaCampo = (elemento) => {
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();
        if (this.value == "") {
            alert("verifique se o campo 'nome' esta correto")
            this.classList.add('erro')
            this.parentNode.classList.add('erro');
            return false;
        } else {
            this.classList.remove('erro');
        }
    });

}

const validaEmail = (elemento) => {
    elemento.addEventListener('focusout', function(event) {
        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        if (this.value.match(emailValido)) {
            event.preventDefault();
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
            document.getElementById('enviar').disabled = false
        } else {
            alert("verifique se o campo 'email' foi escrito corretamente")
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    });
}

for (let emFoco of camposObrigatorios) {
    validaCampo(emFoco)
}
for (let emFoco of camposEmail) {
    validaEmail(emFoco)
}