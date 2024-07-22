import dotenv from 'dotenv';
dotenv.config();

const config = {
  development: {
    port: process.env.PORT,
    jwtSecret: process.env.JWT_SECRET,
    saltRound: parseInt(process.env.SALT_ROUND),
    username: process.env.DB_DEV_USER,
    password: process.env.DB_DEV_PASSWORD,
    database: process.env.DB_DEV_NAME,
    host: process.env.DB_DEV_HOST,
    dialect: process.env.DB_DEV_DIALECT,
  },
  test: {
    port: process.env.PORT,
    jwtSecret: process.env.JWT_SECRET,
    saltRound: parseInt(process.env.SALT_ROUND),
    username: process.env.DB_TST_USER,
    password: process.env.DB_TST_PASSWORD,
    database: process.env.DB_TST_NAME,
    host: process.env.DB_TST_HOST,
    dialect: process.env.DB_TST_DIALECT,
  },
  production: {
    port: process.env.PORT,
    jwtSecret: process.env.JWT_SECRET,
    saltRound: parseInt(process.env.SALT_ROUND),
    username: process.env.DB_PRD_USER,
    password: process.env.DB_PRD_PASSWORD,
    database: process.env.DB_PRD_NAME,
    host: process.env.DB_PRD_HOST,
    dialect: process.env.DB_PRD_DIALECT,
  },
};

const env = process.env.NODE_ENV || 'development';
export default config[env];