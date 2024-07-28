const { json } = require("body-parser");

// const { response } = require("express");
console.log("hii")
    document.getElementById('formdata').addEventListener('submit',function(event){
    event.preventDefault();

    const fname = document.getElementById('fname').value
    const mname = document.getElementById('mname').value
    const lname = document.getElementById('lname').value

    fetch('/submit',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: new  json.stringify({
            fname:fname,
            mname:mname,
            lname:lname
        })
    })
    .then(response=>response.text())
    .then((data)=>{
        alert(data);
    })
.catch((err)=>{
    console.error(err);
})
});