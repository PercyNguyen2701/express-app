import mysql from 'mysql2';
import config from './configuration.js';

class MySQLConfig {
  constructor() {
    if (!MySQLConfig.instance) {
      this.connection = mysql.createConnection({
        host: config.MYSQL_HOST, // Nên là địa chỉ từ Railway, không phải localhost
        port: config.MYSQL_PORT, // Cổng theo Railway (ví dụ: 6969)
        user: config.MYSQL_USER,
        password: config.MYSQL_PASSWORD,
        database: config.MYSQL_DATABASE,
        ssl: config.NODE_ENV === 'production' ? { rejectUnauthorized: true } : false,
      });
      MySQLConfig.instance = this;
    }
    return MySQLConfig.instance;
  }

  connect(callback) {
    this.connection.connect((err) => {
      return callback(err ? err : null);
    });
  }

  query(sql, params, callback) {
    this.connection.query(
      sql,
      params,
      callback
        ? callback
        : (err, results) => {
            err ? console.error(err) : console.log(results);
          },
    );
  }
}

const mysqlInstance = new MySQLConfig();
export default mysqlInstance;
