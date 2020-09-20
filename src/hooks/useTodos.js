import React, { useState, useCallback, createContext, useContext } from "react";

const TodosContext = createContext(null);

export default function TodosProvider({ children }) {
  const [todos, setTodos] = useState([]);

  console.log("rendering Context");
  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
}

export function useTodos() {
  const { todos, setTodos } = useContext(TodosContext);

  const addTodo = useCallback(
    (newTodo) => {
      setTodos((existing) => [...existing, newTodo]);
    },
    [setTodos]
  );

  const updateTodo = useCallback(
    (updatedTodo) => {
      setTodos((existing) => {
        return existing.map((todo) => {
          if (todo.id === updatedTodo.id) {
            return updatedTodo;
          }
          return todo;
        });
      });
    },
    [setTodos]
  );

  const deleteTodo = useCallback(
    (todoId) => {
      setTodos((existing) => {
        return existing.filter((todo) => todo.id !== todoId);
      });
    },
    [setTodos]
  );

  return {
    todos,
    addTodo,
    updateTodo,
    deleteTodo
  };
}
