import React, { useState } from "react";
import { useTodos } from "../hooks/useTodos";
import TodoItem from "./TodoItem";
import { uuid } from "uuidv4";

export default function Todolist() {
  const { todos, addTodo } = useTodos();
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onEnter = (e) => {
    if (e.key === "Enter") {
      if (text.trim().length > 0) {
        addTodo({
          id: uuid(),
          text
        });
        setText("");
      }
    }
  };

  return (
    <div className="todo-list">
      <input
        placeholder="New todo goes here"
        value={text}
        onChange={onChange}
        onKeyPress={onEnter}
      />
      {todos.map((t) => (
        <TodoItem key={t.id} id={t.id} text={t.text} />
      ))}
    </div>
  );
}
