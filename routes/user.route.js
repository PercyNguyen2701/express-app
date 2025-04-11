import express from 'express';
import userController from '../controllers/user.controller.js';

const router = express.Router();

// Route tạo user mới
router.post('/users', (req, res) => userController.createUser(req, res));

// Route lấy danh sách users
router.get('/users', (req, res) => userController.getUsers(req, res));

export default router;
