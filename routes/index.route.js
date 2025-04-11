import express from 'express';
import MySQLConfig from '../config/mysql.config.js';
import IndexController from '../controllers/index.controller.js';

const router = express.Router();
const indexController = new IndexController(MySQLConfig);

router.get('/', (req, res) => {
  req.query.test ? console.log('Test mode!') : null;
  indexController.getHomePage(req, res);
});

router.get('/shopping-cart', (req, res) => {
  req.query.test ? console.log('Test mode!') : null;
  indexController.getShoppingCartPage(req, res);
});

export default router;
