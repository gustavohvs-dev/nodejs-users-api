# REST API - CADASTRO DE USUÁRIOS
REST API de cadastro de usuários utilizando as seguintes tecnologias:

<ul>
    <li>Node.js</li>
    <li>Typescript</li>
    <li>Express.js</li>
    <li>Knex.js</li>
    <li>MySQL</li>
    <li>JWT</li>
</ul>

## Documentação
Segue abaixo documentação da API:

### GET /users
Retorna todos os usuários cadastrados.
#### Responses
```
[
	{
		"id": 1,
		"name": "Gustavo",
		"email": "gustavo@cybercode.com.br",
		"role": 1,
		"createdAt": "2023-05-10T19:19:28.000Z",
		"updatedAt": null
	},
	{
		"id": 2,
		"name": "Gabriel",
		"email": "gabriel@gmail.com",
		"role": 1,
		"createdAt": "2023-05-10T19:19:50.000Z",
		"updatedAt": null
	}
]
```