import React, { FC, ChangeEvent, useState } from 'react';
import TodoTask from './components/TodoTask/TodoTask';
import { ITask } from './interfaces';
import './css/site.scss';
import Header from './components/Header/Header';
import { log } from 'console';

const App: FC = () => {
  
  const [task, setTask] = useState<string>("");
  const [numberTask, setNumberTask] = useState<number>(1);
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[ ]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value))
    }
  }

  const addTask = () : void => {
    const newTask = { taskName: task, deadline: deadline};
    setTodoList([...todoList, newTask]);
    setTask("")
    setDeadline(0)
    console.log(todoList);
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName != taskNameToDelete
    }))
  }

  return (
    <>
      <Header />
      <section className="section todolist">
        <div className="todolist__container container">
        <h2>Создать задачу</h2>
            <div className="todolist__items">
              <div className="todolist__inputs">
                <input 
                    className='input'
                    type="text" 
                    name="task" 
                    value={task}
                    placeholder='Описание задачи' 
                    onChange={handleChange}
                  />
                <input 
                    className='input'
                    type="number" 
                    name="deadline"
                    placeholder='Дедлайн' 
                    onChange={handleChange}
                  />
              </div>
              <div className="todolist__btn">
                <button className='button' onClick={addTask}>Добавить задачу</button>
              </div>
              <ul className="todolist__tasks text">
                {todoList.map((task: ITask, key: number) => {
                  return <TodoTask key={key} task={task} completeTask={completeTask} />
                })}
              </ul>
            </div>
        </div>
      </section>
    </>
  );
}

export default App