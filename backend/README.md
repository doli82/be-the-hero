# Backend
[voltar](../README.md)
Implementação de uma API desenvolvida em `Node.js` com a linguagem `javascript` para encapsular o banco de dados `SQLite3`. Esta aplicação backend, serve dados persistentes para as aplicações frontend e mobile.

## Começando
Considerando que você já clonou o repositório da aplicação, a partir da pasta raiz do projeto em seu terminal acesse a pasta do `backend`.
```bash
cd backend
```
Instale todas as dependências necessárias para o desenvolvimento.
```
npm install
```
Inicialize a aplicação no ambiente de desenvolvimento

```
npm run dev
```
O script acima, inicializa o backend em desenvolvimento, está configurado para sempre executar as últimas migrações do banco de dados usando o `knex`. Após sua execução o servidor estará ouvindo a porta `3333`, onde estão mapeados os [endpoints](./docs/endpoints.md).


## Tecnologias

- node.js
- express: *Framework para aplicações web*,
- celebrate: "^12.0.1",
- knex: "^0.20.13",
- sqlite3: *Persistência dos dados*