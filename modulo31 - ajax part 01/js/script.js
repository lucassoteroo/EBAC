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
            let button = document.querySelector('#botao')
            if (cep.length == 9) {
                document.getElementById('idBairro').value = (data.bairro);
                document.getElementById('idLocalidade').value = (data.localidade);
                document.getElementById('idLogradouro').value = (data.logradouro);
                document.getElementById('idDDD').value = (data.ddd);
                document.getElementById('idUF').value = (data.uf)
                button.disabled = false
            } else {
                alert('Confira se o campo "CEP" está correto')
            }
        })
        .catch(() => alert('Confira se o campo "CEP" está correto'))
}

function Enviar() {
    if (document.getElementById('idNome').value == ('') || document.getElementById('idNome').value == ('')) {
        alert('Confira se os campos de "Nome" ou "Idade" estão preenchidos')
    } else {
        alert('Formulário enviado com sucesso')
        document.getElementById('idNome').value = ('')
        document.getElementById('idIdade').value = ('')
        document.getElementById('cepUsuario').value = ('')
        document.getElementById('idBairro').value = ('');
        document.getElementById('idLocalidade').value = ('');
        document.getElementById('idLogradouro').value = ('');
        document.getElementById('idDDD').value = ('');
        document.getElementById('idUF').value = ('')
    }
}