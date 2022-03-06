# Webpack
- Empacotador de módulo JS
- Utilizado por diversos frameworks modernos como React, Angular...
- Trabalha com Node.js

## Instalação

1. Iniciar o projeto

```
npm init -y
```

2. Instalar o Webpack como dependência do desenvolvimento

```
npm install webpack webpack-cli --save-dev
```

## Trabalhando com HTML
É necessário trabalhar com plugin para ampliar as possibilidades de uso, instalação:

```
npm install html-webpack-plugin
```

## Adicionando CSS
Para trabalhar com estilos também compensa adicionar algumas extensões
- node-sass: compilador de sass para node
- sass-loader: carrega para o webpack compilar
- style-loader: injeta estilos na árvore de objetos (DOM)
- css-loader: interpreta diretivas do css (import, ...)
- extract: extrai o css do js

```
npm install --save-dev node-sass sass-loader -style-loader css-loader mini-css-extract-plugin
```

- Sistemas de Módulos
- Gerenciamento de Dependências 
- Desenvolvimento X Produção

## Melhorando a compatibilidade com JS com o Babel
Babel tranforma o código JS para uma versão com maior compatibilidade para navegadores antigos

```
npm install --save-dev @babel/core @babel/preset-env babel-loader
```

## Trabalhando com imagens
Adicionar file loader

```
npm install --save-dev file-loader
```