import mysqlInstance from '../config/mysql.config.js';

class Index {
  constructor(mysqlConfig) {
    this.mysqlConfig = mysqlConfig;
  }

  getHomePage(req, res) {
    const sql = 'SELECT * FROM users LIMIT ?';
    this.mysqlConfig.query(sql, [10], (err, results) => {
      err
        ? res.status(500).send('Lỗi truy xuất dữ liệu: ' + err.message)
        : res.render('index', { users: results ? results : [] });
    });
  }

  getShoppingCartPage(req, res) {
    const sql = 'SELECT * FROM users LIMIT ?';
    this.mysqlConfig.query(sql, [10], (err, results) => {
      err
        ? res.status(500).send('Lỗi truy xuất dữ liệu: ' + err.message)
        : res.render('shopping-cart', { users: results ? results : [] });
    });
  }
}

const index = new Index(mysqlInstance);
export default index;
