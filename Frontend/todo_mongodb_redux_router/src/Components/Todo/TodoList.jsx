import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleTodo, updateTodo } from '../../Redux/Todo/action'
import styles from "./Todo.module.css"
const TodoList = ({title, status, _id}) => {
    const [newTitle,setNewTitle]=useState("")
    const dispatch=useDispatch()
    let [flag, setFlag]=useState(false)
    const handleDelete=(id)=>
    {
      dispatch(deleteTodo(id))
    }
    const handleToggle=(id)=>
    {
        dispatch(toggleTodo(id))
    }
    const handleUpdate=()=>
    {
        let payload={
            id:_id,
            title:newTitle
        }
        dispatch(updateTodo(payload))
        setFlag(prev=>!prev)
        setNewTitle("")
    }
  return (
    <div>
        <h2>{title}</h2>
        <button onClick={()=>handleDelete(_id)} className={styles.btnT}>Delete</button>
        <button onClick={()=>handleToggle(_id)} className={styles.btnT}>{status?"Done":"Not Done"}</button>
        <button onClick={()=>setFlag(prev=>!prev)} className={styles.btnT}>Update</button>
        {flag?
        (
            <div >
                <input onChange={(e)=>setNewTitle(e.target.value)} className={styles.inT} type="text" placeholder="Change title" />
                <button onClick={handleUpdate} className={styles.btnT}>Change Title</button>
            </div>
        ):""
    }
    </div>
  )
}

export default TodoList
