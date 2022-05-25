const form = document.querySelector('.form')
const nome = document.getElementById('idNome')
const email = document.getElementById('idEmail')
const idade = document.getElementById('idIdade')
const num = document.getElementById('idNumero')
const cepUsuario = document.getElementById('cepUsuario')
const logradouro = document.getElementById('idLogradouro')
const bairro = document.getElementById('idBairro')
const localidade = document.getElementById('idLocalidade')
const uf = document.getElementById('idUF')
const ddd = document.getElementById('idDDD')
const button = document.querySelector('#botao')
const notNull = document.getElementsByClassName('null')

const campoResultado = document.getElementById('resultado')

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
            if (cep.match(/[0-9]{5}-[\d]{3}/)) {
                bairro.value = (data.bairro);
                localidade.value = (data.localidade);
                logradouro.value = (data.logradouro);
                ddd.value = (data.ddd);
                uf.value = (data.uf)
                    // button.disabled = false
            } else {
                alert('Confira se o campo "CEP" está correto')
            }
        })
        .catch(() => alert('Confira se o campo "CEP" está correto'))
}

function isEmpty(element) {
    return element.value.length < 1 ? `O campo ${element.name} não pode estar vazio` : '';
}

function validaEmail(element) {
    return element.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? '' : `Digite um ${element.name} válido`
}

function validaNome(element) {
    return element.value.match(/[A-Za-z]*/) ? '' : `Digite um ${element.name} válido`
}

function validaIdade(element) {
    return element.value.match(/^\S[0-9]{0,3}$/) ? '' : `Digite uma ${element.name} válida`
}

function validaUf(element) {
    return element.value.match(/[A-Z]{2}/) ? '' : `Digite uma ${element.name} válida`
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let msg = []
    let markup = ''
    Array.from(notNull).forEach(field => {
        let fieldState = isEmpty(field)
        if (fieldState) {
            msg.push(fieldState)
        }
    })
    const isEmail = validaEmail(email)
    if (isEmail) {
        msg.push(isEmail)
    }
    const isNome = validaNome(nome)
    if (isNome) {
        msg.push(isNome)
    }
    const isBairro = validaNome(bairro)
    if (isBairro) {
        msg.push(isBairro)
    }
    const isLocalidade = validaNome(localidade)
    if (isLocalidade) {
        msg.push(isLocalidade)
    }
    const isIdade = validaIdade(idade)
    if (isIdade) {
        msg.push(isIdade)
    }
    const isUf = validaUf(uf)
    if (isUf) {
        msg.push(isUf)
    }
    msg.forEach(item => {
        markup += `${item} <br>`
    })

    if (msg.length == 0) {
        alert('Enviando formulário. Obrigado!')
        form.submit()
    } else {
        campoResultado.innerHTML = markup
    }
})

/*
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
        button.disabled = true
    }
}
*/