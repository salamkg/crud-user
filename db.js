import mysql from 'mysql2'
// import pg from 'pg';
// const { Pool } = pg;

const db = mysql.createConnection(({
    host: "localhost",
    user: "kyrman",
    password: "KyRmaN2022!",
    database: "nodejs"
}))

// const pool = new Pool({
//     host: "localhost",
//     port: 5432,
//     username: "root",
//     password: "root",
//     database: "postgres"
// })

export default db