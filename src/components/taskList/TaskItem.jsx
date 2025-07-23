import React from 'react';

const priorityColors = {
  1: '#B0B0B0', // низкий — серый
  2: '#007AFF', // средний — синий
  3: '#FF3B30', // высокий — красный
};

function TaskItem({ title, priority }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '8px',
      }}>
      <div
        style={{
          width: 16,
          height: 16,
          borderRadius: 4,
          background: priorityColors[priority] || '#B0B0B0',
          marginRight: 12,
        }}
      />
      <span>{title}</span>
    </div>
  );
}

export default TaskItem;
