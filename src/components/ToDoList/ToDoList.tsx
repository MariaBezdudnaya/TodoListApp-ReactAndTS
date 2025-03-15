import React, { useState, useEffect, useCallback } from 'react';
import TaskInput from '../TaskInput/TaskInput';
import TaskList from '../TaskList/TaskList';
import './ToDoList.css';
import Collection from "a-local-database";

const myCollection = new Collection();

if (!myCollection.get<ITask[]>('tasks')) { // Проверка наличия списка задач
  myCollection.set({ tasks: [] }); // Если списка нет, создаем его и инициализируем пустым массивом
}

interface ITask {
  id: number;
  text: string;
  completed: boolean;
}

const ToDoList: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [nextId, setNextId] = useState<number>(1);

  
  useEffect(() => { // Загрузка списка задач
    const loadedTasks = myCollection.get<ITask[]>('tasks') || [];
    setTasks(loadedTasks);
  }, []);

  
  useEffect(() => { // Сохранение списка задач
    myCollection.set({ tasks: tasks });
  }, [tasks]);

  const addTask = useCallback(() => {
    if (inputValue.trim()) {
      const newTask = {
        id: nextId,
        text: inputValue.trim(),
        completed: false,
      };

      setTasks(prevTasks => [...prevTasks, newTask]);
      setInputValue('');
      setNextId(prevId => prevId + 1);
    }
  }, [inputValue, nextId]);

  const toggleTask = useCallback((taskId: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  const deleteTask = useCallback((taskId: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  }, []);

  return (
    <div>
      <h1 className="list-title">TODO List</h1>
      <TaskInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        addTask={addTask}
      />
      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default ToDoList;
