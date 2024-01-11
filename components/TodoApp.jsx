import { useEffect, useState } from "react"
import Dashboard from "./Dashboard"
import FromAddTodo from "./FromAddtodo"
import TodoContainer from "./TodoContainer"


function TodoApp() {
    const [data, setData] = useState()

    const [isLoading, setIsLoading] = useState(true)
    const [trigger, settrigger] = useState(false)
    const apiUrl = 'http://localhost:8000/todos'

    useEffect( ()=>{
        setIsLoading(true)
        fetch ('apiUrl').then(res=>res.json())
        .then(dat => {
            console.log(det)
            setData(dat)
            setIsLoading(false)
        })
    },[])

    const hdlAdd = (newjob) => {
        console.log("hdlAdd")
        fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(newjob)
        }).then(res => res.json()) 
            .then(rs =>{
                console.log(rs)

                setTrigger(prv=>!prv)
            })
        }
    }

    if(isLoading){
        return(<h1>Loading.....</h1>)
    }

  return (
    <div className="todo-app">
        <Dashboard  task={data.length}/>
        <FromAddTodo  hdlAdd={hdlAdd}/>
        <TodoContainer  todos={data}/>

    </div>
  )


export default TodoApp