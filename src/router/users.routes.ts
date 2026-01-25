import { Router } from 'express';
import {
  deleteUserController,
  getUserByIdController,
  getUsersController,
  updateUserController,
} from '../controllers/users';

function usersRoutes(mainRouter: Router) {
  const router = Router();
  mainRouter.use('/users', router);

  router.get('/', getUsersController);
  router.get('/:id', getUserByIdController);
  router.patch('/:id', updateUserController);
  router.delete('/:id', deleteUserController);
}

export default usersRoutes;
