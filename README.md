# Projeto XPInc Back-end!

# Desenvolvimento


<details>
  <summary><strong>Como rodar o projeto</strong></summary><br />
  
  Para rodar o projeto localmente, basta rodar os códigos abaixo:
  
 
    git clone git@github.com:arthurvicto/XPInc-Project.git  
    npm install   
    npm start
    

</details>

<details>
  <summary><strong>Configurando as Variáveis de ambiente</strong></summary><br />
  
  Necessário a criação de pasta .env na raiz do projeto e configuração das variáveis abaixo:
  
 ```
MYSQL_HOST=localhost
MYSQL_USER=user
MYSQL_PASSWORD=password
MYSQL_DATABASE=XPInc
PORT=3306
JWT_SECRET='senha'
  
 ```   

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
  Utilizei o Heroku para hospedar o banco de dados e a aplicação fazendo com que seja realizada de forma interativa e dinâmica. 
  
[Site](https://xpinc-projec-back-end.herokuapp.com/)

</details>

<details>
  <summary><strong>Documentação da API- Swagger</strong></summary><br />
  Com o intuito de listar os parâmetros necessários para a utilização da API, realizei a documentação da api via Swagger.
  
  [Site](https://xpinc-projec-back-end.herokuapp.com/docs/)
  
</details>

# APIs

<details>
  <summary><strong>Requisições para investimento</strong></summary><br />

 • POST (/investimentos/comprar)
```
  O endpoint recebe como entradas o código do ativo, a quantidade de ações compradas, número da conta compradora
```
 • POST (/investimentos/vender)
  ```
  O endpoint recebe como entradas o código do ativo, a quantidade de ações compradas, número da conta vendedora
```
 • GET BY CLIENT(/ativos/{cod-cliente})
```
  O endpoint recebe como entradas o código da wallet do cliente e indorma a quantidade de ativos
```
 • GET BY ASSETS (/ativos/{cod-ativo})
 ```
  O endpoint recebe como entradas o código dao ativo e informa a quantidade que o banco possui e seu valor
 ```
</details>



<details>
  <summary><strong>Requisição para depósitos e saques</strong></summary><br />

 • POST (/conta/deposito)
```
  O endpoint recebe como entradas o número da conta e a quantidade a depositar
```
 • POST (/conta/saque)
```
  O endpoint recebe como entradas o número da conta e a quantidade a sacar
```
 • GET (/conta/{cod-cliente})
 ```
  O endpoint recebe como entradas o código da wallet do cliente e informa o saldo da carteira do cliente
 ```
</details>
