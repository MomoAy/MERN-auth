import express from 'express';

import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile } from '../Controllers/user_controllers.js';
import { protect } from '../middleware/auth_middleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/auth', authUser);
router.post('/logout', protect, logoutUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;