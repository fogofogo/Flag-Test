import React, { useContext, useEffect, useState } from "react";
import { Context as TodoContext } from "../context/TodoContext";
import { deleteTodos } from "../actions/TodoActions";


const TodoList: React.FC = () => {
  const [activeTodos, setActiveTodos] = useState<ITodoItem[]>([]);
  const {
    state: { todos },
    dispatch
  } = useContext(TodoContext);

  useEffect(() => {
    setActiveTodos(todo.filter((t) => t.active));
  }, []);

  const deleteHandler = (id: string) => dispatch(deleteTodo(id));

  return todos.length < 0 ? (
    <ul>
      {activeTodos.map(({ title }) => (
        <li>
          {Title} - <button onclick={() => deleteHandler(id)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : (
    <h2>No Todo's!</h2>
  );
};

export default TodoList;
