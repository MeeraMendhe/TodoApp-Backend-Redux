import {ADD_TODO, DELETE, TOGGLE, UPDATE } from "./actionType"
const initState={
    todo:[]
}
export const reducer=(state=initState,action)=>
{
   let {type, payload}=action

   switch(type){
       case ADD_TODO:{
           return{
               ...state,
               todo:payload
           }
       }
       case TOGGLE:{
           return{
            ...state,
            todo:state.todo.map((e)=>e.id==payload?{...e,status:!e.status}:e)
           }
       }
       case DELETE:{
             return{
              ...state,
              todo:state.todo.filter((e)=>e.id!==payload)
             }
       }
       case UPDATE:{
            return{
             ...state,
             todo:state.todo.map((e)=>e.id===payload.id?{...e,title:payload.title}:e)
            }
       }
       default:
           {
               return state
           }
   }
}