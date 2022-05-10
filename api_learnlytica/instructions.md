
- In order to create container of express app
- express -> mysql db
- first mysql container should run
- express container should

$ npm install dotenv
+ dotenv@16.0.0
you add .env file at root of project and set required env varible 
dbconn.js 
  return mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        insecureAuth : true
    });

docker images -aq // only give image id

docker rmi -f $(docker images -aq)