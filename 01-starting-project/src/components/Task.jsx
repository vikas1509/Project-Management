import React from 'react'
import NewTask from './NewTask'
function Task({onAdd,onDelete,tasks}) {
  return (
<section>
   
   
    <h2 className='text-2xl font-bold text-stone-700 mb-4'></h2>
    <NewTask onAdd={onAdd}/>
    {tasks.length === 0 && (
        <p className='text-stone-800 my-4'>
        This project does not have any tasks yet.
    </p>
    )}
    {tasks.length >0 && ( <ul className='p-4 mt-8 rounded-md bg-stone-100'>
        {tasks.map((task)=>(
            <li key={task.id} className='flex justify-between my-4' >
                <span>{task.text}</span>
                {console.log(task.text,"teask text")}
                <button onClick={()=>onDelete(task.id)} className='text-slate-700 hover:text-red-500'>clear</button>
            </li>
        ))}
    </ul>)}
   
</section>
  )
}

export default Task