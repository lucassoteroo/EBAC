// importando os modulos das classes
import { Animal } from "./Animal.js";
import { Cachorro } from "./Cachorro.js";
import { Gato } from "./Gato.js";

// instanciando o objeto da classe mãe
const elefante = new Animal("elefante")
elefante.falar()
elefante.comer()
elefante.dormir()

// instanciando o objeto da classe filha
const cachorro = new Cachorro("doberman")
cachorro.falar()
cachorro.comer()
cachorro.dormir()

// instanciando o objeto da classe filha
const gato = new Gato("siamês")
gato.falar()
gato.comer()
gato.dormir()