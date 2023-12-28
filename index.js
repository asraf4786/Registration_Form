const express = require('express');
const app = express();
let port = 3000;

const path = require('path');
const regCollection = require('./src/model/student');


const template_path = path.join(__dirname, './template/views');

app.set('view engine', 'hbs');
app.set('views',template_path);

const db = require('./src/config/mongoose');

app.get('/',(req,res) =>{
    res.render('index');
})

app.use(express.urlencoded({extended : false}));

app.post('/regdata',async (req,res) => {
    try {
        const password = req.body.password
    const cpassword = req.body.cpassword
    
    if(password === cpassword) {
        const regData = new regCollection({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            address : req.body.address,
            street : req.body.street,
            city : req.body.city,
            district : req.body.district,
            state : req.body.state,
            postal : req.body.postal,
            password : req.body.password,
            cpassword : req.body.cpassword

        })

        const postData = await regData.save();
        res.send(postData); 
    }
    else {
        res.send("Password are not matching....");
    }
        
    } catch (error) {
        res.send(error);
        
    }
})

// listen on port
app.listen(port, function (error) {
	if (error) {
		console.log(`Error in connecting to server: ${error}`);
		return;
	}
	console.log(`Server running on port: ${port}`);
});