require('dotenv/config');

module.exports = {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    port: 3306,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    define: {
        underscored: true,
        underscoredAll: true,
    }
}