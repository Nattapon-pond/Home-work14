import { useState } from "react"


function FromAddtodo(props) {
    const {hdlAdd} = props
    const [input, setInput] = useState('')
    const hdlSubmit = (e) =>{
        e.preventDefault()
        let newjob = {todo: input, Completed: false, user: 1}
        hdlAdd(newjob)
    }
  return (
    <from className="from-add-todo">
        <input value={input} onChange={e=>setInput(e.target.value)} />
        <button type="submil">Add</button>
       
    </from>
  )
}

export default FromAddtodo