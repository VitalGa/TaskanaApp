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
      updatedAt: now,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const editTask = (id, { updatedFields }) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, ...updatedFields, updatedAt: new Date().toISOString() } : task,
      ),
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, editTask }}>{children}</TaskContext.Provider>
  );
};
