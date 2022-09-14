const http = require('http')
const app = require('./app')
const { connectToDb, sequelize } = require('./utils/db')


const server = http.createServer(app);

connectToDb();

sequelize.sync().then(() => {
  console.log('table created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});

server.listen(4000, () => { 
  console.log('Api Rest port 4000')
})