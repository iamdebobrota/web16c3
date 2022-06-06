const express=require("express");
const app=  express();
const fs=require('fs');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res)=>{
    fs.readFile("./db.json", "utf-8", (err, data)=>{
        res.send(JSON.parse(data));
    })
})
app.post("/user/create", (req, res)=>{
    fs.readFile("./db.json", "utf-8",(err, data)=>{
        const parsed= JSON.parse(data);
        parsed.user= [...parsed.user, req.body]

        fs.writeFile("./db.json", JSON.stringify(parsed), "utf-8",()=>{
            res.status(201).send("created successfull")
        })

    })
})







app.listen(8080, ()=>{
    console.log("server started on port 8080")
})



