const mysql = require('mysql');
const credentials = require('../credentials');

class Database {
    _host = '';
    _user = '';
    _password = '';
    _database = '';
    _connection = null;

    constructor() {
        this._host = credentials.db.host;
        this._user = credentials.db.user;
        this._password = credentials.db.password;
        this._database = credentials.db.database;
        this._connection = mysql.createConnection({
            host: this._host,
            user: this._user,
            password: this._password,
            database: this._database
        });

        this._connection.connect((error) => {
            if (error) throw error;
        });

    }
}

module.exports = Database;