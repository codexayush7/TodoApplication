import React,{useState}from 'react';
import './style.css';


export default function App() {
    const [task,setTask] = useState("");
    const [tasks, setTasks] = useState([]);


    function addTask(){
        const newTask = task.trim();
        if (newTask === '') return;
        setTasks([...tasks, newTask]); // add to list
        setTask(''); // clear input
    }

    function deleteTask(index){
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    }
    return(
        <React.Fragment>
            <div className="todo-container">
                <h2>Todo-List-Application</h2>
                <input type="text" placeholder="Enter your task" onChange={(e) =>{ setTask(e.target.value)}} onKeyDown={(e) => e.key === 'Enter' && addTask()}/>
                <button onClick={addTask}>Add</button>
                <ul>
                    {tasks.map((task,index) => <li key={index}>{task} <button onClick={() => deleteTask(index)}>Delete</button></li>)}
                </ul>
            </div>
        </React.Fragment>
    );
}

