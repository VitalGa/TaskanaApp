import React, { createContext, useState, useContext } from 'react';

const TaskEditorContext = createContext();

export const useTaskEditor = () => useContext(TaskEditorContext);

export const TaskEditorProvider = ({ children }) => {
  const [isTaskEditorOpen, setTaskEditorOpen] = useState(false);

  const openTaskEditor = () => setTaskEditorOpen(true);
  const closeTaskEditor = () => setTaskEditorOpen(false);

  return (
    <TaskEditorContext.Provider value={{ isTaskEditorOpen, openTaskEditor, closeTaskEditor }}>
      {children}
    </TaskEditorContext.Provider>
  );
};