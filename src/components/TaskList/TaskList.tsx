import React, { useEffect } from 'react';
import TaskItem from '../TaskItem/TaskItem';
import './TaskList.css';

interface ITask {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskListProps {
    tasks: ITask[];
    toggleTask: (taskId: number) => void;
    deleteTask: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = React.memo(({ tasks, toggleTask, deleteTask }) => { // React.memo, чтобы предотвратить ререндеринг, если пропсы не изменились
    useEffect(() => {
        console.log('Компонент TaskList перерисован!')
    })

    return (
        <ul className="task-list">
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
            ))}
        </ul>
    )
});

export default TaskList;