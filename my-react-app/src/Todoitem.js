import React from 'react';
import './TodoList.css';

const TodoItem = ({ todo, onDelete }) => {
  return (
    <li className="todo-item">
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
