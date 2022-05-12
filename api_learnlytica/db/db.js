var mysql = require('mysql');
require('dotenv').config();

// console.log(process.env)

let mysqlConnect = function () {
    return mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD, //should be yours 
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
        insecureAuth: true
    });
};


function createBaseTables() {
    let createTable = `create table if not exists ss_profile(
        id int primary key auto_increment,
        title varchar(255)not null,
        completed tinyint(1) not null default 0
    )`;

    mysqlConnect().query(createTable, (error, results, fields) => {
        if (error) throw error;
    });
}

function insetTableData() {
    let insetData = `INSERT INTO ss_profile (title, completed) VALUES ('ccc', '1'), ('dd', '2')`;

    mysqlConnect().query(insetData, (error, results, fields) => {
        if (error) throw error;
    });
}


createBaseTables();

insetTableData();


module.exports.localConnect = mysqlConnect;