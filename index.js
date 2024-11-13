const express= require("express")
const app = express();
const port = 9000;

app.use("/",(req,res)=>{
    res.json({message:"Hello World"});
})


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})