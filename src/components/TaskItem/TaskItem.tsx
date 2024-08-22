import React from 'react';
import './TaskItem.css';

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskItemProps {
    task: Task;
    toggleTask: (taskId: number) => void;
    deleteTask: (taskId: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTask, deleteTask }) => {
    return (
        <li className="task-item">
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
    )
};

export default TaskItem;