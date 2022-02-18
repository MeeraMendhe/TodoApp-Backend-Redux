const express=require("express")
const todoController=require("./controllers/todo.controller")
const app=express();
app.use(express.json())
const cors = require('cors')

app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
)
app.use("/todo",todoController)
module.exports=app