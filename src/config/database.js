
import { Sequelize } from 'sequelize';
import config from './config.js';

console.log(config);

const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, 
  {
    host: config.host,
    dialect: config.dialect,
    pool: { 
      max: 5, 
      min: 0, 
      acquire: 30000, 
      idle: 10000,
    },
  }
);

export default sequelize;