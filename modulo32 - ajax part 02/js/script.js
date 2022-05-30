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
    if (element.value.length < 1) {
        return `O campo ${element.name} não pode estar vazio`
    } else {
        return ''
    }
}

function validaEmail(element) {
    if (element.value == element.value.match(/\S+@\S+\.\S+/)) {
        return '';
    } else {
        return `Digite um ${element.name} válido`;
    }
}

function validaNome(element) {
    if (element.value == element.value.match(/[A-Za-z]*/)) {
        return '';
    } else if (!isNaN(element.value)) {
        return `O campo não aceita números`;
    } else {
        return `Digite um ${element.name} válida`;
    }
}

function validaIdade(element) {
    if (element.value == element.value.match(/[0-9]{0,3}/)) {
        return ''
    } else {
        return `Digite uma ${element.name} válida`
    }
}

function validaUf(element) {
    if (element.value == element.value.match(/[A-Za-z]{2}/)) {
        return ''
    } else {
        return `Digite uma ${element.name} válida`
    }
}

function validaDDD(element) {
    if (element.value == element.value.match(/[0-9]{2}/)) {
        return '';
    } else {
        return `Digite uma ${element.name} válida`
    }
}

function validaNumero(element) {
    if (element.value == element.value.match(/[0-9]{9}/)) {
        return '';
    } else {
        return `Digite uma ${element.name} válida`
    }
}

function validaCep(element) {
    if (element.value == element.value.match(/[0-9]{5}[\d]{3}/)) {
        return '';
    } else {
        return `Confira se o campo "${element.name}" está correto`;
    }
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
                for (let i = 0; i < 5; i++) {
                    teste.push('validado')
                }
                campoResultadoCep.innerHTML = ''
            }
        })
}

// Validação Email
function validaEmailOnChange() {
    let variavelEmail = email
    validacaoCampo(validaEmail(variavelEmail), campoResultadoEmail, teste)
}

// Validação Nome
function validaNomeOnChange() {
    let variavelNome = nome
    validacaoCampo(validaNome(variavelNome), campoResultadoNome, teste)
}

// Validação Idade
function validaIdadeOnChange() {
    let variavelIdade = idade
    validacaoCampo(validaIdade(variavelIdade), campoResultadoIdade, teste)
}

// Validação UF
function validaUfOnChange() {
    let variavelUf = uf
    validacaoCampo(validaUf(variavelUf), campoResultadoUf, teste)
}

// Validação DDD
function validaDddOnChange() {
    let variavelDdd = ddd
    validacaoCampo(validaDDD(variavelDdd), campoResultadoDdd, teste)
}

// Validação Número
function validaNumOnChange() {
    let variavelNum = num
    validacaoCampo(validaNumero(variavelNum), campoResultadoNumero, teste)
}

// Validação Cep
function validaCepOnChange() {
    let variavelCep = cepUsuario
    validacaoCampo(validaCep(variavelCep), campoResultadoCep, teste)
}

// Validação Rua
function validaRuaOnChange() {
    let variavelRua = logradouro
    validacaoCampo(isEmpty(variavelRua), campoResultadoRua, teste)
}

// Validação Bairro
function validaBairroOnChange() {
    let variavelBairro = bairro
    validacaoCampo(isEmpty(variavelBairro), campoResultadoBairro, teste)
}

// Validação Cidade
function validaCidadeOnChange() {
    let variavelCidade = localidade
    validacaoCampo(isEmpty(variavelCidade), campoResultadoLocalidade, teste)
}

const teste = []

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

    console.log(teste.length)

    if (teste.length > 10) {
        alert('Enviando formulário. Obrigado!')
        form.submit()
    }
})


function validacaoCampo(validacao, campo, arr) {
    if (validacao) {
        campo.innerHTML = validacao
    } else {
        arr.push('validado')
        campo.innerHTML = ''
    }
}