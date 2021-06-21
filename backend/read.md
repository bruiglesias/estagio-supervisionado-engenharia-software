# API DA APLICAÇÃO
Essa API tem como objetivo servir de backend para a aplicação web e aplicação mobile.

## Como Funciona:
A comunicação é feita através de requisições HTTP.

## Árvore de Arquivos
```
src/
├── arvore.txt
├── controllers
│   ├── AdminAuthController.ts
│   ├── CoordenadorController.ts
│   ├── CursoController.ts
│   └── JWTController.ts
├── database
│   ├── database.sqlite
│   ├── index.ts
│   └── migrations
│       ├── 1622238609704-CreateUsers.ts
│       ├── 1622401257914-CreateCurso.ts
│       ├── 1622401278405-CreateAdministrador.ts
│       ├── 1622401302015-CreateCoordenador.ts
│       ├── 1622401347613-CreateAluno.ts
│       ├── 1622401374186-CreateSolicitacao.ts
│       ├── 1622401386967-CreateAnexo.ts
│       ├── 1622401395641-CreateDisciplina.ts
│       └── 1622401405732-CreateRecurso.ts
├── models
│   ├── Administrador.ts
│   ├── Aluno.ts
│   ├── Anexo.ts
│   ├── Coordenador.ts
│   ├── Curso.ts
│   ├── Disciplina.ts
│   ├── Recurso.ts
│   └── Solicitacao.ts
├── repositories
│   ├── AdministradorRepository.ts
│   ├── AlunoRepository.ts
│   ├── AnexoRepository.ts
│   ├── CoordenadorRepository.ts
│   ├── CursoRepository.ts
│   ├── DisciplinaRepository.ts
│   ├── RecursoRepository.ts
│   ├── SolicitacaoRepository.ts
│   └── UserRepository.ts
├── routes.ts
└── server.ts
```

## Resumo das Rotas

```
// ROTAS ADMINISTRADOR
router.post('/admin/auth/create', adminAuthController.create)
router.post('/admin/auth/login', adminAuthController.login)

// ROTAS CURSO
router.post('/curso/create', jwtController.verifyToken, cursoController.create)
router.get('/curso/show', jwtController.verifyToken, cursoController.show)
router.post('/curso/find/id', jwtController.verifyToken, cursoController.findById)
router.post('/curso/find/name', jwtController.verifyToken, cursoController.findByName)

// ROTAS COORDENADOR
router.post('/coord/auth/create', jwtController.verifyToken, coordenadorController.create)
router.get('/coord/show', jwtController.verifyToken, coordenadorController.show)
router.post('/coord/find/id', jwtController.verifyToken, coordenadorController.findById)
router.post('/coord/find/name', jwtController.verifyToken, coordenadorController.findByName)

```
## Descrição das Rotas de Administrador

- [x] ROTA PARA CRIAR UM USUÁRIO ADMINISTRADOR

> O APP ou Página Web deve enviar um HTTP POST REQUEST para: www.meusiteexemplo.com.br/admin/auth/create

- Obs: Essa rota não deve estar disponível em produção

(corpo da requisição - JSON enviado para API pelo Frond-End / Resposta da API)
![image](https://user-images.githubusercontent.com/37714912/122695151-97e97780-d20d-11eb-8a5f-684c5fdf6c0b.png)

- [x] ROTA PARA LOGIN DE USUÁRIO ADMINISTRADOR

> O APP ou Página Web deve enviar um HTTP POST REQUEST para: www.meusiteexemplo.com.br/admin/auth/login

(corpo da requisição - JSON enviado para API pelo Frond-End / Resposta da API)
![image](https://user-images.githubusercontent.com/37714912/122696553-522eae00-d211-11eb-8a8f-2d3224f3d2b4.png)

## Descrição das Rotas de Curso

- [x] ROTA PARA CRIAR DOS CURSOS PELO ADMINISTRADOR

> O APP ou Página Web deve enviar um HTTP POST REQUEST para: www.meusiteexemplo.com.br/curso/create

- Obs: Deve ser enviado no cabeçalho o token de acesso retornado no login
 
(corpo da requisição - JSON enviado para API pelo Frond-End / Resposta da API)
![image](https://user-images.githubusercontent.com/37714912/122695967-e5ff7a80-d20f-11eb-8efd-386e2dfdedc2.png)

(cabeçalho da requisição)
![image](https://user-images.githubusercontent.com/37714912/122696091-3c6cb900-d210-11eb-961f-c261683b8df5.png)


- [x] ROTA PARA LISTAR CURSOS

> O APP ou Página Web deve enviar um HTTP GET REQUEST para: www.meusiteexemplo.com.br/curso/show

- Obs: Deve ser enviado no cabeçalho o token de acesso retornado no login
 
(corpo da requisição - JSON enviado para API pelo Frond-End / Resposta da API)
![image](https://user-images.githubusercontent.com/37714912/122696690-ab96dd00-d211-11eb-8b70-25e2602d632f.png)

(cabeçalho da requisição)
![image](https://user-images.githubusercontent.com/37714912/122696713-b81b3580-d211-11eb-93c5-e65a51a74a3f.png)


- [x] ROTA PARA PESQUISAR CURSOS PELO ID

> O APP ou Página Web deve enviar um HTTP POST REQUEST para: www.meusiteexemplo.com.br/curso/find/id

- Obs: Deve ser enviado no cabeçalho o token de acesso retornado no login
 
(corpo da requisição - JSON enviado para API pelo Frond-End / Resposta da API)
![image](https://user-images.githubusercontent.com/37714912/122696976-5dcea480-d212-11eb-99d7-f003e115a4c2.png)

(cabeçalho da requisição)
![image](https://user-images.githubusercontent.com/37714912/122697024-76d75580-d212-11eb-9aa8-73cdb5f0181e.png)


- [x] ROTA PARA PESQUISAR CURSOS PELO NOME

> O APP ou Página Web deve enviar um HTTP POST REQUEST para: www.meusiteexemplo.com.br/curso/find/name

- Obs: Deve ser enviado no cabeçalho o token de acesso retornado no login
 
(corpo da requisição - JSON enviado para API pelo Frond-End / Resposta da API)
![image](https://user-images.githubusercontent.com/37714912/122697208-d5043880-d212-11eb-90aa-8a7a29072142.png)


(cabeçalho da requisição)
![image](https://user-images.githubusercontent.com/37714912/122697233-e2b9be00-d212-11eb-8028-40ce845fd8cf.png)





## Contribuição
```bash
Fique a vontade para contribuir com o aplicativo.
```

## Desenvolvido por
Bruno Iglesias
