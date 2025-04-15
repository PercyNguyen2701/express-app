import express from 'express';
import {
  getHomePageController,
  getShoppingCartPageController,
} from '../controllers/index.controller.js';

const router = express.Router();

router.get('/', async (req, res) => {
  req.query.test ? console.log('Test mode!') : null;
  await getHomePageController(req, res);
});

router.get('/shopping-cart', async (req, res) => {
  req.query.test ? console.log('Test mode!') : null;
  await getShoppingCartPageController(req, res);
});

export default router;
