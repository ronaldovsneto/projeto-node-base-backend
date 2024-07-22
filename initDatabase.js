import sequelize from './src/config/database.js';
import User from './src/models/user.js';

async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
    await User.sync({ alter: true });
    console.log('Tabela User sincronizada com sucesso.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export default initializeDatabase;