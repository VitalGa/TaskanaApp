import React, { createContext, useState } from 'react';
import { generateId } from '../components/taskEditor/utils/generateId';

export const TaskContext = createContext();

const initialTasks = [
  {
    id: '1',
    title: 'Подключение внешних сервисов или внутренних API для взаимодействия с серверной частью',
    priority: 3,
    createdAt: '2025-10-01T10:00:00.000Z',
    updatedAt: '2025-10-01T10:00:00.000Z',
  },
  {
    id: '2',
    title: 'Поиск и устранение ошибок',
    priority: 3,
    createdAt: '2025-10-01T11:30:00.000Z',
    updatedAt: '2025-10-02T09:15:00.000Z',
  },
  {
    id: '3',
    title: 'Добавление плавных анимаций и переходов для улучшения пользовательского опыта.',
    priority: 2,
    createdAt: '2025-09-30T14:20:00.000Z',
    updatedAt: '2025-09-30T14:20:00.000Z',
  },
  {
    id: '4',
    title: 'Написание комментариев и документации для облегчения поддержки и развития проекта.',
    priority: 1,
    createdAt: '2025-10-02T08:00:00.000Z',
    updatedAt: '2025-10-02T08:00:00.000Z',
  },
  {
    id: '5',
    title: 'Подключение внешних сервисов или внутренних API для взаимодействия с серверной частью',
    priority: 2,
    createdAt: '2025-09-29T16:45:00.000Z',
    updatedAt: '2025-10-01T12:30:00.000Z',
  },
];

export const TaskProvider = ({ children }) => {
  // Если нужно показать тестовые данные, то раскомментировать эту строку
  // const [tasks, setTasks] = useState(initialTasks);
  // Если нужно показать пустой список, то раскомментировать эту строку
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

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, editTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
