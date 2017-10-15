console.log("starting app");

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var userInfo = os.userInfo();

fs.appendFile('greetings.txt',`Hello ${userInfo.username} ! ${notes.age}`,(err)=>{
	if(err){
		console.log("We have error",err);
	}
});