# heroku-exercise-backend

Repositório de exercício para praticar o **deploy** de uma **API** node com express no **Heroku** utilizando **docker**.

A aplicação não foi feita por mim, meu papel aqui foi apenas de dockerizar, criar e configurar um banco de dados no supabase, fazer deploy no Heroku e por fim configurar CI/CD com GitHub Actions.

Preview [aqui](https://back-end-docker-exercise.herokuapp.com/users) (pode não estar funcionando devido a limitações de plano grátis do Supbase e do Heroku).

## Tecnologias e ferramentas:

 - Node
 - Docker
 - GitHub actions
 - Heroku
 - Continuos Integration e Continuous Delivery

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





