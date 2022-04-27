class Movimentacao {
    constructor(banco = 'padrao', nome = '', saldo = 0) {
        this.banco = banco,
            this.nome = nome,
            this.saldo = saldo
    }
}

class Registro {
    constructor(dia, mes, ano) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
        this.movimentacoes = []
    }
    novaMovimentacao(...movimentacoes) {
        movimentacoes.forEach(
            lancamento => this.movimentacoes.push(lancamento)
        )
    }
    resumo() {
        let valorAtualizado = 0;
        let tipo = ''
        this.movimentacoes.forEach(lancamento => {
            lancamento.banco = lancamento.banco.replace(/C6$/i, 'Nubank')
            if (!lancamento.nome.match(/imposto/)) {
                valorAtualizado += lancamento.saldo
                tipo += lancamento.nome + ' | '
            }
        })
        return tipo + valorAtualizado
    }
}

const m01 = new Movimentacao('C6', 'salario', 1200)
const m02 = new Movimentacao('Nubank', 'comissao', 120)
const m03 = new Movimentacao('Nubank', 'imposto', -200)

const regis01 = new Registro(26, 04, 2022)
regis01.novaMovimentacao(m01, m02, m03)
console.log(regis01.resumo())
console.log(regis01)

// Macth busca
// Replace troca um valor pelo outro
// Regex formula que busca algo dentro de uma string

const arrayBanco = [m01, m02, m03]

arrayBanco.map(element => console.log(element.banco.length))