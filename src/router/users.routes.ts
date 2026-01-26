import { Router } from 'express';
import {
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from '../controllers/users';

function usersRoutes(mainRouter: Router) {
  const router = Router();
  mainRouter.use('/users', router);

  router.get('/', getUsers);
  router.get('/:id', getUserById);
  router.patch('/:id', updateUser);
  router.delete('/:id', deleteUser);
}

export default usersRoutes;
