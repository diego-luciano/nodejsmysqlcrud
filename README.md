# NODEJS + MYSQL CRUD

This is a CRUD made with NodeJS and MySQL

## Instructions & configurations  needed
- Run npm i command.
- Edit src/credentials.js file with your own configurations.
- Create a table in your database with the next parameters:
```
CREATE TABLE TABLE_NAME(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL,
    position VARCHAR(50) NOT NULL,
    salary VARCHAR(50) NOT NULL
)
```
PD: If you want to make changes in the sql code above, make sure to change the forms parameters inside src/views as well

## Author

* **Diego Luciano** - [diego-luciano](https://github.com/diego-luciano)
