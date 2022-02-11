# Operadores 

## Aritméticos: retornam o resultado de uma operação
+ somar
- subtrair
* multiplicar 
/ dividir
% resto de divisão

## Comparadores matemáticos: teste lógico, retorno booleano (true/false)
< menor que
> maior que
<= menor ou igual
>= maior ou igual

## Comparadores lógicos: teste lógico, retorno booleano (true/false)
== igualdade entre sentenças (valor)
!= diferença entre sentenças (valor)
=== igualdade entre sentenças (valor e tipo)
!== diferença entre sentenças (valor e tipo)

## Operadores de lógica e junção lógica
! NÃO (NOT)
&& E (AND)
|| OU (OR)

Sinal de exclamação (!) é o operador NOT (não), ultilizado para negar a sentença que vem na sequência

### Exemplos:

a != b // o valor de a é diferente de b
x !== // o valor e tipo de x são diferentes de y
!a == b // o valor de a não é igual ao valor b

#### As condições lógicas são convertidas em número binários
true é equivalente a 1
false é equivalente a 0

#### Operador lógico de atribuição 
Tem a capacidade de atribuir valor a uma variável a partir de uma condição lógica, economiza IFs

Exemplo:

var meuCarro = cor == "preto" ? "preto" : "branco";

## If 
if (...) {
> if (cor == "preto") {
... meuCarro = "cinza";
... console.log(meuCarro);
... }
cinza
}

## Else
else {
> if (cor == "branco") {
... meuCarro = "branco";
... } else {
... meuCarro = "preto";
... }
}

## Else if {
> if (cor == "branco") {
... meuCarro = "branco";
... } else if (cor != "vermelho") {
... meuCarro = "cinza";
... }
'cinza'
}

## Switch {
> switch (cor) {
... case "branco" :
... meuCarro = "branco";
... break;
... case "vermelho" :
... meuCarro = "vermelho";
... break;
... case "azul" :
... meuCarro = "azul";
... break;
... default :
... console.log("não temos a cor desejada");
... break;
... }
não temos a cor desejada
}

## Exemplo Média
> if (media >= 8) {
... console.log("aluno aprovado");
... } else if (media = 6) {
... console.log("aluno em recuperação");
... } else {
... console.log("aluno reprovado");
... }
aluno aprovado


## Laços de repetição (loops)

for ([expressaoInicial]; [condicao]; [incremento])

- Exemplo:

> for (km = 0; km < revisao; km++) {
... console.log("apenas " + km + " km então pode rodar");
... }
apenas 0 km então pode rodar
apenas 1 km então pode rodar
apenas 2 km então pode rodar

- Exemplo: 

> var alunos = [
... [6, 7, 6],
... [8, 5, 6],
... [10, 7, 8]
... ]

> var nota = 0;

> for (var i = 0; i < alunos.length; i++) {
... nota = 0
... notasAluno = alunos[i]
... console.log("Aluno: " + i+1);
... console.log("Notas: " + notasAluno);
... for (c = 0; c < notasAluno.length; c++) {
..... nota += notasAluno[c];
..... }
... media = nota / 4;
... if (media >= 7) {
..... resultado = "aprovado";
..... } else {
..... resultado = "reprovado";
..... }
... console.log("Media: " + media + " - " + resultado);
... }
Alunos: 6,7,6
Media: 4.75 - reprovado
Alunos: 8,5,6
Media: 4.75 - reprovado
Alunos: 10,7,8
Media: 6.25 - reprovado

while (condicao) {
    execucao
}

> while (nota > 0) {
... console.log(nota);
... nota--;
... }
24
23
22
21
20
19
18
17
16
15
14
13
12
11
10
9
8
7
6
5
4
3
2
1

do {
    [execucao]
} while (condicao)

## Funções

- Evitar repetição de código
- Realizar chamadas dinâmicas de algoritmos

Exemplo: 

function calcularMedia(notas) {
	var soma = 0;	
	for (c = 0; c < notas.length; c++) {
		soma += notas[c];
	}
	media = soma / notas.length;
	return media;
}

console.log("Média: " + calcularMedia([5, 5]));

Exemplo: 

function calcularMedia(notas) {
	var soma = 0;	
	for (c = 0; c < notas.length; c++) {
		soma += notas[c];
	}
	media = soma / notas.length;
	return media;
}

function aprovacao(media) {
		let resultado = 0;
    if (media >= 7) {
    	resultado = "aprovado";
    } else {
    	resultado = "reprovado";
    }
    return resultado;
}

console.log("Média: " + calcularMedia([5, 5]));
console.log(aprovacao(calcularMedia([5, 5])))

Exemplo: 

function calcularMedia(notas) {
	var soma = 0;	
	for (c = 0; c < notas.length; c++) {
		soma += notas[c];
	}
	media = soma / notas.length;
	return media;
}

function aprovacao(notas) {

	let media = calcularMedia(notas);

	let resultado = 0;
  	if (media >= 7) {
  	  resultado = "aprovado";
  	} else {
  	  resultado = "reprovado";
  	}
  	 return "Média de " + media + " - Resultado é " + resultado;
}

console.log(aprovacao([8, 7]));
console.log(aprovacao([5, 8]));