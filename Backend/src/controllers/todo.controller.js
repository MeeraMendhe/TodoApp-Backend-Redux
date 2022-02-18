const express=require("express");

const router=express.Router();
const Todo=require("../models/todo.model")
router.get("/",async(req,res)=>{
    try{
         const todos=await Todo.find({}).lean().exec();
         return res.status(200).send(todos)
    }
    catch(e)
    {
        return res.status(400).send("Bad request",e)
    }
})

router.post("/",async(req,res)=>{
    try{
         const todos=await Todo.create(req.body)
         return res.status(200).send(todos)
    }
    catch(e)
    {
        return res.status(400).send("Bad request",e)
    }
})

router.delete("/:id",async(req,res)=>{
    try{
         const todos=await Todo.findByIdAndDelete(req.params.id,{new:true})
         return res.status(200).send(todos)
    }
    catch(e)
    {
        return res.status(400).send("Bad request",e)
    }
})
router.patch("/toggle/:id",async(req,res)=>{
    let data=await Todo.findById(req.params.id)
    let flag=data.status
    if(flag==true)
    {
        try{
            const todos=await Todo.findByIdAndUpdate(req.params.id,{$set:{status:false}},{new:true})
            return res.status(200).send(todos)
       }
       catch(e)
       {
           return res.status(400).send("Bad request",e)
       }
    }
    else
    {
        try{
            const todos=await Todo.findByIdAndUpdate(req.params.id,{$set:{status:true}},{new:true})
            return res.status(200).send(todos)
       }
       catch(e)
       {
           return res.status(400).send("Bad request",e)
       }
    }
   
})
router.patch("/update/:id",async(req,res)=>{
    try{
         const todos=await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true})
         return res.status(200).send(todos)
    }
    catch(e)
    {
        return res.status(400).send("Bad request",e)
    }
})

// let result = await Post.updateOne({ _id: "someId" }, { 
//     $addToSet: {
//        arr: element
//     }
//  })
 
//  if(result.nModified === 0){
//     //0 means, no modifikation, that means its already liked
//     await Post.updateOne({ _id: "someId" }, {
//        $pull: {
//           arr: element
//        }
//     })
//  }
//  response.send("Done");

module.exports=router