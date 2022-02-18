import { DECREMENT_COUNT, INCREMENT_COUNT } from "./actionType"


let initState={
    count:0
}
export const reducer=(state=initState,action)=>{
   let {type, payload}=action
   switch(type){
       case INCREMENT_COUNT:{
           return{
               ...state,
               count:state.count+payload
           }
       }
       case DECREMENT_COUNT:{
        return{
            ...state,
            count:state.count+payload
        }
       }
       default:{
           return state
       }
   }
}