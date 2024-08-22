import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import './TaskList.css';

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskListProps {
    tasks: Task[];
    toggleTask: (taskId: number) => void;
    deleteTask: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTask, deleteTask }) => {
    return (
        <ul className="task-list">
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
            ))}
        </ul>
    )
};

export default TaskList;