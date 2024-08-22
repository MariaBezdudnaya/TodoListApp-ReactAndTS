import React, { useState } from 'react';
import TaskInput from '../TaskInput/TaskInput';
import TaskList from '../TaskList/TaskList';
import './ToDoList.css';

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

const ToDoList: React.FC = () => {
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
            <TaskInput inputValue={inputValue} setInputValue={setInputValue} addTask={addTask} />
            <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
        </div>
    );
}

export default ToDoList;