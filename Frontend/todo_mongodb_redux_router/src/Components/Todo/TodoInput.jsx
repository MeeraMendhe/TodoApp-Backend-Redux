import React from 'react'
import { useState } from 'react'
import { addTodo, getData, postData } from '../../Redux/Todo/action'
import styles from "./Todo.module.css"
import {v4 as uuid} from "uuid"
import { useDispatch } from 'react-redux'
const TodoInput = () => {
    const [item,setItem]=useState("")
    const dispatch=useDispatch()
    const handleAdd=(e)=>{
        e.preventDefault();
        let payload={
            title:item,
        }
      dispatch(postData(payload))
      setItem("")
    }
  return (
    <div className={styles.margin}>
      <input onChange={(e)=>setItem(e.target.value)}  className={styles.in} type="text"/>
      <button onClick={handleAdd} className={styles.btn}>Add</button>
    </div>
  )
}

export default TodoInput
