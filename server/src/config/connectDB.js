const { Sequelize } = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('test-db', 'user', 'pass', {
//   dialect: 'sqlite',
//   host: './sqliteTestDB/dev.sqlite'
// });


const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: config.dialect, 
  logging: false
});

const connectDB = async () => {
    // sequelize.sync().then(() =>  {
    //     console.log('sqlite db is ready') 
    // });

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
} 

//sequelize.close()

export default connectDB; 