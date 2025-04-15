import { calculateAll } from '../controllers/square.controller.js';
import express from 'express';

const router = express.Router();

router.get('/square', (req, res) => {
  res.render('square', { sidelength: '', perimeter: null, area: null });
});

// Xử lý form gửi dữ liệu qua POST
router.post('/square', calculateAll);

export default router;
