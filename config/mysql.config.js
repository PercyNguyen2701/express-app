import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

class MySQLConfig {
  constructor() {
    if (!MySQLConfig.instance) {
      this.connection = mysql.createConnection({
        host: process.env.MYSQL_HOST, // Nên là địa chỉ từ Railway, không phải localhost
        port: process.env.MYSQL_PORT, // Cổng theo Railway (ví dụ: 6969)
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: true } : false,
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
