import React from 'react';

function TodoItem({ todo, index, onDelete, onToggleComplete }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(index)}
      />
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
        }}
      >
        {todo.task}
      </span>
      <button onClick={() => onDelete(index)}>Delete</button>
    </li>
  );
}

export default TodoItem;
