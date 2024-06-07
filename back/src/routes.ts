import { Router } from 'express';
import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';
import ArticleController from './controllers/ArticleController';
import CommentController from './controllers/CommentController';
import VideoController from './controllers/VideoController';

const router = Router();

// Declaração de controllers
const userController = new UserController();
const authController = new AuthController();

// Declaração de rotas
router.get('/', (req, res) => { return res.json({ hello: 'world' }) });
router.get('/list_users', userController.list);
router.post('/create_user', userController.create);
router.post('/login', authController.login);

// Rotas de Artigos
router.post('/articles', ArticleController.create);
router.get('/articles', ArticleController.list);
router.get('/articles/:id', ArticleController.show);
router.put('/articles/:id', ArticleController.update);
router.delete('/articles/:id', ArticleController.delete);

// Rotas de Comentários
router.post('/comments', CommentController.create);
router.get('/comments', CommentController.list);
router.get('/comments/:id', CommentController.show);
router.put('/comments/:id', CommentController.update);
router.delete('/comments/:id', CommentController.delete);

// Rotas de Vídeos
router.post('/videos', VideoController.create);
router.get('/videos', VideoController.list);
router.get('/videos/:id', VideoController.show);
router.put('/videos/:id', VideoController.update);
router.delete('/videos/:id', VideoController.delete);

export default router;
