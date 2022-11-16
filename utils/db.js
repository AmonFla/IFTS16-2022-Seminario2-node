const Sequelize = require('sequelize') 


const sequelize = new Sequelize(
  'api',
  'apiuser',
  'Api@user123', {
    host: 'localhost',
    port: 3308,
    dialect: 'mysql'
  }
)

const connectToDb = async () => {

  try{
    await sequelize.authenticate() 
    console.log('Connected to DDBB')
  }catch(error) {
    console.log('Fail to connect to DDBB', error)
    return process.exit(1)
  }
  return null
}

module.exports = { connectToDb, sequelize}