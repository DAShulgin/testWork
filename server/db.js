const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'node_postgres',
    password: 'root',
    port: 5432,
})

pool.connect();

module.exports = pool;