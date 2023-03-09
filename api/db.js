import mysql from 'mysql';

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"manan123",
    database:"blog"
});


