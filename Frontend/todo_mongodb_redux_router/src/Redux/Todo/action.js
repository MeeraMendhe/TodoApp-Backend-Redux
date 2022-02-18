import { ADD_TODO, DELETE, TOGGLE, UPDATE } from "./actionType";
import axios from "axios"
export const addTodo=(payload)=>({
    type:ADD_TODO,
    payload:payload
})

// export const toggleTodo=(payload)=>({
//     type:TOGGLE,
//     payload:payload
// })
// export const deleteTodo=(payload)=>({
//     type:DELETE,
//     payload:payload
// })
// export const updateTodo=(payload)=>({
//     type:UPDATE,
//     payload:payload
// })

export const getData=()=>(dispatch)=>{
   const request={
       method:"get",
       header:{
           "Content-Type":"application/json"
       },
       url:"http://localhost:1234/todo"
   }
   axios(request).then((res)=>{
       console.log(res)
       dispatch(addTodo(res.data))
   }).catch((e)=>{
       console.log(e)
   })
}

export const postData=(payload)=>(dispatch)=>{
    const request={
        method:"post",
        header:{
            "Content-Type":"application/json"
        },
        url:"http://localhost:1234/todo",
        data:payload
    }
    axios(request).then((res)=>{
        //console.log(res,"response")
        dispatch(getData())
    }).catch((e)=>{
        console.log(e)
    })
    dispatch(addTodo())
 }

 export const toggleTodo=(id)=>(dispatch)=>{
    const request={
        method:"patch",
        header:{
            "Content-Type":"application/json"
        },
        url:`http://localhost:1234/todo/toggle/${id}`,
    }
    axios(request).then((res)=>{
       // console.log(res)
        dispatch(getData())
    }).catch((e)=>{
        console.log(e)
    })
 }

 export const deleteTodo=(id)=>(dispatch)=>{
    const request={
        method:"delete",
        header:{
            "Content-Type":"application/json"
        },
        url:`http://localhost:1234/todo/${id}`,
    }
    axios(request).then((res)=>{
       // console.log(res)
        dispatch(getData())
    }).catch((e)=>{
        console.log(e)
    })
 }

 export const updateTodo=(payload)=>(dispatch)=>
 {
     console.log(payload)
    const request={
        method:"patch",
        header:{
            "Content-Type":"application/json"
        },
        url:`http://localhost:1234/todo/update/${payload.id}`,
        data:{
            title:payload.title
        }
    }
    axios(request).then((res)=>{
       // console.log(res)
        dispatch(getData())
    }).catch((e)=>{
        console.log(e)
    })
 }