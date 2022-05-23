cepUsuario.addEventListener('focusout', function(event) {
    getCep(event.target.value);
})

function getCep(user) {
    fetch(`https://viacep.com.br/ws/${user}/json/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((data) => {
            let cep = data.cep
            if (cep.length == 9) {
                document.getElementById('idBairro').value = (data.bairro);
                document.getElementById('idLocalidade').value = (data.localidade);
                document.getElementById('idLogradouro').value = (data.logradouro);
                document.getElementById('idDDD').value = (data.ddd);
                document.getElementById('idUF').value = (data.uf)
            } else {
                alert('Confira se o campo "CEP" está correto')
            }
        })
        .catch(() => alert('Confira se o campo "CEP" está correto'))
}

const form = document.querySelector('.form')

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (document.getElementById('idBairro').value == ('') || document.getElementById('idLocalidade').value == ('') || document.getElementById('idLogradouro').value == ('') || document.getElementById('idDDD').value == ('') || document.getElementById('idUF').value == ('') || document.getElementById('idNome').value == ('') || document.getElementById('idIdade').value == ('')) {
        alert('Verifique se todos os campos estão preenchidos')
    } else {
        form.submit();
    }
})