import { Router } from 'express';
import { register, login, logout } from '../controllers/auth';

function authRoutes(mainRouter: Router) {
  const router = Router();
  mainRouter.use('/auth', router);

  router.post('/register', register);
  router.post('/login', login);
  router.get('/logout', logout);
}

export default authRoutes;
