const { Pool } = require('pg')

require('dotenv').config()

const dbHost = process.env.DB_HOST
const dbUsername = process.env.DB_USERNAME
const dbPassword = process.env.DB_PASSWORD
const dbDatabase = process.env.DB_DATABASE
const dbPort = process.env.DB_PORT

const configDetails = {
    host: dbHost,
    user: dbUsername,
    password: dbPassword,
    database: dbDatabase,
    port: dbPort,
}

const pool = new Pool(configDetails)

module.exports = { pool }
