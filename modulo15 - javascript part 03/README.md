## DOM
- Document Object Model
- Estrutura de um arquivo web
- Representa documentos HTML  e XML
- Interface de programação
- NÃO é linguagem de programação
- É essecial para o JS entender o modelo de páginas web

### Para que serve?
- Alterar a estrutura
- Alterar o estilo (css)
- Alterar o conteudo (html)

### Como?
- Disponibilizando API (Application Programming Interface)
- Rotinas e padrões estabelecidos
- Métodos (funções)
- Árvore de elementos
- Seletores
- Objetos (nós / nodes)

#### Exemplo objeto
objeto {
    html {
        head {}
        body {
            h1 {}
        }
    }
}

### DOM x JS
- O DOM pode ser usado por outras linguagens
- Sem o DOM o JS não teria noção da página

### Vantagens de usar Javascript
- Código é executado por navegadores
- Tornar as páginas dinâmicas
- Evitar requisições desnecessárias (performance)
- SPA (Single Page Applications)
- Reagir rapidamente as ações do usuário

### Desvantagens de usar Javascript
- Código é executado por navegadores
- O conteúdo não fica visível para indexadores de busca
- Alterações em tempo de execução não ficam salvas no documento

### Exemplos
- document.getElemtById(id)
- document.getElementByTagName('div')
- document.createElement('div')
- parentNode.appendChild(node) // html.appendChild('body')
- element.innerHTML
- element.style
- element.setAttribute('name')
- element.getAttribute('name')
- element.addEventListener()
- window.location
- window.onload
- window.scrollTo()
- console.log()

## Seletores
- Tipos de seletores: Tag, ID, Class, Name, Query
- Callback
- getElementById()
- getElementByTagName()
- getElmenteByName()
- getElementeByClassName()
- querySelectorAll() // #id | .class

## Formularios
- Precisamos evitar que o usuário passe dados incorretos
- Para direcionar melhor o uso do nosso sistema
- Proteger a injeção de código malicioso (hackers)
- Evitar erros de processamento
- Formatar dados para facilitar o processamento
- Regex (expressões regulares)


### Referências
- DOM: https://dom.spec.whatwg.org/
- Tecnologias JS: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/JavaScript_technologies_overview
- Motores de execução: https://pt.wikipedia.org/wiki/Lista_de_motores_de_renderiza%C3%A7%C3%A3o