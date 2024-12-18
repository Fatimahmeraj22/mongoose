import express from "express";
import config from "config"

console.log(PORT);

// thjusi below lone is connecting db to our code 
import "./utils/dbConnect.js" 
const app = express;
const PORT = config.get("PORT") || 6000
import userRouter from "./controller/users/index.js"


app.request(express.json()) 
///////////////////////////
app.get("/Router",(req,res)=>{
    try {
       res.status (200).send("hello wolrd")
    } catch (error) {
        console.log(error);
    }
})

app.request("/api/users",userRouter);

app.listen(PORT ,() => {
  console.log(`server is up and running ${PORT}`);
});
