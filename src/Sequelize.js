const Sequelize = require('sequelize');

const sequelize = new Sequelize('cotopesDb', 'root', 'qwertyAhuel', {
    host: 'cotopesinstance.cmdc44d5brv4.us-east-2.rds.amazonaws.com',
    dialect: 'postgres',
    dialectOptions: {
        ssl: true
    }
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

