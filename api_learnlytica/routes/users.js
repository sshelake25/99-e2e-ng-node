var express = require('express');
var router = express.Router();

let dbConnection = require('./../db/db').localConnect();

/* GET users listing. */

//localhost:3000/user/--> GET
router.get('/', function (req, res, next) {
  dbConnection.query('select * from user_profile', (error, results, fields) => {
    if (error) throw error;
    res.send(results)
  });

});


//inset user profile

router.post('/create-user', function (req, res, next) {

  let {
    username,
    email,
    password,
    first_name,
    last_name,
    job_title,
    salary,
    create_datetime,
  } = req.body // destructing of object property 


  let insert_query = `INSERT INTO user_profile 
            (username, email, password, first_name, last_name, job_title, salary, create_datetime)
             VALUES ('${username}', '${email}', '${password}', '${first_name}', '${last_name}', '${job_title}', ${salary}, '${create_datetime}')`;

  dbConnection.query(insert_query, (error, result, fields) => {

    if (error) {
      res.send(error);
      throw error;
    } else {
      console.log(result);
      res.send('user profile added added sucesff');
    }

  });

});


router.post('/login-user', (req, res, next) => {
  let {
    username,
    password
  } = req.body; // destructing of object property 

  let userFound = `select * from user_profile  WHERE username = '${username}' and password= '${password}'`;

  dbConnection.query(userFound, (error, result, fields) => {

    if (error) {
      res.send(error);
    } else {
      if (result.length) {
        // res.send(`{message: 'user found', usercount: 1}`);
        res.json(result)
      } else {
        // res.send(`{message: 'user no found', usercount: 0}`);
        res.json({message: 'user no found', usercount: 0})
      }
    }

  });


});



//delete user //CRUD
router.delete('/delete-user/:userId', (req, res, next) => {
  let userId = req.params.userId;
  let deleletq = `DELETE FROM user_profile WHERE id = '${userId}'`;

  dbConnection.query(deleletq, (error, result, fields) => {
    if (error) {
      res.send(error);
      throw error;
    } else {
      console.log(result);
      if (result.affectedRows) {
        res.send(`${userId} has been delete`)
      } else {
        res.send(`Unable to delete user, Not Found`);
      }
    }
  });

});




//localhost:3000/user/--> POST
router.post('/contact', function (req, res, next) {

  console.log(req.body);

  res.send('I am post call');
  // dbConnection.query('select * from user_profile', (error, results, fields) => {
  //   if (error) throw error;
  //   res.send(results)
  // });
});

module.exports = router;
