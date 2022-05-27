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
const campoResultadoNome = document.getElementById('resultadoNome')
const campoResultadoEmail = document.getElementById('resultadoEmail')
const campoResultadoBairro = document.getElementById('resultadoBairro')
const campoResultadoRua = document.getElementById('resultadoRua')
const campoResultadoLocalidade = document.getElementById('resultadoLocalidade')
const campoResultadoIdade = document.getElementById('resultadoIdade')
const campoResultadoUf = document.getElementById('resultadoUF')
const campoResultadoDdd = document.getElementById('resultadoDDD')
const campoResultadoNumero = document.getElementById('resultadoNumero')
const campoResultadoCep = document.getElementById('resultadoCep')

cepUsuario.addEventListener('focusout', function(event) {
    getCep(event.target.value);
})

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

function validaDDD(element) {
    return element.value.match(/[0-9]{2}/) ? '' : `Digite uma ${element.name} válida`
}

function validaNumero(element) {
    return element.value.match(/[0-9]{9}/) ? '' : `Digite uma ${element.name} válida`
}

function validaCep(element) {
    return element.value.match(/[0-9]{5}[\d]{3}/) ? '' : `Confira se o campo "${element.name}" está correto`
}


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
                campoResultadoCep.innerHTML = ''
            }
        })
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

    const teste = []

    // Validação do email
    const isEmailValid = validaEmail(email);
    const isEmailEmpty = isEmpty(email);
    validaocaoFinal(isEmailEmpty, isEmailValid, campoResultadoEmail, teste)

    // Validação do nome
    const isNomeValid = validaNome(nome)
    const isNomeEmpty = isEmpty(nome)
    validaocaoFinal(isNomeEmpty, isNomeValid, campoResultadoNome, teste)

    // Validação do bairro
    const isBairroValid = validaNome(bairro)
    const isBairroEmpty = isEmpty(bairro)
    validaocaoFinal(isBairroEmpty, isBairroValid, campoResultadoBairro, teste)

    // Validação da localidade
    const isLocalidadeValid = validaNome(localidade)
    const isLocalidadeEmpty = isEmpty(localidade)
    validaocaoFinal(isLocalidadeEmpty, isLocalidadeValid, campoResultadoLocalidade, teste)

    // Validação da idade
    const isIdadeValid = validaIdade(idade)
    const isIdadeEmpty = isEmpty(idade)
    validaocaoFinal(isIdadeEmpty, isIdadeValid, campoResultadoIdade, teste)

    // Validação do UF
    const isUfValid = validaUf(uf)
    const isUfEmpty = isEmpty(uf)
    validaocaoFinal(isUfEmpty, isUfValid, campoResultadoUf, teste)

    // Validação do DDD
    const isDddValid = validaDDD(ddd)
    const isDddEmpty = isEmpty(ddd)
    validaocaoFinal(isDddEmpty, isDddValid, campoResultadoDdd, teste)

    // Validação do Numero
    const isNumeroValid = validaNumero(num)
    const isNumeroEmpty = isEmpty(num)
    validaocaoFinal(isNumeroEmpty, isNumeroValid, campoResultadoNumero, teste)

    // Validacao do cep
    const isCepEmpty = isEmpty(cepUsuario)
    const isCepValid = validaCep(cepUsuario)
    validaocaoFinal(isCepEmpty, isCepValid, campoResultadoCep, teste)

    // Validação do Rua
    const isRuaValid = validaNome(logradouro)
    const isRuaEmpty = isEmpty(logradouro)
    validaocaoFinal(isRuaEmpty, isRuaValid, campoResultadoRua, teste)

    if (campoResultadoNome.innerHTML && campoResultadoEmail.innerHTML && campoResultadoIdade.innerHTML && campoResultadoNumero.innerHTML && campoResultadoCep.innerHTML && campoResultadoRua.innerHTML && campoResultadoBairro.innerHTML && campoResultadoLocalidade.innerHTML && campoResultadoUf.innerHTML && campoResultadoDdd.innerHTML === '') {
        console.log('oi')
    } else {
        console.log('deu ruim')
    }

    console.log(teste.length == 10)

    if (teste.length == 10) {
        alert('Enviando formulário. Obrigado!')
        form.submit()
    }
})

const validaocaoFinal = function ValidacaoCampos(validacaoEmBranco, validaocaoCampo, campo, arr) {
    if (validacaoEmBranco) {
        campo.innerHTML = validacaoEmBranco
    } else if (validaocaoCampo) {
        campo.innerHTML = validaocaoCampo
    } else {
        arr.push('validado')
    }
}