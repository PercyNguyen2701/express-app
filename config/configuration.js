export default () => ({
  port: process.env.PORT,
  MYSQL_HOST: process.env.MYSQL_HOST,
  MYSQL_PORT: process.envMYSQL_PORT,
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
  MYSQL_DATABASE: process.env.MYSQL_DATABASE,
  MONGO_URI: process.env.MONGO_URI,
});
