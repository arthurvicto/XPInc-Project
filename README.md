# Projeto XPInc Back-end!

# Desenvolvimento


<details>
  <summary><strong>Como rodar o projeto</strong></summary><br />
    ```
    host: process.env.MYSQL_HOST
    user: process.env.MYSQL_USER
    password: process.env.MYSQL_PASSWORD
  ```
</details>

<details>
  <summary><strong>APIs</strong></summary><br />
</details>

<details>
  <summary><strong>Testes Unitários</strong></summary><br />

Para rodar os testes localmente basta rodar os comandos abaixo:
  ```
    npm run test:models
    npm run test:services
    npm run test:controllers
  ```

</details>

<details>
  <summary><strong>Autenticação e Autorização da API com JWT</strong></summary><br />
  Com o intuito de deixar o código mais seguro utilizei a o JWT para gerar e autenticar o token, permitindo que no momento de cada transação seja possível verificar se o token decodificado
  pertence a carteira em questão.
  
</details>

<details>
  <summary><strong>Deploy da API</strong></summary><br />
  
[Site](https://xpinc-projec-back-end.herokuapp.com/)

</details>

<details>
  <summary><strong>Documentação da API- Swagger</strong></summary><br />
  
  [Site](https://xpinc-projec-back-end.herokuapp.com/docs/)
  
</details>
