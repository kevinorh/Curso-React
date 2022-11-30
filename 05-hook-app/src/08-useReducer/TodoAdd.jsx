import React from "react";
import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const { formState, onInputChange, onResetForm, newTodoInput } = useForm({
    newTodoInput: "",
  });

  // const {newTodoInput,} = formState ---------------------------------------!!!!!!!!!!!!!!!
  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoInput.trim().length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description: newTodoInput,
      done: false,
    };

    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        // DEBE TENER name para que funcione el custom Hook ------------------> !!!!!!!!!!!!!!
        name="newTodoInput"
        value={newTodoInput}
        onChange={onInputChange}
      />

      <button type="submit" className="btn btn-primary mt-2">
        Agregar
      </button>
    </form>
  );
};
