import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    collection: 'users', // chỉ định tên collection nếu muốn đảm bảo không bị thay đổi (mongoose thường tự động biến thể số nhiều, nhưng bạn có thể ép tên cụ thể)
  },
);

// Tạo model User từ schema đã định nghĩa
const User = mongoose.model('User', userSchema);

export default User;
