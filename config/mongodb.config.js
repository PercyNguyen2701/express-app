import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

class MongoDBConfig {
  constructor() {
    if (!MongoDBConfig.instance) {
      // Kiểm tra biến môi trường, nếu undefined hãy log thông báo lỗi (cho mục đích debug)
      if (!process.env.MONGO_URI) {
        console.error('MONGO_URI không được định nghĩa trong .env');
      }

      this.uri = process.env.MONGO_URI;
      MongoDBConfig.instance = this;
    }
    return MongoDBConfig.instance;
  }

  connect() {
    return mongoose.connect(this.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

const mongoInstance = new MongoDBConfig();
export default mongoInstance;
