const Sequelize = require('sequelize') 


const sequelize = new Sequelize(
  'api',
  'apiuser',
  'Api@user123', {
    host: 'localhost',
    port: 3307,
    dialect: 'mysql'
  }
)

const connectToDb = async () => {

  try{
    await sequelize.authenticate() 
    console.log('Connected to DDBB')
  }catch(error) {
    console.log('Fail to connecto to DDBB', error)
    return process.exit(1)
  }
  return null
}

module.exports = { connectToDb, sequelize}