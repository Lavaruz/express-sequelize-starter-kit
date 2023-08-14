# express-sequelize-starter-kit
Express Sequelize Starter kit is express js framework and boilerplat where integrate with Sequelize ORM mysql, which contains the different features, those are helps the developer to start web api development easily. Developer can easily code, test, documented the api during the development process. It also have good architecture, which helps the developer to maintain the code.

## Installation

Installation process is easy, you can only download or clone application from git

1. clone from git `git clone https://github.com/Lavaruz/express-sequelize-starter-kit.git`
2. then go to express-sequelize-starter-kit by `cd express-sequelize-starter-kit`
3. Install all the packages `npm install`
4. run command `node server.js`
 
## developer must have knowledge about

1. Node.js
2. express.js
4. Sequelize
5. Mysql
6. ES6 and ES5
7. Express Router
8. Dotenv
9. EJS

## Usage and instructions
I have use config.json for setup the environment variable for sequelize primary configuration:

For database configuration, I have provide the info at /config/dbConfig.json file to use sequelize(mysql orm) for this project.

```json
{
  "development": {
    "username": "root",
    "password": "181001",
    "database": "sakila",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
**Database configuration:**

      username = (mysql username)
      password = (mysql password)
      database = (name of database to be used)
      host = (mysql hosting server, e.g: localhost or server location)
      dialect = (dialect of database: mysql)
