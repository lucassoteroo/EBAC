// Criando a superclasse ou classe mãe

export class Animal {

    constructor(especie) {
        this.especie = especie;
    }

    falar() {
        console.log(this.especie + ' está falando ');
    }

    comer() {
        console.log(this.especie + ' está comendo ');
    }

    dormir() {
        console.log(this.especie + ' está dormindo ');
    }

}