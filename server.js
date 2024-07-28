const express = require("express")
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express();

const port = 3000;

// const connection = mongoose.connect('')
mongoose.connect('mongodb://localhost:27017/formData', { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("connected successfully...");

})
.catch((err)=>{
    console.log(err+"con't connect with it");
})
const formSchema = new mongoose.Schema({
    fname: String,
    mname: String,
    lname: String

})


const FormData = mongoose.model('FormData', formSchema);


// app.use(body_parser,body_parser.urlencoded({extended:true}))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
// app.use(express.json)

app.get('/',(req,res)=>{
    console.log("Request received for root route"+req.body);
    // res.send("erooeaer")
    res.sendFile(__dirname+'/public/next.html');
})



// const std1 = new FormData({
//     fname:"dhammadip",
//     mname:"santosh ",
//     lname:"mendhe"
// })
// std1.save();

app.post('/submit', (req, res) => {
    var nam = req.body.fname;

    res.send("this is happens"+nam)
    const newFormData = new FormData({
        fname: req.body.fname,
        mname: req.body.mname,
        lname: req.body.lname

    });

    // console.log(`data received is${lname},${fname},${mname}f`)
    newFormData.save()
    .then((data)=>{
                //     res.status(200).send('saving to database.');

        console.log(data)

    })
    .catch((err)=>{
            res.status(500).send('Error saving to database.');

    })
        
    });


// FormData.find()
// .then((data)=>{
// console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })



app.listen(port, () => {
    console.log("connected successfully with port...")
})