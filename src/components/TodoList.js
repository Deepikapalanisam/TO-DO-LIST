import React from 'react';
import '../App.css';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.task}
          </span>
          <button onClick={() => deleteTodo(todo.id)} className="delete-button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
