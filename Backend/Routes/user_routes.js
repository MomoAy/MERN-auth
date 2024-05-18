import express from 'express';

import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile } from '../Controllers/user_controllers.js';
import { protect } from '../middleware/auth_middleware.js';

const router = express.Router();

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;