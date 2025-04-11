import { calculatePerimeterAndArea } from '../controllers/rectangle.controller.js';
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('rectangle', { with: '', height: '' });
});

// Xử lý form gửi dữ liệu qua POST
router.post('/', calculatePerimeterAndArea);

export default router;
