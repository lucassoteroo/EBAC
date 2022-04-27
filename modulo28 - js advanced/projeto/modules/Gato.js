// importante a classe mãe
import { Animal } from "./Animal.js"

// criando a classe filha herdando a mãe
export class Gato extends Animal {
    falar() {
        console.log(this.especie + ' fala miau miau')
    }

    comer() {
        console.log(this.especie + ' come whiskas ')
    }

    dormir() {
        console.log(this.especie + ' dorme muito ')
    }
}