const credentials = require('../credentials');

class Person {
  _first_name = "";
  _last_name = "";
  _address = "";
  _position = "";
  _salary = "";

  constructor(first_name, last_name, address, position, salary) {
    this._first_name = first_name;
    this._last_name = last_name;
    this._address = address;
    this._position = position;
    this._salary = salary;
  }

  getInsertQuery = () => `INSERT INTO ${credentials.db.table} (first_name, last_name, address, position, salary) VALUES ('${this._first_name}', '${this._last_name}', '${this._address}', '${this._position}', '${this._salary}')`;

  getAllPersonsQuery = () => `SELECT * FROM ${credentials.db.table}`;

  getPersonByIdQuery = (id) => `SELECT * FROM ${credentials.db.table} WHERE id = ${id}`;

  deletePersonQuery = (id) => `DELETE FROM ${credentials.db.table} WHERE id = ${id}`;

  updatePersonQuery = (id) => `UPDATE ${credentials.db.table} SET first_name = '${this._first_name}', last_name = '${this._last_name}', address = '${this._address}', position = '${this._position}', salary = '${this._salary}' WHERE id = ${id}`;
}

module.exports = Person;
