import React from 'react'
import { ITask } from '../../interfaces' 

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {  
  return (
    <li>
      <label onClick={() => { completeTask(task.taskName) }} className='checkbox'>
          <input type="radio" className='checkbox__input' /> 
          <span className='checkbox__body'></span> 
      </label>
      {task.taskName} | {task.deadline > 4 ? `${task.deadline} дней` : `${task.deadline} дня`}
    </li>
    
  )
}

export default TodoTask