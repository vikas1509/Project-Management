import React,{useState} from 'react'

const NewTask = ({onAdd}) => {
    const [EnteredTask,setEnteredTask] = useState("");
    function handleChange(event){
        setEnteredTask(event.target.value);
    }
console.log(EnteredTask,"enteredTask")
    function handleClick(){
        onAdd(EnteredTask);
        setEnteredTask("");
    }
  return (
    <div className='flex  items-center gap-4'>
        <input type="text"  className='w-64 px-2 rounded-sm bg-stone-200'
        onChange={handleChange}
        value={EnteredTask}/>
        <button onClick={handleClick} className='text-slate-700 hover:text-stone-950'>Add Task</button>
    </div>
  )
}

export default NewTask