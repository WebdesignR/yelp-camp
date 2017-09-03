"use strict";
const mongoose = require('mongoose');
const User = require('../../models/user');

//const sendMail = require('./sendMail');

//Register logic
//get register form
module.exports.getRegisterForm = (req, res, next) => {
	res.render("auh/register");
};

//compare username and email
module.exports.compare = (req, res, next) => {
	if(req.body.email) {
		User.findOne({email: req.body.email}, (err, user) => {
			if(err) {
				res.send(err.message);
				return;
			} if(!user) {
				res.send("success");
				return;
			} else {
				res.send("taken");
			}
			return;
		});
	} if(req.body.username) {
		User.findOne({username: req.body.username}, (err, user) => {
			if(err) {
				res.send(err.message);
				return;
			} if(!user) {
				res.send("success");
				return;
			} else {
				res.send("taken");
			}
			return;
		});
	}
};

//register a user
module.exports.register = (req, res, next) => {
	var user = new User();

}