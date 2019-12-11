var express = require("express");
var dbConn = require("./connection.js");
var User = require("./users.js");
 
const router = express.Router();

// get all users
router.get("/user", (req, res, next) => {
 
    dbConn.query(User.getAllUsers(), (err, data)=> { 
    // add static keyword before function declaration
        if(!err) {
            res.status(200).json({
                message:"Users listed.",
                data:data
            });
        }
    });    
});

// add user to database table
router.post("/user", (req, res, next) => {
 
    //read user information from request
    // no need to add static keyword before function
    let user = new User(req.body.name, req.body.email);
 
    dbConn.query(user.insertUser(), (err, data)=> {
        res.status(200).json({
            message:"User added",
            data: data
        });
    });
}); 


// delete user from database table
router.delete("/user", (req, res, next) => {
 
    //read user information from request
    var uid = req.body.user_id;
    // add static keyword before function declaration

    dbConn.query(User.deleteUserById(uid), (err, data)=> {
        res.status(200).json({
            message:"User deleted",
            data: data
        });
    });
}); 

// get specific user from table
router.get("/user/:userID", (req, res, next) => {
 
    //read user data from url query string
    let uid = req.params.userID;
    // add static keyword before function declaration
    
    dbConn.query(User.getUserById(uid), (err, data)=> {
        res.status(200).json({
            message:"User data",
            data: data
        });
    });
}); 

// update user data by id
router.put("/user", (req, res, next) => {
 
    //read product information from request
    // no need to add static keyword
    let user = new User(req.body.name, req.body.email);
    var user_id = req.body.user_id;
    
    dbConn.query(user.updateUser(user_id), (err, data)=> {
        res.status(200).json({
            message:"User data updated",
            data: data
        });
    });
});
 
module.exports = router;