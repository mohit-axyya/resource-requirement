import { useState } from "react";

const CrudToDoList = () => {
        const [todoList, setTodoList] = useState([]);
        const [newTask, setNewTask] = useState("");
      
        const handleTask = (event) => {
          setNewTask(event.target.value);
        }
      
        const handleTodoList = () => {
          const newTodoList = [...todoList , newTask]
          setTodoList(newTodoList);
        }
        const handleRemoveTask = () => {
        
        }
        return (
          <>
            <div className="App">
              <div>
                <input className='addTask' onChange={handleTask}/>
                <button onClick={handleTodoList}>Add Task</button>
                <button onClick={handleRemoveTask}>Remove Task</button>
              </div>
              <div className='list'>
                {todoList.map((task) => {
                  return <h2>{task}</h2>
                })}
              </div>
            </div>
        </>
    );
}

export default CrudToDoList;