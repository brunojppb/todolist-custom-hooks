import React, { useState, useRef, useEffect } from "react";
import { useTodos } from "../hooks/useTodos";
import { useClickAway } from "../hooks/useClickAway";
import CloseSvg from "../img/close";

export default function TodoItem({ id, text }) {
  const [isEditing, setEditing] = useState(false);
  const [editText, setEditText] = useState(text);
  const { updateTodo, deleteTodo } = useTodos();
  const itemRef = useRef(null);
  const inputRef = useRef(null);
  useClickAway(itemRef, () => {
    if (isEditing) {
      setEditing(false);
    }
  });

  const onChange = (e) => {
    setEditText(e.target.value);
  };

  const onUpdate = (e) => {
    if (e.key === "Enter") {
      if (editText.length === 0) {
        console.log("deleting...");
        deleteTodo(id);
      } else {
        console.log("updating...");
        updateTodo({ id, text: editText });
      }
      setEditing(false);
    }
  };

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const startEditing = (e) => {
    setEditing(true);
  };
  return (
    <div ref={itemRef} className="todo-item">
      {isEditing ? (
        <input
          value={editText}
          onChange={onChange}
          onKeyPress={onUpdate}
          ref={inputRef}
        />
      ) : (
        <div onClick={startEditing}>
          {text}
          <button className="delete-item" onClick={() => deleteTodo(id)}>
            <CloseSvg />
          </button>
        </div>
      )}
    </div>
  );
}
