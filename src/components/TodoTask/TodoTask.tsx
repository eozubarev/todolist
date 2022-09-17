import React from 'react'
import { ITask } from '../../interfaces' 

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <li>
      {task.taskName} | {task.deadline > 4 ? `${task.deadline} дней` : `${task.deadline} дня`}
      <button onClick={() => { completeTask(task.taskName) }}>X</button>
    </li>
    
  )
}

export default TodoTask