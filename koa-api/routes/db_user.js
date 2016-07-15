var Sequelize = require('sequelize');
var postgres = require('pg');

// Credentials to the db. Modify the .env file to connect to a different db
var sequalize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,

        pool: {
            max: 5,
            min: 0,
            idle: 10000
    }
});

// Connect to the db
sequalize.authenticate()
    .then( () => console.log('Connection has been established successfully.') )
    .catch( (err) => console.log('Unable to connect to the database:', err) );

// The model of the table we want to use
var User = sequalize.define('users', {
    user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'user_id'
    },
    username: {
        type: Sequelize.STRING,
        field: 'username'
    },
    email: {
        type: Sequelize.STRING,
        field: 'email'
    },
    first_name: {
        type: Sequelize.STRING,
        field: 'first_name'
    },
    last_name: {
        type: Sequelize.STRING,
        field: 'last_name'
    },
    profile_pic_url: {
        type: Sequelize.STRING,
        field: 'profile_pic_url'
    }
}, {
    freezeTableName: true,
    underscored: true
});

// Export the table model 
module.exports = User;