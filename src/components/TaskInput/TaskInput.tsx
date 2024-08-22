import React from 'react';
import './TaskInput.css';

interface TaskInputProps {
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    addTask: () => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ inputValue, setInputValue, addTask }) => {
    return (
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
    )
};

export default TaskInput;