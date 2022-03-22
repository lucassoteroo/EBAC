import '../scss/styles.scss'

document.addEventListener('click', (event) => {
    const et = event.target;
    if (et.classList.contains('vitrine__button')) {
        alert('Sem produtos no momento, volte nos próximos módulos ;)')
    } else if (et.classList.contains('contato__button')) {
        alert('contato enviado com sucesso!')
    }
})