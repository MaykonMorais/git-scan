<h1 align="center">Welcome to Git Scan 👋</h1>
<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-0.1-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/yarn-%3E%3D1.22.5-blue.svg" />
  <img src="https://img.shields.io/badge/node-%3E%3D14.17.3-blue.svg" />
</p>

> Git Scan - O Mundo Open Source em um só lugar

## Pré-requesitos

- yarn >=1.22.5
- node = 14.17.3

## Install
Certifique-se que esteja usando a última versão LTS do Node (14.17.3) e instale todos os pacotes
```sh
yarn install
```

Crie um arquivo .env a partir do .env.example presente na raiz do projeto
```sh
cp .env.example .env
```

Gere sua chave JWT e copie o conteúdo gerado para o campo JWT_SIGNING_PRIVATE_KEY
```sh
npm install -g node-jose-tools
jose newkey -s 256 -t oct -a HS512
```



Inclua nas variáveis ambiente informações do seu Github ID e sua Secret para que o OAuth funcione corretamente. Para mais informações [clique aqui](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app).

Para testes locais use as seguintes configurações no momento de criação do OAuth App: 
- Homepage URL: http://localhost:3000
- Authorization callback URL: http://localhost:3000/api/auth/callback/github 

## Uso

Inicie a aplicação e divirta-se! :rocket:
```sh
yarn dev
```
