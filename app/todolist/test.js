'use client';
import { useState } from 'react';

export default function Form() {
  const [TodoText, setTodoText] = useState('');
  const [TodoList, setTodoList] = useState([]);

  function handleTodoText(e) {
    setTodoText(e.target.value);
  }

  function handleSetTodoList() {
    setTodoList(TodoList.concat(TodoText));
    setTodoText('');
  }

  function handleDelTodoList(index) {
    setTodoList(TodoList.filter((item, i) => i !== index));
  }

  return (
    <>
      <h2>TodoList</h2>
      <label>
        <input
          value={TodoText}
          onChange={handleTodoText}
          style={{ backgroundColor: 'gray' }}
        />
        <button onClick={handleSetTodoList}>提交</button>
      </label>
      <ul>
        {TodoList.map((item, index) => {
          return (
            <li key={index} onClick={() => handleDelTodoList(index)}>
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}
