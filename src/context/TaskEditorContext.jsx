import React, { createContext, useState, useContext } from 'react';

const TaskEditorContext = createContext();

export const useTaskEditor = () => useContext(TaskEditorContext);

export const TaskEditorProvider = ({ children }) => {
  const [isTaskEditorOpen, setTaskEditorOpen] = useState(false);
  const [editorMode, setEditorMode] = useState('create');
  const [editingTask, setEditingTask] = useState(null);

  const openTaskEditor = (mode = 'create', task = null) => {
    setEditorMode(mode);
    setEditingTask(task);
    setTaskEditorOpen(true);
  };

  
  const openTaskEditorForEdit = (task) => {
    openTaskEditor('edit', task);
  };

  const closeTaskEditor = () => {
    setTaskEditorOpen(false);
    setEditorMode('create');
    setEditingTask(null);
  };

  return (
    <TaskEditorContext.Provider
      value={{
        isTaskEditorOpen,
        openTaskEditor,
        openTaskEditorForEdit,
        closeTaskEditor,
        editorMode,
        editingTask,
      }}>
      {children}
    </TaskEditorContext.Provider>
  );
};
