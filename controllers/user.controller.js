import userServices from '../services/user.services.js';

export async function createUserController(req, res) {
  const response = await userServices.createUser(req, res);
  return response.data;
}

export async function getUsersController(req, res) {
  const response = await userServices.getUsers(req, res);
  return response.data;
}
