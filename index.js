const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('CargoTransportation', '', '', {
    host: 'DESKTOP-13TBFL5\\SQLEXPRESS',
    dialect: 'mssql',
    dialectModule: require('tedious'),
    dialectOptions: {
        trustedConnection: true,
    }
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConnection();