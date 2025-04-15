import { calculateAll } from '../controllers/rectangle.controller.js';
import express from 'express';

const router = express.Router();

router.get('/rect', (req, res) => {
  res.render('rectangle', { width: '', height: '', perimeter: null, area: null });
});

// Xử lý form gửi dữ liệu qua POST
router.post('/rect', calculateAll);

export default router;
