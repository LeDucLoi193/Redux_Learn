import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function TodoApp({ todos, addTodo, setTodo }) {
  const [text, setText] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((res) => {
      setTodo(res.data);
    })
  }, [setTodo]);

  return (
    <div>
      <input 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => {
        addTodo(text);
        setText('');
      }}>Add</button>
      <ul>
        { todos.map((todo) => <li key={todo.id}>{todo.title}</li>) }
      </ul>
    </div>
  );
}