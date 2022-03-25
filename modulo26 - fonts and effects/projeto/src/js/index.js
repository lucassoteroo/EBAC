import '../scss/styles.scss'
import '../assets/img/logo.png'
import '../assets/img/comecar.jpg'
import '../assets/img/estudar.jpg'
import '../assets/img/investir.jpg'
import '../assets/img/planejar.jpg'
import '../assets/img/vontade.jpg'


document.addEventListener('click', (event) => {
    const et = event.target;
    if (et.classList.contains('contato__button')) {
        alert('contato enviado com sucesso!')
    }
})