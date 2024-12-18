import express from "express";

const router = express.Router();

router.post("/",(req,res)=>{
    try {
        let userData = req.body

        console.log("this is a register api");
        res.status(200).json({msg: "REgister"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

export default router 