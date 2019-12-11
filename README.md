# Node JS Express with MySQL APIs

## HOW CAN WE INSTALL THIS APPLICATION

Use this Command: ** $ git clone https://github.com/sanjayesfera/node-mysql-apis.git **
to your local system and download the entire project

If your application folder contains ** "node_modules" ** then no need to run command ** $ npm install **
else run the command $ npm install


## TO KILL BUSY PORT WHEN SOME EXISTING APPLICATION IS RUNNING AT 3000 PORT
 sudo kill -9 `sudo lsof -t -i:3000`


## Database Name
 nodemysql

## Database Tables

 CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=latin1
 

## HOW CAN WE RUN PROJECT

Run Application at your port (By default application will run at 3000 port as it is set in server.js)

 ** $ node server.js **

## Access API URL
  
 ###### POST localhost:3000/user ###### 
  Add User => Pass parameters in body (name, email) and set Content-Type: application/json in Header
  
 ###### GET localhost:3000/user ######  
  Get all Users
  
 ###### PUT localhost:3000/user ######  
  Update user => Pass parameters in body (name, email, user_id) and set Content-Type: application/json in Header
  
 ###### DELETE localhost:3000/user #####
  DELETE user => Pass parameters in body (user_id) and set Content-Type: application/json in Header
  
 ###### GET localhost:3000/user/<userID> ###### 
  GET Specific user detail
