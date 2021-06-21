import { Router } from 'express'
import { AdminAuthController } from './controllers/AdminAuthController'
import { JWTController } from './controllers/JWTController';
import { CoordenadorController } from './controllers/CoordenadorController';
import { CursoController } from './controllers/CursoController';

const router = Router()
const adminAuthController = new AdminAuthController()
const coordenadorController = new CoordenadorController()
const cursoController = new CursoController()

const jwtController = new JWTController()

// GET => Buscar
// POST => Salvar
// PUT => Alterar
// DELETE => Deletar
// PATCH => Alteração específica

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
export { router }

