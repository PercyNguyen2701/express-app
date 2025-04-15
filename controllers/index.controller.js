import index from '../models/index.model.js';

export async function getHomePageController(req, res) {
  index.getHomePage(req, res);
}

export async function getShoppingCartPageController(req, res) {
  index.getShoppingCartPage(req, res);
}
