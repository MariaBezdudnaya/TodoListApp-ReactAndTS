import { useState } from 'react';

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

export default function ToDoList() {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [nextId, setNextId] = useState<number>(1);

    const addTask = () => {
        if (inputValue.trim()) {
            const newTask = {
                id: nextId,
                text: inputValue.trim(),
                completed: false,
            };

            setTasks([...tasks, newTask]);
            setInputValue('');
            setNextId(nextId + 1);
        }
    };

    const toggleTask = (taskId: number) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (taskId: number) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    return (
        <div>
            <h1 className="list-title">TODO List</h1>

            <div className="add-task-container">
                <div className="add-input">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Enter task..."
                        className="task-input"
                    />
                </div>

                <button className="button" onClick={addTask}>Add</button>
            </div>

            <ul className="task-list">
                {tasks.map(task => (
                    <li className="task-item" key={task.id}>
                        <div>
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleTask(task.id)}
                            />
                            <span className="checkmark"></span>
                        </label>
                        </div>
                        
                        <p className="task-text" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                            {task.text}
                        </p>
                        
                        <div>
                            <button className="button" onClick={() => deleteTask(task.id)}>
                                <i className="fas fa-trash-alt"></i>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
    
}