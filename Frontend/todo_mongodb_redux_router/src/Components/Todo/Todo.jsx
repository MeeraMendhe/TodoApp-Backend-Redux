import React, { useEffect } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import styles from "./Todo.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../Redux/Todo/action'
const Todo = () => {
  let data=useSelector((state)=>state.todos.todo)
  const dispatch=useDispatch()
  useEffect(()=>{
     data=dispatch(getData())
  },[])
 
  console.log(data)
  return (
    <div className={styles.background}>
          <h1>Todo App</h1>
      <TodoInput/>
      {
        data?data.map((e)=>{
         return <TodoList key ={e._id} {...e}/>
        }):""
      }
    </div>
  )
}

export default Todo
