import { Router } from 'express';
import {
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
  getProfile,
} from '../controllers/users';
import verifyAuthToken from '../middlewares/authValidation';

function usersRoutes(mainRouter: Router) {
  const router = Router();
  mainRouter.use('/users', verifyAuthToken, router);

  router.get('/', getUsers);
  router.get('/profile', getProfile);
  router.get('/:id', getUserById);
  router.patch('/:id', updateUser);
  router.delete('/:id', deleteUser);
}

export default usersRoutes;
