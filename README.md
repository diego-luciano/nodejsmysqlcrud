# NODEJS + MYSQL CRUD

This is a CRUD made with NodeJS and MySQL

## Configurations & Instructions needed
1. - Run npm i command.
2. - Edit src/credentials.js file with your own configurations.
3. - Create a TABLE in your DATABASE with the next parameters:
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

## Authors

* **Diego Luciano** - *Initial work* - [diego-luciano](https://github.com/diego-luciano)
