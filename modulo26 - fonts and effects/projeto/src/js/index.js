import '../scss/styles.scss'
import '../assets/img/logo.png'
import '../assets/img/comecar.jpg'
import '../assets/img/estudar.jpg'
import '../assets/img/investir.jpg'
import '../assets/img/planejar.jpg'
import '../assets/img/vontade.jpg'


document.addEventListener('click', (event) => {
    const et = event.target;
    let textoNome = document.getElementById('texto1').value;
    let textoGmail = document.getElementById('texto2').value;
    if (et.classList.contains('contato__button') && textoNome == '' && textoGmail == '') {
        alert("Preencha os campos de 'Nome' e 'Email'")
    } else if (et.classList.contains('contato__button')) {
        alert(textoNome + " enviaremos nossa newsletter para o email: " + textoGmail)
    }
})