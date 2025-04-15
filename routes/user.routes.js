import express from 'express';
import { createUserController, getUsersController } from '../controllers/user.controller.js';

const router = express.Router();

// Route tạo user mới
router.post('/users', (req, res) => createUserController(req, res));

// Route lấy danh sách users
router.get('/user/all', (req, res) => getUsersController(req, res));

export default router;
