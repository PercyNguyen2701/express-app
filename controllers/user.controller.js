import User from '../models/user.model.js';

class UserController {
  // Tạo một user mới
  async createUser(req, res) {
    try {
      const { name, email } = req.body;
      // Sử dụng toán tử 3 ngôi để kiểm tra dữ liệu
      const validName = name ? name : 'Unknown';
      const validEmail = email ? email : 'no-email@example.com';

      const newUser = new User({ name: validName, email: validEmail });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Lấy danh sách các user
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new UserController();
