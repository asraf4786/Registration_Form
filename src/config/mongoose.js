const mongoose = require('mongoose');

const DB = 'mongodb+srv://asrafansari4786:asraf2001@cluster0.t8tpujz.mongodb.net/?retryWrites=true&w=majority';

//connecting mongoose with database
//I stored MONGODB_URI in my system veriable for security reason. veriable name MONGODB_URI followed by your mongo atlas link
//for local use you can write this code
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/csvUploader');

// mongoose.connect(DB, {
// 	useNewUrlParser: true,
// 	useCreateIndex:true,
//  	useUnifiedTopology: true,
// 	useFindAndModify:false
// }).then(() => {
// 	console.log('connection successful');
// }).catch((err) => console.log('no connection',err));


mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
	console.log('Connected to Database :: Mongodb');
});

module.exports = mongoose;
















// const mongoose=require('mongoose');
// //config the mongodb the web app
// //making a database in the mongodb db with name Registration Form

// mongoose.connect('mongodb://127.0.0.1/Registration_Form');

// const db = mongoose.connection;
 
// db.on('error',console.error.bind(console,'error in conectin the mongoDB'));
// db.once('open',function(){
//     console.log("successfully conected to the mongodb");
// })

// module.exports=db;