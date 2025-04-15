import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

import indexRoutes from './routes/index.routes.js';
import userRoutes from './routes/user.routes.js';
import rectangleRoutes from './routes/rectangle.routes.js';

import MySQLConfig from './config/mysql.config.js';
import MongoDBConfig from './config/mongodb.config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Sử dụng các routes
app.use('/', indexRoutes);
app.use('/', userRoutes);
app.use('/', rectangleRoutes);

MySQLConfig.connect((err) => {
  err ? console.error('Lỗi kết nối MySQL:', err) : console.log('Kết nối MySQL thành công!');
});

MongoDBConfig.connect()
  .then(() => console.log('Kết nối MongoDB thành công!'))
  .catch((err) => console.error('Lỗi kết nối MongoDB:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server đang chạy ở cổng ${PORT}`);
});
