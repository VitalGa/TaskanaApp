import React, { createContext, useState } from 'react';
import { generateId } from '../components/taskEditor/utils/generateId';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = ({ title, priority }) => {
    const now = new Date().toISOString();
    const newTask = {
      id: generateId(),
      title,
      priority,
      createdAt: now,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const editTask = (id, { updatedFields }) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, ...updatedFields, updatedAt: new Date().toISOString() } : task,
      ),
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
};
