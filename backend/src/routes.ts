import { Router } from 'express'
import { AdminAuthController } from './controllers/AdminAuthController'
import { JWTController } from './controllers/JWTController';
import { CoordenadorController } from './controllers/CoordenadorController';
import { CursoController } from './controllers/CursoController';
import { SolicitacaoController } from './controllers/SolicitacaoController';
import { RecursoController } from './controllers/RecursoController';
import multer from 'multer';
import * as multerConfig from './config/multer'

const upload = multer(multerConfig);

const router = Router()
const adminAuthController = new AdminAuthController()
const coordenadorController = new CoordenadorController()
const cursoController = new CursoController()
const solicitacaoController = new SolicitacaoController()
const recursoController = new RecursoController()
const jwtController = new JWTController()

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

// ROTAS SOLICITAÇÃO
router.post('/solicitacao/create',upload.array('image'), solicitacaoController.create)
router.post('/solicitacao/search', solicitacaoController.search)

// ROTAS RECURSO
router.post('/recurso/create',upload.array('image'),  recursoController.create)