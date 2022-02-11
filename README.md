

# heroku-exercise-backend

Repositório de exercício para praticar o **deploy** de uma **API** node com express no **Heroku** utilizando **docker**.

Preview [aqui](https://back-end-docker-exercise.herokuapp.com/users).

## Tecnologias:

 - Sequelize
 - Express
 - Node
 - Docker
 - GitHub actions

## Pra testar:

 1. Primeiro instale as dependências:

    ```npm install```

 2. Depois crie um arquivo **.env** na raiz do projeto com as seguintes
    variáveis:

 ```
 DB_USERNAME=nomeDoBanco
 DB_PASSWORD=senhaDoBanco
 DATABASE=nomeDoBanco
 HOST=hostDoBanco
 DB_PORT=portaDoBanco
 ```

 3. Criar e popular o banco:

    ```npx sequelize db:create && npx sequelize db:migrate```

 3. Rodar o servidor

    ```npm start```

 1. Ser feliz e fazer uma requisição:

   

 - https://localhost:3000/users
