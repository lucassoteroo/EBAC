# Gulp

Kit de ferramentas de automação de tarefas baseada em JS

- Otimizar o fluxo de trabalho (desenvolvimento)
- Organização e orquestração de arquivos
- Ajuda a evitar trabalhos lentos e repetitivos
- Criação de pipelines
- Você cria as configurações necessárias (flexível)
- Tarefas escritas em JS ou plug-ins
- Aplica transformações em arquivos ainda na memória (antes de gravar no disco)

## Porquê automatizar?

- Melhor organização 
- Evitar repetição de tarefas 
- Mais tempo para focar no mais importante: regras de negócio e UX


## Principais Recursos

- Minificação de arquivos 
- Otimização de imagens (para melhor permomance)
- Mescla de arquivos de diferentes origens

## Transpilação para JS

é o processo de tranformação (conversão) de escrita em outras linguagens para o JS. Você poderá escrever em Typescript ou Babel que o código.

Todo processo é executado a partir node.js e gulp-Cli (linha de comando)

## Global X Local

- A instação do Node.js é global
- Já o Gulp e seus plugins são instalados localmente (em cada projeto/diretório)

## Gerenciadores de pacote

- Depêndencia do projeto
- NPM: Node Package Manager
- Utiliza o Node.js
- Permite a configuração rápida e fácil de ambientes e plugins Node

## Instalando o Gulp

- Rodar o Node.js
- Agora na pasta do projeto, adicionar o npm: npm init -y
- Instalar o gulp-cli (Command Line Interface) globalmente: npm install gulp-cli -g
- Criar o gulpfile.js

## Trabalhando com Gulp

- Baseado em funções: Tasks
- Organização do projeto
- Otimização de arquivos
- Mesclagem e minificação de CSS e JS
- Diminuição do tamanho (bytes de imagens)

## Rodar o projeto

- Executar o comando: 
- ```
- npm install
- gulp serve
- ```