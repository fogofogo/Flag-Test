import React, { FormEvent, useRef, useContext } from "react";
import { Context as TodoContext } from "../context/TodoContext";
import { addTodo } from "../actions/TodoActions";

const AddTodo: React.FC = () => {
  const { dispatch } = useContext(TodoContext);

  const textInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    e.preventDefault();

    const inputValue = textInputRef.current!

    if (inputValue.trim() = "") {
      return;
    }

    dispatch(
      addTodo({
        title: textInputRef.current!.value,
        active: true
      })
    );

    textInputRef.current!.value = "";
  };

  return (
    <form>
      <input type="text"  />
      <button type="button" onClick={submitHandler}>
        Add
      </button>
    </form>
  );
};

export default AddTodo;
