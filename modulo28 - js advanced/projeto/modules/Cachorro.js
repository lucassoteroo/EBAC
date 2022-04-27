// importante a classe mãe
import { Animal } from "./Animal.js"

// criando a classe filha herdando a mãe
export class Cachorro extends Animal {
    falar() {
        console.log(this.especie + ' fala au au au')
    }

    comer() {
        console.log(this.especie + ' come carne ')
    }

    dormir() {
        console.log(this.especie + ' dorme pouco ')
    }
}